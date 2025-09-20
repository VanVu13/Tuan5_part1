const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/productController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - supplierId
 *       properties:
 *         id:
 *           type: string
 *           description: ID của sản phẩm
 *         name:
 *           type: string
 *           description: Tên sản phẩm
 *         address:
 *           type: string
 *           description: Địa chỉ sản phẩm
 *         phone:
 *           type: string
 *           description: Số điện thoại sản phẩm
 *         supplierId:
 *           type: string
 *           description: ID nhà cung cấp
 */

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: API quản lý Sản phẩm
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Lấy danh sách sản phẩm
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Danh sách sản phẩm
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 products:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Product'
 */
router.get('/', productCtrl.index);

/**
 * @swagger
 * /products/new:
 *   get:
 *     summary: Form thêm sản phẩm mới (Web)
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Trả về form thêm sản phẩm
 */
router.get('/new', productCtrl.newForm);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Tạo sản phẩm mới
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Sản phẩm đã được tạo
 */
router.post('/', productCtrl.create);

/**
 * @swagger
 * /products/{id}/edit:
 *   get:
 *     summary: Form chỉnh sửa sản phẩm (Web)
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID sản phẩm
 *     responses:
 *       200:
 *         description: Trả về form chỉnh sửa
 */
router.get('/:id/edit', productCtrl.editForm);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Cập nhật sản phẩm
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID sản phẩm
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Sản phẩm đã được cập nhật
 */
router.put('/:id', productCtrl.update);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Xóa sản phẩm
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID sản phẩm
 *     responses:
 *       200:
 *         description: Sản phẩm đã bị xóa
 */
router.delete('/:id', productCtrl.delete);

module.exports = router;
