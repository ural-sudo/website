
const profileController = require('../controller/profile');
const express = require('express');

const router = express.Router();


router.get('/profile',profileController.getProfile);
router.get('/edit-profile',profileController.getEditProfile);
router.post('/edit-profile',profileController.postEditProfile);


module.exports = router;