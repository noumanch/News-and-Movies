<template>
  <div class="container">
    <hr>
    <div style="margin-bottom:10px;" class="dropdown show">
      <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      </a>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <p v-on:click="movieData('')" class="dropdown-item">Featured</p>
      <p v-on:click="movieData('sort_by=popularity.desc')" class="dropdown-item">Top Today</p>
      <p v-on:click="movieData('certification_country=US&certification.lte=G&sort_by=top-today.desc')" class="dropdown-item">Top Today for Under16</p>
      <p v-on:click="movieData('primary_release_year=2018&sort_by=Action.desc')" class="dropdown-item">Today's special</p>
    </div>
    </div>

      <v-layout row wrap>
              <v-flex v-for="(data, i) in movies" :key="i" xs12 sm6 md4>
               <v-hover>
                <v-card color="white"   slot-scope="{ hover }"
                :class="`elevation-${hover ? 12 : 2}`"
                 class="ma-3">
                  <v-img
                    :src="data.poster_path"
                    aspect-ratio="1"
                  ></v-img>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">{{data.title}}</h3>
                    </div>
                    <v-expansion-panel>
                      <v-expansion-panel-content>
                        <div slot="header">Overview</div>
                        <v-card-text>{{data.overview}}</v-card-text>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-card-title>
                  <!-- <v-divider light></v-divider> -->
                  <v-card-actions style="background:lightblue;">
                    <v-btn flat color="blue">Imdb Rating:</v-btn>
                    <v-btn flat color="green">{{data.vote_average}}</v-btn>
                    <v-btn icon>
                    <v-icon>share</v-icon>
                  </v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
              </v-flex>
            </v-layout>
  </div>
</template>
<script type="text/javascript">
export default{
data(){
  return{
    movies: [],
    selectedData: [],
    image: 'http://image.tmdb.org/t/p/w185/',
    click: ''
  }
},
created(){
  this.movieData()
},
methods:{
  movieData(x){
    this.click = x;
    fetch(`https://api.themoviedb.org/3/discover/movie?${this.click}?&api_key=2a606229e659711df00f057f118426bc`)
    .then(function(data){
      return data.json();
      })
    .then(myData => {
      for(let i=0; i<myData.results.length; i++){
          myData.results[i].poster_path = "http://image.tmdb.org/t/p/w185/" + myData.results[i].poster_path;
          myData.results[i].backdrop_path = "http://image.tmdb.org/t/p/w185/" + myData.results[i].backdrop_path;
          myData.results[i].vote_count = "Vote Count"+" "+ myData.results[i].vote_count
          this.movies = myData.results;
        }
      })
  },
}
}
</script>
<style media="screen">
/* Popup container */
.popup {
  cursor: pointer;
  position: relative;
}
/* The actual popup (appears on top) */
 .popuptext {
  visibility: hidden;
  position: absolute;
  width: 40vw;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 5px;
  z-index: 1;
}
/* Popup arrow */
 .popuptext::after {
  content: "";
  position: absolute;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}
/* Toggle this class when clicking on the popup container (hide and show the popup) */
.popup .show {
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s
}
/* Add animation (fade in the popup) */
@-webkit-keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}
@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity:1 ;}
}
</style>
