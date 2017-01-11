<template>
  <div class="well">
    <div class="row">
      <div class="col-sm-5 text-right">
        <i class="fa fa-transgender" aria-hidden="true"></i>
      </div>
      <div class="col-sm-7 text-left">
        <p v-translate>I am a therapist.</p>
      </div>
    </div>
    <div class="row text-center">
      <span v-translate>Change Language</span> : &nbsp;&nbsp;&nbsp;
      <button class="btn btn-default btn-xs" @click="$translate.setLang('en')">EN</button>
      <button class="btn btn-default btn-xs" @click="$translate.setLang('es')">ES</button>
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
