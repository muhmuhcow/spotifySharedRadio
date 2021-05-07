const express = require('express');
const router = express.Router();
const axios = require('axios');
const fetch = require('node-fetch');
const path = require('path'); 
const moment = require('moment');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }))
//router.use(bodyParser.json({ type: 'application/*+json' }))
router.use(bodyParser.json())
router.use(express.static(path.join(__dirname, 'build')));

router.get('/',(req,res) => {
    res.send("hello world");
});

// router.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

module.exports = router;