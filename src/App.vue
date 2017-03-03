<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <footerBar></footerBar>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import FooterBar from './components/FooterBar'

export default {
  components: { Navbar, FooterBar }
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


  body
    font-family: 'Roboto', sans-serif
    font-size: 14px
    background-color: #F8F8F8

    @media(min-width: 325px)
      font-size: 16px

    @media(min-width: 600px)
      font-size: 18px

    @media(min-width: 800px)
      font-size: 22px

  .well
    animation: appear .7s forwards

  @keyframes appear
    0% { opacity: 0 }
    100%   { opacity: 1 }

  h1, h2, h3, h4, h5, .nav  
    font-family: 'Dosis', sans-serif
    font-weight: regular

  h1, h2, h3, h4, h5
    margin-top: 10px
  
  h1
    color: #16BED7
    font-size: 2.2em
    font-weight: bold
    margin-bottom: 1em

  h2
    font-size: 1.4em
  h3
    font-size: 1.5em
  h4
    color: #16BED7
    margin-bottom: 1em

  p
    max-width: 800px
    line-height: 1.8
    font-size: .9em
    padding-bottom: 1.5em

  ul
    padding-left: 18px

</style>
