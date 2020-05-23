const express = require('express')
const router = express.Router()
// importing model
const Topic = require('../models/topic')

/**
 * 
 * Request handler
 * Middleware
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

async function getTopic(req, res, next){
    try {
        topics = await Topic.findById(req.params.id)
        if (topics ==  null) {
            return res.status(404).json({message: 'Cannot find topic'})
        }
    } catch(err) {
        return res.status(500).json({message: err.message })
    }
    res.topics = topics
    next()
}

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

//Getting one
router.get('/:id', getTopic, (req, res) => {
    res.json(res.topics)
})

module.exports = router;