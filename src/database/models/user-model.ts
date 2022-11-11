import userSchema from '../schemas/user-schema'
import Database from '../database'

const connection: any = Database.createConnection()

const User: any = connection.define('users', userSchema)

User.sync()

export default User