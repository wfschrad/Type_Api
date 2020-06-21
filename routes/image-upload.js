const express = require('express');
const router = express.Router();

const upload = require('../services/file-upload');
const singleUpload = upload.single('image');


router.post('/image-upload', (req, res) => {
    singleUpload(req, res, (err) => {
        if (err) {
            console.log('error uploading');
            console.log(err);
        } else{
            return res.json({'imageUrl': req.file.location});
        }
    });
});

module.exports = router;
