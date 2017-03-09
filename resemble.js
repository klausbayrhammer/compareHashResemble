const resemble = require('node-resemble-js');
const fs = require('fs');

module.exports = function compareImage (referencePath, testPath) {
    return new Promise(function (resolve, reject) {
        if (!fs.existsSync(referencePath)) {
            reject('Reference image not found: ' + referencePath);
        }

        if (!fs.existsSync(testPath)) {
            reject('Test image not found: ' + testPath);
        }

        resemble(referencePath).compareTo(testPath)
            .onComplete(function (data) {
                console.log(data);
                resolve(data);
            });
    });
};