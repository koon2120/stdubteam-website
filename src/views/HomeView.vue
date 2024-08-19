<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="header">
        <img class="header-logo" src="/images/st-dub-team-logo-no-bg.png" alt="ST Dub Team Logo">
        <p class="title">ขอต้อนรับสู่ทีมพากย์<br>ST Dub Team!</p>
    </div>
    <div id="about" class="about">
        <h3 class="about-title">เราคือใคร?</h3>
        <p class="about-desc">เราเป็นทีมพากย์ที่สร้างสรรค์ผลงานพากย์ไทย โดยจุดเริ่มต้นของเรานั่นคือการตั้งทีมพากย์เพื่อพากย์ผลงานที่เราทำกันเอง ปัจจุบันเรามีสมาชิกกว่า 20 คน พร้อมผลงานฝึกพากย์ต่างๆ มากมาย</p>
    </div>
    <div id="social" class="social">
        <h3 class="social-title">ช่องทางการติดตาม</h3>
        <p class="social-desc">คุณสามารถติดตามผลงานของเราได้ที่ : </p>
        <ul class="social-list">
            <li class="social-link"><a class="social-in-link" href="https://www.facebook.com/STDubTeam" target="_blank">Facebook Page</a></li>
            <li class="social-link"><a class="social-in-link" href="https://www.youtube.com/@STDubTeam" target="_blank">YouTube</a></li>
            <li class="social-link"><a class="social-in-link" href="https://www.tiktok.com/@stdubteam" target="_blank">TikTok</a></li>
            <li class="social-link"><a class="social-in-link" href="https://www.bilibili.tv/en/space/1075055737" target="_blank">Bilibili Global</a></li>
        </ul>
    </div>
    <div id="contact" class="contact">
        <h3 class="contact-title">ติดต่อเรา</h3>
        <p class="contact-desc">หากต้องการติดต่อสอบถามข้อมูล หรือร่วมงานกัน สามารถติดต่อเราผ่านทางอีเมล : <b><a class="contact-link" href="mailto:stdubteam@gmail.com">stdubteam@gmail.com</a></b></p>
    </div>
</template>
<style scoped>
.header {
    background-color: #000000;
    height: 700px;
    padding-top: 100px;
    text-align: center;
}

.header-logo {
    width: 300px;
}

.title {
    color: #ffffff;
    margin-top: -30px;
    font-size: 18px;
    font-weight: 700;
}

.about {
    padding-top: 230px;
    padding-bottom: 230px;
    padding-left: 20px;
    background-color: #ececec;
}

.about-title {
    font-size: 26px;
    margin-top: 0;
    margin-bottom: 10px;
}

.about-desc {
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 15px;
    width: 90%;
}

.social {
    padding-top: 230px;
    padding-bottom: 230px;
    padding-left: 20px;
    background-color: #ffffff;
}

.social-title {
    font-size: 26px;
    margin-top: 0;
    margin-bottom: 0;
}

.social-desc {
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 12px;
}

.social-list {
    list-style-type: none;
    padding-left: 0;
}

.social-in-link {
    transition: 0.3s;
    text-decoration: none;
    color: #ffffff;
    font-weight: 700;
    font-size: 12px;
    background-color: #000000;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 5px;
}

.social-in-link:hover {
    background-color: #d400ff;
}

.contact {
    padding-top: 230px;
    padding-bottom: 230px;
    padding-left: 20px;
    background-color: #ececec;
}

.contact-title {
    font-size: 26px;
    margin-top: 0;
    margin-bottom: 10px;
}

.contact-desc {
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 15px;
    width: 90%;
}

.contact-link {
    text-decoration: none;
    color: #000000;
}

.contact-link:hover {
    text-decoration: underline;
}
</style>