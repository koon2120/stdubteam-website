<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <footer>
    <img
      class="st-logo"
      src="/images/st-dub-team-logo-no-bg.png"
      alt="ST Dub Team Logo"
    />
    <p class="desc">
      ทีมพากย์ไทย ST Dub Team เรามุ่งเน้นที่จะพัฒนางานพากย์ให้ได้คุณภาพ
      และมาตรฐาน เพื่อสร้างสรรค์ผลงานพากย์ไทยไปสู่ทุกคน
    </p>
    <p class="link">
      <RouterLink class="in-link" to="/">หน้าหลัก</RouterLink> |
      <RouterLink class="in-link" to="/works">ผลงานของเรา</RouterLink>
    </p>
  </footer>
</template>

<style scoped>
footer {
  color: #ffffff;
  background-color: #000000;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 20px;
}

.desc {
  font-size: 12px;
  width: 80%;
}

.link {
  font-size: 12px;
}

.in-link {
  color: #ffffff;
  text-decoration: none;
}

.in-link:hover {
  text-decoration: underline;
}

.st-logo {
  width: 60px;
}

@media only screen and (min-width: 768px) {
  footer {
    padding-left: 60px;
  }

  .desc {
    font-size: 16px;
    width: 30%;
  }

  .link {
    font-size: 15px;
  }

  .st-logo {
    width: 80px;
  }
}
</style>
