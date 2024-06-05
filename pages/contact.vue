<script setup lang="ts">
useSeoMeta({
  title: "ติดต่อเรา - ST Dub Team",
  ogTitle: "ติดต่อเรา - ST Dub Team",
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
  <p class="img_obj_004_in">
    <img
      class="img_obj_004"
      loading="lazy"
      src="https://firebasestorage.googleapis.com/v0/b/stdubteam-website.appspot.com/o/webassets-webp%2Fst-dub-website-obj-004-5.webp?alt=media"
    />
  </p>
  <div class="content">
    <p class="content_text">
      หากต้องการติดต่อเรา สามารถติดต่อเราได้ผ่านทางอีเมล stdubteam@gmail.com
      โปรดระบุรายละเอียดให้ครบถ้วน และรอการตอบกลับจากเรา!
    </p>
  </div>
</template>

<style scoped>
.img_obj_004 {
  width: 70%;
}

.img_obj_004_in {
  text-align: center;
}

.content {
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 5%;
}

.content_text {
  font-size: 150%;
}

@media only screen and (max-width: 600px) {
  .img_obj_004 {
    width: 100%;
  }

  .content_text {
    font-size: 100%;
  }
}
</style>
