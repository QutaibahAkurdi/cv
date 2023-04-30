AOS.init();
var sticky = navbar.offsetTop;

$(window).scroll(function() {
    if ($(this).scrollTop() > 90) {
        $('#navbar').addClass("sticky");
        $('.navbar').addClass('active');
        $('.profile').addClass('header-three');
    } else {
        $('#navbar').removeClass("sticky");
        $('.navbar').removeClass('active');
        $('.profile').removeClass('header-three');
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
        if ($window.scrollTop() > 300) {
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

// Robot Text Animation
const texts = ["ict Engineer", "web developer", "software developer", "teacher"];
let index = 0;
let charIndex = 0;
let typingTimeout;
let deletingTimeout;
let delay = 1500;

function type() {
    if (charIndex < texts[index].length) {
        document.querySelector(".typing-text").textContent += texts[index].charAt(charIndex);
        charIndex++;
        typingTimeout = setTimeout(type, 50);
    } else {
        deletingTimeout = setTimeout(deleteText, delay);
    }
}
function deleteText() {
    if (charIndex >= 0) {
        const text = texts[index].substring(0, charIndex);
        document.querySelector(".typing-text").textContent = text;
        charIndex--;
        deletingTimeout = setTimeout(deleteText, 50);
    } else {
        index++;
        if (index >= texts.length) {
            index = 0;
        }
        typingTimeout = setTimeout(type, delay);
    }
}

type();
