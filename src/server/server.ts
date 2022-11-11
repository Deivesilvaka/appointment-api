
import 'dotenv/config'
import express from 'express'
import routes from '../routes'
import helmet from 'helmet'
import cors  from 'cors'
import Database from '../database/database'
import security from '../config/security'
import swaggerUI from 'swagger-ui-express'
import swaggerDocument from '../config/swagger.json'
import packageJson from '../../package.json'

class Backend {
    private static port: string | undefined
    private static server: express.Express

    constructor() {
        Backend.setup()
        Backend.addSecurity()
        Backend.addRoutes()
        Backend.addDocumentation()
        Backend.startEvents()
        Database.start()
    }

    static setup() {
        this.port = process.env.PORT ?? process.env.port ?? '3000'
        swaggerDocument.info.version = packageJson.version
        this.server = express()
        this.server.use(express.json())
    }

    static addSecurity() {
        this.server.use(helmet())
        this.server.use(cors())
        this.server.use(security.security)
    }

    static addRoutes() {
        this.server.use(routes)
    }

    static startEvents() {
        this.server.on('SIGTERM', () => {
            this.server.on('close', () => process.exit())
        })
    }

    static addDocumentation() {
        this.server.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
    }

    static start() {
        this.server.listen(this.port, () => console.log(`Server running on port ${this.port} and process: ${process.pid}`))
    }
}

export default Backend