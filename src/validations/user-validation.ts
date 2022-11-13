import yup from "../config/yup"
import sha256 from 'crypto-js/sha256'
import Base64 from 'crypto-js/enc-base64'

class UserValidation {
    static async newUser(userData: object) {
        const schema = yup.yup.object({
            name: yup.yup.string().min(8).transform(name => name.toUpperCase()).required(),
            email: yup.yup.string().email().required(),
            password: yup.yup.string().transform(pass => {
                if(!pass || pass.length < 8) {
                    return false
                }

                return Base64.stringify(sha256(pass))
            }).required()
        })

        return await yup.validateSchema(schema, userData)
    }

    static async login(userData: object) {
        const schema = yup.yup.object({
            email: yup.yup.string().email().required(),
            password: yup.yup.string().transform(pass => {
                if(!pass || pass.length < 8) {
                    return false
                }

                return Base64.stringify(sha256(pass))
            }).required()
        })

        return await yup.validateSchema(schema, userData)
    }
}

export default UserValidation