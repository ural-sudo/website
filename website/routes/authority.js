const express =require('express');
const authorityController = require('../controller/authority');
const router =express.Router();



router.get('/addShoes', authorityController.getAddShoes);
router.get('/myShoes', authorityController.getMyShoes);
router.get('/editShoes/:shoesId', authorityController.getEditShoes);
router.post('/addShoes', authorityController.postAddShoes);
router.post('/editShoes', authorityController.postEditShoes);
router.post('/deleteShoes', authorityController.postDeleteShoes);

module.exports=router;