const path = require('path');

function readConfig(filePath) {
    let config = require(path.resolve(filePath));

    if (config.js.srcDir) {
        config.js.srcDir = path.resolve(config.basePath, config.js.srcDir);
    }
    if (config.js.files) {
        for (let i = 0; i < config.js.files.length; i++) {
            config.js.files[i] = path.resolve(config.js.srcDir, config.js.files[i]);
        }
    }
    if (config.js.dist) {
        config.js.dist = path.resolve(config.basePath, config.js.dist);
    }

    return config;
}

module.exports = {
    readConfig
};
