<template>
  <div class="container">
    <hr>
    <div style="margin-bottom:10px;" class="dropdown show">
      <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Sort Movies
      </a>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <p v-on:click="movieData('')" class="dropdown-item">Latest Release</p>
      <p v-on:click="movieData('sort_by=popularity.desc')" class="dropdown-item">Popularity</p>
      <p v-on:click="movieData('certification_country=US&certification.lte=G&sort_by=popularity.desc')" class="dropdown-item">Top for Kids</p>
      <p v-on:click="movieData('primary_release_year=2018,2008&sort_by=.desc')" class="dropdown-item">Top 2018</p>
    </div>
    </div>
      <input  id="search" type="text" placeholder="Search.." name="search">
        <div class="row d-flex justify-content-center">
          <div v-for="data in movies" class="main col-5 col-sm-3 shadow-lg p-3 mb-5 m-1">
             <img :src="data.poster_path" alt="" class="img-fluid newsimg"> <br>
            <p class="pelement">{{data.title}}</p> <br>
            <p class="pelement">Rating {{data.vote_average}}</p> <br>
            <div style="color:red;" class="popup" v-on:click="popupFunction(data)"> Read More!
              <div class="popuptext" id="myPopup">
                  <img :src="selectedData[0]" alt=""> <br>
                  <p class="pelement">{{selectedData[1]}}</p> <br>
                  <p class="pelement">Overview: {{selectedData[2]}}</p> <br>
                  <p class="pelement"> Release date: {{selectedData[3]}}</p> <br>
              </div>

            </div>
      </div>
    </div>
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
    // fetch('https://api.myjson.com/bins/15mzg8') phi myData
    fetch(`http://api.themoviedb.org/3/discover/movie?${this.click}?&api_key=2a606229e659711df00f057f118426bc`)
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
  popupFunction(data) {
    var popup = document.getElementById("myPopup");
    this.selectedData = [],
    this.selectedData.push(data.backdrop_path, data.vote_count, data.overview, data.release_date);
    console.log(this.selectedData)
    popup.classList.toggle("show");
}

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
