// Khởi tạo: tất cả giá ban đầu rỗng
document.querySelectorAll('.price').forEach(el => {
  el.textContent = '';
});

document.querySelectorAll('input[type="checkbox"][data-target]').forEach(cb => {
  cb.addEventListener('change', function () {
    const id = this.getAttribute('data-target');
    const el = document.getElementById(id);
    const value = el.getAttribute('data-price');

    if (this.checked) {
      el.textContent = value;   // chỉ khi tick mới hiện giá
    } else {
      el.textContent = '';      // bỏ giá khi bỏ tick
    }
  });
});
