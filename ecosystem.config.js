module.exports = {
  "apps": [{
    "name": "APUCP",
    "watch": ["src"],
    "script": "./src/server/index.js",
    "autorestart": true,
    "instances": 5,
    "exec_mode": "cluster",
    "cwd": "/var/www/html/apucp",
    "env": {
      "NODE_ENV": "development",
      "PORT": "8080"
    },
    "env_production": {
      "NODE_ENV": "production",
      "PORT": "8080"
    }
  }]
};