(() => {
	var e = {
			595: () => {
				const e = document.querySelectorAll(".faq__accordion");
				let t = null;
				e.forEach((e) => {
					e.addEventListener("click", (e) => {
						const o = e.currentTarget;
						null !== t &&
							t !== o &&
							(t.classList.toggle("faq__accordion-opened"),
							(t.querySelector(".faq__content").style.maxHeight =
								null));
						const a = o.querySelector(".faq__btn"),
							l = o.querySelector(".faq__content");
						o.classList.toggle("faq__accordion-opened"),
							o.classList.contains("faq__accordion-opened")
								? (a.setAttribute("aria-expanded", !0),
								  l.setAttribute("aria-hidden", !1),
								  (l.style.maxHeight = `${l.scrollHeight}px`))
								: (a.setAttribute("aria-expanded", !1),
								  l.setAttribute("aria-hidden", !0),
								  (l.style.maxHeight = null)),
							(t = o);
					});
				}),
					e[0].click();
			},
			566: () => {
				const e = document.querySelector(".menu"),
					t = document.querySelector(".header__burger"),
					o = document.querySelector(".page__body");
				t.addEventListener("click", () => {
					t.classList.contains("burger--active")
						? ((e.style.transform = "translateX(100%)"),
						  t.classList.remove("burger--active"),
						  (o.style.overflow = "visible"))
						: ((e.style.transform = "translateX(0)"),
						  (e.style.opacity = "1"),
						  t.classList.add("burger--active"),
						  (o.style.overflow = "hidden"));
				});
			},
		},
		t = {};
	function o(a) {
		var l = t[a];
		if (void 0 !== l) return l.exports;
		var r = (t[a] = { exports: {} });
		return e[a](r, r.exports, o), r.exports;
	}
	(() => {
		"use strict";
		const e = {
				windowEl: window,
				documentEl: document,
				htmlEl: document.documentElement,
				bodyEl: document.body,
			},
			t = () => {
				const t = document?.querySelectorAll(".fixed-block"),
					o =
						(document.body,
						parseInt(e.bodyEl.dataset.position, 10));
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
				l = document?.querySelectorAll("[data-menu-item]"),
				r = document?.querySelector("[data-menu-overlay]");
			o?.addEventListener("click", (l) => {
				o?.classList.toggle("burger--active"),
					a?.classList.toggle("menu--active"),
					a?.classList.contains("menu--active")
						? (o?.setAttribute("aria-expanded", "true"),
						  o?.setAttribute("aria-label", "Закрыть меню"),
						  (() => {
								const t =
										document?.querySelectorAll(
											".fixed-block"
										),
									o = window.scrollY,
									a =
										window.innerWidth -
										e.bodyEl.offsetWidth +
										"px";
								(e.htmlEl.style.scrollBehavior = "none"),
									t.forEach((e) => {
										e.style.paddingRight = a;
									}),
									(e.bodyEl.style.paddingRight = a),
									e.bodyEl.classList.add("dis-scroll"),
									(e.bodyEl.dataset.position = o),
									(e.bodyEl.style.top = `-${o}px`);
						  })())
						: (o?.setAttribute("aria-expanded", "false"),
						  o?.setAttribute("aria-label", "Открыть меню"),
						  t());
			}),
				r?.addEventListener("click", () => {
					o?.setAttribute("aria-expanded", "false"),
						o?.setAttribute("aria-label", "Открыть меню"),
						o.classList.remove("burger--active"),
						a.classList.remove("menu--active"),
						t();
				}),
				l?.forEach((e) => {
					e.addEventListener("click", () => {
						o?.setAttribute("aria-expanded", "false"),
							o?.setAttribute("aria-label", "Открыть меню"),
							o.classList.remove("burger--active"),
							a.classList.remove("menu--active"),
							t();
					});
				});
		})(),
			o(595),
			o(566);
	})();
})();
