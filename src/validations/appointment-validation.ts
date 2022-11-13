import yup from "../config/yup"

class AppointmentValidation {
    static async create(appointmentData: object) {

        const schema = yup.yup.object({
            patient: yup.yup.string().min(8).required(),
            services: yup.yup.string().min(1).required(),
            date: yup.yup.string().min(6).required()
        })

        return await yup.validateSchema(schema, appointmentData)
    }
}

export default AppointmentValidation