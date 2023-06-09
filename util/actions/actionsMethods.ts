import { axiosPost, axiosPut } from '../axios/axiosMethods'
import type { ContactMapper } from '../interfaces'

const actionsMsg = {
  create: 'Contact created!',
  edit: 'Contact edited!',
  noModify: 'No modification was made.'
}

async function actions (method: string, data: ContactMapper): Promise<void> {
  const { name, age, phone, phones, id } = data
  switch (method) {
    case 'POST': {
      let newPhones: string[] = [phone]
      if (phones.length > 0) {
        newPhones = [phone, ...phones]
      }
      await axiosPost({ name, age: Number(age), phones: newPhones })
      break
    }
    case 'PUT': {
      let newPhones: string[] = []
      if (phones.length > 0) {
        newPhones = [...phones]
      }
      await axiosPut({ name, age: Number(age), phones: newPhones }, id)
      break
    }
  }
}

async function edit (data: ContactMapper): Promise<void> {
  const { name, age, phone, phones, id } = data
  await actions('PUT', { name, age, phone, phones, id })
  if (name === '' && age === '' && phones.length === 0) {
    alert(actionsMsg.noModify)
  } else {
    alert(actionsMsg.edit)
  }
  window.location.assign('/')
}

async function create (data: ContactMapper): Promise<void> {
  const { name, age, phone, phones, id } = data
  await actions('POST', { name, age, phone, phones, id })
  alert(actionsMsg.create)
  window.location.assign('/')
}

export { edit, create }
