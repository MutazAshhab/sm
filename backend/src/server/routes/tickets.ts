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
    res.status(404).send('Ticket not found')
  }
})

ticketRouter.post('/ticket', (req: Request, res: Response) => {
  if (!req.body.title || !req.body.description) {
    res.status(400).send('Entries must have a title and description')
    return
  }

  const ticketNumber = tickets.length + 1

  const newTicket = {
    id: `ticket-${ticketNumber}`,
    title: req.body.title,
    description: req.body.description,
  }

  tickets.push(newTicket)

  res.status(201).json(newTicket)
})

ticketRouter.put('/ticket/:id', (req: Request, res: Response) => {
  if (!req.body.title || !req.body.description) {
    res.status(400).send('Entries must have a title and description')
    return
  }

  const ticketIdx = tickets.findIndex((t) => t.id === req.params.id)

  if (ticketIdx === -1) {
    res.status(404).send('Ticket not found')
    return
  }

  const updatedTicket = {
    id: tickets[ticketIdx].id,
    title: req.body.title,
    description: req.body.description,
  }

  tickets[ticketIdx] = updatedTicket

  res.status(201).json(updatedTicket)
})

ticketRouter.delete('/ticket/:id', (req: Request, res: Response) => {
  const ticketIdx = tickets.findIndex((t) => t.id === req.params.id)

  if (ticketIdx === -1) {
    res.status(404).send('Ticket not found')
    return
  }

  delete tickets[ticketIdx]

  res.status(204).send()
})
