<template>
  <div class="well">
    <div>
      <h1>Rachel Simon, LSW MEd</h1>
      <h2>Psychotherapy | Education | Consulting</h2>
      <p>
      Finding a therapist, especially for queer or trans-affirming individuals, can be a daunting and complex task.  I’m glad you made it here. I am a psychotherapist and licensed social worker in Center City Philadelphia, and I work collaboratively with a wide range of clients who seek change, insight, and fulfillment. I work regularly with individual adults, children, and adolescents, as well as with families and couples.</p>
    </div>
    <img src='../assets/headshot.png' />
  </div>
</template>

<script>
  export default {
    locales: require('../i18n/Hello.js')
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  h1
    color: #42b983
  .logo
    width: 80px
    height: 80px
  i 
    font-size: 10rem;

  img 
    height: 225px
    margin: 10px 30px

  .well
    display: flex

    img
      margin-left: auto

 
</style>
