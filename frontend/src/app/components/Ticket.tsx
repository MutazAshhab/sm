import React, { useState } from 'react'
import { deleteTicket } from '@/api/tickets'
import { EditTicket } from './EditTicket'

interface TicketProps {
  id: string
  title: string
  description: string
}

export function Ticket(props: TicketProps) {
  const [isEditing, setIsEditing] = useState(false)

  if (isEditing) {
    return (
      <EditTicket
        id={props.id}
        title={props.title}
        description={props.description}
        submitEdit={() => setIsEditing(false)}
      />
    )
  }

  return (
    <div className="p-4 border rounded-md shadow-md">
      <h4 className="text-lg font-bold mb-2">{props.title}</h4>
      <p className="text-gray-600 mb-4">{props.description}</p>
      <div className="flex flex-row gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
          onClick={() => deleteTicket(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
