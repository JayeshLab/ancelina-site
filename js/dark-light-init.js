const storedTheme = localStorage.getItem("theme"),
  getPreferredTheme = () => storedTheme || (window.matchMedia("(prefers-color-scheme: light)").matches, "light"),
  setTheme = function (e) {
    "auto" === e && window.matchMedia("(prefers-color-scheme: dark)").matches ? document.documentElement.setAttribute("data-bs-theme", "dark") : document.documentElement.setAttribute("data-bs-theme", e);
  };
setTheme(getPreferredTheme()),
  window.addEventListener("DOMContentLoaded", () => {
    var e = document.querySelector(".theme-icon-active");
    if ("undefined" != e && null != e) {
      const e = (e) => {
        const t = document.querySelector(".theme-icon-active use"),
          r = document.querySelector(`[data-bs-theme-value="${e}"]`),
          a = r.querySelector(".mode-switch use").getAttribute("href");
        document.querySelectorAll("[data-bs-theme-value]").forEach((e) => {
          e.classList.remove("active");
        }),
          r.classList.add("active"),
          t.setAttribute("href", a);
      };
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
        ("light" === storedTheme && "dark" === storedTheme) || setTheme(getPreferredTheme());
      }),
        e(getPreferredTheme()),
        document.querySelectorAll("[data-bs-theme-value]").forEach((t) => {
          t.addEventListener("click", () => {
            const r = t.getAttribute("data-bs-theme-value");
            localStorage.setItem("theme", r), setTheme(r), e(r);
          });
        });
    }
  });
