pipeline {
  agent any
  stages {
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
