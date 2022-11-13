import { Request, Response } from 'express'
import AttendanceService from '../services/attendance-service'

class AttendanceHandler {
    /***
     * 
     * Adiciona novo serviço.
     *
     * @method post
     * 
     * @body
     * @property  {
     *  name: string,
     *  price: float,
     *  commission: float,
     *  timeExp: integer
     * }
     * 
     * @return {Object}
     **/

    static async create(req: Request, res: Response) {
        const attendance = await AttendanceService.create(req.body)
        return res.status(200).json(attendance)
    }

    /***
     * 
     * Busca todos os serviços.
     *
     * @method get
     * 
     * @return {Object}
     **/

    static async getAllServices(req: Request, res: Response) {
        const attendance = await AttendanceService.getAllServices()
        return res.status(200).json(attendance)
    }
}

export default AttendanceHandler