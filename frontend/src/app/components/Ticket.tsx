interface TicketProps {
  id: string
  title: string
  description: string
}

export function Ticket(props: TicketProps) {
  return (
    <div>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  )
}
