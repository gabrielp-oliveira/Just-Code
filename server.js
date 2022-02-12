const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use("/codes", express.static('./codes/'));
app.get('/',(req, res) => {
    res.sendFile('index.html', { root: __dirname });
})


server.listen(process.env.PORT || 8080, console.log('server started'))
