const express = require("express")
const app = express()

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send("Hello, KAITA")
})

const server = require("http").createServer({}, app)

server.listen(3000, function() {
    console.log("HTT{ listening to PORT 3000")
})