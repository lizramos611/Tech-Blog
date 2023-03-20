const router = require('express').Router();
const {User} = require('../../model/user');

router.post('/', async (req, res) => {
    try{
        const userData = await User.create({

            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        });
        req.session.save(() => {
            req.session.user_id = userData.id
        })
    }
    catch (error) {
        res.status(500).json(error)
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findone ({
            email: req.body.email,
            password: req.body.password
        })
    }
    catch (error) {
        res.status(500).json(error)
    }

    
})