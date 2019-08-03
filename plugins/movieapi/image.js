import axios from 'axios'
const base_url="https://image.tmdb.org/t/p/"
export default (file_size,file_path) => {
    return base_url+file_size+"/"+file_path
}