<template>
  <header>
    <nav class="navbar">
      <NuxtLink class="navbar-button" to="/">หน้าหลัก</NuxtLink>
      <NuxtLink class="navbar-button" to="/about">เราคือใคร</NuxtLink>
      <NuxtLink class="navbar-button" to="/works">งานของเรา</NuxtLink>
      <NuxtLink class="navbar-button" to="/contact">ติดต่อเรา</NuxtLink>
    </nav>
  </header>
  <main></main>
  <slot />
</template>

<style scoped>
.navbar {
    position: fixed;
    right: 10px;
    top: 5px;
}

.navbar-button {
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  background-color: #000000;
  color: #ffffff;
  display: inline-block;
  padding: 8px 15px 8px 15px;
  margin: 10px 5px 10px 5px;
  border-radius: 25px;
  box-shadow: #000000 0px 0px 3px;
}

.navbar-button:hover {
  transition: 0.2s;
  color: #000000;
  background-color: #ffffff;
}

.router-link-active {
  color: #000000;
  background-color: #ffffff;
}
</style>
