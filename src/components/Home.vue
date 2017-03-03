<template>
  <div>
    <div class="image-banner">
      <img src="../assets/stones.jpeg" />
    </div>
    <div class="container">
      <img style="margin: 2rem 0; padding-bottom: 1.5em; width: 90%" src="../assets/services-header.svg" />
      <h2 style="display: none;">Psychotherapy | Education | Consulting</h2>
      <p>
        Finding a therapist, especially for queer or trans-affirming individuals, can be a daunting and complex task. 
      </p>
      <h3>I’m glad you made it here.</h3>
      <button class="btn btn-lg btn-default">Learn More</button>
      <router-link to="/contact" class="btn btn-lg btn-default">Contact Me</router-link>
      <hr />
      <div class="row">
        <div class="col-sm-9">
          <p>
            I am a psychotherapist and licensed social worker in Center City Philadelphia. I work collaboratively with a wide range of clients who seek change, insight, and fulfillment. My clients include individual adults, children, and adolescents, as well as with families and couples.
          </p> 
        <p>
          <i>This journey has always been about reaching your own other shore no matter what it is, and that dream continues.</i> 
          <br />  
          –Diana Nyad
        </p>
        </div>
        <div class="col-sm-2 col-xs-offset-2 col-md-offset-0"> 
          <img class="headshot" src='../assets/website1.jpeg' />
        </div>
      </div>
      <hr />
      <h4>
        Seeking help is an important decision, and reaching out is a first big step.
      </h4>
      <div class="row">
        <div class="col-sm-5">
          <section>
            <div class='embed-container'><iframe width='500' height='450' frameborder='0' style='border:0' src='https://www.google.com/maps/embed/v1/place?q=1429%20Walnut%20Street%2C%20Suite%201300%20Philadelphia%2C%20PA%2019102&key=AIzaSyDyQpzdh030Eoxm4tfZ3afFJaXPYO8lTKU' allowfullscreen></iframe></div>
          </section>
        </div>
        <div class="col-sm-7" style="font-size: .8em;">
          <p> 
            Contact me to learn more or ask questions, and see if we’re a good fit. I am also available for <router-link to="/training">training and consultation</router-link> services.
          </p>
          <b>Rachel Simon, LSW MEd</b>
          <br>
            <!-- do a phone icon -->
            (267) 567-4966
          <br>
            1429 Walnut Street
          <br>
            Suite #1300
          <br>
            Philadelphia, PA 19102 
        </div>
      </div>

      <hr />

    </div>

  </div>
</template>

<script>
  export default {
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

  hr
    padding-bottom: 1.5em

  h3
    padding-bottom: 1em

  h4
    font-size: 1.2em

  .logo
    width: 80px
    height: 80px

  .well
    margin-top: 2rem;

    @media(min-width: 600px) 
      display: flex

  .image-banner
    position: relative
    overflow: hidden
    height: 280px
    margin-bottom: 1.5em

    img
      position: absolute
      left: 0 
      right: 0 
      bottom: -100%
      top: -100%
      width: 100%
      margin: auto
  
  .headshot
    max-width: 200px
    border-radius: 10%

  .embed-container 
    position: relative
    padding-bottom: 60%
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
