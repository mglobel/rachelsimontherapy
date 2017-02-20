<template>
  <div id="app" class="container">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  components: { Navbar }
}
</script>

<style lang="sass">

  // Bootstrap
  $icon-font-path: '../node_modules/bootstrap-sass/assets/fonts/bootstrap/';
  $link-color: #42b983;
  $brand-success: #42b983;
  @import 'node_modules/bootstrap-sass/assets/stylesheets/bootstrap';

  // font awesome
  $fa-font-path: '../node_modules/font-awesome/fonts/';
  @import 'node_modules/font-awesome/scss/font-awesome';

  p
    text-align: justify

  .well
    animation: appear .4s forwards

  @keyframes appear
    0% { opacity: 0 }
    100%   { opacity: 1 }

  body
    background-image: url("assets/bg-image.jpg");
</style>
