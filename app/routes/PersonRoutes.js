const express = require('express');
const router = express.Router();
const personController = require('../controllers/PersonController');

/* GET programming languages. */
router.get('/person/get', personController.get);

/* POST programming language */
router.post('/person/create', express.json(), personController.create);

/* PUT programming language */
router.put('/person/put/:id', personController.update);

/* DELETE programming language */
router.delete('/person/delete/:id', personController.remove);

module.exports = router;
