import NotificationValidation from "../validations/notification-validation"

const { MINIMUM_NOTIFICATIONS = 3, PRICE_PER_MINIMUM = 5 } = process.env

class NotificationService {
    static notificationPrice() {
        return {
            minimum: Number(MINIMUM_NOTIFICATIONS),
            price_per_minimum: Number(PRICE_PER_MINIMUM)
        }
    }

    static async calculateNotificationPrice(qunt_notifications: number) {

        const notification = await NotificationValidation.quantity(qunt_notifications)

        if(notification.status) {
            return notification
        }

        const price = (qunt_notifications * Number(PRICE_PER_MINIMUM)) / Number(MINIMUM_NOTIFICATIONS)

        const notificationPrice = {
            quantity: qunt_notifications,
            price: parseFloat(price.toFixed(2))
        }

        return notificationPrice
    }
}

export default NotificationService