
$(document).ready(function () {
    let imgs = Array.from(document.querySelectorAll(".gallary-item img"));
    let lightBoxContainer = document.getElementById("lightBoxContainer");
    let lightBoxItem = document.getElementById("lightBoxItem");
    let nextBtn = document.getElementById("next");
    let prevBtn = document.getElementById("prev");
    let closeBtn = document.getElementById("close");
    let navActive = document.getElementById("navActive");
    let navLink = navActive.getElementsByClassName("nav-link");

    let currentIndex = 0;
    for (let i = 0; i < navLink.length; i++) {
        navLink[i].addEventListener("click", function () {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";

        })

    }

    for (let i = 0; i < imgs.length; i++) {

        imgs[i].addEventListener("click", function (eventInfo) {

            currentIndex = imgs.indexOf(eventInfo.target);

            let imgSrc = eventInfo.target.getAttribute("src");
            lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")";

            lightBoxContainer.style.display = "flex";
            $(".back-to-top").fadeOut(500)

        })
    }
    function nextSlide() {
        currentIndex++;
        if (currentIndex == imgs.length) {
            currentIndex = 0;
        }
        var imgSrc = imgs[currentIndex].getAttribute("src");
        lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")";

    }



    function prevSlide() {

        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = imgs.length - 1;

        }
        var imgSrc = imgs[currentIndex].getAttribute("src");
        lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")";
    }
    function closeSlide() {
        lightBoxContainer.style.display = "none";
        $(".back-to-top").fadeIn(500)


    }
    closeBtn.addEventListener("click", closeSlide)
    nextBtn.addEventListener("click", nextSlide)
    prevBtn.addEventListener("click", prevSlide)
    document.addEventListener("keydown", function (eventInfo) {

        if (eventInfo.code == "ArrowRight") {
            nextSlide();
        }
        else if (eventInfo.code == "ArrowLeft") {
            prevSlide();
        }
        else if (eventInfo.code == "Escape") {
            closeSlide();
        }


    })

    lightBoxContainer.addEventListener("click", function (evenInfo) {

        if (evenInfo.target == lightBoxContainer) {
            lightBoxContainer.style.display = "none";
        }
    })

    new WOW().init();


    $("#loding").fadeOut(2000, function () {

        $("body").css("overflow", "auto")
    });


    $('.slider').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,


    });

    $('.multiple-items').slick({
        autoplay: true,

        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

    let aboutOffsetTop = $("#about").offset().top;
    $(window).scroll(function () {


        let wScroll = $(window).scrollTop();
        if (wScroll > aboutOffsetTop - 450) {


            $("#topbar").css("display", "none");
            $(".navbar").css("top", "0");
            $(".navbar").css("backgroundColor", "rgba(0, 0, 0, 0.85)");
            $(".navbar").css("borderBottom", "1px solid #37332a");
            $(".back-to-top").fadeIn(500)




        }
        else {


            $("#topbar").css("display", "flex");
            $(".navbar").css("top", "40px");
            $(".navbar").css("backgroundColor", "rgba(12, 11, 9, 0.6)");
            $(".navbar").css("borderBottom", " 1px solid rgba(12, 11, 9, 0.6)");
            $(".back-to-top").fadeOut(500)


        }
    })

    $(".back-to-top").click(function () {

        $("html , body").animate({ scrollTop: 0 }, 2500)
    })

    $(".navbar-nav  a[href^='#']").click(function () {
        let aHref = $(this).attr("href");
        let sectionOffset = $(aHref).offset().top;
        $("html , body").animate({ scrollTop: sectionOffset }, 2000)


    })


})