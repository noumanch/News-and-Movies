<template lang="html">
  <div  class="">
    <div class="container">
      <h1 class="tracking-in-expand">GIVE US A SHOUT</h1>
      <h3>Use the form below to drop us a Email.</h3>
    </div>
    <v-parallax style="position:center;" src="http://images2.fanpop.com/images/photos/4500000/Lets-write-something-writing-4545949-1280-1024.jpg">
  <div id="form" class="container">
    <form class="" action="mailto:nouman_shahid_gr8@hotmail.com" method="POST" enctype="multipart/form-data">
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">First Name</label>
      <input type="name" class="form-control" id="inputName" placeholder="First Name">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Last Name</label>
      <input type="name" class="form-control" id="inputLname" placeholder="Last Name">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="form">
    <div class="form-group col-md-3">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" placeholder="City" id="inputCity">
    </div>
    <div class="form-group col-md-3">
      <label for="inputMessage">Enter Text here....</label>
      <textarea type="text" class="form-control" placeholder="Enter Text" name="" value=""></textarea>
    </div>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>

  </div>
  </v-parallax>
  <div class="container">
    <div class="row">
      <iframe class="col-md-6" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.7294351979244!2d-87.66391326941645!3d41.92334961265814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245+N+Southport+Ave%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2sde!4v1529326463836 "frameborder="2" height="450" style="border:0" allowfullscreen>
      </iframe>
      <hr id="vl">
      <div style="margin-top:15vh;">
        <h2 class="vibrate-1" style="color:red;">Don't be a Stranger</h2><br>
        <h2 >Just say Hello.</h2>
        <h5>Feel free to get in touch with me..</h5>
        <h5>004917657730037 <br>nouman_shahid_gr8@hotmail.com </h5>
      </div>
  </div>
</div>

  </div>

</template>

<style media="screen">
.tracking-in-expand {
-webkit-animation: tracking-in-expand 2s cubic-bezier(0.215, 0.610, 0.355, 1.000) 1s both;
        animation: tracking-in-expand 2s cubic-bezier(0.215, 0.610, 0.355, 1.000) 1s both;
}

@-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
.vibrate-1 {
	-webkit-animation: vibrate-1 0.3s linear infinite both;
	        animation: vibrate-1 0.3s linear infinite both;
}

@-webkit-keyframes vibrate-1 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}
@keyframes vibrate-1 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}


</style>

<script>
export default {
}
</script>
