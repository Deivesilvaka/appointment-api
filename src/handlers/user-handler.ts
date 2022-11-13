import { Request, Response } from 'express'
import UserService from '../services/user-service'

class UserHandler {

    /***
     * 
     * Adiciona novo usuário.
     *
     * @method post
     * 
     * @body
     * @property  {
     *  name: string,
     *  password: string,
     *  email: string
     * }
     * 
     * @return {Object}
     **/

    static async create(req: Request, res: Response) {
        const user = await UserService.createUser(req.body)
        return res.status(200).json(user)
    }

    /***
     * 
     * login de usuário.
     *
     * @method post
     * 
     * @body
     * @property  {
     *  password: string,
     *  email: string
     * }
     * 
     * @return {Object}
     **/

     static async login(req: Request, res: Response) {
        const user = await UserService.login(req.body)
        return res.status(200).json(user)
    }

    /***
     * 
     * efetua logout de usuário.
     *
     * @method post
     * 
     * @body
     * @property  {
     *  session: string
     * }
     * 
     * @return {Object}
     **/

     static async logout(req: Request, res: Response) {
        const user = await UserService.logout(req.body)
        return res.status(200).json(user)
    }
    
}

export default UserHandler