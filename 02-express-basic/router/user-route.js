const express = require("express");
const router = express.Router();

router.get('/login', (req, res) => {
    res.send('Login Route');
});

router.get('/signin', (req, res) => {
    res.send('Sign in Route');
});

module.exports = router;