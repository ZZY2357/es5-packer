const fs = require('fs');

const code = require('./code');

function pack(config) {
    let result = code.minify(code.mergeFiles(config.js.files));

    fs.writeFile(config.js.dist, result, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
}

module.exports.pack = pack;
