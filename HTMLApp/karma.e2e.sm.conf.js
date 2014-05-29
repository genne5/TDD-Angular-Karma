// Karma configuration
// Generated on Tue May 20 2014 18:51:03 GMT+0200 (W. Europe Daylight Time)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['ng-scenario'],

        // list of files / patterns to load in the browser
        files: [
            'Scripts/jquery-2.1.0.js',
            'Tests/e2e/**/*.e2e.sm.js'
        ],

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        //browsers: ['Chrome'],
        //browsers: ['PhantomJS'],
        //browsers: ['Chrome', 'c:/test.bat'],
        browsers: ['cli'],

        customLaunchers: {
            'cli': {
                base: 'PhantomJS',
                options: {
                    // Google Nexus 7 (landscape mode)
                    viewportSize: { width: 1280, height: 800 }
                }
            }
        },

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        urlRoot: '/_karma_/',

        proxies: {
            '/': 'http://localhost:8080/'
        }
    });
};
