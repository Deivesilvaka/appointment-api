import { Request, Response } from 'express'
import NotificationService from '../services/notification-service'

class NotificationHandler {

    /***
     * 
     * Busca os preços por quantidade de notificações.
     *
     * @method get
     * 
     * @return {Object}
     **/

    static async getNotificationPrices(req: Request, res: Response) {
        const notificationPrices = NotificationService.notificationPrice()
        return res.status(200).json(notificationPrices)
    }

    /***
     * 
     * calcula o preço de quantas notificações foram pedidas.
     *
     * @method get
     * 
     * @query 
     * @param {
     *  quantity: number
     * }
     * 
     * @return {Object}
     **/

     static async onCalculateNotificationPrice(req: Request, res: Response) {
        const { quantity } = req.query
        const notificationPrice = await NotificationService.calculateNotificationPrice(Number(quantity))
        return res.json(notificationPrice)
    }
    
}

export default NotificationHandler