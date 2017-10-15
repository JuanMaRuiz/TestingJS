'use strict';

module.exports = {
  plugins: [],
  recurseDepth: 10,
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
  sourceType: "script",
  tags: {
    allowUnknownTags: true,
    dictionaries: ["jsdoc","closure"]
  },
  templates: {
    cleverLinks: false,
    monospaceLinks: false
  },
  opts: {
    encoing: "utf8",                 // same as -e utf8
    destination: "./documentation/", // same as -d ./out/
    recurse: true                    // same as -r
  }
};
