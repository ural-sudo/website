
const authController = require('../controller/auth');
const express = require('express');

const router = express.Router();


router.get('/giris',authController.getLogin);
router.post('/giris',authController.postLogin);
router.get('/kayit-giris',authController.getReg);
router.post('/kayit-giris',authController.postSignUp);
router.post('/logout',authController.postLogout);


module.exports = router;