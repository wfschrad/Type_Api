const express = require('express');
const router = express.Router();
const { User } = require('../models');

const upload = require('../services/file-upload');
const singleUpload = upload.single('image');

//use route structure to pass user id
router.post('/image-upload/:id(\\d+)', (req, res) => {
    singleUpload(req, res, async (err) => {
        if (err) {
            console.log('error uploading');
            console.log(err);
            return res.status(422).send({ errors: [{ title: 'File format not allowed', detail: err.message }] });
        } else {

            // post to db
            console.log('params id: ', req.params.id);

            const user = await User.findByPk(req.params.id, {
                attributes: ['id']
            });

            if (user) await user.update({
                profilePhoto: req.file.location
            });
            //what's best way to get user?


            console.log('req inside: ', req.body)

            return res.json({ 'imageUrl': req.file.location });
        }
    });
    console.log('req params outside: ', req.params.id)

});

module.exports = router;
