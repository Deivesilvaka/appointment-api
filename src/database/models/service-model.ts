import serviceSchema from '../schemas/service-schema'
import Database from '../database'

const connection: any = Database.createConnection()

const Service: any = connection.define('services', serviceSchema)

Service.sync()

export default Service