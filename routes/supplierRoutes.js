const express = require('express');
const router = express.Router();
const supplierCtrl = require('../controllers/supplierController');

router.get('/', supplierCtrl.index);
router.get('/new', supplierCtrl.newForm);
router.post('/', supplierCtrl.create);
router.get('/:id/edit', supplierCtrl.editForm);
router.put('/:id', supplierCtrl.update);
router.delete('/:id', supplierCtrl.delete);

module.exports = router;
