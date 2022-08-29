require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
app.use(express.json())
const posts = [
    {
        username: "Kumar",
        title: 'post 1'
    },
    {
        username: "Gaurav",
        title: 'post 2'
    }
]
app.get('/posts', authenticateToken, (req, res) => {   //3
    res.json(posts.filter(post => post.username === req.user.name))
})
app.post('/login', (req, res) => {               //1
    const username = req.body.username
    const user = { name: username }

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ Accesstoken: accessToken })
})
function authenticateToken(req, res, next) {   //2
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1] // Headers contain => Bearer TOKEN
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

app.listen(5000, () => { console.log("server is started at port 5000") })