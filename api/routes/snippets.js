const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

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

// @route  POST api/snippets
// @desc Create a snippet
// @access Private
router.post('/', auth, async (req, res) => {
    try {
        const newSnippet = new Snippet({
            ...req.body,
            user: req.user.id
        })
        const snippet = await newSnippet.save()
        res.json(snippet)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

module.exports = router
