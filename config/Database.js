import { Sequelize } from "sequelize";

const db = new Sequelize('belajarnode','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;