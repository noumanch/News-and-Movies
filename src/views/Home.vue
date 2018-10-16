<template>
  <div class="home">
    <div class="container">
      <hr>
      <h1 style="margin-right: 60vw;">News</h1>
      <div class="btn-group btn-group-justified">
        <a href="#" v-on:click="newsData('Bollywood')" class="btn btn-primary">Bollywood</a>
        <a href="#" v-on:click="newsData('Hollywood')" class="btn btn-primary">Hollywood</a>
        <a href="#" v-on:click="newsData('Netflix')" class="btn btn-primary">Netflix</a>
        <a href="#" v-on:click="newsData('wwf')" class="btn btn-primary">WWF</a>
        <a href="#" v-on:click="newsData('football')" class="btn btn-primary">Sports</a>
      </div>

      <div class="row">
        <div v-for="data in news">
          <span v-if="data.urlToImage == null " ></span>
          <span v-else><a :href="data.url" target="_blank"><img :src="data.urlToImage" alt=""></a>
            <h6>{{data.publishedAt}}</h6>
            <p>{{data.title}}</p>
            <button class="btn btn-primary btn-xs" type="button" name="button">Detail</button>
          </span>
      </div>
    </div>
    </div>
  </div>

</template>

<style media="screen">
.home{
  display: inline-block;
  color: black;
}

</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
    return{
      news:[],
      click:''

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
      })

    }
  }

}
</script>
