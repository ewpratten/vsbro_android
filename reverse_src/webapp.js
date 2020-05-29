(function(t) {
    function e(e) {
        for (var r, n, o = e[0], c = e[1], l = e[2], d = 0, f = []; d < o.length; d++) n = o[d], Object.prototype.hasOwnProperty.call(i, n) && i[n] && f.push(i[n][0]), i[n] = 0;
        for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (t[r] = c[r]);
        u && u(e);
        while (f.length) f.shift()();
        return s.push.apply(s, l || []), a()
    }

    function a() {
        for (var t, e = 0; e < s.length; e++) {
            for (var a = s[e], r = !0, o = 1; o < a.length; o++) {
                var c = a[o];
                0 !== i[c] && (r = !1)
            }
            r && (s.splice(e--, 1), t = n(n.s = a[0]))
        }
        return t
    }
    var r = {},
        i = {
            app: 0
        },
        s = [];

    function n(e) {
        if (r[e]) return r[e].exports;
        var a = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = t, n.c = r, n.d = function(t, e, a) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }, n.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) n.d(a, r, function(e) {
                return t[e]
            }.bind(null, r));
        return a
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "/";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = o.push.bind(o);
    o.push = e, o = o.slice();
    for (var l = 0; l < o.length; l++) e(o[l]);
    var u = c;
    s.push([0, "chunk-vendors"]), a()
})({
    0: function(t, e, a) {
        t.exports = a("56d7")
    },
    "00da": function(t, e, a) {
        "use strict";
        var r = a("558e"),
            i = a.n(r);
        i.a
    },
    "034f": function(t, e, a) {
        "use strict";
        var r = a("85ec"),
            i = a.n(r);
        i.a
    },
    "15b6": function(t, e, a) {
        "use strict";
        var r = a("88ad"),
            i = a.n(r);
        i.a
    },
    "291a": function(t, e, a) {
        "use strict";
        var r = a("ccb4"),
            i = a.n(r);
        i.a
    },
    "2dd1": function(t, e, a) {},
    3578: function(t, e, a) {
        "use strict";
        var r = a("3ec7"),
            i = a.n(r);
        i.a
    },
    "3b54": function(t, e, a) {
        "use strict";
        var r = a("4070"),
            i = a.n(r);
        i.a
    },
    "3ca1": function(t, e, a) {},
    "3ec7": function(t, e, a) {},
    4070: function(t, e, a) {},
    "41c2": function(t, e, a) {
        "use strict";
        var r = a("d7ec"),
            i = a.n(r);
        i.a
    },
    "45a3": function(t, e, a) {},
    "4a5e": function(t, e, a) {
        t.exports = a.p + "img/profile_placeholder.81a9eed7.jpg"
    },
    "4cd4": function(t, e, a) {},
    "558e": function(t, e, a) {},
    "56d7": function(t, e, a) {
        "use strict";
        a.r(e);
        a("e260"), a("e6cf"), a("cca6"), a("a79d");
        var r = a("2b0e"),
            i = function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    attrs: {
                        id: "app"
                    }
                }, [r("vue-headful", {
                    attrs: {
                        title: "VSBRO",
                        description: "Join a community for bros, by bros"
                    }
                }), r("div", {
                    attrs: {
                        id: "content"
                    }
                }, [r("b-navbar", {
                    attrs: {
                        toggleable: "lg",
                        variant: "white",
                        sticky: !0
                    }
                }, [r("b-navbar-brand", {
                    staticStyle: {
                        display: "flex",
                        "align-items": "center"
                    },
                    attrs: {
                        to: {
                            name: "Home"
                        }
                    },
                    on: {
                        click: t.scrollTop
                    }
                }, [r("img", {
                    staticClass: "d-inline-block align-top",
                    staticStyle: {
                        width: "90px"
                    },
                    attrs: {
                        src: a("b640"),
                        alt: "Kitten"
                    }
                }), r("div", {
                    staticClass: "title-wrapper"
                }, [r("div", {
                    staticClass: "title"
                }, [t._v("VSBRO")]), r("div", {
                    staticClass: "subtitle"
                }, [t._v("Join a community for bros, by bros")])])]), r("b-navbar-toggle", {
                    attrs: {
                        target: "nav-collapse"
                    }
                }), r("b-collapse", {
                    attrs: {
                        id: "nav-collapse",
                        "is-nav": ""
                    }
                }, [r("b-navbar-nav", {
                    staticClass: "ml-auto"
                }, [r("b-nav-item", {
                    staticClass: "nav-link",
                    attrs: {
                        to: {
                            name: "Search"
                        }
                    }
                }, [r("b-icon", {
                    staticClass: "nav-icon",
                    attrs: {
                        icon: "search"
                    }
                }), t._v("Find Bros ")], 1), r("div", {
                    staticStyle: {
                        "min-height": "100%",
                        display: "flex",
                        "align-items": "center",
                        "align-content": "center"
                    }
                }, [t.$store.getters.isAuthenticated ? t._e() : r("b-button", {
                    staticClass: "signup-btn",
                    attrs: {
                        variant: "outline-black",
                        to: {
                            name: "Register"
                        }
                    }
                }, [t._v("Sign up")])], 1), t.$store.getters.isAuthenticated ? r("b-nav-item", {
                    staticClass: "nav-link",
                    attrs: {
                        to: {
                            name: "BroFeed",
                            params: {
                                username: t.$store.getters.myself.username
                            }
                        }
                    }
                }, [r("b-icon", {
                    staticClass: "nav-icon",
                    attrs: {
                        icon: "people"
                    }
                }), t._v("Bro Feed ")], 1) : t._e(), t.$store.getters.isAuthenticated ? r("b-nav-item", {
                    staticClass: "nav-link",
                    attrs: {
                        to: {
                            name: "Profile",
                            params: {
                                username: t.$store.getters.myself.username
                            }
                        }
                    }
                }, [r("b-icon", {
                    staticClass: "nav-icon",
                    attrs: {
                        icon: "person"
                    }
                }), t._v("Profile ")], 1) : t._e(), t.$store.getters.isAuthenticated ? r("b-nav-item", {
                    staticClass: "nav-link",
                    attrs: {
                        to: {
                            name: "NewPost"
                        }
                    }
                }, [r("b-icon", {
                    staticClass: "nav-icon",
                    attrs: {
                        icon: "upload"
                    }
                }), t._v("Upload ")], 1) : t._e(), t.$store.getters.isAuthenticated ? r("b-nav-item", {
                    staticClass: "nav-link",
                    on: {
                        click: t.logout
                    }
                }, [r("b-icon", {
                    staticClass: "nav-icon",
                    attrs: {
                        icon: "chevron-bar-right"
                    }
                }), t._v("Sign Out ")], 1) : t._e()], 1)], 1)], 1), r("router-view", {
                    staticClass: "subview"
                })], 1), r("mobile-notification"), r("div", {
                    staticClass: "footer"
                }, [r("div", {
                    staticClass: "footer-wrapper"
                }, [r("div", {
                    staticClass: "footer-top"
                }, [t._v(" Follow Us "), r("a", {
                    attrs: {
                        href: "https://www.instagram.com/vsbro.co/"
                    }
                }, [r("b-img", {
                    staticClass: "insta-icon",
                    attrs: {
                        src: a("c7f8")
                    }
                })], 1), t._v(" | vsbro.co@gmail.com ")]), r("div", {
                    staticClass: "footer-bottom"
                }, [t._v(" VSBRO has no affiliation with VSCO, a service produced by Visual Supply Company | VSBRO stands for Very Sick Bros ")])])]), t._m(0)], 1)
            },
            s = [function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("noscript", [a("p", [a("img", {
                    staticStyle: {
                        border: "0"
                    },
                    attrs: {
                        src: "//analytics.vsbro.co/matomo.php?idsite=1&rec=1",
                        alt: ""
                    }
                })])])
            }],
            n = (a("45fc"), a("8c4f")),
            o = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "home"
                }, [a("b-container", [a("feed", {
                    attrs: {
                        baseURL: "/home"
                    }
                })], 1)], 1)
            },
            c = [],
            l = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    directives: [{
                        name: "infinite-scroll",
                        rawName: "v-infinite-scroll",
                        value: t.loadNextPage,
                        expression: "loadNextPage"
                    }],
                    staticClass: "content",
                    attrs: {
                        "infinite-scroll-disabled": "onFirstPage",
                        "infinite-scroll-distance": "10"
                    }
                }, [t._l(t.posts, (function(t, e) {
                    return a("post", {
                        key: e,
                        attrs: {
                            post: t
                        }
                    })
                })), t.onFirstPage ? a("div", {
                    staticClass: "load-btn-wrapper"
                }, [a("b-button", {
                    staticClass: "load-btn",
                    attrs: {
                        variant: "black"
                    },
                    on: {
                        click: t.loadNextPage
                    }
                }, [t._v("Load More")])], 1) : t._e()], 2)
            },
            u = [],
            d = (a("99af"), a("b0c0"), a("d3b7"), function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "post",
                    on: {
                        click: t.viewProfile
                    }
                }, [a("b-img", {
                    attrs: {
                        src: t.post.Picture,
                        fluid: ""
                    }
                }), a("div", {
                    staticStyle: {
                        display: "flex"
                    }
                }, [t.moderator || t.admin ? a("div", {
                    staticStyle: {
                        "font-size": "25px"
                    }
                }, [a("b-icon-flag", {
                    staticStyle: {
                        cursor: "pointer"
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.moderatorFlag(e)
                        }
                    }
                })], 1) : t._e(), t.admin ? a("div", {
                    staticStyle: {
                        "font-size": "25px"
                    }
                }, [a("b-icon-trash", {
                    staticStyle: {
                        cursor: "pointer"
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.adminDelete(e)
                        }
                    }
                })], 1) : t._e()]), a("div", {
                    staticClass: "caption-wrapper"
                }, [a("div", {
                    staticClass: "author-caption"
                }, [a("a", {
                    staticClass: "author-link",
                    attrs: {
                        href: "javascript:void(0)"
                    }
                }, [t._v(t._s(t.post.User.username + " " + (t.post.User.insta_verified ? "👊" : "")))]), t._v(" " + t._s(t.post.caption) + " ")]), a("div", {
                    staticClass: "clap-wrapper"
                }, [a("div", {
                    staticClass: "clap-score"
                }, [t._v(t._s(t.post.score))]), a("div", {
                    ref: "clap",
                    staticClass: "clap noselect",
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.clap(e)
                        }
                    }
                }, [a("div", {
                    staticClass: "hover-effect"
                }), a("div", {
                    staticClass: "confetti-effect",
                    class: t.confetti ? "expand" : ""
                }, [a("div", {
                    staticClass: "confetti-wrap",
                    class: t.confetti ? "expand" : ""
                }, [t._m(0), t._m(1), t._m(2), t._m(3), t._m(4)])]), t._m(5)])])])], 1)
            }),
            f = [function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "group group-1"
                }, [a("span", {
                    staticClass: "circle"
                }), a("span", {
                    staticClass: "triangle"
                })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "group group-2"
                }, [a("span", {
                    staticClass: "circle"
                }), a("span", {
                    staticClass: "triangle"
                })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "group group-3"
                }, [a("span", {
                    staticClass: "circle"
                }), a("span", {
                    staticClass: "triangle"
                })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "group group-4"
                }, [a("span", {
                    staticClass: "circle"
                }), a("span", {
                    staticClass: "triangle"
                })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "group group-5"
                }, [a("span", {
                    staticClass: "circle"
                }), a("span", {
                    staticClass: "triangle"
                })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "clap-icon"
                }, [a("span", [t._v("👊")])])
            }],
            p = {
                data: function() {
                    return {
                        confetti: !1,
                        moderator: !1,
                        admin: !1
                    }
                },
                props: ["post"],
                methods: {
                    clap: function() {
                        var t = this;
                        this.apiPost("/api/posts/upvote/".concat(this.post.PostID), {}).then((function() {
                            t.post.score++, t.confetti = !0, setTimeout((function() {
                                t.confetti = !1
                            }), 700)
                        })).catch((function(e) {
                            var a = "Request failed with status code 401" === e.message ? "Log in to like a post!" : "You can't like this post anymore";
                            t.$bvToast.toast(a, {
                                title: "Error",
                                toaster: "b-toaster-top-right",
                                variant: "danger",
                                solid: !0
                            })
                        }))
                    },
                    viewProfile: function() {
                        te.push({
                            name: "Profile",
                            params: {
                                username: this.post.User.username
                            }
                        })
                    },
                    checkRoles: function() {
                        "moderator" == this.$store.getters.myself.role ? this.moderator = !0 : "admin" == this.$store.getters.myself.role && (this.admin = !0)
                    },
                    adminDelete: function() {
                        var t = this;
                        this.apiGet("/api/admin_delete?postID=".concat(this.post.PostID)).then((function(e) {
                            t.$bvToast.toast(e.data, {
                                title: "Successfully deleted",
                                toaster: "b-toaster-top-right",
                                variant: "success",
                                solid: !0
                            })
                        })).catch((function(e) {
                            t.$bvToast.toast(e, {
                                title: "Error deleting",
                                toaster: "b-toaster-top-right",
                                variant: "danger",
                                solid: !0
                            })
                        }))
                    },
                    moderatorFlag: function() {
                        var t = this;
                        this.apiGet("/api/moderator_flag?postID=".concat(this.post.PostID)).then((function(e) {
                            t.$bvToast.toast(e.data, {
                                title: "Successfully flagged",
                                toaster: "b-toaster-top-right",
                                variant: "success",
                                solid: !0
                            })
                        })).catch((function(e) {
                            t.$bvToast.toast(e, {
                                title: "Error flagging",
                                toaster: "b-toaster-top-right",
                                variant: "danger",
                                solid: !0
                            })
                        }))
                    }
                },
                computed: {
                    role: function() {
                        return this.$store.getters.myself.role
                    }
                },
                watch: {
                    role: function() {
                        this.checkRoles()
                    }
                },
                mounted: function() {
                    this.checkRoles()
                }
            },
            m = p,
            h = (a("b105"), a("2877")),
            v = Object(h["a"])(m, d, f, !1, null, "726179e8", null),
            b = v.exports,
            g = {
                data: function() {
                    return {
                        posts: [],
                        page: -1,
                        loading: !1,
                        onFirstPage: !0
                    }
                },
                components: {
                    Post: b
                },
                props: ["baseURL", "responseObj", "requiresAuth", "params"],
                methods: {
                    loadNextPage: function() {
                        var t = this;
                        console.log(this.page), this.loading = !1, this.onFirstPage = 0 == this.page, this.page = this.page + 1;
                        var e = "";
                        if (this.params && this.params.length)
                            for (var a = 0; a < this.params.length; a++) e += "&" + this.params[a].name + "=" + this.params[a].value;
                        this.apiGet("".concat(this.baseURL, "?page=").concat(this.page).concat(e), this.requiresAuth).then((function(e) {
                            if (t.responseObj && e.data[t.responseObj]) {
                                for (var a = {
                                        id: e.data.id,
                                        username: e.data.username,
                                        email: e.data.email,
                                        bio: e.data.bio,
                                        picture: e.data.picture
                                    }, r = 0; r < e.data[t.responseObj].length; r++) e.data[t.responseObj][r].User = a;
                                t.posts.push.apply(t.posts, e.data[t.responseObj])
                            } else e.data && t.posts.push.apply(t.posts, e.data)
                        })).finally((function() {
                            t.loading = !1
                        }))
                    }
                },
                mounted: function() {
                    this.loadNextPage()
                }
            },
            y = g,
            _ = (a("ff3d"), Object(h["a"])(y, l, u, !1, null, "54de5c08", null)),
            w = _.exports,
            C = {
                name: "Home",
                components: {
                    Feed: w
                }
            },
            S = C,
            k = Object(h["a"])(S, o, c, !1, null, null, null),
            P = k.exports,
            x = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "auth"
                }, [a("div", {
                    staticClass: "header"
                }, [t._v("Register")]), a("div", {
                    staticClass: "auth-form"
                }, [a("b-form", {
                    on: {
                        submit: t.onSubmit
                    }
                }, [a("b-form-group", {
                    attrs: {
                        id: "input-group-1",
                        label: "Email address:",
                        "label-for": "input-1",
                        description: "We'll never share your email with anyone else."
                    }
                }, [a("b-form-input", {
                    attrs: {
                        id: "input-1",
                        type: "email",
                        required: "",
                        placeholder: "Enter email"
                    },
                    model: {
                        value: t.form.email,
                        callback: function(e) {
                            t.$set(t.form, "email", e)
                        },
                        expression: "form.email"
                    }
                })], 1), a("b-form-group", {
                    attrs: {
                        id: "input-group-6",
                        label: "Pick a Username:",
                        "label-for": "input-6"
                    }
                }, [a("b-form-input", {
                    attrs: {
                        id: "input-6",
                        required: "",
                        placeholder: "Enter a Username"
                    },
                    model: {
                        value: t.form.username,
                        callback: function(e) {
                            t.$set(t.form, "username", e)
                        },
                        expression: "form.username"
                    }
                })], 1), a("b-form-group", {
                    attrs: {
                        id: "input-group-2",
                        label: "Bio",
                        "label-for": "input-2"
                    }
                }, [a("b-form-input", {
                    attrs: {
                        id: "input-2",
                        placeholder: "Enter a bio (Optional)"
                    },
                    model: {
                        value: t.form.bio,
                        callback: function(e) {
                            t.$set(t.form, "bio", e)
                        },
                        expression: "form.bio"
                    }
                })], 1), a("b-form-group", {
                    attrs: {
                        id: "input-group-4",
                        label: "Password:",
                        "label-for": "input-4"
                    }
                }, [a("b-form-input", {
                    attrs: {
                        id: "input-4",
                        type: "password",
                        required: "",
                        placeholder: "Password"
                    },
                    model: {
                        value: t.form.password,
                        callback: function(e) {
                            t.$set(t.form, "password", e)
                        },
                        expression: "form.password"
                    }
                })], 1), a("b-form-group", {
                    attrs: {
                        id: "input-group-5"
                    }
                }, [a("b-form-checkbox-group", {
                    attrs: {
                        id: "checkboxes-5"
                    },
                    model: {
                        value: t.form.checked,
                        callback: function(e) {
                            t.$set(t.form, "checked", e)
                        },
                        expression: "form.checked"
                    }
                }, [a("b-form-checkbox", {
                    attrs: {
                        value: "terms"
                    }
                }, [t._v(" Agree to the "), a("router-link", {
                    attrs: {
                        to: "/terms"
                    }
                }, [t._v("Terms of Service")])], 1)], 1)], 1), a("div", {
                    staticClass: "auth-footer"
                }, [a("router-link", {
                    attrs: {
                        to: {
                            name: "Login"
                        }
                    }
                }, [t._v("Already have an account?")]), a("b-button", {
                    attrs: {
                        type: "submit",
                        variant: "black"
                    }
                }, [t.loading ? a("div", [a("span", {
                    staticClass: "spinner-border spinner-border-sm",
                    attrs: {
                        role: "status",
                        "aria-hidden": "true"
                    }
                })]) : a("div", [t._v(" Submit ")])])], 1)], 1)], 1)])
            },
            E = [],
            $ = {
                data: function() {
                    return {
                        loading: !1,
                        form: {
                            email: "",
                            username: "",
                            password: "",
                            bio: "",
                            checked: []
                        }
                    }
                },
                methods: {
                    onSubmit: function(t) {
                        var e = this;
                        t.preventDefault(), this.form.checked.length < 1 ? this.$bvToast.toast("You must accept the terms of service", {
                            title: "Error",
                            toaster: "b-toaster-top-right",
                            variant: "danger",
                            solid: !0
                        }) : (this.loading = !0, this.signUp(this.form).then((function() {
                            console.log("signed up"), te.push({
                                name: "Home"
                            })
                        })).finally((function() {
                            e.loading = !1, e.checkAuthenticated()
                        })))
                    }
                }
            },
            U = $,
            O = (a("15b6"), Object(h["a"])(U, x, E, !1, null, "43f160d3", null)),
            A = O.exports,
            B = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "auth"
                }, [a("div", {
                    staticClass: "header"
                }, [t._v("Login")]), a("div", {
                    staticClass: "auth-form"
                }, [a("b-form", {
                    on: {
                        submit: t.onSubmit
                    }
                }, [a("b-form-group", {
                    attrs: {
                        id: "input-group-6",
                        label: "Email:",
                        "label-for": "input-6"
                    }
                }, [a("b-form-input", {
                    attrs: {
                        id: "input-6",
                        required: "",
                        placeholder: "Enter your email"
                    },
                    model: {
                        value: t.form.email,
                        callback: function(e) {
                            t.$set(t.form, "email", e)
                        },
                        expression: "form.email"
                    }
                })], 1), a("b-form-group", {
                    attrs: {
                        id: "input-group-4",
                        label: "Password:",
                        "label-for": "input-4"
                    }
                }, [a("b-form-input", {
                    attrs: {
                        id: "input-4",
                        type: "password",
                        required: "",
                        placeholder: "Password"
                    },
                    model: {
                        value: t.form.password,
                        callback: function(e) {
                            t.$set(t.form, "password", e)
                        },
                        expression: "form.password"
                    }
                })], 1), a("div", {
                    staticClass: "auth-footer"
                }, [a("div", {
                    staticClass: "nav-links"
                }, [a("router-link", {
                    attrs: {
                        to: {
                            name: "Register"
                        }
                    }
                }, [t._v("Need an account?")]), a("router-link", {
                    attrs: {
                        to: {
                            name: "ForgotPassword"
                        }
                    }
                }, [t._v("Forgot Password")])], 1), a("b-button", {
                    attrs: {
                        type: "submit",
                        variant: "black"
                    }
                }, [t.loading ? a("div", [a("span", {
                    staticClass: "spinner-border spinner-border-sm",
                    attrs: {
                        role: "status",
                        "aria-hidden": "true"
                    }
                })]) : a("div", [t._v("Submit")])])], 1)], 1)], 1)])
            },
            L = [],
            R = {
                data: function() {
                    return {
                        loading: !1,
                        form: {
                            email: "",
                            password: ""
                        }
                    }
                },
                methods: {
                    onSubmit: function(t) {
                        var e = this;
                        t.preventDefault(), this.loading = !0, this.signIn(this.form).then((function() {
                            te.push({
                                name: "Home"
                            })
                        })).catch((function() {
                            e.$bvToast.toast("Incorrect Username or Password", {
                                title: "Error",
                                toaster: "b-toaster-bottom-right",
                                variant: "danger",
                                solid: !0
                            })
                        })).finally((function() {
                            e.loading = !1, e.checkAuthenticated()
                        }))
                    }
                }
            },
            j = R,
            T = (a("640d"), Object(h["a"])(j, B, L, !1, null, "59d93b40", null)),
            I = T.exports,
            V = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "auth"
                }, [a("div", {
                    staticClass: "header"
                }, [t._v("Password Reset")]), a("div", {
                    staticClass: "auth-form"
                }, [a("b-form", {
                    on: {
                        submit: t.onSubmit
                    }
                }, [a("b-form-group", {
                    attrs: {
                        id: "input-group-4",
                        label: "New Password:",
                        "label-for": "input-4"
                    }
                }, [a("b-form-input", {
                    attrs: {
                        id: "input-4",
                        type: "password",
                        required: "",
                        placeholder: "Password"
                    },
                    model: {
                        value: t.form.password,
                        callback: function(e) {
                            t.$set(t.form, "password", e)
                        },
                        expression: "form.password"
                    }
                })], 1), a("div", {
                    staticClass: "auth-footer"
                }, [a("b-button", {
                    attrs: {
                        type: "submit",
                        variant: "black"
                    }
                }, [t.loading ? a("div", [a("span", {
                    staticClass: "spinner-border spinner-border-sm",
                    attrs: {
                        role: "status",
                        "aria-hidden": "true"
                    }
                })]) : a("div", [t._v("Submit")])])], 1)], 1)], 1)])
            },
            F = [],
            q = {
                data: function() {
                    return {
                        loading: !1,
                        form: {
                            token: "",
                            password: ""
                        }
                    }
                },
                methods: {
                    onSubmit: function(t) {
                        var e = this;
                        t.preventDefault(), this.loading = !0, this.form.token = this.$route.query.token, this.reset(this.form).then((function() {
                            e.$bvToast.toast("Please log in with your new password", {
                                title: "Successfully Updated Password",
                                toaster: "b-toaster-bottom-right",
                                variant: "success",
                                solid: !0
                            }), te.push({
                                name: "Login"
                            })
                        })).finally((function() {
                            e.loading = !1, e.checkAuthenticated()
                        }))
                    }
                }
            },
            N = q,
            D = (a("b383"), Object(h["a"])(N, V, F, !1, null, "5c12aeca", null)),
            M = D.exports,
            H = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", [a("b-container", [t.user ? a("div", [a("div", {
                    staticClass: "profile-header"
                }, [a("div", {
                    staticClass: "profile-details"
                }, [a("div", {
                    staticClass: "profile-pic-wrapper"
                }, [a("b-img", {
                    staticClass: "profile-pic",
                    attrs: {
                        src: t.user.picture,
                        rounded: "circle"
                    }
                })], 1), a("div", {
                    staticClass: "profile-username"
                }, [t._v(t._s(t.user.username + " " + (t.user.insta_verified ? "👊" : "")))]), a("div", {
                    staticClass: "profile-bio"
                }, [t._v(t._s(t.user.bio))]), a("div", {
                    staticStyle: {
                        display: "flex",
                        "flex-direction": "row"
                    }
                }, [t.username == t.$store.getters.myself.username ? a("div", [t.username == t.$store.getters.myself.username ? a("b-button", {
                    directives: [{
                        name: "b-modal",
                        rawName: "v-b-modal.modal-1",
                        modifiers: {
                            "modal-1": !0
                        }
                    }],
                    attrs: {
                        variant: "black"
                    }
                }, [a("b-icon", {
                    attrs: {
                        icon: "pencil",
                        "aria-hidden": "true"
                    }
                }), t._v("Edit Profile ")], 1) : t._e(), t.username == t.$store.getters.myself.username ? a("b-button", {
                    directives: [{
                        name: "b-modal",
                        rawName: "v-b-modal.modal-2",
                        modifiers: {
                            "modal-2": !0
                        }
                    }],
                    staticStyle: {
                        "margin-left": "10px"
                    },
                    attrs: {
                        variant: "primary"
                    }
                }, [a("b-icon", {
                    attrs: {
                        icon: "check",
                        "aria-hidden": "true"
                    }
                }), t._v("Get Verified ")], 1) : t._e()], 1) : t._e(), t.username != t.$store.getters.myself.username && t.$store.getters.myself.id ? a("div", [t.user.is_current_friends_with ? a("b-button", {
                    attrs: {
                        variant: "outline-black"
                    },
                    on: {
                        click: t.removeBro
                    }
                }, [t._v("Remove Bro")]) : a("b-button", {
                    attrs: {
                        variant: "outline-black"
                    },
                    on: {
                        click: t.addBro
                    }
                }, [t._v("Add Bro")])], 1) : t._e()])])]), a("feed", {
                    key: t.username,
                    staticStyle: {
                        "margin-top": "40px"
                    },
                    attrs: {
                        baseURL: "/user_with_name/" + t.username,
                        params: [{
                            name: "current_user_id",
                            value: t.$store.getters.myself.id
                        }],
                        responseObj: "Posts"
                    }
                }), a("b-modal", {
                    ref: "editModal",
                    attrs: {
                        "hide-footer": "",
                        id: "modal-1",
                        title: "Edit Profile"
                    }
                }, [a("image-editor", {
                    attrs: {
                        stencil: t.stencil,
                        loading: t.editProfileLoading
                    },
                    on: {
                        doneEditing: t.doneEditing
                    }
                }, [a("b-form-group", {
                    staticClass: "bio-wrapper",
                    attrs: {
                        id: "input-group-1",
                        label: "Bio",
                        "label-for": "input-1"
                    }
                }, [a("b-form-input", {
                    attrs: {
                        id: "input-1",
                        formatter: t.formatBio,
                        type: "text",
                        placeholder: "Update your bio (optional)"
                    },
                    model: {
                        value: t.user.bio,
                        callback: function(e) {
                            t.$set(t.user, "bio", e)
                        },
                        expression: "user.bio"
                    }
                })], 1)], 1)], 1), a("b-modal", {
                    ref: "verifyModal",
                    attrs: {
                        "hide-footer": "",
                        id: "modal-2",
                        title: "Verify Instagram"
                    }
                }, [a("ol", [a("li", [t._v(" Copy this link and put it in your Instagram Bio: "), a("b-input-group", {
                    staticClass: "mb-3"
                }, [a("b-form-input", {
                    attrs: {
                        readonly: "",
                        value: t.myUrl
                    }
                }), a("b-input-group-append", [a("b-button", {
                    ref: "copyButton",
                    attrs: {
                        size: "sm",
                        text: "Button",
                        variant: "success"
                    },
                    on: {
                        click: t.doCopy
                    }
                }, [t._v("Copy")])], 1)], 1)], 1), a("li", [t._v(" Enter your Instagram Handle: "), a("b-form-input", {
                    attrs: {
                        placeholder: "Instagram Handle"
                    },
                    model: {
                        value: t.user.instagram_link,
                        callback: function(e) {
                            t.$set(t.user, "instagram_link", e)
                        },
                        expression: "user.instagram_link"
                    }
                })], 1), a("li", [t._v("You'll get a verified 👊 next to your name")])]), a("div", {
                    staticStyle: {
                        display: "flex",
                        "justify-content": "center"
                    }
                }, [a("b-button", {
                    attrs: {
                        variant: "primary"
                    },
                    on: {
                        click: function(e) {
                            return t.updateUser(!0)
                        }
                    }
                }, [t.editProfileLoading ? a("div", [a("span", {
                    staticClass: "spinner-border spinner-border-sm",
                    attrs: {
                        role: "status",
                        "aria-hidden": "true"
                    }
                })]) : a("div", [t._v("Verify")])])], 1)])], 1) : a("div", [a("div", {
                    staticClass: "header"
                }, [t._v("User not Found")]), t._v(" " + t._s("User " + t.username + " was not found.") + " Click "), a("router-link", {
                    attrs: {
                        to: {
                            name: "Home"
                        }
                    }
                }, [t._v("here")]), t._v(" to return to the home page. ")], 1)])], 1)
            },
            G = [],
            Y = (a("c975"), function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "cropper-wrapper"
                }, [a("b-form", {
                    on: {
                        submit: t.onSubmit
                    }
                }, ["" != t.img ? a("div", [a("cropper", {
                    ref: "cropper",
                    staticClass: "cropper",
                    attrs: {
                        src: t.img,
                        stencilComponent: t.stencil,
                        stencilProps: t.stencilProps
                    }
                })], 1) : t._e(), a("b-form-file", {
                    staticClass: "image-uploader",
                    attrs: {
                        placeholder: "Choose or Drag Image here",
                        "drop-placeholder": "Drop file here..."
                    },
                    on: {
                        input: t.imageSelected
                    }
                }), t._t("default"), a("div", {
                    staticClass: "submit-btn-wrapper"
                }, [a("b-button", {
                    staticClass: "submit-btn",
                    attrs: {
                        type: "submit",
                        variant: "black"
                    }
                }, [t.loading ? a("div", [a("span", {
                    staticClass: "spinner-border spinner-border-sm",
                    attrs: {
                        role: "status",
                        "aria-hidden": "true"
                    }
                })]) : a("div", [t._v("Done")])])], 1), a("div", {
                    staticClass: "hidden-canvas"
                }, [a("canvas", {
                    ref: "resizedCanvas"
                })])], 2)], 1)
            }),
            z = [],
            J = a("a2c1"),
            K = a("4b2d"),
            W = a.n(K),
            Q = W()(),
            X = {
                props: ["loading", "stencil", "stencilProps"],
                data: function() {
                    return {
                        img: "",
                        form: {
                            caption: ""
                        },
                        test: "fuck"
                    }
                },
                components: {
                    Cropper: J["b"]
                },
                methods: {
                    imageSelected: function(t) {
                        var e = this,
                            a = new FileReader;
                        a.onloadend = function() {
                            e.updateImage(a.result)
                        }, a.readAsDataURL(t)
                    },
                    updateImage: function(t) {
                        this.img = t
                    },
                    getCroppedImage: function() {
                        var t = this;
                        return new Promise((function(e, a) {
                            t.$refs.cropper || a("no image");
                            var r = t.$refs.cropper.getResult(),
                                i = r.canvas,
                                s = t.$refs.resizedCanvas;
                            s.width = 600, s.height = i.height / i.width * 600, Q.resize(i, s).then((function(t) {
                                return Q.toBlob(t, "image/jpg", .9)
                            })).then((function(t) {
                                return e(t)
                            }))
                        }))
                    },
                    onSubmit: function(t) {
                        var e = this;
                        t.preventDefault(), this.getCroppedImage().then((function(t) {
                            e.$emit("doneEditing", t)
                        })).catch((function() {
                            e.$emit("doneEditing", null)
                        }))
                    }
                }
            },
            Z = X,
            tt = (a("a1cd"), Object(h["a"])(Z, Y, z, !1, null, "078c3662", null)),
            et = tt.exports,
            at = a("bc3a"),
            rt = a.n(at),
            it = {
                data: function() {
                    return {
                        user: {},
                        username: "",
                        stencil: J["a"],
                        editProfileLoading: !1,
                        filename: ""
                    }
                },
                components: {
                    Feed: w,
                    ImageEditor: et
                },
                methods: {
                    addBro: function() {
                        var t = this;
                        this.apiPost("/api/friendships/create/".concat(this.user.id), {}).then((function() {
                            t.refreshUser()
                        }))
                    },
                    removeBro: function() {
                        var t = this;
                        this.apiPost("/api/friendships/delete/".concat(this.user.id), {}).then((function() {
                            t.refreshUser()
                        }))
                    },
                    doneEditing: function(t) {
                        var e = this;
                        this.editProfileLoading = !0, t ? this.apiGet("/api/user/get_profile_upload_url", {}).then((function(a) {
                            var r = a.data.signed_url;
                            e.filename = a.data.filename;
                            var i = {
                                headers: {
                                    "Content-Type": "image/jpg"
                                }
                            };
                            rt.a.put(r, t, i).then((function() {
                                e.updateUser()
                            }))
                        })) : this.updateUser()
                    },
                    formatBio: function(t) {
                        var e = String(t);
                        return e.substring(0, 50)
                    },
                    updateUser: function() {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.editProfileLoading = !0;
                        var a = {
                            bio: this.user.bio
                        };
                        this.filename && (a.profile_image_url = this.filename), e && this.user.instagram_link && (a.instagram_link = this.user.instagram_link), this.apiPost("/api/user/update/".concat(this.$store.getters.myself.id), a).then((function(e) {
                            t.refreshUser(), t.$refs.editModal.hide(), t.$refs.verifyModal.hide(), e.data.indexOf("no link in insta") >= 0 && t.$bvToast.toast("Your vsbro link was not found in your Instagram bio. Once you add it, come back here and try verifying again.", {
                                title: "Verification Error",
                                toaster: "b-toaster-bottom-right",
                                variant: "danger",
                                solid: !0
                            })
                        })).finally((function() {
                            t.editProfileLoading = !1
                        }))
                    },
                    refreshUser: function() {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        "" == e && (e = this.$route.params.username), this.username = e, this.apiGet("/user_with_name/".concat(this.username, "?current_user_id=").concat(this.$store.getters.myself.id), !1).then((function(e) {
                            t.user = e.data, (!t.user.picture || t.user.picture.indexOf(".jpg") < 0 && t.user.picture.indexOf(".png") < 0) && (t.user.picture = a("4a5e"))
                        })).catch((function() {
                            t.user = null
                        }))
                    },
                    doCopy: function() {
                        var t = this,
                            e = this.$refs.copyButton;
                        console.log(e), this.$copyText(this.myUrl, e).then((function() {
                            t.$bvToast.toast("Copied Profile URL to Clipboard", {
                                title: "Success",
                                toaster: "b-toaster-bottom-right",
                                variant: "success",
                                solid: !0
                            })
                        }), (function() {
                            t.$bvToast.toast("Error Copying Profile URL", {
                                title: "Error",
                                toaster: "b-toaster-bottom-right",
                                variant: "danger",
                                solid: !0
                            })
                        }))
                    }
                },
                created: function() {
                    this.refreshUser()
                },
                computed: {
                    myUrl: function() {
                        return "vsbro.co/".concat(this.$store.getters.myself.username)
                    }
                },
                watch: {
                    "$route.params": {
                        handler: function(t) {
                            var e = t.username;
                            this.refreshUser(e)
                        },
                        immediate: !0
                    }
                }
            },
            st = it,
            nt = (a("3b54"), Object(h["a"])(st, H, G, !1, null, "84689a9a", null)),
            ot = nt.exports,
            ct = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "new-post"
                }, [a("b-container", {
                    staticClass: "content-wrapper new-post-container"
                }, [a("div", {
                    staticClass: "header"
                }, [t._v("New Post")]), a("div", {
                    staticClass: "content"
                }, [a("image-editor", {
                    attrs: {
                        loading: t.loading,
                        stencil: t.stencil
                    },
                    on: {
                        imageSelected: function(e) {
                            t.imgSelected = !0
                        },
                        doneEditing: t.onSubmit
                    }
                }, [t.imgSelected ? a("b-form-group", {
                    staticClass: "caption-wrapper",
                    attrs: {
                        id: "input-group-1",
                        label: "Caption",
                        "label-for": "input-1"
                    }
                }, [a("b-form-input", {
                    attrs: {
                        id: "input-1",
                        formatter: t.formatCaption,
                        type: "text",
                        placeholder: "Enter a caption (Optional)"
                    },
                    model: {
                        value: t.form.caption,
                        callback: function(e) {
                            t.$set(t.form, "caption", e)
                        },
                        expression: "form.caption"
                    }
                })], 1) : t._e()], 1)], 1)])], 1)
            },
            lt = [],
            ut = {
                name: "NewPost",
                data: function() {
                    return {
                        imgSelected: !1,
                        stencil: J["c"],
                        form: {
                            caption: ""
                        },
                        loading: !1
                    }
                },
                components: {
                    ImageEditor: et
                },
                methods: {
                    formatCaption: function(t) {
                        var e = String(t);
                        return e.substring(0, 50)
                    },
                    checkVerified: function() {
                        var t = this;
                        this.refreshMyself().then((function() {
                            t.$store.getters.myself.email_verified || t.$bvToast.toast("You must verify your email before you can post! Check your inbox bro", {
                                title: "Email not verified",
                                toaster: "b-toaster-bottom-right",
                                variant: "danger",
                                solid: !0
                            })
                        }))
                    },
                    onSubmit: function(t) {
                        var e = this;
                        t ? (this.imgSelected = !0, this.loading = !0, this.apiPost("/api/posts/get_post_url", this.form).then((function(a) {
                            var r = a.data.signed_url,
                                i = a.data.filename,
                                s = {
                                    headers: {
                                        "Content-Type": "image/jpg"
                                    }
                                };
                            rt.a.put(r, t, s).then((function() {
                                var t = e.form;
                                t.filename = i, e.apiPost("/api/posts/submit", t).then((function() {
                                    console.log(e.$store.getters.myself.username), te.push({
                                        name: "Profile",
                                        params: {
                                            username: e.$store.getters.myself.username
                                        }
                                    })
                                })).catch((function() {
                                    e.checkVerified()
                                })).finally((function() {
                                    e.loading = !1
                                }))
                            }))
                        })).catch((function() {
                            e.checkVerified()
                        }))) : this.$bvToast.toast("No image selected", {
                            title: "Upload Error",
                            toaster: "b-toaster-bottom-right",
                            variant: "danger",
                            solid: !0
                        })
                    }
                }
            },
            dt = ut,
            ft = (a("291a"), Object(h["a"])(dt, ct, lt, !1, null, "b2876dc8", null)),
            pt = ft.exports,
            mt = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "bro-feed"
                }, [a("b-container", [a("div", {
                    staticClass: "header"
                }, [t._v("Bro Feed")]), a("feed", {
                    attrs: {
                        baseURL: "/api/friend_feed",
                        requiresAuth: !0
                    }
                })], 1)], 1)
            },
            ht = [],
            vt = {
                name: "BroFeed",
                components: {
                    Feed: w
                }
            },
            bt = vt,
            gt = (a("fc64"), Object(h["a"])(bt, mt, ht, !1, null, "06dc8ca5", null)),
            yt = gt.exports,
            _t = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "auth"
                }, [a("div", {
                    staticClass: "header"
                }, [t._v("Forgot Password")]), t.pending ? a("div", {
                    staticClass: "auth-form"
                }, [a("b-media", {
                    scopedSlots: t._u([{
                        key: "aside",
                        fn: function() {
                            return [a("b-icon", {
                                attrs: {
                                    icon: "inbox",
                                    width: "64",
                                    height: "64",
                                    alt: "placeholder"
                                }
                            })]
                        },
                        proxy: !0
                    }])
                }, [a("h5", {
                    staticClass: "mt-0"
                }, [t._v("Email sent")]), a("p", [t._v(" Please check your inbox for a link to reset your password ")])])], 1) : a("div", {
                    staticClass: "auth-form"
                }, [a("b-form", {
                    on: {
                        submit: t.onSubmit
                    }
                }, [a("b-form-group", {
                    attrs: {
                        id: "input-group-4",
                        label: "Email",
                        "label-for": "input-4"
                    }
                }, [a("b-form-input", {
                    attrs: {
                        id: "input-4",
                        type: "email",
                        required: "",
                        placeholder: "Email"
                    },
                    model: {
                        value: t.form.email,
                        callback: function(e) {
                            t.$set(t.form, "email", e)
                        },
                        expression: "form.email"
                    }
                })], 1), a("div", {
                    staticClass: "auth-footer"
                }, [a("b-button", {
                    attrs: {
                        type: "submit",
                        variant: "black"
                    }
                }, [t.loading ? a("div", [a("span", {
                    staticClass: "spinner-border spinner-border-sm",
                    attrs: {
                        role: "status",
                        "aria-hidden": "true"
                    }
                })]) : a("div", [t._v("Submit")])])], 1)], 1)], 1)])
            },
            wt = [],
            Ct = {
                data: function() {
                    return {
                        loading: !1,
                        pending: !1,
                        form: {
                            token: "",
                            email: ""
                        }
                    }
                },
                methods: {
                    onSubmit: function(t) {
                        var e = this;
                        t.preventDefault(), this.loading = !0, this.forgot(this.form).then((function() {
                            e.pending = !0
                        })).finally((function() {
                            e.loading = !1, e.checkAuthenticated()
                        }))
                    }
                }
            },
            St = Ct,
            kt = (a("cf2b"), Object(h["a"])(St, _t, wt, !1, null, "6c8e5d28", null)),
            Pt = kt.exports,
            xt = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", [a("b-container", [a("div", {
                    staticClass: "header"
                }, [t._v("Search")]), a("b-input-group", [a("b-form-input", {
                    attrs: {
                        placeholder: "Search users"
                    },
                    on: {
                        keyup: function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.search(e)
                        }
                    },
                    model: {
                        value: t.query,
                        callback: function(e) {
                            t.query = e
                        },
                        expression: "query"
                    }
                }), a("b-input-group-append", [a("b-button", {
                    attrs: {
                        variant: "black"
                    },
                    on: {
                        click: t.search
                    }
                }, [t._v("Search")])], 1)], 1), t.$store.getters.myself.id ? a("div", {
                    staticStyle: {
                        display: "flex",
                        "justify-content": "space-between",
                        "margin-top": "7px"
                    }
                }, [a("div"), a("b-form-checkbox", {
                    attrs: {
                        id: "checkbox-1",
                        name: "checkbox-1",
                        value: "accepted",
                        "unchecked-value": "not_accepted"
                    },
                    model: {
                        value: t.status,
                        callback: function(e) {
                            t.status = e
                        },
                        expression: "status"
                    }
                }, [t._v("Only search friends")])], 1) : t._e(), t.feedEnabled ? a("user-feed", {
                    attrs: {
                        baseURL: "/api/search_users",
                        params: {
                            search: t.query,
                            current_user_id: t.$store.getters.myself.id
                        }
                    }
                }) : t._e()], 1)], 1)
            },
            Et = [],
            $t = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    directives: [{
                        name: "infinite-scroll",
                        rawName: "v-infinite-scroll",
                        value: t.loadNextPage,
                        expression: "loadNextPage"
                    }],
                    staticClass: "content",
                    attrs: {
                        "infinite-scroll-disabled": "onFirstPage",
                        "infinite-scroll-distance": "10"
                    }
                }, [t._l(t.users, (function(t, e) {
                    return a("user", {
                        key: e,
                        attrs: {
                            userProp: t
                        }
                    })
                })), t.onFirstPage ? a("div", {
                    staticClass: "load-btn-wrapper"
                }, [a("b-button", {
                    staticClass: "load-btn",
                    attrs: {
                        variant: "black"
                    },
                    on: {
                        click: t.loadNextPage
                    }
                }, [t._v("Load More")])], 1) : t._e()], 2)
            },
            Ut = [],
            Ot = (a("a15b"), a("d81d"), a("4fad"), function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("b-card", {
                    staticClass: "user-card mb-2",
                    attrs: {
                        "img-alt": "Image",
                        "img-top": "",
                        tag: "article"
                    },
                    on: {
                        click: t.viewProfile
                    }
                }, [a("b-media", {
                    scopedSlots: t._u([{
                        key: "aside",
                        fn: function() {
                            return [a("b-img", {
                                staticClass: "profile-pic",
                                attrs: {
                                    src: t.user.picture,
                                    width: "75",
                                    rounded: "circle"
                                }
                            })]
                        },
                        proxy: !0
                    }])
                }, [a("h5", {
                    staticClass: "mt-0"
                }, [a("b-card-text", [t._v(t._s(t.user.username + " " + (t.user.insta_verified ? "👊" : "")))])], 1), a("p", [t._v(t._s(t.user.bio))])]), !t.user.is_current_friends_with && t.$store.getters.myself.id ? a("b-button", {
                    staticClass: "btn",
                    attrs: {
                        variant: "outline-black"
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.addBro(e)
                        }
                    }
                }, [t._v("Add Bro")]) : t._e(), t.user.is_current_friends_with && t.$store.getters.myself.id ? a("b-button", {
                    staticClass: "btn",
                    attrs: {
                        variant: "outline-black"
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.removeBro(e)
                        }
                    }
                }, [t._v("Remove Bro")]) : t._e()], 1)
            }),
            At = [],
            Bt = {
                props: ["userProp"],
                data: function() {
                    return {
                        refreshedUser: null
                    }
                },
                created: function() {
                    (!this.userProp.picture || this.userProp.picture.indexOf(".jpg") < 0 && this.userProp.picture.indexOf(".png") < 0) && (this.userProp.picture = a("4a5e"))
                },
                methods: {
                    addBro: function() {
                        var t = this;
                        this.apiPost("/api/friendships/create/".concat(this.user.id), {}).then((function() {
                            t.refreshUser()
                        }))
                    },
                    removeBro: function() {
                        var t = this;
                        this.apiPost("/api/friendships/delete/".concat(this.user.id), {}).then((function() {
                            t.refreshUser()
                        }))
                    },
                    refreshUser: function() {
                        var t = this;
                        this.apiGet("/user/".concat(this.user.id, "?current_user_id=").concat(this.$store.getters.myself.id), !1).then((function(e) {
                            t.refreshedUser = e.data, (!t.refreshedUser.picture || t.refreshedUser.picture.indexOf(".jpg") < 0 && t.refreshedUser.picture.indexOf(".png") < 0) && (t.refreshedUser.picture = a("4a5e"))
                        })).catch((function() {
                            t.refreshedUser = null
                        }))
                    },
                    viewProfile: function() {
                        te.push({
                            name: "Profile",
                            params: {
                                username: this.user.username
                            }
                        })
                    }
                },
                computed: {
                    user: function() {
                        return this.refreshedUser ? this.refreshedUser : this.userProp
                    }
                }
            },
            Lt = Bt,
            Rt = (a("3578"), Object(h["a"])(Lt, Ot, At, !1, null, "c59c99fa", null)),
            jt = Rt.exports,
            Tt = {
                data: function() {
                    return {
                        users: [],
                        page: 0,
                        loading: !1,
                        onFirstPage: !0
                    }
                },
                components: {
                    User: jt
                },
                props: ["baseURL", "requiresAuth", "params"],
                methods: {
                    loadNextPage: function() {
                        var t = this;
                        this.loading = !1, this.onFirstPage = 0 == this.page, this.apiGet("".concat(this.baseURL, "?page=").concat(this.page, "&").concat(this.encodedParams), this.requiresAuth).then((function(e) {
                            e.data && (t.users.push.apply(t.users, e.data), t.page = t.page + 1)
                        })).finally((function() {
                            t.loading = !1
                        }))
                    }
                },
                mounted: function() {
                    this.loadNextPage()
                },
                computed: {
                    encodedParams: function() {
                        return Object.entries(this.params).map((function(t) {
                            return t.map(encodeURIComponent).join("=")
                        })).join("&")
                    }
                }
            },
            It = Tt,
            Vt = (a("00da"), Object(h["a"])(It, $t, Ut, !1, null, "77dce04e", null)),
            Ft = Vt.exports,
            qt = {
                data: function() {
                    return {
                        query: "",
                        page: 0,
                        feedEnabled: !0
                    }
                },
                components: {
                    UserFeed: Ft
                },
                mounted: function() {},
                methods: {
                    reloadFeed: function() {
                        var t = this;
                        this.feedEnabled = !1, setTimeout((function() {
                            t.feedEnabled = !0
                        }), 100)
                    },
                    search: function() {
                        this.reloadFeed()
                    }
                },
                created: function() {
                    var t = this;
                    this.$store.watch((function(t) {
                        return t
                    }), (function() {
                        t.reloadFeed()
                    }), {
                        deep: !0
                    })
                }
            },
            Nt = qt,
            Dt = (a("41c2"), Object(h["a"])(Nt, xt, Et, !1, null, "4e1459e8", null)),
            Mt = Dt.exports,
            Ht = function() {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            Gt = [function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticStyle: {
                        width: "100%",
                        display: "flex",
                        "justify-content": "center"
                    }
                }, [a("div", {
                    staticStyle: {
                        "max-width": "600px"
                    }
                }, [t._v(' VSBRO has no affiliation with VSCO, a service produced by Visual Supply Company. End-User License Agreement (EULA) of VSBRO This End-User License Agreement ("EULA") is a legal agreement between you and VSBRO This EULA agreement governs your acquisition and use of our VSBRO software ("Software") directly from VSBRO or indirectly through a VSBRO authorized reseller or distributor (a "Reseller"). Please read this EULA agreement carefully before completing the installation process and using the VSBRO software. It provides a license to use the VSBRO software and contains warranty information and liability disclaimers. On VSBRO, there is no tolerance for objectionable content or abusive users. Users who violate this will have thier accounts terminated. If you register for a free trial of the VSBRO software, this EULA agreement will also govern that trial. By clicking "accept" or installing and/or using the VSBRO software, you are confirming your acceptance of the Software and agreeing to become bound by the terms of this EULA agreement. If you are entering into this EULA agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity and its affiliates to these terms and conditions. If you do not have such authority or if you do not agree with the terms and conditions of this EULA agreement, do not install or use the Software, and you must not accept this EULA agreement. This EULA agreement shall apply only to the Software supplied by VSBRO herewith regardless of whether other software is referred to or described herein. The terms also apply to any VSBRO updates, supplements, Internet-based services, and support services for the Software, unless other terms accompany those items on delivery. If so, those terms apply. This EULA was created by EULA Template for VSBRO. License Grant VSBRO hereby grants you a personal, non-transferable, non-exclusive licence to use the VSBRO software on your devices in accordance with the terms of this EULA agreement. You are permitted to load the VSBRO software (for example a PC, laptop, mobile or tablet) under your control. You are responsible for ensuring your device meets the minimum requirements of the VSBRO software. You are not permitted to: Edit, alter, modify, adapt, translate or otherwise change the whole or any part of the Software nor permit the whole or any part of the Software to be combined with or become incorporated in any other software, nor decompile, disassemble or reverse engineer the Software or attempt to do any such things Reproduce, copy, distribute, resell or otherwise use the Software for any commercial purpose Allow any third party to use the Software on behalf of or for the benefit of any third party Use the Software in any way which breaches any applicable local, national or international law use the Software for any purpose that VSBRO considers is a breach of this EULA agreement Intellectual Property and Ownership VSBRO shall at all times retain ownership of the Software as originally downloaded by you and all subsequent downloads of the Software by you. The Software (and the copyright, and other intellectual property rights of whatever nature in the Software, including any modifications made thereto) are and shall remain the property of VSBRO. VSBRO reserves the right to grant licences to use the Software to third parties. Termination This EULA agreement is effective from the date you first use the Software and shall continue until terminated. You may terminate it at any time upon written notice to VSBRO. It will also terminate immediately if you fail to comply with any term of this EULA agreement. Upon such termination, the licenses granted by this EULA agreement will immediately terminate and you agree to stop all access and use of the Software. The provisions that by their nature continue and survive will survive any termination of this EULA agreement. Governing Law This EULA agreement, and any dispute arising out of or in connection with this EULA agreement, shall be governed by and construed in accordance with the laws of us. ')])])
            }],
            Yt = {
                name: "ToS"
            },
            zt = Yt,
            Jt = Object(h["a"])(zt, Ht, Gt, !1, null, "2a977dd2", null),
            Kt = Jt.exports,
            Wt = a("2f62");
        r["default"].use(Wt["a"]);
        var Qt = new Wt["a"].Store({
            state: {
                authenticated: !1,
                myself: {}
            },
            mutations: {
                SET_AUTHENTICATED: function(t, e) {
                    t.authenticated = e
                },
                SET_MYSELF: function(t, e) {
                    t.myself = e
                }
            },
            actions: {
                setAuthenticated: function(t, e) {
                    this.commit("SET_AUTHENTICATED", e)
                },
                setMyself: function(t, e) {
                    this.commit("SET_MYSELF", e)
                }
            },
            getters: {
                isAuthenticated: function(t) {
                    return t.authenticated
                },
                myself: function(t) {
                    return t.myself
                }
            }
        });
        r["default"].use(n["a"]);
        var Xt = [{
                path: "/",
                name: "Home",
                component: P
            }, {
                path: "/register",
                name: "Register",
                component: A
            }, {
                path: "/login",
                name: "Login",
                component: I
            }, {
                path: "/reset",
                name: "ResetPassword",
                component: M
            }, {
                path: "/forgot",
                name: "ForgotPassword",
                component: Pt
            }, {
                path: "/posts/new",
                name: "NewPost",
                component: pt,
                meta: {
                    requiresAuth: !0
                }
            }, {
                path: "/bros",
                name: "BroFeed",
                component: yt,
                meta: {
                    requiresAuth: !0
                }
            }, {
                path: "/search",
                name: "Search",
                component: Mt
            }, {
                path: "/terms",
                name: "ToS",
                component: Kt
            }, {
                path: "/:username",
                name: "Profile",
                component: ot
            }],
            Zt = new n["a"]({
                mode: "history",
                routes: Xt
            });
        Zt.beforeEach((function(t, e, a) {
            t.matched.some((function(t) {
                return t.meta.requiresAuth
            })) && Qt.getters.myself.id && !Qt.getters.isAuthenticated ? a({
                path: "/login",
                params: {
                    nextUrl: t.fullPath
                }
            }) : a()
        }));
        var te = Zt,
            ee = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return t.open ? a("div", {
                    attrs: {
                        id: "notification"
                    }
                }, [a("div", {
                    staticClass: "main-wrapper"
                }, [a("div", {
                    staticClass: "close",
                    on: {
                        click: function(e) {
                            t.open = !1
                        }
                    }
                }, [a("b-icon", {
                    attrs: {
                        icon: "x"
                    }
                })], 1), a("div", {
                    staticClass: "message-wrapper"
                }, [a("div", {
                    staticClass: "message-content"
                }, [a("div", {
                    staticClass: "message"
                }, [t._v("Check us out on the app store!")]), a("div", {
                    staticClass: "action-button"
                }, [a("b-button", {
                    attrs: {
                        href: t.downloadLink,
                        variant: "black"
                    }
                }, [t._v("Download")])], 1)])])])]) : t._e()
            },
            ae = [],
            re = {
                name: "mobile-notification",
                data: function() {
                    return {
                        open: !0,
                        isIOS: /iPad|iPhone|iPod/.test(navigator.platform) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1
                    }
                },
                computed: {
                    downloadLink: function() {
                        return this.isIOS ? "https://apps.apple.com/us/app/vsbro/id1512668407?ls=1" : "http://vsbro.co/VSBRO.apk"
                    }
                }
            },
            ie = re,
            se = (a("d437"), Object(h["a"])(ie, ee, ae, !1, null, "2b249d8a", null)),
            ne = se.exports,
            oe = {
                components: {
                    MobileNotification: ne
                },
                methods: {
                    goHome: function() {
                        te.push({
                            name: "Home"
                        })
                    },
                    logout: function() {
                        localStorage.setItem("jwt", ""), this.checkAuthenticated(), this.goHome()
                    },
                    scrollTop: function() {
                        window.scrollTo(0, 0)
                    }
                },
                created: function() {
                    this.checkAuthenticated()
                }
            },
            ce = oe,
            le = (a("034f"), Object(h["a"])(ce, i, s, !1, null, null, null)),
            ue = le.exports,
            de = a("5f5b"),
            fe = a("b1e0"),
            pe = (a("4c53"), a("bc3a")),
            me = a("04e1"),
            he = "https://api.vsbro.co";
        window.webpackHotUpdate && (console.log("In Dev Mode"), he = "http://localhost:4200");
        var ve = {
                methods: {
                    apiGet: function(t) {
                        var e = this,
                            a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        return new Promise((function(r, i) {
                            pe.get("".concat(he + t), a ? e.getAuthHeaders() : null).then((function(t) {
                                r(t)
                            })).catch((function(t) {
                                console.log(t), i(t)
                            }))
                        }))
                    },
                    apiPost: function(t, e) {
                        var a = this,
                            r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        return new Promise((function(i, s) {
                            pe.post("".concat(he + t), e, r ? a.getAuthHeaders() : null).then((function(t) {
                                i(t)
                            })).catch((function(t) {
                                console.log(t), s(t)
                            }))
                        }))
                    },
                    checkAuthenticated: function() {
                        var t = localStorage.getItem("jwt");
                        null != t && t.length > 1 ? (this.$store.dispatch("setAuthenticated", !0), this.setupLoggedInUser(t)) : this.$store.dispatch("setAuthenticated", !1)
                    },
                    getAuthHeaders: function() {
                        return {
                            headers: {
                                Authorization: "bearer " + localStorage.getItem("jwt")
                            }
                        }
                    },
                    signUp: function(t) {
                        var e = this;
                        return new Promise((function(a, r) {
                            e.apiPost("/users/sign_up", t, !1).then((function(t) {
                                e.setupLoggedInUser(t.data).then((function(t) {
                                    a(t)
                                })).catch((function(t) {
                                    r(t)
                                }))
                            })).catch((function(t) {
                                console.log(t), r(t)
                            }))
                        }))
                    },
                    signIn: function(t) {
                        var e = this;
                        return new Promise((function(a, r) {
                            e.apiPost("/users/sign_in", t, !1).then((function(t) {
                                e.setupLoggedInUser(t.data).then((function(t) {
                                    a(t)
                                })).catch((function(t) {
                                    r(t)
                                }))
                            })).catch((function(t) {
                                console.log(t), r(t)
                            }))
                        }))
                    },
                    reset: function(t) {
                        var e = this;
                        return new Promise((function(a, r) {
                            e.apiPost("/reset_password", t, !1).then((function(t) {
                                a(t)
                            })).catch((function(t) {
                                console.log(t), r(t)
                            }))
                        }))
                    },
                    forgot: function(t) {
                        var e = this;
                        return new Promise((function(a, r) {
                            e.apiPost("/forgot_password", t, !1).then((function(t) {
                                a(t)
                            })).catch((function(t) {
                                console.log(t), r(t)
                            }))
                        }))
                    },
                    refreshMyself: function() {
                        var t = localStorage.getItem("jwt");
                        if (t) return this.setupLoggedInUser(t)
                    },
                    setupLoggedInUser: function(t) {
                        var e = this;
                        localStorage.setItem("jwt", t);
                        var a = me(t);
                        return this.$store.dispatch("setMyself", {
                            id: a.sub
                        }), new Promise((function(t, r) {
                            e.apiGet("/user/".concat(a.sub)).then((function(a) {
                                e.$store.dispatch("setMyself", a.data), t(a.data)
                            })).catch((function(t) {
                                r(t)
                            }))
                        }))
                    }
                }
            },
            be = a("487a"),
            ge = a.n(be),
            ye = (a("7361"), a("4eb5")),
            _e = a.n(ye),
            we = a("ec02"),
            Ce = a.n(we);
        r["default"].component("vue-headful", Ce.a), r["default"].use(_e.a), r["default"].use(de["a"]), r["default"].use(fe["a"]), r["default"].use(ge.a), r["default"].config.productionTip = !1, r["default"].mixin(ve), new r["default"]({
            router: te,
            store: Qt,
            directives: {
                infiniteScroll: ge.a
            },
            render: function(t) {
                return t(ue)
            }
        }).$mount("#app")
    },
    "640d": function(t, e, a) {
        "use strict";
        var r = a("4cd4"),
            i = a.n(r);
        i.a
    },
    7361: function(t, e, a) {},
    "73f8": function(t, e, a) {},
    "85ec": function(t, e, a) {},
    "88ad": function(t, e, a) {},
    "9f60": function(t, e, a) {},
    a1cd: function(t, e, a) {
        "use strict";
        var r = a("3ca1"),
            i = a.n(r);
        i.a
    },
    a651: function(t, e, a) {},
    b105: function(t, e, a) {
        "use strict";
        var r = a("a651"),
            i = a.n(r);
        i.a
    },
    b383: function(t, e, a) {
        "use strict";
        var r = a("73f8"),
            i = a.n(r);
        i.a
    },
    b640: function(t, e, a) {
        t.exports = a.p + "img/logo.1fdc778a.jpg"
    },
    c7f8: function(t, e, a) {
        t.exports = a.p + "img/instagram.f226ab1a.png"
    },
    ccb4: function(t, e, a) {},
    cf2b: function(t, e, a) {
        "use strict";
        var r = a("2dd1"),
            i = a.n(r);
        i.a
    },
    d437: function(t, e, a) {
        "use strict";
        var r = a("45a3"),
            i = a.n(r);
        i.a
    },
    d7ec: function(t, e, a) {},
    e0b4: function(t, e, a) {},
    fc64: function(t, e, a) {
        "use strict";
        var r = a("e0b4"),
            i = a.n(r);
        i.a
    },
    ff3d: function(t, e, a) {
        "use strict";
        var r = a("9f60"),
            i = a.n(r);
        i.a
    }
});
//# sourceMappingURL=app.caf7d222.js.map