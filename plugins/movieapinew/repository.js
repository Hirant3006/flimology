import axios from 'axios'

const baseDomain = "https://api.themoviedb.org"
const baseURL = `${baseDomain}/3`

export default axios.create({
    baseURL,
    header: { "Authorization":"adwqufh2113"}
})