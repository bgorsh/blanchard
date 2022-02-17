var title = document.getElementsByClassName('accordeon__header');

for (var i = 0; i < title.length; i++) {
  title[i].addEventListener('click', function () {
    if (!(this.classList.contains('open'))) {
      for (var i = 0; i < title.length; i++) {
        title[i].classList.remove('open');
      }
      this.classList.add('open');
    } else {
      this.classList.remove('open')
    }
  })
}

document.querySelector('.accordeon__header').click();
