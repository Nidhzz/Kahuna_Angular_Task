#!groovy
import groovy.json.JsonSlurperClassic
node {
    // -------------------------------------------------------------------------
    // Check out code from source control.
    // -------------------------------------------------------------------------
    stage('checkout source') {
        checkout scm
    }
    



def command(script) {
    if (isUnix()) {
        return sh(returnStatus: true, script: script);
    } else {
        return bat(returnStatus: true, script: script);
    }
}
