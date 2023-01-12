require('dotenv').config()

module.exports = {
  api: {
    port: process.env.PORT || 8000 ,
    jwtSecret: process.env.JWT_SECRET   
  } ,
  db: {
    user: process.env.DB_USER ,
    password: process.env.DB_PASS ,
    host: process.env.DB_HOST ,
    port: process.env.DB_PORT ,
    name: process.env.DB_NAME
  } 
}