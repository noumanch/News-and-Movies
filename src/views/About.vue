<template>
  <div class="container">
    <hr>
      <input id="search" type="text" placeholder="Search.." name="search">
        <div class="row">
          <div v-for="data in movies" class="main col-6 col-sm-4">
            <img :src="data.Poster" alt="" class="img-fluid">
            <p class="text">{{data.Title}}</p>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default{
data(){
  return{
    movies: []
  }
},
created(){
  this.fetchData()
},
methods:{
  fetchData(){
    fetch('https://api.myjson.com/bins/15mzg8')
    .then(function(data){
      return data.json();
      })
    .then(myData => {
      this.movies = myData.movies;
      console.log(this.movies)
      })
  }
}
}
</script>
