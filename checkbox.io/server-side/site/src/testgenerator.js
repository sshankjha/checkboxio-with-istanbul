// Core/NPM Modules
const fs = require("fs");
const constraints = require('./constraint');

/**
 * Generate test cases based on the global object functionConstraints.
 * @param {String} filepath            Path to write test file.
 */
function generateTestCases(filepath) {

    // Content string. This will be built up to generate the full text of the test string.
    //let content = `let subject = require('${filepath}')\nlet mock = require('mock-fs');\n`;
    let initialStatements = `let request = require('request');\n\n`;

    let content = initialStatements + constraints(filepath);

    // Write final content string to file test.js.
    fs.writeFileSync('integrationtest.js', content, "utf8");

}

// Export
module.exports = generateTestCases;