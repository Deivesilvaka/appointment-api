import { Request, Response } from 'express'
import AppointmentService from '../services/appointment-service'

class AppointmentHandler {
    /***
     * 
     * Agenda uma consulta.
     *
     * @method post
     * 
     * @body
     * @property  {
     *  patient: string,
     *  services: string,
     *  date: string
     * }
     * 
     * @return {Object}
     **/

    static async create(req: Request, res: Response) {
        const appointment = await AppointmentService.create(req.body)
        return res.status(200).json(appointment)
    }
}

export default AppointmentHandler