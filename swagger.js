const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Supplier & Product API",
      version: "1.0.0",
      description: "API CRUD cho Nhà cung cấp và Sản phẩm (Node.js + MongoDB + MVC)"
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"], // đọc swagger comment trong routes
};

const swaggerSpec = swaggerJsDoc(options);

function swaggerDocs(app) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`📑 Swagger UI available at http://localhost:3000/api-docs`);
}

module.exports = swaggerDocs;
