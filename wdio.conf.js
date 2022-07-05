const { join } = require('path')

exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/*.spec.js'
    ],
    maxInstances: 1,
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "platformVersion": "11.0",
        "deviceName": "sdk_gphone_x86",
        "automationName": "UiAutomator2",
        "app": join(process.cwd(), './app/android/wcandroid-7.3.1.apk'),
        "appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity'
    }],
    waitForTimeout: 20000,
    mochaOpts: {
        timeout: 300000
    }
}