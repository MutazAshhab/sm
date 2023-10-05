import { Router, Request, Response } from 'express'
import { tickets } from '../../db'

export const ticketRouter = Router()

ticketRouter.get('/tickets', (req: Request, res: Response) => {
  res.json(tickets)
})

ticketRouter.get('/ticket/:id', (req: Request, res: Response) => {
  const ticket = tickets.find((t) => t.id === req.params.id)
  if (ticket) {
    res.json(ticket)
  } else {
    res.status(404).send('Item not found')
  }
})
