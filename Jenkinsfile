pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'emicora/bugtracker'  
        DOCKER_TAG = "${env.BUILD_NUMBER}"
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                sh 'chmod +x mvnw'
                sh './mvnw clean package -DskipTests -Dskip.npm -Dskip.installnodenpm -B'
            }
        }
        
        stage('Test') {
            steps {
                sh './mvnw test -Dskip.npm -Dskip.installnodenpm'
            }
            post {
                always {
                    junit 'target/surefire-reports/**/*.xml'
                }
            }
        }
        
        stage('Package') {
            steps {
                sh './mvnw -ntp -Pprod clean package -DskipTests -Dskip.npm -Dskip.installnodenpm'
            }
        }
        
        stage('Publish Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', passwordVariable: 'DOCKER_REGISTRY_PWD', usernameVariable: 'DOCKER_REGISTRY_USER')]) {
                    sh "./mvnw -ntp jib:build -Djib.to.image=${DOCKER_IMAGE}:${DOCKER_TAG} -Djib.to.tags=latest,${DOCKER_TAG}"
                }
            }
        }
    }
    
    post {
        success {
            echo "✅ Pipeline completed successfully! Image: ${DOCKER_IMAGE}:${DOCKER_TAG}"
        }
        failure {
            echo "❌ Pipeline failed!"
        }
        always {
            // Limpiar workspace con manejo de errores
            script {
                try {
                    cleanWs()
                } catch (Exception e) {
                    echo "⚠️  No se pudo limpiar el workspace: ${e.message}"
                }
            }
        }
    }
}