const express = require('express')

const router = express.Router()

const {createtask} = require('../controllers/taskcontroller');

router.post('/',createtask);

module.exports = router;