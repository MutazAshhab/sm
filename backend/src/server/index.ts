import express from 'express'
import { PORT } from './config'
import { ticketRouter } from './routes/tickets'
import cors from 'cors'

const app = express()
const jsonParser = express.json()

app.use(jsonParser)

app.use(cors())

app.use(ticketRouter)

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
