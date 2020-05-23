const express = require('express')
const router = express.Router()
// importing model
const Topic = require('../models/topic')

// Get all topics route
router.get('/', async (req, res) => {
    try {
       const topics = await Topic.find()
       res.json(topics)
    }  catch (err) {
       res.status(500).json({ message: err.message })
    }
})

//Creating one
router.post('/', async (req, res) => {
    const topics = new Topic({
        title : req.body.title,
        content : req.body.content,
        status : req.body.status
    })
    try {
        const newTopic = await topics.save()
        res.status(201).json(newTopic)
    } catch (err) {
        console.log(err)
        res.status(400).json({ message : err.message })
    }
})
module.exports = router;