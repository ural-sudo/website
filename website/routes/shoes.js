const express = require('express');
const shoesController = require('../controller/shoes');

const router = express.Router();

router.get('/',shoesController.getIndex);
router.get('/heeledShoes',shoesController.getHeeledShoes);
router.get('/sport', shoesController.getSport);
router.get('/slipper', shoesController.getSlipper);
router.get('/sneaker', shoesController.getSneaker);
router.get('/spake', shoesController.getSpake);
router.get('/boat', shoesController.getBoat);
router.get('/flat', shoesController.getFlat);



module.exports = router;