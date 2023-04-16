import axios from 'axios'
import type { Contact, ContactInfo } from '../interfaces'

const config = {
  headers: { 'Access-Control-Allow-Origin': '*' }
}

let baseURL: string
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000/'
} else if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://phonebook-beige.vercel.app/'
} else {
  baseURL = ''
}

async function axiosPost (data: ContactInfo<number, string[]>): Promise<void> {
  const { name, age, phones } = data
  const URL = `${baseURL}api/contacts`
  await axios.post(URL, {
    name,
    age,
    phones
  }, config)
}

async function axiosPut (data: ContactInfo<number, string[]>, id: string): Promise<void> {
  const { name, age, phones } = data
  const URL = `${baseURL}api/contacts/${id}`
  await axios.put(URL, {
    name,
    age,
    phones
  }, config)
}

async function axiosGet (): Promise<Contact[]> {
  const URL = `${baseURL}api/contacts`
  const result: Contact[] = (await axios.get(URL, config)).data.contacts
  return result
}

async function axiosGetById (id: string): Promise<Contact> {
  const URL = `${baseURL}api/contacts/${id}`
  const result: Contact = (await axios.get(URL, config)).data.contact
  return result
}

async function axiosDelete (id: string): Promise<void> {
  const URL = `${baseURL}api/contacts/${id}`
  await axios.delete(URL, config)
}

export { axiosPost, axiosPut, axiosGet, axiosGetById, axiosDelete }
