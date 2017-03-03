<template>
  <nav class="navbar navbar-default">
    <!-- rainbow here -->
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link to="/" class="navbar-brand">Rachel Simon, LSW MEd</router-linka>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <router-link to="/" class="nav-item nav-link"> Home </router-link>
          </li>
          <li>
            <router-link to="/therapy" class="nav-item nav-link"> Therapy </router-link>
          </li>
          <li>
            <router-link to="/training" class="nav-item nav-link"> Training </router-link>
          </li>
          <li>
            <router-link to="/contact" class="nav-item nav-link"> Contact </router-link>
          </li>
        </ul>
      </div>
  </nav>
</template>

<script>
  export default {
    methods: {
      checkNav: function (message) {
        alert('Open Nav Pane')
      }
    }
  }
</script>

<style scoped>

  .nav {
    padding-right: 1rem;
  }

  .navbar {
    margin-bottom: 0;
    padding: .8em 0;
  }

  .navbar-default {
    background-image: url("../assets/nav-bg.jpg");
  }

  .navbar-brand {
    color: #F8F8F8;
    font-size: 1.3em;
  }

  .navbar-default .navbar-toggle .icon-bar {
    background-color: #F8F8F8;
  }

  .navbar-default .navbar-nav > li > a {
    color: #F8F8F8;
  }

</style>
