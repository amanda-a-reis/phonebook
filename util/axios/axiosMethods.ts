import axios from 'axios'

async function axiosPost (data: any): Promise<void> {
  const URL = 'http://localhost:3000/api/contacts'
  await axios.post(URL, {
    name: data.name,
    age: data.age,
    phones: data.phones
  })
}

async function axiosPut (data: any, id: string): Promise<void> {
  const URL = `http://localhost:3000/api/contacts/${id}`
  await axios.put(URL, {
    name: data.name,
    age: data.age,
    phones: data.phones
  })
}

async function axiosGet (id?: string): Promise<any> {
  let result: any
  if (id) {
    const URL = `http://localhost:3000/api/contacts/${id}`
    result = await axios.get(URL)
    return result.data.contact
  } else {
    const URL = 'http://localhost:3000/api/contacts'
    result = await axios.get(URL)
    return result.data.contacts
  }
}

async function axiosDelete (id: string): Promise<void> {
  const URL = `http://localhost:3000/api/contacts/${id}`
  await axios.delete(URL)
}

export { axiosPost, axiosPut, axiosGet, axiosDelete }
