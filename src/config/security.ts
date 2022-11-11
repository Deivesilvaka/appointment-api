
import { Request, Response, NextFunction } from "express"
const AUTHENTICATION: string = process.env.AUTHENTICATION || ''

export default {
    security: (req: Request, res: Response, next: NextFunction) => {
        res.setHeader('authentication', AUTHENTICATION)
        
        if(req.url.indexOf('/doc') === -1)
        if(!req.headers['authentication'] || req.headers['authentication'] !== AUTHENTICATION) {
            return res.status(401).json({
                status: 401,
                message: 'Not authorized!'
            })
        }
        next()
    }
}