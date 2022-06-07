const images = document.querySelectorAll('.panel');

for (let image of images) {
  image.addEventListener('click', () => {
    if (image.classList.contains('active')) {
      image.classList.remove('active');
      return;
    }

    image.classList.add('active');
  });
}
