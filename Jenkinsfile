pipeline {
  agent any
  stages {
    stage('Git Clone') {
        steps {
            sh 'git clone https://github.com/JeraldVictor/JenkinsTest .'
        }
    }
    stage('version test') {
      steps {
        sh 'node -v'
        sh 'npm -v'
      }
    }
    stage('Test Cases') {
      steps {
        sh 'npm install'
        sh 'npm test -- --noStackTrace --silent --collect-coverage --json --outputFile=testReport.json -u'
      }
    }

  }
}
