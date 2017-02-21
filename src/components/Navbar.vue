<template>
  <nav class="navbar navbar-default">


    <div id="hamburgler" v-on:click="checkNav" class="hamburgler-icon-wrapper hidden-md hidden-lg">
      <span class="hamburgler-icon"></span>
    </div>

    <!-- rainbow here -->
    <ul class="nav navbar-nav navbar-right hidden-xs hidden-sm">
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
  </nav>
</template>

<script>
  // document.getElementById('hamburgler').addEventListener('click', checkNav);
  // window.addEventListener("keyup", function(e) {
  //   if (e.keyCode == 27) closeNav();
  // }, false);

  // function checkNav() {
  //   if (document.body.classList.contains('hamburgler-active')) {
  //     closeNav();
  //   } else {
  //     openNav();
  //   }
  // }

  // function closeNav() {
  //   document.body.classList.remove('hamburgler-active');
  // }

  // function openNav() {
  //   document.body.classList.add('hamburgler-active');
  // }

  // new Vue({
  //   el: '#hamburgler',
  // })

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

  .hamburgler-icon-wrapper {
    position: absolute;
    top: 1em;
    right: 1em;
    height: 26px;
    width: 26px;
    cursor: pointer
  }

  .hamburgler-icon,
  .hamburgler-icon:before,
  .hamburgler-icon:after {
    content: '';
    position: absolute;
    border-radius: 1em;
    height: 2px;
    width: 26px;
    background: black;
    transition: all 0.2s ease
  }

  .hamburgler-icon {
    top: 0.75em
  }

  .hamburgler-icon:before {
    top: -0.55em
  }

  .hamburgler-icon:after {
    top: 0.55em
  }

  .hamburgler-active .hamburgler-icon {
    background: transparent;
    transform: rotate(-135deg)
  }

  .hamburgler-active .hamburgler-icon:before,
  .hamburgler-active .hamburgler-icon:after {
    top: 0
  }

  .hamburgler-active .hamburgler-icon:before {
    transform: rotate(90deg)
  }

  .hamburgler-active .hamburgler-icon,
  .hamburgler-active .hamburgler-icon:before,
  .hamburgler-active .hamburgler-icon:after {
    background: white
  }

  .hamburgler-menu {
    transition: all 0.4s ease;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    text-align: center
  }

  .hamburgler-active .hamburgler-menu {
    opacity: 1;
    pointer-events: initial;
  }

  .hamburgler-menu-list {
    display: block;
    transition: all 0.4s ease;
    padding: 0;
    list-style-type: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.2)
  }

  .hamburgler-active .hamburgler-menu-list {
    transform: translate(-50%, -50%) scale(1)
  }

</style>
