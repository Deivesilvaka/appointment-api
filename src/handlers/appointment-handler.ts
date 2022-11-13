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

    /***
     * 
     * Busca todas as consultas em aberto.
     *
     * @method get
     * 
     * @return {Object}
     **/

    static async getAppointments(req: Request, res: Response) {
        const appointment = await AppointmentService.getAppointments({ deletedAt: null, isAccept: false })
        return res.status(200).json(appointment)
    }

    /***
     * 
     * Busca todas as consultas aceitas.
     *
     * @method get
     * 
     * @return {Object}
     **/

     static async getAcceptedAppointments(req: Request, res: Response) {
        const appointment = await AppointmentService.getAppointments({ deletedAt: null, isAccept: true })
        return res.status(200).json(appointment)
    }

    /***
     * 
     * Aceita uma consulta em aberto.
     *
     * @method post
     * 
     * @query
     * @param  id
     * 
     * @return {Object}
     **/

    static async acceptAppointment(req: Request, res: Response) {
        const { id } = req.query
        const appointment = await AppointmentService.acceptAppointment(Number(id))
        return res.status(200).json(appointment)
    }

    /***
     * 
     * Finaliza uma consulta.
     *
     * @method post
     * 
     * @body
     * @property  {
     *  id: number
     * }
     * 
     * @return {Object}
     **/
    static async finishAppointment(req: Request, res: Response) {
        const { id } = req.query
        const appointment = await AppointmentService.finishAppointment(Number(id))
        return res.status(200).json(appointment)
    }
}

export default AppointmentHandler