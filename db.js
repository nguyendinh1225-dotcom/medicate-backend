// db.js
require('dotenv').config();
const { Pool } = require('pg');

// Tạo kết nối Pool tới PostgreSQL
const pool = new Pool({
  host: process.env.PGHOST,  // Địa chỉ của dịch vụ PostgreSQL (localhost khi local, Render hoặc Heroku khi deploy)
  user: process.env.PGUSER,  // Tên người dùng PostgreSQL
  password: process.env.PGPASSWORD,  // Mật khẩu người dùng PostgreSQL
  database: process.env.PGDATABASE,  // Tên cơ sở dữ liệu
  port: process.env.PGPORT || 5432,  // Cổng kết nối (5432 là cổng mặc định của PostgreSQL)
  ssl: process.env.PGSSL === 'true' ? { rejectUnauthorized: false } : false,  // Nếu sử dụng SSL cho PostgreSQL trên Render/Heroku
});

module.exports = pool;

