<template>
  <div class="well">
    <div class="row">
      <div class="col-sm-5">
        <i class="fa fa-user-circle" aria-hidden="true"></i>
      </div>
      <div class="col-sm-7 text-left">
        <p v-translate>Contact me</p>
      </div>
    </div>
    <p>
      The decision to seek therapy is an important one, and reaching out for help is a big first step.
      Call, text, or email to learn more, ask questions, and see if we’re a good fit.

      C: 267-567-4966
      E: RSimonLSW@gmail.com

      1429 Walnut Street, Suite 1300
      Philadelphia, PA 19102 (include map)
    </p>
  </div>
</template>

<script>
  export default {
    locales: require('../i18n/Practice.js')
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
</style>
