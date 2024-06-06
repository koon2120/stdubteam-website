<script setup>
useSeoMeta({
  title: "ข่าวสาร - ST Dub Team",
  ogTitle: "ข่าวสาร - ST Dub Team",
  description:
    "ST Dub Team ยินดีต้อนรับทุกท่าน!! เราเป็นทีมฝึกพากย์หลากหลายแนว จากการรวมตัวของผู้ที่สนใจในการพากย์!",
  ogDescription:
    "ST Dub Team ยินดีต้อนรับทุกท่าน!! เราเป็นทีมฝึกพากย์หลากหลายแนว จากการรวมตัวของผู้ที่สนใจในการพากย์!",
  ogImage:
    "https://firebasestorage.googleapis.com/v0/b/stdubteam-website.appspot.com/o/webassets-webp%2Fog-cover%20(1).webp?alt=media",
  twitterCard: "summary_large_image",
});

const data = await queryContent("news", "id")
  .sort({ 'content-no': -1 })
  .find()


</script>

<template>
  <img
    class="img_obj_001"
    loading="lazy"
    src="https://firebasestorage.googleapis.com/v0/b/stdubteam-website.appspot.com/o/webassets-webp%2Fst-dub-website-obj-001.webp?alt=media"
  />
  <p class="img_obj_004_in">
    <img
      loading="lazy"
      class="img_obj_004"
      src="https://firebasestorage.googleapis.com/v0/b/stdubteam-website.appspot.com/o/webassets-webp%2Fst-dub-website-obj-004-2.webp?alt=media"
    />
  </p>
  <div class="content">
    <figure v-for="news_list in data">
      <NuxtLink class="news_link" v-bind:to="news_list._path">
        <div class="news">
          <p class="news_date">{{ news_list.timedate }}</p>
          <h1 class="news_title">{{ news_list.title }}</h1>
        </div>
      </NuxtLink>
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

.news_link {
  text-decoration: none;
}

.news {
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

.news:hover {
  opacity: 80%;
}

.news_title {
  color: #0f0f0f;
  font-size: 22px;
  margin-top: 0;
}

.news_date {
  color: #1b1b1b;
  font-size: 13px;
  margin-top: 1px;
  margin-bottom: 0;
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

  .news {
    padding-left: 20px;
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 15px;
    border-style: solid;
    border-width: 2px;
    transition: 0.2s;
  }

  .news_title {
    color: #0f0f0f;
    font-size: 18px;
    margin-top: 1px;
    margin-bottom: 0;
  }

  .news_date {
    color: #1b1b1b;
    font-size: 10px;
    margin-top: 0;
  }
}
</style>
