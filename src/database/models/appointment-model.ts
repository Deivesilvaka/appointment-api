import appointmentSchema from '../schemas/appointment-schema'
import Database from '../database'

const connection: any = Database.createConnection()

const Appointment: any = connection.define('appointments', appointmentSchema)

Appointment.sync()

export default Appointment