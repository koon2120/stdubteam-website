<script setup>
useSeoMeta({
  title: "ST Dub Team",
  ogTitle: "ST Dub Team",
  description:
    "ST Dub Team คือทีมพากย์ไทยที่จะสร้างสรรค์ผลงานที่หลากหลาย และคุณภาพ!",
  ogDescription:
    "ST Dub Team คือทีมพากย์ไทยที่จะสร้างสรรค์ผลงานที่หลากหลาย และคุณภาพ!",
  ogImage: "/images/logo.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div class="header">
    <h1 class="header-title">ST DUB TEAM</h1>
    <p class="header-subtitle">ยินดีต้อนรับสู่ทีมพากย์ ST Dub Team!</p>
  </div>
  <div class="about">
    <h1 class="about-title">เราคือใคร?</h1>
    <p class="about-subtitle">
      เราเป็นทีมฝีกพากย์ ที่เริ่มต้นมาจากทีมเล็ก ที่มีสมาชิกไม่มากนัก
      สู่สมาชิกในทีมกว่า 20 คน และผลงานฝึกพากย์ต่างๆ กว่า 10 โปรเจกต์
      เราตั้งเป้าไว้ว่าจะเป็นทีมพากย์ที่สามารถสร้างผลงานได้อย่างคุณภาพและเป็นมาตรฐาน
      แม้เรายังอ่อนประสบการณ์ แต่เราจะพัฒนาให้ดีที่สุด
      เพื่อสร้างสรรค์ผลงานที่ยอดเยื่ยมต่อไป
    </p>
    <NuxtLink class="about-button-viewmore" to="/about">อ่านเพิ่มเติม</NuxtLink>
  </div>
  <div class="works">
    <h1 class="works-title">งานของเรา</h1>
    <p class="works-subtitle">
      เรามีโปรเจกต์ฝึกพากย์ต่างๆ ที่เผยแพร่บนช่องทาง Social Media เช่น Facebook,
      YouTube และ Tiktok ทุกท่านสามารถดูผลงานของเราได้ที่นี่
    </p>
    <NuxtLink class="works-button-viewmore" to="/works">ดูผลงาน</NuxtLink>
  </div>
  <div class="contact">
    <h1 class="contact-title">ช่องทางการติดต่อ</h1>
    <p class="contact-subtitle">
      หากคุณสนใจในทีมของเรา ไม่ว่าจะเป็นการสนใจเข้าร่วมทีม หรือสนใจร่วมงานกับทีม เราก็พร้อมที่จะติดต่อกลับไปหาคุณเสมอ
    </p>
    <NuxtLink class="contact-button-viewmore" to="/contact">ติดต่อเรา</NuxtLink>
  </div>
</template>

<style scoped>
.header {
  margin-top: 180px;
  margin-bottom: 250px;
}

.header-title {
  color: #4400ff;
  text-align: center;
  font-size: 120px;
  font-weight: 900;
  margin-top: 0;
  margin-bottom: 0;
}

.header-subtitle {
  color: #ede2ff;
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
}

.about {
  margin-bottom: 200px;
  margin-left: 80px;
}

.about-title {
  color: #4400ff;
  font-size: 50px;
  font-weight: 900;
  margin-top: 0;
  margin-bottom: 20px;
}

.about-subtitle {
  color: #ede2ff;
  font-size: 21px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  width: 800px;
}

.about-button-viewmore {
  display: inline-block;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  background-color: #000000;
  color: #ffffff;
  padding: 8px 15px 8px 15px;
  border-radius: 25px;
  margin-top: 30px;
}

.about-button-viewmore:hover {
  transition: 0.2s;
  color: #000000;
  background-color: #ffffff;
}

.works {
  margin-bottom: 230px;
  margin-left: 80px;
}

.works-title {
  color: #4400ff;
  font-size: 50px;
  font-weight: 900;
  margin-top: 0;
  margin-bottom: 20px;
}

.works-subtitle {
  color: #ede2ff;
  font-size: 21px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  width: 800px;
}

.works-button-viewmore {
  display: inline-block;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  background-color: #000000;
  color: #ffffff;
  padding: 8px 15px 8px 15px;
  border-radius: 25px;
  margin-top: 30px;
}

.works-button-viewmore:hover {
  transition: 0.2s;
  color: #000000;
  background-color: #ffffff;
}

.contact {
  margin-bottom: 230px;
  margin-left: 80px;
}

.contact-title {
  color: #4400ff;
  font-size: 50px;
  font-weight: 900;
  margin-top: 0;
  margin-bottom: 20px;
}

.contact-subtitle {
  color: #ede2ff;
  font-size: 21px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  width: 800px;
}

.contact-button-viewmore {
  display: inline-block;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  background-color: #000000;
  color: #ffffff;
  padding: 8px 15px 8px 15px;
  border-radius: 25px;
  margin-top: 30px;
}

.contact-button-viewmore:hover {
  transition: 0.2s;
  color: #000000;
  background-color: #ffffff;
}
</style>
