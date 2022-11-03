const express = require('express');
const router = express.Router();
const personController = require('../controllers/PersonController');

router.get('/studium/get', personController.getStudium);

module.exports = router;
