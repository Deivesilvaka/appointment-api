import yup from "../config/yup"

class AttendanceValidation {
    static async create(attendanceData: object) {
        const schema = yup.yup.object({
            name: yup.yup.string().min(8).required(),
            price: yup.yup.number().min(1).required(),
            commission: yup.yup.number().min(0.01).max(1).required(),
            timeExp: yup.yup.number().min(1).required()
        })

        return await yup.validateSchema(schema, attendanceData)
    }
}

export default AttendanceValidation