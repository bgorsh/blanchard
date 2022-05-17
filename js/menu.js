let burger = document.querySelector(".burger");
let close = document.querySelector(".header__menu-close--btn");
let link = document.querySelectorAll(".nav__item");

burger.addEventListener("click", function () {
  document.querySelector(".header__menu").classList.add("open");
});

close.addEventListener("click", function () {
  document.querySelector(".header__menu").classList.remove("open");
});

link.forEach(function (item) {
  item.addEventListener("click", function() {
    document.querySelector(".header__menu").classList.remove("open");
  })
})

