import AppointmentValidation from "../validations/appointment-validation"
import Appointment from "../database/models/appointment-model"
import AttendanceService from "./attendance-service"

interface appointmentInterface {
    services: string,
    patient: string,
    date: string
}

class AppointmentService {
    static async create(appointmentData: appointmentInterface) {

        const validation: any = await AppointmentValidation.create(appointmentData)

        if(validation.status) return validation

        const appointmentClone = JSON.parse(JSON.stringify(appointmentData))
        delete appointmentClone.services

        const services = await AttendanceService.findMany(appointmentData.services)

        const servicesInformations: any = services.map(service => ({
            id: service.id,
            price: service.price
        }))

        let timeExp: number = 0
        services.map(service => timeExp += service.timeExp)

        let fullPrice: number = 0
        services.map(service => fullPrice += service.price)

        let commission: number = 0
        services.map(service => commission += service.price * service.commission)

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
}

export default AppointmentService