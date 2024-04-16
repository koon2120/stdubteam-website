const express = require('express')
const path = require('path')
const app = express()
const port = 80

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs')
app.use('/styles', express.static(path.join(__dirname, 'styles')))
app.use('/api', express.static(path.join(__dirname, 'api')))

const key = "11111"

news_list_all = [
    {"id":"22066","date":"31/1/2567","title":"เว็บไซต์ ST Dub Team เปิดให้เข้าชมได้แล้ว!!","thumnail":"https://i.ibb.co/tBMQ3Xt/st-news-20240131001.webp"},
    {"id":"95943","date":"13/4/2567","title":`มาแล้ว! กับผลงานฝึกพากย์ไทยตัวใหม่จาก ST Dub Team`,"thumnail":"https://i.ibb.co/jvbjDDT/st-pj-16-thumnail.webp"},
]

app.get('/', (req, res) => {
    res.render(`main-${key}`, {
        "title": "ST Dub Team Official Website",
        "icon": "https://i.ibb.co/yqLjh6S/st-dub-team-logo-bg-black.webp",
        "url": req.protocol + "://" + req.hostname + "/",
        "full_url": req.protocol + "://" + req.hostname + req.originalUrl,
        "thumnail": "https://i.ibb.co/TLVWXNG/og-cover-1.webp",
        "to_page": `pages/homepage-${key}`,
        "css": `styles/homepage-${key}.css`
    })
})

app.get('/about', (req, res) => {
    res.render(`main-${key}`, {
        "title": "เกี่ยวกับเรา - ST Dub Team",
        "icon": "https://i.ibb.co/yqLjh6S/st-dub-team-logo-bg-black.webp",
        "url": req.protocol + "://" + req.hostname + "/",
        "full_url": req.protocol + "://" + req.hostname + req.originalUrl,
        "thumnail": "https://i.ibb.co/TLVWXNG/og-cover-1.webp",
        "to_page": `pages/about-${key}`,
        "css": `styles/about-${key}.css`
    })
})

app.get('/news', (req, res) => {
    res.render(`main-${key}`, {
        "title": "ข่าวสาร - ST Dub Team",
        "icon": "https://i.ibb.co/yqLjh6S/st-dub-team-logo-bg-black.webp",
        "url": req.protocol + "://" + req.hostname + "/",
        "full_url": req.protocol + "://" + req.hostname + req.originalUrl,
        "thumnail": "https://i.ibb.co/TLVWXNG/og-cover-1.webp",
        "to_page": `pages/news-${key}`,
        "css": `styles/news-${key}.css`,
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
        res.render(`main-${key}`, {
            "title": content[0]["title"],
            "icon": "https://i.ibb.co/yqLjh6S/st-dub-team-logo-bg-black.webp",
            "url": req.protocol + "://" + req.hostname + "/",
            "full_url": req.protocol + "://" + req.hostname + req.originalUrl,
            "thumnail": content[0]["thumnail"],
            "date": content[0]["date"],
            "to_page": `pages/view_news-${key}`,
            "css": `../../styles/view_news-${key}.css`,
            "news_id": content[0]["id"]
        })
    } else {
        res.redirect("/news")
    }
    find_status = false
})

app.get('/members', (req, res) => {
    res.render(`main-${key}`, {
        "title": "สมาชิกในทีม - ST Dub Team",
        "icon": "https://i.ibb.co/yqLjh6S/st-dub-team-logo-bg-black.webp",
        "url": req.protocol + "://" + req.hostname + "/",
        "full_url": req.protocol + "://" + req.hostname + req.originalUrl,
        "thumnail": "https://i.ibb.co/TLVWXNG/og-cover-1.webp",
        "to_page": `pages/members-${key}`,
        "css": `styles/members-${key}.css`
    })
})

app.get('/projects', (req, res) => {
    res.render(`main-${key}`, {
        "title": "ผลงานของเรา - ST Dub Team",
        "icon": "https://i.ibb.co/yqLjh6S/st-dub-team-logo-bg-black.webp",
        "url": req.protocol + "://" + req.hostname + "/",
        "full_url": req.protocol + "://" + req.hostname + req.originalUrl,
        "thumnail": "https://i.ibb.co/TLVWXNG/og-cover-1.webp",
        "to_page": `pages/projects-${key}`,
        "css": `styles/projects-${key}.css`
    })
})

app.get('/contact', (req, res) => {
    res.render(`main-${key}`, {
        "title": "ติดต่อเรา - ST Dub Team",
        "icon": "https://i.ibb.co/yqLjh6S/st-dub-team-logo-bg-black.webp",
        "url": req.protocol + "://" + req.hostname + "/",
        "full_url": req.protocol + "://" + req.hostname + req.originalUrl,
        "thumnail": "https://i.ibb.co/TLVWXNG/og-cover-1.webp",
        "to_page": `pages/contact-${key}`,
        "css": `styles/contact-${key}.css`
    })
})

app.listen(port, () => {
    console.log(`running as port ${port}`)
})