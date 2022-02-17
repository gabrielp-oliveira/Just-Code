const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const bodyParser = require('body-parser');
require('dotenv').config()

app.use(bodyParser.json());
app.use("/codes", express.static('./codes/'));
app.get('/',(req, res) => {
    res.sendFile('index.html', { root: __dirname });
})
app.get('/var',(req, res) => {
    res.send(process.env)
})
console.log(process.env.EX3_X_RAPIDAPI_HOST)

server.listen(process.env.PORT || 8080, console.log('server started'))
