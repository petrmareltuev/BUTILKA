'use strict';

var webpack = require('webpack');

var config = {
    "mode": "production",
    "context": "X:\\Users\\Cuckoos nest\\IdeaProjects\\BUTILKA\\build\\classes\\kotlin\\js\\main",
    "entry": {
        "main": "./BUTILKA"
    },
    "output": {
        "path": "X:\\Users\\Cuckoos nest\\IdeaProjects\\BUTILKA\\build\\bundle",
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
            "classes\\kotlin\\js\\main",
            "resources\\main",
            "X:\\Users\\Cuckoos nest\\IdeaProjects\\BUTILKA\\build\\node_modules",
            "node_modules"
        ]
    },
    "plugins": [
        
    ]
};

module.exports = config;

