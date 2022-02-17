let contBtn = document.querySelectorAll('.accordeon__content-btn');
let tabsCont = document.querySelectorAll('.catalog__bottom-part--left');

contBtn.forEach(function (item) {
  item.addEventListener('click', function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('active')) {
      contBtn.forEach(function (item) {
        item.classList.remove('active');
      });

      tabsCont.forEach(function (item) {
        item.classList.remove('active');
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }
  })
});
