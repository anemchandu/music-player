pipeline {
    agent any
    
    environment{
        SONAR_HOME = tool "Sonar"
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
                echo "Sonar scanner"
                withSonarQubeEnv("Sonar scanner"){
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
                withCredentials([usernamePassword(credentialsId: "Dockerhub", usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                sh 'docker tag music-playlist ${DOCKERHUB_USERNAME}/music-playlist:${BUILD_NUMBER}'
                sh 'docker login -u ${DOCKERHUB_USERNAME} -p ${DOCKERHUB_PASSWORD}'
                sh 'docker push ${DOCKERHUB_USERNAME}/music-playlist:${BUILD_NUMBER}'
                }
            }
        }
        
        stage('Update Deployment File') {
        environment {
            GIT_REPO_NAME = "music-player"
            GIT_USER_NAME = "anemchandu"

          
        }
        steps {
            withCredentials([string(credentialsId: 'Github', variable: 'github-token')]) {
                sh '''
                    git config user.email "21p35a0370@acet.ac.in"
                    git config user.name "anemchandu"
                    BUILD_NUMBER=${BUILD_NUMBER}
                    sed -i "s/latest/${BUILD_NUMBER}/g" kuberentes/deployement.yaml
                    git add kuberentes/deployement.yaml
                    git commit -m "Update deployment image to version ${BUILD_NUMBER}"
                    git push https://${github-token}@github.com/${GIT_USER_NAME}/${GIT_REPO_NAME} HEAD:master
                '''
            }
        }
    }
    }
}
