# Multi-stage Dockerfile for JHipster application
FROM eclipse-temurin:17-jdk-jammy as builder

WORKDIR /app

# Copy Maven wrapper and pom.xml
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
COPY sonar-project.properties ./

# Make mvnw executable
RUN chmod +x mvnw

# Copy frontend build files (needed for npm build)
COPY package.json package-lock.json ./
COPY angular.json tsconfig.json tsconfig.app.json ./
COPY ngsw-config.json ./
COPY webpack ./webpack

# Copy source code
COPY src ./src

# Build the application with frontend (webapp profile builds frontend, prod is for Spring Boot)
RUN ./mvnw clean package -DskipTests -Pprod,webapp -B

# Runtime stage
FROM eclipse-temurin:17-jre-jammy

WORKDIR /app

# Install curl for healthcheck
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Create a non-root user
RUN groupadd -r appuser && useradd -r -g appuser appuser

# Copy the built JAR from builder stage
COPY --from=builder /app/target/*.jar app.jar

# Change ownership
RUN chown -R appuser:appuser /app

# Switch to non-root user
USER appuser

# Expose port
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD curl -f http://localhost:8080/management/health || exit 1

# Run the application
ENTRYPOINT ["java", \
  "-jar", \
  "app.jar"]

