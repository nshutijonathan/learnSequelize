require('dotenv').config();
module.exports=
{
  "development": {
    "username": "jonathannshuti",
    "password": 'postgres',
    "database": "anda",
    "host": "127.0.0.1",
    "dialect": "postgres",
    
  },
  "test": {
    "username": "jonathannshuti",
    "password": 'postgres',
    "database": "andatest",
    "host": "127.0.0.1",
    "dialect": "postgres",
    
  },
  "production": {
    "username": "process.env.DB_NAME",
    "password": "process.env.DB_USER",
    "database": "process.env.DB_PASS",
    "host": "process.env.DB_HOST",
    "dialect": "postgres",
  }
};
