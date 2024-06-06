<script setup></script>

<template>
  <img
    class="img_obj_001"
    loading="lazy"
    src="https://firebasestorage.googleapis.com/v0/b/stdubteam-website.appspot.com/o/webassets-webp%2Fst-dub-website-obj-001.webp?alt=media"
  />
  <div class="content">
    <ContentDoc>
      <template v-slot="{ doc }">
        <article>
          <p class="content_thumnail_in">
            <img
              class="content_thumnail"
              loading="lazy"
              v-bind:src="doc.head.image"
            />
          </p>
          <p class="content_date">{{ doc.timedate }}</p>
          <h1 class="content_title">{{ doc.title }}</h1>
          <hr class="content_cut" />
          <div class="content_show">
            <ContentRenderer :value="doc" />
          </div>
        </article>
      </template>
      <template #not-found>
        <div style="text-align: center">
          <h1>ไม่พบหน้าที่คุณต้องการ</h1>
          <NuxtLink to="/">กลับหน้าหลัก</NuxtLink>
        </div>
      </template>
    </ContentDoc>
  </div>
</template>

<style scoped>
.img_obj_004_in {
  text-align: center;
}

.content {
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 5%;
  margin-bottom: 10%;
}

.content_thumnail_in {
  text-align: center;
}

.content_thumnail {
  width: 70%;
  margin-bottom: 20px;
}

.content_date {
  font-size: 80%;
  margin-top: 0;
  margin-bottom: 0;
}

.content_title {
  font-size: 250%;
  margin-top: 0;
  margin-bottom: 0;
}

.content_cut {
  margin-top: 30px;
  margin-bottom: 30px;
}

.content_show {
  overflow: visible;
}

p {
  font-size: 120%;
  margin-top: 0;
  margin-bottom: 0;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: rgb(206, 206, 206);
  text-decoration: underline;
}

@media only screen and (max-width: 600px) {
  .content {
    margin-left: 10%;
    margin-right: 10%;
  }

  .content_thumnail {
    width: 90%;
    margin-bottom: 20px;
  }

  .content_date {
    font-size: 60%;
  }

  .content_title {
    font-size: 160%;
  }

  .content_text {
    font-size: 80%;
  }

  .content_show {
  overflow: scroll;
}
}
</style>
