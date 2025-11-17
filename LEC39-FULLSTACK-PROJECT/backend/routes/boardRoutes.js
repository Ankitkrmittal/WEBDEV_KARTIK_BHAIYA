const path = require('path');

const express = require('express');
const { createBoard, getBoard } = require('../controllers/boardContoller');
const router = express.Router();

router.post('/createboard',createBoard);
router.get('/getboard/:boardId',getBoard);

module.exports = router;
