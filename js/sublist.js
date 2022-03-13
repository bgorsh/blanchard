const button = document.querySelectorAll('.bottom-menu__item');


for (item of button) {
  item.addEventListener('click', function () {
    if (this.classList.contains('active')) {
      this.classList.remove('active');
    } else {
      for (el of button) {
        el.classList.remove('active');
      }
      this.classList.add('active');
    }
  })
  }
