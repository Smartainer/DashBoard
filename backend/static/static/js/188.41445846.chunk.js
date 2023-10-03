"use strict";
(self.webpackChunkreact_app = self.webpackChunkreact_app || []).push([
  [188],
  {
    5524: function (e, a, t) {
      var l = t(9439),
        r = t(2791),
        n = t(184);
      a.Z = function (e) {
        var a = e.labelTitle,
          t = e.labelStyle,
          s = e.type,
          i = e.containerStyle,
          u = e.defaultValue,
          c = e.placeholder,
          d = e.updateFormValue,
          o = e.updateType,
          m = (0, r.useState)(u),
          p = (0, l.Z)(m, 2),
          x = p[0],
          h = p[1];
        return (0, n.jsxs)("div", {
          className: "form-control w-full ".concat(i),
          children: [
            (0, n.jsx)("label", {
              className: "label",
              children: (0, n.jsx)("span", {
                className: "label-text text-base-content " + t,
                children: a,
              }),
            }),
            (0, n.jsx)("input", {
              type: s || "text",
              value: x,
              placeholder: c || "",
              onChange: function (e) {
                return (
                  (a = e.target.value),
                  h(a),
                  void d({ updateType: o, value: a })
                );
                var a;
              },
              className: "input  input-bordered w-full ",
            }),
          ],
        });
      };
    },
    9697: function (e, a, t) {
      var l = t(184);
      a.Z = function (e) {
        var a = e.styleClass,
          t = e.children;
        return (0, l.jsx)("p", {
          className: "text-center  text-error ".concat(a),
          children: t,
        });
      };
    },
    733: function (e, a, t) {
      t(184);
    },
    5188: function (e, a, t) {
      t.r(a),
        t.d(a, {
          default: function () {
            return m;
          },
        });
      var l = t(2791),
        r = t(4942),
        n = t(1413),
        s = t(9439),
        i = t(1087),
        u = (t(733), t(9697)),
        c = t(5524),
        d = t(184);
      var o = function () {
        var e = (0, l.useState)(!1),
          a = (0, s.Z)(e, 2),
          t = a[0],
          o = a[1],
          m = (0, l.useState)(""),
          p = (0, s.Z)(m, 2),
          x = p[0],
          h = p[1],
          v = (0, l.useState)({ name: "", password: "", emailId: "" }),
          f = (0, s.Z)(v, 2),
          b = f[0],
          y = f[1],
          j = function (e) {
            var a = e.updateType,
              t = e.value;
            h(""), y((0, n.Z)((0, n.Z)({}, b), {}, (0, r.Z)({}, a, t)));
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
                    children: "Register",
                  }),
                  (0, d.jsxs)("form", {
                    onSubmit: function (e) {
                      return (function (e) {
                        return (
                          e.preventDefault(),
                          h(""),
                          "" === b.name.trim()
                            ? h("Name is required! (use any value)")
                            : "" === b.emailId.trim()
                            ? h("Email Id is required! (use any value)")
                            : "" === b.password.trim()
                            ? h("Password is required! (use any value)")
                            : (o(!0),
                              localStorage.setItem("token", "DumyTokenHere"),
                              o(!1),
                              void (window.location.href = "/app/welcome"))
                        );
                      })(e);
                    },
                    children: [
                      (0, d.jsxs)("div", {
                        className: "mb-4",
                        children: [
                          (0, d.jsx)(c.Z, {
                            defaultValue: b.name,
                            updateType: "name",
                            containerStyle: "mt-4",
                            labelTitle: "Name",
                            updateFormValue: j,
                          }),
                          (0, d.jsx)(c.Z, {
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
                      (0, d.jsx)(u.Z, { styleClass: "mt-8", children: x }),
                      (0, d.jsx)("button", {
                        type: "submit",
                        className:
                          "btn mt-2 w-full btn-primary" + (t ? " loading" : ""),
                        children: "Register",
                      }),
                      (0, d.jsxs)("div", {
                        className: "text-center mt-4",
                        children: [
                          "Already have an account?",
                          " ",
                          (0, d.jsx)(i.rU, {
                            to: "/login",
                            children: (0, d.jsx)("span", {
                              className:
                                "  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200",
                              children: "Login",
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
      var m = function () {
        return (0, d.jsx)("div", {
          className: "",
          children: (0, d.jsx)(o, {}),
        });
      };
    },
  },
]);
//# sourceMappingURL=188.41445846.chunk.js.map
