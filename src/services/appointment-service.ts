import AppointmentValidation from "../validations/appointment-validation"
import Appointment from "../database/models/appointment-model"
import AttendanceService from "./attendance-service"
import User from '../database/models/user-model'

interface appointmentInterface {
    services: string,
    patient: string,
    date: string
}

class AppointmentService {
    static async create(appointmentData: appointmentInterface) {

        const validation: any = await AppointmentValidation.create(appointmentData)

        if(validation.status) return validation

        const user = await User.findOne({ where: { name: validation.patient } })
        if(!user) return { status: 500, message: 'Patient not found!' }

        const appointmentClone = JSON.parse(JSON.stringify(validation))
        delete appointmentClone.services

        const services = await AttendanceService.findMany(appointmentData.services)

        const servicesInformations: any = services.map(service => ({
            id: service.id,
            price: service.price
        }))

        let timeExp: number = 0
        let fullPrice: number = 0
        let commission: number = 0

        services.map(service => {
            timeExp += service.timeExp
            fullPrice += service.price
            commission += service.price * service.commission
        })

        const appointment: any = {
            ...appointmentClone,
            services: JSON.stringify(servicesInformations),
            timeExp,
            fullPrice,
            commission
        }

        await Appointment.create(appointment)

        appointment.services = JSON.parse(appointment.services)

        return appointment
    }

    static async getAppointments(where: object) {
        const apointments = await Appointment.findAll({ where })

        if(apointments.length === 0) return { status: 200, message: 'There are no open appointment!' }
        return apointments.map((appointment: any) => {
            appointment.services = JSON.parse(appointment.services)
            return appointment
        })
    }

    static async acceptAppointment(id: number) {
        
        const validation: any = await AppointmentValidation.id(id)

        if(validation.status) return validation

        const appointment: any = await Appointment.update({ isAccept: true }, {
            where: { id }
        })

        if(!appointment) return { status: 200, message: 'Failed to accept appointment!' }

        return { status: 200, message: 'Appointment is accept!' }
    }

    static async finishAppointment(id: number) {
        const validation: any = await AppointmentValidation.id(id)

        if(validation.status) return validation

        const appointment: any = await Appointment.update({ deletedAt: new Date() }, {
            where: { id }
        })

        if(!appointment) return { status: 200, message: 'Failed to finish appointment!' }

        let appointmentFinished: any = await Appointment.findOne({ where: { id } })
        appointmentFinished.services = JSON.parse(appointmentFinished.services)

        return { status: 200, message: 'Appointment is finished!', appointmentFinished }
    }
}

export default AppointmentService