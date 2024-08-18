<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/app-header.vue";
import Footer from "./components/app-footer.vue";
import Navbar from "./components/app-navbar.vue";

const navbarStatus = ref(false);

function onNavbarLinkClick() {
  navbarStatus.value = false;
}

</script>

<template>
  <Header>
    <template v-slot:showMenu>
      <Navbar :navbarStatus="navbarStatus">
        <RouterLink class="navbar-link" to="/" @click="onNavbarLinkClick"
          >HOME</RouterLink
        ><br />
        <RouterLink class="navbar-link" to="/works" @click="onNavbarLinkClick"
          >WORKS</RouterLink
        >
      </Navbar>
    </template>
    <img
      class="st-logo"
      src="/public/images/st-dub-team-logo-no-bg.png"
      alt="ST Dub Team Logo"
    />
    <svg
      class="menu"
      @click="navbarStatus = !navbarStatus"
      xmlns="http://www.w3.org/2000/svg"
      height="40px"
      viewBox="0 -960 960 960"
      width="40px"
      fill="#e8eaed"
    >
      <path
        d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z"
      />
    </svg>
    <nav class="nav-pc">
      <RouterLink class="navbar-link-pc" to="/" @click="onNavbarLinkClick"
        >HOME</RouterLink
      >
      <RouterLink class="navbar-link-pc" to="/works" @click="onNavbarLinkClick"
        >WORKS</RouterLink
      >
    </nav>
  </Header>
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
  padding-top: 70px;
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
