const images = [
  "/",
  "/do phuoc.html/hinhanh/2.jpg",
  "/do phuoc.html/hinhanh/3.jpg",
  "/do phuoc.html/hinhanh/4.jpg"
];

let currentIndex = 0;

function showSlide(newIndex) {
  if (newIndex === currentIndex) return;

  const container = document.querySelector('.hero');
  const oldImg = document.getElementById('hinh');

  // Tạo ảnh mới
  const newImg = document.createElement('img');
  newImg.src = images[newIndex];
  newImg.style.position = 'absolute';
  newImg.style.top = '0';
  newImg.style.left = newIndex > currentIndex ? '100%' : '-100%';
  newImg.style.width = '100%';
  newImg.style.height = '100%';
  newImg.style.objectFit = 'cover';
  newImg.style.transition = 'left 0.5s ease-in-out';
  newImg.style.zIndex = '1';

  container.appendChild(newImg);

  // Đẩy ảnh cũ ra và ảnh mới vào
  setTimeout(() => {
    oldImg.style.transition = 'left 0.5s ease-in-out';
    oldImg.style.left = newIndex > currentIndex ? '-100%' : '100%';
    newImg.style.left = '0';
  }, 20);

  // Sau khi xong thì gỡ ảnh cũ, gán id cho ảnh mới
  setTimeout(() => {
    container.removeChild(oldImg);
    newImg.id = 'hinh';
    currentIndex = newIndex;
    

    // Cập nhật dot active
    const dots = document.querySelectorAll(".dot");
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
  }, 300);
}