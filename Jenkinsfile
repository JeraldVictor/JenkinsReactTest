pipeline {
  agent any
  stages {
    // stage('Git Clone') {
    //     steps {
    //         sh 'git clone https://github.com/JeraldVictor/JenkinsReactTest .'
    //     }
    // }
    stage('version test') {
      steps {
        sh 'node -v'
        sh 'npm -v'
      }
    }
    stage('Test Cases') {
      steps {
        sh 'npm install --silent'
        sh 'npm test'
      }
    }
  }
}
