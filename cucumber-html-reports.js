const report = require('multiple-cucumber-html-reporter')

report.generate({
    jsonDir:"cypress/cucumber-json",
    reportPath:"./reports/cucumber-html-report.html",
    metadata:{
        browser:{
            name:"chrome",
            version:"120"
        },
        device:"Local Machine",
        platform:{
            name:"windows",
            version:"10"
        }
    }
})