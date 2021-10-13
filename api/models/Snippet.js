const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SnippetSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Snippet', SnippetSchema)
