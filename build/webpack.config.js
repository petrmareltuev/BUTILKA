'use strict';

var webpack = require('webpack');

var config = {
    "mode": "production",
    "context": "/home/petr/IdeaProjects/BUTILKA/build/classes/kotlin/js/main",
    "entry": {
        "main": "./BUTILKA"
    },
    "output": {
        "path": "/home/petr/IdeaProjects/BUTILKA/build/bundle",
        "filename": "[name].bundle.js",
        "chunkFilename": "[id].bundle.js",
        "publicPath": "/"
    },
    "module": {
        "rules": [
            
        ]
    },
    "resolve": {
        "modules": [
            "classes/kotlin/js/main",
            "resources/main",
            "/home/petr/IdeaProjects/BUTILKA/build/node_modules",
            "node_modules"
        ]
    },
    "plugins": [
        
    ]
};

module.exports = config;

