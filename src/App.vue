<script setup>
import { RouterView } from "vue-router";
import Footer from "./components/app-footer.vue";

</script>

<template>
  <main>
    <RouterView />
  </main>
  <Footer></Footer>
</template>

<style scoped>
.menu {
  position: absolute;
  right: 15px;
  top: 15px;
}

.st-logo {
  display: none;
}

.navbar-link {
  color: #ffffff;
  text-decoration: none;
  font-weight: 800;
  display: inline-block;
  font-size: 26px;
  padding-left: 40px;
}

.router-link-active {
  color: #ff00ff;
}

.nav-pc {
  display: none;
}

main {
  min-height: 500px;
}

@media only screen and (min-width: 768px) {
  .st-logo {
    display: inline;
    width: 70px;
    position: absolute;
    left: 10px;
    top: 0;
  }

  .menu {
    display: none;
  }

  .nav-pc {
    position: absolute;
    right: 10px;
    top: 30%;
    display: inline;
  }

  .navbar-link-pc {
    text-decoration: none;
    font-weight: 800;
    font-size: 21px;
    display: inline-block;
    margin-right: 25px;
    color: #ffffff;
  }

  .navbar-link-pc:hover {
    transition: 0.3s;
    color: #ffdfff;
  }

  .router-link-active {
    color: #ff00ff;
  }
}
</style>
