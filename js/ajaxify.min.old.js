let Ay;
function _won(t, e, s = !1) {
  !1 === s && (s = { once: !0 }), setTimeout(() => window.addEventListener(t, e, s));
}
let rootUrl = location.origin,
  inlineclass = "ajy-inline",
  bdy,
  qa = (t, e = document) => e.querySelectorAll(t),
  qs = (t, e = document) => e.querySelector(t),
  qha = (t) => qs("head").appendChild(t),
  prC = (t) => t.parentNode.removeChild(t),
  dcE = (t) => document.createElement(t),
  _copyAttributes = (t, e, s) => {
    s && [...t.attributes].forEach((e) => t.removeAttribute(e.name)), [...e.attributes].forEach((e) => "ajy-body" == e.nodeValue || t.setAttribute(e.nodeName, e.nodeValue));
  };
class Ajaxify {
  constructor(t) {
    function e(t, e, s, r = document) {
      r.addEventListener(
        t,
        function (t) {
          for (var r = t.target; r && r != this; r = r.parentNode)
            if (r.matches(e)) {
              s(r, t);
              break;
            }
        },
        !!t.iO("mo")
      );
    }
    (String.prototype.iO = function (t) {
      return this.toString().indexOf(t) + 1;
    }),
      (Ay = this),
      (Ay.s = { elements: "body", selector: "a:not(.no-ajaxy)", forms: "form:not(.no-ajaxy)", canonical: !1, refresh: !1, requestDelay: 0, scrolltop: "s", scrollDelay: !1, bodyClasses: !0, deltas: !0, asyncdef: !0, alwayshints: !1, inline: !0, inlinehints: !1, inlineskip: "adsbygoogle", inlineappend: !0, intevents: !0, style: !0, prefetchoff: !1, verbosity: 0, memoryoff: !1, cb: 0, pluginon: !0, passCount: !1 }),
      (Ay.pass = 0),
      (Ay.currentURL = ""),
      (Ay.h = {}),
      (Ay.parse = (t, e) => ((e = dcE("div")).insertAdjacentHTML("afterbegin", t), e.firstElementChild)),
      (Ay.trigger = (t, e) => {
        let s = document.createEvent("HTMLEvents");
        s.initEvent("pronto." + t, !0, !1), (s.data = e || Ay.Rq("e")), window.dispatchEvent(s);
      }),
      (Ay.internal = (t) => !!t && ("object" == typeof t && (t = t.href), "" === t || t.substring(0, rootUrl.length) === rootUrl || !t.iO(":"))),
      (Ay.intevents = () => {
        (EventTarget.prototype.ael = EventTarget.prototype.addEventListener),
          (EventTarget.prototype.addEventListener = function (t, e, s = !1) {
            (this !== document && this !== window) || "DOMContentLoaded" != t ? this.ael(t, e, s) : setTimeout(e);
          });
      });
    class s {
      constructor(t) {
        let e = this;
        (e.list = "string" == typeof t && t.length > 0 && t.split(", ")), (e.find = (t) => !!t && !!e.list && e.list.some((e) => t.iO(e)));
      }
    }
    function r(t) {
      Ay.s.verbosity && console && console.log(t);
    }
    class i {
      constructor() {
        let t = 0,
          e = 0,
          s = 0,
          i = "",
          n = 0,
          o = 0,
          a = 0,
          y = /<\!DOCTYPE[^>]*>/i,
          l = /<(html|head)([\s\>])/gi,
          c = /<(body)([\s\>])/gi,
          h = /<\/(html|head|body)\>/gi;
        this.a = function (r, n, y) {
          if (!r) return Ay.cache.g();
          if (r.iO("/")) {
            if (((e = n), s == r)) return;
            return d(r);
          }
          return "+" === r ? ((s = n), (e = y), d(n, !0)) : "a" !== r ? ("s" === r ? (o ? 1 : 0) + i : "-" === r ? A(n) : "x" === r ? t : Ay.cache.g() ? ("body" === r ? qs("#ajy-" + r, Ay.cache.g()) : "script" === r ? qa(r, Ay.cache.g()) : qs("title" === r ? r : ".ajy-" + r, Ay.cache.g())) : void 0) : void (o > 0 && (g(), a.abort()));
        };
        let A = (t) => (Ay.pass++, f(t), qa("body > script").forEach((t) => !!t.classList.contains(inlineclass) && prC(t)), Ay.scripts.t(), Ay.scripts.s(), Ay.scripts.c()),
          d = (t, r) => (t.iO("#") && (t = t.split("#")[0]), Ay.Rq("is") || !Ay.cache.l(t) ? u(t, r) : ((s = 0), e ? e() : void 0)),
          p = (t, e) => {
            if (e) {
              var s = e.cloneNode(!0);
              qa("script", s).forEach((t) => prC(t)), _copyAttributes(t, s, !0), (t.innerHTML = s.innerHTML);
            }
          },
          f = (t) =>
            Ay.cache.g() &&
            !$(t) &&
            t.forEach(function (t) {
              p(t, qs("#" + t.getAttribute("id"), Ay.cache.g()));
            }),
          $ = (t) => "body" == t[0].tagName.toLowerCase() && (p(bdy, qs("#ajy-body", Ay.cache.g())), 1),
          u = (e, s) => {
            var n = Ay.Rq("is");
            (i = s ? "p" : "c"),
              (a = new AbortController()),
              o++,
              fetch(e, { method: n ? "POST" : "GET", cache: "default", mode: "same-origin", headers: { "X-Requested-With": "XMLHttpRequest" }, body: n ? Ay.Rq("d") : null, signal: a.signal })
                .then((r) => {
                  if (r.ok && w(r)) return (t = r), r.text();
                  s || (location.href = e);
                })
                .then((s) => {
                  if ((g(1), s)) return (t.responseText = s), m(e, s);
                })
                .catch((t) => {
                  if ("AbortError" !== t.name)
                    try {
                      return Ay.trigger("error", t), r("Response text : " + t.message), m(e, t.message, t);
                    } catch (t) {}
                })
                .finally(() => o--);
          },
          g = (t) => ((s = 0), t ? 0 : (e = 0)),
          m = (t, s, r) => Ay.cache.s(Ay.parse(q(s))) && (Ay.pages.p([t, Ay.cache.g()]), 1) && e && e(r),
          w = (t) => (n = t.headers.get("content-type")) && (n.iO("html") || n.iO("form-")),
          q = (t) => (dcE("html").innerHTML = v(t).trim()),
          v = (t) => String(t).replace(y, "").replace(l, '<div class="ajy-$1"$2').replace(c, '<div id="ajy-$1"$2').replace(h, "</div>");
      }
    }
    class n {
      constructor() {
        let t = 0,
          e = 0,
          s = 0,
          r = 0,
          i = 0,
          n = 0,
          o = !1;
        this.a = function (y, l, c) {
          if ("=" === y) return l ? n === Ay.currentURL || n === o : n === Ay.currentURL;
          if ("!" === y) return (o = n);
          if ("?" === y) {
            let t = Ay.fn("s");
            return t.iO("0") || l || Ay.fn("a"), !(("1c" === t && l) || ("1p" === t && l && Ay.s.memoryoff && Ay.fn("a"), 0));
          }
          if ("v" === y) {
            if (!l || (a(l, c), !Ay.internal(n))) return !1;
            y = "i";
          }
          return "i" === y ? ((t = !1), (e = null), (s = !0), (r = !1), n) : "h" === y ? (l && ("string" == typeof l && (i = 0), (n = l.href ? l.href : l)), n) : "e" === y ? (l && a(l, c), i || n) : "p" === y ? (void 0 !== l && (s = l), s) : "is" === y ? (void 0 !== l && (t = l), t) : "d" === y ? (l && (e = l), e) : "C" === y ? (void 0 !== l && (r = l), r) : "c" === y ? (!r || r === l || l.iO("#") || l.iO("?") ? l : r) : void 0;
        };
        let a = (t, e) => (n = "string" != typeof (i = t) ? (i.currentTarget && i.currentTarget.href) || (e && e.href) || i.currentTarget.action || i.originalEvent.state.url : i);
      }
    }
    class o {
      constructor() {
        let t = 0,
          e = 0;
        this.a = function (i, n) {
          Ay.s.forms &&
            i &&
            ("d" === i && (e = n),
            "a" === i &&
              e.forEach((e) => {
                Array.prototype.filter
                  .call(qa(Ay.s.forms, e), function (t) {
                    let e = t.getAttribute("action");
                    return Ay.internal(e && e.length > 0 ? e : Ay.currentURL);
                  })
                  .forEach((e) => {
                    e.addEventListener("submit", (e) => {
                      (t = e.target), (n = s());
                      var i = "get",
                        o = t.getAttribute("method");
                      o.length > 0 && "post" == o.toLowerCase() && (i = "post");
                      var a,
                        y = t.getAttribute("action");
                      return (a = y && y.length > 0 ? y : Ay.currentURL), Ay.Rq("v", e), "get" == i ? (a = r(a, n)) : (Ay.Rq("is", !0), Ay.Rq("d", n)), Ay.trigger("submit", a), Ay.pronto(0, { href: a }), e.preventDefault(), !1;
                    });
                  });
              }));
        };
        let s = () => {
            let e = new FormData(t),
              s = qs("input[name][type=submit]", t);
            return s && e.append(s.getAttribute("name"), s.value), e;
          },
          r = (t, e) => {
            let s = "";
            for (var [r, i] of (t.iO("?") && (t = t.substring(0, t.iO("?"))), e.entries())) s += `${r}=${encodeURIComponent(i)}&`;
            return `${t}?${s.slice(0, -1)}`;
          };
      }
    }
    class a {
      constructor() {
        let t = 0,
          i = 0,
          n = 0;
        (Ay.h.prefetchoff = new s(Ay.s.prefetchoff)),
          (this.a = function (e, s) {
            if (s) {
              if ("i" === s) return (bdy = document.body), e.length || (e = "body"), (t = qa(e)), (Ay.frms = new o().a), Ay.s.idleTime && (Ay.slides = new classSlides(Ay).a), (Ay.scrolly = new Scrolly()), (Ay.offsets = new Offsets()).f(), (Ay.hApi = new HApi()), a(), e;
              if ("object" == typeof s) return Ay.Rq("h", s), void A();
              s.iO("/") && (Ay.Rq("h", s), A(!0));
            }
          });
        let a = () => {
            Ay.hApi.r(window.location.href), window.addEventListener("popstate", p), !0 !== Ay.s.prefetchoff && (e("mouseenter", Ay.s.selector, y), e("mouseleave", Ay.s.selector, l), e("touchstart", Ay.s.selector, c)), e("click", Ay.s.selector, h, bdy), Ay.frms("d", qa("body")), Ay.frms("a"), Ay.frms("d", t), Ay.s.idleTime && Ay.slides("i");
          },
          y = (t, e) => (l(), (n = setTimeout(() => c(t, e), 150))),
          l = () => clearTimeout(n),
          c = (t, e) => {
            if (!0 !== Ay.s.prefetchoff && Ay.Rq("?", !0)) {
              var s = Ay.Rq("v", e, t);
              Ay.Rq("=", !0) || !s || Ay.h.prefetchoff.find(s) || Ay.fn("+", s, () => !1);
            }
          },
          h = (t, e, s) => {
            if (Ay.Rq("?")) {
              var r = Ay.Rq("v", e, t);
              if (r && !u(t)) {
                if ("#" === r.substr(-1)) return !0;
                if (g()) return Ay.hApi.r(r), !0;
                Ay.scrolly.p(),
                  ((t) => {
                    t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation();
                  })(e),
                  Ay.Rq("=") && Ay.hApi.r(),
                  (Ay.s.refresh || !Ay.Rq("=")) && A(s);
              }
            }
          },
          A = (t) => {
            Ay.Rq("!"),
              t && Ay.Rq("p", !1),
              Ay.trigger("request"),
              Ay.fn(Ay.Rq("h"), (t) => {
                t && (r("Error in _request : " + t), Ay.trigger("error", t)), d();
              });
          },
          d = () => {
            Ay.trigger("beforeload"), Ay.s.requestDelay ? (i && clearTimeout(i), (i = setTimeout(f, Ay.s.requestDelay))) : f();
          },
          p = (t) => {
            var e = window.location.href;
            Ay.Rq("i"), Ay.Rq("h", e), Ay.Rq("p", !1), Ay.scrolly.p(), e && e !== Ay.currentURL && (Ay.trigger("request"), Ay.fn(e, d));
          },
          f = () => {
            Ay.trigger("load"), Ay.s.bodyClasses && _copyAttributes(bdy, Ay.fn("body"), !0);
            var e,
              s = Ay.Rq("h");
            (s = Ay.Rq("c", s)), Ay.Rq("p") ? Ay.hApi.p(s) : Ay.hApi.r(s), (e = Ay.fn("title")) && (qs("title").innerHTML = e.innerHTML), Ay.Rq("C", Ay.fn("-", t)), Ay.frms("a"), Ay.scrolly.l(), $(s), Ay.trigger("render"), Ay.s.passCount && (qs("#" + Ay.s.passCount).innerHTML = "Pass: " + Ay.pass), Ay.s.cb && Ay.s.cb();
          },
          $ = (t) => {
            (t = "/" + t.replace(rootUrl, "")), void 0 !== window.ga ? window.ga("send", "pageview", t) : void 0 !== window._gaq && window._gaq.push(["_trackPageview", t]);
          },
          u = (t) => {
            var e = Ay.Rq("h"),
              s = Ay.Rq("e"),
              r = s.currentTarget.target || t.target;
            return s.which > 1 || s.metaKey || s.ctrlKey || s.shiftKey || s.altKey || "_blank" === r || e.iO("wp-login") || e.iO("wp-admin");
          },
          g = () => {
            var t = Ay.Rq("e");
            return (t.hash && t.href.replace(t.hash, "") === window.location.href.replace(location.hash, "")) || t.href === window.location.href + "#";
          };
      }
    }
    Ay.init = () => {
      let e = t;
      return e && "string" == typeof e ? Ay.pronto(0, e) : ("complete" === document.readyState || ("loading" !== document.readyState && !document.documentElement.doScroll) ? y() : document.addEventListener("DOMContentLoaded", y), Ay);
    };
    let y = () => {
        (Ay.s = Object.assign(Ay.s, t)), (Ay.pages = new Pages()).f(), (Ay.pronto = new a().a), l() && (Ay.pronto(Ay.s.elements, "i"), Ay.s.deltas && Ay.scripts.o());
      },
      l = () =>
        window.history && window.history.pushState && window.history.replaceState && Ay.s.pluginon
          ? (r("Ajaxify loaded..."), Ay.s.intevents && Ay.intevents(), (Ay.scripts = new Scrpts()), (Ay.h.inlinehints = new s(Ay.s.inlinehints)), (Ay.h.inlineskip = new s(Ay.s.inlineskip)), (Ay.cache = new Cache()), (Ay.memory = new Memory()), (Ay.h.memoryoff = new s(Ay.s.memoryoff)), (Ay.fn = Ay.getPage = new i().a), (Ay.detScripts = new DetScripts()), (Ay.addAll = new AddAll()), (Ay.h.alwayshints = new s(Ay.s.alwayshints)), (Ay.Rq = new n().a), !0)
          : (r("Gracefully exiting..."), !1);
    Ay.init();
  }
}
class Cache {
  g() {
    return this.d;
  }
  s(t) {
    return (this.d = t);
  }
  l(t) {
    let e = Ay.memory.l(t);
    return this.s(!1 === e ? e : Ay.pages.l(e));
  }
}
class Memory {
  l(t) {
    return !!t && !0 !== Ay.s.memoryoff && (!1 === Ay.s.memoryoff || !Ay.h.memoryoff.find(t)) && t;
  }
}
class Pages {
  f() {
    this.d = [];
  }
  l(t) {
    if (this.P(t)) return this.d[this.i][1];
  }
  p(t) {
    this.P(t[0]) ? (this.d[this.i] = t) : this.d.push(t);
  }
  P(t) {
    return (this.i = this.d.findIndex((e) => e[0] == t)) + 1;
  }
}
class DetScripts {
  d(t) {
    if (!(this.h = Ay.pass ? Ay.fn("head") : qs("head"))) return !0;
    (this.lk = qa("link", this.h)), (t.j = Ay.pass ? Ay.fn("script") : qa("script")), (t.c = this.x("stylesheet")), (t.y = qa("style", this.h)), (t.can = this.x("canonical"));
  }
  x(t) {
    return Array.prototype.filter.call(this.lk, (e) => e.getAttribute("rel").iO(t));
  }
}
class Offsets {
  f() {
    this.d = [];
  }
  l(t) {
    return t.iO("?") && (t = t.split("?")[0]), this.O(t) ? this.d[this.i][1] : 0;
  }
  p(t) {
    let e = t.iO("?") ? t.split("?")[0] : t,
      s = e.iO("#") ? e.split("#")[0] : e,
      r = [s, (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop];
    this.O(s) ? (this.d[this.i] = r) : this.d.push(r);
  }
  O(t) {
    return (this.i = this.d.findIndex((e) => e[0] == t)) + 1;
  }
}
class Scrolly {
  constructor() {
    "scrollRestoration" in history && (history.scrollRestoration = "manual");
  }
  p() {
    "s" == Ay.s.scrolltop && Ay.offsets.p(Ay.currentURL);
  }
  l() {
    let t = Ay.currentURL;
    if (t.iO("#") && t.iO("#") < t.length - 1) {
      let e = qs("#" + t.split("#")[1]);
      if (!e) return;
      let s = e.getBoundingClientRect();
      return this.s(s.top + window.pageYOffset - document.documentElement.clientTop);
    }
    "s" == Ay.s.scrolltop ? this.s(Ay.offsets.l(t)) : Ay.s.scrolltop && this.s(0);
  }
  s(t) {
    !1 === Ay.s.scrollDelay ? window.scrollTo(0, t) : setTimeout(() => window.scrollTo(0, t), Ay.s.scrollDelay);
  }
}
class HApi {
  r(t) {
    let e = this.u(t);
    history.replaceState({ url: e }, "state-" + e, e);
  }
  p(t) {
    let e = this.u(t);
    e !== window.location.href && history.pushState({ url: e }, "state-" + e, e);
  }
  u(t) {
    return t && (Ay.currentURL = t), Ay.currentURL;
  }
}
class AddAll {
  constructor() {
    (this.CSS = []), (this.JS = []);
  }
  a(t, e) {
    if (t.length && "n" !== Ay.s.deltas) {
      if (((this.PK = e), !Ay.s.deltas)) return t.forEach((t) => this.iScript(t));
      (this.O = "href" == e ? this.CSS : this.JS),
        t.forEach((t) => {
          let s = this.gA(t);
          return Ay.pass ? ("always" == t.getAttribute("data-class") || Ay.h.alwayshints.find(s) ? (this.removeScript(), void this.iScript(t)) : void (s ? this.O.some((t) => t == s) || (this.O.push(s), this.iScript(t)) : "href" == e || t.classList.contains("no-ajaxy") || Ay.scripts.i(t))) : s && this.O.push(s);
        });
    }
  }
  gA(t) {
    return (this.u = t[this.PK]);
  }
  iScript(t) {
    if ((this.gA(t), "href" == this.PK)) return qha(Ay.parse('<link rel="stylesheet" type="text/css" href="*" />'.replace("*", this.u)));
    if (!this.u) return Ay.scripts.i(t);
    var e = dcE("script");
    (e.async = Ay.s.asyncdef), _copyAttributes(e, t), qha(e);
  }
  removeScript() {
    qa(("href" == this.PK ? 'link[href*="!"]' : 'script[src*="!"]').replace("!", this.u)).forEach((t) => prC(t));
  }
}
class Scrpts {
  constructor() {
    this.S = {};
  }
  s() {
    this.allstyle(this.S.y);
  }
  o() {
    this.d(), this.a();
  }
  c() {
    return !!Ay.s.canonical && !!this.S.can && this.S.can.getAttribute("href");
  }
  d() {
    return Ay.detScripts.d(this.S);
  }
  i(t) {
    this.one(t);
  }
  t() {
    this.d() || this.a();
  }
  a() {
    this.delta(this.S);
  }
  allstyle(t) {
    Ay.s.style &&
      t &&
      (qa("style", qs("head")).forEach((t) => prC(t)),
      t.forEach((t) => {
        let e = Ay.parse("<style>" + t.textContent + "</style>");
        _copyAttributes(e, t), qha(e);
      }));
  }
  one(t) {
    !(this.x = t.textContent).iO("new Ajaxify(") && ((Ay.s.inline && !Ay.h.inlineskip.find(this.x)) || t.classList.contains("ajaxy") || Ay.h.inlinehints.find(this.x)) && this.add(t);
  }
  add(S) {
    if (this.x && this.x.length) {
      if (Ay.s.inlineappend || (S.getAttribute("type") && !S.getAttribute("type").iO("text/javascript")))
        try {
          return this.app(S);
        } catch (t) {}
      try {
        eval(this.x);
      } catch (t) {
        lg("Error in inline script : " + this.x + "\nError code : " + t);
      }
    }
  }
  app(t) {
    let e = dcE("script");
    _copyAttributes(e, t), e.classList.add(inlineclass);
    try {
      e.appendChild(document.createTextNode(this.x));
    } catch (t) {
      e.text = this.x;
    }
    return qs("body").appendChild(e);
  }
  delta(t) {
    Ay.addAll.a(t.c, "href"), Ay.addAll.a(t.j, "src");
  }
}
