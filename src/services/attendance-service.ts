import AttendanceValidation from "../validations/attendance-validation"
import Service from "../database/models/service-model"

class AttendanceService {
    static async create(attendanceData: object) {

        const validation: any = await AttendanceValidation.create(attendanceData)

        if(validation.status) return validation

        return await Service.create(validation)
    }

    static async getAllServices() {
        const services = await Service.findAll()
        
        if(services.length === 0) return { status: 500, message: 'There are no services' }

        return services
    }

    static async findMany(services: string) {
        const servicesArray: any = services.replace(' ', '').split(',')
        const promises: any = servicesArray.map((id: any) => Service.findOne({ where: { id } }))
        return Promise.all(promises)
    }
}

export default AttendanceService