// header Section

// const navOpen = document.querySelector('.mobile-open-btn')
// const navClose = document.querySelector('.mobile-close-btn')
// const primaryNavigation = document.getElementById('primary-navigation')


// navOpen.addEventListener('click',()=>{
//     const visibility = primaryNavigation.getAttribute('data-visible');
//     if(visibility === 'false'){
//         primaryNavigation.setAttribute('data-visible', true);
//         navClose.setAttribute('data-visible', true);
//     } else{
//         primaryNavigation.setAttribute('data-visible', false);
//         navClose.setAttribute('data-visible', false);
//     }
// })

const navOpen = document.querySelector('.mobile-open-btn');
const navClose = document.querySelector('.mobile-close-btn');
const primaryNavigation = document.getElementById('primary-navigation');

navOpen.addEventListener('click', () => {
  const visibility = primaryNavigation.getAttribute('data-visible');
  
  if (visibility === 'false' || visibility === null) {
    primaryNavigation.setAttribute('data-visible', 'true');
    navClose.setAttribute('data-visible', 'true');
  } else {
    primaryNavigation.setAttribute('data-visible', 'false');
    navClose.setAttribute('data-visible', 'false');
  }
});

// Add this event listener to close the navigation when close button is clicked
navClose.addEventListener('click', () => {
  primaryNavigation.setAttribute('data-visible', 'false');
  navClose.setAttribute('data-visible', 'false');
});

// ========cart menu=====

const shoppingBag = document.getElementById('cart-box');
const CartItem = document.getElementById('cart-icon');
const Crossbtn = document.getElementById('cross-btn');

shoppingBag.addEventListener('click', ()=>{
    const showCart = CartItem.getAttribute('data-visible');

    if(showCart === 'false'){
        CartItem.setAttribute('data-visible', true)
    }else{
        CartItem.setAttribute('data-visible', false)
    }
})

Crossbtn.addEventListener('click', ()=>{
    const showCart = CartItem.getAttribute('data-visible');

    if(showCart === 'true'){
        CartItem.setAttribute('data-visible', false)
    }
})