let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active')
  searchForm.classList.remove('active')
  cartItem.classList.remove('active')
}
//search
let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active')
  navbar.classList.remove('active')
  cartItem.classList.remove('active')
}

//cart itme
let cartItem = document.querySelector('.cart-item-container')

document.querySelector('#cart-btn').onclick = () => {
  cartItem.classList.toggle('active')
  navbar.classList.remove('active')
  searchForm.classList.remove('active')
}

window.onscroll = () => {
  navbar.classList.remove('active')
  searchForm.classList.remove('active')
  cartItem.classList.remove('active')
}

// $('.header .navbar a').click(function () {
//   // applying again smooth scroll on menu items click
//   $('html').css('scrollBehavior', 'smooth')
// })
