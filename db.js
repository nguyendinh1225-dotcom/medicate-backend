require('dotenv').config();
const { Pool } = require('pg');

// Tạo kết nối Pool tới PostgreSQL
const pool = new Pool({
  host: process.env.PGHOST,  // Địa chỉ của dịch vụ PostgreSQL trên Render
  user: process.env.PGUSER,  // Tên người dùng PostgreSQL
  password: process.env.PGPASSWORD,  // Mật khẩu người dùng PostgreSQL
  database: process.env.PGDATABASE,  // Tên cơ sở dữ liệu
  port: process.env.PGPORT || 5432,  // Cổng kết nối
  ssl: process.env.PGSSL === 'true' ? { rejectUnauthorized: false } : false,  // Nếu sử dụng SSL trên Render
});

module.exports = pool;



