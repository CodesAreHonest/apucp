{
  "apps": [{
    "name" : "Asia Pacific University Confession Page",
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
}
