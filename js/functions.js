"use strict";
(window.Element.prototype.removeClass = function () {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
    t = this;
  return t instanceof HTMLElement || null === t || (t = document.querySelector(t)), this.isVariableDefined(t) && e && t.classList.remove(e), this;
}),
  (window.Element.prototype.addClass = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      t = this;
    return t instanceof HTMLElement || null === t || (t = document.querySelector(t)), this.isVariableDefined(t) && e && t.classList.add(e), this;
  }),
  (window.Element.prototype.toggleClass = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      t = this;
    return t instanceof HTMLElement || null === t || (t = document.querySelector(t)), this.isVariableDefined(t) && e && t.classList.toggle(e), this;
  }),
  (window.Element.prototype.isVariableDefined = function () {
    return !!this && void 0 !== this && null != this;
  });
var e = {
  init: function () {
    e.preLoader(), e.dropdownHover(), e.stickyHeader(), e.stickyBar(), e.toolTipFunc(), e.popOverFunc(), e.backTotop(), e.lightBox(), e.aosFunc(), e.stepper(), e.pricing(), e.stickyElement(), e.pswMeter(), e.fakePwd(), e.autoTabinput(), e.parallaxBG(), e.typeText(), e.enableIsotope(), e.swiperSlider(), e.mouseMove(), e.pCounter();
  },
  isVariableDefined: function (e) {
    return typeof !!e && "undefined" != e && null != e;
  },
  getParents: function (t, n, a) {
    const o = [],
      i = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
    for (t = t.parentElement; t && !i.call(t, n); ) {
      if (a) i.call(t, a) && o.push(t);
      else if (n) {
        if (i.call(t, n)) return o.push(t);
      } else o.push(t);
      if (((t = t.parentElement), e.isVariableDefined(t) && i.call(t, n))) return t;
    }
    return o;
  },
  getNextSiblings: function (e, t, n) {
    let a = [],
      o = e.parentNode.firstChild;
    const i = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector;
    do {
      if (3 !== o.nodeType && o !== e && o === e.nextElementSibling && (!n || n(e))) {
        if (t) {
          if (i.call(o, t)) return o;
        } else a.push(o);
        e = o;
      }
    } while ((o = o.nextSibling));
    return a;
  },
  on: function (e, t, n) {
    document.addEventListener("DOMContentLoaded", () => {
      e instanceof HTMLElement || null === e || (e = document.querySelector(e)), e.addEventListener(t, n);
    });
  },
  onAll: function (e, t, n) {
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll(e).forEach((e) => {
        if (t.indexOf(",") > -1) {
          t.split(",").forEach((t) => {
            e.addEventListener(t, n);
          });
        } else e.addEventListener(t, n);
      });
    });
  },
  removeClass: function (t, n) {
    t instanceof HTMLElement || null === t || (t = document.querySelector(t)), e.isVariableDefined(t) && t.removeClass(n);
  },
  removeAllClass: function (t, n) {
    e.isVariableDefined(t) &&
      t instanceof HTMLElement &&
      document.querySelectorAll(t).forEach((e) => {
        e.removeClass(n);
      });
  },
  toggleClass: function (t, n) {
    t instanceof HTMLElement || null === t || (t = document.querySelector(t)), e.isVariableDefined(t) && t.toggleClass(n);
  },
  toggleAllClass: function (t, n) {
    e.isVariableDefined(t) &&
      t instanceof HTMLElement &&
      document.querySelectorAll(t).forEach((e) => {
        e.toggleClass(n);
      });
  },
  addClass: function (t, n) {
    t instanceof HTMLElement || null === t || (t = document.querySelector(t)), e.isVariableDefined(t) && t.addClass(n);
  },
  select: function (e) {
    return document.querySelector(e);
  },
  selectAll: function (e) {
    return document.querySelectorAll(e);
  },
  preLoader: function () {
    window.onload = function () {
      var t = e.select(".preloader");
      e.isVariableDefined(t) &&
        ((t.className += " animate__animated animate__fadeOut"),
        setTimeout(function () {
          t.style.display = "none";
        }, 200));
    };
  },
  dropdownHover: function () {
    var e;
    window.matchMedia("(min-width: 992px)").matches &&
      ((e = bootstrap),
      document.querySelectorAll(".dropdown-hover .dropdown").forEach(function (t) {
        t.addEventListener("mouseenter", function (t) {
          let n = t.target.querySelector(':scope>[data-bs-toggle="dropdown"]');
          n.classList.contains("show") || e.Dropdown.getOrCreateInstance(n).toggle();
        }),
          t.addEventListener("mouseleave", function (t) {
            let n = t.target.querySelector(':scope>[data-bs-toggle="dropdown"]');
            n.classList.contains("show") && e.Dropdown.getOrCreateInstance(n).toggle();
          });
      }));
  },
  stickyHeader: function () {
    if (window.matchMedia("(min-width: 992px)").matches) {
      var t = e.select(".header-sticky");
      e.isVariableDefined(t) &&
        document.addEventListener("scroll", function (e) {
          (window.pageYOffset || document.documentElement.scrollTop) >= 400 ? t.addClass("header-sticky-on") : t.removeClass("header-sticky-on");
        });
    }
  },
  stickyBar: function () {
    var t = e.select("[data-sticky]");
    if (e.isVariableDefined(t)) new Sticky("[data-sticky]");
  },
  toolTipFunc: function () {
    [].slice.call(e.selectAll('[data-bs-toggle="tooltip"]')).map(function (e) {
      return new bootstrap.Tooltip(e);
    });
  },
  popOverFunc: function () {
    [].slice.call(e.selectAll('[data-bs-toggle="popover"]')).map(function (e) {
      return new bootstrap.Popover(e);
    });
  },
  backTotop: function () {
    window.scrollY;
    var t = e.select(".back-top");
    if (e.isVariableDefined(t)) {
      window.addEventListener("scroll", function () {
        window.scrollY >= 800 ? t.addClass("back-top-show") : t.removeClass("back-top-show");
      }),
        t.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    }
  },
  lightBox: function () {
    var t = e.select("[data-glightbox]");
    if (e.isVariableDefined(t)) GLightbox({ selector: "*[data-glightbox]", openEffect: "fade", closeEffect: "fade" });
  },
  aosFunc: function () {
    var t = e.select(".aos");
    e.isVariableDefined(t) && AOS.init({ duration: 500, easing: "ease-out-quart", once: !0 });
  },
  stepper: function () {
    var t = e.select("#stepper");
    if (e.isVariableDefined(t)) {
      var n = document.querySelectorAll(".next-btn"),
        a = document.querySelectorAll(".prev-btn"),
        o = new Stepper(document.querySelector("#stepper"), { linear: !1, animation: !0 });
      n.forEach(function (e) {
        e.addEventListener("click", () => {
          o.next();
        });
      }),
        a.forEach(function (e) {
          e.addEventListener("click", () => {
            o.previous();
          });
        });
    }
  },
  pricing: function () {
    var t = e.select(".price-wrap");
    e.isVariableDefined(t) &&
      e.selectAll(".price-wrap").forEach((e) => {
        var t = e.querySelector(".price-toggle"),
          n = e.querySelectorAll(".plan-price");
        t.addEventListener("change", function () {
          t.checked
            ? n.forEach((e) => {
                var t = e.getAttribute("data-annual-price");
                e.innerHTML = t;
              })
            : n.forEach((e) => {
                var t = e.getAttribute("data-monthly-price");
                e.innerHTML = t;
              });
        });
      });
  },
  stickyElement: function () {
    window.scrollY;
    var t = e.select(".sticky-element");
    if (e.isVariableDefined(t)) {
      window.addEventListener("scroll", function () {
        window.scrollY >= 800 ? t.addClass("sticky-element-sticked") : t.removeClass("sticky-element-sticked");
      });
    }
  },
  pswMeter: function () {
    if (e.isVariableDefined(e.select("#pswmeter"))) {
      passwordStrengthMeter({ containerElement: "#pswmeter", passwordInput: "#psw-input", showMessage: !0, messageContainer: "#pswmeter-message", messagesList: ["Write your password...", "Easy peasy!", "That is a simple one", "That is better", "Yeah! that password rocks ;)"], height: 8, borderRadius: 4, pswMinLength: 8, colorScore1: "#dc3545", colorScore2: "#f7c32e", colorScore3: "#4f9ef8", colorScore4: "#0cbc87" });
    }
  },
  fakePwd: function () {
    if (e.isVariableDefined(e.select(".fakepassword"))) {
      var t = document.querySelector(".fakepassword"),
        n = document.querySelector(".fakepasswordicon");
      n.addEventListener("click", () => {
        "password" == t.type ? (t.setAttribute("type", "text"), n.classList.add("fa-eye")) : (n.classList.remove("fa-eye"), t.setAttribute("type", "password"));
      });
    }
  },
  autoTabinput: function () {
    var t = document.getElementsByClassName("autotab")[0];
    e.isVariableDefined(t) &&
      (t.onkeyup = function (e) {
        var t = e.srcElement,
          n = parseInt(t.attributes.maxlength.value, 10);
        if (t.value.length >= n)
          for (var a = t; (a = a.nextElementSibling) && null != a; )
            if ("input" == a.tagName.toLowerCase()) {
              a.focus();
              break;
            }
      });
  },
  parallaxBG: function () {
    var t = e.select(".bg-parallax");
    e.isVariableDefined(t) && jarallax(e.selectAll(".bg-parallax"), { speed: 0.6 });
  },
  typeText: function () {
    var t = e.select(".typed");
    e.isVariableDefined(t) &&
      e.selectAll(".typed").forEach((e) => {
        var t = e.getAttribute("data-type-text").split("&&"),
          n = e.getAttribute("data-speed") ? e.getAttribute("data-speed") : 200,
          a = e.getAttribute("data-back-speed") ? e.getAttribute("data-back-speed") : 50;
        ityped.init(e, { strings: t, showCursor: !0, typeSpeed: n, backSpeed: a });
      });
  },
  enableIsotope: function () {
    var t = e.select(".grid-item");
    if (e.isVariableDefined(t)) {
      var n = e.select("[data-isotope]");
      if (e.isVariableDefined(n))
        e.selectAll("[data-isotope]").forEach((e) => {
          var t = e.getAttribute("data-isotope"),
            n = JSON.parse(t),
            a = new Isotope(e, { itemSelector: ".grid-item", layoutMode: n.layoutMode });
          imagesLoaded(e).on("progress", function () {
            a.layout();
          });
        });
      var a = e.select(".grid-menu");
      if (e.isVariableDefined(a))
        e.selectAll(".grid-menu").forEach((t) => {
          var n = t.getAttribute("data-target"),
            a = t.dataset.target,
            o = e.select(a).getAttribute("data-isotope"),
            i = JSON.parse(o),
            r = new Isotope(n, { itemSelector: ".grid-item", transitionDuration: "0.7s", layoutMode: i.layoutMode }),
            s = t.querySelectorAll("li a");
          s.forEach((e) => {
            e.addEventListener("click", function (t) {
              var n = e.getAttribute("data-filter");
              r.arrange({ filter: n }), s.forEach((e) => e.removeClass("active")), e.addClass("active");
            });
          }),
            imagesLoaded(n).on("progress", function () {
              r.layout();
            });
        });
    }
  },
  swiperSlider: function () {
    var t = e.select("[data-swiper-options]");
    if (e.isVariableDefined(t)) {
      function n(e = {}, t = ".swiper") {
        document.querySelectorAll(t).forEach((t) => {
          let n = t.getAttribute("data-swiper-options") ? JSON.parse(t.getAttribute("data-swiper-options")) : {},
            a = { ...e, ...n };
          new Swiper(t, a);
        });
      }
      n({ spaceBetween: 0, slidesPerView: 1, loop: !0, autoplay: { delay: 2e3, disableOnInteraction: !1, pauseOnMouseEnter: !1 }, freeMode: !1 });
    }
  },
  mouseMove: function () {
    document.addEventListener("mousemove", function (e) {
      this.querySelectorAll(".parallax-wrap .layer").forEach((t) => {
        const n = t.getAttribute("data-depth"),
          a = (window.innerWidth - e.pageX * n) / 90,
          o = (window.innerHeight - e.pageY * n) / 90;
        t.style.transform = `translateX(${a}px) translateY(${o}px)`;
      });
    });
  },
  pCounter: function () {
    new PureCounter();
  },
};
e.init();
