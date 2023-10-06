import React, { useState } from 'react'
import { updateTicket } from '@/api/tickets'

interface EditTicketProps {
  id: string
  title: string
  description: string
  submitEdit: () => void
}

export function EditTicket(props: EditTicketProps) {
  const [title, setTitle] = useState(props.title)
  const [description, setDescription] = useState(props.description)

  async function handleEdit() {
    await updateTicket(props.id, title, description)
    props.submitEdit()
  }

  return (
    <div className="p-4 border rounded-md shadow-md">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleEdit}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
      >
        Submit
      </button>
    </div>
  )
}
