const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs')
app.use('/styles', express.static(path.join(__dirname, 'styles')))
app.use('/api', express.static(path.join(__dirname, 'api')))

news_list_all = [
    {"id":"29684","date":"16/5/2567","title":`ST Dub Project 17 พร้อมรับชมทุกช่องทางแล้ว!`,"thumnail":"https://firebasestorage.googleapis.com/v0/b/stdubteam-website.appspot.com/o/news-webp%2Fst-pj17-thumnail-4.webp?alt=media"},
    {"id":"18939","date":"17/4/2567","title":`ขณะนี้เว็บไซต์กลับมาใช้งานได้ตามปกติแล้ว`,"thumnail":"https://firebasestorage.googleapis.com/v0/b/stdubteam-website.appspot.com/o/news-webp%2Fst-pr-news-170425671420.webp?alt=media"},
    {"id":"95943","date":"13/4/2567","title":`มาแล้ว! กับผลงานฝึกพากย์ไทยตัวใหม่จาก ST Dub Team`,"thumnail":"https://firebasestorage.googleapis.com/v0/b/stdubteam-website.appspot.com/o/projects-webp%2Fst-pj-16-thumnail.webp?alt=media"},
    {"id":"22066","date":"31/1/2567","title":"เว็บไซต์ ST Dub Team เปิดให้เข้าชมได้แล้ว!!","thumnail":"https://firebasestorage.googleapis.com/v0/b/stdubteam-website.appspot.com/o/news-webp%2Fst-news-20240131001.webp?alt=media"},
]

const icon_link = "https://firebasestorage.googleapis.com/v0/b/stdubteam-website.appspot.com/o/webassets-webp%2Flogo.webp?alt=media"
const cover_link = "https://firebasestorage.googleapis.com/v0/b/stdubteam-website.appspot.com/o/webassets-webp%2Fog-cover%20(1).webp?alt=media"

app.get('/', (req, res) => {
    res.render(`main`, {
        "title": "ST Dub Team Official Website",
        "icon": icon_link,
        "url": req.protocol + "://" + req.hostname + "/",
        "full_url": req.protocol + "://" + req.hostname + req.originalUrl,
        "thumnail": cover_link,
        "to_page": `pages/homepage`,
        "css": `styles/homepage.css`
    })
})

app.get('/about', (req, res) => {
    res.render(`main`, {
        "title": "เกี่ยวกับเรา - ST Dub Team",
        "icon": icon_link,
        "url": req.protocol + "://" + req.hostname + "/",
        "full_url": req.protocol + "://" + req.hostname + req.originalUrl,
        "thumnail": cover_link,
        "to_page": `pages/about`,
        "css": `styles/about.css`
    })
})

app.get('/news', (req, res) => {
    res.render(`main`, {
        "title": "ข่าวสาร - ST Dub Team",
        "icon": icon_link,
        "url": req.protocol + "://" + req.hostname + "/",
        "full_url": req.protocol + "://" + req.hostname + req.originalUrl,
        "thumnail": cover_link,
        "to_page": `pages/news`,
        "css": `styles/news.css`,
        "news_list":news_list_all
    })
})

app.get('/news/id/:id', (req, res) => {
    let find_status = false
    let content = []
    for (let i = 0; i < news_list_all.length; i++) {
        if (news_list_all[i]["id"] == req.params["id"]) {
            find_status = true
            content.push(news_list_all[i])
        }
    }
    if (find_status) {
        res.render(`main`, {
            "title": content[0]["title"] + " - ST Dub Team",
            "title_content": content[0]["title"],
            "icon": icon_link,
            "url": req.protocol + "://" + req.hostname + "/",
            "full_url": req.protocol + "://" + req.hostname + req.originalUrl,
            "thumnail": content[0]["thumnail"],
            "date": content[0]["date"],
            "to_page": `pages/view_news`,
            "css": `../../styles/view_news.css`,
            "news_id": content[0]["id"]
        })
    } else {
        res.redirect("/news")
    }
    find_status = false
})

app.get('/members', (req, res) => {
    res.render(`main`, {
        "title": "สมาชิกในทีม - ST Dub Team",
        "icon": icon_link,
        "url": req.protocol + "://" + req.hostname + "/",
        "full_url": req.protocol + "://" + req.hostname + req.originalUrl,
        "thumnail": cover_link,
        "to_page": `pages/members`,
        "css": `styles/members.css`
    })
})

app.get('/projects', (req, res) => {
    res.render(`main`, {
        "title": "ผลงานของเรา - ST Dub Team",
        "icon": icon_link,
        "url": req.protocol + "://" + req.hostname + "/",
        "full_url": req.protocol + "://" + req.hostname + req.originalUrl,
        "thumnail": cover_link,
        "to_page": `pages/projects`,
        "css": `styles/projects.css`
    })
})

app.get('/contact', (req, res) => {
    res.render(`main`, {
        "title": "ติดต่อเรา - ST Dub Team",
        "icon": icon_link,
        "url": req.protocol + "://" + req.hostname + "/",
        "full_url": req.protocol + "://" + req.hostname + req.originalUrl,
        "thumnail": cover_link,
        "to_page": `pages/contact`,
        "css": `styles/contact.css`
    })
})

app.listen(port, () => {
    console.log(`running as port ${port}`)
})

module.exports = app