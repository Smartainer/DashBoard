"use strict";
(self.webpackChunkreact_app = self.webpackChunkreact_app || []).push([
  [244],
  {
    5524: function (e, t, r) {
      var a = r(9439),
        n = r(2791),
        l = r(184);
      t.Z = function (e) {
        var t = e.labelTitle,
          r = e.labelStyle,
          s = e.type,
          i = e.containerStyle,
          c = e.defaultValue,
          d = e.placeholder,
          o = e.updateFormValue,
          u = e.updateType,
          m = (0, n.useState)(c),
          x = (0, a.Z)(m, 2),
          p = x[0],
          h = x[1];
        return (0, l.jsxs)("div", {
          className: "form-control w-full ".concat(i),
          children: [
            (0, l.jsx)("label", {
              className: "label",
              children: (0, l.jsx)("span", {
                className: "label-text text-base-content " + r,
                children: t,
              }),
            }),
            (0, l.jsx)("input", {
              type: s || "text",
              value: p,
              placeholder: d || "",
              onChange: function (e) {
                return (
                  (t = e.target.value),
                  h(t),
                  void o({ updateType: u, value: t })
                );
                var t;
              },
              className: "input  input-bordered w-full ",
            }),
          ],
        });
      };
    },
    9697: function (e, t, r) {
      var a = r(184);
      t.Z = function (e) {
        var t = e.styleClass,
          r = e.children;
        return (0, a.jsx)("p", {
          className: "text-center  text-error ".concat(t),
          children: r,
        });
      };
    },
    733: function (e, t, r) {
      r(184);
    },
    4856: function (e, t, r) {
      var a = r(4942),
        n = r(1413),
        l = r(9439),
        s = r(2791),
        i = r(1087),
        c = (r(733), r(9697)),
        d = r(5524),
        o = r(184);
      t.Z = function () {
        var e = (0, s.useState)(!1),
          t = (0, l.Z)(e, 2),
          r = t[0],
          u = t[1],
          m = (0, s.useState)(""),
          x = (0, l.Z)(m, 2),
          p = x[0],
          h = x[1],
          f = (0, s.useState)({ password: "", emailId: "" }),
          v = (0, l.Z)(f, 2),
          b = v[0],
          j = v[1],
          y = function (e) {
            var t = e.updateType,
              r = e.value;
            h(""), j((0, n.Z)((0, n.Z)({}, b), {}, (0, a.Z)({}, t, r)));
          };
        return (0, o.jsx)("div", {
          className: "min-h-screen bg-base-200 flex items-center",
          children: (0, o.jsx)("div", {
            className: "card mx-auto w-full max-w-3xl  shadow-xl",
            children: (0, o.jsx)("div", {
              className:
                "grid  md:grid-cols-1 grid-cols-1  bg-base-100 rounded-xl",
              children: (0, o.jsxs)("div", {
                className: "py-24 px-20",
                children: [
                  (0, o.jsx)("h2", {
                    className: "text-2xl font-semibold mb-2 text-center",
                    children: "Login",
                  }),
                  (0, o.jsxs)("form", {
                    onSubmit: function (e) {
                      return (function (e) {
                        return (
                          e.preventDefault(),
                          h(""),
                          "" === b.emailId.trim()
                            ? h("Email Id is required! (use any value)")
                            : "" === b.password.trim()
                            ? h("Password is required! (use any value)")
                            : (u(!0),
                              localStorage.setItem("token", "DumyTokenHere"),
                              u(!1),
                              void (window.location.href = "/app/welcome"))
                        );
                      })(e);
                    },
                    children: [
                      (0, o.jsxs)("div", {
                        className: "mb-4",
                        children: [
                          (0, o.jsx)(d.Z, {
                            type: "emailId",
                            defaultValue: b.emailId,
                            updateType: "emailId",
                            containerStyle: "mt-4",
                            labelTitle: "Email Id",
                            updateFormValue: y,
                          }),
                          (0, o.jsx)(d.Z, {
                            defaultValue: b.password,
                            type: "password",
                            updateType: "password",
                            containerStyle: "mt-4",
                            labelTitle: "Password",
                            updateFormValue: y,
                          }),
                        ],
                      }),
                      (0, o.jsx)("div", {
                        className: "text-right text-primary",
                        children: (0, o.jsx)(i.rU, {
                          to: "/forgot-password",
                          children: (0, o.jsx)("span", {
                            className:
                              "text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200",
                            children: "Forgot Password?",
                          }),
                        }),
                      }),
                      (0, o.jsx)(c.Z, { styleClass: "mt-8", children: p }),
                      (0, o.jsx)("button", {
                        type: "submit",
                        className:
                          "btn mt-2 w-full btn-primary" + (r ? " loading" : ""),
                        children: "Login",
                      }),
                      (0, o.jsxs)("div", {
                        className: "text-center mt-4",
                        children: [
                          "Don't have an account yet?",
                          " ",
                          (0, o.jsx)(i.rU, {
                            to: "/register",
                            children: (0, o.jsx)("span", {
                              className:
                                "  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200",
                              children: "Register",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      };
    },
    1244: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return h;
          },
        });
      var a = r(2791),
        n = r(4942),
        l = r(1413),
        s = r(9439),
        i = r(1087),
        c = (r(733), r(9697)),
        d = r(5524),
        o = r(5987),
        u = ["title", "titleId"];
      var m = a.forwardRef(function (e, t) {
          var r = e.title,
            n = e.titleId,
            l = (0, o.Z)(e, u);
          return a.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-hidden": "true",
                ref: t,
                "aria-labelledby": n,
              },
              l
            ),
            r ? a.createElement("title", { id: n }, r) : null,
            a.createElement("path", {
              fillRule: "evenodd",
              d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",
              clipRule: "evenodd",
            })
          );
        }),
        x = r(184);
      var p = function () {
        var e = (0, a.useState)(!1),
          t = (0, s.Z)(e, 2),
          r = t[0],
          o = t[1],
          u = (0, a.useState)(""),
          p = (0, s.Z)(u, 2),
          h = p[0],
          f = p[1],
          v = (0, a.useState)(!1),
          b = (0, s.Z)(v, 2),
          j = b[0],
          y = b[1],
          g = (0, a.useState)({ emailId: "" }),
          w = (0, s.Z)(g, 2),
          N = w[0],
          Z = w[1];
        return (0, x.jsx)("div", {
          className: "min-h-screen bg-base-200 flex items-center",
          children: (0, x.jsx)("div", {
            className: "card mx-auto w-full max-w-3xl  shadow-xl",
            children: (0, x.jsx)("div", {
              className:
                "grid  md:grid-cols-1 grid-cols-1  bg-base-100 rounded-xl",
              children: (0, x.jsxs)("div", {
                className: "py-24 px-20",
                children: [
                  (0, x.jsx)("h2", {
                    className: "text-2xl font-semibold mb-2 text-center",
                    children: "Forgot Password",
                  }),
                  j &&
                    (0, x.jsxs)(x.Fragment, {
                      children: [
                        (0, x.jsx)("div", {
                          className: "text-center mt-8",
                          children: (0, x.jsx)(m, {
                            className: "inline-block w-32 text-success",
                          }),
                        }),
                        (0, x.jsx)("p", {
                          className: "my-4 text-xl font-bold text-center",
                          children: "Link Sent",
                        }),
                        (0, x.jsx)("p", {
                          className: "mt-4 mb-8 font-semibold text-center",
                          children: "Check your email to reset password",
                        }),
                        (0, x.jsx)("div", {
                          className: "text-center mt-4",
                          children: (0, x.jsx)(i.rU, {
                            to: "/login",
                            children: (0, x.jsx)("button", {
                              className: "btn btn-block btn-primary ",
                              children: "Login",
                            }),
                          }),
                        }),
                      ],
                    }),
                  !j &&
                    (0, x.jsxs)(x.Fragment, {
                      children: [
                        (0, x.jsx)("p", {
                          className: "my-8 font-semibold text-center",
                          children:
                            "We will send password reset link on your email Id",
                        }),
                        (0, x.jsxs)("form", {
                          onSubmit: function (e) {
                            return (function (e) {
                              if (
                                (e.preventDefault(),
                                f(""),
                                "" === N.emailId.trim())
                              )
                                return f(
                                  "Email Id is required! (use any value)"
                                );
                              o(!0), o(!1), y(!0);
                            })(e);
                          },
                          children: [
                            (0, x.jsx)("div", {
                              className: "mb-4",
                              children: (0, x.jsx)(d.Z, {
                                type: "emailId",
                                defaultValue: N.emailId,
                                updateType: "emailId",
                                containerStyle: "mt-4",
                                labelTitle: "Email Id",
                                updateFormValue: function (e) {
                                  var t = e.updateType,
                                    r = e.value;
                                  f(""),
                                    Z(
                                      (0, l.Z)(
                                        (0, l.Z)({}, N),
                                        {},
                                        (0, n.Z)({}, t, r)
                                      )
                                    );
                                },
                              }),
                            }),
                            (0, x.jsx)(c.Z, {
                              styleClass: "mt-12",
                              children: h,
                            }),
                            (0, x.jsx)("button", {
                              type: "submit",
                              className:
                                "btn mt-2 w-full btn-primary" +
                                (r ? " loading" : ""),
                              children: "Send Reset Link",
                            }),
                            (0, x.jsxs)("div", {
                              className: "text-center mt-4",
                              children: [
                                "Don't have an account yet?",
                                " ",
                                (0, x.jsx)(i.rU, {
                                  to: "/register",
                                  children: (0, x.jsx)("button", {
                                    className:
                                      "  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200",
                                    children: "Register",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            }),
          }),
        });
      };
      r(4856);
      var h = function () {
        return (0, x.jsx)("div", {
          className: "",
          children: (0, x.jsx)(p, {}),
        });
      };
    },
    5987: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var a = r(3366);
      function n(e, t) {
        if (null == e) return {};
        var r,
          n,
          l = (0, a.Z)(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (n = 0; n < s.length; n++)
            (r = s[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (l[r] = e[r]));
        }
        return l;
      }
    },
    3366: function (e, t, r) {
      function a(e, t) {
        if (null == e) return {};
        var r,
          a,
          n = {},
          l = Object.keys(e);
        for (a = 0; a < l.length; a++)
          (r = l[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
        return n;
      }
      r.d(t, {
        Z: function () {
          return a;
        },
      });
    },
  },
]);
//# sourceMappingURL=244.d3d6e902.chunk.js.map
