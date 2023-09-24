import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const single = 'https://studies.cs.helsinki.fi/restcountries/api/name'


const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response)
}

const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response)
}

const unique = (name) => {
    const request = axios.get(`${single}/${name}`)
    return request.then(response => response)
}


export default { getAll, create, update, unique }