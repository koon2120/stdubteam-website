<script setup lang="ts">
useSeoMeta({
  title: "เกี่ยวกับเรา - ST Dub Team",
  ogTitle: "เกี่ยวกับเรา - ST Dub Team",
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
      src="https://firebasestorage.googleapis.com/v0/b/stdubteam-website.appspot.com/o/webassets-webp%2Fst-dub-website-obj-004-1.webp?alt=media"
    />
  </p>
  <div class="content">
    <p class="content_text">ทุกๆ คนน่าจะมีความสนใจในอะไรสักอย่างใช่ไหมล่ะ..?</p>
    <p class="content_text">
      เริ่มต้นนั้นเรามีเพียงแค่ 2 คน ที่มีเป้าหมายสร้างอนิเมชั่น
      แต่ความคิดนี้ก็ถูกยุบไปด้วยอุปสรรค์หลายๆ อย่าง
      ทำให้มาโฟกัสกับทีมพากย์นั่นเอง
    </p>
    <p class="content_text">
      จาก 2 คนก็มีการรับสมัครสมาชิกเข้ามาเพิ่มเติม จนกลายเป็นหลาย 10
      คนในปัจจุบัน เรามีผลงานฝึกพากย์ที่สนุกๆ อยู่มากมาย
    </p>
    <p class="content_text">
      เป้าหมายของเราคือการที่ทีมได้พากย์ผลงานที่ยิ่งใหญ่สักครั้ง
      และหวังว่าจะเป็นอย่างนั้นในอนาคต!
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
