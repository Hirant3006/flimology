const apiweb = "https://api.themoviedb.org";

const apikey = "2f558fea27e51ccd77d4ef60df40e5b1";

import axios from "axios";

export default {
  detail: movieid => {
    return axios.get(
      apiweb + "/3/movie/"+movieid+"?api_key=" + apikey + "&language=en-US"
    );
  },
};
