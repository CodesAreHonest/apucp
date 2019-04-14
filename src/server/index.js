
// Transpile all code following this line with babel and use 'env' (aka ES6) preset.
require('@babel/register')({
    presets: [ '@babel/preset-env' ]
});

const server = require('./connection/server.js');

module.exports = server;