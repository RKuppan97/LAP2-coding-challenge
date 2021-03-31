const cors = require('cors');
const express = require('express');
const app = express()
const port = 8000

app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to the homepage!")
})

app.post("/", (req, res) => {
    res.send("Post worked!")
})

app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})
