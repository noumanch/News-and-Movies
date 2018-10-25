<template>
  <div class="class" style="background:#F5F3CE;">
    <div class="container" >

    <v-parallax
      style="margin-top:5vh"
    src="http://www.scifiimaginarium.com/wp-content/uploads/2018/01/hollywood-is-nearing-its-superhero-saturation-point.jpg"
  ></v-parallax>

    <div id="app" class="v-toolbar flat" style="background:white;">
      <v-navigation-drawer persistent :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app>
        <v-list dense>
      </v-list>
      
       <v-list-tile @click="">
         <v-list-tile-action>
           <v-icon>business</v-icon>
         </v-list-tile-action>
         <v-list-tile-content>
           <router-link to="/" class="text-color"><v-list-tile-title>News&Press</v-list-tile-title></router-link>
         </v-list-tile-content>
       </v-list-tile>
       </v-list>

       <v-list-tile @click="">
         <v-list-tile-action>
           <v-icon>M</v-icon>
         </v-list-tile-action>
         <v-list-tile-content>
           <router-link to="/about" class="text-color"><v-list-tile-title>Movies</v-list-tile-title></router-link>
         </v-list-tile-content>
       </v-list-tile>
     </v-list>

     <v-list-tile @click="">
       <v-list-tile-action>
         <v-icon>contact_mail</v-icon>
       </v-list-tile-action>
       <v-list-tile-content>
         <router-link to="/contact" class="text-color"><v-list-tile-title>Contact</v-list-tile-title></router-link>
       </v-list-tile-content>
     </v-list-tile>
   </v-list>
        <!-- <v-card>
          <div>
            <v-toolbar flat class="transparent">
              <v-list-tile-title class="title">
            Movies
              </v-list-tile-title>
            </v-toolbar>
          </div>
          <div style="padding: 15px 0px">
            <div class="prof-drawer">
              <ul>
                <li>
                  <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
                  <i class="fas fa-home pr-2"></i><span><router-link to="/" class="text-color">Home</router-link></span>
                </li>
                <li>
                  <i class="fas fa-user-circle pr-2"></i><span><router-link to="/about" class="text-color">Movies</router-link></span>
                </li>
                <li>
                  <i class="fas fa-sign-in-alt pr-2"></i><span><router-link to="/contact" class="text-color">Contact</router-link></span>
                </li>
              </ul>
            </div>
          </div>
        </v-card> -->
      </v-navigation-drawer>
      <v-toolbar app :clipped-left="clipped">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <router-link to="/">
          <v-toolbar-title class="title-color">Gossip&Movies</v-toolbar-title>
        </router-link>
      </v-toolbar>
     <!-- <img id="mainImage" src="./assets/gossip.jpg" alt=""> -->
      <v-content>
        <router-view/>
      </v-content>
     </div>
       </div>
     <v-footer
     dark
     height="auto"
   >
     <v-card
       class="flex"
       flat
       tile
     >
       <v-card-title class="teal">
        <a style="color:darkblue;" href="https://www.linkedin.com/in/nouman-shahid-5540b2169/" target="_blank"> <strong class="subheading">Get connected with us on social networks!</strong></a>

         <v-spacer></v-spacer>
       </v-card-title>

       <v-card-actions class="grey darken-3 justify-center">
         &copy;2018 — <strong>Nouman</strong>
       </v-card-actions>
     </v-card>
   </v-footer>


</div>

</template>

<style>

body{
  /* background: -webkit-linear-gradient(to right, #bbd2c5, #536976, #292e49); /* Chrome 10-25, Safari 5.1-6 */
  /* background: linear-gradient(to right, #bbd2c5, #536976, #292e49); */
}
.main{
  position: relative;
  margin-top: 5vh;
}
#form{
  background-color: rgba(000,000,000,0.2);
  padding: 20px;
  margin-bottom: 50vh;
  margin-top: 50vh;
}
.newsimg{
    width: 20vw;
    height: 30vh;
  }
.pelement{
    display: inline;
    color: black;
    width: 15vw!important;
  }
  #search{
    border: 1px solid;
    padding: 10px;
    box-shadow: 2px 5px;
  }
  #vl{
    color: white;
    border: none!important;
    border-left: 2px solid hsla(200, 30%, 25%,100)!important;
    height: 57vh!important;
    width: 5px!important;
}
</style>
<script type="text/javascript">
export default{
data(){
  return{
    clipped: false,
                drawer: false,
                fixed: false,
    movieData:[],
  }
},
created() {
  this.random();
},
methods:{
  random(){
  //   for(let i=0; i<99; i++){
  // let randomId = Math.floor(Math.random() * 1000000 + 1);
  // randomId='tt0' + randomId;
  // console.log(randomId)
  // // fetch(`http://www.omdbapi.com/?i=${randomId}&apikey=d3490dad`)
  // // .then(function(data){
  // //   return data.json();
  // // })
  // // .then(myData =>{
  // //   this.movieData = myData;
  // //   console.log(this.movieData);
  // // })
  // }



},

}

}

</script>
