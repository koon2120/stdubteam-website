<script setup lang="ts">
useSeoMeta({
  title: "ผลงานของเรา - ST Dub Team",
  ogTitle: "ผลงานของเรา - ST Dub Team",
  description:
    "ST Dub Team ยินดีต้อนรับทุกท่าน!! เราเป็นทีมฝึกพากย์หลากหลายแนว จากการรวมตัวของผู้ที่สนใจในการพากย์!",
  ogDescription:
    "ST Dub Team ยินดีต้อนรับทุกท่าน!! เราเป็นทีมฝึกพากย์หลากหลายแนว จากการรวมตัวของผู้ที่สนใจในการพากย์!",
  ogImage:
    "https://firebasestorage.googleapis.com/v0/b/stdubteam-website.appspot.com/o/webassets-webp%2Fog-cover%20(1).webp?alt=media",
  twitterCard: "summary_large_image",
});
const { data } = await useFetch('/api/project_data_all')
const project_data_all = data.value
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
      src="https://firebasestorage.googleapis.com/v0/b/stdubteam-website.appspot.com/o/webassets-webp%2Fst-dub-website-obj-004-4.webp?alt=media"
    />
  </p>
  <div class="content">
    <figure v-for="project_data in project_data_all">
      <div class="pj">
      <p class="pj_in_img">
        <img
          class="pj_img"
          loading="lazy"
          v-bind:src="project_data.project_image"
        />
      </p>
      <h1 class="pj_name">
        {{ project_data.project_name }}
      </h1>
      <p class="pj_link">
        รับชมได้ที่ :
        <a
          class="pj_link_in pj_link_fb"
          v-show="project_data.facebook_link"
          v-bind:href="project_data.facebook_link"
          > Facebook </a
        >
        <a
          class="pj_link_in pj_link_tk"
          v-show="project_data.tiktok_link"
          v-bind:href="project_data.tiktok_link"
          > Tiktok </a
        >
        <a
          class="pj_link_in pj_link_bili"
          v-show="project_data.bilibili_link"
          v-bind:href="project_data.bilibili_link"
          > Bilibili </a
        >
        <a
          class="pj_link_in pj_link_yt"
          v-show="project_data.youtube_link"
          v-bind:href="project_data.youtube_link"
          > YouTube </a
        >
      </p>
    </div>
    </figure>
  </div>
</template>

<style scoped>
figure {
  margin: 0;
}

.img_obj_004 {
  width: 70%;
}

.img_obj_004_in {
  text-align: center;
}

.content {
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 5%;
}

.pj_link {
  text-decoration: none;
}

.pj {
  padding-left: 20px;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 5px;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 20px;
  background-color: #eedde8;
  border-style: solid;
  border-width: 3px;
  border-color: #8d005e;
  transition: 0.2s;
}

.pj_in_img {
  text-align: center;
}

.pj_img {
  width: 50%;
  border-radius: 10px;
  border-style: solid;
  border-width: 2px;
  border-color: white;
}

.pj_name {
  color: #0f0f0f;
  font-size: 22px;
  margin-top: 1px;
  margin-bottom: 0;
  text-align: center;
}

.pj_link {
  color: #1b1b1b;
  font-size: 13px;
  margin-top: 0;
  text-align: center;
}

.pj_link_in {
  text-decoration: none;
}
.pj_link_in:hover {
  text-decoration: underline;
}

.pj_link_fb {
  color: #0d31ff;
}

.pj_link_yt {
  color: #ff1212;
}

.pj_link_bli {
  color: #0d9eff;
}

.pj_link_tk {
  color: #ff0feb;
}

@media only screen and (max-width: 600px) {
  .img_obj_004 {
    width: 100%;
  }

  .content {
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 5%;
  }

  .pj {
    padding-left: 20px;
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 5px;
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 15px;
    border-style: solid;
    border-width: 2px;
    transition: 0.2s;
  }

  .pj_img {
    width: 75%;
    border-radius: 10px;
    border-style: solid;
    border-width: 1px;
    border-color: white;
  }

  .pj_name {
    color: #0f0f0f;
    font-size: 15px;
    margin-top: 1px;
    margin-bottom: 0;
  }

  .pj_link {
    color: #1b1b1b;
    font-size: 10px;
    margin-top: 0;
  }
}
</style>
