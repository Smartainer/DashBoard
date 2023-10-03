"use strict";
(self.webpackChunkreact_app = self.webpackChunkreact_app || []).push([
  [490],
  {
    5524: function (e, t, a) {
      var r = a(9439),
        l = a(2791),
        s = a(184);
      t.Z = function (e) {
        var t = e.labelTitle,
          a = e.labelStyle,
          n = e.type,
          i = e.containerStyle,
          o = e.defaultValue,
          c = e.placeholder,
          d = e.updateFormValue,
          u = e.updateType,
          m = (0, l.useState)(o),
          p = (0, r.Z)(m, 2),
          x = p[0],
          h = p[1];
        return (0, s.jsxs)("div", {
          className: "form-control w-full ".concat(i),
          children: [
            (0, s.jsx)("label", {
              className: "label",
              children: (0, s.jsx)("span", {
                className: "label-text text-base-content " + a,
                children: t,
              }),
            }),
            (0, s.jsx)("input", {
              type: n || "text",
              value: x,
              placeholder: c || "",
              onChange: function (e) {
                return (
                  (t = e.target.value),
                  h(t),
                  void d({ updateType: u, value: t })
                );
                var t;
              },
              className: "input  input-bordered w-full ",
            }),
          ],
        });
      };
    },
    9697: function (e, t, a) {
      var r = a(184);
      t.Z = function (e) {
        var t = e.styleClass,
          a = e.children;
        return (0, r.jsx)("p", {
          className: "text-center  text-error ".concat(t),
          children: a,
        });
      };
    },
    733: function (e, t, a) {
      a(184);
    },
    4856: function (e, t, a) {
      var r = a(4942),
        l = a(1413),
        s = a(9439),
        n = a(2791),
        i = a(1087),
        o = (a(733), a(9697)),
        c = a(5524),
        d = a(184);
      t.Z = function () {
        var e = (0, n.useState)(!1),
          t = (0, s.Z)(e, 2),
          a = t[0],
          u = t[1],
          m = (0, n.useState)(""),
          p = (0, s.Z)(m, 2),
          x = p[0],
          h = p[1],
          v = (0, n.useState)({ password: "", emailId: "" }),
          f = (0, s.Z)(v, 2),
          b = f[0],
          y = f[1],
          j = function (e) {
            var t = e.updateType,
              a = e.value;
            h(""), y((0, l.Z)((0, l.Z)({}, b), {}, (0, r.Z)({}, t, a)));
          };
        return (0, d.jsx)("div", {
          className: "min-h-screen bg-base-200 flex items-center",
          children: (0, d.jsx)("div", {
            className: "card mx-auto w-full max-w-3xl  shadow-xl",
            children: (0, d.jsx)("div", {
              className:
                "grid  md:grid-cols-1 grid-cols-1  bg-base-100 rounded-xl",
              children: (0, d.jsxs)("div", {
                className: "py-24 px-20",
                children: [
                  (0, d.jsx)("h2", {
                    className: "text-2xl font-semibold mb-2 text-center",
                    children: "Login",
                  }),
                  (0, d.jsxs)("form", {
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
                      (0, d.jsxs)("div", {
                        className: "mb-4",
                        children: [
                          (0, d.jsx)(c.Z, {
                            type: "emailId",
                            defaultValue: b.emailId,
                            updateType: "emailId",
                            containerStyle: "mt-4",
                            labelTitle: "Email Id",
                            updateFormValue: j,
                          }),
                          (0, d.jsx)(c.Z, {
                            defaultValue: b.password,
                            type: "password",
                            updateType: "password",
                            containerStyle: "mt-4",
                            labelTitle: "Password",
                            updateFormValue: j,
                          }),
                        ],
                      }),
                      (0, d.jsx)("div", {
                        className: "text-right text-primary",
                        children: (0, d.jsx)(i.rU, {
                          to: "/forgot-password",
                          children: (0, d.jsx)("span", {
                            className:
                              "text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200",
                            children: "Forgot Password?",
                          }),
                        }),
                      }),
                      (0, d.jsx)(o.Z, { styleClass: "mt-8", children: x }),
                      (0, d.jsx)("button", {
                        type: "submit",
                        className:
                          "btn mt-2 w-full btn-primary" + (a ? " loading" : ""),
                        children: "Login",
                      }),
                      (0, d.jsxs)("div", {
                        className: "text-center mt-4",
                        children: [
                          "Don't have an account yet?",
                          " ",
                          (0, d.jsx)(i.rU, {
                            to: "/register",
                            children: (0, d.jsx)("span", {
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
    3490: function (e, t, a) {
      a.r(t);
      a(2791);
      var r = a(4856),
        l = a(184);
      t.default = function () {
        return (0, l.jsx)("div", {
          className: "",
          children: (0, l.jsx)(r.Z, {}),
        });
      };
    },
  },
]);
//# sourceMappingURL=490.d59c256e.chunk.js.map
