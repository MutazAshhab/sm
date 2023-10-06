import { useState } from 'react'
import { createTicket } from '@/api/tickets'

interface CreateTicketProps {
  submitCreate: () => void
}

export function CreateTicket(props: CreateTicketProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  async function handleSubmit() {
    await createTicket(title, description)
    props.submitCreate()
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
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
      >
        Create
      </button>
    </div>
  )
}
