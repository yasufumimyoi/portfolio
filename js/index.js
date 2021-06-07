//ジャンプボタン
$(function () {
  $('a[href^="#"]').click(function () {
    let speed = 500;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

//スライダー
const mySwiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

//モーダル
$(".modal").modaal({ background: "#fff", overlay_opacity: "0.6" });

//ハンバーガーメニュー
$(".nav__btn").on("click", function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(".nav__wrap").addClass("close").removeClass("open");
  } else {
    $(this).addClass("active");
    $(".nav__wrap").addClass("open").removeClass("close");
  }
});

$(".nav").on("click", function () {
  $(".nav__btn").removeClass("active");
  $(".nav__wrap").addClass("close");
});

//フェードイン
const appearOptions = {};
const faders = document.querySelectorAll(".fade-in");
const appearScrool = new IntersectionObserver(function (entries, appearScrool) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearScrool.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach((fader) => {
  appearScrool.observe(fader);
});

//アコーディオンメニュー
$(function () {
  $(".js-accordion-title").on("click", function () {
    $(".js-accordion-title").not(this).removeClass("open");
    $(".js-accordion-title").not(this).next().slideUp(300);
    $(this).toggleClass("open");
    $(this).next().slideToggle(300);
  });
});
