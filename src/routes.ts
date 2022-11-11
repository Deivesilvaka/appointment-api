import {  Router } from 'express'
import NotificationHandler from './handlers/notification-handler'


const router = Router()

// ----------------------- Notification routes --------------------//

// Busca os preços por quantidade de notificações.
router.get('/notification/prices', NotificationHandler.getNotificationPrices)

export default router