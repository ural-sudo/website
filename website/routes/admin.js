const express = require('express');
const adminController = require('../controller/admin');
const router = express.Router();


router.get('/login',adminController.getAdminLogin);
router.get('/userInfo',adminController.getUserInfo);
router.post('/login',adminController.postAdminLogin);
router.post('/authority',adminController.postAuthority);


module.exports =  router;
