<template>
  <div class="well">
    <div class="row">
      <div class="col-sm-5 text-right">
        <i class="fa fa-transgender" aria-hidden="true"></i>
      </div>
      <div class="col-sm-7 text-left">
        <p v-translate>Finding a therapist, especially a queer or trans-affirming therapist, can be a daunting and complex task.  I’m glad you made it here. I am a psychotherapist and licensed social worker in Center City Philadelphia, and I work collaboratively with a wide range of clients who seek change, insight, and fulfillment. I work regularly with individual adults, children, and adolescents, as well as with families and couples.</p>
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
</style>
