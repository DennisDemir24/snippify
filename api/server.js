const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const port = process.env.PORT || 5000

const start = () => {
    app.listen(port, () => console.log(`Server started on port ${port}`))
}
start()