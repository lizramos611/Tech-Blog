const router = require('express').Router();
const { Posts} = require('../../model/posts');


router.post('/', async (req, res) => {
    try{
        const newPost = await Posts.create({
            post_title: req.body.postTitle,
            post_message: req.body.postMessage,
            post_writer: req.session.user_id,
        });
        res.status(200).json(newPost)
    }
    catch (error {
        res.status(500).json(error)
    })
})

module.exports = router; 