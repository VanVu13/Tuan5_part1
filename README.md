# Supplier - Product Management (Node.js + MongoDB + MVC)

## 📌 Giới thiệu
Dự án này xây dựng một website CRUD để quản lý **Nhà cung cấp** và **Sản phẩm**, sử dụng:
- **Node.js + Express** làm backend
- **MongoDB + Mongoose** làm cơ sở dữ liệu
- **MVC Architecture** (Model - View - Controller)
- **EJS + Bootstrap** cho phần View
- **Swagger** mô tả API
- Cấu hình `.env` để bảo mật thông tin

---

## ⚙️ Cài đặt
1. Clone project:
   ```bash
   git clone https://github.com/VanVu13/Tuan5_part1.git
   cd Tuan5_part1
2. Cài dependencies:
npm install
3. Tạo file .env:
MONGO_URI=mongodb://localhost:27017/supplier_product_db
PORT=3000
4. Chạy project:
node app.js
📂 Cấu trúc thư mục
supplier-product-mvc/
│── app.js
│── .env
│── .gitignore
│── package.json
│── /models
│   ├── Supplier.js
│   └── Product.js
│── /controllers
│   ├── supplierController.js
│   └── productController.js
│── /routes
│   ├── supplierRoutes.js
│   └── productRoutes.js
│── /views
│   ├── index.ejs
│   ├── suppliers/
│   └── products/
│── /public
│   └── css/style.css

🚀 Tính năng

CRUD Nhà cung cấp (Supplier)

CRUD Sản phẩm (Product, có liên kết supplierId)

Giao diện EJS + Bootstrap

RESTful API mô tả bằng Swagger



