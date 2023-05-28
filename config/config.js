require('dotenv').config();


module.exports = {
    app: {
        port: process.env.PORT,
        db: {
            connectionString: process.env.connectionString
        }
    }
}