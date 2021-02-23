const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Encourage@10", {
    dialect: "mysql",
    host: "localhost",
});

module.exports = sequelize;
