import axios from "axios"
const contacts = axios.create({
  baseURL: 'http://localhost:4000/contacts',
})

const groups = axios.create({
    baseURL: 'http://localhost:4000/groups',
})
export {contacts,groups}