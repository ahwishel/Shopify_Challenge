const express = require('express')
const path = require('path')
const app = express()

const publicPath = path.join(__dirname, '..', 'build')

app.use(express.static(publicPath))

app.get('*', (req, res) =>{
    res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(process.env.PORT || 5001, () => {
    console.log('listening on port http://localhost:5001')
})