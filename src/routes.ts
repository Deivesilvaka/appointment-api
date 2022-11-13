import {  Router } from 'express'
import UserHandler from './handlers/user-handler'
import AttendanceHandler from './handlers/attendance-handler'
import AppointmentHandler from './handlers/appointment-handler'


const router = Router()

// ----------------------- User routes --------------------//

// Cria cadastro de novo usuário.
router.post('/user/new', UserHandler.create)

// Realiza o login do usuário.
router.post('/user/login', UserHandler.login)

// Realiza o logout do usuário.
router.post('/user/logout', UserHandler.logout)


// ----------------------- Attendance routes --------------------//

// Cria novo serviço de atendimento.
router.post('/attendance/new', AttendanceHandler.create)

// Cria novo serviço de atendimento.
router.get('/attendance/get', AttendanceHandler.getAllServices)

// ----------------------- Appointment routes --------------------//

// Cria nova consulta.
router.post('/appointment/new', AppointmentHandler.create)

// Busca todas as consultas em aberto.
router.get('/appointment/get', AppointmentHandler.getAppointments)

// Busca todas as consultas aceitas.
router.get('/appointment/getAccepted', AppointmentHandler.getAcceptedAppointments)

// Aceitar consulta em aberto.
router.post('/appointment/accept', AppointmentHandler.acceptAppointment)

// Finaliza consulta em aberto.
router.post('/appointment/finish', AppointmentHandler.finishAppointment)

export default router