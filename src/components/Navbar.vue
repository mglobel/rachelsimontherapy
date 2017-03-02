<template>
  <nav class="navbar navbar-default">
    <!-- rainbow here -->
    <div class="container-fluid">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
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

</style>
