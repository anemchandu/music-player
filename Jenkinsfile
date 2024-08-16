pipeline {
    agent any

    stages {
        stage('Fetching Code from Github') {
            steps {
                echo 'Pullinig Code from Github'
                git url: "https://github.com/Mani10101/music-player.git", branch: "master"
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
                sh 'docker tag music-playlist ${DOCKERHUB_USERNAME}/music-playlist:latest'
                sh 'docker login -u ${DOCKERHUB_USERNAME} -p ${DOCKERHUB_PASSWORD}'
                sh 'docker push ${DOCKERHUB_USERNAME}/music-playlist:latest'
                }
            }
        }
    }
}

