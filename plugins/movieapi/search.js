const apiweb = "https://api.themoviedb.org";

const apikey = "2f558fea27e51ccd77d4ef60df40e5b1";

import axios from "axios";

export default {
  keyword: query => {
    return axios.get(
      apiweb + "/3/search/keyword?api_key=" + apikey + "&" + "query=" + query
    );
  },
  movie: query => {
    return axios.get(
      apiweb + "/3/search/movie?api_key=" + apikey + "&" + "query=" + query
    );
  }
};
