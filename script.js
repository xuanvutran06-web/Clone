// Khởi tạo: tất cả giá ban đầu rỗng
document.querySelectorAll('.price').forEach(el => {
  el.textContent = '';
  el.classList.remove('show');
});

document.querySelectorAll('input[type="checkbox"][data-target]').forEach(cb => {
  cb.addEventListener('change', function () {
    const id = this.getAttribute('data-target');
    const el = document.getElementById(id);
    const value = el.getAttribute('data-price');

    if (this.checked) {
      el.textContent = value;
      el.classList.add('show');   // thêm class để fade-in
    } else {
      el.textContent = '';
      el.classList.remove('show');
    }
  });
});
