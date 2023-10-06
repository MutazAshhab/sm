import { getAllTickets } from '@/api/tickets'
import { Ticket as TicketType } from '@/types/tickets'
import { useEffect, useState } from 'react'
import { Ticket } from './components/Ticket'

export default function Home() {
  const [tickets, setTickets] = useState<TicketType[] | null>(null)

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
      {tickets.map((t) => (
        <Ticket
          key={t.id}
          id={t.id}
          title={t.title}
          description={t.description}
        />
      ))}
    </>
  )
}
