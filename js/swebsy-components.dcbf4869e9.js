/*! ✦  swebsy  ✦  generated file  ────────────────────────────────────────────

  Generated file. We do not recommend editing it by hand.

    ·  Nothing here comes back. Swebsy edits its own project file, not
       this folder, so hand edits never reach the editor.
    ·  The next export overwrites this file completely.
    ·  Class names and file names are generated and change per build.

  Edit the design where it sticks:
  https://studio.swebsy.com/create?template=morrow&ref=export

  More in README.md, next to this file.
────────────────────────────────────────────  */
var items = document.querySelectorAll("#i5bg");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    var c, d, f;
    const a = this,
      r = (c = a.ownerDocument) == null ? void 0 : c.defaultView;
    if (
      !r ||
      (a.dataset.navbarCollapseInit === "1" && !r.__swebsyPreviewRuntime)
    )
      return;
    ((d = a.__swebsyNavbarUnregister) == null || d.call(a),
      a.__swebsyNavbarRuntimeReady &&
        (r.removeEventListener(
          "swebsy:preview-runtime-ready",
          a.__swebsyNavbarRuntimeReady,
        ),
        delete a.__swebsyNavbarRuntimeReady),
      (f = a.__swebsyNavbarCleanup) == null || f.call(a));
    const o = a.querySelector('[data-navbar-part="toggler"]'),
      i = a.querySelector('[data-navbar-part="collapse"]');
    if (!o || !i) return;
    const s = () => {
        var I;
        ((I = a.__swebsyNavbarCleanup) == null || I.call(a),
          (a.dataset.navbarCollapseInit = "1"));
        const m = i.className,
          b = i.style.height,
          v = o.className,
          w = o.getAttribute("aria-expanded");
        let x;
        const M = () => {
            const U = (r.getComputedStyle(i).transitionDuration ?? "0s")
                .split(",")
                .map((G) => {
                  const he = parseFloat(G.trim());
                  return G.trim().endsWith("ms") ? he : he * 1e3;
                }),
              B = Math.max(...U);
            return Number.isFinite(B) && B > 0 ? B : 0;
          },
          T = (L) => {
            (x !== void 0 && r.clearTimeout(x), (x = r.setTimeout(L, M())));
          },
          E = () => {
            i.classList.contains("collapsing") ||
              (i.classList.remove("collapse", "show"),
              i.classList.add("collapsing"),
              (i.style.height = "0"),
              i.offsetHeight,
              (i.style.height = i.scrollHeight + "px"),
              T(() => {
                (i.classList.remove("collapsing"),
                  i.classList.add("collapse", "show"),
                  (i.style.height = ""),
                  o.setAttribute("aria-expanded", "true"),
                  o.classList.remove("collapsed"));
              }));
          },
          P = () => {
            i.classList.contains("collapsing") ||
              ((i.style.height = i.getBoundingClientRect().height + "px"),
              i.classList.remove("collapse", "show"),
              i.classList.add("collapsing"),
              i.offsetHeight,
              (i.style.height = "0"),
              T(() => {
                (i.classList.remove("collapsing"),
                  i.classList.add("collapse"),
                  (i.style.height = ""),
                  o.setAttribute("aria-expanded", "false"),
                  o.classList.add("collapsed"));
              }));
          },
          $ = () => {
            i.classList.contains("show") ? P() : E();
          };
        (o.addEventListener("click", $),
          (a.__swebsyNavbarCleanup = () => {
            (o.removeEventListener("click", $),
              x !== void 0 && r.clearTimeout(x),
              (i.className = m),
              (i.style.height = b),
              (o.className = v),
              w === null
                ? o.removeAttribute("aria-expanded")
                : o.setAttribute("aria-expanded", w),
              delete a.dataset.navbarCollapseInit);
          }));
      },
      l = () => {
        const m = r.__swebsyPreviewRuntime;
        return m
          ? ((a.__swebsyNavbarUnregister = m.register(a, "navbar", {
              start: s,
              stop: () => {
                var b;
                return (b = a.__swebsyNavbarCleanup) == null
                  ? void 0
                  : b.call(a);
              },
            })),
            !0)
          : !1;
      },
      p = (() => {
        try {
          return r.parent !== r && !!r.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!l()) {
      if (p) {
        const m = () => l();
        ((a.__swebsyNavbarRuntimeReady = m),
          r.addEventListener("swebsy:preview-runtime-ready", m, { once: !0 }));
        return;
      }
      s();
    }
  }).bind(items[i])();
}
var items = document.querySelectorAll("#i8t9cl");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    var R, B, $, Z;
    const t = this,
      s = (R = t.ownerDocument) == null ? void 0 : R.defaultView,
      r = (B = t.ownerDocument) == null ? void 0 : B.documentElement;
    if (!s || !r) return;
    const a = "swebsy:color-mode",
      c = t.getAttribute("data-mode");
    (($ = t.__swebsyDarkModeSwitchUnregister) == null || $.call(t),
      t.__swebsyDarkModeSwitchRuntimeReady &&
        (s.removeEventListener(
          "swebsy:preview-runtime-ready",
          t.__swebsyDarkModeSwitchRuntimeReady,
        ),
        delete t.__swebsyDarkModeSwitchRuntimeReady),
      (Z = t.__swebsyDarkModeSwitchCleanup) == null || Z.call(t));
    const d =
        t.id || `dark-mode-switch-${Math.random().toString(36).slice(2, 9)}`,
      y = () => Array.from(t.querySelectorAll("input[type=radio][data-mode]")),
      m = y();
    (m.forEach((q) => {
      const re = q.getAttribute("data-mode");
      re && ((q.id = `${d}__${re}`), (q.name = `${d}__toggle`));
    }),
      t.querySelectorAll("label[for]").forEach((q) => {
        const re = q.previousElementSibling;
        (re == null ? void 0 : re.tagName) === "INPUT" &&
          re.id &&
          q.setAttribute("for", re.id);
      }));
    const b = (q) =>
        q === "system" || q === "light" || q === "dark" ? q : null,
      w = (q) => (q === "system" ? "System" : q === "dark" ? "Dark" : "Light"),
      x = (q) => (q === "system" ? "light" : q === "light" ? "dark" : "system"),
      T = (q) => {
        const re = t.querySelector("[data-theme-cycle-button]");
        if (!re) return;
        const ue = x(q),
          Q = `Theme: ${w(q)}. Click to switch to ${w(ue)}.`;
        (re.setAttribute("aria-label", Q),
          re.setAttribute("title", Q),
          re.querySelectorAll("[data-theme-mode-icon]").forEach((ie) => {
            ie.hidden = ie.getAttribute("data-theme-mode-icon") !== q;
          }));
      },
      I = b(c) || "system",
      N = (q) => {
        var Te;
        (Te = t.__swebsyDarkModeSwitchCleanup) == null || Te.call(t);
        const re = [],
          ue = s.matchMedia
            ? s.matchMedia("(prefers-color-scheme: dark)")
            : null,
          Q = (F) =>
            F === "system" ? (ue != null && ue.matches ? "dark" : "light") : F,
          ie = () => {
            var F;
            if (q) return b(q.getSessionValue(a));
            try {
              return b((F = s.localStorage) == null ? void 0 : F.getItem(a));
            } catch {
              return null;
            }
          },
          te = (F) => {
            var Se;
            if (q) q.setSessionValue(a, F);
            else
              try {
                (Se = s.localStorage) == null || Se.setItem(a, F);
              } catch {}
            s.dispatchEvent(
              new s.CustomEvent("swebsy:color-mode-preference", {
                detail: { mode: F, source: t },
              }),
            );
          };
        let ce = ie() || I;
        q && !ie() && q.setSessionValue(a, ce);
        const ke = (F, Se = !1) => {
            const $e = b(F);
            if (!$e) return;
            ((ce = $e),
              t.setAttribute("data-mode", $e),
              y().forEach((Ke) => {
                Ke.checked = Ke.getAttribute("data-mode") === $e;
              }),
              T($e));
            const Ie = Q($e);
            (r.classList.toggle("dark", Ie === "dark"),
              r.classList.toggle("light", Ie === "light"),
              (r.style.colorScheme = Ie),
              q == null || q.notifyColorMode(Ie),
              Se && te($e));
          },
          Ae = () => {
            ce === "system" && ke("system");
          };
        (ue && typeof ue.addEventListener == "function"
          ? (ue.addEventListener("change", Ae),
            re.push(() => ue.removeEventListener("change", Ae)))
          : ue &&
            typeof ue.addListener == "function" &&
            (ue.addListener(Ae),
            re.push(() => {
              var F;
              return (F = ue.removeListener) == null ? void 0 : F.call(ue, Ae);
            })),
          m.forEach((F) => {
            const Se = () => {
              const $e = F.getAttribute("data-mode");
              $e && $e !== ce && ke($e, !0);
            };
            (F.addEventListener("change", Se),
              re.push(() => F.removeEventListener("change", Se)));
          }),
          t.querySelectorAll("label[for]").forEach((F) => {
            const Se = () => {
              const $e = F.previousElementSibling,
                Ie = $e == null ? void 0 : $e.getAttribute("data-mode");
              Ie && Ie !== ce && ke(Ie, !0);
            };
            (F.addEventListener("click", Se),
              re.push(() => F.removeEventListener("click", Se)));
          }));
        const Ne = t.querySelector("[data-theme-cycle-button]");
        if (Ne) {
          const F = () => ke(x(ce), !0);
          (Ne.addEventListener("click", F),
            re.push(() => Ne.removeEventListener("click", F)));
        }
        const Le = (F) => {
          const Se = F.detail;
          (Se == null ? void 0 : Se.source) !== t &&
            Se != null &&
            Se.mode &&
            ke(Se.mode);
        };
        (s.addEventListener("swebsy:color-mode-preference", Le),
          re.push(() =>
            s.removeEventListener("swebsy:color-mode-preference", Le),
          ),
          (t.__swebsyDarkModeSwitchCleanup = () => {
            (re.splice(0).forEach((F) => F()),
              t.setAttribute("data-mode", I),
              y().forEach((F) => {
                F.checked = F.getAttribute("data-mode") === I;
              }),
              T(I));
          }),
          ke(ce));
      },
      M = () => {
        const q = s.__swebsyPreviewRuntime;
        return q
          ? ((t.__swebsyDarkModeSwitchUnregister = q.register(
              t,
              "dark-mode-switch",
              {
                start: () => N(q),
                stop: () => {
                  var re;
                  return (re = t.__swebsyDarkModeSwitchCleanup) == null
                    ? void 0
                    : re.call(t);
                },
              },
            )),
            !0)
          : !1;
      },
      H = (() => {
        try {
          return s.parent !== s && !!s.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!M()) {
      if (H) {
        const q = () => M();
        ((t.__swebsyDarkModeSwitchRuntimeReady = q),
          s.addEventListener("swebsy:preview-runtime-ready", q, { once: !0 }));
        return;
      }
      N();
    }
  }).bind(items[i])();
}
var items = document.querySelectorAll("#i5bg-2-2");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    var c, d, f;
    const a = this,
      r = (c = a.ownerDocument) == null ? void 0 : c.defaultView;
    if (
      !r ||
      (a.dataset.navbarCollapseInit === "1" && !r.__swebsyPreviewRuntime)
    )
      return;
    ((d = a.__swebsyNavbarUnregister) == null || d.call(a),
      a.__swebsyNavbarRuntimeReady &&
        (r.removeEventListener(
          "swebsy:preview-runtime-ready",
          a.__swebsyNavbarRuntimeReady,
        ),
        delete a.__swebsyNavbarRuntimeReady),
      (f = a.__swebsyNavbarCleanup) == null || f.call(a));
    const o = a.querySelector('[data-navbar-part="toggler"]'),
      i = a.querySelector('[data-navbar-part="collapse"]');
    if (!o || !i) return;
    const s = () => {
        var I;
        ((I = a.__swebsyNavbarCleanup) == null || I.call(a),
          (a.dataset.navbarCollapseInit = "1"));
        const m = i.className,
          b = i.style.height,
          v = o.className,
          w = o.getAttribute("aria-expanded");
        let x;
        const M = () => {
            const U = (r.getComputedStyle(i).transitionDuration ?? "0s")
                .split(",")
                .map((G) => {
                  const he = parseFloat(G.trim());
                  return G.trim().endsWith("ms") ? he : he * 1e3;
                }),
              B = Math.max(...U);
            return Number.isFinite(B) && B > 0 ? B : 0;
          },
          T = (L) => {
            (x !== void 0 && r.clearTimeout(x), (x = r.setTimeout(L, M())));
          },
          E = () => {
            i.classList.contains("collapsing") ||
              (i.classList.remove("collapse", "show"),
              i.classList.add("collapsing"),
              (i.style.height = "0"),
              i.offsetHeight,
              (i.style.height = i.scrollHeight + "px"),
              T(() => {
                (i.classList.remove("collapsing"),
                  i.classList.add("collapse", "show"),
                  (i.style.height = ""),
                  o.setAttribute("aria-expanded", "true"),
                  o.classList.remove("collapsed"));
              }));
          },
          P = () => {
            i.classList.contains("collapsing") ||
              ((i.style.height = i.getBoundingClientRect().height + "px"),
              i.classList.remove("collapse", "show"),
              i.classList.add("collapsing"),
              i.offsetHeight,
              (i.style.height = "0"),
              T(() => {
                (i.classList.remove("collapsing"),
                  i.classList.add("collapse"),
                  (i.style.height = ""),
                  o.setAttribute("aria-expanded", "false"),
                  o.classList.add("collapsed"));
              }));
          },
          $ = () => {
            i.classList.contains("show") ? P() : E();
          };
        (o.addEventListener("click", $),
          (a.__swebsyNavbarCleanup = () => {
            (o.removeEventListener("click", $),
              x !== void 0 && r.clearTimeout(x),
              (i.className = m),
              (i.style.height = b),
              (o.className = v),
              w === null
                ? o.removeAttribute("aria-expanded")
                : o.setAttribute("aria-expanded", w),
              delete a.dataset.navbarCollapseInit);
          }));
      },
      l = () => {
        const m = r.__swebsyPreviewRuntime;
        return m
          ? ((a.__swebsyNavbarUnregister = m.register(a, "navbar", {
              start: s,
              stop: () => {
                var b;
                return (b = a.__swebsyNavbarCleanup) == null
                  ? void 0
                  : b.call(a);
              },
            })),
            !0)
          : !1;
      },
      p = (() => {
        try {
          return r.parent !== r && !!r.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!l()) {
      if (p) {
        const m = () => l();
        ((a.__swebsyNavbarRuntimeReady = m),
          r.addEventListener("swebsy:preview-runtime-ready", m, { once: !0 }));
        return;
      }
      s();
    }
  }).bind(items[i])();
}
var items = document.querySelectorAll("#i8t9cl-3");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    var R, B, $, Z;
    const t = this,
      s = (R = t.ownerDocument) == null ? void 0 : R.defaultView,
      r = (B = t.ownerDocument) == null ? void 0 : B.documentElement;
    if (!s || !r) return;
    const a = "swebsy:color-mode",
      c = t.getAttribute("data-mode");
    (($ = t.__swebsyDarkModeSwitchUnregister) == null || $.call(t),
      t.__swebsyDarkModeSwitchRuntimeReady &&
        (s.removeEventListener(
          "swebsy:preview-runtime-ready",
          t.__swebsyDarkModeSwitchRuntimeReady,
        ),
        delete t.__swebsyDarkModeSwitchRuntimeReady),
      (Z = t.__swebsyDarkModeSwitchCleanup) == null || Z.call(t));
    const d =
        t.id || `dark-mode-switch-${Math.random().toString(36).slice(2, 9)}`,
      y = () => Array.from(t.querySelectorAll("input[type=radio][data-mode]")),
      m = y();
    (m.forEach((q) => {
      const re = q.getAttribute("data-mode");
      re && ((q.id = `${d}__${re}`), (q.name = `${d}__toggle`));
    }),
      t.querySelectorAll("label[for]").forEach((q) => {
        const re = q.previousElementSibling;
        (re == null ? void 0 : re.tagName) === "INPUT" &&
          re.id &&
          q.setAttribute("for", re.id);
      }));
    const b = (q) =>
        q === "system" || q === "light" || q === "dark" ? q : null,
      w = (q) => (q === "system" ? "System" : q === "dark" ? "Dark" : "Light"),
      x = (q) => (q === "system" ? "light" : q === "light" ? "dark" : "system"),
      T = (q) => {
        const re = t.querySelector("[data-theme-cycle-button]");
        if (!re) return;
        const ue = x(q),
          Q = `Theme: ${w(q)}. Click to switch to ${w(ue)}.`;
        (re.setAttribute("aria-label", Q),
          re.setAttribute("title", Q),
          re.querySelectorAll("[data-theme-mode-icon]").forEach((ie) => {
            ie.hidden = ie.getAttribute("data-theme-mode-icon") !== q;
          }));
      },
      I = b(c) || "system",
      N = (q) => {
        var Te;
        (Te = t.__swebsyDarkModeSwitchCleanup) == null || Te.call(t);
        const re = [],
          ue = s.matchMedia
            ? s.matchMedia("(prefers-color-scheme: dark)")
            : null,
          Q = (F) =>
            F === "system" ? (ue != null && ue.matches ? "dark" : "light") : F,
          ie = () => {
            var F;
            if (q) return b(q.getSessionValue(a));
            try {
              return b((F = s.localStorage) == null ? void 0 : F.getItem(a));
            } catch {
              return null;
            }
          },
          te = (F) => {
            var Se;
            if (q) q.setSessionValue(a, F);
            else
              try {
                (Se = s.localStorage) == null || Se.setItem(a, F);
              } catch {}
            s.dispatchEvent(
              new s.CustomEvent("swebsy:color-mode-preference", {
                detail: { mode: F, source: t },
              }),
            );
          };
        let ce = ie() || I;
        q && !ie() && q.setSessionValue(a, ce);
        const ke = (F, Se = !1) => {
            const $e = b(F);
            if (!$e) return;
            ((ce = $e),
              t.setAttribute("data-mode", $e),
              y().forEach((Ke) => {
                Ke.checked = Ke.getAttribute("data-mode") === $e;
              }),
              T($e));
            const Ie = Q($e);
            (r.classList.toggle("dark", Ie === "dark"),
              r.classList.toggle("light", Ie === "light"),
              (r.style.colorScheme = Ie),
              q == null || q.notifyColorMode(Ie),
              Se && te($e));
          },
          Ae = () => {
            ce === "system" && ke("system");
          };
        (ue && typeof ue.addEventListener == "function"
          ? (ue.addEventListener("change", Ae),
            re.push(() => ue.removeEventListener("change", Ae)))
          : ue &&
            typeof ue.addListener == "function" &&
            (ue.addListener(Ae),
            re.push(() => {
              var F;
              return (F = ue.removeListener) == null ? void 0 : F.call(ue, Ae);
            })),
          m.forEach((F) => {
            const Se = () => {
              const $e = F.getAttribute("data-mode");
              $e && $e !== ce && ke($e, !0);
            };
            (F.addEventListener("change", Se),
              re.push(() => F.removeEventListener("change", Se)));
          }),
          t.querySelectorAll("label[for]").forEach((F) => {
            const Se = () => {
              const $e = F.previousElementSibling,
                Ie = $e == null ? void 0 : $e.getAttribute("data-mode");
              Ie && Ie !== ce && ke(Ie, !0);
            };
            (F.addEventListener("click", Se),
              re.push(() => F.removeEventListener("click", Se)));
          }));
        const Ne = t.querySelector("[data-theme-cycle-button]");
        if (Ne) {
          const F = () => ke(x(ce), !0);
          (Ne.addEventListener("click", F),
            re.push(() => Ne.removeEventListener("click", F)));
        }
        const Le = (F) => {
          const Se = F.detail;
          (Se == null ? void 0 : Se.source) !== t &&
            Se != null &&
            Se.mode &&
            ke(Se.mode);
        };
        (s.addEventListener("swebsy:color-mode-preference", Le),
          re.push(() =>
            s.removeEventListener("swebsy:color-mode-preference", Le),
          ),
          (t.__swebsyDarkModeSwitchCleanup = () => {
            (re.splice(0).forEach((F) => F()),
              t.setAttribute("data-mode", I),
              y().forEach((F) => {
                F.checked = F.getAttribute("data-mode") === I;
              }),
              T(I));
          }),
          ke(ce));
      },
      M = () => {
        const q = s.__swebsyPreviewRuntime;
        return q
          ? ((t.__swebsyDarkModeSwitchUnregister = q.register(
              t,
              "dark-mode-switch",
              {
                start: () => N(q),
                stop: () => {
                  var re;
                  return (re = t.__swebsyDarkModeSwitchCleanup) == null
                    ? void 0
                    : re.call(t);
                },
              },
            )),
            !0)
          : !1;
      },
      H = (() => {
        try {
          return s.parent !== s && !!s.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!M()) {
      if (H) {
        const q = () => M();
        ((t.__swebsyDarkModeSwitchRuntimeReady = q),
          s.addEventListener("swebsy:preview-runtime-ready", q, { once: !0 }));
        return;
      }
      N();
    }
  }).bind(items[i])();
}
var items = document.querySelectorAll("#i5bg-2-3");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    var c, d, f;
    const a = this,
      r = (c = a.ownerDocument) == null ? void 0 : c.defaultView;
    if (
      !r ||
      (a.dataset.navbarCollapseInit === "1" && !r.__swebsyPreviewRuntime)
    )
      return;
    ((d = a.__swebsyNavbarUnregister) == null || d.call(a),
      a.__swebsyNavbarRuntimeReady &&
        (r.removeEventListener(
          "swebsy:preview-runtime-ready",
          a.__swebsyNavbarRuntimeReady,
        ),
        delete a.__swebsyNavbarRuntimeReady),
      (f = a.__swebsyNavbarCleanup) == null || f.call(a));
    const o = a.querySelector('[data-navbar-part="toggler"]'),
      i = a.querySelector('[data-navbar-part="collapse"]');
    if (!o || !i) return;
    const s = () => {
        var I;
        ((I = a.__swebsyNavbarCleanup) == null || I.call(a),
          (a.dataset.navbarCollapseInit = "1"));
        const m = i.className,
          b = i.style.height,
          v = o.className,
          w = o.getAttribute("aria-expanded");
        let x;
        const M = () => {
            const U = (r.getComputedStyle(i).transitionDuration ?? "0s")
                .split(",")
                .map((G) => {
                  const he = parseFloat(G.trim());
                  return G.trim().endsWith("ms") ? he : he * 1e3;
                }),
              B = Math.max(...U);
            return Number.isFinite(B) && B > 0 ? B : 0;
          },
          T = (L) => {
            (x !== void 0 && r.clearTimeout(x), (x = r.setTimeout(L, M())));
          },
          E = () => {
            i.classList.contains("collapsing") ||
              (i.classList.remove("collapse", "show"),
              i.classList.add("collapsing"),
              (i.style.height = "0"),
              i.offsetHeight,
              (i.style.height = i.scrollHeight + "px"),
              T(() => {
                (i.classList.remove("collapsing"),
                  i.classList.add("collapse", "show"),
                  (i.style.height = ""),
                  o.setAttribute("aria-expanded", "true"),
                  o.classList.remove("collapsed"));
              }));
          },
          P = () => {
            i.classList.contains("collapsing") ||
              ((i.style.height = i.getBoundingClientRect().height + "px"),
              i.classList.remove("collapse", "show"),
              i.classList.add("collapsing"),
              i.offsetHeight,
              (i.style.height = "0"),
              T(() => {
                (i.classList.remove("collapsing"),
                  i.classList.add("collapse"),
                  (i.style.height = ""),
                  o.setAttribute("aria-expanded", "false"),
                  o.classList.add("collapsed"));
              }));
          },
          $ = () => {
            i.classList.contains("show") ? P() : E();
          };
        (o.addEventListener("click", $),
          (a.__swebsyNavbarCleanup = () => {
            (o.removeEventListener("click", $),
              x !== void 0 && r.clearTimeout(x),
              (i.className = m),
              (i.style.height = b),
              (o.className = v),
              w === null
                ? o.removeAttribute("aria-expanded")
                : o.setAttribute("aria-expanded", w),
              delete a.dataset.navbarCollapseInit);
          }));
      },
      l = () => {
        const m = r.__swebsyPreviewRuntime;
        return m
          ? ((a.__swebsyNavbarUnregister = m.register(a, "navbar", {
              start: s,
              stop: () => {
                var b;
                return (b = a.__swebsyNavbarCleanup) == null
                  ? void 0
                  : b.call(a);
              },
            })),
            !0)
          : !1;
      },
      p = (() => {
        try {
          return r.parent !== r && !!r.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!l()) {
      if (p) {
        const m = () => l();
        ((a.__swebsyNavbarRuntimeReady = m),
          r.addEventListener("swebsy:preview-runtime-ready", m, { once: !0 }));
        return;
      }
      s();
    }
  }).bind(items[i])();
}
var items = document.querySelectorAll("#i8t9cl-4");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    var R, B, $, Z;
    const t = this,
      s = (R = t.ownerDocument) == null ? void 0 : R.defaultView,
      r = (B = t.ownerDocument) == null ? void 0 : B.documentElement;
    if (!s || !r) return;
    const a = "swebsy:color-mode",
      c = t.getAttribute("data-mode");
    (($ = t.__swebsyDarkModeSwitchUnregister) == null || $.call(t),
      t.__swebsyDarkModeSwitchRuntimeReady &&
        (s.removeEventListener(
          "swebsy:preview-runtime-ready",
          t.__swebsyDarkModeSwitchRuntimeReady,
        ),
        delete t.__swebsyDarkModeSwitchRuntimeReady),
      (Z = t.__swebsyDarkModeSwitchCleanup) == null || Z.call(t));
    const d =
        t.id || `dark-mode-switch-${Math.random().toString(36).slice(2, 9)}`,
      y = () => Array.from(t.querySelectorAll("input[type=radio][data-mode]")),
      m = y();
    (m.forEach((q) => {
      const re = q.getAttribute("data-mode");
      re && ((q.id = `${d}__${re}`), (q.name = `${d}__toggle`));
    }),
      t.querySelectorAll("label[for]").forEach((q) => {
        const re = q.previousElementSibling;
        (re == null ? void 0 : re.tagName) === "INPUT" &&
          re.id &&
          q.setAttribute("for", re.id);
      }));
    const b = (q) =>
        q === "system" || q === "light" || q === "dark" ? q : null,
      w = (q) => (q === "system" ? "System" : q === "dark" ? "Dark" : "Light"),
      x = (q) => (q === "system" ? "light" : q === "light" ? "dark" : "system"),
      T = (q) => {
        const re = t.querySelector("[data-theme-cycle-button]");
        if (!re) return;
        const ue = x(q),
          Q = `Theme: ${w(q)}. Click to switch to ${w(ue)}.`;
        (re.setAttribute("aria-label", Q),
          re.setAttribute("title", Q),
          re.querySelectorAll("[data-theme-mode-icon]").forEach((ie) => {
            ie.hidden = ie.getAttribute("data-theme-mode-icon") !== q;
          }));
      },
      I = b(c) || "system",
      N = (q) => {
        var Te;
        (Te = t.__swebsyDarkModeSwitchCleanup) == null || Te.call(t);
        const re = [],
          ue = s.matchMedia
            ? s.matchMedia("(prefers-color-scheme: dark)")
            : null,
          Q = (F) =>
            F === "system" ? (ue != null && ue.matches ? "dark" : "light") : F,
          ie = () => {
            var F;
            if (q) return b(q.getSessionValue(a));
            try {
              return b((F = s.localStorage) == null ? void 0 : F.getItem(a));
            } catch {
              return null;
            }
          },
          te = (F) => {
            var Se;
            if (q) q.setSessionValue(a, F);
            else
              try {
                (Se = s.localStorage) == null || Se.setItem(a, F);
              } catch {}
            s.dispatchEvent(
              new s.CustomEvent("swebsy:color-mode-preference", {
                detail: { mode: F, source: t },
              }),
            );
          };
        let ce = ie() || I;
        q && !ie() && q.setSessionValue(a, ce);
        const ke = (F, Se = !1) => {
            const $e = b(F);
            if (!$e) return;
            ((ce = $e),
              t.setAttribute("data-mode", $e),
              y().forEach((Ke) => {
                Ke.checked = Ke.getAttribute("data-mode") === $e;
              }),
              T($e));
            const Ie = Q($e);
            (r.classList.toggle("dark", Ie === "dark"),
              r.classList.toggle("light", Ie === "light"),
              (r.style.colorScheme = Ie),
              q == null || q.notifyColorMode(Ie),
              Se && te($e));
          },
          Ae = () => {
            ce === "system" && ke("system");
          };
        (ue && typeof ue.addEventListener == "function"
          ? (ue.addEventListener("change", Ae),
            re.push(() => ue.removeEventListener("change", Ae)))
          : ue &&
            typeof ue.addListener == "function" &&
            (ue.addListener(Ae),
            re.push(() => {
              var F;
              return (F = ue.removeListener) == null ? void 0 : F.call(ue, Ae);
            })),
          m.forEach((F) => {
            const Se = () => {
              const $e = F.getAttribute("data-mode");
              $e && $e !== ce && ke($e, !0);
            };
            (F.addEventListener("change", Se),
              re.push(() => F.removeEventListener("change", Se)));
          }),
          t.querySelectorAll("label[for]").forEach((F) => {
            const Se = () => {
              const $e = F.previousElementSibling,
                Ie = $e == null ? void 0 : $e.getAttribute("data-mode");
              Ie && Ie !== ce && ke(Ie, !0);
            };
            (F.addEventListener("click", Se),
              re.push(() => F.removeEventListener("click", Se)));
          }));
        const Ne = t.querySelector("[data-theme-cycle-button]");
        if (Ne) {
          const F = () => ke(x(ce), !0);
          (Ne.addEventListener("click", F),
            re.push(() => Ne.removeEventListener("click", F)));
        }
        const Le = (F) => {
          const Se = F.detail;
          (Se == null ? void 0 : Se.source) !== t &&
            Se != null &&
            Se.mode &&
            ke(Se.mode);
        };
        (s.addEventListener("swebsy:color-mode-preference", Le),
          re.push(() =>
            s.removeEventListener("swebsy:color-mode-preference", Le),
          ),
          (t.__swebsyDarkModeSwitchCleanup = () => {
            (re.splice(0).forEach((F) => F()),
              t.setAttribute("data-mode", I),
              y().forEach((F) => {
                F.checked = F.getAttribute("data-mode") === I;
              }),
              T(I));
          }),
          ke(ce));
      },
      M = () => {
        const q = s.__swebsyPreviewRuntime;
        return q
          ? ((t.__swebsyDarkModeSwitchUnregister = q.register(
              t,
              "dark-mode-switch",
              {
                start: () => N(q),
                stop: () => {
                  var re;
                  return (re = t.__swebsyDarkModeSwitchCleanup) == null
                    ? void 0
                    : re.call(t);
                },
              },
            )),
            !0)
          : !1;
      },
      H = (() => {
        try {
          return s.parent !== s && !!s.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!M()) {
      if (H) {
        const q = () => M();
        ((t.__swebsyDarkModeSwitchRuntimeReady = q),
          s.addEventListener("swebsy:preview-runtime-ready", q, { once: !0 }));
        return;
      }
      N();
    }
  }).bind(items[i])();
}
var items = document.querySelectorAll("#i5bg-2-4");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    var c, d, f;
    const a = this,
      r = (c = a.ownerDocument) == null ? void 0 : c.defaultView;
    if (
      !r ||
      (a.dataset.navbarCollapseInit === "1" && !r.__swebsyPreviewRuntime)
    )
      return;
    ((d = a.__swebsyNavbarUnregister) == null || d.call(a),
      a.__swebsyNavbarRuntimeReady &&
        (r.removeEventListener(
          "swebsy:preview-runtime-ready",
          a.__swebsyNavbarRuntimeReady,
        ),
        delete a.__swebsyNavbarRuntimeReady),
      (f = a.__swebsyNavbarCleanup) == null || f.call(a));
    const o = a.querySelector('[data-navbar-part="toggler"]'),
      i = a.querySelector('[data-navbar-part="collapse"]');
    if (!o || !i) return;
    const s = () => {
        var I;
        ((I = a.__swebsyNavbarCleanup) == null || I.call(a),
          (a.dataset.navbarCollapseInit = "1"));
        const m = i.className,
          b = i.style.height,
          v = o.className,
          w = o.getAttribute("aria-expanded");
        let x;
        const M = () => {
            const U = (r.getComputedStyle(i).transitionDuration ?? "0s")
                .split(",")
                .map((G) => {
                  const he = parseFloat(G.trim());
                  return G.trim().endsWith("ms") ? he : he * 1e3;
                }),
              B = Math.max(...U);
            return Number.isFinite(B) && B > 0 ? B : 0;
          },
          T = (L) => {
            (x !== void 0 && r.clearTimeout(x), (x = r.setTimeout(L, M())));
          },
          E = () => {
            i.classList.contains("collapsing") ||
              (i.classList.remove("collapse", "show"),
              i.classList.add("collapsing"),
              (i.style.height = "0"),
              i.offsetHeight,
              (i.style.height = i.scrollHeight + "px"),
              T(() => {
                (i.classList.remove("collapsing"),
                  i.classList.add("collapse", "show"),
                  (i.style.height = ""),
                  o.setAttribute("aria-expanded", "true"),
                  o.classList.remove("collapsed"));
              }));
          },
          P = () => {
            i.classList.contains("collapsing") ||
              ((i.style.height = i.getBoundingClientRect().height + "px"),
              i.classList.remove("collapse", "show"),
              i.classList.add("collapsing"),
              i.offsetHeight,
              (i.style.height = "0"),
              T(() => {
                (i.classList.remove("collapsing"),
                  i.classList.add("collapse"),
                  (i.style.height = ""),
                  o.setAttribute("aria-expanded", "false"),
                  o.classList.add("collapsed"));
              }));
          },
          $ = () => {
            i.classList.contains("show") ? P() : E();
          };
        (o.addEventListener("click", $),
          (a.__swebsyNavbarCleanup = () => {
            (o.removeEventListener("click", $),
              x !== void 0 && r.clearTimeout(x),
              (i.className = m),
              (i.style.height = b),
              (o.className = v),
              w === null
                ? o.removeAttribute("aria-expanded")
                : o.setAttribute("aria-expanded", w),
              delete a.dataset.navbarCollapseInit);
          }));
      },
      l = () => {
        const m = r.__swebsyPreviewRuntime;
        return m
          ? ((a.__swebsyNavbarUnregister = m.register(a, "navbar", {
              start: s,
              stop: () => {
                var b;
                return (b = a.__swebsyNavbarCleanup) == null
                  ? void 0
                  : b.call(a);
              },
            })),
            !0)
          : !1;
      },
      p = (() => {
        try {
          return r.parent !== r && !!r.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!l()) {
      if (p) {
        const m = () => l();
        ((a.__swebsyNavbarRuntimeReady = m),
          r.addEventListener("swebsy:preview-runtime-ready", m, { once: !0 }));
        return;
      }
      s();
    }
  }).bind(items[i])();
}
var items = document.querySelectorAll("#i8t9cl-5");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    var R, B, $, Z;
    const t = this,
      s = (R = t.ownerDocument) == null ? void 0 : R.defaultView,
      r = (B = t.ownerDocument) == null ? void 0 : B.documentElement;
    if (!s || !r) return;
    const a = "swebsy:color-mode",
      c = t.getAttribute("data-mode");
    (($ = t.__swebsyDarkModeSwitchUnregister) == null || $.call(t),
      t.__swebsyDarkModeSwitchRuntimeReady &&
        (s.removeEventListener(
          "swebsy:preview-runtime-ready",
          t.__swebsyDarkModeSwitchRuntimeReady,
        ),
        delete t.__swebsyDarkModeSwitchRuntimeReady),
      (Z = t.__swebsyDarkModeSwitchCleanup) == null || Z.call(t));
    const d =
        t.id || `dark-mode-switch-${Math.random().toString(36).slice(2, 9)}`,
      y = () => Array.from(t.querySelectorAll("input[type=radio][data-mode]")),
      m = y();
    (m.forEach((q) => {
      const re = q.getAttribute("data-mode");
      re && ((q.id = `${d}__${re}`), (q.name = `${d}__toggle`));
    }),
      t.querySelectorAll("label[for]").forEach((q) => {
        const re = q.previousElementSibling;
        (re == null ? void 0 : re.tagName) === "INPUT" &&
          re.id &&
          q.setAttribute("for", re.id);
      }));
    const b = (q) =>
        q === "system" || q === "light" || q === "dark" ? q : null,
      w = (q) => (q === "system" ? "System" : q === "dark" ? "Dark" : "Light"),
      x = (q) => (q === "system" ? "light" : q === "light" ? "dark" : "system"),
      T = (q) => {
        const re = t.querySelector("[data-theme-cycle-button]");
        if (!re) return;
        const ue = x(q),
          Q = `Theme: ${w(q)}. Click to switch to ${w(ue)}.`;
        (re.setAttribute("aria-label", Q),
          re.setAttribute("title", Q),
          re.querySelectorAll("[data-theme-mode-icon]").forEach((ie) => {
            ie.hidden = ie.getAttribute("data-theme-mode-icon") !== q;
          }));
      },
      I = b(c) || "system",
      N = (q) => {
        var Te;
        (Te = t.__swebsyDarkModeSwitchCleanup) == null || Te.call(t);
        const re = [],
          ue = s.matchMedia
            ? s.matchMedia("(prefers-color-scheme: dark)")
            : null,
          Q = (F) =>
            F === "system" ? (ue != null && ue.matches ? "dark" : "light") : F,
          ie = () => {
            var F;
            if (q) return b(q.getSessionValue(a));
            try {
              return b((F = s.localStorage) == null ? void 0 : F.getItem(a));
            } catch {
              return null;
            }
          },
          te = (F) => {
            var Se;
            if (q) q.setSessionValue(a, F);
            else
              try {
                (Se = s.localStorage) == null || Se.setItem(a, F);
              } catch {}
            s.dispatchEvent(
              new s.CustomEvent("swebsy:color-mode-preference", {
                detail: { mode: F, source: t },
              }),
            );
          };
        let ce = ie() || I;
        q && !ie() && q.setSessionValue(a, ce);
        const ke = (F, Se = !1) => {
            const $e = b(F);
            if (!$e) return;
            ((ce = $e),
              t.setAttribute("data-mode", $e),
              y().forEach((Ke) => {
                Ke.checked = Ke.getAttribute("data-mode") === $e;
              }),
              T($e));
            const Ie = Q($e);
            (r.classList.toggle("dark", Ie === "dark"),
              r.classList.toggle("light", Ie === "light"),
              (r.style.colorScheme = Ie),
              q == null || q.notifyColorMode(Ie),
              Se && te($e));
          },
          Ae = () => {
            ce === "system" && ke("system");
          };
        (ue && typeof ue.addEventListener == "function"
          ? (ue.addEventListener("change", Ae),
            re.push(() => ue.removeEventListener("change", Ae)))
          : ue &&
            typeof ue.addListener == "function" &&
            (ue.addListener(Ae),
            re.push(() => {
              var F;
              return (F = ue.removeListener) == null ? void 0 : F.call(ue, Ae);
            })),
          m.forEach((F) => {
            const Se = () => {
              const $e = F.getAttribute("data-mode");
              $e && $e !== ce && ke($e, !0);
            };
            (F.addEventListener("change", Se),
              re.push(() => F.removeEventListener("change", Se)));
          }),
          t.querySelectorAll("label[for]").forEach((F) => {
            const Se = () => {
              const $e = F.previousElementSibling,
                Ie = $e == null ? void 0 : $e.getAttribute("data-mode");
              Ie && Ie !== ce && ke(Ie, !0);
            };
            (F.addEventListener("click", Se),
              re.push(() => F.removeEventListener("click", Se)));
          }));
        const Ne = t.querySelector("[data-theme-cycle-button]");
        if (Ne) {
          const F = () => ke(x(ce), !0);
          (Ne.addEventListener("click", F),
            re.push(() => Ne.removeEventListener("click", F)));
        }
        const Le = (F) => {
          const Se = F.detail;
          (Se == null ? void 0 : Se.source) !== t &&
            Se != null &&
            Se.mode &&
            ke(Se.mode);
        };
        (s.addEventListener("swebsy:color-mode-preference", Le),
          re.push(() =>
            s.removeEventListener("swebsy:color-mode-preference", Le),
          ),
          (t.__swebsyDarkModeSwitchCleanup = () => {
            (re.splice(0).forEach((F) => F()),
              t.setAttribute("data-mode", I),
              y().forEach((F) => {
                F.checked = F.getAttribute("data-mode") === I;
              }),
              T(I));
          }),
          ke(ce));
      },
      M = () => {
        const q = s.__swebsyPreviewRuntime;
        return q
          ? ((t.__swebsyDarkModeSwitchUnregister = q.register(
              t,
              "dark-mode-switch",
              {
                start: () => N(q),
                stop: () => {
                  var re;
                  return (re = t.__swebsyDarkModeSwitchCleanup) == null
                    ? void 0
                    : re.call(t);
                },
              },
            )),
            !0)
          : !1;
      },
      H = (() => {
        try {
          return s.parent !== s && !!s.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!M()) {
      if (H) {
        const q = () => M();
        ((t.__swebsyDarkModeSwitchRuntimeReady = q),
          s.addEventListener("swebsy:preview-runtime-ready", q, { once: !0 }));
        return;
      }
      N();
    }
  }).bind(items[i])();
}
var items = document.querySelectorAll("#i5bg-2-5");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    var c, d, f;
    const a = this,
      r = (c = a.ownerDocument) == null ? void 0 : c.defaultView;
    if (
      !r ||
      (a.dataset.navbarCollapseInit === "1" && !r.__swebsyPreviewRuntime)
    )
      return;
    ((d = a.__swebsyNavbarUnregister) == null || d.call(a),
      a.__swebsyNavbarRuntimeReady &&
        (r.removeEventListener(
          "swebsy:preview-runtime-ready",
          a.__swebsyNavbarRuntimeReady,
        ),
        delete a.__swebsyNavbarRuntimeReady),
      (f = a.__swebsyNavbarCleanup) == null || f.call(a));
    const o = a.querySelector('[data-navbar-part="toggler"]'),
      i = a.querySelector('[data-navbar-part="collapse"]');
    if (!o || !i) return;
    const s = () => {
        var I;
        ((I = a.__swebsyNavbarCleanup) == null || I.call(a),
          (a.dataset.navbarCollapseInit = "1"));
        const m = i.className,
          b = i.style.height,
          v = o.className,
          w = o.getAttribute("aria-expanded");
        let x;
        const M = () => {
            const U = (r.getComputedStyle(i).transitionDuration ?? "0s")
                .split(",")
                .map((G) => {
                  const he = parseFloat(G.trim());
                  return G.trim().endsWith("ms") ? he : he * 1e3;
                }),
              B = Math.max(...U);
            return Number.isFinite(B) && B > 0 ? B : 0;
          },
          T = (L) => {
            (x !== void 0 && r.clearTimeout(x), (x = r.setTimeout(L, M())));
          },
          E = () => {
            i.classList.contains("collapsing") ||
              (i.classList.remove("collapse", "show"),
              i.classList.add("collapsing"),
              (i.style.height = "0"),
              i.offsetHeight,
              (i.style.height = i.scrollHeight + "px"),
              T(() => {
                (i.classList.remove("collapsing"),
                  i.classList.add("collapse", "show"),
                  (i.style.height = ""),
                  o.setAttribute("aria-expanded", "true"),
                  o.classList.remove("collapsed"));
              }));
          },
          P = () => {
            i.classList.contains("collapsing") ||
              ((i.style.height = i.getBoundingClientRect().height + "px"),
              i.classList.remove("collapse", "show"),
              i.classList.add("collapsing"),
              i.offsetHeight,
              (i.style.height = "0"),
              T(() => {
                (i.classList.remove("collapsing"),
                  i.classList.add("collapse"),
                  (i.style.height = ""),
                  o.setAttribute("aria-expanded", "false"),
                  o.classList.add("collapsed"));
              }));
          },
          $ = () => {
            i.classList.contains("show") ? P() : E();
          };
        (o.addEventListener("click", $),
          (a.__swebsyNavbarCleanup = () => {
            (o.removeEventListener("click", $),
              x !== void 0 && r.clearTimeout(x),
              (i.className = m),
              (i.style.height = b),
              (o.className = v),
              w === null
                ? o.removeAttribute("aria-expanded")
                : o.setAttribute("aria-expanded", w),
              delete a.dataset.navbarCollapseInit);
          }));
      },
      l = () => {
        const m = r.__swebsyPreviewRuntime;
        return m
          ? ((a.__swebsyNavbarUnregister = m.register(a, "navbar", {
              start: s,
              stop: () => {
                var b;
                return (b = a.__swebsyNavbarCleanup) == null
                  ? void 0
                  : b.call(a);
              },
            })),
            !0)
          : !1;
      },
      p = (() => {
        try {
          return r.parent !== r && !!r.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!l()) {
      if (p) {
        const m = () => l();
        ((a.__swebsyNavbarRuntimeReady = m),
          r.addEventListener("swebsy:preview-runtime-ready", m, { once: !0 }));
        return;
      }
      s();
    }
  }).bind(items[i])();
}
var items = document.querySelectorAll("#i2o8qm");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    const s = this,
      r = s.ownerDocument,
      a = r == null ? void 0 : r.defaultView;
    if (!r || !a) return;
    const c = "/__forms/",
      d = (M) => (M ?? "").trim().startsWith(c),
      y = (M) => {
        const H = (M ?? "").trim();
        if (
          !H ||
          H === "#" ||
          /(?:\{\{?\s*(?:form[_ -]?id|endpoint)\s*\}?\}|your[_ -]?(?:form[_ -]?id|endpoint)|FORM_ID)/i.test(
            H,
          )
        )
          return !1;
        if (
          (H.startsWith("/") && !H.startsWith("//")) ||
          H.startsWith("./") ||
          H.startsWith("../") ||
          /^https:\/\//i.test(H)
        )
          return !0;
        try {
          const R = new URL(H);
          return (
            R.protocol === "http:" &&
            ["localhost", "127.0.0.1", "[::1]"].includes(R.hostname)
          );
        } catch {
          return !1;
        }
      },
      m = () => {
        let M = s.querySelector("[data-swebsy-form-status]");
        return (
          M ||
            ((M = r.createElement("p")),
            M.setAttribute("data-swebsy-form-status", ""),
            M.setAttribute("role", "alert"),
            M.setAttribute("tabindex", "-1"),
            (M.style.cssText =
              "margin:.75rem 0 0;font-size:.875rem;line-height:1.5"),
            s.appendChild(M)),
          M
        );
      },
      b = (M, H = !1) => {
        const R = m();
        ((R.style.color = H
          ? "var(--color-success,currentColor)"
          : "var(--color-danger,currentColor)"),
          (R.hidden = !1),
          (R.textContent = M),
          R.focus({ preventScroll: !0 }));
      },
      w = () => {
        const M = s.querySelector("[data-swebsy-form-status]");
        M && (M.hidden = !0);
      },
      x = () => {
        ((s.__swebsyTurnstileToken = void 0),
          s.__swebsyTurnstileWidget &&
            a.turnstile &&
            a.turnstile.reset(s.__swebsyTurnstileWidget));
      };
    ((async () => {
      if (!(
        a.__swebsyPreviewRuntime ||
        !d(s.getAttribute("action")) ||
        s.__swebsyTurnstileWidget ||
        s.__swebsyTurnstileLoading
      )) {
        s.__swebsyTurnstileLoading = !0;
        try {
          const M = await a.fetch("/__forms/turnstile", {
            headers: { Accept: "application/json" },
          });
          if (!M.ok) throw new Error("config unavailable");
          const H = await M.json();
          if (((s.__swebsyNonce = H.nonce), !H.siteKey)) return;
          if (
            ((s.__swebsyTurnstileRequired = !0),
            a.turnstile ||
              (await new Promise(($, Z) => {
                const q = r.querySelector("script[data-swebsy-turnstile]"),
                  re = q ?? r.createElement("script");
                (re.addEventListener("load", () => $(), { once: !0 }),
                  re.addEventListener("error", () => Z(), { once: !0 }),
                  q ||
                    ((re.src =
                      "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"),
                    (re.async = !0),
                    (re.defer = !0),
                    re.setAttribute("data-swebsy-turnstile", ""),
                    r.head.appendChild(re)));
              })),
            !a.turnstile)
          )
            throw new Error("widget unavailable");
          const R = r.createElement("div");
          R.setAttribute("data-swebsy-turnstile", "");
          const B = s.querySelector("[type=submit]") ?? null;
          (((B == null ? void 0 : B.parentElement) ?? s).insertBefore(R, B),
            (s.__swebsyTurnstileWidget = a.turnstile.render(R, {
              sitekey: H.siteKey,
              action: "form_submit",
              size: "flexible",
              appearance: "interaction-only",
              callback: ($) => {
                ((s.__swebsyTurnstileToken = $),
                  (s.__swebsyTurnstileFailed = !1));
              },
              "expired-callback": x,
              "error-callback": () => {
                ((s.__swebsyTurnstileToken = void 0),
                  (s.__swebsyTurnstileFailed = !0));
              },
            })));
        } catch {
          s.__swebsyTurnstileFailed = !0;
        } finally {
          s.__swebsyTurnstileLoading = !1;
        }
      }
    })(),
      s.__swebsyFormSubmitHandler &&
        s.removeEventListener("submit", s.__swebsyFormSubmitHandler, !0));
    const I = async (M) => {
        if (
          (s.__swebsyTurnstileRequired || s.__swebsyTurnstileFailed) &&
          !s.__swebsyTurnstileToken
        ) {
          b(
            s.__swebsyTurnstileFailed
              ? "The security check could not load. Refresh and try again."
              : "Complete the security check to continue.",
          );
          return;
        }
        const H = Array.from(s.querySelectorAll("[type=submit]"));
        H.forEach((B) => (B.disabled = !0));
        const R = new FormData(s);
        s.__swebsyNonce && R.set("_swebsy_ts", s.__swebsyNonce);
        try {
          const B = await a.fetch(M, {
            method: "POST",
            headers: { Accept: "application/json" },
            body: R,
          });
          if (!B.ok) {
            const re = await B.json().catch(() => null);
            (b(
              (re == null ? void 0 : re.message) ??
                "Something went wrong. Please try again.",
            ),
              x());
            return;
          }
          const $ = s.getAttribute("data-redirect");
          if ($) {
            a.location.href = $;
            return;
          }
          const Z =
              s.getAttribute("data-success-message") ||
              "Thanks — your message has been sent.",
            q = r.createElement("p");
          (q.setAttribute("role", "status"),
            q.setAttribute("tabindex", "-1"),
            q.setAttribute("data-swebsy-form-done", ""),
            (q.textContent = Z),
            s.replaceChildren(q),
            q.focus({ preventScroll: !0 }));
        } catch {
          (x(), b("Could not reach the server. Please try again."));
        } finally {
          H.forEach((B) => (B.disabled = !1));
        }
      },
      N = (M) => {
        const H = a.__swebsyPreviewRuntime,
          R = s.getAttribute("action");
        if (H && !H.active) {
          (M.preventDefault(),
            M.stopImmediatePropagation(),
            b("Use Preview to test this form."));
          return;
        }
        if (!y(R)) {
          (M.preventDefault(),
            M.stopImmediatePropagation(),
            b(
              H
                ? "This form is not connected. Select the form in the Layers panel, then choose where submissions go under Settings."
                : "This form is not accepting submissions yet.",
            ));
          return;
        }
        if (d(R)) {
          if ((M.preventDefault(), M.stopImmediatePropagation(), H)) {
            b(
              "Test mode — submissions are delivered from your published site.",
              !0,
            );
            return;
          }
          (w(), I(R));
          return;
        }
        if ((w(), H != null && H.active)) {
          M.preventDefault();
          const B = s.getAttribute("target");
          s.setAttribute("target", "_blank");
          try {
            HTMLFormElement.prototype.submit.call(s);
          } finally {
            B === null
              ? s.removeAttribute("target")
              : s.setAttribute("target", B);
          }
        }
      };
    ((s.__swebsyFormSubmitHandler = N), s.addEventListener("submit", N, !0));
  }).bind(items[i])();
}
var items = document.querySelectorAll("#i8t9cl-6");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    var R, B, $, Z;
    const t = this,
      s = (R = t.ownerDocument) == null ? void 0 : R.defaultView,
      r = (B = t.ownerDocument) == null ? void 0 : B.documentElement;
    if (!s || !r) return;
    const a = "swebsy:color-mode",
      c = t.getAttribute("data-mode");
    (($ = t.__swebsyDarkModeSwitchUnregister) == null || $.call(t),
      t.__swebsyDarkModeSwitchRuntimeReady &&
        (s.removeEventListener(
          "swebsy:preview-runtime-ready",
          t.__swebsyDarkModeSwitchRuntimeReady,
        ),
        delete t.__swebsyDarkModeSwitchRuntimeReady),
      (Z = t.__swebsyDarkModeSwitchCleanup) == null || Z.call(t));
    const d =
        t.id || `dark-mode-switch-${Math.random().toString(36).slice(2, 9)}`,
      y = () => Array.from(t.querySelectorAll("input[type=radio][data-mode]")),
      m = y();
    (m.forEach((q) => {
      const re = q.getAttribute("data-mode");
      re && ((q.id = `${d}__${re}`), (q.name = `${d}__toggle`));
    }),
      t.querySelectorAll("label[for]").forEach((q) => {
        const re = q.previousElementSibling;
        (re == null ? void 0 : re.tagName) === "INPUT" &&
          re.id &&
          q.setAttribute("for", re.id);
      }));
    const b = (q) =>
        q === "system" || q === "light" || q === "dark" ? q : null,
      w = (q) => (q === "system" ? "System" : q === "dark" ? "Dark" : "Light"),
      x = (q) => (q === "system" ? "light" : q === "light" ? "dark" : "system"),
      T = (q) => {
        const re = t.querySelector("[data-theme-cycle-button]");
        if (!re) return;
        const ue = x(q),
          Q = `Theme: ${w(q)}. Click to switch to ${w(ue)}.`;
        (re.setAttribute("aria-label", Q),
          re.setAttribute("title", Q),
          re.querySelectorAll("[data-theme-mode-icon]").forEach((ie) => {
            ie.hidden = ie.getAttribute("data-theme-mode-icon") !== q;
          }));
      },
      I = b(c) || "system",
      N = (q) => {
        var Te;
        (Te = t.__swebsyDarkModeSwitchCleanup) == null || Te.call(t);
        const re = [],
          ue = s.matchMedia
            ? s.matchMedia("(prefers-color-scheme: dark)")
            : null,
          Q = (F) =>
            F === "system" ? (ue != null && ue.matches ? "dark" : "light") : F,
          ie = () => {
            var F;
            if (q) return b(q.getSessionValue(a));
            try {
              return b((F = s.localStorage) == null ? void 0 : F.getItem(a));
            } catch {
              return null;
            }
          },
          te = (F) => {
            var Se;
            if (q) q.setSessionValue(a, F);
            else
              try {
                (Se = s.localStorage) == null || Se.setItem(a, F);
              } catch {}
            s.dispatchEvent(
              new s.CustomEvent("swebsy:color-mode-preference", {
                detail: { mode: F, source: t },
              }),
            );
          };
        let ce = ie() || I;
        q && !ie() && q.setSessionValue(a, ce);
        const ke = (F, Se = !1) => {
            const $e = b(F);
            if (!$e) return;
            ((ce = $e),
              t.setAttribute("data-mode", $e),
              y().forEach((Ke) => {
                Ke.checked = Ke.getAttribute("data-mode") === $e;
              }),
              T($e));
            const Ie = Q($e);
            (r.classList.toggle("dark", Ie === "dark"),
              r.classList.toggle("light", Ie === "light"),
              (r.style.colorScheme = Ie),
              q == null || q.notifyColorMode(Ie),
              Se && te($e));
          },
          Ae = () => {
            ce === "system" && ke("system");
          };
        (ue && typeof ue.addEventListener == "function"
          ? (ue.addEventListener("change", Ae),
            re.push(() => ue.removeEventListener("change", Ae)))
          : ue &&
            typeof ue.addListener == "function" &&
            (ue.addListener(Ae),
            re.push(() => {
              var F;
              return (F = ue.removeListener) == null ? void 0 : F.call(ue, Ae);
            })),
          m.forEach((F) => {
            const Se = () => {
              const $e = F.getAttribute("data-mode");
              $e && $e !== ce && ke($e, !0);
            };
            (F.addEventListener("change", Se),
              re.push(() => F.removeEventListener("change", Se)));
          }),
          t.querySelectorAll("label[for]").forEach((F) => {
            const Se = () => {
              const $e = F.previousElementSibling,
                Ie = $e == null ? void 0 : $e.getAttribute("data-mode");
              Ie && Ie !== ce && ke(Ie, !0);
            };
            (F.addEventListener("click", Se),
              re.push(() => F.removeEventListener("click", Se)));
          }));
        const Ne = t.querySelector("[data-theme-cycle-button]");
        if (Ne) {
          const F = () => ke(x(ce), !0);
          (Ne.addEventListener("click", F),
            re.push(() => Ne.removeEventListener("click", F)));
        }
        const Le = (F) => {
          const Se = F.detail;
          (Se == null ? void 0 : Se.source) !== t &&
            Se != null &&
            Se.mode &&
            ke(Se.mode);
        };
        (s.addEventListener("swebsy:color-mode-preference", Le),
          re.push(() =>
            s.removeEventListener("swebsy:color-mode-preference", Le),
          ),
          (t.__swebsyDarkModeSwitchCleanup = () => {
            (re.splice(0).forEach((F) => F()),
              t.setAttribute("data-mode", I),
              y().forEach((F) => {
                F.checked = F.getAttribute("data-mode") === I;
              }),
              T(I));
          }),
          ke(ce));
      },
      M = () => {
        const q = s.__swebsyPreviewRuntime;
        return q
          ? ((t.__swebsyDarkModeSwitchUnregister = q.register(
              t,
              "dark-mode-switch",
              {
                start: () => N(q),
                stop: () => {
                  var re;
                  return (re = t.__swebsyDarkModeSwitchCleanup) == null
                    ? void 0
                    : re.call(t);
                },
              },
            )),
            !0)
          : !1;
      },
      H = (() => {
        try {
          return s.parent !== s && !!s.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!M()) {
      if (H) {
        const q = () => M();
        ((t.__swebsyDarkModeSwitchRuntimeReady = q),
          s.addEventListener("swebsy:preview-runtime-ready", q, { once: !0 }));
        return;
      }
      N();
    }
  }).bind(items[i])();
}
