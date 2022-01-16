AOS.init();
var sticky = navbar.offsetTop;

$(window).scroll(function() {
    if ($(this).scrollTop() > 30) {
        $('#navbar').addClass("sticky");
        $('.navbar').addClass('active');
    } else {
        $('#navbar').removeClass("sticky");
        $('.navbar').removeClass('active');
    }
});

$('.navbar-collapse a').click(function() {
    $(".navbar-collapse").collapse('hide');
    if ($(window).width() < 900) {
        $('.container-fluid').css('padding-top', '0px');
        //  $('.sticky').css('position', 'fixed');

    }
});

jQuery(function($) {
    var $window = $(window);
    var $buttonTop = $('.button-top');

    $buttonTop.on('click', function() {
        $('html, body').animate({
            scrollTop: 0,
        }, 500);
    });

    $window.on('scroll', function() {
        if ($window.scrollTop() > 100) {
            $buttonTop.addClass('button-top-visible');

        } else {
            $buttonTop.removeClass('button-top-visible');

        }
    });
});

document.querySelector("#btn-light-dark").addEventListener("click", function() {
    this.classList.toggle("day");
    this.classList.toggle("night");
});

let toggleDark = () => {
    let result = document.documentElement.classList.toggle("dark");
    localStorage.theme = result ? "dark" : "light";
};

if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    document.documentElement.classList.add("dark");
} else {
    document.documentElement.classList.remove("dark");
}