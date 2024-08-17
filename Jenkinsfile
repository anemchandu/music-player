pipeline {
    agent any
    
    environment{
        SONAR_HOME = tool "Sonar Scanner"
    }

    stages {
        stage('Fetching Code from Github') {
            steps {
                echo 'Pullinig Code from Github'
                git url: "https://github.com/Mani10101/music-player.git", branch: "master"
            }
        }
        
        stage("Sonar Analysis"){
            steps{
                echo "Sonar Analysis"
                withSonarQubeEnv("Sonar Server"){
                    sh "$SONAR_HOME/bin/sonar-scanner -Dsonar.projectName=music-player -Dsonar.projectKey=music-player"
                }
            }
        }
        
        stage('Quality Check') {
            steps {
                script {
                    waitForQualityGate abortPipeline: false, credentialsId: 'Sonar-token' 
                }
            }
        }
        
        stage ("Build Docker Image"){
            steps{
                echo 'Building Docker Image'
                sh "docker build -t music-playlist ."
            }
        }
        stage("Push Docker Image to Dockerhub"){
            steps{
                echo "Pushing Docker image to Dockerhub"
                withCredentials([usernamePassword(credentialsId: "Docker-Cred", usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                sh 'docker tag music-playlist ${DOCKERHUB_USERNAME}/music-playlist:${BUILD_NUMBER}'
                sh 'docker login -u ${DOCKERHUB_USERNAME} -p ${DOCKERHUB_PASSWORD}'
                sh 'docker push ${DOCKERHUB_USERNAME}/music-playlist:${BUILD_NUMBER}'
                }
            }
        }
        
        stage('Update Deployment File') {
        environment {
            GIT_REPO_NAME = "music-player"
            GIT_USER_NAME = "Mani10101"
            DOCKER_IMAGE = "manikanta101/music-playlist"
        }
        steps {
            withCredentials([string(credentialsId: 'github', variable: 'GITHUB_TOKEN')]) {
                sh '''
                    git config user.email "manikantanallamilli1234@gmail.com"
                    git config user.name "Mani10101"
                    BUILD_NUMBER=${BUILD_NUMBER}
                    sed -i "s/manikanta101/music-playlist/${DOCKER_IMAGE}/g" kuberentes/deployment.yml
                    git add kuberentes/deployment.yml
                    git commit -m "Update deployment image to version ${BUILD_NUMBER}"
                    git push https://${GITHUB_TOKEN}@github.com/${GIT_USER_NAME}/${GIT_REPO_NAME} HEAD:master
                '''
            }
        }
    }
    }
}