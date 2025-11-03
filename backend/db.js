// db.js
require('dotenv').config();
const { Pool } = require('pg');

// Tạo kết nối Pool tới PostgreSQL
const pool = new Pool({
  host: process.env.PGHOST,  // Ví dụ: 'localhost' hoặc tên của dịch vụ PostgreSQL trên Render
  user: process.env.PGUSER,  // Tên người dùng PostgreSQL, ví dụ: 'postgres'
  password: process.env.PGPASSWORD,  // Mật khẩu người dùng
  database: process.env.PGDATABASE,  // Tên cơ sở dữ liệu, ví dụ: 'smart_medicine'
  port: process.env.PGPORT || 5432,  // Cổng kết nối (5432 là cổng mặc định của PostgreSQL)
  ssl: process.env.PGSSL === 'true' ? { rejectUnauthorized: false } : false,  // Nếu kết nối tới PostgreSQL trên Render hoặc dịch vụ có SSL
});

module.exports = pool;

