<script setup lang="ts">
useSeoMeta({
  title: "ST Dub Team Official Website",
  ogTitle: "ST Dub Team Official Website",
  description:
    "ST Dub Team ยินดีต้อนรับทุกท่าน!! เราเป็นทีมฝึกพากย์หลากหลายแนว จากการรวมตัวของผู้ที่สนใจในการพากย์!",
  ogDescription:
    "ST Dub Team ยินดีต้อนรับทุกท่าน!! เราเป็นทีมฝึกพากย์หลากหลายแนว จากการรวมตัวของผู้ที่สนใจในการพากย์!",
  ogImage:
    "https://firebasestorage.googleapis.com/v0/b/stdubteam-website.appspot.com/o/webassets-webp%2Fog-cover%20(1).webp?alt=media",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <img
    class="img_obj_001"
    loading="lazy"
    src="https://firebasestorage.googleapis.com/v0/b/stdubteam-website.appspot.com/o/webassets-webp%2Fst-dub-website-obj-001.webp?alt=media"
  />
  <div class="head_group">
    <img
      class="logo"
      loading="lazy"
      src="https://firebasestorage.googleapis.com/v0/b/stdubteam-website.appspot.com/o/webassets-webp%2Flogo%20(1).webp?alt=media"
    />
    <img
      class="img_obj_002"
      loading="lazy"
      src="https://firebasestorage.googleapis.com/v0/b/stdubteam-website.appspot.com/o/webassets-webp%2Fst-dub-website-obj-002.webp?alt=media"
    />
  </div>
  <div class="img_obj_003_group">
    <NuxtLink to="/about"
      ><img
        class="img_obj_003"
        loading="lazy"
        src="https://firebasestorage.googleapis.com/v0/b/stdubteam-website.appspot.com/o/webassets-webp%2Fst-dub-website-obj-003-1.webp?alt=media" /></NuxtLink
    ><br />
    <NuxtLink to="/news"
      ><img
        class="img_obj_003"
        loading="lazy"
        src="https://firebasestorage.googleapis.com/v0/b/stdubteam-website.appspot.com/o/webassets-webp%2Fst-dub-website-obj-003-2.webp?alt=media" /></NuxtLink
    ><br />
    <NuxtLink to="/members"
      ><img
        class="img_obj_003"
        loading="lazy"
        src="https://firebasestorage.googleapis.com/v0/b/stdubteam-website.appspot.com/o/webassets-webp%2Fst-dub-website-obj-003-3.webp?alt=media" /></NuxtLink
    ><br />
    <NuxtLink to="/projects"
      ><img
        class="img_obj_003"
        loading="lazy"
        src="https://firebasestorage.googleapis.com/v0/b/stdubteam-website.appspot.com/o/webassets-webp%2Fst-dub-website-obj-003-4.webp?alt=media" /></NuxtLink
    ><br />
    <NuxtLink to="/contact"
      ><img
        class="img_obj_003"
        loading="lazy"
        src="https://firebasestorage.googleapis.com/v0/b/stdubteam-website.appspot.com/o/webassets-webp%2Fst-dub-website-obj-003-5.webp?alt=media" /></NuxtLink
    ><br />
  </div>
</template>

<style scoped>
.head_group {
  display: block;
}

.logo {
  width: 25%;
  margin-left: 8%;
  margin-top: 10%;
  display: block;
}

.img_obj_002 {
  width: 35%;
  display: block;
  margin-left: 5%;
  margin-top: 5%;
}

.img_obj_003_group {
  margin-left: 5%;
  margin-top: 7%;
  margin-bottom: 2%;
}

.img_obj_003 {
  width: 30%;
  transition: 0.2s;
  margin-top: -7px;
  margin-bottom: -7px;
  transition: 0.2s;
}

.img_obj_003:hover {
  opacity: 80%;
}

@media only screen and (max-width: 900px) {
  .logo {
    width: 50%;
    margin-left: 8%;
    margin-top: 10%;
  }

  .img_obj_002 {
    width: 45%;
    margin-left: 5%;
    margin-top: 5%;
  }

  .img_obj_003_group {
    margin-left: 5%;
    margin-top: 7%;
    margin-bottom: 2%;
  }

  .img_obj_003 {
    width: 50%;
  }
}

@media only screen and (max-width: 450px) {
  .logo {
    width: 80%;
    margin-left: 8%;
    margin-top: 10%;
  }

  .img_obj_002 {
    width: 85%;
    margin-left: 5%;
    margin-top: 5%;
  }

  .img_obj_003_group {
    margin-left: 5%;
    margin-top: 7%;
    margin-bottom: 2%;
  }

  .img_obj_003 {
    width: 80%;
  }
}
</style>
