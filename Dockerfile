# Multi-stage Dockerfile for JHipster application
FROM eclipse-temurin:17-jdk-jammy as builder

WORKDIR /app

# Copy Maven wrapper and pom.xml
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
COPY sonar-project.properties ./

# Make mvnw executable
RUN chmod +x mvnw

# Copy source code
COPY src ./src

# Build the application (Maven will download dependencies automatically)
# Skip npm/frontend build as we're building a backend-only Docker image
RUN ./mvnw clean package -DskipTests -Dskip.npm -Dskip.installnodenpm -B

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

