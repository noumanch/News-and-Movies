<template>
  <div class="class">
    <div id="app" class="container-float">
      <div id="nav">
        <router-link class="h4" to="/">Home</router-link>|
        <router-link class="h4" to="/about">Movies</router-link>|
        <router-link class="h4" to="/contact">Contact</router-link>
      </div>
        <div>
        <h1 id="title" style="color:black;">News and Movies</h1>
        </div>
      <router-view/>
     </div>
    <div>
      <footer>2018</footer>
    </div>
   </div>

</template>

<style>

#nav{
  display: flex;
  justify-content: space-evenly;
  padding-top: 20px;
}
.class{
  background-color: rgba(0,0,0,0.6)!important;
  height: 11vh;
  margin-top: 20px;
  text-align: center;
  color: white;
}
#main{
  margin-top: 5vh;
}

img{
    width: 20vw;
    height: 35vh;
    margin: 10px 10px 10px;
  }
  p{
    color: black;
    width: 20vw;
    height:10vh;
  }
  #title{
    margin-top: 2vh;
  }
</style>
<script type="text/javascript">
export default{
data(){
  return{
    movieData:[]
  }
},
created() {
  this.random();
},
methods:{
  random(){
    for(let i=0; i<99; i++){
  let randomId = Math.floor(Math.random() * 1000000 + 1);
  randomId='tt0' + randomId;
  console.log(randomId)
  // fetch(`http://www.omdbapi.com/?i=${randomId}&apikey=d3490dad`)
  // .then(function(data){
  //   return data.json();
  // })
  // .then(myData =>{
  //   this.movieData = myData;
  //   console.log(this.movieData);
  // })
  }



}
}

}

</script>
