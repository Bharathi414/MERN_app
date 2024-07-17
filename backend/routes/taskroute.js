const express = require('express')

const router = express.Router()

const {createtask, gettasks, getsingletask} = require('../controllers/taskcontroller');

router.post("/",createtask);
router.get("/", gettasks);
router.get("/:id", getsingletask);  

module.exports = router;