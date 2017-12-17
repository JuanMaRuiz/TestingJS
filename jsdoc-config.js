'use strict';

module.exports = {
  plugins: [],
  recurseDepth: 20,
  source: {
    include: [
      'web-layer/scripts'
    ],
    exclude: [
      'examples',
      'node_modules',
      'web-layer/node-modules'
    ],
    includePattern: ".+\\.js?$",
    excludePattern: "(^|\\/|\\\\)_"
  },
  tags: {
    allowUnknownTags: true,
    dictionaries: ["jsdoc"]
  },
  templates: {
    cleverLinks: false,
    monospaceLinks: false
  },
  opts: {
    encoding: "utf8",                 // same as -e utf8
    destination: "./documentation/", // same as -d ./out/
    recurse: true,                   // same as -r
  }
};
