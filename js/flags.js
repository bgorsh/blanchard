let flagBtn = document.querySelectorAll('.catalog__flag-btn');
let tabsItem = document.querySelectorAll('.catalog__bottom-part')

flagBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

            if(! currentBtn.classList.contains('active')) {
                flagBtn.forEach(function(item) {
                    item.classList.remove('active');
                });

                tabsItem.forEach(function(item) {
                    item.classList.remove('active');
                });

                currentBtn.classList.add('active');
                currentTab.classList.add('active');
            };
    });
});


