const express = require('express')
const router = express.Router()

const Snippet = require('../models/Snippet')

// @route  GET api/snippets
// @desc Get all users snippets
// @access Public
router.get('/', async (req, res) => {
    try {
        const snippets = await Snippet.find()
        res.json(snippets)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

module.exports = router
