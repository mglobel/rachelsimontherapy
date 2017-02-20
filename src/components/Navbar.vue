<template>
  <nav class="navbar navbar-default">
    <!-- rainbow here -->
    <div>
      <router-link class="navbar-brand" to="/">Rachel Simon, LSW MEd</router-link>
    </div>
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
      <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
    </ul>
  </nav>
</template>

<script>
  export default {
  }
</script>
