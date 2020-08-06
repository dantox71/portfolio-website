const navigationBtn = document.querySelector('.hamburger-btn');
const navigation = document.querySelector('.navigation');
const navigationLinks = document.querySelectorAll('.navigation__list');
const body = document.body;




hideLinks();





const closeBtn = document.querySelector('.navigation__close-btn');
let isOpened = false;




function hideLinks() {
    navigationLinks.forEach(link => {
        link.classList.add('navigation__list__item__link--hidden');
    })
}

function showLinks() {
    navigationLinks.forEach(link => {
        link.classList.remove('navigation__list__item__link--hidden');
    })
}




function openMenu() {




    navigationBtn.classList.add('opened');


    setTimeout(() => {
        navigation.classList.add('opened')
    }, 250);

    isOpened = true;
}

function closeMenu() {




    navigationBtn.classList.remove('opened');
    navigation.classList.remove('opened');

    isOpened = false;
}


//Close navigation if user clicked outside of it 
// body.addEventListener('click',(e) => {
//     const classes = e.target.classList;
//     const insideNav = classes.contains('navigation__list');
//     const insideMenuBtn = classes.contains('hamburger-btn');

//     if(!insideNav && !insideMenuBtn){
//         hideLinks();
//         console.log('??');

//         setTimeout(closeMenu,250);
//     }
// })





navigationBtn.addEventListener('click', () => {


    if (isOpened) {

        hideLinks();

        setTimeout(closeMenu, 250);
    } else {

        openMenu();


        setTimeout(showLinks, 250);




    }

})




closeBtn.addEventListener('click', (E) => {
    closeMenu
});



closeBtn.addEventListener('click', e => {
    hideLinks();
    setTimeout(closeMenu, 250);



})

navigationLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
})