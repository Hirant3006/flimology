<template>
  <div v-if="movie!==null" class="flim-container">
    <div class="flim">
      <div class="flim-poster">
        <img class="poster" alt="poster" :src="image" />
        <span class="trailer-button">Xem trailer</span>
      </div>
      <div v-if="credits!==null" class="flim-detail">
        <b>{{movie.title}}</b>
        <span>({{movie.release_date}})</span>
        <div style="margin-bottom:5px">
          <span v-for="(genres,index) in movie.genres" :key="index">
            {{genres.name}}
            <span v-if="index!==movie.genres.length-1">, &nbsp;</span>
          </span>
        </div>
        <span>{{movie.overview}}</span>

        <hr />
        <span>Đạo diễn:{{director[0].name}}</span>
        <span>
          Diễn viên:
          <span v-for="num in 3" :key="num">
            {{credits.cast[num-1].name}}
            <span v-if="num!==3">,</span>
            <span v-else>.</span>
          </span>
        </span>
        <!-- <div class="flim-chanel">
          <a style="background-color: #D20000;margin-right: 10px;">Netflix</a>
          <a style="background-color: green;margin-right: 10px;">AmazonVideo</a>
          <a style="background-color: #007bb6;">Blue-ray</a>
        </div>-->
        <a>Share</a>
      </div>
      <!-- <div class="flim-chart">89</div> -->
    </div>
    <!-- <div class="flim-tool">
      <a>one</a>
      <a>true</a>
      <a>three</a>
      <a>four</a>
    </div>-->
  </div>
</template>

<script>
import movieapi from "../../plugins/movieapi/";
import RepositoryFactory from "../../plugins/movieapinew/repositoryFactory";
const MovieRepository = RepositoryFactory.get("movies");

export default {
  name: "MovieTag",
  data() {
    return {
      movie: null,
      image: null,
      credits: null
    };
  },
  props: {
    movieid: String
  },
  async mounted() {
    // movieapi.movie.detail(this.movieid).then(respone => {
    //   if (respone.status == 200) {
    //     // console.log(respone.data);
    //     this.movie = respone.data;
    //   }
    // });
    let movie = await MovieRepository.getDetail(this.movieid),
    credits= await MovieRepository.getCredit(this.movieid)
    this.movie=movie.data;
      this.credits=credits.data;
      
      // movieapi.movie.credits(this.movieid).then(respone => {
      //   if (respone.status == 200) {
      //     // console.log(respone.data)
      //     this.credits = respone.data;
      //   }
      // });
  },
  watch: {
    async movie() {
      const image = await movieapi.image("original", this.movie.poster_path);
      this.image = image;
    }
  },
  computed: {
    director() {
      if (this.credits !== null) {
        return this.credits.crew.filter(item => item.job == "Director");
      }
      return [];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img.poster {
  max-width: 100%;
  max-height: 100%;
}

.flim-container {
  margin: auto;
  border: 1px solid black;
  border-radius: 4px;
  width: 50vw;
  padding: 1.5vmax;
}

.flim {
  display: flex;
}

.trailer-button {
  text-align: center;
  margin-top: 0.25vmax;
  font-size: 1.5vw;
  border: 1px solid #ccc;
  padding: 1vw 0;
  border-radius: 4px;
}

.flim-poster {
  float: left;
  margin-right: 20px;
  width: 25%;
  margin-right: 3%;
  display: flex;
  flex-direction: column;
}

.flim-detail {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 75%;
  /* float: left; */
  /* width: 330px; */
  /* width: 45%;
    overflow: auto;
    margin-right: 20px; */
}

.flim-chart {
  justify-self: flex-end;
  position: relative;
  margin-bottom: 14px;
  margin-top: 3px;
  margin-left: auto;
  margin-right: auto;
  width: 65px;
  height: 65px;
  font-size: 32px;
  line-height: 65px;
  color: white;
  border-radius: 100px;
  text-align: center;
  background-color: #da294e;
  /* background: red; */
  /* background: -webkit-linear-gradient(left top, #fa264e, #19394e); */
  /* background: linear-gradient(to bottom right, #fa264e, #19394e); */
}

.flim-chanel {
  overflow: auto;
  padding-top: 2px;
}
.flim-chanel a {
  color: white;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 3px;
  text-decoration: none;
  opacity: 0.7;
  font-size: 14px;
}

.flim-tool a {
  margin-left: 0px;
}

.flim-tool {
  position: absolute;
}
.megacore {
}
</style>
