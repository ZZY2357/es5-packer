const UglifyJS = require('uglify-js');

const fs = require('fs');

function mergeFiles(filesPath) {
    let code = '';
    for (let i = 0; i < filesPath.length; i++) {
        code += fs.readFileSync(filesPath[i], 'utf-8');
    }
    return code;
}

function minify(code) {
    let result = UglifyJS.minify(code);
    if (result.error) {
        console.error(result.error);
        return;
    }
    return result.code;
}

module.exports = {
    mergeFiles,
    minify
};
