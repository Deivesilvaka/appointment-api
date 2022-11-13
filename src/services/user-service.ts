import UserValidation from "../validations/user-validation"
import User from '../database/models/user-model'
import sha256 from 'crypto-js/sha256'
import Base64 from 'crypto-js/enc-base64'

class UserService {
    static async createUser(userData: object) {

        const validation: any = await UserValidation.newUser(userData)

        if(validation.status) return validation

        const user: object = await User.create(validation)

        return user
    }

    static async login(userData: object) {
        const validation: any = await UserValidation.login(userData)

        if(validation.status) return validation

        const user: object = await User.findOne({
            where: validation
        })

        if(!user) return { status: 400, message: 'email or password is not correct' }

        const session: string = Base64.stringify(sha256(validation.email + validation.password))
        await User.update({
            session 
        }, {
            where: validation
        })

        return { session }
    }

    static async logout(session: string) {

        const user:object = await User.findOne({ where: session })

        if(!user) return { status: 400, message: 'incorrect session' }

        return await User.update({
            session: ''
        }, {
            where: session
        })
    }
}

export default UserService