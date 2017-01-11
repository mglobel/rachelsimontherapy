<template>
  <nav class="navbar navbar-default">
    <!-- rainbow here -->
    <div>
      <router-link class="navbar-brand" to="/"><i class="fa fa-transgender" aria-hidden="true"></i> {{$store.state.appTitle}}</router-link>
    </div>
    <ul class="nav navbar-nav navbar-right">
      <li>
        <router-link to="/speaking" class="nav-item nav-link"> Speaking </router-link>
      </li>
      <li>
        <router-link to="/resources" class="nav-item nav-link"> Resources </router-link>
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
