import axios from 'axios'

const instance = axios.create({
    baseURL: '' //TODO: Enter the base Url Of your backend Server url
})

export default instance