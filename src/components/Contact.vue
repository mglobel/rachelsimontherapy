<template>
  <section class="contact well">
    <h1>Contact Me</h1>
    <section class="contact-form">
      <p>
        The decision to seek therapy is an important one, and reaching out for help is a big first step.
      <p>
        Reach out to me to learn more or ask questions, and see if we’re a good fit.
      <p>
        C: 267-567-4966
      <p>
        E: RSimonLSW@gmail.com
    </section>
    <section class="contact-details">

      <iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://www.openstreetmap.org/export/embed.html?bbox=-75.16659021377565%2C39.948953540235145%2C-75.16433715820314%2C39.95048335567248&amp;layer=mapnik&amp;marker=39.949718452230464%2C-75.16546368598938" style="border: 1px solid black"></iframe><br/><small><a href="http://www.openstreetmap.org/?mlat=39.94972&amp;mlon=-75.16546#map=19/39.94972/-75.16546">View Larger Map</a>
     
      <br />
      1429 Walnut Street, Suite 1300
      <br />
      Philadelphia, PA 19102 (include map)
    </section>
  </section>
</template>

<script>
  import loadGoogleMapsAPI from 'load-google-maps-api';
  console.log(document.getElementsByClassName('maps'))

  var x = document.getElementsByClassName("maps");
  var i;
  console.log(Array.from(x))
  for (i = 0; i < x.length; i++) {
      console.log(x[i])
  }
 
  loadGoogleMapsAPI({key: 'AIzaSyDyQpzdh030Eoxm4tfZ3afFJaXPYO8lTKU'}).then((googleMaps) => {
    var map = new googleMaps.Map(document.getElementsByClassName('maps'), {
      zoom: 4,
      center: {lat:39.949911, lng:-75.165409}
    }); 
    console.log(map)
  }).catch((err) => {
    console.error(err);
  });


  // function initMap() {
  //   var uluru = {lat: -25.363, lng: 131.044};
  //   var map = new google.maps.Map(document.getElementById('map'), {
  //     zoom: 4,
  //     center: uluru
  //   });
  //   var marker = new google.maps.Marker({
  //     position: uluru,
  //     map: map
  //   });
  // }

  // console.log(Map)

  // console.log(Map)
  // load({key: 'AIzaSyDyQpzdh030Eoxm4tfZ3afFJaXPYO8lTKU', v: '3.25'})
  // let MapDisplay = Map

  // export default {
  //   components: {
  //     MapDisplay
  //   }
  // }

  export default {
    components: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  /* this should really just be a layout class */
  .contact 
    display: flex
    flex-wrap: wrap

    h1
      flex: 0 1 100%
      color: #42b983
    section
      flex: 0 0 50%
      padding: 1rem;
</style>
