<template>
  <div class="home">
    <div class="container">
      <hr>
      <div v-show="loading" id="loader">
        <div class = "blob-1"></div>
        <div class = "blob-2"></div>
      </div>
      <h1 style="margin-right: 60vw;">News</h1>
      <div style="margin-bottom:10px;" class="dropdown show">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {{click}}
        </a>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <p v-on:click="newsData('Bollywood')" class="dropdown-item">Bollywood</p>
        <p v-on:click="newsData('Hollywood')" class="dropdown-item">Hollywood</p>
        <p v-on:click="newsData('Netflix')" class="dropdown-item">Netflix</p>
        <p v-on:click="newsData('entertainment')" class="dropdown-item">Entertainment</p>
      </div>
      </div>
      <v-layout row v-for="(data, i) in news" :key="i">
    <v-flex xs12 sm8 offset-sm2>
      <v-card class="ma-3">
        <v-img v-if="data.urlToImage == null"
          :src="require(`../assets/gossip.jpg`)"
          aspect-ratio="2.75"
        ></v-img>
        <v-img v-else
          :src="data.urlToImage"
          aspect-ratio="2.75"
        ></v-img>


        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{data.title}}</h3>
            <div>{{data.description}}</div>
          </div>
        </v-card-title>

        <v-card-actions style="background:#F5F3CE;">
          <v-btn flat color="orange">Share</v-btn>
          <v-btn :href="data.url" target="_blank" flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
</v-layout>
      <!-- <div class="row d-flex justify-content-center">
        <div v-for="data in news" class="main col-5 col-sm-3 shadow-lg p-3 mb-5 bg-white m-1">
          <span  v-if="data.urlToImage == null " >
            <img class="img-thumbnail newsimg" src="../assets/gossip.jpg" alt=""><br>
          </span>
          <span v-else><a :href="data.url" target="_blank">
            <img class="img-thumbnail newsimg" :src="data.urlToImage" alt=""></a><br>
          </span>
          <h5 class="pelement">{{data.publishedAt}}</h5> <br>
          <p class="pelement">{{data.title}}</p>
      </div>
    </div> -->
    </div>
  </div>

</template>

<style media="screen">

</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
    return{
      news:[],
      click:'',
      loading: true,

    }
  },
  created(){
    this.newsData()
  },
  methods:{
    newsData(x){
      this.click = x;
      let year = new Date().getFullYear();
      let month = new Date().getMonth();
      let day = new Date().getDate();
      console.log(month)
      fetch(`https://newsapi.org/v2/everything?q=${this.click}&from={year}-{month}-{day}&sortBy=publishedAt&apiKey=91bfde4fa39e4901b136d36d33b7464c`)
      .then(function(data){
        return data.json()
      })
      .then(data =>{
        this.news = data.articles;
        console.log(this.news)
        this.loading= false;
      })

    }
  }

}
</script>
<style media="screen">
.blob-1,.blob-2{
width:70px;
height:70px;
position:absolute;
background:#000;
border-radius:50%;
top:50%;left:50%;
transform:translate(-50%,-50%);
}
.blob-1{
left:20%;
animation:osc-l 2.5s ease infinite;
}
.blob-2{
left:80%;
animation:osc-r 2.5s ease infinite;
background:#0ff;
}
@keyframes osc-l{
0%{left:20%;}
50%{left:50%;}
100%{left:20%;}
}
@keyframes osc-r{
0%{left:80%;}
50%{left:50%;}
100%{left:80%;}
}
</style>
