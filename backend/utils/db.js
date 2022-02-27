import { Sequelize } from 'sequelize';
import 'dotenv/config';

const DATABASE_NAME = process.env.DATABASE_NAME;
const DATABASE_USERNAME = process.env.DATABASE_USERNAME;
const DATABASE_PASSWORD =  process.env.DATABASE_PASSWORD;

const sequelize = new Sequelize(
    DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
        dialect: 'postgres',
        host: 'localhost'
    }
)

export default sequelize;