import axios from 'axios'
import { BASE_URL } from './config'

export async function getAllTickets() {
  const response = await axios.get(`${BASE_URL}/tickets`)

  return response.data
}

export async function getTicketById(id: string) {
  const response = await axios.get(`${BASE_URL}/ticket/${id}`)

  return response.data
}

export async function createTicket(title: string, description: string) {
  const response = await axios.post(`${BASE_URL}/ticket`, {
    title,
    description,
  })

  return response.data
}

export async function updateTicket(
  id: string,
  title: string,
  description: string
) {
  const response = await axios.put(`${BASE_URL}/ticket/${id}`, {
    title,
    description,
  })

  return response.data
}

export async function deleteTicket(id: string) {
  return await axios.delete(`${BASE_URL}/ticket/${id}`)
}
