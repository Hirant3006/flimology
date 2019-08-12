import Repository from './repository'
import apiKey from '../../config/key'
const resource = "/movie" 

export default {
    getDetail(movieId,lang) {
        return Repository.get(`${resource}/${movieId}`,{
            params: {
                "language": lang,
                "api_key": apiKey.movieApi
            }
        })
    },
    getCredit(movieId){
        return Repository.get(`${resource}/${movieId}/credits`,{
            params: {
                "api_key": apiKey.movieApi
            }
        })
    }
}