// Khởi tạo: tất cả giá ban đầu rỗng
document.querySelectorAll('.price').forEach(el => {
  el.textContent = '';
  el.classList.remove('show');
});

// Xử lý từng checkbox riêng lẻ
document.querySelectorAll('input[type="checkbox"][data-target]').forEach(cb => {
  cb.addEventListener('change', function () {
    const id = this.getAttribute('data-target');
    const el = document.getElementById(id);
    const value = el.getAttribute('data-price');

    if (this.checked) {
      el.textContent = value;
      el.classList.add('show');   // hiệu ứng fade-in
    } else {
      el.textContent = '';
      el.classList.remove('show');
    }
  });
});

// Nút hiện tất cả giá
document.getElementById('showAll').addEventListener('click', () => {
  document.querySelectorAll('input[type="checkbox"][data-target]').forEach(cb => {
    cb.checked = true;
    const id = cb.getAttribute('data-target');
    const el = document.getElementById(id);
    const value = el.getAttribute('data-price');
    el.textContent = value;
    el.classList.add('show');
  });
});

// Nút ẩn tất cả giá
document.getElementById('hideAll').addEventListener('click', () => {
  document.querySelectorAll('input[type="checkbox"][data-target]').forEach(cb => {
    cb.checked = false;
    const id = cb.getAttribute('data-target');
    const el = document.getElementById(id);
    el.textContent = '';
    el.classList.remove('show');
  });
});
