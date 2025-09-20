const Product = require('../models/Product');
const Supplier = require('../models/Supplier');

// GET /products - danh sách sản phẩm
exports.index = async (req, res) => {
  try {
    const products = await Product.find().populate('supplierId');

    // Nếu request JSON (API)
    if (req.is('application/json') || req.headers.accept?.includes('application/json')) {
      return res.json({ products });
    }

    // Web form
    res.render('products/index', { products });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// GET /products/new - form thêm sản phẩm
exports.newForm = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.render('products/new', { suppliers }); // Web
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// POST /products - tạo mới sản phẩm
exports.create = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);

    // Nếu request JSON (API)
    if (req.is('application/json') || req.headers.accept?.includes('application/json')) {
      return res.status(201).json({ product: newProduct });
    }

    // Web form
    res.redirect('/products');
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// GET /products/:id/edit - form chỉnh sửa sản phẩm
exports.editForm = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    const suppliers = await Supplier.find();

    if (!product) {
      if (req.is('application/json')) {
        return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
      }
      return res.status(404).send('Không tìm thấy sản phẩm');
    }

    res.render('products/edit', { product, suppliers });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// PUT /products/:id - cập nhật sản phẩm
exports.update = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedProduct) {
      if (req.is('application/json')) {
        return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
      }
      return res.status(404).send('Không tìm thấy sản phẩm');
    }

    if (req.is('application/json')) {
      return res.json({ product: updatedProduct });
    }

    res.redirect('/products');
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// DELETE /products/:id - xóa sản phẩm
exports.delete = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      if (req.is('application/json')) {
        return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
      }
      return res.status(404).send('Không tìm thấy sản phẩm');
    }

    if (req.is('application/json')) {
      return res.json({ message: 'Xóa sản phẩm thành công' });
    }

    res.redirect('/products');
  } catch (err) {
    res.status(500).send(err.message);
  }
};
