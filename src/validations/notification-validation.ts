import yup from "../config/yup"

class NotificationValidation {
    static async quantity(quantity: number) {
        const schema = yup.yup.object({
            quantity: yup.yup.number().min(3).required()
        })

        return await yup.validateSchema(schema, { quantity })
    }
}

export default NotificationValidation