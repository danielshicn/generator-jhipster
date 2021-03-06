module.exports = {
    app: {
        default: true,
        desc: 'Create a new JHipster application based on the selected options'
    },
    aws: {
        desc: 'Deploy the current application to Amazon Web Services'
    },
    'aws-containers': {
        desc: 'Deploy the current application to Amazon Web Services using ECS'
    },
    'ci-cd': {
        desc: 'Create pipeline scripts for popular Continuous Integration/Continuous Deployment tools'
    },
    client: {
        desc: 'Create a new JHipster client-side application based on the selected options'
    },
    cloudfoundry: {
        desc: 'Generate a `deploy/cloudfoundry` folder with a specific manifest.yml to deploy to Cloud Foundry'
    },
    'docker-compose': {
        desc: 'Create all required Docker deployment configuration for the selected applications'
    },
    entity: {
        argument: ['name'],
        desc: 'Create a new JHipster entity: JPA entity, Spring server-side components and Angular client-side components'
    },
    'export-jdl': {
        argument: ['jdlFile'],
        desc: 'Create a JDL file from the existing entities'
    },
    gae: {
        desc: 'Deploy the current application to Google App Engine'
    },
    heroku: {
        desc: 'Deploy the current application to Heroku'
    },
    'import-jdl': {
        argument: ['jdlFiles...'],
        desc: 'Create entities from the JDL file passed in argument'
    },
    info: {
        desc: 'Display information about your current project and system'
    },
    kubernetes: {
        desc: 'Deploy the current application to Kubernetes'
    },
    languages: {
        argument: ['languages...'],
        desc: 'Select languages from a list of available languages. The i18n files will be copied to the /webapp/i18n folder'
    },
    // login: {
    //     desc: 'Link the installed JHipster CLI to your JHipster Online account'
    // },
    // logout: {
    //     desc: 'Unlink the installed JHipster CLI from your JHipster Online account'
    // },
    openshift: {
        desc: 'Deploy the current application to OpenShift'
    },
    'rancher-compose': {
        desc: 'Deploy the current application to Rancher'
    },
    server: {
        desc: 'Create a new JHipster server-side application'
    },
    'spring-service': {
        alias: 'service',
        argument: ['name'],
        desc: 'Create a new Spring service bean'
    },
    'spring-controller': {
        argument: ['name'],
        desc: 'Create a new Spring controller'
    },
    upgrade: {
        desc: 'Upgrade the JHipster version, and upgrade the generated application'
    }
};
