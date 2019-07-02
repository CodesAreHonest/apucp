module.exports = {
  "apps": [{
    "name" : "APUCP",
    "watch": ["src"],
    "script" : "npm run start",
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
