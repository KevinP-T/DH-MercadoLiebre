const express = require("express")
const app = express()
const path = require("path")

app.use(express.static("public"))

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
})
app.post("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
})


app.get("/register", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/register.html"))
})

app.get("/login", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/login.html"))
})

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`servidor en el puerto ${port}`);
})