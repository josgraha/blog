#!/bin/env node

require("dotenv").config();
const fs = require("fs");
const path = require("path");

const amplifyConfigDir = "amplify";

const last = arr => arr[arr.length - 1];

const configFilePath = filename => path.join(appRoot, amplifyConfigDir, filename);

const checkFileExists = filename => {
  return fs.existsSync(configFilePath(filename));
};

const appRoot = process.cwd();
const configFilename = "team-provider-info.json";

const amplifyEnv = process.env.AMPLIFY_env;
const keyPrefix = `AMPLIFY_${amplifyEnv}_`;
const amplifyKeys = Object.keys(process.env).filter(key =>
  key.startsWith(keyPrefix)
);
const awsCloudFormation = amplifyKeys.reduce((config, key) => {
  const configEntry = last(key.split(keyPrefix));
  config[configEntry] = process.env[key];
  return config;
}, {});

const config = {
  [amplifyEnv]: {
    awsCloudFormation
  }
};

const configJSON = JSON.stringify(config, null, 2);
const fileExists = checkFileExists(configFilename);

if (fileExists) {
  console.log(`DONE: ${amplifyConfigDir}${path.sep}${configFilename} already exists`);
  return 0;
}

const filePath = configFilePath(configFilename);
fs.writeFileSync(filePath, configJSON);
