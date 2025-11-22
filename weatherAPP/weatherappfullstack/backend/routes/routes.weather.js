// import {Router} from 'express';
// import { getweather } from '../controller/controller.getweather';
const express = require('express');
const {getweather} = require('../controller/controller.getweather')
const router = express.Router();

router.get('/weather',getweather)

module.exports= router;