const config = {
    serverPort          : process.env.serverPort || 8080,
    secureServerPort    : 3010,
    dbHost              : process.env.dbHost || 'localhost',
    dbPort              : process.env.dbPort || '27017',
    dbName              : process.env.dbName || 'apucp'
};

export default config;