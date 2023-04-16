import axios from 'axios'
import type { Contact, ContactInfo } from '../interfaces'

const baseURL = process.env.URL || ''

async function axiosPost (data: ContactInfo<number, string[]>): Promise<void> {
  const { name, age, phones } = data
  const URL = `${baseURL}api/contacts`
  await axios.post(URL, {
    name,
    age,
    phones
  })
}

async function axiosPut (data: ContactInfo<number, string[]>, id: string): Promise<void> {
  const { name, age, phones } = data
  const URL = `${baseURL}api/contacts/${id}`
  await axios.put(URL, {
    name,
    age,
    phones
  })
}

async function axiosGet (): Promise<Contact[]> {
  const URL = `${baseURL}api/contacts`
  const result: Contact[] = (await axios.get(URL)).data.contacts
  return result
}

async function axiosGetById (id: string): Promise<Contact> {
  const URL = `http://localhost:3000/api/contacts/${id}`
  const result: Contact = (await axios.get(URL)).data.contact
  return result
}

async function axiosDelete (id: string): Promise<void> {
  const URL = `${baseURL}api/contacts/${id}`
  await axios.delete(URL)
}

export { axiosPost, axiosPut, axiosGet, axiosGetById, axiosDelete }
