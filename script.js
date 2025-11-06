body {
  font-family: Arial, sans-serif;
  background: #f4f4f4;
  margin: 0;
}

.header {
  background: #007acc;
  color: #fff;
  padding: 16px;
  text-align: center;
}

.logo {
  font-weight: 700;
  font-size: 22px;
}

main { padding: 20px; }

.slide {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  margin-bottom: 24px;
}

.slide h2 {
  text-align: center;
  margin-bottom: 15px;
  color: #007acc;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

td {
  border: 1px solid #ddd;
  padding: 8px;
  vertical-align: top;
}

/* xen kẽ màu dòng */
tr:nth-child(even) {
  background-color: #f9f9f9;
}
tr:nth-child(odd) {
  background-color: #ffffff;
}

/* in đậm cột tiêu chí */
.label {
  font-weight: bold;
  background-color: #eef6fb;
}

label {
  cursor: pointer;
}

.price {
  font-weight: 600;
  color: #222;
  opacity: 0;             /* ẩn mặc định */
  transition: opacity 0.6s ease-in; /* hiệu ứng fade-in */
}

.price.show {
  opacity: 1;             /* khi hiện thì fade-in */
}
