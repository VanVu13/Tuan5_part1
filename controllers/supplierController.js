const Supplier = require('../models/Supplier');

// GET /suppliers - danh sách
exports.index = async (req, res) => {
  const suppliers = await Supplier.find();

  if (req.headers.accept?.includes('application/json')) {
    return res.json({ suppliers }); // API
  }

  res.render('suppliers/index', { suppliers }); // Web
};

// GET /suppliers/new - form thêm mới
exports.newForm = (req, res) => {
  res.render('suppliers/new'); // Web, API thường không cần
};

// POST /suppliers - tạo mới
exports.create = async (req, res) => {
  const newSupplier = await Supplier.create(req.body);

  if (req.headers.accept?.includes('application/json')) {
    return res.status(201).json({ supplier: newSupplier });
  }

  res.redirect('/suppliers'); // Web
};

// GET /suppliers/:id/edit - form chỉnh sửa
exports.editForm = async (req, res) => {
  const supplier = await Supplier.findById(req.params.id);

  if (!supplier) {
    if (req.headers.accept?.includes('application/json')) {
      return res.status(404).json({ message: 'Không tìm thấy nhà cung cấp' });
    }
    return res.status(404).send('Không tìm thấy nhà cung cấp');
  }

  res.render('suppliers/edit', { supplier }); // Web
};

// PUT /suppliers/:id - cập nhật
exports.update = async (req, res) => {
  const updatedSupplier = await Supplier.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!updatedSupplier) {
    if (req.headers.accept?.includes('application/json')) {
      return res.status(404).json({ message: 'Không tìm thấy nhà cung cấp' });
    }
    return res.status(404).send('Không tìm thấy nhà cung cấp');
  }

  if (req.headers.accept?.includes('application/json')) {
    return res.json({ supplier: updatedSupplier });
  }

  res.redirect('/suppliers'); // Web
};

// DELETE /suppliers/:id - xóa
exports.delete = async (req, res) => {
  const deletedSupplier = await Supplier.findByIdAndDelete(req.params.id);

  if (!deletedSupplier) {
    if (req.headers.accept?.includes('application/json')) {
      return res.status(404).json({ message: 'Không tìm thấy nhà cung cấp' });
    }
    return res.status(404).send('Không tìm thấy nhà cung cấp');
  }

  if (req.headers.accept?.includes('application/json')) {
    return res.json({ message: 'Xóa nhà cung cấp thành công' });
  }

  res.redirect('/suppliers'); // Web
};
