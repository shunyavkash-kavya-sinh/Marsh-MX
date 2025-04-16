$(document).ready(function () {
  if (document.querySelector(".toggle-menu")) {
    $(".toggle-menu").click(function () {
      $(".menu").toggleClass("active");
    });
  }

  //header menu

  if (document.querySelector(".modal-toggle")) {
    $(".modal-toggle").on("click", function (e) {
      e.preventDefault();
      $(".modal").toggleClass("is-visible");
      $("html, body").toggleClass("off-scroll");
      $(".img-rot").toggleClass("svg-tras");
    });
  }

  //modal-box

  if (document.querySelector(".accordion-content")) {
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
  }

  //accordion btn

  var header = $("header").innerHeight() + "px";
  $("body").css("--headerHeight", header);
  console.log(header);

  //header height

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 30) {
      $("header").addClass("header-change");
    } else {
      $("header").removeClass("header-change");
    }
  });

  // header change;
});

// swiper slider script

var socialImg = new Splide(".social-img", {
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
});
socialImg.mount(window.splide.Extensions);

// In your Javascript (external .js resource or <script> tag)
$(document).ready(function () {
  $(".js-example-basic-single").select2();
  $(".js-example-basic-single").select2({
    minimumResultsForSearch: Infinity,
  });

  var reviewSlider = new Splide(".review-slider", {
    perPage: 1,
    gap: "2rem",
    arrows: false,
  });

  reviewSlider.mount();
});

var autoScroll = new Splide(".auto-scroll-sider", {
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
});
autoScroll.mount();

var brandLogo = new Splide(".brand-logo", {
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
});
brandLogo.mount(window.splide.Extensions);

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

var linerSilder = new Splide(".liner-silder", {
  type: "loop",
  rewind: true,
  pagination: false,
  arrows: false,
  perPage: 1,
});

const bar = linerSilder.root.querySelector(".my-splide-progress-bar");
linerSilder.on("mounted move", function () {
  const count = window.innerWidth > 1200 ? 1 : window.innerWidth > 767 ? 2 : 1;
  const end = linerSilder.Components.Controller.getEnd() + count;
  const rate = Math.min((linerSilder.index + 1) / end, 1);
  bar.style.width = String(100 * rate) + "%";
});
linerSilder.mount();
