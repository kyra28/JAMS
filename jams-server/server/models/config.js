module.exports = {
  development: {
    username: "polytech",
    password: "polytech",
    database: "db_qcm",
    host: "www.unclear-community.fr",
    dialect: "mysql"
  }
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username:"root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: 'mysql',
  }
};

 
