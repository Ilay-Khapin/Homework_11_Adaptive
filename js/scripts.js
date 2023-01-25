//  Carousel

$(document).ready(function () {
  $(".carousel").slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
  });
});

// Burger

let burger = document.querySelector("#burger-icon");
let header = document.querySelector("#header");
burger.onclick = function () {
  header.classList.toggle("menu-open");
};
