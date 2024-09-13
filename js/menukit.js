function padding_top_body(e) {
  let t = e.offsetHeight;
  document.body.style.paddingTop = t + "px";
}
function fixedTopNavbar() {
  document.querySelectorAll(".dropdown-menus").forEach(function (e) {
    e.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  });
  let e = document.querySelector(".navbar.fixed-top");
  e && padding_top_body(e),
    (el_fixed = document.querySelector(".fixed-onscroll")),
    el_fixed &&
      window.addEventListener("scroll", function () {
        window.scrollY > 150 ? (el_fixed.classList.add("fixed-top"), padding_top_body(el_fixed)) : (el_fixed.classList.remove("fixed-top"), (document.body.style.paddingTop = "0"));
      });
}
function addActiveClassToParent(e) {
  var t = e.closest(".dropdown"),
    o = t && t.querySelector(".dropdown-toggle");
  o && o.classList.add("active");
}
function addActiveClassOnLoad() {
  var e = window.location.pathname.split("/").pop(),
    t = document.getElementsByClassName("navbar-nav");
  Array.from(t).forEach((t) => {
    if (t) {
      var o = t.querySelector("a[href='" + e + "']") || t.querySelector("a[href='" + window.location.pathname + "']") || t.querySelector("a[href$='" + e + "']");
      if (!o) {
        const e = sessionStorage.getItem("prev_path");
        if (e && "" !== e) {
          const n = e.split("/").pop();
          o = t.querySelector("a[href='" + n + "']") || t.querySelector("a[href$='" + n + "']");
        }
      }
      o && (o.classList.add("active"), addActiveClassToParent(o));
    }
  });
}
function linkListener() {
  document.querySelectorAll("a").forEach((e) => {
    e.href.startsWith(window.location.origin) > -1 &&
      e.addEventListener("click", (e) => {
        const t = e.currentTarget;
        t.classList.contains("dropdown-item") || t.classList.contains("nav-link") ? sessionStorage.setItem("prev_path", t.getAttribute("href")) : sessionStorage.setItem("prev_path", window.location.pathname);
      });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  linkListener(), fixedTopNavbar(), addActiveClassOnLoad();
});
