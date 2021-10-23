const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5000

// Connect Database
connectDB()

app.use(cors({ origin: 'http://localhost:3000' }))

// Init middleware
app.use(express.json({ extended: false }))

// Define our Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/snippets', require('./routes/snippets'))

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`)
})
