// $(document).ready(function () {
//   $(".js-example-basic-single").select2();
//   $(".js-example-basic-single").select2({
//     minimumResultsForSearch: Infinity,
//   });

//   var reviewSlider = new Splide(".review-slider", {
//     perPage: 1,
//     gap: "2rem",
//     arrows: false,
//   });

//   reviewSlider.mount();
// });

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn li a");
  const articles = document.querySelectorAll(".artical-filter-block");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filterText = this.textContent.trim().toUpperCase();

      articles.forEach((article) => {
        const articleCategory = article
          .querySelector(".key-img-title")
          .textContent.trim()
          .toUpperCase();

        if (filterText === "VIEW ALL" || articleCategory === filterText) {
          article.style.display = "block";
        } else {
          article.style.display = "none";
          article.style.opacity = "none";
        }
      });
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

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

  if (document.querySelector(".modal-tog")) {
    $(".modal-tog").on("click", function (e) {
      e.preventDefault();
      $(".open-modal").toggleClass("open-visible");
      $("html, body").toggleClass("off-scroll");
    });
  }

  if (document.querySelector(".modal-cal")) {
    $(".modal-cal").on("click", function (e) {
      e.preventDefault();
      $(".open-cal").toggleClass("open-modal-cal");
      $("html, body").toggleClass("off-scroll");
    });
  }

  if (document.querySelector(".modal-part")) {
    $(".modal-part").on("click", function (e) {
      e.preventDefault();
      $(".open-part").toggleClass("open-modal-part");
      $(".value-box").toggleClass("value-box-none");
      $("html, body").toggleClass("off-scroll");
    });

    if (document.querySelector(".value-part")) {
      $(".value-part").on("click", function (e) {
        e.preventDefault();
        $(".open-value").toggleClass("open-modal-value");
        $("html, body").toggleClass("off-scroll");
        $("html, body").toggleClass("off-scroll");
        $(".part-box").toggleClass("part-box-none");
        $(".value-box").toggleClass("value-box-none");
      });
    }

    if (document.querySelector(".modal-cardbox")) {
      $(".modal-cardbox").on("click", function (e) {
        e.preventDefault();
        $(".open-card-box").toggleClass("open-modal-cardbox");
        $("html, body").toggleClass("off-scroll");
      });
    }
  }
  //value

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

  const sliders = document.querySelectorAll(".slider");
  function updateSliderBackground(slider) {
    const min = parseInt(slider.min);
    const max = parseInt(slider.max);
    const val = parseInt(slider.value);
    const percentage = ((val - min) / (max - min)) * 100;
    slider.style.background = `linear-gradient(to right, brown ${percentage}%, #ddd ${percentage}%)`;
  }
  sliders.forEach((slider) => {
    updateSliderBackground(slider);

    slider.addEventListener("input", () => {
      updateSliderBackground(slider);
    });
  });

  // range js
});

// swiper slider

var brandLogo = new Splide(".brand-logo", {
  type: "loop",
  focus: "center",
  perMove: 1,
  perPage: 5,
  gap: "20px",
  arrows: false,
  pagination: false,
  autoplay: {
    speed: 1,
  },
  breakpoints: {
    768: {
      perPage: 4,
      gap: "30px",
    },
    640: {
      perPage: 3,
      gap: "30px",
    },
  },
});
brandLogo.mount(window.splide.Extensions);

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

if ($(".history-silder.splide").length > 0) {
  const historySilder = new Splide(".history-silder", {
    type: "loop",
    drag: "free",
    focus: "center",
    gap: "35px",
    arrows: false,
    perPage: 3,
    pagination: false,
    autoScroll: {
      speed: 1,
    },
    breakpoints: {
      1024: {
        perPage: 2,
      },
      640: {
        perPage: 1,
      },
    },
  });
  historySilder.mount(window.splide.Extensions);
}
if ($(".our-team-slider").length > 0) {
  var teamSlider = new Splide(".our-team-slider", {
    perPage: 3,
    gap: "20px",
    rewind: true,
    arrows: false,
    pagination: false,
    drag: "free",
    breakpoints: {
      1024: {
        perPage: 2,
        gap: "30px",
      },
      640: {
        perPage: 1,
        gap: "30px",
      },
    },
  });
  teamSlider.mount();
}

document
  .getElementsByClassName("pre-btn")[0]
  .addEventListener("click", function () {
    teamSlider.go("-1");
  });
document
  .getElementsByClassName("pre-next")[0]
  .addEventListener("click", function () {
    teamSlider.go("+1");
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

var bikeSlider = new Splide(".bike-slider", {
  perPage: 2,
  rewind: true,
  drag: "free",
  gap: "32px",
  arrows: false,
  pagination: false,
  breakpoints: {
    640: {
      perPage: 1,
      gap: "30px",
    },
  },
});
bikeSlider.mount();

document
  .getElementsByClassName("pre-btn")[0]
  .addEventListener("click", function () {
    bikeSlider.go("-1");
  });
document
  .getElementsByClassName("pre-next")[0]
  .addEventListener("click", function () {
    bikeSlider.go("+1");
  });
