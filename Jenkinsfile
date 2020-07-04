#!groovy
import groovy.json.JsonSlurperClassic
node {
    // -------------------------------------------------------------------------
    // Check out code from source control.
    // -------------------------------------------------------------------------
    stage('checkout source') {
        checkout scm
    }
  
    stage('Installing Dependacies') {
      rc = command "npm install"
      if (rc != 0) {
        error 'Dependencies installation failed.'
      }      
    }
    stage('Generate Build') {
      rc = command "npm run ng -- build"
      if (rc != 0) {
        error 'Build generation failed.'
      }      
    }

    stage('Deploying to firebase') {
      rc = command "npm run firebase deploy"
      if (rc != 0) {
        error 'Deployment failed.'
      }      
    }
           
}



def command(script) {
    if (isUnix()) {
        return sh(returnStatus: true, script: script);
    } else {
        return bat(returnStatus: true, script: script);
    }
}
