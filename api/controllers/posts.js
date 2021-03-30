const express = require('express');
const router = express.Router();

const Post = require('../model/dog')

// all posts route //
router.get('/', async(req, res) => {
    try {
        const posts = await Post.all
        res.json({posts})
    } catch (err) {
        res.status(500).json({err})
    }
})

// posts show route // 
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(parseInt(req.params.id))
        res.json(post)
    } catch(err) {
        res.status(404).json({err})
    }
})

// create posts route //
router.post('/', async (req, res) => {
    try {
        const post = await Post.create(req.body.title, req.body.name, req.body.body)
        res.json(post)
    } catch {
        res.status(404).json({error})
    }
})

module.export = routes ;