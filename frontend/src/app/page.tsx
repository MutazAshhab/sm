'use client'

import { getAllTickets } from '@/api/tickets'
import { Ticket as TicketType } from '@/types/tickets'
import { useEffect, useState } from 'react'
import { Ticket } from './components/Ticket'
import { CreateTicket } from './components/CreateTicket'

export default function Home() {
  const [tickets, setTickets] = useState<TicketType[] | null>(null)
  const [showCreateTicket, setShowCreateTicket] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const fetchedTickets = await getAllTickets()
      setTickets(fetchedTickets)
    }

    fetchData()
  }, [])

  if (tickets === null) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className="flex flex-row gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          onClick={async () => {
            const fetchedTickets = await getAllTickets()
            setTickets(fetchedTickets)
          }}
        >
          Refetch Tickets
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          onClick={() => setShowCreateTicket(!showCreateTicket)}
        >
          {showCreateTicket ? 'Close Create Ticket' : 'Create Ticket'}
        </button>
      </div>
      {showCreateTicket && (
        <CreateTicket submitCreate={() => setShowCreateTicket(false)} />
      )}
      <div className="flex flex-col gap-4">
        {tickets.map((t) => (
          <Ticket
            key={t.id}
            id={t.id}
            title={t.title}
            description={t.description}
          />
        ))}
      </div>
    </>
  )
}
