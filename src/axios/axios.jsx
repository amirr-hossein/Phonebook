import axios from "axios"
const all = axios.create({
  baseURL: 'http://localhost:4000',
})
export {all}