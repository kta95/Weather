import axios from 'axios'

const Url = "https://restcountries.com/v3.1/all"

const getAll = () => {
    const request = axios.get("https://restcountries.com/v3.1/all");
    return request.then(response => response.data)
}

export default getAll