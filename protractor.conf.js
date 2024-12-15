exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub', // Cambia ::1 a 127.0.0.1
    specs: ['spec.js'],
    capabilities: {
        browserName: 'chrome'
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};