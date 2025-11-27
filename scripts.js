$(document).ready(function () {
    let imgs = $(".banner-img");
    let i = 0;

    setInterval(function () {
        imgs.eq(i).removeClass("active").fadeOut(800);
        i = (i + 1) % imgs.length;
        imgs.eq(i).addClass("active").fadeIn(800);
    }, 2500);
});
