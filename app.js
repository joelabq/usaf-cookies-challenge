const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')


// app.use(bodyParser.urlencoded({extended: true}));
 app.use(cookieParser());


 app.get('/login', (req, res, next) => {
     res.cookie("name","Joel").send(); 
     
 })

 app.get('/welcome', (req, res) => {
    res.send("Welcome, "+req.cookies.name);
})
 

const port = 3000
app.listen(port, () => console.log(`Listening at http://localhost:${port}`))