const { join } = require('path')
const allure = require('allure-commandline')
const video = require('wdio-video-reporter')

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
    },
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }],
        [video, {
            saveAllVideos: true,       // If true, also saves videos for successful test cases
            videoSlowdownMultiplier: 50, // Higher to get slower videos, lower for faster videos [Value 1-100]
        }]
    ],
    onComplete: function () {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    afterStep: async function (step, scenario, { error, duration, passed }, context) {
        await driver.takeScreenshot();
    }
}