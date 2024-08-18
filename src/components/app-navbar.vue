<script setup>
const props = defineProps(["navbarStatus"]);
</script>

<template>
  <nav v-if="props.navbarStatus">
    <slot></slot>
  </nav>
</template>

<style scoped>
nav {
  background-color: #000000;
  position: absolute;
  height: 100%;
  width: 100%;
  padding-top: 100px;
}
</style>
