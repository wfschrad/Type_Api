const express = require('express');
const router = express.Router();

const upload = require('../services/file-upload');
const singleUpload = upload.single('image');


router.post('/image-upload', (req, res) => {
    singleUpload(req, res, (err) => {
        if (err) {
            console.log('error uploading');
            console.log(err);
            return res.status(422).send({ errors: [{ title: 'File format not allowed', detail: err.message }] });
        } else {
            console.log('req: ', req)
            return res.json({ 'imageUrl': req.file.location });
        }
    });
});

module.exports = router;
