
var arrayDescriptionNews = $(".new__description-content")
var arrProducts = $(".products__content")
var arrAbouts = $(".abouts__content")
var arrIndustries = $(".industries__content")

var shortenText = (arrText) => {

    for (let index = 0; index < arrText.length; index++) {

        var text = arrText[index].innerHTML

        if (text.length > 150) {
            var newText = text.substr(0, 140);

            arrText[index].innerHTML = newText + ' ...';
        }
    }
}

if (arrayDescriptionNews.length > 0) shortenText(arrayDescriptionNews)
if (arrProducts.length > 0) shortenText(arrProducts)
if (arrAbouts.length > 0) shortenText(arrAbouts)
if (arrIndustries.length > 0) shortenText(arrIndustries)

// --- 


$(".header .list-nav").mouseover(function () {
    $(this).find("ul").addClass("list-nav__link-active");
});


$(".header .list-nav").mouseout(function () {
    $(this).find("ul").removeClass("list-nav__link-active");
});

// ---

$(".btn-menu").click(function () {
    $(".mobile-menu").css("width", "100%");
    setTimeout(() => {
        $("main").css("display", "none");

    }, 200);
})

$(".btn-close-menu").click(function () {
    $(".mobile-menu").css("width", "0");
    $("main").css("display", "block");
})

// ---


var elementMobileMenu = undefined

$(".header .mobile-menu__item").click(function () {

    closeMobileMenu()

    elementMobileMenu = this

    $(this).find("ul").addClass("mobile-menu__list-nav__link-active");
});

$(".header .mobile-menu form").click(function () {
    closeMobileMenu()

    elementMobileMenu = undefined
});

$(".header .mobile-menu button").click(function () {
    closeMobileMenu()

    elementMobileMenu = undefined
});

var closeMobileMenu = () => {
    if (elementMobileMenu) {

        if ($(elementMobileMenu).find("ul").hasClass("mobile-menu__list-nav__link-active")) {

            $(elementMobileMenu).find("ul").removeClass("mobile-menu__list-nav__link-active");
        }
    }
}

