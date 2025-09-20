const express = require('express');
const router = express.Router();
const supplierCtrl = require('../controllers/supplierController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Supplier:
 *       type: object
 *       required:
 *         - name
 *         - address
 *         - phone
 *       properties:
 *         _id:
 *           type: string
 *           description: ID của nhà cung cấp
 *         name:
 *           type: string
 *           description: Tên nhà cung cấp
 *         address:
 *           type: string
 *           description: Địa chỉ
 *         phone:
 *           type: string
 *           description: Số điện thoại
 *         __v:
 *           type: integer
 *           description: Version key của MongoDB
 */

/**
 * @swagger
 * tags:
 *   name: Suppliers
 *   description: API quản lý Nhà cung cấp
 */

/**
 * @swagger
 * /suppliers:
 *   get:
 *     summary: Lấy danh sách nhà cung cấp
 *     tags: [Suppliers]
 *     responses:
 *       200:
 *         description: Danh sách nhà cung cấp
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 suppliers:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Supplier'
 */
router.get('/', supplierCtrl.index);

/**
 * @swagger
 * /suppliers/new:
 *   get:
 *     summary: Form thêm mới nhà cung cấp (Web View)
 *     tags: [Suppliers]
 *     responses:
 *       200:
 *         description: Trả về form thêm nhà cung cấp
 */
router.get('/new', supplierCtrl.newForm);

/**
 * @swagger
 * /suppliers:
 *   post:
 *     summary: Tạo mới một nhà cung cấp
 *     tags: [Suppliers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Supplier'
 *     responses:
 *       201:
 *         description: Nhà cung cấp đã được tạo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Supplier'
 */
router.post('/', supplierCtrl.create);

/**
 * @swagger
 * /suppliers/{id}/edit:
 *   get:
 *     summary: Form chỉnh sửa thông tin nhà cung cấp (Web View)
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID của nhà cung cấp
 *     responses:
 *       200:
 *         description: Trả về form chỉnh sửa
 */
router.get('/:id/edit', supplierCtrl.editForm);

/**
 * @swagger
 * /suppliers/{id}:
 *   put:
 *     summary: Cập nhật thông tin nhà cung cấp
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID của nhà cung cấp
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Supplier'
 *     responses:
 *       200:
 *         description: Nhà cung cấp đã được cập nhật
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Supplier'
 */
router.put('/:id', supplierCtrl.update);

/**
 * @swagger
 * /suppliers/{id}:
 *   delete:
 *     summary: Xóa một nhà cung cấp
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID của nhà cung cấp
 *     responses:
 *       200:
 *         description: Nhà cung cấp đã bị xóa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.delete('/:id', supplierCtrl.delete);

module.exports = router;
