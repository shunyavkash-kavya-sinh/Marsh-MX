$(document).ready(function () {
  $(".toggle-menu").click(function () {
    $(".menu").toggleClass("active");
  });
});


//accordion btn

$(document).ready(function () {
  $(".accordion-content").hide();

  $(".accordion-header").click(function () {
    let content = $(this).next(".accordion-content");

    if (content.is(":visible")) {
      content.slideUp();
      $(this).removeClass("active-ac");
    } else {
      $(".accordion-content").slideUp();
      $(".accordion-header").removeClass("active-ac");

      content.slideDown();
      $(this).addClass("active-ac");
    }
  });
});


var header = $("header").innerHeight() + "px";
$("body").css("--headerHeight", header);

console.log(header);

var splide3 = new Splide(".bike-slider", {
  perPage: 2,
  rewind: true,
  drag: "free",
  gap: "32px",
  arrows: false,
  pagination: false,
  breakpoints: {
    640: {
      perPage: 1,
      gap: ".7rem",
    },
  },
});

splide3.mount();

document
  .getElementsByClassName("pre-btn")[0]
  .addEventListener("click", function () {
    splide3.go("-1");
  });
document
  .getElementsByClassName("pre-next")[0]
  .addEventListener("click", function () {
    splide3.go("+1");
  });

new Splide(".auto-scroll-sider", {
  perPage: 2,
  rewind: true,
  drag: "free",
  gap: "32px",
  arrows: false,
  pagination: false,
  gap: "150px",
  breakpoints: {
    768: {
      perPage: 2,
      gap: "30px",
    },
    640: {
      perPage: 1,
      gap: "30px",
    },
  },
}).mount();

new Splide(".brand-logo", {
  type: "loop",
  drag: "free",
  focus: "center",
  perMove: 1,
  perPage: 8,
  gap: "50px",
  arrows: false,
  pagination: false,
  autoplay: {
    speed: 1,
  },
  breakpoints: {
    768: {
      perPage: 5,
      gap: "30px",
    },
    640: {
      perPage: 4,
      gap: "30px",
    },
  },
}).mount(window.splide.Extensions);

new Splide(".social-img", {
  type: "loop",
  drag: "free",
  focus: "center",
  perMove: 1,
  perPage: 5,
  gap: "15px",
  arrows: false,
  pagination: false,
  autoplay: {
    speed: 1,
  },
  breakpoints: {
    1024: {
      perPage: 5,
      gap: "50px",
    },
    768: {
      perPage: 4,
      gap: "30px",
    },
    640: {
      perPage: 2,
      gap: "20px",
    },
  },
}).mount(window.splide.Extensions);

var linerSilder = new Splide(".liner-silder", {
  type: "loop",
  rewind: true,
  pagination: false,
  arrows: false,
  perPage: 1,
});

const bar = linerSilder.root.querySelector(".my-slider-progress-bar");
linerSilder.on("mounted move", function () {
  const count = window.innerWidth > 1200 ? 1 : window.innerWidth > 767 ? 2 : 1;
  const end = linerSilder.Components.Controller.getEnd() + count;
  const rate = Math.min((linerSilder.index + 1) / end, 1);
  bar.style.width = String(100 * rate) + "%";
});

linerSilder.mount();

$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 30) {
      $("header").addClass("header-change");
    } else {
      $("header").removeClass("header-change");
    }
  });
});
var header = $("header").innerHeight() + "px";
console.log("Header Height : ", header);
$("body").css("--headerHeight", header);

