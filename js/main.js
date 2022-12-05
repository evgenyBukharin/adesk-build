(() => {
    var e = {
            595: () => {
                const e = document.querySelectorAll(".faq__accordion");
                let t = null;
                e.forEach((o) => {
                    o.addEventListener("click", (o) => {
                        const a = o.currentTarget;
                        t !== a &&
                            e.forEach((e) => {
                                e.classList.remove("faq__accordion-opened"), (e.querySelector(".faq__content").style.maxHeight = null);
                            });
                        const r = a.querySelector(".faq__btn"),
                            l = a.querySelector(".faq__content");
                        a.classList.toggle("faq__accordion-opened"), a.classList.contains("faq__accordion-opened") ? (r.setAttribute("aria-expanded", !0), l.setAttribute("aria-hidden", !1), (l.style.maxHeight = `${l.scrollHeight}px`)) : (r.setAttribute("aria-expanded", !1), l.setAttribute("aria-hidden", !0), (l.style.maxHeight = null)), (t = a);
                    });
                }),
                    (t = e[0]),
                    e[0].click();
            },
            566: () => {
                const e = document.querySelector(".menu"),
                    t = document.querySelector(".header__burger"),
                    o = document.querySelector(".page__body");
                t.addEventListener("click", () => {
                    t.classList.contains("burger--active") ? ((e.style.transform = "translateX(100%)"), t.classList.remove("burger--active"), (o.style.overflow = "visible")) : ((e.style.transform = "translateX(0)"), (e.style.opacity = "1"), t.classList.add("burger--active"), (o.style.overflow = "hidden"));
                });
            },
        },
        t = {};
    function o(a) {
        var r = t[a];
        if (void 0 !== r) return r.exports;
        var l = (t[a] = { exports: {} });
        return e[a](l, l.exports, o), l.exports;
    }
    (() => {
        "use strict";
        const e = { windowEl: window, documentEl: document, htmlEl: document.documentElement, bodyEl: document.body },
            t = () => {
                const t = document?.querySelectorAll(".fixed-block"),
                    o = (document.body, parseInt(e.bodyEl.dataset.position, 10));
                t.forEach((e) => {
                    e.style.paddingRight = "0px";
                }),
                    (e.bodyEl.style.paddingRight = "0px"),
                    (e.bodyEl.style.top = "auto"),
                    e.bodyEl.classList.remove("dis-scroll"),
                    window.scroll({ top: o, left: 0 }),
                    e.bodyEl.removeAttribute("data-position"),
                    (e.htmlEl.style.scrollBehavior = "smooth");
            };
        !(function () {
            const o = document?.querySelector("[data-burger]"),
                a = document?.querySelector("[data-menu]"),
                r = document?.querySelectorAll("[data-menu-item]"),
                l = document?.querySelector("[data-menu-overlay]");
            o?.addEventListener("click", (r) => {
                o?.classList.toggle("burger--active"),
                    a?.classList.toggle("menu--active"),
                    a?.classList.contains("menu--active")
                        ? (o?.setAttribute("aria-expanded", "true"),
                          o?.setAttribute("aria-label", "Закрыть меню"),
                          (() => {
                              const t = document?.querySelectorAll(".fixed-block"),
                                  o = window.scrollY,
                                  a = window.innerWidth - e.bodyEl.offsetWidth + "px";
                              (e.htmlEl.style.scrollBehavior = "none"),
                                  t.forEach((e) => {
                                      e.style.paddingRight = a;
                                  }),
                                  (e.bodyEl.style.paddingRight = a),
                                  e.bodyEl.classList.add("dis-scroll"),
                                  (e.bodyEl.dataset.position = o),
                                  (e.bodyEl.style.top = `-${o}px`);
                          })())
                        : (o?.setAttribute("aria-expanded", "false"), o?.setAttribute("aria-label", "Открыть меню"), t());
            }),
                l?.addEventListener("click", () => {
                    o?.setAttribute("aria-expanded", "false"), o?.setAttribute("aria-label", "Открыть меню"), o.classList.remove("burger--active"), a.classList.remove("menu--active"), t();
                }),
                r?.forEach((e) => {
                    e.addEventListener("click", () => {
                        o?.setAttribute("aria-expanded", "false"), o?.setAttribute("aria-label", "Открыть меню"), o.classList.remove("burger--active"), a.classList.remove("menu--active"), t();
                    });
                });
        })(),
            o(595),
            o(566);
    })();
})();
