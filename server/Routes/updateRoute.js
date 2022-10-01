import express from 'express'
import updateBook from '../Controller/updateController.js'

let updateRoute = express.Router()

updateRoute.post('/edit', updateBook)

export default updateRoute