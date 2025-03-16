const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/authController'); // make sure the path is correct

router.post('/login', loginUser);

module.exports = router;