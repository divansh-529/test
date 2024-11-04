
document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
});


$('.slick-slider-parent').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2
});