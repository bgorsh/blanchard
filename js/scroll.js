const links = document.querySelectorAll('.nav__link');
const textlink = document.querySelector('.text-link');
const alllinks = [...links, textlink]

alllinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault()

    const id = link.getAttribute('href').substring(1);
    const section = document.getElementById(id);

    if (section) {
      seamless.scrollIntoView(section, {
        behavior: "smooth",
        block: "center",
        inline: "center",
    });
    }
  })
})

