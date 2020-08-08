#!/usr/bin/env node
const { Command } = require('commander');

const config = require('./config');
const jsPacker = require('./js-packer');

let program = new Command();

program.option(
    '-c, --config <file>',
    'Use config file',
    'es5-packer.config.js'
);

program.parse(process.argv); // 解析参数

jsPacker.pack(config.readConfig(program.config));
