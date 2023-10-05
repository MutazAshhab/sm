import express from 'express'
import { PORT } from './config'
import { ticketRouter } from './routes/tickets'
const app = express()
const jsonParser = express.json()

app.use(jsonParser)

app.use(ticketRouter)

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
