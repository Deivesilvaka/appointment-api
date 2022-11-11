import { Sequelize } from 'sequelize'
const { MYSQL_USER = '', MYSQL_DB = '', MYSQL_PASSWORD = '', MY_SQL_HOST = '', MYSQL_PORT = '3306' } = process.env

let connection: any | undefined
class Database {
    static getOrCriateConnection() {
        
        if(!connection) {
            connection = Database.createConnection()
        }
        
        return connection
    }

    static createConnection() {
        
        const connection = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PASSWORD, {
            host: MY_SQL_HOST,
            port: Number(MYSQL_PORT),
            dialect: 'mysql'
        })

        return connection
    }

    static async start() {
        Database.getOrCriateConnection()
    }
}

export default Database