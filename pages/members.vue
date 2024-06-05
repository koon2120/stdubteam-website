<script setup lang="ts">
useSeoMeta({
  title: "สมาชิกในทีม - ST Dub Team",
  ogTitle: "สมาชิกในทีม - ST Dub Team",
  description:
    "ST Dub Team ยินดีต้อนรับทุกท่าน!! เราเป็นทีมฝึกพากย์หลากหลายแนว จากการรวมตัวของผู้ที่สนใจในการพากย์!",
  ogDescription:
    "ST Dub Team ยินดีต้อนรับทุกท่าน!! เราเป็นทีมฝึกพากย์หลากหลายแนว จากการรวมตัวของผู้ที่สนใจในการพากย์!",
  ogImage:
    "https://firebasestorage.googleapis.com/v0/b/stdubteam-website.appspot.com/o/webassets-webp%2Fog-cover%20(1).webp?alt=media",
  twitterCard: "summary_large_image",
});
const { data } = await useFetch('/api/members_data_all')
const members_data_all = data.value
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
      src="https://firebasestorage.googleapis.com/v0/b/stdubteam-website.appspot.com/o/webassets-webp%2Fst-dub-website-obj-004-3.webp?alt=media"
    />
  </p>
  <div class="content">
    <figure v-for="member_data in members_data_all">
      <a class="profile_link" v-bind:href="member_data.social">
        <div class="profile">
          <img
            class="profile_img"
            loading="lazy"
            v-bind:src="member_data.image"
          />
          <h1 class="profile_name">{{ member_data.name }}</h1>
          <p class="profile_role">{{ member_data.role }}</p>
        </div>
      </a>
    </figure>
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
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 5%;
}

.profile_link {
  text-decoration: none;
}

.profile {
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

.profile:hover {
  opacity: 80%;
}

.profile_img {
  width: 14%;
  border-radius: 10px;
  border-style: solid;
  border-width: 2px;
  border-color: white;
}

.profile_name {
  color: #0f0f0f;
  font-size: 22px;
  margin-top: 1px;
  margin-bottom: 0;
}

.profile_role {
  color: #1b1b1b;
  font-size: 13px;
  margin-top: 0;
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

  .profile {
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

  .profile_img {
    width: 35%;
    border-radius: 10px;
    border-style: solid;
    border-width: 1px;
    border-color: white;
  }

  .profile_name {
    color: #0f0f0f;
    font-size: 18px;
    margin-top: 1px;
    margin-bottom: 0;
  }

  .profile_role {
    color: #1b1b1b;
    font-size: 10px;
    margin-top: 0;
  }
}
</style>
