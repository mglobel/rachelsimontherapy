<template>
  <div class="well">
    <div class="row">
      <div class="col-sm-5">
        <i class="fa fa-user-circle" aria-hidden="true"></i>
      </div>
      <div class="col-sm-7 text-left">
        <p>These are resources.</p>
      </div>
    </div>
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
