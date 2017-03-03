<template>
  <section class="contact container">
    <div class="row">
      <div class="col-sm-6">
        <h1>Contact Me</h1>
        <section class="contact-form">
          <p>
            The decision to seek therapy is an important one, and reaching out for help is a big first step.
          <p>
            Reach out to me to learn more or ask questions, and see if we’re a good fit.
          <p>
            <!-- do a phone icon -->
            C: 267-567-4966
          <p>
            <!-- do an email icon -->
            E: RSimonLSW@gmail.com
          <p>
            1429 Walnut Street, Suite 1300
          <p>
            Philadelphia, PA 19102
        </section>
      </div>
      <section class="contact-details col-sm-6">
        <div class='embed-container'><iframe width='500' height='450' frameborder='0' style='border:0' src='https://www.google.com/maps/embed/v1/place?q=1429%20Walnut%20Street%2C%20Suite%201300%20Philadelphia%2C%20PA%2019102&key=AIzaSyDyQpzdh030Eoxm4tfZ3afFJaXPYO8lTKU' allowfullscreen></iframe></div>
      </section>
    </div>
  </section>
</template>

<script>
  export default {
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  .embed-container 
    position: relative
    padding-bottom: 56.25%
    height: 0
    overflow: hidden
    max-width: 100%

  .embed-container iframe, .embed-container object, .embed-container embed 
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
</style>
