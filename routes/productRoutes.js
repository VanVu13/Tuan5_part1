const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/productController');

router.get('/', productCtrl.index);
router.get('/new', productCtrl.newForm);
router.post('/', productCtrl.create);
router.get('/:id/edit', productCtrl.editForm);
router.put('/:id', productCtrl.update);
router.delete('/:id', productCtrl.delete);

module.exports = router;
