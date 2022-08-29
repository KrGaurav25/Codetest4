require('dotenv').config()
const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const app = express()
app.use(express.json())
app.use(cors())
const users = []
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
app.get('/home', (req, res) => {
    res.json(users)
})
app.post('/home', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt()
        // const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        console.log(salt)
        console.log(hashedPassword)
        const user = { name: req.body.name, email: req.body.email, password: hashedPassword }
        users.push(user)
        res.status(201).send()
    }
    catch{
        res.status(500).send()
    }
    
})
app.post('/home/users',async (req,res)=>{
    const user= users.find(user=> user.email=req.body.email)
    if(user==null){
        return res.status(400).send('Cannot find user')
    }
    try{
       if ( await bcrypt.compare(req.body.password, user.password)){
        res.send("success")
       }
       else{
        res.send("Not Allowed")
       }
    } catch{
        res.status(500).send()
    }
})
//jwt
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

app.listen(8000, () => { console.log("Server is started at port 8000") })