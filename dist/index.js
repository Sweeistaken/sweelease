module.exports = function(e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var i = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
    }
    return r.m = e, r.c = t, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) r.d(n, i, function(t) {
                return e[t]
            }.bind(null, i));
        return n
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 87)
}([function(e, t) {
    e.exports = require("path")
}, function(e, t) {
    e.exports = require("fs")
}, function(e, t, r) {
    "use strict";
    var n = r(52),
        i = Object.prototype.toString;

    function o(e) {
        return "[object Array]" === i.call(e)
    }

    function s(e) {
        return void 0 === e
    }

    function a(e) {
        return null !== e && "object" == typeof e
    }

    function u(e) {
        if ("[object Object]" !== i.call(e)) return !1;
        var t = Object.getPrototypeOf(e);
        return null === t || t === Object.prototype
    }

    function c(e) {
        return "[object Function]" === i.call(e)
    }

    function p(e, t) {
        if (null != e)
            if ("object" != typeof e && (e = [e]), o(e))
                for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
            else
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
    }
    e.exports = {
        isArray: o,
        isArrayBuffer: function(e) {
            return "[object ArrayBuffer]" === i.call(e)
        },
        isBuffer: function(e) {
            return null !== e && !s(e) && null !== e.constructor && !s(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        },
        isFormData: function(e) {
            return "undefined" != typeof FormData && e instanceof FormData
        },
        isArrayBufferView: function(e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        },
        isString: function(e) {
            return "string" == typeof e
        },
        isNumber: function(e) {
            return "number" == typeof e
        },
        isObject: a,
        isPlainObject: u,
        isUndefined: s,
        isDate: function(e) {
            return "[object Date]" === i.call(e)
        },
        isFile: function(e) {
            return "[object File]" === i.call(e)
        },
        isBlob: function(e) {
            return "[object Blob]" === i.call(e)
        },
        isFunction: c,
        isStream: function(e) {
            return a(e) && c(e.pipe)
        },
        isURLSearchParams: function(e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        },
        isStandardBrowserEnv: function() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        },
        forEach: p,
        merge: function e() {
            var t = {};

            function r(r, n) {
                u(t[n]) && u(r) ? t[n] = e(t[n], r) : u(r) ? t[n] = e({}, r) : o(r) ? t[n] = r.slice() : t[n] = r
            }
            for (var n = 0, i = arguments.length; n < i; n++) p(arguments[n], r);
            return t
        },
        extend: function(e, t, r) {
            return p(t, (function(t, i) {
                e[i] = r && "function" == typeof t ? n(t, r) : t
            })), e
        },
        trim: function(e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        },
        stripBOM: function(e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
        }
    }
}, function(e, t) {
    e.exports = require("stream")
}, function(e, t) {
    e.exports = require("os")
}, function(e, t) {
    e.exports = require("util")
}, function(e, t, r) {
    "use strict";
    var n, i = r(15),
        o = i.Buffer,
        s = {};
    for (n in i) i.hasOwnProperty(n) && "SlowBuffer" !== n && "Buffer" !== n && (s[n] = i[n]);
    var a = s.Buffer = {};
    for (n in o) o.hasOwnProperty(n) && "allocUnsafe" !== n && "allocUnsafeSlow" !== n && (a[n] = o[n]);
    if (s.Buffer.prototype = o.prototype, a.from && a.from !== Uint8Array.from || (a.from = function(e, t, r) {
            if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof e);
            if (e && void 0 === e.length) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
            return o(e, t, r)
        }), a.alloc || (a.alloc = function(e, t, r) {
            if ("number" != typeof e) throw new TypeError('The "size" argument must be of type number. Received type ' + typeof e);
            if (e < 0 || e >= 2 * (1 << 30)) throw new RangeError('The value "' + e + '" is invalid for option "size"');
            var n = o(e);
            return t && 0 !== t.length ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0), n
        }), !s.kStringMaxLength) try {
        s.kStringMaxLength = process.binding("buffer").kStringMaxLength
    } catch (e) {}
    s.constants || (s.constants = {
        MAX_LENGTH: s.kMaxLength
    }, s.kStringMaxLength && (s.constants.MAX_STRING_LENGTH = s.kStringMaxLength)), e.exports = s
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.string = t.stream = t.pattern = t.path = t.fs = t.errno = t.array = void 0;
    const n = r(245);
    t.array = n;
    const i = r(246);
    t.errno = i;
    const o = r(247);
    t.fs = o;
    const s = r(248);
    t.path = s;
    const a = r(249);
    t.pattern = a;
    const u = r(269);
    t.stream = u;
    const c = r(270);
    t.string = c
}, function(e, t, r) {
    var n = r(118);

    function i(e) {
        var t = function() {
            return t.called ? t.value : (t.called = !0, t.value = e.apply(this, arguments))
        };
        return t.called = !1, t
    }

    function o(e) {
        var t = function() {
                if (t.called) throw new Error(t.onceError);
                return t.called = !0, t.value = e.apply(this, arguments)
            },
            r = e.name || "Function wrapped with `once`";
        return t.onceError = r + " shouldn't be called more than once", t.called = !1, t
    }
    e.exports = n(i), e.exports.strict = n(o), i.proto = i((function() {
        Object.defineProperty(Function.prototype, "once", {
            value: function() {
                return i(this)
            },
            configurable: !0
        }), Object.defineProperty(Function.prototype, "onceStrict", {
            value: function() {
                return o(this)
            },
            configurable: !0
        })
    }))
}, function(e, t, r) {
    "use strict";
    const n = {};

    function i(e, t, r) {
        r || (r = Error);
        class i extends r {
            constructor(e, r, n) {
                super(function(e, r, n) {
                    return "string" == typeof t ? t : t(e, r, n)
                }(e, r, n))
            }
        }
        i.prototype.name = r.name, i.prototype.code = e, n[e] = i
    }

    function o(e, t) {
        if (Array.isArray(e)) {
            const r = e.length;
            return e = e.map((e => String(e))), r > 2 ? `one of ${t} ${e.slice(0,r-1).join(", ")}, or ` + e[r - 1] : 2 === r ? `one of ${t} ${e[0]} or ${e[1]}` : `of ${t} ${e[0]}`
        }
        return `of ${t} ${String(e)}`
    }
    i("ERR_INVALID_OPT_VALUE", (function(e, t) {
        return 'The value "' + t + '" is invalid for option "' + e + '"'
    }), TypeError), i("ERR_INVALID_ARG_TYPE", (function(e, t, r) {
        let n;
        var i, s;
        let a;
        if ("string" == typeof t && (i = "not ", t.substr(!s || s < 0 ? 0 : +s, i.length) === i) ? (n = "must not be", t = t.replace(/^not /, "")) : n = "must be", function(e, t, r) {
                return (void 0 === r || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t
            }(e, " argument")) a = `The ${e} ${n} ${o(t,"type")}`;
        else {
            a = `The "${e}" ${function(e,t,r){return"number"!=typeof r&&(r=0),!(r+t.length>e.length)&&-1!==e.indexOf(t,r)}(e,".")?"property":"argument"} ${n} ${o(t,"type")}`
        }
        return a += ". Received type " + typeof r, a
    }), TypeError), i("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), i("ERR_METHOD_NOT_IMPLEMENTED", (function(e) {
        return "The " + e + " method is not implemented"
    })), i("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), i("ERR_STREAM_DESTROYED", (function(e) {
        return "Cannot call " + e + " after a stream was destroyed"
    })), i("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), i("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), i("ERR_STREAM_WRITE_AFTER_END", "write after end"), i("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), i("ERR_UNKNOWN_ENCODING", (function(e) {
        return "Unknown encoding: " + e
    }), TypeError), i("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), e.exports.codes = n
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n, i = (n = r(95)) && "object" == typeof n && "default" in n ? n.default : n;
    t.getUserAgent = function() {
        try {
            return `Node.js/${process.version.substr(1)} (${i()}; ${process.arch})`
        } catch (e) {
            if (/wmic os get Caption/.test(e.message)) return "Windows <version undetectable>";
            throw e
        }
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n, i = r(12);
    const o = ((n = r(8)) && "object" == typeof n && "default" in n ? n.default : n)((e => console.warn(e)));
    class s extends Error {
        constructor(e, t, r) {
            super(e), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name = "HttpError", this.status = t, Object.defineProperty(this, "code", {
                get: () => (o(new i.Deprecation("[@octokit/request-error] `error.code` is deprecated, use `error.status`.")), t)
            }), this.headers = r.headers;
            const n = Object.assign({}, r.request);
            r.request.headers.authorization && (n.headers = Object.assign({}, r.request.headers, {
                authorization: r.request.headers.authorization.replace(/ .*$/, " [REDACTED]")
            })), n.url = n.url.replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]").replace(/\baccess_token=\w+/g, "access_token=[REDACTED]"), this.request = n
        }
    }
    t.RequestError = s
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    class n extends Error {
        constructor(e) {
            super(e), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name = "Deprecation"
        }
    }
    t.Deprecation = n
}, function(e, t, r) {
    "use strict";
    var n = Object.keys || function(e) {
        var t = [];
        for (var r in e) t.push(r);
        return t
    };
    e.exports = c;
    var i = r(64),
        o = r(68);
    r(18)(c, i);
    for (var s = n(o.prototype), a = 0; a < s.length; a++) {
        var u = s[a];
        c.prototype[u] || (c.prototype[u] = o.prototype[u])
    }

    function c(e) {
        if (!(this instanceof c)) return new c(e);
        i.call(this, e), o.call(this, e), this.allowHalfOpen = !0, e && (!1 === e.readable && (this.readable = !1), !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", p)))
    }

    function p() {
        this._writableState.ended || process.nextTick(l, this)
    }

    function l(e) {
        e.end()
    }
    Object.defineProperty(c.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark
        }
    }), Object.defineProperty(c.prototype, "writableBuffer", {
        enumerable: !1,
        get: function() {
            return this._writableState && this._writableState.getBuffer()
        }
    }), Object.defineProperty(c.prototype, "writableLength", {
        enumerable: !1,
        get: function() {
            return this._writableState.length
        }
    }), Object.defineProperty(c.prototype, "destroyed", {
        enumerable: !1,
        get: function() {
            return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
        },
        set: function(e) {
            void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
        }
    })
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(272),
        i = r(273),
        o = r(274);

    function s(e = {}) {
        return e instanceof o.default ? e : new o.default(e)
    }
    t.Settings = o.default, t.stat = function(e, t, r) {
        if ("function" == typeof t) return n.read(e, s(), t);
        n.read(e, s(t), r)
    }, t.statSync = function(e, t) {
        const r = s(t);
        return i.read(e, r)
    }
}, function(e, t) {
    e.exports = require("buffer")
}, function(e, t) {
    e.exports = function(e) {
        if (r[e]) return;
        console.warn(`DEPRECATED (@octokit/rest): ${e}`), r[e] = 1
    };
    const r = {}
}, function(e, t) {
    e.exports = function(e) {
        e = e.link || e.headers.link || "";
        const t = {};
        return e.replace(/<([^>]*)>;\s*rel="([\w]*)"/g, ((e, r, n) => {
            t[n] = r
        })), t
    }
}, function(e, t, r) {
    try {
        var n = r(5);
        if ("function" != typeof n.inherits) throw "";
        e.exports = n.inherits
    } catch (t) {
        e.exports = r(227)
    }
}, function(e, t, r) {
    "use strict";
    var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r), Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        } : function(e, t, r, n) {
            void 0 === n && (n = r), e[n] = t[r]
        }),
        i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        } : function(e, t) {
            e.default = t
        }),
        o = this && this.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) "default" !== r && Object.hasOwnProperty.call(e, r) && n(t, e, r);
            return i(t, e), t
        },
        s = this && this.__awaiter || function(e, t, r, n) {
            return new(r || (r = Promise))((function(i, o) {
                function s(e) {
                    try {
                        u(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                        e(t)
                    }))).then(s, a)
                }
                u((n = n.apply(e, t || [])).next())
            }))
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getState = t.saveState = t.group = t.endGroup = t.startGroup = t.info = t.warning = t.error = t.debug = t.isDebug = t.setFailed = t.setCommandEcho = t.setOutput = t.getBooleanInput = t.getMultilineInput = t.getInput = t.addPath = t.setSecret = t.exportVariable = t.ExitCode = void 0;
    const a = r(89),
        u = r(90),
        c = r(25),
        p = o(r(4)),
        l = o(r(0));
    var d;

    function f(e, t) {
        const r = process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`] || "";
        if (t && t.required && !r) throw new Error(`Input required and not supplied: ${e}`);
        return t && !1 === t.trimWhitespace ? r : r.trim()
    }

    function h(e) {
        a.issue("error", e instanceof Error ? e.toString() : e)
    }

    function g(e) {
        a.issue("group", e)
    }

    function m() {
        a.issue("endgroup")
    }! function(e) {
        e[e.Success = 0] = "Success", e[e.Failure = 1] = "Failure"
    }(d = t.ExitCode || (t.ExitCode = {})), t.exportVariable = function(e, t) {
        const r = c.toCommandValue(t);
        if (process.env[e] = r, process.env.GITHUB_ENV || "") {
            const t = "_GitHubActionsFileCommandDelimeter_",
                n = `${e}<<${t}${p.EOL}${r}${p.EOL}${t}`;
            u.issueCommand("ENV", n)
        } else a.issueCommand("set-env", {
            name: e
        }, r)
    }, t.setSecret = function(e) {
        a.issueCommand("add-mask", {}, e)
    }, t.addPath = function(e) {
        process.env.GITHUB_PATH || "" ? u.issueCommand("PATH", e) : a.issueCommand("add-path", {}, e), process.env.PATH = `${e}${l.delimiter}${process.env.PATH}`
    }, t.getInput = f, t.getMultilineInput = function(e, t) {
        return f(e, t).split("\n").filter((e => "" !== e))
    }, t.getBooleanInput = function(e, t) {
        const r = f(e, t);
        if (["true", "True", "TRUE"].includes(r)) return !0;
        if (["false", "False", "FALSE"].includes(r)) return !1;
        throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${e}\nSupport boolean input list: \`true | True | TRUE | false | False | FALSE\``)
    }, t.setOutput = function(e, t) {
        process.stdout.write(p.EOL), a.issueCommand("set-output", {
            name: e
        }, t)
    }, t.setCommandEcho = function(e) {
        a.issue("echo", e ? "on" : "off")
    }, t.setFailed = function(e) {
        process.exitCode = d.Failure, h(e)
    }, t.isDebug = function() {
        return "1" === process.env.RUNNER_DEBUG
    }, t.debug = function(e) {
        a.issueCommand("debug", {}, e)
    }, t.error = h, t.warning = function(e) {
        a.issue("warning", e instanceof Error ? e.toString() : e)
    }, t.info = function(e) {
        process.stdout.write(e + p.EOL)
    }, t.startGroup = g, t.endGroup = m, t.group = function(e, t) {
        return s(this, void 0, void 0, (function*() {
            let r;
            g(e);
            try {
                r = yield t()
            } finally {
                m()
            }
            return r
        }))
    }, t.saveState = function(e, t) {
        a.issueCommand("save-state", {
            name: e
        }, t)
    }, t.getState = function(e) {
        return process.env[`STATE_${e}`] || ""
    }
}, function(e, t, r) {
    "use strict";

    function n(e) {
        return !0 == (null != (t = e) && "object" == typeof t && !1 === Array.isArray(t)) && "[object Object]" === Object.prototype.toString.call(e);
        var t
    }
    e.exports = function(e) {
        var t, r;
        return !1 !== n(e) && ("function" == typeof(t = e.constructor) && (!1 !== n(r = t.prototype) && !1 !== r.hasOwnProperty("isPrototypeOf")))
    }
}, function(e, t, r) {
    e.exports = function(e, t, r, a) {
        n(`octokit.get${r.charAt(0).toUpperCase()+r.slice(1)}Page() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`);
        const u = i(t)[r];
        if (!u) {
            const e = new o(`No ${r} page found`, 404);
            return Promise.reject(e)
        }
        const c = {
            url: u,
            headers: s(t, a)
        };
        return e.request(c)
    };
    const n = r(16),
        i = r(17),
        o = r(184);

    function s(e, t) {
        const r = e.headers && e.headers["x-github-media-type"];
        return !r || t && t.accept || ((t = t || {}).accept = "application/vnd." + r.replace("; param=", ".").replace("; format=", "+")), t
    }
}, function(e, t, r) {
    "use strict";
    const n = r(0),
        i = "win32" === process.platform,
        {
            REGEX_SPECIAL_CHARS: o,
            REGEX_SPECIAL_CHARS_GLOBAL: s,
            REGEX_REMOVE_BACKSLASH: a
        } = r(23);
    t.isObject = e => null !== e && "object" == typeof e && !Array.isArray(e), t.hasRegexChars = e => o.test(e), t.isRegexChar = e => 1 === e.length && t.hasRegexChars(e), t.escapeRegex = e => e.replace(s, "\\$1"), t.toPosixSlashes = e => e.replace(/\\/g, "/"), t.removeBackslashes = e => e.replace(a, (e => "\\" === e ? "" : e)), t.supportsLookbehinds = () => {
        let e = process.version.slice(1).split(".");
        return 3 === e.length && +e[0] >= 9 || 8 == +e[0] && +e[1] >= 10
    }, t.isWindows = e => e && "boolean" == typeof e.windows ? e.windows : !0 === i || "\\" === n.sep, t.escapeLast = (e, r, n) => {
        let i = e.lastIndexOf(r, n);
        return -1 === i ? e : "\\" === e[i - 1] ? t.escapeLast(e, r, i - 1) : e.slice(0, i) + "\\" + e.slice(i)
    }
}, function(e, t, r) {
    "use strict";
    const n = r(0),
        i = "[^\\\\/]",
        o = "\\.",
        s = "\\/",
        a = "[^/]",
        u = "(?:\\/|$)",
        c = "(?:^|\\/)",
        p = "\\.{1,2}(?:\\/|$)",
        l = {
            DOT_LITERAL: o,
            PLUS_LITERAL: "\\+",
            QMARK_LITERAL: "\\?",
            SLASH_LITERAL: s,
            ONE_CHAR: "(?=.)",
            QMARK: a,
            END_ANCHOR: u,
            DOTS_SLASH: p,
            NO_DOT: "(?!\\.)",
            NO_DOTS: `(?!(?:^|\\/)${p})`,
            NO_DOT_SLASH: "(?!\\.{0,1}(?:\\/|$))",
            NO_DOTS_SLASH: `(?!${p})`,
            QMARK_NO_DOT: "[^.\\/]",
            STAR: "[^/]*?",
            START_ANCHOR: c
        },
        d = {
            ...l,
            SLASH_LITERAL: "[\\\\/]",
            QMARK: i,
            STAR: "[^\\\\/]*?",
            DOTS_SLASH: "\\.{1,2}(?:[\\\\/]|$)",
            NO_DOT: "(?!\\.)",
            NO_DOTS: "(?!(?:^|[\\\\/])\\.{1,2}(?:[\\\\/]|$))",
            NO_DOT_SLASH: "(?!\\.{0,1}(?:[\\\\/]|$))",
            NO_DOTS_SLASH: "(?!\\.{1,2}(?:[\\\\/]|$))",
            QMARK_NO_DOT: "[^.\\\\/]",
            START_ANCHOR: "(?:^|[\\\\/])",
            END_ANCHOR: "(?:[\\\\/]|$)"
        };
    e.exports = {
        MAX_LENGTH: 65536,
        POSIX_REGEX_SOURCE: {
            alnum: "a-zA-Z0-9",
            alpha: "a-zA-Z",
            ascii: "\\x00-\\x7F",
            blank: " \\t",
            cntrl: "\\x00-\\x1F\\x7F",
            digit: "0-9",
            graph: "\\x21-\\x7E",
            lower: "a-z",
            print: "\\x20-\\x7E ",
            punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
            space: " \\t\\r\\n\\v\\f",
            upper: "A-Z",
            word: "A-Za-z0-9_",
            xdigit: "A-Fa-f0-9"
        },
        REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
        REGEX_NON_SPECIAL_CHAR: /^[^@![\].,$*+?^{}()|\\/]+/,
        REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
        REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
        REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
        REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
        REPLACEMENTS: {
            "***": "*",
            "**/**": "**",
            "**/**/**": "**"
        },
        CHAR_0: 48,
        CHAR_9: 57,
        CHAR_UPPERCASE_A: 65,
        CHAR_LOWERCASE_A: 97,
        CHAR_UPPERCASE_Z: 90,
        CHAR_LOWERCASE_Z: 122,
        CHAR_LEFT_PARENTHESES: 40,
        CHAR_RIGHT_PARENTHESES: 41,
        CHAR_ASTERISK: 42,
        CHAR_AMPERSAND: 38,
        CHAR_AT: 64,
        CHAR_BACKWARD_SLASH: 92,
        CHAR_CARRIAGE_RETURN: 13,
        CHAR_CIRCUMFLEX_ACCENT: 94,
        CHAR_COLON: 58,
        CHAR_COMMA: 44,
        CHAR_DOT: 46,
        CHAR_DOUBLE_QUOTE: 34,
        CHAR_EQUAL: 61,
        CHAR_EXCLAMATION_MARK: 33,
        CHAR_FORM_FEED: 12,
        CHAR_FORWARD_SLASH: 47,
        CHAR_GRAVE_ACCENT: 96,
        CHAR_HASH: 35,
        CHAR_HYPHEN_MINUS: 45,
        CHAR_LEFT_ANGLE_BRACKET: 60,
        CHAR_LEFT_CURLY_BRACE: 123,
        CHAR_LEFT_SQUARE_BRACKET: 91,
        CHAR_LINE_FEED: 10,
        CHAR_NO_BREAK_SPACE: 160,
        CHAR_PERCENT: 37,
        CHAR_PLUS: 43,
        CHAR_QUESTION_MARK: 63,
        CHAR_RIGHT_ANGLE_BRACKET: 62,
        CHAR_RIGHT_CURLY_BRACE: 125,
        CHAR_RIGHT_SQUARE_BRACKET: 93,
        CHAR_SEMICOLON: 59,
        CHAR_SINGLE_QUOTE: 39,
        CHAR_SPACE: 32,
        CHAR_TAB: 9,
        CHAR_UNDERSCORE: 95,
        CHAR_VERTICAL_LINE: 124,
        CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
        SEP: n.sep,
        extglobChars: e => ({
            "!": {
                type: "negate",
                open: "(?:(?!(?:",
                close: `))${e.STAR})`
            },
            "?": {
                type: "qmark",
                open: "(?:",
                close: ")?"
            },
            "+": {
                type: "plus",
                open: "(?:",
                close: ")+"
            },
            "*": {
                type: "star",
                open: "(?:",
                close: ")*"
            },
            "@": {
                type: "at",
                open: "(?:",
                close: ")"
            }
        }),
        globChars: e => !0 === e ? d : l
    }
}, function(e, t, r) {
    "use strict";
    const n = r(0),
        i = "[^\\\\/]",
        o = "\\.",
        s = "\\/",
        a = "[^/]",
        u = "(?:\\/|$)",
        c = "(?:^|\\/)",
        p = "\\.{1,2}(?:\\/|$)",
        l = {
            DOT_LITERAL: o,
            PLUS_LITERAL: "\\+",
            QMARK_LITERAL: "\\?",
            SLASH_LITERAL: s,
            ONE_CHAR: "(?=.)",
            QMARK: a,
            END_ANCHOR: u,
            DOTS_SLASH: p,
            NO_DOT: "(?!\\.)",
            NO_DOTS: `(?!(?:^|\\/)${p})`,
            NO_DOT_SLASH: "(?!\\.{0,1}(?:\\/|$))",
            NO_DOTS_SLASH: `(?!${p})`,
            QMARK_NO_DOT: "[^.\\/]",
            STAR: "[^/]*?",
            START_ANCHOR: c
        },
        d = {
            ...l,
            SLASH_LITERAL: "[\\\\/]",
            QMARK: i,
            STAR: "[^\\\\/]*?",
            DOTS_SLASH: "\\.{1,2}(?:[\\\\/]|$)",
            NO_DOT: "(?!\\.)",
            NO_DOTS: "(?!(?:^|[\\\\/])\\.{1,2}(?:[\\\\/]|$))",
            NO_DOT_SLASH: "(?!\\.{0,1}(?:[\\\\/]|$))",
            NO_DOTS_SLASH: "(?!\\.{1,2}(?:[\\\\/]|$))",
            QMARK_NO_DOT: "[^.\\\\/]",
            START_ANCHOR: "(?:^|[\\\\/])",
            END_ANCHOR: "(?:[\\\\/]|$)"
        };
    e.exports = {
        MAX_LENGTH: 65536,
        POSIX_REGEX_SOURCE: {
            alnum: "a-zA-Z0-9",
            alpha: "a-zA-Z",
            ascii: "\\x00-\\x7F",
            blank: " \\t",
            cntrl: "\\x00-\\x1F\\x7F",
            digit: "0-9",
            graph: "\\x21-\\x7E",
            lower: "a-z",
            print: "\\x20-\\x7E ",
            punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
            space: " \\t\\r\\n\\v\\f",
            upper: "A-Z",
            word: "A-Za-z0-9_",
            xdigit: "A-Fa-f0-9"
        },
        REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
        REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
        REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
        REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
        REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
        REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
        REPLACEMENTS: {
            "***": "*",
            "**/**": "**",
            "**/**/**": "**"
        },
        CHAR_0: 48,
        CHAR_9: 57,
        CHAR_UPPERCASE_A: 65,
        CHAR_LOWERCASE_A: 97,
        CHAR_UPPERCASE_Z: 90,
        CHAR_LOWERCASE_Z: 122,
        CHAR_LEFT_PARENTHESES: 40,
        CHAR_RIGHT_PARENTHESES: 41,
        CHAR_ASTERISK: 42,
        CHAR_AMPERSAND: 38,
        CHAR_AT: 64,
        CHAR_BACKWARD_SLASH: 92,
        CHAR_CARRIAGE_RETURN: 13,
        CHAR_CIRCUMFLEX_ACCENT: 94,
        CHAR_COLON: 58,
        CHAR_COMMA: 44,
        CHAR_DOT: 46,
        CHAR_DOUBLE_QUOTE: 34,
        CHAR_EQUAL: 61,
        CHAR_EXCLAMATION_MARK: 33,
        CHAR_FORM_FEED: 12,
        CHAR_FORWARD_SLASH: 47,
        CHAR_GRAVE_ACCENT: 96,
        CHAR_HASH: 35,
        CHAR_HYPHEN_MINUS: 45,
        CHAR_LEFT_ANGLE_BRACKET: 60,
        CHAR_LEFT_CURLY_BRACE: 123,
        CHAR_LEFT_SQUARE_BRACKET: 91,
        CHAR_LINE_FEED: 10,
        CHAR_NO_BREAK_SPACE: 160,
        CHAR_PERCENT: 37,
        CHAR_PLUS: 43,
        CHAR_QUESTION_MARK: 63,
        CHAR_RIGHT_ANGLE_BRACKET: 62,
        CHAR_RIGHT_CURLY_BRACE: 125,
        CHAR_RIGHT_SQUARE_BRACKET: 93,
        CHAR_SEMICOLON: 59,
        CHAR_SINGLE_QUOTE: 39,
        CHAR_SPACE: 32,
        CHAR_TAB: 9,
        CHAR_UNDERSCORE: 95,
        CHAR_VERTICAL_LINE: 124,
        CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
        SEP: n.sep,
        extglobChars: e => ({
            "!": {
                type: "negate",
                open: "(?:(?!(?:",
                close: `))${e.STAR})`
            },
            "?": {
                type: "qmark",
                open: "(?:",
                close: ")?"
            },
            "+": {
                type: "plus",
                open: "(?:",
                close: ")+"
            },
            "*": {
                type: "star",
                open: "(?:",
                close: ")*"
            },
            "@": {
                type: "at",
                open: "(?:",
                close: ")"
            }
        }),
        globChars: e => !0 === e ? d : l
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.toCommandValue = void 0, t.toCommandValue = function(e) {
        return null == e ? "" : "string" == typeof e || e instanceof String ? e : JSON.stringify(e)
    }
}, function(e, t) {
    e.exports = require("events")
}, function(e, t) {
    e.exports = require("http")
}, function(e, t) {
    e.exports = require("url")
}, function(e, t) {
    e.exports = require("https")
}, function(e) {
    e.exports = JSON.parse('[["0","\\u0000",127,"€"],["8140","丂丄丅丆丏丒丗丟丠両丣並丩丮丯丱丳丵丷丼乀乁乂乄乆乊乑乕乗乚乛乢乣乤乥乧乨乪",5,"乲乴",9,"乿",6,"亇亊"],["8180","亐亖亗亙亜亝亞亣亪亯亰亱亴亶亷亸亹亼亽亾仈仌仏仐仒仚仛仜仠仢仦仧仩仭仮仯仱仴仸仹仺仼仾伀伂",6,"伋伌伒",4,"伜伝伡伣伨伩伬伭伮伱伳伵伷伹伻伾",4,"佄佅佇",5,"佒佔佖佡佢佦佨佪佫佭佮佱佲併佷佸佹佺佽侀侁侂侅來侇侊侌侎侐侒侓侕侖侘侙侚侜侞侟価侢"],["8240","侤侫侭侰",4,"侶",8,"俀俁係俆俇俈俉俋俌俍俒",4,"俙俛俠俢俤俥俧俫俬俰俲俴俵俶俷俹俻俼俽俿",11],["8280","個倎倐們倓倕倖倗倛倝倞倠倢倣値倧倫倯",10,"倻倽倿偀偁偂偄偅偆偉偊偋偍偐",4,"偖偗偘偙偛偝",7,"偦",5,"偭",8,"偸偹偺偼偽傁傂傃傄傆傇傉傊傋傌傎",20,"傤傦傪傫傭",4,"傳",6,"傼"],["8340","傽",17,"僐",5,"僗僘僙僛",10,"僨僩僪僫僯僰僱僲僴僶",4,"僼",9,"儈"],["8380","儉儊儌",5,"儓",13,"儢",28,"兂兇兊兌兎兏児兒兓兗兘兙兛兝",4,"兣兤兦內兩兪兯兲兺兾兿冃冄円冇冊冋冎冏冐冑冓冔冘冚冝冞冟冡冣冦",4,"冭冮冴冸冹冺冾冿凁凂凃凅凈凊凍凎凐凒",5],["8440","凘凙凚凜凞凟凢凣凥",5,"凬凮凱凲凴凷凾刄刅刉刋刌刏刐刓刔刕刜刞刟刡刢刣別刦刧刪刬刯刱刲刴刵刼刾剄",5,"剋剎剏剒剓剕剗剘"],["8480","剙剚剛剝剟剠剢剣剤剦剨剫剬剭剮剰剱剳",9,"剾劀劃",4,"劉",6,"劑劒劔",6,"劜劤劥劦劧劮劯劰労",9,"勀勁勂勄勅勆勈勊勌勍勎勏勑勓勔動勗務",5,"勠勡勢勣勥",10,"勱",7,"勻勼勽匁匂匃匄匇匉匊匋匌匎"],["8540","匑匒匓匔匘匛匜匞匟匢匤匥匧匨匩匫匬匭匯",9,"匼匽區卂卄卆卋卌卍卐協単卙卛卝卥卨卪卬卭卲卶卹卻卼卽卾厀厁厃厇厈厊厎厏"],["8580","厐",4,"厖厗厙厛厜厞厠厡厤厧厪厫厬厭厯",6,"厷厸厹厺厼厽厾叀參",4,"収叏叐叒叓叕叚叜叝叞叡叢叧叴叺叾叿吀吂吅吇吋吔吘吙吚吜吢吤吥吪吰吳吶吷吺吽吿呁呂呄呅呇呉呌呍呎呏呑呚呝",4,"呣呥呧呩",7,"呴呹呺呾呿咁咃咅咇咈咉咊咍咑咓咗咘咜咞咟咠咡"],["8640","咢咥咮咰咲咵咶咷咹咺咼咾哃哅哊哋哖哘哛哠",4,"哫哬哯哰哱哴",5,"哻哾唀唂唃唄唅唈唊",4,"唒唓唕",5,"唜唝唞唟唡唥唦"],["8680","唨唩唫唭唲唴唵唶唸唹唺唻唽啀啂啅啇啈啋",4,"啑啒啓啔啗",4,"啝啞啟啠啢啣啨啩啫啯",5,"啹啺啽啿喅喆喌喍喎喐喒喓喕喖喗喚喛喞喠",6,"喨",8,"喲喴営喸喺喼喿",4,"嗆嗇嗈嗊嗋嗎嗏嗐嗕嗗",4,"嗞嗠嗢嗧嗩嗭嗮嗰嗱嗴嗶嗸",4,"嗿嘂嘃嘄嘅"],["8740","嘆嘇嘊嘋嘍嘐",7,"嘙嘚嘜嘝嘠嘡嘢嘥嘦嘨嘩嘪嘫嘮嘯嘰嘳嘵嘷嘸嘺嘼嘽嘾噀",11,"噏",4,"噕噖噚噛噝",4],["8780","噣噥噦噧噭噮噯噰噲噳噴噵噷噸噹噺噽",7,"嚇",6,"嚐嚑嚒嚔",14,"嚤",10,"嚰",6,"嚸嚹嚺嚻嚽",12,"囋",8,"囕囖囘囙囜団囥",5,"囬囮囯囲図囶囷囸囻囼圀圁圂圅圇國",6],["8840","園",9,"圝圞圠圡圢圤圥圦圧圫圱圲圴",4,"圼圽圿坁坃坄坅坆坈坉坋坒",4,"坘坙坢坣坥坧坬坮坰坱坲坴坵坸坹坺坽坾坿垀"],["8880","垁垇垈垉垊垍",4,"垔",6,"垜垝垞垟垥垨垪垬垯垰垱垳垵垶垷垹",8,"埄",6,"埌埍埐埑埓埖埗埛埜埞埡埢埣埥",7,"埮埰埱埲埳埵埶執埻埼埾埿堁堃堄堅堈堉堊堌堎堏堐堒堓堔堖堗堘堚堛堜堝堟堢堣堥",4,"堫",4,"報堲堳場堶",7],["8940","堾",5,"塅",6,"塎塏塐塒塓塕塖塗塙",4,"塟",5,"塦",4,"塭",16,"塿墂墄墆墇墈墊墋墌"],["8980","墍",4,"墔",4,"墛墜墝墠",7,"墪",17,"墽墾墿壀壂壃壄壆",10,"壒壓壔壖",13,"壥",5,"壭壯壱売壴壵壷壸壺",7,"夃夅夆夈",4,"夎夐夑夒夓夗夘夛夝夞夠夡夢夣夦夨夬夰夲夳夵夶夻"],["8a40","夽夾夿奀奃奅奆奊奌奍奐奒奓奙奛",4,"奡奣奤奦",12,"奵奷奺奻奼奾奿妀妅妉妋妌妎妏妐妑妔妕妘妚妛妜妝妟妠妡妢妦"],["8a80","妧妬妭妰妱妳",5,"妺妼妽妿",6,"姇姈姉姌姍姎姏姕姖姙姛姞",4,"姤姦姧姩姪姫姭",11,"姺姼姽姾娀娂娊娋娍娎娏娐娒娔娕娖娗娙娚娛娝娞娡娢娤娦娧娨娪",6,"娳娵娷",4,"娽娾娿婁",4,"婇婈婋",9,"婖婗婘婙婛",5],["8b40","婡婣婤婥婦婨婩婫",8,"婸婹婻婼婽婾媀",17,"媓",6,"媜",13,"媫媬"],["8b80","媭",4,"媴媶媷媹",4,"媿嫀嫃",5,"嫊嫋嫍",4,"嫓嫕嫗嫙嫚嫛嫝嫞嫟嫢嫤嫥嫧嫨嫪嫬",4,"嫲",22,"嬊",11,"嬘",25,"嬳嬵嬶嬸",7,"孁",6],["8c40","孈",7,"孒孖孞孠孡孧孨孫孭孮孯孲孴孶孷學孹孻孼孾孿宂宆宊宍宎宐宑宒宔宖実宧宨宩宬宭宮宯宱宲宷宺宻宼寀寁寃寈寉寊寋寍寎寏"],["8c80","寑寔",8,"寠寢寣實寧審",4,"寯寱",6,"寽対尀専尃尅將專尋尌對導尐尒尓尗尙尛尞尟尠尡尣尦尨尩尪尫尭尮尯尰尲尳尵尶尷屃屄屆屇屌屍屒屓屔屖屗屘屚屛屜屝屟屢層屧",6,"屰屲",6,"屻屼屽屾岀岃",4,"岉岊岋岎岏岒岓岕岝",4,"岤",4],["8d40","岪岮岯岰岲岴岶岹岺岻岼岾峀峂峃峅",5,"峌",5,"峓",5,"峚",6,"峢峣峧峩峫峬峮峯峱",9,"峼",4],["8d80","崁崄崅崈",5,"崏",4,"崕崗崘崙崚崜崝崟",4,"崥崨崪崫崬崯",4,"崵",7,"崿",7,"嵈嵉嵍",10,"嵙嵚嵜嵞",10,"嵪嵭嵮嵰嵱嵲嵳嵵",12,"嶃",21,"嶚嶛嶜嶞嶟嶠"],["8e40","嶡",21,"嶸",12,"巆",6,"巎",12,"巜巟巠巣巤巪巬巭"],["8e80","巰巵巶巸",4,"巿帀帄帇帉帊帋帍帎帒帓帗帞",7,"帨",4,"帯帰帲",4,"帹帺帾帿幀幁幃幆",5,"幍",6,"幖",4,"幜幝幟幠幣",14,"幵幷幹幾庁庂広庅庈庉庌庍庎庒庘庛庝庡庢庣庤庨",4,"庮",4,"庴庺庻庼庽庿",6],["8f40","廆廇廈廋",5,"廔廕廗廘廙廚廜",11,"廩廫",8,"廵廸廹廻廼廽弅弆弇弉弌弍弎弐弒弔弖弙弚弜弝弞弡弢弣弤"],["8f80","弨弫弬弮弰弲",6,"弻弽弾弿彁",14,"彑彔彙彚彛彜彞彟彠彣彥彧彨彫彮彯彲彴彵彶彸彺彽彾彿徃徆徍徎徏徑従徔徖徚徛徝從徟徠徢",5,"復徫徬徯",5,"徶徸徹徺徻徾",4,"忇忈忊忋忎忓忔忕忚忛応忞忟忢忣忥忦忨忩忬忯忰忲忳忴忶忷忹忺忼怇"],["9040","怈怉怋怌怐怑怓怗怘怚怞怟怢怣怤怬怭怮怰",4,"怶",4,"怽怾恀恄",6,"恌恎恏恑恓恔恖恗恘恛恜恞恟恠恡恥恦恮恱恲恴恵恷恾悀"],["9080","悁悂悅悆悇悈悊悋悎悏悐悑悓悕悗悘悙悜悞悡悢悤悥悧悩悪悮悰悳悵悶悷悹悺悽",7,"惇惈惉惌",4,"惒惓惔惖惗惙惛惞惡",4,"惪惱惲惵惷惸惻",4,"愂愃愄愅愇愊愋愌愐",4,"愖愗愘愙愛愜愝愞愡愢愥愨愩愪愬",18,"慀",6],["9140","慇慉態慍慏慐慒慓慔慖",6,"慞慟慠慡慣慤慥慦慩",6,"慱慲慳慴慶慸",18,"憌憍憏",4,"憕"],["9180","憖",6,"憞",8,"憪憫憭",9,"憸",5,"憿懀懁懃",4,"應懌",4,"懓懕",16,"懧",13,"懶",8,"戀",5,"戇戉戓戔戙戜戝戞戠戣戦戧戨戩戫戭戯戰戱戲戵戶戸",4,"扂扄扅扆扊"],["9240","扏扐払扖扗扙扚扜",6,"扤扥扨扱扲扴扵扷扸扺扻扽抁抂抃抅抆抇抈抋",5,"抔抙抜抝択抣抦抧抩抪抭抮抯抰抲抳抴抶抷抸抺抾拀拁"],["9280","拃拋拏拑拕拝拞拠拡拤拪拫拰拲拵拸拹拺拻挀挃挄挅挆挊挋挌挍挏挐挒挓挔挕挗挘挙挜挦挧挩挬挭挮挰挱挳",5,"挻挼挾挿捀捁捄捇捈捊捑捒捓捔捖",7,"捠捤捥捦捨捪捫捬捯捰捲捳捴捵捸捹捼捽捾捿掁掃掄掅掆掋掍掑掓掔掕掗掙",6,"採掤掦掫掯掱掲掵掶掹掻掽掿揀"],["9340","揁揂揃揅揇揈揊揋揌揑揓揔揕揗",6,"揟揢揤",4,"揫揬揮揯揰揱揳揵揷揹揺揻揼揾搃搄搆",4,"損搎搑搒搕",5,"搝搟搢搣搤"],["9380","搥搧搨搩搫搮",5,"搵",4,"搻搼搾摀摂摃摉摋",6,"摓摕摖摗摙",4,"摟",7,"摨摪摫摬摮",9,"摻",6,"撃撆撈",8,"撓撔撗撘撚撛撜撝撟",4,"撥撦撧撨撪撫撯撱撲撳撴撶撹撻撽撾撿擁擃擄擆",6,"擏擑擓擔擕擖擙據"],["9440","擛擜擝擟擠擡擣擥擧",24,"攁",7,"攊",7,"攓",4,"攙",8],["9480","攢攣攤攦",4,"攬攭攰攱攲攳攷攺攼攽敀",4,"敆敇敊敋敍敎敐敒敓敔敗敘敚敜敟敠敡敤敥敧敨敩敪敭敮敯敱敳敵敶數",14,"斈斉斊斍斎斏斒斔斕斖斘斚斝斞斠斢斣斦斨斪斬斮斱",7,"斺斻斾斿旀旂旇旈旉旊旍旐旑旓旔旕旘",7,"旡旣旤旪旫"],["9540","旲旳旴旵旸旹旻",4,"昁昄昅昇昈昉昋昍昐昑昒昖昗昘昚昛昜昞昡昢昣昤昦昩昪昫昬昮昰昲昳昷",4,"昽昿晀時晄",6,"晍晎晐晑晘"],["9580","晙晛晜晝晞晠晢晣晥晧晩",4,"晱晲晳晵晸晹晻晼晽晿暀暁暃暅暆暈暉暊暋暍暎暏暐暒暓暔暕暘",4,"暞",8,"暩",4,"暯",4,"暵暶暷暸暺暻暼暽暿",25,"曚曞",7,"曧曨曪",5,"曱曵曶書曺曻曽朁朂會"],["9640","朄朅朆朇朌朎朏朑朒朓朖朘朙朚朜朞朠",5,"朧朩朮朰朲朳朶朷朸朹朻朼朾朿杁杄杅杇杊杋杍杒杔杕杗",4,"杝杢杣杤杦杧杫杬杮東杴杶"],["9680","杸杹杺杻杽枀枂枃枅枆枈枊枌枍枎枏枑枒枓枔枖枙枛枟枠枡枤枦枩枬枮枱枲枴枹",7,"柂柅",9,"柕柖柗柛柟柡柣柤柦柧柨柪柫柭柮柲柵",7,"柾栁栂栃栄栆栍栐栒栔栕栘",4,"栞栟栠栢",6,"栫",6,"栴栵栶栺栻栿桇桋桍桏桒桖",5],["9740","桜桝桞桟桪桬",7,"桵桸",8,"梂梄梇",7,"梐梑梒梔梕梖梘",9,"梣梤梥梩梪梫梬梮梱梲梴梶梷梸"],["9780","梹",6,"棁棃",5,"棊棌棎棏棐棑棓棔棖棗棙棛",4,"棡棢棤",9,"棯棲棳棴棶棷棸棻棽棾棿椀椂椃椄椆",4,"椌椏椑椓",11,"椡椢椣椥",7,"椮椯椱椲椳椵椶椷椸椺椻椼椾楀楁楃",16,"楕楖楘楙楛楜楟"],["9840","楡楢楤楥楧楨楩楪楬業楯楰楲",4,"楺楻楽楾楿榁榃榅榊榋榌榎",5,"榖榗榙榚榝",9,"榩榪榬榮榯榰榲榳榵榶榸榹榺榼榽"],["9880","榾榿槀槂",7,"構槍槏槑槒槓槕",5,"槜槝槞槡",11,"槮槯槰槱槳",9,"槾樀",9,"樋",11,"標",5,"樠樢",5,"権樫樬樭樮樰樲樳樴樶",6,"樿",4,"橅橆橈",7,"橑",6,"橚"],["9940","橜",4,"橢橣橤橦",10,"橲",6,"橺橻橽橾橿檁檂檃檅",8,"檏檒",4,"檘",7,"檡",5],["9980","檧檨檪檭",114,"欥欦欨",6],["9a40","欯欰欱欳欴欵欶欸欻欼欽欿歀歁歂歄歅歈歊歋歍",11,"歚",7,"歨歩歫",13,"歺歽歾歿殀殅殈"],["9a80","殌殎殏殐殑殔殕殗殘殙殜",4,"殢",7,"殫",7,"殶殸",6,"毀毃毄毆",4,"毌毎毐毑毘毚毜",4,"毢",7,"毬毭毮毰毱毲毴毶毷毸毺毻毼毾",6,"氈",4,"氎氒気氜氝氞氠氣氥氫氬氭氱氳氶氷氹氺氻氼氾氿汃汄汅汈汋",4,"汑汒汓汖汘"],["9b40","汙汚汢汣汥汦汧汫",4,"汱汳汵汷汸決汻汼汿沀沄沇沊沋沍沎沑沒沕沖沗沘沚沜沝沞沠沢沨沬沯沰沴沵沶沷沺泀況泂泃泆泇泈泋泍泎泏泑泒泘"],["9b80","泙泚泜泝泟泤泦泧泩泬泭泲泴泹泿洀洂洃洅洆洈洉洊洍洏洐洑洓洔洕洖洘洜洝洟",5,"洦洨洩洬洭洯洰洴洶洷洸洺洿浀浂浄浉浌浐浕浖浗浘浛浝浟浡浢浤浥浧浨浫浬浭浰浱浲浳浵浶浹浺浻浽",4,"涃涄涆涇涊涋涍涏涐涒涖",4,"涜涢涥涬涭涰涱涳涴涶涷涹",5,"淁淂淃淈淉淊"],["9c40","淍淎淏淐淒淓淔淕淗淚淛淜淟淢淣淥淧淨淩淪淭淯淰淲淴淵淶淸淺淽",7,"渆渇済渉渋渏渒渓渕渘渙減渜渞渟渢渦渧渨渪測渮渰渱渳渵"],["9c80","渶渷渹渻",7,"湅",7,"湏湐湑湒湕湗湙湚湜湝湞湠",10,"湬湭湯",14,"満溁溂溄溇溈溊",4,"溑",6,"溙溚溛溝溞溠溡溣溤溦溨溩溫溬溭溮溰溳溵溸溹溼溾溿滀滃滄滅滆滈滉滊滌滍滎滐滒滖滘滙滛滜滝滣滧滪",5],["9d40","滰滱滲滳滵滶滷滸滺",7,"漃漄漅漇漈漊",4,"漐漑漒漖",9,"漡漢漣漥漦漧漨漬漮漰漲漴漵漷",6,"漿潀潁潂"],["9d80","潃潄潅潈潉潊潌潎",9,"潙潚潛潝潟潠潡潣潤潥潧",5,"潯潰潱潳潵潶潷潹潻潽",6,"澅澆澇澊澋澏",12,"澝澞澟澠澢",4,"澨",10,"澴澵澷澸澺",5,"濁濃",5,"濊",6,"濓",10,"濟濢濣濤濥"],["9e40","濦",7,"濰",32,"瀒",7,"瀜",6,"瀤",6],["9e80","瀫",9,"瀶瀷瀸瀺",17,"灍灎灐",13,"灟",11,"灮灱灲灳灴灷灹灺灻災炁炂炃炄炆炇炈炋炌炍炏炐炑炓炗炘炚炛炞",12,"炰炲炴炵炶為炾炿烄烅烆烇烉烋",12,"烚"],["9f40","烜烝烞烠烡烢烣烥烪烮烰",6,"烸烺烻烼烾",10,"焋",4,"焑焒焔焗焛",10,"焧",7,"焲焳焴"],["9f80","焵焷",13,"煆煇煈煉煋煍煏",12,"煝煟",4,"煥煩",4,"煯煰煱煴煵煶煷煹煻煼煾",5,"熅",4,"熋熌熍熎熐熑熒熓熕熖熗熚",4,"熡",6,"熩熪熫熭",5,"熴熶熷熸熺",8,"燄",9,"燏",4],["a040","燖",9,"燡燢燣燤燦燨",5,"燯",9,"燺",11,"爇",19],["a080","爛爜爞",9,"爩爫爭爮爯爲爳爴爺爼爾牀",6,"牉牊牋牎牏牐牑牓牔牕牗牘牚牜牞牠牣牤牥牨牪牫牬牭牰牱牳牴牶牷牸牻牼牽犂犃犅",4,"犌犎犐犑犓",11,"犠",11,"犮犱犲犳犵犺",6,"狅狆狇狉狊狋狌狏狑狓狔狕狖狘狚狛"],["a1a1","　、。·ˉˇ¨〃々—～‖…‘’“”〔〕〈",7,"〖〗【】±×÷∶∧∨∑∏∪∩∈∷√⊥∥∠⌒⊙∫∮≡≌≈∽∝≠≮≯≤≥∞∵∴♂♀°′″℃＄¤￠￡‰§№☆★○●◎◇◆□■△▲※→←↑↓〓"],["a2a1","ⅰ",9],["a2b1","⒈",19,"⑴",19,"①",9],["a2e5","㈠",9],["a2f1","Ⅰ",11],["a3a1","！＂＃￥％",88,"￣"],["a4a1","ぁ",82],["a5a1","ァ",85],["a6a1","Α",16,"Σ",6],["a6c1","α",16,"σ",6],["a6e0","︵︶︹︺︿﹀︽︾﹁﹂﹃﹄"],["a6ee","︻︼︷︸︱"],["a6f4","︳︴"],["a7a1","А",5,"ЁЖ",25],["a7d1","а",5,"ёж",25],["a840","ˊˋ˙–―‥‵℅℉↖↗↘↙∕∟∣≒≦≧⊿═",35,"▁",6],["a880","█",7,"▓▔▕▼▽◢◣◤◥☉⊕〒〝〞"],["a8a1","āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜüêɑ"],["a8bd","ńň"],["a8c0","ɡ"],["a8c5","ㄅ",36],["a940","〡",8,"㊣㎎㎏㎜㎝㎞㎡㏄㏎㏑㏒㏕︰￢￤"],["a959","℡㈱"],["a95c","‐"],["a960","ー゛゜ヽヾ〆ゝゞ﹉",9,"﹔﹕﹖﹗﹙",8],["a980","﹢",4,"﹨﹩﹪﹫"],["a996","〇"],["a9a4","─",75],["aa40","狜狝狟狢",5,"狪狫狵狶狹狽狾狿猀猂猄",5,"猋猌猍猏猐猑猒猔猘猙猚猟猠猣猤猦猧猨猭猯猰猲猳猵猶猺猻猼猽獀",8],["aa80","獉獊獋獌獎獏獑獓獔獕獖獘",7,"獡",10,"獮獰獱"],["ab40","獲",11,"獿",4,"玅玆玈玊玌玍玏玐玒玓玔玕玗玘玙玚玜玝玞玠玡玣",5,"玪玬玭玱玴玵玶玸玹玼玽玾玿珁珃",4],["ab80","珋珌珎珒",6,"珚珛珜珝珟珡珢珣珤珦珨珪珫珬珮珯珰珱珳",4],["ac40","珸",10,"琄琇琈琋琌琍琎琑",8,"琜",5,"琣琤琧琩琫琭琯琱琲琷",4,"琽琾琿瑀瑂",11],["ac80","瑎",6,"瑖瑘瑝瑠",12,"瑮瑯瑱",4,"瑸瑹瑺"],["ad40","瑻瑼瑽瑿璂璄璅璆璈璉璊璌璍璏璑",10,"璝璟",7,"璪",15,"璻",12],["ad80","瓈",9,"瓓",8,"瓝瓟瓡瓥瓧",6,"瓰瓱瓲"],["ae40","瓳瓵瓸",6,"甀甁甂甃甅",7,"甎甐甒甔甕甖甗甛甝甞甠",4,"甦甧甪甮甴甶甹甼甽甿畁畂畃畄畆畇畉畊畍畐畑畒畓畕畖畗畘"],["ae80","畝",7,"畧畨畩畫",6,"畳畵當畷畺",4,"疀疁疂疄疅疇"],["af40","疈疉疊疌疍疎疐疓疕疘疛疜疞疢疦",4,"疭疶疷疺疻疿痀痁痆痋痌痎痏痐痑痓痗痙痚痜痝痟痠痡痥痩痬痭痮痯痲痳痵痶痷痸痺痻痽痾瘂瘄瘆瘇"],["af80","瘈瘉瘋瘍瘎瘏瘑瘒瘓瘔瘖瘚瘜瘝瘞瘡瘣瘧瘨瘬瘮瘯瘱瘲瘶瘷瘹瘺瘻瘽癁療癄"],["b040","癅",6,"癎",5,"癕癗",4,"癝癟癠癡癢癤",6,"癬癭癮癰",7,"癹発發癿皀皁皃皅皉皊皌皍皏皐皒皔皕皗皘皚皛"],["b080","皜",7,"皥",8,"皯皰皳皵",9,"盀盁盃啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥"],["b140","盄盇盉盋盌盓盕盙盚盜盝盞盠",4,"盦",7,"盰盳盵盶盷盺盻盽盿眀眂眃眅眆眊県眎",10,"眛眜眝眞眡眣眤眥眧眪眫"],["b180","眬眮眰",4,"眹眻眽眾眿睂睄睅睆睈",7,"睒",7,"睜薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳"],["b240","睝睞睟睠睤睧睩睪睭",11,"睺睻睼瞁瞂瞃瞆",5,"瞏瞐瞓",11,"瞡瞣瞤瞦瞨瞫瞭瞮瞯瞱瞲瞴瞶",4],["b280","瞼瞾矀",12,"矎",8,"矘矙矚矝",4,"矤病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖"],["b340","矦矨矪矯矰矱矲矴矵矷矹矺矻矼砃",5,"砊砋砎砏砐砓砕砙砛砞砠砡砢砤砨砪砫砮砯砱砲砳砵砶砽砿硁硂硃硄硆硈硉硊硋硍硏硑硓硔硘硙硚"],["b380","硛硜硞",11,"硯",7,"硸硹硺硻硽",6,"场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚"],["b440","碄碅碆碈碊碋碏碐碒碔碕碖碙碝碞碠碢碤碦碨",7,"碵碶碷碸確碻碼碽碿磀磂磃磄磆磇磈磌磍磎磏磑磒磓磖磗磘磚",9],["b480","磤磥磦磧磩磪磫磭",4,"磳磵磶磸磹磻",5,"礂礃礄礆",6,"础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮"],["b540","礍",5,"礔",9,"礟",4,"礥",14,"礵",4,"礽礿祂祃祄祅祇祊",8,"祔祕祘祙祡祣"],["b580","祤祦祩祪祫祬祮祰",6,"祹祻",4,"禂禃禆禇禈禉禋禌禍禎禐禑禒怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠"],["b640","禓",6,"禛",11,"禨",10,"禴",4,"禼禿秂秄秅秇秈秊秌秎秏秐秓秔秖秗秙",5,"秠秡秢秥秨秪"],["b680","秬秮秱",6,"秹秺秼秾秿稁稄稅稇稈稉稊稌稏",4,"稕稖稘稙稛稜丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二"],["b740","稝稟稡稢稤",14,"稴稵稶稸稺稾穀",5,"穇",9,"穒",4,"穘",16],["b780","穩",6,"穱穲穳穵穻穼穽穾窂窅窇窉窊窋窌窎窏窐窓窔窙窚窛窞窡窢贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服"],["b840","窣窤窧窩窪窫窮",4,"窴",10,"竀",10,"竌",9,"竗竘竚竛竜竝竡竢竤竧",5,"竮竰竱竲竳"],["b880","竴",4,"竻竼竾笀笁笂笅笇笉笌笍笎笐笒笓笖笗笘笚笜笝笟笡笢笣笧笩笭浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹"],["b940","笯笰笲笴笵笶笷笹笻笽笿",5,"筆筈筊筍筎筓筕筗筙筜筞筟筡筣",10,"筯筰筳筴筶筸筺筼筽筿箁箂箃箄箆",6,"箎箏"],["b980","箑箒箓箖箘箙箚箛箞箟箠箣箤箥箮箯箰箲箳箵箶箷箹",7,"篂篃範埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈"],["ba40","篅篈築篊篋篍篎篏篐篒篔",4,"篛篜篞篟篠篢篣篤篧篨篩篫篬篭篯篰篲",4,"篸篹篺篻篽篿",7,"簈簉簊簍簎簐",5,"簗簘簙"],["ba80","簚",4,"簠",5,"簨簩簫",12,"簹",5,"籂骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖"],["bb40","籃",9,"籎",36,"籵",5,"籾",9],["bb80","粈粊",6,"粓粔粖粙粚粛粠粡粣粦粧粨粩粫粬粭粯粰粴",4,"粺粻弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕"],["bc40","粿糀糂糃糄糆糉糋糎",6,"糘糚糛糝糞糡",6,"糩",5,"糰",7,"糹糺糼",13,"紋",5],["bc80","紑",14,"紡紣紤紥紦紨紩紪紬紭紮細",6,"肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件"],["bd40","紷",54,"絯",7],["bd80","絸",32,"健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸"],["be40","継",12,"綧",6,"綯",42],["be80","線",32,"尽劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵觉决诀绝均菌钧军君峻"],["bf40","緻",62],["bf80","縺縼",4,"繂",4,"繈",21,"俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀"],["c040","繞",35,"纃",23,"纜纝纞"],["c080","纮纴纻纼绖绤绬绹缊缐缞缷缹缻",6,"罃罆",9,"罒罓馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐"],["c140","罖罙罛罜罝罞罠罣",4,"罫罬罭罯罰罳罵罶罷罸罺罻罼罽罿羀羂",7,"羋羍羏",4,"羕",4,"羛羜羠羢羣羥羦羨",6,"羱"],["c180","羳",4,"羺羻羾翀翂翃翄翆翇翈翉翋翍翏",4,"翖翗翙",5,"翢翣痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿"],["c240","翤翧翨翪翫翬翭翯翲翴",6,"翽翾翿耂耇耈耉耊耎耏耑耓耚耛耝耞耟耡耣耤耫",5,"耲耴耹耺耼耾聀聁聄聅聇聈聉聎聏聐聑聓聕聖聗"],["c280","聙聛",13,"聫",5,"聲",11,"隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫"],["c340","聾肁肂肅肈肊肍",5,"肔肕肗肙肞肣肦肧肨肬肰肳肵肶肸肹肻胅胇",4,"胏",6,"胘胟胠胢胣胦胮胵胷胹胻胾胿脀脁脃脄脅脇脈脋"],["c380","脌脕脗脙脛脜脝脟",12,"脭脮脰脳脴脵脷脹",4,"脿谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸"],["c440","腀",5,"腇腉腍腎腏腒腖腗腘腛",4,"腡腢腣腤腦腨腪腫腬腯腲腳腵腶腷腸膁膃",4,"膉膋膌膍膎膐膒",5,"膙膚膞",4,"膤膥"],["c480","膧膩膫",7,"膴",5,"膼膽膾膿臄臅臇臈臉臋臍",6,"摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁"],["c540","臔",14,"臤臥臦臨臩臫臮",4,"臵",5,"臽臿舃與",4,"舎舏舑舓舕",5,"舝舠舤舥舦舧舩舮舲舺舼舽舿"],["c580","艀艁艂艃艅艆艈艊艌艍艎艐",7,"艙艛艜艝艞艠",7,"艩拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗"],["c640","艪艫艬艭艱艵艶艷艸艻艼芀芁芃芅芆芇芉芌芐芓芔芕芖芚芛芞芠芢芣芧芲芵芶芺芻芼芿苀苂苃苅苆苉苐苖苙苚苝苢苧苨苩苪苬苭苮苰苲苳苵苶苸"],["c680","苺苼",4,"茊茋茍茐茒茓茖茘茙茝",9,"茩茪茮茰茲茷茻茽啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐"],["c740","茾茿荁荂荄荅荈荊",4,"荓荕",4,"荝荢荰",6,"荹荺荾",6,"莇莈莊莋莌莍莏莐莑莔莕莖莗莙莚莝莟莡",6,"莬莭莮"],["c780","莯莵莻莾莿菂菃菄菆菈菉菋菍菎菐菑菒菓菕菗菙菚菛菞菢菣菤菦菧菨菫菬菭恰洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠"],["c840","菮華菳",4,"菺菻菼菾菿萀萂萅萇萈萉萊萐萒",5,"萙萚萛萞",5,"萩",7,"萲",5,"萹萺萻萾",7,"葇葈葉"],["c880","葊",6,"葒",4,"葘葝葞葟葠葢葤",4,"葪葮葯葰葲葴葷葹葻葼取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁"],["c940","葽",4,"蒃蒄蒅蒆蒊蒍蒏",7,"蒘蒚蒛蒝蒞蒟蒠蒢",12,"蒰蒱蒳蒵蒶蒷蒻蒼蒾蓀蓂蓃蓅蓆蓇蓈蓋蓌蓎蓏蓒蓔蓕蓗"],["c980","蓘",4,"蓞蓡蓢蓤蓧",4,"蓭蓮蓯蓱",10,"蓽蓾蔀蔁蔂伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳"],["ca40","蔃",8,"蔍蔎蔏蔐蔒蔔蔕蔖蔘蔙蔛蔜蔝蔞蔠蔢",8,"蔭",9,"蔾",4,"蕄蕅蕆蕇蕋",10],["ca80","蕗蕘蕚蕛蕜蕝蕟",4,"蕥蕦蕧蕩",8,"蕳蕵蕶蕷蕸蕼蕽蕿薀薁省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱"],["cb40","薂薃薆薈",6,"薐",10,"薝",6,"薥薦薧薩薫薬薭薱",5,"薸薺",6,"藂",6,"藊",4,"藑藒"],["cb80","藔藖",5,"藝",6,"藥藦藧藨藪",14,"恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔"],["cc40","藹藺藼藽藾蘀",4,"蘆",10,"蘒蘓蘔蘕蘗",15,"蘨蘪",13,"蘹蘺蘻蘽蘾蘿虀"],["cc80","虁",11,"虒虓處",4,"虛虜虝號虠虡虣",7,"獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃"],["cd40","虭虯虰虲",6,"蚃",6,"蚎",4,"蚔蚖",5,"蚞",4,"蚥蚦蚫蚭蚮蚲蚳蚷蚸蚹蚻",4,"蛁蛂蛃蛅蛈蛌蛍蛒蛓蛕蛖蛗蛚蛜"],["cd80","蛝蛠蛡蛢蛣蛥蛦蛧蛨蛪蛫蛬蛯蛵蛶蛷蛺蛻蛼蛽蛿蜁蜄蜅蜆蜋蜌蜎蜏蜐蜑蜔蜖汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威"],["ce40","蜙蜛蜝蜟蜠蜤蜦蜧蜨蜪蜫蜬蜭蜯蜰蜲蜳蜵蜶蜸蜹蜺蜼蜽蝀",6,"蝊蝋蝍蝏蝐蝑蝒蝔蝕蝖蝘蝚",5,"蝡蝢蝦",7,"蝯蝱蝲蝳蝵"],["ce80","蝷蝸蝹蝺蝿螀螁螄螆螇螉螊螌螎",4,"螔螕螖螘",6,"螠",4,"巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺"],["cf40","螥螦螧螩螪螮螰螱螲螴螶螷螸螹螻螼螾螿蟁",4,"蟇蟈蟉蟌",4,"蟔",6,"蟜蟝蟞蟟蟡蟢蟣蟤蟦蟧蟨蟩蟫蟬蟭蟯",9],["cf80","蟺蟻蟼蟽蟿蠀蠁蠂蠄",5,"蠋",7,"蠔蠗蠘蠙蠚蠜",4,"蠣稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓"],["d040","蠤",13,"蠳",5,"蠺蠻蠽蠾蠿衁衂衃衆",5,"衎",5,"衕衖衘衚",6,"衦衧衪衭衯衱衳衴衵衶衸衹衺"],["d080","衻衼袀袃袆袇袉袊袌袎袏袐袑袓袔袕袗",4,"袝",4,"袣袥",5,"小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄"],["d140","袬袮袯袰袲",4,"袸袹袺袻袽袾袿裀裃裄裇裈裊裋裌裍裏裐裑裓裖裗裚",4,"裠裡裦裧裩",6,"裲裵裶裷裺裻製裿褀褁褃",5],["d180","褉褋",4,"褑褔",4,"褜",4,"褢褣褤褦褧褨褩褬褭褮褯褱褲褳褵褷选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶"],["d240","褸",8,"襂襃襅",24,"襠",5,"襧",19,"襼"],["d280","襽襾覀覂覄覅覇",26,"摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐"],["d340","覢",30,"觃觍觓觔觕觗觘觙觛觝觟觠觡觢觤觧觨觩觪觬觭觮觰觱觲觴",6],["d380","觻",4,"訁",5,"計",21,"印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉"],["d440","訞",31,"訿",8,"詉",21],["d480","詟",25,"詺",6,"浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧"],["d540","誁",7,"誋",7,"誔",46],["d580","諃",32,"铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政"],["d640","諤",34,"謈",27],["d680","謤謥謧",30,"帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑"],["d740","譆",31,"譧",4,"譭",25],["d780","讇",24,"讬讱讻诇诐诪谉谞住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座"],["d840","谸",8,"豂豃豄豅豈豊豋豍",7,"豖豗豘豙豛",5,"豣",6,"豬",6,"豴豵豶豷豻",6,"貃貄貆貇"],["d880","貈貋貍",6,"貕貖貗貙",20,"亍丌兀丐廿卅丕亘丞鬲孬噩丨禺丿匕乇夭爻卮氐囟胤馗毓睾鼗丶亟鼐乜乩亓芈孛啬嘏仄厍厝厣厥厮靥赝匚叵匦匮匾赜卦卣刂刈刎刭刳刿剀剌剞剡剜蒯剽劂劁劐劓冂罔亻仃仉仂仨仡仫仞伛仳伢佤仵伥伧伉伫佞佧攸佚佝"],["d940","貮",62],["d980","賭",32,"佟佗伲伽佶佴侑侉侃侏佾佻侪佼侬侔俦俨俪俅俚俣俜俑俟俸倩偌俳倬倏倮倭俾倜倌倥倨偾偃偕偈偎偬偻傥傧傩傺僖儆僭僬僦僮儇儋仝氽佘佥俎龠汆籴兮巽黉馘冁夔勹匍訇匐凫夙兕亠兖亳衮袤亵脔裒禀嬴蠃羸冫冱冽冼"],["da40","贎",14,"贠赑赒赗赟赥赨赩赪赬赮赯赱赲赸",8,"趂趃趆趇趈趉趌",4,"趒趓趕",9,"趠趡"],["da80","趢趤",12,"趲趶趷趹趻趽跀跁跂跅跇跈跉跊跍跐跒跓跔凇冖冢冥讠讦讧讪讴讵讷诂诃诋诏诎诒诓诔诖诘诙诜诟诠诤诨诩诮诰诳诶诹诼诿谀谂谄谇谌谏谑谒谔谕谖谙谛谘谝谟谠谡谥谧谪谫谮谯谲谳谵谶卩卺阝阢阡阱阪阽阼陂陉陔陟陧陬陲陴隈隍隗隰邗邛邝邙邬邡邴邳邶邺"],["db40","跕跘跙跜跠跡跢跥跦跧跩跭跮跰跱跲跴跶跼跾",6,"踆踇踈踋踍踎踐踑踒踓踕",7,"踠踡踤",4,"踫踭踰踲踳踴踶踷踸踻踼踾"],["db80","踿蹃蹅蹆蹌",4,"蹓",5,"蹚",11,"蹧蹨蹪蹫蹮蹱邸邰郏郅邾郐郄郇郓郦郢郜郗郛郫郯郾鄄鄢鄞鄣鄱鄯鄹酃酆刍奂劢劬劭劾哿勐勖勰叟燮矍廴凵凼鬯厶弁畚巯坌垩垡塾墼壅壑圩圬圪圳圹圮圯坜圻坂坩垅坫垆坼坻坨坭坶坳垭垤垌垲埏垧垴垓垠埕埘埚埙埒垸埴埯埸埤埝"],["dc40","蹳蹵蹷",4,"蹽蹾躀躂躃躄躆躈",6,"躑躒躓躕",6,"躝躟",11,"躭躮躰躱躳",6,"躻",7],["dc80","軃",10,"軏",21,"堋堍埽埭堀堞堙塄堠塥塬墁墉墚墀馨鼙懿艹艽艿芏芊芨芄芎芑芗芙芫芸芾芰苈苊苣芘芷芮苋苌苁芩芴芡芪芟苄苎芤苡茉苷苤茏茇苜苴苒苘茌苻苓茑茚茆茔茕苠苕茜荑荛荜茈莒茼茴茱莛荞茯荏荇荃荟荀茗荠茭茺茳荦荥"],["dd40","軥",62],["dd80","輤",32,"荨茛荩荬荪荭荮莰荸莳莴莠莪莓莜莅荼莶莩荽莸荻莘莞莨莺莼菁萁菥菘堇萘萋菝菽菖萜萸萑萆菔菟萏萃菸菹菪菅菀萦菰菡葜葑葚葙葳蒇蒈葺蒉葸萼葆葩葶蒌蒎萱葭蓁蓍蓐蓦蒽蓓蓊蒿蒺蓠蒡蒹蒴蒗蓥蓣蔌甍蔸蓰蔹蔟蔺"],["de40","轅",32,"轪辀辌辒辝辠辡辢辤辥辦辧辪辬辭辮辯農辳辴辵辷辸辺辻込辿迀迃迆"],["de80","迉",4,"迏迒迖迗迚迠迡迣迧迬迯迱迲迴迵迶迺迻迼迾迿逇逈逌逎逓逕逘蕖蔻蓿蓼蕙蕈蕨蕤蕞蕺瞢蕃蕲蕻薤薨薇薏蕹薮薜薅薹薷薰藓藁藜藿蘧蘅蘩蘖蘼廾弈夼奁耷奕奚奘匏尢尥尬尴扌扪抟抻拊拚拗拮挢拶挹捋捃掭揶捱捺掎掴捭掬掊捩掮掼揲揸揠揿揄揞揎摒揆掾摅摁搋搛搠搌搦搡摞撄摭撖"],["df40","這逜連逤逥逧",5,"逰",4,"逷逹逺逽逿遀遃遅遆遈",4,"過達違遖遙遚遜",5,"遤遦遧適遪遫遬遯",4,"遶",6,"遾邁"],["df80","還邅邆邇邉邊邌",4,"邒邔邖邘邚邜邞邟邠邤邥邧邨邩邫邭邲邷邼邽邿郀摺撷撸撙撺擀擐擗擤擢攉攥攮弋忒甙弑卟叱叽叩叨叻吒吖吆呋呒呓呔呖呃吡呗呙吣吲咂咔呷呱呤咚咛咄呶呦咝哐咭哂咴哒咧咦哓哔呲咣哕咻咿哌哙哚哜咩咪咤哝哏哞唛哧唠哽唔哳唢唣唏唑唧唪啧喏喵啉啭啁啕唿啐唼"],["e040","郂郃郆郈郉郋郌郍郒郔郕郖郘郙郚郞郟郠郣郤郥郩郪郬郮郰郱郲郳郵郶郷郹郺郻郼郿鄀鄁鄃鄅",19,"鄚鄛鄜"],["e080","鄝鄟鄠鄡鄤",10,"鄰鄲",6,"鄺",8,"酄唷啖啵啶啷唳唰啜喋嗒喃喱喹喈喁喟啾嗖喑啻嗟喽喾喔喙嗪嗷嗉嘟嗑嗫嗬嗔嗦嗝嗄嗯嗥嗲嗳嗌嗍嗨嗵嗤辔嘞嘈嘌嘁嘤嘣嗾嘀嘧嘭噘嘹噗嘬噍噢噙噜噌噔嚆噤噱噫噻噼嚅嚓嚯囔囗囝囡囵囫囹囿圄圊圉圜帏帙帔帑帱帻帼"],["e140","酅酇酈酑酓酔酕酖酘酙酛酜酟酠酦酧酨酫酭酳酺酻酼醀",4,"醆醈醊醎醏醓",6,"醜",5,"醤",5,"醫醬醰醱醲醳醶醷醸醹醻"],["e180","醼",10,"釈釋釐釒",9,"針",8,"帷幄幔幛幞幡岌屺岍岐岖岈岘岙岑岚岜岵岢岽岬岫岱岣峁岷峄峒峤峋峥崂崃崧崦崮崤崞崆崛嵘崾崴崽嵬嵛嵯嵝嵫嵋嵊嵩嵴嶂嶙嶝豳嶷巅彳彷徂徇徉後徕徙徜徨徭徵徼衢彡犭犰犴犷犸狃狁狎狍狒狨狯狩狲狴狷猁狳猃狺"],["e240","釦",62],["e280","鈥",32,"狻猗猓猡猊猞猝猕猢猹猥猬猸猱獐獍獗獠獬獯獾舛夥飧夤夂饣饧",5,"饴饷饽馀馄馇馊馍馐馑馓馔馕庀庑庋庖庥庠庹庵庾庳赓廒廑廛廨廪膺忄忉忖忏怃忮怄忡忤忾怅怆忪忭忸怙怵怦怛怏怍怩怫怊怿怡恸恹恻恺恂"],["e340","鉆",45,"鉵",16],["e380","銆",7,"銏",24,"恪恽悖悚悭悝悃悒悌悛惬悻悱惝惘惆惚悴愠愦愕愣惴愀愎愫慊慵憬憔憧憷懔懵忝隳闩闫闱闳闵闶闼闾阃阄阆阈阊阋阌阍阏阒阕阖阗阙阚丬爿戕氵汔汜汊沣沅沐沔沌汨汩汴汶沆沩泐泔沭泷泸泱泗沲泠泖泺泫泮沱泓泯泾"],["e440","銨",5,"銯",24,"鋉",31],["e480","鋩",32,"洹洧洌浃浈洇洄洙洎洫浍洮洵洚浏浒浔洳涑浯涞涠浞涓涔浜浠浼浣渚淇淅淞渎涿淠渑淦淝淙渖涫渌涮渫湮湎湫溲湟溆湓湔渲渥湄滟溱溘滠漭滢溥溧溽溻溷滗溴滏溏滂溟潢潆潇漤漕滹漯漶潋潴漪漉漩澉澍澌潸潲潼潺濑"],["e540","錊",51,"錿",10],["e580","鍊",31,"鍫濉澧澹澶濂濡濮濞濠濯瀚瀣瀛瀹瀵灏灞宀宄宕宓宥宸甯骞搴寤寮褰寰蹇謇辶迓迕迥迮迤迩迦迳迨逅逄逋逦逑逍逖逡逵逶逭逯遄遑遒遐遨遘遢遛暹遴遽邂邈邃邋彐彗彖彘尻咫屐屙孱屣屦羼弪弩弭艴弼鬻屮妁妃妍妩妪妣"],["e640","鍬",34,"鎐",27],["e680","鎬",29,"鏋鏌鏍妗姊妫妞妤姒妲妯姗妾娅娆姝娈姣姘姹娌娉娲娴娑娣娓婀婧婊婕娼婢婵胬媪媛婷婺媾嫫媲嫒嫔媸嫠嫣嫱嫖嫦嫘嫜嬉嬗嬖嬲嬷孀尕尜孚孥孳孑孓孢驵驷驸驺驿驽骀骁骅骈骊骐骒骓骖骘骛骜骝骟骠骢骣骥骧纟纡纣纥纨纩"],["e740","鏎",7,"鏗",54],["e780","鐎",32,"纭纰纾绀绁绂绉绋绌绐绔绗绛绠绡绨绫绮绯绱绲缍绶绺绻绾缁缂缃缇缈缋缌缏缑缒缗缙缜缛缟缡",6,"缪缫缬缭缯",4,"缵幺畿巛甾邕玎玑玮玢玟珏珂珑玷玳珀珉珈珥珙顼琊珩珧珞玺珲琏琪瑛琦琥琨琰琮琬"],["e840","鐯",14,"鐿",43,"鑬鑭鑮鑯"],["e880","鑰",20,"钑钖钘铇铏铓铔铚铦铻锜锠琛琚瑁瑜瑗瑕瑙瑷瑭瑾璜璎璀璁璇璋璞璨璩璐璧瓒璺韪韫韬杌杓杞杈杩枥枇杪杳枘枧杵枨枞枭枋杷杼柰栉柘栊柩枰栌柙枵柚枳柝栀柃枸柢栎柁柽栲栳桠桡桎桢桄桤梃栝桕桦桁桧桀栾桊桉栩梵梏桴桷梓桫棂楮棼椟椠棹"],["e940","锧锳锽镃镈镋镕镚镠镮镴镵長",7,"門",42],["e980","閫",32,"椤棰椋椁楗棣椐楱椹楠楂楝榄楫榀榘楸椴槌榇榈槎榉楦楣楹榛榧榻榫榭槔榱槁槊槟榕槠榍槿樯槭樗樘橥槲橄樾檠橐橛樵檎橹樽樨橘橼檑檐檩檗檫猷獒殁殂殇殄殒殓殍殚殛殡殪轫轭轱轲轳轵轶轸轷轹轺轼轾辁辂辄辇辋"],["ea40","闌",27,"闬闿阇阓阘阛阞阠阣",6,"阫阬阭阯阰阷阸阹阺阾陁陃陊陎陏陑陒陓陖陗"],["ea80","陘陙陚陜陝陞陠陣陥陦陫陭",4,"陳陸",12,"隇隉隊辍辎辏辘辚軎戋戗戛戟戢戡戥戤戬臧瓯瓴瓿甏甑甓攴旮旯旰昊昙杲昃昕昀炅曷昝昴昱昶昵耆晟晔晁晏晖晡晗晷暄暌暧暝暾曛曜曦曩贲贳贶贻贽赀赅赆赈赉赇赍赕赙觇觊觋觌觎觏觐觑牮犟牝牦牯牾牿犄犋犍犏犒挈挲掰"],["eb40","隌階隑隒隓隕隖隚際隝",9,"隨",7,"隱隲隴隵隷隸隺隻隿雂雃雈雊雋雐雑雓雔雖",9,"雡",6,"雫"],["eb80","雬雭雮雰雱雲雴雵雸雺電雼雽雿霂霃霅霊霋霌霐霑霒霔霕霗",4,"霝霟霠搿擘耄毪毳毽毵毹氅氇氆氍氕氘氙氚氡氩氤氪氲攵敕敫牍牒牖爰虢刖肟肜肓肼朊肽肱肫肭肴肷胧胨胩胪胛胂胄胙胍胗朐胝胫胱胴胭脍脎胲胼朕脒豚脶脞脬脘脲腈腌腓腴腙腚腱腠腩腼腽腭腧塍媵膈膂膑滕膣膪臌朦臊膻"],["ec40","霡",8,"霫霬霮霯霱霳",4,"霺霻霼霽霿",18,"靔靕靗靘靚靜靝靟靣靤靦靧靨靪",7],["ec80","靲靵靷",4,"靽",7,"鞆",4,"鞌鞎鞏鞐鞓鞕鞖鞗鞙",4,"臁膦欤欷欹歃歆歙飑飒飓飕飙飚殳彀毂觳斐齑斓於旆旄旃旌旎旒旖炀炜炖炝炻烀炷炫炱烨烊焐焓焖焯焱煳煜煨煅煲煊煸煺熘熳熵熨熠燠燔燧燹爝爨灬焘煦熹戾戽扃扈扉礻祀祆祉祛祜祓祚祢祗祠祯祧祺禅禊禚禧禳忑忐"],["ed40","鞞鞟鞡鞢鞤",6,"鞬鞮鞰鞱鞳鞵",46],["ed80","韤韥韨韮",4,"韴韷",23,"怼恝恚恧恁恙恣悫愆愍慝憩憝懋懑戆肀聿沓泶淼矶矸砀砉砗砘砑斫砭砜砝砹砺砻砟砼砥砬砣砩硎硭硖硗砦硐硇硌硪碛碓碚碇碜碡碣碲碹碥磔磙磉磬磲礅磴礓礤礞礴龛黹黻黼盱眄眍盹眇眈眚眢眙眭眦眵眸睐睑睇睃睚睨"],["ee40","頏",62],["ee80","顎",32,"睢睥睿瞍睽瞀瞌瞑瞟瞠瞰瞵瞽町畀畎畋畈畛畲畹疃罘罡罟詈罨罴罱罹羁罾盍盥蠲钅钆钇钋钊钌钍钏钐钔钗钕钚钛钜钣钤钫钪钭钬钯钰钲钴钶",4,"钼钽钿铄铈",6,"铐铑铒铕铖铗铙铘铛铞铟铠铢铤铥铧铨铪"],["ef40","顯",5,"颋颎颒颕颙颣風",37,"飏飐飔飖飗飛飜飝飠",4],["ef80","飥飦飩",30,"铩铫铮铯铳铴铵铷铹铼铽铿锃锂锆锇锉锊锍锎锏锒",4,"锘锛锝锞锟锢锪锫锩锬锱锲锴锶锷锸锼锾锿镂锵镄镅镆镉镌镎镏镒镓镔镖镗镘镙镛镞镟镝镡镢镤",8,"镯镱镲镳锺矧矬雉秕秭秣秫稆嵇稃稂稞稔"],["f040","餈",4,"餎餏餑",28,"餯",26],["f080","饊",9,"饖",12,"饤饦饳饸饹饻饾馂馃馉稹稷穑黏馥穰皈皎皓皙皤瓞瓠甬鸠鸢鸨",4,"鸲鸱鸶鸸鸷鸹鸺鸾鹁鹂鹄鹆鹇鹈鹉鹋鹌鹎鹑鹕鹗鹚鹛鹜鹞鹣鹦",6,"鹱鹭鹳疒疔疖疠疝疬疣疳疴疸痄疱疰痃痂痖痍痣痨痦痤痫痧瘃痱痼痿瘐瘀瘅瘌瘗瘊瘥瘘瘕瘙"],["f140","馌馎馚",10,"馦馧馩",47],["f180","駙",32,"瘛瘼瘢瘠癀瘭瘰瘿瘵癃瘾瘳癍癞癔癜癖癫癯翊竦穸穹窀窆窈窕窦窠窬窨窭窳衤衩衲衽衿袂袢裆袷袼裉裢裎裣裥裱褚裼裨裾裰褡褙褓褛褊褴褫褶襁襦襻疋胥皲皴矜耒耔耖耜耠耢耥耦耧耩耨耱耋耵聃聆聍聒聩聱覃顸颀颃"],["f240","駺",62],["f280","騹",32,"颉颌颍颏颔颚颛颞颟颡颢颥颦虍虔虬虮虿虺虼虻蚨蚍蚋蚬蚝蚧蚣蚪蚓蚩蚶蛄蚵蛎蚰蚺蚱蚯蛉蛏蚴蛩蛱蛲蛭蛳蛐蜓蛞蛴蛟蛘蛑蜃蜇蛸蜈蜊蜍蜉蜣蜻蜞蜥蜮蜚蜾蝈蜴蜱蜩蜷蜿螂蜢蝽蝾蝻蝠蝰蝌蝮螋蝓蝣蝼蝤蝙蝥螓螯螨蟒"],["f340","驚",17,"驲骃骉骍骎骔骕骙骦骩",6,"骲骳骴骵骹骻骽骾骿髃髄髆",4,"髍髎髏髐髒體髕髖髗髙髚髛髜"],["f380","髝髞髠髢髣髤髥髧髨髩髪髬髮髰",8,"髺髼",6,"鬄鬅鬆蟆螈螅螭螗螃螫蟥螬螵螳蟋蟓螽蟑蟀蟊蟛蟪蟠蟮蠖蠓蟾蠊蠛蠡蠹蠼缶罂罄罅舐竺竽笈笃笄笕笊笫笏筇笸笪笙笮笱笠笥笤笳笾笞筘筚筅筵筌筝筠筮筻筢筲筱箐箦箧箸箬箝箨箅箪箜箢箫箴篑篁篌篝篚篥篦篪簌篾篼簏簖簋"],["f440","鬇鬉",5,"鬐鬑鬒鬔",10,"鬠鬡鬢鬤",10,"鬰鬱鬳",7,"鬽鬾鬿魀魆魊魋魌魎魐魒魓魕",5],["f480","魛",32,"簟簪簦簸籁籀臾舁舂舄臬衄舡舢舣舭舯舨舫舸舻舳舴舾艄艉艋艏艚艟艨衾袅袈裘裟襞羝羟羧羯羰羲籼敉粑粝粜粞粢粲粼粽糁糇糌糍糈糅糗糨艮暨羿翎翕翥翡翦翩翮翳糸絷綦綮繇纛麸麴赳趄趔趑趱赧赭豇豉酊酐酎酏酤"],["f540","魼",62],["f580","鮻",32,"酢酡酰酩酯酽酾酲酴酹醌醅醐醍醑醢醣醪醭醮醯醵醴醺豕鹾趸跫踅蹙蹩趵趿趼趺跄跖跗跚跞跎跏跛跆跬跷跸跣跹跻跤踉跽踔踝踟踬踮踣踯踺蹀踹踵踽踱蹉蹁蹂蹑蹒蹊蹰蹶蹼蹯蹴躅躏躔躐躜躞豸貂貊貅貘貔斛觖觞觚觜"],["f640","鯜",62],["f680","鰛",32,"觥觫觯訾謦靓雩雳雯霆霁霈霏霎霪霭霰霾龀龃龅",5,"龌黾鼋鼍隹隼隽雎雒瞿雠銎銮鋈錾鍪鏊鎏鐾鑫鱿鲂鲅鲆鲇鲈稣鲋鲎鲐鲑鲒鲔鲕鲚鲛鲞",5,"鲥",4,"鲫鲭鲮鲰",7,"鲺鲻鲼鲽鳄鳅鳆鳇鳊鳋"],["f740","鰼",62],["f780","鱻鱽鱾鲀鲃鲄鲉鲊鲌鲏鲓鲖鲗鲘鲙鲝鲪鲬鲯鲹鲾",4,"鳈鳉鳑鳒鳚鳛鳠鳡鳌",4,"鳓鳔鳕鳗鳘鳙鳜鳝鳟鳢靼鞅鞑鞒鞔鞯鞫鞣鞲鞴骱骰骷鹘骶骺骼髁髀髅髂髋髌髑魅魃魇魉魈魍魑飨餍餮饕饔髟髡髦髯髫髻髭髹鬈鬏鬓鬟鬣麽麾縻麂麇麈麋麒鏖麝麟黛黜黝黠黟黢黩黧黥黪黯鼢鼬鼯鼹鼷鼽鼾齄"],["f840","鳣",62],["f880","鴢",32],["f940","鵃",62],["f980","鶂",32],["fa40","鶣",62],["fa80","鷢",32],["fb40","鸃",27,"鸤鸧鸮鸰鸴鸻鸼鹀鹍鹐鹒鹓鹔鹖鹙鹝鹟鹠鹡鹢鹥鹮鹯鹲鹴",9,"麀"],["fb80","麁麃麄麅麆麉麊麌",5,"麔",8,"麞麠",5,"麧麨麩麪"],["fc40","麫",8,"麵麶麷麹麺麼麿",4,"黅黆黇黈黊黋黌黐黒黓黕黖黗黙黚點黡黣黤黦黨黫黬黭黮黰",8,"黺黽黿",6],["fc80","鼆",4,"鼌鼏鼑鼒鼔鼕鼖鼘鼚",5,"鼡鼣",8,"鼭鼮鼰鼱"],["fd40","鼲",4,"鼸鼺鼼鼿",4,"齅",10,"齒",38],["fd80","齹",5,"龁龂龍",11,"龜龝龞龡",4,"郎凉秊裏隣"],["fe40","兀嗀﨎﨏﨑﨓﨔礼﨟蘒﨡﨣﨤﨧﨨﨩"]]')
}, function(e, t, r) {
    "use strict";
    var n = r(2);

    function i(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    e.exports = function(e, t, r) {
        if (!t) return e;
        var o;
        if (r) o = r(t);
        else if (n.isURLSearchParams(t)) o = t.toString();
        else {
            var s = [];
            n.forEach(t, (function(e, t) {
                null != e && (n.isArray(e) ? t += "[]" : e = [e], n.forEach(e, (function(e) {
                    n.isDate(e) ? e = e.toISOString() : n.isObject(e) && (e = JSON.stringify(e)), s.push(i(t) + "=" + i(e))
                })))
            })), o = s.join("&")
        }
        if (o) {
            var a = e.indexOf("#"); - 1 !== a && (e = e.slice(0, a)), e += (-1 === e.indexOf("?") ? "?" : "&") + o
        }
        return e
    }
}, function(e, t, r) {
    "use strict";
    var n = r(56);
    e.exports = function(e, t, r, i, o) {
        var s = new Error(e);
        return n(s, t, r, i, o)
    }
}, function(e, t, r) {
    "use strict";
    var n = r(9).codes.ERR_STREAM_PREMATURE_CLOSE;

    function i() {}
    e.exports = function e(t, r, o) {
        if ("function" == typeof r) return e(t, null, r);
        r || (r = {}), o = function(e) {
            var t = !1;
            return function() {
                if (!t) {
                    t = !0;
                    for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    e.apply(this, n)
                }
            }
        }(o || i);
        var s = r.readable || !1 !== r.readable && t.readable,
            a = r.writable || !1 !== r.writable && t.writable,
            u = function() {
                t.writable || p()
            },
            c = t._writableState && t._writableState.finished,
            p = function() {
                a = !1, c = !0, s || o.call(t)
            },
            l = t._readableState && t._readableState.endEmitted,
            d = function() {
                s = !1, l = !0, a || o.call(t)
            },
            f = function(e) {
                o.call(t, e)
            },
            h = function() {
                var e;
                return s && !l ? (t._readableState && t._readableState.ended || (e = new n), o.call(t, e)) : a && !c ? (t._writableState && t._writableState.ended || (e = new n), o.call(t, e)) : void 0
            },
            g = function() {
                t.req.on("finish", p)
            };
        return ! function(e) {
                return e.setHeader && "function" == typeof e.abort
            }(t) ? a && !t._writableState && (t.on("end", u), t.on("close", u)) : (t.on("complete", p), t.on("abort", h), t.req ? g() : t.on("request", g)), t.on("end", d), t.on("finish", p), !1 !== r.error && t.on("error", f), t.on("close", h),
            function() {
                t.removeListener("complete", p), t.removeListener("abort", h), t.removeListener("request", g), t.req && t.req.removeListener("finish", p), t.removeListener("end", u), t.removeListener("close", u), t.removeListener("finish", p), t.removeListener("end", d), t.removeListener("error", f), t.removeListener("close", h)
            }
    }
}, function(e, t) {
    const r = Number.MAX_SAFE_INTEGER || 9007199254740991;
    e.exports = {
        SEMVER_SPEC_VERSION: "2.0.0",
        MAX_LENGTH: 256,
        MAX_SAFE_INTEGER: r,
        MAX_SAFE_COMPONENT_LENGTH: 16
    }
}, function(e, t, r) {
    "use strict";
    const n = r(36);
    e.exports = (e, t = {}) => {
        let r = (e, i = {}) => {
            let o = t.escapeInvalid && n.isInvalidBrace(i),
                s = !0 === e.invalid && !0 === t.escapeInvalid,
                a = "";
            if (e.value) return (o || s) && n.isOpenOrClose(e) ? "\\" + e.value : e.value;
            if (e.value) return e.value;
            if (e.nodes)
                for (let t of e.nodes) a += r(t);
            return a
        };
        return r(e)
    }
}, function(e, t, r) {
    "use strict";
    t.isInteger = e => "number" == typeof e ? Number.isInteger(e) : "string" == typeof e && "" !== e.trim() && Number.isInteger(Number(e)), t.find = (e, t) => e.nodes.find((e => e.type === t)), t.exceedsLimit = (e, r, n = 1, i) => !1 !== i && (!(!t.isInteger(e) || !t.isInteger(r)) && (Number(r) - Number(e)) / Number(n) >= i), t.escapeNode = (e, t = 0, r) => {
        let n = e.nodes[t];
        n && (r && n.type === r || "open" === n.type || "close" === n.type) && !0 !== n.escaped && (n.value = "\\" + n.value, n.escaped = !0)
    }, t.encloseBrace = e => "brace" === e.type && (e.commas >> 0 + e.ranges >> 0 == 0 && (e.invalid = !0, !0)), t.isInvalidBrace = e => "brace" === e.type && (!(!0 !== e.invalid && !e.dollar) || (e.commas >> 0 + e.ranges >> 0 == 0 || !0 !== e.open || !0 !== e.close) && (e.invalid = !0, !0)), t.isOpenOrClose = e => "open" === e.type || "close" === e.type || (!0 === e.open || !0 === e.close), t.reduce = e => e.reduce(((e, t) => ("text" === t.type && e.push(t.value), "range" === t.type && (t.type = "text"), e)), []), t.flatten = (...e) => {
        const t = [],
            r = e => {
                for (let n = 0; n < e.length; n++) {
                    let i = e[n];
                    Array.isArray(i) ? r(i, t) : void 0 !== i && t.push(i)
                }
                return t
            };
        return r(e), t
    }
}, function(e, t, r) {
    "use strict";
    const n = r(0),
        i = "win32" === process.platform,
        {
            REGEX_BACKSLASH: o,
            REGEX_REMOVE_BACKSLASH: s,
            REGEX_SPECIAL_CHARS: a,
            REGEX_SPECIAL_CHARS_GLOBAL: u
        } = r(24);
    t.isObject = e => null !== e && "object" == typeof e && !Array.isArray(e), t.hasRegexChars = e => a.test(e), t.isRegexChar = e => 1 === e.length && t.hasRegexChars(e), t.escapeRegex = e => e.replace(u, "\\$1"), t.toPosixSlashes = e => e.replace(o, "/"), t.removeBackslashes = e => e.replace(s, (e => "\\" === e ? "" : e)), t.supportsLookbehinds = () => {
        const e = process.version.slice(1).split(".").map(Number);
        return 3 === e.length && e[0] >= 9 || 8 === e[0] && e[1] >= 10
    }, t.isWindows = e => e && "boolean" == typeof e.windows ? e.windows : !0 === i || "\\" === n.sep, t.escapeLast = (e, r, n) => {
        const i = e.lastIndexOf(r, n);
        return -1 === i ? e : "\\" === e[i - 1] ? t.escapeLast(e, r, i - 1) : `${e.slice(0,i)}\\${e.slice(i)}`
    }, t.removePrefix = (e, t = {}) => {
        let r = e;
        return r.startsWith("./") && (r = r.slice(2), t.prefix = "./"), r
    }, t.wrapOutput = (e, t = {}, r = {}) => {
        let n = `${r.contains?"":"^"}(?:${e})${r.contains?"":"$"}`;
        return !0 === t.negated && (n = `(?:^(?!${n}).*$)`), n
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(277),
        i = r(280),
        o = r(281);

    function s(e = {}) {
        return e instanceof o.default ? e : new o.default(e)
    }
    t.Settings = o.default, t.scandir = function(e, t, r) {
        if ("function" == typeof t) return n.read(e, s(), t);
        n.read(e, s(t), r)
    }, t.scandirSync = function(e, t) {
        const r = s(t);
        return i.read(e, r)
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isFatalError = function(e, t) {
        return null === e.errorFilter || !e.errorFilter(t)
    }, t.isAppliedFilter = function(e, t) {
        return null === e || e(t)
    }, t.replacePathSegmentSeparator = function(e, t) {
        return e.split(/[\\/]/).join(t)
    }, t.joinPathSegments = function(e, t, r) {
        return "" === e ? t : e + r + t
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(0),
        i = r(289),
        o = r(292),
        s = r(293),
        a = r(294);
    t.default = class {
        constructor(e) {
            this._settings = e, this.errorFilter = new s.default(this._settings), this.entryFilter = new o.default(this._settings, this._getMicromatchOptions()), this.deepFilter = new i.default(this._settings, this._getMicromatchOptions()), this.entryTransformer = new a.default(this._settings)
        }
        _getRootDirectory(e) {
            return n.resolve(this._settings.cwd, e.base)
        }
        _getReaderOptions(e) {
            const t = "." === e.base ? "" : e.base;
            return {
                basePath: t,
                pathSegmentSeparator: "/",
                concurrency: this._settings.concurrency,
                deepFilter: this.deepFilter.getFilter(t, e.positive, e.negative),
                entryFilter: this.entryFilter.getFilter(e.positive, e.negative),
                errorFilter: this.errorFilter.getFilter(),
                followSymbolicLinks: this._settings.followSymbolicLinks,
                fs: this._settings.fs,
                stats: this._settings.stats,
                throwErrorOnBrokenSymbolicLink: this._settings.throwErrorOnBrokenSymbolicLink,
                transform: this.entryTransformer.getTransformer()
            }
        }
        _getMicromatchOptions() {
            return {
                dot: this._settings.dot,
                matchBase: this._settings.baseNameMatch,
                nobrace: !this._settings.braceExpansion,
                nocase: !this._settings.caseSensitiveMatch,
                noext: !this._settings.extglob,
                noglobstar: !this._settings.globstar,
                posix: !0,
                strictSlashes: !1
            }
        }
    }
}, function(e, t) {
    e.exports = require("child_process")
}, function(e, t, r) {
    "use strict";
    e.exports = e => {
        const t = (e = e || {}).env || process.env;
        return "win32" !== (e.platform || process.platform) ? "PATH" : Object.keys(t).find((e => "PATH" === e.toUpperCase())) || "Path"
    }
}, function(e, t) {
    e.exports = require("assert")
}, function(e, t, r) {
    "use strict";

    function n(e) {
        return e && "object" == typeof e && "default" in e ? e.default : e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(r(3)),
        o = n(r(27)),
        s = n(r(28)),
        a = n(r(29)),
        u = n(r(45));
    const c = i.Readable,
        p = Symbol("buffer"),
        l = Symbol("type");
    class d {
        constructor() {
            this[l] = "";
            const e = arguments[0],
                t = arguments[1],
                r = [];
            let n = 0;
            if (e) {
                const t = e,
                    i = Number(t.length);
                for (let e = 0; e < i; e++) {
                    const i = t[e];
                    let o;
                    o = i instanceof Buffer ? i : ArrayBuffer.isView(i) ? Buffer.from(i.buffer, i.byteOffset, i.byteLength) : i instanceof ArrayBuffer ? Buffer.from(i) : i instanceof d ? i[p] : Buffer.from("string" == typeof i ? i : String(i)), n += o.length, r.push(o)
                }
            }
            this[p] = Buffer.concat(r);
            let i = t && void 0 !== t.type && String(t.type).toLowerCase();
            i && !/[^\u0020-\u007E]/.test(i) && (this[l] = i)
        }
        get size() {
            return this[p].length
        }
        get type() {
            return this[l]
        }
        text() {
            return Promise.resolve(this[p].toString())
        }
        arrayBuffer() {
            const e = this[p],
                t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
            return Promise.resolve(t)
        }
        stream() {
            const e = new c;
            return e._read = function() {}, e.push(this[p]), e.push(null), e
        }
        toString() {
            return "[object Blob]"
        }
        slice() {
            const e = this.size,
                t = arguments[0],
                r = arguments[1];
            let n, i;
            n = void 0 === t ? 0 : t < 0 ? Math.max(e + t, 0) : Math.min(t, e), i = void 0 === r ? e : r < 0 ? Math.max(e + r, 0) : Math.min(r, e);
            const o = Math.max(i - n, 0),
                s = this[p].slice(n, n + o),
                a = new d([], {
                    type: arguments[2]
                });
            return a[p] = s, a
        }
    }

    function f(e, t, r) {
        Error.call(this, e), this.message = e, this.type = t, r && (this.code = this.errno = r.code), Error.captureStackTrace(this, this.constructor)
    }
    let h;
    Object.defineProperties(d.prototype, {
        size: {
            enumerable: !0
        },
        type: {
            enumerable: !0
        },
        slice: {
            enumerable: !0
        }
    }), Object.defineProperty(d.prototype, Symbol.toStringTag, {
        value: "Blob",
        writable: !1,
        enumerable: !1,
        configurable: !0
    }), f.prototype = Object.create(Error.prototype), f.prototype.constructor = f, f.prototype.name = "FetchError";
    try {
        h = r(126).convert
    } catch (e) {}
    const g = Symbol("Body internals"),
        m = i.PassThrough;

    function y(e) {
        var t = this,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = r.size;
        let o = void 0 === n ? 0 : n;
        var s = r.timeout;
        let a = void 0 === s ? 0 : s;
        null == e ? e = null : _(e) ? e = Buffer.from(e.toString()) : v(e) || Buffer.isBuffer(e) || ("[object ArrayBuffer]" === Object.prototype.toString.call(e) ? e = Buffer.from(e) : ArrayBuffer.isView(e) ? e = Buffer.from(e.buffer, e.byteOffset, e.byteLength) : e instanceof i || (e = Buffer.from(String(e)))), this[g] = {
            body: e,
            disturbed: !1,
            error: null
        }, this.size = o, this.timeout = a, e instanceof i && e.on("error", (function(e) {
            const r = "AbortError" === e.name ? e : new f(`Invalid response body while trying to fetch ${t.url}: ${e.message}`, "system", e);
            t[g].error = r
        }))
    }

    function b() {
        var e = this;
        if (this[g].disturbed) return y.Promise.reject(new TypeError(`body used already for: ${this.url}`));
        if (this[g].disturbed = !0, this[g].error) return y.Promise.reject(this[g].error);
        let t = this.body;
        if (null === t) return y.Promise.resolve(Buffer.alloc(0));
        if (v(t) && (t = t.stream()), Buffer.isBuffer(t)) return y.Promise.resolve(t);
        if (!(t instanceof i)) return y.Promise.resolve(Buffer.alloc(0));
        let r = [],
            n = 0,
            o = !1;
        return new y.Promise((function(i, s) {
            let a;
            e.timeout && (a = setTimeout((function() {
                o = !0, s(new f(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`, "body-timeout"))
            }), e.timeout)), t.on("error", (function(t) {
                "AbortError" === t.name ? (o = !0, s(t)) : s(new f(`Invalid response body while trying to fetch ${e.url}: ${t.message}`, "system", t))
            })), t.on("data", (function(t) {
                if (!o && null !== t) {
                    if (e.size && n + t.length > e.size) return o = !0, void s(new f(`content size at ${e.url} over limit: ${e.size}`, "max-size"));
                    n += t.length, r.push(t)
                }
            })), t.on("end", (function() {
                if (!o) {
                    clearTimeout(a);
                    try {
                        i(Buffer.concat(r, n))
                    } catch (t) {
                        s(new f(`Could not create Buffer from response body for ${e.url}: ${t.message}`, "system", t))
                    }
                }
            }))
        }))
    }

    function _(e) {
        return "object" == typeof e && "function" == typeof e.append && "function" == typeof e.delete && "function" == typeof e.get && "function" == typeof e.getAll && "function" == typeof e.has && "function" == typeof e.set && ("URLSearchParams" === e.constructor.name || "[object URLSearchParams]" === Object.prototype.toString.call(e) || "function" == typeof e.sort)
    }

    function v(e) {
        return "object" == typeof e && "function" == typeof e.arrayBuffer && "string" == typeof e.type && "function" == typeof e.stream && "function" == typeof e.constructor && "string" == typeof e.constructor.name && /^(Blob|File)$/.test(e.constructor.name) && /^(Blob|File)$/.test(e[Symbol.toStringTag])
    }

    function w(e) {
        let t, r, n = e.body;
        if (e.bodyUsed) throw new Error("cannot clone body after it is used");
        return n instanceof i && "function" != typeof n.getBoundary && (t = new m, r = new m, n.pipe(t), n.pipe(r), e[g].body = t, n = r), n
    }

    function E(e) {
        return null === e ? null : "string" == typeof e ? "text/plain;charset=UTF-8" : _(e) ? "application/x-www-form-urlencoded;charset=UTF-8" : v(e) ? e.type || null : Buffer.isBuffer(e) || "[object ArrayBuffer]" === Object.prototype.toString.call(e) || ArrayBuffer.isView(e) ? null : "function" == typeof e.getBoundary ? `multipart/form-data;boundary=${e.getBoundary()}` : e instanceof i ? null : "text/plain;charset=UTF-8"
    }

    function q(e) {
        const t = e.body;
        return null === t ? 0 : v(t) ? t.size : Buffer.isBuffer(t) ? t.length : t && "function" == typeof t.getLengthSync && (t._lengthRetrievers && 0 == t._lengthRetrievers.length || t.hasKnownLength && t.hasKnownLength()) ? t.getLengthSync() : null
    }
    y.prototype = {
        get body() {
            return this[g].body
        },
        get bodyUsed() {
            return this[g].disturbed
        },
        arrayBuffer() {
            return b.call(this).then((function(e) {
                return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
            }))
        },
        blob() {
            let e = this.headers && this.headers.get("content-type") || "";
            return b.call(this).then((function(t) {
                return Object.assign(new d([], {
                    type: e.toLowerCase()
                }), {
                    [p]: t
                })
            }))
        },
        json() {
            var e = this;
            return b.call(this).then((function(t) {
                try {
                    return JSON.parse(t.toString())
                } catch (t) {
                    return y.Promise.reject(new f(`invalid json response body at ${e.url} reason: ${t.message}`, "invalid-json"))
                }
            }))
        },
        text() {
            return b.call(this).then((function(e) {
                return e.toString()
            }))
        },
        buffer() {
            return b.call(this)
        },
        textConverted() {
            var e = this;
            return b.call(this).then((function(t) {
                return function(e, t) {
                    if ("function" != typeof h) throw new Error("The package `encoding` must be installed to use the textConverted() function");
                    const r = t.get("content-type");
                    let n, i, o = "utf-8";
                    r && (n = /charset=([^;]*)/i.exec(r));
                    i = e.slice(0, 1024).toString(), !n && i && (n = /<meta.+?charset=(['"])(.+?)\1/i.exec(i));
                    !n && i && (n = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(i), n || (n = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(i), n && n.pop()), n && (n = /charset=(.*)/i.exec(n.pop())));
                    !n && i && (n = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(i));
                    n && (o = n.pop(), "gb2312" !== o && "gbk" !== o || (o = "gb18030"));
                    return h(e, "UTF-8", o).toString()
                }(t, e.headers)
            }))
        }
    }, Object.defineProperties(y.prototype, {
        body: {
            enumerable: !0
        },
        bodyUsed: {
            enumerable: !0
        },
        arrayBuffer: {
            enumerable: !0
        },
        blob: {
            enumerable: !0
        },
        json: {
            enumerable: !0
        },
        text: {
            enumerable: !0
        }
    }), y.mixIn = function(e) {
        for (const t of Object.getOwnPropertyNames(y.prototype))
            if (!(t in e)) {
                const r = Object.getOwnPropertyDescriptor(y.prototype, t);
                Object.defineProperty(e, t, r)
            }
    }, y.Promise = global.Promise;
    const T = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,
        S = /[^\t\x20-\x7e\x80-\xff]/;

    function A(e) {
        if (e = `${e}`, T.test(e) || "" === e) throw new TypeError(`${e} is not a legal HTTP header name`)
    }

    function R(e) {
        if (e = `${e}`, S.test(e)) throw new TypeError(`${e} is not a legal HTTP header value`)
    }

    function x(e, t) {
        t = t.toLowerCase();
        for (const r in e)
            if (r.toLowerCase() === t) return r
    }
    const O = Symbol("map");
    class C {
        constructor() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
            if (this[O] = Object.create(null), e instanceof C) {
                const t = e.raw(),
                    r = Object.keys(t);
                for (const e of r)
                    for (const r of t[e]) this.append(e, r)
            } else if (null == e);
            else {
                if ("object" != typeof e) throw new TypeError("Provided initializer must be an object");
                {
                    const t = e[Symbol.iterator];
                    if (null != t) {
                        if ("function" != typeof t) throw new TypeError("Header pairs must be iterable");
                        const r = [];
                        for (const t of e) {
                            if ("object" != typeof t || "function" != typeof t[Symbol.iterator]) throw new TypeError("Each header pair must be iterable");
                            r.push(Array.from(t))
                        }
                        for (const e of r) {
                            if (2 !== e.length) throw new TypeError("Each header pair must be a name/value tuple");
                            this.append(e[0], e[1])
                        }
                    } else
                        for (const t of Object.keys(e)) {
                            const r = e[t];
                            this.append(t, r)
                        }
                }
            }
        }
        get(e) {
            A(e = `${e}`);
            const t = x(this[O], e);
            return void 0 === t ? null : this[O][t].join(", ")
        }
        forEach(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                r = k(this),
                n = 0;
            for (; n < r.length;) {
                var i = r[n];
                const o = i[0],
                    s = i[1];
                e.call(t, s, o, this), r = k(this), n++
            }
        }
        set(e, t) {
            t = `${t}`, A(e = `${e}`), R(t);
            const r = x(this[O], e);
            this[O][void 0 !== r ? r : e] = [t]
        }
        append(e, t) {
            t = `${t}`, A(e = `${e}`), R(t);
            const r = x(this[O], e);
            void 0 !== r ? this[O][r].push(t) : this[O][e] = [t]
        }
        has(e) {
            return A(e = `${e}`), void 0 !== x(this[O], e)
        }
        delete(e) {
            A(e = `${e}`);
            const t = x(this[O], e);
            void 0 !== t && delete this[O][t]
        }
        raw() {
            return this[O]
        }
        keys() {
            return P(this, "key")
        }
        values() {
            return P(this, "value")
        } [Symbol.iterator]() {
            return P(this, "key+value")
        }
    }

    function k(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "key+value";
        const r = Object.keys(e[O]).sort();
        return r.map("key" === t ? function(e) {
            return e.toLowerCase()
        } : "value" === t ? function(t) {
            return e[O][t].join(", ")
        } : function(t) {
            return [t.toLowerCase(), e[O][t].join(", ")]
        })
    }
    C.prototype.entries = C.prototype[Symbol.iterator], Object.defineProperty(C.prototype, Symbol.toStringTag, {
        value: "Headers",
        writable: !1,
        enumerable: !1,
        configurable: !0
    }), Object.defineProperties(C.prototype, {
        get: {
            enumerable: !0
        },
        forEach: {
            enumerable: !0
        },
        set: {
            enumerable: !0
        },
        append: {
            enumerable: !0
        },
        has: {
            enumerable: !0
        },
        delete: {
            enumerable: !0
        },
        keys: {
            enumerable: !0
        },
        values: {
            enumerable: !0
        },
        entries: {
            enumerable: !0
        }
    });
    const j = Symbol("internal");

    function P(e, t) {
        const r = Object.create(L);
        return r[j] = {
            target: e,
            kind: t,
            index: 0
        }, r
    }
    const L = Object.setPrototypeOf({
        next() {
            if (!this || Object.getPrototypeOf(this) !== L) throw new TypeError("Value of `this` is not a HeadersIterator");
            var e = this[j];
            const t = e.target,
                r = e.kind,
                n = e.index,
                i = k(t, r);
            return n >= i.length ? {
                value: void 0,
                done: !0
            } : (this[j].index = n + 1, {
                value: i[n],
                done: !1
            })
        }
    }, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

    function $(e) {
        const t = Object.assign({
                __proto__: null
            }, e[O]),
            r = x(e[O], "Host");
        return void 0 !== r && (t[r] = t[r][0]), t
    }
    Object.defineProperty(L, Symbol.toStringTag, {
        value: "HeadersIterator",
        writable: !1,
        enumerable: !1,
        configurable: !0
    });
    const I = Symbol("Response internals"),
        N = o.STATUS_CODES;
    class B {
        constructor() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            y.call(this, e, t);
            const r = t.status || 200,
                n = new C(t.headers);
            if (null != e && !n.has("Content-Type")) {
                const t = E(e);
                t && n.append("Content-Type", t)
            }
            this[I] = {
                url: t.url,
                status: r,
                statusText: t.statusText || N[r],
                headers: n,
                counter: t.counter
            }
        }
        get url() {
            return this[I].url || ""
        }
        get status() {
            return this[I].status
        }
        get ok() {
            return this[I].status >= 200 && this[I].status < 300
        }
        get redirected() {
            return this[I].counter > 0
        }
        get statusText() {
            return this[I].statusText
        }
        get headers() {
            return this[I].headers
        }
        clone() {
            return new B(w(this), {
                url: this.url,
                status: this.status,
                statusText: this.statusText,
                headers: this.headers,
                ok: this.ok,
                redirected: this.redirected
            })
        }
    }
    y.mixIn(B.prototype), Object.defineProperties(B.prototype, {
        url: {
            enumerable: !0
        },
        status: {
            enumerable: !0
        },
        ok: {
            enumerable: !0
        },
        redirected: {
            enumerable: !0
        },
        statusText: {
            enumerable: !0
        },
        headers: {
            enumerable: !0
        },
        clone: {
            enumerable: !0
        }
    }), Object.defineProperty(B.prototype, Symbol.toStringTag, {
        value: "Response",
        writable: !1,
        enumerable: !1,
        configurable: !0
    });
    const D = Symbol("Request internals"),
        G = s.parse,
        M = s.format,
        F = "destroy" in i.Readable.prototype;

    function H(e) {
        return "object" == typeof e && "object" == typeof e[D]
    }
    class U {
        constructor(e) {
            let t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            H(e) ? t = G(e.url) : (t = e && e.href ? G(e.href) : G(`${e}`), e = {});
            let n = r.method || e.method || "GET";
            if (n = n.toUpperCase(), (null != r.body || H(e) && null !== e.body) && ("GET" === n || "HEAD" === n)) throw new TypeError("Request with GET/HEAD method cannot have body");
            let i = null != r.body ? r.body : H(e) && null !== e.body ? w(e) : null;
            y.call(this, i, {
                timeout: r.timeout || e.timeout || 0,
                size: r.size || e.size || 0
            });
            const o = new C(r.headers || e.headers || {});
            if (null != i && !o.has("Content-Type")) {
                const e = E(i);
                e && o.append("Content-Type", e)
            }
            let s = H(e) ? e.signal : null;
            if ("signal" in r && (s = r.signal), null != s && ! function(e) {
                    const t = e && "object" == typeof e && Object.getPrototypeOf(e);
                    return !(!t || "AbortSignal" !== t.constructor.name)
                }(s)) throw new TypeError("Expected signal to be an instanceof AbortSignal");
            this[D] = {
                method: n,
                redirect: r.redirect || e.redirect || "follow",
                headers: o,
                parsedURL: t,
                signal: s
            }, this.follow = void 0 !== r.follow ? r.follow : void 0 !== e.follow ? e.follow : 20, this.compress = void 0 !== r.compress ? r.compress : void 0 === e.compress || e.compress, this.counter = r.counter || e.counter || 0, this.agent = r.agent || e.agent
        }
        get method() {
            return this[D].method
        }
        get url() {
            return M(this[D].parsedURL)
        }
        get headers() {
            return this[D].headers
        }
        get redirect() {
            return this[D].redirect
        }
        get signal() {
            return this[D].signal
        }
        clone() {
            return new U(this)
        }
    }

    function z(e) {
        Error.call(this, e), this.type = "aborted", this.message = e, Error.captureStackTrace(this, this.constructor)
    }
    y.mixIn(U.prototype), Object.defineProperty(U.prototype, Symbol.toStringTag, {
        value: "Request",
        writable: !1,
        enumerable: !1,
        configurable: !0
    }), Object.defineProperties(U.prototype, {
        method: {
            enumerable: !0
        },
        url: {
            enumerable: !0
        },
        headers: {
            enumerable: !0
        },
        redirect: {
            enumerable: !0
        },
        clone: {
            enumerable: !0
        },
        signal: {
            enumerable: !0
        }
    }), z.prototype = Object.create(Error.prototype), z.prototype.constructor = z, z.prototype.name = "AbortError";
    const W = i.PassThrough,
        V = s.resolve;

    function K(e, t) {
        if (!K.Promise) throw new Error("native promise missing, set fetch.Promise to your favorite alternative");
        return y.Promise = K.Promise, new K.Promise((function(r, n) {
            const s = new U(e, t),
                c = function(e) {
                    const t = e[D].parsedURL,
                        r = new C(e[D].headers);
                    if (r.has("Accept") || r.set("Accept", "*/*"), !t.protocol || !t.hostname) throw new TypeError("Only absolute URLs are supported");
                    if (!/^https?:$/.test(t.protocol)) throw new TypeError("Only HTTP(S) protocols are supported");
                    if (e.signal && e.body instanceof i.Readable && !F) throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");
                    let n = null;
                    if (null == e.body && /^(POST|PUT)$/i.test(e.method) && (n = "0"), null != e.body) {
                        const t = q(e);
                        "number" == typeof t && (n = String(t))
                    }
                    n && r.set("Content-Length", n), r.has("User-Agent") || r.set("User-Agent", "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"), e.compress && !r.has("Accept-Encoding") && r.set("Accept-Encoding", "gzip,deflate");
                    let o = e.agent;
                    return "function" == typeof o && (o = o(t)), r.has("Connection") || o || r.set("Connection", "close"), Object.assign({}, t, {
                        method: e.method,
                        headers: $(r),
                        agent: o
                    })
                }(s),
                p = ("https:" === c.protocol ? a : o).request,
                l = s.signal;
            let d = null;
            const h = function() {
                let e = new z("The user aborted a request.");
                n(e), s.body && s.body instanceof i.Readable && s.body.destroy(e), d && d.body && d.body.emit("error", e)
            };
            if (l && l.aborted) return void h();
            const g = function() {
                    h(), b()
                },
                m = p(c);
            let y;

            function b() {
                m.abort(), l && l.removeEventListener("abort", g), clearTimeout(y)
            }
            l && l.addEventListener("abort", g), s.timeout && m.once("socket", (function(e) {
                    y = setTimeout((function() {
                        n(new f(`network timeout at: ${s.url}`, "request-timeout")), b()
                    }), s.timeout)
                })), m.on("error", (function(e) {
                    n(new f(`request to ${s.url} failed, reason: ${e.message}`, "system", e)), b()
                })), m.on("response", (function(e) {
                    clearTimeout(y);
                    const t = function(e) {
                        const t = new C;
                        for (const r of Object.keys(e))
                            if (!T.test(r))
                                if (Array.isArray(e[r]))
                                    for (const n of e[r]) S.test(n) || (void 0 === t[O][r] ? t[O][r] = [n] : t[O][r].push(n));
                                else S.test(e[r]) || (t[O][r] = [e[r]]);
                        return t
                    }(e.headers);
                    if (K.isRedirect(e.statusCode)) {
                        const i = t.get("Location"),
                            o = null === i ? null : V(s.url, i);
                        switch (s.redirect) {
                            case "error":
                                return n(new f(`uri requested responds with a redirect, redirect mode is set to error: ${s.url}`, "no-redirect")), void b();
                            case "manual":
                                if (null !== o) try {
                                    t.set("Location", o)
                                } catch (e) {
                                    n(e)
                                }
                                break;
                            case "follow":
                                if (null === o) break;
                                if (s.counter >= s.follow) return n(new f(`maximum redirect reached at: ${s.url}`, "max-redirect")), void b();
                                const i = {
                                    headers: new C(s.headers),
                                    follow: s.follow,
                                    counter: s.counter + 1,
                                    agent: s.agent,
                                    compress: s.compress,
                                    method: s.method,
                                    body: s.body,
                                    signal: s.signal,
                                    timeout: s.timeout,
                                    size: s.size
                                };
                                return 303 !== e.statusCode && s.body && null === q(s) ? (n(new f("Cannot follow redirect with body being a readable stream", "unsupported-redirect")), void b()) : (303 !== e.statusCode && (301 !== e.statusCode && 302 !== e.statusCode || "POST" !== s.method) || (i.method = "GET", i.body = void 0, i.headers.delete("content-length")), r(K(new U(o, i))), void b())
                        }
                    }
                    e.once("end", (function() {
                        l && l.removeEventListener("abort", g)
                    }));
                    let i = e.pipe(new W);
                    const o = {
                            url: s.url,
                            status: e.statusCode,
                            statusText: e.statusMessage,
                            headers: t,
                            size: s.size,
                            timeout: s.timeout,
                            counter: s.counter
                        },
                        a = t.get("Content-Encoding");
                    if (!s.compress || "HEAD" === s.method || null === a || 204 === e.statusCode || 304 === e.statusCode) return d = new B(i, o), void r(d);
                    const c = {
                        flush: u.Z_SYNC_FLUSH,
                        finishFlush: u.Z_SYNC_FLUSH
                    };
                    if ("gzip" == a || "x-gzip" == a) return i = i.pipe(u.createGunzip(c)), d = new B(i, o), void r(d);
                    if ("deflate" != a && "x-deflate" != a) {
                        if ("br" == a && "function" == typeof u.createBrotliDecompress) return i = i.pipe(u.createBrotliDecompress()), d = new B(i, o), void r(d);
                        d = new B(i, o), r(d)
                    } else {
                        e.pipe(new W).once("data", (function(e) {
                            i = 8 == (15 & e[0]) ? i.pipe(u.createInflate()) : i.pipe(u.createInflateRaw()), d = new B(i, o), r(d)
                        }))
                    }
                })),
                function(e, t) {
                    const r = t.body;
                    null === r ? e.end() : v(r) ? r.stream().pipe(e) : Buffer.isBuffer(r) ? (e.write(r), e.end()) : r.pipe(e)
                }(m, s)
        }))
    }
    K.isRedirect = function(e) {
        return 301 === e || 302 === e || 303 === e || 307 === e || 308 === e
    }, K.Promise = global.Promise, e.exports = t = K, Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = t, t.Headers = C, t.Request = U, t.Response = B, t.FetchError = f
}, function(e, t) {
    e.exports = require("zlib")
}, function(e) {
    e.exports = JSON.parse('[["a140","",62],["a180","",32],["a240","",62],["a280","",32],["a2ab","",5],["a2e3","€"],["a2ef",""],["a2fd",""],["a340","",62],["a380","",31,"　"],["a440","",62],["a480","",32],["a4f4","",10],["a540","",62],["a580","",32],["a5f7","",7],["a640","",62],["a680","",32],["a6b9","",7],["a6d9","",6],["a6ec",""],["a6f3",""],["a6f6","",8],["a740","",62],["a780","",32],["a7c2","",14],["a7f2","",12],["a896","",10],["a8bc","ḿ"],["a8bf","ǹ"],["a8c1",""],["a8ea","",20],["a958",""],["a95b",""],["a95d",""],["a989","〾⿰",11],["a997","",12],["a9f0","",14],["aaa1","",93],["aba1","",93],["aca1","",93],["ada1","",93],["aea1","",93],["afa1","",93],["d7fa","",4],["f8a1","",93],["f9a1","",93],["faa1","",93],["fba1","",93],["fca1","",93],["fda1","",93],["fe50","⺁⺄㑳㑇⺈⺋㖞㘚㘎⺌⺗㥮㤘㧏㧟㩳㧐㭎㱮㳠⺧⺪䁖䅟⺮䌷⺳⺶⺷䎱䎬⺻䏝䓖䙡䙌"],["fe80","䜣䜩䝼䞍⻊䥇䥺䥽䦂䦃䦅䦆䦟䦛䦷䦶䲣䲟䲠䲡䱷䲢䴓",6,"䶮",93],["8135f437",""]]')
}, function(e) {
    e.exports = JSON.parse('[["0","\\u0000",127],["a140","　，、。．‧；：？！︰…‥﹐﹑﹒·﹔﹕﹖﹗｜–︱—︳╴︴﹏（）︵︶｛｝︷︸〔〕︹︺【】︻︼《》︽︾〈〉︿﹀「」﹁﹂『』﹃﹄﹙﹚"],["a1a1","﹛﹜﹝﹞‘’“”〝〞‵′＃＆＊※§〃○●△▲◎☆★◇◆□■▽▼㊣℅¯￣＿ˍ﹉﹊﹍﹎﹋﹌﹟﹠﹡＋－×÷±√＜＞＝≦≧≠∞≒≡﹢",4,"～∩∪⊥∠∟⊿㏒㏑∫∮∵∴♀♂⊕⊙↑↓←→↖↗↙↘∥∣／"],["a240","＼∕﹨＄￥〒￠￡％＠℃℉﹩﹪﹫㏕㎜㎝㎞㏎㎡㎎㎏㏄°兙兛兞兝兡兣嗧瓩糎▁",7,"▏▎▍▌▋▊▉┼┴┬┤├▔─│▕┌┐└┘╭"],["a2a1","╮╰╯═╞╪╡◢◣◥◤╱╲╳０",9,"Ⅰ",9,"〡",8,"十卄卅Ａ",25,"ａ",21],["a340","ｗｘｙｚΑ",16,"Σ",6,"α",16,"σ",6,"ㄅ",10],["a3a1","ㄐ",25,"˙ˉˊˇˋ"],["a3e1","€"],["a440","一乙丁七乃九了二人儿入八几刀刁力匕十卜又三下丈上丫丸凡久么也乞于亡兀刃勺千叉口土士夕大女子孑孓寸小尢尸山川工己已巳巾干廾弋弓才"],["a4a1","丑丐不中丰丹之尹予云井互五亢仁什仃仆仇仍今介仄元允內六兮公冗凶分切刈勻勾勿化匹午升卅卞厄友及反壬天夫太夭孔少尤尺屯巴幻廿弔引心戈戶手扎支文斗斤方日曰月木欠止歹毋比毛氏水火爪父爻片牙牛犬王丙"],["a540","世丕且丘主乍乏乎以付仔仕他仗代令仙仞充兄冉冊冬凹出凸刊加功包匆北匝仟半卉卡占卯卮去可古右召叮叩叨叼司叵叫另只史叱台句叭叻四囚外"],["a5a1","央失奴奶孕它尼巨巧左市布平幼弁弘弗必戊打扔扒扑斥旦朮本未末札正母民氐永汁汀氾犯玄玉瓜瓦甘生用甩田由甲申疋白皮皿目矛矢石示禾穴立丞丟乒乓乩亙交亦亥仿伉伙伊伕伍伐休伏仲件任仰仳份企伋光兇兆先全"],["a640","共再冰列刑划刎刖劣匈匡匠印危吉吏同吊吐吁吋各向名合吃后吆吒因回囝圳地在圭圬圯圩夙多夷夸妄奸妃好她如妁字存宇守宅安寺尖屹州帆并年"],["a6a1","式弛忙忖戎戌戍成扣扛托收早旨旬旭曲曳有朽朴朱朵次此死氖汝汗汙江池汐汕污汛汍汎灰牟牝百竹米糸缶羊羽老考而耒耳聿肉肋肌臣自至臼舌舛舟艮色艾虫血行衣西阡串亨位住佇佗佞伴佛何估佐佑伽伺伸佃佔似但佣"],["a740","作你伯低伶余佝佈佚兌克免兵冶冷別判利刪刨劫助努劬匣即卵吝吭吞吾否呎吧呆呃吳呈呂君吩告吹吻吸吮吵吶吠吼呀吱含吟听囪困囤囫坊坑址坍"],["a7a1","均坎圾坐坏圻壯夾妝妒妨妞妣妙妖妍妤妓妊妥孝孜孚孛完宋宏尬局屁尿尾岐岑岔岌巫希序庇床廷弄弟彤形彷役忘忌志忍忱快忸忪戒我抄抗抖技扶抉扭把扼找批扳抒扯折扮投抓抑抆改攻攸旱更束李杏材村杜杖杞杉杆杠"],["a840","杓杗步每求汞沙沁沈沉沅沛汪決沐汰沌汨沖沒汽沃汲汾汴沆汶沍沔沘沂灶灼災灸牢牡牠狄狂玖甬甫男甸皂盯矣私秀禿究系罕肖肓肝肘肛肚育良芒"],["a8a1","芋芍見角言谷豆豕貝赤走足身車辛辰迂迆迅迄巡邑邢邪邦那酉釆里防阮阱阪阬並乖乳事些亞享京佯依侍佳使佬供例來侃佰併侈佩佻侖佾侏侑佺兔兒兕兩具其典冽函刻券刷刺到刮制剁劾劻卒協卓卑卦卷卸卹取叔受味呵"],["a940","咖呸咕咀呻呷咄咒咆呼咐呱呶和咚呢周咋命咎固垃坷坪坩坡坦坤坼夜奉奇奈奄奔妾妻委妹妮姑姆姐姍始姓姊妯妳姒姅孟孤季宗定官宜宙宛尚屈居"],["a9a1","屆岷岡岸岩岫岱岳帘帚帖帕帛帑幸庚店府底庖延弦弧弩往征彿彼忝忠忽念忿怏怔怯怵怖怪怕怡性怩怫怛或戕房戾所承拉拌拄抿拂抹拒招披拓拔拋拈抨抽押拐拙拇拍抵拚抱拘拖拗拆抬拎放斧於旺昔易昌昆昂明昀昏昕昊"],["aa40","昇服朋杭枋枕東果杳杷枇枝林杯杰板枉松析杵枚枓杼杪杲欣武歧歿氓氛泣注泳沱泌泥河沽沾沼波沫法泓沸泄油況沮泗泅泱沿治泡泛泊沬泯泜泖泠"],["aaa1","炕炎炒炊炙爬爭爸版牧物狀狎狙狗狐玩玨玟玫玥甽疝疙疚的盂盲直知矽社祀祁秉秈空穹竺糾罔羌羋者肺肥肢肱股肫肩肴肪肯臥臾舍芳芝芙芭芽芟芹花芬芥芯芸芣芰芾芷虎虱初表軋迎返近邵邸邱邶采金長門阜陀阿阻附"],["ab40","陂隹雨青非亟亭亮信侵侯便俠俑俏保促侶俘俟俊俗侮俐俄係俚俎俞侷兗冒冑冠剎剃削前剌剋則勇勉勃勁匍南卻厚叛咬哀咨哎哉咸咦咳哇哂咽咪品"],["aba1","哄哈咯咫咱咻咩咧咿囿垂型垠垣垢城垮垓奕契奏奎奐姜姘姿姣姨娃姥姪姚姦威姻孩宣宦室客宥封屎屏屍屋峙峒巷帝帥帟幽庠度建弈弭彥很待徊律徇後徉怒思怠急怎怨恍恰恨恢恆恃恬恫恪恤扁拜挖按拼拭持拮拽指拱拷"],["ac40","拯括拾拴挑挂政故斫施既春昭映昧是星昨昱昤曷柿染柱柔某柬架枯柵柩柯柄柑枴柚查枸柏柞柳枰柙柢柝柒歪殃殆段毒毗氟泉洋洲洪流津洌洱洞洗"],["aca1","活洽派洶洛泵洹洧洸洩洮洵洎洫炫為炳炬炯炭炸炮炤爰牲牯牴狩狠狡玷珊玻玲珍珀玳甚甭畏界畎畋疫疤疥疢疣癸皆皇皈盈盆盃盅省盹相眉看盾盼眇矜砂研砌砍祆祉祈祇禹禺科秒秋穿突竿竽籽紂紅紀紉紇約紆缸美羿耄"],["ad40","耐耍耑耶胖胥胚胃胄背胡胛胎胞胤胝致舢苧范茅苣苛苦茄若茂茉苒苗英茁苜苔苑苞苓苟苯茆虐虹虻虺衍衫要觔計訂訃貞負赴赳趴軍軌述迦迢迪迥"],["ada1","迭迫迤迨郊郎郁郃酋酊重閂限陋陌降面革韋韭音頁風飛食首香乘亳倌倍倣俯倦倥俸倩倖倆值借倚倒們俺倀倔倨俱倡個候倘俳修倭倪俾倫倉兼冤冥冢凍凌准凋剖剜剔剛剝匪卿原厝叟哨唐唁唷哼哥哲唆哺唔哩哭員唉哮哪"],["ae40","哦唧唇哽唏圃圄埂埔埋埃堉夏套奘奚娑娘娜娟娛娓姬娠娣娩娥娌娉孫屘宰害家宴宮宵容宸射屑展屐峭峽峻峪峨峰島崁峴差席師庫庭座弱徒徑徐恙"],["aea1","恣恥恐恕恭恩息悄悟悚悍悔悌悅悖扇拳挈拿捎挾振捕捂捆捏捉挺捐挽挪挫挨捍捌效敉料旁旅時晉晏晃晒晌晅晁書朔朕朗校核案框桓根桂桔栩梳栗桌桑栽柴桐桀格桃株桅栓栘桁殊殉殷氣氧氨氦氤泰浪涕消涇浦浸海浙涓"],["af40","浬涉浮浚浴浩涌涊浹涅浥涔烊烘烤烙烈烏爹特狼狹狽狸狷玆班琉珮珠珪珞畔畝畜畚留疾病症疲疳疽疼疹痂疸皋皰益盍盎眩真眠眨矩砰砧砸砝破砷"],["afa1","砥砭砠砟砲祕祐祠祟祖神祝祗祚秤秣秧租秦秩秘窄窈站笆笑粉紡紗紋紊素索純紐紕級紜納紙紛缺罟羔翅翁耆耘耕耙耗耽耿胱脂胰脅胭胴脆胸胳脈能脊胼胯臭臬舀舐航舫舨般芻茫荒荔荊茸荐草茵茴荏茲茹茶茗荀茱茨荃"],["b040","虔蚊蚪蚓蚤蚩蚌蚣蚜衰衷袁袂衽衹記訐討訌訕訊託訓訖訏訑豈豺豹財貢起躬軒軔軏辱送逆迷退迺迴逃追逅迸邕郡郝郢酒配酌釘針釗釜釙閃院陣陡"],["b0a1","陛陝除陘陞隻飢馬骨高鬥鬲鬼乾偺偽停假偃偌做偉健偶偎偕偵側偷偏倏偯偭兜冕凰剪副勒務勘動匐匏匙匿區匾參曼商啪啦啄啞啡啃啊唱啖問啕唯啤唸售啜唬啣唳啁啗圈國圉域堅堊堆埠埤基堂堵執培夠奢娶婁婉婦婪婀"],["b140","娼婢婚婆婊孰寇寅寄寂宿密尉專將屠屜屝崇崆崎崛崖崢崑崩崔崙崤崧崗巢常帶帳帷康庸庶庵庾張強彗彬彩彫得徙從徘御徠徜恿患悉悠您惋悴惦悽"],["b1a1","情悻悵惜悼惘惕惆惟悸惚惇戚戛扈掠控捲掖探接捷捧掘措捱掩掉掃掛捫推掄授掙採掬排掏掀捻捩捨捺敝敖救教敗啟敏敘敕敔斜斛斬族旋旌旎晝晚晤晨晦晞曹勗望梁梯梢梓梵桿桶梱梧梗械梃棄梭梆梅梔條梨梟梡梂欲殺"],["b240","毫毬氫涎涼淳淙液淡淌淤添淺清淇淋涯淑涮淞淹涸混淵淅淒渚涵淚淫淘淪深淮淨淆淄涪淬涿淦烹焉焊烽烯爽牽犁猜猛猖猓猙率琅琊球理現琍瓠瓶"],["b2a1","瓷甜產略畦畢異疏痔痕疵痊痍皎盔盒盛眷眾眼眶眸眺硫硃硎祥票祭移窒窕笠笨笛第符笙笞笮粒粗粕絆絃統紮紹紼絀細紳組累終紲紱缽羞羚翌翎習耜聊聆脯脖脣脫脩脰脤舂舵舷舶船莎莞莘荸莢莖莽莫莒莊莓莉莠荷荻荼"],["b340","莆莧處彪蛇蛀蚶蛄蚵蛆蛋蚱蚯蛉術袞袈被袒袖袍袋覓規訪訝訣訥許設訟訛訢豉豚販責貫貨貪貧赧赦趾趺軛軟這逍通逗連速逝逐逕逞造透逢逖逛途"],["b3a1","部郭都酗野釵釦釣釧釭釩閉陪陵陳陸陰陴陶陷陬雀雪雩章竟頂頃魚鳥鹵鹿麥麻傢傍傅備傑傀傖傘傚最凱割剴創剩勞勝勛博厥啻喀喧啼喊喝喘喂喜喪喔喇喋喃喳單喟唾喲喚喻喬喱啾喉喫喙圍堯堪場堤堰報堡堝堠壹壺奠"],["b440","婷媚婿媒媛媧孳孱寒富寓寐尊尋就嵌嵐崴嵇巽幅帽幀幃幾廊廁廂廄弼彭復循徨惑惡悲悶惠愜愣惺愕惰惻惴慨惱愎惶愉愀愒戟扉掣掌描揀揩揉揆揍"],["b4a1","插揣提握揖揭揮捶援揪換摒揚揹敞敦敢散斑斐斯普晰晴晶景暑智晾晷曾替期朝棺棕棠棘棗椅棟棵森棧棹棒棲棣棋棍植椒椎棉棚楮棻款欺欽殘殖殼毯氮氯氬港游湔渡渲湧湊渠渥渣減湛湘渤湖湮渭渦湯渴湍渺測湃渝渾滋"],["b540","溉渙湎湣湄湲湩湟焙焚焦焰無然煮焜牌犄犀猶猥猴猩琺琪琳琢琥琵琶琴琯琛琦琨甥甦畫番痢痛痣痙痘痞痠登發皖皓皴盜睏短硝硬硯稍稈程稅稀窘"],["b5a1","窗窖童竣等策筆筐筒答筍筋筏筑粟粥絞結絨絕紫絮絲絡給絢絰絳善翔翕耋聒肅腕腔腋腑腎脹腆脾腌腓腴舒舜菩萃菸萍菠菅萋菁華菱菴著萊菰萌菌菽菲菊萸萎萄菜萇菔菟虛蛟蛙蛭蛔蛛蛤蛐蛞街裁裂袱覃視註詠評詞証詁"],["b640","詔詛詐詆訴診訶詖象貂貯貼貳貽賁費賀貴買貶貿貸越超趁跎距跋跚跑跌跛跆軻軸軼辜逮逵週逸進逶鄂郵鄉郾酣酥量鈔鈕鈣鈉鈞鈍鈐鈇鈑閔閏開閑"],["b6a1","間閒閎隊階隋陽隅隆隍陲隄雁雅雄集雇雯雲韌項順須飧飪飯飩飲飭馮馭黃黍黑亂傭債傲傳僅傾催傷傻傯僇剿剷剽募勦勤勢勣匯嗟嗨嗓嗦嗎嗜嗇嗑嗣嗤嗯嗚嗡嗅嗆嗥嗉園圓塞塑塘塗塚塔填塌塭塊塢塒塋奧嫁嫉嫌媾媽媼"],["b740","媳嫂媲嵩嵯幌幹廉廈弒彙徬微愚意慈感想愛惹愁愈慎慌慄慍愾愴愧愍愆愷戡戢搓搾搞搪搭搽搬搏搜搔損搶搖搗搆敬斟新暗暉暇暈暖暄暘暍會榔業"],["b7a1","楚楷楠楔極椰概楊楨楫楞楓楹榆楝楣楛歇歲毀殿毓毽溢溯滓溶滂源溝滇滅溥溘溼溺溫滑準溜滄滔溪溧溴煎煙煩煤煉照煜煬煦煌煥煞煆煨煖爺牒猷獅猿猾瑯瑚瑕瑟瑞瑁琿瑙瑛瑜當畸瘀痰瘁痲痱痺痿痴痳盞盟睛睫睦睞督"],["b840","睹睪睬睜睥睨睢矮碎碰碗碘碌碉硼碑碓硿祺祿禁萬禽稜稚稠稔稟稞窟窠筷節筠筮筧粱粳粵經絹綑綁綏絛置罩罪署義羨群聖聘肆肄腱腰腸腥腮腳腫"],["b8a1","腹腺腦舅艇蒂葷落萱葵葦葫葉葬葛萼萵葡董葩葭葆虞虜號蛹蜓蜈蜇蜀蛾蛻蜂蜃蜆蜊衙裟裔裙補裘裝裡裊裕裒覜解詫該詳試詩詰誇詼詣誠話誅詭詢詮詬詹詻訾詨豢貊貉賊資賈賄貲賃賂賅跡跟跨路跳跺跪跤跦躲較載軾輊"],["b940","辟農運遊道遂達逼違遐遇遏過遍遑逾遁鄒鄗酬酪酩釉鈷鉗鈸鈽鉀鈾鉛鉋鉤鉑鈴鉉鉍鉅鈹鈿鉚閘隘隔隕雍雋雉雊雷電雹零靖靴靶預頑頓頊頒頌飼飴"],["b9a1","飽飾馳馱馴髡鳩麂鼎鼓鼠僧僮僥僖僭僚僕像僑僱僎僩兢凳劃劂匱厭嗾嘀嘛嘗嗽嘔嘆嘉嘍嘎嗷嘖嘟嘈嘐嗶團圖塵塾境墓墊塹墅塽壽夥夢夤奪奩嫡嫦嫩嫗嫖嫘嫣孵寞寧寡寥實寨寢寤察對屢嶄嶇幛幣幕幗幔廓廖弊彆彰徹慇"],["ba40","愿態慷慢慣慟慚慘慵截撇摘摔撤摸摟摺摑摧搴摭摻敲斡旗旖暢暨暝榜榨榕槁榮槓構榛榷榻榫榴槐槍榭槌榦槃榣歉歌氳漳演滾漓滴漩漾漠漬漏漂漢"],["baa1","滿滯漆漱漸漲漣漕漫漯澈漪滬漁滲滌滷熔熙煽熊熄熒爾犒犖獄獐瑤瑣瑪瑰瑭甄疑瘧瘍瘋瘉瘓盡監瞄睽睿睡磁碟碧碳碩碣禎福禍種稱窪窩竭端管箕箋筵算箝箔箏箸箇箄粹粽精綻綰綜綽綾綠緊綴網綱綺綢綿綵綸維緒緇綬"],["bb40","罰翠翡翟聞聚肇腐膀膏膈膊腿膂臧臺與舔舞艋蓉蒿蓆蓄蒙蒞蒲蒜蓋蒸蓀蓓蒐蒼蓑蓊蜿蜜蜻蜢蜥蜴蜘蝕蜷蜩裳褂裴裹裸製裨褚裯誦誌語誣認誡誓誤"],["bba1","說誥誨誘誑誚誧豪貍貌賓賑賒赫趙趕跼輔輒輕輓辣遠遘遜遣遙遞遢遝遛鄙鄘鄞酵酸酷酴鉸銀銅銘銖鉻銓銜銨鉼銑閡閨閩閣閥閤隙障際雌雒需靼鞅韶頗領颯颱餃餅餌餉駁骯骰髦魁魂鳴鳶鳳麼鼻齊億儀僻僵價儂儈儉儅凜"],["bc40","劇劈劉劍劊勰厲嘮嘻嘹嘲嘿嘴嘩噓噎噗噴嘶嘯嘰墀墟增墳墜墮墩墦奭嬉嫻嬋嫵嬌嬈寮寬審寫層履嶝嶔幢幟幡廢廚廟廝廣廠彈影德徵慶慧慮慝慕憂"],["bca1","慼慰慫慾憧憐憫憎憬憚憤憔憮戮摩摯摹撞撲撈撐撰撥撓撕撩撒撮播撫撚撬撙撢撳敵敷數暮暫暴暱樣樟槨樁樞標槽模樓樊槳樂樅槭樑歐歎殤毅毆漿潼澄潑潦潔澆潭潛潸潮澎潺潰潤澗潘滕潯潠潟熟熬熱熨牖犛獎獗瑩璋璃"],["bd40","瑾璀畿瘠瘩瘟瘤瘦瘡瘢皚皺盤瞎瞇瞌瞑瞋磋磅確磊碾磕碼磐稿稼穀稽稷稻窯窮箭箱範箴篆篇篁箠篌糊締練緯緻緘緬緝編緣線緞緩綞緙緲緹罵罷羯"],["bda1","翩耦膛膜膝膠膚膘蔗蔽蔚蓮蔬蔭蔓蔑蔣蔡蔔蓬蔥蓿蔆螂蝴蝶蝠蝦蝸蝨蝙蝗蝌蝓衛衝褐複褒褓褕褊誼諒談諄誕請諸課諉諂調誰論諍誶誹諛豌豎豬賠賞賦賤賬賭賢賣賜質賡赭趟趣踫踐踝踢踏踩踟踡踞躺輝輛輟輩輦輪輜輞"],["be40","輥適遮遨遭遷鄰鄭鄧鄱醇醉醋醃鋅銻銷鋪銬鋤鋁銳銼鋒鋇鋰銲閭閱霄霆震霉靠鞍鞋鞏頡頫頜颳養餓餒餘駝駐駟駛駑駕駒駙骷髮髯鬧魅魄魷魯鴆鴉"],["bea1","鴃麩麾黎墨齒儒儘儔儐儕冀冪凝劑劓勳噙噫噹噩噤噸噪器噥噱噯噬噢噶壁墾壇壅奮嬝嬴學寰導彊憲憑憩憊懍憶憾懊懈戰擅擁擋撻撼據擄擇擂操撿擒擔撾整曆曉暹曄曇暸樽樸樺橙橫橘樹橄橢橡橋橇樵機橈歙歷氅濂澱澡"],["bf40","濃澤濁澧澳激澹澶澦澠澴熾燉燐燒燈燕熹燎燙燜燃燄獨璜璣璘璟璞瓢甌甍瘴瘸瘺盧盥瞠瞞瞟瞥磨磚磬磧禦積穎穆穌穋窺篙簑築篤篛篡篩篦糕糖縊"],["bfa1","縑縈縛縣縞縝縉縐罹羲翰翱翮耨膳膩膨臻興艘艙蕊蕙蕈蕨蕩蕃蕉蕭蕪蕞螃螟螞螢融衡褪褲褥褫褡親覦諦諺諫諱謀諜諧諮諾謁謂諷諭諳諶諼豫豭貓賴蹄踱踴蹂踹踵輻輯輸輳辨辦遵遴選遲遼遺鄴醒錠錶鋸錳錯錢鋼錫錄錚"],["c040","錐錦錡錕錮錙閻隧隨險雕霎霑霖霍霓霏靛靜靦鞘頰頸頻頷頭頹頤餐館餞餛餡餚駭駢駱骸骼髻髭鬨鮑鴕鴣鴦鴨鴒鴛默黔龍龜優償儡儲勵嚎嚀嚐嚅嚇"],["c0a1","嚏壕壓壑壎嬰嬪嬤孺尷屨嶼嶺嶽嶸幫彌徽應懂懇懦懋戲戴擎擊擘擠擰擦擬擱擢擭斂斃曙曖檀檔檄檢檜櫛檣橾檗檐檠歜殮毚氈濘濱濟濠濛濤濫濯澀濬濡濩濕濮濰燧營燮燦燥燭燬燴燠爵牆獰獲璩環璦璨癆療癌盪瞳瞪瞰瞬"],["c140","瞧瞭矯磷磺磴磯礁禧禪穗窿簇簍篾篷簌篠糠糜糞糢糟糙糝縮績繆縷縲繃縫總縱繅繁縴縹繈縵縿縯罄翳翼聱聲聰聯聳臆臃膺臂臀膿膽臉膾臨舉艱薪"],["c1a1","薄蕾薜薑薔薯薛薇薨薊虧蟀蟑螳蟒蟆螫螻螺蟈蟋褻褶襄褸褽覬謎謗謙講謊謠謝謄謐豁谿豳賺賽購賸賻趨蹉蹋蹈蹊轄輾轂轅輿避遽還邁邂邀鄹醣醞醜鍍鎂錨鍵鍊鍥鍋錘鍾鍬鍛鍰鍚鍔闊闋闌闈闆隱隸雖霜霞鞠韓顆颶餵騁"],["c240","駿鮮鮫鮪鮭鴻鴿麋黏點黜黝黛鼾齋叢嚕嚮壙壘嬸彝懣戳擴擲擾攆擺擻擷斷曜朦檳檬櫃檻檸櫂檮檯歟歸殯瀉瀋濾瀆濺瀑瀏燻燼燾燸獷獵璧璿甕癖癘"],["c2a1","癒瞽瞿瞻瞼礎禮穡穢穠竄竅簫簧簪簞簣簡糧織繕繞繚繡繒繙罈翹翻職聶臍臏舊藏薩藍藐藉薰薺薹薦蟯蟬蟲蟠覆覲觴謨謹謬謫豐贅蹙蹣蹦蹤蹟蹕軀轉轍邇邃邈醫醬釐鎔鎊鎖鎢鎳鎮鎬鎰鎘鎚鎗闔闖闐闕離雜雙雛雞霤鞣鞦"],["c340","鞭韹額顏題顎顓颺餾餿餽餮馥騎髁鬃鬆魏魎魍鯊鯉鯽鯈鯀鵑鵝鵠黠鼕鼬儳嚥壞壟壢寵龐廬懲懷懶懵攀攏曠曝櫥櫝櫚櫓瀛瀟瀨瀚瀝瀕瀘爆爍牘犢獸"],["c3a1","獺璽瓊瓣疇疆癟癡矇礙禱穫穩簾簿簸簽簷籀繫繭繹繩繪羅繳羶羹羸臘藩藝藪藕藤藥藷蟻蠅蠍蟹蟾襠襟襖襞譁譜識證譚譎譏譆譙贈贊蹼蹲躇蹶蹬蹺蹴轔轎辭邊邋醱醮鏡鏑鏟鏃鏈鏜鏝鏖鏢鏍鏘鏤鏗鏨關隴難霪霧靡韜韻類"],["c440","願顛颼饅饉騖騙鬍鯨鯧鯖鯛鶉鵡鵲鵪鵬麒麗麓麴勸嚨嚷嚶嚴嚼壤孀孃孽寶巉懸懺攘攔攙曦朧櫬瀾瀰瀲爐獻瓏癢癥礦礪礬礫竇競籌籃籍糯糰辮繽繼"],["c4a1","纂罌耀臚艦藻藹蘑藺蘆蘋蘇蘊蠔蠕襤覺觸議譬警譯譟譫贏贍躉躁躅躂醴釋鐘鐃鏽闡霰飄饒饑馨騫騰騷騵鰓鰍鹹麵黨鼯齟齣齡儷儸囁囀囂夔屬巍懼懾攝攜斕曩櫻欄櫺殲灌爛犧瓖瓔癩矓籐纏續羼蘗蘭蘚蠣蠢蠡蠟襪襬覽譴"],["c540","護譽贓躊躍躋轟辯醺鐮鐳鐵鐺鐸鐲鐫闢霸霹露響顧顥饗驅驃驀騾髏魔魑鰭鰥鶯鶴鷂鶸麝黯鼙齜齦齧儼儻囈囊囉孿巔巒彎懿攤權歡灑灘玀瓤疊癮癬"],["c5a1","禳籠籟聾聽臟襲襯觼讀贖贗躑躓轡酈鑄鑑鑒霽霾韃韁顫饕驕驍髒鬚鱉鰱鰾鰻鷓鷗鼴齬齪龔囌巖戀攣攫攪曬欐瓚竊籤籣籥纓纖纔臢蘸蘿蠱變邐邏鑣鑠鑤靨顯饜驚驛驗髓體髑鱔鱗鱖鷥麟黴囑壩攬灞癱癲矗罐羈蠶蠹衢讓讒"],["c640","讖艷贛釀鑪靂靈靄韆顰驟鬢魘鱟鷹鷺鹼鹽鼇齷齲廳欖灣籬籮蠻觀躡釁鑲鑰顱饞髖鬣黌灤矚讚鑷韉驢驥纜讜躪釅鑽鑾鑼鱷鱸黷豔鑿鸚爨驪鬱鸛鸞籲"],["c940","乂乜凵匚厂万丌乇亍囗兀屮彳丏冇与丮亓仂仉仈冘勼卬厹圠夃夬尐巿旡殳毌气爿丱丼仨仜仩仡仝仚刌匜卌圢圣夗夯宁宄尒尻屴屳帄庀庂忉戉扐氕"],["c9a1","氶汃氿氻犮犰玊禸肊阞伎优伬仵伔仱伀价伈伝伂伅伢伓伄仴伒冱刓刉刐劦匢匟卍厊吇囡囟圮圪圴夼妀奼妅奻奾奷奿孖尕尥屼屺屻屾巟幵庄异弚彴忕忔忏扜扞扤扡扦扢扙扠扚扥旯旮朾朹朸朻机朿朼朳氘汆汒汜汏汊汔汋"],["ca40","汌灱牞犴犵玎甪癿穵网艸艼芀艽艿虍襾邙邗邘邛邔阢阤阠阣佖伻佢佉体佤伾佧佒佟佁佘伭伳伿佡冏冹刜刞刡劭劮匉卣卲厎厏吰吷吪呔呅吙吜吥吘"],["caa1","吽呏呁吨吤呇囮囧囥坁坅坌坉坋坒夆奀妦妘妠妗妎妢妐妏妧妡宎宒尨尪岍岏岈岋岉岒岊岆岓岕巠帊帎庋庉庌庈庍弅弝彸彶忒忑忐忭忨忮忳忡忤忣忺忯忷忻怀忴戺抃抌抎抏抔抇扱扻扺扰抁抈扷扽扲扴攷旰旴旳旲旵杅杇"],["cb40","杙杕杌杈杝杍杚杋毐氙氚汸汧汫沄沋沏汱汯汩沚汭沇沕沜汦汳汥汻沎灴灺牣犿犽狃狆狁犺狅玕玗玓玔玒町甹疔疕皁礽耴肕肙肐肒肜芐芏芅芎芑芓"],["cba1","芊芃芄豸迉辿邟邡邥邞邧邠阰阨阯阭丳侘佼侅佽侀侇佶佴侉侄佷佌侗佪侚佹侁佸侐侜侔侞侒侂侕佫佮冞冼冾刵刲刳剆刱劼匊匋匼厒厔咇呿咁咑咂咈呫呺呾呥呬呴呦咍呯呡呠咘呣呧呤囷囹坯坲坭坫坱坰坶垀坵坻坳坴坢"],["cc40","坨坽夌奅妵妺姏姎妲姌姁妶妼姃姖妱妽姀姈妴姇孢孥宓宕屄屇岮岤岠岵岯岨岬岟岣岭岢岪岧岝岥岶岰岦帗帔帙弨弢弣弤彔徂彾彽忞忥怭怦怙怲怋"],["cca1","怴怊怗怳怚怞怬怢怍怐怮怓怑怌怉怜戔戽抭抴拑抾抪抶拊抮抳抯抻抩抰抸攽斨斻昉旼昄昒昈旻昃昋昍昅旽昑昐曶朊枅杬枎枒杶杻枘枆构杴枍枌杺枟枑枙枃杽极杸杹枔欥殀歾毞氝沓泬泫泮泙沶泔沭泧沷泐泂沺泃泆泭泲"],["cd40","泒泝沴沊沝沀泞泀洰泍泇沰泹泏泩泑炔炘炅炓炆炄炑炖炂炚炃牪狖狋狘狉狜狒狔狚狌狑玤玡玭玦玢玠玬玝瓝瓨甿畀甾疌疘皯盳盱盰盵矸矼矹矻矺"],["cda1","矷祂礿秅穸穻竻籵糽耵肏肮肣肸肵肭舠芠苀芫芚芘芛芵芧芮芼芞芺芴芨芡芩苂芤苃芶芢虰虯虭虮豖迒迋迓迍迖迕迗邲邴邯邳邰阹阽阼阺陃俍俅俓侲俉俋俁俔俜俙侻侳俛俇俖侺俀侹俬剄剉勀勂匽卼厗厖厙厘咺咡咭咥哏"],["ce40","哃茍咷咮哖咶哅哆咠呰咼咢咾呲哞咰垵垞垟垤垌垗垝垛垔垘垏垙垥垚垕壴复奓姡姞姮娀姱姝姺姽姼姶姤姲姷姛姩姳姵姠姾姴姭宨屌峐峘峌峗峋峛"],["cea1","峞峚峉峇峊峖峓峔峏峈峆峎峟峸巹帡帢帣帠帤庰庤庢庛庣庥弇弮彖徆怷怹恔恲恞恅恓恇恉恛恌恀恂恟怤恄恘恦恮扂扃拏挍挋拵挎挃拫拹挏挌拸拶挀挓挔拺挕拻拰敁敃斪斿昶昡昲昵昜昦昢昳昫昺昝昴昹昮朏朐柁柲柈枺"],["cf40","柜枻柸柘柀枷柅柫柤柟枵柍枳柷柶柮柣柂枹柎柧柰枲柼柆柭柌枮柦柛柺柉柊柃柪柋欨殂殄殶毖毘毠氠氡洨洴洭洟洼洿洒洊泚洳洄洙洺洚洑洀洝浂"],["cfa1","洁洘洷洃洏浀洇洠洬洈洢洉洐炷炟炾炱炰炡炴炵炩牁牉牊牬牰牳牮狊狤狨狫狟狪狦狣玅珌珂珈珅玹玶玵玴珫玿珇玾珃珆玸珋瓬瓮甮畇畈疧疪癹盄眈眃眄眅眊盷盻盺矧矨砆砑砒砅砐砏砎砉砃砓祊祌祋祅祄秕种秏秖秎窀"],["d040","穾竑笀笁籺籸籹籿粀粁紃紈紁罘羑羍羾耇耎耏耔耷胘胇胠胑胈胂胐胅胣胙胜胊胕胉胏胗胦胍臿舡芔苙苾苹茇苨茀苕茺苫苖苴苬苡苲苵茌苻苶苰苪"],["d0a1","苤苠苺苳苭虷虴虼虳衁衎衧衪衩觓訄訇赲迣迡迮迠郱邽邿郕郅邾郇郋郈釔釓陔陏陑陓陊陎倞倅倇倓倢倰倛俵俴倳倷倬俶俷倗倜倠倧倵倯倱倎党冔冓凊凄凅凈凎剡剚剒剞剟剕剢勍匎厞唦哢唗唒哧哳哤唚哿唄唈哫唑唅哱"],["d140","唊哻哷哸哠唎唃唋圁圂埌堲埕埒垺埆垽垼垸垶垿埇埐垹埁夎奊娙娖娭娮娕娏娗娊娞娳孬宧宭宬尃屖屔峬峿峮峱峷崀峹帩帨庨庮庪庬弳弰彧恝恚恧"],["d1a1","恁悢悈悀悒悁悝悃悕悛悗悇悜悎戙扆拲挐捖挬捄捅挶捃揤挹捋捊挼挩捁挴捘捔捙挭捇挳捚捑挸捗捀捈敊敆旆旃旄旂晊晟晇晑朒朓栟栚桉栲栳栻桋桏栖栱栜栵栫栭栯桎桄栴栝栒栔栦栨栮桍栺栥栠欬欯欭欱欴歭肂殈毦毤"],["d240","毨毣毢毧氥浺浣浤浶洍浡涒浘浢浭浯涑涍淯浿涆浞浧浠涗浰浼浟涂涘洯浨涋浾涀涄洖涃浻浽浵涐烜烓烑烝烋缹烢烗烒烞烠烔烍烅烆烇烚烎烡牂牸"],["d2a1","牷牶猀狺狴狾狶狳狻猁珓珙珥珖玼珧珣珩珜珒珛珔珝珚珗珘珨瓞瓟瓴瓵甡畛畟疰痁疻痄痀疿疶疺皊盉眝眛眐眓眒眣眑眕眙眚眢眧砣砬砢砵砯砨砮砫砡砩砳砪砱祔祛祏祜祓祒祑秫秬秠秮秭秪秜秞秝窆窉窅窋窌窊窇竘笐"],["d340","笄笓笅笏笈笊笎笉笒粄粑粊粌粈粍粅紞紝紑紎紘紖紓紟紒紏紌罜罡罞罠罝罛羖羒翃翂翀耖耾耹胺胲胹胵脁胻脀舁舯舥茳茭荄茙荑茥荖茿荁茦茜茢"],["d3a1","荂荎茛茪茈茼荍茖茤茠茷茯茩荇荅荌荓茞茬荋茧荈虓虒蚢蚨蚖蚍蚑蚞蚇蚗蚆蚋蚚蚅蚥蚙蚡蚧蚕蚘蚎蚝蚐蚔衃衄衭衵衶衲袀衱衿衯袃衾衴衼訒豇豗豻貤貣赶赸趵趷趶軑軓迾迵适迿迻逄迼迶郖郠郙郚郣郟郥郘郛郗郜郤酐"],["d440","酎酏釕釢釚陜陟隼飣髟鬯乿偰偪偡偞偠偓偋偝偲偈偍偁偛偊偢倕偅偟偩偫偣偤偆偀偮偳偗偑凐剫剭剬剮勖勓匭厜啵啶唼啍啐唴唪啑啢唶唵唰啒啅"],["d4a1","唌唲啥啎唹啈唭唻啀啋圊圇埻堔埢埶埜埴堀埭埽堈埸堋埳埏堇埮埣埲埥埬埡堎埼堐埧堁堌埱埩埰堍堄奜婠婘婕婧婞娸娵婭婐婟婥婬婓婤婗婃婝婒婄婛婈媎娾婍娹婌婰婩婇婑婖婂婜孲孮寁寀屙崞崋崝崚崠崌崨崍崦崥崏"],["d540","崰崒崣崟崮帾帴庱庴庹庲庳弶弸徛徖徟悊悐悆悾悰悺惓惔惏惤惙惝惈悱惛悷惊悿惃惍惀挲捥掊掂捽掽掞掭掝掗掫掎捯掇掐据掯捵掜捭掮捼掤挻掟"],["d5a1","捸掅掁掑掍捰敓旍晥晡晛晙晜晢朘桹梇梐梜桭桮梮梫楖桯梣梬梩桵桴梲梏桷梒桼桫桲梪梀桱桾梛梖梋梠梉梤桸桻梑梌梊桽欶欳欷欸殑殏殍殎殌氪淀涫涴涳湴涬淩淢涷淶淔渀淈淠淟淖涾淥淜淝淛淴淊涽淭淰涺淕淂淏淉"],["d640","淐淲淓淽淗淍淣涻烺焍烷焗烴焌烰焄烳焐烼烿焆焓焀烸烶焋焂焎牾牻牼牿猝猗猇猑猘猊猈狿猏猞玈珶珸珵琄琁珽琇琀珺珼珿琌琋珴琈畤畣痎痒痏"],["d6a1","痋痌痑痐皏皉盓眹眯眭眱眲眴眳眽眥眻眵硈硒硉硍硊硌砦硅硐祤祧祩祪祣祫祡离秺秸秶秷窏窔窐笵筇笴笥笰笢笤笳笘笪笝笱笫笭笯笲笸笚笣粔粘粖粣紵紽紸紶紺絅紬紩絁絇紾紿絊紻紨罣羕羜羝羛翊翋翍翐翑翇翏翉耟"],["d740","耞耛聇聃聈脘脥脙脛脭脟脬脞脡脕脧脝脢舑舸舳舺舴舲艴莐莣莨莍荺荳莤荴莏莁莕莙荵莔莩荽莃莌莝莛莪莋荾莥莯莈莗莰荿莦莇莮荶莚虙虖蚿蚷"],["d7a1","蛂蛁蛅蚺蚰蛈蚹蚳蚸蛌蚴蚻蚼蛃蚽蚾衒袉袕袨袢袪袚袑袡袟袘袧袙袛袗袤袬袌袓袎覂觖觙觕訰訧訬訞谹谻豜豝豽貥赽赻赹趼跂趹趿跁軘軞軝軜軗軠軡逤逋逑逜逌逡郯郪郰郴郲郳郔郫郬郩酖酘酚酓酕釬釴釱釳釸釤釹釪"],["d840","釫釷釨釮镺閆閈陼陭陫陱陯隿靪頄飥馗傛傕傔傞傋傣傃傌傎傝偨傜傒傂傇兟凔匒匑厤厧喑喨喥喭啷噅喢喓喈喏喵喁喣喒喤啽喌喦啿喕喡喎圌堩堷"],["d8a1","堙堞堧堣堨埵塈堥堜堛堳堿堶堮堹堸堭堬堻奡媯媔媟婺媢媞婸媦婼媥媬媕媮娷媄媊媗媃媋媩婻婽媌媜媏媓媝寪寍寋寔寑寊寎尌尰崷嵃嵫嵁嵋崿崵嵑嵎嵕崳崺嵒崽崱嵙嵂崹嵉崸崼崲崶嵀嵅幄幁彘徦徥徫惉悹惌惢惎惄愔"],["d940","惲愊愖愅惵愓惸惼惾惁愃愘愝愐惿愄愋扊掔掱掰揎揥揨揯揃撝揳揊揠揶揕揲揵摡揟掾揝揜揄揘揓揂揇揌揋揈揰揗揙攲敧敪敤敜敨敥斌斝斞斮旐旒"],["d9a1","晼晬晻暀晱晹晪晲朁椌棓椄棜椪棬棪棱椏棖棷棫棤棶椓椐棳棡椇棌椈楰梴椑棯棆椔棸棐棽棼棨椋椊椗棎棈棝棞棦棴棑椆棔棩椕椥棇欹欻欿欼殔殗殙殕殽毰毲毳氰淼湆湇渟湉溈渼渽湅湢渫渿湁湝湳渜渳湋湀湑渻渃渮湞"],["da40","湨湜湡渱渨湠湱湫渹渢渰湓湥渧湸湤湷湕湹湒湦渵渶湚焠焞焯烻焮焱焣焥焢焲焟焨焺焛牋牚犈犉犆犅犋猒猋猰猢猱猳猧猲猭猦猣猵猌琮琬琰琫琖"],["daa1","琚琡琭琱琤琣琝琩琠琲瓻甯畯畬痧痚痡痦痝痟痤痗皕皒盚睆睇睄睍睅睊睎睋睌矞矬硠硤硥硜硭硱硪确硰硩硨硞硢祴祳祲祰稂稊稃稌稄窙竦竤筊笻筄筈筌筎筀筘筅粢粞粨粡絘絯絣絓絖絧絪絏絭絜絫絒絔絩絑絟絎缾缿罥"],["db40","罦羢羠羡翗聑聏聐胾胔腃腊腒腏腇脽腍脺臦臮臷臸臹舄舼舽舿艵茻菏菹萣菀菨萒菧菤菼菶萐菆菈菫菣莿萁菝菥菘菿菡菋菎菖菵菉萉萏菞萑萆菂菳"],["dba1","菕菺菇菑菪萓菃菬菮菄菻菗菢萛菛菾蛘蛢蛦蛓蛣蛚蛪蛝蛫蛜蛬蛩蛗蛨蛑衈衖衕袺裗袹袸裀袾袶袼袷袽袲褁裉覕覘覗觝觚觛詎詍訹詙詀詗詘詄詅詒詈詑詊詌詏豟貁貀貺貾貰貹貵趄趀趉跘跓跍跇跖跜跏跕跙跈跗跅軯軷軺"],["dc40","軹軦軮軥軵軧軨軶軫軱軬軴軩逭逴逯鄆鄬鄄郿郼鄈郹郻鄁鄀鄇鄅鄃酡酤酟酢酠鈁鈊鈥鈃鈚鈦鈏鈌鈀鈒釿釽鈆鈄鈧鈂鈜鈤鈙鈗鈅鈖镻閍閌閐隇陾隈"],["dca1","隉隃隀雂雈雃雱雰靬靰靮頇颩飫鳦黹亃亄亶傽傿僆傮僄僊傴僈僂傰僁傺傱僋僉傶傸凗剺剸剻剼嗃嗛嗌嗐嗋嗊嗝嗀嗔嗄嗩喿嗒喍嗏嗕嗢嗖嗈嗲嗍嗙嗂圔塓塨塤塏塍塉塯塕塎塝塙塥塛堽塣塱壼嫇嫄嫋媺媸媱媵媰媿嫈媻嫆"],["dd40","媷嫀嫊媴媶嫍媹媐寖寘寙尟尳嵱嵣嵊嵥嵲嵬嵞嵨嵧嵢巰幏幎幊幍幋廅廌廆廋廇彀徯徭惷慉慊愫慅愶愲愮慆愯慏愩慀戠酨戣戥戤揅揱揫搐搒搉搠搤"],["dda1","搳摃搟搕搘搹搷搢搣搌搦搰搨摁搵搯搊搚摀搥搧搋揧搛搮搡搎敯斒旓暆暌暕暐暋暊暙暔晸朠楦楟椸楎楢楱椿楅楪椹楂楗楙楺楈楉椵楬椳椽楥棰楸椴楩楀楯楄楶楘楁楴楌椻楋椷楜楏楑椲楒椯楻椼歆歅歃歂歈歁殛嗀毻毼"],["de40","毹毷毸溛滖滈溏滀溟溓溔溠溱溹滆滒溽滁溞滉溷溰滍溦滏溲溾滃滜滘溙溒溎溍溤溡溿溳滐滊溗溮溣煇煔煒煣煠煁煝煢煲煸煪煡煂煘煃煋煰煟煐煓"],["dea1","煄煍煚牏犍犌犑犐犎猼獂猻猺獀獊獉瑄瑊瑋瑒瑑瑗瑀瑏瑐瑎瑂瑆瑍瑔瓡瓿瓾瓽甝畹畷榃痯瘏瘃痷痾痼痹痸瘐痻痶痭痵痽皙皵盝睕睟睠睒睖睚睩睧睔睙睭矠碇碚碔碏碄碕碅碆碡碃硹碙碀碖硻祼禂祽祹稑稘稙稒稗稕稢稓"],["df40","稛稐窣窢窞竫筦筤筭筴筩筲筥筳筱筰筡筸筶筣粲粴粯綈綆綀綍絿綅絺綎絻綃絼綌綔綄絽綒罭罫罧罨罬羦羥羧翛翜耡腤腠腷腜腩腛腢腲朡腞腶腧腯"],["dfa1","腄腡舝艉艄艀艂艅蓱萿葖葶葹蒏蒍葥葑葀蒆葧萰葍葽葚葙葴葳葝蔇葞萷萺萴葺葃葸萲葅萩菙葋萯葂萭葟葰萹葎葌葒葯蓅蒎萻葇萶萳葨葾葄萫葠葔葮葐蜋蜄蛷蜌蛺蛖蛵蝍蛸蜎蜉蜁蛶蜍蜅裖裋裍裎裞裛裚裌裐覅覛觟觥觤"],["e040","觡觠觢觜触詶誆詿詡訿詷誂誄詵誃誁詴詺谼豋豊豥豤豦貆貄貅賌赨赩趑趌趎趏趍趓趔趐趒跰跠跬跱跮跐跩跣跢跧跲跫跴輆軿輁輀輅輇輈輂輋遒逿"],["e0a1","遄遉逽鄐鄍鄏鄑鄖鄔鄋鄎酮酯鉈鉒鈰鈺鉦鈳鉥鉞銃鈮鉊鉆鉭鉬鉏鉠鉧鉯鈶鉡鉰鈱鉔鉣鉐鉲鉎鉓鉌鉖鈲閟閜閞閛隒隓隑隗雎雺雽雸雵靳靷靸靲頏頍頎颬飶飹馯馲馰馵骭骫魛鳪鳭鳧麀黽僦僔僗僨僳僛僪僝僤僓僬僰僯僣僠"],["e140","凘劀劁勩勫匰厬嘧嘕嘌嘒嗼嘏嘜嘁嘓嘂嗺嘝嘄嗿嗹墉塼墐墘墆墁塿塴墋塺墇墑墎塶墂墈塻墔墏壾奫嫜嫮嫥嫕嫪嫚嫭嫫嫳嫢嫠嫛嫬嫞嫝嫙嫨嫟孷寠"],["e1a1","寣屣嶂嶀嵽嶆嵺嶁嵷嶊嶉嶈嵾嵼嶍嵹嵿幘幙幓廘廑廗廎廜廕廙廒廔彄彃彯徶愬愨慁慞慱慳慒慓慲慬憀慴慔慺慛慥愻慪慡慖戩戧戫搫摍摛摝摴摶摲摳摽摵摦撦摎撂摞摜摋摓摠摐摿搿摬摫摙摥摷敳斠暡暠暟朅朄朢榱榶槉"],["e240","榠槎榖榰榬榼榑榙榎榧榍榩榾榯榿槄榽榤槔榹槊榚槏榳榓榪榡榞槙榗榐槂榵榥槆歊歍歋殞殟殠毃毄毾滎滵滱漃漥滸漷滻漮漉潎漙漚漧漘漻漒滭漊"],["e2a1","漶潳滹滮漭潀漰漼漵滫漇漎潃漅滽滶漹漜滼漺漟漍漞漈漡熇熐熉熀熅熂熏煻熆熁熗牄牓犗犕犓獃獍獑獌瑢瑳瑱瑵瑲瑧瑮甀甂甃畽疐瘖瘈瘌瘕瘑瘊瘔皸瞁睼瞅瞂睮瞀睯睾瞃碲碪碴碭碨硾碫碞碥碠碬碢碤禘禊禋禖禕禔禓"],["e340","禗禈禒禐稫穊稰稯稨稦窨窫窬竮箈箜箊箑箐箖箍箌箛箎箅箘劄箙箤箂粻粿粼粺綧綷緂綣綪緁緀緅綝緎緄緆緋緌綯綹綖綼綟綦綮綩綡緉罳翢翣翥翞"],["e3a1","耤聝聜膉膆膃膇膍膌膋舕蒗蒤蒡蒟蒺蓎蓂蒬蒮蒫蒹蒴蓁蓍蒪蒚蒱蓐蒝蒧蒻蒢蒔蓇蓌蒛蒩蒯蒨蓖蒘蒶蓏蒠蓗蓔蓒蓛蒰蒑虡蜳蜣蜨蝫蝀蜮蜞蜡蜙蜛蝃蜬蝁蜾蝆蜠蜲蜪蜭蜼蜒蜺蜱蜵蝂蜦蜧蜸蜤蜚蜰蜑裷裧裱裲裺裾裮裼裶裻"],["e440","裰裬裫覝覡覟覞觩觫觨誫誙誋誒誏誖谽豨豩賕賏賗趖踉踂跿踍跽踊踃踇踆踅跾踀踄輐輑輎輍鄣鄜鄠鄢鄟鄝鄚鄤鄡鄛酺酲酹酳銥銤鉶銛鉺銠銔銪銍"],["e4a1","銦銚銫鉹銗鉿銣鋮銎銂銕銢鉽銈銡銊銆銌銙銧鉾銇銩銝銋鈭隞隡雿靘靽靺靾鞃鞀鞂靻鞄鞁靿韎韍頖颭颮餂餀餇馝馜駃馹馻馺駂馽駇骱髣髧鬾鬿魠魡魟鳱鳲鳵麧僿儃儰僸儆儇僶僾儋儌僽儊劋劌勱勯噈噂噌嘵噁噊噉噆噘"],["e540","噚噀嘳嘽嘬嘾嘸嘪嘺圚墫墝墱墠墣墯墬墥墡壿嫿嫴嫽嫷嫶嬃嫸嬂嫹嬁嬇嬅嬏屧嶙嶗嶟嶒嶢嶓嶕嶠嶜嶡嶚嶞幩幝幠幜緳廛廞廡彉徲憋憃慹憱憰憢憉"],["e5a1","憛憓憯憭憟憒憪憡憍慦憳戭摮摰撖撠撅撗撜撏撋撊撌撣撟摨撱撘敶敺敹敻斲斳暵暰暩暲暷暪暯樀樆樗槥槸樕槱槤樠槿槬槢樛樝槾樧槲槮樔槷槧橀樈槦槻樍槼槫樉樄樘樥樏槶樦樇槴樖歑殥殣殢殦氁氀毿氂潁漦潾澇濆澒"],["e640","澍澉澌潢潏澅潚澖潶潬澂潕潲潒潐潗澔澓潝漀潡潫潽潧澐潓澋潩潿澕潣潷潪潻熲熯熛熰熠熚熩熵熝熥熞熤熡熪熜熧熳犘犚獘獒獞獟獠獝獛獡獚獙"],["e6a1","獢璇璉璊璆璁瑽璅璈瑼瑹甈甇畾瘥瘞瘙瘝瘜瘣瘚瘨瘛皜皝皞皛瞍瞏瞉瞈磍碻磏磌磑磎磔磈磃磄磉禚禡禠禜禢禛歶稹窲窴窳箷篋箾箬篎箯箹篊箵糅糈糌糋緷緛緪緧緗緡縃緺緦緶緱緰緮緟罶羬羰羭翭翫翪翬翦翨聤聧膣膟"],["e740","膞膕膢膙膗舖艏艓艒艐艎艑蔤蔻蔏蔀蔩蔎蔉蔍蔟蔊蔧蔜蓻蔫蓺蔈蔌蓴蔪蓲蔕蓷蓫蓳蓼蔒蓪蓩蔖蓾蔨蔝蔮蔂蓽蔞蓶蔱蔦蓧蓨蓰蓯蓹蔘蔠蔰蔋蔙蔯虢"],["e7a1","蝖蝣蝤蝷蟡蝳蝘蝔蝛蝒蝡蝚蝑蝞蝭蝪蝐蝎蝟蝝蝯蝬蝺蝮蝜蝥蝏蝻蝵蝢蝧蝩衚褅褌褔褋褗褘褙褆褖褑褎褉覢覤覣觭觰觬諏諆誸諓諑諔諕誻諗誾諀諅諘諃誺誽諙谾豍貏賥賟賙賨賚賝賧趠趜趡趛踠踣踥踤踮踕踛踖踑踙踦踧"],["e840","踔踒踘踓踜踗踚輬輤輘輚輠輣輖輗遳遰遯遧遫鄯鄫鄩鄪鄲鄦鄮醅醆醊醁醂醄醀鋐鋃鋄鋀鋙銶鋏鋱鋟鋘鋩鋗鋝鋌鋯鋂鋨鋊鋈鋎鋦鋍鋕鋉鋠鋞鋧鋑鋓"],["e8a1","銵鋡鋆銴镼閬閫閮閰隤隢雓霅霈霂靚鞊鞎鞈韐韏頞頝頦頩頨頠頛頧颲餈飺餑餔餖餗餕駜駍駏駓駔駎駉駖駘駋駗駌骳髬髫髳髲髱魆魃魧魴魱魦魶魵魰魨魤魬鳼鳺鳽鳿鳷鴇鴀鳹鳻鴈鴅鴄麃黓鼏鼐儜儓儗儚儑凞匴叡噰噠噮"],["e940","噳噦噣噭噲噞噷圜圛壈墽壉墿墺壂墼壆嬗嬙嬛嬡嬔嬓嬐嬖嬨嬚嬠嬞寯嶬嶱嶩嶧嶵嶰嶮嶪嶨嶲嶭嶯嶴幧幨幦幯廩廧廦廨廥彋徼憝憨憖懅憴懆懁懌憺"],["e9a1","憿憸憌擗擖擐擏擉撽撉擃擛擳擙攳敿敼斢曈暾曀曊曋曏暽暻暺曌朣樴橦橉橧樲橨樾橝橭橶橛橑樨橚樻樿橁橪橤橐橏橔橯橩橠樼橞橖橕橍橎橆歕歔歖殧殪殫毈毇氄氃氆澭濋澣濇澼濎濈潞濄澽澞濊澨瀄澥澮澺澬澪濏澿澸"],["ea40","澢濉澫濍澯澲澰燅燂熿熸燖燀燁燋燔燊燇燏熽燘熼燆燚燛犝犞獩獦獧獬獥獫獪瑿璚璠璔璒璕璡甋疀瘯瘭瘱瘽瘳瘼瘵瘲瘰皻盦瞚瞝瞡瞜瞛瞢瞣瞕瞙"],["eaa1","瞗磝磩磥磪磞磣磛磡磢磭磟磠禤穄穈穇窶窸窵窱窷篞篣篧篝篕篥篚篨篹篔篪篢篜篫篘篟糒糔糗糐糑縒縡縗縌縟縠縓縎縜縕縚縢縋縏縖縍縔縥縤罃罻罼罺羱翯耪耩聬膱膦膮膹膵膫膰膬膴膲膷膧臲艕艖艗蕖蕅蕫蕍蕓蕡蕘"],["eb40","蕀蕆蕤蕁蕢蕄蕑蕇蕣蔾蕛蕱蕎蕮蕵蕕蕧蕠薌蕦蕝蕔蕥蕬虣虥虤螛螏螗螓螒螈螁螖螘蝹螇螣螅螐螑螝螄螔螜螚螉褞褦褰褭褮褧褱褢褩褣褯褬褟觱諠"],["eba1","諢諲諴諵諝謔諤諟諰諈諞諡諨諿諯諻貑貒貐賵賮賱賰賳赬赮趥趧踳踾踸蹀蹅踶踼踽蹁踰踿躽輶輮輵輲輹輷輴遶遹遻邆郺鄳鄵鄶醓醐醑醍醏錧錞錈錟錆錏鍺錸錼錛錣錒錁鍆錭錎錍鋋錝鋺錥錓鋹鋷錴錂錤鋿錩錹錵錪錔錌"],["ec40","錋鋾錉錀鋻錖閼闍閾閹閺閶閿閵閽隩雔霋霒霐鞙鞗鞔韰韸頵頯頲餤餟餧餩馞駮駬駥駤駰駣駪駩駧骹骿骴骻髶髺髹髷鬳鮀鮅鮇魼魾魻鮂鮓鮒鮐魺鮕"],["eca1","魽鮈鴥鴗鴠鴞鴔鴩鴝鴘鴢鴐鴙鴟麈麆麇麮麭黕黖黺鼒鼽儦儥儢儤儠儩勴嚓嚌嚍嚆嚄嚃噾嚂噿嚁壖壔壏壒嬭嬥嬲嬣嬬嬧嬦嬯嬮孻寱寲嶷幬幪徾徻懃憵憼懧懠懥懤懨懞擯擩擣擫擤擨斁斀斶旚曒檍檖檁檥檉檟檛檡檞檇檓檎"],["ed40","檕檃檨檤檑橿檦檚檅檌檒歛殭氉濌澩濴濔濣濜濭濧濦濞濲濝濢濨燡燱燨燲燤燰燢獳獮獯璗璲璫璐璪璭璱璥璯甐甑甒甏疄癃癈癉癇皤盩瞵瞫瞲瞷瞶"],["eda1","瞴瞱瞨矰磳磽礂磻磼磲礅磹磾礄禫禨穜穛穖穘穔穚窾竀竁簅簏篲簀篿篻簎篴簋篳簂簉簃簁篸篽簆篰篱簐簊糨縭縼繂縳顈縸縪繉繀繇縩繌縰縻縶繄縺罅罿罾罽翴翲耬膻臄臌臊臅臇膼臩艛艚艜薃薀薏薧薕薠薋薣蕻薤薚薞"],["ee40","蕷蕼薉薡蕺蕸蕗薎薖薆薍薙薝薁薢薂薈薅蕹蕶薘薐薟虨螾螪螭蟅螰螬螹螵螼螮蟉蟃蟂蟌螷螯蟄蟊螴螶螿螸螽蟞螲褵褳褼褾襁襒褷襂覭覯覮觲觳謞"],["eea1","謘謖謑謅謋謢謏謒謕謇謍謈謆謜謓謚豏豰豲豱豯貕貔賹赯蹎蹍蹓蹐蹌蹇轃轀邅遾鄸醚醢醛醙醟醡醝醠鎡鎃鎯鍤鍖鍇鍼鍘鍜鍶鍉鍐鍑鍠鍭鎏鍌鍪鍹鍗鍕鍒鍏鍱鍷鍻鍡鍞鍣鍧鎀鍎鍙闇闀闉闃闅閷隮隰隬霠霟霘霝霙鞚鞡鞜"],["ef40","鞞鞝韕韔韱顁顄顊顉顅顃餥餫餬餪餳餲餯餭餱餰馘馣馡騂駺駴駷駹駸駶駻駽駾駼騃骾髾髽鬁髼魈鮚鮨鮞鮛鮦鮡鮥鮤鮆鮢鮠鮯鴳鵁鵧鴶鴮鴯鴱鴸鴰"],["efa1","鵅鵂鵃鴾鴷鵀鴽翵鴭麊麉麍麰黈黚黻黿鼤鼣鼢齔龠儱儭儮嚘嚜嚗嚚嚝嚙奰嬼屩屪巀幭幮懘懟懭懮懱懪懰懫懖懩擿攄擽擸攁攃擼斔旛曚曛曘櫅檹檽櫡櫆檺檶檷櫇檴檭歞毉氋瀇瀌瀍瀁瀅瀔瀎濿瀀濻瀦濼濷瀊爁燿燹爃燽獶"],["f040","璸瓀璵瓁璾璶璻瓂甔甓癜癤癙癐癓癗癚皦皽盬矂瞺磿礌礓礔礉礐礒礑禭禬穟簜簩簙簠簟簭簝簦簨簢簥簰繜繐繖繣繘繢繟繑繠繗繓羵羳翷翸聵臑臒"],["f0a1","臐艟艞薴藆藀藃藂薳薵薽藇藄薿藋藎藈藅薱薶藒蘤薸薷薾虩蟧蟦蟢蟛蟫蟪蟥蟟蟳蟤蟔蟜蟓蟭蟘蟣螤蟗蟙蠁蟴蟨蟝襓襋襏襌襆襐襑襉謪謧謣謳謰謵譇謯謼謾謱謥謷謦謶謮謤謻謽謺豂豵貙貘貗賾贄贂贀蹜蹢蹠蹗蹖蹞蹥蹧"],["f140","蹛蹚蹡蹝蹩蹔轆轇轈轋鄨鄺鄻鄾醨醥醧醯醪鎵鎌鎒鎷鎛鎝鎉鎧鎎鎪鎞鎦鎕鎈鎙鎟鎍鎱鎑鎲鎤鎨鎴鎣鎥闒闓闑隳雗雚巂雟雘雝霣霢霥鞬鞮鞨鞫鞤鞪"],["f1a1","鞢鞥韗韙韖韘韺顐顑顒颸饁餼餺騏騋騉騍騄騑騊騅騇騆髀髜鬈鬄鬅鬩鬵魊魌魋鯇鯆鯃鮿鯁鮵鮸鯓鮶鯄鮹鮽鵜鵓鵏鵊鵛鵋鵙鵖鵌鵗鵒鵔鵟鵘鵚麎麌黟鼁鼀鼖鼥鼫鼪鼩鼨齌齕儴儵劖勷厴嚫嚭嚦嚧嚪嚬壚壝壛夒嬽嬾嬿巃幰"],["f240","徿懻攇攐攍攉攌攎斄旞旝曞櫧櫠櫌櫑櫙櫋櫟櫜櫐櫫櫏櫍櫞歠殰氌瀙瀧瀠瀖瀫瀡瀢瀣瀩瀗瀤瀜瀪爌爊爇爂爅犥犦犤犣犡瓋瓅璷瓃甖癠矉矊矄矱礝礛"],["f2a1","礡礜礗礞禰穧穨簳簼簹簬簻糬糪繶繵繸繰繷繯繺繲繴繨罋罊羃羆羷翽翾聸臗臕艤艡艣藫藱藭藙藡藨藚藗藬藲藸藘藟藣藜藑藰藦藯藞藢蠀蟺蠃蟶蟷蠉蠌蠋蠆蟼蠈蟿蠊蠂襢襚襛襗襡襜襘襝襙覈覷覶觶譐譈譊譀譓譖譔譋譕"],["f340","譑譂譒譗豃豷豶貚贆贇贉趬趪趭趫蹭蹸蹳蹪蹯蹻軂轒轑轏轐轓辴酀鄿醰醭鏞鏇鏏鏂鏚鏐鏹鏬鏌鏙鎩鏦鏊鏔鏮鏣鏕鏄鏎鏀鏒鏧镽闚闛雡霩霫霬霨霦"],["f3a1","鞳鞷鞶韝韞韟顜顙顝顗颿颽颻颾饈饇饃馦馧騚騕騥騝騤騛騢騠騧騣騞騜騔髂鬋鬊鬎鬌鬷鯪鯫鯠鯞鯤鯦鯢鯰鯔鯗鯬鯜鯙鯥鯕鯡鯚鵷鶁鶊鶄鶈鵱鶀鵸鶆鶋鶌鵽鵫鵴鵵鵰鵩鶅鵳鵻鶂鵯鵹鵿鶇鵨麔麑黀黼鼭齀齁齍齖齗齘匷嚲"],["f440","嚵嚳壣孅巆巇廮廯忀忁懹攗攖攕攓旟曨曣曤櫳櫰櫪櫨櫹櫱櫮櫯瀼瀵瀯瀷瀴瀱灂瀸瀿瀺瀹灀瀻瀳灁爓爔犨獽獼璺皫皪皾盭矌矎矏矍矲礥礣礧礨礤礩"],["f4a1","禲穮穬穭竷籉籈籊籇籅糮繻繾纁纀羺翿聹臛臙舋艨艩蘢藿蘁藾蘛蘀藶蘄蘉蘅蘌藽蠙蠐蠑蠗蠓蠖襣襦覹觷譠譪譝譨譣譥譧譭趮躆躈躄轙轖轗轕轘轚邍酃酁醷醵醲醳鐋鐓鏻鐠鐏鐔鏾鐕鐐鐨鐙鐍鏵鐀鏷鐇鐎鐖鐒鏺鐉鏸鐊鏿"],["f540","鏼鐌鏶鐑鐆闞闠闟霮霯鞹鞻韽韾顠顢顣顟飁飂饐饎饙饌饋饓騲騴騱騬騪騶騩騮騸騭髇髊髆鬐鬒鬑鰋鰈鯷鰅鰒鯸鱀鰇鰎鰆鰗鰔鰉鶟鶙鶤鶝鶒鶘鶐鶛"],["f5a1","鶠鶔鶜鶪鶗鶡鶚鶢鶨鶞鶣鶿鶩鶖鶦鶧麙麛麚黥黤黧黦鼰鼮齛齠齞齝齙龑儺儹劘劗囃嚽嚾孈孇巋巏廱懽攛欂櫼欃櫸欀灃灄灊灈灉灅灆爝爚爙獾甗癪矐礭礱礯籔籓糲纊纇纈纋纆纍罍羻耰臝蘘蘪蘦蘟蘣蘜蘙蘧蘮蘡蘠蘩蘞蘥"],["f640","蠩蠝蠛蠠蠤蠜蠫衊襭襩襮襫觺譹譸譅譺譻贐贔趯躎躌轞轛轝酆酄酅醹鐿鐻鐶鐩鐽鐼鐰鐹鐪鐷鐬鑀鐱闥闤闣霵霺鞿韡顤飉飆飀饘饖騹騽驆驄驂驁騺"],["f6a1","騿髍鬕鬗鬘鬖鬺魒鰫鰝鰜鰬鰣鰨鰩鰤鰡鶷鶶鶼鷁鷇鷊鷏鶾鷅鷃鶻鶵鷎鶹鶺鶬鷈鶱鶭鷌鶳鷍鶲鹺麜黫黮黭鼛鼘鼚鼱齎齥齤龒亹囆囅囋奱孋孌巕巑廲攡攠攦攢欋欈欉氍灕灖灗灒爞爟犩獿瓘瓕瓙瓗癭皭礵禴穰穱籗籜籙籛籚"],["f740","糴糱纑罏羇臞艫蘴蘵蘳蘬蘲蘶蠬蠨蠦蠪蠥襱覿覾觻譾讄讂讆讅譿贕躕躔躚躒躐躖躗轠轢酇鑌鑐鑊鑋鑏鑇鑅鑈鑉鑆霿韣顪顩飋饔饛驎驓驔驌驏驈驊"],["f7a1","驉驒驐髐鬙鬫鬻魖魕鱆鱈鰿鱄鰹鰳鱁鰼鰷鰴鰲鰽鰶鷛鷒鷞鷚鷋鷐鷜鷑鷟鷩鷙鷘鷖鷵鷕鷝麶黰鼵鼳鼲齂齫龕龢儽劙壨壧奲孍巘蠯彏戁戃戄攩攥斖曫欑欒欏毊灛灚爢玂玁玃癰矔籧籦纕艬蘺虀蘹蘼蘱蘻蘾蠰蠲蠮蠳襶襴襳觾"],["f840","讌讎讋讈豅贙躘轤轣醼鑢鑕鑝鑗鑞韄韅頀驖驙鬞鬟鬠鱒鱘鱐鱊鱍鱋鱕鱙鱌鱎鷻鷷鷯鷣鷫鷸鷤鷶鷡鷮鷦鷲鷰鷢鷬鷴鷳鷨鷭黂黐黲黳鼆鼜鼸鼷鼶齃齏"],["f8a1","齱齰齮齯囓囍孎屭攭曭曮欓灟灡灝灠爣瓛瓥矕礸禷禶籪纗羉艭虃蠸蠷蠵衋讔讕躞躟躠躝醾醽釂鑫鑨鑩雥靆靃靇韇韥驞髕魙鱣鱧鱦鱢鱞鱠鸂鷾鸇鸃鸆鸅鸀鸁鸉鷿鷽鸄麠鼞齆齴齵齶囔攮斸欘欙欗欚灢爦犪矘矙礹籩籫糶纚"],["f940","纘纛纙臠臡虆虇虈襹襺襼襻觿讘讙躥躤躣鑮鑭鑯鑱鑳靉顲饟鱨鱮鱭鸋鸍鸐鸏鸒鸑麡黵鼉齇齸齻齺齹圞灦籯蠼趲躦釃鑴鑸鑶鑵驠鱴鱳鱱鱵鸔鸓黶鼊"],["f9a1","龤灨灥糷虪蠾蠽蠿讞貜躩軉靋顳顴飌饡馫驤驦驧鬤鸕鸗齈戇欞爧虌躨钂钀钁驩驨鬮鸙爩虋讟钃鱹麷癵驫鱺鸝灩灪麤齾齉龘碁銹裏墻恒粧嫺╔╦╗╠╬╣╚╩╝╒╤╕╞╪╡╘╧╛╓╥╖╟╫╢╙╨╜║═╭╮╰╯▓"]]')
}, function(e, t, r) {
    e.exports = function(e) {
        const t = n.bind(null, e || []);
        return t.plugin = i.bind(null, e || []), t
    };
    const n = r(148),
        i = r(157)
}, function(e, t) {
    e.exports = function(e) {
        return new Buffer(e).toString("base64")
    }
}, function(e, t, r) {
    e.exports = function(e, t) {
        const r = t.headers;
        let i = e.request.endpoint(t).url;
        return {
            [Symbol.asyncIterator]: () => ({
                next: () => i ? e.request({
                    url: i,
                    headers: r
                }).then((t => (n(e, i, t), i = ((t.headers.link || "").match(/<([^>]+)>;\s*rel="next"/) || [])[1], {
                    value: t
                }))) : Promise.resolve({
                    done: !0
                })
            })
        }
    };
    const n = r(171)
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(1),
        i = r(4);
    t.Context = class {
        constructor() {
            if (this.payload = {}, process.env.GITHUB_EVENT_PATH)
                if (n.existsSync(process.env.GITHUB_EVENT_PATH)) this.payload = JSON.parse(n.readFileSync(process.env.GITHUB_EVENT_PATH, {
                    encoding: "utf8"
                }));
                else {
                    const e = process.env.GITHUB_EVENT_PATH;
                    process.stdout.write(`GITHUB_EVENT_PATH ${e} does not exist${i.EOL}`)
                } this.eventName = process.env.GITHUB_EVENT_NAME, this.sha = process.env.GITHUB_SHA, this.ref = process.env.GITHUB_REF, this.workflow = process.env.GITHUB_WORKFLOW, this.action = process.env.GITHUB_ACTION, this.actor = process.env.GITHUB_ACTOR
        }
        get issue() {
            const e = this.payload;
            return Object.assign(Object.assign({}, this.repo), {
                number: (e.issue || e.pullRequest || e).number
            })
        }
        get repo() {
            if (process.env.GITHUB_REPOSITORY) {
                const [e, t] = process.env.GITHUB_REPOSITORY.split("/");
                return {
                    owner: e,
                    repo: t
                }
            }
            if (this.payload.repository) return {
                owner: this.payload.repository.owner.login,
                repo: this.payload.repository.name
            };
            throw new Error("context.repo requires a GITHUB_REPOSITORY environment variable like 'owner/repo'")
        }
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t) {
        return function() {
            for (var r = new Array(arguments.length), n = 0; n < r.length; n++) r[n] = arguments[n];
            return e.apply(t, r)
        }
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        return !(!e || !e.__CANCEL__)
    }
}, function(e, t, r) {
    "use strict";
    var n = r(2),
        i = r(199),
        o = {
            "Content-Type": "application/x-www-form-urlencoded"
        };

    function s(e, t) {
        !n.isUndefined(e) && n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
    }
    var a, u = {
        adapter: ("undefined" != typeof XMLHttpRequest ? a = r(200) : "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process) && (a = r(206)), a),
        transformRequest: [function(e, t) {
            return i(t, "Accept"), i(t, "Content-Type"), n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e) ? e : n.isArrayBufferView(e) ? e.buffer : n.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : n.isObject(e) ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
        }],
        transformResponse: [function(e) {
            if ("string" == typeof e) try {
                e = JSON.parse(e)
            } catch (e) {}
            return e
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        validateStatus: function(e) {
            return e >= 200 && e < 300
        }
    };
    u.headers = {
        common: {
            Accept: "application/json, text/plain, */*"
        }
    }, n.forEach(["delete", "get", "head"], (function(e) {
        u.headers[e] = {}
    })), n.forEach(["post", "put", "patch"], (function(e) {
        u.headers[e] = n.merge(o)
    })), e.exports = u
}, function(e, t, r) {
    "use strict";
    var n = r(32);
    e.exports = function(e, t, r) {
        var i = r.config.validateStatus;
        r.status && i && !i(r.status) ? t(n("Request failed with status code " + r.status, r.config, null, r.request, r)) : e(r)
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r, n, i) {
        return e.config = t, r && (e.code = r), e.request = n, e.response = i, e.isAxiosError = !0, e.toJSON = function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code
            }
        }, e
    }
}, function(e, t, r) {
    "use strict";
    var n = r(202),
        i = r(203);
    e.exports = function(e, t) {
        return e && !n(t) ? i(e, t) : t
    }
}, function(e, t, r) {
    var n = r(28),
        i = n.URL,
        o = r(27),
        s = r(29),
        a = r(3).Writable,
        u = r(43),
        c = r(207),
        p = Object.create(null);
    ["abort", "aborted", "connect", "error", "socket", "timeout"].forEach((function(e) {
        p[e] = function(t, r, n) {
            this._redirectable.emit(e, t, r, n)
        }
    }));
    var l = E("ERR_FR_REDIRECTION_FAILURE", ""),
        d = E("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded"),
        f = E("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit"),
        h = E("ERR_STREAM_WRITE_AFTER_END", "write after end");

    function g(e, t) {
        a.call(this), this._sanitizeOptions(e), this._options = e, this._ended = !1, this._ending = !1, this._redirectCount = 0, this._redirects = [], this._requestBodyLength = 0, this._requestBodyBuffers = [], t && this.on("response", t);
        var r = this;
        this._onNativeResponse = function(e) {
            r._processResponse(e)
        }, this._performRequest()
    }

    function m(e, t) {
        clearTimeout(e._timeout), e._timeout = setTimeout((function() {
            e.emit("timeout")
        }), t)
    }

    function y() {
        clearTimeout(this._timeout)
    }

    function b(e) {
        var t = {
                maxRedirects: 21,
                maxBodyLength: 10485760
            },
            r = {};
        return Object.keys(e).forEach((function(o) {
            var s = o + ":",
                a = r[s] = e[o],
                p = t[o] = Object.create(a);
            p.request = function(e, o, a) {
                if ("string" == typeof e) {
                    var p = e;
                    try {
                        e = v(new i(p))
                    } catch (t) {
                        e = n.parse(p)
                    }
                } else i && e instanceof i ? e = v(e) : (a = o, o = e, e = {
                    protocol: s
                });
                return "function" == typeof o && (a = o, o = null), (o = Object.assign({
                    maxRedirects: t.maxRedirects,
                    maxBodyLength: t.maxBodyLength
                }, e, o)).nativeProtocols = r, u.equal(o.protocol, s, "protocol mismatch"), c("options", o), new g(o, a)
            }, p.get = function(e, t, r) {
                var n = p.request(e, t, r);
                return n.end(), n
            }
        })), t
    }

    function _() {}

    function v(e) {
        var t = {
            protocol: e.protocol,
            hostname: e.hostname.startsWith("[") ? e.hostname.slice(1, -1) : e.hostname,
            hash: e.hash,
            search: e.search,
            pathname: e.pathname,
            path: e.pathname + e.search,
            href: e.href
        };
        return "" !== e.port && (t.port = Number(e.port)), t
    }

    function w(e, t) {
        var r;
        for (var n in t) e.test(n) && (r = t[n], delete t[n]);
        return r
    }

    function E(e, t) {
        function r(e) {
            Error.captureStackTrace(this, this.constructor), this.message = e || t
        }
        return r.prototype = new Error, r.prototype.constructor = r, r.prototype.name = "Error [" + e + "]", r.prototype.code = e, r
    }
    g.prototype = Object.create(a.prototype), g.prototype.write = function(e, t, r) {
        if (this._ending) throw new h;
        if (!("string" == typeof e || "object" == typeof e && "length" in e)) throw new TypeError("data should be a string, Buffer or Uint8Array");
        "function" == typeof t && (r = t, t = null), 0 !== e.length ? this._requestBodyLength + e.length <= this._options.maxBodyLength ? (this._requestBodyLength += e.length, this._requestBodyBuffers.push({
            data: e,
            encoding: t
        }), this._currentRequest.write(e, t, r)) : (this.emit("error", new f), this.abort()) : r && r()
    }, g.prototype.end = function(e, t, r) {
        if ("function" == typeof e ? (r = e, e = t = null) : "function" == typeof t && (r = t, t = null), e) {
            var n = this,
                i = this._currentRequest;
            this.write(e, t, (function() {
                n._ended = !0, i.end(null, null, r)
            })), this._ending = !0
        } else this._ended = this._ending = !0, this._currentRequest.end(null, null, r)
    }, g.prototype.setHeader = function(e, t) {
        this._options.headers[e] = t, this._currentRequest.setHeader(e, t)
    }, g.prototype.removeHeader = function(e) {
        delete this._options.headers[e], this._currentRequest.removeHeader(e)
    }, g.prototype.setTimeout = function(e, t) {
        if (t && this.once("timeout", t), this.socket) m(this, e);
        else {
            var r = this;
            this._currentRequest.once("socket", (function() {
                m(r, e)
            }))
        }
        return this.once("response", y), this.once("error", y), this
    }, ["abort", "flushHeaders", "getHeader", "setNoDelay", "setSocketKeepAlive"].forEach((function(e) {
        g.prototype[e] = function(t, r) {
            return this._currentRequest[e](t, r)
        }
    })), ["aborted", "connection", "socket"].forEach((function(e) {
        Object.defineProperty(g.prototype, e, {
            get: function() {
                return this._currentRequest[e]
            }
        })
    })), g.prototype._sanitizeOptions = function(e) {
        if (e.headers || (e.headers = {}), e.host && (e.hostname || (e.hostname = e.host), delete e.host), !e.pathname && e.path) {
            var t = e.path.indexOf("?");
            t < 0 ? e.pathname = e.path : (e.pathname = e.path.substring(0, t), e.search = e.path.substring(t))
        }
    }, g.prototype._performRequest = function() {
        var e = this._options.protocol,
            t = this._options.nativeProtocols[e];
        if (t) {
            if (this._options.agents) {
                var r = e.substr(0, e.length - 1);
                this._options.agent = this._options.agents[r]
            }
            var i = this._currentRequest = t.request(this._options, this._onNativeResponse);
            for (var o in this._currentUrl = n.format(this._options), i._redirectable = this, p) o && i.on(o, p[o]);
            if (this._isRedirect) {
                var s = 0,
                    a = this,
                    u = this._requestBodyBuffers;
                ! function e(t) {
                    if (i === a._currentRequest)
                        if (t) a.emit("error", t);
                        else if (s < u.length) {
                        var r = u[s++];
                        i.finished || i.write(r.data, r.encoding, e)
                    } else a._ended && i.end()
                }()
            }
        } else this.emit("error", new TypeError("Unsupported protocol " + e))
    }, g.prototype._processResponse = function(e) {
        var t = e.statusCode;
        this._options.trackRedirects && this._redirects.push({
            url: this._currentUrl,
            headers: e.headers,
            statusCode: t
        });
        var r = e.headers.location;
        if (r && !1 !== this._options.followRedirects && t >= 300 && t < 400) {
            if (this._currentRequest.removeAllListeners(), this._currentRequest.on("error", _), this._currentRequest.abort(), e.destroy(), ++this._redirectCount > this._options.maxRedirects) return void this.emit("error", new d);
            ((301 === t || 302 === t) && "POST" === this._options.method || 303 === t && !/^(?:GET|HEAD)$/.test(this._options.method)) && (this._options.method = "GET", this._requestBodyBuffers = [], w(/^content-/i, this._options.headers));
            var i = w(/^host$/i, this._options.headers) || n.parse(this._currentUrl).hostname,
                o = n.resolve(this._currentUrl, r);
            c("redirecting to", o), this._isRedirect = !0;
            var s = n.parse(o);
            if (Object.assign(this._options, s), s.hostname !== i && w(/^authorization$/i, this._options.headers), "function" == typeof this._options.beforeRedirect) {
                var a = {
                    headers: e.headers
                };
                try {
                    this._options.beforeRedirect.call(null, this._options, a)
                } catch (e) {
                    return void this.emit("error", e)
                }
                this._sanitizeOptions(this._options)
            }
            try {
                this._performRequest()
            } catch (e) {
                var u = new l("Redirected request failed: " + e.message);
                u.cause = e, this.emit("error", u)
            }
        } else e.responseUrl = this._currentUrl, e.redirects = this._redirects, this.emit("response", e), this._requestBodyBuffers = []
    }, e.exports = b({
        http: o,
        https: s
    }), e.exports.wrap = b
}, function(e, t, r) {
    e.exports = function(e) {
        function t(e) {
            let r, i = null;

            function o(...e) {
                if (!o.enabled) return;
                const n = o,
                    i = Number(new Date),
                    s = i - (r || i);
                n.diff = s, n.prev = r, n.curr = i, r = i, e[0] = t.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                let a = 0;
                e[0] = e[0].replace(/%([a-zA-Z%])/g, ((r, i) => {
                    if ("%%" === r) return "%";
                    a++;
                    const o = t.formatters[i];
                    if ("function" == typeof o) {
                        const t = e[a];
                        r = o.call(n, t), e.splice(a, 1), a--
                    }
                    return r
                })), t.formatArgs.call(n, e);
                (n.log || t.log).apply(n, e)
            }
            return o.namespace = e, o.useColors = t.useColors(), o.color = t.selectColor(e), o.extend = n, o.destroy = t.destroy, Object.defineProperty(o, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () => null === i ? t.enabled(e) : i,
                set: e => {
                    i = e
                }
            }), "function" == typeof t.init && t.init(o), o
        }

        function n(e, r) {
            const n = t(this.namespace + (void 0 === r ? ":" : r) + e);
            return n.log = this.log, n
        }

        function i(e) {
            return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
        }
        return t.debug = t, t.default = t, t.coerce = function(e) {
            if (e instanceof Error) return e.stack || e.message;
            return e
        }, t.disable = function() {
            const e = [...t.names.map(i), ...t.skips.map(i).map((e => "-" + e))].join(",");
            return t.enable(""), e
        }, t.enable = function(e) {
            let r;
            t.save(e), t.names = [], t.skips = [];
            const n = ("string" == typeof e ? e : "").split(/[\s,]+/),
                i = n.length;
            for (r = 0; r < i; r++) n[r] && ("-" === (e = n[r].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
        }, t.enabled = function(e) {
            if ("*" === e[e.length - 1]) return !0;
            let r, n;
            for (r = 0, n = t.skips.length; r < n; r++)
                if (t.skips[r].test(e)) return !1;
            for (r = 0, n = t.names.length; r < n; r++)
                if (t.names[r].test(e)) return !0;
            return !1
        }, t.humanize = r(210), t.destroy = function() {
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
        }, Object.keys(e).forEach((r => {
            t[r] = e[r]
        })), t.names = [], t.skips = [], t.formatters = {}, t.selectColor = function(e) {
            let r = 0;
            for (let t = 0; t < e.length; t++) r = (r << 5) - r + e.charCodeAt(t), r |= 0;
            return t.colors[Math.abs(r) % t.colors.length]
        }, t.enable(t.load()), t
    }
}, function(e, t) {
    e.exports = require("tty")
}, function(e, t, r) {
    "use strict";
    var n = r(2);
    e.exports = function(e, t) {
        t = t || {};
        var r = {},
            i = ["url", "method", "data"],
            o = ["headers", "auth", "proxy", "params"],
            s = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
            a = ["validateStatus"];

        function u(e, t) {
            return n.isPlainObject(e) && n.isPlainObject(t) ? n.merge(e, t) : n.isPlainObject(t) ? n.merge({}, t) : n.isArray(t) ? t.slice() : t
        }

        function c(i) {
            n.isUndefined(t[i]) ? n.isUndefined(e[i]) || (r[i] = u(void 0, e[i])) : r[i] = u(e[i], t[i])
        }
        n.forEach(i, (function(e) {
            n.isUndefined(t[e]) || (r[e] = u(void 0, t[e]))
        })), n.forEach(o, c), n.forEach(s, (function(i) {
            n.isUndefined(t[i]) ? n.isUndefined(e[i]) || (r[i] = u(void 0, e[i])) : r[i] = u(void 0, t[i])
        })), n.forEach(a, (function(n) {
            n in t ? r[n] = u(e[n], t[n]) : n in e && (r[n] = u(void 0, e[n]))
        }));
        var p = i.concat(o).concat(s).concat(a),
            l = Object.keys(e).concat(Object.keys(t)).filter((function(e) {
                return -1 === p.indexOf(e)
            }));
        return n.forEach(l, c), r
    }
}, function(e, t, r) {
    "use strict";

    function n(e) {
        this.message = e
    }
    n.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, n.prototype.__CANCEL__ = !0, e.exports = n
}, function(e, t, r) {
    (function(e) {
        var n;
        (function() {
            var i, o = "Expected a function",
                s = "__lodash_hash_undefined__",
                a = "__lodash_placeholder__",
                u = 16,
                c = 32,
                p = 64,
                l = 128,
                d = 256,
                f = 1 / 0,
                h = 9007199254740991,
                g = NaN,
                m = 4294967295,
                y = [
                    ["ary", l],
                    ["bind", 1],
                    ["bindKey", 2],
                    ["curry", 8],
                    ["curryRight", u],
                    ["flip", 512],
                    ["partial", c],
                    ["partialRight", p],
                    ["rearg", d]
                ],
                b = "[object Arguments]",
                _ = "[object Array]",
                v = "[object Boolean]",
                w = "[object Date]",
                E = "[object Error]",
                q = "[object Function]",
                T = "[object GeneratorFunction]",
                S = "[object Map]",
                A = "[object Number]",
                R = "[object Object]",
                x = "[object Promise]",
                O = "[object RegExp]",
                C = "[object Set]",
                k = "[object String]",
                j = "[object Symbol]",
                P = "[object WeakMap]",
                L = "[object ArrayBuffer]",
                $ = "[object DataView]",
                I = "[object Float32Array]",
                N = "[object Float64Array]",
                B = "[object Int8Array]",
                D = "[object Int16Array]",
                G = "[object Int32Array]",
                M = "[object Uint8Array]",
                F = "[object Uint8ClampedArray]",
                H = "[object Uint16Array]",
                U = "[object Uint32Array]",
                z = /\b__p \+= '';/g,
                W = /\b(__p \+=) '' \+/g,
                V = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                K = /&(?:amp|lt|gt|quot|#39);/g,
                X = /[&<>"']/g,
                Y = RegExp(K.source),
                Q = RegExp(X.source),
                J = /<%-([\s\S]+?)%>/g,
                Z = /<%([\s\S]+?)%>/g,
                ee = /<%=([\s\S]+?)%>/g,
                te = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                re = /^\w*$/,
                ne = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                ie = /[\\^$.*+?()[\]{}|]/g,
                oe = RegExp(ie.source),
                se = /^\s+/,
                ae = /\s/,
                ue = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                ce = /\{\n\/\* \[wrapped with (.+)\] \*/,
                pe = /,? & /,
                le = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                de = /[()=,{}\[\]\/\s]/,
                fe = /\\(\\)?/g,
                he = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                ge = /\w*$/,
                me = /^[-+]0x[0-9a-f]+$/i,
                ye = /^0b[01]+$/i,
                be = /^\[object .+?Constructor\]$/,
                _e = /^0o[0-7]+$/i,
                ve = /^(?:0|[1-9]\d*)$/,
                we = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                Ee = /($^)/,
                qe = /['\n\r\u2028\u2029\\]/g,
                Te = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                Se = "\\u2700-\\u27bf",
                Ae = "a-z\\xdf-\\xf6\\xf8-\\xff",
                Re = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                xe = "\\ufe0e\\ufe0f",
                Oe = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                Ce = "['’]",
                ke = "[\\ud800-\\udfff]",
                je = "[" + Oe + "]",
                Pe = "[" + Te + "]",
                Le = "\\d+",
                $e = "[\\u2700-\\u27bf]",
                Ie = "[" + Ae + "]",
                Ne = "[^\\ud800-\\udfff" + Oe + Le + Se + Ae + Re + "]",
                Be = "\\ud83c[\\udffb-\\udfff]",
                De = "[^\\ud800-\\udfff]",
                Ge = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                Me = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                Fe = "[" + Re + "]",
                He = "(?:" + Ie + "|" + Ne + ")",
                Ue = "(?:" + Fe + "|" + Ne + ")",
                ze = "(?:['’](?:d|ll|m|re|s|t|ve))?",
                We = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
                Ve = "(?:" + Pe + "|" + Be + ")" + "?",
                Ke = "[\\ufe0e\\ufe0f]?",
                Xe = Ke + Ve + ("(?:\\u200d(?:" + [De, Ge, Me].join("|") + ")" + Ke + Ve + ")*"),
                Ye = "(?:" + [$e, Ge, Me].join("|") + ")" + Xe,
                Qe = "(?:" + [De + Pe + "?", Pe, Ge, Me, ke].join("|") + ")",
                Je = RegExp(Ce, "g"),
                Ze = RegExp(Pe, "g"),
                et = RegExp(Be + "(?=" + Be + ")|" + Qe + Xe, "g"),
                tt = RegExp([Fe + "?" + Ie + "+" + ze + "(?=" + [je, Fe, "$"].join("|") + ")", Ue + "+" + We + "(?=" + [je, Fe + He, "$"].join("|") + ")", Fe + "?" + He + "+" + ze, Fe + "+" + We, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Le, Ye].join("|"), "g"),
                rt = RegExp("[\\u200d\\ud800-\\udfff" + Te + xe + "]"),
                nt = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                it = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                ot = -1,
                st = {};
            st[I] = st[N] = st[B] = st[D] = st[G] = st[M] = st[F] = st[H] = st[U] = !0, st[b] = st[_] = st[L] = st[v] = st[$] = st[w] = st[E] = st[q] = st[S] = st[A] = st[R] = st[O] = st[C] = st[k] = st[P] = !1;
            var at = {};
            at[b] = at[_] = at[L] = at[$] = at[v] = at[w] = at[I] = at[N] = at[B] = at[D] = at[G] = at[S] = at[A] = at[R] = at[O] = at[C] = at[k] = at[j] = at[M] = at[F] = at[H] = at[U] = !0, at[E] = at[q] = at[P] = !1;
            var ut = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                ct = parseFloat,
                pt = parseInt,
                lt = "object" == typeof global && global && global.Object === Object && global,
                dt = "object" == typeof self && self && self.Object === Object && self,
                ft = lt || dt || Function("return this")(),
                ht = t && !t.nodeType && t,
                gt = ht && "object" == typeof e && e && !e.nodeType && e,
                mt = gt && gt.exports === ht,
                yt = mt && lt.process,
                bt = function() {
                    try {
                        var e = gt && gt.require && gt.require("util").types;
                        return e || yt && yt.binding && yt.binding("util")
                    } catch (e) {}
                }(),
                _t = bt && bt.isArrayBuffer,
                vt = bt && bt.isDate,
                wt = bt && bt.isMap,
                Et = bt && bt.isRegExp,
                qt = bt && bt.isSet,
                Tt = bt && bt.isTypedArray;

            function St(e, t, r) {
                switch (r.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, r[0]);
                    case 2:
                        return e.call(t, r[0], r[1]);
                    case 3:
                        return e.call(t, r[0], r[1], r[2])
                }
                return e.apply(t, r)
            }

            function At(e, t, r, n) {
                for (var i = -1, o = null == e ? 0 : e.length; ++i < o;) {
                    var s = e[i];
                    t(n, s, r(s), e)
                }
                return n
            }

            function Rt(e, t) {
                for (var r = -1, n = null == e ? 0 : e.length; ++r < n && !1 !== t(e[r], r, e););
                return e
            }

            function xt(e, t) {
                for (var r = null == e ? 0 : e.length; r-- && !1 !== t(e[r], r, e););
                return e
            }

            function Ot(e, t) {
                for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
                    if (!t(e[r], r, e)) return !1;
                return !0
            }

            function Ct(e, t) {
                for (var r = -1, n = null == e ? 0 : e.length, i = 0, o = []; ++r < n;) {
                    var s = e[r];
                    t(s, r, e) && (o[i++] = s)
                }
                return o
            }

            function kt(e, t) {
                return !!(null == e ? 0 : e.length) && Mt(e, t, 0) > -1
            }

            function jt(e, t, r) {
                for (var n = -1, i = null == e ? 0 : e.length; ++n < i;)
                    if (r(t, e[n])) return !0;
                return !1
            }

            function Pt(e, t) {
                for (var r = -1, n = null == e ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
                return i
            }

            function Lt(e, t) {
                for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
                return e
            }

            function $t(e, t, r, n) {
                var i = -1,
                    o = null == e ? 0 : e.length;
                for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
                return r
            }

            function It(e, t, r, n) {
                var i = null == e ? 0 : e.length;
                for (n && i && (r = e[--i]); i--;) r = t(r, e[i], i, e);
                return r
            }

            function Nt(e, t) {
                for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
                    if (t(e[r], r, e)) return !0;
                return !1
            }
            var Bt = zt("length");

            function Dt(e, t, r) {
                var n;
                return r(e, (function(e, r, i) {
                    if (t(e, r, i)) return n = r, !1
                })), n
            }

            function Gt(e, t, r, n) {
                for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
                    if (t(e[o], o, e)) return o;
                return -1
            }

            function Mt(e, t, r) {
                return t == t ? function(e, t, r) {
                    var n = r - 1,
                        i = e.length;
                    for (; ++n < i;)
                        if (e[n] === t) return n;
                    return -1
                }(e, t, r) : Gt(e, Ht, r)
            }

            function Ft(e, t, r, n) {
                for (var i = r - 1, o = e.length; ++i < o;)
                    if (n(e[i], t)) return i;
                return -1
            }

            function Ht(e) {
                return e != e
            }

            function Ut(e, t) {
                var r = null == e ? 0 : e.length;
                return r ? Kt(e, t) / r : g
            }

            function zt(e) {
                return function(t) {
                    return null == t ? i : t[e]
                }
            }

            function Wt(e) {
                return function(t) {
                    return null == e ? i : e[t]
                }
            }

            function Vt(e, t, r, n, i) {
                return i(e, (function(e, i, o) {
                    r = n ? (n = !1, e) : t(r, e, i, o)
                })), r
            }

            function Kt(e, t) {
                for (var r, n = -1, o = e.length; ++n < o;) {
                    var s = t(e[n]);
                    s !== i && (r = r === i ? s : r + s)
                }
                return r
            }

            function Xt(e, t) {
                for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
                return n
            }

            function Yt(e) {
                return e ? e.slice(0, hr(e) + 1).replace(se, "") : e
            }

            function Qt(e) {
                return function(t) {
                    return e(t)
                }
            }

            function Jt(e, t) {
                return Pt(t, (function(t) {
                    return e[t]
                }))
            }

            function Zt(e, t) {
                return e.has(t)
            }

            function er(e, t) {
                for (var r = -1, n = e.length; ++r < n && Mt(t, e[r], 0) > -1;);
                return r
            }

            function tr(e, t) {
                for (var r = e.length; r-- && Mt(t, e[r], 0) > -1;);
                return r
            }

            function rr(e, t) {
                for (var r = e.length, n = 0; r--;) e[r] === t && ++n;
                return n
            }
            var nr = Wt({
                    "À": "A",
                    "Á": "A",
                    "Â": "A",
                    "Ã": "A",
                    "Ä": "A",
                    "Å": "A",
                    "à": "a",
                    "á": "a",
                    "â": "a",
                    "ã": "a",
                    "ä": "a",
                    "å": "a",
                    "Ç": "C",
                    "ç": "c",
                    "Ð": "D",
                    "ð": "d",
                    "È": "E",
                    "É": "E",
                    "Ê": "E",
                    "Ë": "E",
                    "è": "e",
                    "é": "e",
                    "ê": "e",
                    "ë": "e",
                    "Ì": "I",
                    "Í": "I",
                    "Î": "I",
                    "Ï": "I",
                    "ì": "i",
                    "í": "i",
                    "î": "i",
                    "ï": "i",
                    "Ñ": "N",
                    "ñ": "n",
                    "Ò": "O",
                    "Ó": "O",
                    "Ô": "O",
                    "Õ": "O",
                    "Ö": "O",
                    "Ø": "O",
                    "ò": "o",
                    "ó": "o",
                    "ô": "o",
                    "õ": "o",
                    "ö": "o",
                    "ø": "o",
                    "Ù": "U",
                    "Ú": "U",
                    "Û": "U",
                    "Ü": "U",
                    "ù": "u",
                    "ú": "u",
                    "û": "u",
                    "ü": "u",
                    "Ý": "Y",
                    "ý": "y",
                    "ÿ": "y",
                    "Æ": "Ae",
                    "æ": "ae",
                    "Þ": "Th",
                    "þ": "th",
                    "ß": "ss",
                    "Ā": "A",
                    "Ă": "A",
                    "Ą": "A",
                    "ā": "a",
                    "ă": "a",
                    "ą": "a",
                    "Ć": "C",
                    "Ĉ": "C",
                    "Ċ": "C",
                    "Č": "C",
                    "ć": "c",
                    "ĉ": "c",
                    "ċ": "c",
                    "č": "c",
                    "Ď": "D",
                    "Đ": "D",
                    "ď": "d",
                    "đ": "d",
                    "Ē": "E",
                    "Ĕ": "E",
                    "Ė": "E",
                    "Ę": "E",
                    "Ě": "E",
                    "ē": "e",
                    "ĕ": "e",
                    "ė": "e",
                    "ę": "e",
                    "ě": "e",
                    "Ĝ": "G",
                    "Ğ": "G",
                    "Ġ": "G",
                    "Ģ": "G",
                    "ĝ": "g",
                    "ğ": "g",
                    "ġ": "g",
                    "ģ": "g",
                    "Ĥ": "H",
                    "Ħ": "H",
                    "ĥ": "h",
                    "ħ": "h",
                    "Ĩ": "I",
                    "Ī": "I",
                    "Ĭ": "I",
                    "Į": "I",
                    "İ": "I",
                    "ĩ": "i",
                    "ī": "i",
                    "ĭ": "i",
                    "į": "i",
                    "ı": "i",
                    "Ĵ": "J",
                    "ĵ": "j",
                    "Ķ": "K",
                    "ķ": "k",
                    "ĸ": "k",
                    "Ĺ": "L",
                    "Ļ": "L",
                    "Ľ": "L",
                    "Ŀ": "L",
                    "Ł": "L",
                    "ĺ": "l",
                    "ļ": "l",
                    "ľ": "l",
                    "ŀ": "l",
                    "ł": "l",
                    "Ń": "N",
                    "Ņ": "N",
                    "Ň": "N",
                    "Ŋ": "N",
                    "ń": "n",
                    "ņ": "n",
                    "ň": "n",
                    "ŋ": "n",
                    "Ō": "O",
                    "Ŏ": "O",
                    "Ő": "O",
                    "ō": "o",
                    "ŏ": "o",
                    "ő": "o",
                    "Ŕ": "R",
                    "Ŗ": "R",
                    "Ř": "R",
                    "ŕ": "r",
                    "ŗ": "r",
                    "ř": "r",
                    "Ś": "S",
                    "Ŝ": "S",
                    "Ş": "S",
                    "Š": "S",
                    "ś": "s",
                    "ŝ": "s",
                    "ş": "s",
                    "š": "s",
                    "Ţ": "T",
                    "Ť": "T",
                    "Ŧ": "T",
                    "ţ": "t",
                    "ť": "t",
                    "ŧ": "t",
                    "Ũ": "U",
                    "Ū": "U",
                    "Ŭ": "U",
                    "Ů": "U",
                    "Ű": "U",
                    "Ų": "U",
                    "ũ": "u",
                    "ū": "u",
                    "ŭ": "u",
                    "ů": "u",
                    "ű": "u",
                    "ų": "u",
                    "Ŵ": "W",
                    "ŵ": "w",
                    "Ŷ": "Y",
                    "ŷ": "y",
                    "Ÿ": "Y",
                    "Ź": "Z",
                    "Ż": "Z",
                    "Ž": "Z",
                    "ź": "z",
                    "ż": "z",
                    "ž": "z",
                    "Ĳ": "IJ",
                    "ĳ": "ij",
                    "Œ": "Oe",
                    "œ": "oe",
                    "ŉ": "'n",
                    "ſ": "s"
                }),
                ir = Wt({
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                });

            function or(e) {
                return "\\" + ut[e]
            }

            function sr(e) {
                return rt.test(e)
            }

            function ar(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach((function(e, n) {
                    r[++t] = [n, e]
                })), r
            }

            function ur(e, t) {
                return function(r) {
                    return e(t(r))
                }
            }

            function cr(e, t) {
                for (var r = -1, n = e.length, i = 0, o = []; ++r < n;) {
                    var s = e[r];
                    s !== t && s !== a || (e[r] = a, o[i++] = r)
                }
                return o
            }

            function pr(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach((function(e) {
                    r[++t] = e
                })), r
            }

            function lr(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach((function(e) {
                    r[++t] = [e, e]
                })), r
            }

            function dr(e) {
                return sr(e) ? function(e) {
                    var t = et.lastIndex = 0;
                    for (; et.test(e);) ++t;
                    return t
                }(e) : Bt(e)
            }

            function fr(e) {
                return sr(e) ? function(e) {
                    return e.match(et) || []
                }(e) : function(e) {
                    return e.split("")
                }(e)
            }

            function hr(e) {
                for (var t = e.length; t-- && ae.test(e.charAt(t)););
                return t
            }
            var gr = Wt({
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'"
            });
            var mr = function e(t) {
                var r, n = (t = null == t ? ft : mr.defaults(ft.Object(), t, mr.pick(ft, it))).Array,
                    ae = t.Date,
                    Te = t.Error,
                    Se = t.Function,
                    Ae = t.Math,
                    Re = t.Object,
                    xe = t.RegExp,
                    Oe = t.String,
                    Ce = t.TypeError,
                    ke = n.prototype,
                    je = Se.prototype,
                    Pe = Re.prototype,
                    Le = t["__core-js_shared__"],
                    $e = je.toString,
                    Ie = Pe.hasOwnProperty,
                    Ne = 0,
                    Be = (r = /[^.]+$/.exec(Le && Le.keys && Le.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "",
                    De = Pe.toString,
                    Ge = $e.call(Re),
                    Me = ft._,
                    Fe = xe("^" + $e.call(Ie).replace(ie, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    He = mt ? t.Buffer : i,
                    Ue = t.Symbol,
                    ze = t.Uint8Array,
                    We = He ? He.allocUnsafe : i,
                    Ve = ur(Re.getPrototypeOf, Re),
                    Ke = Re.create,
                    Xe = Pe.propertyIsEnumerable,
                    Ye = ke.splice,
                    Qe = Ue ? Ue.isConcatSpreadable : i,
                    et = Ue ? Ue.iterator : i,
                    rt = Ue ? Ue.toStringTag : i,
                    ut = function() {
                        try {
                            var e = ho(Re, "defineProperty");
                            return e({}, "", {}), e
                        } catch (e) {}
                    }(),
                    lt = t.clearTimeout !== ft.clearTimeout && t.clearTimeout,
                    dt = ae && ae.now !== ft.Date.now && ae.now,
                    ht = t.setTimeout !== ft.setTimeout && t.setTimeout,
                    gt = Ae.ceil,
                    yt = Ae.floor,
                    bt = Re.getOwnPropertySymbols,
                    Bt = He ? He.isBuffer : i,
                    Wt = t.isFinite,
                    yr = ke.join,
                    br = ur(Re.keys, Re),
                    _r = Ae.max,
                    vr = Ae.min,
                    wr = ae.now,
                    Er = t.parseInt,
                    qr = Ae.random,
                    Tr = ke.reverse,
                    Sr = ho(t, "DataView"),
                    Ar = ho(t, "Map"),
                    Rr = ho(t, "Promise"),
                    xr = ho(t, "Set"),
                    Or = ho(t, "WeakMap"),
                    Cr = ho(Re, "create"),
                    kr = Or && new Or,
                    jr = {},
                    Pr = Mo(Sr),
                    Lr = Mo(Ar),
                    $r = Mo(Rr),
                    Ir = Mo(xr),
                    Nr = Mo(Or),
                    Br = Ue ? Ue.prototype : i,
                    Dr = Br ? Br.valueOf : i,
                    Gr = Br ? Br.toString : i;

                function Mr(e) {
                    if (ia(e) && !Vs(e) && !(e instanceof zr)) {
                        if (e instanceof Ur) return e;
                        if (Ie.call(e, "__wrapped__")) return Fo(e)
                    }
                    return new Ur(e)
                }
                var Fr = function() {
                    function e() {}
                    return function(t) {
                        if (!na(t)) return {};
                        if (Ke) return Ke(t);
                        e.prototype = t;
                        var r = new e;
                        return e.prototype = i, r
                    }
                }();

                function Hr() {}

                function Ur(e, t) {
                    this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = i
                }

                function zr(e) {
                    this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = m, this.__views__ = []
                }

                function Wr(e) {
                    var t = -1,
                        r = null == e ? 0 : e.length;
                    for (this.clear(); ++t < r;) {
                        var n = e[t];
                        this.set(n[0], n[1])
                    }
                }

                function Vr(e) {
                    var t = -1,
                        r = null == e ? 0 : e.length;
                    for (this.clear(); ++t < r;) {
                        var n = e[t];
                        this.set(n[0], n[1])
                    }
                }

                function Kr(e) {
                    var t = -1,
                        r = null == e ? 0 : e.length;
                    for (this.clear(); ++t < r;) {
                        var n = e[t];
                        this.set(n[0], n[1])
                    }
                }

                function Xr(e) {
                    var t = -1,
                        r = null == e ? 0 : e.length;
                    for (this.__data__ = new Kr; ++t < r;) this.add(e[t])
                }

                function Yr(e) {
                    var t = this.__data__ = new Vr(e);
                    this.size = t.size
                }

                function Qr(e, t) {
                    var r = Vs(e),
                        n = !r && Ws(e),
                        i = !r && !n && Qs(e),
                        o = !r && !n && !i && da(e),
                        s = r || n || i || o,
                        a = s ? Xt(e.length, Oe) : [],
                        u = a.length;
                    for (var c in e) !t && !Ie.call(e, c) || s && ("length" == c || i && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || wo(c, u)) || a.push(c);
                    return a
                }

                function Jr(e) {
                    var t = e.length;
                    return t ? e[Yn(0, t - 1)] : i
                }

                function Zr(e, t) {
                    return Bo(ki(e), cn(t, 0, e.length))
                }

                function en(e) {
                    return Bo(ki(e))
                }

                function tn(e, t, r) {
                    (r !== i && !Hs(e[t], r) || r === i && !(t in e)) && an(e, t, r)
                }

                function rn(e, t, r) {
                    var n = e[t];
                    Ie.call(e, t) && Hs(n, r) && (r !== i || t in e) || an(e, t, r)
                }

                function nn(e, t) {
                    for (var r = e.length; r--;)
                        if (Hs(e[r][0], t)) return r;
                    return -1
                }

                function on(e, t, r, n) {
                    return hn(e, (function(e, i, o) {
                        t(n, e, r(e), o)
                    })), n
                }

                function sn(e, t) {
                    return e && ji(t, La(t), e)
                }

                function an(e, t, r) {
                    "__proto__" == t && ut ? ut(e, t, {
                        configurable: !0,
                        enumerable: !0,
                        value: r,
                        writable: !0
                    }) : e[t] = r
                }

                function un(e, t) {
                    for (var r = -1, o = t.length, s = n(o), a = null == e; ++r < o;) s[r] = a ? i : Oa(e, t[r]);
                    return s
                }

                function cn(e, t, r) {
                    return e == e && (r !== i && (e = e <= r ? e : r), t !== i && (e = e >= t ? e : t)), e
                }

                function pn(e, t, r, n, o, s) {
                    var a, u = 1 & t,
                        c = 2 & t,
                        p = 4 & t;
                    if (r && (a = o ? r(e, n, o, s) : r(e)), a !== i) return a;
                    if (!na(e)) return e;
                    var l = Vs(e);
                    if (l) {
                        if (a = function(e) {
                                var t = e.length,
                                    r = new e.constructor(t);
                                t && "string" == typeof e[0] && Ie.call(e, "index") && (r.index = e.index, r.input = e.input);
                                return r
                            }(e), !u) return ki(e, a)
                    } else {
                        var d = yo(e),
                            f = d == q || d == T;
                        if (Qs(e)) return Si(e, u);
                        if (d == R || d == b || f && !o) {
                            if (a = c || f ? {} : _o(e), !u) return c ? function(e, t) {
                                return ji(e, mo(e), t)
                            }(e, function(e, t) {
                                return e && ji(t, $a(t), e)
                            }(a, e)) : function(e, t) {
                                return ji(e, go(e), t)
                            }(e, sn(a, e))
                        } else {
                            if (!at[d]) return o ? e : {};
                            a = function(e, t, r) {
                                var n = e.constructor;
                                switch (t) {
                                    case L:
                                        return Ai(e);
                                    case v:
                                    case w:
                                        return new n(+e);
                                    case $:
                                        return function(e, t) {
                                            var r = t ? Ai(e.buffer) : e.buffer;
                                            return new e.constructor(r, e.byteOffset, e.byteLength)
                                        }(e, r);
                                    case I:
                                    case N:
                                    case B:
                                    case D:
                                    case G:
                                    case M:
                                    case F:
                                    case H:
                                    case U:
                                        return Ri(e, r);
                                    case S:
                                        return new n;
                                    case A:
                                    case k:
                                        return new n(e);
                                    case O:
                                        return function(e) {
                                            var t = new e.constructor(e.source, ge.exec(e));
                                            return t.lastIndex = e.lastIndex, t
                                        }(e);
                                    case C:
                                        return new n;
                                    case j:
                                        return i = e, Dr ? Re(Dr.call(i)) : {}
                                }
                                var i
                            }(e, d, u)
                        }
                    }
                    s || (s = new Yr);
                    var h = s.get(e);
                    if (h) return h;
                    s.set(e, a), ca(e) ? e.forEach((function(n) {
                        a.add(pn(n, t, r, n, e, s))
                    })) : oa(e) && e.forEach((function(n, i) {
                        a.set(i, pn(n, t, r, i, e, s))
                    }));
                    var g = l ? i : (p ? c ? so : oo : c ? $a : La)(e);
                    return Rt(g || e, (function(n, i) {
                        g && (n = e[i = n]), rn(a, i, pn(n, t, r, i, e, s))
                    })), a
                }

                function ln(e, t, r) {
                    var n = r.length;
                    if (null == e) return !n;
                    for (e = Re(e); n--;) {
                        var o = r[n],
                            s = t[o],
                            a = e[o];
                        if (a === i && !(o in e) || !s(a)) return !1
                    }
                    return !0
                }

                function dn(e, t, r) {
                    if ("function" != typeof e) throw new Ce(o);
                    return Lo((function() {
                        e.apply(i, r)
                    }), t)
                }

                function fn(e, t, r, n) {
                    var i = -1,
                        o = kt,
                        s = !0,
                        a = e.length,
                        u = [],
                        c = t.length;
                    if (!a) return u;
                    r && (t = Pt(t, Qt(r))), n ? (o = jt, s = !1) : t.length >= 200 && (o = Zt, s = !1, t = new Xr(t));
                    e: for (; ++i < a;) {
                        var p = e[i],
                            l = null == r ? p : r(p);
                        if (p = n || 0 !== p ? p : 0, s && l == l) {
                            for (var d = c; d--;)
                                if (t[d] === l) continue e;
                            u.push(p)
                        } else o(t, l, n) || u.push(p)
                    }
                    return u
                }
                Mr.templateSettings = {
                    escape: J,
                    evaluate: Z,
                    interpolate: ee,
                    variable: "",
                    imports: {
                        _: Mr
                    }
                }, Mr.prototype = Hr.prototype, Mr.prototype.constructor = Mr, Ur.prototype = Fr(Hr.prototype), Ur.prototype.constructor = Ur, zr.prototype = Fr(Hr.prototype), zr.prototype.constructor = zr, Wr.prototype.clear = function() {
                    this.__data__ = Cr ? Cr(null) : {}, this.size = 0
                }, Wr.prototype.delete = function(e) {
                    var t = this.has(e) && delete this.__data__[e];
                    return this.size -= t ? 1 : 0, t
                }, Wr.prototype.get = function(e) {
                    var t = this.__data__;
                    if (Cr) {
                        var r = t[e];
                        return r === s ? i : r
                    }
                    return Ie.call(t, e) ? t[e] : i
                }, Wr.prototype.has = function(e) {
                    var t = this.__data__;
                    return Cr ? t[e] !== i : Ie.call(t, e)
                }, Wr.prototype.set = function(e, t) {
                    var r = this.__data__;
                    return this.size += this.has(e) ? 0 : 1, r[e] = Cr && t === i ? s : t, this
                }, Vr.prototype.clear = function() {
                    this.__data__ = [], this.size = 0
                }, Vr.prototype.delete = function(e) {
                    var t = this.__data__,
                        r = nn(t, e);
                    return !(r < 0) && (r == t.length - 1 ? t.pop() : Ye.call(t, r, 1), --this.size, !0)
                }, Vr.prototype.get = function(e) {
                    var t = this.__data__,
                        r = nn(t, e);
                    return r < 0 ? i : t[r][1]
                }, Vr.prototype.has = function(e) {
                    return nn(this.__data__, e) > -1
                }, Vr.prototype.set = function(e, t) {
                    var r = this.__data__,
                        n = nn(r, e);
                    return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
                }, Kr.prototype.clear = function() {
                    this.size = 0, this.__data__ = {
                        hash: new Wr,
                        map: new(Ar || Vr),
                        string: new Wr
                    }
                }, Kr.prototype.delete = function(e) {
                    var t = lo(this, e).delete(e);
                    return this.size -= t ? 1 : 0, t
                }, Kr.prototype.get = function(e) {
                    return lo(this, e).get(e)
                }, Kr.prototype.has = function(e) {
                    return lo(this, e).has(e)
                }, Kr.prototype.set = function(e, t) {
                    var r = lo(this, e),
                        n = r.size;
                    return r.set(e, t), this.size += r.size == n ? 0 : 1, this
                }, Xr.prototype.add = Xr.prototype.push = function(e) {
                    return this.__data__.set(e, s), this
                }, Xr.prototype.has = function(e) {
                    return this.__data__.has(e)
                }, Yr.prototype.clear = function() {
                    this.__data__ = new Vr, this.size = 0
                }, Yr.prototype.delete = function(e) {
                    var t = this.__data__,
                        r = t.delete(e);
                    return this.size = t.size, r
                }, Yr.prototype.get = function(e) {
                    return this.__data__.get(e)
                }, Yr.prototype.has = function(e) {
                    return this.__data__.has(e)
                }, Yr.prototype.set = function(e, t) {
                    var r = this.__data__;
                    if (r instanceof Vr) {
                        var n = r.__data__;
                        if (!Ar || n.length < 199) return n.push([e, t]), this.size = ++r.size, this;
                        r = this.__data__ = new Kr(n)
                    }
                    return r.set(e, t), this.size = r.size, this
                };
                var hn = $i(En),
                    gn = $i(qn, !0);

                function mn(e, t) {
                    var r = !0;
                    return hn(e, (function(e, n, i) {
                        return r = !!t(e, n, i)
                    })), r
                }

                function yn(e, t, r) {
                    for (var n = -1, o = e.length; ++n < o;) {
                        var s = e[n],
                            a = t(s);
                        if (null != a && (u === i ? a == a && !la(a) : r(a, u))) var u = a,
                            c = s
                    }
                    return c
                }

                function bn(e, t) {
                    var r = [];
                    return hn(e, (function(e, n, i) {
                        t(e, n, i) && r.push(e)
                    })), r
                }

                function _n(e, t, r, n, i) {
                    var o = -1,
                        s = e.length;
                    for (r || (r = vo), i || (i = []); ++o < s;) {
                        var a = e[o];
                        t > 0 && r(a) ? t > 1 ? _n(a, t - 1, r, n, i) : Lt(i, a) : n || (i[i.length] = a)
                    }
                    return i
                }
                var vn = Ii(),
                    wn = Ii(!0);

                function En(e, t) {
                    return e && vn(e, t, La)
                }

                function qn(e, t) {
                    return e && wn(e, t, La)
                }

                function Tn(e, t) {
                    return Ct(t, (function(t) {
                        return ea(e[t])
                    }))
                }

                function Sn(e, t) {
                    for (var r = 0, n = (t = wi(t, e)).length; null != e && r < n;) e = e[Go(t[r++])];
                    return r && r == n ? e : i
                }

                function An(e, t, r) {
                    var n = t(e);
                    return Vs(e) ? n : Lt(n, r(e))
                }

                function Rn(e) {
                    return null == e ? e === i ? "[object Undefined]" : "[object Null]" : rt && rt in Re(e) ? function(e) {
                        var t = Ie.call(e, rt),
                            r = e[rt];
                        try {
                            e[rt] = i;
                            var n = !0
                        } catch (e) {}
                        var o = De.call(e);
                        n && (t ? e[rt] = r : delete e[rt]);
                        return o
                    }(e) : function(e) {
                        return De.call(e)
                    }(e)
                }

                function xn(e, t) {
                    return e > t
                }

                function On(e, t) {
                    return null != e && Ie.call(e, t)
                }

                function Cn(e, t) {
                    return null != e && t in Re(e)
                }

                function kn(e, t, r) {
                    for (var o = r ? jt : kt, s = e[0].length, a = e.length, u = a, c = n(a), p = 1 / 0, l = []; u--;) {
                        var d = e[u];
                        u && t && (d = Pt(d, Qt(t))), p = vr(d.length, p), c[u] = !r && (t || s >= 120 && d.length >= 120) ? new Xr(u && d) : i
                    }
                    d = e[0];
                    var f = -1,
                        h = c[0];
                    e: for (; ++f < s && l.length < p;) {
                        var g = d[f],
                            m = t ? t(g) : g;
                        if (g = r || 0 !== g ? g : 0, !(h ? Zt(h, m) : o(l, m, r))) {
                            for (u = a; --u;) {
                                var y = c[u];
                                if (!(y ? Zt(y, m) : o(e[u], m, r))) continue e
                            }
                            h && h.push(m), l.push(g)
                        }
                    }
                    return l
                }

                function jn(e, t, r) {
                    var n = null == (e = Co(e, t = wi(t, e))) ? e : e[Go(Zo(t))];
                    return null == n ? i : St(n, e, r)
                }

                function Pn(e) {
                    return ia(e) && Rn(e) == b
                }

                function Ln(e, t, r, n, o) {
                    return e === t || (null == e || null == t || !ia(e) && !ia(t) ? e != e && t != t : function(e, t, r, n, o, s) {
                        var a = Vs(e),
                            u = Vs(t),
                            c = a ? _ : yo(e),
                            p = u ? _ : yo(t),
                            l = (c = c == b ? R : c) == R,
                            d = (p = p == b ? R : p) == R,
                            f = c == p;
                        if (f && Qs(e)) {
                            if (!Qs(t)) return !1;
                            a = !0, l = !1
                        }
                        if (f && !l) return s || (s = new Yr), a || da(e) ? no(e, t, r, n, o, s) : function(e, t, r, n, i, o, s) {
                            switch (r) {
                                case $:
                                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                    e = e.buffer, t = t.buffer;
                                case L:
                                    return !(e.byteLength != t.byteLength || !o(new ze(e), new ze(t)));
                                case v:
                                case w:
                                case A:
                                    return Hs(+e, +t);
                                case E:
                                    return e.name == t.name && e.message == t.message;
                                case O:
                                case k:
                                    return e == t + "";
                                case S:
                                    var a = ar;
                                case C:
                                    var u = 1 & n;
                                    if (a || (a = pr), e.size != t.size && !u) return !1;
                                    var c = s.get(e);
                                    if (c) return c == t;
                                    n |= 2, s.set(e, t);
                                    var p = no(a(e), a(t), n, i, o, s);
                                    return s.delete(e), p;
                                case j:
                                    if (Dr) return Dr.call(e) == Dr.call(t)
                            }
                            return !1
                        }(e, t, c, r, n, o, s);
                        if (!(1 & r)) {
                            var h = l && Ie.call(e, "__wrapped__"),
                                g = d && Ie.call(t, "__wrapped__");
                            if (h || g) {
                                var m = h ? e.value() : e,
                                    y = g ? t.value() : t;
                                return s || (s = new Yr), o(m, y, r, n, s)
                            }
                        }
                        if (!f) return !1;
                        return s || (s = new Yr),
                            function(e, t, r, n, o, s) {
                                var a = 1 & r,
                                    u = oo(e),
                                    c = u.length,
                                    p = oo(t).length;
                                if (c != p && !a) return !1;
                                var l = c;
                                for (; l--;) {
                                    var d = u[l];
                                    if (!(a ? d in t : Ie.call(t, d))) return !1
                                }
                                var f = s.get(e),
                                    h = s.get(t);
                                if (f && h) return f == t && h == e;
                                var g = !0;
                                s.set(e, t), s.set(t, e);
                                var m = a;
                                for (; ++l < c;) {
                                    var y = e[d = u[l]],
                                        b = t[d];
                                    if (n) var _ = a ? n(b, y, d, t, e, s) : n(y, b, d, e, t, s);
                                    if (!(_ === i ? y === b || o(y, b, r, n, s) : _)) {
                                        g = !1;
                                        break
                                    }
                                    m || (m = "constructor" == d)
                                }
                                if (g && !m) {
                                    var v = e.constructor,
                                        w = t.constructor;
                                    v == w || !("constructor" in e) || !("constructor" in t) || "function" == typeof v && v instanceof v && "function" == typeof w && w instanceof w || (g = !1)
                                }
                                return s.delete(e), s.delete(t), g
                            }(e, t, r, n, o, s)
                    }(e, t, r, n, Ln, o))
                }

                function $n(e, t, r, n) {
                    var o = r.length,
                        s = o,
                        a = !n;
                    if (null == e) return !s;
                    for (e = Re(e); o--;) {
                        var u = r[o];
                        if (a && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1
                    }
                    for (; ++o < s;) {
                        var c = (u = r[o])[0],
                            p = e[c],
                            l = u[1];
                        if (a && u[2]) {
                            if (p === i && !(c in e)) return !1
                        } else {
                            var d = new Yr;
                            if (n) var f = n(p, l, c, e, t, d);
                            if (!(f === i ? Ln(l, p, 3, n, d) : f)) return !1
                        }
                    }
                    return !0
                }

                function In(e) {
                    return !(!na(e) || (t = e, Be && Be in t)) && (ea(e) ? Fe : be).test(Mo(e));
                    var t
                }

                function Nn(e) {
                    return "function" == typeof e ? e : null == e ? su : "object" == typeof e ? Vs(e) ? Hn(e[0], e[1]) : Fn(e) : gu(e)
                }

                function Bn(e) {
                    if (!Ao(e)) return br(e);
                    var t = [];
                    for (var r in Re(e)) Ie.call(e, r) && "constructor" != r && t.push(r);
                    return t
                }

                function Dn(e) {
                    if (!na(e)) return function(e) {
                        var t = [];
                        if (null != e)
                            for (var r in Re(e)) t.push(r);
                        return t
                    }(e);
                    var t = Ao(e),
                        r = [];
                    for (var n in e)("constructor" != n || !t && Ie.call(e, n)) && r.push(n);
                    return r
                }

                function Gn(e, t) {
                    return e < t
                }

                function Mn(e, t) {
                    var r = -1,
                        i = Xs(e) ? n(e.length) : [];
                    return hn(e, (function(e, n, o) {
                        i[++r] = t(e, n, o)
                    })), i
                }

                function Fn(e) {
                    var t = fo(e);
                    return 1 == t.length && t[0][2] ? xo(t[0][0], t[0][1]) : function(r) {
                        return r === e || $n(r, e, t)
                    }
                }

                function Hn(e, t) {
                    return qo(e) && Ro(t) ? xo(Go(e), t) : function(r) {
                        var n = Oa(r, e);
                        return n === i && n === t ? Ca(r, e) : Ln(t, n, 3)
                    }
                }

                function Un(e, t, r, n, o) {
                    e !== t && vn(t, (function(s, a) {
                        if (o || (o = new Yr), na(s)) ! function(e, t, r, n, o, s, a) {
                            var u = jo(e, r),
                                c = jo(t, r),
                                p = a.get(c);
                            if (p) return void tn(e, r, p);
                            var l = s ? s(u, c, r + "", e, t, a) : i,
                                d = l === i;
                            if (d) {
                                var f = Vs(c),
                                    h = !f && Qs(c),
                                    g = !f && !h && da(c);
                                l = c, f || h || g ? Vs(u) ? l = u : Ys(u) ? l = ki(u) : h ? (d = !1, l = Si(c, !0)) : g ? (d = !1, l = Ri(c, !0)) : l = [] : aa(c) || Ws(c) ? (l = u, Ws(u) ? l = va(u) : na(u) && !ea(u) || (l = _o(c))) : d = !1
                            }
                            d && (a.set(c, l), o(l, c, n, s, a), a.delete(c));
                            tn(e, r, l)
                        }(e, t, a, r, Un, n, o);
                        else {
                            var u = n ? n(jo(e, a), s, a + "", e, t, o) : i;
                            u === i && (u = s), tn(e, a, u)
                        }
                    }), $a)
                }

                function zn(e, t) {
                    var r = e.length;
                    if (r) return wo(t += t < 0 ? r : 0, r) ? e[t] : i
                }

                function Wn(e, t, r) {
                    t = t.length ? Pt(t, (function(e) {
                        return Vs(e) ? function(t) {
                            return Sn(t, 1 === e.length ? e[0] : e)
                        } : e
                    })) : [su];
                    var n = -1;
                    return t = Pt(t, Qt(po())),
                        function(e, t) {
                            var r = e.length;
                            for (e.sort(t); r--;) e[r] = e[r].value;
                            return e
                        }(Mn(e, (function(e, r, i) {
                            return {
                                criteria: Pt(t, (function(t) {
                                    return t(e)
                                })),
                                index: ++n,
                                value: e
                            }
                        })), (function(e, t) {
                            return function(e, t, r) {
                                var n = -1,
                                    i = e.criteria,
                                    o = t.criteria,
                                    s = i.length,
                                    a = r.length;
                                for (; ++n < s;) {
                                    var u = xi(i[n], o[n]);
                                    if (u) return n >= a ? u : u * ("desc" == r[n] ? -1 : 1)
                                }
                                return e.index - t.index
                            }(e, t, r)
                        }))
                }

                function Vn(e, t, r) {
                    for (var n = -1, i = t.length, o = {}; ++n < i;) {
                        var s = t[n],
                            a = Sn(e, s);
                        r(a, s) && ti(o, wi(s, e), a)
                    }
                    return o
                }

                function Kn(e, t, r, n) {
                    var i = n ? Ft : Mt,
                        o = -1,
                        s = t.length,
                        a = e;
                    for (e === t && (t = ki(t)), r && (a = Pt(e, Qt(r))); ++o < s;)
                        for (var u = 0, c = t[o], p = r ? r(c) : c;
                            (u = i(a, p, u, n)) > -1;) a !== e && Ye.call(a, u, 1), Ye.call(e, u, 1);
                    return e
                }

                function Xn(e, t) {
                    for (var r = e ? t.length : 0, n = r - 1; r--;) {
                        var i = t[r];
                        if (r == n || i !== o) {
                            var o = i;
                            wo(i) ? Ye.call(e, i, 1) : fi(e, i)
                        }
                    }
                    return e
                }

                function Yn(e, t) {
                    return e + yt(qr() * (t - e + 1))
                }

                function Qn(e, t) {
                    var r = "";
                    if (!e || t < 1 || t > h) return r;
                    do {
                        t % 2 && (r += e), (t = yt(t / 2)) && (e += e)
                    } while (t);
                    return r
                }

                function Jn(e, t) {
                    return $o(Oo(e, t, su), e + "")
                }

                function Zn(e) {
                    return Jr(Ha(e))
                }

                function ei(e, t) {
                    var r = Ha(e);
                    return Bo(r, cn(t, 0, r.length))
                }

                function ti(e, t, r, n) {
                    if (!na(e)) return e;
                    for (var o = -1, s = (t = wi(t, e)).length, a = s - 1, u = e; null != u && ++o < s;) {
                        var c = Go(t[o]),
                            p = r;
                        if ("__proto__" === c || "constructor" === c || "prototype" === c) return e;
                        if (o != a) {
                            var l = u[c];
                            (p = n ? n(l, c, u) : i) === i && (p = na(l) ? l : wo(t[o + 1]) ? [] : {})
                        }
                        rn(u, c, p), u = u[c]
                    }
                    return e
                }
                var ri = kr ? function(e, t) {
                        return kr.set(e, t), e
                    } : su,
                    ni = ut ? function(e, t) {
                        return ut(e, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: nu(t),
                            writable: !0
                        })
                    } : su;

                function ii(e) {
                    return Bo(Ha(e))
                }

                function oi(e, t, r) {
                    var i = -1,
                        o = e.length;
                    t < 0 && (t = -t > o ? 0 : o + t), (r = r > o ? o : r) < 0 && (r += o), o = t > r ? 0 : r - t >>> 0, t >>>= 0;
                    for (var s = n(o); ++i < o;) s[i] = e[i + t];
                    return s
                }

                function si(e, t) {
                    var r;
                    return hn(e, (function(e, n, i) {
                        return !(r = t(e, n, i))
                    })), !!r
                }

                function ai(e, t, r) {
                    var n = 0,
                        i = null == e ? n : e.length;
                    if ("number" == typeof t && t == t && i <= 2147483647) {
                        for (; n < i;) {
                            var o = n + i >>> 1,
                                s = e[o];
                            null !== s && !la(s) && (r ? s <= t : s < t) ? n = o + 1 : i = o
                        }
                        return i
                    }
                    return ui(e, t, su, r)
                }

                function ui(e, t, r, n) {
                    var o = 0,
                        s = null == e ? 0 : e.length;
                    if (0 === s) return 0;
                    for (var a = (t = r(t)) != t, u = null === t, c = la(t), p = t === i; o < s;) {
                        var l = yt((o + s) / 2),
                            d = r(e[l]),
                            f = d !== i,
                            h = null === d,
                            g = d == d,
                            m = la(d);
                        if (a) var y = n || g;
                        else y = p ? g && (n || f) : u ? g && f && (n || !h) : c ? g && f && !h && (n || !m) : !h && !m && (n ? d <= t : d < t);
                        y ? o = l + 1 : s = l
                    }
                    return vr(s, 4294967294)
                }

                function ci(e, t) {
                    for (var r = -1, n = e.length, i = 0, o = []; ++r < n;) {
                        var s = e[r],
                            a = t ? t(s) : s;
                        if (!r || !Hs(a, u)) {
                            var u = a;
                            o[i++] = 0 === s ? 0 : s
                        }
                    }
                    return o
                }

                function pi(e) {
                    return "number" == typeof e ? e : la(e) ? g : +e
                }

                function li(e) {
                    if ("string" == typeof e) return e;
                    if (Vs(e)) return Pt(e, li) + "";
                    if (la(e)) return Gr ? Gr.call(e) : "";
                    var t = e + "";
                    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                }

                function di(e, t, r) {
                    var n = -1,
                        i = kt,
                        o = e.length,
                        s = !0,
                        a = [],
                        u = a;
                    if (r) s = !1, i = jt;
                    else if (o >= 200) {
                        var c = t ? null : Qi(e);
                        if (c) return pr(c);
                        s = !1, i = Zt, u = new Xr
                    } else u = t ? [] : a;
                    e: for (; ++n < o;) {
                        var p = e[n],
                            l = t ? t(p) : p;
                        if (p = r || 0 !== p ? p : 0, s && l == l) {
                            for (var d = u.length; d--;)
                                if (u[d] === l) continue e;
                            t && u.push(l), a.push(p)
                        } else i(u, l, r) || (u !== a && u.push(l), a.push(p))
                    }
                    return a
                }

                function fi(e, t) {
                    return null == (e = Co(e, t = wi(t, e))) || delete e[Go(Zo(t))]
                }

                function hi(e, t, r, n) {
                    return ti(e, t, r(Sn(e, t)), n)
                }

                function gi(e, t, r, n) {
                    for (var i = e.length, o = n ? i : -1;
                        (n ? o-- : ++o < i) && t(e[o], o, e););
                    return r ? oi(e, n ? 0 : o, n ? o + 1 : i) : oi(e, n ? o + 1 : 0, n ? i : o)
                }

                function mi(e, t) {
                    var r = e;
                    return r instanceof zr && (r = r.value()), $t(t, (function(e, t) {
                        return t.func.apply(t.thisArg, Lt([e], t.args))
                    }), r)
                }

                function yi(e, t, r) {
                    var i = e.length;
                    if (i < 2) return i ? di(e[0]) : [];
                    for (var o = -1, s = n(i); ++o < i;)
                        for (var a = e[o], u = -1; ++u < i;) u != o && (s[o] = fn(s[o] || a, e[u], t, r));
                    return di(_n(s, 1), t, r)
                }

                function bi(e, t, r) {
                    for (var n = -1, o = e.length, s = t.length, a = {}; ++n < o;) {
                        var u = n < s ? t[n] : i;
                        r(a, e[n], u)
                    }
                    return a
                }

                function _i(e) {
                    return Ys(e) ? e : []
                }

                function vi(e) {
                    return "function" == typeof e ? e : su
                }

                function wi(e, t) {
                    return Vs(e) ? e : qo(e, t) ? [e] : Do(wa(e))
                }
                var Ei = Jn;

                function qi(e, t, r) {
                    var n = e.length;
                    return r = r === i ? n : r, !t && r >= n ? e : oi(e, t, r)
                }
                var Ti = lt || function(e) {
                    return ft.clearTimeout(e)
                };

                function Si(e, t) {
                    if (t) return e.slice();
                    var r = e.length,
                        n = We ? We(r) : new e.constructor(r);
                    return e.copy(n), n
                }

                function Ai(e) {
                    var t = new e.constructor(e.byteLength);
                    return new ze(t).set(new ze(e)), t
                }

                function Ri(e, t) {
                    var r = t ? Ai(e.buffer) : e.buffer;
                    return new e.constructor(r, e.byteOffset, e.length)
                }

                function xi(e, t) {
                    if (e !== t) {
                        var r = e !== i,
                            n = null === e,
                            o = e == e,
                            s = la(e),
                            a = t !== i,
                            u = null === t,
                            c = t == t,
                            p = la(t);
                        if (!u && !p && !s && e > t || s && a && c && !u && !p || n && a && c || !r && c || !o) return 1;
                        if (!n && !s && !p && e < t || p && r && o && !n && !s || u && r && o || !a && o || !c) return -1
                    }
                    return 0
                }

                function Oi(e, t, r, i) {
                    for (var o = -1, s = e.length, a = r.length, u = -1, c = t.length, p = _r(s - a, 0), l = n(c + p), d = !i; ++u < c;) l[u] = t[u];
                    for (; ++o < a;)(d || o < s) && (l[r[o]] = e[o]);
                    for (; p--;) l[u++] = e[o++];
                    return l
                }

                function Ci(e, t, r, i) {
                    for (var o = -1, s = e.length, a = -1, u = r.length, c = -1, p = t.length, l = _r(s - u, 0), d = n(l + p), f = !i; ++o < l;) d[o] = e[o];
                    for (var h = o; ++c < p;) d[h + c] = t[c];
                    for (; ++a < u;)(f || o < s) && (d[h + r[a]] = e[o++]);
                    return d
                }

                function ki(e, t) {
                    var r = -1,
                        i = e.length;
                    for (t || (t = n(i)); ++r < i;) t[r] = e[r];
                    return t
                }

                function ji(e, t, r, n) {
                    var o = !r;
                    r || (r = {});
                    for (var s = -1, a = t.length; ++s < a;) {
                        var u = t[s],
                            c = n ? n(r[u], e[u], u, r, e) : i;
                        c === i && (c = e[u]), o ? an(r, u, c) : rn(r, u, c)
                    }
                    return r
                }

                function Pi(e, t) {
                    return function(r, n) {
                        var i = Vs(r) ? At : on,
                            o = t ? t() : {};
                        return i(r, e, po(n, 2), o)
                    }
                }

                function Li(e) {
                    return Jn((function(t, r) {
                        var n = -1,
                            o = r.length,
                            s = o > 1 ? r[o - 1] : i,
                            a = o > 2 ? r[2] : i;
                        for (s = e.length > 3 && "function" == typeof s ? (o--, s) : i, a && Eo(r[0], r[1], a) && (s = o < 3 ? i : s, o = 1), t = Re(t); ++n < o;) {
                            var u = r[n];
                            u && e(t, u, n, s)
                        }
                        return t
                    }))
                }

                function $i(e, t) {
                    return function(r, n) {
                        if (null == r) return r;
                        if (!Xs(r)) return e(r, n);
                        for (var i = r.length, o = t ? i : -1, s = Re(r);
                            (t ? o-- : ++o < i) && !1 !== n(s[o], o, s););
                        return r
                    }
                }

                function Ii(e) {
                    return function(t, r, n) {
                        for (var i = -1, o = Re(t), s = n(t), a = s.length; a--;) {
                            var u = s[e ? a : ++i];
                            if (!1 === r(o[u], u, o)) break
                        }
                        return t
                    }
                }

                function Ni(e) {
                    return function(t) {
                        var r = sr(t = wa(t)) ? fr(t) : i,
                            n = r ? r[0] : t.charAt(0),
                            o = r ? qi(r, 1).join("") : t.slice(1);
                        return n[e]() + o
                    }
                }

                function Bi(e) {
                    return function(t) {
                        return $t(eu(Wa(t).replace(Je, "")), e, "")
                    }
                }

                function Di(e) {
                    return function() {
                        var t = arguments;
                        switch (t.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t[0]);
                            case 2:
                                return new e(t[0], t[1]);
                            case 3:
                                return new e(t[0], t[1], t[2]);
                            case 4:
                                return new e(t[0], t[1], t[2], t[3]);
                            case 5:
                                return new e(t[0], t[1], t[2], t[3], t[4]);
                            case 6:
                                return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                            case 7:
                                return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                        }
                        var r = Fr(e.prototype),
                            n = e.apply(r, t);
                        return na(n) ? n : r
                    }
                }

                function Gi(e) {
                    return function(t, r, n) {
                        var o = Re(t);
                        if (!Xs(t)) {
                            var s = po(r, 3);
                            t = La(t), r = function(e) {
                                return s(o[e], e, o)
                            }
                        }
                        var a = e(t, r, n);
                        return a > -1 ? o[s ? t[a] : a] : i
                    }
                }

                function Mi(e) {
                    return io((function(t) {
                        var r = t.length,
                            n = r,
                            s = Ur.prototype.thru;
                        for (e && t.reverse(); n--;) {
                            var a = t[n];
                            if ("function" != typeof a) throw new Ce(o);
                            if (s && !u && "wrapper" == uo(a)) var u = new Ur([], !0)
                        }
                        for (n = u ? n : r; ++n < r;) {
                            var c = uo(a = t[n]),
                                p = "wrapper" == c ? ao(a) : i;
                            u = p && To(p[0]) && 424 == p[1] && !p[4].length && 1 == p[9] ? u[uo(p[0])].apply(u, p[3]) : 1 == a.length && To(a) ? u[c]() : u.thru(a)
                        }
                        return function() {
                            var e = arguments,
                                n = e[0];
                            if (u && 1 == e.length && Vs(n)) return u.plant(n).value();
                            for (var i = 0, o = r ? t[i].apply(this, e) : n; ++i < r;) o = t[i].call(this, o);
                            return o
                        }
                    }))
                }

                function Fi(e, t, r, o, s, a, u, c, p, d) {
                    var f = t & l,
                        h = 1 & t,
                        g = 2 & t,
                        m = 24 & t,
                        y = 512 & t,
                        b = g ? i : Di(e);
                    return function i() {
                        for (var l = arguments.length, _ = n(l), v = l; v--;) _[v] = arguments[v];
                        if (m) var w = co(i),
                            E = rr(_, w);
                        if (o && (_ = Oi(_, o, s, m)), a && (_ = Ci(_, a, u, m)), l -= E, m && l < d) {
                            var q = cr(_, w);
                            return Xi(e, t, Fi, i.placeholder, r, _, q, c, p, d - l)
                        }
                        var T = h ? r : this,
                            S = g ? T[e] : e;
                        return l = _.length, c ? _ = ko(_, c) : y && l > 1 && _.reverse(), f && p < l && (_.length = p), this && this !== ft && this instanceof i && (S = b || Di(S)), S.apply(T, _)
                    }
                }

                function Hi(e, t) {
                    return function(r, n) {
                        return function(e, t, r, n) {
                            return En(e, (function(e, i, o) {
                                t(n, r(e), i, o)
                            })), n
                        }(r, e, t(n), {})
                    }
                }

                function Ui(e, t) {
                    return function(r, n) {
                        var o;
                        if (r === i && n === i) return t;
                        if (r !== i && (o = r), n !== i) {
                            if (o === i) return n;
                            "string" == typeof r || "string" == typeof n ? (r = li(r), n = li(n)) : (r = pi(r), n = pi(n)), o = e(r, n)
                        }
                        return o
                    }
                }

                function zi(e) {
                    return io((function(t) {
                        return t = Pt(t, Qt(po())), Jn((function(r) {
                            var n = this;
                            return e(t, (function(e) {
                                return St(e, n, r)
                            }))
                        }))
                    }))
                }

                function Wi(e, t) {
                    var r = (t = t === i ? " " : li(t)).length;
                    if (r < 2) return r ? Qn(t, e) : t;
                    var n = Qn(t, gt(e / dr(t)));
                    return sr(t) ? qi(fr(n), 0, e).join("") : n.slice(0, e)
                }

                function Vi(e) {
                    return function(t, r, o) {
                        return o && "number" != typeof o && Eo(t, r, o) && (r = o = i), t = ma(t), r === i ? (r = t, t = 0) : r = ma(r),
                            function(e, t, r, i) {
                                for (var o = -1, s = _r(gt((t - e) / (r || 1)), 0), a = n(s); s--;) a[i ? s : ++o] = e, e += r;
                                return a
                            }(t, r, o = o === i ? t < r ? 1 : -1 : ma(o), e)
                    }
                }

                function Ki(e) {
                    return function(t, r) {
                        return "string" == typeof t && "string" == typeof r || (t = _a(t), r = _a(r)), e(t, r)
                    }
                }

                function Xi(e, t, r, n, o, s, a, u, l, d) {
                    var f = 8 & t;
                    t |= f ? c : p, 4 & (t &= ~(f ? p : c)) || (t &= -4);
                    var h = [e, t, o, f ? s : i, f ? a : i, f ? i : s, f ? i : a, u, l, d],
                        g = r.apply(i, h);
                    return To(e) && Po(g, h), g.placeholder = n, Io(g, e, t)
                }

                function Yi(e) {
                    var t = Ae[e];
                    return function(e, r) {
                        if (e = _a(e), (r = null == r ? 0 : vr(ya(r), 292)) && Wt(e)) {
                            var n = (wa(e) + "e").split("e");
                            return +((n = (wa(t(n[0] + "e" + (+n[1] + r))) + "e").split("e"))[0] + "e" + (+n[1] - r))
                        }
                        return t(e)
                    }
                }
                var Qi = xr && 1 / pr(new xr([, -0]))[1] == f ? function(e) {
                    return new xr(e)
                } : lu;

                function Ji(e) {
                    return function(t) {
                        var r = yo(t);
                        return r == S ? ar(t) : r == C ? lr(t) : function(e, t) {
                            return Pt(t, (function(t) {
                                return [t, e[t]]
                            }))
                        }(t, e(t))
                    }
                }

                function Zi(e, t, r, s, f, h, g, m) {
                    var y = 2 & t;
                    if (!y && "function" != typeof e) throw new Ce(o);
                    var b = s ? s.length : 0;
                    if (b || (t &= -97, s = f = i), g = g === i ? g : _r(ya(g), 0), m = m === i ? m : ya(m), b -= f ? f.length : 0, t & p) {
                        var _ = s,
                            v = f;
                        s = f = i
                    }
                    var w = y ? i : ao(e),
                        E = [e, t, r, s, f, _, v, h, g, m];
                    if (w && function(e, t) {
                            var r = e[1],
                                n = t[1],
                                i = r | n,
                                o = i < 131,
                                s = n == l && 8 == r || n == l && r == d && e[7].length <= t[8] || 384 == n && t[7].length <= t[8] && 8 == r;
                            if (!o && !s) return e;
                            1 & n && (e[2] = t[2], i |= 1 & r ? 0 : 4);
                            var u = t[3];
                            if (u) {
                                var c = e[3];
                                e[3] = c ? Oi(c, u, t[4]) : u, e[4] = c ? cr(e[3], a) : t[4]
                            }(u = t[5]) && (c = e[5], e[5] = c ? Ci(c, u, t[6]) : u, e[6] = c ? cr(e[5], a) : t[6]);
                            (u = t[7]) && (e[7] = u);
                            n & l && (e[8] = null == e[8] ? t[8] : vr(e[8], t[8]));
                            null == e[9] && (e[9] = t[9]);
                            e[0] = t[0], e[1] = i
                        }(E, w), e = E[0], t = E[1], r = E[2], s = E[3], f = E[4], !(m = E[9] = E[9] === i ? y ? 0 : e.length : _r(E[9] - b, 0)) && 24 & t && (t &= -25), t && 1 != t) q = 8 == t || t == u ? function(e, t, r) {
                        var o = Di(e);
                        return function s() {
                            for (var a = arguments.length, u = n(a), c = a, p = co(s); c--;) u[c] = arguments[c];
                            var l = a < 3 && u[0] !== p && u[a - 1] !== p ? [] : cr(u, p);
                            return (a -= l.length) < r ? Xi(e, t, Fi, s.placeholder, i, u, l, i, i, r - a) : St(this && this !== ft && this instanceof s ? o : e, this, u)
                        }
                    }(e, t, m) : t != c && 33 != t || f.length ? Fi.apply(i, E) : function(e, t, r, i) {
                        var o = 1 & t,
                            s = Di(e);
                        return function t() {
                            for (var a = -1, u = arguments.length, c = -1, p = i.length, l = n(p + u), d = this && this !== ft && this instanceof t ? s : e; ++c < p;) l[c] = i[c];
                            for (; u--;) l[c++] = arguments[++a];
                            return St(d, o ? r : this, l)
                        }
                    }(e, t, r, s);
                    else var q = function(e, t, r) {
                        var n = 1 & t,
                            i = Di(e);
                        return function t() {
                            return (this && this !== ft && this instanceof t ? i : e).apply(n ? r : this, arguments)
                        }
                    }(e, t, r);
                    return Io((w ? ri : Po)(q, E), e, t)
                }

                function eo(e, t, r, n) {
                    return e === i || Hs(e, Pe[r]) && !Ie.call(n, r) ? t : e
                }

                function to(e, t, r, n, o, s) {
                    return na(e) && na(t) && (s.set(t, e), Un(e, t, i, to, s), s.delete(t)), e
                }

                function ro(e) {
                    return aa(e) ? i : e
                }

                function no(e, t, r, n, o, s) {
                    var a = 1 & r,
                        u = e.length,
                        c = t.length;
                    if (u != c && !(a && c > u)) return !1;
                    var p = s.get(e),
                        l = s.get(t);
                    if (p && l) return p == t && l == e;
                    var d = -1,
                        f = !0,
                        h = 2 & r ? new Xr : i;
                    for (s.set(e, t), s.set(t, e); ++d < u;) {
                        var g = e[d],
                            m = t[d];
                        if (n) var y = a ? n(m, g, d, t, e, s) : n(g, m, d, e, t, s);
                        if (y !== i) {
                            if (y) continue;
                            f = !1;
                            break
                        }
                        if (h) {
                            if (!Nt(t, (function(e, t) {
                                    if (!Zt(h, t) && (g === e || o(g, e, r, n, s))) return h.push(t)
                                }))) {
                                f = !1;
                                break
                            }
                        } else if (g !== m && !o(g, m, r, n, s)) {
                            f = !1;
                            break
                        }
                    }
                    return s.delete(e), s.delete(t), f
                }

                function io(e) {
                    return $o(Oo(e, i, Ko), e + "")
                }

                function oo(e) {
                    return An(e, La, go)
                }

                function so(e) {
                    return An(e, $a, mo)
                }
                var ao = kr ? function(e) {
                    return kr.get(e)
                } : lu;

                function uo(e) {
                    for (var t = e.name + "", r = jr[t], n = Ie.call(jr, t) ? r.length : 0; n--;) {
                        var i = r[n],
                            o = i.func;
                        if (null == o || o == e) return i.name
                    }
                    return t
                }

                function co(e) {
                    return (Ie.call(Mr, "placeholder") ? Mr : e).placeholder
                }

                function po() {
                    var e = Mr.iteratee || au;
                    return e = e === au ? Nn : e, arguments.length ? e(arguments[0], arguments[1]) : e
                }

                function lo(e, t) {
                    var r, n, i = e.__data__;
                    return ("string" == (n = typeof(r = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? i["string" == typeof t ? "string" : "hash"] : i.map
                }

                function fo(e) {
                    for (var t = La(e), r = t.length; r--;) {
                        var n = t[r],
                            i = e[n];
                        t[r] = [n, i, Ro(i)]
                    }
                    return t
                }

                function ho(e, t) {
                    var r = function(e, t) {
                        return null == e ? i : e[t]
                    }(e, t);
                    return In(r) ? r : i
                }
                var go = bt ? function(e) {
                        return null == e ? [] : (e = Re(e), Ct(bt(e), (function(t) {
                            return Xe.call(e, t)
                        })))
                    } : bu,
                    mo = bt ? function(e) {
                        for (var t = []; e;) Lt(t, go(e)), e = Ve(e);
                        return t
                    } : bu,
                    yo = Rn;

                function bo(e, t, r) {
                    for (var n = -1, i = (t = wi(t, e)).length, o = !1; ++n < i;) {
                        var s = Go(t[n]);
                        if (!(o = null != e && r(e, s))) break;
                        e = e[s]
                    }
                    return o || ++n != i ? o : !!(i = null == e ? 0 : e.length) && ra(i) && wo(s, i) && (Vs(e) || Ws(e))
                }

                function _o(e) {
                    return "function" != typeof e.constructor || Ao(e) ? {} : Fr(Ve(e))
                }

                function vo(e) {
                    return Vs(e) || Ws(e) || !!(Qe && e && e[Qe])
                }

                function wo(e, t) {
                    var r = typeof e;
                    return !!(t = null == t ? h : t) && ("number" == r || "symbol" != r && ve.test(e)) && e > -1 && e % 1 == 0 && e < t
                }

                function Eo(e, t, r) {
                    if (!na(r)) return !1;
                    var n = typeof t;
                    return !!("number" == n ? Xs(r) && wo(t, r.length) : "string" == n && t in r) && Hs(r[t], e)
                }

                function qo(e, t) {
                    if (Vs(e)) return !1;
                    var r = typeof e;
                    return !("number" != r && "symbol" != r && "boolean" != r && null != e && !la(e)) || (re.test(e) || !te.test(e) || null != t && e in Re(t))
                }

                function To(e) {
                    var t = uo(e),
                        r = Mr[t];
                    if ("function" != typeof r || !(t in zr.prototype)) return !1;
                    if (e === r) return !0;
                    var n = ao(r);
                    return !!n && e === n[0]
                }(Sr && yo(new Sr(new ArrayBuffer(1))) != $ || Ar && yo(new Ar) != S || Rr && yo(Rr.resolve()) != x || xr && yo(new xr) != C || Or && yo(new Or) != P) && (yo = function(e) {
                    var t = Rn(e),
                        r = t == R ? e.constructor : i,
                        n = r ? Mo(r) : "";
                    if (n) switch (n) {
                        case Pr:
                            return $;
                        case Lr:
                            return S;
                        case $r:
                            return x;
                        case Ir:
                            return C;
                        case Nr:
                            return P
                    }
                    return t
                });
                var So = Le ? ea : _u;

                function Ao(e) {
                    var t = e && e.constructor;
                    return e === ("function" == typeof t && t.prototype || Pe)
                }

                function Ro(e) {
                    return e == e && !na(e)
                }

                function xo(e, t) {
                    return function(r) {
                        return null != r && (r[e] === t && (t !== i || e in Re(r)))
                    }
                }

                function Oo(e, t, r) {
                    return t = _r(t === i ? e.length - 1 : t, 0),
                        function() {
                            for (var i = arguments, o = -1, s = _r(i.length - t, 0), a = n(s); ++o < s;) a[o] = i[t + o];
                            o = -1;
                            for (var u = n(t + 1); ++o < t;) u[o] = i[o];
                            return u[t] = r(a), St(e, this, u)
                        }
                }

                function Co(e, t) {
                    return t.length < 2 ? e : Sn(e, oi(t, 0, -1))
                }

                function ko(e, t) {
                    for (var r = e.length, n = vr(t.length, r), o = ki(e); n--;) {
                        var s = t[n];
                        e[n] = wo(s, r) ? o[s] : i
                    }
                    return e
                }

                function jo(e, t) {
                    if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
                }
                var Po = No(ri),
                    Lo = ht || function(e, t) {
                        return ft.setTimeout(e, t)
                    },
                    $o = No(ni);

                function Io(e, t, r) {
                    var n = t + "";
                    return $o(e, function(e, t) {
                        var r = t.length;
                        if (!r) return e;
                        var n = r - 1;
                        return t[n] = (r > 1 ? "& " : "") + t[n], t = t.join(r > 2 ? ", " : " "), e.replace(ue, "{\n/* [wrapped with " + t + "] */\n")
                    }(n, function(e, t) {
                        return Rt(y, (function(r) {
                            var n = "_." + r[0];
                            t & r[1] && !kt(e, n) && e.push(n)
                        })), e.sort()
                    }(function(e) {
                        var t = e.match(ce);
                        return t ? t[1].split(pe) : []
                    }(n), r)))
                }

                function No(e) {
                    var t = 0,
                        r = 0;
                    return function() {
                        var n = wr(),
                            o = 16 - (n - r);
                        if (r = n, o > 0) {
                            if (++t >= 800) return arguments[0]
                        } else t = 0;
                        return e.apply(i, arguments)
                    }
                }

                function Bo(e, t) {
                    var r = -1,
                        n = e.length,
                        o = n - 1;
                    for (t = t === i ? n : t; ++r < t;) {
                        var s = Yn(r, o),
                            a = e[s];
                        e[s] = e[r], e[r] = a
                    }
                    return e.length = t, e
                }
                var Do = function(e) {
                    var t = Ns(e, (function(e) {
                            return 500 === r.size && r.clear(), e
                        })),
                        r = t.cache;
                    return t
                }((function(e) {
                    var t = [];
                    return 46 === e.charCodeAt(0) && t.push(""), e.replace(ne, (function(e, r, n, i) {
                        t.push(n ? i.replace(fe, "$1") : r || e)
                    })), t
                }));

                function Go(e) {
                    if ("string" == typeof e || la(e)) return e;
                    var t = e + "";
                    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                }

                function Mo(e) {
                    if (null != e) {
                        try {
                            return $e.call(e)
                        } catch (e) {}
                        try {
                            return e + ""
                        } catch (e) {}
                    }
                    return ""
                }

                function Fo(e) {
                    if (e instanceof zr) return e.clone();
                    var t = new Ur(e.__wrapped__, e.__chain__);
                    return t.__actions__ = ki(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
                }
                var Ho = Jn((function(e, t) {
                        return Ys(e) ? fn(e, _n(t, 1, Ys, !0)) : []
                    })),
                    Uo = Jn((function(e, t) {
                        var r = Zo(t);
                        return Ys(r) && (r = i), Ys(e) ? fn(e, _n(t, 1, Ys, !0), po(r, 2)) : []
                    })),
                    zo = Jn((function(e, t) {
                        var r = Zo(t);
                        return Ys(r) && (r = i), Ys(e) ? fn(e, _n(t, 1, Ys, !0), i, r) : []
                    }));

                function Wo(e, t, r) {
                    var n = null == e ? 0 : e.length;
                    if (!n) return -1;
                    var i = null == r ? 0 : ya(r);
                    return i < 0 && (i = _r(n + i, 0)), Gt(e, po(t, 3), i)
                }

                function Vo(e, t, r) {
                    var n = null == e ? 0 : e.length;
                    if (!n) return -1;
                    var o = n - 1;
                    return r !== i && (o = ya(r), o = r < 0 ? _r(n + o, 0) : vr(o, n - 1)), Gt(e, po(t, 3), o, !0)
                }

                function Ko(e) {
                    return (null == e ? 0 : e.length) ? _n(e, 1) : []
                }

                function Xo(e) {
                    return e && e.length ? e[0] : i
                }
                var Yo = Jn((function(e) {
                        var t = Pt(e, _i);
                        return t.length && t[0] === e[0] ? kn(t) : []
                    })),
                    Qo = Jn((function(e) {
                        var t = Zo(e),
                            r = Pt(e, _i);
                        return t === Zo(r) ? t = i : r.pop(), r.length && r[0] === e[0] ? kn(r, po(t, 2)) : []
                    })),
                    Jo = Jn((function(e) {
                        var t = Zo(e),
                            r = Pt(e, _i);
                        return (t = "function" == typeof t ? t : i) && r.pop(), r.length && r[0] === e[0] ? kn(r, i, t) : []
                    }));

                function Zo(e) {
                    var t = null == e ? 0 : e.length;
                    return t ? e[t - 1] : i
                }
                var es = Jn(ts);

                function ts(e, t) {
                    return e && e.length && t && t.length ? Kn(e, t) : e
                }
                var rs = io((function(e, t) {
                    var r = null == e ? 0 : e.length,
                        n = un(e, t);
                    return Xn(e, Pt(t, (function(e) {
                        return wo(e, r) ? +e : e
                    })).sort(xi)), n
                }));

                function ns(e) {
                    return null == e ? e : Tr.call(e)
                }
                var is = Jn((function(e) {
                        return di(_n(e, 1, Ys, !0))
                    })),
                    os = Jn((function(e) {
                        var t = Zo(e);
                        return Ys(t) && (t = i), di(_n(e, 1, Ys, !0), po(t, 2))
                    })),
                    ss = Jn((function(e) {
                        var t = Zo(e);
                        return t = "function" == typeof t ? t : i, di(_n(e, 1, Ys, !0), i, t)
                    }));

                function as(e) {
                    if (!e || !e.length) return [];
                    var t = 0;
                    return e = Ct(e, (function(e) {
                        if (Ys(e)) return t = _r(e.length, t), !0
                    })), Xt(t, (function(t) {
                        return Pt(e, zt(t))
                    }))
                }

                function us(e, t) {
                    if (!e || !e.length) return [];
                    var r = as(e);
                    return null == t ? r : Pt(r, (function(e) {
                        return St(t, i, e)
                    }))
                }
                var cs = Jn((function(e, t) {
                        return Ys(e) ? fn(e, t) : []
                    })),
                    ps = Jn((function(e) {
                        return yi(Ct(e, Ys))
                    })),
                    ls = Jn((function(e) {
                        var t = Zo(e);
                        return Ys(t) && (t = i), yi(Ct(e, Ys), po(t, 2))
                    })),
                    ds = Jn((function(e) {
                        var t = Zo(e);
                        return t = "function" == typeof t ? t : i, yi(Ct(e, Ys), i, t)
                    })),
                    fs = Jn(as);
                var hs = Jn((function(e) {
                    var t = e.length,
                        r = t > 1 ? e[t - 1] : i;
                    return r = "function" == typeof r ? (e.pop(), r) : i, us(e, r)
                }));

                function gs(e) {
                    var t = Mr(e);
                    return t.__chain__ = !0, t
                }

                function ms(e, t) {
                    return t(e)
                }
                var ys = io((function(e) {
                    var t = e.length,
                        r = t ? e[0] : 0,
                        n = this.__wrapped__,
                        o = function(t) {
                            return un(t, e)
                        };
                    return !(t > 1 || this.__actions__.length) && n instanceof zr && wo(r) ? ((n = n.slice(r, +r + (t ? 1 : 0))).__actions__.push({
                        func: ms,
                        args: [o],
                        thisArg: i
                    }), new Ur(n, this.__chain__).thru((function(e) {
                        return t && !e.length && e.push(i), e
                    }))) : this.thru(o)
                }));
                var bs = Pi((function(e, t, r) {
                    Ie.call(e, r) ? ++e[r] : an(e, r, 1)
                }));
                var _s = Gi(Wo),
                    vs = Gi(Vo);

                function ws(e, t) {
                    return (Vs(e) ? Rt : hn)(e, po(t, 3))
                }

                function Es(e, t) {
                    return (Vs(e) ? xt : gn)(e, po(t, 3))
                }
                var qs = Pi((function(e, t, r) {
                    Ie.call(e, r) ? e[r].push(t) : an(e, r, [t])
                }));
                var Ts = Jn((function(e, t, r) {
                        var i = -1,
                            o = "function" == typeof t,
                            s = Xs(e) ? n(e.length) : [];
                        return hn(e, (function(e) {
                            s[++i] = o ? St(t, e, r) : jn(e, t, r)
                        })), s
                    })),
                    Ss = Pi((function(e, t, r) {
                        an(e, r, t)
                    }));

                function As(e, t) {
                    return (Vs(e) ? Pt : Mn)(e, po(t, 3))
                }
                var Rs = Pi((function(e, t, r) {
                    e[r ? 0 : 1].push(t)
                }), (function() {
                    return [
                        [],
                        []
                    ]
                }));
                var xs = Jn((function(e, t) {
                        if (null == e) return [];
                        var r = t.length;
                        return r > 1 && Eo(e, t[0], t[1]) ? t = [] : r > 2 && Eo(t[0], t[1], t[2]) && (t = [t[0]]), Wn(e, _n(t, 1), [])
                    })),
                    Os = dt || function() {
                        return ft.Date.now()
                    };

                function Cs(e, t, r) {
                    return t = r ? i : t, t = e && null == t ? e.length : t, Zi(e, l, i, i, i, i, t)
                }

                function ks(e, t) {
                    var r;
                    if ("function" != typeof t) throw new Ce(o);
                    return e = ya(e),
                        function() {
                            return --e > 0 && (r = t.apply(this, arguments)), e <= 1 && (t = i), r
                        }
                }
                var js = Jn((function(e, t, r) {
                        var n = 1;
                        if (r.length) {
                            var i = cr(r, co(js));
                            n |= c
                        }
                        return Zi(e, n, t, r, i)
                    })),
                    Ps = Jn((function(e, t, r) {
                        var n = 3;
                        if (r.length) {
                            var i = cr(r, co(Ps));
                            n |= c
                        }
                        return Zi(t, n, e, r, i)
                    }));

                function Ls(e, t, r) {
                    var n, s, a, u, c, p, l = 0,
                        d = !1,
                        f = !1,
                        h = !0;
                    if ("function" != typeof e) throw new Ce(o);

                    function g(t) {
                        var r = n,
                            o = s;
                        return n = s = i, l = t, u = e.apply(o, r)
                    }

                    function m(e) {
                        return l = e, c = Lo(b, t), d ? g(e) : u
                    }

                    function y(e) {
                        var r = e - p;
                        return p === i || r >= t || r < 0 || f && e - l >= a
                    }

                    function b() {
                        var e = Os();
                        if (y(e)) return _(e);
                        c = Lo(b, function(e) {
                            var r = t - (e - p);
                            return f ? vr(r, a - (e - l)) : r
                        }(e))
                    }

                    function _(e) {
                        return c = i, h && n ? g(e) : (n = s = i, u)
                    }

                    function v() {
                        var e = Os(),
                            r = y(e);
                        if (n = arguments, s = this, p = e, r) {
                            if (c === i) return m(p);
                            if (f) return Ti(c), c = Lo(b, t), g(p)
                        }
                        return c === i && (c = Lo(b, t)), u
                    }
                    return t = _a(t) || 0, na(r) && (d = !!r.leading, a = (f = "maxWait" in r) ? _r(_a(r.maxWait) || 0, t) : a, h = "trailing" in r ? !!r.trailing : h), v.cancel = function() {
                        c !== i && Ti(c), l = 0, n = p = s = c = i
                    }, v.flush = function() {
                        return c === i ? u : _(Os())
                    }, v
                }
                var $s = Jn((function(e, t) {
                        return dn(e, 1, t)
                    })),
                    Is = Jn((function(e, t, r) {
                        return dn(e, _a(t) || 0, r)
                    }));

                function Ns(e, t) {
                    if ("function" != typeof e || null != t && "function" != typeof t) throw new Ce(o);
                    var r = function() {
                        var n = arguments,
                            i = t ? t.apply(this, n) : n[0],
                            o = r.cache;
                        if (o.has(i)) return o.get(i);
                        var s = e.apply(this, n);
                        return r.cache = o.set(i, s) || o, s
                    };
                    return r.cache = new(Ns.Cache || Kr), r
                }

                function Bs(e) {
                    if ("function" != typeof e) throw new Ce(o);
                    return function() {
                        var t = arguments;
                        switch (t.length) {
                            case 0:
                                return !e.call(this);
                            case 1:
                                return !e.call(this, t[0]);
                            case 2:
                                return !e.call(this, t[0], t[1]);
                            case 3:
                                return !e.call(this, t[0], t[1], t[2])
                        }
                        return !e.apply(this, t)
                    }
                }
                Ns.Cache = Kr;
                var Ds = Ei((function(e, t) {
                        var r = (t = 1 == t.length && Vs(t[0]) ? Pt(t[0], Qt(po())) : Pt(_n(t, 1), Qt(po()))).length;
                        return Jn((function(n) {
                            for (var i = -1, o = vr(n.length, r); ++i < o;) n[i] = t[i].call(this, n[i]);
                            return St(e, this, n)
                        }))
                    })),
                    Gs = Jn((function(e, t) {
                        var r = cr(t, co(Gs));
                        return Zi(e, c, i, t, r)
                    })),
                    Ms = Jn((function(e, t) {
                        var r = cr(t, co(Ms));
                        return Zi(e, p, i, t, r)
                    })),
                    Fs = io((function(e, t) {
                        return Zi(e, d, i, i, i, t)
                    }));

                function Hs(e, t) {
                    return e === t || e != e && t != t
                }
                var Us = Ki(xn),
                    zs = Ki((function(e, t) {
                        return e >= t
                    })),
                    Ws = Pn(function() {
                        return arguments
                    }()) ? Pn : function(e) {
                        return ia(e) && Ie.call(e, "callee") && !Xe.call(e, "callee")
                    },
                    Vs = n.isArray,
                    Ks = _t ? Qt(_t) : function(e) {
                        return ia(e) && Rn(e) == L
                    };

                function Xs(e) {
                    return null != e && ra(e.length) && !ea(e)
                }

                function Ys(e) {
                    return ia(e) && Xs(e)
                }
                var Qs = Bt || _u,
                    Js = vt ? Qt(vt) : function(e) {
                        return ia(e) && Rn(e) == w
                    };

                function Zs(e) {
                    if (!ia(e)) return !1;
                    var t = Rn(e);
                    return t == E || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !aa(e)
                }

                function ea(e) {
                    if (!na(e)) return !1;
                    var t = Rn(e);
                    return t == q || t == T || "[object AsyncFunction]" == t || "[object Proxy]" == t
                }

                function ta(e) {
                    return "number" == typeof e && e == ya(e)
                }

                function ra(e) {
                    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= h
                }

                function na(e) {
                    var t = typeof e;
                    return null != e && ("object" == t || "function" == t)
                }

                function ia(e) {
                    return null != e && "object" == typeof e
                }
                var oa = wt ? Qt(wt) : function(e) {
                    return ia(e) && yo(e) == S
                };

                function sa(e) {
                    return "number" == typeof e || ia(e) && Rn(e) == A
                }

                function aa(e) {
                    if (!ia(e) || Rn(e) != R) return !1;
                    var t = Ve(e);
                    if (null === t) return !0;
                    var r = Ie.call(t, "constructor") && t.constructor;
                    return "function" == typeof r && r instanceof r && $e.call(r) == Ge
                }
                var ua = Et ? Qt(Et) : function(e) {
                    return ia(e) && Rn(e) == O
                };
                var ca = qt ? Qt(qt) : function(e) {
                    return ia(e) && yo(e) == C
                };

                function pa(e) {
                    return "string" == typeof e || !Vs(e) && ia(e) && Rn(e) == k
                }

                function la(e) {
                    return "symbol" == typeof e || ia(e) && Rn(e) == j
                }
                var da = Tt ? Qt(Tt) : function(e) {
                    return ia(e) && ra(e.length) && !!st[Rn(e)]
                };
                var fa = Ki(Gn),
                    ha = Ki((function(e, t) {
                        return e <= t
                    }));

                function ga(e) {
                    if (!e) return [];
                    if (Xs(e)) return pa(e) ? fr(e) : ki(e);
                    if (et && e[et]) return function(e) {
                        for (var t, r = []; !(t = e.next()).done;) r.push(t.value);
                        return r
                    }(e[et]());
                    var t = yo(e);
                    return (t == S ? ar : t == C ? pr : Ha)(e)
                }

                function ma(e) {
                    return e ? (e = _a(e)) === f || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
                }

                function ya(e) {
                    var t = ma(e),
                        r = t % 1;
                    return t == t ? r ? t - r : t : 0
                }

                function ba(e) {
                    return e ? cn(ya(e), 0, m) : 0
                }

                function _a(e) {
                    if ("number" == typeof e) return e;
                    if (la(e)) return g;
                    if (na(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = na(t) ? t + "" : t
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = Yt(e);
                    var r = ye.test(e);
                    return r || _e.test(e) ? pt(e.slice(2), r ? 2 : 8) : me.test(e) ? g : +e
                }

                function va(e) {
                    return ji(e, $a(e))
                }

                function wa(e) {
                    return null == e ? "" : li(e)
                }
                var Ea = Li((function(e, t) {
                        if (Ao(t) || Xs(t)) ji(t, La(t), e);
                        else
                            for (var r in t) Ie.call(t, r) && rn(e, r, t[r])
                    })),
                    qa = Li((function(e, t) {
                        ji(t, $a(t), e)
                    })),
                    Ta = Li((function(e, t, r, n) {
                        ji(t, $a(t), e, n)
                    })),
                    Sa = Li((function(e, t, r, n) {
                        ji(t, La(t), e, n)
                    })),
                    Aa = io(un);
                var Ra = Jn((function(e, t) {
                        e = Re(e);
                        var r = -1,
                            n = t.length,
                            o = n > 2 ? t[2] : i;
                        for (o && Eo(t[0], t[1], o) && (n = 1); ++r < n;)
                            for (var s = t[r], a = $a(s), u = -1, c = a.length; ++u < c;) {
                                var p = a[u],
                                    l = e[p];
                                (l === i || Hs(l, Pe[p]) && !Ie.call(e, p)) && (e[p] = s[p])
                            }
                        return e
                    })),
                    xa = Jn((function(e) {
                        return e.push(i, to), St(Na, i, e)
                    }));

                function Oa(e, t, r) {
                    var n = null == e ? i : Sn(e, t);
                    return n === i ? r : n
                }

                function Ca(e, t) {
                    return null != e && bo(e, t, Cn)
                }
                var ka = Hi((function(e, t, r) {
                        null != t && "function" != typeof t.toString && (t = De.call(t)), e[t] = r
                    }), nu(su)),
                    ja = Hi((function(e, t, r) {
                        null != t && "function" != typeof t.toString && (t = De.call(t)), Ie.call(e, t) ? e[t].push(r) : e[t] = [r]
                    }), po),
                    Pa = Jn(jn);

                function La(e) {
                    return Xs(e) ? Qr(e) : Bn(e)
                }

                function $a(e) {
                    return Xs(e) ? Qr(e, !0) : Dn(e)
                }
                var Ia = Li((function(e, t, r) {
                        Un(e, t, r)
                    })),
                    Na = Li((function(e, t, r, n) {
                        Un(e, t, r, n)
                    })),
                    Ba = io((function(e, t) {
                        var r = {};
                        if (null == e) return r;
                        var n = !1;
                        t = Pt(t, (function(t) {
                            return t = wi(t, e), n || (n = t.length > 1), t
                        })), ji(e, so(e), r), n && (r = pn(r, 7, ro));
                        for (var i = t.length; i--;) fi(r, t[i]);
                        return r
                    }));
                var Da = io((function(e, t) {
                    return null == e ? {} : function(e, t) {
                        return Vn(e, t, (function(t, r) {
                            return Ca(e, r)
                        }))
                    }(e, t)
                }));

                function Ga(e, t) {
                    if (null == e) return {};
                    var r = Pt(so(e), (function(e) {
                        return [e]
                    }));
                    return t = po(t), Vn(e, r, (function(e, r) {
                        return t(e, r[0])
                    }))
                }
                var Ma = Ji(La),
                    Fa = Ji($a);

                function Ha(e) {
                    return null == e ? [] : Jt(e, La(e))
                }
                var Ua = Bi((function(e, t, r) {
                    return t = t.toLowerCase(), e + (r ? za(t) : t)
                }));

                function za(e) {
                    return Za(wa(e).toLowerCase())
                }

                function Wa(e) {
                    return (e = wa(e)) && e.replace(we, nr).replace(Ze, "")
                }
                var Va = Bi((function(e, t, r) {
                        return e + (r ? "-" : "") + t.toLowerCase()
                    })),
                    Ka = Bi((function(e, t, r) {
                        return e + (r ? " " : "") + t.toLowerCase()
                    })),
                    Xa = Ni("toLowerCase");
                var Ya = Bi((function(e, t, r) {
                    return e + (r ? "_" : "") + t.toLowerCase()
                }));
                var Qa = Bi((function(e, t, r) {
                    return e + (r ? " " : "") + Za(t)
                }));
                var Ja = Bi((function(e, t, r) {
                        return e + (r ? " " : "") + t.toUpperCase()
                    })),
                    Za = Ni("toUpperCase");

                function eu(e, t, r) {
                    return e = wa(e), (t = r ? i : t) === i ? function(e) {
                        return nt.test(e)
                    }(e) ? function(e) {
                        return e.match(tt) || []
                    }(e) : function(e) {
                        return e.match(le) || []
                    }(e) : e.match(t) || []
                }
                var tu = Jn((function(e, t) {
                        try {
                            return St(e, i, t)
                        } catch (e) {
                            return Zs(e) ? e : new Te(e)
                        }
                    })),
                    ru = io((function(e, t) {
                        return Rt(t, (function(t) {
                            t = Go(t), an(e, t, js(e[t], e))
                        })), e
                    }));

                function nu(e) {
                    return function() {
                        return e
                    }
                }
                var iu = Mi(),
                    ou = Mi(!0);

                function su(e) {
                    return e
                }

                function au(e) {
                    return Nn("function" == typeof e ? e : pn(e, 1))
                }
                var uu = Jn((function(e, t) {
                        return function(r) {
                            return jn(r, e, t)
                        }
                    })),
                    cu = Jn((function(e, t) {
                        return function(r) {
                            return jn(e, r, t)
                        }
                    }));

                function pu(e, t, r) {
                    var n = La(t),
                        i = Tn(t, n);
                    null != r || na(t) && (i.length || !n.length) || (r = t, t = e, e = this, i = Tn(t, La(t)));
                    var o = !(na(r) && "chain" in r && !r.chain),
                        s = ea(e);
                    return Rt(i, (function(r) {
                        var n = t[r];
                        e[r] = n, s && (e.prototype[r] = function() {
                            var t = this.__chain__;
                            if (o || t) {
                                var r = e(this.__wrapped__),
                                    i = r.__actions__ = ki(this.__actions__);
                                return i.push({
                                    func: n,
                                    args: arguments,
                                    thisArg: e
                                }), r.__chain__ = t, r
                            }
                            return n.apply(e, Lt([this.value()], arguments))
                        })
                    })), e
                }

                function lu() {}
                var du = zi(Pt),
                    fu = zi(Ot),
                    hu = zi(Nt);

                function gu(e) {
                    return qo(e) ? zt(Go(e)) : function(e) {
                        return function(t) {
                            return Sn(t, e)
                        }
                    }(e)
                }
                var mu = Vi(),
                    yu = Vi(!0);

                function bu() {
                    return []
                }

                function _u() {
                    return !1
                }
                var vu = Ui((function(e, t) {
                        return e + t
                    }), 0),
                    wu = Yi("ceil"),
                    Eu = Ui((function(e, t) {
                        return e / t
                    }), 1),
                    qu = Yi("floor");
                var Tu, Su = Ui((function(e, t) {
                        return e * t
                    }), 1),
                    Au = Yi("round"),
                    Ru = Ui((function(e, t) {
                        return e - t
                    }), 0);
                return Mr.after = function(e, t) {
                    if ("function" != typeof t) throw new Ce(o);
                    return e = ya(e),
                        function() {
                            if (--e < 1) return t.apply(this, arguments)
                        }
                }, Mr.ary = Cs, Mr.assign = Ea, Mr.assignIn = qa, Mr.assignInWith = Ta, Mr.assignWith = Sa, Mr.at = Aa, Mr.before = ks, Mr.bind = js, Mr.bindAll = ru, Mr.bindKey = Ps, Mr.castArray = function() {
                    if (!arguments.length) return [];
                    var e = arguments[0];
                    return Vs(e) ? e : [e]
                }, Mr.chain = gs, Mr.chunk = function(e, t, r) {
                    t = (r ? Eo(e, t, r) : t === i) ? 1 : _r(ya(t), 0);
                    var o = null == e ? 0 : e.length;
                    if (!o || t < 1) return [];
                    for (var s = 0, a = 0, u = n(gt(o / t)); s < o;) u[a++] = oi(e, s, s += t);
                    return u
                }, Mr.compact = function(e) {
                    for (var t = -1, r = null == e ? 0 : e.length, n = 0, i = []; ++t < r;) {
                        var o = e[t];
                        o && (i[n++] = o)
                    }
                    return i
                }, Mr.concat = function() {
                    var e = arguments.length;
                    if (!e) return [];
                    for (var t = n(e - 1), r = arguments[0], i = e; i--;) t[i - 1] = arguments[i];
                    return Lt(Vs(r) ? ki(r) : [r], _n(t, 1))
                }, Mr.cond = function(e) {
                    var t = null == e ? 0 : e.length,
                        r = po();
                    return e = t ? Pt(e, (function(e) {
                        if ("function" != typeof e[1]) throw new Ce(o);
                        return [r(e[0]), e[1]]
                    })) : [], Jn((function(r) {
                        for (var n = -1; ++n < t;) {
                            var i = e[n];
                            if (St(i[0], this, r)) return St(i[1], this, r)
                        }
                    }))
                }, Mr.conforms = function(e) {
                    return function(e) {
                        var t = La(e);
                        return function(r) {
                            return ln(r, e, t)
                        }
                    }(pn(e, 1))
                }, Mr.constant = nu, Mr.countBy = bs, Mr.create = function(e, t) {
                    var r = Fr(e);
                    return null == t ? r : sn(r, t)
                }, Mr.curry = function e(t, r, n) {
                    var o = Zi(t, 8, i, i, i, i, i, r = n ? i : r);
                    return o.placeholder = e.placeholder, o
                }, Mr.curryRight = function e(t, r, n) {
                    var o = Zi(t, u, i, i, i, i, i, r = n ? i : r);
                    return o.placeholder = e.placeholder, o
                }, Mr.debounce = Ls, Mr.defaults = Ra, Mr.defaultsDeep = xa, Mr.defer = $s, Mr.delay = Is, Mr.difference = Ho, Mr.differenceBy = Uo, Mr.differenceWith = zo, Mr.drop = function(e, t, r) {
                    var n = null == e ? 0 : e.length;
                    return n ? oi(e, (t = r || t === i ? 1 : ya(t)) < 0 ? 0 : t, n) : []
                }, Mr.dropRight = function(e, t, r) {
                    var n = null == e ? 0 : e.length;
                    return n ? oi(e, 0, (t = n - (t = r || t === i ? 1 : ya(t))) < 0 ? 0 : t) : []
                }, Mr.dropRightWhile = function(e, t) {
                    return e && e.length ? gi(e, po(t, 3), !0, !0) : []
                }, Mr.dropWhile = function(e, t) {
                    return e && e.length ? gi(e, po(t, 3), !0) : []
                }, Mr.fill = function(e, t, r, n) {
                    var o = null == e ? 0 : e.length;
                    return o ? (r && "number" != typeof r && Eo(e, t, r) && (r = 0, n = o), function(e, t, r, n) {
                        var o = e.length;
                        for ((r = ya(r)) < 0 && (r = -r > o ? 0 : o + r), (n = n === i || n > o ? o : ya(n)) < 0 && (n += o), n = r > n ? 0 : ba(n); r < n;) e[r++] = t;
                        return e
                    }(e, t, r, n)) : []
                }, Mr.filter = function(e, t) {
                    return (Vs(e) ? Ct : bn)(e, po(t, 3))
                }, Mr.flatMap = function(e, t) {
                    return _n(As(e, t), 1)
                }, Mr.flatMapDeep = function(e, t) {
                    return _n(As(e, t), f)
                }, Mr.flatMapDepth = function(e, t, r) {
                    return r = r === i ? 1 : ya(r), _n(As(e, t), r)
                }, Mr.flatten = Ko, Mr.flattenDeep = function(e) {
                    return (null == e ? 0 : e.length) ? _n(e, f) : []
                }, Mr.flattenDepth = function(e, t) {
                    return (null == e ? 0 : e.length) ? _n(e, t = t === i ? 1 : ya(t)) : []
                }, Mr.flip = function(e) {
                    return Zi(e, 512)
                }, Mr.flow = iu, Mr.flowRight = ou, Mr.fromPairs = function(e) {
                    for (var t = -1, r = null == e ? 0 : e.length, n = {}; ++t < r;) {
                        var i = e[t];
                        n[i[0]] = i[1]
                    }
                    return n
                }, Mr.functions = function(e) {
                    return null == e ? [] : Tn(e, La(e))
                }, Mr.functionsIn = function(e) {
                    return null == e ? [] : Tn(e, $a(e))
                }, Mr.groupBy = qs, Mr.initial = function(e) {
                    return (null == e ? 0 : e.length) ? oi(e, 0, -1) : []
                }, Mr.intersection = Yo, Mr.intersectionBy = Qo, Mr.intersectionWith = Jo, Mr.invert = ka, Mr.invertBy = ja, Mr.invokeMap = Ts, Mr.iteratee = au, Mr.keyBy = Ss, Mr.keys = La, Mr.keysIn = $a, Mr.map = As, Mr.mapKeys = function(e, t) {
                    var r = {};
                    return t = po(t, 3), En(e, (function(e, n, i) {
                        an(r, t(e, n, i), e)
                    })), r
                }, Mr.mapValues = function(e, t) {
                    var r = {};
                    return t = po(t, 3), En(e, (function(e, n, i) {
                        an(r, n, t(e, n, i))
                    })), r
                }, Mr.matches = function(e) {
                    return Fn(pn(e, 1))
                }, Mr.matchesProperty = function(e, t) {
                    return Hn(e, pn(t, 1))
                }, Mr.memoize = Ns, Mr.merge = Ia, Mr.mergeWith = Na, Mr.method = uu, Mr.methodOf = cu, Mr.mixin = pu, Mr.negate = Bs, Mr.nthArg = function(e) {
                    return e = ya(e), Jn((function(t) {
                        return zn(t, e)
                    }))
                }, Mr.omit = Ba, Mr.omitBy = function(e, t) {
                    return Ga(e, Bs(po(t)))
                }, Mr.once = function(e) {
                    return ks(2, e)
                }, Mr.orderBy = function(e, t, r, n) {
                    return null == e ? [] : (Vs(t) || (t = null == t ? [] : [t]), Vs(r = n ? i : r) || (r = null == r ? [] : [r]), Wn(e, t, r))
                }, Mr.over = du, Mr.overArgs = Ds, Mr.overEvery = fu, Mr.overSome = hu, Mr.partial = Gs, Mr.partialRight = Ms, Mr.partition = Rs, Mr.pick = Da, Mr.pickBy = Ga, Mr.property = gu, Mr.propertyOf = function(e) {
                    return function(t) {
                        return null == e ? i : Sn(e, t)
                    }
                }, Mr.pull = es, Mr.pullAll = ts, Mr.pullAllBy = function(e, t, r) {
                    return e && e.length && t && t.length ? Kn(e, t, po(r, 2)) : e
                }, Mr.pullAllWith = function(e, t, r) {
                    return e && e.length && t && t.length ? Kn(e, t, i, r) : e
                }, Mr.pullAt = rs, Mr.range = mu, Mr.rangeRight = yu, Mr.rearg = Fs, Mr.reject = function(e, t) {
                    return (Vs(e) ? Ct : bn)(e, Bs(po(t, 3)))
                }, Mr.remove = function(e, t) {
                    var r = [];
                    if (!e || !e.length) return r;
                    var n = -1,
                        i = [],
                        o = e.length;
                    for (t = po(t, 3); ++n < o;) {
                        var s = e[n];
                        t(s, n, e) && (r.push(s), i.push(n))
                    }
                    return Xn(e, i), r
                }, Mr.rest = function(e, t) {
                    if ("function" != typeof e) throw new Ce(o);
                    return Jn(e, t = t === i ? t : ya(t))
                }, Mr.reverse = ns, Mr.sampleSize = function(e, t, r) {
                    return t = (r ? Eo(e, t, r) : t === i) ? 1 : ya(t), (Vs(e) ? Zr : ei)(e, t)
                }, Mr.set = function(e, t, r) {
                    return null == e ? e : ti(e, t, r)
                }, Mr.setWith = function(e, t, r, n) {
                    return n = "function" == typeof n ? n : i, null == e ? e : ti(e, t, r, n)
                }, Mr.shuffle = function(e) {
                    return (Vs(e) ? en : ii)(e)
                }, Mr.slice = function(e, t, r) {
                    var n = null == e ? 0 : e.length;
                    return n ? (r && "number" != typeof r && Eo(e, t, r) ? (t = 0, r = n) : (t = null == t ? 0 : ya(t), r = r === i ? n : ya(r)), oi(e, t, r)) : []
                }, Mr.sortBy = xs, Mr.sortedUniq = function(e) {
                    return e && e.length ? ci(e) : []
                }, Mr.sortedUniqBy = function(e, t) {
                    return e && e.length ? ci(e, po(t, 2)) : []
                }, Mr.split = function(e, t, r) {
                    return r && "number" != typeof r && Eo(e, t, r) && (t = r = i), (r = r === i ? m : r >>> 0) ? (e = wa(e)) && ("string" == typeof t || null != t && !ua(t)) && !(t = li(t)) && sr(e) ? qi(fr(e), 0, r) : e.split(t, r) : []
                }, Mr.spread = function(e, t) {
                    if ("function" != typeof e) throw new Ce(o);
                    return t = null == t ? 0 : _r(ya(t), 0), Jn((function(r) {
                        var n = r[t],
                            i = qi(r, 0, t);
                        return n && Lt(i, n), St(e, this, i)
                    }))
                }, Mr.tail = function(e) {
                    var t = null == e ? 0 : e.length;
                    return t ? oi(e, 1, t) : []
                }, Mr.take = function(e, t, r) {
                    return e && e.length ? oi(e, 0, (t = r || t === i ? 1 : ya(t)) < 0 ? 0 : t) : []
                }, Mr.takeRight = function(e, t, r) {
                    var n = null == e ? 0 : e.length;
                    return n ? oi(e, (t = n - (t = r || t === i ? 1 : ya(t))) < 0 ? 0 : t, n) : []
                }, Mr.takeRightWhile = function(e, t) {
                    return e && e.length ? gi(e, po(t, 3), !1, !0) : []
                }, Mr.takeWhile = function(e, t) {
                    return e && e.length ? gi(e, po(t, 3)) : []
                }, Mr.tap = function(e, t) {
                    return t(e), e
                }, Mr.throttle = function(e, t, r) {
                    var n = !0,
                        i = !0;
                    if ("function" != typeof e) throw new Ce(o);
                    return na(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), Ls(e, t, {
                        leading: n,
                        maxWait: t,
                        trailing: i
                    })
                }, Mr.thru = ms, Mr.toArray = ga, Mr.toPairs = Ma, Mr.toPairsIn = Fa, Mr.toPath = function(e) {
                    return Vs(e) ? Pt(e, Go) : la(e) ? [e] : ki(Do(wa(e)))
                }, Mr.toPlainObject = va, Mr.transform = function(e, t, r) {
                    var n = Vs(e),
                        i = n || Qs(e) || da(e);
                    if (t = po(t, 4), null == r) {
                        var o = e && e.constructor;
                        r = i ? n ? new o : [] : na(e) && ea(o) ? Fr(Ve(e)) : {}
                    }
                    return (i ? Rt : En)(e, (function(e, n, i) {
                        return t(r, e, n, i)
                    })), r
                }, Mr.unary = function(e) {
                    return Cs(e, 1)
                }, Mr.union = is, Mr.unionBy = os, Mr.unionWith = ss, Mr.uniq = function(e) {
                    return e && e.length ? di(e) : []
                }, Mr.uniqBy = function(e, t) {
                    return e && e.length ? di(e, po(t, 2)) : []
                }, Mr.uniqWith = function(e, t) {
                    return t = "function" == typeof t ? t : i, e && e.length ? di(e, i, t) : []
                }, Mr.unset = function(e, t) {
                    return null == e || fi(e, t)
                }, Mr.unzip = as, Mr.unzipWith = us, Mr.update = function(e, t, r) {
                    return null == e ? e : hi(e, t, vi(r))
                }, Mr.updateWith = function(e, t, r, n) {
                    return n = "function" == typeof n ? n : i, null == e ? e : hi(e, t, vi(r), n)
                }, Mr.values = Ha, Mr.valuesIn = function(e) {
                    return null == e ? [] : Jt(e, $a(e))
                }, Mr.without = cs, Mr.words = eu, Mr.wrap = function(e, t) {
                    return Gs(vi(t), e)
                }, Mr.xor = ps, Mr.xorBy = ls, Mr.xorWith = ds, Mr.zip = fs, Mr.zipObject = function(e, t) {
                    return bi(e || [], t || [], rn)
                }, Mr.zipObjectDeep = function(e, t) {
                    return bi(e || [], t || [], ti)
                }, Mr.zipWith = hs, Mr.entries = Ma, Mr.entriesIn = Fa, Mr.extend = qa, Mr.extendWith = Ta, pu(Mr, Mr), Mr.add = vu, Mr.attempt = tu, Mr.camelCase = Ua, Mr.capitalize = za, Mr.ceil = wu, Mr.clamp = function(e, t, r) {
                    return r === i && (r = t, t = i), r !== i && (r = (r = _a(r)) == r ? r : 0), t !== i && (t = (t = _a(t)) == t ? t : 0), cn(_a(e), t, r)
                }, Mr.clone = function(e) {
                    return pn(e, 4)
                }, Mr.cloneDeep = function(e) {
                    return pn(e, 5)
                }, Mr.cloneDeepWith = function(e, t) {
                    return pn(e, 5, t = "function" == typeof t ? t : i)
                }, Mr.cloneWith = function(e, t) {
                    return pn(e, 4, t = "function" == typeof t ? t : i)
                }, Mr.conformsTo = function(e, t) {
                    return null == t || ln(e, t, La(t))
                }, Mr.deburr = Wa, Mr.defaultTo = function(e, t) {
                    return null == e || e != e ? t : e
                }, Mr.divide = Eu, Mr.endsWith = function(e, t, r) {
                    e = wa(e), t = li(t);
                    var n = e.length,
                        o = r = r === i ? n : cn(ya(r), 0, n);
                    return (r -= t.length) >= 0 && e.slice(r, o) == t
                }, Mr.eq = Hs, Mr.escape = function(e) {
                    return (e = wa(e)) && Q.test(e) ? e.replace(X, ir) : e
                }, Mr.escapeRegExp = function(e) {
                    return (e = wa(e)) && oe.test(e) ? e.replace(ie, "\\$&") : e
                }, Mr.every = function(e, t, r) {
                    var n = Vs(e) ? Ot : mn;
                    return r && Eo(e, t, r) && (t = i), n(e, po(t, 3))
                }, Mr.find = _s, Mr.findIndex = Wo, Mr.findKey = function(e, t) {
                    return Dt(e, po(t, 3), En)
                }, Mr.findLast = vs, Mr.findLastIndex = Vo, Mr.findLastKey = function(e, t) {
                    return Dt(e, po(t, 3), qn)
                }, Mr.floor = qu, Mr.forEach = ws, Mr.forEachRight = Es, Mr.forIn = function(e, t) {
                    return null == e ? e : vn(e, po(t, 3), $a)
                }, Mr.forInRight = function(e, t) {
                    return null == e ? e : wn(e, po(t, 3), $a)
                }, Mr.forOwn = function(e, t) {
                    return e && En(e, po(t, 3))
                }, Mr.forOwnRight = function(e, t) {
                    return e && qn(e, po(t, 3))
                }, Mr.get = Oa, Mr.gt = Us, Mr.gte = zs, Mr.has = function(e, t) {
                    return null != e && bo(e, t, On)
                }, Mr.hasIn = Ca, Mr.head = Xo, Mr.identity = su, Mr.includes = function(e, t, r, n) {
                    e = Xs(e) ? e : Ha(e), r = r && !n ? ya(r) : 0;
                    var i = e.length;
                    return r < 0 && (r = _r(i + r, 0)), pa(e) ? r <= i && e.indexOf(t, r) > -1 : !!i && Mt(e, t, r) > -1
                }, Mr.indexOf = function(e, t, r) {
                    var n = null == e ? 0 : e.length;
                    if (!n) return -1;
                    var i = null == r ? 0 : ya(r);
                    return i < 0 && (i = _r(n + i, 0)), Mt(e, t, i)
                }, Mr.inRange = function(e, t, r) {
                    return t = ma(t), r === i ? (r = t, t = 0) : r = ma(r),
                        function(e, t, r) {
                            return e >= vr(t, r) && e < _r(t, r)
                        }(e = _a(e), t, r)
                }, Mr.invoke = Pa, Mr.isArguments = Ws, Mr.isArray = Vs, Mr.isArrayBuffer = Ks, Mr.isArrayLike = Xs, Mr.isArrayLikeObject = Ys, Mr.isBoolean = function(e) {
                    return !0 === e || !1 === e || ia(e) && Rn(e) == v
                }, Mr.isBuffer = Qs, Mr.isDate = Js, Mr.isElement = function(e) {
                    return ia(e) && 1 === e.nodeType && !aa(e)
                }, Mr.isEmpty = function(e) {
                    if (null == e) return !0;
                    if (Xs(e) && (Vs(e) || "string" == typeof e || "function" == typeof e.splice || Qs(e) || da(e) || Ws(e))) return !e.length;
                    var t = yo(e);
                    if (t == S || t == C) return !e.size;
                    if (Ao(e)) return !Bn(e).length;
                    for (var r in e)
                        if (Ie.call(e, r)) return !1;
                    return !0
                }, Mr.isEqual = function(e, t) {
                    return Ln(e, t)
                }, Mr.isEqualWith = function(e, t, r) {
                    var n = (r = "function" == typeof r ? r : i) ? r(e, t) : i;
                    return n === i ? Ln(e, t, i, r) : !!n
                }, Mr.isError = Zs, Mr.isFinite = function(e) {
                    return "number" == typeof e && Wt(e)
                }, Mr.isFunction = ea, Mr.isInteger = ta, Mr.isLength = ra, Mr.isMap = oa, Mr.isMatch = function(e, t) {
                    return e === t || $n(e, t, fo(t))
                }, Mr.isMatchWith = function(e, t, r) {
                    return r = "function" == typeof r ? r : i, $n(e, t, fo(t), r)
                }, Mr.isNaN = function(e) {
                    return sa(e) && e != +e
                }, Mr.isNative = function(e) {
                    if (So(e)) throw new Te("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                    return In(e)
                }, Mr.isNil = function(e) {
                    return null == e
                }, Mr.isNull = function(e) {
                    return null === e
                }, Mr.isNumber = sa, Mr.isObject = na, Mr.isObjectLike = ia, Mr.isPlainObject = aa, Mr.isRegExp = ua, Mr.isSafeInteger = function(e) {
                    return ta(e) && e >= -9007199254740991 && e <= h
                }, Mr.isSet = ca, Mr.isString = pa, Mr.isSymbol = la, Mr.isTypedArray = da, Mr.isUndefined = function(e) {
                    return e === i
                }, Mr.isWeakMap = function(e) {
                    return ia(e) && yo(e) == P
                }, Mr.isWeakSet = function(e) {
                    return ia(e) && "[object WeakSet]" == Rn(e)
                }, Mr.join = function(e, t) {
                    return null == e ? "" : yr.call(e, t)
                }, Mr.kebabCase = Va, Mr.last = Zo, Mr.lastIndexOf = function(e, t, r) {
                    var n = null == e ? 0 : e.length;
                    if (!n) return -1;
                    var o = n;
                    return r !== i && (o = (o = ya(r)) < 0 ? _r(n + o, 0) : vr(o, n - 1)), t == t ? function(e, t, r) {
                        for (var n = r + 1; n--;)
                            if (e[n] === t) return n;
                        return n
                    }(e, t, o) : Gt(e, Ht, o, !0)
                }, Mr.lowerCase = Ka, Mr.lowerFirst = Xa, Mr.lt = fa, Mr.lte = ha, Mr.max = function(e) {
                    return e && e.length ? yn(e, su, xn) : i
                }, Mr.maxBy = function(e, t) {
                    return e && e.length ? yn(e, po(t, 2), xn) : i
                }, Mr.mean = function(e) {
                    return Ut(e, su)
                }, Mr.meanBy = function(e, t) {
                    return Ut(e, po(t, 2))
                }, Mr.min = function(e) {
                    return e && e.length ? yn(e, su, Gn) : i
                }, Mr.minBy = function(e, t) {
                    return e && e.length ? yn(e, po(t, 2), Gn) : i
                }, Mr.stubArray = bu, Mr.stubFalse = _u, Mr.stubObject = function() {
                    return {}
                }, Mr.stubString = function() {
                    return ""
                }, Mr.stubTrue = function() {
                    return !0
                }, Mr.multiply = Su, Mr.nth = function(e, t) {
                    return e && e.length ? zn(e, ya(t)) : i
                }, Mr.noConflict = function() {
                    return ft._ === this && (ft._ = Me), this
                }, Mr.noop = lu, Mr.now = Os, Mr.pad = function(e, t, r) {
                    e = wa(e);
                    var n = (t = ya(t)) ? dr(e) : 0;
                    if (!t || n >= t) return e;
                    var i = (t - n) / 2;
                    return Wi(yt(i), r) + e + Wi(gt(i), r)
                }, Mr.padEnd = function(e, t, r) {
                    e = wa(e);
                    var n = (t = ya(t)) ? dr(e) : 0;
                    return t && n < t ? e + Wi(t - n, r) : e
                }, Mr.padStart = function(e, t, r) {
                    e = wa(e);
                    var n = (t = ya(t)) ? dr(e) : 0;
                    return t && n < t ? Wi(t - n, r) + e : e
                }, Mr.parseInt = function(e, t, r) {
                    return r || null == t ? t = 0 : t && (t = +t), Er(wa(e).replace(se, ""), t || 0)
                }, Mr.random = function(e, t, r) {
                    if (r && "boolean" != typeof r && Eo(e, t, r) && (t = r = i), r === i && ("boolean" == typeof t ? (r = t, t = i) : "boolean" == typeof e && (r = e, e = i)), e === i && t === i ? (e = 0, t = 1) : (e = ma(e), t === i ? (t = e, e = 0) : t = ma(t)), e > t) {
                        var n = e;
                        e = t, t = n
                    }
                    if (r || e % 1 || t % 1) {
                        var o = qr();
                        return vr(e + o * (t - e + ct("1e-" + ((o + "").length - 1))), t)
                    }
                    return Yn(e, t)
                }, Mr.reduce = function(e, t, r) {
                    var n = Vs(e) ? $t : Vt,
                        i = arguments.length < 3;
                    return n(e, po(t, 4), r, i, hn)
                }, Mr.reduceRight = function(e, t, r) {
                    var n = Vs(e) ? It : Vt,
                        i = arguments.length < 3;
                    return n(e, po(t, 4), r, i, gn)
                }, Mr.repeat = function(e, t, r) {
                    return t = (r ? Eo(e, t, r) : t === i) ? 1 : ya(t), Qn(wa(e), t)
                }, Mr.replace = function() {
                    var e = arguments,
                        t = wa(e[0]);
                    return e.length < 3 ? t : t.replace(e[1], e[2])
                }, Mr.result = function(e, t, r) {
                    var n = -1,
                        o = (t = wi(t, e)).length;
                    for (o || (o = 1, e = i); ++n < o;) {
                        var s = null == e ? i : e[Go(t[n])];
                        s === i && (n = o, s = r), e = ea(s) ? s.call(e) : s
                    }
                    return e
                }, Mr.round = Au, Mr.runInContext = e, Mr.sample = function(e) {
                    return (Vs(e) ? Jr : Zn)(e)
                }, Mr.size = function(e) {
                    if (null == e) return 0;
                    if (Xs(e)) return pa(e) ? dr(e) : e.length;
                    var t = yo(e);
                    return t == S || t == C ? e.size : Bn(e).length
                }, Mr.snakeCase = Ya, Mr.some = function(e, t, r) {
                    var n = Vs(e) ? Nt : si;
                    return r && Eo(e, t, r) && (t = i), n(e, po(t, 3))
                }, Mr.sortedIndex = function(e, t) {
                    return ai(e, t)
                }, Mr.sortedIndexBy = function(e, t, r) {
                    return ui(e, t, po(r, 2))
                }, Mr.sortedIndexOf = function(e, t) {
                    var r = null == e ? 0 : e.length;
                    if (r) {
                        var n = ai(e, t);
                        if (n < r && Hs(e[n], t)) return n
                    }
                    return -1
                }, Mr.sortedLastIndex = function(e, t) {
                    return ai(e, t, !0)
                }, Mr.sortedLastIndexBy = function(e, t, r) {
                    return ui(e, t, po(r, 2), !0)
                }, Mr.sortedLastIndexOf = function(e, t) {
                    if (null == e ? 0 : e.length) {
                        var r = ai(e, t, !0) - 1;
                        if (Hs(e[r], t)) return r
                    }
                    return -1
                }, Mr.startCase = Qa, Mr.startsWith = function(e, t, r) {
                    return e = wa(e), r = null == r ? 0 : cn(ya(r), 0, e.length), t = li(t), e.slice(r, r + t.length) == t
                }, Mr.subtract = Ru, Mr.sum = function(e) {
                    return e && e.length ? Kt(e, su) : 0
                }, Mr.sumBy = function(e, t) {
                    return e && e.length ? Kt(e, po(t, 2)) : 0
                }, Mr.template = function(e, t, r) {
                    var n = Mr.templateSettings;
                    r && Eo(e, t, r) && (t = i), e = wa(e), t = Ta({}, t, n, eo);
                    var o, s, a = Ta({}, t.imports, n.imports, eo),
                        u = La(a),
                        c = Jt(a, u),
                        p = 0,
                        l = t.interpolate || Ee,
                        d = "__p += '",
                        f = xe((t.escape || Ee).source + "|" + l.source + "|" + (l === ee ? he : Ee).source + "|" + (t.evaluate || Ee).source + "|$", "g"),
                        h = "//# sourceURL=" + (Ie.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++ot + "]") + "\n";
                    e.replace(f, (function(t, r, n, i, a, u) {
                        return n || (n = i), d += e.slice(p, u).replace(qe, or), r && (o = !0, d += "' +\n__e(" + r + ") +\n'"), a && (s = !0, d += "';\n" + a + ";\n__p += '"), n && (d += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"), p = u + t.length, t
                    })), d += "';\n";
                    var g = Ie.call(t, "variable") && t.variable;
                    if (g) {
                        if (de.test(g)) throw new Te("Invalid `variable` option passed into `_.template`")
                    } else d = "with (obj) {\n" + d + "\n}\n";
                    d = (s ? d.replace(z, "") : d).replace(W, "$1").replace(V, "$1;"), d = "function(" + (g || "obj") + ") {\n" + (g ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (s ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + d + "return __p\n}";
                    var m = tu((function() {
                        return Se(u, h + "return " + d).apply(i, c)
                    }));
                    if (m.source = d, Zs(m)) throw m;
                    return m
                }, Mr.times = function(e, t) {
                    if ((e = ya(e)) < 1 || e > h) return [];
                    var r = m,
                        n = vr(e, m);
                    t = po(t), e -= m;
                    for (var i = Xt(n, t); ++r < e;) t(r);
                    return i
                }, Mr.toFinite = ma, Mr.toInteger = ya, Mr.toLength = ba, Mr.toLower = function(e) {
                    return wa(e).toLowerCase()
                }, Mr.toNumber = _a, Mr.toSafeInteger = function(e) {
                    return e ? cn(ya(e), -9007199254740991, h) : 0 === e ? e : 0
                }, Mr.toString = wa, Mr.toUpper = function(e) {
                    return wa(e).toUpperCase()
                }, Mr.trim = function(e, t, r) {
                    if ((e = wa(e)) && (r || t === i)) return Yt(e);
                    if (!e || !(t = li(t))) return e;
                    var n = fr(e),
                        o = fr(t);
                    return qi(n, er(n, o), tr(n, o) + 1).join("")
                }, Mr.trimEnd = function(e, t, r) {
                    if ((e = wa(e)) && (r || t === i)) return e.slice(0, hr(e) + 1);
                    if (!e || !(t = li(t))) return e;
                    var n = fr(e);
                    return qi(n, 0, tr(n, fr(t)) + 1).join("")
                }, Mr.trimStart = function(e, t, r) {
                    if ((e = wa(e)) && (r || t === i)) return e.replace(se, "");
                    if (!e || !(t = li(t))) return e;
                    var n = fr(e);
                    return qi(n, er(n, fr(t))).join("")
                }, Mr.truncate = function(e, t) {
                    var r = 30,
                        n = "...";
                    if (na(t)) {
                        var o = "separator" in t ? t.separator : o;
                        r = "length" in t ? ya(t.length) : r, n = "omission" in t ? li(t.omission) : n
                    }
                    var s = (e = wa(e)).length;
                    if (sr(e)) {
                        var a = fr(e);
                        s = a.length
                    }
                    if (r >= s) return e;
                    var u = r - dr(n);
                    if (u < 1) return n;
                    var c = a ? qi(a, 0, u).join("") : e.slice(0, u);
                    if (o === i) return c + n;
                    if (a && (u += c.length - u), ua(o)) {
                        if (e.slice(u).search(o)) {
                            var p, l = c;
                            for (o.global || (o = xe(o.source, wa(ge.exec(o)) + "g")), o.lastIndex = 0; p = o.exec(l);) var d = p.index;
                            c = c.slice(0, d === i ? u : d)
                        }
                    } else if (e.indexOf(li(o), u) != u) {
                        var f = c.lastIndexOf(o);
                        f > -1 && (c = c.slice(0, f))
                    }
                    return c + n
                }, Mr.unescape = function(e) {
                    return (e = wa(e)) && Y.test(e) ? e.replace(K, gr) : e
                }, Mr.uniqueId = function(e) {
                    var t = ++Ne;
                    return wa(e) + t
                }, Mr.upperCase = Ja, Mr.upperFirst = Za, Mr.each = ws, Mr.eachRight = Es, Mr.first = Xo, pu(Mr, (Tu = {}, En(Mr, (function(e, t) {
                    Ie.call(Mr.prototype, t) || (Tu[t] = e)
                })), Tu), {
                    chain: !1
                }), Mr.VERSION = "4.17.21", Rt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(e) {
                    Mr[e].placeholder = Mr
                })), Rt(["drop", "take"], (function(e, t) {
                    zr.prototype[e] = function(r) {
                        r = r === i ? 1 : _r(ya(r), 0);
                        var n = this.__filtered__ && !t ? new zr(this) : this.clone();
                        return n.__filtered__ ? n.__takeCount__ = vr(r, n.__takeCount__) : n.__views__.push({
                            size: vr(r, m),
                            type: e + (n.__dir__ < 0 ? "Right" : "")
                        }), n
                    }, zr.prototype[e + "Right"] = function(t) {
                        return this.reverse()[e](t).reverse()
                    }
                })), Rt(["filter", "map", "takeWhile"], (function(e, t) {
                    var r = t + 1,
                        n = 1 == r || 3 == r;
                    zr.prototype[e] = function(e) {
                        var t = this.clone();
                        return t.__iteratees__.push({
                            iteratee: po(e, 3),
                            type: r
                        }), t.__filtered__ = t.__filtered__ || n, t
                    }
                })), Rt(["head", "last"], (function(e, t) {
                    var r = "take" + (t ? "Right" : "");
                    zr.prototype[e] = function() {
                        return this[r](1).value()[0]
                    }
                })), Rt(["initial", "tail"], (function(e, t) {
                    var r = "drop" + (t ? "" : "Right");
                    zr.prototype[e] = function() {
                        return this.__filtered__ ? new zr(this) : this[r](1)
                    }
                })), zr.prototype.compact = function() {
                    return this.filter(su)
                }, zr.prototype.find = function(e) {
                    return this.filter(e).head()
                }, zr.prototype.findLast = function(e) {
                    return this.reverse().find(e)
                }, zr.prototype.invokeMap = Jn((function(e, t) {
                    return "function" == typeof e ? new zr(this) : this.map((function(r) {
                        return jn(r, e, t)
                    }))
                })), zr.prototype.reject = function(e) {
                    return this.filter(Bs(po(e)))
                }, zr.prototype.slice = function(e, t) {
                    e = ya(e);
                    var r = this;
                    return r.__filtered__ && (e > 0 || t < 0) ? new zr(r) : (e < 0 ? r = r.takeRight(-e) : e && (r = r.drop(e)), t !== i && (r = (t = ya(t)) < 0 ? r.dropRight(-t) : r.take(t - e)), r)
                }, zr.prototype.takeRightWhile = function(e) {
                    return this.reverse().takeWhile(e).reverse()
                }, zr.prototype.toArray = function() {
                    return this.take(m)
                }, En(zr.prototype, (function(e, t) {
                    var r = /^(?:filter|find|map|reject)|While$/.test(t),
                        n = /^(?:head|last)$/.test(t),
                        o = Mr[n ? "take" + ("last" == t ? "Right" : "") : t],
                        s = n || /^find/.test(t);
                    o && (Mr.prototype[t] = function() {
                        var t = this.__wrapped__,
                            a = n ? [1] : arguments,
                            u = t instanceof zr,
                            c = a[0],
                            p = u || Vs(t),
                            l = function(e) {
                                var t = o.apply(Mr, Lt([e], a));
                                return n && d ? t[0] : t
                            };
                        p && r && "function" == typeof c && 1 != c.length && (u = p = !1);
                        var d = this.__chain__,
                            f = !!this.__actions__.length,
                            h = s && !d,
                            g = u && !f;
                        if (!s && p) {
                            t = g ? t : new zr(this);
                            var m = e.apply(t, a);
                            return m.__actions__.push({
                                func: ms,
                                args: [l],
                                thisArg: i
                            }), new Ur(m, d)
                        }
                        return h && g ? e.apply(this, a) : (m = this.thru(l), h ? n ? m.value()[0] : m.value() : m)
                    })
                })), Rt(["pop", "push", "shift", "sort", "splice", "unshift"], (function(e) {
                    var t = ke[e],
                        r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                        n = /^(?:pop|shift)$/.test(e);
                    Mr.prototype[e] = function() {
                        var e = arguments;
                        if (n && !this.__chain__) {
                            var i = this.value();
                            return t.apply(Vs(i) ? i : [], e)
                        }
                        return this[r]((function(r) {
                            return t.apply(Vs(r) ? r : [], e)
                        }))
                    }
                })), En(zr.prototype, (function(e, t) {
                    var r = Mr[t];
                    if (r) {
                        var n = r.name + "";
                        Ie.call(jr, n) || (jr[n] = []), jr[n].push({
                            name: t,
                            func: r
                        })
                    }
                })), jr[Fi(i, 2).name] = [{
                    name: "wrapper",
                    func: i
                }], zr.prototype.clone = function() {
                    var e = new zr(this.__wrapped__);
                    return e.__actions__ = ki(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = ki(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = ki(this.__views__), e
                }, zr.prototype.reverse = function() {
                    if (this.__filtered__) {
                        var e = new zr(this);
                        e.__dir__ = -1, e.__filtered__ = !0
                    } else(e = this.clone()).__dir__ *= -1;
                    return e
                }, zr.prototype.value = function() {
                    var e = this.__wrapped__.value(),
                        t = this.__dir__,
                        r = Vs(e),
                        n = t < 0,
                        i = r ? e.length : 0,
                        o = function(e, t, r) {
                            var n = -1,
                                i = r.length;
                            for (; ++n < i;) {
                                var o = r[n],
                                    s = o.size;
                                switch (o.type) {
                                    case "drop":
                                        e += s;
                                        break;
                                    case "dropRight":
                                        t -= s;
                                        break;
                                    case "take":
                                        t = vr(t, e + s);
                                        break;
                                    case "takeRight":
                                        e = _r(e, t - s)
                                }
                            }
                            return {
                                start: e,
                                end: t
                            }
                        }(0, i, this.__views__),
                        s = o.start,
                        a = o.end,
                        u = a - s,
                        c = n ? a : s - 1,
                        p = this.__iteratees__,
                        l = p.length,
                        d = 0,
                        f = vr(u, this.__takeCount__);
                    if (!r || !n && i == u && f == u) return mi(e, this.__actions__);
                    var h = [];
                    e: for (; u-- && d < f;) {
                        for (var g = -1, m = e[c += t]; ++g < l;) {
                            var y = p[g],
                                b = y.iteratee,
                                _ = y.type,
                                v = b(m);
                            if (2 == _) m = v;
                            else if (!v) {
                                if (1 == _) continue e;
                                break e
                            }
                        }
                        h[d++] = m
                    }
                    return h
                }, Mr.prototype.at = ys, Mr.prototype.chain = function() {
                    return gs(this)
                }, Mr.prototype.commit = function() {
                    return new Ur(this.value(), this.__chain__)
                }, Mr.prototype.next = function() {
                    this.__values__ === i && (this.__values__ = ga(this.value()));
                    var e = this.__index__ >= this.__values__.length;
                    return {
                        done: e,
                        value: e ? i : this.__values__[this.__index__++]
                    }
                }, Mr.prototype.plant = function(e) {
                    for (var t, r = this; r instanceof Hr;) {
                        var n = Fo(r);
                        n.__index__ = 0, n.__values__ = i, t ? o.__wrapped__ = n : t = n;
                        var o = n;
                        r = r.__wrapped__
                    }
                    return o.__wrapped__ = e, t
                }, Mr.prototype.reverse = function() {
                    var e = this.__wrapped__;
                    if (e instanceof zr) {
                        var t = e;
                        return this.__actions__.length && (t = new zr(this)), (t = t.reverse()).__actions__.push({
                            func: ms,
                            args: [ns],
                            thisArg: i
                        }), new Ur(t, this.__chain__)
                    }
                    return this.thru(ns)
                }, Mr.prototype.toJSON = Mr.prototype.valueOf = Mr.prototype.value = function() {
                    return mi(this.__wrapped__, this.__actions__)
                }, Mr.prototype.first = Mr.prototype.head, et && (Mr.prototype[et] = function() {
                    return this
                }), Mr
            }();
            ft._ = mr, (n = function() {
                return mr
            }.call(t, r, t, e)) === i || (e.exports = n)
        }).call(this)
    }).call(this, r(222)(e))
}, function(e, t, r) {
    "use strict";
    var n;
    e.exports = T, T.ReadableState = q;
    r(26).EventEmitter;
    var i = function(e, t) {
            return e.listeners(t).length
        },
        o = r(65),
        s = r(15).Buffer,
        a = global.Uint8Array || function() {};
    var u, c = r(5);
    u = c && c.debuglog ? c.debuglog("stream") : function() {};
    var p, l, d, f = r(226),
        h = r(66),
        g = r(67).getHighWaterMark,
        m = r(9).codes,
        y = m.ERR_INVALID_ARG_TYPE,
        b = m.ERR_STREAM_PUSH_AFTER_EOF,
        _ = m.ERR_METHOD_NOT_IMPLEMENTED,
        v = m.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
    r(18)(T, o);
    var w = h.errorOrDestroy,
        E = ["error", "close", "destroy", "pause", "resume"];

    function q(e, t, i) {
        n = n || r(13), e = e || {}, "boolean" != typeof i && (i = t instanceof n), this.objectMode = !!e.objectMode, i && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.highWaterMark = g(this, e, "readableHighWaterMark", i), this.buffer = new f, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (p || (p = r(69).StringDecoder), this.decoder = new p(e.encoding), this.encoding = e.encoding)
    }

    function T(e) {
        if (n = n || r(13), !(this instanceof T)) return new T(e);
        var t = this instanceof n;
        this._readableState = new q(e, this, t), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), o.call(this)
    }

    function S(e, t, r, n, i) {
        u("readableAddChunk", t);
        var o, c = e._readableState;
        if (null === t) c.reading = !1,
            function(e, t) {
                if (u("onEofChunk"), t.ended) return;
                if (t.decoder) {
                    var r = t.decoder.end();
                    r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length)
                }
                t.ended = !0, t.sync ? O(e) : (t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, C(e)))
            }(e, c);
        else if (i || (o = function(e, t) {
                var r;
                n = t, s.isBuffer(n) || n instanceof a || "string" == typeof t || void 0 === t || e.objectMode || (r = new y("chunk", ["string", "Buffer", "Uint8Array"], t));
                var n;
                return r
            }(c, t)), o) w(e, o);
        else if (c.objectMode || t && t.length > 0)
            if ("string" == typeof t || c.objectMode || Object.getPrototypeOf(t) === s.prototype || (t = function(e) {
                    return s.from(e)
                }(t)), n) c.endEmitted ? w(e, new v) : A(e, c, t, !0);
            else if (c.ended) w(e, new b);
        else {
            if (c.destroyed) return !1;
            c.reading = !1, c.decoder && !r ? (t = c.decoder.write(t), c.objectMode || 0 !== t.length ? A(e, c, t, !1) : k(e, c)) : A(e, c, t, !1)
        } else n || (c.reading = !1, k(e, c));
        return !c.ended && (c.length < c.highWaterMark || 0 === c.length)
    }

    function A(e, t, r, n) {
        t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0, e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && O(e)), k(e, t)
    }
    Object.defineProperty(T.prototype, "destroyed", {
        enumerable: !1,
        get: function() {
            return void 0 !== this._readableState && this._readableState.destroyed
        },
        set: function(e) {
            this._readableState && (this._readableState.destroyed = e)
        }
    }), T.prototype.destroy = h.destroy, T.prototype._undestroy = h.undestroy, T.prototype._destroy = function(e, t) {
        t(e)
    }, T.prototype.push = function(e, t) {
        var r, n = this._readableState;
        return n.objectMode ? r = !0 : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = s.from(e, t), t = ""), r = !0), S(this, e, t, !1, r)
    }, T.prototype.unshift = function(e) {
        return S(this, e, null, !0, !1)
    }, T.prototype.isPaused = function() {
        return !1 === this._readableState.flowing
    }, T.prototype.setEncoding = function(e) {
        p || (p = r(69).StringDecoder);
        var t = new p(e);
        this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
        for (var n = this._readableState.buffer.head, i = ""; null !== n;) i += t.write(n.data), n = n.next;
        return this._readableState.buffer.clear(), "" !== i && this._readableState.buffer.push(i), this._readableState.length = i.length, this
    };
    var R = 1073741824;

    function x(e, t) {
        return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) {
            return e >= R ? e = R : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e
        }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0))
    }

    function O(e) {
        var t = e._readableState;
        u("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (u("emitReadable", t.flowing), t.emittedReadable = !0, process.nextTick(C, e))
    }

    function C(e) {
        var t = e._readableState;
        u("emitReadable_", t.destroyed, t.length, t.ended), t.destroyed || !t.length && !t.ended || (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, I(e)
    }

    function k(e, t) {
        t.readingMore || (t.readingMore = !0, process.nextTick(j, e, t))
    }

    function j(e, t) {
        for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) {
            var r = t.length;
            if (u("maybeReadMore read 0"), e.read(0), r === t.length) break
        }
        t.readingMore = !1
    }

    function P(e) {
        var t = e._readableState;
        t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume()
    }

    function L(e) {
        u("readable nexttick read 0"), e.read(0)
    }

    function $(e, t) {
        u("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), I(e), t.flowing && !t.reading && e.read(0)
    }

    function I(e) {
        var t = e._readableState;
        for (u("flow", t.flowing); t.flowing && null !== e.read(););
    }

    function N(e, t) {
        return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : r = t.buffer.consume(e, t.decoder), r);
        var r
    }

    function B(e) {
        var t = e._readableState;
        u("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, process.nextTick(D, t, e))
    }

    function D(e, t) {
        if (u("endReadableNT", e.endEmitted, e.length), !e.endEmitted && 0 === e.length && (e.endEmitted = !0, t.readable = !1, t.emit("end"), e.autoDestroy)) {
            var r = t._writableState;
            (!r || r.autoDestroy && r.finished) && t.destroy()
        }
    }

    function G(e, t) {
        for (var r = 0, n = e.length; r < n; r++)
            if (e[r] === t) return r;
        return -1
    }
    T.prototype.read = function(e) {
        u("read", e), e = parseInt(e, 10);
        var t = this._readableState,
            r = e;
        if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended)) return u("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? B(this) : O(this), null;
        if (0 === (e = x(e, t)) && t.ended) return 0 === t.length && B(this), null;
        var n, i = t.needReadable;
        return u("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && u("length less than watermark", i = !0), t.ended || t.reading ? u("reading or ended", i = !1) : i && (u("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = x(r, t))), null === (n = e > 0 ? N(e, t) : null) ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, t.awaitDrain = 0), 0 === t.length && (t.ended || (t.needReadable = !0), r !== e && t.ended && B(this)), null !== n && this.emit("data", n), n
    }, T.prototype._read = function(e) {
        w(this, new _("_read()"))
    }, T.prototype.pipe = function(e, t) {
        var r = this,
            n = this._readableState;
        switch (n.pipesCount) {
            case 0:
                n.pipes = e;
                break;
            case 1:
                n.pipes = [n.pipes, e];
                break;
            default:
                n.pipes.push(e)
        }
        n.pipesCount += 1, u("pipe count=%d opts=%j", n.pipesCount, t);
        var o = (!t || !1 !== t.end) && e !== process.stdout && e !== process.stderr ? a : g;

        function s(t, i) {
            u("onunpipe"), t === r && i && !1 === i.hasUnpiped && (i.hasUnpiped = !0, u("cleanup"), e.removeListener("close", f), e.removeListener("finish", h), e.removeListener("drain", c), e.removeListener("error", d), e.removeListener("unpipe", s), r.removeListener("end", a), r.removeListener("end", g), r.removeListener("data", l), p = !0, !n.awaitDrain || e._writableState && !e._writableState.needDrain || c())
        }

        function a() {
            u("onend"), e.end()
        }
        n.endEmitted ? process.nextTick(o) : r.once("end", o), e.on("unpipe", s);
        var c = function(e) {
            return function() {
                var t = e._readableState;
                u("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && i(e, "data") && (t.flowing = !0, I(e))
            }
        }(r);
        e.on("drain", c);
        var p = !1;

        function l(t) {
            u("ondata");
            var i = e.write(t);
            u("dest.write", i), !1 === i && ((1 === n.pipesCount && n.pipes === e || n.pipesCount > 1 && -1 !== G(n.pipes, e)) && !p && (u("false write response, pause", n.awaitDrain), n.awaitDrain++), r.pause())
        }

        function d(t) {
            u("onerror", t), g(), e.removeListener("error", d), 0 === i(e, "error") && w(e, t)
        }

        function f() {
            e.removeListener("finish", h), g()
        }

        function h() {
            u("onfinish"), e.removeListener("close", f), g()
        }

        function g() {
            u("unpipe"), r.unpipe(e)
        }
        return r.on("data", l),
            function(e, t, r) {
                if ("function" == typeof e.prependListener) return e.prependListener(t, r);
                e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
            }(e, "error", d), e.once("close", f), e.once("finish", h), e.emit("pipe", r), n.flowing || (u("pipe resume"), r.resume()), e
    }, T.prototype.unpipe = function(e) {
        var t = this._readableState,
            r = {
                hasUnpiped: !1
            };
        if (0 === t.pipesCount) return this;
        if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r)), this;
        if (!e) {
            var n = t.pipes,
                i = t.pipesCount;
            t.pipes = null, t.pipesCount = 0, t.flowing = !1;
            for (var o = 0; o < i; o++) n[o].emit("unpipe", this, {
                hasUnpiped: !1
            });
            return this
        }
        var s = G(t.pipes, e);
        return -1 === s || (t.pipes.splice(s, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r)), this
    }, T.prototype.on = function(e, t) {
        var r = o.prototype.on.call(this, e, t),
            n = this._readableState;
        return "data" === e ? (n.readableListening = this.listenerCount("readable") > 0, !1 !== n.flowing && this.resume()) : "readable" === e && (n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0, n.flowing = !1, n.emittedReadable = !1, u("on readable", n.length, n.reading), n.length ? O(this) : n.reading || process.nextTick(L, this))), r
    }, T.prototype.addListener = T.prototype.on, T.prototype.removeListener = function(e, t) {
        var r = o.prototype.removeListener.call(this, e, t);
        return "readable" === e && process.nextTick(P, this), r
    }, T.prototype.removeAllListeners = function(e) {
        var t = o.prototype.removeAllListeners.apply(this, arguments);
        return "readable" !== e && void 0 !== e || process.nextTick(P, this), t
    }, T.prototype.resume = function() {
        var e = this._readableState;
        return e.flowing || (u("resume"), e.flowing = !e.readableListening, function(e, t) {
            t.resumeScheduled || (t.resumeScheduled = !0, process.nextTick($, e, t))
        }(this, e)), e.paused = !1, this
    }, T.prototype.pause = function() {
        return u("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (u("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
    }, T.prototype.wrap = function(e) {
        var t = this,
            r = this._readableState,
            n = !1;
        for (var i in e.on("end", (function() {
                if (u("wrapped end"), r.decoder && !r.ended) {
                    var e = r.decoder.end();
                    e && e.length && t.push(e)
                }
                t.push(null)
            })), e.on("data", (function(i) {
                (u("wrapped data"), r.decoder && (i = r.decoder.write(i)), r.objectMode && null == i) || (r.objectMode || i && i.length) && (t.push(i) || (n = !0, e.pause()))
            })), e) void 0 === this[i] && "function" == typeof e[i] && (this[i] = function(t) {
            return function() {
                return e[t].apply(e, arguments)
            }
        }(i));
        for (var o = 0; o < E.length; o++) e.on(E[o], this.emit.bind(this, E[o]));
        return this._read = function(t) {
            u("wrapped _read", t), n && (n = !1, e.resume())
        }, this
    }, "function" == typeof Symbol && (T.prototype[Symbol.asyncIterator] = function() {
        return void 0 === l && (l = r(230)), l(this)
    }), Object.defineProperty(T.prototype, "readableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._readableState.highWaterMark
        }
    }), Object.defineProperty(T.prototype, "readableBuffer", {
        enumerable: !1,
        get: function() {
            return this._readableState && this._readableState.buffer
        }
    }), Object.defineProperty(T.prototype, "readableFlowing", {
        enumerable: !1,
        get: function() {
            return this._readableState.flowing
        },
        set: function(e) {
            this._readableState && (this._readableState.flowing = e)
        }
    }), T._fromList = N, Object.defineProperty(T.prototype, "readableLength", {
        enumerable: !1,
        get: function() {
            return this._readableState.length
        }
    }), "function" == typeof Symbol && (T.from = function(e, t) {
        return void 0 === d && (d = r(231)), d(T, e, t)
    })
}, function(e, t, r) {
    e.exports = r(3)
}, function(e, t, r) {
    "use strict";

    function n(e, t) {
        o(e, t), i(e)
    }

    function i(e) {
        e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close")
    }

    function o(e, t) {
        e.emit("error", t)
    }
    e.exports = {
        destroy: function(e, t) {
            var r = this,
                s = this._readableState && this._readableState.destroyed,
                a = this._writableState && this._writableState.destroyed;
            return s || a ? (t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, process.nextTick(o, this, e)) : process.nextTick(o, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, (function(e) {
                !t && e ? r._writableState ? r._writableState.errorEmitted ? process.nextTick(i, r) : (r._writableState.errorEmitted = !0, process.nextTick(n, r, e)) : process.nextTick(n, r, e) : t ? (process.nextTick(i, r), t(e)) : process.nextTick(i, r)
            })), this)
        },
        undestroy: function() {
            this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
        },
        errorOrDestroy: function(e, t) {
            var r = e._readableState,
                n = e._writableState;
            r && r.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t)
        }
    }
}, function(e, t, r) {
    "use strict";
    var n = r(9).codes.ERR_INVALID_OPT_VALUE;
    e.exports = {
        getHighWaterMark: function(e, t, r, i) {
            var o = function(e, t, r) {
                return null != e.highWaterMark ? e.highWaterMark : t ? e[r] : null
            }(t, i, r);
            if (null != o) {
                if (!isFinite(o) || Math.floor(o) !== o || o < 0) throw new n(i ? r : "highWaterMark", o);
                return Math.floor(o)
            }
            return e.objectMode ? 16 : 16384
        }
    }
}, function(e, t, r) {
    "use strict";

    function n(e) {
        var t = this;
        this.next = null, this.entry = null, this.finish = function() {
            ! function(e, t, r) {
                var n = e.entry;
                e.entry = null;
                for (; n;) {
                    var i = n.callback;
                    t.pendingcb--, i(r), n = n.next
                }
                t.corkedRequestsFree.next = e
            }(t, e)
        }
    }
    var i;
    e.exports = T, T.WritableState = q;
    var o = {
            deprecate: r(228)
        },
        s = r(65),
        a = r(15).Buffer,
        u = global.Uint8Array || function() {};
    var c, p = r(66),
        l = r(67).getHighWaterMark,
        d = r(9).codes,
        f = d.ERR_INVALID_ARG_TYPE,
        h = d.ERR_METHOD_NOT_IMPLEMENTED,
        g = d.ERR_MULTIPLE_CALLBACK,
        m = d.ERR_STREAM_CANNOT_PIPE,
        y = d.ERR_STREAM_DESTROYED,
        b = d.ERR_STREAM_NULL_VALUES,
        _ = d.ERR_STREAM_WRITE_AFTER_END,
        v = d.ERR_UNKNOWN_ENCODING,
        w = p.errorOrDestroy;

    function E() {}

    function q(e, t, o) {
        i = i || r(13), e = e || {}, "boolean" != typeof o && (o = t instanceof i), this.objectMode = !!e.objectMode, o && (this.objectMode = this.objectMode || !!e.writableObjectMode), this.highWaterMark = l(this, e, "writableHighWaterMark", o), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
        var s = !1 === e.decodeStrings;
        this.decodeStrings = !s, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
            ! function(e, t) {
                var r = e._writableState,
                    n = r.sync,
                    i = r.writecb;
                if ("function" != typeof i) throw new g;
                if (function(e) {
                        e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
                    }(r), t) ! function(e, t, r, n, i) {
                    --t.pendingcb, r ? (process.nextTick(i, n), process.nextTick(C, e, t), e._writableState.errorEmitted = !0, w(e, n)) : (i(n), e._writableState.errorEmitted = !0, w(e, n), C(e, t))
                }(e, r, n, t, i);
                else {
                    var o = x(r) || e.destroyed;
                    o || r.corked || r.bufferProcessing || !r.bufferedRequest || R(e, r), n ? process.nextTick(A, e, r, o, i) : A(e, r, o, i)
                }
            }(t, e)
        }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new n(this)
    }

    function T(e) {
        var t = this instanceof(i = i || r(13));
        if (!t && !c.call(T, this)) return new T(e);
        this._writableState = new q(e, this, t), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), s.call(this)
    }

    function S(e, t, r, n, i, o, s) {
        t.writelen = n, t.writecb = s, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new y("write")) : r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1
    }

    function A(e, t, r, n) {
        r || function(e, t) {
            0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
        }(e, t), t.pendingcb--, n(), C(e, t)
    }

    function R(e, t) {
        t.bufferProcessing = !0;
        var r = t.bufferedRequest;
        if (e._writev && r && r.next) {
            var i = t.bufferedRequestCount,
                o = new Array(i),
                s = t.corkedRequestsFree;
            s.entry = r;
            for (var a = 0, u = !0; r;) o[a] = r, r.isBuf || (u = !1), r = r.next, a += 1;
            o.allBuffers = u, S(e, t, !0, t.length, o, "", s.finish), t.pendingcb++, t.lastBufferedRequest = null, s.next ? (t.corkedRequestsFree = s.next, s.next = null) : t.corkedRequestsFree = new n(t), t.bufferedRequestCount = 0
        } else {
            for (; r;) {
                var c = r.chunk,
                    p = r.encoding,
                    l = r.callback;
                if (S(e, t, !1, t.objectMode ? 1 : c.length, c, p, l), r = r.next, t.bufferedRequestCount--, t.writing) break
            }
            null === r && (t.lastBufferedRequest = null)
        }
        t.bufferedRequest = r, t.bufferProcessing = !1
    }

    function x(e) {
        return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
    }

    function O(e, t) {
        e._final((function(r) {
            t.pendingcb--, r && w(e, r), t.prefinished = !0, e.emit("prefinish"), C(e, t)
        }))
    }

    function C(e, t) {
        var r = x(t);
        if (r && (function(e, t) {
                t.prefinished || t.finalCalled || ("function" != typeof e._final || t.destroyed ? (t.prefinished = !0, e.emit("prefinish")) : (t.pendingcb++, t.finalCalled = !0, process.nextTick(O, e, t)))
            }(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"), t.autoDestroy))) {
            var n = e._readableState;
            (!n || n.autoDestroy && n.endEmitted) && e.destroy()
        }
        return r
    }
    r(18)(T, s), q.prototype.getBuffer = function() {
            for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
            return t
        },
        function() {
            try {
                Object.defineProperty(q.prototype, "buffer", {
                    get: o.deprecate((function() {
                        return this.getBuffer()
                    }), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                })
            } catch (e) {}
        }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (c = Function.prototype[Symbol.hasInstance], Object.defineProperty(T, Symbol.hasInstance, {
            value: function(e) {
                return !!c.call(this, e) || this === T && (e && e._writableState instanceof q)
            }
        })) : c = function(e) {
            return e instanceof this
        }, T.prototype.pipe = function() {
            w(this, new m)
        }, T.prototype.write = function(e, t, r) {
            var n, i = this._writableState,
                o = !1,
                s = !i.objectMode && (n = e, a.isBuffer(n) || n instanceof u);
            return s && !a.isBuffer(e) && (e = function(e) {
                return a.from(e)
            }(e)), "function" == typeof t && (r = t, t = null), s ? t = "buffer" : t || (t = i.defaultEncoding), "function" != typeof r && (r = E), i.ending ? function(e, t) {
                var r = new _;
                w(e, r), process.nextTick(t, r)
            }(this, r) : (s || function(e, t, r, n) {
                var i;
                return null === r ? i = new b : "string" == typeof r || t.objectMode || (i = new f("chunk", ["string", "Buffer"], r)), !i || (w(e, i), process.nextTick(n, i), !1)
            }(this, i, e, r)) && (i.pendingcb++, o = function(e, t, r, n, i, o) {
                if (!r) {
                    var s = function(e, t, r) {
                        e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = a.from(t, r));
                        return t
                    }(t, n, i);
                    n !== s && (r = !0, i = "buffer", n = s)
                }
                var u = t.objectMode ? 1 : n.length;
                t.length += u;
                var c = t.length < t.highWaterMark;
                c || (t.needDrain = !0);
                if (t.writing || t.corked) {
                    var p = t.lastBufferedRequest;
                    t.lastBufferedRequest = {
                        chunk: n,
                        encoding: i,
                        isBuf: r,
                        callback: o,
                        next: null
                    }, p ? p.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                } else S(e, t, !1, u, n, i, o);
                return c
            }(this, i, s, e, t, r)), o
        }, T.prototype.cork = function() {
            this._writableState.corked++
        }, T.prototype.uncork = function() {
            var e = this._writableState;
            e.corked && (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || R(this, e))
        }, T.prototype.setDefaultEncoding = function(e) {
            if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new v(e);
            return this._writableState.defaultEncoding = e, this
        }, Object.defineProperty(T.prototype, "writableBuffer", {
            enumerable: !1,
            get: function() {
                return this._writableState && this._writableState.getBuffer()
            }
        }), Object.defineProperty(T.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._writableState.highWaterMark
            }
        }), T.prototype._write = function(e, t, r) {
            r(new h("_write()"))
        }, T.prototype._writev = null, T.prototype.end = function(e, t, r) {
            var n = this._writableState;
            return "function" == typeof e ? (r = e, e = null, t = null) : "function" == typeof t && (r = t, t = null), null != e && this.write(e, t), n.corked && (n.corked = 1, this.uncork()), n.ending || function(e, t, r) {
                t.ending = !0, C(e, t), r && (t.finished ? process.nextTick(r) : e.once("finish", r));
                t.ended = !0, e.writable = !1
            }(this, n, r), this
        }, Object.defineProperty(T.prototype, "writableLength", {
            enumerable: !1,
            get: function() {
                return this._writableState.length
            }
        }), Object.defineProperty(T.prototype, "destroyed", {
            enumerable: !1,
            get: function() {
                return void 0 !== this._writableState && this._writableState.destroyed
            },
            set: function(e) {
                this._writableState && (this._writableState.destroyed = e)
            }
        }), T.prototype.destroy = p.destroy, T.prototype._undestroy = p.undestroy, T.prototype._destroy = function(e, t) {
            t(e)
        }
}, function(e, t, r) {
    "use strict";
    var n = r(229).Buffer,
        i = n.isEncoding || function(e) {
            switch ((e = "" + e) && e.toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                case "raw":
                    return !0;
                default:
                    return !1
            }
        };

    function o(e) {
        var t;
        switch (this.encoding = function(e) {
                var t = function(e) {
                    if (!e) return "utf8";
                    for (var t;;) switch (e) {
                        case "utf8":
                        case "utf-8":
                            return "utf8";
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return "utf16le";
                        case "latin1":
                        case "binary":
                            return "latin1";
                        case "base64":
                        case "ascii":
                        case "hex":
                            return e;
                        default:
                            if (t) return;
                            e = ("" + e).toLowerCase(), t = !0
                    }
                }(e);
                if ("string" != typeof t && (n.isEncoding === i || !i(e))) throw new Error("Unknown encoding: " + e);
                return t || e
            }(e), this.encoding) {
            case "utf16le":
                this.text = u, this.end = c, t = 4;
                break;
            case "utf8":
                this.fillLast = a, t = 4;
                break;
            case "base64":
                this.text = p, this.end = l, t = 3;
                break;
            default:
                return this.write = d, void(this.end = f)
        }
        this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n.allocUnsafe(t)
    }

    function s(e) {
        return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
    }

    function a(e) {
        var t = this.lastTotal - this.lastNeed,
            r = function(e, t, r) {
                if (128 != (192 & t[0])) return e.lastNeed = 0, "�";
                if (e.lastNeed > 1 && t.length > 1) {
                    if (128 != (192 & t[1])) return e.lastNeed = 1, "�";
                    if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2, "�"
                }
            }(this, e);
        return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void(this.lastNeed -= e.length))
    }

    function u(e, t) {
        if ((e.length - t) % 2 == 0) {
            var r = e.toString("utf16le", t);
            if (r) {
                var n = r.charCodeAt(r.length - 1);
                if (n >= 55296 && n <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1)
            }
            return r
        }
        return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1)
    }

    function c(e) {
        var t = e && e.length ? this.write(e) : "";
        if (this.lastNeed) {
            var r = this.lastTotal - this.lastNeed;
            return t + this.lastChar.toString("utf16le", 0, r)
        }
        return t
    }

    function p(e, t) {
        var r = (e.length - t) % 3;
        return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r))
    }

    function l(e) {
        var t = e && e.length ? this.write(e) : "";
        return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
    }

    function d(e) {
        return e.toString(this.encoding)
    }

    function f(e) {
        return e && e.length ? this.write(e) : ""
    }
    t.StringDecoder = o, o.prototype.write = function(e) {
        if (0 === e.length) return "";
        var t, r;
        if (this.lastNeed) {
            if (void 0 === (t = this.fillLast(e))) return "";
            r = this.lastNeed, this.lastNeed = 0
        } else r = 0;
        return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || ""
    }, o.prototype.end = function(e) {
        var t = e && e.length ? this.write(e) : "";
        return this.lastNeed ? t + "�" : t
    }, o.prototype.text = function(e, t) {
        var r = function(e, t, r) {
            var n = t.length - 1;
            if (n < r) return 0;
            var i = s(t[n]);
            if (i >= 0) return i > 0 && (e.lastNeed = i - 1), i;
            if (--n < r || -2 === i) return 0;
            if ((i = s(t[n])) >= 0) return i > 0 && (e.lastNeed = i - 2), i;
            if (--n < r || -2 === i) return 0;
            if ((i = s(t[n])) >= 0) return i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3), i;
            return 0
        }(this, e, t);
        if (!this.lastNeed) return e.toString("utf8", t);
        this.lastTotal = r;
        var n = e.length - (r - this.lastNeed);
        return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n)
    }, o.prototype.fillLast = function(e) {
        if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
        e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
    }
}, function(e, t, r) {
    "use strict";
    e.exports = p;
    var n = r(9).codes,
        i = n.ERR_METHOD_NOT_IMPLEMENTED,
        o = n.ERR_MULTIPLE_CALLBACK,
        s = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
        a = n.ERR_TRANSFORM_WITH_LENGTH_0,
        u = r(13);

    function c(e, t) {
        var r = this._transformState;
        r.transforming = !1;
        var n = r.writecb;
        if (null === n) return this.emit("error", new o);
        r.writechunk = null, r.writecb = null, null != t && this.push(t), n(e);
        var i = this._readableState;
        i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
    }

    function p(e) {
        if (!(this instanceof p)) return new p(e);
        u.call(this, e), this._transformState = {
            afterTransform: c.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null
        }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", l)
    }

    function l() {
        var e = this;
        "function" != typeof this._flush || this._readableState.destroyed ? d(this, null, null) : this._flush((function(t, r) {
            d(e, t, r)
        }))
    }

    function d(e, t, r) {
        if (t) return e.emit("error", t);
        if (null != r && e.push(r), e._writableState.length) throw new a;
        if (e._transformState.transforming) throw new s;
        return e.push(null)
    }
    r(18)(p, u), p.prototype.push = function(e, t) {
        return this._transformState.needTransform = !1, u.prototype.push.call(this, e, t)
    }, p.prototype._transform = function(e, t, r) {
        r(new i("_transform()"))
    }, p.prototype._write = function(e, t, r) {
        var n = this._transformState;
        if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
            var i = this._readableState;
            (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
        }
    }, p.prototype._read = function(e) {
        var t = this._transformState;
        null === t.writechunk || t.transforming ? t.needTransform = !0 : (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform))
    }, p.prototype._destroy = function(e, t) {
        u.prototype._destroy.call(this, e, (function(e) {
            t(e)
        }))
    }
}, function(e, t, r) {
    "use strict";
    var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r), Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        } : function(e, t, r, n) {
            void 0 === n && (n = r), e[n] = t[r]
        }),
        i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        } : function(e, t) {
            e.default = t
        }),
        o = this && this.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
            return i(t, e), t
        },
        s = this && this.__awaiter || function(e, t, r, n) {
            return new(r || (r = Promise))((function(i, o) {
                function s(e) {
                    try {
                        u(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                        e(t)
                    }))).then(s, a)
                }
                u((n = n.apply(e, t || [])).next())
            }))
        },
        a = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.octokitLogger = t.getChangelogOptions = t.parseGitTag = t.isBreakingChange = t.generateChangelogFromParsedCommits = t.getShortSHA = void 0;
    const u = o(r(19)),
        c = a(r(234));
    var p;
    t.getShortSHA = e => e.substring(0, 7),
        function(e) {
            e.feat = "Features", e.fix = "Bug Fixes", e.docs = "Documentation", e.style = "Styles", e.refactor = "Code Refactoring", e.perf = "Performance Improvements", e.test = "Tests", e.build = "Builds", e.ci = "Continuous Integration", e.chore = "Chores", e.revert = "Reverts"
        }(p || (p = {}));
    const l = e => {
        let r = "";
        const n = e.extra.commit.html_url,
            i = t.getShortSHA(e.extra.commit.sha),
            o = e.extra.commit.commit.author.name;
        let s = "";
        if (s = e.extra.pullRequests.reduce(((e, t) => (e && (e += ","), `${e}[#${t.number}](${t.url})`)), ""), s && (s = " " + s), r = `- ${i}: ${e.header} (${o})${s}`, e.type) {
            r = `- ${e.scope?`**${e.scope}**: `:""}${e.subject}${s} ([${o}](${n}))`
        }
        return r
    };
    t.generateChangelogFromParsedCommits = e => {
        let t = "";
        const r = e.filter((e => !0 === e.extra.breakingChange)).map((e => l(e))).reduce(((e, t) => `${e}\n${t}`), "");
        r && (t += "## Breaking Changes\n", t += r.trim());
        for (const r of Object.keys(p)) {
            const n = e.filter((e => e.type === r)).map((e => l(e))).reduce(((e, t) => `${e}\n${t}`), "");
            n && (t += `\n\n## ${p[r]}\n`, t += n.trim())
        }
        const n = e.filter((e => null === e.type || -1 === Object.keys(p).indexOf(e.type))).map((e => l(e))).reduce(((e, t) => `${e}\n${t}`), "");
        return n && (t += "\n\n## Commits\n", t += n.trim()), t.trim()
    };
    t.isBreakingChange = ({
        body: e,
        footer: t
    }) => {
        const r = /^BREAKING\s+CHANGES?:\s+/;
        return r.test(e || "") || r.test(t || "")
    };
    t.parseGitTag = e => {
        const t = e.match(/^(refs\/)?tags\/(.*)$/);
        return t && t[2] ? t[2] : (u.debug(`Input "${e}" does not appear to be a tag`), "")
    };
    t.getChangelogOptions = () => s(void 0, void 0, void 0, (function*() {
        const e = c.default;
        return e.mergePattern = "^Merge pull request #(.*) from (.*)$", e.mergeCorrespondence = ["issueId", "source"], u.debug(`Changelog options: ${JSON.stringify(e)}`), e
    }));
    t.octokitLogger = (...e) => e.map((e => {
        if ("string" == typeof e) return e;
        const t = Object.assign({}, e);
        return t.file && (t.file = "== raw file buffer info removed =="), t.data && (t.data = "== raw file buffer info removed =="), JSON.stringify(t)
    })).reduce(((e, t) => `${e} ${t}`), "")
}, function(e, t, r) {
    const {
        MAX_SAFE_COMPONENT_LENGTH: n
    } = r(34), i = r(73), o = (t = e.exports = {}).re = [], s = t.src = [], a = t.t = {};
    let u = 0;
    const c = (e, t, r) => {
        const n = u++;
        i(n, t), a[e] = n, s[n] = t, o[n] = new RegExp(t, r ? "g" : void 0)
    };
    c("NUMERICIDENTIFIER", "0|[1-9]\\d*"), c("NUMERICIDENTIFIERLOOSE", "[0-9]+"), c("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), c("MAINVERSION", `(${s[a.NUMERICIDENTIFIER]})\\.(${s[a.NUMERICIDENTIFIER]})\\.(${s[a.NUMERICIDENTIFIER]})`), c("MAINVERSIONLOOSE", `(${s[a.NUMERICIDENTIFIERLOOSE]})\\.(${s[a.NUMERICIDENTIFIERLOOSE]})\\.(${s[a.NUMERICIDENTIFIERLOOSE]})`), c("PRERELEASEIDENTIFIER", `(?:${s[a.NUMERICIDENTIFIER]}|${s[a.NONNUMERICIDENTIFIER]})`), c("PRERELEASEIDENTIFIERLOOSE", `(?:${s[a.NUMERICIDENTIFIERLOOSE]}|${s[a.NONNUMERICIDENTIFIER]})`), c("PRERELEASE", `(?:-(${s[a.PRERELEASEIDENTIFIER]}(?:\\.${s[a.PRERELEASEIDENTIFIER]})*))`), c("PRERELEASELOOSE", `(?:-?(${s[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${s[a.PRERELEASEIDENTIFIERLOOSE]})*))`), c("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), c("BUILD", `(?:\\+(${s[a.BUILDIDENTIFIER]}(?:\\.${s[a.BUILDIDENTIFIER]})*))`), c("FULLPLAIN", `v?${s[a.MAINVERSION]}${s[a.PRERELEASE]}?${s[a.BUILD]}?`), c("FULL", `^${s[a.FULLPLAIN]}$`), c("LOOSEPLAIN", `[v=\\s]*${s[a.MAINVERSIONLOOSE]}${s[a.PRERELEASELOOSE]}?${s[a.BUILD]}?`), c("LOOSE", `^${s[a.LOOSEPLAIN]}$`), c("GTLT", "((?:<|>)?=?)"), c("XRANGEIDENTIFIERLOOSE", `${s[a.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), c("XRANGEIDENTIFIER", `${s[a.NUMERICIDENTIFIER]}|x|X|\\*`), c("XRANGEPLAIN", `[v=\\s]*(${s[a.XRANGEIDENTIFIER]})(?:\\.(${s[a.XRANGEIDENTIFIER]})(?:\\.(${s[a.XRANGEIDENTIFIER]})(?:${s[a.PRERELEASE]})?${s[a.BUILD]}?)?)?`), c("XRANGEPLAINLOOSE", `[v=\\s]*(${s[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[a.XRANGEIDENTIFIERLOOSE]})(?:${s[a.PRERELEASELOOSE]})?${s[a.BUILD]}?)?)?`), c("XRANGE", `^${s[a.GTLT]}\\s*${s[a.XRANGEPLAIN]}$`), c("XRANGELOOSE", `^${s[a.GTLT]}\\s*${s[a.XRANGEPLAINLOOSE]}$`), c("COERCE", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?(?:$|[^\\d])`), c("COERCERTL", s[a.COERCE], !0), c("LONETILDE", "(?:~>?)"), c("TILDETRIM", `(\\s*)${s[a.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", c("TILDE", `^${s[a.LONETILDE]}${s[a.XRANGEPLAIN]}$`), c("TILDELOOSE", `^${s[a.LONETILDE]}${s[a.XRANGEPLAINLOOSE]}$`), c("LONECARET", "(?:\\^)"), c("CARETTRIM", `(\\s*)${s[a.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", c("CARET", `^${s[a.LONECARET]}${s[a.XRANGEPLAIN]}$`), c("CARETLOOSE", `^${s[a.LONECARET]}${s[a.XRANGEPLAINLOOSE]}$`), c("COMPARATORLOOSE", `^${s[a.GTLT]}\\s*(${s[a.LOOSEPLAIN]})$|^$`), c("COMPARATOR", `^${s[a.GTLT]}\\s*(${s[a.FULLPLAIN]})$|^$`), c("COMPARATORTRIM", `(\\s*)${s[a.GTLT]}\\s*(${s[a.LOOSEPLAIN]}|${s[a.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", c("HYPHENRANGE", `^\\s*(${s[a.XRANGEPLAIN]})\\s+-\\s+(${s[a.XRANGEPLAIN]})\\s*$`), c("HYPHENRANGELOOSE", `^\\s*(${s[a.XRANGEPLAINLOOSE]})\\s+-\\s+(${s[a.XRANGEPLAINLOOSE]})\\s*$`), c("STAR", "(<|>)?=?\\s*\\*"), c("GTE0", "^\\s*>=\\s*0.0.0\\s*$"), c("GTE0PRE", "^\\s*>=\\s*0.0.0-0\\s*$")
}, function(e, t) {
    const r = "object" == typeof process && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {};
    e.exports = r
}, function(e, t, r) {
    const n = r(73),
        {
            MAX_LENGTH: i,
            MAX_SAFE_INTEGER: o
        } = r(34),
        {
            re: s,
            t: a
        } = r(72),
        u = r(75),
        {
            compareIdentifiers: c
        } = r(238);
    class p {
        constructor(e, t) {
            if (t = u(t), e instanceof p) {
                if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) return e;
                e = e.version
            } else if ("string" != typeof e) throw new TypeError(`Invalid Version: ${e}`);
            if (e.length > i) throw new TypeError(`version is longer than ${i} characters`);
            n("SemVer", e, t), this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
            const r = e.trim().match(t.loose ? s[a.LOOSE] : s[a.FULL]);
            if (!r) throw new TypeError(`Invalid Version: ${e}`);
            if (this.raw = e, this.major = +r[1], this.minor = +r[2], this.patch = +r[3], this.major > o || this.major < 0) throw new TypeError("Invalid major version");
            if (this.minor > o || this.minor < 0) throw new TypeError("Invalid minor version");
            if (this.patch > o || this.patch < 0) throw new TypeError("Invalid patch version");
            r[4] ? this.prerelease = r[4].split(".").map((e => {
                if (/^[0-9]+$/.test(e)) {
                    const t = +e;
                    if (t >= 0 && t < o) return t
                }
                return e
            })) : this.prerelease = [], this.build = r[5] ? r[5].split(".") : [], this.format()
        }
        format() {
            return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version
        }
        toString() {
            return this.version
        }
        compare(e) {
            if (n("SemVer.compare", this.version, this.options, e), !(e instanceof p)) {
                if ("string" == typeof e && e === this.version) return 0;
                e = new p(e, this.options)
            }
            return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e)
        }
        compareMain(e) {
            return e instanceof p || (e = new p(e, this.options)), c(this.major, e.major) || c(this.minor, e.minor) || c(this.patch, e.patch)
        }
        comparePre(e) {
            if (e instanceof p || (e = new p(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;
            if (!this.prerelease.length && e.prerelease.length) return 1;
            if (!this.prerelease.length && !e.prerelease.length) return 0;
            let t = 0;
            do {
                const r = this.prerelease[t],
                    i = e.prerelease[t];
                if (n("prerelease compare", t, r, i), void 0 === r && void 0 === i) return 0;
                if (void 0 === i) return 1;
                if (void 0 === r) return -1;
                if (r !== i) return c(r, i)
            } while (++t)
        }
        compareBuild(e) {
            e instanceof p || (e = new p(e, this.options));
            let t = 0;
            do {
                const r = this.build[t],
                    i = e.build[t];
                if (n("prerelease compare", t, r, i), void 0 === r && void 0 === i) return 0;
                if (void 0 === i) return 1;
                if (void 0 === r) return -1;
                if (r !== i) return c(r, i)
            } while (++t)
        }
        inc(e, t) {
            switch (e) {
                case "premajor":
                    this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t);
                    break;
                case "preminor":
                    this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t);
                    break;
                case "prepatch":
                    this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);
                    break;
                case "prerelease":
                    0 === this.prerelease.length && this.inc("patch", t), this.inc("pre", t);
                    break;
                case "major":
                    0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                    break;
                case "minor":
                    0 === this.patch && 0 !== this.prerelease.length || this.minor++, this.patch = 0, this.prerelease = [];
                    break;
                case "patch":
                    0 === this.prerelease.length && this.patch++, this.prerelease = [];
                    break;
                case "pre":
                    if (0 === this.prerelease.length) this.prerelease = [0];
                    else {
                        let e = this.prerelease.length;
                        for (; --e >= 0;) "number" == typeof this.prerelease[e] && (this.prerelease[e]++, e = -2); - 1 === e && this.prerelease.push(0)
                    }
                    t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
                    break;
                default:
                    throw new Error(`invalid increment argument: ${e}`)
            }
            return this.format(), this.raw = this.version, this
        }
    }
    e.exports = p
}, function(e, t) {
    const r = ["includePrerelease", "loose", "rtl"];
    e.exports = e => e ? "object" != typeof e ? {
        loose: !0
    } : r.filter((t => e[t])).reduce(((e, t) => (e[t] = !0, e)), {}) : {}
}, function(e, t, r) {
    const n = r(74);
    e.exports = (e, t, r) => new n(e, r).compare(new n(t, r))
}, function(e, t, r) {
    "use strict";
    const n = r(3).PassThrough,
        i = Array.prototype.slice;

    function o(e, t) {
        if (Array.isArray(e))
            for (let r = 0, n = e.length; r < n; r++) e[r] = o(e[r], t);
        else {
            if (!e._readableState && e.pipe && (e = e.pipe(n(t))), !e._readableState || !e.pause || !e.pipe) throw new Error("Only readable stream can be merged.");
            e.pause()
        }
        return e
    }
    e.exports = function() {
        const e = [];
        let t = !1;
        const r = i.call(arguments);
        let s = r[r.length - 1];
        s && !Array.isArray(s) && null == s.pipe ? r.pop() : s = {};
        const a = !1 !== s.end;
        null == s.objectMode && (s.objectMode = !0);
        null == s.highWaterMark && (s.highWaterMark = 65536);
        const u = n(s);

        function c() {
            for (let t = 0, r = arguments.length; t < r; t++) e.push(o(arguments[t], s));
            return p(), this
        }

        function p() {
            if (t) return;
            t = !0;
            let r = e.shift();
            if (!r) return void process.nextTick(l);
            Array.isArray(r) || (r = [r]);
            let n = r.length + 1;

            function i() {
                --n > 0 || (t = !1, p())
            }

            function o(e) {
                function t() {
                    e.removeListener("merge2UnpipeEnd", t), e.removeListener("end", t), i()
                }
                if (e._readableState.endEmitted) return i();
                e.on("merge2UnpipeEnd", t), e.on("end", t), e.pipe(u, {
                    end: !1
                }), e.resume()
            }
            for (let e = 0; e < r.length; e++) o(r[e]);
            i()
        }

        function l() {
            return t = !1, u.emit("queueDrain"), a && u.end()
        }
        u.setMaxListeners(0), u.add = c, u.on("unpipe", (function(e) {
            e.emit("merge2UnpipeEnd")
        })), r.length && c.apply(null, r);
        return u
    }
}, function(e, t, r) {
    "use strict";
    const n = r(244),
        i = r(271),
        o = r(295),
        s = r(296),
        a = r(298),
        u = r(7);
    async function c(e, t) {
        l(e);
        const r = p(e, i.default, t),
            n = await Promise.all(r);
        return u.array.flatten(n)
    }

    function p(e, t, r) {
        const i = [].concat(e),
            o = new a.default(r),
            s = n.generate(i, o),
            u = new t(o);
        return s.map(u.read, u)
    }

    function l(e) {
        if (![].concat(e).every((e => u.string.isString(e) && !u.string.isEmpty(e)))) throw new TypeError("Patterns must be a string (non empty) or an array of strings")
    }! function(e) {
        e.sync = function(e, t) {
            l(e);
            const r = p(e, s.default, t);
            return u.array.flatten(r)
        }, e.stream = function(e, t) {
            l(e);
            const r = p(e, o.default, t);
            return u.stream.merge(r)
        }, e.generateTasks = function(e, t) {
            l(e);
            const r = [].concat(e),
                i = new a.default(t);
            return n.generate(r, i)
        }, e.isDynamicPattern = function(e, t) {
            l(e);
            const r = new a.default(t);
            return u.pattern.isDynamicPattern(e, r)
        }, e.escapePath = function(e) {
            return l(e), u.path.escape(e)
        }
    }(c || (c = {})), e.exports = c
}, function(e, t, r) {
    "use strict";
    const n = r(5),
        i = r(256),
        o = e => null !== e && "object" == typeof e && !Array.isArray(e),
        s = e => "number" == typeof e || "string" == typeof e && "" !== e,
        a = e => Number.isInteger(+e),
        u = e => {
            let t = `${e}`,
                r = -1;
            if ("-" === t[0] && (t = t.slice(1)), "0" === t) return !1;
            for (;
                "0" === t[++r];);
            return r > 0
        },
        c = (e, t, r) => {
            if (t > 0) {
                let r = "-" === e[0] ? "-" : "";
                r && (e = e.slice(1)), e = r + e.padStart(r ? t - 1 : t, "0")
            }
            return !1 === r ? String(e) : e
        },
        p = (e, t) => {
            let r = "-" === e[0] ? "-" : "";
            for (r && (e = e.slice(1), t--); e.length < t;) e = "0" + e;
            return r ? "-" + e : e
        },
        l = (e, t, r, n) => {
            if (r) return i(e, t, {
                wrap: !1,
                ...n
            });
            let o = String.fromCharCode(e);
            return e === t ? o : `[${o}-${String.fromCharCode(t)}]`
        },
        d = (e, t, r) => {
            if (Array.isArray(e)) {
                let t = !0 === r.wrap,
                    n = r.capture ? "" : "?:";
                return t ? `(${n}${e.join("|")})` : e.join("|")
            }
            return i(e, t, r)
        },
        f = (...e) => new RangeError("Invalid range arguments: " + n.inspect(...e)),
        h = (e, t, r) => {
            if (!0 === r.strictRanges) throw f([e, t]);
            return []
        },
        g = (e, t, r = 1, n = {}) => {
            let i = Number(e),
                o = Number(t);
            if (!Number.isInteger(i) || !Number.isInteger(o)) {
                if (!0 === n.strictRanges) throw f([e, t]);
                return []
            }
            0 === i && (i = 0), 0 === o && (o = 0);
            let s = i > o,
                a = String(e),
                h = String(t),
                g = String(r);
            r = Math.max(Math.abs(r), 1);
            let m = u(a) || u(h) || u(g),
                y = m ? Math.max(a.length, h.length, g.length) : 0,
                b = !1 === m && !1 === ((e, t, r) => "string" == typeof e || "string" == typeof t || !0 === r.stringify)(e, t, n),
                _ = n.transform || (e => t => !0 === e ? Number(t) : String(t))(b);
            if (n.toRegex && 1 === r) return l(p(e, y), p(t, y), !0, n);
            let v = {
                    negatives: [],
                    positives: []
                },
                w = [],
                E = 0;
            for (; s ? i >= o : i <= o;) !0 === n.toRegex && r > 1 ? v[(q = i) < 0 ? "negatives" : "positives"].push(Math.abs(q)) : w.push(c(_(i, E), y, b)), i = s ? i - r : i + r, E++;
            var q;
            return !0 === n.toRegex ? r > 1 ? ((e, t) => {
                e.negatives.sort(((e, t) => e < t ? -1 : e > t ? 1 : 0)), e.positives.sort(((e, t) => e < t ? -1 : e > t ? 1 : 0));
                let r, n = t.capture ? "" : "?:",
                    i = "",
                    o = "";
                return e.positives.length && (i = e.positives.join("|")), e.negatives.length && (o = `-(${n}${e.negatives.join("|")})`), r = i && o ? `${i}|${o}` : i || o, t.wrap ? `(${n}${r})` : r
            })(v, n) : d(w, null, {
                wrap: !1,
                ...n
            }) : w
        },
        m = (e, t, r, n = {}) => {
            if (null == t && s(e)) return [e];
            if (!s(e) || !s(t)) return h(e, t, n);
            if ("function" == typeof r) return m(e, t, 1, {
                transform: r
            });
            if (o(r)) return m(e, t, 0, r);
            let i = {
                ...n
            };
            return !0 === i.capture && (i.wrap = !0), r = r || i.step || 1, a(r) ? a(e) && a(t) ? g(e, t, r, i) : ((e, t, r = 1, n = {}) => {
                if (!a(e) && e.length > 1 || !a(t) && t.length > 1) return h(e, t, n);
                let i = n.transform || (e => String.fromCharCode(e)),
                    o = `${e}`.charCodeAt(0),
                    s = `${t}`.charCodeAt(0),
                    u = o > s,
                    c = Math.min(o, s),
                    p = Math.max(o, s);
                if (n.toRegex && 1 === r) return l(c, p, !1, n);
                let f = [],
                    g = 0;
                for (; u ? o >= s : o <= s;) f.push(i(o, g)), o = u ? o - r : o + r, g++;
                return !0 === n.toRegex ? d(f, null, {
                    wrap: !1,
                    options: n
                }) : f
            })(e, t, Math.max(Math.abs(r), 1), i) : null == r || o(r) ? m(e, t, 1, r) : ((e, t) => {
                if (!0 === t.strictRanges) throw new TypeError(`Expected step "${e}" to be a number`);
                return []
            })(r, i)
        };
    e.exports = m
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(3),
        i = r(14),
        o = r(81),
        s = r(86);
    class a extends s.default {
        constructor() {
            super(...arguments), this._walkStream = o.walkStream, this._stat = i.stat
        }
        dynamic(e, t) {
            return this._walkStream(e, t)
        }
        static(e, t) {
            const r = e.map(this._getFullEntryPath, this),
                i = new n.PassThrough({
                    objectMode: !0
                });
            i._write = (n, o, s) => this._getEntry(r[n], e[n], t).then((e => {
                null !== e && t.entryFilter(e) && i.push(e), n === r.length - 1 && i.end(), s()
            })).catch(s);
            for (let e = 0; e < r.length; e++) i.write(e);
            return i
        }
        _getEntry(e, t, r) {
            return this._getStat(e).then((e => this._makeEntry(e, t))).catch((e => {
                if (r.errorFilter(e)) return null;
                throw e
            }))
        }
        _getStat(e) {
            return new Promise(((t, r) => {
                this._stat(e, this._fsStatSettings, ((e, n) => null === e ? t(n) : r(e)))
            }))
        }
    }
    t.default = a
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(276),
        i = r(285),
        o = r(286),
        s = r(288);

    function a(e = {}) {
        return e instanceof s.default ? e : new s.default(e)
    }
    t.Settings = s.default, t.walk = function(e, t, r) {
        if ("function" == typeof t) return new n.default(e, a()).read(t);
        new n.default(e, a(t)).read(r)
    }, t.walkSync = function(e, t) {
        const r = a(t);
        return new o.default(e, r).read()
    }, t.walkStream = function(e, t) {
        const r = a(t);
        return new i.default(e, r).read()
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(26),
        i = r(38),
        o = r(283),
        s = r(39),
        a = r(85);
    class u extends a.default {
        constructor(e, t) {
            super(e, t), this._settings = t, this._scandir = i.scandir, this._emitter = new n.EventEmitter, this._queue = o(this._worker.bind(this), this._settings.concurrency), this._isFatalError = !1, this._isDestroyed = !1, this._queue.drain = () => {
                this._isFatalError || this._emitter.emit("end")
            }
        }
        read() {
            return this._isFatalError = !1, this._isDestroyed = !1, setImmediate((() => {
                this._pushToQueue(this._root, this._settings.basePath)
            })), this._emitter
        }
        destroy() {
            if (this._isDestroyed) throw new Error("The reader is already destroyed");
            this._isDestroyed = !0, this._queue.killAndDrain()
        }
        onEntry(e) {
            this._emitter.on("entry", e)
        }
        onError(e) {
            this._emitter.once("error", e)
        }
        onEnd(e) {
            this._emitter.once("end", e)
        }
        _pushToQueue(e, t) {
            const r = {
                directory: e,
                base: t
            };
            this._queue.push(r, (e => {
                null !== e && this._handleError(e)
            }))
        }
        _worker(e, t) {
            this._scandir(e.directory, this._settings.fsScandirSettings, ((r, n) => {
                if (null !== r) return t(r, void 0);
                for (const t of n) this._handleEntry(t, e.base);
                t(null, void 0)
            }))
        }
        _handleError(e) {
            s.isFatalError(this._settings, e) && (this._isFatalError = !0, this._isDestroyed = !0, this._emitter.emit("error", e))
        }
        _handleEntry(e, t) {
            if (this._isDestroyed || this._isFatalError) return;
            const r = e.path;
            void 0 !== t && (e.path = s.joinPathSegments(t, e.name, this._settings.pathSegmentSeparator)), s.isAppliedFilter(this._settings.entryFilter, e) && this._emitEntry(e), e.dirent.isDirectory() && s.isAppliedFilter(this._settings.deepFilter, e) && this._pushToQueue(r, e.path)
        }
        _emitEntry(e) {
            this._emitter.emit("entry", e)
        }
    }
    t.default = u
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = process.versions.node.split("."),
        i = parseInt(n[0], 10),
        o = parseInt(n[1], 10),
        s = i > 10,
        a = 10 === i && o >= 10;
    t.IS_SUPPORT_READDIR_WITH_FILE_TYPES = s || a
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(279);
    t.fs = n
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(39);
    t.default = class {
        constructor(e, t) {
            this._root = e, this._settings = t, this._root = n.replacePathSegmentSeparator(e, t.pathSegmentSeparator)
        }
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(0),
        i = r(14),
        o = r(7);
    t.default = class {
        constructor(e) {
            this._settings = e, this._fsStatSettings = new i.Settings({
                followSymbolicLink: this._settings.followSymbolicLinks,
                fs: this._settings.fs,
                throwErrorOnBrokenSymbolicLink: this._settings.followSymbolicLinks
            })
        }
        _getFullEntryPath(e) {
            return n.resolve(this._settings.cwd, e)
        }
        _makeEntry(e, t) {
            const r = {
                name: t,
                path: t,
                dirent: o.fs.createDirentFromStats(t, e)
            };
            return this._settings.stats && (r.stats = e), r
        }
        _isFatalError(e) {
            return !o.errno.isEnoentCodeError(e) && !this._settings.suppressErrors
        }
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    r(88).main()
}, function(e, t, r) {
    "use strict";
    var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r), Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        } : function(e, t, r, n) {
            void 0 === n && (n = r), e[n] = t[r]
        }),
        i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        } : function(e, t) {
            e.default = t
        }),
        o = this && this.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
            return i(t, e), t
        },
        s = this && this.__awaiter || function(e, t, r, n) {
            return new(r || (r = Promise))((function(i, o) {
                function s(e) {
                    try {
                        u(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                        e(t)
                    }))).then(s, a)
                }
                u((n = n.apply(e, t || [])).next())
            }))
        },
        a = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.main = t.getChangelog = void 0;
    const u = o(r(19)),
        c = o(r(91)),
        p = r(51),
        l = r(192),
        d = r(219),
        f = r(71),
        h = r(71),
        g = a(r(236)),
        m = a(r(239)),
        y = a(r(240)),
        b = r(241);
    t.getChangelog = (e, t, r, n) => s(void 0, void 0, void 0, (function*() {
        const i = [];
        u.startGroup("Generating changelog");
        for (const o of n) {
            u.debug(`Processing commit: ${JSON.stringify(o)}`), u.debug(`Searching for pull requests associated with commit ${o.sha}`);
            const n = yield e.repos.listPullRequestsAssociatedWithCommit({
                owner: t,
                repo: r,
                commit_sha: o.sha
            });
            n.data.length && u.info(`Found ${n.data.length} pull request(s) associated with commit ${o.sha}`);
            const s = yield f.getChangelogOptions(), a = d.sync(o.commit.message, s);
            a.merge ? u.debug(`Ignoring merge commit: ${a.merge}`) : (a.extra = {
                commit: o,
                pullRequests: [],
                breakingChange: !1
            }, a.extra.pullRequests = n.data.map((e => ({
                number: e.number,
                url: e.html_url
            }))), a.extra.breakingChange = h.isBreakingChange({
                body: a.body,
                footer: a.footer
            }), u.debug(`Parsed commit: ${JSON.stringify(a)}`), i.push(a), u.info(`Adding commit "${a.header}" to the changelog`))
        }
        const o = h.generateChangelogFromParsedCommits(i);
        return u.debug("Changelog:"), u.debug(o), u.endGroup(), o
    }));
    t.main = () => s(void 0, void 0, void 0, (function*() {
        try {
            const e = (() => {
                    const e = {
                            repoToken: u.getInput("repo_token", {
                                required: !0
                            }),
                            automaticReleaseTag: u.getInput("automatic_release_tag", {
                                required: !1
                            }),
                            draftRelease: JSON.parse(u.getInput("draft", {
                                required: !0
                            })),
                            preRelease: JSON.parse(u.getInput("prerelease", {
                                required: !0
                            })),
                            releaseTitle: u.getInput("title", {
                                required: !1
                            }),
                            files: []
                        },
                        t = u.getInput("files", {
                            required: !1
                        });
                    return t && (e.files = t.split(/\r?\n/)), e
                })(),
                r = new p.Context,
                n = new c.GitHub(e.repoToken, {
                    baseUrl: process.env.JEST_MOCK_HTTP_PORT ? `http://localhost:${process.env.JEST_MOCK_HTTP_PORT}` : void 0,
                    log: {
                        debug: (...e) => u.debug(h.octokitLogger(...e)),
                        info: (...e) => u.debug(h.octokitLogger(...e)),
                        warn: (...e) => u.warning(h.octokitLogger(...e)),
                        error: (...e) => u.error(h.octokitLogger(...e))
                    }
                });
            u.startGroup("Initializing the Automatic Releases action"), l.dumpGitHubEventPayload(), u.debug(`Github context: ${JSON.stringify(r)}`), u.endGroup(), u.startGroup("Determining release tags");
            const i = e.automaticReleaseTag ? e.automaticReleaseTag : h.parseGitTag(r.ref);
            if (!i) throw new Error(`The parameter "automatic_release_tag" was not set and this does not appear to be a GitHub tag event. (Event: ${r.ref})`);
            const o = e.automaticReleaseTag ? e.automaticReleaseTag : yield((e, t, r) => s(void 0, void 0, void 0, (function*() {
                if (!g.default(t)) throw new Error(`The parameter "automatic_release_tag" was not set and the current tag "${t}" does not appear to conform to semantic versioning.`);
                const n = e.repos.listTags.endpoint.merge(r),
                    i = (yield e.paginate(n)).map((e => {
                        u.debug(`Currently processing tag ${e.name}`);
                        const t = g.default(e.name);
                        return Object.assign(Object.assign({}, e), {
                            semverTag: t
                        })
                    })).filter((e => null !== e.semverTag)).sort(((e, t) => m.default(e.semverTag, t.semverTag)));
                let o = "";
                for (const e of i)
                    if (y.default(e.semverTag, t)) {
                        o = e.name;
                        break
                    } return o
            })))(n, i, {
                owner: r.repo.owner,
                repo: r.repo.repo
            });
            u.endGroup();
            const a = yield((e, t, r) => s(void 0, void 0, void 0, (function*() {
                var n;
                let i;
                u.startGroup("Retrieving commit history"), u.info("Determining state of the previous release");
                let o = "";
                u.info(`Searching for SHA corresponding to previous "${t.ref}" release tag`);
                try {
                    i = yield e.git.getRef(t), o = h.parseGitTag(t.ref)
                } catch (e) {
                    u.info(`Could not find SHA corresponding to tag "${t.ref}" (${e.message}). Assuming this is the first release.`), o = "HEAD"
                }
                u.info(`Retrieving commits between ${o} and ${r}`);
                try {
                    i = yield e.repos.compareCommits({
                        owner: t.owner,
                        repo: t.repo,
                        base: o,
                        head: r
                    }), u.info(`Successfully retrieved ${i.data.commits.length} commits between ${o} and ${r}`)
                } catch (e) {
                    u.warning(`Could not find any commits between ${o} and ${r}`)
                }
                let s = [];
                return (null === (n = null == i ? void 0 : i.data) || void 0 === n ? void 0 : n.commits) && (s = i.data.commits), u.debug(`Currently ${s.length} number of commits between ${o} and ${r}`), u.endGroup(), s
            })))(n, {
                owner: r.repo.owner,
                repo: r.repo.repo,
                ref: `tags/${o}`
            }, r.sha), d = yield t.getChangelog(n, r.repo.owner, r.repo.repo, a);
            e.automaticReleaseTag && (yield((e, t) => s(void 0, void 0, void 0, (function*() {
                u.startGroup("Generating release tag");
                const r = t.ref.substring(10);
                u.info(`Attempting to create or update release tag "${r}"`);
                try {
                    yield e.git.createRef(t)
                } catch (r) {
                    const n = t.ref.substring(5);
                    u.info(`Could not create new tag "${t.ref}" (${r.message}) therefore updating existing tag "${n}"`), yield e.git.updateRef(Object.assign(Object.assign({}, t), {
                        ref: n,
                        force: !0
                    }))
                }
                u.info(`Successfully created or updated the release tag "${r}"`), u.endGroup()
            })))(n, {
                owner: r.repo.owner,
                ref: `refs/tags/${e.automaticReleaseTag}`,
                repo: r.repo.repo,
                sha: r.sha
            }), yield((e, t) => s(void 0, void 0, void 0, (function*() {
                u.startGroup(`Deleting GitHub releases associated with the tag "${t.tag}"`);
                try {
                    u.info(`Searching for releases corresponding to the "${t.tag}" tag`);
                    const r = yield e.repos.getReleaseByTag(t);
                    u.info(`Deleting release: ${r.data.id}`), yield e.repos.deleteRelease({
                        owner: t.owner,
                        repo: t.repo,
                        release_id: r.data.id
                    })
                } catch (e) {
                    u.info(`Could not find release associated with tag "${t.tag}" (${e.message})`)
                }
                u.endGroup()
            })))(n, {
                owner: r.repo.owner,
                repo: r.repo.repo,
                tag: e.automaticReleaseTag
            }));
            const f = yield((e, t) => s(void 0, void 0, void 0, (function*() {
                u.startGroup(`Generating new GitHub release for the "${t.tag_name}" tag`), u.info("Creating new release");
                const r = yield e.repos.createRelease(t);
                return u.endGroup(), r.data.upload_url
            })))(n, {
                owner: r.repo.owner,
                repo: r.repo.repo,
                tag_name: i,
                name: e.releaseTitle ? e.releaseTitle : i,
                draft: e.draftRelease,
                prerelease: e.preRelease,
                body: d
            });
            yield b.uploadReleaseArtifacts(n, f, e.files), u.debug(`Exporting environment variable AUTOMATIC_RELEASES_TAG with value ${i}`), u.exportVariable("AUTOMATIC_RELEASES_TAG", i), u.setOutput("automatic_releases_tag", i), u.setOutput("upload_url", f)
        } catch (e) {
            throw u.setFailed(e.message), e
        }
    }))
}, function(e, t, r) {
    "use strict";
    var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r), Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        } : function(e, t, r, n) {
            void 0 === n && (n = r), e[n] = t[r]
        }),
        i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        } : function(e, t) {
            e.default = t
        }),
        o = this && this.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) "default" !== r && Object.hasOwnProperty.call(e, r) && n(t, e, r);
            return i(t, e), t
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.issue = t.issueCommand = void 0;
    const s = o(r(4)),
        a = r(25);

    function u(e, t, r) {
        const n = new c(e, t, r);
        process.stdout.write(n.toString() + s.EOL)
    }
    t.issueCommand = u, t.issue = function(e, t = "") {
        u(e, {}, t)
    };
    class c {
        constructor(e, t, r) {
            e || (e = "missing.command"), this.command = e, this.properties = t, this.message = r
        }
        toString() {
            let e = "::" + this.command;
            if (this.properties && Object.keys(this.properties).length > 0) {
                e += " ";
                let r = !0;
                for (const n in this.properties)
                    if (this.properties.hasOwnProperty(n)) {
                        const i = this.properties[n];
                        i && (r ? r = !1 : e += ",", e += `${n}=${t=i,a.toCommandValue(t).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}`)
                    }
            }
            var t;
            return e += `::${function(e){return a.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}(this.message)}`, e
        }
    }
}, function(e, t, r) {
    "use strict";
    var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r), Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        } : function(e, t, r, n) {
            void 0 === n && (n = r), e[n] = t[r]
        }),
        i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        } : function(e, t) {
            e.default = t
        }),
        o = this && this.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) "default" !== r && Object.hasOwnProperty.call(e, r) && n(t, e, r);
            return i(t, e), t
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.issueCommand = void 0;
    const s = o(r(1)),
        a = o(r(4)),
        u = r(25);
    t.issueCommand = function(e, t) {
        const r = process.env[`GITHUB_${e}`];
        if (!r) throw new Error(`Unable to find environment variable for file command ${e}`);
        if (!s.existsSync(r)) throw new Error(`Missing file at path: ${r}`);
        s.appendFileSync(r, `${u.toCommandValue(t)}${a.EOL}`, {
            encoding: "utf8"
        })
    }
}, function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        },
        i = this && this.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const o = r(92),
        s = n(r(146)),
        a = i(r(51));
    s.default.prototype = new s.default, t.context = new a.Context;
    class u extends s.default {
        constructor(e, t = {}) {
            super(Object.assign(Object.assign({}, t), {
                auth: `token ${e}`
            })), this.graphql = o.graphql.defaults({
                headers: {
                    authorization: `token ${e}`
                }
            })
        }
    }
    t.GitHub = u
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(93),
        i = r(10);
    class o extends Error {
        constructor(e, t) {
            super(t.data.errors[0].message), Object.assign(this, t.data), this.name = "GraphqlError", this.request = e, Error.captureStackTrace && Error.captureStackTrace(this, this.constructor)
        }
    }
    const s = ["method", "baseUrl", "url", "headers", "request", "query"];

    function a(e, t) {
        const r = e.defaults(t);
        return Object.assign(((e, t) => function(e, t, r) {
            r = r = "string" == typeof t ? Object.assign({
                query: t
            }, r) : t;
            const n = Object.keys(r).reduce(((e, t) => s.includes(t) ? (e[t] = r[t], e) : (e.variables || (e.variables = {}), e.variables[t] = r[t], e)), {});
            return e(n).then((e => {
                if (e.data.errors) throw new o(n, {
                    data: e.data
                });
                return e.data.data
            }))
        }(r, e, t)), {
            defaults: a.bind(null, r),
            endpoint: n.request.endpoint
        })
    }
    const u = a(n.request, {
        headers: {
            "user-agent": `octokit-graphql.js/4.3.1 ${i.getUserAgent()}`
        },
        method: "POST",
        url: "/graphql"
    });
    t.graphql = u, t.withCustomRequest = function(e) {
        return a(e, {
            method: "POST",
            url: "/graphql"
        })
    }
}, function(e, t, r) {
    "use strict";

    function n(e) {
        return e && "object" == typeof e && "default" in e ? e.default : e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(94),
        o = r(10),
        s = n(r(20)),
        a = n(r(44)),
        u = r(11);

    function c(e) {
        (s(e.body) || Array.isArray(e.body)) && (e.body = JSON.stringify(e.body));
        let t, r, n = {};
        return (e.request && e.request.fetch || a)(e.url, Object.assign({
            method: e.method,
            body: e.body,
            headers: e.headers,
            redirect: e.redirect
        }, e.request)).then((i => {
            r = i.url, t = i.status;
            for (const e of i.headers) n[e[0]] = e[1];
            if (204 === t || 205 === t) return;
            if ("HEAD" === e.method) {
                if (t < 400) return;
                throw new u.RequestError(i.statusText, t, {
                    headers: n,
                    request: e
                })
            }
            if (304 === t) throw new u.RequestError("Not modified", t, {
                headers: n,
                request: e
            });
            if (t >= 400) return i.text().then((r => {
                const i = new u.RequestError(r, t, {
                    headers: n,
                    request: e
                });
                try {
                    let e = JSON.parse(i.message);
                    Object.assign(i, e);
                    let t = e.errors;
                    i.message = i.message + ": " + t.map(JSON.stringify).join(", ")
                } catch (e) {}
                throw i
            }));
            const o = i.headers.get("content-type");
            return /application\/json/.test(o) ? i.json() : !o || /^text\/|charset=utf-8$/.test(o) ? i.text() : function(e) {
                return e.arrayBuffer()
            }(i)
        })).then((e => ({
            status: t,
            url: r,
            headers: n,
            data: e
        }))).catch((t => {
            if (t instanceof u.RequestError) throw t;
            throw new u.RequestError(t.message, 500, {
                headers: n,
                request: e
            })
        }))
    }
    const p = function e(t, r) {
        const n = t.defaults(r);
        return Object.assign((function(t, r) {
            const i = n.merge(t, r);
            if (!i.request || !i.request.hook) return c(n.parse(i));
            const o = (e, t) => c(n.parse(n.merge(e, t)));
            return Object.assign(o, {
                endpoint: n,
                defaults: e.bind(null, n)
            }), i.request.hook(o, i)
        }), {
            endpoint: n,
            defaults: e.bind(null, n)
        })
    }(i.endpoint, {
        headers: {
            "user-agent": `octokit-request.js/5.3.1 ${o.getUserAgent()}`
        }
    });
    t.request = p
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n, i = (n = r(20)) && "object" == typeof n && "default" in n ? n.default : n,
        o = r(10);

    function s(e, t) {
        const r = Object.assign({}, e);
        return Object.keys(t).forEach((n => {
            i(t[n]) ? n in e ? r[n] = s(e[n], t[n]) : Object.assign(r, {
                [n]: t[n]
            }) : Object.assign(r, {
                [n]: t[n]
            })
        })), r
    }

    function a(e, t, r) {
        if ("string" == typeof t) {
            let [e, n] = t.split(" ");
            r = Object.assign(n ? {
                method: e,
                url: n
            } : {
                url: e
            }, r)
        } else r = Object.assign({}, t);
        var n;
        r.headers = (n = r.headers) ? Object.keys(n).reduce(((e, t) => (e[t.toLowerCase()] = n[t], e)), {}) : {};
        const i = s(e || {}, r);
        return e && e.mediaType.previews.length && (i.mediaType.previews = e.mediaType.previews.filter((e => !i.mediaType.previews.includes(e))).concat(i.mediaType.previews)), i.mediaType.previews = i.mediaType.previews.map((e => e.replace(/-preview/, ""))), i
    }
    const u = /\{[^}]+\}/g;

    function c(e) {
        return e.replace(/^\W+|\W+$/g, "").split(/,/)
    }

    function p(e, t) {
        return Object.keys(e).filter((e => !t.includes(e))).reduce(((t, r) => (t[r] = e[r], t)), {})
    }

    function l(e) {
        return e.split(/(%[0-9A-Fa-f]{2})/g).map((function(e) {
            return /%[0-9A-Fa-f]/.test(e) || (e = encodeURI(e).replace(/%5B/g, "[").replace(/%5D/g, "]")), e
        })).join("")
    }

    function d(e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, (function(e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
        }))
    }

    function f(e, t, r) {
        return t = "+" === e || "#" === e ? l(t) : d(t), r ? d(r) + "=" + t : t
    }

    function h(e) {
        return null != e
    }

    function g(e) {
        return ";" === e || "&" === e || "?" === e
    }

    function m(e, t) {
        var r = ["+", "#", ".", "/", ";", "?", "&"];
        return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, (function(e, n, i) {
            if (n) {
                let e = "";
                const i = [];
                if (-1 !== r.indexOf(n.charAt(0)) && (e = n.charAt(0), n = n.substr(1)), n.split(/,/g).forEach((function(r) {
                        var n = /([^:\*]*)(?::(\d+)|(\*))?/.exec(r);
                        i.push(function(e, t, r, n) {
                            var i = e[r],
                                o = [];
                            if (h(i) && "" !== i)
                                if ("string" == typeof i || "number" == typeof i || "boolean" == typeof i) i = i.toString(), n && "*" !== n && (i = i.substring(0, parseInt(n, 10))), o.push(f(t, i, g(t) ? r : ""));
                                else if ("*" === n) Array.isArray(i) ? i.filter(h).forEach((function(e) {
                                o.push(f(t, e, g(t) ? r : ""))
                            })) : Object.keys(i).forEach((function(e) {
                                h(i[e]) && o.push(f(t, i[e], e))
                            }));
                            else {
                                const e = [];
                                Array.isArray(i) ? i.filter(h).forEach((function(r) {
                                    e.push(f(t, r))
                                })) : Object.keys(i).forEach((function(r) {
                                    h(i[r]) && (e.push(d(r)), e.push(f(t, i[r].toString())))
                                })), g(t) ? o.push(d(r) + "=" + e.join(",")) : 0 !== e.length && o.push(e.join(","))
                            } else ";" === t ? h(i) && o.push(d(r)) : "" !== i || "&" !== t && "?" !== t ? "" === i && o.push("") : o.push(d(r) + "=");
                            return o
                        }(t, e, n[1], n[2] || n[3]))
                    })), e && "+" !== e) {
                    var o = ",";
                    return "?" === e ? o = "&" : "#" !== e && (o = e), (0 !== i.length ? e : "") + i.join(o)
                }
                return i.join(",")
            }
            return l(i)
        }))
    }

    function y(e) {
        let t, r = e.method.toUpperCase(),
            n = (e.url || "/").replace(/:([a-z]\w+)/g, "{+$1}"),
            i = Object.assign({}, e.headers),
            o = p(e, ["method", "baseUrl", "url", "headers", "request", "mediaType"]);
        const s = function(e) {
            const t = e.match(u);
            return t ? t.map(c).reduce(((e, t) => e.concat(t)), []) : []
        }(n);
        var a;
        n = (a = n, {
            expand: m.bind(null, a)
        }).expand(o), /^http/.test(n) || (n = e.baseUrl + n);
        const l = p(o, Object.keys(e).filter((e => s.includes(e))).concat("baseUrl"));
        if (!/application\/octet-stream/i.test(i.accept) && (e.mediaType.format && (i.accept = i.accept.split(/,/).map((t => t.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, `application/vnd$1$2.${e.mediaType.format}`))).join(",")), e.mediaType.previews.length)) {
            const t = i.accept.match(/[\w-]+(?=-preview)/g) || [];
            i.accept = t.concat(e.mediaType.previews).map((t => `application/vnd.github.${t}-preview${e.mediaType.format?`.${e.mediaType.format}`:"+json"}`)).join(",")
        }
        return ["GET", "HEAD"].includes(r) ? n = function(e, t) {
            const r = /\?/.test(e) ? "&" : "?",
                n = Object.keys(t);
            return 0 === n.length ? e : e + r + n.map((e => "q" === e ? "q=" + t.q.split("+").map(encodeURIComponent).join("+") : `${e}=${encodeURIComponent(t[e])}`)).join("&")
        }(n, l) : "data" in l ? t = l.data : Object.keys(l).length ? t = l : i["content-length"] = 0, i["content-type"] || void 0 === t || (i["content-type"] = "application/json; charset=utf-8"), ["PATCH", "PUT"].includes(r) && void 0 === t && (t = ""), Object.assign({
            method: r,
            url: n,
            headers: i
        }, void 0 !== t ? {
            body: t
        } : null, e.request ? {
            request: e.request
        } : null)
    }

    function b(e, t, r) {
        return y(a(e, t, r))
    }
    const _ = function e(t, r) {
        const n = a(t, r),
            i = b.bind(null, n);
        return Object.assign(i, {
            DEFAULTS: n,
            defaults: e.bind(null, n),
            merge: a.bind(null, n),
            parse: y
        })
    }(null, {
        method: "GET",
        baseUrl: "https://api.github.com",
        headers: {
            accept: "application/vnd.github.v3+json",
            "user-agent": `octokit-endpoint.js/5.5.1 ${o.getUserAgent()}`
        },
        mediaType: {
            format: "",
            previews: []
        }
    });
    t.endpoint = _
}, function(e, t, r) {
    "use strict";
    const n = r(4),
        i = r(96),
        o = r(97);
    e.exports = (e, t) => {
        if (!e && t) throw new Error("You can't specify a `release` without specifying `platform`");
        let r;
        if ("darwin" === (e = e || n.platform())) {
            t || "darwin" !== n.platform() || (t = n.release());
            const e = t ? Number(t.split(".")[0]) > 15 ? "macOS" : "OS X" : "macOS";
            return r = t ? i(t).name : "", e + (r ? " " + r : "")
        }
        return "linux" === e ? (t || "linux" !== n.platform() || (t = n.release()), r = t ? t.replace(/^(\d+\.\d+).*/, "$1") : "", "Linux" + (r ? " " + r : "")) : "win32" === e ? (t || "win32" !== n.platform() || (t = n.release()), r = t ? o(t) : "", "Windows" + (r ? " " + r : "")) : e
    }
}, function(e, t, r) {
    "use strict";
    const n = r(4),
        i = new Map([
            [19, "Catalina"],
            [18, "Mojave"],
            [17, "High Sierra"],
            [16, "Sierra"],
            [15, "El Capitan"],
            [14, "Yosemite"],
            [13, "Mavericks"],
            [12, "Mountain Lion"],
            [11, "Lion"],
            [10, "Snow Leopard"],
            [9, "Leopard"],
            [8, "Tiger"],
            [7, "Panther"],
            [6, "Jaguar"],
            [5, "Puma"]
        ]),
        o = e => (e = Number((e || n.release()).split(".")[0]), {
            name: i.get(e),
            version: "10." + (e - 4)
        });
    e.exports = o, e.exports.default = o
}, function(e, t, r) {
    "use strict";
    const n = r(4),
        i = r(98),
        o = new Map([
            ["10.0", "10"],
            ["6.3", "8.1"],
            ["6.2", "8"],
            ["6.1", "7"],
            ["6.0", "Vista"],
            ["5.2", "Server 2003"],
            ["5.1", "XP"],
            ["5.0", "2000"],
            ["4.9", "ME"],
            ["4.1", "98"],
            ["4.0", "95"]
        ]);
    e.exports = e => {
        const t = /\d+\.\d/.exec(e || n.release());
        if (e && !t) throw new Error("`release` argument doesn't match `n.n`");
        const r = (t || [])[0];
        if ((!e || e === n.release()) && ["6.1", "6.2", "6.3", "10.0"].includes(r)) {
            const e = ((i.sync("wmic", ["os", "get", "Caption"]).stdout || "").match(/2008|2012|2016/) || [])[0];
            if (e) return `Server ${e}`
        }
        return o.get(r)
    }
}, function(e, t, r) {
    "use strict";
    const n = r(0),
        i = r(41),
        o = r(99),
        s = r(113),
        a = r(114),
        u = r(115),
        c = r(116),
        p = r(121),
        l = r(122),
        d = r(124),
        f = r(125);

    function h(e, t, r) {
        let i;
        return (r = Object.assign({
            extendEnv: !0,
            env: {}
        }, r)).extendEnv && (r.env = Object.assign({}, process.env, r.env)), !0 === r.__winShell ? (delete r.__winShell, i = {
            command: e,
            args: t,
            options: r,
            file: e,
            original: {
                cmd: e,
                args: t
            }
        }) : i = o._parse(e, t, r), (r = Object.assign({
            maxBuffer: 1e7,
            buffer: !0,
            stripEof: !0,
            preferLocal: !0,
            localDir: i.options.cwd || process.cwd(),
            encoding: "utf8",
            reject: !0,
            cleanup: !0
        }, i.options)).stdio = f(r), r.preferLocal && (r.env = a.env(Object.assign({}, r, {
            cwd: r.localDir
        }))), r.detached && (r.cleanup = !1), "win32" === process.platform && "cmd.exe" === n.basename(i.command) && i.args.unshift("/q"), {
            cmd: i.command,
            args: i.args,
            opts: r,
            parsed: i
        }
    }

    function g(e, t) {
        return t && e.stripEof && (t = s(t)), t
    }

    function m(e, t, r) {
        let n = "/bin/sh",
            i = ["-c", t];
        return r = Object.assign({}, r), "win32" === process.platform && (r.__winShell = !0, n = process.env.comspec || "cmd.exe", i = ["/s", "/c", `"${t}"`], r.windowsVerbatimArguments = !0), r.shell && (n = r.shell, delete r.shell), e(n, i, r)
    }

    function y(e, t, {
        encoding: r,
        buffer: n,
        maxBuffer: i
    }) {
        if (!e[t]) return null;
        let o;
        return o = n ? r ? c(e[t], {
            encoding: r,
            maxBuffer: i
        }) : c.buffer(e[t], {
            maxBuffer: i
        }) : new Promise(((r, n) => {
            e[t].once("end", r).once("error", n)
        })), o.catch((e => {
            throw e.stream = t, e.message = `${t} ${e.message}`, e
        }))
    }

    function b(e, t) {
        const {
            stdout: r,
            stderr: n
        } = e;
        let i = e.error;
        const {
            code: o,
            signal: s
        } = e, {
            parsed: a,
            joinedCmd: u
        } = t, c = t.timedOut || !1;
        if (!i) {
            let e = "";
            Array.isArray(a.opts.stdio) ? ("inherit" !== a.opts.stdio[2] && (e += e.length > 0 ? n : `\n${n}`), "inherit" !== a.opts.stdio[1] && (e += `\n${r}`)) : "inherit" !== a.opts.stdio && (e = `\n${n}${r}`), i = new Error(`Command failed: ${u}${e}`), i.code = o < 0 ? d(o) : o
        }
        return i.stdout = r, i.stderr = n, i.failed = !0, i.signal = s || null, i.cmd = u, i.timedOut = c, i
    }

    function _(e, t) {
        let r = e;
        return Array.isArray(t) && t.length > 0 && (r += " " + t.join(" ")), r
    }
    e.exports = (e, t, r) => {
        const n = h(e, t, r),
            {
                encoding: s,
                buffer: a,
                maxBuffer: c
            } = n.opts,
            d = _(e, t);
        let f, m;
        try {
            f = i.spawn(n.cmd, n.args, n.opts)
        } catch (e) {
            return Promise.reject(e)
        }
        n.opts.cleanup && (m = l((() => {
            f.kill()
        })));
        let v = null,
            w = !1;
        const E = () => {
            v && (clearTimeout(v), v = null), m && m()
        };
        n.opts.timeout > 0 && (v = setTimeout((() => {
            v = null, w = !0, f.kill(n.opts.killSignal)
        }), n.opts.timeout));
        const q = new Promise((e => {
            f.on("exit", ((t, r) => {
                E(), e({
                    code: t,
                    signal: r
                })
            })), f.on("error", (t => {
                E(), e({
                    error: t
                })
            })), f.stdin && f.stdin.on("error", (t => {
                E(), e({
                    error: t
                })
            }))
        }));

        function T() {
            f.stdout && f.stdout.destroy(), f.stderr && f.stderr.destroy()
        }
        const S = () => p(Promise.all([q, y(f, "stdout", {
            encoding: s,
            buffer: a,
            maxBuffer: c
        }), y(f, "stderr", {
            encoding: s,
            buffer: a,
            maxBuffer: c
        })]).then((e => {
            const t = e[0];
            if (t.stdout = e[1], t.stderr = e[2], t.error || 0 !== t.code || null !== t.signal) {
                const e = b(t, {
                    joinedCmd: d,
                    parsed: n,
                    timedOut: w
                });
                if (e.killed = e.killed || f.killed, !n.opts.reject) return e;
                throw e
            }
            return {
                stdout: g(n.opts, t.stdout),
                stderr: g(n.opts, t.stderr),
                code: 0,
                failed: !1,
                killed: !1,
                signal: null,
                cmd: d,
                timedOut: !1
            }
        })), T);
        return o._enoent.hookChildProcess(f, n.parsed),
            function(e, t) {
                null != t && (u(t) ? t.pipe(e.stdin) : e.stdin.end(t))
            }(f, n.opts.input), f.then = (e, t) => S().then(e, t), f.catch = e => S().catch(e), f
    }, e.exports.stdout = (...t) => e.exports(...t).then((e => e.stdout)), e.exports.stderr = (...t) => e.exports(...t).then((e => e.stderr)), e.exports.shell = (t, r) => m(e.exports, t, r), e.exports.sync = (e, t, r) => {
        const n = h(e, t, r),
            o = _(e, t);
        if (u(n.opts.input)) throw new TypeError("The `input` option cannot be a stream in sync mode");
        const s = i.spawnSync(n.cmd, n.args, n.opts);
        if (s.code = s.status, s.error || 0 !== s.status || null !== s.signal) {
            const e = b(s, {
                joinedCmd: o,
                parsed: n
            });
            if (!n.opts.reject) return e;
            throw e
        }
        return {
            stdout: g(n.opts, s.stdout),
            stderr: g(n.opts, s.stderr),
            code: 0,
            failed: !1,
            signal: null,
            cmd: o,
            timedOut: !1
        }
    }, e.exports.shellSync = (t, r) => m(e.exports.sync, t, r)
}, function(e, t, r) {
    "use strict";
    const n = r(41),
        i = r(100),
        o = r(112);

    function s(e, t, r) {
        const s = i(e, t, r),
            a = n.spawn(s.command, s.args, s.options);
        return o.hookChildProcess(a, s), a
    }
    e.exports = s, e.exports.spawn = s, e.exports.sync = function(e, t, r) {
        const s = i(e, t, r),
            a = n.spawnSync(s.command, s.args, s.options);
        return a.error = a.error || o.verifyENOENTSync(a.status, s), a
    }, e.exports._parse = i, e.exports._enoent = o
}, function(e, t, r) {
    "use strict";
    const n = r(0),
        i = r(101),
        o = r(102),
        s = r(107),
        a = r(108),
        u = r(111),
        c = "win32" === process.platform,
        p = /\.(?:com|exe)$/i,
        l = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i,
        d = i((() => u.satisfies(process.version, "^4.8.0 || ^5.7.0 || >= 6.0.0", !0))) || !1;

    function f(e) {
        if (!c) return e;
        const t = function(e) {
                e.file = o(e);
                const t = e.file && a(e.file);
                return t ? (e.args.unshift(e.file), e.command = t, o(e)) : e.file
            }(e),
            r = !p.test(t);
        if (e.options.forceShell || r) {
            const r = l.test(t);
            e.command = n.normalize(e.command), e.command = s.command(e.command), e.args = e.args.map((e => s.argument(e, r)));
            const i = [e.command].concat(e.args).join(" ");
            e.args = ["/d", "/s", "/c", `"${i}"`], e.command = process.env.comspec || "cmd.exe", e.options.windowsVerbatimArguments = !0
        }
        return e
    }
    e.exports = function(e, t, r) {
        t && !Array.isArray(t) && (r = t, t = null);
        const n = {
            command: e,
            args: t = t ? t.slice(0) : [],
            options: r = Object.assign({}, r),
            file: void 0,
            original: {
                command: e,
                args: t
            }
        };
        return r.shell ? function(e) {
            if (d) return e;
            const t = [e.command].concat(e.args).join(" ");
            return c ? (e.command = "string" == typeof e.options.shell ? e.options.shell : process.env.comspec || "cmd.exe", e.args = ["/d", "/s", "/c", `"${t}"`], e.options.windowsVerbatimArguments = !0) : ("string" == typeof e.options.shell ? e.command = e.options.shell : "android" === process.platform ? e.command = "/system/bin/sh" : e.command = "/bin/sh", e.args = ["-c", t]), e
        }(n) : f(n)
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        try {
            return e()
        } catch (e) {}
    }
}, function(e, t, r) {
    "use strict";
    const n = r(0),
        i = r(103),
        o = r(42)();

    function s(e, t) {
        const r = process.cwd(),
            s = null != e.options.cwd;
        if (s) try {
            process.chdir(e.options.cwd)
        } catch (e) {}
        let a;
        try {
            a = i.sync(e.command, {
                path: (e.options.env || process.env)[o],
                pathExt: t ? n.delimiter : void 0
            })
        } catch (e) {} finally {
            process.chdir(r)
        }
        return a && (a = n.resolve(s ? e.options.cwd : "", a)), a
    }
    e.exports = function(e) {
        return s(e) || s(e, !0)
    }
}, function(e, t, r) {
    e.exports = c, c.sync = function(e, t) {
        for (var r = u(e, t = t || {}), n = r.env, o = r.ext, c = r.extExe, p = [], l = 0, d = n.length; l < d; l++) {
            var f = n[l];
            '"' === f.charAt(0) && '"' === f.slice(-1) && (f = f.slice(1, -1));
            var h = i.join(f, e);
            !f && /^\.[\\\/]/.test(e) && (h = e.slice(0, 2) + h);
            for (var g = 0, m = o.length; g < m; g++) {
                var y = h + o[g];
                try {
                    if (s.sync(y, {
                            pathExt: c
                        })) {
                        if (!t.all) return y;
                        p.push(y)
                    }
                } catch (e) {}
            }
        }
        if (t.all && p.length) return p;
        if (t.nothrow) return null;
        throw a(e)
    };
    var n = "win32" === process.platform || "cygwin" === process.env.OSTYPE || "msys" === process.env.OSTYPE,
        i = r(0),
        o = n ? ";" : ":",
        s = r(104);

    function a(e) {
        var t = new Error("not found: " + e);
        return t.code = "ENOENT", t
    }

    function u(e, t) {
        var r = t.colon || o,
            i = t.path || process.env.PATH || "",
            s = [""];
        i = i.split(r);
        var a = "";
        return n && (i.unshift(process.cwd()), s = (a = t.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM").split(r), -1 !== e.indexOf(".") && "" !== s[0] && s.unshift("")), (e.match(/\//) || n && e.match(/\\/)) && (i = [""]), {
            env: i,
            ext: s,
            extExe: a
        }
    }

    function c(e, t, r) {
        "function" == typeof t && (r = t, t = {});
        var n = u(e, t),
            o = n.env,
            c = n.ext,
            p = n.extExe,
            l = [];
        ! function n(u, d) {
            if (u === d) return t.all && l.length ? r(null, l) : r(a(e));
            var f = o[u];
            '"' === f.charAt(0) && '"' === f.slice(-1) && (f = f.slice(1, -1));
            var h = i.join(f, e);
            !f && /^\.[\\\/]/.test(e) && (h = e.slice(0, 2) + h),
                function e(i, o) {
                    if (i === o) return n(u + 1, d);
                    var a = c[i];
                    s(h + a, {
                        pathExt: p
                    }, (function(n, s) {
                        if (!n && s) {
                            if (!t.all) return r(null, h + a);
                            l.push(h + a)
                        }
                        return e(i + 1, o)
                    }))
                }(0, c.length)
        }(0, o.length)
    }
}, function(e, t, r) {
    var n;
    r(1);

    function i(e, t, r) {
        if ("function" == typeof t && (r = t, t = {}), !r) {
            if ("function" != typeof Promise) throw new TypeError("callback not provided");
            return new Promise((function(r, n) {
                i(e, t || {}, (function(e, t) {
                    e ? n(e) : r(t)
                }))
            }))
        }
        n(e, t || {}, (function(e, n) {
            e && ("EACCES" === e.code || t && t.ignoreErrors) && (e = null, n = !1), r(e, n)
        }))
    }
    n = "win32" === process.platform || global.TESTING_WINDOWS ? r(105) : r(106), e.exports = i, i.sync = function(e, t) {
        try {
            return n.sync(e, t || {})
        } catch (e) {
            if (t && t.ignoreErrors || "EACCES" === e.code) return !1;
            throw e
        }
    }
}, function(e, t, r) {
    e.exports = o, o.sync = function(e, t) {
        return i(n.statSync(e), e, t)
    };
    var n = r(1);

    function i(e, t, r) {
        return !(!e.isSymbolicLink() && !e.isFile()) && function(e, t) {
            var r = void 0 !== t.pathExt ? t.pathExt : process.env.PATHEXT;
            if (!r) return !0;
            if (-1 !== (r = r.split(";")).indexOf("")) return !0;
            for (var n = 0; n < r.length; n++) {
                var i = r[n].toLowerCase();
                if (i && e.substr(-i.length).toLowerCase() === i) return !0
            }
            return !1
        }(t, r)
    }

    function o(e, t, r) {
        n.stat(e, (function(n, o) {
            r(n, !n && i(o, e, t))
        }))
    }
}, function(e, t, r) {
    e.exports = i, i.sync = function(e, t) {
        return o(n.statSync(e), t)
    };
    var n = r(1);

    function i(e, t, r) {
        n.stat(e, (function(e, n) {
            r(e, !e && o(n, t))
        }))
    }

    function o(e, t) {
        return e.isFile() && function(e, t) {
            var r = e.mode,
                n = e.uid,
                i = e.gid,
                o = void 0 !== t.uid ? t.uid : process.getuid && process.getuid(),
                s = void 0 !== t.gid ? t.gid : process.getgid && process.getgid(),
                a = parseInt("100", 8),
                u = parseInt("010", 8),
                c = parseInt("001", 8),
                p = a | u;
            return r & c || r & u && i === s || r & a && n === o || r & p && 0 === o
        }(e, t)
    }
}, function(e, t, r) {
    "use strict";
    const n = /([()\][%!^"`<>&|;, *?])/g;
    e.exports.command = function(e) {
        return e = e.replace(n, "^$1")
    }, e.exports.argument = function(e, t) {
        return e = (e = `"${e=(e=(e=`${e}`).replace(/(\\*)"/g,'$1$1\\"')).replace(/(\\*)$/,"$1$1")}"`).replace(n, "^$1"), t && (e = e.replace(n, "^$1")), e
    }
}, function(e, t, r) {
    "use strict";
    const n = r(1),
        i = r(109);
    e.exports = function(e) {
        let t, r;
        Buffer.alloc ? t = Buffer.alloc(150) : (t = new Buffer(150), t.fill(0));
        try {
            r = n.openSync(e, "r"), n.readSync(r, t, 0, 150, 0), n.closeSync(r)
        } catch (e) {}
        return i(t.toString())
    }
}, function(e, t, r) {
    "use strict";
    var n = r(110);
    e.exports = function(e) {
        var t = e.match(n);
        if (!t) return null;
        var r = t[0].replace(/#! ?/, "").split(" "),
            i = r[0].split("/").pop(),
            o = r[1];
        return "env" === i ? o : i + (o ? " " + o : "")
    }
}, function(e, t, r) {
    "use strict";
    e.exports = /^#!.*/
}, function(e, t) {
    var r;
    t = e.exports = W, r = "object" == typeof process && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? function() {
        var e = Array.prototype.slice.call(arguments, 0);
        e.unshift("SEMVER"), console.log.apply(console, e)
    } : function() {}, t.SEMVER_SPEC_VERSION = "2.0.0";
    var n = Number.MAX_SAFE_INTEGER || 9007199254740991,
        i = t.re = [],
        o = t.src = [],
        s = 0,
        a = s++;
    o[a] = "0|[1-9]\\d*";
    var u = s++;
    o[u] = "[0-9]+";
    var c = s++;
    o[c] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
    var p = s++;
    o[p] = "(" + o[a] + ")\\.(" + o[a] + ")\\.(" + o[a] + ")";
    var l = s++;
    o[l] = "(" + o[u] + ")\\.(" + o[u] + ")\\.(" + o[u] + ")";
    var d = s++;
    o[d] = "(?:" + o[a] + "|" + o[c] + ")";
    var f = s++;
    o[f] = "(?:" + o[u] + "|" + o[c] + ")";
    var h = s++;
    o[h] = "(?:-(" + o[d] + "(?:\\." + o[d] + ")*))";
    var g = s++;
    o[g] = "(?:-?(" + o[f] + "(?:\\." + o[f] + ")*))";
    var m = s++;
    o[m] = "[0-9A-Za-z-]+";
    var y = s++;
    o[y] = "(?:\\+(" + o[m] + "(?:\\." + o[m] + ")*))";
    var b = s++,
        _ = "v?" + o[p] + o[h] + "?" + o[y] + "?";
    o[b] = "^" + _ + "$";
    var v = "[v=\\s]*" + o[l] + o[g] + "?" + o[y] + "?",
        w = s++;
    o[w] = "^" + v + "$";
    var E = s++;
    o[E] = "((?:<|>)?=?)";
    var q = s++;
    o[q] = o[u] + "|x|X|\\*";
    var T = s++;
    o[T] = o[a] + "|x|X|\\*";
    var S = s++;
    o[S] = "[v=\\s]*(" + o[T] + ")(?:\\.(" + o[T] + ")(?:\\.(" + o[T] + ")(?:" + o[h] + ")?" + o[y] + "?)?)?";
    var A = s++;
    o[A] = "[v=\\s]*(" + o[q] + ")(?:\\.(" + o[q] + ")(?:\\.(" + o[q] + ")(?:" + o[g] + ")?" + o[y] + "?)?)?";
    var R = s++;
    o[R] = "^" + o[E] + "\\s*" + o[S] + "$";
    var x = s++;
    o[x] = "^" + o[E] + "\\s*" + o[A] + "$";
    var O = s++;
    o[O] = "(?:^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])";
    var C = s++;
    o[C] = "(?:~>?)";
    var k = s++;
    o[k] = "(\\s*)" + o[C] + "\\s+", i[k] = new RegExp(o[k], "g");
    var j = s++;
    o[j] = "^" + o[C] + o[S] + "$";
    var P = s++;
    o[P] = "^" + o[C] + o[A] + "$";
    var L = s++;
    o[L] = "(?:\\^)";
    var $ = s++;
    o[$] = "(\\s*)" + o[L] + "\\s+", i[$] = new RegExp(o[$], "g");
    var I = s++;
    o[I] = "^" + o[L] + o[S] + "$";
    var N = s++;
    o[N] = "^" + o[L] + o[A] + "$";
    var B = s++;
    o[B] = "^" + o[E] + "\\s*(" + v + ")$|^$";
    var D = s++;
    o[D] = "^" + o[E] + "\\s*(" + _ + ")$|^$";
    var G = s++;
    o[G] = "(\\s*)" + o[E] + "\\s*(" + v + "|" + o[S] + ")", i[G] = new RegExp(o[G], "g");
    var M = s++;
    o[M] = "^\\s*(" + o[S] + ")\\s+-\\s+(" + o[S] + ")\\s*$";
    var F = s++;
    o[F] = "^\\s*(" + o[A] + ")\\s+-\\s+(" + o[A] + ")\\s*$";
    var H = s++;
    o[H] = "(<|>)?=?\\s*\\*";
    for (var U = 0; U < 35; U++) r(U, o[U]), i[U] || (i[U] = new RegExp(o[U]));

    function z(e, t) {
        if (t && "object" == typeof t || (t = {
                loose: !!t,
                includePrerelease: !1
            }), e instanceof W) return e;
        if ("string" != typeof e) return null;
        if (e.length > 256) return null;
        if (!(t.loose ? i[w] : i[b]).test(e)) return null;
        try {
            return new W(e, t)
        } catch (e) {
            return null
        }
    }

    function W(e, t) {
        if (t && "object" == typeof t || (t = {
                loose: !!t,
                includePrerelease: !1
            }), e instanceof W) {
            if (e.loose === t.loose) return e;
            e = e.version
        } else if ("string" != typeof e) throw new TypeError("Invalid Version: " + e);
        if (e.length > 256) throw new TypeError("version is longer than 256 characters");
        if (!(this instanceof W)) return new W(e, t);
        r("SemVer", e, t), this.options = t, this.loose = !!t.loose;
        var o = e.trim().match(t.loose ? i[w] : i[b]);
        if (!o) throw new TypeError("Invalid Version: " + e);
        if (this.raw = e, this.major = +o[1], this.minor = +o[2], this.patch = +o[3], this.major > n || this.major < 0) throw new TypeError("Invalid major version");
        if (this.minor > n || this.minor < 0) throw new TypeError("Invalid minor version");
        if (this.patch > n || this.patch < 0) throw new TypeError("Invalid patch version");
        o[4] ? this.prerelease = o[4].split(".").map((function(e) {
            if (/^[0-9]+$/.test(e)) {
                var t = +e;
                if (t >= 0 && t < n) return t
            }
            return e
        })) : this.prerelease = [], this.build = o[5] ? o[5].split(".") : [], this.format()
    }
    t.parse = z, t.valid = function(e, t) {
        var r = z(e, t);
        return r ? r.version : null
    }, t.clean = function(e, t) {
        var r = z(e.trim().replace(/^[=v]+/, ""), t);
        return r ? r.version : null
    }, t.SemVer = W, W.prototype.format = function() {
        return this.version = this.major + "." + this.minor + "." + this.patch, this.prerelease.length && (this.version += "-" + this.prerelease.join(".")), this.version
    }, W.prototype.toString = function() {
        return this.version
    }, W.prototype.compare = function(e) {
        return r("SemVer.compare", this.version, this.options, e), e instanceof W || (e = new W(e, this.options)), this.compareMain(e) || this.comparePre(e)
    }, W.prototype.compareMain = function(e) {
        return e instanceof W || (e = new W(e, this.options)), K(this.major, e.major) || K(this.minor, e.minor) || K(this.patch, e.patch)
    }, W.prototype.comparePre = function(e) {
        if (e instanceof W || (e = new W(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;
        if (!this.prerelease.length && e.prerelease.length) return 1;
        if (!this.prerelease.length && !e.prerelease.length) return 0;
        var t = 0;
        do {
            var n = this.prerelease[t],
                i = e.prerelease[t];
            if (r("prerelease compare", t, n, i), void 0 === n && void 0 === i) return 0;
            if (void 0 === i) return 1;
            if (void 0 === n) return -1;
            if (n !== i) return K(n, i)
        } while (++t)
    }, W.prototype.inc = function(e, t) {
        switch (e) {
            case "premajor":
                this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t);
                break;
            case "preminor":
                this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t);
                break;
            case "prepatch":
                this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);
                break;
            case "prerelease":
                0 === this.prerelease.length && this.inc("patch", t), this.inc("pre", t);
                break;
            case "major":
                0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                break;
            case "minor":
                0 === this.patch && 0 !== this.prerelease.length || this.minor++, this.patch = 0, this.prerelease = [];
                break;
            case "patch":
                0 === this.prerelease.length && this.patch++, this.prerelease = [];
                break;
            case "pre":
                if (0 === this.prerelease.length) this.prerelease = [0];
                else {
                    for (var r = this.prerelease.length; --r >= 0;) "number" == typeof this.prerelease[r] && (this.prerelease[r]++, r = -2); - 1 === r && this.prerelease.push(0)
                }
                t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
                break;
            default:
                throw new Error("invalid increment argument: " + e)
        }
        return this.format(), this.raw = this.version, this
    }, t.inc = function(e, t, r, n) {
        "string" == typeof r && (n = r, r = void 0);
        try {
            return new W(e, r).inc(t, n).version
        } catch (e) {
            return null
        }
    }, t.diff = function(e, t) {
        if (J(e, t)) return null;
        var r = z(e),
            n = z(t),
            i = "";
        if (r.prerelease.length || n.prerelease.length) {
            i = "pre";
            var o = "prerelease"
        }
        for (var s in r)
            if (("major" === s || "minor" === s || "patch" === s) && r[s] !== n[s]) return i + s;
        return o
    }, t.compareIdentifiers = K;
    var V = /^[0-9]+$/;

    function K(e, t) {
        var r = V.test(e),
            n = V.test(t);
        return r && n && (e = +e, t = +t), e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1
    }

    function X(e, t, r) {
        return new W(e, r).compare(new W(t, r))
    }

    function Y(e, t, r) {
        return X(e, t, r) > 0
    }

    function Q(e, t, r) {
        return X(e, t, r) < 0
    }

    function J(e, t, r) {
        return 0 === X(e, t, r)
    }

    function Z(e, t, r) {
        return 0 !== X(e, t, r)
    }

    function ee(e, t, r) {
        return X(e, t, r) >= 0
    }

    function te(e, t, r) {
        return X(e, t, r) <= 0
    }

    function re(e, t, r, n) {
        switch (t) {
            case "===":
                return "object" == typeof e && (e = e.version), "object" == typeof r && (r = r.version), e === r;
            case "!==":
                return "object" == typeof e && (e = e.version), "object" == typeof r && (r = r.version), e !== r;
            case "":
            case "=":
            case "==":
                return J(e, r, n);
            case "!=":
                return Z(e, r, n);
            case ">":
                return Y(e, r, n);
            case ">=":
                return ee(e, r, n);
            case "<":
                return Q(e, r, n);
            case "<=":
                return te(e, r, n);
            default:
                throw new TypeError("Invalid operator: " + t)
        }
    }

    function ne(e, t) {
        if (t && "object" == typeof t || (t = {
                loose: !!t,
                includePrerelease: !1
            }), e instanceof ne) {
            if (e.loose === !!t.loose) return e;
            e = e.value
        }
        if (!(this instanceof ne)) return new ne(e, t);
        r("comparator", e, t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === ie ? this.value = "" : this.value = this.operator + this.semver.version, r("comp", this)
    }
    t.rcompareIdentifiers = function(e, t) {
        return K(t, e)
    }, t.major = function(e, t) {
        return new W(e, t).major
    }, t.minor = function(e, t) {
        return new W(e, t).minor
    }, t.patch = function(e, t) {
        return new W(e, t).patch
    }, t.compare = X, t.compareLoose = function(e, t) {
        return X(e, t, !0)
    }, t.rcompare = function(e, t, r) {
        return X(t, e, r)
    }, t.sort = function(e, r) {
        return e.sort((function(e, n) {
            return t.compare(e, n, r)
        }))
    }, t.rsort = function(e, r) {
        return e.sort((function(e, n) {
            return t.rcompare(e, n, r)
        }))
    }, t.gt = Y, t.lt = Q, t.eq = J, t.neq = Z, t.gte = ee, t.lte = te, t.cmp = re, t.Comparator = ne;
    var ie = {};

    function oe(e, t) {
        if (t && "object" == typeof t || (t = {
                loose: !!t,
                includePrerelease: !1
            }), e instanceof oe) return e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease ? e : new oe(e.raw, t);
        if (e instanceof ne) return new oe(e.value, t);
        if (!(this instanceof oe)) return new oe(e, t);
        if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this.raw = e, this.set = e.split(/\s*\|\|\s*/).map((function(e) {
                return this.parseRange(e.trim())
            }), this).filter((function(e) {
                return e.length
            })), !this.set.length) throw new TypeError("Invalid SemVer Range: " + e);
        this.format()
    }

    function se(e) {
        return !e || "x" === e.toLowerCase() || "*" === e
    }

    function ae(e, t, r, n, i, o, s, a, u, c, p, l, d) {
        return ((t = se(r) ? "" : se(n) ? ">=" + r + ".0.0" : se(i) ? ">=" + r + "." + n + ".0" : ">=" + t) + " " + (a = se(u) ? "" : se(c) ? "<" + (+u + 1) + ".0.0" : se(p) ? "<" + u + "." + (+c + 1) + ".0" : l ? "<=" + u + "." + c + "." + p + "-" + l : "<=" + a)).trim()
    }

    function ue(e, t, n) {
        for (var i = 0; i < e.length; i++)
            if (!e[i].test(t)) return !1;
        if (t.prerelease.length && !n.includePrerelease) {
            for (i = 0; i < e.length; i++)
                if (r(e[i].semver), e[i].semver !== ie && e[i].semver.prerelease.length > 0) {
                    var o = e[i].semver;
                    if (o.major === t.major && o.minor === t.minor && o.patch === t.patch) return !0
                } return !1
        }
        return !0
    }

    function ce(e, t, r) {
        try {
            t = new oe(t, r)
        } catch (e) {
            return !1
        }
        return t.test(e)
    }

    function pe(e, t, r, n) {
        var i, o, s, a, u;
        switch (e = new W(e, n), t = new oe(t, n), r) {
            case ">":
                i = Y, o = te, s = Q, a = ">", u = ">=";
                break;
            case "<":
                i = Q, o = ee, s = Y, a = "<", u = "<=";
                break;
            default:
                throw new TypeError('Must provide a hilo val of "<" or ">"')
        }
        if (ce(e, t, n)) return !1;
        for (var c = 0; c < t.set.length; ++c) {
            var p = t.set[c],
                l = null,
                d = null;
            if (p.forEach((function(e) {
                    e.semver === ie && (e = new ne(">=0.0.0")), l = l || e, d = d || e, i(e.semver, l.semver, n) ? l = e : s(e.semver, d.semver, n) && (d = e)
                })), l.operator === a || l.operator === u) return !1;
            if ((!d.operator || d.operator === a) && o(e, d.semver)) return !1;
            if (d.operator === u && s(e, d.semver)) return !1
        }
        return !0
    }
    ne.prototype.parse = function(e) {
        var t = this.options.loose ? i[B] : i[D],
            r = e.match(t);
        if (!r) throw new TypeError("Invalid comparator: " + e);
        this.operator = r[1], "=" === this.operator && (this.operator = ""), r[2] ? this.semver = new W(r[2], this.options.loose) : this.semver = ie
    }, ne.prototype.toString = function() {
        return this.value
    }, ne.prototype.test = function(e) {
        return r("Comparator.test", e, this.options.loose), this.semver === ie || ("string" == typeof e && (e = new W(e, this.options)), re(e, this.operator, this.semver, this.options))
    }, ne.prototype.intersects = function(e, t) {
        if (!(e instanceof ne)) throw new TypeError("a Comparator is required");
        var r;
        if (t && "object" == typeof t || (t = {
                loose: !!t,
                includePrerelease: !1
            }), "" === this.operator) return r = new oe(e.value, t), ce(this.value, r, t);
        if ("" === e.operator) return r = new oe(this.value, t), ce(e.semver, r, t);
        var n = !(">=" !== this.operator && ">" !== this.operator || ">=" !== e.operator && ">" !== e.operator),
            i = !("<=" !== this.operator && "<" !== this.operator || "<=" !== e.operator && "<" !== e.operator),
            o = this.semver.version === e.semver.version,
            s = !(">=" !== this.operator && "<=" !== this.operator || ">=" !== e.operator && "<=" !== e.operator),
            a = re(this.semver, "<", e.semver, t) && (">=" === this.operator || ">" === this.operator) && ("<=" === e.operator || "<" === e.operator),
            u = re(this.semver, ">", e.semver, t) && ("<=" === this.operator || "<" === this.operator) && (">=" === e.operator || ">" === e.operator);
        return n || i || o && s || a || u
    }, t.Range = oe, oe.prototype.format = function() {
        return this.range = this.set.map((function(e) {
            return e.join(" ").trim()
        })).join("||").trim(), this.range
    }, oe.prototype.toString = function() {
        return this.range
    }, oe.prototype.parseRange = function(e) {
        var t = this.options.loose;
        e = e.trim();
        var n = t ? i[F] : i[M];
        e = e.replace(n, ae), r("hyphen replace", e), e = e.replace(i[G], "$1$2$3"), r("comparator trim", e, i[G]), e = (e = (e = e.replace(i[k], "$1~")).replace(i[$], "$1^")).split(/\s+/).join(" ");
        var o = t ? i[B] : i[D],
            s = e.split(" ").map((function(e) {
                return function(e, t) {
                    return r("comp", e, t), e = function(e, t) {
                        return e.trim().split(/\s+/).map((function(e) {
                            return function(e, t) {
                                r("caret", e, t);
                                var n = t.loose ? i[N] : i[I];
                                return e.replace(n, (function(t, n, i, o, s) {
                                    var a;
                                    return r("caret", e, t, n, i, o, s), se(n) ? a = "" : se(i) ? a = ">=" + n + ".0.0 <" + (+n + 1) + ".0.0" : se(o) ? a = "0" === n ? ">=" + n + "." + i + ".0 <" + n + "." + (+i + 1) + ".0" : ">=" + n + "." + i + ".0 <" + (+n + 1) + ".0.0" : s ? (r("replaceCaret pr", s), a = "0" === n ? "0" === i ? ">=" + n + "." + i + "." + o + "-" + s + " <" + n + "." + i + "." + (+o + 1) : ">=" + n + "." + i + "." + o + "-" + s + " <" + n + "." + (+i + 1) + ".0" : ">=" + n + "." + i + "." + o + "-" + s + " <" + (+n + 1) + ".0.0") : (r("no pr"), a = "0" === n ? "0" === i ? ">=" + n + "." + i + "." + o + " <" + n + "." + i + "." + (+o + 1) : ">=" + n + "." + i + "." + o + " <" + n + "." + (+i + 1) + ".0" : ">=" + n + "." + i + "." + o + " <" + (+n + 1) + ".0.0"), r("caret return", a), a
                                }))
                            }(e, t)
                        })).join(" ")
                    }(e, t), r("caret", e), e = function(e, t) {
                        return e.trim().split(/\s+/).map((function(e) {
                            return function(e, t) {
                                var n = t.loose ? i[P] : i[j];
                                return e.replace(n, (function(t, n, i, o, s) {
                                    var a;
                                    return r("tilde", e, t, n, i, o, s), se(n) ? a = "" : se(i) ? a = ">=" + n + ".0.0 <" + (+n + 1) + ".0.0" : se(o) ? a = ">=" + n + "." + i + ".0 <" + n + "." + (+i + 1) + ".0" : s ? (r("replaceTilde pr", s), a = ">=" + n + "." + i + "." + o + "-" + s + " <" + n + "." + (+i + 1) + ".0") : a = ">=" + n + "." + i + "." + o + " <" + n + "." + (+i + 1) + ".0", r("tilde return", a), a
                                }))
                            }(e, t)
                        })).join(" ")
                    }(e, t), r("tildes", e), e = function(e, t) {
                        return r("replaceXRanges", e, t), e.split(/\s+/).map((function(e) {
                            return function(e, t) {
                                e = e.trim();
                                var n = t.loose ? i[x] : i[R];
                                return e.replace(n, (function(t, n, i, o, s, a) {
                                    r("xRange", e, t, n, i, o, s, a);
                                    var u = se(i),
                                        c = u || se(o),
                                        p = c || se(s);
                                    return "=" === n && p && (n = ""), u ? t = ">" === n || "<" === n ? "<0.0.0" : "*" : n && p ? (c && (o = 0), s = 0, ">" === n ? (n = ">=", c ? (i = +i + 1, o = 0, s = 0) : (o = +o + 1, s = 0)) : "<=" === n && (n = "<", c ? i = +i + 1 : o = +o + 1), t = n + i + "." + o + "." + s) : c ? t = ">=" + i + ".0.0 <" + (+i + 1) + ".0.0" : p && (t = ">=" + i + "." + o + ".0 <" + i + "." + (+o + 1) + ".0"), r("xRange return", t), t
                                }))
                            }(e, t)
                        })).join(" ")
                    }(e, t), r("xrange", e), e = function(e, t) {
                        return r("replaceStars", e, t), e.trim().replace(i[H], "")
                    }(e, t), r("stars", e), e
                }(e, this.options)
            }), this).join(" ").split(/\s+/);
        return this.options.loose && (s = s.filter((function(e) {
            return !!e.match(o)
        }))), s = s.map((function(e) {
            return new ne(e, this.options)
        }), this)
    }, oe.prototype.intersects = function(e, t) {
        if (!(e instanceof oe)) throw new TypeError("a Range is required");
        return this.set.some((function(r) {
            return r.every((function(r) {
                return e.set.some((function(e) {
                    return e.every((function(e) {
                        return r.intersects(e, t)
                    }))
                }))
            }))
        }))
    }, t.toComparators = function(e, t) {
        return new oe(e, t).set.map((function(e) {
            return e.map((function(e) {
                return e.value
            })).join(" ").trim().split(" ")
        }))
    }, oe.prototype.test = function(e) {
        if (!e) return !1;
        "string" == typeof e && (e = new W(e, this.options));
        for (var t = 0; t < this.set.length; t++)
            if (ue(this.set[t], e, this.options)) return !0;
        return !1
    }, t.satisfies = ce, t.maxSatisfying = function(e, t, r) {
        var n = null,
            i = null;
        try {
            var o = new oe(t, r)
        } catch (e) {
            return null
        }
        return e.forEach((function(e) {
            o.test(e) && (n && -1 !== i.compare(e) || (i = new W(n = e, r)))
        })), n
    }, t.minSatisfying = function(e, t, r) {
        var n = null,
            i = null;
        try {
            var o = new oe(t, r)
        } catch (e) {
            return null
        }
        return e.forEach((function(e) {
            o.test(e) && (n && 1 !== i.compare(e) || (i = new W(n = e, r)))
        })), n
    }, t.minVersion = function(e, t) {
        e = new oe(e, t);
        var r = new W("0.0.0");
        if (e.test(r)) return r;
        if (r = new W("0.0.0-0"), e.test(r)) return r;
        r = null;
        for (var n = 0; n < e.set.length; ++n) {
            e.set[n].forEach((function(e) {
                var t = new W(e.semver.version);
                switch (e.operator) {
                    case ">":
                        0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), t.raw = t.format();
                    case "":
                    case ">=":
                        r && !Y(r, t) || (r = t);
                        break;
                    case "<":
                    case "<=":
                        break;
                    default:
                        throw new Error("Unexpected operation: " + e.operator)
                }
            }))
        }
        if (r && e.test(r)) return r;
        return null
    }, t.validRange = function(e, t) {
        try {
            return new oe(e, t).range || "*"
        } catch (e) {
            return null
        }
    }, t.ltr = function(e, t, r) {
        return pe(e, t, "<", r)
    }, t.gtr = function(e, t, r) {
        return pe(e, t, ">", r)
    }, t.outside = pe, t.prerelease = function(e, t) {
        var r = z(e, t);
        return r && r.prerelease.length ? r.prerelease : null
    }, t.intersects = function(e, t, r) {
        return e = new oe(e, r), t = new oe(t, r), e.intersects(t)
    }, t.coerce = function(e) {
        if (e instanceof W) return e;
        if ("string" != typeof e) return null;
        var t = e.match(i[O]);
        if (null == t) return null;
        return z(t[1] + "." + (t[2] || "0") + "." + (t[3] || "0"))
    }
}, function(e, t, r) {
    "use strict";
    const n = "win32" === process.platform;

    function i(e, t) {
        return Object.assign(new Error(`${t} ${e.command} ENOENT`), {
            code: "ENOENT",
            errno: "ENOENT",
            syscall: `${t} ${e.command}`,
            path: e.command,
            spawnargs: e.args
        })
    }

    function o(e, t) {
        return n && 1 === e && !t.file ? i(t.original, "spawn") : null
    }
    e.exports = {
        hookChildProcess: function(e, t) {
            if (!n) return;
            const r = e.emit;
            e.emit = function(n, i) {
                if ("exit" === n) {
                    const n = o(i, t);
                    if (n) return r.call(e, "error", n)
                }
                return r.apply(e, arguments)
            }
        },
        verifyENOENT: o,
        verifyENOENTSync: function(e, t) {
            return n && 1 === e && !t.file ? i(t.original, "spawnSync") : null
        },
        notFoundError: i
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        var t = "string" == typeof e ? "\n" : "\n".charCodeAt(),
            r = "string" == typeof e ? "\r" : "\r".charCodeAt();
        return e[e.length - 1] === t && (e = e.slice(0, e.length - 1)), e[e.length - 1] === r && (e = e.slice(0, e.length - 1)), e
    }
}, function(e, t, r) {
    "use strict";
    const n = r(0),
        i = r(42);
    e.exports = e => {
        let t;
        e = Object.assign({
            cwd: process.cwd(),
            path: process.env[i()]
        }, e);
        let r = n.resolve(e.cwd);
        const o = [];
        for (; t !== r;) o.push(n.join(r, "node_modules/.bin")), t = r, r = n.resolve(r, "..");
        return o.push(n.dirname(process.execPath)), o.concat(e.path).join(n.delimiter)
    }, e.exports.env = t => {
        t = Object.assign({
            env: process.env
        }, t);
        const r = Object.assign({}, t.env),
            n = i({
                env: r
            });
        return t.path = r[n], r[n] = e.exports(t), r
    }
}, function(e, t, r) {
    "use strict";
    var n = e.exports = function(e) {
        return null !== e && "object" == typeof e && "function" == typeof e.pipe
    };
    n.writable = function(e) {
        return n(e) && !1 !== e.writable && "function" == typeof e._write && "object" == typeof e._writableState
    }, n.readable = function(e) {
        return n(e) && !1 !== e.readable && "function" == typeof e._read && "object" == typeof e._readableState
    }, n.duplex = function(e) {
        return n.writable(e) && n.readable(e)
    }, n.transform = function(e) {
        return n.duplex(e) && "function" == typeof e._transform && "object" == typeof e._transformState
    }
}, function(e, t, r) {
    "use strict";
    const n = r(117),
        i = r(120);
    class o extends Error {
        constructor() {
            super("maxBuffer exceeded"), this.name = "MaxBufferError"
        }
    }

    function s(e, t) {
        if (!e) return Promise.reject(new Error("Expected a stream"));
        t = Object.assign({
            maxBuffer: 1 / 0
        }, t);
        const {
            maxBuffer: r
        } = t;
        let s;
        return new Promise(((a, u) => {
            const c = e => {
                e && (e.bufferedData = s.getBufferedValue()), u(e)
            };
            s = n(e, i(t), (e => {
                e ? c(e) : a()
            })), s.on("data", (() => {
                s.getBufferedLength() > r && c(new o)
            }))
        })).then((() => s.getBufferedValue()))
    }
    e.exports = s, e.exports.buffer = (e, t) => s(e, Object.assign({}, t, {
        encoding: "buffer"
    })), e.exports.array = (e, t) => s(e, Object.assign({}, t, {
        array: !0
    })), e.exports.MaxBufferError = o
}, function(e, t, r) {
    var n = r(8),
        i = r(119),
        o = r(1),
        s = function() {},
        a = /^v?\.0/.test(process.version),
        u = function(e) {
            return "function" == typeof e
        },
        c = function(e, t, r, c) {
            c = n(c);
            var p = !1;
            e.on("close", (function() {
                p = !0
            })), i(e, {
                readable: t,
                writable: r
            }, (function(e) {
                if (e) return c(e);
                p = !0, c()
            }));
            var l = !1;
            return function(t) {
                if (!p && !l) return l = !0,
                    function(e) {
                        return !!a && !!o && (e instanceof(o.ReadStream || s) || e instanceof(o.WriteStream || s)) && u(e.close)
                    }(e) ? e.close(s) : function(e) {
                        return e.setHeader && u(e.abort)
                    }(e) ? e.abort() : u(e.destroy) ? e.destroy() : void c(t || new Error("stream was destroyed"))
            }
        },
        p = function(e) {
            e()
        },
        l = function(e, t) {
            return e.pipe(t)
        };
    e.exports = function() {
        var e, t = Array.prototype.slice.call(arguments),
            r = u(t[t.length - 1] || s) && t.pop() || s;
        if (Array.isArray(t[0]) && (t = t[0]), t.length < 2) throw new Error("pump requires two streams per minimum");
        var n = t.map((function(i, o) {
            var s = o < t.length - 1;
            return c(i, s, o > 0, (function(t) {
                e || (e = t), t && n.forEach(p), s || (n.forEach(p), r(e))
            }))
        }));
        return t.reduce(l)
    }
}, function(e, t) {
    e.exports = function e(t, r) {
        if (t && r) return e(t)(r);
        if ("function" != typeof t) throw new TypeError("need wrapper function");
        return Object.keys(t).forEach((function(e) {
            n[e] = t[e]
        })), n;

        function n() {
            for (var e = new Array(arguments.length), r = 0; r < e.length; r++) e[r] = arguments[r];
            var n = t.apply(this, e),
                i = e[e.length - 1];
            return "function" == typeof n && n !== i && Object.keys(i).forEach((function(e) {
                n[e] = i[e]
            })), n
        }
    }
}, function(e, t, r) {
    var n = r(8),
        i = function() {},
        o = function(e, t, r) {
            if ("function" == typeof t) return o(e, null, t);
            t || (t = {}), r = n(r || i);
            var s = e._writableState,
                a = e._readableState,
                u = t.readable || !1 !== t.readable && e.readable,
                c = t.writable || !1 !== t.writable && e.writable,
                p = !1,
                l = function() {
                    e.writable || d()
                },
                d = function() {
                    c = !1, u || r.call(e)
                },
                f = function() {
                    u = !1, c || r.call(e)
                },
                h = function(t) {
                    r.call(e, t ? new Error("exited with error code: " + t) : null)
                },
                g = function(t) {
                    r.call(e, t)
                },
                m = function() {
                    process.nextTick(y)
                },
                y = function() {
                    if (!p) return (!u || a && a.ended && !a.destroyed) && (!c || s && s.ended && !s.destroyed) ? void 0 : r.call(e, new Error("premature close"))
                },
                b = function() {
                    e.req.on("finish", d)
                };
            return ! function(e) {
                    return e.setHeader && "function" == typeof e.abort
                }(e) ? c && !s && (e.on("end", l), e.on("close", l)) : (e.on("complete", d), e.on("abort", m), e.req ? b() : e.on("request", b)),
                function(e) {
                    return e.stdio && Array.isArray(e.stdio) && 3 === e.stdio.length
                }(e) && e.on("exit", h), e.on("end", f), e.on("finish", d), !1 !== t.error && e.on("error", g), e.on("close", m),
                function() {
                    p = !0, e.removeListener("complete", d), e.removeListener("abort", m), e.removeListener("request", b), e.req && e.req.removeListener("finish", d), e.removeListener("end", l), e.removeListener("close", l), e.removeListener("finish", d), e.removeListener("exit", h), e.removeListener("end", f), e.removeListener("error", g), e.removeListener("close", m)
                }
        };
    e.exports = o
}, function(e, t, r) {
    "use strict";
    const {
        PassThrough: n
    } = r(3);
    e.exports = e => {
        e = Object.assign({}, e);
        const {
            array: t
        } = e;
        let {
            encoding: r
        } = e;
        const i = "buffer" === r;
        let o = !1;
        t ? o = !(r || i) : r = r || "utf8", i && (r = null);
        let s = 0;
        const a = [],
            u = new n({
                objectMode: o
            });
        return r && u.setEncoding(r), u.on("data", (e => {
            a.push(e), o ? s = a.length : s += e.length
        })), u.getBufferedValue = () => t ? a : i ? Buffer.concat(a, s) : a.join(""), u.getBufferedLength = () => s, u
    }
}, function(e, t, r) {
    "use strict";
    e.exports = (e, t) => (t = t || (() => {}), e.then((e => new Promise((e => {
        e(t())
    })).then((() => e))), (e => new Promise((e => {
        e(t())
    })).then((() => {
        throw e
    })))))
}, function(e, t, r) {
    var n, i = r(43),
        o = r(123),
        s = r(26);

    function a() {
        p && (p = !1, o.forEach((function(e) {
            try {
                process.removeListener(e, c[e])
            } catch (e) {}
        })), process.emit = h, process.reallyExit = d, n.count -= 1)
    }

    function u(e, t, r) {
        n.emitted[e] || (n.emitted[e] = !0, n.emit(e, t, r))
    }
    "function" != typeof s && (s = s.EventEmitter), process.__signal_exit_emitter__ ? n = process.__signal_exit_emitter__ : ((n = process.__signal_exit_emitter__ = new s).count = 0, n.emitted = {}), n.infinite || (n.setMaxListeners(1 / 0), n.infinite = !0), e.exports = function(e, t) {
        i.equal(typeof e, "function", "a callback must be provided for exit handler"), !1 === p && l();
        var r = "exit";
        t && t.alwaysLast && (r = "afterexit");
        return n.on(r, e),
            function() {
                n.removeListener(r, e), 0 === n.listeners("exit").length && 0 === n.listeners("afterexit").length && a()
            }
    }, e.exports.unload = a;
    var c = {};
    o.forEach((function(e) {
        c[e] = function() {
            process.listeners(e).length === n.count && (a(), u("exit", null, e), u("afterexit", null, e), process.kill(process.pid, e))
        }
    })), e.exports.signals = function() {
        return o
    }, e.exports.load = l;
    var p = !1;

    function l() {
        p || (p = !0, n.count += 1, o = o.filter((function(e) {
            try {
                return process.on(e, c[e]), !0
            } catch (e) {
                return !1
            }
        })), process.emit = g, process.reallyExit = f)
    }
    var d = process.reallyExit;

    function f(e) {
        process.exitCode = e || 0, u("exit", process.exitCode, null), u("afterexit", process.exitCode, null), d.call(process, process.exitCode)
    }
    var h = process.emit;

    function g(e, t) {
        if ("exit" === e) {
            void 0 !== t && (process.exitCode = t);
            var r = h.apply(this, arguments);
            return u("exit", process.exitCode, null), u("afterexit", process.exitCode, null), r
        }
        return h.apply(this, arguments)
    }
}, function(e, t) {
    e.exports = ["SIGABRT", "SIGALRM", "SIGHUP", "SIGINT", "SIGTERM"], "win32" !== process.platform && e.exports.push("SIGVTALRM", "SIGXCPU", "SIGXFSZ", "SIGUSR2", "SIGTRAP", "SIGSYS", "SIGQUIT", "SIGIOT"), "linux" === process.platform && e.exports.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT", "SIGUNUSED")
}, function(e, t, r) {
    "use strict";
    const n = r(5);
    let i;
    if ("function" == typeof n.getSystemErrorName) e.exports = n.getSystemErrorName;
    else {
        try {
            if (i = process.binding("uv"), "function" != typeof i.errname) throw new TypeError("uv.errname is not a function")
        } catch (e) {
            console.error("execa/lib/errname: unable to establish process.binding('uv')", e), i = null
        }
        e.exports = e => o(i, e)
    }

    function o(e, t) {
        if (e) return e.errname(t);
        if (!(t < 0)) throw new Error("err >= 0");
        return `Unknown system error ${t}`
    }
    e.exports.__test__ = o
}, function(e, t, r) {
    "use strict";
    const n = ["stdin", "stdout", "stderr"];
    e.exports = e => {
        if (!e) return null;
        if (e.stdio && (e => n.some((t => Boolean(e[t]))))(e)) throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${n.map((e=>`\`${e}\``)).join(", ")}`);
        if ("string" == typeof e.stdio) return e.stdio;
        const t = e.stdio || [];
        if (!Array.isArray(t)) throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);
        const r = [],
            i = Math.max(t.length, n.length);
        for (let o = 0; o < i; o++) {
            let i = null;
            void 0 !== t[o] ? i = t[o] : void 0 !== e[n[o]] && (i = e[n[o]]), r[o] = i
        }
        return r
    }
}, function(e, t, r) {
    "use strict";
    var n = r(127);

    function i(e) {
        return (e || "").toString().trim().replace(/^latin[\-_]?(\d+)$/i, "ISO-8859-$1").replace(/^win(?:dows)?[\-_]?(\d+)$/i, "WINDOWS-$1").replace(/^utf[\-_]?(\d+)$/i, "UTF-$1").replace(/^ks_c_5601\-1987$/i, "CP949").replace(/^us[\-_]?ascii$/i, "ASCII").toUpperCase()
    }
    e.exports.convert = function(e, t, r) {
        var o;
        r = i(r || "UTF-8"), t = i(t || "UTF-8"), e = e || "", "UTF-8" !== r && "string" == typeof e && (e = Buffer.from(e, "binary"));
        if (r === t) o = "string" == typeof e ? Buffer.from(e) : e;
        else try {
            o = function(e, t, r) {
                return "UTF-8" === t ? n.decode(e, r) : "UTF-8" === r ? n.encode(e, t) : n.encode(n.decode(e, r), t)
            }(e, t, r)
        } catch (t) {
            console.error(t), o = e
        }
        "string" == typeof o && (o = Buffer.from(o, "utf-8"));
        return o
    }
}, function(e, t, r) {
    "use strict";
    var n, i = r(6).Buffer,
        o = r(128),
        s = e.exports;
    s.encodings = null, s.defaultCharUnicode = "�", s.defaultCharSingleByte = "?", s.encode = function(e, t, r) {
        e = "" + (e || "");
        var n = s.getEncoder(t, r),
            o = n.write(e),
            a = n.end();
        return a && a.length > 0 ? i.concat([o, a]) : o
    }, s.decode = function(e, t, r) {
        "string" == typeof e && (s.skipDecodeWarning || (console.error("Iconv-lite warning: decode()-ing strings is deprecated. Refer to https://github.com/ashtuchkin/iconv-lite/wiki/Use-Buffers-when-decoding"), s.skipDecodeWarning = !0), e = i.from("" + (e || ""), "binary"));
        var n = s.getDecoder(t, r),
            o = n.write(e),
            a = n.end();
        return a ? o + a : o
    }, s.encodingExists = function(e) {
        try {
            return s.getCodec(e), !0
        } catch (e) {
            return !1
        }
    }, s.toEncoding = s.encode, s.fromEncoding = s.decode, s._codecDataCache = {}, s.getCodec = function(e) {
        s.encodings || (s.encodings = r(129));
        for (var t = s._canonicalizeEncoding(e), n = {};;) {
            var i = s._codecDataCache[t];
            if (i) return i;
            var o = s.encodings[t];
            switch (typeof o) {
                case "string":
                    t = o;
                    break;
                case "object":
                    for (var a in o) n[a] = o[a];
                    n.encodingName || (n.encodingName = t), t = o.type;
                    break;
                case "function":
                    return n.encodingName || (n.encodingName = t), i = new o(n, s), s._codecDataCache[n.encodingName] = i, i;
                default:
                    throw new Error("Encoding not recognized: '" + e + "' (searched as: '" + t + "')")
            }
        }
    }, s._canonicalizeEncoding = function(e) {
        return ("" + e).toLowerCase().replace(/:\d{4}$|[^0-9a-z]/g, "")
    }, s.getEncoder = function(e, t) {
        var r = s.getCodec(e),
            n = new r.encoder(t, r);
        return r.bomAware && t && t.addBOM && (n = new o.PrependBOM(n, t)), n
    }, s.getDecoder = function(e, t) {
        var r = s.getCodec(e),
            n = new r.decoder(t, r);
        return !r.bomAware || t && !1 === t.stripBOM || (n = new o.StripBOM(n, t)), n
    }, s.enableStreamingAPI = function(e) {
        if (!s.supportsStreams) {
            var t = r(145)(e);
            s.IconvLiteEncoderStream = t.IconvLiteEncoderStream, s.IconvLiteDecoderStream = t.IconvLiteDecoderStream, s.encodeStream = function(e, t) {
                return new s.IconvLiteEncoderStream(s.getEncoder(e, t), t)
            }, s.decodeStream = function(e, t) {
                return new s.IconvLiteDecoderStream(s.getDecoder(e, t), t)
            }, s.supportsStreams = !0
        }
    };
    try {
        n = r(3)
    } catch (e) {}
    n && n.Transform ? s.enableStreamingAPI(n) : s.encodeStream = s.decodeStream = function() {
        throw new Error("iconv-lite Streaming API is not enabled. Use iconv.enableStreamingAPI(require('stream')); to enable it.")
    }
}, function(e, t, r) {
    "use strict";

    function n(e, t) {
        this.encoder = e, this.addBOM = !0
    }

    function i(e, t) {
        this.decoder = e, this.pass = !1, this.options = t || {}
    }
    t.PrependBOM = n, n.prototype.write = function(e) {
        return this.addBOM && (e = "\ufeff" + e, this.addBOM = !1), this.encoder.write(e)
    }, n.prototype.end = function() {
        return this.encoder.end()
    }, t.StripBOM = i, i.prototype.write = function(e) {
        var t = this.decoder.write(e);
        return this.pass || !t || ("\ufeff" === t[0] && (t = t.slice(1), "function" == typeof this.options.stripBOM && this.options.stripBOM()), this.pass = !0), t
    }, i.prototype.end = function() {
        return this.decoder.end()
    }
}, function(e, t, r) {
    "use strict";
    for (var n = [r(130), r(132), r(133), r(134), r(135), r(136), r(137), r(138), r(139)], i = 0; i < n.length; i++) {
        e = n[i];
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
    }
}, function(e, t, r) {
    "use strict";
    var n = r(6).Buffer;

    function i(e, t) {
        this.enc = e.encodingName, this.bomAware = e.bomAware, "base64" === this.enc ? this.encoder = u : "cesu8" === this.enc && (this.enc = "utf8", this.encoder = c, "💩" !== n.from("eda0bdedb2a9", "hex").toString() && (this.decoder = p, this.defaultCharUnicode = t.defaultCharUnicode))
    }
    e.exports = {
        utf8: {
            type: "_internal",
            bomAware: !0
        },
        cesu8: {
            type: "_internal",
            bomAware: !0
        },
        unicode11utf8: "utf8",
        ucs2: {
            type: "_internal",
            bomAware: !0
        },
        utf16le: "ucs2",
        binary: {
            type: "_internal"
        },
        base64: {
            type: "_internal"
        },
        hex: {
            type: "_internal"
        },
        _internal: i
    }, i.prototype.encoder = a, i.prototype.decoder = s;
    var o = r(131).StringDecoder;

    function s(e, t) {
        this.decoder = new o(t.enc)
    }

    function a(e, t) {
        this.enc = t.enc
    }

    function u(e, t) {
        this.prevStr = ""
    }

    function c(e, t) {}

    function p(e, t) {
        this.acc = 0, this.contBytes = 0, this.accBytes = 0, this.defaultCharUnicode = t.defaultCharUnicode
    }
    o.prototype.end || (o.prototype.end = function() {}), s.prototype.write = function(e) {
        return n.isBuffer(e) || (e = n.from(e)), this.decoder.write(e)
    }, s.prototype.end = function() {
        return this.decoder.end()
    }, a.prototype.write = function(e) {
        return n.from(e, this.enc)
    }, a.prototype.end = function() {}, u.prototype.write = function(e) {
        var t = (e = this.prevStr + e).length - e.length % 4;
        return this.prevStr = e.slice(t), e = e.slice(0, t), n.from(e, "base64")
    }, u.prototype.end = function() {
        return n.from(this.prevStr, "base64")
    }, c.prototype.write = function(e) {
        for (var t = n.alloc(3 * e.length), r = 0, i = 0; i < e.length; i++) {
            var o = e.charCodeAt(i);
            o < 128 ? t[r++] = o : o < 2048 ? (t[r++] = 192 + (o >>> 6), t[r++] = 128 + (63 & o)) : (t[r++] = 224 + (o >>> 12), t[r++] = 128 + (o >>> 6 & 63), t[r++] = 128 + (63 & o))
        }
        return t.slice(0, r)
    }, c.prototype.end = function() {}, p.prototype.write = function(e) {
        for (var t = this.acc, r = this.contBytes, n = this.accBytes, i = "", o = 0; o < e.length; o++) {
            var s = e[o];
            128 != (192 & s) ? (r > 0 && (i += this.defaultCharUnicode, r = 0), s < 128 ? i += String.fromCharCode(s) : s < 224 ? (t = 31 & s, r = 1, n = 1) : s < 240 ? (t = 15 & s, r = 2, n = 1) : i += this.defaultCharUnicode) : r > 0 ? (t = t << 6 | 63 & s, n++, 0 === --r && (i += 2 === n && t < 128 && t > 0 || 3 === n && t < 2048 ? this.defaultCharUnicode : String.fromCharCode(t))) : i += this.defaultCharUnicode
        }
        return this.acc = t, this.contBytes = r, this.accBytes = n, i
    }, p.prototype.end = function() {
        var e = 0;
        return this.contBytes > 0 && (e += this.defaultCharUnicode), e
    }
}, function(e, t) {
    e.exports = require("string_decoder")
}, function(e, t, r) {
    "use strict";
    var n = r(6).Buffer;

    function i(e, t) {
        this.iconv = t, this.bomAware = !0, this.isLE = e.isLE
    }

    function o(e, t) {
        this.isLE = t.isLE, this.highSurrogate = 0
    }

    function s(e, t) {
        this.isLE = t.isLE, this.badChar = t.iconv.defaultCharUnicode.charCodeAt(0), this.overflow = []
    }

    function a(e, t, r, n) {
        if ((r < 0 || r > 1114111) && (r = n), r >= 65536) {
            var i = 55296 | (r -= 65536) >> 10;
            e[t++] = 255 & i, e[t++] = i >> 8;
            r = 56320 | 1023 & r
        }
        return e[t++] = 255 & r, e[t++] = r >> 8, t
    }

    function u(e, t) {
        this.iconv = t
    }

    function c(e, t) {
        void 0 === (e = e || {}).addBOM && (e.addBOM = !0), this.encoder = t.iconv.getEncoder(e.defaultEncoding || "utf-32le", e)
    }

    function p(e, t) {
        this.decoder = null, this.initialBufs = [], this.initialBufsLen = 0, this.options = e || {}, this.iconv = t.iconv
    }

    function l(e, t) {
        var r = [],
            n = 0,
            i = 0,
            o = 0,
            s = 0,
            a = 0;
        e: for (var u = 0; u < e.length; u++)
            for (var c = e[u], p = 0; p < c.length; p++)
                if (r.push(c[p]), 4 === r.length) {
                    if (0 === n) {
                        if (255 === r[0] && 254 === r[1] && 0 === r[2] && 0 === r[3]) return "utf-32le";
                        if (0 === r[0] && 0 === r[1] && 254 === r[2] && 255 === r[3]) return "utf-32be"
                    }
                    if ((0 !== r[0] || r[1] > 16) && o++, (0 !== r[3] || r[2] > 16) && i++, 0 !== r[0] || 0 !== r[1] || 0 === r[2] && 0 === r[3] || a++, 0 === r[0] && 0 === r[1] || 0 !== r[2] || 0 !== r[3] || s++, r.length = 0, ++n >= 100) break e
                }
        return a - o > s - i ? "utf-32be" : a - o < s - i ? "utf-32le" : t || "utf-32le"
    }
    t._utf32 = i, t.utf32le = {
        type: "_utf32",
        isLE: !0
    }, t.utf32be = {
        type: "_utf32",
        isLE: !1
    }, t.ucs4le = "utf32le", t.ucs4be = "utf32be", i.prototype.encoder = o, i.prototype.decoder = s, o.prototype.write = function(e) {
        for (var t = n.from(e, "ucs2"), r = n.alloc(2 * t.length), i = this.isLE ? r.writeUInt32LE : r.writeUInt32BE, o = 0, s = 0; s < t.length; s += 2) {
            var a = t.readUInt16LE(s),
                u = 55296 <= a && a < 56320,
                c = 56320 <= a && a < 57344;
            if (this.highSurrogate) {
                if (!u && c) {
                    var p = 65536 + (this.highSurrogate - 55296 << 10 | a - 56320);
                    i.call(r, p, o), o += 4, this.highSurrogate = 0;
                    continue
                }
                i.call(r, this.highSurrogate, o), o += 4
            }
            u ? this.highSurrogate = a : (i.call(r, a, o), o += 4, this.highSurrogate = 0)
        }
        return o < r.length && (r = r.slice(0, o)), r
    }, o.prototype.end = function() {
        if (this.highSurrogate) {
            var e = n.alloc(4);
            return this.isLE ? e.writeUInt32LE(this.highSurrogate, 0) : e.writeUInt32BE(this.highSurrogate, 0), this.highSurrogate = 0, e
        }
    }, s.prototype.write = function(e) {
        if (0 === e.length) return "";
        var t = 0,
            r = 0,
            i = n.alloc(e.length + 4),
            o = 0,
            s = this.isLE,
            u = this.overflow,
            c = this.badChar;
        if (u.length > 0) {
            for (; t < e.length && u.length < 4; t++) u.push(e[t]);
            4 === u.length && (r = s ? u[t] | u[t + 1] << 8 | u[t + 2] << 16 | u[t + 3] << 24 : u[t + 3] | u[t + 2] << 8 | u[t + 1] << 16 | u[t] << 24, u.length = 0, o = a(i, o, r, c))
        }
        for (; t < e.length - 3; t += 4) o = a(i, o, r = s ? e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24 : e[t + 3] | e[t + 2] << 8 | e[t + 1] << 16 | e[t] << 24, c);
        for (; t < e.length; t++) u.push(e[t]);
        return i.slice(0, o).toString("ucs2")
    }, s.prototype.end = function() {
        this.overflow.length = 0
    }, t.utf32 = u, t.ucs4 = "utf32", u.prototype.encoder = c, u.prototype.decoder = p, c.prototype.write = function(e) {
        return this.encoder.write(e)
    }, c.prototype.end = function() {
        return this.encoder.end()
    }, p.prototype.write = function(e) {
        if (!this.decoder) {
            if (this.initialBufs.push(e), this.initialBufsLen += e.length, this.initialBufsLen < 32) return "";
            var t = l(this.initialBufs, this.options.defaultEncoding);
            this.decoder = this.iconv.getDecoder(t, this.options);
            for (var r = "", n = 0; n < this.initialBufs.length; n++) r += this.decoder.write(this.initialBufs[n]);
            return this.initialBufs.length = this.initialBufsLen = 0, r
        }
        return this.decoder.write(e)
    }, p.prototype.end = function() {
        if (!this.decoder) {
            var e = l(this.initialBufs, this.options.defaultEncoding);
            this.decoder = this.iconv.getDecoder(e, this.options);
            for (var t = "", r = 0; r < this.initialBufs.length; r++) t += this.decoder.write(this.initialBufs[r]);
            var n = this.decoder.end();
            return n && (t += n), this.initialBufs.length = this.initialBufsLen = 0, t
        }
        return this.decoder.end()
    }
}, function(e, t, r) {
    "use strict";
    var n = r(6).Buffer;

    function i() {}

    function o() {}

    function s() {
        this.overflowByte = -1
    }

    function a(e, t) {
        this.iconv = t
    }

    function u(e, t) {
        void 0 === (e = e || {}).addBOM && (e.addBOM = !0), this.encoder = t.iconv.getEncoder("utf-16le", e)
    }

    function c(e, t) {
        this.decoder = null, this.initialBufs = [], this.initialBufsLen = 0, this.options = e || {}, this.iconv = t.iconv
    }

    function p(e, t) {
        var r = [],
            n = 0,
            i = 0,
            o = 0;
        e: for (var s = 0; s < e.length; s++)
            for (var a = e[s], u = 0; u < a.length; u++)
                if (r.push(a[u]), 2 === r.length) {
                    if (0 === n) {
                        if (255 === r[0] && 254 === r[1]) return "utf-16le";
                        if (254 === r[0] && 255 === r[1]) return "utf-16be"
                    }
                    if (0 === r[0] && 0 !== r[1] && o++, 0 !== r[0] && 0 === r[1] && i++, r.length = 0, ++n >= 100) break e
                }
        return o > i ? "utf-16be" : o < i ? "utf-16le" : t || "utf-16le"
    }
    t.utf16be = i, i.prototype.encoder = o, i.prototype.decoder = s, i.prototype.bomAware = !0, o.prototype.write = function(e) {
        for (var t = n.from(e, "ucs2"), r = 0; r < t.length; r += 2) {
            var i = t[r];
            t[r] = t[r + 1], t[r + 1] = i
        }
        return t
    }, o.prototype.end = function() {}, s.prototype.write = function(e) {
        if (0 == e.length) return "";
        var t = n.alloc(e.length + 1),
            r = 0,
            i = 0;
        for (-1 !== this.overflowByte && (t[0] = e[0], t[1] = this.overflowByte, r = 1, i = 2); r < e.length - 1; r += 2, i += 2) t[i] = e[r + 1], t[i + 1] = e[r];
        return this.overflowByte = r == e.length - 1 ? e[e.length - 1] : -1, t.slice(0, i).toString("ucs2")
    }, s.prototype.end = function() {
        this.overflowByte = -1
    }, t.utf16 = a, a.prototype.encoder = u, a.prototype.decoder = c, u.prototype.write = function(e) {
        return this.encoder.write(e)
    }, u.prototype.end = function() {
        return this.encoder.end()
    }, c.prototype.write = function(e) {
        if (!this.decoder) {
            if (this.initialBufs.push(e), this.initialBufsLen += e.length, this.initialBufsLen < 16) return "";
            var t = p(this.initialBufs, this.options.defaultEncoding);
            this.decoder = this.iconv.getDecoder(t, this.options);
            for (var r = "", n = 0; n < this.initialBufs.length; n++) r += this.decoder.write(this.initialBufs[n]);
            return this.initialBufs.length = this.initialBufsLen = 0, r
        }
        return this.decoder.write(e)
    }, c.prototype.end = function() {
        if (!this.decoder) {
            var e = p(this.initialBufs, this.options.defaultEncoding);
            this.decoder = this.iconv.getDecoder(e, this.options);
            for (var t = "", r = 0; r < this.initialBufs.length; r++) t += this.decoder.write(this.initialBufs[r]);
            var n = this.decoder.end();
            return n && (t += n), this.initialBufs.length = this.initialBufsLen = 0, t
        }
        return this.decoder.end()
    }
}, function(e, t, r) {
    "use strict";
    var n = r(6).Buffer;

    function i(e, t) {
        this.iconv = t
    }
    t.utf7 = i, t.unicode11utf7 = "utf7", i.prototype.encoder = s, i.prototype.decoder = a, i.prototype.bomAware = !0;
    var o = /[^A-Za-z0-9'\(\),-\.\/:\? \n\r\t]+/g;

    function s(e, t) {
        this.iconv = t.iconv
    }

    function a(e, t) {
        this.iconv = t.iconv, this.inBase64 = !1, this.base64Accum = ""
    }
    s.prototype.write = function(e) {
        return n.from(e.replace(o, function(e) {
            return "+" + ("+" === e ? "" : this.iconv.encode(e, "utf16-be").toString("base64").replace(/=+$/, "")) + "-"
        }.bind(this)))
    }, s.prototype.end = function() {};
    for (var u = /[A-Za-z0-9\/+]/, c = [], p = 0; p < 256; p++) c[p] = u.test(String.fromCharCode(p));
    var l = "+".charCodeAt(0),
        d = "-".charCodeAt(0),
        f = "&".charCodeAt(0);

    function h(e, t) {
        this.iconv = t
    }

    function g(e, t) {
        this.iconv = t.iconv, this.inBase64 = !1, this.base64Accum = n.alloc(6), this.base64AccumIdx = 0
    }

    function m(e, t) {
        this.iconv = t.iconv, this.inBase64 = !1, this.base64Accum = ""
    }
    a.prototype.write = function(e) {
        for (var t = "", r = 0, i = this.inBase64, o = this.base64Accum, s = 0; s < e.length; s++)
            if (i) {
                if (!c[e[s]]) {
                    if (s == r && e[s] == d) t += "+";
                    else {
                        var a = o + this.iconv.decode(e.slice(r, s), "ascii");
                        t += this.iconv.decode(n.from(a, "base64"), "utf16-be")
                    }
                    e[s] != d && s--, r = s + 1, i = !1, o = ""
                }
            } else e[s] == l && (t += this.iconv.decode(e.slice(r, s), "ascii"), r = s + 1, i = !0);
        if (i) {
            var u = (a = o + this.iconv.decode(e.slice(r), "ascii")).length - a.length % 8;
            o = a.slice(u), a = a.slice(0, u), t += this.iconv.decode(n.from(a, "base64"), "utf16-be")
        } else t += this.iconv.decode(e.slice(r), "ascii");
        return this.inBase64 = i, this.base64Accum = o, t
    }, a.prototype.end = function() {
        var e = "";
        return this.inBase64 && this.base64Accum.length > 0 && (e = this.iconv.decode(n.from(this.base64Accum, "base64"), "utf16-be")), this.inBase64 = !1, this.base64Accum = "", e
    }, t.utf7imap = h, h.prototype.encoder = g, h.prototype.decoder = m, h.prototype.bomAware = !0, g.prototype.write = function(e) {
        for (var t = this.inBase64, r = this.base64Accum, i = this.base64AccumIdx, o = n.alloc(5 * e.length + 10), s = 0, a = 0; a < e.length; a++) {
            var u = e.charCodeAt(a);
            32 <= u && u <= 126 ? (t && (i > 0 && (s += o.write(r.slice(0, i).toString("base64").replace(/\//g, ",").replace(/=+$/, ""), s), i = 0), o[s++] = d, t = !1), t || (o[s++] = u, u === f && (o[s++] = d))) : (t || (o[s++] = f, t = !0), t && (r[i++] = u >> 8, r[i++] = 255 & u, i == r.length && (s += o.write(r.toString("base64").replace(/\//g, ","), s), i = 0)))
        }
        return this.inBase64 = t, this.base64AccumIdx = i, o.slice(0, s)
    }, g.prototype.end = function() {
        var e = n.alloc(10),
            t = 0;
        return this.inBase64 && (this.base64AccumIdx > 0 && (t += e.write(this.base64Accum.slice(0, this.base64AccumIdx).toString("base64").replace(/\//g, ",").replace(/=+$/, ""), t), this.base64AccumIdx = 0), e[t++] = d, this.inBase64 = !1), e.slice(0, t)
    };
    var y = c.slice();
    y[",".charCodeAt(0)] = !0, m.prototype.write = function(e) {
        for (var t = "", r = 0, i = this.inBase64, o = this.base64Accum, s = 0; s < e.length; s++)
            if (i) {
                if (!y[e[s]]) {
                    if (s == r && e[s] == d) t += "&";
                    else {
                        var a = o + this.iconv.decode(e.slice(r, s), "ascii").replace(/,/g, "/");
                        t += this.iconv.decode(n.from(a, "base64"), "utf16-be")
                    }
                    e[s] != d && s--, r = s + 1, i = !1, o = ""
                }
            } else e[s] == f && (t += this.iconv.decode(e.slice(r, s), "ascii"), r = s + 1, i = !0);
        if (i) {
            var u = (a = o + this.iconv.decode(e.slice(r), "ascii").replace(/,/g, "/")).length - a.length % 8;
            o = a.slice(u), a = a.slice(0, u), t += this.iconv.decode(n.from(a, "base64"), "utf16-be")
        } else t += this.iconv.decode(e.slice(r), "ascii");
        return this.inBase64 = i, this.base64Accum = o, t
    }, m.prototype.end = function() {
        var e = "";
        return this.inBase64 && this.base64Accum.length > 0 && (e = this.iconv.decode(n.from(this.base64Accum, "base64"), "utf16-be")), this.inBase64 = !1, this.base64Accum = "", e
    }
}, function(e, t, r) {
    "use strict";
    var n = r(6).Buffer;

    function i(e, t) {
        if (!e) throw new Error("SBCS codec is called without the data.");
        if (!e.chars || 128 !== e.chars.length && 256 !== e.chars.length) throw new Error("Encoding '" + e.type + "' has incorrect 'chars' (must be of len 128 or 256)");
        if (128 === e.chars.length) {
            for (var r = "", i = 0; i < 128; i++) r += String.fromCharCode(i);
            e.chars = r + e.chars
        }
        this.decodeBuf = n.from(e.chars, "ucs2");
        var o = n.alloc(65536, t.defaultCharSingleByte.charCodeAt(0));
        for (i = 0; i < e.chars.length; i++) o[e.chars.charCodeAt(i)] = i;
        this.encodeBuf = o
    }

    function o(e, t) {
        this.encodeBuf = t.encodeBuf
    }

    function s(e, t) {
        this.decodeBuf = t.decodeBuf
    }
    t._sbcs = i, i.prototype.encoder = o, i.prototype.decoder = s, o.prototype.write = function(e) {
        for (var t = n.alloc(e.length), r = 0; r < e.length; r++) t[r] = this.encodeBuf[e.charCodeAt(r)];
        return t
    }, o.prototype.end = function() {}, s.prototype.write = function(e) {
        for (var t = this.decodeBuf, r = n.alloc(2 * e.length), i = 0, o = 0, s = 0; s < e.length; s++) i = 2 * e[s], r[o = 2 * s] = t[i], r[o + 1] = t[i + 1];
        return r.toString("ucs2")
    }, s.prototype.end = function() {}
}, function(e, t, r) {
    "use strict";
    e.exports = {
        10029: "maccenteuro",
        maccenteuro: {
            type: "_sbcs",
            chars: "ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ"
        },
        808: "cp808",
        ibm808: "cp808",
        cp808: {
            type: "_sbcs",
            chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№€■ "
        },
        mik: {
            type: "_sbcs",
            chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя└┴┬├─┼╣║╚╔╩╦╠═╬┐░▒▓│┤№§╗╝┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
        },
        cp720: {
            type: "_sbcs",
            chars: "éâàçêëèïîّْô¤ـûùءآأؤ£إئابةتثجحخدذرزسشص«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ضطظعغفµقكلمنهوىي≡ًٌٍَُِ≈°∙·√ⁿ²■ "
        },
        ascii8bit: "ascii",
        usascii: "ascii",
        ansix34: "ascii",
        ansix341968: "ascii",
        ansix341986: "ascii",
        csascii: "ascii",
        cp367: "ascii",
        ibm367: "ascii",
        isoir6: "ascii",
        iso646us: "ascii",
        iso646irv: "ascii",
        us: "ascii",
        latin1: "iso88591",
        latin2: "iso88592",
        latin3: "iso88593",
        latin4: "iso88594",
        latin5: "iso88599",
        latin6: "iso885910",
        latin7: "iso885913",
        latin8: "iso885914",
        latin9: "iso885915",
        latin10: "iso885916",
        csisolatin1: "iso88591",
        csisolatin2: "iso88592",
        csisolatin3: "iso88593",
        csisolatin4: "iso88594",
        csisolatincyrillic: "iso88595",
        csisolatinarabic: "iso88596",
        csisolatingreek: "iso88597",
        csisolatinhebrew: "iso88598",
        csisolatin5: "iso88599",
        csisolatin6: "iso885910",
        l1: "iso88591",
        l2: "iso88592",
        l3: "iso88593",
        l4: "iso88594",
        l5: "iso88599",
        l6: "iso885910",
        l7: "iso885913",
        l8: "iso885914",
        l9: "iso885915",
        l10: "iso885916",
        isoir14: "iso646jp",
        isoir57: "iso646cn",
        isoir100: "iso88591",
        isoir101: "iso88592",
        isoir109: "iso88593",
        isoir110: "iso88594",
        isoir144: "iso88595",
        isoir127: "iso88596",
        isoir126: "iso88597",
        isoir138: "iso88598",
        isoir148: "iso88599",
        isoir157: "iso885910",
        isoir166: "tis620",
        isoir179: "iso885913",
        isoir199: "iso885914",
        isoir203: "iso885915",
        isoir226: "iso885916",
        cp819: "iso88591",
        ibm819: "iso88591",
        cyrillic: "iso88595",
        arabic: "iso88596",
        arabic8: "iso88596",
        ecma114: "iso88596",
        asmo708: "iso88596",
        greek: "iso88597",
        greek8: "iso88597",
        ecma118: "iso88597",
        elot928: "iso88597",
        hebrew: "iso88598",
        hebrew8: "iso88598",
        turkish: "iso88599",
        turkish8: "iso88599",
        thai: "iso885911",
        thai8: "iso885911",
        celtic: "iso885914",
        celtic8: "iso885914",
        isoceltic: "iso885914",
        tis6200: "tis620",
        tis62025291: "tis620",
        tis62025330: "tis620",
        1e4: "macroman",
        10006: "macgreek",
        10007: "maccyrillic",
        10079: "maciceland",
        10081: "macturkish",
        cspc8codepage437: "cp437",
        cspc775baltic: "cp775",
        cspc850multilingual: "cp850",
        cspcp852: "cp852",
        cspc862latinhebrew: "cp862",
        cpgr: "cp869",
        msee: "cp1250",
        mscyrl: "cp1251",
        msansi: "cp1252",
        msgreek: "cp1253",
        msturk: "cp1254",
        mshebr: "cp1255",
        msarab: "cp1256",
        winbaltrim: "cp1257",
        cp20866: "koi8r",
        20866: "koi8r",
        ibm878: "koi8r",
        cskoi8r: "koi8r",
        cp21866: "koi8u",
        21866: "koi8u",
        ibm1168: "koi8u",
        strk10482002: "rk1048",
        tcvn5712: "tcvn",
        tcvn57121: "tcvn",
        gb198880: "iso646cn",
        cn: "iso646cn",
        csiso14jisc6220ro: "iso646jp",
        jisc62201969ro: "iso646jp",
        jp: "iso646jp",
        cshproman8: "hproman8",
        r8: "hproman8",
        roman8: "hproman8",
        xroman8: "hproman8",
        ibm1051: "hproman8",
        mac: "macintosh",
        csmacintosh: "macintosh"
    }
}, function(e, t, r) {
    "use strict";
    e.exports = {
        437: "cp437",
        737: "cp737",
        775: "cp775",
        850: "cp850",
        852: "cp852",
        855: "cp855",
        856: "cp856",
        857: "cp857",
        858: "cp858",
        860: "cp860",
        861: "cp861",
        862: "cp862",
        863: "cp863",
        864: "cp864",
        865: "cp865",
        866: "cp866",
        869: "cp869",
        874: "windows874",
        922: "cp922",
        1046: "cp1046",
        1124: "cp1124",
        1125: "cp1125",
        1129: "cp1129",
        1133: "cp1133",
        1161: "cp1161",
        1162: "cp1162",
        1163: "cp1163",
        1250: "windows1250",
        1251: "windows1251",
        1252: "windows1252",
        1253: "windows1253",
        1254: "windows1254",
        1255: "windows1255",
        1256: "windows1256",
        1257: "windows1257",
        1258: "windows1258",
        28591: "iso88591",
        28592: "iso88592",
        28593: "iso88593",
        28594: "iso88594",
        28595: "iso88595",
        28596: "iso88596",
        28597: "iso88597",
        28598: "iso88598",
        28599: "iso88599",
        28600: "iso885910",
        28601: "iso885911",
        28603: "iso885913",
        28604: "iso885914",
        28605: "iso885915",
        28606: "iso885916",
        windows874: {
            type: "_sbcs",
            chars: "€����…�����������‘’“”•–—�������� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
        },
        win874: "windows874",
        cp874: "windows874",
        windows1250: {
            type: "_sbcs",
            chars: "€�‚�„…†‡�‰Š‹ŚŤŽŹ�‘’“”•–—�™š›śťžź ˇ˘Ł¤Ą¦§¨©Ş«¬­®Ż°±˛ł´µ¶·¸ąş»Ľ˝ľżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"
        },
        win1250: "windows1250",
        cp1250: "windows1250",
        windows1251: {
            type: "_sbcs",
            chars: "ЂЃ‚ѓ„…†‡€‰Љ‹ЊЌЋЏђ‘’“”•–—�™љ›њќћџ ЎўЈ¤Ґ¦§Ё©Є«¬­®Ї°±Ііґµ¶·ё№є»јЅѕїАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
        },
        win1251: "windows1251",
        cp1251: "windows1251",
        windows1252: {
            type: "_sbcs",
            chars: "€�‚ƒ„…†‡ˆ‰Š‹Œ�Ž��‘’“”•–—˜™š›œ�žŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
        },
        win1252: "windows1252",
        cp1252: "windows1252",
        windows1253: {
            type: "_sbcs",
            chars: "€�‚ƒ„…†‡�‰�‹�����‘’“”•–—�™�›���� ΅Ά£¤¥¦§¨©�«¬­®―°±²³΄µ¶·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"
        },
        win1253: "windows1253",
        cp1253: "windows1253",
        windows1254: {
            type: "_sbcs",
            chars: "€�‚ƒ„…†‡ˆ‰Š‹Œ����‘’“”•–—˜™š›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"
        },
        win1254: "windows1254",
        cp1254: "windows1254",
        windows1255: {
            type: "_sbcs",
            chars: "€�‚ƒ„…†‡ˆ‰�‹�����‘’“”•–—˜™�›���� ¡¢£₪¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾¿ְֱֲֳִֵֶַָֹֺֻּֽ־ֿ׀ׁׂ׃װױײ׳״�������אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"
        },
        win1255: "windows1255",
        cp1255: "windows1255",
        windows1256: {
            type: "_sbcs",
            chars: "€پ‚ƒ„…†‡ˆ‰ٹ‹Œچژڈگ‘’“”•–—ک™ڑ›œ‌‍ں ،¢£¤¥¦§¨©ھ«¬­®¯°±²³´µ¶·¸¹؛»¼½¾؟ہءآأؤإئابةتثجحخدذرزسشصض×طظعغـفقكàلâمنهوçèéêëىيîïًٌٍَôُِ÷ّùْûü‎‏ے"
        },
        win1256: "windows1256",
        cp1256: "windows1256",
        windows1257: {
            type: "_sbcs",
            chars: "€�‚�„…†‡�‰�‹�¨ˇ¸�‘’“”•–—�™�›�¯˛� �¢£¤�¦§Ø©Ŗ«¬­®Æ°±²³´µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž˙"
        },
        win1257: "windows1257",
        cp1257: "windows1257",
        windows1258: {
            type: "_sbcs",
            chars: "€�‚ƒ„…†‡ˆ‰�‹Œ����‘’“”•–—˜™�›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
        },
        win1258: "windows1258",
        cp1258: "windows1258",
        iso88591: {
            type: "_sbcs",
            chars: " ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
        },
        cp28591: "iso88591",
        iso88592: {
            type: "_sbcs",
            chars: " Ą˘Ł¤ĽŚ§¨ŠŞŤŹ­ŽŻ°ą˛ł´ľśˇ¸šşťź˝žżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"
        },
        cp28592: "iso88592",
        iso88593: {
            type: "_sbcs",
            chars: " Ħ˘£¤�Ĥ§¨İŞĞĴ­�Ż°ħ²³´µĥ·¸ışğĵ½�żÀÁÂ�ÄĊĈÇÈÉÊËÌÍÎÏ�ÑÒÓÔĠÖ×ĜÙÚÛÜŬŜßàáâ�äċĉçèéêëìíîï�ñòóôġö÷ĝùúûüŭŝ˙"
        },
        cp28593: "iso88593",
        iso88594: {
            type: "_sbcs",
            chars: " ĄĸŖ¤ĨĻ§¨ŠĒĢŦ­Ž¯°ą˛ŗ´ĩļˇ¸šēģŧŊžŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎĪĐŅŌĶÔÕÖ×ØŲÚÛÜŨŪßāáâãäåæįčéęëėíîīđņōķôõö÷øųúûüũū˙"
        },
        cp28594: "iso88594",
        iso88595: {
            type: "_sbcs",
            chars: " ЁЂЃЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђѓєѕіїјљњћќ§ўџ"
        },
        cp28595: "iso88595",
        iso88596: {
            type: "_sbcs",
            chars: " ���¤�������،­�������������؛���؟�ءآأؤإئابةتثجحخدذرزسشصضطظعغ�����ـفقكلمنهوىيًٌٍَُِّْ�������������"
        },
        cp28596: "iso88596",
        iso88597: {
            type: "_sbcs",
            chars: " ‘’£€₯¦§¨©ͺ«¬­�―°±²³΄΅Ά·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"
        },
        cp28597: "iso88597",
        iso88598: {
            type: "_sbcs",
            chars: " �¢£¤¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾��������������������������������‗אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"
        },
        cp28598: "iso88598",
        iso88599: {
            type: "_sbcs",
            chars: " ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"
        },
        cp28599: "iso88599",
        iso885910: {
            type: "_sbcs",
            chars: " ĄĒĢĪĨĶ§ĻĐŠŦŽ­ŪŊ°ąēģīĩķ·ļđšŧž―ūŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎÏÐŅŌÓÔÕÖŨØŲÚÛÜÝÞßāáâãäåæįčéęëėíîïðņōóôõöũøųúûüýþĸ"
        },
        cp28600: "iso885910",
        iso885911: {
            type: "_sbcs",
            chars: " กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
        },
        cp28601: "iso885911",
        iso885913: {
            type: "_sbcs",
            chars: " ”¢£¤„¦§Ø©Ŗ«¬­®Æ°±²³“µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž’"
        },
        cp28603: "iso885913",
        iso885914: {
            type: "_sbcs",
            chars: " Ḃḃ£ĊċḊ§Ẁ©ẂḋỲ­®ŸḞḟĠġṀṁ¶ṖẁṗẃṠỳẄẅṡÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŴÑÒÓÔÕÖṪØÙÚÛÜÝŶßàáâãäåæçèéêëìíîïŵñòóôõöṫøùúûüýŷÿ"
        },
        cp28604: "iso885914",
        iso885915: {
            type: "_sbcs",
            chars: " ¡¢£€¥Š§š©ª«¬­®¯°±²³Žµ¶·ž¹º»ŒœŸ¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
        },
        cp28605: "iso885915",
        iso885916: {
            type: "_sbcs",
            chars: " ĄąŁ€„Š§š©Ș«Ź­źŻ°±ČłŽ”¶·žčș»ŒœŸżÀÁÂĂÄĆÆÇÈÉÊËÌÍÎÏĐŃÒÓÔŐÖŚŰÙÚÛÜĘȚßàáâăäćæçèéêëìíîïđńòóôőöśűùúûüęțÿ"
        },
        cp28606: "iso885916",
        cp437: {
            type: "_sbcs",
            chars: "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
        },
        ibm437: "cp437",
        csibm437: "cp437",
        cp737: {
            type: "_sbcs",
            chars: "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρσςτυφχψ░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ωάέήϊίόύϋώΆΈΉΊΌΎΏ±≥≤ΪΫ÷≈°∙·√ⁿ²■ "
        },
        ibm737: "cp737",
        csibm737: "cp737",
        cp775: {
            type: "_sbcs",
            chars: "ĆüéāäģåćłēŖŗīŹÄÅÉæÆōöĢ¢ŚśÖÜø£Ø×¤ĀĪóŻżź”¦©®¬½¼Ł«»░▒▓│┤ĄČĘĖ╣║╗╝ĮŠ┐└┴┬├─┼ŲŪ╚╔╩╦╠═╬Žąčęėįšųūž┘┌█▄▌▐▀ÓßŌŃõÕµńĶķĻļņĒŅ’­±“¾¶§÷„°∙·¹³²■ "
        },
        ibm775: "cp775",
        csibm775: "cp775",
        cp850: {
            type: "_sbcs",
            chars: "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "
        },
        ibm850: "cp850",
        csibm850: "cp850",
        cp852: {
            type: "_sbcs",
            chars: "ÇüéâäůćçłëŐőîŹÄĆÉĹĺôöĽľŚśÖÜŤťŁ×čáíóúĄąŽžĘę¬źČş«»░▒▓│┤ÁÂĚŞ╣║╗╝Żż┐└┴┬├─┼Ăă╚╔╩╦╠═╬¤đĐĎËďŇÍÎě┘┌█▄ŢŮ▀ÓßÔŃńňŠšŔÚŕŰýÝţ´­˝˛ˇ˘§÷¸°¨˙űŘř■ "
        },
        ibm852: "cp852",
        csibm852: "cp852",
        cp855: {
            type: "_sbcs",
            chars: "ђЂѓЃёЁєЄѕЅіІїЇјЈљЉњЊћЋќЌўЎџЏюЮъЪаАбБцЦдДеЕфФгГ«»░▒▓│┤хХиИ╣║╗╝йЙ┐└┴┬├─┼кК╚╔╩╦╠═╬¤лЛмМнНоОп┘┌█▄Пя▀ЯрРсСтТуУжЖвВьЬ№­ыЫзЗшШэЭщЩчЧ§■ "
        },
        ibm855: "cp855",
        csibm855: "cp855",
        cp856: {
            type: "_sbcs",
            chars: "אבגדהוזחטיךכלםמןנסעףפץצקרשת�£�×����������®¬½¼�«»░▒▓│┤���©╣║╗╝¢¥┐└┴┬├─┼��╚╔╩╦╠═╬¤���������┘┌█▄¦�▀������µ�������¯´­±‗¾¶§÷¸°¨·¹³²■ "
        },
        ibm856: "cp856",
        csibm856: "cp856",
        cp857: {
            type: "_sbcs",
            chars: "ÇüéâäàåçêëèïîıÄÅÉæÆôöòûùİÖÜø£ØŞşáíóúñÑĞğ¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ºªÊËÈ�ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµ�×ÚÛÙìÿ¯´­±�¾¶§÷¸°¨·¹³²■ "
        },
        ibm857: "cp857",
        csibm857: "cp857",
        cp858: {
            type: "_sbcs",
            chars: "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈ€ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "
        },
        ibm858: "cp858",
        csibm858: "cp858",
        cp860: {
            type: "_sbcs",
            chars: "ÇüéâãàÁçêÊèÍÔìÃÂÉÀÈôõòÚùÌÕÜ¢£Ù₧ÓáíóúñÑªº¿Ò¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
        },
        ibm860: "cp860",
        csibm860: "cp860",
        cp861: {
            type: "_sbcs",
            chars: "ÇüéâäàåçêëèÐðÞÄÅÉæÆôöþûÝýÖÜø£Ø₧ƒáíóúÁÍÓÚ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
        },
        ibm861: "cp861",
        csibm861: "cp861",
        cp862: {
            type: "_sbcs",
            chars: "אבגדהוזחטיךכלםמןנסעףפץצקרשת¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
        },
        ibm862: "cp862",
        csibm862: "cp862",
        cp863: {
            type: "_sbcs",
            chars: "ÇüéâÂà¶çêëèïî‗À§ÉÈÊôËÏûù¤ÔÜ¢£ÙÛƒ¦´óú¨¸³¯Î⌐¬½¼¾«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
        },
        ibm863: "cp863",
        csibm863: "cp863",
        cp864: {
            type: "_sbcs",
            chars: "\0\b\t\n\v\f\r !\"#$٪&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~°·∙√▒─│┼┤┬├┴┐┌└┘β∞φ±½¼≈«»ﻷﻸ��ﻻﻼ� ­ﺂ£¤ﺄ��ﺎﺏﺕﺙ،ﺝﺡﺥ٠١٢٣٤٥٦٧٨٩ﻑ؛ﺱﺵﺹ؟¢ﺀﺁﺃﺅﻊﺋﺍﺑﺓﺗﺛﺟﺣﺧﺩﺫﺭﺯﺳﺷﺻﺿﻁﻅﻋﻏ¦¬÷×ﻉـﻓﻗﻛﻟﻣﻧﻫﻭﻯﻳﺽﻌﻎﻍﻡﹽّﻥﻩﻬﻰﻲﻐﻕﻵﻶﻝﻙﻱ■�"
        },
        ibm864: "cp864",
        csibm864: "cp864",
        cp865: {
            type: "_sbcs",
            chars: "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø₧ƒáíóúñÑªº¿⌐¬½¼¡«¤░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
        },
        ibm865: "cp865",
        csibm865: "cp865",
        cp866: {
            type: "_sbcs",
            chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№¤■ "
        },
        ibm866: "cp866",
        csibm866: "cp866",
        cp869: {
            type: "_sbcs",
            chars: "������Ά�·¬¦‘’Έ―ΉΊΪΌ��ΎΫ©Ώ²³ά£έήίϊΐόύΑΒΓΔΕΖΗ½ΘΙ«»░▒▓│┤ΚΛΜΝ╣║╗╝ΞΟ┐└┴┬├─┼ΠΡ╚╔╩╦╠═╬ΣΤΥΦΧΨΩαβγ┘┌█▄δε▀ζηθικλμνξοπρσςτ΄­±υφχ§ψ΅°¨ωϋΰώ■ "
        },
        ibm869: "cp869",
        csibm869: "cp869",
        cp922: {
            type: "_sbcs",
            chars: " ¡¢£¤¥¦§¨©ª«¬­®‾°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŠÑÒÓÔÕÖ×ØÙÚÛÜÝŽßàáâãäåæçèéêëìíîïšñòóôõö÷øùúûüýžÿ"
        },
        ibm922: "cp922",
        csibm922: "cp922",
        cp1046: {
            type: "_sbcs",
            chars: "ﺈ×÷ﹱ■│─┐┌└┘ﹹﹻﹽﹿﹷﺊﻰﻳﻲﻎﻏﻐﻶﻸﻺﻼ ¤ﺋﺑﺗﺛﺟﺣ،­ﺧﺳ٠١٢٣٤٥٦٧٨٩ﺷ؛ﺻﺿﻊ؟ﻋءآأؤإئابةتثجحخدذرزسشصضطﻇعغﻌﺂﺄﺎﻓـفقكلمنهوىيًٌٍَُِّْﻗﻛﻟﻵﻷﻹﻻﻣﻧﻬﻩ�"
        },
        ibm1046: "cp1046",
        csibm1046: "cp1046",
        cp1124: {
            type: "_sbcs",
            chars: " ЁЂҐЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђґєѕіїјљњћќ§ўџ"
        },
        ibm1124: "cp1124",
        csibm1124: "cp1124",
        cp1125: {
            type: "_sbcs",
            chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёҐґЄєІіЇї·√№¤■ "
        },
        ibm1125: "cp1125",
        csibm1125: "cp1125",
        cp1129: {
            type: "_sbcs",
            chars: " ¡¢£¤¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
        },
        ibm1129: "cp1129",
        csibm1129: "cp1129",
        cp1133: {
            type: "_sbcs",
            chars: " ກຂຄງຈສຊຍດຕຖທນບປຜຝພຟມຢຣລວຫອຮ���ຯະາຳິີຶືຸູຼັົຽ���ເແໂໃໄ່້໊໋໌ໍໆ�ໜໝ₭����������������໐໑໒໓໔໕໖໗໘໙��¢¬¦�"
        },
        ibm1133: "cp1133",
        csibm1133: "cp1133",
        cp1161: {
            type: "_sbcs",
            chars: "��������������������������������่กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู้๊๋€฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛¢¬¦ "
        },
        ibm1161: "cp1161",
        csibm1161: "cp1161",
        cp1162: {
            type: "_sbcs",
            chars: "€…‘’“”•–— กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
        },
        ibm1162: "cp1162",
        csibm1162: "cp1162",
        cp1163: {
            type: "_sbcs",
            chars: " ¡¢£€¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
        },
        ibm1163: "cp1163",
        csibm1163: "cp1163",
        maccroatian: {
            type: "_sbcs",
            chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊�©⁄¤‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ"
        },
        maccyrillic: {
            type: "_sbcs",
            chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°¢£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµ∂ЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤"
        },
        macgreek: {
            type: "_sbcs",
            chars: "Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦­ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ�"
        },
        maciceland: {
            type: "_sbcs",
            chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
        },
        macroman: {
            type: "_sbcs",
            chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
        },
        macromania: {
            type: "_sbcs",
            chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂŞ∞±≤≥¥µ∂∑∏π∫ªºΩăş¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›Ţţ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
        },
        macthai: {
            type: "_sbcs",
            chars: "«»…“”�•‘’� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู\ufeff​–—฿เแโใไๅๆ็่้๊๋์ํ™๏๐๑๒๓๔๕๖๗๘๙®©����"
        },
        macturkish: {
            type: "_sbcs",
            chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙ�ˆ˜¯˘˙˚¸˝˛ˇ"
        },
        macukraine: {
            type: "_sbcs",
            chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤"
        },
        koi8r: {
            type: "_sbcs",
            chars: "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ё╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡Ё╢╣╤╥╦╧╨╩╪╫╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
        },
        koi8u: {
            type: "_sbcs",
            chars: "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґ╝╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪Ґ╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
        },
        koi8ru: {
            type: "_sbcs",
            chars: "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґў╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪ҐЎ©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
        },
        koi8t: {
            type: "_sbcs",
            chars: "қғ‚Ғ„…†‡�‰ҳ‹ҲҷҶ�Қ‘’“”•–—�™�›�����ӯӮё¤ӣ¦§���«¬­®�°±²Ё�Ӣ¶·�№�»���©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
        },
        armscii8: {
            type: "_sbcs",
            chars: " �և։)(»«—.՝,-֊…՜՛՞ԱաԲբԳգԴդԵեԶզԷէԸըԹթԺժԻիԼլԽխԾծԿկՀհՁձՂղՃճՄմՅյՆնՇշՈոՉչՊպՋջՌռՍսՎվՏտՐրՑցՒւՓփՔքՕօՖֆ՚�"
        },
        rk1048: {
            type: "_sbcs",
            chars: "ЂЃ‚ѓ„…†‡€‰Љ‹ЊҚҺЏђ‘’“”•–—�™љ›њқһџ ҰұӘ¤Ө¦§Ё©Ғ«¬­®Ү°±Ііөµ¶·ё№ғ»әҢңүАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
        },
        tcvn: {
            type: "_sbcs",
            chars: "\0ÚỤỪỬỮ\b\t\n\v\f\rỨỰỲỶỸÝỴ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÀẢÃÁẠẶẬÈẺẼÉẸỆÌỈĨÍỊÒỎÕÓỌỘỜỞỠỚỢÙỦŨ ĂÂÊÔƠƯĐăâêôơưđẶ̀̀̉̃́àảãáạẲằẳẵắẴẮẦẨẪẤỀặầẩẫấậèỂẻẽéẹềểễếệìỉỄẾỒĩíịòỔỏõóọồổỗốộờởỡớợùỖủũúụừửữứựỳỷỹýỵỐ"
        },
        georgianacademy: {
            type: "_sbcs",
            chars: "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰჱჲჳჴჵჶçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
        },
        georgianps: {
            type: "_sbcs",
            chars: "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზჱთიკლმნჲოპჟრსტჳუფქღყშჩცძწჭხჴჯჰჵæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
        },
        pt154: {
            type: "_sbcs",
            chars: "ҖҒӮғ„…ҶҮҲүҠӢҢҚҺҸҗ‘’“”•–—ҳҷҡӣңқһҹ ЎўЈӨҘҰ§Ё©Ә«¬ӯ®Ҝ°ұІіҙө¶·ё№ә»јҪҫҝАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
        },
        viscii: {
            type: "_sbcs",
            chars: "\0ẲẴẪ\b\t\n\v\f\rỶỸỴ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ẠẮẰẶẤẦẨẬẼẸẾỀỂỄỆỐỒỔỖỘỢỚỜỞỊỎỌỈỦŨỤỲÕắằặấầẩậẽẹếềểễệốồổỗỠƠộờởịỰỨỪỬơớƯÀÁÂÃẢĂẳẵÈÉÊẺÌÍĨỳĐứÒÓÔạỷừửÙÚỹỵÝỡưàáâãảăữẫèéêẻìíĩỉđựòóôõỏọụùúũủýợỮ"
        },
        iso646cn: {
            type: "_sbcs",
            chars: "\0\b\t\n\v\f\r !\"#¥%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������"
        },
        iso646jp: {
            type: "_sbcs",
            chars: "\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[¥]^_`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������"
        },
        hproman8: {
            type: "_sbcs",
            chars: " ÀÂÈÊËÎÏ´ˋˆ¨˜ÙÛ₤¯Ýý°ÇçÑñ¡¿¤£¥§ƒ¢âêôûáéóúàèòùäëöüÅîØÆåíøæÄìÖÜÉïßÔÁÃãÐðÍÌÓÒÕõŠšÚŸÿÞþ·µ¶¾—¼½ªº«■»±�"
        },
        macintosh: {
            type: "_sbcs",
            chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
        },
        ascii: {
            type: "_sbcs",
            chars: "��������������������������������������������������������������������������������������������������������������������������������"
        },
        tis620: {
            type: "_sbcs",
            chars: "���������������������������������กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
        }
    }
}, function(e, t, r) {
    "use strict";
    var n = r(6).Buffer;
    t._dbcs = c;
    for (var i = -1, o = -10, s = -1e3, a = new Array(256), u = 0; u < 256; u++) a[u] = i;

    function c(e, t) {
        if (this.encodingName = e.encodingName, !e) throw new Error("DBCS codec is called without the data.");
        if (!e.table) throw new Error("Encoding '" + this.encodingName + "' has no data.");
        var r = e.table();
        this.decodeTables = [], this.decodeTables[0] = a.slice(0), this.decodeTableSeq = [];
        for (var n = 0; n < r.length; n++) this._addDecodeChunk(r[n]);
        if ("function" == typeof e.gb18030) {
            this.gb18030 = e.gb18030();
            var o = this.decodeTables.length;
            this.decodeTables.push(a.slice(0));
            var u = this.decodeTables.length;
            this.decodeTables.push(a.slice(0));
            var c = this.decodeTables[0];
            for (n = 129; n <= 254; n++)
                for (var p = this.decodeTables[s - c[n]], l = 48; l <= 57; l++) {
                    if (p[l] === i) p[l] = s - o;
                    else if (p[l] > s) throw new Error("gb18030 decode tables conflict at byte 2");
                    for (var d = this.decodeTables[s - p[l]], f = 129; f <= 254; f++) {
                        if (d[f] === i) d[f] = s - u;
                        else {
                            if (d[f] === s - u) continue;
                            if (d[f] > s) throw new Error("gb18030 decode tables conflict at byte 3")
                        }
                        for (var h = this.decodeTables[s - d[f]], g = 48; g <= 57; g++) h[g] === i && (h[g] = -2)
                    }
                }
        }
        this.defaultCharUnicode = t.defaultCharUnicode, this.encodeTable = [], this.encodeTableSeq = [];
        var m = {};
        if (e.encodeSkipVals)
            for (n = 0; n < e.encodeSkipVals.length; n++) {
                var y = e.encodeSkipVals[n];
                if ("number" == typeof y) m[y] = !0;
                else
                    for (l = y.from; l <= y.to; l++) m[l] = !0
            }
        if (this._fillEncodeTable(0, 0, m), e.encodeAdd)
            for (var b in e.encodeAdd) Object.prototype.hasOwnProperty.call(e.encodeAdd, b) && this._setEncodeChar(b.charCodeAt(0), e.encodeAdd[b]);
        this.defCharSB = this.encodeTable[0][t.defaultCharSingleByte.charCodeAt(0)], this.defCharSB === i && (this.defCharSB = this.encodeTable[0]["?"]), this.defCharSB === i && (this.defCharSB = "?".charCodeAt(0))
    }

    function p(e, t) {
        this.leadSurrogate = -1, this.seqObj = void 0, this.encodeTable = t.encodeTable, this.encodeTableSeq = t.encodeTableSeq, this.defaultCharSingleByte = t.defCharSB, this.gb18030 = t.gb18030
    }

    function l(e, t) {
        this.nodeIdx = 0, this.prevBytes = [], this.decodeTables = t.decodeTables, this.decodeTableSeq = t.decodeTableSeq, this.defaultCharUnicode = t.defaultCharUnicode, this.gb18030 = t.gb18030
    }

    function d(e, t) {
        if (e[0] > t) return -1;
        for (var r = 0, n = e.length; r < n - 1;) {
            var i = r + (n - r + 1 >> 1);
            e[i] <= t ? r = i : n = i
        }
        return r
    }
    c.prototype.encoder = p, c.prototype.decoder = l, c.prototype._getDecodeTrieNode = function(e) {
        for (var t = []; e > 0; e >>>= 8) t.push(255 & e);
        0 == t.length && t.push(0);
        for (var r = this.decodeTables[0], n = t.length - 1; n > 0; n--) {
            var o = r[t[n]];
            if (o == i) r[t[n]] = s - this.decodeTables.length, this.decodeTables.push(r = a.slice(0));
            else {
                if (!(o <= s)) throw new Error("Overwrite byte in " + this.encodingName + ", addr: " + e.toString(16));
                r = this.decodeTables[s - o]
            }
        }
        return r
    }, c.prototype._addDecodeChunk = function(e) {
        var t = parseInt(e[0], 16),
            r = this._getDecodeTrieNode(t);
        t &= 255;
        for (var n = 1; n < e.length; n++) {
            var i = e[n];
            if ("string" == typeof i)
                for (var s = 0; s < i.length;) {
                    var a = i.charCodeAt(s++);
                    if (55296 <= a && a < 56320) {
                        var u = i.charCodeAt(s++);
                        if (!(56320 <= u && u < 57344)) throw new Error("Incorrect surrogate pair in " + this.encodingName + " at chunk " + e[0]);
                        r[t++] = 65536 + 1024 * (a - 55296) + (u - 56320)
                    } else if (4080 < a && a <= 4095) {
                        for (var c = 4095 - a + 2, p = [], l = 0; l < c; l++) p.push(i.charCodeAt(s++));
                        r[t++] = o - this.decodeTableSeq.length, this.decodeTableSeq.push(p)
                    } else r[t++] = a
                } else {
                    if ("number" != typeof i) throw new Error("Incorrect type '" + typeof i + "' given in " + this.encodingName + " at chunk " + e[0]);
                    var d = r[t - 1] + 1;
                    for (s = 0; s < i; s++) r[t++] = d++
                }
        }
        if (t > 255) throw new Error("Incorrect chunk in " + this.encodingName + " at addr " + e[0] + ": too long" + t)
    }, c.prototype._getEncodeBucket = function(e) {
        var t = e >> 8;
        return void 0 === this.encodeTable[t] && (this.encodeTable[t] = a.slice(0)), this.encodeTable[t]
    }, c.prototype._setEncodeChar = function(e, t) {
        var r = this._getEncodeBucket(e),
            n = 255 & e;
        r[n] <= o ? this.encodeTableSeq[o - r[n]][-1] = t : r[n] == i && (r[n] = t)
    }, c.prototype._setEncodeSequence = function(e, t) {
        var r, n = e[0],
            s = this._getEncodeBucket(n),
            a = 255 & n;
        s[a] <= o ? r = this.encodeTableSeq[o - s[a]] : (r = {}, s[a] !== i && (r[-1] = s[a]), s[a] = o - this.encodeTableSeq.length, this.encodeTableSeq.push(r));
        for (var u = 1; u < e.length - 1; u++) {
            var c = r[n];
            "object" == typeof c ? r = c : (r = r[n] = {}, void 0 !== c && (r[-1] = c))
        }
        r[n = e[e.length - 1]] = t
    }, c.prototype._fillEncodeTable = function(e, t, r) {
        for (var n = this.decodeTables[e], i = !1, a = {}, u = 0; u < 256; u++) {
            var c = n[u],
                p = t + u;
            if (!r[p])
                if (c >= 0) this._setEncodeChar(c, p), i = !0;
                else if (c <= s) {
                var l = s - c;
                if (!a[l]) {
                    var d = p << 8 >>> 0;
                    this._fillEncodeTable(l, d, r) ? i = !0 : a[l] = !0
                }
            } else c <= o && (this._setEncodeSequence(this.decodeTableSeq[o - c], p), i = !0)
        }
        return i
    }, p.prototype.write = function(e) {
        for (var t = n.alloc(e.length * (this.gb18030 ? 4 : 3)), r = this.leadSurrogate, s = this.seqObj, a = -1, u = 0, c = 0;;) {
            if (-1 === a) {
                if (u == e.length) break;
                var p = e.charCodeAt(u++)
            } else {
                p = a;
                a = -1
            }
            if (55296 <= p && p < 57344)
                if (p < 56320) {
                    if (-1 === r) {
                        r = p;
                        continue
                    }
                    r = p, p = i
                } else - 1 !== r ? (p = 65536 + 1024 * (r - 55296) + (p - 56320), r = -1) : p = i;
            else - 1 !== r && (a = p, p = i, r = -1);
            var l = i;
            if (void 0 !== s && p != i) {
                var f = s[p];
                if ("object" == typeof f) {
                    s = f;
                    continue
                }
                "number" == typeof f ? l = f : null == f && void 0 !== (f = s[-1]) && (l = f, a = p), s = void 0
            } else if (p >= 0) {
                var h = this.encodeTable[p >> 8];
                if (void 0 !== h && (l = h[255 & p]), l <= o) {
                    s = this.encodeTableSeq[o - l];
                    continue
                }
                if (l == i && this.gb18030) {
                    var g = d(this.gb18030.uChars, p);
                    if (-1 != g) {
                        l = this.gb18030.gbChars[g] + (p - this.gb18030.uChars[g]);
                        t[c++] = 129 + Math.floor(l / 12600), l %= 12600, t[c++] = 48 + Math.floor(l / 1260), l %= 1260, t[c++] = 129 + Math.floor(l / 10), l %= 10, t[c++] = 48 + l;
                        continue
                    }
                }
            }
            l === i && (l = this.defaultCharSingleByte), l < 256 ? t[c++] = l : l < 65536 ? (t[c++] = l >> 8, t[c++] = 255 & l) : l < 16777216 ? (t[c++] = l >> 16, t[c++] = l >> 8 & 255, t[c++] = 255 & l) : (t[c++] = l >>> 24, t[c++] = l >>> 16 & 255, t[c++] = l >>> 8 & 255, t[c++] = 255 & l)
        }
        return this.seqObj = s, this.leadSurrogate = r, t.slice(0, c)
    }, p.prototype.end = function() {
        if (-1 !== this.leadSurrogate || void 0 !== this.seqObj) {
            var e = n.alloc(10),
                t = 0;
            if (this.seqObj) {
                var r = this.seqObj[-1];
                void 0 !== r && (r < 256 ? e[t++] = r : (e[t++] = r >> 8, e[t++] = 255 & r)), this.seqObj = void 0
            }
            return -1 !== this.leadSurrogate && (e[t++] = this.defaultCharSingleByte, this.leadSurrogate = -1), e.slice(0, t)
        }
    }, p.prototype.findIdx = d, l.prototype.write = function(e) {
        for (var t = n.alloc(2 * e.length), r = this.nodeIdx, a = this.prevBytes, u = this.prevBytes.length, c = -this.prevBytes.length, p = 0, l = 0; p < e.length; p++) {
            var f, h = p >= 0 ? e[p] : a[p + u];
            if ((f = this.decodeTables[r][h]) >= 0);
            else if (f === i) f = this.defaultCharUnicode.charCodeAt(0), p = c;
            else if (-2 === f) {
                if (p >= 3) var g = 12600 * (e[p - 3] - 129) + 1260 * (e[p - 2] - 48) + 10 * (e[p - 1] - 129) + (h - 48);
                else g = 12600 * (a[p - 3 + u] - 129) + 1260 * ((p - 2 >= 0 ? e[p - 2] : a[p - 2 + u]) - 48) + 10 * ((p - 1 >= 0 ? e[p - 1] : a[p - 1 + u]) - 129) + (h - 48);
                var m = d(this.gb18030.gbChars, g);
                f = this.gb18030.uChars[m] + g - this.gb18030.gbChars[m]
            } else {
                if (f <= s) {
                    r = s - f;
                    continue
                }
                if (!(f <= o)) throw new Error("iconv-lite internal error: invalid decoding table value " + f + " at " + r + "/" + h);
                for (var y = this.decodeTableSeq[o - f], b = 0; b < y.length - 1; b++) f = y[b], t[l++] = 255 & f, t[l++] = f >> 8;
                f = y[y.length - 1]
            }
            if (f >= 65536) {
                var _ = 55296 | (f -= 65536) >> 10;
                t[l++] = 255 & _, t[l++] = _ >> 8, f = 56320 | 1023 & f
            }
            t[l++] = 255 & f, t[l++] = f >> 8, r = 0, c = p + 1
        }
        return this.nodeIdx = r, this.prevBytes = c >= 0 ? Array.prototype.slice.call(e, c) : a.slice(c + u).concat(Array.prototype.slice.call(e)), t.slice(0, l).toString("ucs2")
    }, l.prototype.end = function() {
        for (var e = ""; this.prevBytes.length > 0;) {
            e += this.defaultCharUnicode;
            var t = this.prevBytes.slice(1);
            this.prevBytes = [], this.nodeIdx = 0, t.length > 0 && (e += this.write(t))
        }
        return this.prevBytes = [], this.nodeIdx = 0, e
    }
}, function(e, t, r) {
    "use strict";
    e.exports = {
        shiftjis: {
            type: "_dbcs",
            table: function() {
                return r(140)
            },
            encodeAdd: {
                "¥": 92,
                "‾": 126
            },
            encodeSkipVals: [{
                from: 60736,
                to: 63808
            }]
        },
        csshiftjis: "shiftjis",
        mskanji: "shiftjis",
        sjis: "shiftjis",
        windows31j: "shiftjis",
        ms31j: "shiftjis",
        xsjis: "shiftjis",
        windows932: "shiftjis",
        ms932: "shiftjis",
        932: "shiftjis",
        cp932: "shiftjis",
        eucjp: {
            type: "_dbcs",
            table: function() {
                return r(141)
            },
            encodeAdd: {
                "¥": 92,
                "‾": 126
            }
        },
        gb2312: "cp936",
        gb231280: "cp936",
        gb23121980: "cp936",
        csgb2312: "cp936",
        csiso58gb231280: "cp936",
        euccn: "cp936",
        windows936: "cp936",
        ms936: "cp936",
        936: "cp936",
        cp936: {
            type: "_dbcs",
            table: function() {
                return r(30)
            }
        },
        gbk: {
            type: "_dbcs",
            table: function() {
                return r(30).concat(r(46))
            }
        },
        xgbk: "gbk",
        isoir58: "gbk",
        gb18030: {
            type: "_dbcs",
            table: function() {
                return r(30).concat(r(46))
            },
            gb18030: function() {
                return r(142)
            },
            encodeSkipVals: [128],
            encodeAdd: {
                "€": 41699
            }
        },
        chinese: "gb18030",
        windows949: "cp949",
        ms949: "cp949",
        949: "cp949",
        cp949: {
            type: "_dbcs",
            table: function() {
                return r(143)
            }
        },
        cseuckr: "cp949",
        csksc56011987: "cp949",
        euckr: "cp949",
        isoir149: "cp949",
        korean: "cp949",
        ksc56011987: "cp949",
        ksc56011989: "cp949",
        ksc5601: "cp949",
        windows950: "cp950",
        ms950: "cp950",
        950: "cp950",
        cp950: {
            type: "_dbcs",
            table: function() {
                return r(47)
            }
        },
        big5: "big5hkscs",
        big5hkscs: {
            type: "_dbcs",
            table: function() {
                return r(47).concat(r(144))
            },
            encodeSkipVals: [41676]
        },
        cnbig5: "big5hkscs",
        csbig5: "big5hkscs",
        xxbig5: "big5hkscs"
    }
}, function(e) {
    e.exports = JSON.parse('[["0","\\u0000",128],["a1","｡",62],["8140","　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈",9,"＋－±×"],["8180","÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇◆□■△▲▽▼※〒→←↑↓〓"],["81b8","∈∋⊆⊇⊂⊃∪∩"],["81c8","∧∨￢⇒⇔∀∃"],["81da","∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬"],["81f0","Å‰♯♭♪†‡¶"],["81fc","◯"],["824f","０",9],["8260","Ａ",25],["8281","ａ",25],["829f","ぁ",82],["8340","ァ",62],["8380","ム",22],["839f","Α",16,"Σ",6],["83bf","α",16,"σ",6],["8440","А",5,"ЁЖ",25],["8470","а",5,"ёж",7],["8480","о",17],["849f","─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂"],["8740","①",19,"Ⅰ",9],["875f","㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡"],["877e","㍻"],["8780","〝〟№㏍℡㊤",4,"㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪"],["889f","亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭"],["8940","院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円"],["8980","園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改"],["8a40","魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫"],["8a80","橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄"],["8b40","機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救"],["8b80","朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈"],["8c40","掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨"],["8c80","劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向"],["8d40","后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降"],["8d80","項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷"],["8e40","察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止"],["8e80","死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周"],["8f40","宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳"],["8f80","準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾"],["9040","拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨"],["9080","逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線"],["9140","繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻"],["9180","操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只"],["9240","叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄"],["9280","逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓"],["9340","邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬"],["9380","凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入"],["9440","如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅"],["9480","楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美"],["9540","鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷"],["9580","斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋"],["9640","法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆"],["9680","摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒"],["9740","諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲"],["9780","沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯"],["9840","蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕"],["989f","弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲"],["9940","僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭"],["9980","凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨"],["9a40","咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸"],["9a80","噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩"],["9b40","奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀"],["9b80","它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏"],["9c40","廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠"],["9c80","怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛"],["9d40","戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫"],["9d80","捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼"],["9e40","曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎"],["9e80","梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣"],["9f40","檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯"],["9f80","麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌"],["e040","漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝"],["e080","烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱"],["e140","瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿"],["e180","痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬"],["e240","磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰"],["e280","窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆"],["e340","紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷"],["e380","縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋"],["e440","隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤"],["e480","艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈"],["e540","蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬"],["e580","蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞"],["e640","襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧"],["e680","諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊"],["e740","蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜"],["e780","轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮"],["e840","錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙"],["e880","閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰"],["e940","顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃"],["e980","騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈"],["ea40","鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯"],["ea80","黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠堯槇遙瑤凜熙"],["ed40","纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏"],["ed80","塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱"],["ee40","犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙"],["ee80","蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"],["eeef","ⅰ",9,"￢￤＇＂"],["f040","",62],["f080","",124],["f140","",62],["f180","",124],["f240","",62],["f280","",124],["f340","",62],["f380","",124],["f440","",62],["f480","",124],["f540","",62],["f580","",124],["f640","",62],["f680","",124],["f740","",62],["f780","",124],["f840","",62],["f880","",124],["f940",""],["fa40","ⅰ",9,"Ⅰ",9,"￢￤＇＂㈱№℡∵纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊"],["fa80","兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯"],["fb40","涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神"],["fb80","祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙"],["fc40","髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"]]')
}, function(e) {
    e.exports = JSON.parse('[["0","\\u0000",127],["8ea1","｡",62],["a1a1","　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈",9,"＋－±×÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇"],["a2a1","◆□■△▲▽▼※〒→←↑↓〓"],["a2ba","∈∋⊆⊇⊂⊃∪∩"],["a2ca","∧∨￢⇒⇔∀∃"],["a2dc","∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬"],["a2f2","Å‰♯♭♪†‡¶"],["a2fe","◯"],["a3b0","０",9],["a3c1","Ａ",25],["a3e1","ａ",25],["a4a1","ぁ",82],["a5a1","ァ",85],["a6a1","Α",16,"Σ",6],["a6c1","α",16,"σ",6],["a7a1","А",5,"ЁЖ",25],["a7d1","а",5,"ёж",25],["a8a1","─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂"],["ada1","①",19,"Ⅰ",9],["adc0","㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡"],["addf","㍻〝〟№㏍℡㊤",4,"㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪"],["b0a1","亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭"],["b1a1","院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応"],["b2a1","押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改"],["b3a1","魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱"],["b4a1","粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄"],["b5a1","機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京"],["b6a1","供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈"],["b7a1","掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲"],["b8a1","検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向"],["b9a1","后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込"],["baa1","此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷"],["bba1","察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時"],["bca1","次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周"],["bda1","宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償"],["bea1","勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾"],["bfa1","拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾"],["c0a1","澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線"],["c1a1","繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎"],["c2a1","臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只"],["c3a1","叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵"],["c4a1","帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓"],["c5a1","邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到"],["c6a1","董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入"],["c7a1","如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦"],["c8a1","函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美"],["c9a1","鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服"],["caa1","福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋"],["cba1","法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満"],["cca1","漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒"],["cda1","諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃"],["cea1","痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯"],["cfa1","蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕"],["d0a1","弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲"],["d1a1","僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨"],["d2a1","辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨"],["d3a1","咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉"],["d4a1","圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩"],["d5a1","奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓"],["d6a1","屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏"],["d7a1","廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚"],["d8a1","悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛"],["d9a1","戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼"],["daa1","據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼"],["dba1","曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍"],["dca1","棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣"],["dda1","檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾"],["dea1","沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌"],["dfa1","漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼"],["e0a1","燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱"],["e1a1","瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰"],["e2a1","癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬"],["e3a1","磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐"],["e4a1","筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆"],["e5a1","紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺"],["e6a1","罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋"],["e7a1","隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙"],["e8a1","茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈"],["e9a1","蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙"],["eaa1","蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞"],["eba1","襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫"],["eca1","譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊"],["eda1","蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸"],["eea1","遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮"],["efa1","錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞"],["f0a1","陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰"],["f1a1","顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷"],["f2a1","髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈"],["f3a1","鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠"],["f4a1","堯槇遙瑤凜熙"],["f9a1","纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德"],["faa1","忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱"],["fba1","犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚"],["fca1","釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"],["fcf1","ⅰ",9,"￢￤＇＂"],["8fa2af","˘ˇ¸˙˝¯˛˚～΄΅"],["8fa2c2","¡¦¿"],["8fa2eb","ºª©®™¤№"],["8fa6e1","ΆΈΉΊΪ"],["8fa6e7","Ό"],["8fa6e9","ΎΫ"],["8fa6ec","Ώ"],["8fa6f1","άέήίϊΐόςύϋΰώ"],["8fa7c2","Ђ",10,"ЎЏ"],["8fa7f2","ђ",10,"ўџ"],["8fa9a1","ÆĐ"],["8fa9a4","Ħ"],["8fa9a6","Ĳ"],["8fa9a8","ŁĿ"],["8fa9ab","ŊØŒ"],["8fa9af","ŦÞ"],["8fa9c1","æđðħıĳĸłŀŉŋøœßŧþ"],["8faaa1","ÁÀÄÂĂǍĀĄÅÃĆĈČÇĊĎÉÈËÊĚĖĒĘ"],["8faaba","ĜĞĢĠĤÍÌÏÎǏİĪĮĨĴĶĹĽĻŃŇŅÑÓÒÖÔǑŐŌÕŔŘŖŚŜŠŞŤŢÚÙÜÛŬǓŰŪŲŮŨǗǛǙǕŴÝŸŶŹŽŻ"],["8faba1","áàäâăǎāąåãćĉčçċďéèëêěėēęǵĝğ"],["8fabbd","ġĥíìïîǐ"],["8fabc5","īįĩĵķĺľļńňņñóòöôǒőōõŕřŗśŝšşťţúùüûŭǔűūųůũǘǜǚǖŵýÿŷźžż"],["8fb0a1","丂丄丅丌丒丟丣两丨丫丮丯丰丵乀乁乄乇乑乚乜乣乨乩乴乵乹乿亍亖亗亝亯亹仃仐仚仛仠仡仢仨仯仱仳仵份仾仿伀伂伃伈伋伌伒伕伖众伙伮伱你伳伵伷伹伻伾佀佂佈佉佋佌佒佔佖佘佟佣佪佬佮佱佷佸佹佺佽佾侁侂侄"],["8fb1a1","侅侉侊侌侎侐侒侓侔侗侙侚侞侟侲侷侹侻侼侽侾俀俁俅俆俈俉俋俌俍俏俒俜俠俢俰俲俼俽俿倀倁倄倇倊倌倎倐倓倗倘倛倜倝倞倢倧倮倰倲倳倵偀偁偂偅偆偊偌偎偑偒偓偗偙偟偠偢偣偦偧偪偭偰偱倻傁傃傄傆傊傎傏傐"],["8fb2a1","傒傓傔傖傛傜傞",4,"傪傯傰傹傺傽僀僃僄僇僌僎僐僓僔僘僜僝僟僢僤僦僨僩僯僱僶僺僾儃儆儇儈儋儌儍儎僲儐儗儙儛儜儝儞儣儧儨儬儭儯儱儳儴儵儸儹兂兊兏兓兕兗兘兟兤兦兾冃冄冋冎冘冝冡冣冭冸冺冼冾冿凂"],["8fb3a1","凈减凑凒凓凕凘凞凢凥凮凲凳凴凷刁刂刅划刓刕刖刘刢刨刱刲刵刼剅剉剕剗剘剚剜剟剠剡剦剮剷剸剹劀劂劅劊劌劓劕劖劗劘劚劜劤劥劦劧劯劰劶劷劸劺劻劽勀勄勆勈勌勏勑勔勖勛勜勡勥勨勩勪勬勰勱勴勶勷匀匃匊匋"],["8fb4a1","匌匑匓匘匛匜匞匟匥匧匨匩匫匬匭匰匲匵匼匽匾卂卌卋卙卛卡卣卥卬卭卲卹卾厃厇厈厎厓厔厙厝厡厤厪厫厯厲厴厵厷厸厺厽叀叅叏叒叓叕叚叝叞叠另叧叵吂吓吚吡吧吨吪启吱吴吵呃呄呇呍呏呞呢呤呦呧呩呫呭呮呴呿"],["8fb5a1","咁咃咅咈咉咍咑咕咖咜咟咡咦咧咩咪咭咮咱咷咹咺咻咿哆哊响哎哠哪哬哯哶哼哾哿唀唁唅唈唉唌唍唎唕唪唫唲唵唶唻唼唽啁啇啉啊啍啐啑啘啚啛啞啠啡啤啦啿喁喂喆喈喎喏喑喒喓喔喗喣喤喭喲喿嗁嗃嗆嗉嗋嗌嗎嗑嗒"],["8fb6a1","嗓嗗嗘嗛嗞嗢嗩嗶嗿嘅嘈嘊嘍",5,"嘙嘬嘰嘳嘵嘷嘹嘻嘼嘽嘿噀噁噃噄噆噉噋噍噏噔噞噠噡噢噣噦噩噭噯噱噲噵嚄嚅嚈嚋嚌嚕嚙嚚嚝嚞嚟嚦嚧嚨嚩嚫嚬嚭嚱嚳嚷嚾囅囉囊囋囏囐囌囍囙囜囝囟囡囤",4,"囱囫园"],["8fb7a1","囶囷圁圂圇圊圌圑圕圚圛圝圠圢圣圤圥圩圪圬圮圯圳圴圽圾圿坅坆坌坍坒坢坥坧坨坫坭",4,"坳坴坵坷坹坺坻坼坾垁垃垌垔垗垙垚垜垝垞垟垡垕垧垨垩垬垸垽埇埈埌埏埕埝埞埤埦埧埩埭埰埵埶埸埽埾埿堃堄堈堉埡"],["8fb8a1","堌堍堛堞堟堠堦堧堭堲堹堿塉塌塍塏塐塕塟塡塤塧塨塸塼塿墀墁墇墈墉墊墌墍墏墐墔墖墝墠墡墢墦墩墱墲壄墼壂壈壍壎壐壒壔壖壚壝壡壢壩壳夅夆夋夌夒夓夔虁夝夡夣夤夨夯夰夳夵夶夿奃奆奒奓奙奛奝奞奟奡奣奫奭"],["8fb9a1","奯奲奵奶她奻奼妋妌妎妒妕妗妟妤妧妭妮妯妰妳妷妺妼姁姃姄姈姊姍姒姝姞姟姣姤姧姮姯姱姲姴姷娀娄娌娍娎娒娓娞娣娤娧娨娪娭娰婄婅婇婈婌婐婕婞婣婥婧婭婷婺婻婾媋媐媓媖媙媜媞媟媠媢媧媬媱媲媳媵媸媺媻媿"],["8fbaa1","嫄嫆嫈嫏嫚嫜嫠嫥嫪嫮嫵嫶嫽嬀嬁嬈嬗嬴嬙嬛嬝嬡嬥嬭嬸孁孋孌孒孖孞孨孮孯孼孽孾孿宁宄宆宊宎宐宑宓宔宖宨宩宬宭宯宱宲宷宺宼寀寁寍寏寖",4,"寠寯寱寴寽尌尗尞尟尣尦尩尫尬尮尰尲尵尶屙屚屜屢屣屧屨屩"],["8fbba1","屭屰屴屵屺屻屼屽岇岈岊岏岒岝岟岠岢岣岦岪岲岴岵岺峉峋峒峝峗峮峱峲峴崁崆崍崒崫崣崤崦崧崱崴崹崽崿嵂嵃嵆嵈嵕嵑嵙嵊嵟嵠嵡嵢嵤嵪嵭嵰嵹嵺嵾嵿嶁嶃嶈嶊嶒嶓嶔嶕嶙嶛嶟嶠嶧嶫嶰嶴嶸嶹巃巇巋巐巎巘巙巠巤"],["8fbca1","巩巸巹帀帇帍帒帔帕帘帟帠帮帨帲帵帾幋幐幉幑幖幘幛幜幞幨幪",4,"幰庀庋庎庢庤庥庨庪庬庱庳庽庾庿廆廌廋廎廑廒廔廕廜廞廥廫异弆弇弈弎弙弜弝弡弢弣弤弨弫弬弮弰弴弶弻弽弿彀彄彅彇彍彐彔彘彛彠彣彤彧"],["8fbda1","彯彲彴彵彸彺彽彾徉徍徏徖徜徝徢徧徫徤徬徯徰徱徸忄忇忈忉忋忐",4,"忞忡忢忨忩忪忬忭忮忯忲忳忶忺忼怇怊怍怓怔怗怘怚怟怤怭怳怵恀恇恈恉恌恑恔恖恗恝恡恧恱恾恿悂悆悈悊悎悑悓悕悘悝悞悢悤悥您悰悱悷"],["8fbea1","悻悾惂惄惈惉惊惋惎惏惔惕惙惛惝惞惢惥惲惵惸惼惽愂愇愊愌愐",4,"愖愗愙愜愞愢愪愫愰愱愵愶愷愹慁慅慆慉慞慠慬慲慸慻慼慿憀憁憃憄憋憍憒憓憗憘憜憝憟憠憥憨憪憭憸憹憼懀懁懂懎懏懕懜懝懞懟懡懢懧懩懥"],["8fbfa1","懬懭懯戁戃戄戇戓戕戜戠戢戣戧戩戫戹戽扂扃扄扆扌扐扑扒扔扖扚扜扤扭扯扳扺扽抍抎抏抐抦抨抳抶抷抺抾抿拄拎拕拖拚拪拲拴拼拽挃挄挊挋挍挐挓挖挘挩挪挭挵挶挹挼捁捂捃捄捆捊捋捎捒捓捔捘捛捥捦捬捭捱捴捵"],["8fc0a1","捸捼捽捿掂掄掇掊掐掔掕掙掚掞掤掦掭掮掯掽揁揅揈揎揑揓揔揕揜揠揥揪揬揲揳揵揸揹搉搊搐搒搔搘搞搠搢搤搥搩搪搯搰搵搽搿摋摏摑摒摓摔摚摛摜摝摟摠摡摣摭摳摴摻摽撅撇撏撐撑撘撙撛撝撟撡撣撦撨撬撳撽撾撿"],["8fc1a1","擄擉擊擋擌擎擐擑擕擗擤擥擩擪擭擰擵擷擻擿攁攄攈攉攊攏攓攔攖攙攛攞攟攢攦攩攮攱攺攼攽敃敇敉敐敒敔敟敠敧敫敺敽斁斅斊斒斕斘斝斠斣斦斮斲斳斴斿旂旈旉旎旐旔旖旘旟旰旲旴旵旹旾旿昀昄昈昉昍昑昒昕昖昝"],["8fc2a1","昞昡昢昣昤昦昩昪昫昬昮昰昱昳昹昷晀晅晆晊晌晑晎晗晘晙晛晜晠晡曻晪晫晬晾晳晵晿晷晸晹晻暀晼暋暌暍暐暒暙暚暛暜暟暠暤暭暱暲暵暻暿曀曂曃曈曌曎曏曔曛曟曨曫曬曮曺朅朇朎朓朙朜朠朢朳朾杅杇杈杌杔杕杝"],["8fc3a1","杦杬杮杴杶杻极构枎枏枑枓枖枘枙枛枰枱枲枵枻枼枽柹柀柂柃柅柈柉柒柗柙柜柡柦柰柲柶柷桒栔栙栝栟栨栧栬栭栯栰栱栳栻栿桄桅桊桌桕桗桘桛桫桮",4,"桵桹桺桻桼梂梄梆梈梖梘梚梜梡梣梥梩梪梮梲梻棅棈棌棏"],["8fc4a1","棐棑棓棖棙棜棝棥棨棪棫棬棭棰棱棵棶棻棼棽椆椉椊椐椑椓椖椗椱椳椵椸椻楂楅楉楎楗楛楣楤楥楦楨楩楬楰楱楲楺楻楿榀榍榒榖榘榡榥榦榨榫榭榯榷榸榺榼槅槈槑槖槗槢槥槮槯槱槳槵槾樀樁樃樏樑樕樚樝樠樤樨樰樲"],["8fc5a1","樴樷樻樾樿橅橆橉橊橎橐橑橒橕橖橛橤橧橪橱橳橾檁檃檆檇檉檋檑檛檝檞檟檥檫檯檰檱檴檽檾檿櫆櫉櫈櫌櫐櫔櫕櫖櫜櫝櫤櫧櫬櫰櫱櫲櫼櫽欂欃欆欇欉欏欐欑欗欛欞欤欨欫欬欯欵欶欻欿歆歊歍歒歖歘歝歠歧歫歮歰歵歽"],["8fc6a1","歾殂殅殗殛殟殠殢殣殨殩殬殭殮殰殸殹殽殾毃毄毉毌毖毚毡毣毦毧毮毱毷毹毿氂氄氅氉氍氎氐氒氙氟氦氧氨氬氮氳氵氶氺氻氿汊汋汍汏汒汔汙汛汜汫汭汯汴汶汸汹汻沅沆沇沉沔沕沗沘沜沟沰沲沴泂泆泍泏泐泑泒泔泖"],["8fc7a1","泚泜泠泧泩泫泬泮泲泴洄洇洊洎洏洑洓洚洦洧洨汧洮洯洱洹洼洿浗浞浟浡浥浧浯浰浼涂涇涑涒涔涖涗涘涪涬涴涷涹涽涿淄淈淊淎淏淖淛淝淟淠淢淥淩淯淰淴淶淼渀渄渞渢渧渲渶渹渻渼湄湅湈湉湋湏湑湒湓湔湗湜湝湞"],["8fc8a1","湢湣湨湳湻湽溍溓溙溠溧溭溮溱溳溻溿滀滁滃滇滈滊滍滎滏滫滭滮滹滻滽漄漈漊漌漍漖漘漚漛漦漩漪漯漰漳漶漻漼漭潏潑潒潓潗潙潚潝潞潡潢潨潬潽潾澃澇澈澋澌澍澐澒澓澔澖澚澟澠澥澦澧澨澮澯澰澵澶澼濅濇濈濊"],["8fc9a1","濚濞濨濩濰濵濹濼濽瀀瀅瀆瀇瀍瀗瀠瀣瀯瀴瀷瀹瀼灃灄灈灉灊灋灔灕灝灞灎灤灥灬灮灵灶灾炁炅炆炔",4,"炛炤炫炰炱炴炷烊烑烓烔烕烖烘烜烤烺焃",4,"焋焌焏焞焠焫焭焯焰焱焸煁煅煆煇煊煋煐煒煗煚煜煞煠"],["8fcaa1","煨煹熀熅熇熌熒熚熛熠熢熯熰熲熳熺熿燀燁燄燋燌燓燖燙燚燜燸燾爀爇爈爉爓爗爚爝爟爤爫爯爴爸爹牁牂牃牅牎牏牐牓牕牖牚牜牞牠牣牨牫牮牯牱牷牸牻牼牿犄犉犍犎犓犛犨犭犮犱犴犾狁狇狉狌狕狖狘狟狥狳狴狺狻"],["8fcba1","狾猂猄猅猇猋猍猒猓猘猙猞猢猤猧猨猬猱猲猵猺猻猽獃獍獐獒獖獘獝獞獟獠獦獧獩獫獬獮獯獱獷獹獼玀玁玃玅玆玎玐玓玕玗玘玜玞玟玠玢玥玦玪玫玭玵玷玹玼玽玿珅珆珉珋珌珏珒珓珖珙珝珡珣珦珧珩珴珵珷珹珺珻珽"],["8fcca1","珿琀琁琄琇琊琑琚琛琤琦琨",9,"琹瑀瑃瑄瑆瑇瑋瑍瑑瑒瑗瑝瑢瑦瑧瑨瑫瑭瑮瑱瑲璀璁璅璆璇璉璏璐璑璒璘璙璚璜璟璠璡璣璦璨璩璪璫璮璯璱璲璵璹璻璿瓈瓉瓌瓐瓓瓘瓚瓛瓞瓟瓤瓨瓪瓫瓯瓴瓺瓻瓼瓿甆"],["8fcda1","甒甖甗甠甡甤甧甩甪甯甶甹甽甾甿畀畃畇畈畎畐畒畗畞畟畡畯畱畹",5,"疁疅疐疒疓疕疙疜疢疤疴疺疿痀痁痄痆痌痎痏痗痜痟痠痡痤痧痬痮痯痱痹瘀瘂瘃瘄瘇瘈瘊瘌瘏瘒瘓瘕瘖瘙瘛瘜瘝瘞瘣瘥瘦瘩瘭瘲瘳瘵瘸瘹"],["8fcea1","瘺瘼癊癀癁癃癄癅癉癋癕癙癟癤癥癭癮癯癱癴皁皅皌皍皕皛皜皝皟皠皢",6,"皪皭皽盁盅盉盋盌盎盔盙盠盦盨盬盰盱盶盹盼眀眆眊眎眒眔眕眗眙眚眜眢眨眭眮眯眴眵眶眹眽眾睂睅睆睊睍睎睏睒睖睗睜睞睟睠睢"],["8fcfa1","睤睧睪睬睰睲睳睴睺睽瞀瞄瞌瞍瞔瞕瞖瞚瞟瞢瞧瞪瞮瞯瞱瞵瞾矃矉矑矒矕矙矞矟矠矤矦矪矬矰矱矴矸矻砅砆砉砍砎砑砝砡砢砣砭砮砰砵砷硃硄硇硈硌硎硒硜硞硠硡硣硤硨硪确硺硾碊碏碔碘碡碝碞碟碤碨碬碭碰碱碲碳"],["8fd0a1","碻碽碿磇磈磉磌磎磒磓磕磖磤磛磟磠磡磦磪磲磳礀磶磷磺磻磿礆礌礐礚礜礞礟礠礥礧礩礭礱礴礵礻礽礿祄祅祆祊祋祏祑祔祘祛祜祧祩祫祲祹祻祼祾禋禌禑禓禔禕禖禘禛禜禡禨禩禫禯禱禴禸离秂秄秇秈秊秏秔秖秚秝秞"],["8fd1a1","秠秢秥秪秫秭秱秸秼稂稃稇稉稊稌稑稕稛稞稡稧稫稭稯稰稴稵稸稹稺穄穅穇穈穌穕穖穙穜穝穟穠穥穧穪穭穵穸穾窀窂窅窆窊窋窐窑窔窞窠窣窬窳窵窹窻窼竆竉竌竎竑竛竨竩竫竬竱竴竻竽竾笇笔笟笣笧笩笪笫笭笮笯笰"],["8fd2a1","笱笴笽笿筀筁筇筎筕筠筤筦筩筪筭筯筲筳筷箄箉箎箐箑箖箛箞箠箥箬箯箰箲箵箶箺箻箼箽篂篅篈篊篔篖篗篙篚篛篨篪篲篴篵篸篹篺篼篾簁簂簃簄簆簉簋簌簎簏簙簛簠簥簦簨簬簱簳簴簶簹簺籆籊籕籑籒籓籙",5],["8fd3a1","籡籣籧籩籭籮籰籲籹籼籽粆粇粏粔粞粠粦粰粶粷粺粻粼粿糄糇糈糉糍糏糓糔糕糗糙糚糝糦糩糫糵紃紇紈紉紏紑紒紓紖紝紞紣紦紪紭紱紼紽紾絀絁絇絈絍絑絓絗絙絚絜絝絥絧絪絰絸絺絻絿綁綂綃綅綆綈綋綌綍綑綖綗綝"],["8fd4a1","綞綦綧綪綳綶綷綹緂",4,"緌緍緎緗緙縀緢緥緦緪緫緭緱緵緶緹緺縈縐縑縕縗縜縝縠縧縨縬縭縯縳縶縿繄繅繇繎繐繒繘繟繡繢繥繫繮繯繳繸繾纁纆纇纊纍纑纕纘纚纝纞缼缻缽缾缿罃罄罇罏罒罓罛罜罝罡罣罤罥罦罭"],["8fd5a1","罱罽罾罿羀羋羍羏羐羑羖羗羜羡羢羦羪羭羴羼羿翀翃翈翎翏翛翟翣翥翨翬翮翯翲翺翽翾翿耇耈耊耍耎耏耑耓耔耖耝耞耟耠耤耦耬耮耰耴耵耷耹耺耼耾聀聄聠聤聦聭聱聵肁肈肎肜肞肦肧肫肸肹胈胍胏胒胔胕胗胘胠胭胮"],["8fd6a1","胰胲胳胶胹胺胾脃脋脖脗脘脜脞脠脤脧脬脰脵脺脼腅腇腊腌腒腗腠腡腧腨腩腭腯腷膁膐膄膅膆膋膎膖膘膛膞膢膮膲膴膻臋臃臅臊臎臏臕臗臛臝臞臡臤臫臬臰臱臲臵臶臸臹臽臿舀舃舏舓舔舙舚舝舡舢舨舲舴舺艃艄艅艆"],["8fd7a1","艋艎艏艑艖艜艠艣艧艭艴艻艽艿芀芁芃芄芇芉芊芎芑芔芖芘芚芛芠芡芣芤芧芨芩芪芮芰芲芴芷芺芼芾芿苆苐苕苚苠苢苤苨苪苭苯苶苷苽苾茀茁茇茈茊茋荔茛茝茞茟茡茢茬茭茮茰茳茷茺茼茽荂荃荄荇荍荎荑荕荖荗荰荸"],["8fd8a1","荽荿莀莂莄莆莍莒莔莕莘莙莛莜莝莦莧莩莬莾莿菀菇菉菏菐菑菔菝荓菨菪菶菸菹菼萁萆萊萏萑萕萙莭萯萹葅葇葈葊葍葏葑葒葖葘葙葚葜葠葤葥葧葪葰葳葴葶葸葼葽蒁蒅蒒蒓蒕蒞蒦蒨蒩蒪蒯蒱蒴蒺蒽蒾蓀蓂蓇蓈蓌蓏蓓"],["8fd9a1","蓜蓧蓪蓯蓰蓱蓲蓷蔲蓺蓻蓽蔂蔃蔇蔌蔎蔐蔜蔞蔢蔣蔤蔥蔧蔪蔫蔯蔳蔴蔶蔿蕆蕏",4,"蕖蕙蕜",6,"蕤蕫蕯蕹蕺蕻蕽蕿薁薅薆薉薋薌薏薓薘薝薟薠薢薥薧薴薶薷薸薼薽薾薿藂藇藊藋藎薭藘藚藟藠藦藨藭藳藶藼"],["8fdaa1","藿蘀蘄蘅蘍蘎蘐蘑蘒蘘蘙蘛蘞蘡蘧蘩蘶蘸蘺蘼蘽虀虂虆虒虓虖虗虘虙虝虠",4,"虩虬虯虵虶虷虺蚍蚑蚖蚘蚚蚜蚡蚦蚧蚨蚭蚱蚳蚴蚵蚷蚸蚹蚿蛀蛁蛃蛅蛑蛒蛕蛗蛚蛜蛠蛣蛥蛧蚈蛺蛼蛽蜄蜅蜇蜋蜎蜏蜐蜓蜔蜙蜞蜟蜡蜣"],["8fdba1","蜨蜮蜯蜱蜲蜹蜺蜼蜽蜾蝀蝃蝅蝍蝘蝝蝡蝤蝥蝯蝱蝲蝻螃",6,"螋螌螐螓螕螗螘螙螞螠螣螧螬螭螮螱螵螾螿蟁蟈蟉蟊蟎蟕蟖蟙蟚蟜蟟蟢蟣蟤蟪蟫蟭蟱蟳蟸蟺蟿蠁蠃蠆蠉蠊蠋蠐蠙蠒蠓蠔蠘蠚蠛蠜蠞蠟蠨蠭蠮蠰蠲蠵"],["8fdca1","蠺蠼衁衃衅衈衉衊衋衎衑衕衖衘衚衜衟衠衤衩衱衹衻袀袘袚袛袜袟袠袨袪袺袽袾裀裊",4,"裑裒裓裛裞裧裯裰裱裵裷褁褆褍褎褏褕褖褘褙褚褜褠褦褧褨褰褱褲褵褹褺褾襀襂襅襆襉襏襒襗襚襛襜襡襢襣襫襮襰襳襵襺"],["8fdda1","襻襼襽覉覍覐覔覕覛覜覟覠覥覰覴覵覶覷覼觔",4,"觥觩觫觭觱觳觶觹觽觿訄訅訇訏訑訒訔訕訞訠訢訤訦訫訬訯訵訷訽訾詀詃詅詇詉詍詎詓詖詗詘詜詝詡詥詧詵詶詷詹詺詻詾詿誀誃誆誋誏誐誒誖誗誙誟誧誩誮誯誳"],["8fdea1","誶誷誻誾諃諆諈諉諊諑諓諔諕諗諝諟諬諰諴諵諶諼諿謅謆謋謑謜謞謟謊謭謰謷謼譂",4,"譈譒譓譔譙譍譞譣譭譶譸譹譼譾讁讄讅讋讍讏讔讕讜讞讟谸谹谽谾豅豇豉豋豏豑豓豔豗豘豛豝豙豣豤豦豨豩豭豳豵豶豻豾貆"],["8fdfa1","貇貋貐貒貓貙貛貜貤貹貺賅賆賉賋賏賖賕賙賝賡賨賬賯賰賲賵賷賸賾賿贁贃贉贒贗贛赥赩赬赮赿趂趄趈趍趐趑趕趞趟趠趦趫趬趯趲趵趷趹趻跀跅跆跇跈跊跎跑跔跕跗跙跤跥跧跬跰趼跱跲跴跽踁踄踅踆踋踑踔踖踠踡踢"],["8fe0a1","踣踦踧踱踳踶踷踸踹踽蹀蹁蹋蹍蹎蹏蹔蹛蹜蹝蹞蹡蹢蹩蹬蹭蹯蹰蹱蹹蹺蹻躂躃躉躐躒躕躚躛躝躞躢躧躩躭躮躳躵躺躻軀軁軃軄軇軏軑軔軜軨軮軰軱軷軹軺軭輀輂輇輈輏輐輖輗輘輞輠輡輣輥輧輨輬輭輮輴輵輶輷輺轀轁"],["8fe1a1","轃轇轏轑",4,"轘轝轞轥辝辠辡辤辥辦辵辶辸达迀迁迆迊迋迍运迒迓迕迠迣迤迨迮迱迵迶迻迾适逄逈逌逘逛逨逩逯逪逬逭逳逴逷逿遃遄遌遛遝遢遦遧遬遰遴遹邅邈邋邌邎邐邕邗邘邙邛邠邡邢邥邰邲邳邴邶邽郌邾郃"],["8fe2a1","郄郅郇郈郕郗郘郙郜郝郟郥郒郶郫郯郰郴郾郿鄀鄄鄅鄆鄈鄍鄐鄔鄖鄗鄘鄚鄜鄞鄠鄥鄢鄣鄧鄩鄮鄯鄱鄴鄶鄷鄹鄺鄼鄽酃酇酈酏酓酗酙酚酛酡酤酧酭酴酹酺酻醁醃醅醆醊醎醑醓醔醕醘醞醡醦醨醬醭醮醰醱醲醳醶醻醼醽醿"],["8fe3a1","釂釃釅釓釔釗釙釚釞釤釥釩釪釬",5,"釷釹釻釽鈀鈁鈄鈅鈆鈇鈉鈊鈌鈐鈒鈓鈖鈘鈜鈝鈣鈤鈥鈦鈨鈮鈯鈰鈳鈵鈶鈸鈹鈺鈼鈾鉀鉂鉃鉆鉇鉊鉍鉎鉏鉑鉘鉙鉜鉝鉠鉡鉥鉧鉨鉩鉮鉯鉰鉵",4,"鉻鉼鉽鉿銈銉銊銍銎銒銗"],["8fe4a1","銙銟銠銤銥銧銨銫銯銲銶銸銺銻銼銽銿",4,"鋅鋆鋇鋈鋋鋌鋍鋎鋐鋓鋕鋗鋘鋙鋜鋝鋟鋠鋡鋣鋥鋧鋨鋬鋮鋰鋹鋻鋿錀錂錈錍錑錔錕錜錝錞錟錡錤錥錧錩錪錳錴錶錷鍇鍈鍉鍐鍑鍒鍕鍗鍘鍚鍞鍤鍥鍧鍩鍪鍭鍯鍰鍱鍳鍴鍶"],["8fe5a1","鍺鍽鍿鎀鎁鎂鎈鎊鎋鎍鎏鎒鎕鎘鎛鎞鎡鎣鎤鎦鎨鎫鎴鎵鎶鎺鎩鏁鏄鏅鏆鏇鏉",4,"鏓鏙鏜鏞鏟鏢鏦鏧鏹鏷鏸鏺鏻鏽鐁鐂鐄鐈鐉鐍鐎鐏鐕鐖鐗鐟鐮鐯鐱鐲鐳鐴鐻鐿鐽鑃鑅鑈鑊鑌鑕鑙鑜鑟鑡鑣鑨鑫鑭鑮鑯鑱鑲钄钃镸镹"],["8fe6a1","镾閄閈閌閍閎閝閞閟閡閦閩閫閬閴閶閺閽閿闆闈闉闋闐闑闒闓闙闚闝闞闟闠闤闦阝阞阢阤阥阦阬阱阳阷阸阹阺阼阽陁陒陔陖陗陘陡陮陴陻陼陾陿隁隂隃隄隉隑隖隚隝隟隤隥隦隩隮隯隳隺雊雒嶲雘雚雝雞雟雩雯雱雺霂"],["8fe7a1","霃霅霉霚霛霝霡霢霣霨霱霳靁靃靊靎靏靕靗靘靚靛靣靧靪靮靳靶靷靸靻靽靿鞀鞉鞕鞖鞗鞙鞚鞞鞟鞢鞬鞮鞱鞲鞵鞶鞸鞹鞺鞼鞾鞿韁韄韅韇韉韊韌韍韎韐韑韔韗韘韙韝韞韠韛韡韤韯韱韴韷韸韺頇頊頙頍頎頔頖頜頞頠頣頦"],["8fe8a1","頫頮頯頰頲頳頵頥頾顄顇顊顑顒顓顖顗顙顚顢顣顥顦顪顬颫颭颮颰颴颷颸颺颻颿飂飅飈飌飡飣飥飦飧飪飳飶餂餇餈餑餕餖餗餚餛餜餟餢餦餧餫餱",4,"餹餺餻餼饀饁饆饇饈饍饎饔饘饙饛饜饞饟饠馛馝馟馦馰馱馲馵"],["8fe9a1","馹馺馽馿駃駉駓駔駙駚駜駞駧駪駫駬駰駴駵駹駽駾騂騃騄騋騌騐騑騖騞騠騢騣騤騧騭騮騳騵騶騸驇驁驄驊驋驌驎驑驔驖驝骪骬骮骯骲骴骵骶骹骻骾骿髁髃髆髈髎髐髒髕髖髗髛髜髠髤髥髧髩髬髲髳髵髹髺髽髿",4],["8feaa1","鬄鬅鬈鬉鬋鬌鬍鬎鬐鬒鬖鬙鬛鬜鬠鬦鬫鬭鬳鬴鬵鬷鬹鬺鬽魈魋魌魕魖魗魛魞魡魣魥魦魨魪",4,"魳魵魷魸魹魿鮀鮄鮅鮆鮇鮉鮊鮋鮍鮏鮐鮔鮚鮝鮞鮦鮧鮩鮬鮰鮱鮲鮷鮸鮻鮼鮾鮿鯁鯇鯈鯎鯐鯗鯘鯝鯟鯥鯧鯪鯫鯯鯳鯷鯸"],["8feba1","鯹鯺鯽鯿鰀鰂鰋鰏鰑鰖鰘鰙鰚鰜鰞鰢鰣鰦",4,"鰱鰵鰶鰷鰽鱁鱃鱄鱅鱉鱊鱎鱏鱐鱓鱔鱖鱘鱛鱝鱞鱟鱣鱩鱪鱜鱫鱨鱮鱰鱲鱵鱷鱻鳦鳲鳷鳹鴋鴂鴑鴗鴘鴜鴝鴞鴯鴰鴲鴳鴴鴺鴼鵅鴽鵂鵃鵇鵊鵓鵔鵟鵣鵢鵥鵩鵪鵫鵰鵶鵷鵻"],["8feca1","鵼鵾鶃鶄鶆鶊鶍鶎鶒鶓鶕鶖鶗鶘鶡鶪鶬鶮鶱鶵鶹鶼鶿鷃鷇鷉鷊鷔鷕鷖鷗鷚鷞鷟鷠鷥鷧鷩鷫鷮鷰鷳鷴鷾鸊鸂鸇鸎鸐鸑鸒鸕鸖鸙鸜鸝鹺鹻鹼麀麂麃麄麅麇麎麏麖麘麛麞麤麨麬麮麯麰麳麴麵黆黈黋黕黟黤黧黬黭黮黰黱黲黵"],["8feda1","黸黿鼂鼃鼉鼏鼐鼑鼒鼔鼖鼗鼙鼚鼛鼟鼢鼦鼪鼫鼯鼱鼲鼴鼷鼹鼺鼼鼽鼿齁齃",4,"齓齕齖齗齘齚齝齞齨齩齭",4,"齳齵齺齽龏龐龑龒龔龖龗龞龡龢龣龥"]]')
}, function(e) {
    e.exports = JSON.parse('{"uChars":[128,165,169,178,184,216,226,235,238,244,248,251,253,258,276,284,300,325,329,334,364,463,465,467,469,471,473,475,477,506,594,610,712,716,730,930,938,962,970,1026,1104,1106,8209,8215,8218,8222,8231,8241,8244,8246,8252,8365,8452,8454,8458,8471,8482,8556,8570,8596,8602,8713,8720,8722,8726,8731,8737,8740,8742,8748,8751,8760,8766,8777,8781,8787,8802,8808,8816,8854,8858,8870,8896,8979,9322,9372,9548,9588,9616,9622,9634,9652,9662,9672,9676,9680,9702,9735,9738,9793,9795,11906,11909,11913,11917,11928,11944,11947,11951,11956,11960,11964,11979,12284,12292,12312,12319,12330,12351,12436,12447,12535,12543,12586,12842,12850,12964,13200,13215,13218,13253,13263,13267,13270,13384,13428,13727,13839,13851,14617,14703,14801,14816,14964,15183,15471,15585,16471,16736,17208,17325,17330,17374,17623,17997,18018,18212,18218,18301,18318,18760,18811,18814,18820,18823,18844,18848,18872,19576,19620,19738,19887,40870,59244,59336,59367,59413,59417,59423,59431,59437,59443,59452,59460,59478,59493,63789,63866,63894,63976,63986,64016,64018,64021,64025,64034,64037,64042,65074,65093,65107,65112,65127,65132,65375,65510,65536],"gbChars":[0,36,38,45,50,81,89,95,96,100,103,104,105,109,126,133,148,172,175,179,208,306,307,308,309,310,311,312,313,341,428,443,544,545,558,741,742,749,750,805,819,820,7922,7924,7925,7927,7934,7943,7944,7945,7950,8062,8148,8149,8152,8164,8174,8236,8240,8262,8264,8374,8380,8381,8384,8388,8390,8392,8393,8394,8396,8401,8406,8416,8419,8424,8437,8439,8445,8482,8485,8496,8521,8603,8936,8946,9046,9050,9063,9066,9076,9092,9100,9108,9111,9113,9131,9162,9164,9218,9219,11329,11331,11334,11336,11346,11361,11363,11366,11370,11372,11375,11389,11682,11686,11687,11692,11694,11714,11716,11723,11725,11730,11736,11982,11989,12102,12336,12348,12350,12384,12393,12395,12397,12510,12553,12851,12962,12973,13738,13823,13919,13933,14080,14298,14585,14698,15583,15847,16318,16434,16438,16481,16729,17102,17122,17315,17320,17402,17418,17859,17909,17911,17915,17916,17936,17939,17961,18664,18703,18814,18962,19043,33469,33470,33471,33484,33485,33490,33497,33501,33505,33513,33520,33536,33550,37845,37921,37948,38029,38038,38064,38065,38066,38069,38075,38076,38078,39108,39109,39113,39114,39115,39116,39265,39394,189000]}')
}, function(e) {
    e.exports = JSON.parse('[["0","\\u0000",127],["8141","갂갃갅갆갋",4,"갘갞갟갡갢갣갥",6,"갮갲갳갴"],["8161","갵갶갷갺갻갽갾갿걁",9,"걌걎",5,"걕"],["8181","걖걗걙걚걛걝",18,"걲걳걵걶걹걻",4,"겂겇겈겍겎겏겑겒겓겕",6,"겞겢",5,"겫겭겮겱",6,"겺겾겿곀곂곃곅곆곇곉곊곋곍",7,"곖곘",7,"곢곣곥곦곩곫곭곮곲곴곷",4,"곾곿괁괂괃괅괇",4,"괎괐괒괓"],["8241","괔괕괖괗괙괚괛괝괞괟괡",7,"괪괫괮",5],["8261","괶괷괹괺괻괽",6,"굆굈굊",5,"굑굒굓굕굖굗"],["8281","굙",7,"굢굤",7,"굮굯굱굲굷굸굹굺굾궀궃",4,"궊궋궍궎궏궑",10,"궞",5,"궥",17,"궸",7,"귂귃귅귆귇귉",6,"귒귔",7,"귝귞귟귡귢귣귥",18],["8341","귺귻귽귾긂",5,"긊긌긎",5,"긕",7],["8361","긝",18,"긲긳긵긶긹긻긼"],["8381","긽긾긿깂깄깇깈깉깋깏깑깒깓깕깗",4,"깞깢깣깤깦깧깪깫깭깮깯깱",6,"깺깾",5,"꺆",5,"꺍",46,"꺿껁껂껃껅",6,"껎껒",5,"껚껛껝",8],["8441","껦껧껩껪껬껮",5,"껵껶껷껹껺껻껽",8],["8461","꼆꼉꼊꼋꼌꼎꼏꼑",18],["8481","꼤",7,"꼮꼯꼱꼳꼵",6,"꼾꽀꽄꽅꽆꽇꽊",5,"꽑",10,"꽞",5,"꽦",18,"꽺",5,"꾁꾂꾃꾅꾆꾇꾉",6,"꾒꾓꾔꾖",5,"꾝",26,"꾺꾻꾽꾾"],["8541","꾿꿁",5,"꿊꿌꿏",4,"꿕",6,"꿝",4],["8561","꿢",5,"꿪",5,"꿲꿳꿵꿶꿷꿹",6,"뀂뀃"],["8581","뀅",6,"뀍뀎뀏뀑뀒뀓뀕",6,"뀞",9,"뀩",26,"끆끇끉끋끍끏끐끑끒끖끘끚끛끜끞",29,"끾끿낁낂낃낅",6,"낎낐낒",5,"낛낝낞낣낤"],["8641","낥낦낧낪낰낲낶낷낹낺낻낽",6,"냆냊",5,"냒"],["8661","냓냕냖냗냙",6,"냡냢냣냤냦",10],["8681","냱",22,"넊넍넎넏넑넔넕넖넗넚넞",4,"넦넧넩넪넫넭",6,"넶넺",5,"녂녃녅녆녇녉",6,"녒녓녖녗녙녚녛녝녞녟녡",22,"녺녻녽녾녿놁놃",4,"놊놌놎놏놐놑놕놖놗놙놚놛놝"],["8741","놞",9,"놩",15],["8761","놹",18,"뇍뇎뇏뇑뇒뇓뇕"],["8781","뇖",5,"뇞뇠",7,"뇪뇫뇭뇮뇯뇱",7,"뇺뇼뇾",5,"눆눇눉눊눍",6,"눖눘눚",5,"눡",18,"눵",6,"눽",26,"뉙뉚뉛뉝뉞뉟뉡",6,"뉪",4],["8841","뉯",4,"뉶",5,"뉽",6,"늆늇늈늊",4],["8861","늏늒늓늕늖늗늛",4,"늢늤늧늨늩늫늭늮늯늱늲늳늵늶늷"],["8881","늸",15,"닊닋닍닎닏닑닓",4,"닚닜닞닟닠닡닣닧닩닪닰닱닲닶닼닽닾댂댃댅댆댇댉",6,"댒댖",5,"댝",54,"덗덙덚덝덠덡덢덣"],["8941","덦덨덪덬덭덯덲덳덵덶덷덹",6,"뎂뎆",5,"뎍"],["8961","뎎뎏뎑뎒뎓뎕",10,"뎢",5,"뎩뎪뎫뎭"],["8981","뎮",21,"돆돇돉돊돍돏돑돒돓돖돘돚돜돞돟돡돢돣돥돦돧돩",18,"돽",18,"됑",6,"됙됚됛됝됞됟됡",6,"됪됬",7,"됵",15],["8a41","둅",10,"둒둓둕둖둗둙",6,"둢둤둦"],["8a61","둧",4,"둭",18,"뒁뒂"],["8a81","뒃",4,"뒉",19,"뒞",5,"뒥뒦뒧뒩뒪뒫뒭",7,"뒶뒸뒺",5,"듁듂듃듅듆듇듉",6,"듑듒듓듔듖",5,"듞듟듡듢듥듧",4,"듮듰듲",5,"듹",26,"딖딗딙딚딝"],["8b41","딞",5,"딦딫",4,"딲딳딵딶딷딹",6,"땂땆"],["8b61","땇땈땉땊땎땏땑땒땓땕",6,"땞땢",8],["8b81","땫",52,"떢떣떥떦떧떩떬떭떮떯떲떶",4,"떾떿뗁뗂뗃뗅",6,"뗎뗒",5,"뗙",18,"뗭",18],["8c41","똀",15,"똒똓똕똖똗똙",4],["8c61","똞",6,"똦",5,"똭",6,"똵",5],["8c81","똻",12,"뙉",26,"뙥뙦뙧뙩",50,"뚞뚟뚡뚢뚣뚥",5,"뚭뚮뚯뚰뚲",16],["8d41","뛃",16,"뛕",8],["8d61","뛞",17,"뛱뛲뛳뛵뛶뛷뛹뛺"],["8d81","뛻",4,"뜂뜃뜄뜆",33,"뜪뜫뜭뜮뜱",6,"뜺뜼",7,"띅띆띇띉띊띋띍",6,"띖",9,"띡띢띣띥띦띧띩",6,"띲띴띶",5,"띾띿랁랂랃랅",6,"랎랓랔랕랚랛랝랞"],["8e41","랟랡",6,"랪랮",5,"랶랷랹",8],["8e61","럂",4,"럈럊",19],["8e81","럞",13,"럮럯럱럲럳럵",6,"럾렂",4,"렊렋렍렎렏렑",6,"렚렜렞",5,"렦렧렩렪렫렭",6,"렶렺",5,"롁롂롃롅",11,"롒롔",7,"롞롟롡롢롣롥",6,"롮롰롲",5,"롹롺롻롽",7],["8f41","뢅",7,"뢎",17],["8f61","뢠",7,"뢩",6,"뢱뢲뢳뢵뢶뢷뢹",4],["8f81","뢾뢿룂룄룆",5,"룍룎룏룑룒룓룕",7,"룞룠룢",5,"룪룫룭룮룯룱",6,"룺룼룾",5,"뤅",18,"뤙",6,"뤡",26,"뤾뤿륁륂륃륅",6,"륍륎륐륒",5],["9041","륚륛륝륞륟륡",6,"륪륬륮",5,"륶륷륹륺륻륽"],["9061","륾",5,"릆릈릋릌릏",15],["9081","릟",12,"릮릯릱릲릳릵",6,"릾맀맂",5,"맊맋맍맓",4,"맚맜맟맠맢맦맧맩맪맫맭",6,"맶맻",4,"먂",5,"먉",11,"먖",33,"먺먻먽먾먿멁멃멄멅멆"],["9141","멇멊멌멏멐멑멒멖멗멙멚멛멝",6,"멦멪",5],["9161","멲멳멵멶멷멹",9,"몆몈몉몊몋몍",5],["9181","몓",20,"몪몭몮몯몱몳",4,"몺몼몾",5,"뫅뫆뫇뫉",14,"뫚",33,"뫽뫾뫿묁묂묃묅",7,"묎묐묒",5,"묙묚묛묝묞묟묡",6],["9241","묨묪묬",7,"묷묹묺묿",4,"뭆뭈뭊뭋뭌뭎뭑뭒"],["9261","뭓뭕뭖뭗뭙",7,"뭢뭤",7,"뭭",4],["9281","뭲",21,"뮉뮊뮋뮍뮎뮏뮑",18,"뮥뮦뮧뮩뮪뮫뮭",6,"뮵뮶뮸",7,"믁믂믃믅믆믇믉",6,"믑믒믔",35,"믺믻믽믾밁"],["9341","밃",4,"밊밎밐밒밓밙밚밠밡밢밣밦밨밪밫밬밮밯밲밳밵"],["9361","밶밷밹",6,"뱂뱆뱇뱈뱊뱋뱎뱏뱑",8],["9381","뱚뱛뱜뱞",37,"벆벇벉벊벍벏",4,"벖벘벛",4,"벢벣벥벦벩",6,"벲벶",5,"벾벿볁볂볃볅",7,"볎볒볓볔볖볗볙볚볛볝",22,"볷볹볺볻볽"],["9441","볾",5,"봆봈봊",5,"봑봒봓봕",8],["9461","봞",5,"봥",6,"봭",12],["9481","봺",5,"뵁",6,"뵊뵋뵍뵎뵏뵑",6,"뵚",9,"뵥뵦뵧뵩",22,"붂붃붅붆붋",4,"붒붔붖붗붘붛붝",6,"붥",10,"붱",6,"붹",24],["9541","뷒뷓뷖뷗뷙뷚뷛뷝",11,"뷪",5,"뷱"],["9561","뷲뷳뷵뷶뷷뷹",6,"븁븂븄븆",5,"븎븏븑븒븓"],["9581","븕",6,"븞븠",35,"빆빇빉빊빋빍빏",4,"빖빘빜빝빞빟빢빣빥빦빧빩빫",4,"빲빶",4,"빾빿뺁뺂뺃뺅",6,"뺎뺒",5,"뺚",13,"뺩",14],["9641","뺸",23,"뻒뻓"],["9661","뻕뻖뻙",6,"뻡뻢뻦",5,"뻭",8],["9681","뻶",10,"뼂",5,"뼊",13,"뼚뼞",33,"뽂뽃뽅뽆뽇뽉",6,"뽒뽓뽔뽖",44],["9741","뾃",16,"뾕",8],["9761","뾞",17,"뾱",7],["9781","뾹",11,"뿆",5,"뿎뿏뿑뿒뿓뿕",6,"뿝뿞뿠뿢",89,"쀽쀾쀿"],["9841","쁀",16,"쁒",5,"쁙쁚쁛"],["9861","쁝쁞쁟쁡",6,"쁪",15],["9881","쁺",21,"삒삓삕삖삗삙",6,"삢삤삦",5,"삮삱삲삷",4,"삾샂샃샄샆샇샊샋샍샎샏샑",6,"샚샞",5,"샦샧샩샪샫샭",6,"샶샸샺",5,"섁섂섃섅섆섇섉",6,"섑섒섓섔섖",5,"섡섢섥섨섩섪섫섮"],["9941","섲섳섴섵섷섺섻섽섾섿셁",6,"셊셎",5,"셖셗"],["9961","셙셚셛셝",6,"셦셪",5,"셱셲셳셵셶셷셹셺셻"],["9981","셼",8,"솆",5,"솏솑솒솓솕솗",4,"솞솠솢솣솤솦솧솪솫솭솮솯솱",11,"솾",5,"쇅쇆쇇쇉쇊쇋쇍",6,"쇕쇖쇙",6,"쇡쇢쇣쇥쇦쇧쇩",6,"쇲쇴",7,"쇾쇿숁숂숃숅",6,"숎숐숒",5,"숚숛숝숞숡숢숣"],["9a41","숤숥숦숧숪숬숮숰숳숵",16],["9a61","쉆쉇쉉",6,"쉒쉓쉕쉖쉗쉙",6,"쉡쉢쉣쉤쉦"],["9a81","쉧",4,"쉮쉯쉱쉲쉳쉵",6,"쉾슀슂",5,"슊",5,"슑",6,"슙슚슜슞",5,"슦슧슩슪슫슮",5,"슶슸슺",33,"싞싟싡싢싥",5,"싮싰싲싳싴싵싷싺싽싾싿쌁",6,"쌊쌋쌎쌏"],["9b41","쌐쌑쌒쌖쌗쌙쌚쌛쌝",6,"쌦쌧쌪",8],["9b61","쌳",17,"썆",7],["9b81","썎",25,"썪썫썭썮썯썱썳",4,"썺썻썾",5,"쎅쎆쎇쎉쎊쎋쎍",50,"쏁",22,"쏚"],["9c41","쏛쏝쏞쏡쏣",4,"쏪쏫쏬쏮",5,"쏶쏷쏹",5],["9c61","쏿",8,"쐉",6,"쐑",9],["9c81","쐛",8,"쐥",6,"쐭쐮쐯쐱쐲쐳쐵",6,"쐾",9,"쑉",26,"쑦쑧쑩쑪쑫쑭",6,"쑶쑷쑸쑺",5,"쒁",18,"쒕",6,"쒝",12],["9d41","쒪",13,"쒹쒺쒻쒽",8],["9d61","쓆",25],["9d81","쓠",8,"쓪",5,"쓲쓳쓵쓶쓷쓹쓻쓼쓽쓾씂",9,"씍씎씏씑씒씓씕",6,"씝",10,"씪씫씭씮씯씱",6,"씺씼씾",5,"앆앇앋앏앐앑앒앖앚앛앜앟앢앣앥앦앧앩",6,"앲앶",5,"앾앿얁얂얃얅얆얈얉얊얋얎얐얒얓얔"],["9e41","얖얙얚얛얝얞얟얡",7,"얪",9,"얶"],["9e61","얷얺얿",4,"엋엍엏엒엓엕엖엗엙",6,"엢엤엦엧"],["9e81","엨엩엪엫엯엱엲엳엵엸엹엺엻옂옃옄옉옊옋옍옎옏옑",6,"옚옝",6,"옦옧옩옪옫옯옱옲옶옸옺옼옽옾옿왂왃왅왆왇왉",6,"왒왖",5,"왞왟왡",10,"왭왮왰왲",5,"왺왻왽왾왿욁",6,"욊욌욎",5,"욖욗욙욚욛욝",6,"욦"],["9f41","욨욪",5,"욲욳욵욶욷욻",4,"웂웄웆",5,"웎"],["9f61","웏웑웒웓웕",6,"웞웟웢",5,"웪웫웭웮웯웱웲"],["9f81","웳",4,"웺웻웼웾",5,"윆윇윉윊윋윍",6,"윖윘윚",5,"윢윣윥윦윧윩",6,"윲윴윶윸윹윺윻윾윿읁읂읃읅",4,"읋읎읐읙읚읛읝읞읟읡",6,"읩읪읬",7,"읶읷읹읺읻읿잀잁잂잆잋잌잍잏잒잓잕잙잛",4,"잢잧",4,"잮잯잱잲잳잵잶잷"],["a041","잸잹잺잻잾쟂",5,"쟊쟋쟍쟏쟑",6,"쟙쟚쟛쟜"],["a061","쟞",5,"쟥쟦쟧쟩쟪쟫쟭",13],["a081","쟻",4,"젂젃젅젆젇젉젋",4,"젒젔젗",4,"젞젟젡젢젣젥",6,"젮젰젲",5,"젹젺젻젽젾젿졁",6,"졊졋졎",5,"졕",26,"졲졳졵졶졷졹졻",4,"좂좄좈좉좊좎",5,"좕",7,"좞좠좢좣좤"],["a141","좥좦좧좩",18,"좾좿죀죁"],["a161","죂죃죅죆죇죉죊죋죍",6,"죖죘죚",5,"죢죣죥"],["a181","죦",14,"죶",5,"죾죿줁줂줃줇",4,"줎　、。·‥…¨〃­―∥＼∼‘’“”〔〕〈",9,"±×÷≠≤≥∞∴°′″℃Å￠￡￥♂♀∠⊥⌒∂∇≡≒§※☆★○●◎◇◆□■△▲▽▼→←↑↓↔〓≪≫√∽∝∵∫∬∈∋⊆⊇⊂⊃∪∩∧∨￢"],["a241","줐줒",5,"줙",18],["a261","줭",6,"줵",18],["a281","쥈",7,"쥒쥓쥕쥖쥗쥙",6,"쥢쥤",7,"쥭쥮쥯⇒⇔∀∃´～ˇ˘˝˚˙¸˛¡¿ː∮∑∏¤℉‰◁◀▷▶♤♠♡♥♧♣⊙◈▣◐◑▒▤▥▨▧▦▩♨☏☎☜☞¶†‡↕↗↙↖↘♭♩♪♬㉿㈜№㏇™㏂㏘℡€®"],["a341","쥱쥲쥳쥵",6,"쥽",10,"즊즋즍즎즏"],["a361","즑",6,"즚즜즞",16],["a381","즯",16,"짂짃짅짆짉짋",4,"짒짔짗짘짛！",58,"￦］",32,"￣"],["a441","짞짟짡짣짥짦짨짩짪짫짮짲",5,"짺짻짽짾짿쨁쨂쨃쨄"],["a461","쨅쨆쨇쨊쨎",5,"쨕쨖쨗쨙",12],["a481","쨦쨧쨨쨪",28,"ㄱ",93],["a541","쩇",4,"쩎쩏쩑쩒쩓쩕",6,"쩞쩢",5,"쩩쩪"],["a561","쩫",17,"쩾",5,"쪅쪆"],["a581","쪇",16,"쪙",14,"ⅰ",9],["a5b0","Ⅰ",9],["a5c1","Α",16,"Σ",6],["a5e1","α",16,"σ",6],["a641","쪨",19,"쪾쪿쫁쫂쫃쫅"],["a661","쫆",5,"쫎쫐쫒쫔쫕쫖쫗쫚",5,"쫡",6],["a681","쫨쫩쫪쫫쫭",6,"쫵",18,"쬉쬊─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂┒┑┚┙┖┕┎┍┞┟┡┢┦┧┩┪┭┮┱┲┵┶┹┺┽┾╀╁╃",7],["a741","쬋",4,"쬑쬒쬓쬕쬖쬗쬙",6,"쬢",7],["a761","쬪",22,"쭂쭃쭄"],["a781","쭅쭆쭇쭊쭋쭍쭎쭏쭑",6,"쭚쭛쭜쭞",5,"쭥",7,"㎕㎖㎗ℓ㎘㏄㎣㎤㎥㎦㎙",9,"㏊㎍㎎㎏㏏㎈㎉㏈㎧㎨㎰",9,"㎀",4,"㎺",5,"㎐",4,"Ω㏀㏁㎊㎋㎌㏖㏅㎭㎮㎯㏛㎩㎪㎫㎬㏝㏐㏓㏃㏉㏜㏆"],["a841","쭭",10,"쭺",14],["a861","쮉",18,"쮝",6],["a881","쮤",19,"쮹",11,"ÆÐªĦ"],["a8a6","Ĳ"],["a8a8","ĿŁØŒºÞŦŊ"],["a8b1","㉠",27,"ⓐ",25,"①",14,"½⅓⅔¼¾⅛⅜⅝⅞"],["a941","쯅",14,"쯕",10],["a961","쯠쯡쯢쯣쯥쯦쯨쯪",18],["a981","쯽",14,"찎찏찑찒찓찕",6,"찞찟찠찣찤æđðħıĳĸŀłøœßþŧŋŉ㈀",27,"⒜",25,"⑴",14,"¹²³⁴ⁿ₁₂₃₄"],["aa41","찥찦찪찫찭찯찱",6,"찺찿",4,"챆챇챉챊챋챍챎"],["aa61","챏",4,"챖챚",5,"챡챢챣챥챧챩",6,"챱챲"],["aa81","챳챴챶",29,"ぁ",82],["ab41","첔첕첖첗첚첛첝첞첟첡",6,"첪첮",5,"첶첷첹"],["ab61","첺첻첽",6,"쳆쳈쳊",5,"쳑쳒쳓쳕",5],["ab81","쳛",8,"쳥",6,"쳭쳮쳯쳱",12,"ァ",85],["ac41","쳾쳿촀촂",5,"촊촋촍촎촏촑",6,"촚촜촞촟촠"],["ac61","촡촢촣촥촦촧촩촪촫촭",11,"촺",4],["ac81","촿",28,"쵝쵞쵟А",5,"ЁЖ",25],["acd1","а",5,"ёж",25],["ad41","쵡쵢쵣쵥",6,"쵮쵰쵲",5,"쵹",7],["ad61","춁",6,"춉",10,"춖춗춙춚춛춝춞춟"],["ad81","춠춡춢춣춦춨춪",5,"춱",18,"췅"],["ae41","췆",5,"췍췎췏췑",16],["ae61","췢",5,"췩췪췫췭췮췯췱",6,"췺췼췾",4],["ae81","츃츅츆츇츉츊츋츍",6,"츕츖츗츘츚",5,"츢츣츥츦츧츩츪츫"],["af41","츬츭츮츯츲츴츶",19],["af61","칊",13,"칚칛칝칞칢",5,"칪칬"],["af81","칮",5,"칶칷칹칺칻칽",6,"캆캈캊",5,"캒캓캕캖캗캙"],["b041","캚",5,"캢캦",5,"캮",12],["b061","캻",5,"컂",19],["b081","컖",13,"컦컧컩컪컭",6,"컶컺",5,"가각간갇갈갉갊감",7,"같",4,"갠갤갬갭갯갰갱갸갹갼걀걋걍걔걘걜거걱건걷걸걺검겁것겄겅겆겉겊겋게겐겔겜겝겟겠겡겨격겪견겯결겸겹겻겼경곁계곈곌곕곗고곡곤곧골곪곬곯곰곱곳공곶과곽관괄괆"],["b141","켂켃켅켆켇켉",6,"켒켔켖",5,"켝켞켟켡켢켣"],["b161","켥",6,"켮켲",5,"켹",11],["b181","콅",14,"콖콗콙콚콛콝",6,"콦콨콪콫콬괌괍괏광괘괜괠괩괬괭괴괵괸괼굄굅굇굉교굔굘굡굣구국군굳굴굵굶굻굼굽굿궁궂궈궉권궐궜궝궤궷귀귁귄귈귐귑귓규균귤그극근귿글긁금급긋긍긔기긱긴긷길긺김깁깃깅깆깊까깍깎깐깔깖깜깝깟깠깡깥깨깩깬깰깸"],["b241","콭콮콯콲콳콵콶콷콹",6,"쾁쾂쾃쾄쾆",5,"쾍"],["b261","쾎",18,"쾢",5,"쾩"],["b281","쾪",5,"쾱",18,"쿅",6,"깹깻깼깽꺄꺅꺌꺼꺽꺾껀껄껌껍껏껐껑께껙껜껨껫껭껴껸껼꼇꼈꼍꼐꼬꼭꼰꼲꼴꼼꼽꼿꽁꽂꽃꽈꽉꽐꽜꽝꽤꽥꽹꾀꾄꾈꾐꾑꾕꾜꾸꾹꾼꿀꿇꿈꿉꿋꿍꿎꿔꿜꿨꿩꿰꿱꿴꿸뀀뀁뀄뀌뀐뀔뀜뀝뀨끄끅끈끊끌끎끓끔끕끗끙"],["b341","쿌",19,"쿢쿣쿥쿦쿧쿩"],["b361","쿪",5,"쿲쿴쿶",5,"쿽쿾쿿퀁퀂퀃퀅",5],["b381","퀋",5,"퀒",5,"퀙",19,"끝끼끽낀낄낌낍낏낑나낙낚난낟날낡낢남납낫",4,"낱낳내낵낸낼냄냅냇냈냉냐냑냔냘냠냥너넉넋넌널넒넓넘넙넛넜넝넣네넥넨넬넴넵넷넸넹녀녁년녈념녑녔녕녘녜녠노녹논놀놂놈놉놋농높놓놔놘놜놨뇌뇐뇔뇜뇝"],["b441","퀮",5,"퀶퀷퀹퀺퀻퀽",6,"큆큈큊",5],["b461","큑큒큓큕큖큗큙",6,"큡",10,"큮큯"],["b481","큱큲큳큵",6,"큾큿킀킂",18,"뇟뇨뇩뇬뇰뇹뇻뇽누눅눈눋눌눔눕눗눙눠눴눼뉘뉜뉠뉨뉩뉴뉵뉼늄늅늉느늑는늘늙늚늠늡늣능늦늪늬늰늴니닉닌닐닒님닙닛닝닢다닥닦단닫",4,"닳담답닷",4,"닿대댁댄댈댐댑댓댔댕댜더덕덖던덛덜덞덟덤덥"],["b541","킕",14,"킦킧킩킪킫킭",5],["b561","킳킶킸킺",5,"탂탃탅탆탇탊",5,"탒탖",4],["b581","탛탞탟탡탢탣탥",6,"탮탲",5,"탹",11,"덧덩덫덮데덱덴델뎀뎁뎃뎄뎅뎌뎐뎔뎠뎡뎨뎬도독돈돋돌돎돐돔돕돗동돛돝돠돤돨돼됐되된될됨됩됫됴두둑둔둘둠둡둣둥둬뒀뒈뒝뒤뒨뒬뒵뒷뒹듀듄듈듐듕드득든듣들듦듬듭듯등듸디딕딘딛딜딤딥딧딨딩딪따딱딴딸"],["b641","턅",7,"턎",17],["b661","턠",15,"턲턳턵턶턷턹턻턼턽턾"],["b681","턿텂텆",5,"텎텏텑텒텓텕",6,"텞텠텢",5,"텩텪텫텭땀땁땃땄땅땋때땍땐땔땜땝땟땠땡떠떡떤떨떪떫떰떱떳떴떵떻떼떽뗀뗄뗌뗍뗏뗐뗑뗘뗬또똑똔똘똥똬똴뙈뙤뙨뚜뚝뚠뚤뚫뚬뚱뛔뛰뛴뛸뜀뜁뜅뜨뜩뜬뜯뜰뜸뜹뜻띄띈띌띔띕띠띤띨띰띱띳띵라락란랄람랍랏랐랑랒랖랗"],["b741","텮",13,"텽",6,"톅톆톇톉톊"],["b761","톋",20,"톢톣톥톦톧"],["b781","톩",6,"톲톴톶톷톸톹톻톽톾톿퇁",14,"래랙랜랠램랩랫랬랭랴략랸럇량러럭런럴럼럽럿렀렁렇레렉렌렐렘렙렛렝려력련렬렴렵렷렸령례롄롑롓로록론롤롬롭롯롱롸롼뢍뢨뢰뢴뢸룀룁룃룅료룐룔룝룟룡루룩룬룰룸룹룻룽뤄뤘뤠뤼뤽륀륄륌륏륑류륙륜률륨륩"],["b841","퇐",7,"퇙",17],["b861","퇫",8,"퇵퇶퇷퇹",13],["b881","툈툊",5,"툑",24,"륫륭르륵른를름릅릇릉릊릍릎리릭린릴림립릿링마막만많",4,"맘맙맛망맞맡맣매맥맨맬맴맵맷맸맹맺먀먁먈먕머먹먼멀멂멈멉멋멍멎멓메멕멘멜멤멥멧멨멩며멱면멸몃몄명몇몌모목몫몬몰몲몸몹못몽뫄뫈뫘뫙뫼"],["b941","툪툫툮툯툱툲툳툵",6,"툾퉀퉂",5,"퉉퉊퉋퉌"],["b961","퉍",14,"퉝",6,"퉥퉦퉧퉨"],["b981","퉩",22,"튂튃튅튆튇튉튊튋튌묀묄묍묏묑묘묜묠묩묫무묵묶문묻물묽묾뭄뭅뭇뭉뭍뭏뭐뭔뭘뭡뭣뭬뮈뮌뮐뮤뮨뮬뮴뮷므믄믈믐믓미믹민믿밀밂밈밉밋밌밍및밑바",4,"받",4,"밤밥밧방밭배백밴밸뱀뱁뱃뱄뱅뱉뱌뱍뱐뱝버벅번벋벌벎범법벗"],["ba41","튍튎튏튒튓튔튖",5,"튝튞튟튡튢튣튥",6,"튭"],["ba61","튮튯튰튲",5,"튺튻튽튾틁틃",4,"틊틌",5],["ba81","틒틓틕틖틗틙틚틛틝",6,"틦",9,"틲틳틵틶틷틹틺벙벚베벡벤벧벨벰벱벳벴벵벼벽변별볍볏볐병볕볘볜보복볶본볼봄봅봇봉봐봔봤봬뵀뵈뵉뵌뵐뵘뵙뵤뵨부북분붇불붉붊붐붑붓붕붙붚붜붤붰붸뷔뷕뷘뷜뷩뷰뷴뷸븀븃븅브븍븐블븜븝븟비빅빈빌빎빔빕빗빙빚빛빠빡빤"],["bb41","틻",4,"팂팄팆",5,"팏팑팒팓팕팗",4,"팞팢팣"],["bb61","팤팦팧팪팫팭팮팯팱",6,"팺팾",5,"퍆퍇퍈퍉"],["bb81","퍊",31,"빨빪빰빱빳빴빵빻빼빽뺀뺄뺌뺍뺏뺐뺑뺘뺙뺨뻐뻑뻔뻗뻘뻠뻣뻤뻥뻬뼁뼈뼉뼘뼙뼛뼜뼝뽀뽁뽄뽈뽐뽑뽕뾔뾰뿅뿌뿍뿐뿔뿜뿟뿡쀼쁑쁘쁜쁠쁨쁩삐삑삔삘삠삡삣삥사삭삯산삳살삵삶삼삽삿샀상샅새색샌샐샘샙샛샜생샤"],["bc41","퍪",17,"퍾퍿펁펂펃펅펆펇"],["bc61","펈펉펊펋펎펒",5,"펚펛펝펞펟펡",6,"펪펬펮"],["bc81","펯",4,"펵펶펷펹펺펻펽",6,"폆폇폊",5,"폑",5,"샥샨샬샴샵샷샹섀섄섈섐섕서",4,"섣설섦섧섬섭섯섰성섶세섹센셀셈셉셋셌셍셔셕션셜셤셥셧셨셩셰셴셸솅소속솎손솔솖솜솝솟송솥솨솩솬솰솽쇄쇈쇌쇔쇗쇘쇠쇤쇨쇰쇱쇳쇼쇽숀숄숌숍숏숑수숙순숟술숨숩숫숭"],["bd41","폗폙",7,"폢폤",7,"폮폯폱폲폳폵폶폷"],["bd61","폸폹폺폻폾퐀퐂",5,"퐉",13],["bd81","퐗",5,"퐞",25,"숯숱숲숴쉈쉐쉑쉔쉘쉠쉥쉬쉭쉰쉴쉼쉽쉿슁슈슉슐슘슛슝스슥슨슬슭슴습슷승시식신싣실싫심십싯싱싶싸싹싻싼쌀쌈쌉쌌쌍쌓쌔쌕쌘쌜쌤쌥쌨쌩썅써썩썬썰썲썸썹썼썽쎄쎈쎌쏀쏘쏙쏜쏟쏠쏢쏨쏩쏭쏴쏵쏸쐈쐐쐤쐬쐰"],["be41","퐸",7,"푁푂푃푅",14],["be61","푔",7,"푝푞푟푡푢푣푥",7,"푮푰푱푲"],["be81","푳",4,"푺푻푽푾풁풃",4,"풊풌풎",5,"풕",8,"쐴쐼쐽쑈쑤쑥쑨쑬쑴쑵쑹쒀쒔쒜쒸쒼쓩쓰쓱쓴쓸쓺쓿씀씁씌씐씔씜씨씩씬씰씸씹씻씽아악안앉않알앍앎앓암압앗았앙앝앞애액앤앨앰앱앳앴앵야약얀얄얇얌얍얏양얕얗얘얜얠얩어억언얹얻얼얽얾엄",6,"엌엎"],["bf41","풞",10,"풪",14],["bf61","풹",18,"퓍퓎퓏퓑퓒퓓퓕"],["bf81","퓖",5,"퓝퓞퓠",7,"퓩퓪퓫퓭퓮퓯퓱",6,"퓹퓺퓼에엑엔엘엠엡엣엥여역엮연열엶엷염",5,"옅옆옇예옌옐옘옙옛옜오옥온올옭옮옰옳옴옵옷옹옻와왁완왈왐왑왓왔왕왜왝왠왬왯왱외왹왼욀욈욉욋욍요욕욘욜욤욥욧용우욱운울욹욺움웁웃웅워웍원월웜웝웠웡웨"],["c041","퓾",5,"픅픆픇픉픊픋픍",6,"픖픘",5],["c061","픞",25],["c081","픸픹픺픻픾픿핁핂핃핅",6,"핎핐핒",5,"핚핛핝핞핟핡핢핣웩웬웰웸웹웽위윅윈윌윔윕윗윙유육윤율윰윱윳융윷으윽은을읊음읍읏응",7,"읜읠읨읫이익인일읽읾잃임입잇있잉잊잎자작잔잖잗잘잚잠잡잣잤장잦재잭잰잴잼잽잿쟀쟁쟈쟉쟌쟎쟐쟘쟝쟤쟨쟬저적전절젊"],["c141","핤핦핧핪핬핮",5,"핶핷핹핺핻핽",6,"햆햊햋"],["c161","햌햍햎햏햑",19,"햦햧"],["c181","햨",31,"점접젓정젖제젝젠젤젬젭젯젱져젼졀졈졉졌졍졔조족존졸졺좀좁좃종좆좇좋좌좍좔좝좟좡좨좼좽죄죈죌죔죕죗죙죠죡죤죵주죽준줄줅줆줌줍줏중줘줬줴쥐쥑쥔쥘쥠쥡쥣쥬쥰쥴쥼즈즉즌즐즘즙즛증지직진짇질짊짐집짓"],["c241","헊헋헍헎헏헑헓",4,"헚헜헞",5,"헦헧헩헪헫헭헮"],["c261","헯",4,"헶헸헺",5,"혂혃혅혆혇혉",6,"혒"],["c281","혖",5,"혝혞혟혡혢혣혥",7,"혮",9,"혺혻징짖짙짚짜짝짠짢짤짧짬짭짯짰짱째짹짼쨀쨈쨉쨋쨌쨍쨔쨘쨩쩌쩍쩐쩔쩜쩝쩟쩠쩡쩨쩽쪄쪘쪼쪽쫀쫄쫌쫍쫏쫑쫓쫘쫙쫠쫬쫴쬈쬐쬔쬘쬠쬡쭁쭈쭉쭌쭐쭘쭙쭝쭤쭸쭹쮜쮸쯔쯤쯧쯩찌찍찐찔찜찝찡찢찧차착찬찮찰참찹찻"],["c341","혽혾혿홁홂홃홄홆홇홊홌홎홏홐홒홓홖홗홙홚홛홝",4],["c361","홢",4,"홨홪",5,"홲홳홵",11],["c381","횁횂횄횆",5,"횎횏횑횒횓횕",7,"횞횠횢",5,"횩횪찼창찾채책챈챌챔챕챗챘챙챠챤챦챨챰챵처척천철첨첩첫첬청체첵첸첼쳄쳅쳇쳉쳐쳔쳤쳬쳰촁초촉촌촐촘촙촛총촤촨촬촹최쵠쵤쵬쵭쵯쵱쵸춈추축춘출춤춥춧충춰췄췌췐취췬췰췸췹췻췽츄츈츌츔츙츠측츤츨츰츱츳층"],["c441","횫횭횮횯횱",7,"횺횼",7,"훆훇훉훊훋"],["c461","훍훎훏훐훒훓훕훖훘훚",5,"훡훢훣훥훦훧훩",4],["c481","훮훯훱훲훳훴훶",5,"훾훿휁휂휃휅",11,"휒휓휔치칙친칟칠칡침칩칫칭카칵칸칼캄캅캇캉캐캑캔캘캠캡캣캤캥캬캭컁커컥컨컫컬컴컵컷컸컹케켁켄켈켐켑켓켕켜켠켤켬켭켯켰켱켸코콕콘콜콤콥콧콩콰콱콴콸쾀쾅쾌쾡쾨쾰쿄쿠쿡쿤쿨쿰쿱쿳쿵쿼퀀퀄퀑퀘퀭퀴퀵퀸퀼"],["c541","휕휖휗휚휛휝휞휟휡",6,"휪휬휮",5,"휶휷휹"],["c561","휺휻휽",6,"흅흆흈흊",5,"흒흓흕흚",4],["c581","흟흢흤흦흧흨흪흫흭흮흯흱흲흳흵",6,"흾흿힀힂",5,"힊힋큄큅큇큉큐큔큘큠크큭큰클큼큽킁키킥킨킬킴킵킷킹타탁탄탈탉탐탑탓탔탕태택탠탤탬탭탯탰탱탸턍터턱턴털턺텀텁텃텄텅테텍텐텔템텝텟텡텨텬텼톄톈토톡톤톨톰톱톳통톺톼퇀퇘퇴퇸툇툉툐투툭툰툴툼툽툿퉁퉈퉜"],["c641","힍힎힏힑",6,"힚힜힞",5],["c6a1","퉤튀튁튄튈튐튑튕튜튠튤튬튱트특튼튿틀틂틈틉틋틔틘틜틤틥티틱틴틸팀팁팃팅파팍팎판팔팖팜팝팟팠팡팥패팩팬팰팸팹팻팼팽퍄퍅퍼퍽펀펄펌펍펏펐펑페펙펜펠펨펩펫펭펴편펼폄폅폈평폐폘폡폣포폭폰폴폼폽폿퐁"],["c7a1","퐈퐝푀푄표푠푤푭푯푸푹푼푿풀풂품풉풋풍풔풩퓌퓐퓔퓜퓟퓨퓬퓰퓸퓻퓽프픈플픔픕픗피픽핀필핌핍핏핑하학한할핥함합핫항해핵핸핼햄햅햇했행햐향허헉헌헐헒험헙헛헝헤헥헨헬헴헵헷헹혀혁현혈혐협혓혔형혜혠"],["c8a1","혤혭호혹혼홀홅홈홉홋홍홑화확환활홧황홰홱홴횃횅회획횐횔횝횟횡효횬횰횹횻후훅훈훌훑훔훗훙훠훤훨훰훵훼훽휀휄휑휘휙휜휠휨휩휫휭휴휵휸휼흄흇흉흐흑흔흖흗흘흙흠흡흣흥흩희흰흴흼흽힁히힉힌힐힘힙힛힝"],["caa1","伽佳假價加可呵哥嘉嫁家暇架枷柯歌珂痂稼苛茄街袈訶賈跏軻迦駕刻却各恪慤殼珏脚覺角閣侃刊墾奸姦干幹懇揀杆柬桿澗癎看磵稈竿簡肝艮艱諫間乫喝曷渴碣竭葛褐蝎鞨勘坎堪嵌感憾戡敢柑橄減甘疳監瞰紺邯鑑鑒龕"],["cba1","匣岬甲胛鉀閘剛堈姜岡崗康强彊慷江畺疆糠絳綱羌腔舡薑襁講鋼降鱇介价個凱塏愷愾慨改槪漑疥皆盖箇芥蓋豈鎧開喀客坑更粳羹醵倨去居巨拒据據擧渠炬祛距踞車遽鉅鋸乾件健巾建愆楗腱虔蹇鍵騫乞傑杰桀儉劍劒檢"],["cca1","瞼鈐黔劫怯迲偈憩揭擊格檄激膈覡隔堅牽犬甄絹繭肩見譴遣鵑抉決潔結缺訣兼慊箝謙鉗鎌京俓倞傾儆勁勍卿坰境庚徑慶憬擎敬景暻更梗涇炅烱璟璥瓊痙硬磬竟競絅經耕耿脛莖警輕逕鏡頃頸驚鯨係啓堺契季屆悸戒桂械"],["cda1","棨溪界癸磎稽系繫繼計誡谿階鷄古叩告呱固姑孤尻庫拷攷故敲暠枯槁沽痼皐睾稿羔考股膏苦苽菰藁蠱袴誥賈辜錮雇顧高鼓哭斛曲梏穀谷鵠困坤崑昆梱棍滾琨袞鯤汨滑骨供公共功孔工恐恭拱控攻珙空蚣貢鞏串寡戈果瓜"],["cea1","科菓誇課跨過鍋顆廓槨藿郭串冠官寬慣棺款灌琯瓘管罐菅觀貫關館刮恝括适侊光匡壙廣曠洸炚狂珖筐胱鑛卦掛罫乖傀塊壞怪愧拐槐魁宏紘肱轟交僑咬喬嬌嶠巧攪敎校橋狡皎矯絞翹膠蕎蛟較轎郊餃驕鮫丘久九仇俱具勾"],["cfa1","區口句咎嘔坵垢寇嶇廐懼拘救枸柩構歐毆毬求溝灸狗玖球瞿矩究絿耉臼舅舊苟衢謳購軀逑邱鉤銶駒驅鳩鷗龜國局菊鞠鞫麴君窘群裙軍郡堀屈掘窟宮弓穹窮芎躬倦券勸卷圈拳捲權淃眷厥獗蕨蹶闕机櫃潰詭軌饋句晷歸貴"],["d0a1","鬼龜叫圭奎揆槻珪硅窺竅糾葵規赳逵閨勻均畇筠菌鈞龜橘克剋劇戟棘極隙僅劤勤懃斤根槿瑾筋芹菫覲謹近饉契今妗擒昑檎琴禁禽芩衾衿襟金錦伋及急扱汲級給亘兢矜肯企伎其冀嗜器圻基埼夔奇妓寄岐崎己幾忌技旗旣"],["d1a1","朞期杞棋棄機欺氣汽沂淇玘琦琪璂璣畸畿碁磯祁祇祈祺箕紀綺羈耆耭肌記譏豈起錡錤飢饑騎騏驥麒緊佶吉拮桔金喫儺喇奈娜懦懶拏拿癩",5,"那樂",4,"諾酪駱亂卵暖欄煖爛蘭難鸞捏捺南嵐枏楠湳濫男藍襤拉"],["d2a1","納臘蠟衲囊娘廊",4,"乃來內奈柰耐冷女年撚秊念恬拈捻寧寗努勞奴弩怒擄櫓爐瑙盧",5,"駑魯",10,"濃籠聾膿農惱牢磊腦賂雷尿壘",7,"嫩訥杻紐勒",5,"能菱陵尼泥匿溺多茶"],["d3a1","丹亶但單團壇彖斷旦檀段湍短端簞緞蛋袒鄲鍛撻澾獺疸達啖坍憺擔曇淡湛潭澹痰聃膽蕁覃談譚錟沓畓答踏遝唐堂塘幢戇撞棠當糖螳黨代垈坮大對岱帶待戴擡玳臺袋貸隊黛宅德悳倒刀到圖堵塗導屠島嶋度徒悼挑掉搗桃"],["d4a1","棹櫂淘渡滔濤燾盜睹禱稻萄覩賭跳蹈逃途道都鍍陶韜毒瀆牘犢獨督禿篤纛讀墩惇敦旽暾沌焞燉豚頓乭突仝冬凍動同憧東桐棟洞潼疼瞳童胴董銅兜斗杜枓痘竇荳讀豆逗頭屯臀芚遁遯鈍得嶝橙燈登等藤謄鄧騰喇懶拏癩羅"],["d5a1","蘿螺裸邏樂洛烙珞絡落諾酪駱丹亂卵欄欒瀾爛蘭鸞剌辣嵐擥攬欖濫籃纜藍襤覽拉臘蠟廊朗浪狼琅瑯螂郞來崍徠萊冷掠略亮倆兩凉梁樑粮粱糧良諒輛量侶儷勵呂廬慮戾旅櫚濾礪藜蠣閭驢驪麗黎力曆歷瀝礫轢靂憐戀攣漣"],["d6a1","煉璉練聯蓮輦連鍊冽列劣洌烈裂廉斂殮濂簾獵令伶囹寧岺嶺怜玲笭羚翎聆逞鈴零靈領齡例澧禮醴隷勞怒撈擄櫓潞瀘爐盧老蘆虜路輅露魯鷺鹵碌祿綠菉錄鹿麓論壟弄朧瀧瓏籠聾儡瀨牢磊賂賚賴雷了僚寮廖料燎療瞭聊蓼"],["d7a1","遼鬧龍壘婁屢樓淚漏瘻累縷蔞褸鏤陋劉旒柳榴流溜瀏琉瑠留瘤硫謬類六戮陸侖倫崙淪綸輪律慄栗率隆勒肋凜凌楞稜綾菱陵俚利厘吏唎履悧李梨浬犁狸理璃異痢籬罹羸莉裏裡里釐離鯉吝潾燐璘藺躪隣鱗麟林淋琳臨霖砬"],["d8a1","立笠粒摩瑪痲碼磨馬魔麻寞幕漠膜莫邈万卍娩巒彎慢挽晩曼滿漫灣瞞萬蔓蠻輓饅鰻唜抹末沫茉襪靺亡妄忘忙望網罔芒茫莽輞邙埋妹媒寐昧枚梅每煤罵買賣邁魅脈貊陌驀麥孟氓猛盲盟萌冪覓免冕勉棉沔眄眠綿緬面麵滅"],["d9a1","蔑冥名命明暝椧溟皿瞑茗蓂螟酩銘鳴袂侮冒募姆帽慕摸摹暮某模母毛牟牡瑁眸矛耗芼茅謀謨貌木沐牧目睦穆鶩歿沒夢朦蒙卯墓妙廟描昴杳渺猫竗苗錨務巫憮懋戊拇撫无楙武毋無珷畝繆舞茂蕪誣貿霧鵡墨默們刎吻問文"],["daa1","汶紊紋聞蚊門雯勿沕物味媚尾嵋彌微未梶楣渼湄眉米美薇謎迷靡黴岷悶愍憫敏旻旼民泯玟珉緡閔密蜜謐剝博拍搏撲朴樸泊珀璞箔粕縛膊舶薄迫雹駁伴半反叛拌搬攀斑槃泮潘班畔瘢盤盼磐磻礬絆般蟠返頒飯勃拔撥渤潑"],["dba1","發跋醱鉢髮魃倣傍坊妨尨幇彷房放方旁昉枋榜滂磅紡肪膀舫芳蒡蚌訪謗邦防龐倍俳北培徘拜排杯湃焙盃背胚裴裵褙賠輩配陪伯佰帛柏栢白百魄幡樊煩燔番磻繁蕃藩飜伐筏罰閥凡帆梵氾汎泛犯範范法琺僻劈壁擘檗璧癖"],["dca1","碧蘗闢霹便卞弁變辨辯邊別瞥鱉鼈丙倂兵屛幷昞昺柄棅炳甁病秉竝輧餠騈保堡報寶普步洑湺潽珤甫菩補褓譜輔伏僕匐卜宓復服福腹茯蔔複覆輹輻馥鰒本乶俸奉封峯峰捧棒烽熢琫縫蓬蜂逢鋒鳳不付俯傅剖副否咐埠夫婦"],["dda1","孚孵富府復扶敷斧浮溥父符簿缶腐腑膚艀芙莩訃負賦賻赴趺部釜阜附駙鳧北分吩噴墳奔奮忿憤扮昐汾焚盆粉糞紛芬賁雰不佛弗彿拂崩朋棚硼繃鵬丕備匕匪卑妃婢庇悲憊扉批斐枇榧比毖毗毘沸泌琵痺砒碑秕秘粃緋翡肥"],["dea1","脾臂菲蜚裨誹譬費鄙非飛鼻嚬嬪彬斌檳殯浜濱瀕牝玭貧賓頻憑氷聘騁乍事些仕伺似使俟僿史司唆嗣四士奢娑寫寺射巳師徙思捨斜斯柶査梭死沙泗渣瀉獅砂社祀祠私篩紗絲肆舍莎蓑蛇裟詐詞謝賜赦辭邪飼駟麝削數朔索"],["dfa1","傘刪山散汕珊産疝算蒜酸霰乷撒殺煞薩三參杉森渗芟蔘衫揷澁鈒颯上傷像償商喪嘗孀尙峠常床庠廂想桑橡湘爽牀狀相祥箱翔裳觴詳象賞霜塞璽賽嗇塞穡索色牲生甥省笙墅壻嶼序庶徐恕抒捿敍暑曙書栖棲犀瑞筮絮緖署"],["e0a1","胥舒薯西誓逝鋤黍鼠夕奭席惜昔晳析汐淅潟石碩蓆釋錫仙僊先善嬋宣扇敾旋渲煽琁瑄璇璿癬禪線繕羨腺膳船蘚蟬詵跣選銑鐥饍鮮卨屑楔泄洩渫舌薛褻設說雪齧剡暹殲纖蟾贍閃陝攝涉燮葉城姓宬性惺成星晟猩珹盛省筬"],["e1a1","聖聲腥誠醒世勢歲洗稅笹細說貰召嘯塑宵小少巢所掃搔昭梳沼消溯瀟炤燒甦疏疎瘙笑篠簫素紹蔬蕭蘇訴逍遡邵銷韶騷俗屬束涑粟續謖贖速孫巽損蓀遜飡率宋悚松淞訟誦送頌刷殺灑碎鎖衰釗修受嗽囚垂壽嫂守岫峀帥愁"],["e2a1","戍手授搜收數樹殊水洙漱燧狩獸琇璲瘦睡秀穗竪粹綏綬繡羞脩茱蒐蓚藪袖誰讐輸遂邃酬銖銹隋隧隨雖需須首髓鬚叔塾夙孰宿淑潚熟琡璹肅菽巡徇循恂旬栒楯橓殉洵淳珣盾瞬筍純脣舜荀蓴蕣詢諄醇錞順馴戌術述鉥崇崧"],["e3a1","嵩瑟膝蝨濕拾習褶襲丞乘僧勝升承昇繩蠅陞侍匙嘶始媤尸屎屍市弑恃施是時枾柴猜矢示翅蒔蓍視試詩諡豕豺埴寔式息拭植殖湜熄篒蝕識軾食飾伸侁信呻娠宸愼新晨燼申神紳腎臣莘薪藎蜃訊身辛辰迅失室實悉審尋心沁"],["e4a1","沈深瀋甚芯諶什十拾雙氏亞俄兒啞娥峨我牙芽莪蛾衙訝阿雅餓鴉鵝堊岳嶽幄惡愕握樂渥鄂鍔顎鰐齷安岸按晏案眼雁鞍顔鮟斡謁軋閼唵岩巖庵暗癌菴闇壓押狎鴨仰央怏昻殃秧鴦厓哀埃崖愛曖涯碍艾隘靄厄扼掖液縊腋額"],["e5a1","櫻罌鶯鸚也倻冶夜惹揶椰爺耶若野弱掠略約若葯蒻藥躍亮佯兩凉壤孃恙揚攘敭暘梁楊樣洋瀁煬痒瘍禳穰糧羊良襄諒讓釀陽量養圄御於漁瘀禦語馭魚齬億憶抑檍臆偃堰彦焉言諺孼蘖俺儼嚴奄掩淹嶪業円予余勵呂女如廬"],["e6a1","旅歟汝濾璵礖礪與艅茹輿轝閭餘驪麗黎亦力域役易曆歷疫繹譯轢逆驛嚥堧姸娟宴年延憐戀捐挻撚椽沇沿涎涓淵演漣烟然煙煉燃燕璉硏硯秊筵緣練縯聯衍軟輦蓮連鉛鍊鳶列劣咽悅涅烈熱裂說閱厭廉念捻染殮炎焰琰艶苒"],["e7a1","簾閻髥鹽曄獵燁葉令囹塋寧嶺嶸影怜映暎楹榮永泳渶潁濚瀛瀯煐營獰玲瑛瑩瓔盈穎纓羚聆英詠迎鈴鍈零霙靈領乂倪例刈叡曳汭濊猊睿穢芮藝蘂禮裔詣譽豫醴銳隸霓預五伍俉傲午吾吳嗚塢墺奧娛寤悟惡懊敖旿晤梧汚澳"],["e8a1","烏熬獒筽蜈誤鰲鼇屋沃獄玉鈺溫瑥瘟穩縕蘊兀壅擁瓮甕癰翁邕雍饔渦瓦窩窪臥蛙蝸訛婉完宛梡椀浣玩琓琬碗緩翫脘腕莞豌阮頑曰往旺枉汪王倭娃歪矮外嵬巍猥畏了僚僥凹堯夭妖姚寥寮尿嶢拗搖撓擾料曜樂橈燎燿瑤療"],["e9a1","窈窯繇繞耀腰蓼蟯要謠遙遼邀饒慾欲浴縟褥辱俑傭冗勇埇墉容庸慂榕涌湧溶熔瑢用甬聳茸蓉踊鎔鏞龍于佑偶優又友右宇寓尤愚憂旴牛玗瑀盂祐禑禹紆羽芋藕虞迂遇郵釪隅雨雩勖彧旭昱栯煜稶郁頊云暈橒殞澐熉耘芸蕓"],["eaa1","運隕雲韻蔚鬱亐熊雄元原員圓園垣媛嫄寃怨愿援沅洹湲源爰猿瑗苑袁轅遠阮院願鴛月越鉞位偉僞危圍委威尉慰暐渭爲瑋緯胃萎葦蔿蝟衛褘謂違韋魏乳侑儒兪劉唯喩孺宥幼幽庾悠惟愈愉揄攸有杻柔柚柳楡楢油洧流游溜"],["eba1","濡猶猷琉瑜由留癒硫紐維臾萸裕誘諛諭踰蹂遊逾遺酉釉鍮類六堉戮毓肉育陸倫允奫尹崙淪潤玧胤贇輪鈗閏律慄栗率聿戎瀜絨融隆垠恩慇殷誾銀隱乙吟淫蔭陰音飮揖泣邑凝應膺鷹依倚儀宜意懿擬椅毅疑矣義艤薏蟻衣誼"],["eca1","議醫二以伊利吏夷姨履已弛彛怡易李梨泥爾珥理異痍痢移罹而耳肄苡荑裏裡貽貳邇里離飴餌匿溺瀷益翊翌翼謚人仁刃印吝咽因姻寅引忍湮燐璘絪茵藺蚓認隣靭靷鱗麟一佚佾壹日溢逸鎰馹任壬妊姙恁林淋稔臨荏賃入卄"],["eda1","立笠粒仍剩孕芿仔刺咨姉姿子字孜恣慈滋炙煮玆瓷疵磁紫者自茨蔗藉諮資雌作勺嚼斫昨灼炸爵綽芍酌雀鵲孱棧殘潺盞岑暫潛箴簪蠶雜丈仗匠場墻壯奬將帳庄張掌暲杖樟檣欌漿牆狀獐璋章粧腸臟臧莊葬蔣薔藏裝贓醬長"],["eea1","障再哉在宰才材栽梓渽滓災縡裁財載齋齎爭箏諍錚佇低儲咀姐底抵杵楮樗沮渚狙猪疽箸紵苧菹著藷詛貯躇這邸雎齟勣吊嫡寂摘敵滴狄炙的積笛籍績翟荻謫賊赤跡蹟迪迹適鏑佃佺傳全典前剪塡塼奠專展廛悛戰栓殿氈澱"],["efa1","煎琠田甸畑癲筌箋箭篆纏詮輾轉鈿銓錢鐫電顚顫餞切截折浙癤竊節絶占岾店漸点粘霑鮎點接摺蝶丁井亭停偵呈姃定幀庭廷征情挺政整旌晶晸柾楨檉正汀淀淨渟湞瀞炡玎珽町睛碇禎程穽精綎艇訂諪貞鄭酊釘鉦鋌錠霆靖"],["f0a1","靜頂鼎制劑啼堤帝弟悌提梯濟祭第臍薺製諸蹄醍除際霽題齊俎兆凋助嘲弔彫措操早晁曺曹朝條棗槽漕潮照燥爪璪眺祖祚租稠窕粗糟組繰肇藻蚤詔調趙躁造遭釣阻雕鳥族簇足鏃存尊卒拙猝倧宗從悰慫棕淙琮種終綜縱腫"],["f1a1","踪踵鍾鐘佐坐左座挫罪主住侏做姝胄呪周嗾奏宙州廚晝朱柱株注洲湊澍炷珠疇籌紂紬綢舟蛛註誅走躊輳週酎酒鑄駐竹粥俊儁准埈寯峻晙樽浚準濬焌畯竣蠢逡遵雋駿茁中仲衆重卽櫛楫汁葺增憎曾拯烝甑症繒蒸證贈之只"],["f2a1","咫地址志持指摯支旨智枝枳止池沚漬知砥祉祗紙肢脂至芝芷蜘誌識贄趾遲直稙稷織職唇嗔塵振搢晉晋桭榛殄津溱珍瑨璡畛疹盡眞瞋秦縉縝臻蔯袗診賑軫辰進鎭陣陳震侄叱姪嫉帙桎瓆疾秩窒膣蛭質跌迭斟朕什執潗緝輯"],["f3a1","鏶集徵懲澄且侘借叉嗟嵯差次此磋箚茶蹉車遮捉搾着窄錯鑿齪撰澯燦璨瓚竄簒纂粲纘讚贊鑽餐饌刹察擦札紮僭參塹慘慙懺斬站讒讖倉倡創唱娼廠彰愴敞昌昶暢槍滄漲猖瘡窓脹艙菖蒼債埰寀寨彩採砦綵菜蔡采釵冊柵策"],["f4a1","責凄妻悽處倜刺剔尺慽戚拓擲斥滌瘠脊蹠陟隻仟千喘天川擅泉淺玔穿舛薦賤踐遷釧闡阡韆凸哲喆徹撤澈綴輟轍鐵僉尖沾添甛瞻簽籤詹諂堞妾帖捷牒疊睫諜貼輒廳晴淸聽菁請靑鯖切剃替涕滯締諦逮遞體初剿哨憔抄招梢"],["f5a1","椒楚樵炒焦硝礁礎秒稍肖艸苕草蕉貂超酢醋醮促囑燭矗蜀觸寸忖村邨叢塚寵悤憁摠總聰蔥銃撮催崔最墜抽推椎楸樞湫皺秋芻萩諏趨追鄒酋醜錐錘鎚雛騶鰍丑畜祝竺筑築縮蓄蹙蹴軸逐春椿瑃出朮黜充忠沖蟲衝衷悴膵萃"],["f6a1","贅取吹嘴娶就炊翠聚脆臭趣醉驟鷲側仄厠惻測層侈値嗤峙幟恥梔治淄熾痔痴癡稚穉緇緻置致蚩輜雉馳齒則勅飭親七柒漆侵寢枕沈浸琛砧針鍼蟄秤稱快他咤唾墮妥惰打拖朶楕舵陀馱駝倬卓啄坼度托拓擢晫柝濁濯琢琸託"],["f7a1","鐸呑嘆坦彈憚歎灘炭綻誕奪脫探眈耽貪塔搭榻宕帑湯糖蕩兌台太怠態殆汰泰笞胎苔跆邰颱宅擇澤撑攄兎吐土討慟桶洞痛筒統通堆槌腿褪退頹偸套妬投透鬪慝特闖坡婆巴把播擺杷波派爬琶破罷芭跛頗判坂板版瓣販辦鈑"],["f8a1","阪八叭捌佩唄悖敗沛浿牌狽稗覇貝彭澎烹膨愎便偏扁片篇編翩遍鞭騙貶坪平枰萍評吠嬖幣廢弊斃肺蔽閉陛佈包匍匏咆哺圃布怖抛抱捕暴泡浦疱砲胞脯苞葡蒲袍褒逋鋪飽鮑幅暴曝瀑爆輻俵剽彪慓杓標漂瓢票表豹飇飄驃"],["f9a1","品稟楓諷豊風馮彼披疲皮被避陂匹弼必泌珌畢疋筆苾馝乏逼下何厦夏廈昰河瑕荷蝦賀遐霞鰕壑學虐謔鶴寒恨悍旱汗漢澣瀚罕翰閑閒限韓割轄函含咸啣喊檻涵緘艦銜陷鹹合哈盒蛤閤闔陜亢伉姮嫦巷恒抗杭桁沆港缸肛航"],["faa1","行降項亥偕咳垓奚孩害懈楷海瀣蟹解該諧邂駭骸劾核倖幸杏荇行享向嚮珦鄕響餉饗香噓墟虛許憲櫶獻軒歇險驗奕爀赫革俔峴弦懸晛泫炫玄玹現眩睍絃絢縣舷衒見賢鉉顯孑穴血頁嫌俠協夾峽挾浹狹脅脇莢鋏頰亨兄刑型"],["fba1","形泂滎瀅灐炯熒珩瑩荊螢衡逈邢鎣馨兮彗惠慧暳蕙蹊醯鞋乎互呼壕壺好岵弧戶扈昊晧毫浩淏湖滸澔濠濩灝狐琥瑚瓠皓祜糊縞胡芦葫蒿虎號蝴護豪鎬頀顥惑或酷婚昏混渾琿魂忽惚笏哄弘汞泓洪烘紅虹訌鴻化和嬅樺火畵"],["fca1","禍禾花華話譁貨靴廓擴攫確碻穫丸喚奐宦幻患換歡晥桓渙煥環紈還驩鰥活滑猾豁闊凰幌徨恍惶愰慌晃晄榥況湟滉潢煌璜皇篁簧荒蝗遑隍黃匯回廻徊恢悔懷晦會檜淮澮灰獪繪膾茴蛔誨賄劃獲宖橫鐄哮嚆孝效斅曉梟涍淆"],["fda1","爻肴酵驍侯候厚后吼喉嗅帿後朽煦珝逅勛勳塤壎焄熏燻薰訓暈薨喧暄煊萱卉喙毁彙徽揮暉煇諱輝麾休携烋畦虧恤譎鷸兇凶匈洶胸黑昕欣炘痕吃屹紇訖欠欽歆吸恰洽翕興僖凞喜噫囍姬嬉希憙憘戱晞曦熙熹熺犧禧稀羲詰"]]')
}, function(e) {
    e.exports = JSON.parse('[["8740","䏰䰲䘃䖦䕸𧉧䵷䖳𧲱䳢𧳅㮕䜶䝄䱇䱀𤊿𣘗𧍒𦺋𧃒䱗𪍑䝏䗚䲅𧱬䴇䪤䚡𦬣爥𥩔𡩣𣸆𣽡晍囻"],["8767","綕夝𨮹㷴霴𧯯寛𡵞媤㘥𩺰嫑宷峼杮薓𩥅瑡璝㡵𡵓𣚞𦀡㻬"],["87a1","𥣞㫵竼龗𤅡𨤍𣇪𠪊𣉞䌊蒄龖鐯䤰蘓墖靊鈘秐稲晠権袝瑌篅枂稬剏遆㓦珄𥶹瓆鿇垳䤯呌䄱𣚎堘穲𧭥讏䚮𦺈䆁𥶙箮𢒼鿈𢓁𢓉𢓌鿉蔄𣖻䂴鿊䓡𪷿拁灮鿋"],["8840","㇀",4,"𠄌㇅𠃑𠃍㇆㇇𠃋𡿨㇈𠃊㇉㇊㇋㇌𠄎㇍㇎ĀÁǍÀĒÉĚÈŌÓǑÒ࿿Ê̄Ế࿿Ê̌ỀÊāáǎàɑēéěèīíǐìōóǒòūúǔùǖǘǚ"],["88a1","ǜü࿿ê̄ế࿿ê̌ềêɡ⏚⏛"],["8940","𪎩𡅅"],["8943","攊"],["8946","丽滝鵎釟"],["894c","𧜵撑会伨侨兖兴农凤务动医华发变团声处备夲头学实実岚庆总斉柾栄桥济炼电纤纬纺织经统缆缷艺苏药视设询车轧轮"],["89a1","琑糼緍楆竉刧"],["89ab","醌碸酞肼"],["89b0","贋胶𠧧"],["89b5","肟黇䳍鷉鸌䰾𩷶𧀎鸊𪄳㗁"],["89c1","溚舾甙"],["89c5","䤑马骏龙禇𨑬𡷊𠗐𢫦两亁亀亇亿仫伷㑌侽㹈倃傈㑽㒓㒥円夅凛凼刅争剹劐匧㗇厩㕑厰㕓参吣㕭㕲㚁咓咣咴咹哐哯唘唣唨㖘唿㖥㖿嗗㗅"],["8a40","𧶄唥"],["8a43","𠱂𠴕𥄫喐𢳆㧬𠍁蹆𤶸𩓥䁓𨂾睺𢰸㨴䟕𨅝𦧲𤷪擝𠵼𠾴𠳕𡃴撍蹾𠺖𠰋𠽤𢲩𨉖𤓓"],["8a64","𠵆𩩍𨃩䟴𤺧𢳂骲㩧𩗴㿭㔆𥋇𩟔𧣈𢵄鵮頕"],["8a76","䏙𦂥撴哣𢵌𢯊𡁷㧻𡁯"],["8aa1","𦛚𦜖𧦠擪𥁒𠱃蹨𢆡𨭌𠜱"],["8aac","䠋𠆩㿺塳𢶍"],["8ab2","𤗈𠓼𦂗𠽌𠶖啹䂻䎺"],["8abb","䪴𢩦𡂝膪飵𠶜捹㧾𢝵跀嚡摼㹃"],["8ac9","𪘁𠸉𢫏𢳉"],["8ace","𡃈𣧂㦒㨆𨊛㕸𥹉𢃇噒𠼱𢲲𩜠㒼氽𤸻"],["8adf","𧕴𢺋𢈈𪙛𨳍𠹺𠰴𦠜羓𡃏𢠃𢤹㗻𥇣𠺌𠾍𠺪㾓𠼰𠵇𡅏𠹌"],["8af6","𠺫𠮩𠵈𡃀𡄽㿹𢚖搲𠾭"],["8b40","𣏴𧘹𢯎𠵾𠵿𢱑𢱕㨘𠺘𡃇𠼮𪘲𦭐𨳒𨶙𨳊閪哌苄喹"],["8b55","𩻃鰦骶𧝞𢷮煀腭胬尜𦕲脴㞗卟𨂽醶𠻺𠸏𠹷𠻻㗝𤷫㘉𠳖嚯𢞵𡃉𠸐𠹸𡁸𡅈𨈇𡑕𠹹𤹐𢶤婔𡀝𡀞𡃵𡃶垜𠸑"],["8ba1","𧚔𨋍𠾵𠹻𥅾㜃𠾶𡆀𥋘𪊽𤧚𡠺𤅷𨉼墙剨㘚𥜽箲孨䠀䬬鼧䧧鰟鮍𥭴𣄽嗻㗲嚉丨夂𡯁屮靑𠂆乛亻㔾尣彑忄㣺扌攵歺氵氺灬爫丬犭𤣩罒礻糹罓𦉪㓁"],["8bde","𦍋耂肀𦘒𦥑卝衤见𧢲讠贝钅镸长门𨸏韦页风飞饣𩠐鱼鸟黄歯龜丷𠂇阝户钢"],["8c40","倻淾𩱳龦㷉袏𤅎灷峵䬠𥇍㕙𥴰愢𨨲辧釶熑朙玺𣊁𪄇㲋𡦀䬐磤琂冮𨜏䀉橣𪊺䈣蘏𠩯稪𩥇𨫪靕灍匤𢁾鏴盙𨧣龧矝亣俰傼丯众龨吴綋墒壐𡶶庒庙忂𢜒斋"],["8ca1","𣏹椙橃𣱣泿"],["8ca7","爀𤔅玌㻛𤨓嬕璹讃𥲤𥚕窓篬糃繬苸薗龩袐龪躹龫迏蕟駠鈡龬𨶹𡐿䁱䊢娚"],["8cc9","顨杫䉶圽"],["8cce","藖𤥻芿𧄍䲁𦵴嵻𦬕𦾾龭龮宖龯曧繛湗秊㶈䓃𣉖𢞖䎚䔶"],["8ce6","峕𣬚諹屸㴒𣕑嵸龲煗䕘𤃬𡸣䱷㥸㑊𠆤𦱁諌侴𠈹妿腬顖𩣺弻"],["8d40","𠮟"],["8d42","𢇁𨥭䄂䚻𩁹㼇龳𪆵䃸㟖䛷𦱆䅼𨚲𧏿䕭㣔𥒚䕡䔛䶉䱻䵶䗪㿈𤬏㙡䓞䒽䇭崾嵈嵖㷼㠏嶤嶹㠠㠸幂庽弥徃㤈㤔㤿㥍惗愽峥㦉憷憹懏㦸戬抐拥挘㧸嚱"],["8da1","㨃揢揻搇摚㩋擀崕嘡龟㪗斆㪽旿晓㫲暒㬢朖㭂枤栀㭘桊梄㭲㭱㭻椉楃牜楤榟榅㮼槖㯝橥橴橱檂㯬檙㯲檫檵櫔櫶殁毁毪汵沪㳋洂洆洦涁㳯涤涱渕渘温溆𨧀溻滢滚齿滨滩漤漴㵆𣽁澁澾㵪㵵熷岙㶊瀬㶑灐灔灯灿炉𠌥䏁㗱𠻘"],["8e40","𣻗垾𦻓焾𥟠㙎榢𨯩孴穉𥣡𩓙穥穽𥦬窻窰竂竃燑𦒍䇊竚竝竪䇯咲𥰁笋筕笩𥌎𥳾箢筯莜𥮴𦱿篐萡箒箸𥴠㶭𥱥蒒篺簆簵𥳁籄粃𤢂粦晽𤕸糉糇糦籴糳糵糎"],["8ea1","繧䔝𦹄絝𦻖璍綉綫焵綳緒𤁗𦀩緤㴓緵𡟹緥𨍭縝𦄡𦅚繮纒䌫鑬縧罀罁罇礶𦋐駡羗𦍑羣𡙡𠁨䕜𣝦䔃𨌺翺𦒉者耈耝耨耯𪂇𦳃耻耼聡𢜔䦉𦘦𣷣𦛨朥肧𨩈脇脚墰𢛶汿𦒘𤾸擧𡒊舘𡡞橓𤩥𤪕䑺舩𠬍𦩒𣵾俹𡓽蓢荢𦬊𤦧𣔰𡝳𣷸芪椛芳䇛"],["8f40","蕋苐茚𠸖𡞴㛁𣅽𣕚艻苢茘𣺋𦶣𦬅𦮗𣗎㶿茝嗬莅䔋𦶥莬菁菓㑾𦻔橗蕚㒖𦹂𢻯葘𥯤葱㷓䓤檧葊𣲵祘蒨𦮖𦹷𦹃蓞萏莑䒠蒓蓤𥲑䉀𥳀䕃蔴嫲𦺙䔧蕳䔖枿蘖"],["8fa1","𨘥𨘻藁𧂈蘂𡖂𧃍䕫䕪蘨㙈𡢢号𧎚虾蝱𪃸蟮𢰧螱蟚蠏噡虬桖䘏衅衆𧗠𣶹𧗤衞袜䙛袴袵揁装睷𧜏覇覊覦覩覧覼𨨥觧𧤤𧪽誜瞓釾誐𧩙竩𧬺𣾏䜓𧬸煼謌謟𥐰𥕥謿譌譍誩𤩺讐讛誯𡛟䘕衏貛𧵔𧶏貫㜥𧵓賖𧶘𧶽贒贃𡤐賛灜贑𤳉㻐起"],["9040","趩𨀂𡀔𤦊㭼𨆼𧄌竧躭躶軃鋔輙輭𨍥𨐒辥錃𪊟𠩐辳䤪𨧞𨔽𣶻廸𣉢迹𪀔𨚼𨔁𢌥㦀𦻗逷𨔼𧪾遡𨕬𨘋邨𨜓郄𨛦邮都酧㫰醩釄粬𨤳𡺉鈎沟鉁鉢𥖹銹𨫆𣲛𨬌𥗛"],["90a1","𠴱錬鍫𨫡𨯫炏嫃𨫢𨫥䥥鉄𨯬𨰹𨯿鍳鑛躼閅閦鐦閠濶䊹𢙺𨛘𡉼𣸮䧟氜陻隖䅬隣𦻕懚隶磵𨫠隽双䦡𦲸𠉴𦐐𩂯𩃥𤫑𡤕𣌊霱虂霶䨏䔽䖅𤫩灵孁霛靜𩇕靗孊𩇫靟鐥僐𣂷𣂼鞉鞟鞱鞾韀韒韠𥑬韮琜𩐳響韵𩐝𧥺䫑頴頳顋顦㬎𧅵㵑𠘰𤅜"],["9140","𥜆飊颷飈飇䫿𦴧𡛓喰飡飦飬鍸餹𤨩䭲𩡗𩤅駵騌騻騐驘𥜥㛄𩂱𩯕髠髢𩬅髴䰎鬔鬭𨘀倴鬴𦦨㣃𣁽魐魀𩴾婅𡡣鮎𤉋鰂鯿鰌𩹨鷔𩾷𪆒𪆫𪃡𪄣𪇟鵾鶃𪄴鸎梈"],["91a1","鷄𢅛𪆓𪈠𡤻𪈳鴹𪂹𪊴麐麕麞麢䴴麪麯𤍤黁㭠㧥㴝伲㞾𨰫鼂鼈䮖鐤𦶢鼗鼖鼹嚟嚊齅馸𩂋韲葿齢齩竜龎爖䮾𤥵𤦻煷𤧸𤍈𤩑玞𨯚𡣺禟𨥾𨸶鍩鏳𨩄鋬鎁鏋𨥬𤒹爗㻫睲穃烐𤑳𤏸煾𡟯炣𡢾𣖙㻇𡢅𥐯𡟸㜢𡛻𡠹㛡𡝴𡣑𥽋㜣𡛀坛𤨥𡏾𡊨"],["9240","𡏆𡒶蔃𣚦蔃葕𤦔𧅥𣸱𥕜𣻻𧁒䓴𣛮𩦝𦼦柹㜳㰕㷧塬𡤢栐䁗𣜿𤃡𤂋𤄏𦰡哋嚞𦚱嚒𠿟𠮨𠸍鏆𨬓鎜仸儫㠙𤐶亼𠑥𠍿佋侊𥙑婨𠆫𠏋㦙𠌊𠐔㐵伩𠋀𨺳𠉵諚𠈌亘"],["92a1","働儍侢伃𤨎𣺊佂倮偬傁俌俥偘僼兙兛兝兞湶𣖕𣸹𣺿浲𡢄𣺉冨凃𠗠䓝𠒣𠒒𠒑赺𨪜𠜎剙劤𠡳勡鍮䙺熌𤎌𠰠𤦬𡃤槑𠸝瑹㻞璙琔瑖玘䮎𤪼𤂍叐㖄爏𤃉喴𠍅响𠯆圝鉝雴鍦埝垍坿㘾壋媙𨩆𡛺𡝯𡜐娬妸銏婾嫏娒𥥆𡧳𡡡𤊕㛵洅瑃娡𥺃"],["9340","媁𨯗𠐓鏠璌𡌃焅䥲鐈𨧻鎽㞠尞岞幞幈𡦖𡥼𣫮廍孏𡤃𡤄㜁𡢠㛝𡛾㛓脪𨩇𡶺𣑲𨦨弌弎𡤧𡞫婫𡜻孄蘔𧗽衠恾𢡠𢘫忛㺸𢖯𢖾𩂈𦽳懀𠀾𠁆𢘛憙憘恵𢲛𢴇𤛔𩅍"],["93a1","摱𤙥𢭪㨩𢬢𣑐𩣪𢹸挷𪑛撶挱揑𤧣𢵧护𢲡搻敫楲㯴𣂎𣊭𤦉𣊫唍𣋠𡣙𩐿曎𣊉𣆳㫠䆐𥖄𨬢𥖏𡛼𥕛𥐥磮𣄃𡠪𣈴㑤𣈏𣆂𤋉暎𦴤晫䮓昰𧡰𡷫晣𣋒𣋡昞𥡲㣑𣠺𣞼㮙𣞢𣏾瓐㮖枏𤘪梶栞㯄檾㡣𣟕𤒇樳橒櫉欅𡤒攑梘橌㯗橺歗𣿀𣲚鎠鋲𨯪𨫋"],["9440","銉𨀞𨧜鑧涥漋𤧬浧𣽿㶏渄𤀼娽渊塇洤硂焻𤌚𤉶烱牐犇犔𤞏𤜥兹𤪤𠗫瑺𣻸𣙟𤩊𤤗𥿡㼆㺱𤫟𨰣𣼵悧㻳瓌琼鎇琷䒟𦷪䕑疃㽣𤳙𤴆㽘畕癳𪗆㬙瑨𨫌𤦫𤦎㫻"],["94a1","㷍𤩎㻿𤧅𤣳釺圲鍂𨫣𡡤僟𥈡𥇧睸𣈲眎眏睻𤚗𣞁㩞𤣰琸璛㺿𤪺𤫇䃈𤪖𦆮錇𥖁砞碍碈磒珐祙𧝁𥛣䄎禛蒖禥樭𣻺稺秴䅮𡛦䄲鈵秱𠵌𤦌𠊙𣶺𡝮㖗啫㕰㚪𠇔𠰍竢婙𢛵𥪯𥪜娍𠉛磰娪𥯆竾䇹籝籭䈑𥮳𥺼𥺦糍𤧹𡞰粎籼粮檲緜縇緓罎𦉡"],["9540","𦅜𧭈綗𥺂䉪𦭵𠤖柖𠁎𣗏埄𦐒𦏸𤥢翝笧𠠬𥫩𥵃笌𥸎駦虅驣樜𣐿㧢𤧷𦖭騟𦖠蒀𧄧𦳑䓪脷䐂胆脉腂𦞴飃𦩂艢艥𦩑葓𦶧蘐𧈛媆䅿𡡀嬫𡢡嫤𡣘蚠蜨𣶏蠭𧐢娂"],["95a1","衮佅袇袿裦襥襍𥚃襔𧞅𧞄𨯵𨯙𨮜𨧹㺭蒣䛵䛏㟲訽訜𩑈彍鈫𤊄旔焩烄𡡅鵭貟賩𧷜妚矃姰䍮㛔踪躧𤰉輰轊䋴汘澻𢌡䢛潹溋𡟚鯩㚵𤤯邻邗啱䤆醻鐄𨩋䁢𨫼鐧𨰝𨰻蓥訫閙閧閗閖𨴴瑅㻂𤣿𤩂𤏪㻧𣈥随𨻧𨹦𨹥㻌𤧭𤩸𣿮琒瑫㻼靁𩂰"],["9640","桇䨝𩂓𥟟靝鍨𨦉𨰦𨬯𦎾銺嬑譩䤼珹𤈛鞛靱餸𠼦巁𨯅𤪲頟𩓚鋶𩗗釥䓀𨭐𤩧𨭤飜𨩅㼀鈪䤥萔餻饍𧬆㷽馛䭯馪驜𨭥𥣈檏騡嫾騯𩣱䮐𩥈馼䮽䮗鍽塲𡌂堢𤦸"],["96a1","𡓨硄𢜟𣶸棅㵽鑘㤧慐𢞁𢥫愇鱏鱓鱻鰵鰐魿鯏𩸭鮟𪇵𪃾鴡䲮𤄄鸘䲰鴌𪆴𪃭𪃳𩤯鶥蒽𦸒𦿟𦮂藼䔳𦶤𦺄𦷰萠藮𦸀𣟗𦁤秢𣖜𣙀䤭𤧞㵢鏛銾鍈𠊿碹鉷鑍俤㑀遤𥕝砽硔碶硋𡝗𣇉𤥁㚚佲濚濙瀞瀞吔𤆵垻壳垊鴖埗焴㒯𤆬燫𦱀𤾗嬨𡞵𨩉"],["9740","愌嫎娋䊼𤒈㜬䭻𨧼鎻鎸𡣖𠼝葲𦳀𡐓𤋺𢰦𤏁妔𣶷𦝁綨𦅛𦂤𤦹𤦋𨧺鋥珢㻩璴𨭣𡢟㻡𤪳櫘珳珻㻖𤨾𤪔𡟙𤩦𠎧𡐤𤧥瑈𤤖炥𤥶銄珦鍟𠓾錱𨫎𨨖鎆𨯧𥗕䤵𨪂煫"],["97a1","𤥃𠳿嚤𠘚𠯫𠲸唂秄𡟺緾𡛂𤩐𡡒䔮鐁㜊𨫀𤦭妰𡢿𡢃𧒄媡㛢𣵛㚰鉟婹𨪁𡡢鍴㳍𠪴䪖㦊僴㵩㵌𡎜煵䋻𨈘渏𩃤䓫浗𧹏灧沯㳖𣿭𣸭渂漌㵯𠏵畑㚼㓈䚀㻚䡱姄鉮䤾轁𨰜𦯀堒埈㛖𡑒烾𤍢𤩱𢿣𡊰𢎽梹楧𡎘𣓥𧯴𣛟𨪃𣟖𣏺𤲟樚𣚭𦲷萾䓟䓎"],["9840","𦴦𦵑𦲂𦿞漗𧄉茽𡜺菭𦲀𧁓𡟛妉媂𡞳婡婱𡤅𤇼㜭姯𡜼㛇熎鎐暚𤊥婮娫𤊓樫𣻹𧜶𤑛𤋊焝𤉙𨧡侰𦴨峂𤓎𧹍𤎽樌𤉖𡌄炦焳𤏩㶥泟勇𤩏繥姫崯㷳彜𤩝𡟟綤萦"],["98a1","咅𣫺𣌀𠈔坾𠣕𠘙㿥𡾞𪊶瀃𩅛嵰玏糓𨩙𩐠俈翧狍猐𧫴猸猹𥛶獁獈㺩𧬘遬燵𤣲珡臶㻊県㻑沢国琙琞琟㻢㻰㻴㻺瓓㼎㽓畂畭畲疍㽼痈痜㿀癍㿗癴㿜発𤽜熈嘣覀塩䀝睃䀹条䁅㗛瞘䁪䁯属瞾矋売砘点砜䂨砹硇硑硦葈𥔵礳栃礲䄃"],["9940","䄉禑禙辻稆込䅧窑䆲窼艹䇄竏竛䇏両筢筬筻簒簛䉠䉺类粜䊌粸䊔糭输烀𠳏総緔緐緽羮羴犟䎗耠耥笹耮耱联㷌垴炠肷胩䏭脌猪脎脒畠脔䐁㬹腖腙腚"],["99a1","䐓堺腼膄䐥膓䐭膥埯臁臤艔䒏芦艶苊苘苿䒰荗险榊萅烵葤惣蒈䔄蒾蓡蓸蔐蔸蕒䔻蕯蕰藠䕷虲蚒蚲蛯际螋䘆䘗袮裿褤襇覑𧥧訩訸誔誴豑賔賲贜䞘塟跃䟭仮踺嗘坔蹱嗵躰䠷軎転軤軭軲辷迁迊迌逳駄䢭飠鈓䤞鈨鉘鉫銱銮銿"],["9a40","鋣鋫鋳鋴鋽鍃鎄鎭䥅䥑麿鐗匁鐝鐭鐾䥪鑔鑹锭関䦧间阳䧥枠䨤靀䨵鞲韂噔䫤惨颹䬙飱塄餎餙冴餜餷饂饝饢䭰駅䮝騼鬏窃魩鮁鯝鯱鯴䱭鰠㝯𡯂鵉鰺"],["9aa1","黾噐鶓鶽鷀鷼银辶鹻麬麱麽黆铜黢黱黸竈齄𠂔𠊷𠎠椚铃妬𠓗塀铁㞹𠗕𠘕𠙶𡚺块煳𠫂𠫍𠮿呪吆𠯋咞𠯻𠰻𠱓𠱥𠱼惧𠲍噺𠲵𠳝𠳭𠵯𠶲𠷈楕鰯螥𠸄𠸎𠻗𠾐𠼭𠹳尠𠾼帋𡁜𡁏𡁶朞𡁻𡂈𡂖㙇𡂿𡃓𡄯𡄻卤蒭𡋣𡍵𡌶讁𡕷𡘙𡟃𡟇乸炻𡠭𡥪"],["9b40","𡨭𡩅𡰪𡱰𡲬𡻈拃𡻕𡼕熘桕𢁅槩㛈𢉼𢏗𢏺𢜪𢡱𢥏苽𢥧𢦓𢫕覥𢫨辠𢬎鞸𢬿顇骽𢱌"],["9b62","𢲈𢲷𥯨𢴈𢴒𢶷𢶕𢹂𢽴𢿌𣀳𣁦𣌟𣏞徱晈暿𧩹𣕧𣗳爁𤦺矗𣘚𣜖纇𠍆墵朎"],["9ba1","椘𣪧𧙗𥿢𣸑𣺹𧗾𢂚䣐䪸𤄙𨪚𤋮𤌍𤀻𤌴𤎖𤩅𠗊凒𠘑妟𡺨㮾𣳿𤐄𤓖垈𤙴㦛𤜯𨗨𩧉㝢𢇃譞𨭎駖𤠒𤣻𤨕爉𤫀𠱸奥𤺥𤾆𠝹軚𥀬劏圿煱𥊙𥐙𣽊𤪧喼𥑆𥑮𦭒釔㑳𥔿𧘲𥕞䜘𥕢𥕦𥟇𤤿𥡝偦㓻𣏌惞𥤃䝼𨥈𥪮𥮉𥰆𡶐垡煑澶𦄂𧰒遖𦆲𤾚譢𦐂𦑊"],["9c40","嵛𦯷輶𦒄𡤜諪𤧶𦒈𣿯𦔒䯀𦖿𦚵𢜛鑥𥟡憕娧晉侻嚹𤔡𦛼乪𤤴陖涏𦲽㘘襷𦞙𦡮𦐑𦡞營𦣇筂𩃀𠨑𦤦鄄𦤹穅鷰𦧺騦𦨭㙟𦑩𠀡禃𦨴𦭛崬𣔙菏𦮝䛐𦲤画补𦶮墶"],["9ca1","㜜𢖍𧁋𧇍㱔𧊀𧊅銁𢅺𧊋錰𧋦𤧐氹钟𧑐𠻸蠧裵𢤦𨑳𡞱溸𤨪𡠠㦤㚹尐秣䔿暶𩲭𩢤襃𧟌𧡘囖䃟𡘊㦡𣜯𨃨𡏅熭荦𧧝𩆨婧䲷𧂯𨦫𧧽𧨊𧬋𧵦𤅺筃祾𨀉澵𪋟樃𨌘厢𦸇鎿栶靝𨅯𨀣𦦵𡏭𣈯𨁈嶅𨰰𨂃圕頣𨥉嶫𤦈斾槕叒𤪥𣾁㰑朶𨂐𨃴𨄮𡾡𨅏"],["9d40","𨆉𨆯𨈚𨌆𨌯𨎊㗊𨑨𨚪䣺揦𨥖砈鉕𨦸䏲𨧧䏟𨧨𨭆𨯔姸𨰉輋𨿅𩃬筑𩄐𩄼㷷𩅞𤫊运犏嚋𩓧𩗩𩖰𩖸𩜲𩣑𩥉𩥪𩧃𩨨𩬎𩵚𩶛纟𩻸𩼣䲤镇𪊓熢𪋿䶑递𪗋䶜𠲜达嗁"],["9da1","辺𢒰边𤪓䔉繿潖檱仪㓤𨬬𧢝㜺躀𡟵𨀤𨭬𨮙𧨾𦚯㷫𧙕𣲷𥘵𥥖亚𥺁𦉘嚿𠹭踎孭𣺈𤲞揞拐𡟶𡡻攰嘭𥱊吚𥌑㷆𩶘䱽嘢嘞罉𥻘奵𣵀蝰东𠿪𠵉𣚺脗鵞贘瘻鱅癎瞹鍅吲腈苷嘥脲萘肽嗪祢噃吖𠺝㗎嘅嗱曱𨋢㘭甴嗰喺咗啲𠱁𠲖廐𥅈𠹶𢱢"],["9e40","𠺢麫絚嗞𡁵抝靭咔賍燶酶揼掹揾啩𢭃鱲𢺳冚㓟𠶧冧呍唞唓癦踭𦢊疱肶蠄螆裇膶萜𡃁䓬猄𤜆宐茋𦢓噻𢛴𧴯𤆣𧵳𦻐𧊶酰𡇙鈈𣳼𪚩𠺬𠻹牦𡲢䝎𤿂𧿹𠿫䃺"],["9ea1","鱝攟𢶠䣳𤟠𩵼𠿬𠸊恢𧖣𠿭"],["9ead","𦁈𡆇熣纎鵐业丄㕷嬍沲卧㚬㧜卽㚥𤘘墚𤭮舭呋垪𥪕𠥹"],["9ec5","㩒𢑥獴𩺬䴉鯭𣳾𩼰䱛𤾩𩖞𩿞葜𣶶𧊲𦞳𣜠挮紥𣻷𣸬㨪逈勌㹴㙺䗩𠒎癀嫰𠺶硺𧼮墧䂿噼鮋嵴癔𪐴麅䳡痹㟻愙𣃚𤏲"],["9ef5","噝𡊩垧𤥣𩸆刴𧂮㖭汊鵼"],["9f40","籖鬹埞𡝬屓擓𩓐𦌵𧅤蚭𠴨𦴢𤫢𠵱"],["9f4f","凾𡼏嶎霃𡷑麁遌笟鬂峑箣扨挵髿篏鬪籾鬮籂粆鰕篼鬉鼗鰛𤤾齚啳寃俽麘俲剠㸆勑坧偖妷帒韈鶫轜呩鞴饀鞺匬愰"],["9fa1","椬叚鰊鴂䰻陁榀傦畆𡝭駚剳"],["9fae","酙隁酜"],["9fb2","酑𨺗捿𦴣櫊嘑醎畺抅𠏼獏籰𥰡𣳽"],["9fc1","𤤙盖鮝个𠳔莾衂"],["9fc9","届槀僭坺刟巵从氱𠇲伹咜哚劚趂㗾弌㗳"],["9fdb","歒酼龥鮗頮颴骺麨麄煺笔"],["9fe7","毺蠘罸"],["9feb","嘠𪙊蹷齓"],["9ff0","跔蹏鸜踁抂𨍽踨蹵竓𤩷稾磘泪詧瘇"],["a040","𨩚鼦泎蟖痃𪊲硓咢贌狢獱謭猂瓱賫𤪻蘯徺袠䒷"],["a055","𡠻𦸅"],["a058","詾𢔛"],["a05b","惽癧髗鵄鍮鮏蟵"],["a063","蠏賷猬霡鮰㗖犲䰇籑饊𦅙慙䰄麖慽"],["a073","坟慯抦戹拎㩜懢厪𣏵捤栂㗒"],["a0a1","嵗𨯂迚𨸹"],["a0a6","僙𡵆礆匲阸𠼻䁥"],["a0ae","矾"],["a0b0","糂𥼚糚稭聦聣絍甅瓲覔舚朌聢𧒆聛瓰脃眤覉𦟌畓𦻑螩蟎臈螌詉貭譃眫瓸蓚㘵榲趦"],["a0d4","覩瑨涹蟁𤀑瓧㷛煶悤憜㳑煢恷"],["a0e2","罱𨬭牐惩䭾删㰘𣳇𥻗𧙖𥔱𡥄𡋾𩤃𦷜𧂭峁𦆭𨨏𣙷𠃮𦡆𤼎䕢嬟𦍌齐麦𦉫"],["a3c0","␀",31,"␡"],["c6a1","①",9,"⑴",9,"ⅰ",9,"丶丿亅亠冂冖冫勹匸卩厶夊宀巛⼳广廴彐彡攴无疒癶辵隶¨ˆヽヾゝゞ〃仝々〆〇ー［］✽ぁ",23],["c740","す",58,"ァアィイ"],["c7a1","ゥ",81,"А",5,"ЁЖ",4],["c840","Л",26,"ёж",25,"⇧↸↹㇏𠃌乚𠂊刂䒑"],["c8a1","龰冈龱𧘇"],["c8cd","￢￤＇＂㈱№℡゛゜⺀⺄⺆⺇⺈⺊⺌⺍⺕⺜⺝⺥⺧⺪⺬⺮⺶⺼⺾⻆⻊⻌⻍⻏⻖⻗⻞⻣"],["c8f5","ʃɐɛɔɵœøŋʊɪ"],["f9fe","￭"],["fa40","𠕇鋛𠗟𣿅蕌䊵珯况㙉𤥂𨧤鍄𡧛苮𣳈砼杄拟𤤳𨦪𠊠𦮳𡌅侫𢓭倈𦴩𧪄𣘀𤪱𢔓倩𠍾徤𠎀𠍇滛𠐟偽儁㑺儎顬㝃萖𤦤𠒇兠𣎴兪𠯿𢃼𠋥𢔰𠖎𣈳𡦃宂蝽𠖳𣲙冲冸"],["faa1","鴴凉减凑㳜凓𤪦决凢卂凭菍椾𣜭彻刋刦刼劵剗劔効勅簕蕂勠蘍𦬓包𨫞啉滙𣾀𠥔𣿬匳卄𠯢泋𡜦栛珕恊㺪㣌𡛨燝䒢卭却𨚫卾卿𡖖𡘓矦厓𨪛厠厫厮玧𥝲㽙玜叁叅汉义埾叙㪫𠮏叠𣿫𢶣叶𠱷吓灹唫晗浛呭𦭓𠵴啝咏咤䞦𡜍𠻝㶴𠵍"],["fb40","𨦼𢚘啇䳭启琗喆喩嘅𡣗𤀺䕒𤐵暳𡂴嘷曍𣊊暤暭噍噏磱囱鞇叾圀囯园𨭦㘣𡉏坆𤆥汮炋坂㚱𦱾埦𡐖堃𡑔𤍣堦𤯵塜墪㕡壠壜𡈼壻寿坃𪅐𤉸鏓㖡够梦㛃湙"],["fba1","𡘾娤啓𡚒蔅姉𠵎𦲁𦴪𡟜姙𡟻𡞲𦶦浱𡠨𡛕姹𦹅媫婣㛦𤦩婷㜈媖瑥嫓𦾡𢕔㶅𡤑㜲𡚸広勐孶斈孼𧨎䀄䡝𠈄寕慠𡨴𥧌𠖥寳宝䴐尅𡭄尓珎尔𡲥𦬨屉䣝岅峩峯嶋𡷹𡸷崐崘嵆𡺤岺巗苼㠭𤤁𢁉𢅳芇㠶㯂帮檊幵幺𤒼𠳓厦亷廐厨𡝱帉廴𨒂"],["fc40","廹廻㢠廼栾鐛弍𠇁弢㫞䢮𡌺强𦢈𢏐彘𢑱彣鞽𦹮彲鍀𨨶徧嶶㵟𥉐𡽪𧃸𢙨釖𠊞𨨩怱暅𡡷㥣㷇㘹垐𢞴祱㹀悞悤悳𤦂𤦏𧩓璤僡媠慤萤慂慈𦻒憁凴𠙖憇宪𣾷"],["fca1","𢡟懓𨮝𩥝懐㤲𢦀𢣁怣慜攞掋𠄘担𡝰拕𢸍捬𤧟㨗搸揸𡎎𡟼撐澊𢸶頔𤂌𥜝擡擥鑻㩦携㩗敍漖𤨨𤨣斅敭敟𣁾斵𤥀䬷旑䃘𡠩无旣忟𣐀昘𣇷𣇸晄𣆤𣆥晋𠹵晧𥇦晳晴𡸽𣈱𨗴𣇈𥌓矅𢣷馤朂𤎜𤨡㬫槺𣟂杞杧杢𤇍𩃭柗䓩栢湐鈼栁𣏦𦶠桝"],["fd40","𣑯槡樋𨫟楳棃𣗍椁椀㴲㨁𣘼㮀枬楡𨩊䋼椶榘㮡𠏉荣傐槹𣙙𢄪橅𣜃檝㯳枱櫈𩆜㰍欝𠤣惞欵歴𢟍溵𣫛𠎵𡥘㝀吡𣭚毡𣻼毜氷𢒋𤣱𦭑汚舦汹𣶼䓅𣶽𤆤𤤌𤤀"],["fda1","𣳉㛥㳫𠴲鮃𣇹𢒑羏样𦴥𦶡𦷫涖浜湼漄𤥿𤂅𦹲蔳𦽴凇沜渝萮𨬡港𣸯瑓𣾂秌湏媑𣁋濸㜍澝𣸰滺𡒗𤀽䕕鏰潄潜㵎潴𩅰㴻澟𤅄濓𤂑𤅕𤀹𣿰𣾴𤄿凟𤅖𤅗𤅀𦇝灋灾炧炁烌烕烖烟䄄㷨熴熖𤉷焫煅媈煊煮岜𤍥煏鍢𤋁焬𤑚𤨧𤨢熺𨯨炽爎"],["fe40","鑂爕夑鑃爤鍁𥘅爮牀𤥴梽牕牗㹕𣁄栍漽犂猪猫𤠣𨠫䣭𨠄猨献珏玪𠰺𦨮珉瑉𤇢𡛧𤨤昣㛅𤦷𤦍𤧻珷琕椃𤨦琹𠗃㻗瑜𢢭瑠𨺲瑇珤瑶莹瑬㜰瑴鏱樬璂䥓𤪌"],["fea1","𤅟𤩹𨮏孆𨰃𡢞瓈𡦈甎瓩甞𨻙𡩋寗𨺬鎅畍畊畧畮𤾂㼄𤴓疎瑝疞疴瘂瘬癑癏癯癶𦏵皐臯㟸𦤑𦤎皡皥皷盌𦾟葢𥂝𥅽𡸜眞眦着撯𥈠睘𣊬瞯𨥤𨥨𡛁矴砉𡍶𤨒棊碯磇磓隥礮𥗠磗礴碱𧘌辸袄𨬫𦂃𢘜禆褀椂禀𥡗禝𧬹礼禩渪𧄦㺨秆𩄍秔"]]')
}, function(e, t, r) {
    "use strict";
    var n = r(6).Buffer;
    e.exports = function(e) {
        var t = e.Transform;

        function r(e, r) {
            this.conv = e, (r = r || {}).decodeStrings = !1, t.call(this, r)
        }

        function i(e, r) {
            this.conv = e, (r = r || {}).encoding = this.encoding = "utf8", t.call(this, r)
        }
        return r.prototype = Object.create(t.prototype, {
            constructor: {
                value: r
            }
        }), r.prototype._transform = function(e, t, r) {
            if ("string" != typeof e) return r(new Error("Iconv encoding stream needs strings as its input."));
            try {
                var n = this.conv.write(e);
                n && n.length && this.push(n), r()
            } catch (e) {
                r(e)
            }
        }, r.prototype._flush = function(e) {
            try {
                var t = this.conv.end();
                t && t.length && this.push(t), e()
            } catch (t) {
                e(t)
            }
        }, r.prototype.collect = function(e) {
            var t = [];
            return this.on("error", e), this.on("data", (function(e) {
                t.push(e)
            })), this.on("end", (function() {
                e(null, n.concat(t))
            })), this
        }, i.prototype = Object.create(t.prototype, {
            constructor: {
                value: i
            }
        }), i.prototype._transform = function(e, t, r) {
            if (!(n.isBuffer(e) || e instanceof Uint8Array)) return r(new Error("Iconv decoding stream needs buffers as its input."));
            try {
                var i = this.conv.write(e);
                i && i.length && this.push(i, this.encoding), r()
            } catch (e) {
                r(e)
            }
        }, i.prototype._flush = function(e) {
            try {
                var t = this.conv.end();
                t && t.length && this.push(t, this.encoding), e()
            } catch (t) {
                e(t)
            }
        }, i.prototype.collect = function(e) {
            var t = "";
            return this.on("error", e), this.on("data", (function(e) {
                t += e
            })), this.on("end", (function() {
                e(null, t)
            })), this
        }, {
            IconvLiteEncoderStream: r,
            IconvLiteDecoderStream: i
        }
    }
}, function(e, t, r) {
    const n = r(147),
        i = [r(158), r(159), r(164), r(170), r(173), r(174), r(176), r(178), r(182)];
    e.exports = n.plugin(i)
}, function(e, t, r) {
    const n = r(48);
    e.exports = n()
}, function(e, t, r) {
    e.exports = function(e, t) {
        t = t || {};
        const r = new i.Collection,
            s = Object.assign({
                debug: () => {},
                info: () => {},
                warn: console.warn,
                error: console.error
            }, t && t.log),
            a = {
                hook: r,
                log: s,
                request: n.defaults(o(t, s, r))
            };
        return e.forEach((e => e(a, t))), a
    };
    const {
        request: n
    } = r(149), i = r(151), o = r(155)
}, function(e, t, r) {
    "use strict";

    function n(e) {
        return e && "object" == typeof e && "default" in e ? e.default : e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(150),
        o = r(10),
        s = n(r(20)),
        a = n(r(44)),
        u = r(11);

    function c(e) {
        (s(e.body) || Array.isArray(e.body)) && (e.body = JSON.stringify(e.body));
        let t, r, n = {};
        return (e.request && e.request.fetch || a)(e.url, Object.assign({
            method: e.method,
            body: e.body,
            headers: e.headers,
            redirect: e.redirect
        }, e.request)).then((i => {
            r = i.url, t = i.status;
            for (const e of i.headers) n[e[0]] = e[1];
            if (204 === t || 205 === t) return;
            if ("HEAD" === e.method) {
                if (t < 400) return;
                throw new u.RequestError(i.statusText, t, {
                    headers: n,
                    request: e
                })
            }
            if (304 === t) throw new u.RequestError("Not modified", t, {
                headers: n,
                request: e
            });
            if (t >= 400) return i.text().then((r => {
                const i = new u.RequestError(r, t, {
                    headers: n,
                    request: e
                });
                try {
                    let e = JSON.parse(i.message);
                    Object.assign(i, e);
                    let t = e.errors;
                    i.message = i.message + ": " + t.map(JSON.stringify).join(", ")
                } catch (e) {}
                throw i
            }));
            const o = i.headers.get("content-type");
            return /application\/json/.test(o) ? i.json() : !o || /^text\/|charset=utf-8$/.test(o) ? i.text() : function(e) {
                return e.arrayBuffer()
            }(i)
        })).then((e => ({
            status: t,
            url: r,
            headers: n,
            data: e
        }))).catch((t => {
            if (t instanceof u.RequestError) throw t;
            throw new u.RequestError(t.message, 500, {
                headers: n,
                request: e
            })
        }))
    }
    const p = function e(t, r) {
        const n = t.defaults(r);
        return Object.assign((function(t, r) {
            const i = n.merge(t, r);
            if (!i.request || !i.request.hook) return c(n.parse(i));
            const o = (e, t) => c(n.parse(n.merge(e, t)));
            return Object.assign(o, {
                endpoint: n,
                defaults: e.bind(null, n)
            }), i.request.hook(o, i)
        }), {
            endpoint: n,
            defaults: e.bind(null, n)
        })
    }(i.endpoint, {
        headers: {
            "user-agent": `octokit-request.js/0.0.0-development ${o.getUserAgent()}`
        }
    });
    t.request = p
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n, i = (n = r(20)) && "object" == typeof n && "default" in n ? n.default : n,
        o = r(10);

    function s(e, t) {
        const r = Object.assign({}, e);
        return Object.keys(t).forEach((n => {
            i(t[n]) ? n in e ? r[n] = s(e[n], t[n]) : Object.assign(r, {
                [n]: t[n]
            }) : Object.assign(r, {
                [n]: t[n]
            })
        })), r
    }

    function a(e, t, r) {
        if ("string" == typeof t) {
            let [e, n] = t.split(" ");
            r = Object.assign(n ? {
                method: e,
                url: n
            } : {
                url: e
            }, r)
        } else r = Object.assign({}, t);
        var n;
        r.headers = (n = r.headers) ? Object.keys(n).reduce(((e, t) => (e[t.toLowerCase()] = n[t], e)), {}) : {};
        const i = s(e || {}, r);
        return e && e.mediaType.previews.length && (i.mediaType.previews = e.mediaType.previews.filter((e => !i.mediaType.previews.includes(e))).concat(i.mediaType.previews)), i.mediaType.previews = i.mediaType.previews.map((e => e.replace(/-preview/, ""))), i
    }
    const u = /\{[^}]+\}/g;

    function c(e) {
        return e.replace(/^\W+|\W+$/g, "").split(/,/)
    }

    function p(e, t) {
        return Object.keys(e).filter((e => !t.includes(e))).reduce(((t, r) => (t[r] = e[r], t)), {})
    }

    function l(e) {
        return e.split(/(%[0-9A-Fa-f]{2})/g).map((function(e) {
            return /%[0-9A-Fa-f]/.test(e) || (e = encodeURI(e).replace(/%5B/g, "[").replace(/%5D/g, "]")), e
        })).join("")
    }

    function d(e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, (function(e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
        }))
    }

    function f(e, t, r) {
        return t = "+" === e || "#" === e ? l(t) : d(t), r ? d(r) + "=" + t : t
    }

    function h(e) {
        return null != e
    }

    function g(e) {
        return ";" === e || "&" === e || "?" === e
    }

    function m(e, t) {
        var r = ["+", "#", ".", "/", ";", "?", "&"];
        return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, (function(e, n, i) {
            if (n) {
                let e = "";
                const i = [];
                if (-1 !== r.indexOf(n.charAt(0)) && (e = n.charAt(0), n = n.substr(1)), n.split(/,/g).forEach((function(r) {
                        var n = /([^:\*]*)(?::(\d+)|(\*))?/.exec(r);
                        i.push(function(e, t, r, n) {
                            var i = e[r],
                                o = [];
                            if (h(i) && "" !== i)
                                if ("string" == typeof i || "number" == typeof i || "boolean" == typeof i) i = i.toString(), n && "*" !== n && (i = i.substring(0, parseInt(n, 10))), o.push(f(t, i, g(t) ? r : ""));
                                else if ("*" === n) Array.isArray(i) ? i.filter(h).forEach((function(e) {
                                o.push(f(t, e, g(t) ? r : ""))
                            })) : Object.keys(i).forEach((function(e) {
                                h(i[e]) && o.push(f(t, i[e], e))
                            }));
                            else {
                                const e = [];
                                Array.isArray(i) ? i.filter(h).forEach((function(r) {
                                    e.push(f(t, r))
                                })) : Object.keys(i).forEach((function(r) {
                                    h(i[r]) && (e.push(d(r)), e.push(f(t, i[r].toString())))
                                })), g(t) ? o.push(d(r) + "=" + e.join(",")) : 0 !== e.length && o.push(e.join(","))
                            } else ";" === t ? h(i) && o.push(d(r)) : "" !== i || "&" !== t && "?" !== t ? "" === i && o.push("") : o.push(d(r) + "=");
                            return o
                        }(t, e, n[1], n[2] || n[3]))
                    })), e && "+" !== e) {
                    var o = ",";
                    return "?" === e ? o = "&" : "#" !== e && (o = e), (0 !== i.length ? e : "") + i.join(o)
                }
                return i.join(",")
            }
            return l(i)
        }))
    }

    function y(e) {
        let t, r = e.method.toUpperCase(),
            n = e.url.replace(/:([a-z]\w+)/g, "{+$1}"),
            i = Object.assign({}, e.headers),
            o = p(e, ["method", "baseUrl", "url", "headers", "request", "mediaType"]);
        const s = function(e) {
            const t = e.match(u);
            return t ? t.map(c).reduce(((e, t) => e.concat(t)), []) : []
        }(n);
        var a;
        n = (a = n, {
            expand: m.bind(null, a)
        }).expand(o), /^http/.test(n) || (n = e.baseUrl + n);
        const l = p(o, Object.keys(e).filter((e => s.includes(e))).concat("baseUrl"));
        if (!/application\/octet-stream/i.test(i.accept) && (e.mediaType.format && (i.accept = i.accept.split(/,/).map((t => t.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, `application/vnd$1$2.${e.mediaType.format}`))).join(",")), e.mediaType.previews.length)) {
            const t = i.accept.match(/[\w-]+(?=-preview)/g) || [];
            i.accept = t.concat(e.mediaType.previews).map((t => `application/vnd.github.${t}-preview${e.mediaType.format?`.${e.mediaType.format}`:"+json"}`)).join(",")
        }
        return ["GET", "HEAD"].includes(r) ? n = function(e, t) {
            const r = /\?/.test(e) ? "&" : "?",
                n = Object.keys(t);
            return 0 === n.length ? e : e + r + n.map((e => "q" === e ? "q=" + t.q.split("+").map(encodeURIComponent).join("+") : `${e}=${encodeURIComponent(t[e])}`)).join("&")
        }(n, l) : "data" in l ? t = l.data : Object.keys(l).length ? t = l : i["content-length"] = 0, i["content-type"] || void 0 === t || (i["content-type"] = "application/json; charset=utf-8"), ["PATCH", "PUT"].includes(r) && void 0 === t && (t = ""), Object.assign({
            method: r,
            url: n,
            headers: i
        }, void 0 !== t ? {
            body: t
        } : null, e.request ? {
            request: e.request
        } : null)
    }

    function b(e, t, r) {
        return y(a(e, t, r))
    }
    const _ = function e(t, r) {
        const n = a(t, r),
            i = b.bind(null, n);
        return Object.assign(i, {
            DEFAULTS: n,
            defaults: e.bind(null, n),
            merge: a.bind(null, n),
            parse: y
        })
    }(null, {
        method: "GET",
        baseUrl: "https://api.github.com",
        headers: {
            accept: "application/vnd.github.v3+json",
            "user-agent": `octokit-endpoint.js/0.0.0-development ${o.getUserAgent()}`
        },
        mediaType: {
            format: "",
            previews: []
        }
    });
    t.endpoint = _
}, function(e, t, r) {
    var n = r(152),
        i = r(153),
        o = r(154),
        s = Function.bind,
        a = s.bind(s);

    function u(e, t, r) {
        var n = a(o, null).apply(null, r ? [t, r] : [t]);
        e.api = {
            remove: n
        }, e.remove = n, ["before", "error", "after", "wrap"].forEach((function(n) {
            var o = r ? [t, n, r] : [t, n];
            e[n] = e.api[n] = a(i, null).apply(null, o)
        }))
    }

    function c() {
        var e = {
                registry: {}
            },
            t = n.bind(null, e);
        return u(t, e), t
    }
    var p = !1;

    function l() {
        return p || (console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'), p = !0), c()
    }
    l.Singular = function() {
        var e = {
                registry: {}
            },
            t = n.bind(null, e, "h");
        return u(t, e, "h"), t
    }.bind(), l.Collection = c.bind(), e.exports = l, e.exports.Hook = l, e.exports.Singular = l.Singular, e.exports.Collection = l.Collection
}, function(e, t) {
    e.exports = function e(t, r, n, i) {
        if ("function" != typeof n) throw new Error("method for before hook must be a function");
        i || (i = {});
        if (Array.isArray(r)) return r.reverse().reduce((function(r, n) {
            return e.bind(null, t, n, r, i)
        }), n)();
        return Promise.resolve().then((function() {
            return t.registry[r] ? t.registry[r].reduce((function(e, t) {
                return t.hook.bind(null, e, i)
            }), n)() : n(i)
        }))
    }
}, function(e, t) {
    e.exports = function(e, t, r, n) {
        var i = n;
        e.registry[r] || (e.registry[r] = []);
        "before" === t && (n = function(e, t) {
            return Promise.resolve().then(i.bind(null, t)).then(e.bind(null, t))
        });
        "after" === t && (n = function(e, t) {
            var r;
            return Promise.resolve().then(e.bind(null, t)).then((function(e) {
                return i(r = e, t)
            })).then((function() {
                return r
            }))
        });
        "error" === t && (n = function(e, t) {
            return Promise.resolve().then(e.bind(null, t)).catch((function(e) {
                return i(e, t)
            }))
        });
        e.registry[r].push({
            hook: n,
            orig: i
        })
    }
}, function(e, t) {
    e.exports = function(e, t, r) {
        if (!e.registry[t]) return;
        var n = e.registry[t].map((function(e) {
            return e.orig
        })).indexOf(r);
        if (-1 === n) return;
        e.registry[t].splice(n, 1)
    }
}, function(e, t, r) {
    e.exports = function(e, t, r) {
        e.headers && (e.headers = Object.keys(e.headers).reduce(((t, r) => (t[r.toLowerCase()] = e.headers[r], t)), {}));
        const o = {
            headers: e.headers || {},
            request: e.request || {},
            mediaType: {
                previews: [],
                format: ""
            }
        };
        e.baseUrl && (o.baseUrl = e.baseUrl);
        e.userAgent && (o.headers["user-agent"] = e.userAgent);
        e.previews && (o.mediaType.previews = e.previews);
        e.timeZone && (o.headers["time-zone"] = e.timeZone);
        e.timeout && (a(t, new n("[@octokit/rest] new Octokit({timeout}) is deprecated. Use {request: {timeout}} instead. See https://github.com/octokit/request.js#request")), o.request.timeout = e.timeout);
        e.agent && (u(t, new n("[@octokit/rest] new Octokit({agent}) is deprecated. Use {request: {agent}} instead. See https://github.com/octokit/request.js#request")), o.request.agent = e.agent);
        e.headers && c(t, new n("[@octokit/rest] new Octokit({headers}) is deprecated. Use {userAgent, previews} instead. See https://github.com/octokit/request.js#request"));
        const p = o.headers["user-agent"],
            l = `octokit.js/${s.version} ${i()}`;
        return o.headers["user-agent"] = [p, l].filter(Boolean).join(" "), o.request.hook = r.bind(null, "request"), o
    };
    const {
        Deprecation: n
    } = r(12), {
        getUserAgent: i
    } = r(10), o = r(8), s = r(156), a = o(((e, t) => e.warn(t))), u = o(((e, t) => e.warn(t))), c = o(((e, t) => e.warn(t)))
}, function(e) {
    e.exports = JSON.parse('{"name":"@octokit/rest","version":"16.33.0","publishConfig":{"access":"public"},"description":"GitHub REST API client for Node.js","keywords":["octokit","github","rest","api-client"],"author":"Gregor Martynus (https://github.com/gr2m)","contributors":[{"name":"Mike de Boer","email":"info@mikedeboer.nl"},{"name":"Fabian Jakobs","email":"fabian@c9.io"},{"name":"Joe Gallo","email":"joe@brassafrax.com"},{"name":"Gregor Martynus","url":"https://github.com/gr2m"}],"repository":"https://github.com/octokit/rest.js","dependencies":{"@octokit/request":"^5.0.0","@octokit/request-error":"^1.0.2","atob-lite":"^2.0.0","before-after-hook":"^2.0.0","btoa-lite":"^1.0.0","deprecation":"^2.0.0","lodash.get":"^4.4.2","lodash.set":"^4.3.2","lodash.uniq":"^4.5.0","octokit-pagination-methods":"^1.1.0","once":"^1.4.0","universal-user-agent":"^4.0.0"},"devDependencies":{"@gimenete/type-writer":"^0.1.3","@octokit/fixtures-server":"^5.0.6","@octokit/graphql":"^4.2.0","@types/node":"^12.0.0","bundlesize":"^0.18.0","chai":"^4.1.2","compression-webpack-plugin":"^3.0.0","cypress":"^3.0.0","glob":"^7.1.2","http-proxy-agent":"^2.1.0","lodash.camelcase":"^4.3.0","lodash.merge":"^4.6.1","lodash.upperfirst":"^4.3.1","mkdirp":"^0.5.1","mocha":"^6.0.0","mustache":"^3.0.0","nock":"^11.3.3","npm-run-all":"^4.1.2","nyc":"^14.0.0","prettier":"^1.14.2","proxy":"^1.0.0","semantic-release":"^15.0.0","sinon":"^7.2.4","sinon-chai":"^3.0.0","sort-keys":"^4.0.0","string-to-arraybuffer":"^1.0.0","string-to-jsdoc-comment":"^1.0.0","typescript":"^3.3.1","webpack":"^4.0.0","webpack-bundle-analyzer":"^3.0.0","webpack-cli":"^3.0.0"},"types":"index.d.ts","scripts":{"coverage":"nyc report --reporter=html && open coverage/index.html","lint":"prettier --check \'{lib,plugins,scripts,test}/**/*.{js,json,ts}\' \'docs/*.{js,json}\' \'docs/src/**/*\' index.js README.md package.json","lint:fix":"prettier --write \'{lib,plugins,scripts,test}/**/*.{js,json,ts}\' \'docs/*.{js,json}\' \'docs/src/**/*\' index.js README.md package.json","pretest":"npm run -s lint","test":"nyc mocha test/mocha-node-setup.js \\"test/*/**/*-test.js\\"","test:browser":"cypress run --browser chrome","build":"npm-run-all build:*","build:ts":"npm run -s update-endpoints:typescript","prebuild:browser":"mkdirp dist/","build:browser":"npm-run-all build:browser:*","build:browser:development":"webpack --mode development --entry . --output-library=Octokit --output=./dist/octokit-rest.js --profile --json > dist/bundle-stats.json","build:browser:production":"webpack --mode production --entry . --plugin=compression-webpack-plugin --output-library=Octokit --output-path=./dist --output-filename=octokit-rest.min.js --devtool source-map","generate-bundle-report":"webpack-bundle-analyzer dist/bundle-stats.json --mode=static --no-open --report dist/bundle-report.html","update-endpoints":"npm-run-all update-endpoints:*","update-endpoints:fetch-json":"node scripts/update-endpoints/fetch-json","update-endpoints:code":"node scripts/update-endpoints/code","update-endpoints:typescript":"node scripts/update-endpoints/typescript","prevalidate:ts":"npm run -s build:ts","validate:ts":"tsc --target es6 --noImplicitAny index.d.ts","postvalidate:ts":"tsc --noEmit --target es6 test/typescript-validate.ts","start-fixtures-server":"octokit-fixtures-server"},"license":"MIT","files":["index.js","index.d.ts","lib","plugins"],"nyc":{"ignore":["test"]},"release":{"publish":["@semantic-release/npm",{"path":"@semantic-release/github","assets":["dist/*","!dist/*.map.gz"]}]},"bundlesize":[{"path":"./dist/octokit-rest.min.js.gz","maxSize":"33 kB"}]}')
}, function(e, t, r) {
    e.exports = function(e, t) {
        return n(e.includes(t) ? e : e.concat(t))
    };
    const n = r(48)
}, function(e, t) {
    e.exports = function(e) {
        e.hook.wrap("request", ((t, r) => {
            e.log.debug("request", r);
            const n = Date.now(),
                i = e.request.endpoint.parse(r),
                o = i.url.replace(r.baseUrl, "");
            return t(r).then((t => (e.log.info(`${i.method} ${o} - ${t.status} in ${Date.now()-n}ms`), t))).catch((t => {
                throw e.log.info(`${i.method} ${o} - ${t.status} in ${Date.now()-n}ms`), t
            }))
        }))
    }
}, function(e, t, r) {
    e.exports = function(e, t) {
        if (t.auth) return void(e.authenticate = () => {
            i(e.log, new n('[@octokit/rest] octokit.authenticate() is deprecated and has no effect when "auth" option is set on Octokit constructor'))
        });
        const r = {
            octokit: e,
            auth: !1
        };
        e.authenticate = o.bind(null, r), e.hook.before("request", s.bind(null, r)), e.hook.error("request", a.bind(null, r))
    };
    const {
        Deprecation: n
    } = r(12), i = r(8)(((e, t) => e.warn(t))), o = r(160), s = r(161), a = r(163)
}, function(e, t, r) {
    e.exports = function(e, t) {
        if (i(e.octokit.log, new n('[@octokit/rest] octokit.authenticate() is deprecated. Use "auth" constructor option instead.')), !t) return void(e.auth = !1);
        switch (t.type) {
            case "basic":
                if (!t.username || !t.password) throw new Error("Basic authentication requires both a username and password to be set");
                break;
            case "oauth":
                if (!(t.token || t.key && t.secret)) throw new Error("OAuth2 authentication requires a token or key & secret to be set");
                break;
            case "token":
            case "app":
                if (!t.token) throw new Error("Token authentication requires a token to be set");
                break;
            default:
                throw new Error("Invalid authentication type, must be 'basic', 'oauth', 'token' or 'app'")
        }
        e.auth = t
    };
    const {
        Deprecation: n
    } = r(12), i = r(8)(((e, t) => e.warn(t)))
}, function(e, t, r) {
    e.exports = function(e, t) {
        if (!e.auth.type) return;
        if ("basic" === e.auth.type) {
            const r = n(`${e.auth.username}:${e.auth.password}`);
            return void(t.headers.authorization = `Basic ${r}`)
        }
        if ("token" === e.auth.type) return void(t.headers.authorization = `token ${e.auth.token}`);
        if ("app" === e.auth.type) {
            t.headers.authorization = `Bearer ${e.auth.token}`;
            const r = t.headers.accept.split(",").concat("application/vnd.github.machine-man-preview+json");
            return void(t.headers.accept = i(r).filter(Boolean).join(","))
        }
        if (t.url += -1 === t.url.indexOf("?") ? "?" : "&", e.auth.token) return void(t.url += `access_token=${encodeURIComponent(e.auth.token)}`);
        const r = encodeURIComponent(e.auth.key),
            o = encodeURIComponent(e.auth.secret);
        t.url += `client_id=${r}&client_secret=${o}`
    };
    const n = r(49),
        i = r(162)
}, function(e, t) {
    var r = "__lodash_hash_undefined__",
        n = "[object Function]",
        i = "[object GeneratorFunction]",
        o = /^\[object .+?Constructor\]$/,
        s = "object" == typeof global && global && global.Object === Object && global,
        a = "object" == typeof self && self && self.Object === Object && self,
        u = s || a || Function("return this")();

    function c(e, t) {
        return !!(e ? e.length : 0) && function(e, t, r) {
            if (t != t) return function(e, t, r, n) {
                var i = e.length,
                    o = r + (n ? 1 : -1);
                for (; n ? o-- : ++o < i;)
                    if (t(e[o], o, e)) return o;
                return -1
            }(e, l, r);
            var n = r - 1,
                i = e.length;
            for (; ++n < i;)
                if (e[n] === t) return n;
            return -1
        }(e, t, 0) > -1
    }

    function p(e, t, r) {
        for (var n = -1, i = e ? e.length : 0; ++n < i;)
            if (r(t, e[n])) return !0;
        return !1
    }

    function l(e) {
        return e != e
    }

    function d(e, t) {
        return e.has(t)
    }

    function f(e) {
        var t = -1,
            r = Array(e.size);
        return e.forEach((function(e) {
            r[++t] = e
        })), r
    }
    var h, g = Array.prototype,
        m = Function.prototype,
        y = Object.prototype,
        b = u["__core-js_shared__"],
        _ = (h = /[^.]+$/.exec(b && b.keys && b.keys.IE_PROTO || "")) ? "Symbol(src)_1." + h : "",
        v = m.toString,
        w = y.hasOwnProperty,
        E = y.toString,
        q = RegExp("^" + v.call(w).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        T = g.splice,
        S = I(u, "Map"),
        A = I(u, "Set"),
        R = I(Object, "create");

    function x(e) {
        var t = -1,
            r = e ? e.length : 0;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }

    function O(e) {
        var t = -1,
            r = e ? e.length : 0;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }

    function C(e) {
        var t = -1,
            r = e ? e.length : 0;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }

    function k(e) {
        var t = -1,
            r = e ? e.length : 0;
        for (this.__data__ = new C; ++t < r;) this.add(e[t])
    }

    function j(e, t) {
        for (var r, n, i = e.length; i--;)
            if ((r = e[i][0]) === (n = t) || r != r && n != n) return i;
        return -1
    }

    function P(e) {
        return !(!N(e) || (t = e, _ && _ in t)) && (function(e) {
            var t = N(e) ? E.call(e) : "";
            return t == n || t == i
        }(e) || function(e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString) try {
                t = !!(e + "")
            } catch (e) {}
            return t
        }(e) ? q : o).test(function(e) {
            if (null != e) {
                try {
                    return v.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }(e));
        var t
    }
    x.prototype.clear = function() {
        this.__data__ = R ? R(null) : {}
    }, x.prototype.delete = function(e) {
        return this.has(e) && delete this.__data__[e]
    }, x.prototype.get = function(e) {
        var t = this.__data__;
        if (R) {
            var n = t[e];
            return n === r ? void 0 : n
        }
        return w.call(t, e) ? t[e] : void 0
    }, x.prototype.has = function(e) {
        var t = this.__data__;
        return R ? void 0 !== t[e] : w.call(t, e)
    }, x.prototype.set = function(e, t) {
        return this.__data__[e] = R && void 0 === t ? r : t, this
    }, O.prototype.clear = function() {
        this.__data__ = []
    }, O.prototype.delete = function(e) {
        var t = this.__data__,
            r = j(t, e);
        return !(r < 0) && (r == t.length - 1 ? t.pop() : T.call(t, r, 1), !0)
    }, O.prototype.get = function(e) {
        var t = this.__data__,
            r = j(t, e);
        return r < 0 ? void 0 : t[r][1]
    }, O.prototype.has = function(e) {
        return j(this.__data__, e) > -1
    }, O.prototype.set = function(e, t) {
        var r = this.__data__,
            n = j(r, e);
        return n < 0 ? r.push([e, t]) : r[n][1] = t, this
    }, C.prototype.clear = function() {
        this.__data__ = {
            hash: new x,
            map: new(S || O),
            string: new x
        }
    }, C.prototype.delete = function(e) {
        return $(this, e).delete(e)
    }, C.prototype.get = function(e) {
        return $(this, e).get(e)
    }, C.prototype.has = function(e) {
        return $(this, e).has(e)
    }, C.prototype.set = function(e, t) {
        return $(this, e).set(e, t), this
    }, k.prototype.add = k.prototype.push = function(e) {
        return this.__data__.set(e, r), this
    }, k.prototype.has = function(e) {
        return this.__data__.has(e)
    };
    var L = A && 1 / f(new A([, -0]))[1] == 1 / 0 ? function(e) {
        return new A(e)
    } : function() {};

    function $(e, t) {
        var r, n, i = e.__data__;
        return ("string" == (n = typeof(r = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? i["string" == typeof t ? "string" : "hash"] : i.map
    }

    function I(e, t) {
        var r = function(e, t) {
            return null == e ? void 0 : e[t]
        }(e, t);
        return P(r) ? r : void 0
    }

    function N(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t)
    }
    e.exports = function(e) {
        return e && e.length ? function(e, t, r) {
            var n = -1,
                i = c,
                o = e.length,
                s = !0,
                a = [],
                u = a;
            if (r) s = !1, i = p;
            else if (o >= 200) {
                var l = t ? null : L(e);
                if (l) return f(l);
                s = !1, i = d, u = new k
            } else u = t ? [] : a;
            e: for (; ++n < o;) {
                var h = e[n],
                    g = t ? t(h) : h;
                if (h = r || 0 !== h ? h : 0, s && g == g) {
                    for (var m = u.length; m--;)
                        if (u[m] === g) continue e;
                    t && u.push(g), a.push(h)
                } else i(u, g, r) || (u !== a && u.push(g), a.push(h))
            }
            return a
        }(e) : []
    }
}, function(e, t, r) {
    e.exports = function(e, t, r) {
        if (!t.headers) throw t;
        const i = /required/.test(t.headers["x-github-otp"] || "");
        if (401 !== t.status || !i) throw t;
        if (401 === t.status && i && t.request && t.request.headers["x-github-otp"]) throw new n("Invalid one-time password for two-factor authentication", 401, {
            headers: t.headers,
            request: r
        });
        if ("function" != typeof e.auth.on2fa) throw new n("2FA required, but options.on2fa is not a function. See https://github.com/octokit/rest.js#authentication", 401, {
            headers: t.headers,
            request: r
        });
        return Promise.resolve().then((() => e.auth.on2fa())).then((t => {
            const n = Object.assign(r, {
                headers: Object.assign({
                    "x-github-otp": t
                }, r.headers)
            });
            return e.octokit.request(n)
        }))
    };
    const {
        RequestError: n
    } = r(11)
}, function(e, t, r) {
    e.exports = function(e, t) {
        if (!t.auth) return;
        o(t.auth);
        const r = {
            octokit: e,
            auth: t.auth
        };
        e.hook.before("request", n.bind(null, r)), e.hook.error("request", i.bind(null, r))
    };
    const n = r(165),
        i = r(168),
        o = r(169)
}, function(e, t, r) {
    e.exports = function(e, t) {
        if ("string" == typeof e.auth) {
            if (t.headers.authorization = i(e.auth), /^bearer /i.test(e.auth) && !/machine-man/.test(t.headers.accept)) {
                const e = t.headers.accept.split(",").concat("application/vnd.github.machine-man-preview+json");
                t.headers.accept = e.filter(Boolean).join(",")
            }
            return
        }
        if (e.auth.username) {
            const r = n(`${e.auth.username}:${e.auth.password}`);
            return t.headers.authorization = `Basic ${r}`, void(e.otp && (t.headers["x-github-otp"] = e.otp))
        }
        if (e.auth.clientId) {
            if (/\/applications\/:?[\w_]+\/tokens\/:?[\w_]+($|\?)/.test(t.url)) {
                const r = n(`${e.auth.clientId}:${e.auth.clientSecret}`);
                return void(t.headers.authorization = `Basic ${r}`)
            }
            return t.url += -1 === t.url.indexOf("?") ? "?" : "&", void(t.url += `client_id=${e.auth.clientId}&client_secret=${e.auth.clientSecret}`)
        }
        return Promise.resolve().then((() => e.auth())).then((e => {
            t.headers.authorization = i(e)
        }))
    };
    const n = r(49),
        i = r(166)
}, function(e, t, r) {
    e.exports = function(e) {
        if (/^(basic|bearer|token) /i.test(e)) return e;
        try {
            if (i.test(n(e))) return `basic ${e}`
        } catch (e) {}
        if (3 === e.split(/\./).length) return `bearer ${e}`;
        return `token ${e}`
    };
    const n = r(167),
        i = /^[\w-]+:/
}, function(e, t) {
    e.exports = function(e) {
        return Buffer.from(e, "base64").toString("binary")
    }
}, function(e, t, r) {
    e.exports = function(e, t, r) {
        if (!t.headers) throw t;
        const i = /required/.test(t.headers["x-github-otp"] || "");
        if (401 !== t.status || !i) throw t;
        if (401 === t.status && i && t.request && t.request.headers["x-github-otp"]) {
            if (!e.otp) throw new n("Invalid one-time password for two-factor authentication", 401, {
                headers: t.headers,
                request: r
            });
            delete e.otp
        }
        if ("function" != typeof e.auth.on2fa) throw new n("2FA required, but options.on2fa is not a function. See https://github.com/octokit/rest.js#authentication", 401, {
            headers: t.headers,
            request: r
        });
        return Promise.resolve().then((() => e.auth.on2fa())).then((t => {
            const n = Object.assign(r, {
                headers: Object.assign(r.headers, {
                    "x-github-otp": t
                })
            });
            return e.octokit.request(n).then((r => (e.otp = t, r)))
        }))
    };
    const {
        RequestError: n
    } = r(11)
}, function(e, t) {
    e.exports = function(e) {
        if ("string" == typeof e) return;
        if ("function" == typeof e) return;
        if (e.username && e.password) return;
        if (e.clientId && e.clientSecret) return;
        throw new Error(`Invalid "auth" option: ${JSON.stringify(e)}`)
    }
}, function(e, t, r) {
    e.exports = function(e) {
        e.paginate = i.bind(null, e), e.paginate.iterator = n.bind(null, e)
    };
    const n = r(50),
        i = r(172)
}, function(e, t, r) {
    e.exports = function(e, t, r) {
        const i = t.replace(e.request.endpoint.DEFAULTS.baseUrl, "");
        if (!(u.test(i) || c.test(i) || p.test(i) || l.test(i))) return;
        const d = r.data.incomplete_results,
            f = r.data.repository_selection,
            h = r.data.total_count;
        delete r.data.incomplete_results, delete r.data.repository_selection, delete r.data.total_count;
        const g = Object.keys(r.data)[0];
        r.data = r.data[g], Object.defineProperty(r.data, g, {
            get: () => (a(e.log, new n(`[@octokit/rest] "result.data.${g}" is deprecated. Use "result.data" instead`)), r.data)
        }), void 0 !== d && Object.defineProperty(r.data, "incomplete_results", {
            get: () => (o(e.log, new n('[@octokit/rest] "result.data.incomplete_results" is deprecated.')), d)
        });
        void 0 !== f && Object.defineProperty(r.data, "repository_selection", {
            get: () => (s(e.log, new n('[@octokit/rest] "result.data.repository_selection" is deprecated.')), f)
        });
        Object.defineProperty(r.data, "total_count", {
            get: () => (s(e.log, new n('[@octokit/rest] "result.data.total_count" is deprecated.')), h)
        })
    };
    const {
        Deprecation: n
    } = r(12), i = r(8), o = i(((e, t) => e.warn(t))), s = i(((e, t) => e.warn(t))), a = i(((e, t) => e.warn(t))), u = /^\/search\//, c = /^\/repos\/[^/]+\/[^/]+\/commits\/[^/]+\/(check-runs|check-suites)/, p = /^\/installation\/repositories/, l = /^\/user\/installations/
}, function(e, t, r) {
    e.exports = function(e, t, r, o) {
        "function" == typeof r && (o = r, r = void 0);
        return r = e.request.endpoint.merge(t, r), i(e, [], n(e, r)[Symbol.asyncIterator](), o)
    };
    const n = r(50);

    function i(e, t, r, n) {
        return r.next().then((o => {
            if (o.done) return t;
            let s = !1;
            return t = t.concat(n ? n(o.value, (function() {
                s = !0
            })) : o.value.data), s ? t : i(e, t, r, n)
        }))
    }
}, function(e, t, r) {
    e.exports = function(e) {
        e.hook.wrap("request", ((e, t) => {
            if (!/\/repos\/:?\w+\/:?\w+\/git\/refs\/:?\w+/.test(t.url)) return e(t);
            const r = "ref" in t;
            return e(t).then((e => {
                if (r) {
                    if (Array.isArray(e.data)) throw new n(`More than one reference found for "${t.ref}"`, 404, {
                        request: t
                    });
                    return e
                }
                return Array.isArray(e.data) || (e.data = [e.data]), e
            })).catch((e => {
                if (r) throw e;
                if (404 === e.status) return {
                    status: 200,
                    headers: e.headers,
                    data: []
                };
                throw e
            }))
        }))
    };
    const {
        RequestError: n
    } = r(11)
}, function(e, t, r) {
    e.exports = function(e) {
        e.registerEndpoints = n.bind(null, e)
    };
    const n = r(175)
}, function(e, t, r) {
    e.exports = function(e, t) {
        Object.keys(t).forEach((r => {
            e[r] || (e[r] = {}), Object.keys(t[r]).forEach((o => {
                const s = t[r][o],
                    a = ["method", "url", "headers"].reduce(((e, t) => (void 0 !== s[t] && (e[t] = s[t]), e)), {});
                a.request = {
                    validate: s.params
                };
                let u = e.request.defaults(a);
                if (Object.keys(s.params || {}).find((e => s.params[e].deprecated))) {
                    const t = i.bind(null, e, s);
                    u = t(e.request.defaults(a), `.${r}.${o}()`), u.endpoint = t(u.endpoint, `.${r}.${o}.endpoint()`), u.endpoint.merge = t(u.endpoint.merge, `.${r}.${o}.endpoint.merge()`)
                }
                s.deprecated ? e[r][o] = function() {
                    return e.log.warn(new n(`[@octokit/rest] ${s.deprecated}`)), e[r][o] = u, u.apply(null, arguments)
                } : e[r][o] = u
            }))
        }))
    };
    const {
        Deprecation: n
    } = r(12);

    function i(e, t, r, i) {
        const o = o => (o = Object.assign({}, o), Object.keys(o).forEach((r => {
            if (t.params[r] && t.params[r].deprecated) {
                const s = t.params[r].alias;
                e.log.warn(new n(`[@octokit/rest] "${r}" parameter is deprecated for "${i}". Use "${s}" instead`)), s in o || (o[s] = o[r]), delete o[r]
            }
        })), r(o));
        return Object.keys(r).forEach((e => {
            o[e] = r[e]
        })), o
    }
}, function(e, t, r) {
    e.exports = function(e) {
        n.gitdata = n.git, n.authorization = n.oauthAuthorizations, n.pullRequests = n.pulls, e.registerEndpoints(n)
    };
    const n = r(177)
}, function(e) {
    e.exports = JSON.parse('{"activity":{"checkStarringRepo":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/user/starred/:owner/:repo"},"deleteRepoSubscription":{"method":"DELETE","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/subscription"},"deleteThreadSubscription":{"method":"DELETE","params":{"thread_id":{"required":true,"type":"integer"}},"url":"/notifications/threads/:thread_id/subscription"},"getRepoSubscription":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/subscription"},"getThread":{"method":"GET","params":{"thread_id":{"required":true,"type":"integer"}},"url":"/notifications/threads/:thread_id"},"getThreadSubscription":{"method":"GET","params":{"thread_id":{"required":true,"type":"integer"}},"url":"/notifications/threads/:thread_id/subscription"},"listEventsForOrg":{"method":"GET","params":{"org":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"username":{"required":true,"type":"string"}},"url":"/users/:username/events/orgs/:org"},"listEventsForUser":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"},"username":{"required":true,"type":"string"}},"url":"/users/:username/events"},"listFeeds":{"method":"GET","params":{},"url":"/feeds"},"listNotifications":{"method":"GET","params":{"all":{"type":"boolean"},"before":{"type":"string"},"page":{"type":"integer"},"participating":{"type":"boolean"},"per_page":{"type":"integer"},"since":{"type":"string"}},"url":"/notifications"},"listNotificationsForRepo":{"method":"GET","params":{"all":{"type":"boolean"},"before":{"type":"string"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"participating":{"type":"boolean"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"},"since":{"type":"string"}},"url":"/repos/:owner/:repo/notifications"},"listPublicEvents":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/events"},"listPublicEventsForOrg":{"method":"GET","params":{"org":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/orgs/:org/events"},"listPublicEventsForRepoNetwork":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/networks/:owner/:repo/events"},"listPublicEventsForUser":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"},"username":{"required":true,"type":"string"}},"url":"/users/:username/events/public"},"listReceivedEventsForUser":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"},"username":{"required":true,"type":"string"}},"url":"/users/:username/received_events"},"listReceivedPublicEventsForUser":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"},"username":{"required":true,"type":"string"}},"url":"/users/:username/received_events/public"},"listRepoEvents":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/events"},"listReposStarredByAuthenticatedUser":{"method":"GET","params":{"direction":{"enum":["asc","desc"],"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"sort":{"enum":["created","updated"],"type":"string"}},"url":"/user/starred"},"listReposStarredByUser":{"method":"GET","params":{"direction":{"enum":["asc","desc"],"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"sort":{"enum":["created","updated"],"type":"string"},"username":{"required":true,"type":"string"}},"url":"/users/:username/starred"},"listReposWatchedByUser":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"},"username":{"required":true,"type":"string"}},"url":"/users/:username/subscriptions"},"listStargazersForRepo":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/stargazers"},"listWatchedReposForAuthenticatedUser":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/user/subscriptions"},"listWatchersForRepo":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/subscribers"},"markAsRead":{"method":"PUT","params":{"last_read_at":{"type":"string"}},"url":"/notifications"},"markNotificationsAsReadForRepo":{"method":"PUT","params":{"last_read_at":{"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/notifications"},"markThreadAsRead":{"method":"PATCH","params":{"thread_id":{"required":true,"type":"integer"}},"url":"/notifications/threads/:thread_id"},"setRepoSubscription":{"method":"PUT","params":{"ignored":{"type":"boolean"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"subscribed":{"type":"boolean"}},"url":"/repos/:owner/:repo/subscription"},"setThreadSubscription":{"method":"PUT","params":{"ignored":{"type":"boolean"},"thread_id":{"required":true,"type":"integer"}},"url":"/notifications/threads/:thread_id/subscription"},"starRepo":{"method":"PUT","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/user/starred/:owner/:repo"},"unstarRepo":{"method":"DELETE","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/user/starred/:owner/:repo"}},"apps":{"addRepoToInstallation":{"headers":{"accept":"application/vnd.github.machine-man-preview+json"},"method":"PUT","params":{"installation_id":{"required":true,"type":"integer"},"repository_id":{"required":true,"type":"integer"}},"url":"/user/installations/:installation_id/repositories/:repository_id"},"checkAccountIsAssociatedWithAny":{"method":"GET","params":{"account_id":{"required":true,"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/marketplace_listing/accounts/:account_id"},"checkAccountIsAssociatedWithAnyStubbed":{"method":"GET","params":{"account_id":{"required":true,"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/marketplace_listing/stubbed/accounts/:account_id"},"createContentAttachment":{"headers":{"accept":"application/vnd.github.corsair-preview+json"},"method":"POST","params":{"body":{"required":true,"type":"string"},"content_reference_id":{"required":true,"type":"integer"},"title":{"required":true,"type":"string"}},"url":"/content_references/:content_reference_id/attachments"},"createFromManifest":{"headers":{"accept":"application/vnd.github.fury-preview+json"},"method":"POST","params":{"code":{"required":true,"type":"string"}},"url":"/app-manifests/:code/conversions"},"createInstallationToken":{"headers":{"accept":"application/vnd.github.machine-man-preview+json"},"method":"POST","params":{"installation_id":{"required":true,"type":"integer"},"permissions":{"type":"object"},"repository_ids":{"type":"integer[]"}},"url":"/app/installations/:installation_id/access_tokens"},"deleteInstallation":{"headers":{"accept":"application/vnd.github.gambit-preview+json,application/vnd.github.machine-man-preview+json"},"method":"DELETE","params":{"installation_id":{"required":true,"type":"integer"}},"url":"/app/installations/:installation_id"},"findOrgInstallation":{"deprecated":"octokit.apps.findOrgInstallation() has been renamed to octokit.apps.getOrgInstallation() (2019-04-10)","headers":{"accept":"application/vnd.github.machine-man-preview+json"},"method":"GET","params":{"org":{"required":true,"type":"string"}},"url":"/orgs/:org/installation"},"findRepoInstallation":{"deprecated":"octokit.apps.findRepoInstallation() has been renamed to octokit.apps.getRepoInstallation() (2019-04-10)","headers":{"accept":"application/vnd.github.machine-man-preview+json"},"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/installation"},"findUserInstallation":{"deprecated":"octokit.apps.findUserInstallation() has been renamed to octokit.apps.getUserInstallation() (2019-04-10)","headers":{"accept":"application/vnd.github.machine-man-preview+json"},"method":"GET","params":{"username":{"required":true,"type":"string"}},"url":"/users/:username/installation"},"getAuthenticated":{"headers":{"accept":"application/vnd.github.machine-man-preview+json"},"method":"GET","params":{},"url":"/app"},"getBySlug":{"headers":{"accept":"application/vnd.github.machine-man-preview+json"},"method":"GET","params":{"app_slug":{"required":true,"type":"string"}},"url":"/apps/:app_slug"},"getInstallation":{"headers":{"accept":"application/vnd.github.machine-man-preview+json"},"method":"GET","params":{"installation_id":{"required":true,"type":"integer"}},"url":"/app/installations/:installation_id"},"getOrgInstallation":{"headers":{"accept":"application/vnd.github.machine-man-preview+json"},"method":"GET","params":{"org":{"required":true,"type":"string"}},"url":"/orgs/:org/installation"},"getRepoInstallation":{"headers":{"accept":"application/vnd.github.machine-man-preview+json"},"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/installation"},"getUserInstallation":{"headers":{"accept":"application/vnd.github.machine-man-preview+json"},"method":"GET","params":{"username":{"required":true,"type":"string"}},"url":"/users/:username/installation"},"listAccountsUserOrOrgOnPlan":{"method":"GET","params":{"direction":{"enum":["asc","desc"],"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"plan_id":{"required":true,"type":"integer"},"sort":{"enum":["created","updated"],"type":"string"}},"url":"/marketplace_listing/plans/:plan_id/accounts"},"listAccountsUserOrOrgOnPlanStubbed":{"method":"GET","params":{"direction":{"enum":["asc","desc"],"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"plan_id":{"required":true,"type":"integer"},"sort":{"enum":["created","updated"],"type":"string"}},"url":"/marketplace_listing/stubbed/plans/:plan_id/accounts"},"listInstallationReposForAuthenticatedUser":{"headers":{"accept":"application/vnd.github.machine-man-preview+json"},"method":"GET","params":{"installation_id":{"required":true,"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/user/installations/:installation_id/repositories"},"listInstallations":{"headers":{"accept":"application/vnd.github.machine-man-preview+json"},"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/app/installations"},"listInstallationsForAuthenticatedUser":{"headers":{"accept":"application/vnd.github.machine-man-preview+json"},"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/user/installations"},"listMarketplacePurchasesForAuthenticatedUser":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/user/marketplace_purchases"},"listMarketplacePurchasesForAuthenticatedUserStubbed":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/user/marketplace_purchases/stubbed"},"listPlans":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/marketplace_listing/plans"},"listPlansStubbed":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/marketplace_listing/stubbed/plans"},"listRepos":{"headers":{"accept":"application/vnd.github.machine-man-preview+json"},"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/installation/repositories"},"removeRepoFromInstallation":{"headers":{"accept":"application/vnd.github.machine-man-preview+json"},"method":"DELETE","params":{"installation_id":{"required":true,"type":"integer"},"repository_id":{"required":true,"type":"integer"}},"url":"/user/installations/:installation_id/repositories/:repository_id"}},"checks":{"create":{"headers":{"accept":"application/vnd.github.antiope-preview+json"},"method":"POST","params":{"actions":{"type":"object[]"},"actions[].description":{"required":true,"type":"string"},"actions[].identifier":{"required":true,"type":"string"},"actions[].label":{"required":true,"type":"string"},"completed_at":{"type":"string"},"conclusion":{"enum":["success","failure","neutral","cancelled","timed_out","action_required"],"type":"string"},"details_url":{"type":"string"},"external_id":{"type":"string"},"head_sha":{"required":true,"type":"string"},"name":{"required":true,"type":"string"},"output":{"type":"object"},"output.annotations":{"type":"object[]"},"output.annotations[].annotation_level":{"enum":["notice","warning","failure"],"required":true,"type":"string"},"output.annotations[].end_column":{"type":"integer"},"output.annotations[].end_line":{"required":true,"type":"integer"},"output.annotations[].message":{"required":true,"type":"string"},"output.annotations[].path":{"required":true,"type":"string"},"output.annotations[].raw_details":{"type":"string"},"output.annotations[].start_column":{"type":"integer"},"output.annotations[].start_line":{"required":true,"type":"integer"},"output.annotations[].title":{"type":"string"},"output.images":{"type":"object[]"},"output.images[].alt":{"required":true,"type":"string"},"output.images[].caption":{"type":"string"},"output.images[].image_url":{"required":true,"type":"string"},"output.summary":{"required":true,"type":"string"},"output.text":{"type":"string"},"output.title":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"started_at":{"type":"string"},"status":{"enum":["queued","in_progress","completed"],"type":"string"}},"url":"/repos/:owner/:repo/check-runs"},"createSuite":{"headers":{"accept":"application/vnd.github.antiope-preview+json"},"method":"POST","params":{"head_sha":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/check-suites"},"get":{"headers":{"accept":"application/vnd.github.antiope-preview+json"},"method":"GET","params":{"check_run_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/check-runs/:check_run_id"},"getSuite":{"headers":{"accept":"application/vnd.github.antiope-preview+json"},"method":"GET","params":{"check_suite_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/check-suites/:check_suite_id"},"listAnnotations":{"headers":{"accept":"application/vnd.github.antiope-preview+json"},"method":"GET","params":{"check_run_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/check-runs/:check_run_id/annotations"},"listForRef":{"headers":{"accept":"application/vnd.github.antiope-preview+json"},"method":"GET","params":{"check_name":{"type":"string"},"filter":{"enum":["latest","all"],"type":"string"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"ref":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"status":{"enum":["queued","in_progress","completed"],"type":"string"}},"url":"/repos/:owner/:repo/commits/:ref/check-runs"},"listForSuite":{"headers":{"accept":"application/vnd.github.antiope-preview+json"},"method":"GET","params":{"check_name":{"type":"string"},"check_suite_id":{"required":true,"type":"integer"},"filter":{"enum":["latest","all"],"type":"string"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"},"status":{"enum":["queued","in_progress","completed"],"type":"string"}},"url":"/repos/:owner/:repo/check-suites/:check_suite_id/check-runs"},"listSuitesForRef":{"headers":{"accept":"application/vnd.github.antiope-preview+json"},"method":"GET","params":{"app_id":{"type":"integer"},"check_name":{"type":"string"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"ref":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/commits/:ref/check-suites"},"rerequestSuite":{"headers":{"accept":"application/vnd.github.antiope-preview+json"},"method":"POST","params":{"check_suite_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/check-suites/:check_suite_id/rerequest"},"setSuitesPreferences":{"headers":{"accept":"application/vnd.github.antiope-preview+json"},"method":"PATCH","params":{"auto_trigger_checks":{"type":"object[]"},"auto_trigger_checks[].app_id":{"required":true,"type":"integer"},"auto_trigger_checks[].setting":{"required":true,"type":"boolean"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/check-suites/preferences"},"update":{"headers":{"accept":"application/vnd.github.antiope-preview+json"},"method":"PATCH","params":{"actions":{"type":"object[]"},"actions[].description":{"required":true,"type":"string"},"actions[].identifier":{"required":true,"type":"string"},"actions[].label":{"required":true,"type":"string"},"check_run_id":{"required":true,"type":"integer"},"completed_at":{"type":"string"},"conclusion":{"enum":["success","failure","neutral","cancelled","timed_out","action_required"],"type":"string"},"details_url":{"type":"string"},"external_id":{"type":"string"},"name":{"type":"string"},"output":{"type":"object"},"output.annotations":{"type":"object[]"},"output.annotations[].annotation_level":{"enum":["notice","warning","failure"],"required":true,"type":"string"},"output.annotations[].end_column":{"type":"integer"},"output.annotations[].end_line":{"required":true,"type":"integer"},"output.annotations[].message":{"required":true,"type":"string"},"output.annotations[].path":{"required":true,"type":"string"},"output.annotations[].raw_details":{"type":"string"},"output.annotations[].start_column":{"type":"integer"},"output.annotations[].start_line":{"required":true,"type":"integer"},"output.annotations[].title":{"type":"string"},"output.images":{"type":"object[]"},"output.images[].alt":{"required":true,"type":"string"},"output.images[].caption":{"type":"string"},"output.images[].image_url":{"required":true,"type":"string"},"output.summary":{"required":true,"type":"string"},"output.text":{"type":"string"},"output.title":{"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"started_at":{"type":"string"},"status":{"enum":["queued","in_progress","completed"],"type":"string"}},"url":"/repos/:owner/:repo/check-runs/:check_run_id"}},"codesOfConduct":{"getConductCode":{"headers":{"accept":"application/vnd.github.scarlet-witch-preview+json"},"method":"GET","params":{"key":{"required":true,"type":"string"}},"url":"/codes_of_conduct/:key"},"getForRepo":{"headers":{"accept":"application/vnd.github.scarlet-witch-preview+json"},"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/community/code_of_conduct"},"listConductCodes":{"headers":{"accept":"application/vnd.github.scarlet-witch-preview+json"},"method":"GET","params":{},"url":"/codes_of_conduct"}},"emojis":{"get":{"method":"GET","params":{},"url":"/emojis"}},"gists":{"checkIsStarred":{"method":"GET","params":{"gist_id":{"required":true,"type":"string"}},"url":"/gists/:gist_id/star"},"create":{"method":"POST","params":{"description":{"type":"string"},"files":{"required":true,"type":"object"},"files.content":{"type":"string"},"public":{"type":"boolean"}},"url":"/gists"},"createComment":{"method":"POST","params":{"body":{"required":true,"type":"string"},"gist_id":{"required":true,"type":"string"}},"url":"/gists/:gist_id/comments"},"delete":{"method":"DELETE","params":{"gist_id":{"required":true,"type":"string"}},"url":"/gists/:gist_id"},"deleteComment":{"method":"DELETE","params":{"comment_id":{"required":true,"type":"integer"},"gist_id":{"required":true,"type":"string"}},"url":"/gists/:gist_id/comments/:comment_id"},"fork":{"method":"POST","params":{"gist_id":{"required":true,"type":"string"}},"url":"/gists/:gist_id/forks"},"get":{"method":"GET","params":{"gist_id":{"required":true,"type":"string"}},"url":"/gists/:gist_id"},"getComment":{"method":"GET","params":{"comment_id":{"required":true,"type":"integer"},"gist_id":{"required":true,"type":"string"}},"url":"/gists/:gist_id/comments/:comment_id"},"getRevision":{"method":"GET","params":{"gist_id":{"required":true,"type":"string"},"sha":{"required":true,"type":"string"}},"url":"/gists/:gist_id/:sha"},"list":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"},"since":{"type":"string"}},"url":"/gists"},"listComments":{"method":"GET","params":{"gist_id":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/gists/:gist_id/comments"},"listCommits":{"method":"GET","params":{"gist_id":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/gists/:gist_id/commits"},"listForks":{"method":"GET","params":{"gist_id":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/gists/:gist_id/forks"},"listPublic":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"},"since":{"type":"string"}},"url":"/gists/public"},"listPublicForUser":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"},"since":{"type":"string"},"username":{"required":true,"type":"string"}},"url":"/users/:username/gists"},"listStarred":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"},"since":{"type":"string"}},"url":"/gists/starred"},"star":{"method":"PUT","params":{"gist_id":{"required":true,"type":"string"}},"url":"/gists/:gist_id/star"},"unstar":{"method":"DELETE","params":{"gist_id":{"required":true,"type":"string"}},"url":"/gists/:gist_id/star"},"update":{"method":"PATCH","params":{"description":{"type":"string"},"files":{"type":"object"},"files.content":{"type":"string"},"files.filename":{"type":"string"},"gist_id":{"required":true,"type":"string"}},"url":"/gists/:gist_id"},"updateComment":{"method":"PATCH","params":{"body":{"required":true,"type":"string"},"comment_id":{"required":true,"type":"integer"},"gist_id":{"required":true,"type":"string"}},"url":"/gists/:gist_id/comments/:comment_id"}},"git":{"createBlob":{"method":"POST","params":{"content":{"required":true,"type":"string"},"encoding":{"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/git/blobs"},"createCommit":{"method":"POST","params":{"author":{"type":"object"},"author.date":{"type":"string"},"author.email":{"type":"string"},"author.name":{"type":"string"},"committer":{"type":"object"},"committer.date":{"type":"string"},"committer.email":{"type":"string"},"committer.name":{"type":"string"},"message":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"parents":{"required":true,"type":"string[]"},"repo":{"required":true,"type":"string"},"signature":{"type":"string"},"tree":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/git/commits"},"createRef":{"method":"POST","params":{"owner":{"required":true,"type":"string"},"ref":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"sha":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/git/refs"},"createTag":{"method":"POST","params":{"message":{"required":true,"type":"string"},"object":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"tag":{"required":true,"type":"string"},"tagger":{"type":"object"},"tagger.date":{"type":"string"},"tagger.email":{"type":"string"},"tagger.name":{"type":"string"},"type":{"enum":["commit","tree","blob"],"required":true,"type":"string"}},"url":"/repos/:owner/:repo/git/tags"},"createTree":{"method":"POST","params":{"base_tree":{"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"tree":{"required":true,"type":"object[]"},"tree[].content":{"type":"string"},"tree[].mode":{"enum":["100644","100755","040000","160000","120000"],"type":"string"},"tree[].path":{"type":"string"},"tree[].sha":{"type":"string"},"tree[].type":{"enum":["blob","tree","commit"],"type":"string"}},"url":"/repos/:owner/:repo/git/trees"},"deleteRef":{"method":"DELETE","params":{"owner":{"required":true,"type":"string"},"ref":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/git/refs/:ref"},"getBlob":{"method":"GET","params":{"file_sha":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/git/blobs/:file_sha"},"getCommit":{"method":"GET","params":{"commit_sha":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/git/commits/:commit_sha"},"getRef":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"ref":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/git/refs/:ref"},"getTag":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"tag_sha":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/git/tags/:tag_sha"},"getTree":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"recursive":{"enum":["1"],"type":"integer"},"repo":{"required":true,"type":"string"},"tree_sha":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/git/trees/:tree_sha"},"listRefs":{"method":"GET","params":{"namespace":{"type":"string"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/git/refs/:namespace"},"updateRef":{"method":"PATCH","params":{"force":{"type":"boolean"},"owner":{"required":true,"type":"string"},"ref":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"sha":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/git/refs/:ref"}},"gitignore":{"getTemplate":{"method":"GET","params":{"name":{"required":true,"type":"string"}},"url":"/gitignore/templates/:name"},"listTemplates":{"method":"GET","params":{},"url":"/gitignore/templates"}},"interactions":{"addOrUpdateRestrictionsForOrg":{"headers":{"accept":"application/vnd.github.sombra-preview+json"},"method":"PUT","params":{"limit":{"enum":["existing_users","contributors_only","collaborators_only"],"required":true,"type":"string"},"org":{"required":true,"type":"string"}},"url":"/orgs/:org/interaction-limits"},"addOrUpdateRestrictionsForRepo":{"headers":{"accept":"application/vnd.github.sombra-preview+json"},"method":"PUT","params":{"limit":{"enum":["existing_users","contributors_only","collaborators_only"],"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/interaction-limits"},"getRestrictionsForOrg":{"headers":{"accept":"application/vnd.github.sombra-preview+json"},"method":"GET","params":{"org":{"required":true,"type":"string"}},"url":"/orgs/:org/interaction-limits"},"getRestrictionsForRepo":{"headers":{"accept":"application/vnd.github.sombra-preview+json"},"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/interaction-limits"},"removeRestrictionsForOrg":{"headers":{"accept":"application/vnd.github.sombra-preview+json"},"method":"DELETE","params":{"org":{"required":true,"type":"string"}},"url":"/orgs/:org/interaction-limits"},"removeRestrictionsForRepo":{"headers":{"accept":"application/vnd.github.sombra-preview+json"},"method":"DELETE","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/interaction-limits"}},"issues":{"addAssignees":{"method":"POST","params":{"assignees":{"type":"string[]"},"issue_number":{"required":true,"type":"integer"},"number":{"alias":"issue_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/issues/:issue_number/assignees"},"addLabels":{"method":"POST","params":{"issue_number":{"required":true,"type":"integer"},"labels":{"required":true,"type":"string[]"},"number":{"alias":"issue_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/issues/:issue_number/labels"},"checkAssignee":{"method":"GET","params":{"assignee":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/assignees/:assignee"},"create":{"method":"POST","params":{"assignee":{"type":"string"},"assignees":{"type":"string[]"},"body":{"type":"string"},"labels":{"type":"string[]"},"milestone":{"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"title":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/issues"},"createComment":{"method":"POST","params":{"body":{"required":true,"type":"string"},"issue_number":{"required":true,"type":"integer"},"number":{"alias":"issue_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/issues/:issue_number/comments"},"createLabel":{"method":"POST","params":{"color":{"required":true,"type":"string"},"description":{"type":"string"},"name":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/labels"},"createMilestone":{"method":"POST","params":{"description":{"type":"string"},"due_on":{"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"state":{"enum":["open","closed"],"type":"string"},"title":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/milestones"},"deleteComment":{"method":"DELETE","params":{"comment_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/issues/comments/:comment_id"},"deleteLabel":{"method":"DELETE","params":{"name":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/labels/:name"},"deleteMilestone":{"method":"DELETE","params":{"milestone_number":{"required":true,"type":"integer"},"number":{"alias":"milestone_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/milestones/:milestone_number"},"get":{"method":"GET","params":{"issue_number":{"required":true,"type":"integer"},"number":{"alias":"issue_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/issues/:issue_number"},"getComment":{"method":"GET","params":{"comment_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/issues/comments/:comment_id"},"getEvent":{"method":"GET","params":{"event_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/issues/events/:event_id"},"getLabel":{"method":"GET","params":{"name":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/labels/:name"},"getMilestone":{"method":"GET","params":{"milestone_number":{"required":true,"type":"integer"},"number":{"alias":"milestone_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/milestones/:milestone_number"},"list":{"method":"GET","params":{"direction":{"enum":["asc","desc"],"type":"string"},"filter":{"enum":["assigned","created","mentioned","subscribed","all"],"type":"string"},"labels":{"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"since":{"type":"string"},"sort":{"enum":["created","updated","comments"],"type":"string"},"state":{"enum":["open","closed","all"],"type":"string"}},"url":"/issues"},"listAssignees":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/assignees"},"listComments":{"method":"GET","params":{"issue_number":{"required":true,"type":"integer"},"number":{"alias":"issue_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"},"since":{"type":"string"}},"url":"/repos/:owner/:repo/issues/:issue_number/comments"},"listCommentsForRepo":{"method":"GET","params":{"direction":{"enum":["asc","desc"],"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"since":{"type":"string"},"sort":{"enum":["created","updated"],"type":"string"}},"url":"/repos/:owner/:repo/issues/comments"},"listEvents":{"method":"GET","params":{"issue_number":{"required":true,"type":"integer"},"number":{"alias":"issue_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/issues/:issue_number/events"},"listEventsForRepo":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/issues/events"},"listEventsForTimeline":{"headers":{"accept":"application/vnd.github.mockingbird-preview+json"},"method":"GET","params":{"issue_number":{"required":true,"type":"integer"},"number":{"alias":"issue_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/issues/:issue_number/timeline"},"listForAuthenticatedUser":{"method":"GET","params":{"direction":{"enum":["asc","desc"],"type":"string"},"filter":{"enum":["assigned","created","mentioned","subscribed","all"],"type":"string"},"labels":{"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"since":{"type":"string"},"sort":{"enum":["created","updated","comments"],"type":"string"},"state":{"enum":["open","closed","all"],"type":"string"}},"url":"/user/issues"},"listForOrg":{"method":"GET","params":{"direction":{"enum":["asc","desc"],"type":"string"},"filter":{"enum":["assigned","created","mentioned","subscribed","all"],"type":"string"},"labels":{"type":"string"},"org":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"since":{"type":"string"},"sort":{"enum":["created","updated","comments"],"type":"string"},"state":{"enum":["open","closed","all"],"type":"string"}},"url":"/orgs/:org/issues"},"listForRepo":{"method":"GET","params":{"assignee":{"type":"string"},"creator":{"type":"string"},"direction":{"enum":["asc","desc"],"type":"string"},"labels":{"type":"string"},"mentioned":{"type":"string"},"milestone":{"type":"string"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"},"since":{"type":"string"},"sort":{"enum":["created","updated","comments"],"type":"string"},"state":{"enum":["open","closed","all"],"type":"string"}},"url":"/repos/:owner/:repo/issues"},"listLabelsForMilestone":{"method":"GET","params":{"milestone_number":{"required":true,"type":"integer"},"number":{"alias":"milestone_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/milestones/:milestone_number/labels"},"listLabelsForRepo":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/labels"},"listLabelsOnIssue":{"method":"GET","params":{"issue_number":{"required":true,"type":"integer"},"number":{"alias":"issue_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/issues/:issue_number/labels"},"listMilestonesForRepo":{"method":"GET","params":{"direction":{"enum":["asc","desc"],"type":"string"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"},"sort":{"enum":["due_on","completeness"],"type":"string"},"state":{"enum":["open","closed","all"],"type":"string"}},"url":"/repos/:owner/:repo/milestones"},"lock":{"method":"PUT","params":{"issue_number":{"required":true,"type":"integer"},"lock_reason":{"enum":["off-topic","too heated","resolved","spam"],"type":"string"},"number":{"alias":"issue_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/issues/:issue_number/lock"},"removeAssignees":{"method":"DELETE","params":{"assignees":{"type":"string[]"},"issue_number":{"required":true,"type":"integer"},"number":{"alias":"issue_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/issues/:issue_number/assignees"},"removeLabel":{"method":"DELETE","params":{"issue_number":{"required":true,"type":"integer"},"name":{"required":true,"type":"string"},"number":{"alias":"issue_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/issues/:issue_number/labels/:name"},"removeLabels":{"method":"DELETE","params":{"issue_number":{"required":true,"type":"integer"},"number":{"alias":"issue_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/issues/:issue_number/labels"},"replaceLabels":{"method":"PUT","params":{"issue_number":{"required":true,"type":"integer"},"labels":{"type":"string[]"},"number":{"alias":"issue_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/issues/:issue_number/labels"},"unlock":{"method":"DELETE","params":{"issue_number":{"required":true,"type":"integer"},"number":{"alias":"issue_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/issues/:issue_number/lock"},"update":{"method":"PATCH","params":{"assignee":{"type":"string"},"assignees":{"type":"string[]"},"body":{"type":"string"},"issue_number":{"required":true,"type":"integer"},"labels":{"type":"string[]"},"milestone":{"allowNull":true,"type":"integer"},"number":{"alias":"issue_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"state":{"enum":["open","closed"],"type":"string"},"title":{"type":"string"}},"url":"/repos/:owner/:repo/issues/:issue_number"},"updateComment":{"method":"PATCH","params":{"body":{"required":true,"type":"string"},"comment_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/issues/comments/:comment_id"},"updateLabel":{"method":"PATCH","params":{"color":{"type":"string"},"current_name":{"required":true,"type":"string"},"description":{"type":"string"},"name":{"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/labels/:current_name"},"updateMilestone":{"method":"PATCH","params":{"description":{"type":"string"},"due_on":{"type":"string"},"milestone_number":{"required":true,"type":"integer"},"number":{"alias":"milestone_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"state":{"enum":["open","closed"],"type":"string"},"title":{"type":"string"}},"url":"/repos/:owner/:repo/milestones/:milestone_number"}},"licenses":{"get":{"method":"GET","params":{"license":{"required":true,"type":"string"}},"url":"/licenses/:license"},"getForRepo":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/license"},"list":{"deprecated":"octokit.licenses.list() has been renamed to octokit.licenses.listCommonlyUsed() (2019-03-05)","method":"GET","params":{},"url":"/licenses"},"listCommonlyUsed":{"method":"GET","params":{},"url":"/licenses"}},"markdown":{"render":{"method":"POST","params":{"context":{"type":"string"},"mode":{"enum":["markdown","gfm"],"type":"string"},"text":{"required":true,"type":"string"}},"url":"/markdown"},"renderRaw":{"headers":{"content-type":"text/plain; charset=utf-8"},"method":"POST","params":{"data":{"mapTo":"data","required":true,"type":"string"}},"url":"/markdown/raw"}},"meta":{"get":{"method":"GET","params":{},"url":"/meta"}},"migrations":{"cancelImport":{"headers":{"accept":"application/vnd.github.barred-rock-preview+json"},"method":"DELETE","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/import"},"deleteArchiveForAuthenticatedUser":{"headers":{"accept":"application/vnd.github.wyandotte-preview+json"},"method":"DELETE","params":{"migration_id":{"required":true,"type":"integer"}},"url":"/user/migrations/:migration_id/archive"},"deleteArchiveForOrg":{"headers":{"accept":"application/vnd.github.wyandotte-preview+json"},"method":"DELETE","params":{"migration_id":{"required":true,"type":"integer"},"org":{"required":true,"type":"string"}},"url":"/orgs/:org/migrations/:migration_id/archive"},"getArchiveForAuthenticatedUser":{"headers":{"accept":"application/vnd.github.wyandotte-preview+json"},"method":"GET","params":{"migration_id":{"required":true,"type":"integer"}},"url":"/user/migrations/:migration_id/archive"},"getArchiveForOrg":{"headers":{"accept":"application/vnd.github.wyandotte-preview+json"},"method":"GET","params":{"migration_id":{"required":true,"type":"integer"},"org":{"required":true,"type":"string"}},"url":"/orgs/:org/migrations/:migration_id/archive"},"getCommitAuthors":{"headers":{"accept":"application/vnd.github.barred-rock-preview+json"},"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"since":{"type":"string"}},"url":"/repos/:owner/:repo/import/authors"},"getImportProgress":{"headers":{"accept":"application/vnd.github.barred-rock-preview+json"},"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/import"},"getLargeFiles":{"headers":{"accept":"application/vnd.github.barred-rock-preview+json"},"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/import/large_files"},"getStatusForAuthenticatedUser":{"headers":{"accept":"application/vnd.github.wyandotte-preview+json"},"method":"GET","params":{"migration_id":{"required":true,"type":"integer"}},"url":"/user/migrations/:migration_id"},"getStatusForOrg":{"headers":{"accept":"application/vnd.github.wyandotte-preview+json"},"method":"GET","params":{"migration_id":{"required":true,"type":"integer"},"org":{"required":true,"type":"string"}},"url":"/orgs/:org/migrations/:migration_id"},"listForAuthenticatedUser":{"headers":{"accept":"application/vnd.github.wyandotte-preview+json"},"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/user/migrations"},"listForOrg":{"headers":{"accept":"application/vnd.github.wyandotte-preview+json"},"method":"GET","params":{"org":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/orgs/:org/migrations"},"mapCommitAuthor":{"headers":{"accept":"application/vnd.github.barred-rock-preview+json"},"method":"PATCH","params":{"author_id":{"required":true,"type":"integer"},"email":{"type":"string"},"name":{"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/import/authors/:author_id"},"setLfsPreference":{"headers":{"accept":"application/vnd.github.barred-rock-preview+json"},"method":"PATCH","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"use_lfs":{"enum":["opt_in","opt_out"],"required":true,"type":"string"}},"url":"/repos/:owner/:repo/import/lfs"},"startForAuthenticatedUser":{"method":"POST","params":{"exclude_attachments":{"type":"boolean"},"lock_repositories":{"type":"boolean"},"repositories":{"required":true,"type":"string[]"}},"url":"/user/migrations"},"startForOrg":{"method":"POST","params":{"exclude_attachments":{"type":"boolean"},"lock_repositories":{"type":"boolean"},"org":{"required":true,"type":"string"},"repositories":{"required":true,"type":"string[]"}},"url":"/orgs/:org/migrations"},"startImport":{"headers":{"accept":"application/vnd.github.barred-rock-preview+json"},"method":"PUT","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"tfvc_project":{"type":"string"},"vcs":{"enum":["subversion","git","mercurial","tfvc"],"type":"string"},"vcs_password":{"type":"string"},"vcs_url":{"required":true,"type":"string"},"vcs_username":{"type":"string"}},"url":"/repos/:owner/:repo/import"},"unlockRepoForAuthenticatedUser":{"headers":{"accept":"application/vnd.github.wyandotte-preview+json"},"method":"DELETE","params":{"migration_id":{"required":true,"type":"integer"},"repo_name":{"required":true,"type":"string"}},"url":"/user/migrations/:migration_id/repos/:repo_name/lock"},"unlockRepoForOrg":{"headers":{"accept":"application/vnd.github.wyandotte-preview+json"},"method":"DELETE","params":{"migration_id":{"required":true,"type":"integer"},"org":{"required":true,"type":"string"},"repo_name":{"required":true,"type":"string"}},"url":"/orgs/:org/migrations/:migration_id/repos/:repo_name/lock"},"updateImport":{"headers":{"accept":"application/vnd.github.barred-rock-preview+json"},"method":"PATCH","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"vcs_password":{"type":"string"},"vcs_username":{"type":"string"}},"url":"/repos/:owner/:repo/import"}},"oauthAuthorizations":{"checkAuthorization":{"method":"GET","params":{"access_token":{"required":true,"type":"string"},"client_id":{"required":true,"type":"string"}},"url":"/applications/:client_id/tokens/:access_token"},"createAuthorization":{"method":"POST","params":{"client_id":{"type":"string"},"client_secret":{"type":"string"},"fingerprint":{"type":"string"},"note":{"required":true,"type":"string"},"note_url":{"type":"string"},"scopes":{"type":"string[]"}},"url":"/authorizations"},"deleteAuthorization":{"method":"DELETE","params":{"authorization_id":{"required":true,"type":"integer"}},"url":"/authorizations/:authorization_id"},"deleteGrant":{"method":"DELETE","params":{"grant_id":{"required":true,"type":"integer"}},"url":"/applications/grants/:grant_id"},"getAuthorization":{"method":"GET","params":{"authorization_id":{"required":true,"type":"integer"}},"url":"/authorizations/:authorization_id"},"getGrant":{"method":"GET","params":{"grant_id":{"required":true,"type":"integer"}},"url":"/applications/grants/:grant_id"},"getOrCreateAuthorizationForApp":{"method":"PUT","params":{"client_id":{"required":true,"type":"string"},"client_secret":{"required":true,"type":"string"},"fingerprint":{"type":"string"},"note":{"type":"string"},"note_url":{"type":"string"},"scopes":{"type":"string[]"}},"url":"/authorizations/clients/:client_id"},"getOrCreateAuthorizationForAppAndFingerprint":{"method":"PUT","params":{"client_id":{"required":true,"type":"string"},"client_secret":{"required":true,"type":"string"},"fingerprint":{"required":true,"type":"string"},"note":{"type":"string"},"note_url":{"type":"string"},"scopes":{"type":"string[]"}},"url":"/authorizations/clients/:client_id/:fingerprint"},"getOrCreateAuthorizationForAppFingerprint":{"deprecated":"octokit.oauthAuthorizations.getOrCreateAuthorizationForAppFingerprint() has been renamed to octokit.oauthAuthorizations.getOrCreateAuthorizationForAppAndFingerprint() (2018-12-27)","method":"PUT","params":{"client_id":{"required":true,"type":"string"},"client_secret":{"required":true,"type":"string"},"fingerprint":{"required":true,"type":"string"},"note":{"type":"string"},"note_url":{"type":"string"},"scopes":{"type":"string[]"}},"url":"/authorizations/clients/:client_id/:fingerprint"},"listAuthorizations":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/authorizations"},"listGrants":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/applications/grants"},"resetAuthorization":{"method":"POST","params":{"access_token":{"required":true,"type":"string"},"client_id":{"required":true,"type":"string"}},"url":"/applications/:client_id/tokens/:access_token"},"revokeAuthorizationForApplication":{"method":"DELETE","params":{"access_token":{"required":true,"type":"string"},"client_id":{"required":true,"type":"string"}},"url":"/applications/:client_id/tokens/:access_token"},"revokeGrantForApplication":{"method":"DELETE","params":{"access_token":{"required":true,"type":"string"},"client_id":{"required":true,"type":"string"}},"url":"/applications/:client_id/grants/:access_token"},"updateAuthorization":{"method":"PATCH","params":{"add_scopes":{"type":"string[]"},"authorization_id":{"required":true,"type":"integer"},"fingerprint":{"type":"string"},"note":{"type":"string"},"note_url":{"type":"string"},"remove_scopes":{"type":"string[]"},"scopes":{"type":"string[]"}},"url":"/authorizations/:authorization_id"}},"orgs":{"addOrUpdateMembership":{"method":"PUT","params":{"org":{"required":true,"type":"string"},"role":{"enum":["admin","member"],"type":"string"},"username":{"required":true,"type":"string"}},"url":"/orgs/:org/memberships/:username"},"blockUser":{"method":"PUT","params":{"org":{"required":true,"type":"string"},"username":{"required":true,"type":"string"}},"url":"/orgs/:org/blocks/:username"},"checkBlockedUser":{"method":"GET","params":{"org":{"required":true,"type":"string"},"username":{"required":true,"type":"string"}},"url":"/orgs/:org/blocks/:username"},"checkMembership":{"method":"GET","params":{"org":{"required":true,"type":"string"},"username":{"required":true,"type":"string"}},"url":"/orgs/:org/members/:username"},"checkPublicMembership":{"method":"GET","params":{"org":{"required":true,"type":"string"},"username":{"required":true,"type":"string"}},"url":"/orgs/:org/public_members/:username"},"concealMembership":{"method":"DELETE","params":{"org":{"required":true,"type":"string"},"username":{"required":true,"type":"string"}},"url":"/orgs/:org/public_members/:username"},"convertMemberToOutsideCollaborator":{"method":"PUT","params":{"org":{"required":true,"type":"string"},"username":{"required":true,"type":"string"}},"url":"/orgs/:org/outside_collaborators/:username"},"createHook":{"method":"POST","params":{"active":{"type":"boolean"},"config":{"required":true,"type":"object"},"config.content_type":{"type":"string"},"config.insecure_ssl":{"type":"string"},"config.secret":{"type":"string"},"config.url":{"required":true,"type":"string"},"events":{"type":"string[]"},"name":{"required":true,"type":"string"},"org":{"required":true,"type":"string"}},"url":"/orgs/:org/hooks"},"createInvitation":{"method":"POST","params":{"email":{"type":"string"},"invitee_id":{"type":"integer"},"org":{"required":true,"type":"string"},"role":{"enum":["admin","direct_member","billing_manager"],"type":"string"},"team_ids":{"type":"integer[]"}},"url":"/orgs/:org/invitations"},"deleteHook":{"method":"DELETE","params":{"hook_id":{"required":true,"type":"integer"},"org":{"required":true,"type":"string"}},"url":"/orgs/:org/hooks/:hook_id"},"get":{"method":"GET","params":{"org":{"required":true,"type":"string"}},"url":"/orgs/:org"},"getHook":{"method":"GET","params":{"hook_id":{"required":true,"type":"integer"},"org":{"required":true,"type":"string"}},"url":"/orgs/:org/hooks/:hook_id"},"getMembership":{"method":"GET","params":{"org":{"required":true,"type":"string"},"username":{"required":true,"type":"string"}},"url":"/orgs/:org/memberships/:username"},"getMembershipForAuthenticatedUser":{"method":"GET","params":{"org":{"required":true,"type":"string"}},"url":"/user/memberships/orgs/:org"},"list":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"},"since":{"type":"string"}},"url":"/organizations"},"listBlockedUsers":{"method":"GET","params":{"org":{"required":true,"type":"string"}},"url":"/orgs/:org/blocks"},"listForAuthenticatedUser":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/user/orgs"},"listForUser":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"},"username":{"required":true,"type":"string"}},"url":"/users/:username/orgs"},"listHooks":{"method":"GET","params":{"org":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/orgs/:org/hooks"},"listInvitationTeams":{"method":"GET","params":{"invitation_id":{"required":true,"type":"integer"},"org":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/orgs/:org/invitations/:invitation_id/teams"},"listMembers":{"method":"GET","params":{"filter":{"enum":["2fa_disabled","all"],"type":"string"},"org":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"role":{"enum":["all","admin","member"],"type":"string"}},"url":"/orgs/:org/members"},"listMemberships":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"},"state":{"enum":["active","pending"],"type":"string"}},"url":"/user/memberships/orgs"},"listOutsideCollaborators":{"method":"GET","params":{"filter":{"enum":["2fa_disabled","all"],"type":"string"},"org":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/orgs/:org/outside_collaborators"},"listPendingInvitations":{"method":"GET","params":{"org":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/orgs/:org/invitations"},"listPublicMembers":{"method":"GET","params":{"org":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/orgs/:org/public_members"},"pingHook":{"method":"POST","params":{"hook_id":{"required":true,"type":"integer"},"org":{"required":true,"type":"string"}},"url":"/orgs/:org/hooks/:hook_id/pings"},"publicizeMembership":{"method":"PUT","params":{"org":{"required":true,"type":"string"},"username":{"required":true,"type":"string"}},"url":"/orgs/:org/public_members/:username"},"removeMember":{"method":"DELETE","params":{"org":{"required":true,"type":"string"},"username":{"required":true,"type":"string"}},"url":"/orgs/:org/members/:username"},"removeMembership":{"method":"DELETE","params":{"org":{"required":true,"type":"string"},"username":{"required":true,"type":"string"}},"url":"/orgs/:org/memberships/:username"},"removeOutsideCollaborator":{"method":"DELETE","params":{"org":{"required":true,"type":"string"},"username":{"required":true,"type":"string"}},"url":"/orgs/:org/outside_collaborators/:username"},"unblockUser":{"method":"DELETE","params":{"org":{"required":true,"type":"string"},"username":{"required":true,"type":"string"}},"url":"/orgs/:org/blocks/:username"},"update":{"method":"PATCH","params":{"billing_email":{"type":"string"},"company":{"type":"string"},"default_repository_permission":{"enum":["read","write","admin","none"],"type":"string"},"description":{"type":"string"},"email":{"type":"string"},"has_organization_projects":{"type":"boolean"},"has_repository_projects":{"type":"boolean"},"location":{"type":"string"},"members_allowed_repository_creation_type":{"enum":["all","private","none"],"type":"string"},"members_can_create_repositories":{"type":"boolean"},"name":{"type":"string"},"org":{"required":true,"type":"string"}},"url":"/orgs/:org"},"updateHook":{"method":"PATCH","params":{"active":{"type":"boolean"},"config":{"type":"object"},"config.content_type":{"type":"string"},"config.insecure_ssl":{"type":"string"},"config.secret":{"type":"string"},"config.url":{"required":true,"type":"string"},"events":{"type":"string[]"},"hook_id":{"required":true,"type":"integer"},"org":{"required":true,"type":"string"}},"url":"/orgs/:org/hooks/:hook_id"},"updateMembership":{"method":"PATCH","params":{"org":{"required":true,"type":"string"},"state":{"enum":["active"],"required":true,"type":"string"}},"url":"/user/memberships/orgs/:org"}},"projects":{"addCollaborator":{"headers":{"accept":"application/vnd.github.inertia-preview+json"},"method":"PUT","params":{"permission":{"enum":["read","write","admin"],"type":"string"},"project_id":{"required":true,"type":"integer"},"username":{"required":true,"type":"string"}},"url":"/projects/:project_id/collaborators/:username"},"createCard":{"headers":{"accept":"application/vnd.github.inertia-preview+json"},"method":"POST","params":{"column_id":{"required":true,"type":"integer"},"content_id":{"type":"integer"},"content_type":{"type":"string"},"note":{"type":"string"}},"url":"/projects/columns/:column_id/cards"},"createColumn":{"headers":{"accept":"application/vnd.github.inertia-preview+json"},"method":"POST","params":{"name":{"required":true,"type":"string"},"project_id":{"required":true,"type":"integer"}},"url":"/projects/:project_id/columns"},"createForAuthenticatedUser":{"headers":{"accept":"application/vnd.github.inertia-preview+json"},"method":"POST","params":{"body":{"type":"string"},"name":{"required":true,"type":"string"}},"url":"/user/projects"},"createForOrg":{"headers":{"accept":"application/vnd.github.inertia-preview+json"},"method":"POST","params":{"body":{"type":"string"},"name":{"required":true,"type":"string"},"org":{"required":true,"type":"string"}},"url":"/orgs/:org/projects"},"createForRepo":{"headers":{"accept":"application/vnd.github.inertia-preview+json"},"method":"POST","params":{"body":{"type":"string"},"name":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/projects"},"delete":{"headers":{"accept":"application/vnd.github.inertia-preview+json"},"method":"DELETE","params":{"project_id":{"required":true,"type":"integer"}},"url":"/projects/:project_id"},"deleteCard":{"headers":{"accept":"application/vnd.github.inertia-preview+json"},"method":"DELETE","params":{"card_id":{"required":true,"type":"integer"}},"url":"/projects/columns/cards/:card_id"},"deleteColumn":{"headers":{"accept":"application/vnd.github.inertia-preview+json"},"method":"DELETE","params":{"column_id":{"required":true,"type":"integer"}},"url":"/projects/columns/:column_id"},"get":{"headers":{"accept":"application/vnd.github.inertia-preview+json"},"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"},"project_id":{"required":true,"type":"integer"}},"url":"/projects/:project_id"},"getCard":{"headers":{"accept":"application/vnd.github.inertia-preview+json"},"method":"GET","params":{"card_id":{"required":true,"type":"integer"}},"url":"/projects/columns/cards/:card_id"},"getColumn":{"headers":{"accept":"application/vnd.github.inertia-preview+json"},"method":"GET","params":{"column_id":{"required":true,"type":"integer"}},"url":"/projects/columns/:column_id"},"listCards":{"headers":{"accept":"application/vnd.github.inertia-preview+json"},"method":"GET","params":{"archived_state":{"enum":["all","archived","not_archived"],"type":"string"},"column_id":{"required":true,"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/projects/columns/:column_id/cards"},"listCollaborators":{"headers":{"accept":"application/vnd.github.inertia-preview+json"},"method":"GET","params":{"affiliation":{"enum":["outside","direct","all"],"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"project_id":{"required":true,"type":"integer"}},"url":"/projects/:project_id/collaborators"},"listColumns":{"headers":{"accept":"application/vnd.github.inertia-preview+json"},"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"},"project_id":{"required":true,"type":"integer"}},"url":"/projects/:project_id/columns"},"listForOrg":{"headers":{"accept":"application/vnd.github.inertia-preview+json"},"method":"GET","params":{"org":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"state":{"enum":["open","closed","all"],"type":"string"}},"url":"/orgs/:org/projects"},"listForRepo":{"headers":{"accept":"application/vnd.github.inertia-preview+json"},"method":"GET","params":{"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"},"state":{"enum":["open","closed","all"],"type":"string"}},"url":"/repos/:owner/:repo/projects"},"listForUser":{"headers":{"accept":"application/vnd.github.inertia-preview+json"},"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"},"state":{"enum":["open","closed","all"],"type":"string"},"username":{"required":true,"type":"string"}},"url":"/users/:username/projects"},"moveCard":{"headers":{"accept":"application/vnd.github.inertia-preview+json"},"method":"POST","params":{"card_id":{"required":true,"type":"integer"},"column_id":{"type":"integer"},"position":{"required":true,"type":"string","validation":"^(top|bottom|after:\\\\d+)$"}},"url":"/projects/columns/cards/:card_id/moves"},"moveColumn":{"headers":{"accept":"application/vnd.github.inertia-preview+json"},"method":"POST","params":{"column_id":{"required":true,"type":"integer"},"position":{"required":true,"type":"string","validation":"^(first|last|after:\\\\d+)$"}},"url":"/projects/columns/:column_id/moves"},"removeCollaborator":{"headers":{"accept":"application/vnd.github.inertia-preview+json"},"method":"DELETE","params":{"project_id":{"required":true,"type":"integer"},"username":{"required":true,"type":"string"}},"url":"/projects/:project_id/collaborators/:username"},"reviewUserPermissionLevel":{"headers":{"accept":"application/vnd.github.inertia-preview+json"},"method":"GET","params":{"project_id":{"required":true,"type":"integer"},"username":{"required":true,"type":"string"}},"url":"/projects/:project_id/collaborators/:username/permission"},"update":{"headers":{"accept":"application/vnd.github.inertia-preview+json"},"method":"PATCH","params":{"body":{"type":"string"},"name":{"type":"string"},"organization_permission":{"type":"string"},"private":{"type":"boolean"},"project_id":{"required":true,"type":"integer"},"state":{"enum":["open","closed"],"type":"string"}},"url":"/projects/:project_id"},"updateCard":{"headers":{"accept":"application/vnd.github.inertia-preview+json"},"method":"PATCH","params":{"archived":{"type":"boolean"},"card_id":{"required":true,"type":"integer"},"note":{"type":"string"}},"url":"/projects/columns/cards/:card_id"},"updateColumn":{"headers":{"accept":"application/vnd.github.inertia-preview+json"},"method":"PATCH","params":{"column_id":{"required":true,"type":"integer"},"name":{"required":true,"type":"string"}},"url":"/projects/columns/:column_id"}},"pulls":{"checkIfMerged":{"method":"GET","params":{"number":{"alias":"pull_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"pull_number":{"required":true,"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/pulls/:pull_number/merge"},"create":{"method":"POST","params":{"base":{"required":true,"type":"string"},"body":{"type":"string"},"draft":{"type":"boolean"},"head":{"required":true,"type":"string"},"maintainer_can_modify":{"type":"boolean"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"title":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/pulls"},"createComment":{"method":"POST","params":{"body":{"required":true,"type":"string"},"commit_id":{"required":true,"type":"string"},"in_reply_to":{"deprecated":true,"description":"The comment ID to reply to. **Note**: This must be the ID of a top-level comment, not a reply to that comment. Replies to replies are not supported.","type":"integer"},"number":{"alias":"pull_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"path":{"required":true,"type":"string"},"position":{"required":true,"type":"integer"},"pull_number":{"required":true,"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/pulls/:pull_number/comments"},"createCommentReply":{"deprecated":"octokit.pulls.createCommentReply() has been renamed to octokit.pulls.createComment() (2019-09-09)","method":"POST","params":{"body":{"required":true,"type":"string"},"commit_id":{"required":true,"type":"string"},"in_reply_to":{"deprecated":true,"description":"The comment ID to reply to. **Note**: This must be the ID of a top-level comment, not a reply to that comment. Replies to replies are not supported.","type":"integer"},"number":{"alias":"pull_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"path":{"required":true,"type":"string"},"position":{"required":true,"type":"integer"},"pull_number":{"required":true,"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/pulls/:pull_number/comments"},"createFromIssue":{"deprecated":"octokit.pulls.createFromIssue() is deprecated, see https://developer.github.com/v3/pulls/#create-a-pull-request","method":"POST","params":{"base":{"required":true,"type":"string"},"draft":{"type":"boolean"},"head":{"required":true,"type":"string"},"issue":{"required":true,"type":"integer"},"maintainer_can_modify":{"type":"boolean"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/pulls"},"createReview":{"method":"POST","params":{"body":{"type":"string"},"comments":{"type":"object[]"},"comments[].body":{"required":true,"type":"string"},"comments[].path":{"required":true,"type":"string"},"comments[].position":{"required":true,"type":"integer"},"commit_id":{"type":"string"},"event":{"enum":["APPROVE","REQUEST_CHANGES","COMMENT"],"type":"string"},"number":{"alias":"pull_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"pull_number":{"required":true,"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/pulls/:pull_number/reviews"},"createReviewCommentReply":{"method":"POST","params":{"body":{"required":true,"type":"string"},"comment_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"pull_number":{"required":true,"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/pulls/:pull_number/comments/:comment_id/replies"},"createReviewRequest":{"method":"POST","params":{"number":{"alias":"pull_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"pull_number":{"required":true,"type":"integer"},"repo":{"required":true,"type":"string"},"reviewers":{"type":"string[]"},"team_reviewers":{"type":"string[]"}},"url":"/repos/:owner/:repo/pulls/:pull_number/requested_reviewers"},"deleteComment":{"method":"DELETE","params":{"comment_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/pulls/comments/:comment_id"},"deletePendingReview":{"method":"DELETE","params":{"number":{"alias":"pull_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"pull_number":{"required":true,"type":"integer"},"repo":{"required":true,"type":"string"},"review_id":{"required":true,"type":"integer"}},"url":"/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id"},"deleteReviewRequest":{"method":"DELETE","params":{"number":{"alias":"pull_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"pull_number":{"required":true,"type":"integer"},"repo":{"required":true,"type":"string"},"reviewers":{"type":"string[]"},"team_reviewers":{"type":"string[]"}},"url":"/repos/:owner/:repo/pulls/:pull_number/requested_reviewers"},"dismissReview":{"method":"PUT","params":{"message":{"required":true,"type":"string"},"number":{"alias":"pull_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"pull_number":{"required":true,"type":"integer"},"repo":{"required":true,"type":"string"},"review_id":{"required":true,"type":"integer"}},"url":"/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/dismissals"},"get":{"method":"GET","params":{"number":{"alias":"pull_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"pull_number":{"required":true,"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/pulls/:pull_number"},"getComment":{"method":"GET","params":{"comment_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/pulls/comments/:comment_id"},"getCommentsForReview":{"method":"GET","params":{"number":{"alias":"pull_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"pull_number":{"required":true,"type":"integer"},"repo":{"required":true,"type":"string"},"review_id":{"required":true,"type":"integer"}},"url":"/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/comments"},"getReview":{"method":"GET","params":{"number":{"alias":"pull_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"pull_number":{"required":true,"type":"integer"},"repo":{"required":true,"type":"string"},"review_id":{"required":true,"type":"integer"}},"url":"/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id"},"list":{"method":"GET","params":{"base":{"type":"string"},"direction":{"enum":["asc","desc"],"type":"string"},"head":{"type":"string"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"},"sort":{"enum":["created","updated","popularity","long-running"],"type":"string"},"state":{"enum":["open","closed","all"],"type":"string"}},"url":"/repos/:owner/:repo/pulls"},"listComments":{"method":"GET","params":{"direction":{"enum":["asc","desc"],"type":"string"},"number":{"alias":"pull_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"pull_number":{"required":true,"type":"integer"},"repo":{"required":true,"type":"string"},"since":{"type":"string"},"sort":{"enum":["created","updated"],"type":"string"}},"url":"/repos/:owner/:repo/pulls/:pull_number/comments"},"listCommentsForRepo":{"method":"GET","params":{"direction":{"enum":["asc","desc"],"type":"string"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"},"since":{"type":"string"},"sort":{"enum":["created","updated"],"type":"string"}},"url":"/repos/:owner/:repo/pulls/comments"},"listCommits":{"method":"GET","params":{"number":{"alias":"pull_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"pull_number":{"required":true,"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/pulls/:pull_number/commits"},"listFiles":{"method":"GET","params":{"number":{"alias":"pull_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"pull_number":{"required":true,"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/pulls/:pull_number/files"},"listReviewRequests":{"method":"GET","params":{"number":{"alias":"pull_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"pull_number":{"required":true,"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/pulls/:pull_number/requested_reviewers"},"listReviews":{"method":"GET","params":{"number":{"alias":"pull_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"pull_number":{"required":true,"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/pulls/:pull_number/reviews"},"merge":{"method":"PUT","params":{"commit_message":{"type":"string"},"commit_title":{"type":"string"},"merge_method":{"enum":["merge","squash","rebase"],"type":"string"},"number":{"alias":"pull_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"pull_number":{"required":true,"type":"integer"},"repo":{"required":true,"type":"string"},"sha":{"type":"string"}},"url":"/repos/:owner/:repo/pulls/:pull_number/merge"},"submitReview":{"method":"POST","params":{"body":{"type":"string"},"event":{"enum":["APPROVE","REQUEST_CHANGES","COMMENT"],"required":true,"type":"string"},"number":{"alias":"pull_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"pull_number":{"required":true,"type":"integer"},"repo":{"required":true,"type":"string"},"review_id":{"required":true,"type":"integer"}},"url":"/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/events"},"update":{"method":"PATCH","params":{"base":{"type":"string"},"body":{"type":"string"},"maintainer_can_modify":{"type":"boolean"},"number":{"alias":"pull_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"pull_number":{"required":true,"type":"integer"},"repo":{"required":true,"type":"string"},"state":{"enum":["open","closed"],"type":"string"},"title":{"type":"string"}},"url":"/repos/:owner/:repo/pulls/:pull_number"},"updateBranch":{"headers":{"accept":"application/vnd.github.lydian-preview+json"},"method":"PUT","params":{"expected_head_sha":{"type":"string"},"owner":{"required":true,"type":"string"},"pull_number":{"required":true,"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/pulls/:pull_number/update-branch"},"updateComment":{"method":"PATCH","params":{"body":{"required":true,"type":"string"},"comment_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/pulls/comments/:comment_id"},"updateReview":{"method":"PUT","params":{"body":{"required":true,"type":"string"},"number":{"alias":"pull_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"pull_number":{"required":true,"type":"integer"},"repo":{"required":true,"type":"string"},"review_id":{"required":true,"type":"integer"}},"url":"/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id"}},"rateLimit":{"get":{"method":"GET","params":{},"url":"/rate_limit"}},"reactions":{"createForCommitComment":{"headers":{"accept":"application/vnd.github.squirrel-girl-preview+json"},"method":"POST","params":{"comment_id":{"required":true,"type":"integer"},"content":{"enum":["+1","-1","laugh","confused","heart","hooray","rocket","eyes"],"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/comments/:comment_id/reactions"},"createForIssue":{"headers":{"accept":"application/vnd.github.squirrel-girl-preview+json"},"method":"POST","params":{"content":{"enum":["+1","-1","laugh","confused","heart","hooray","rocket","eyes"],"required":true,"type":"string"},"issue_number":{"required":true,"type":"integer"},"number":{"alias":"issue_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/issues/:issue_number/reactions"},"createForIssueComment":{"headers":{"accept":"application/vnd.github.squirrel-girl-preview+json"},"method":"POST","params":{"comment_id":{"required":true,"type":"integer"},"content":{"enum":["+1","-1","laugh","confused","heart","hooray","rocket","eyes"],"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/issues/comments/:comment_id/reactions"},"createForPullRequestReviewComment":{"headers":{"accept":"application/vnd.github.squirrel-girl-preview+json"},"method":"POST","params":{"comment_id":{"required":true,"type":"integer"},"content":{"enum":["+1","-1","laugh","confused","heart","hooray","rocket","eyes"],"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/pulls/comments/:comment_id/reactions"},"createForTeamDiscussion":{"headers":{"accept":"application/vnd.github.echo-preview+json,application/vnd.github.squirrel-girl-preview+json"},"method":"POST","params":{"content":{"enum":["+1","-1","laugh","confused","heart","hooray","rocket","eyes"],"required":true,"type":"string"},"discussion_number":{"required":true,"type":"integer"},"team_id":{"required":true,"type":"integer"}},"url":"/teams/:team_id/discussions/:discussion_number/reactions"},"createForTeamDiscussionComment":{"headers":{"accept":"application/vnd.github.echo-preview+json,application/vnd.github.squirrel-girl-preview+json"},"method":"POST","params":{"comment_number":{"required":true,"type":"integer"},"content":{"enum":["+1","-1","laugh","confused","heart","hooray","rocket","eyes"],"required":true,"type":"string"},"discussion_number":{"required":true,"type":"integer"},"team_id":{"required":true,"type":"integer"}},"url":"/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions"},"delete":{"headers":{"accept":"application/vnd.github.echo-preview+json,application/vnd.github.squirrel-girl-preview+json"},"method":"DELETE","params":{"reaction_id":{"required":true,"type":"integer"}},"url":"/reactions/:reaction_id"},"listForCommitComment":{"headers":{"accept":"application/vnd.github.squirrel-girl-preview+json"},"method":"GET","params":{"comment_id":{"required":true,"type":"integer"},"content":{"enum":["+1","-1","laugh","confused","heart","hooray","rocket","eyes"],"type":"string"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/comments/:comment_id/reactions"},"listForIssue":{"headers":{"accept":"application/vnd.github.squirrel-girl-preview+json"},"method":"GET","params":{"content":{"enum":["+1","-1","laugh","confused","heart","hooray","rocket","eyes"],"type":"string"},"issue_number":{"required":true,"type":"integer"},"number":{"alias":"issue_number","deprecated":true,"type":"integer"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/issues/:issue_number/reactions"},"listForIssueComment":{"headers":{"accept":"application/vnd.github.squirrel-girl-preview+json"},"method":"GET","params":{"comment_id":{"required":true,"type":"integer"},"content":{"enum":["+1","-1","laugh","confused","heart","hooray","rocket","eyes"],"type":"string"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/issues/comments/:comment_id/reactions"},"listForPullRequestReviewComment":{"headers":{"accept":"application/vnd.github.squirrel-girl-preview+json"},"method":"GET","params":{"comment_id":{"required":true,"type":"integer"},"content":{"enum":["+1","-1","laugh","confused","heart","hooray","rocket","eyes"],"type":"string"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/pulls/comments/:comment_id/reactions"},"listForTeamDiscussion":{"headers":{"accept":"application/vnd.github.echo-preview+json,application/vnd.github.squirrel-girl-preview+json"},"method":"GET","params":{"content":{"enum":["+1","-1","laugh","confused","heart","hooray","rocket","eyes"],"type":"string"},"discussion_number":{"required":true,"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"},"team_id":{"required":true,"type":"integer"}},"url":"/teams/:team_id/discussions/:discussion_number/reactions"},"listForTeamDiscussionComment":{"headers":{"accept":"application/vnd.github.echo-preview+json,application/vnd.github.squirrel-girl-preview+json"},"method":"GET","params":{"comment_number":{"required":true,"type":"integer"},"content":{"enum":["+1","-1","laugh","confused","heart","hooray","rocket","eyes"],"type":"string"},"discussion_number":{"required":true,"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"},"team_id":{"required":true,"type":"integer"}},"url":"/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions"}},"repos":{"acceptInvitation":{"method":"PATCH","params":{"invitation_id":{"required":true,"type":"integer"}},"url":"/user/repository_invitations/:invitation_id"},"addCollaborator":{"method":"PUT","params":{"owner":{"required":true,"type":"string"},"permission":{"enum":["pull","push","admin"],"type":"string"},"repo":{"required":true,"type":"string"},"username":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/collaborators/:username"},"addDeployKey":{"method":"POST","params":{"key":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"read_only":{"type":"boolean"},"repo":{"required":true,"type":"string"},"title":{"type":"string"}},"url":"/repos/:owner/:repo/keys"},"addProtectedBranchAdminEnforcement":{"method":"POST","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch/protection/enforce_admins"},"addProtectedBranchAppRestrictions":{"method":"POST","params":{"apps":{"mapTo":"data","required":true,"type":"string[]"},"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch/protection/restrictions/apps"},"addProtectedBranchRequiredSignatures":{"headers":{"accept":"application/vnd.github.zzzax-preview+json"},"method":"POST","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch/protection/required_signatures"},"addProtectedBranchRequiredStatusChecksContexts":{"method":"POST","params":{"branch":{"required":true,"type":"string"},"contexts":{"mapTo":"data","required":true,"type":"string[]"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts"},"addProtectedBranchTeamRestrictions":{"method":"POST","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"teams":{"mapTo":"data","required":true,"type":"string[]"}},"url":"/repos/:owner/:repo/branches/:branch/protection/restrictions/teams"},"addProtectedBranchUserRestrictions":{"method":"POST","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"users":{"mapTo":"data","required":true,"type":"string[]"}},"url":"/repos/:owner/:repo/branches/:branch/protection/restrictions/users"},"checkCollaborator":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"username":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/collaborators/:username"},"checkVulnerabilityAlerts":{"headers":{"accept":"application/vnd.github.dorian-preview+json"},"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/vulnerability-alerts"},"compareCommits":{"method":"GET","params":{"base":{"required":true,"type":"string"},"head":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/compare/:base...:head"},"createCommitComment":{"method":"POST","params":{"body":{"required":true,"type":"string"},"commit_sha":{"required":true,"type":"string"},"line":{"type":"integer"},"owner":{"required":true,"type":"string"},"path":{"type":"string"},"position":{"type":"integer"},"repo":{"required":true,"type":"string"},"sha":{"alias":"commit_sha","deprecated":true,"type":"string"}},"url":"/repos/:owner/:repo/commits/:commit_sha/comments"},"createDeployment":{"method":"POST","params":{"auto_merge":{"type":"boolean"},"description":{"type":"string"},"environment":{"type":"string"},"owner":{"required":true,"type":"string"},"payload":{"type":"string"},"production_environment":{"type":"boolean"},"ref":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"required_contexts":{"type":"string[]"},"task":{"type":"string"},"transient_environment":{"type":"boolean"}},"url":"/repos/:owner/:repo/deployments"},"createDeploymentStatus":{"method":"POST","params":{"auto_inactive":{"type":"boolean"},"deployment_id":{"required":true,"type":"integer"},"description":{"type":"string"},"environment":{"enum":["production","staging","qa"],"type":"string"},"environment_url":{"type":"string"},"log_url":{"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"state":{"enum":["error","failure","inactive","in_progress","queued","pending","success"],"required":true,"type":"string"},"target_url":{"type":"string"}},"url":"/repos/:owner/:repo/deployments/:deployment_id/statuses"},"createDispatchEvent":{"headers":{"accept":"application/vnd.github.everest-preview+json"},"method":"POST","params":{"event_type":{"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/dispatches"},"createFile":{"deprecated":"octokit.repos.createFile() has been renamed to octokit.repos.createOrUpdateFile() (2019-06-07)","method":"PUT","params":{"author":{"type":"object"},"author.email":{"required":true,"type":"string"},"author.name":{"required":true,"type":"string"},"branch":{"type":"string"},"committer":{"type":"object"},"committer.email":{"required":true,"type":"string"},"committer.name":{"required":true,"type":"string"},"content":{"required":true,"type":"string"},"message":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"path":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"sha":{"type":"string"}},"url":"/repos/:owner/:repo/contents/:path"},"createForAuthenticatedUser":{"method":"POST","params":{"allow_merge_commit":{"type":"boolean"},"allow_rebase_merge":{"type":"boolean"},"allow_squash_merge":{"type":"boolean"},"auto_init":{"type":"boolean"},"description":{"type":"string"},"gitignore_template":{"type":"string"},"has_issues":{"type":"boolean"},"has_projects":{"type":"boolean"},"has_wiki":{"type":"boolean"},"homepage":{"type":"string"},"is_template":{"type":"boolean"},"license_template":{"type":"string"},"name":{"required":true,"type":"string"},"private":{"type":"boolean"},"team_id":{"type":"integer"}},"url":"/user/repos"},"createFork":{"method":"POST","params":{"organization":{"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/forks"},"createHook":{"method":"POST","params":{"active":{"type":"boolean"},"config":{"required":true,"type":"object"},"config.content_type":{"type":"string"},"config.insecure_ssl":{"type":"string"},"config.secret":{"type":"string"},"config.url":{"required":true,"type":"string"},"events":{"type":"string[]"},"name":{"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/hooks"},"createInOrg":{"method":"POST","params":{"allow_merge_commit":{"type":"boolean"},"allow_rebase_merge":{"type":"boolean"},"allow_squash_merge":{"type":"boolean"},"auto_init":{"type":"boolean"},"description":{"type":"string"},"gitignore_template":{"type":"string"},"has_issues":{"type":"boolean"},"has_projects":{"type":"boolean"},"has_wiki":{"type":"boolean"},"homepage":{"type":"string"},"is_template":{"type":"boolean"},"license_template":{"type":"string"},"name":{"required":true,"type":"string"},"org":{"required":true,"type":"string"},"private":{"type":"boolean"},"team_id":{"type":"integer"}},"url":"/orgs/:org/repos"},"createOrUpdateFile":{"method":"PUT","params":{"author":{"type":"object"},"author.email":{"required":true,"type":"string"},"author.name":{"required":true,"type":"string"},"branch":{"type":"string"},"committer":{"type":"object"},"committer.email":{"required":true,"type":"string"},"committer.name":{"required":true,"type":"string"},"content":{"required":true,"type":"string"},"message":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"path":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"sha":{"type":"string"}},"url":"/repos/:owner/:repo/contents/:path"},"createRelease":{"method":"POST","params":{"body":{"type":"string"},"draft":{"type":"boolean"},"name":{"type":"string"},"owner":{"required":true,"type":"string"},"prerelease":{"type":"boolean"},"repo":{"required":true,"type":"string"},"tag_name":{"required":true,"type":"string"},"target_commitish":{"type":"string"}},"url":"/repos/:owner/:repo/releases"},"createStatus":{"method":"POST","params":{"context":{"type":"string"},"description":{"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"sha":{"required":true,"type":"string"},"state":{"enum":["error","failure","pending","success"],"required":true,"type":"string"},"target_url":{"type":"string"}},"url":"/repos/:owner/:repo/statuses/:sha"},"createUsingTemplate":{"headers":{"accept":"application/vnd.github.baptiste-preview+json"},"method":"POST","params":{"description":{"type":"string"},"name":{"required":true,"type":"string"},"owner":{"type":"string"},"private":{"type":"boolean"},"template_owner":{"required":true,"type":"string"},"template_repo":{"required":true,"type":"string"}},"url":"/repos/:template_owner/:template_repo/generate"},"declineInvitation":{"method":"DELETE","params":{"invitation_id":{"required":true,"type":"integer"}},"url":"/user/repository_invitations/:invitation_id"},"delete":{"method":"DELETE","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo"},"deleteCommitComment":{"method":"DELETE","params":{"comment_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/comments/:comment_id"},"deleteDownload":{"method":"DELETE","params":{"download_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/downloads/:download_id"},"deleteFile":{"method":"DELETE","params":{"author":{"type":"object"},"author.email":{"type":"string"},"author.name":{"type":"string"},"branch":{"type":"string"},"committer":{"type":"object"},"committer.email":{"type":"string"},"committer.name":{"type":"string"},"message":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"path":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"sha":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/contents/:path"},"deleteHook":{"method":"DELETE","params":{"hook_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/hooks/:hook_id"},"deleteInvitation":{"method":"DELETE","params":{"invitation_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/invitations/:invitation_id"},"deleteRelease":{"method":"DELETE","params":{"owner":{"required":true,"type":"string"},"release_id":{"required":true,"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/releases/:release_id"},"deleteReleaseAsset":{"method":"DELETE","params":{"asset_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/releases/assets/:asset_id"},"disableAutomatedSecurityFixes":{"headers":{"accept":"application/vnd.github.london-preview+json"},"method":"DELETE","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/automated-security-fixes"},"disablePagesSite":{"headers":{"accept":"application/vnd.github.switcheroo-preview+json"},"method":"DELETE","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/pages"},"disableVulnerabilityAlerts":{"headers":{"accept":"application/vnd.github.dorian-preview+json"},"method":"DELETE","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/vulnerability-alerts"},"enableAutomatedSecurityFixes":{"headers":{"accept":"application/vnd.github.london-preview+json"},"method":"PUT","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/automated-security-fixes"},"enablePagesSite":{"headers":{"accept":"application/vnd.github.switcheroo-preview+json"},"method":"POST","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"source":{"type":"object"},"source.branch":{"enum":["master","gh-pages"],"type":"string"},"source.path":{"type":"string"}},"url":"/repos/:owner/:repo/pages"},"enableVulnerabilityAlerts":{"headers":{"accept":"application/vnd.github.dorian-preview+json"},"method":"PUT","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/vulnerability-alerts"},"get":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo"},"getAppsWithAccessToProtectedBranch":{"method":"GET","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch/protection/restrictions/apps"},"getArchiveLink":{"method":"GET","params":{"archive_format":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"ref":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/:archive_format/:ref"},"getBranch":{"method":"GET","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch"},"getBranchProtection":{"method":"GET","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch/protection"},"getClones":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"per":{"enum":["day","week"],"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/traffic/clones"},"getCodeFrequencyStats":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/stats/code_frequency"},"getCollaboratorPermissionLevel":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"username":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/collaborators/:username/permission"},"getCombinedStatusForRef":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"ref":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/commits/:ref/status"},"getCommit":{"method":"GET","params":{"commit_sha":{"alias":"ref","deprecated":true,"type":"string"},"owner":{"required":true,"type":"string"},"ref":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"sha":{"alias":"ref","deprecated":true,"type":"string"}},"url":"/repos/:owner/:repo/commits/:ref"},"getCommitActivityStats":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/stats/commit_activity"},"getCommitComment":{"method":"GET","params":{"comment_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/comments/:comment_id"},"getCommitRefSha":{"deprecated":"octokit.repos.getCommitRefSha() is deprecated, see https://developer.github.com/v3/repos/commits/#get-a-single-commit","headers":{"accept":"application/vnd.github.v3.sha"},"method":"GET","params":{"owner":{"required":true,"type":"string"},"ref":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/commits/:ref"},"getContents":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"path":{"required":true,"type":"string"},"ref":{"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/contents/:path"},"getContributorsStats":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/stats/contributors"},"getDeployKey":{"method":"GET","params":{"key_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/keys/:key_id"},"getDeployment":{"method":"GET","params":{"deployment_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/deployments/:deployment_id"},"getDeploymentStatus":{"method":"GET","params":{"deployment_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"status_id":{"required":true,"type":"integer"}},"url":"/repos/:owner/:repo/deployments/:deployment_id/statuses/:status_id"},"getDownload":{"method":"GET","params":{"download_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/downloads/:download_id"},"getHook":{"method":"GET","params":{"hook_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/hooks/:hook_id"},"getLatestPagesBuild":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/pages/builds/latest"},"getLatestRelease":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/releases/latest"},"getPages":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/pages"},"getPagesBuild":{"method":"GET","params":{"build_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/pages/builds/:build_id"},"getParticipationStats":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/stats/participation"},"getProtectedBranchAdminEnforcement":{"method":"GET","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch/protection/enforce_admins"},"getProtectedBranchPullRequestReviewEnforcement":{"method":"GET","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews"},"getProtectedBranchRequiredSignatures":{"headers":{"accept":"application/vnd.github.zzzax-preview+json"},"method":"GET","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch/protection/required_signatures"},"getProtectedBranchRequiredStatusChecks":{"method":"GET","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch/protection/required_status_checks"},"getProtectedBranchRestrictions":{"method":"GET","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch/protection/restrictions"},"getPunchCardStats":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/stats/punch_card"},"getReadme":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"ref":{"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/readme"},"getRelease":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"release_id":{"required":true,"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/releases/:release_id"},"getReleaseAsset":{"method":"GET","params":{"asset_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/releases/assets/:asset_id"},"getReleaseByTag":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"tag":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/releases/tags/:tag"},"getTeamsWithAccessToProtectedBranch":{"method":"GET","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch/protection/restrictions/teams"},"getTopPaths":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/traffic/popular/paths"},"getTopReferrers":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/traffic/popular/referrers"},"getUsersWithAccessToProtectedBranch":{"method":"GET","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch/protection/restrictions/users"},"getViews":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"per":{"enum":["day","week"],"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/traffic/views"},"list":{"method":"GET","params":{"affiliation":{"type":"string"},"direction":{"enum":["asc","desc"],"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"sort":{"enum":["created","updated","pushed","full_name"],"type":"string"},"type":{"enum":["all","owner","public","private","member"],"type":"string"},"visibility":{"enum":["all","public","private"],"type":"string"}},"url":"/user/repos"},"listAppsWithAccessToProtectedBranch":{"deprecated":"octokit.repos.listAppsWithAccessToProtectedBranch() has been renamed to octokit.repos.getAppsWithAccessToProtectedBranch() (2019-09-13)","method":"GET","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch/protection/restrictions/apps"},"listAssetsForRelease":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"release_id":{"required":true,"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/releases/:release_id/assets"},"listBranches":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"protected":{"type":"boolean"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches"},"listBranchesForHeadCommit":{"headers":{"accept":"application/vnd.github.groot-preview+json"},"method":"GET","params":{"commit_sha":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/commits/:commit_sha/branches-where-head"},"listCollaborators":{"method":"GET","params":{"affiliation":{"enum":["outside","direct","all"],"type":"string"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/collaborators"},"listCommentsForCommit":{"method":"GET","params":{"commit_sha":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"ref":{"alias":"commit_sha","deprecated":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/commits/:commit_sha/comments"},"listCommitComments":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/comments"},"listCommits":{"method":"GET","params":{"author":{"type":"string"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"path":{"type":"string"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"},"sha":{"type":"string"},"since":{"type":"string"},"until":{"type":"string"}},"url":"/repos/:owner/:repo/commits"},"listContributors":{"method":"GET","params":{"anon":{"type":"string"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/contributors"},"listDeployKeys":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/keys"},"listDeploymentStatuses":{"method":"GET","params":{"deployment_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/deployments/:deployment_id/statuses"},"listDeployments":{"method":"GET","params":{"environment":{"type":"string"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"ref":{"type":"string"},"repo":{"required":true,"type":"string"},"sha":{"type":"string"},"task":{"type":"string"}},"url":"/repos/:owner/:repo/deployments"},"listDownloads":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/downloads"},"listForOrg":{"method":"GET","params":{"direction":{"enum":["asc","desc"],"type":"string"},"org":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"sort":{"enum":["created","updated","pushed","full_name"],"type":"string"},"type":{"enum":["all","public","private","forks","sources","member"],"type":"string"}},"url":"/orgs/:org/repos"},"listForUser":{"method":"GET","params":{"direction":{"enum":["asc","desc"],"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"sort":{"enum":["created","updated","pushed","full_name"],"type":"string"},"type":{"enum":["all","owner","member"],"type":"string"},"username":{"required":true,"type":"string"}},"url":"/users/:username/repos"},"listForks":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"},"sort":{"enum":["newest","oldest","stargazers"],"type":"string"}},"url":"/repos/:owner/:repo/forks"},"listHooks":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/hooks"},"listInvitations":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/invitations"},"listInvitationsForAuthenticatedUser":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/user/repository_invitations"},"listLanguages":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/languages"},"listPagesBuilds":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/pages/builds"},"listProtectedBranchRequiredStatusChecksContexts":{"method":"GET","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts"},"listProtectedBranchTeamRestrictions":{"deprecated":"octokit.repos.listProtectedBranchTeamRestrictions() has been renamed to octokit.repos.getTeamsWithAccessToProtectedBranch() (2019-09-09)","method":"GET","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch/protection/restrictions/teams"},"listProtectedBranchUserRestrictions":{"deprecated":"octokit.repos.listProtectedBranchUserRestrictions() has been renamed to octokit.repos.getUsersWithAccessToProtectedBranch() (2019-09-09)","method":"GET","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch/protection/restrictions/users"},"listPublic":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"},"since":{"type":"string"}},"url":"/repositories"},"listPullRequestsAssociatedWithCommit":{"headers":{"accept":"application/vnd.github.groot-preview+json"},"method":"GET","params":{"commit_sha":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/commits/:commit_sha/pulls"},"listReleases":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/releases"},"listStatusesForRef":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"ref":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/commits/:ref/statuses"},"listTags":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/tags"},"listTeams":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/teams"},"listTeamsWithAccessToProtectedBranch":{"deprecated":"octokit.repos.listTeamsWithAccessToProtectedBranch() has been renamed to octokit.repos.getTeamsWithAccessToProtectedBranch() (2019-09-13)","method":"GET","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch/protection/restrictions/teams"},"listTopics":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/topics"},"listUsersWithAccessToProtectedBranch":{"deprecated":"octokit.repos.listUsersWithAccessToProtectedBranch() has been renamed to octokit.repos.getUsersWithAccessToProtectedBranch() (2019-09-13)","method":"GET","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch/protection/restrictions/users"},"merge":{"method":"POST","params":{"base":{"required":true,"type":"string"},"commit_message":{"type":"string"},"head":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/merges"},"pingHook":{"method":"POST","params":{"hook_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/hooks/:hook_id/pings"},"removeBranchProtection":{"method":"DELETE","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch/protection"},"removeCollaborator":{"method":"DELETE","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"username":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/collaborators/:username"},"removeDeployKey":{"method":"DELETE","params":{"key_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/keys/:key_id"},"removeProtectedBranchAdminEnforcement":{"method":"DELETE","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch/protection/enforce_admins"},"removeProtectedBranchAppRestrictions":{"method":"DELETE","params":{"apps":{"mapTo":"data","required":true,"type":"string[]"},"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch/protection/restrictions/apps"},"removeProtectedBranchPullRequestReviewEnforcement":{"method":"DELETE","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews"},"removeProtectedBranchRequiredSignatures":{"headers":{"accept":"application/vnd.github.zzzax-preview+json"},"method":"DELETE","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch/protection/required_signatures"},"removeProtectedBranchRequiredStatusChecks":{"method":"DELETE","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch/protection/required_status_checks"},"removeProtectedBranchRequiredStatusChecksContexts":{"method":"DELETE","params":{"branch":{"required":true,"type":"string"},"contexts":{"mapTo":"data","required":true,"type":"string[]"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts"},"removeProtectedBranchRestrictions":{"method":"DELETE","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch/protection/restrictions"},"removeProtectedBranchTeamRestrictions":{"method":"DELETE","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"teams":{"mapTo":"data","required":true,"type":"string[]"}},"url":"/repos/:owner/:repo/branches/:branch/protection/restrictions/teams"},"removeProtectedBranchUserRestrictions":{"method":"DELETE","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"users":{"mapTo":"data","required":true,"type":"string[]"}},"url":"/repos/:owner/:repo/branches/:branch/protection/restrictions/users"},"replaceProtectedBranchAppRestrictions":{"method":"PUT","params":{"apps":{"mapTo":"data","required":true,"type":"string[]"},"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch/protection/restrictions/apps"},"replaceProtectedBranchRequiredStatusChecksContexts":{"method":"PUT","params":{"branch":{"required":true,"type":"string"},"contexts":{"mapTo":"data","required":true,"type":"string[]"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts"},"replaceProtectedBranchTeamRestrictions":{"method":"PUT","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"teams":{"mapTo":"data","required":true,"type":"string[]"}},"url":"/repos/:owner/:repo/branches/:branch/protection/restrictions/teams"},"replaceProtectedBranchUserRestrictions":{"method":"PUT","params":{"branch":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"users":{"mapTo":"data","required":true,"type":"string[]"}},"url":"/repos/:owner/:repo/branches/:branch/protection/restrictions/users"},"replaceTopics":{"method":"PUT","params":{"names":{"required":true,"type":"string[]"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/topics"},"requestPageBuild":{"headers":{"accept":"application/vnd.github.mister-fantastic-preview+json"},"method":"POST","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/pages/builds"},"retrieveCommunityProfileMetrics":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/community/profile"},"testPushHook":{"method":"POST","params":{"hook_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/hooks/:hook_id/tests"},"transfer":{"headers":{"accept":"application/vnd.github.nightshade-preview+json"},"method":"POST","params":{"new_owner":{"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"team_ids":{"type":"integer[]"}},"url":"/repos/:owner/:repo/transfer"},"update":{"method":"PATCH","params":{"allow_merge_commit":{"type":"boolean"},"allow_rebase_merge":{"type":"boolean"},"allow_squash_merge":{"type":"boolean"},"archived":{"type":"boolean"},"default_branch":{"type":"string"},"description":{"type":"string"},"has_issues":{"type":"boolean"},"has_projects":{"type":"boolean"},"has_wiki":{"type":"boolean"},"homepage":{"type":"string"},"is_template":{"type":"boolean"},"name":{"type":"string"},"owner":{"required":true,"type":"string"},"private":{"type":"boolean"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo"},"updateBranchProtection":{"method":"PUT","params":{"branch":{"required":true,"type":"string"},"enforce_admins":{"allowNull":true,"required":true,"type":"boolean"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"required_pull_request_reviews":{"allowNull":true,"required":true,"type":"object"},"required_pull_request_reviews.dismiss_stale_reviews":{"type":"boolean"},"required_pull_request_reviews.dismissal_restrictions":{"type":"object"},"required_pull_request_reviews.dismissal_restrictions.teams":{"type":"string[]"},"required_pull_request_reviews.dismissal_restrictions.users":{"type":"string[]"},"required_pull_request_reviews.require_code_owner_reviews":{"type":"boolean"},"required_pull_request_reviews.required_approving_review_count":{"type":"integer"},"required_status_checks":{"allowNull":true,"required":true,"type":"object"},"required_status_checks.contexts":{"required":true,"type":"string[]"},"required_status_checks.strict":{"required":true,"type":"boolean"},"restrictions":{"allowNull":true,"required":true,"type":"object"},"restrictions.apps":{"type":"string[]"},"restrictions.teams":{"required":true,"type":"string[]"},"restrictions.users":{"required":true,"type":"string[]"}},"url":"/repos/:owner/:repo/branches/:branch/protection"},"updateCommitComment":{"method":"PATCH","params":{"body":{"required":true,"type":"string"},"comment_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/comments/:comment_id"},"updateFile":{"deprecated":"octokit.repos.updateFile() has been renamed to octokit.repos.createOrUpdateFile() (2019-06-07)","method":"PUT","params":{"author":{"type":"object"},"author.email":{"required":true,"type":"string"},"author.name":{"required":true,"type":"string"},"branch":{"type":"string"},"committer":{"type":"object"},"committer.email":{"required":true,"type":"string"},"committer.name":{"required":true,"type":"string"},"content":{"required":true,"type":"string"},"message":{"required":true,"type":"string"},"owner":{"required":true,"type":"string"},"path":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"sha":{"type":"string"}},"url":"/repos/:owner/:repo/contents/:path"},"updateHook":{"method":"PATCH","params":{"active":{"type":"boolean"},"add_events":{"type":"string[]"},"config":{"type":"object"},"config.content_type":{"type":"string"},"config.insecure_ssl":{"type":"string"},"config.secret":{"type":"string"},"config.url":{"required":true,"type":"string"},"events":{"type":"string[]"},"hook_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"remove_events":{"type":"string[]"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/hooks/:hook_id"},"updateInformationAboutPagesSite":{"method":"PUT","params":{"cname":{"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"source":{"enum":["\\"gh-pages\\"","\\"master\\"","\\"master /docs\\""],"type":"string"}},"url":"/repos/:owner/:repo/pages"},"updateInvitation":{"method":"PATCH","params":{"invitation_id":{"required":true,"type":"integer"},"owner":{"required":true,"type":"string"},"permissions":{"enum":["read","write","admin"],"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/invitations/:invitation_id"},"updateProtectedBranchPullRequestReviewEnforcement":{"method":"PATCH","params":{"branch":{"required":true,"type":"string"},"dismiss_stale_reviews":{"type":"boolean"},"dismissal_restrictions":{"type":"object"},"dismissal_restrictions.teams":{"type":"string[]"},"dismissal_restrictions.users":{"type":"string[]"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"require_code_owner_reviews":{"type":"boolean"},"required_approving_review_count":{"type":"integer"}},"url":"/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews"},"updateProtectedBranchRequiredStatusChecks":{"method":"PATCH","params":{"branch":{"required":true,"type":"string"},"contexts":{"type":"string[]"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"strict":{"type":"boolean"}},"url":"/repos/:owner/:repo/branches/:branch/protection/required_status_checks"},"updateRelease":{"method":"PATCH","params":{"body":{"type":"string"},"draft":{"type":"boolean"},"name":{"type":"string"},"owner":{"required":true,"type":"string"},"prerelease":{"type":"boolean"},"release_id":{"required":true,"type":"integer"},"repo":{"required":true,"type":"string"},"tag_name":{"type":"string"},"target_commitish":{"type":"string"}},"url":"/repos/:owner/:repo/releases/:release_id"},"updateReleaseAsset":{"method":"PATCH","params":{"asset_id":{"required":true,"type":"integer"},"label":{"type":"string"},"name":{"type":"string"},"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"}},"url":"/repos/:owner/:repo/releases/assets/:asset_id"},"uploadReleaseAsset":{"method":"POST","params":{"file":{"mapTo":"data","required":true,"type":"string | object"},"headers":{"required":true,"type":"object"},"headers.content-length":{"required":true,"type":"integer"},"headers.content-type":{"required":true,"type":"string"},"label":{"type":"string"},"name":{"required":true,"type":"string"},"url":{"required":true,"type":"string"}},"url":":url"}},"search":{"code":{"method":"GET","params":{"order":{"enum":["desc","asc"],"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"q":{"required":true,"type":"string"},"sort":{"enum":["indexed"],"type":"string"}},"url":"/search/code"},"commits":{"headers":{"accept":"application/vnd.github.cloak-preview+json"},"method":"GET","params":{"order":{"enum":["desc","asc"],"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"q":{"required":true,"type":"string"},"sort":{"enum":["author-date","committer-date"],"type":"string"}},"url":"/search/commits"},"issues":{"deprecated":"octokit.search.issues() has been renamed to octokit.search.issuesAndPullRequests() (2018-12-27)","method":"GET","params":{"order":{"enum":["desc","asc"],"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"q":{"required":true,"type":"string"},"sort":{"enum":["comments","reactions","reactions-+1","reactions--1","reactions-smile","reactions-thinking_face","reactions-heart","reactions-tada","interactions","created","updated"],"type":"string"}},"url":"/search/issues"},"issuesAndPullRequests":{"method":"GET","params":{"order":{"enum":["desc","asc"],"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"q":{"required":true,"type":"string"},"sort":{"enum":["comments","reactions","reactions-+1","reactions--1","reactions-smile","reactions-thinking_face","reactions-heart","reactions-tada","interactions","created","updated"],"type":"string"}},"url":"/search/issues"},"labels":{"method":"GET","params":{"order":{"enum":["desc","asc"],"type":"string"},"q":{"required":true,"type":"string"},"repository_id":{"required":true,"type":"integer"},"sort":{"enum":["created","updated"],"type":"string"}},"url":"/search/labels"},"repos":{"method":"GET","params":{"order":{"enum":["desc","asc"],"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"q":{"required":true,"type":"string"},"sort":{"enum":["stars","forks","help-wanted-issues","updated"],"type":"string"}},"url":"/search/repositories"},"topics":{"method":"GET","params":{"q":{"required":true,"type":"string"}},"url":"/search/topics"},"users":{"method":"GET","params":{"order":{"enum":["desc","asc"],"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"q":{"required":true,"type":"string"},"sort":{"enum":["followers","repositories","joined"],"type":"string"}},"url":"/search/users"}},"teams":{"addMember":{"deprecated":"octokit.teams.addMember() is deprecated, see https://developer.github.com/v3/teams/members/#add-team-member","method":"PUT","params":{"team_id":{"required":true,"type":"integer"},"username":{"required":true,"type":"string"}},"url":"/teams/:team_id/members/:username"},"addOrUpdateMembership":{"method":"PUT","params":{"role":{"enum":["member","maintainer"],"type":"string"},"team_id":{"required":true,"type":"integer"},"username":{"required":true,"type":"string"}},"url":"/teams/:team_id/memberships/:username"},"addOrUpdateProject":{"headers":{"accept":"application/vnd.github.inertia-preview+json"},"method":"PUT","params":{"permission":{"enum":["read","write","admin"],"type":"string"},"project_id":{"required":true,"type":"integer"},"team_id":{"required":true,"type":"integer"}},"url":"/teams/:team_id/projects/:project_id"},"addOrUpdateRepo":{"method":"PUT","params":{"owner":{"required":true,"type":"string"},"permission":{"enum":["pull","push","admin"],"type":"string"},"repo":{"required":true,"type":"string"},"team_id":{"required":true,"type":"integer"}},"url":"/teams/:team_id/repos/:owner/:repo"},"checkManagesRepo":{"method":"GET","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"team_id":{"required":true,"type":"integer"}},"url":"/teams/:team_id/repos/:owner/:repo"},"create":{"method":"POST","params":{"description":{"type":"string"},"maintainers":{"type":"string[]"},"name":{"required":true,"type":"string"},"org":{"required":true,"type":"string"},"parent_team_id":{"type":"integer"},"permission":{"enum":["pull","push","admin"],"type":"string"},"privacy":{"enum":["secret","closed"],"type":"string"},"repo_names":{"type":"string[]"}},"url":"/orgs/:org/teams"},"createDiscussion":{"headers":{"accept":"application/vnd.github.echo-preview+json"},"method":"POST","params":{"body":{"required":true,"type":"string"},"private":{"type":"boolean"},"team_id":{"required":true,"type":"integer"},"title":{"required":true,"type":"string"}},"url":"/teams/:team_id/discussions"},"createDiscussionComment":{"headers":{"accept":"application/vnd.github.echo-preview+json"},"method":"POST","params":{"body":{"required":true,"type":"string"},"discussion_number":{"required":true,"type":"integer"},"team_id":{"required":true,"type":"integer"}},"url":"/teams/:team_id/discussions/:discussion_number/comments"},"delete":{"method":"DELETE","params":{"team_id":{"required":true,"type":"integer"}},"url":"/teams/:team_id"},"deleteDiscussion":{"headers":{"accept":"application/vnd.github.echo-preview+json"},"method":"DELETE","params":{"discussion_number":{"required":true,"type":"integer"},"team_id":{"required":true,"type":"integer"}},"url":"/teams/:team_id/discussions/:discussion_number"},"deleteDiscussionComment":{"headers":{"accept":"application/vnd.github.echo-preview+json"},"method":"DELETE","params":{"comment_number":{"required":true,"type":"integer"},"discussion_number":{"required":true,"type":"integer"},"team_id":{"required":true,"type":"integer"}},"url":"/teams/:team_id/discussions/:discussion_number/comments/:comment_number"},"get":{"method":"GET","params":{"team_id":{"required":true,"type":"integer"}},"url":"/teams/:team_id"},"getByName":{"method":"GET","params":{"org":{"required":true,"type":"string"},"team_slug":{"required":true,"type":"string"}},"url":"/orgs/:org/teams/:team_slug"},"getDiscussion":{"headers":{"accept":"application/vnd.github.echo-preview+json"},"method":"GET","params":{"discussion_number":{"required":true,"type":"integer"},"team_id":{"required":true,"type":"integer"}},"url":"/teams/:team_id/discussions/:discussion_number"},"getDiscussionComment":{"headers":{"accept":"application/vnd.github.echo-preview+json"},"method":"GET","params":{"comment_number":{"required":true,"type":"integer"},"discussion_number":{"required":true,"type":"integer"},"team_id":{"required":true,"type":"integer"}},"url":"/teams/:team_id/discussions/:discussion_number/comments/:comment_number"},"getMember":{"deprecated":"octokit.teams.getMember() is deprecated, see https://developer.github.com/v3/teams/members/#get-team-member","method":"GET","params":{"team_id":{"required":true,"type":"integer"},"username":{"required":true,"type":"string"}},"url":"/teams/:team_id/members/:username"},"getMembership":{"method":"GET","params":{"team_id":{"required":true,"type":"integer"},"username":{"required":true,"type":"string"}},"url":"/teams/:team_id/memberships/:username"},"list":{"method":"GET","params":{"org":{"required":true,"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/orgs/:org/teams"},"listChild":{"headers":{"accept":"application/vnd.github.hellcat-preview+json"},"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"},"team_id":{"required":true,"type":"integer"}},"url":"/teams/:team_id/teams"},"listDiscussionComments":{"headers":{"accept":"application/vnd.github.echo-preview+json"},"method":"GET","params":{"direction":{"enum":["asc","desc"],"type":"string"},"discussion_number":{"required":true,"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"},"team_id":{"required":true,"type":"integer"}},"url":"/teams/:team_id/discussions/:discussion_number/comments"},"listDiscussions":{"headers":{"accept":"application/vnd.github.echo-preview+json"},"method":"GET","params":{"direction":{"enum":["asc","desc"],"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"},"team_id":{"required":true,"type":"integer"}},"url":"/teams/:team_id/discussions"},"listForAuthenticatedUser":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/user/teams"},"listMembers":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"},"role":{"enum":["member","maintainer","all"],"type":"string"},"team_id":{"required":true,"type":"integer"}},"url":"/teams/:team_id/members"},"listPendingInvitations":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"},"team_id":{"required":true,"type":"integer"}},"url":"/teams/:team_id/invitations"},"listProjects":{"headers":{"accept":"application/vnd.github.inertia-preview+json"},"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"},"team_id":{"required":true,"type":"integer"}},"url":"/teams/:team_id/projects"},"listRepos":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"},"team_id":{"required":true,"type":"integer"}},"url":"/teams/:team_id/repos"},"removeMember":{"deprecated":"octokit.teams.removeMember() is deprecated, see https://developer.github.com/v3/teams/members/#remove-team-member","method":"DELETE","params":{"team_id":{"required":true,"type":"integer"},"username":{"required":true,"type":"string"}},"url":"/teams/:team_id/members/:username"},"removeMembership":{"method":"DELETE","params":{"team_id":{"required":true,"type":"integer"},"username":{"required":true,"type":"string"}},"url":"/teams/:team_id/memberships/:username"},"removeProject":{"method":"DELETE","params":{"project_id":{"required":true,"type":"integer"},"team_id":{"required":true,"type":"integer"}},"url":"/teams/:team_id/projects/:project_id"},"removeRepo":{"method":"DELETE","params":{"owner":{"required":true,"type":"string"},"repo":{"required":true,"type":"string"},"team_id":{"required":true,"type":"integer"}},"url":"/teams/:team_id/repos/:owner/:repo"},"reviewProject":{"headers":{"accept":"application/vnd.github.inertia-preview+json"},"method":"GET","params":{"project_id":{"required":true,"type":"integer"},"team_id":{"required":true,"type":"integer"}},"url":"/teams/:team_id/projects/:project_id"},"update":{"method":"PATCH","params":{"description":{"type":"string"},"name":{"required":true,"type":"string"},"parent_team_id":{"type":"integer"},"permission":{"enum":["pull","push","admin"],"type":"string"},"privacy":{"enum":["secret","closed"],"type":"string"},"team_id":{"required":true,"type":"integer"}},"url":"/teams/:team_id"},"updateDiscussion":{"headers":{"accept":"application/vnd.github.echo-preview+json"},"method":"PATCH","params":{"body":{"type":"string"},"discussion_number":{"required":true,"type":"integer"},"team_id":{"required":true,"type":"integer"},"title":{"type":"string"}},"url":"/teams/:team_id/discussions/:discussion_number"},"updateDiscussionComment":{"headers":{"accept":"application/vnd.github.echo-preview+json"},"method":"PATCH","params":{"body":{"required":true,"type":"string"},"comment_number":{"required":true,"type":"integer"},"discussion_number":{"required":true,"type":"integer"},"team_id":{"required":true,"type":"integer"}},"url":"/teams/:team_id/discussions/:discussion_number/comments/:comment_number"}},"users":{"addEmails":{"method":"POST","params":{"emails":{"required":true,"type":"string[]"}},"url":"/user/emails"},"block":{"method":"PUT","params":{"username":{"required":true,"type":"string"}},"url":"/user/blocks/:username"},"checkBlocked":{"method":"GET","params":{"username":{"required":true,"type":"string"}},"url":"/user/blocks/:username"},"checkFollowing":{"method":"GET","params":{"username":{"required":true,"type":"string"}},"url":"/user/following/:username"},"checkFollowingForUser":{"method":"GET","params":{"target_user":{"required":true,"type":"string"},"username":{"required":true,"type":"string"}},"url":"/users/:username/following/:target_user"},"createGpgKey":{"method":"POST","params":{"armored_public_key":{"type":"string"}},"url":"/user/gpg_keys"},"createPublicKey":{"method":"POST","params":{"key":{"type":"string"},"title":{"type":"string"}},"url":"/user/keys"},"deleteEmails":{"method":"DELETE","params":{"emails":{"required":true,"type":"string[]"}},"url":"/user/emails"},"deleteGpgKey":{"method":"DELETE","params":{"gpg_key_id":{"required":true,"type":"integer"}},"url":"/user/gpg_keys/:gpg_key_id"},"deletePublicKey":{"method":"DELETE","params":{"key_id":{"required":true,"type":"integer"}},"url":"/user/keys/:key_id"},"follow":{"method":"PUT","params":{"username":{"required":true,"type":"string"}},"url":"/user/following/:username"},"getAuthenticated":{"method":"GET","params":{},"url":"/user"},"getByUsername":{"method":"GET","params":{"username":{"required":true,"type":"string"}},"url":"/users/:username"},"getContextForUser":{"headers":{"accept":"application/vnd.github.hagar-preview+json"},"method":"GET","params":{"subject_id":{"type":"string"},"subject_type":{"enum":["organization","repository","issue","pull_request"],"type":"string"},"username":{"required":true,"type":"string"}},"url":"/users/:username/hovercard"},"getGpgKey":{"method":"GET","params":{"gpg_key_id":{"required":true,"type":"integer"}},"url":"/user/gpg_keys/:gpg_key_id"},"getPublicKey":{"method":"GET","params":{"key_id":{"required":true,"type":"integer"}},"url":"/user/keys/:key_id"},"list":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"},"since":{"type":"string"}},"url":"/users"},"listBlocked":{"method":"GET","params":{},"url":"/user/blocks"},"listEmails":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/user/emails"},"listFollowersForAuthenticatedUser":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/user/followers"},"listFollowersForUser":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"},"username":{"required":true,"type":"string"}},"url":"/users/:username/followers"},"listFollowingForAuthenticatedUser":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/user/following"},"listFollowingForUser":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"},"username":{"required":true,"type":"string"}},"url":"/users/:username/following"},"listGpgKeys":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/user/gpg_keys"},"listGpgKeysForUser":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"},"username":{"required":true,"type":"string"}},"url":"/users/:username/gpg_keys"},"listPublicEmails":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/user/public_emails"},"listPublicKeys":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"}},"url":"/user/keys"},"listPublicKeysForUser":{"method":"GET","params":{"page":{"type":"integer"},"per_page":{"type":"integer"},"username":{"required":true,"type":"string"}},"url":"/users/:username/keys"},"togglePrimaryEmailVisibility":{"method":"PATCH","params":{"email":{"required":true,"type":"string"},"visibility":{"required":true,"type":"string"}},"url":"/user/email/visibility"},"unblock":{"method":"DELETE","params":{"username":{"required":true,"type":"string"}},"url":"/user/blocks/:username"},"unfollow":{"method":"DELETE","params":{"username":{"required":true,"type":"string"}},"url":"/user/following/:username"},"updateAuthenticated":{"method":"PATCH","params":{"bio":{"type":"string"},"blog":{"type":"string"},"company":{"type":"string"},"email":{"type":"string"},"hireable":{"type":"boolean"},"location":{"type":"string"},"name":{"type":"string"}},"url":"/user"}}}')
}, function(e, t, r) {
    e.exports = function(e) {
        e.hook.before("request", n.bind(null, e))
    };
    const n = r(179)
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t) {
        if (!t.request.validate) return;
        const {
            validate: r
        } = t.request;
        return Object.keys(r).forEach((e => {
            const s = i(r, e),
                a = s.type;
            let u, c, p = !0,
                l = !1;
            /\./.test(e) && (u = e.replace(/\.[^.]+$/, ""), l = "[]" === u.slice(-2), l && (u = u.slice(0, -2)), c = i(t, u), p = "headers" === u || "object" == typeof c && null !== c);
            (l ? (i(t, u) || []).map((t => t[e.split(/\./).pop()])) : [i(t, e)]).forEach(((r, i) => {
                const u = void 0 !== r,
                    c = null === r,
                    d = l ? e.replace(/\[\]/, `[${i}]`) : e;
                if ((s.required || u) && p && (!s.allowNull || !c)) {
                    if (!s.allowNull && c) throw new n(`'${d}' cannot be null`, 400, {
                        request: t
                    });
                    if (s.required && !u) throw new n(`Empty value for parameter '${d}': ${JSON.stringify(r)}`, 400, {
                        request: t
                    });
                    if ("integer" === a) {
                        const e = r;
                        if (r = parseInt(r, 10), isNaN(r)) throw new n(`Invalid value for parameter '${d}': ${JSON.stringify(e)} is NaN`, 400, {
                            request: t
                        })
                    }
                    if (s.enum && -1 === s.enum.indexOf(String(r))) throw new n(`Invalid value for parameter '${d}': ${JSON.stringify(r)}`, 400, {
                        request: t
                    });
                    if (s.validation) {
                        if (!new RegExp(s.validation).test(r)) throw new n(`Invalid value for parameter '${d}': ${JSON.stringify(r)}`, 400, {
                            request: t
                        })
                    }
                    if ("object" === a && "string" == typeof r) try {
                        r = JSON.parse(r)
                    } catch (e) {
                        throw new n(`JSON parse error of value for parameter '${d}': ${JSON.stringify(r)}`, 400, {
                            request: t
                        })
                    }
                    o(t, s.mapTo || d, r)
                }
            }))
        })), t
    };
    const {
        RequestError: n
    } = r(11), i = r(180), o = r(181)
}, function(e, t) {
    var r = "__lodash_hash_undefined__",
        n = "[object Function]",
        i = "[object GeneratorFunction]",
        o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        s = /^\w*$/,
        a = /^\./,
        u = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        c = /\\(\\)?/g,
        p = /^\[object .+?Constructor\]$/,
        l = "object" == typeof global && global && global.Object === Object && global,
        d = "object" == typeof self && self && self.Object === Object && self,
        f = l || d || Function("return this")();
    var h, g = Array.prototype,
        m = Function.prototype,
        y = Object.prototype,
        b = f["__core-js_shared__"],
        _ = (h = /[^.]+$/.exec(b && b.keys && b.keys.IE_PROTO || "")) ? "Symbol(src)_1." + h : "",
        v = m.toString,
        w = y.hasOwnProperty,
        E = y.toString,
        q = RegExp("^" + v.call(w).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        T = f.Symbol,
        S = g.splice,
        A = N(f, "Map"),
        R = N(Object, "create"),
        x = T ? T.prototype : void 0,
        O = x ? x.toString : void 0;

    function C(e) {
        var t = -1,
            r = e ? e.length : 0;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }

    function k(e) {
        var t = -1,
            r = e ? e.length : 0;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }

    function j(e) {
        var t = -1,
            r = e ? e.length : 0;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }

    function P(e, t) {
        for (var r, n, i = e.length; i--;)
            if ((r = e[i][0]) === (n = t) || r != r && n != n) return i;
        return -1
    }

    function L(e, t) {
        for (var r, n = 0, i = (t = function(e, t) {
                if (M(e)) return !1;
                var r = typeof e;
                if ("number" == r || "symbol" == r || "boolean" == r || null == e || H(e)) return !0;
                return s.test(e) || !o.test(e) || null != t && e in Object(t)
            }(t, e) ? [t] : M(r = t) ? r : B(r)).length; null != e && n < i;) e = e[D(t[n++])];
        return n && n == i ? e : void 0
    }

    function $(e) {
        return !(!F(e) || (t = e, _ && _ in t)) && (function(e) {
            var t = F(e) ? E.call(e) : "";
            return t == n || t == i
        }(e) || function(e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString) try {
                t = !!(e + "")
            } catch (e) {}
            return t
        }(e) ? q : p).test(function(e) {
            if (null != e) {
                try {
                    return v.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }(e));
        var t
    }

    function I(e, t) {
        var r, n, i = e.__data__;
        return ("string" == (n = typeof(r = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? i["string" == typeof t ? "string" : "hash"] : i.map
    }

    function N(e, t) {
        var r = function(e, t) {
            return null == e ? void 0 : e[t]
        }(e, t);
        return $(r) ? r : void 0
    }
    C.prototype.clear = function() {
        this.__data__ = R ? R(null) : {}
    }, C.prototype.delete = function(e) {
        return this.has(e) && delete this.__data__[e]
    }, C.prototype.get = function(e) {
        var t = this.__data__;
        if (R) {
            var n = t[e];
            return n === r ? void 0 : n
        }
        return w.call(t, e) ? t[e] : void 0
    }, C.prototype.has = function(e) {
        var t = this.__data__;
        return R ? void 0 !== t[e] : w.call(t, e)
    }, C.prototype.set = function(e, t) {
        return this.__data__[e] = R && void 0 === t ? r : t, this
    }, k.prototype.clear = function() {
        this.__data__ = []
    }, k.prototype.delete = function(e) {
        var t = this.__data__,
            r = P(t, e);
        return !(r < 0) && (r == t.length - 1 ? t.pop() : S.call(t, r, 1), !0)
    }, k.prototype.get = function(e) {
        var t = this.__data__,
            r = P(t, e);
        return r < 0 ? void 0 : t[r][1]
    }, k.prototype.has = function(e) {
        return P(this.__data__, e) > -1
    }, k.prototype.set = function(e, t) {
        var r = this.__data__,
            n = P(r, e);
        return n < 0 ? r.push([e, t]) : r[n][1] = t, this
    }, j.prototype.clear = function() {
        this.__data__ = {
            hash: new C,
            map: new(A || k),
            string: new C
        }
    }, j.prototype.delete = function(e) {
        return I(this, e).delete(e)
    }, j.prototype.get = function(e) {
        return I(this, e).get(e)
    }, j.prototype.has = function(e) {
        return I(this, e).has(e)
    }, j.prototype.set = function(e, t) {
        return I(this, e).set(e, t), this
    };
    var B = G((function(e) {
        var t;
        e = null == (t = e) ? "" : function(e) {
            if ("string" == typeof e) return e;
            if (H(e)) return O ? O.call(e) : "";
            var t = e + "";
            return "0" == t && 1 / e == -1 / 0 ? "-0" : t
        }(t);
        var r = [];
        return a.test(e) && r.push(""), e.replace(u, (function(e, t, n, i) {
            r.push(n ? i.replace(c, "$1") : t || e)
        })), r
    }));

    function D(e) {
        if ("string" == typeof e || H(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -1 / 0 ? "-0" : t
    }

    function G(e, t) {
        if ("function" != typeof e || t && "function" != typeof t) throw new TypeError("Expected a function");
        var r = function() {
            var n = arguments,
                i = t ? t.apply(this, n) : n[0],
                o = r.cache;
            if (o.has(i)) return o.get(i);
            var s = e.apply(this, n);
            return r.cache = o.set(i, s), s
        };
        return r.cache = new(G.Cache || j), r
    }
    G.Cache = j;
    var M = Array.isArray;

    function F(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t)
    }

    function H(e) {
        return "symbol" == typeof e || function(e) {
            return !!e && "object" == typeof e
        }(e) && "[object Symbol]" == E.call(e)
    }
    e.exports = function(e, t, r) {
        var n = null == e ? void 0 : L(e, t);
        return void 0 === n ? r : n
    }
}, function(e, t) {
    var r = "__lodash_hash_undefined__",
        n = "[object Function]",
        i = "[object GeneratorFunction]",
        o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        s = /^\w*$/,
        a = /^\./,
        u = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        c = /\\(\\)?/g,
        p = /^\[object .+?Constructor\]$/,
        l = /^(?:0|[1-9]\d*)$/,
        d = "object" == typeof global && global && global.Object === Object && global,
        f = "object" == typeof self && self && self.Object === Object && self,
        h = d || f || Function("return this")();
    var g, m = Array.prototype,
        y = Function.prototype,
        b = Object.prototype,
        _ = h["__core-js_shared__"],
        v = (g = /[^.]+$/.exec(_ && _.keys && _.keys.IE_PROTO || "")) ? "Symbol(src)_1." + g : "",
        w = y.toString,
        E = b.hasOwnProperty,
        q = b.toString,
        T = RegExp("^" + w.call(E).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        S = h.Symbol,
        A = m.splice,
        R = D(h, "Map"),
        x = D(Object, "create"),
        O = S ? S.prototype : void 0,
        C = O ? O.toString : void 0;

    function k(e) {
        var t = -1,
            r = e ? e.length : 0;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }

    function j(e) {
        var t = -1,
            r = e ? e.length : 0;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }

    function P(e) {
        var t = -1,
            r = e ? e.length : 0;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }

    function L(e, t, r) {
        var n = e[t];
        E.call(e, t) && U(n, r) && (void 0 !== r || t in e) || (e[t] = r)
    }

    function $(e, t) {
        for (var r = e.length; r--;)
            if (U(e[r][0], t)) return r;
        return -1
    }

    function I(e) {
        return !(!W(e) || (t = e, v && v in t)) && (function(e) {
            var t = W(e) ? q.call(e) : "";
            return t == n || t == i
        }(e) || function(e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString) try {
                t = !!(e + "")
            } catch (e) {}
            return t
        }(e) ? T : p).test(function(e) {
            if (null != e) {
                try {
                    return w.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }(e));
        var t
    }

    function N(e, t, r, n) {
        if (!W(e)) return e;
        for (var i = -1, a = (t = function(e, t) {
                if (z(e)) return !1;
                var r = typeof e;
                if ("number" == r || "symbol" == r || "boolean" == r || null == e || V(e)) return !0;
                return s.test(e) || !o.test(e) || null != t && e in Object(t)
            }(t, e) ? [t] : function(e) {
                return z(e) ? e : M(e)
            }(t)).length, u = a - 1, c = e; null != c && ++i < a;) {
            var p = F(t[i]),
                l = r;
            if (i != u) {
                var d = c[p];
                void 0 === (l = n ? n(d, p, c) : void 0) && (l = W(d) ? d : G(t[i + 1]) ? [] : {})
            }
            L(c, p, l), c = c[p]
        }
        return e
    }

    function B(e, t) {
        var r, n, i = e.__data__;
        return ("string" == (n = typeof(r = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? i["string" == typeof t ? "string" : "hash"] : i.map
    }

    function D(e, t) {
        var r = function(e, t) {
            return null == e ? void 0 : e[t]
        }(e, t);
        return I(r) ? r : void 0
    }

    function G(e, t) {
        return !!(t = null == t ? 9007199254740991 : t) && ("number" == typeof e || l.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    k.prototype.clear = function() {
        this.__data__ = x ? x(null) : {}
    }, k.prototype.delete = function(e) {
        return this.has(e) && delete this.__data__[e]
    }, k.prototype.get = function(e) {
        var t = this.__data__;
        if (x) {
            var n = t[e];
            return n === r ? void 0 : n
        }
        return E.call(t, e) ? t[e] : void 0
    }, k.prototype.has = function(e) {
        var t = this.__data__;
        return x ? void 0 !== t[e] : E.call(t, e)
    }, k.prototype.set = function(e, t) {
        return this.__data__[e] = x && void 0 === t ? r : t, this
    }, j.prototype.clear = function() {
        this.__data__ = []
    }, j.prototype.delete = function(e) {
        var t = this.__data__,
            r = $(t, e);
        return !(r < 0) && (r == t.length - 1 ? t.pop() : A.call(t, r, 1), !0)
    }, j.prototype.get = function(e) {
        var t = this.__data__,
            r = $(t, e);
        return r < 0 ? void 0 : t[r][1]
    }, j.prototype.has = function(e) {
        return $(this.__data__, e) > -1
    }, j.prototype.set = function(e, t) {
        var r = this.__data__,
            n = $(r, e);
        return n < 0 ? r.push([e, t]) : r[n][1] = t, this
    }, P.prototype.clear = function() {
        this.__data__ = {
            hash: new k,
            map: new(R || j),
            string: new k
        }
    }, P.prototype.delete = function(e) {
        return B(this, e).delete(e)
    }, P.prototype.get = function(e) {
        return B(this, e).get(e)
    }, P.prototype.has = function(e) {
        return B(this, e).has(e)
    }, P.prototype.set = function(e, t) {
        return B(this, e).set(e, t), this
    };
    var M = H((function(e) {
        var t;
        e = null == (t = e) ? "" : function(e) {
            if ("string" == typeof e) return e;
            if (V(e)) return C ? C.call(e) : "";
            var t = e + "";
            return "0" == t && 1 / e == -1 / 0 ? "-0" : t
        }(t);
        var r = [];
        return a.test(e) && r.push(""), e.replace(u, (function(e, t, n, i) {
            r.push(n ? i.replace(c, "$1") : t || e)
        })), r
    }));

    function F(e) {
        if ("string" == typeof e || V(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -1 / 0 ? "-0" : t
    }

    function H(e, t) {
        if ("function" != typeof e || t && "function" != typeof t) throw new TypeError("Expected a function");
        var r = function() {
            var n = arguments,
                i = t ? t.apply(this, n) : n[0],
                o = r.cache;
            if (o.has(i)) return o.get(i);
            var s = e.apply(this, n);
            return r.cache = o.set(i, s), s
        };
        return r.cache = new(H.Cache || P), r
    }

    function U(e, t) {
        return e === t || e != e && t != t
    }
    H.Cache = P;
    var z = Array.isArray;

    function W(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t)
    }

    function V(e) {
        return "symbol" == typeof e || function(e) {
            return !!e && "object" == typeof e
        }(e) && "[object Symbol]" == q.call(e)
    }
    e.exports = function(e, t, r) {
        return null == e ? e : N(e, t, r)
    }
}, function(e, t, r) {
    e.exports = function(e) {
        e.getFirstPage = r(183).bind(null, e), e.getLastPage = r(185).bind(null, e), e.getNextPage = r(186).bind(null, e), e.getPreviousPage = r(187).bind(null, e), e.hasFirstPage = r(188), e.hasLastPage = r(189), e.hasNextPage = r(190), e.hasPreviousPage = r(191)
    }
}, function(e, t, r) {
    e.exports = function(e, t, r) {
        return n(e, t, "first", r)
    };
    const n = r(21)
}, function(e, t) {
    e.exports = class extends Error {
        constructor(e, t, r) {
            super(e), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name = "HttpError", this.code = t, this.headers = r
        }
    }
}, function(e, t, r) {
    e.exports = function(e, t, r) {
        return n(e, t, "last", r)
    };
    const n = r(21)
}, function(e, t, r) {
    e.exports = function(e, t, r) {
        return n(e, t, "next", r)
    };
    const n = r(21)
}, function(e, t, r) {
    e.exports = function(e, t, r) {
        return n(e, t, "prev", r)
    };
    const n = r(21)
}, function(e, t, r) {
    e.exports = function(e) {
        return n("octokit.hasFirstPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination."), i(e).first
    };
    const n = r(16),
        i = r(17)
}, function(e, t, r) {
    e.exports = function(e) {
        return n("octokit.hasLastPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination."), i(e).last
    };
    const n = r(16),
        i = r(17)
}, function(e, t, r) {
    e.exports = function(e) {
        return n("octokit.hasNextPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination."), i(e).next
    };
    const n = r(16),
        i = r(17)
}, function(e, t, r) {
    e.exports = function(e) {
        return n("octokit.hasPreviousPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination."), i(e).prev
    };
    const n = r(16),
        i = r(17)
}, function(e, t, r) {
    "use strict";
    var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r), Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        } : function(e, t, r, n) {
            void 0 === n && (n = r), e[n] = t[r]
        }),
        i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        } : function(e, t) {
            e.default = t
        }),
        o = this && this.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
            return i(t, e), t
        },
        s = this && this.__awaiter || function(e, t, r, n) {
            return new(r || (r = Promise))((function(i, o) {
                function s(e) {
                    try {
                        u(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                        e(t)
                    }))).then(s, a)
                }
                u((n = n.apply(e, t || [])).next())
            }))
        },
        a = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.dumpGitHubEventPayload = t.getShortenedUrl = void 0;
    const u = a(r(193)),
        c = a(r(218)),
        p = o(r(1)),
        l = o(r(19));
    t.getShortenedUrl = e => s(void 0, void 0, void 0, (function*() {
        var t;
        const r = process.env.JEST_MOCK_HTTP_PORT ? `http://localhost:${process.env.JEST_MOCK_HTTP_PORT}` : "https://git.io";
        try {
            const n = null === (t = (yield u.default.post(r, c.default.stringify({
                url: e
            }))).headers) || void 0 === t ? void 0 : t.location;
            return n || (l.error("Unable to retrieve a shortened git url"), e)
        } catch (t) {
            return l.error(`Unable to retrieve a shortened git url: ${t.message}`), e
        }
    }));
    t.dumpGitHubEventPayload = () => {
        const e = process.env.GITHUB_EVENT_PATH || "";
        if (!e) throw new Error("Environment variable GITHUB_EVENT_PATH does not appear to be set.");
        const t = p.readFileSync(e, "utf8"),
            r = JSON.parse(t);
        l.info(`GitHub payload: ${JSON.stringify(r)}`)
    }
}, function(e, t, r) {
    e.exports = r(194)
}, function(e, t, r) {
    "use strict";
    var n = r(2),
        i = r(52),
        o = r(195),
        s = r(61);

    function a(e) {
        var t = new o(e),
            r = i(o.prototype.request, t);
        return n.extend(r, o.prototype, t), n.extend(r, t), r
    }
    var u = a(r(54));
    u.Axios = o, u.create = function(e) {
        return a(s(u.defaults, e))
    }, u.Cancel = r(62), u.CancelToken = r(215), u.isCancel = r(53), u.all = function(e) {
        return Promise.all(e)
    }, u.spread = r(216), u.isAxiosError = r(217), e.exports = u, e.exports.default = u
}, function(e, t, r) {
    "use strict";
    var n = r(2),
        i = r(31),
        o = r(196),
        s = r(197),
        a = r(61);

    function u(e) {
        this.defaults = e, this.interceptors = {
            request: new o,
            response: new o
        }
    }
    u.prototype.request = function(e) {
        "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = a(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
        var t = [s, void 0],
            r = Promise.resolve(e);
        for (this.interceptors.request.forEach((function(e) {
                t.unshift(e.fulfilled, e.rejected)
            })), this.interceptors.response.forEach((function(e) {
                t.push(e.fulfilled, e.rejected)
            })); t.length;) r = r.then(t.shift(), t.shift());
        return r
    }, u.prototype.getUri = function(e) {
        return e = a(this.defaults, e), i(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
    }, n.forEach(["delete", "get", "head", "options"], (function(e) {
        u.prototype[e] = function(t, r) {
            return this.request(a(r || {}, {
                method: e,
                url: t,
                data: (r || {}).data
            }))
        }
    })), n.forEach(["post", "put", "patch"], (function(e) {
        u.prototype[e] = function(t, r, n) {
            return this.request(a(n || {}, {
                method: e,
                url: t,
                data: r
            }))
        }
    })), e.exports = u
}, function(e, t, r) {
    "use strict";
    var n = r(2);

    function i() {
        this.handlers = []
    }
    i.prototype.use = function(e, t) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t
        }), this.handlers.length - 1
    }, i.prototype.eject = function(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }, i.prototype.forEach = function(e) {
        n.forEach(this.handlers, (function(t) {
            null !== t && e(t)
        }))
    }, e.exports = i
}, function(e, t, r) {
    "use strict";
    var n = r(2),
        i = r(198),
        o = r(53),
        s = r(54);

    function a(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }
    e.exports = function(e) {
        return a(e), e.headers = e.headers || {}, e.data = i(e.data, e.headers, e.transformRequest), e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
            delete e.headers[t]
        })), (e.adapter || s.adapter)(e).then((function(t) {
            return a(e), t.data = i(t.data, t.headers, e.transformResponse), t
        }), (function(t) {
            return o(t) || (a(e), t && t.response && (t.response.data = i(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
        }))
    }
}, function(e, t, r) {
    "use strict";
    var n = r(2);
    e.exports = function(e, t, r) {
        return n.forEach(r, (function(r) {
            e = r(e, t)
        })), e
    }
}, function(e, t, r) {
    "use strict";
    var n = r(2);
    e.exports = function(e, t) {
        n.forEach(e, (function(r, n) {
            n !== t && n.toUpperCase() === t.toUpperCase() && (e[t] = r, delete e[n])
        }))
    }
}, function(e, t, r) {
    "use strict";
    var n = r(2),
        i = r(55),
        o = r(201),
        s = r(31),
        a = r(57),
        u = r(204),
        c = r(205),
        p = r(32);
    e.exports = function(e) {
        return new Promise((function(t, r) {
            var l = e.data,
                d = e.headers;
            n.isFormData(l) && delete d["Content-Type"];
            var f = new XMLHttpRequest;
            if (e.auth) {
                var h = e.auth.username || "",
                    g = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                d.Authorization = "Basic " + btoa(h + ":" + g)
            }
            var m = a(e.baseURL, e.url);
            if (f.open(e.method.toUpperCase(), s(m, e.params, e.paramsSerializer), !0), f.timeout = e.timeout, f.onreadystatechange = function() {
                    if (f && 4 === f.readyState && (0 !== f.status || f.responseURL && 0 === f.responseURL.indexOf("file:"))) {
                        var n = "getAllResponseHeaders" in f ? u(f.getAllResponseHeaders()) : null,
                            o = {
                                data: e.responseType && "text" !== e.responseType ? f.response : f.responseText,
                                status: f.status,
                                statusText: f.statusText,
                                headers: n,
                                config: e,
                                request: f
                            };
                        i(t, r, o), f = null
                    }
                }, f.onabort = function() {
                    f && (r(p("Request aborted", e, "ECONNABORTED", f)), f = null)
                }, f.onerror = function() {
                    r(p("Network Error", e, null, f)), f = null
                }, f.ontimeout = function() {
                    var t = "timeout of " + e.timeout + "ms exceeded";
                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage), r(p(t, e, "ECONNABORTED", f)), f = null
                }, n.isStandardBrowserEnv()) {
                var y = (e.withCredentials || c(m)) && e.xsrfCookieName ? o.read(e.xsrfCookieName) : void 0;
                y && (d[e.xsrfHeaderName] = y)
            }
            if ("setRequestHeader" in f && n.forEach(d, (function(e, t) {
                    void 0 === l && "content-type" === t.toLowerCase() ? delete d[t] : f.setRequestHeader(t, e)
                })), n.isUndefined(e.withCredentials) || (f.withCredentials = !!e.withCredentials), e.responseType) try {
                f.responseType = e.responseType
            } catch (t) {
                if ("json" !== e.responseType) throw t
            }
            "function" == typeof e.onDownloadProgress && f.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && f.upload && f.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) {
                f && (f.abort(), r(e), f = null)
            })), l || (l = null), f.send(l)
        }))
    }
}, function(e, t, r) {
    "use strict";
    var n = r(2);
    e.exports = n.isStandardBrowserEnv() ? {
        write: function(e, t, r, i, o, s) {
            var a = [];
            a.push(e + "=" + encodeURIComponent(t)), n.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()), n.isString(i) && a.push("path=" + i), n.isString(o) && a.push("domain=" + o), !0 === s && a.push("secure"), document.cookie = a.join("; ")
        },
        read: function(e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null
        },
        remove: function(e) {
            this.write(e, "", Date.now() - 864e5)
        }
    } : {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}, function(e, t, r) {
    "use strict";
    var n = r(2),
        i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function(e) {
        var t, r, o, s = {};
        return e ? (n.forEach(e.split("\n"), (function(e) {
            if (o = e.indexOf(":"), t = n.trim(e.substr(0, o)).toLowerCase(), r = n.trim(e.substr(o + 1)), t) {
                if (s[t] && i.indexOf(t) >= 0) return;
                s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([r]) : s[t] ? s[t] + ", " + r : r
            }
        })), s) : s
    }
}, function(e, t, r) {
    "use strict";
    var n = r(2);
    e.exports = n.isStandardBrowserEnv() ? function() {
        var e, t = /(msie|trident)/i.test(navigator.userAgent),
            r = document.createElement("a");

        function i(e) {
            var n = e;
            return t && (r.setAttribute("href", n), n = r.href), r.setAttribute("href", n), {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
            }
        }
        return e = i(window.location.href),
            function(t) {
                var r = n.isString(t) ? i(t) : t;
                return r.protocol === e.protocol && r.host === e.host
            }
    }() : function() {
        return !0
    }
}, function(e, t, r) {
    "use strict";
    var n = r(2),
        i = r(55),
        o = r(57),
        s = r(31),
        a = r(27),
        u = r(29),
        c = r(58).http,
        p = r(58).https,
        l = r(28),
        d = r(45),
        f = r(214),
        h = r(32),
        g = r(56),
        m = /https:?/;

    function y(e, t, r) {
        if (e.hostname = t.host, e.host = t.host, e.port = t.port, e.path = r, t.auth) {
            var n = Buffer.from(t.auth.username + ":" + t.auth.password, "utf8").toString("base64");
            e.headers["Proxy-Authorization"] = "Basic " + n
        }
        e.beforeRedirect = function(e) {
            e.headers.host = e.host, y(e, t, e.href)
        }
    }
    e.exports = function(e) {
        return new Promise((function(t, r) {
            var b = function(e) {
                    t(e)
                },
                _ = function(e) {
                    r(e)
                },
                v = e.data,
                w = e.headers;
            if (w["User-Agent"] || w["user-agent"] || (w["User-Agent"] = "axios/" + f.version), v && !n.isStream(v)) {
                if (Buffer.isBuffer(v));
                else if (n.isArrayBuffer(v)) v = Buffer.from(new Uint8Array(v));
                else {
                    if (!n.isString(v)) return _(h("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream", e));
                    v = Buffer.from(v, "utf-8")
                }
                w["Content-Length"] = v.length
            }
            var E = void 0;
            e.auth && (E = (e.auth.username || "") + ":" + (e.auth.password || ""));
            var q = o(e.baseURL, e.url),
                T = l.parse(q),
                S = T.protocol || "http:";
            if (!E && T.auth) {
                var A = T.auth.split(":");
                E = (A[0] || "") + ":" + (A[1] || "")
            }
            E && delete w.Authorization;
            var R = m.test(S),
                x = R ? e.httpsAgent : e.httpAgent,
                O = {
                    path: s(T.path, e.params, e.paramsSerializer).replace(/^\?/, ""),
                    method: e.method.toUpperCase(),
                    headers: w,
                    agent: x,
                    agents: {
                        http: e.httpAgent,
                        https: e.httpsAgent
                    },
                    auth: E
                };
            e.socketPath ? O.socketPath = e.socketPath : (O.hostname = T.hostname, O.port = T.port);
            var C, k = e.proxy;
            if (!k && !1 !== k) {
                var j = S.slice(0, -1) + "_proxy",
                    P = process.env[j] || process.env[j.toUpperCase()];
                if (P) {
                    var L = l.parse(P),
                        $ = process.env.no_proxy || process.env.NO_PROXY,
                        I = !0;
                    if ($) I = !$.split(",").map((function(e) {
                        return e.trim()
                    })).some((function(e) {
                        return !!e && ("*" === e || ("." === e[0] && T.hostname.substr(T.hostname.length - e.length) === e || T.hostname === e))
                    }));
                    if (I && (k = {
                            host: L.hostname,
                            port: L.port,
                            protocol: L.protocol
                        }, L.auth)) {
                        var N = L.auth.split(":");
                        k.auth = {
                            username: N[0],
                            password: N[1]
                        }
                    }
                }
            }
            k && (O.headers.host = T.hostname + (T.port ? ":" + T.port : ""), y(O, k, S + "//" + T.hostname + (T.port ? ":" + T.port : "") + O.path));
            var B = R && (!k || m.test(k.protocol));
            e.transport ? C = e.transport : 0 === e.maxRedirects ? C = B ? u : a : (e.maxRedirects && (O.maxRedirects = e.maxRedirects), C = B ? p : c), e.maxBodyLength > -1 && (O.maxBodyLength = e.maxBodyLength);
            var D = C.request(O, (function(t) {
                if (!D.aborted) {
                    var r = t,
                        o = t.req || D;
                    if (204 !== t.statusCode && "HEAD" !== o.method && !1 !== e.decompress) switch (t.headers["content-encoding"]) {
                        case "gzip":
                        case "compress":
                        case "deflate":
                            r = r.pipe(d.createUnzip()), delete t.headers["content-encoding"]
                    }
                    var s = {
                        status: t.statusCode,
                        statusText: t.statusMessage,
                        headers: t.headers,
                        config: e,
                        request: o
                    };
                    if ("stream" === e.responseType) s.data = r, i(b, _, s);
                    else {
                        var a = [];
                        r.on("data", (function(t) {
                            a.push(t), e.maxContentLength > -1 && Buffer.concat(a).length > e.maxContentLength && (r.destroy(), _(h("maxContentLength size of " + e.maxContentLength + " exceeded", e, null, o)))
                        })), r.on("error", (function(t) {
                            D.aborted || _(g(t, e, null, o))
                        })), r.on("end", (function() {
                            var t = Buffer.concat(a);
                            "arraybuffer" !== e.responseType && (t = t.toString(e.responseEncoding), e.responseEncoding && "utf8" !== e.responseEncoding || (t = n.stripBOM(t))), s.data = t, i(b, _, s)
                        }))
                    }
                }
            }));
            D.on("error", (function(t) {
                D.aborted && "ERR_FR_TOO_MANY_REDIRECTS" !== t.code || _(g(t, e, null, D))
            })), e.timeout && D.setTimeout(e.timeout, (function() {
                D.abort(), _(h("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", D))
            })), e.cancelToken && e.cancelToken.promise.then((function(e) {
                D.aborted || (D.abort(), _(e))
            })), n.isStream(v) ? v.on("error", (function(t) {
                _(g(t, e, null, D))
            })).pipe(D) : D.end(v)
        }))
    }
}, function(e, t, r) {
    var n;
    try {
        n = r(208)("follow-redirects")
    } catch (e) {
        n = function() {}
    }
    e.exports = n
}, function(e, t, r) {
    "undefined" == typeof process || "renderer" === process.type || !0 === process.browser || process.__nwjs ? e.exports = r(209) : e.exports = r(211)
}, function(e, t, r) {
    t.formatArgs = function(t) {
        if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
        const r = "color: " + this.color;
        t.splice(1, 0, r, "color: inherit");
        let n = 0,
            i = 0;
        t[0].replace(/%[a-zA-Z%]/g, (e => {
            "%%" !== e && (n++, "%c" === e && (i = n))
        })), t.splice(i, 0, r)
    }, t.save = function(e) {
        try {
            e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
        } catch (e) {}
    }, t.load = function() {
        let e;
        try {
            e = t.storage.getItem("debug")
        } catch (e) {}!e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG);
        return e
    }, t.useColors = function() {
        if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return !0;
        if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
        return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
    }, t.storage = function() {
        try {
            return localStorage
        } catch (e) {}
    }(), t.destroy = (() => {
        let e = !1;
        return () => {
            e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
        }
    })(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.log = console.debug || console.log || (() => {}), e.exports = r(59)(t);
    const {
        formatters: n
    } = e.exports;
    n.j = function(e) {
        try {
            return JSON.stringify(e)
        } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message
        }
    }
}, function(e, t) {
    var r = 1e3,
        n = 60 * r,
        i = 60 * n,
        o = 24 * i,
        s = 7 * o,
        a = 365.25 * o;

    function u(e, t, r, n) {
        var i = t >= 1.5 * r;
        return Math.round(e / r) + " " + n + (i ? "s" : "")
    }
    e.exports = function(e, t) {
        t = t || {};
        var c = typeof e;
        if ("string" === c && e.length > 0) return function(e) {
            if ((e = String(e)).length > 100) return;
            var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
            if (!t) return;
            var u = parseFloat(t[1]);
            switch ((t[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return u * a;
                case "weeks":
                case "week":
                case "w":
                    return u * s;
                case "days":
                case "day":
                case "d":
                    return u * o;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return u * i;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return u * n;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return u * r;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return u;
                default:
                    return
            }
        }(e);
        if ("number" === c && isFinite(e)) return t.long ? function(e) {
            var t = Math.abs(e);
            if (t >= o) return u(e, t, o, "day");
            if (t >= i) return u(e, t, i, "hour");
            if (t >= n) return u(e, t, n, "minute");
            if (t >= r) return u(e, t, r, "second");
            return e + " ms"
        }(e) : function(e) {
            var t = Math.abs(e);
            if (t >= o) return Math.round(e / o) + "d";
            if (t >= i) return Math.round(e / i) + "h";
            if (t >= n) return Math.round(e / n) + "m";
            if (t >= r) return Math.round(e / r) + "s";
            return e + "ms"
        }(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
}, function(e, t, r) {
    const n = r(60),
        i = r(5);
    t.init = function(e) {
        e.inspectOpts = {};
        const r = Object.keys(t.inspectOpts);
        for (let n = 0; n < r.length; n++) e.inspectOpts[r[n]] = t.inspectOpts[r[n]]
    }, t.log = function(...e) {
        return process.stderr.write(i.format(...e) + "\n")
    }, t.formatArgs = function(r) {
        const {
            namespace: n,
            useColors: i
        } = this;
        if (i) {
            const t = this.color,
                i = "[3" + (t < 8 ? t : "8;5;" + t),
                o = `  ${i};1m${n} [0m`;
            r[0] = o + r[0].split("\n").join("\n" + o), r.push(i + "m+" + e.exports.humanize(this.diff) + "[0m")
        } else r[0] = function() {
            if (t.inspectOpts.hideDate) return "";
            return (new Date).toISOString() + " "
        }() + n + " " + r[0]
    }, t.save = function(e) {
        e ? process.env.DEBUG = e : delete process.env.DEBUG
    }, t.load = function() {
        return process.env.DEBUG
    }, t.useColors = function() {
        return "colors" in t.inspectOpts ? Boolean(t.inspectOpts.colors) : n.isatty(process.stderr.fd)
    }, t.destroy = i.deprecate((() => {}), "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."), t.colors = [6, 2, 3, 4, 5, 1];
    try {
        const e = r(212);
        e && (e.stderr || e).level >= 2 && (t.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221])
    } catch (e) {}
    t.inspectOpts = Object.keys(process.env).filter((e => /^debug_/i.test(e))).reduce(((e, t) => {
        const r = t.substring(6).toLowerCase().replace(/_([a-z])/g, ((e, t) => t.toUpperCase()));
        let n = process.env[t];
        return n = !!/^(yes|on|true|enabled)$/i.test(n) || !/^(no|off|false|disabled)$/i.test(n) && ("null" === n ? null : Number(n)), e[r] = n, e
    }), {}), e.exports = r(59)(t);
    const {
        formatters: o
    } = e.exports;
    o.o = function(e) {
        return this.inspectOpts.colors = this.useColors, i.inspect(e, this.inspectOpts).split("\n").map((e => e.trim())).join(" ")
    }, o.O = function(e) {
        return this.inspectOpts.colors = this.useColors, i.inspect(e, this.inspectOpts)
    }
}, function(e, t, r) {
    "use strict";
    const n = r(4),
        i = r(60),
        o = r(213),
        {
            env: s
        } = process;
    let a;

    function u(e) {
        return 0 !== e && {
            level: e,
            hasBasic: !0,
            has256: e >= 2,
            has16m: e >= 3
        }
    }

    function c(e, t) {
        if (0 === a) return 0;
        if (o("color=16m") || o("color=full") || o("color=truecolor")) return 3;
        if (o("color=256")) return 2;
        if (e && !t && void 0 === a) return 0;
        const r = a || 0;
        if ("dumb" === s.TERM) return r;
        if ("win32" === process.platform) {
            const e = n.release().split(".");
            return Number(e[0]) >= 10 && Number(e[2]) >= 10586 ? Number(e[2]) >= 14931 ? 3 : 2 : 1
        }
        if ("CI" in s) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((e => e in s)) || "codeship" === s.CI_NAME ? 1 : r;
        if ("TEAMCITY_VERSION" in s) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(s.TEAMCITY_VERSION) ? 1 : 0;
        if ("truecolor" === s.COLORTERM) return 3;
        if ("TERM_PROGRAM" in s) {
            const e = parseInt((s.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
            switch (s.TERM_PROGRAM) {
                case "iTerm.app":
                    return e >= 3 ? 3 : 2;
                case "Apple_Terminal":
                    return 2
            }
        }
        return /-256(color)?$/i.test(s.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(s.TERM) || "COLORTERM" in s ? 1 : r
    }
    o("no-color") || o("no-colors") || o("color=false") || o("color=never") ? a = 0 : (o("color") || o("colors") || o("color=true") || o("color=always")) && (a = 1), "FORCE_COLOR" in s && (a = "true" === s.FORCE_COLOR ? 1 : "false" === s.FORCE_COLOR ? 0 : 0 === s.FORCE_COLOR.length ? 1 : Math.min(parseInt(s.FORCE_COLOR, 10), 3)), e.exports = {
        supportsColor: function(e) {
            return u(c(e, e && e.isTTY))
        },
        stdout: u(c(!0, i.isatty(1))),
        stderr: u(c(!0, i.isatty(2)))
    }
}, function(e, t, r) {
    "use strict";
    e.exports = (e, t = process.argv) => {
        const r = e.startsWith("-") ? "" : 1 === e.length ? "-" : "--",
            n = t.indexOf(r + e),
            i = t.indexOf("--");
        return -1 !== n && (-1 === i || n < i)
    }
}, function(e) {
    e.exports = JSON.parse('{"name":"axios","version":"0.21.1","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test && bundlesize","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://github.com/axios/axios","devDependencies":{"bundlesize":"^0.17.0","coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.0.2","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^20.1.0","grunt-karma":"^2.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^1.0.18","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^1.3.0","karma-chrome-launcher":"^2.2.0","karma-coverage":"^1.1.1","karma-firefox-launcher":"^1.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-opera-launcher":"^1.0.0","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^1.2.0","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^1.7.0","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^5.2.0","sinon":"^4.5.0","typescript":"^2.8.1","url-search-params":"^0.10.0","webpack":"^1.13.1","webpack-dev-server":"^1.14.1"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.10.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')
}, function(e, t, r) {
    "use strict";
    var n = r(62);

    function i(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise((function(e) {
            t = e
        }));
        var r = this;
        e((function(e) {
            r.reason || (r.reason = new n(e), t(r.reason))
        }))
    }
    i.prototype.throwIfRequested = function() {
        if (this.reason) throw this.reason
    }, i.source = function() {
        var e;
        return {
            token: new i((function(t) {
                e = t
            })),
            cancel: e
        }
    }, e.exports = i
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        return function(t) {
            return e.apply(null, t)
        }
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        return "object" == typeof e && !0 === e.isAxiosError
    }
}, function(e, t) {
    e.exports = require("querystring")
}, function(e, t, r) {
    "use strict";
    const n = r(220),
        i = r(223),
        o = r(224),
        s = r(63);

    function a(e) {
        return "string" == typeof(e = s.extend({
            headerPattern: /^(\w*)(?:\(([\w$.\-*/ ]*)\))?: (.*)$/,
            headerCorrespondence: ["type", "scope", "subject"],
            referenceActions: ["close", "closes", "closed", "fix", "fixes", "fixed", "resolve", "resolves", "resolved"],
            issuePrefixes: ["#"],
            noteKeywords: ["BREAKING CHANGE"],
            fieldPattern: /^-(.*?)-$/,
            revertPattern: /^Revert\s"([\s\S]*)"\s*This reverts commit (\w*)\./,
            revertCorrespondence: ["header", "hash"],
            warn: function() {},
            mergePattern: null,
            mergeCorrespondence: null
        }, e)).headerPattern && (e.headerPattern = new RegExp(e.headerPattern)), "string" == typeof e.headerCorrespondence && (e.headerCorrespondence = e.headerCorrespondence.split(",")), "string" == typeof e.referenceActions && (e.referenceActions = e.referenceActions.split(",")), "string" == typeof e.issuePrefixes && (e.issuePrefixes = e.issuePrefixes.split(",")), "string" == typeof e.noteKeywords && (e.noteKeywords = e.noteKeywords.split(",")), "string" == typeof e.fieldPattern && (e.fieldPattern = new RegExp(e.fieldPattern)), "string" == typeof e.revertPattern && (e.revertPattern = new RegExp(e.revertPattern)), "string" == typeof e.revertCorrespondence && (e.revertCorrespondence = e.revertCorrespondence.split(",")), "string" == typeof e.mergePattern && (e.mergePattern = new RegExp(e.mergePattern)), e
    }
    e.exports = function(e) {
        e = a(e);
        const t = i(e);
        return o.obj((function(r, i, o) {
            let s;
            try {
                s = n(r.toString(), e, t), o(null, s)
            } catch (t) {
                !0 === e.warn ? o(t) : (e.warn(t.toString()), o(null, ""))
            }
        }))
    }, e.exports.sync = function(e, t) {
        t = a(t);
        const r = i(t);
        return n(e, t, r)
    }
}, function(e, t, r) {
    "use strict";
    const n = r(221),
        i = r(63),
        o = /()(.+)/gi;

    function s(e, t) {
        return e ? e += "\n" + t : e = t, e
    }

    function a(e, t) {
        const r = [];
        let n, i;
        const s = null !== e.match(t.references) ? t.references : o;
        for (; n = s.exec(e);) {
            const e = n[1] || null,
                o = n[2];
            for (; i = t.referenceParts.exec(o);) {
                let t = null,
                    n = i[1] || "";
                const o = n.split("/");
                o.length > 1 && (t = o.shift(), n = o.join("/"));
                const s = {
                    action: e,
                    owner: t,
                    repository: n || null,
                    issue: i[3],
                    raw: i[0],
                    prefix: i[2]
                };
                r.push(s)
            }
        }
        return r
    }

    function u() {
        return !0
    }
    e.exports = function(e, t, r) {
        if (!e || !e.trim()) throw new TypeError("Expected a raw commit");
        if (i.isEmpty(t)) throw new TypeError("Expected options");
        if (i.isEmpty(r)) throw new TypeError("Expected regex");
        let o, c;
        const p = {},
            l = "string" == typeof t.commentChar ? (d = t.commentChar, function(e) {
                return e.charAt(0) !== d
            }) : u;
        var d;
        const f = function(e) {
            const t = e.indexOf("# ------------------------ >8 ------------------------");
            return -1 === t ? e : e.slice(0, t)
        }(n(e).split(/\r?\n/)).filter(l).filter((e => !e.match(/^\s*gpg:/)));
        let h = !1,
            g = !0;
        const m = i.map(t.headerCorrespondence, (function(e) {
                return e.trim()
            })),
            y = i.map(t.revertCorrespondence, (function(e) {
                return e.trim()
            })),
            b = i.map(t.mergeCorrespondence, (function(e) {
                return e.trim()
            }));
        let _ = null,
            v = null,
            w = null;
        const E = [];
        let q = null;
        const T = [],
            S = [];
        let A = null;
        if (0 === f.length) return {
            body: _,
            footer: v,
            header: w,
            mentions: E,
            merge: q,
            notes: T,
            references: S,
            revert: A,
            scope: null,
            subject: null,
            type: null
        };
        q = f.shift();
        const R = {},
            x = {};
        _ = "", v = "";
        const O = q.match(t.mergePattern);
        if (O && t.mergePattern) {
            for (q = O[0], w = f.shift(); void 0 !== w && !w.trim();) w = f.shift();
            w || (w = ""), i.forEach(b, (function(e, t) {
                const r = O[t + 1] || null;
                R[e] = r
            }))
        } else w = q, q = null, i.forEach(b, (function(e) {
            R[e] = null
        }));
        const C = w.match(t.headerPattern);
        if (C ? i.forEach(m, (function(e, t) {
                const r = C[t + 1] || null;
                x[e] = r
            })) : i.forEach(m, (function(e) {
                x[e] = null
            })), Array.prototype.push.apply(S, a(w, {
                references: r.references,
                referenceParts: r.referenceParts
            })), i.forEach(f, (function(e) {
                if (t.fieldPattern) {
                    const r = t.fieldPattern.exec(e);
                    if (r) return void(o = r[1]);
                    if (o) return void(p[o] = s(p[o], e))
                }
                let n;
                const i = e.match(r.notes);
                if (i) {
                    h = !0, g = !1, v = s(v, e);
                    const t = {
                        title: i[1],
                        text: i[2]
                    };
                    return void T.push(t)
                }
                const u = a(e, {
                    references: r.references,
                    referenceParts: r.referenceParts
                });
                if (u.length > 0 && (g = !1, n = !0, h = !1), Array.prototype.push.apply(S, u), !n) return h ? (T[T.length - 1].text = s(T[T.length - 1].text, e), void(v = s(v, e))) : void(g ? _ = s(_, e) : v = s(v, e));
                v = s(v, e)
            })), t.breakingHeaderPattern && 0 === T.length) {
            const e = w.match(t.breakingHeaderPattern);
            if (e) {
                const t = e[3];
                T.push({
                    title: "BREAKING CHANGE",
                    text: t
                })
            }
        }
        for (; c = r.mentions.exec(e);) E.push(c[1]);
        const k = e.match(t.revertPattern);
        return k ? (A = {}, i.forEach(y, (function(e, t) {
            const r = k[t + 1] || null;
            A[e] = r
        }))) : A = null, i.map(T, (function(e) {
            return e.text = n(e.text), e
        })), i.merge(x, R, {
            merge: q,
            header: w,
            body: _ ? n(_) : null,
            footer: v ? n(v) : null,
            notes: T,
            references: S,
            mentions: E,
            revert: A
        }, p)
    }
}, function(e, t, r) {
    "use strict";
    var n = /^(?:\r\n|\n|\r)+|(?:\r\n|\n|\r)+$/g;
    e.exports = function(e) {
        return e.replace(n, "")
    }
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function(e, t, r) {
    "use strict";
    const n = /(?!.*)/;

    function i(e, t) {
        return e.map((function(e) {
            return e.trim()
        })).filter((function(e) {
            return e.length
        })).join(t)
    }
    e.exports = function(e) {
        return {
            notes: function(e, t) {
                if (!e) return n;
                const r = i(e, "|");
                return t ? t(r) : new RegExp("^[\\s|*]*(" + r + ")[:\\s]+(.*)", "i")
            }((e = e || {}).noteKeywords, e.notesPattern),
            referenceParts: function(e, t) {
                if (!e) return n;
                const r = t ? "g" : "gi";
                return new RegExp("(?:.*?)??\\s*([\\w-\\.\\/]*?)??(" + i(e, "|") + ")([\\w-]*\\d+)", r)
            }(e.issuePrefixes, e.issuePrefixesCaseSensitive),
            references: function(e) {
                if (!e) return /()(.+)/gi;
                const t = i(e, "|");
                return new RegExp("(" + t + ")(?:\\s+(.*?))(?=(?:" + t + ")|$)", "gi")
            }(e.referenceActions),
            mentions: /@([\w-]+)/g
        }
    }
}, function(e, t, r) {
    const {
        Transform: n
    } = r(225);

    function i(e) {
        return (t, r, n) => ("function" == typeof t && (n = r, r = t, t = {}), "function" != typeof r && (r = (e, t, r) => r(null, e)), "function" != typeof n && (n = null), e(t, r, n))
    }
    const o = i(((e, t, r) => {
            const i = new n(e);
            return i._transform = t, r && (i._flush = r), i
        })),
        s = i(((e, t, r) => {
            function i(o) {
                if (!(this instanceof i)) return new i(o);
                this.options = Object.assign({}, e, o), n.call(this, this.options), this._transform = t, r && (this._flush = r)
            }
            var o, s;
            return s = n, (o = i).super_ = s, o.prototype = Object.create(s.prototype, {
                constructor: {
                    value: o,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), i
        })),
        a = i((function(e, t, r) {
            const i = new n(Object.assign({
                objectMode: !0,
                highWaterMark: 16
            }, e));
            return i._transform = t, r && (i._flush = r), i
        }));
    e.exports = o, e.exports.ctor = s, e.exports.obj = a
}, function(e, t, r) {
    var n = r(3);
    "disable" === process.env.READABLE_STREAM && n ? (e.exports = n.Readable, Object.assign(e.exports, n), e.exports.Stream = n) : ((t = e.exports = r(64)).Stream = n || t, t.Readable = t, t.Writable = r(68), t.Duplex = r(13), t.Transform = r(70), t.PassThrough = r(232), t.finished = r(33), t.pipeline = r(233))
}, function(e, t, r) {
    "use strict";

    function n(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function i(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    function o(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    var s = r(15).Buffer,
        a = r(5).inspect,
        u = a && a.custom || "inspect";
    e.exports = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.head = null, this.tail = null, this.length = 0
        }
        var t, r, c;
        return t = e, (r = [{
            key: "push",
            value: function(e) {
                var t = {
                    data: e,
                    next: null
                };
                this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
            }
        }, {
            key: "unshift",
            value: function(e) {
                var t = {
                    data: e,
                    next: this.head
                };
                0 === this.length && (this.tail = t), this.head = t, ++this.length
            }
        }, {
            key: "shift",
            value: function() {
                if (0 !== this.length) {
                    var e = this.head.data;
                    return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
                }
            }
        }, {
            key: "clear",
            value: function() {
                this.head = this.tail = null, this.length = 0
            }
        }, {
            key: "join",
            value: function(e) {
                if (0 === this.length) return "";
                for (var t = this.head, r = "" + t.data; t = t.next;) r += e + t.data;
                return r
            }
        }, {
            key: "concat",
            value: function(e) {
                if (0 === this.length) return s.alloc(0);
                for (var t, r, n, i = s.allocUnsafe(e >>> 0), o = this.head, a = 0; o;) t = o.data, r = i, n = a, s.prototype.copy.call(t, r, n), a += o.data.length, o = o.next;
                return i
            }
        }, {
            key: "consume",
            value: function(e, t) {
                var r;
                return e < this.head.data.length ? (r = this.head.data.slice(0, e), this.head.data = this.head.data.slice(e)) : r = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e), r
            }
        }, {
            key: "first",
            value: function() {
                return this.head.data
            }
        }, {
            key: "_getString",
            value: function(e) {
                var t = this.head,
                    r = 1,
                    n = t.data;
                for (e -= n.length; t = t.next;) {
                    var i = t.data,
                        o = e > i.length ? i.length : e;
                    if (o === i.length ? n += i : n += i.slice(0, e), 0 == (e -= o)) {
                        o === i.length ? (++r, t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t, t.data = i.slice(o));
                        break
                    }++r
                }
                return this.length -= r, n
            }
        }, {
            key: "_getBuffer",
            value: function(e) {
                var t = s.allocUnsafe(e),
                    r = this.head,
                    n = 1;
                for (r.data.copy(t), e -= r.data.length; r = r.next;) {
                    var i = r.data,
                        o = e > i.length ? i.length : e;
                    if (i.copy(t, t.length - e, 0, o), 0 == (e -= o)) {
                        o === i.length ? (++n, r.next ? this.head = r.next : this.head = this.tail = null) : (this.head = r, r.data = i.slice(o));
                        break
                    }++n
                }
                return this.length -= n, t
            }
        }, {
            key: u,
            value: function(e, t) {
                return a(this, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? n(Object(r), !0).forEach((function(t) {
                            i(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }({}, t, {
                    depth: 0,
                    customInspect: !1
                }))
            }
        }]) && o(t.prototype, r), c && o(t, c), e
    }()
}, function(e, t) {
    "function" == typeof Object.create ? e.exports = function(e, t) {
        t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }))
    } : e.exports = function(e, t) {
        if (t) {
            e.super_ = t;
            var r = function() {};
            r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
        }
    }
}, function(e, t, r) {
    e.exports = r(5).deprecate
}, function(e, t, r) {
    var n = r(15),
        i = n.Buffer;

    function o(e, t) {
        for (var r in e) t[r] = e[r]
    }

    function s(e, t, r) {
        return i(e, t, r)
    }
    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = n : (o(n, t), t.Buffer = s), s.prototype = Object.create(i.prototype), o(i, s), s.from = function(e, t, r) {
        if ("number" == typeof e) throw new TypeError("Argument must not be a number");
        return i(e, t, r)
    }, s.alloc = function(e, t, r) {
        if ("number" != typeof e) throw new TypeError("Argument must be a number");
        var n = i(e);
        return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0), n
    }, s.allocUnsafe = function(e) {
        if ("number" != typeof e) throw new TypeError("Argument must be a number");
        return i(e)
    }, s.allocUnsafeSlow = function(e) {
        if ("number" != typeof e) throw new TypeError("Argument must be a number");
        return n.SlowBuffer(e)
    }
}, function(e, t, r) {
    "use strict";
    var n;

    function i(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }
    var o = r(33),
        s = Symbol("lastResolve"),
        a = Symbol("lastReject"),
        u = Symbol("error"),
        c = Symbol("ended"),
        p = Symbol("lastPromise"),
        l = Symbol("handlePromise"),
        d = Symbol("stream");

    function f(e, t) {
        return {
            value: e,
            done: t
        }
    }

    function h(e) {
        var t = e[s];
        if (null !== t) {
            var r = e[d].read();
            null !== r && (e[p] = null, e[s] = null, e[a] = null, t(f(r, !1)))
        }
    }

    function g(e) {
        process.nextTick(h, e)
    }
    var m = Object.getPrototypeOf((function() {})),
        y = Object.setPrototypeOf((i(n = {
            get stream() {
                return this[d]
            },
            next: function() {
                var e = this,
                    t = this[u];
                if (null !== t) return Promise.reject(t);
                if (this[c]) return Promise.resolve(f(void 0, !0));
                if (this[d].destroyed) return new Promise((function(t, r) {
                    process.nextTick((function() {
                        e[u] ? r(e[u]) : t(f(void 0, !0))
                    }))
                }));
                var r, n = this[p];
                if (n) r = new Promise(function(e, t) {
                    return function(r, n) {
                        e.then((function() {
                            t[c] ? r(f(void 0, !0)) : t[l](r, n)
                        }), n)
                    }
                }(n, this));
                else {
                    var i = this[d].read();
                    if (null !== i) return Promise.resolve(f(i, !1));
                    r = new Promise(this[l])
                }
                return this[p] = r, r
            }
        }, Symbol.asyncIterator, (function() {
            return this
        })), i(n, "return", (function() {
            var e = this;
            return new Promise((function(t, r) {
                e[d].destroy(null, (function(e) {
                    e ? r(e) : t(f(void 0, !0))
                }))
            }))
        })), n), m);
    e.exports = function(e) {
        var t, r = Object.create(y, (i(t = {}, d, {
            value: e,
            writable: !0
        }), i(t, s, {
            value: null,
            writable: !0
        }), i(t, a, {
            value: null,
            writable: !0
        }), i(t, u, {
            value: null,
            writable: !0
        }), i(t, c, {
            value: e._readableState.endEmitted,
            writable: !0
        }), i(t, l, {
            value: function(e, t) {
                var n = r[d].read();
                n ? (r[p] = null, r[s] = null, r[a] = null, e(f(n, !1))) : (r[s] = e, r[a] = t)
            },
            writable: !0
        }), t));
        return r[p] = null, o(e, (function(e) {
            if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                var t = r[a];
                return null !== t && (r[p] = null, r[s] = null, r[a] = null, t(e)), void(r[u] = e)
            }
            var n = r[s];
            null !== n && (r[p] = null, r[s] = null, r[a] = null, n(f(void 0, !0))), r[c] = !0
        })), e.on("readable", g.bind(null, r)), r
    }
}, function(e, t, r) {
    "use strict";

    function n(e, t, r, n, i, o, s) {
        try {
            var a = e[o](s),
                u = a.value
        } catch (e) {
            return void r(e)
        }
        a.done ? t(u) : Promise.resolve(u).then(n, i)
    }

    function i(e) {
        return function() {
            var t = this,
                r = arguments;
            return new Promise((function(i, o) {
                var s = e.apply(t, r);

                function a(e) {
                    n(s, i, o, a, u, "next", e)
                }

                function u(e) {
                    n(s, i, o, a, u, "throw", e)
                }
                a(void 0)
            }))
        }
    }

    function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function s(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }
    var a = r(9).codes.ERR_INVALID_ARG_TYPE;
    e.exports = function(e, t, r) {
        var n;
        if (t && "function" == typeof t.next) n = t;
        else if (t && t[Symbol.asyncIterator]) n = t[Symbol.asyncIterator]();
        else {
            if (!t || !t[Symbol.iterator]) throw new a("iterable", ["Iterable"], t);
            n = t[Symbol.iterator]()
        }
        var u = new e(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(r), !0).forEach((function(t) {
                        s(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }({
                objectMode: !0
            }, r)),
            c = !1;

        function p() {
            return l.apply(this, arguments)
        }

        function l() {
            return (l = i((function*() {
                try {
                    var e = yield n.next(), t = e.value;
                    e.done ? u.push(null) : u.push(yield t) ? p() : c = !1
                } catch (e) {
                    u.destroy(e)
                }
            }))).apply(this, arguments)
        }
        return u._read = function() {
            c || (c = !0, p())
        }, u
    }
}, function(e, t, r) {
    "use strict";
    e.exports = i;
    var n = r(70);

    function i(e) {
        if (!(this instanceof i)) return new i(e);
        n.call(this, e)
    }
    r(18)(i, n), i.prototype._transform = function(e, t, r) {
        r(null, e)
    }
}, function(e, t, r) {
    "use strict";
    var n;
    var i = r(9).codes,
        o = i.ERR_MISSING_ARGS,
        s = i.ERR_STREAM_DESTROYED;

    function a(e) {
        if (e) throw e
    }

    function u(e, t, i, o) {
        o = function(e) {
            var t = !1;
            return function() {
                t || (t = !0, e.apply(void 0, arguments))
            }
        }(o);
        var a = !1;
        e.on("close", (function() {
            a = !0
        })), void 0 === n && (n = r(33)), n(e, {
            readable: t,
            writable: i
        }, (function(e) {
            if (e) return o(e);
            a = !0, o()
        }));
        var u = !1;
        return function(t) {
            if (!a && !u) return u = !0,
                function(e) {
                    return e.setHeader && "function" == typeof e.abort
                }(e) ? e.abort() : "function" == typeof e.destroy ? e.destroy() : void o(t || new s("pipe"))
        }
    }

    function c(e) {
        e()
    }

    function p(e, t) {
        return e.pipe(t)
    }

    function l(e) {
        return e.length ? "function" != typeof e[e.length - 1] ? a : e.pop() : a
    }
    e.exports = function() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        var n, i = l(t);
        if (Array.isArray(t[0]) && (t = t[0]), t.length < 2) throw new o("streams");
        var s = t.map((function(e, r) {
            var o = r < t.length - 1;
            return u(e, o, r > 0, (function(e) {
                n || (n = e), e && s.forEach(c), o || (s.forEach(c), i(n))
            }))
        }));
        return t.reduce(p)
    }
}, function(e, t, r) {
    "use strict";
    const n = r(235);
    e.exports = {
        parserOpts: n,
        whatBump: e => {
            let t = 2,
                r = 0,
                n = 0;
            return e.forEach((e => {
                e.notes.length > 0 ? (r += e.notes.length, t = 0) : "feat" === e.type && (n += 1, 2 === t && (t = 1))
            })), {
                level: t,
                reason: 1 === r ? `There is ${r} BREAKING CHANGE and ${n} features` : `There are ${r} BREAKING CHANGES and ${n} features`
            }
        }
    }
}, function(e, t, r) {
    "use strict";
    e.exports = {
        headerPattern: /^(\w*)(?:\((.*)\))?: (.*)$/,
        headerCorrespondence: ["type", "scope", "subject"],
        noteKeywords: ["BREAKING CHANGE"],
        revertPattern: /^(?:Revert|revert:)\s"?([\s\S]+?)"?\s*This reverts commit (\w*)\./i,
        revertCorrespondence: ["header", "hash"]
    }
}, function(e, t, r) {
    const n = r(237);
    e.exports = (e, t) => {
        const r = n(e, t);
        return r ? r.version : null
    }
}, function(e, t, r) {
    const {
        MAX_LENGTH: n
    } = r(34), {
        re: i,
        t: o
    } = r(72), s = r(74), a = r(75);
    e.exports = (e, t) => {
        if (t = a(t), e instanceof s) return e;
        if ("string" != typeof e) return null;
        if (e.length > n) return null;
        if (!(t.loose ? i[o.LOOSE] : i[o.FULL]).test(e)) return null;
        try {
            return new s(e, t)
        } catch (e) {
            return null
        }
    }
}, function(e, t) {
    const r = /^[0-9]+$/,
        n = (e, t) => {
            const n = r.test(e),
                i = r.test(t);
            return n && i && (e = +e, t = +t), e === t ? 0 : n && !i ? -1 : i && !n ? 1 : e < t ? -1 : 1
        };
    e.exports = {
        compareIdentifiers: n,
        rcompareIdentifiers: (e, t) => n(t, e)
    }
}, function(e, t, r) {
    const n = r(76);
    e.exports = (e, t, r) => n(t, e, r)
}, function(e, t, r) {
    const n = r(76);
    e.exports = (e, t, r) => n(e, t, r) < 0
}, function(e, t, r) {
    "use strict";
    var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r), Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        } : function(e, t, r, n) {
            void 0 === n && (n = r), e[n] = t[r]
        }),
        i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        } : function(e, t) {
            e.default = t
        }),
        o = this && this.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
            return i(t, e), t
        },
        s = this && this.__awaiter || function(e, t, r, n) {
            return new(r || (r = Promise))((function(i, o) {
                function s(e) {
                    try {
                        u(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                        e(t)
                    }))).then(s, a)
                }
                u((n = n.apply(e, t || [])).next())
            }))
        },
        a = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.uploadReleaseArtifacts = void 0;
    const u = o(r(19)),
        c = a(r(242)),
        p = r(1),
        l = a(r(0)),
        d = a(r(305));
    t.uploadReleaseArtifacts = (e, t, r) => s(void 0, void 0, void 0, (function*() {
        u.startGroup("Uploading release artifacts");
        for (const n of r) {
            const r = yield c.default(n);
            0 == r.length && u.error(`${n} doesn't match any files`);
            for (const n of r) {
                u.info(`Uploading: ${n}`);
                const r = l.default.basename(n),
                    i = {
                        url: t,
                        headers: {
                            "content-length": p.lstatSync(n).size,
                            "content-type": "application/octet-stream"
                        },
                        name: r,
                        file: p.readFileSync(n)
                    };
                try {
                    yield e.repos.uploadReleaseAsset(i)
                } catch (t) {
                    u.info(`Problem uploading ${n} as a release asset (${t.message}). Will retry with the md5 hash appended to the filename.`);
                    const r = yield d.default(n), o = `${l.default.basename(n,l.default.extname(n))}-${r}${l.default.extname(n)}`;
                    yield e.repos.uploadReleaseAsset(Object.assign(Object.assign({}, i), {
                        name: o
                    }))
                }
            }
        }
        u.endGroup()
    }))
}, function(e, t, r) {
    "use strict";
    const n = r(1),
        i = r(243),
        o = r(77),
        s = r(78),
        a = r(299),
        u = r(301),
        {
            FilterStream: c,
            UniqueStream: p
        } = r(304),
        l = () => !1,
        d = e => "!" === e[0],
        f = (e, t) => {
            (e => {
                if (!e.every((e => "string" == typeof e))) throw new TypeError("Patterns must be a string or an array of strings")
            })(e = i([].concat(e))), ((e = {}) => {
                if (!e.cwd) return;
                let t;
                try {
                    t = n.statSync(e.cwd)
                } catch {
                    return
                }
                if (!t.isDirectory()) throw new Error("The `cwd` option must be a path to a directory")
            })(t);
            const r = [];
            t = {
                ignore: [],
                expandDirectories: !0,
                ...t
            };
            for (const [n, i] of e.entries()) {
                if (d(i)) continue;
                const o = e.slice(n).filter((e => d(e))).map((e => e.slice(1))),
                    s = {
                        ...t,
                        ignore: t.ignore.concat(o)
                    };
                r.push({
                    pattern: i,
                    options: s
                })
            }
            return r
        },
        h = (e, t) => e.options.expandDirectories ? ((e, t) => {
            let r = {};
            return e.options.cwd && (r.cwd = e.options.cwd), Array.isArray(e.options.expandDirectories) ? r = {
                ...r,
                files: e.options.expandDirectories
            } : "object" == typeof e.options.expandDirectories && (r = {
                ...r,
                ...e.options.expandDirectories
            }), t(e.pattern, r)
        })(e, t) : [e.pattern],
        g = e => e && e.gitignore ? u.sync({
            cwd: e.cwd,
            ignore: e.ignore
        }) : l,
        m = e => t => {
            const {
                options: r
            } = e;
            return r.ignore && Array.isArray(r.ignore) && r.expandDirectories && (r.ignore = a.sync(r.ignore)), {
                pattern: t,
                options: r
            }
        };
    e.exports = async (e, t) => {
        const r = f(e, t),
            [o, c] = await Promise.all([(async () => t && t.gitignore ? u({
                cwd: t.cwd,
                ignore: t.ignore
            }) : l)(), (async () => {
                const e = await Promise.all(r.map((async e => {
                    const t = await h(e, a);
                    return Promise.all(t.map(m(e)))
                })));
                return i(...e)
            })()]),
            p = await Promise.all(c.map((e => s(e.pattern, e.options))));
        return i(...p).filter((e => {
            return !o((t = e, t.stats instanceof n.Stats ? t.path : t));
            var t
        }))
    }, e.exports.sync = (e, t) => {
        const r = f(e, t),
            n = [];
        for (const e of r) {
            const t = h(e, a.sync).map(m(e));
            n.push(...t)
        }
        const o = g(t);
        let u = [];
        for (const e of n) u = i(u, s.sync(e.pattern, e.options));
        return u.filter((e => !o(e)))
    }, e.exports.stream = (e, t) => {
        const r = f(e, t),
            n = [];
        for (const e of r) {
            const t = h(e, a.sync).map(m(e));
            n.push(...t)
        }
        const i = g(t),
            u = new c((e => !i(e))),
            l = new p;
        return o(n.map((e => s.stream(e.pattern, e.options)))).pipe(u).pipe(l)
    }, e.exports.generateGlobTasks = f, e.exports.hasMagic = (e, t) => [].concat(e).some((e => s.isDynamicPattern(e, t))), e.exports.gitignore = u
}, function(e, t, r) {
    "use strict";
    e.exports = (...e) => [...new Set([].concat(...e))]
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.convertPatternGroupToTask = t.convertPatternGroupsToTasks = t.groupPatternsByBaseDirectory = t.getNegativePatternsAsPositive = t.getPositivePatterns = t.convertPatternsToTasks = t.generate = void 0;
    const n = r(7);

    function i(e, t, r) {
        const n = a(e);
        if ("." in n) {
            return [c(".", e, t, r)]
        }
        return u(n, t, r)
    }

    function o(e) {
        return n.pattern.getPositivePatterns(e)
    }

    function s(e, t) {
        return n.pattern.getNegativePatterns(e).concat(t).map(n.pattern.convertToPositivePattern)
    }

    function a(e) {
        return e.reduce(((e, t) => {
            const r = n.pattern.getBaseDirectory(t);
            return r in e ? e[r].push(t) : e[r] = [t], e
        }), {})
    }

    function u(e, t, r) {
        return Object.keys(e).map((n => c(n, e[n], t, r)))
    }

    function c(e, t, r, i) {
        return {
            dynamic: i,
            positive: t,
            negative: r,
            base: e,
            patterns: [].concat(t, r.map(n.pattern.convertToNegativePattern))
        }
    }
    t.generate = function(e, t) {
        const r = o(e),
            a = s(e, t.ignore),
            u = r.filter((e => n.pattern.isStaticPattern(e, t))),
            c = r.filter((e => n.pattern.isDynamicPattern(e, t))),
            p = i(u, a, !1),
            l = i(c, a, !0);
        return p.concat(l)
    }, t.convertPatternsToTasks = i, t.getPositivePatterns = o, t.getNegativePatternsAsPositive = s, t.groupPatternsByBaseDirectory = a, t.convertPatternGroupsToTasks = u, t.convertPatternGroupToTask = c
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.splitWhen = t.flatten = void 0, t.flatten = function(e) {
        return e.reduce(((e, t) => [].concat(e, t)), [])
    }, t.splitWhen = function(e, t) {
        const r = [
            []
        ];
        let n = 0;
        for (const i of e) t(i) ? (n++, r[n] = []) : r[n].push(i);
        return r
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isEnoentCodeError = void 0, t.isEnoentCodeError = function(e) {
        return "ENOENT" === e.code
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.createDirentFromStats = void 0;
    class n {
        constructor(e, t) {
            this.name = e, this.isBlockDevice = t.isBlockDevice.bind(t), this.isCharacterDevice = t.isCharacterDevice.bind(t), this.isDirectory = t.isDirectory.bind(t), this.isFIFO = t.isFIFO.bind(t), this.isFile = t.isFile.bind(t), this.isSocket = t.isSocket.bind(t), this.isSymbolicLink = t.isSymbolicLink.bind(t)
        }
    }
    t.createDirentFromStats = function(e, t) {
        return new n(e, t)
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.removeLeadingDotSegment = t.escape = t.makeAbsolute = t.unixify = void 0;
    const n = r(0),
        i = /(\\?)([()*?[\]{|}]|^!|[!+@](?=\())/g;
    t.unixify = function(e) {
        return e.replace(/\\/g, "/")
    }, t.makeAbsolute = function(e, t) {
        return n.resolve(e, t)
    }, t.escape = function(e) {
        return e.replace(i, "\\$2")
    }, t.removeLeadingDotSegment = function(e) {
        if ("." === e.charAt(0)) {
            const t = e.charAt(1);
            if ("/" === t || "\\" === t) return e.slice(2)
        }
        return e
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.matchAny = t.convertPatternsToRe = t.makeRe = t.getPatternParts = t.expandBraceExpansion = t.expandPatternsWithBraceExpansion = t.isAffectDepthOfReadingPattern = t.endsWithSlashGlobStar = t.hasGlobStar = t.getBaseDirectory = t.getPositivePatterns = t.getNegativePatterns = t.isPositivePattern = t.isNegativePattern = t.convertToNegativePattern = t.convertToPositivePattern = t.isDynamicPattern = t.isStaticPattern = void 0;
    const n = r(0),
        i = r(250),
        o = r(253),
        s = r(265),
        a = /[*?]|^!/,
        u = /\[.*]/,
        c = /(?:^|[^!*+?@])\(.*\|.*\)/,
        p = /[!*+?@]\(.*\)/,
        l = /{.*(?:,|\.\.).*}/;

    function d(e, t = {}) {
        return !f(e, t)
    }

    function f(e, t = {}) {
        return "" !== e && (!(!1 !== t.caseSensitiveMatch && !e.includes("\\")) || (!!(a.test(e) || u.test(e) || c.test(e)) || (!(!1 === t.extglob || !p.test(e)) || !(!1 === t.braceExpansion || !l.test(e)))))
    }

    function h(e) {
        return e.startsWith("!") && "(" !== e[1]
    }

    function g(e) {
        return !h(e)
    }

    function m(e) {
        return e.endsWith("/**")
    }

    function y(e) {
        return o.braces(e, {
            expand: !0,
            nodupes: !0
        })
    }

    function b(e, t) {
        return o.makeRe(e, t)
    }
    t.isStaticPattern = d, t.isDynamicPattern = f, t.convertToPositivePattern = function(e) {
        return h(e) ? e.slice(1) : e
    }, t.convertToNegativePattern = function(e) {
        return "!" + e
    }, t.isNegativePattern = h, t.isPositivePattern = g, t.getNegativePatterns = function(e) {
        return e.filter(h)
    }, t.getPositivePatterns = function(e) {
        return e.filter(g)
    }, t.getBaseDirectory = function(e) {
        return i(e, {
            flipBackslashes: !1
        })
    }, t.hasGlobStar = function(e) {
        return e.includes("**")
    }, t.endsWithSlashGlobStar = m, t.isAffectDepthOfReadingPattern = function(e) {
        const t = n.basename(e);
        return m(e) || d(t)
    }, t.expandPatternsWithBraceExpansion = function(e) {
        return e.reduce(((e, t) => e.concat(y(t))), [])
    }, t.expandBraceExpansion = y, t.getPatternParts = function(e, t) {
        let {
            parts: r
        } = s.scan(e, Object.assign(Object.assign({}, t), {
            parts: !0
        }));
        return 0 === r.length && (r = [e]), r[0].startsWith("/") && (r[0] = r[0].slice(1), r.unshift("")), r
    }, t.makeRe = b, t.convertPatternsToRe = function(e, t) {
        return e.map((e => b(e, t)))
    }, t.matchAny = function(e, t) {
        return t.some((t => t.test(e)))
    }
}, function(e, t, r) {
    "use strict";
    var n = r(251),
        i = r(0).posix.dirname,
        o = "win32" === r(4).platform(),
        s = /\\/g,
        a = /[\{\[].*[\}\]]$/,
        u = /(^|[^\\])([\{\[]|\([^\)]+$)/,
        c = /\\([\!\*\?\|\[\]\(\)\{\}])/g;
    e.exports = function(e, t) {
        Object.assign({
            flipBackslashes: !0
        }, t).flipBackslashes && o && e.indexOf("/") < 0 && (e = e.replace(s, "/")), a.test(e) && (e += "/"), e += "a";
        do {
            e = i(e)
        } while (n(e) || u.test(e));
        return e.replace(c, "$1")
    }
}, function(e, t, r) {
    var n = r(252),
        i = {
            "{": "}",
            "(": ")",
            "[": "]"
        },
        o = /\\(.)|(^!|\*|[\].+)]\?|\[[^\\\]]+\]|\{[^\\}]+\}|\(\?[:!=][^\\)]+\)|\([^|]+\|[^\\)]+\))/,
        s = /\\(.)|(^!|[*?{}()[\]]|\(\?)/;
    e.exports = function(e, t) {
        if ("string" != typeof e || "" === e) return !1;
        if (n(e)) return !0;
        var r, a = o;
        for (t && !1 === t.strict && (a = s); r = a.exec(e);) {
            if (r[2]) return !0;
            var u = r.index + r[0].length,
                c = r[1],
                p = c ? i[c] : null;
            if (c && p) {
                var l = e.indexOf(p, u); - 1 !== l && (u = l + 1)
            }
            e = e.slice(u)
        }
        return !1
    }
}, function(e, t) {
    e.exports = function(e) {
        if ("string" != typeof e || "" === e) return !1;
        for (var t; t = /(\\).|([@?!+*]\(.*\))/g.exec(e);) {
            if (t[2]) return !0;
            e = e.slice(t.index + t[0].length)
        }
        return !1
    }
}, function(e, t, r) {
    "use strict";
    const n = r(5),
        i = r(254),
        o = r(261),
        s = r(22),
        a = e => "string" == typeof e && ("" === e || "./" === e),
        u = (e, t, r) => {
            t = [].concat(t), e = [].concat(e);
            let n = new Set,
                i = new Set,
                s = new Set,
                a = 0,
                u = e => {
                    s.add(e.output), r && r.onResult && r.onResult(e)
                };
            for (let s = 0; s < t.length; s++) {
                let c = o(String(t[s]), {
                        ...r,
                        onResult: u
                    }, !0),
                    p = c.state.negated || c.state.negatedExtglob;
                p && a++;
                for (let t of e) {
                    let e = c(t, !0);
                    (p ? !e.isMatch : e.isMatch) && (p ? n.add(e.output) : (n.delete(e.output), i.add(e.output)))
                }
            }
            let c = (a === t.length ? [...s] : [...i]).filter((e => !n.has(e)));
            if (r && 0 === c.length) {
                if (!0 === r.failglob) throw new Error(`No matches found for "${t.join(", ")}"`);
                if (!0 === r.nonull || !0 === r.nullglob) return r.unescape ? t.map((e => e.replace(/\\/g, ""))) : t
            }
            return c
        };
    u.match = u, u.matcher = (e, t) => o(e, t), u.any = u.isMatch = (e, t, r) => o(t, r)(e), u.not = (e, t, r = {}) => {
        t = [].concat(t).map(String);
        let n = new Set,
            i = [],
            o = u(e, t, {
                ...r,
                onResult: e => {
                    r.onResult && r.onResult(e), i.push(e.output)
                }
            });
        for (let e of i) o.includes(e) || n.add(e);
        return [...n]
    }, u.contains = (e, t, r) => {
        if ("string" != typeof e) throw new TypeError(`Expected a string: "${n.inspect(e)}"`);
        if (Array.isArray(t)) return t.some((t => u.contains(e, t, r)));
        if ("string" == typeof t) {
            if (a(e) || a(t)) return !1;
            if (e.includes(t) || e.startsWith("./") && e.slice(2).includes(t)) return !0
        }
        return u.isMatch(e, t, {
            ...r,
            contains: !0
        })
    }, u.matchKeys = (e, t, r) => {
        if (!s.isObject(e)) throw new TypeError("Expected the first argument to be an object");
        let n = u(Object.keys(e), t, r),
            i = {};
        for (let t of n) i[t] = e[t];
        return i
    }, u.some = (e, t, r) => {
        let n = [].concat(e);
        for (let e of [].concat(t)) {
            let t = o(String(e), r);
            if (n.some((e => t(e)))) return !0
        }
        return !1
    }, u.every = (e, t, r) => {
        let n = [].concat(e);
        for (let e of [].concat(t)) {
            let t = o(String(e), r);
            if (!n.every((e => t(e)))) return !1
        }
        return !0
    }, u.all = (e, t, r) => {
        if ("string" != typeof e) throw new TypeError(`Expected a string: "${n.inspect(e)}"`);
        return [].concat(t).every((t => o(t, r)(e)))
    }, u.capture = (e, t, r) => {
        let n = s.isWindows(r),
            i = o.makeRe(String(e), {
                ...r,
                capture: !0
            }).exec(n ? s.toPosixSlashes(t) : t);
        if (i) return i.slice(1).map((e => void 0 === e ? "" : e))
    }, u.makeRe = (...e) => o.makeRe(...e), u.scan = (...e) => o.scan(...e), u.parse = (e, t) => {
        let r = [];
        for (let n of [].concat(e || []))
            for (let e of i(String(n), t)) r.push(o.parse(e, t));
        return r
    }, u.braces = (e, t) => {
        if ("string" != typeof e) throw new TypeError("Expected a string");
        return t && !0 === t.nobrace || !/\{.*\}/.test(e) ? [e] : i(e, t)
    }, u.braceExpand = (e, t) => {
        if ("string" != typeof e) throw new TypeError("Expected a string");
        return u.braces(e, {
            ...t,
            expand: !0
        })
    }, e.exports = u
}, function(e, t, r) {
    "use strict";
    const n = r(35),
        i = r(255),
        o = r(258),
        s = r(259),
        a = (e, t = {}) => {
            let r = [];
            if (Array.isArray(e))
                for (let n of e) {
                    let e = a.create(n, t);
                    Array.isArray(e) ? r.push(...e) : r.push(e)
                } else r = [].concat(a.create(e, t));
            return t && !0 === t.expand && !0 === t.nodupes && (r = [...new Set(r)]), r
        };
    a.parse = (e, t = {}) => s(e, t), a.stringify = (e, t = {}) => n("string" == typeof e ? a.parse(e, t) : e, t), a.compile = (e, t = {}) => ("string" == typeof e && (e = a.parse(e, t)), i(e, t)), a.expand = (e, t = {}) => {
        "string" == typeof e && (e = a.parse(e, t));
        let r = o(e, t);
        return !0 === t.noempty && (r = r.filter(Boolean)), !0 === t.nodupes && (r = [...new Set(r)]), r
    }, a.create = (e, t = {}) => "" === e || e.length < 3 ? [e] : !0 !== t.expand ? a.compile(e, t) : a.expand(e, t), e.exports = a
}, function(e, t, r) {
    "use strict";
    const n = r(79),
        i = r(36);
    e.exports = (e, t = {}) => {
        let r = (e, o = {}) => {
            let s = i.isInvalidBrace(o),
                a = !0 === e.invalid && !0 === t.escapeInvalid,
                u = !0 === s || !0 === a,
                c = !0 === t.escapeInvalid ? "\\" : "",
                p = "";
            if (!0 === e.isOpen) return c + e.value;
            if (!0 === e.isClose) return c + e.value;
            if ("open" === e.type) return u ? c + e.value : "(";
            if ("close" === e.type) return u ? c + e.value : ")";
            if ("comma" === e.type) return "comma" === e.prev.type ? "" : u ? e.value : "|";
            if (e.value) return e.value;
            if (e.nodes && e.ranges > 0) {
                let r = i.reduce(e.nodes),
                    o = n(...r, {
                        ...t,
                        wrap: !1,
                        toRegex: !0
                    });
                if (0 !== o.length) return r.length > 1 && o.length > 1 ? `(${o})` : o
            }
            if (e.nodes)
                for (let t of e.nodes) p += r(t, e);
            return p
        };
        return r(e)
    }
}, function(e, t, r) {
    "use strict";
    const n = r(257),
        i = (e, t, r) => {
            if (!1 === n(e)) throw new TypeError("toRegexRange: expected the first argument to be a number");
            if (void 0 === t || e === t) return String(e);
            if (!1 === n(t)) throw new TypeError("toRegexRange: expected the second argument to be a number.");
            let o = {
                relaxZeros: !0,
                ...r
            };
            "boolean" == typeof o.strictZeros && (o.relaxZeros = !1 === o.strictZeros);
            let u = e + ":" + t + "=" + String(o.relaxZeros) + String(o.shorthand) + String(o.capture) + String(o.wrap);
            if (i.cache.hasOwnProperty(u)) return i.cache[u].result;
            let c = Math.min(e, t),
                p = Math.max(e, t);
            if (1 === Math.abs(c - p)) {
                let r = e + "|" + t;
                return o.capture ? `(${r})` : !1 === o.wrap ? r : `(?:${r})`
            }
            let l = h(e) || h(t),
                d = {
                    min: e,
                    max: t,
                    a: c,
                    b: p
                },
                f = [],
                g = [];
            if (l && (d.isPadded = l, d.maxLen = String(d.max).length), c < 0) {
                g = s(p < 0 ? Math.abs(p) : 1, Math.abs(c), d, o), c = d.a = 0
            }
            return p >= 0 && (f = s(c, p, d, o)), d.negatives = g, d.positives = f, d.result = function(e, t, r) {
                let n = a(e, t, "-", !1, r) || [],
                    i = a(t, e, "", !1, r) || [],
                    o = a(e, t, "-?", !0, r) || [];
                return n.concat(o).concat(i).join("|")
            }(g, f, o), !0 === o.capture ? d.result = `(${d.result})` : !1 !== o.wrap && f.length + g.length > 1 && (d.result = `(?:${d.result})`), i.cache[u] = d, d.result
        };

    function o(e, t, r) {
        if (e === t) return {
            pattern: e,
            count: [],
            digits: 0
        };
        let n = function(e, t) {
                let r = [];
                for (let n = 0; n < e.length; n++) r.push([e[n], t[n]]);
                return r
            }(e, t),
            i = n.length,
            o = "",
            s = 0;
        for (let e = 0; e < i; e++) {
            let [t, i] = n[e];
            t === i ? o += t : "0" !== t || "9" !== i ? o += f(t, i, r) : s++
        }
        return s && (o += !0 === r.shorthand ? "\\d" : "[0-9]"), {
            pattern: o,
            count: [s],
            digits: i
        }
    }

    function s(e, t, r, n) {
        let i, s = function(e, t) {
                let r = 1,
                    n = 1,
                    i = p(e, r),
                    o = new Set([t]);
                for (; e <= i && i <= t;) o.add(i), r += 1, i = p(e, r);
                for (i = l(t + 1, n) - 1; e < i && i <= t;) o.add(i), n += 1, i = l(t + 1, n) - 1;
                return o = [...o], o.sort(u), o
            }(e, t),
            a = [],
            c = e;
        for (let e = 0; e < s.length; e++) {
            let t = s[e],
                u = o(String(c), String(t), n),
                p = "";
            r.isPadded || !i || i.pattern !== u.pattern ? (r.isPadded && (p = g(t, r, n)), u.string = p + u.pattern + d(u.count), a.push(u), c = t + 1, i = u) : (i.count.length > 1 && i.count.pop(), i.count.push(u.count[0]), i.string = i.pattern + d(i.count), c = t + 1)
        }
        return a
    }

    function a(e, t, r, n, i) {
        let o = [];
        for (let i of e) {
            let {
                string: e
            } = i;
            n || c(t, "string", e) || o.push(r + e), n && c(t, "string", e) && o.push(r + e)
        }
        return o
    }

    function u(e, t) {
        return e > t ? 1 : t > e ? -1 : 0
    }

    function c(e, t, r) {
        return e.some((e => e[t] === r))
    }

    function p(e, t) {
        return Number(String(e).slice(0, -t) + "9".repeat(t))
    }

    function l(e, t) {
        return e - e % Math.pow(10, t)
    }

    function d(e) {
        let [t = 0, r = ""] = e;
        return r || t > 1 ? `{${t+(r?","+r:"")}}` : ""
    }

    function f(e, t, r) {
        return `[${e}${t-e==1?"":"-"}${t}]`
    }

    function h(e) {
        return /^-?(0+)\d/.test(e)
    }

    function g(e, t, r) {
        if (!t.isPadded) return e;
        let n = Math.abs(t.maxLen - String(e).length),
            i = !1 !== r.relaxZeros;
        switch (n) {
            case 0:
                return "";
            case 1:
                return i ? "0?" : "0";
            case 2:
                return i ? "0{0,2}" : "00";
            default:
                return i ? `0{0,${n}}` : `0{${n}}`
        }
    }
    i.cache = {}, i.clearCache = () => i.cache = {}, e.exports = i
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        return "number" == typeof e ? e - e == 0 : "string" == typeof e && "" !== e.trim() && (Number.isFinite ? Number.isFinite(+e) : isFinite(+e))
    }
}, function(e, t, r) {
    "use strict";
    const n = r(79),
        i = r(35),
        o = r(36),
        s = (e = "", t = "", r = !1) => {
            let n = [];
            if (e = [].concat(e), !(t = [].concat(t)).length) return e;
            if (!e.length) return r ? o.flatten(t).map((e => `{${e}}`)) : t;
            for (let i of e)
                if (Array.isArray(i))
                    for (let e of i) n.push(s(e, t, r));
                else
                    for (let e of t) !0 === r && "string" == typeof e && (e = `{${e}}`), n.push(Array.isArray(e) ? s(i, e, r) : i + e);
            return o.flatten(n)
        };
    e.exports = (e, t = {}) => {
        let r = void 0 === t.rangeLimit ? 1e3 : t.rangeLimit,
            a = (e, u = {}) => {
                e.queue = [];
                let c = u,
                    p = u.queue;
                for (;
                    "brace" !== c.type && "root" !== c.type && c.parent;) c = c.parent, p = c.queue;
                if (e.invalid || e.dollar) return void p.push(s(p.pop(), i(e, t)));
                if ("brace" === e.type && !0 !== e.invalid && 2 === e.nodes.length) return void p.push(s(p.pop(), ["{}"]));
                if (e.nodes && e.ranges > 0) {
                    let a = o.reduce(e.nodes);
                    if (o.exceedsLimit(...a, t.step, r)) throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
                    let u = n(...a, t);
                    return 0 === u.length && (u = i(e, t)), p.push(s(p.pop(), u)), void(e.nodes = [])
                }
                let l = o.encloseBrace(e),
                    d = e.queue,
                    f = e;
                for (;
                    "brace" !== f.type && "root" !== f.type && f.parent;) f = f.parent, d = f.queue;
                for (let t = 0; t < e.nodes.length; t++) {
                    let r = e.nodes[t];
                    "comma" !== r.type || "brace" !== e.type ? "close" !== r.type ? r.value && "open" !== r.type ? d.push(s(d.pop(), r.value)) : r.nodes && a(r, e) : p.push(s(p.pop(), d, l)) : (1 === t && d.push(""), d.push(""))
                }
                return d
            };
        return o.flatten(a(e))
    }
}, function(e, t, r) {
    "use strict";
    const n = r(35),
        {
            MAX_LENGTH: i,
            CHAR_BACKSLASH: o,
            CHAR_BACKTICK: s,
            CHAR_COMMA: a,
            CHAR_DOT: u,
            CHAR_LEFT_PARENTHESES: c,
            CHAR_RIGHT_PARENTHESES: p,
            CHAR_LEFT_CURLY_BRACE: l,
            CHAR_RIGHT_CURLY_BRACE: d,
            CHAR_LEFT_SQUARE_BRACKET: f,
            CHAR_RIGHT_SQUARE_BRACKET: h,
            CHAR_DOUBLE_QUOTE: g,
            CHAR_SINGLE_QUOTE: m,
            CHAR_NO_BREAK_SPACE: y,
            CHAR_ZERO_WIDTH_NOBREAK_SPACE: b
        } = r(260);
    e.exports = (e, t = {}) => {
        if ("string" != typeof e) throw new TypeError("Expected a string");
        let r = t || {},
            _ = "number" == typeof r.maxLength ? Math.min(i, r.maxLength) : i;
        if (e.length > _) throw new SyntaxError(`Input length (${e.length}), exceeds max characters (${_})`);
        let v, w = {
                type: "root",
                input: e,
                nodes: []
            },
            E = [w],
            q = w,
            T = w,
            S = 0,
            A = e.length,
            R = 0,
            x = 0;
        const O = () => e[R++],
            C = e => {
                if ("text" === e.type && "dot" === T.type && (T.type = "text"), !T || "text" !== T.type || "text" !== e.type) return q.nodes.push(e), e.parent = q, e.prev = T, T = e, e;
                T.value += e.value
            };
        for (C({
                type: "bos"
            }); R < A;)
            if (q = E[E.length - 1], v = O(), v !== b && v !== y)
                if (v !== o)
                    if (v !== h)
                        if (v !== f)
                            if (v !== c)
                                if (v !== p)
                                    if (v !== g && v !== m && v !== s)
                                        if (v !== l)
                                            if (v !== d)
                                                if (v === a && x > 0) {
                                                    if (q.ranges > 0) {
                                                        q.ranges = 0;
                                                        let e = q.nodes.shift();
                                                        q.nodes = [e, {
                                                            type: "text",
                                                            value: n(q)
                                                        }]
                                                    }
                                                    C({
                                                        type: "comma",
                                                        value: v
                                                    }), q.commas++
                                                } else if (v === u && x > 0 && 0 === q.commas) {
            let e = q.nodes;
            if (0 === x || 0 === e.length) {
                C({
                    type: "text",
                    value: v
                });
                continue
            }
            if ("dot" === T.type) {
                if (q.range = [], T.value += v, T.type = "range", 3 !== q.nodes.length && 5 !== q.nodes.length) {
                    q.invalid = !0, q.ranges = 0, T.type = "text";
                    continue
                }
                q.ranges++, q.args = [];
                continue
            }
            if ("range" === T.type) {
                e.pop();
                let t = e[e.length - 1];
                t.value += T.value + v, T = t, q.ranges--;
                continue
            }
            C({
                type: "dot",
                value: v
            })
        } else C({
            type: "text",
            value: v
        });
        else {
            if ("brace" !== q.type) {
                C({
                    type: "text",
                    value: v
                });
                continue
            }
            let e = "close";
            q = E.pop(), q.close = !0, C({
                type: e,
                value: v
            }), x--, q = E[E.length - 1]
        } else {
            x++;
            let e = T.value && "$" === T.value.slice(-1) || !0 === q.dollar;
            q = C({
                type: "brace",
                open: !0,
                close: !1,
                dollar: e,
                depth: x,
                commas: 0,
                ranges: 0,
                nodes: []
            }), E.push(q), C({
                type: "open",
                value: v
            })
        } else {
            let e, r = v;
            for (!0 !== t.keepQuotes && (v = ""); R < A && (e = O());)
                if (e !== o) {
                    if (e === r) {
                        !0 === t.keepQuotes && (v += e);
                        break
                    }
                    v += e
                } else v += e + O();
            C({
                type: "text",
                value: v
            })
        } else {
            if ("paren" !== q.type) {
                C({
                    type: "text",
                    value: v
                });
                continue
            }
            q = E.pop(), C({
                type: "text",
                value: v
            }), q = E[E.length - 1]
        } else q = C({
            type: "paren",
            nodes: []
        }), E.push(q), C({
            type: "text",
            value: v
        });
        else {
            S++;
            let e;
            for (; R < A && (e = O());)
                if (v += e, e !== f)
                    if (e !== o) {
                        if (e === h && (S--, 0 === S)) break
                    } else v += O();
            else S++;
            C({
                type: "text",
                value: v
            })
        } else C({
            type: "text",
            value: "\\" + v
        });
        else C({
            type: "text",
            value: (t.keepEscaping ? v : "") + O()
        });
        do {
            if (q = E.pop(), "root" !== q.type) {
                q.nodes.forEach((e => {
                    e.nodes || ("open" === e.type && (e.isOpen = !0), "close" === e.type && (e.isClose = !0), e.nodes || (e.type = "text"), e.invalid = !0)
                }));
                let e = E[E.length - 1],
                    t = e.nodes.indexOf(q);
                e.nodes.splice(t, 1, ...q.nodes)
            }
        } while (E.length > 0);
        return C({
            type: "eos"
        }), w
    }
}, function(e, t, r) {
    "use strict";
    e.exports = {
        MAX_LENGTH: 65536,
        CHAR_0: "0",
        CHAR_9: "9",
        CHAR_UPPERCASE_A: "A",
        CHAR_LOWERCASE_A: "a",
        CHAR_UPPERCASE_Z: "Z",
        CHAR_LOWERCASE_Z: "z",
        CHAR_LEFT_PARENTHESES: "(",
        CHAR_RIGHT_PARENTHESES: ")",
        CHAR_ASTERISK: "*",
        CHAR_AMPERSAND: "&",
        CHAR_AT: "@",
        CHAR_BACKSLASH: "\\",
        CHAR_BACKTICK: "`",
        CHAR_CARRIAGE_RETURN: "\r",
        CHAR_CIRCUMFLEX_ACCENT: "^",
        CHAR_COLON: ":",
        CHAR_COMMA: ",",
        CHAR_DOLLAR: "$",
        CHAR_DOT: ".",
        CHAR_DOUBLE_QUOTE: '"',
        CHAR_EQUAL: "=",
        CHAR_EXCLAMATION_MARK: "!",
        CHAR_FORM_FEED: "\f",
        CHAR_FORWARD_SLASH: "/",
        CHAR_HASH: "#",
        CHAR_HYPHEN_MINUS: "-",
        CHAR_LEFT_ANGLE_BRACKET: "<",
        CHAR_LEFT_CURLY_BRACE: "{",
        CHAR_LEFT_SQUARE_BRACKET: "[",
        CHAR_LINE_FEED: "\n",
        CHAR_NO_BREAK_SPACE: " ",
        CHAR_PERCENT: "%",
        CHAR_PLUS: "+",
        CHAR_QUESTION_MARK: "?",
        CHAR_RIGHT_ANGLE_BRACKET: ">",
        CHAR_RIGHT_CURLY_BRACE: "}",
        CHAR_RIGHT_SQUARE_BRACKET: "]",
        CHAR_SEMICOLON: ";",
        CHAR_SINGLE_QUOTE: "'",
        CHAR_SPACE: " ",
        CHAR_TAB: "\t",
        CHAR_UNDERSCORE: "_",
        CHAR_VERTICAL_LINE: "|",
        CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\ufeff"
    }
}, function(e, t, r) {
    "use strict";
    e.exports = r(262)
}, function(e, t, r) {
    "use strict";
    const n = r(0),
        i = r(263),
        o = r(264),
        s = r(22),
        a = (e, t, r = !1) => {
            if (Array.isArray(e)) {
                let n = e.map((e => a(e, t, r)));
                return e => {
                    for (let t of n) {
                        let r = t(e);
                        if (r) return r
                    }
                    return !1
                }
            }
            if ("string" != typeof e || "" === e) throw new TypeError("Expected pattern to be a non-empty string");
            let n = t || {},
                i = s.isWindows(t),
                o = a.makeRe(e, t, !1, !0),
                u = o.state;
            delete o.state;
            let c = () => !1;
            if (n.ignore) {
                let e = {
                    ...t,
                    ignore: null,
                    onMatch: null,
                    onResult: null
                };
                c = a(n.ignore, e, r)
            }
            const p = (r, s = !1) => {
                let {
                    isMatch: p,
                    match: l,
                    output: d
                } = a.test(r, o, t, {
                    glob: e,
                    posix: i
                }), f = {
                    glob: e,
                    state: u,
                    regex: o,
                    posix: i,
                    input: r,
                    output: d,
                    match: l,
                    isMatch: p
                };
                return "function" == typeof n.onResult && n.onResult(f), !1 === p ? (f.isMatch = !1, !!s && f) : c(r) ? ("function" == typeof n.onIgnore && n.onIgnore(f), f.isMatch = !1, !!s && f) : ("function" == typeof n.onMatch && n.onMatch(f), !s || f)
            };
            return r && (p.state = u), p
        };
    a.test = (e, t, r, {
        glob: n,
        posix: i
    } = {}) => {
        if ("string" != typeof e) throw new TypeError("Expected input to be a string");
        if ("" === e) return {
            isMatch: !1,
            output: ""
        };
        let o = r || {},
            u = o.format || (i ? s.toPosixSlashes : null),
            c = e === n,
            p = c && u ? u(e) : e;
        return !1 === c && (p = u ? u(e) : e, c = p === n), !1 !== c && !0 !== o.capture || (c = !0 === o.matchBase || !0 === o.basename ? a.matchBase(e, t, r, i) : t.exec(p)), {
            isMatch: !!c,
            match: c,
            output: p
        }
    }, a.matchBase = (e, t, r, i = s.isWindows(r)) => (t instanceof RegExp ? t : a.makeRe(t, r)).test(n.basename(e)), a.isMatch = (e, t, r) => a(t, r)(e), a.parse = (e, t) => o(e, t), a.scan = (e, t) => i(e, t), a.makeRe = (e, t, r = !1, n = !1) => {
        if (!e || "string" != typeof e) throw new TypeError("Expected a non-empty string");
        let i, s = t || {},
            u = s.contains ? "" : "^",
            c = s.contains ? "" : "$",
            p = {
                negated: !1,
                fastpaths: !0
            },
            l = "";
        if (e.startsWith("./") && (e = e.slice(2), l = p.prefix = "./"), !1 === s.fastpaths || "." !== e[0] && "*" !== e[0] || (i = o.fastpaths(e, t)), void 0 === i && (p = a.parse(e, t), p.prefix = l + (p.prefix || ""), i = p.output), !0 === r) return i;
        let d = `${u}(?:${i})${c}`;
        p && !0 === p.negated && (d = `^(?!${d}).*$`);
        let f = a.toRegex(d, t);
        return !0 === n && (f.state = p), f
    }, a.toRegex = (e, t) => {
        try {
            let r = t || {};
            return new RegExp(e, r.flags || (r.nocase ? "i" : ""))
        } catch (e) {
            if (t && !0 === t.debug) throw e;
            return /$^/
        }
    }, a.constants = r(23), e.exports = a
}, function(e, t, r) {
    "use strict";
    const n = r(22),
        {
            CHAR_ASTERISK: i,
            CHAR_AT: o,
            CHAR_BACKWARD_SLASH: s,
            CHAR_COMMA: a,
            CHAR_DOT: u,
            CHAR_EXCLAMATION_MARK: c,
            CHAR_FORWARD_SLASH: p,
            CHAR_LEFT_CURLY_BRACE: l,
            CHAR_LEFT_PARENTHESES: d,
            CHAR_LEFT_SQUARE_BRACKET: f,
            CHAR_PLUS: h,
            CHAR_QUESTION_MARK: g,
            CHAR_RIGHT_CURLY_BRACE: m,
            CHAR_RIGHT_PARENTHESES: y,
            CHAR_RIGHT_SQUARE_BRACKET: b
        } = r(23);
    e.exports = (e, t) => {
        let r, _, v = t || {},
            w = e.length - 1,
            E = -1,
            q = 0,
            T = 0,
            S = !1,
            A = !1,
            R = !1,
            x = 0,
            O = !1,
            C = () => E >= w,
            k = () => (r = _, e.charCodeAt(++E));
        for (; E < w;) {
            let t;
            if (_ = k(), _ !== s) {
                if (!0 === O || _ === l)
                    for (x++; !C() && (t = k());)
                        if (t !== s)
                            if (t !== l) {
                                if (!O && t === u && (t = k()) === u) {
                                    S = !0;
                                    break
                                }
                                if (!O && t === a) {
                                    S = !0;
                                    break
                                }
                                if (t === m && (x--, 0 === x)) {
                                    O = !1;
                                    break
                                }
                            } else x++;
                else A = !0, t = k();
                if (_ !== p) {
                    if (_ === i) {
                        S = !0;
                        break
                    }
                    if (_ === i || _ === g) {
                        S = !0;
                        break
                    }
                    if (_ === f)
                        for (; !C() && (t = k());)
                            if (t !== s) {
                                if (t === b) {
                                    S = !0;
                                    break
                                }
                            } else A = !0, t = k();
                    if ((_ === h || _ === o || _ === c) && e.charCodeAt(E + 1) === d) {
                        S = !0;
                        break
                    }
                    if (_ !== c || E !== q) {
                        if (_ === d)
                            for (; !C() && (t = k());)
                                if (t !== s) {
                                    if (t === y) {
                                        S = !0;
                                        break
                                    }
                                } else A = !0, t = k();
                        if (S) break
                    } else R = !0, q++
                } else {
                    if (r === u && E === q + 1) {
                        q += 2;
                        continue
                    }
                    T = E + 1
                }
            } else A = !0, t = k(), t === l && (O = !0)
        }
        let j = "",
            P = e,
            L = e,
            $ = "";
        return q > 0 && (j = e.slice(0, q), e = e.slice(q), T -= q), L && !0 === S && T > 0 ? (L = e.slice(0, T), $ = e.slice(T)) : !0 === S ? (L = "", $ = e) : L = e, L && "" !== L && "/" !== L && L !== e && (e => e === p || e === s)(L.charCodeAt(L.length - 1)) && (L = L.slice(0, -1)), !0 === v.unescape && ($ && ($ = n.removeBackslashes($)), L && !0 === A && (L = n.removeBackslashes(L))), {
            prefix: j,
            input: P,
            base: L,
            glob: $,
            negated: R,
            isGlob: S
        }
    }
}, function(e, t, r) {
    "use strict";
    const n = r(22),
        i = r(23),
        {
            MAX_LENGTH: o,
            POSIX_REGEX_SOURCE: s,
            REGEX_NON_SPECIAL_CHAR: a,
            REGEX_SPECIAL_CHARS_BACKREF: u,
            REPLACEMENTS: c
        } = i,
        p = (e, t) => {
            if ("function" == typeof t.expandRange) return t.expandRange(...e, t);
            e.sort();
            let r = `[${e.join("-")}]`;
            try {
                new RegExp(r)
            } catch (t) {
                return e.map((e => n.escapeRegex(e))).join("..")
            }
            return r
        },
        l = e => {
            let t = 1;
            for (;
                "!" === e.peek() && ("(" !== e.peek(2) || "?" === e.peek(3));) e.advance(), e.start++, t++;
            return t % 2 != 0 && (e.negated = !0, e.start++, !0)
        },
        d = (e, t) => `Missing ${e}: "${t}" - use "\\\\${t}" to match literal characters`,
        f = (e, t) => {
            if ("string" != typeof e) throw new TypeError("Expected a string");
            e = c[e] || e;
            let r = {
                    ...t
                },
                f = "number" == typeof r.maxLength ? Math.min(o, r.maxLength) : o,
                h = e.length;
            if (h > f) throw new SyntaxError(`Input length: ${h}, exceeds maximum allowed length: ${f}`);
            let g = {
                    type: "bos",
                    value: "",
                    output: r.prepend || ""
                },
                m = [g],
                y = r.capture ? "" : "?:",
                b = n.isWindows(t);
            const _ = i.globChars(b),
                v = i.extglobChars(_),
                {
                    DOT_LITERAL: w,
                    PLUS_LITERAL: E,
                    SLASH_LITERAL: q,
                    ONE_CHAR: T,
                    DOTS_SLASH: S,
                    NO_DOT: A,
                    NO_DOT_SLASH: R,
                    NO_DOTS_SLASH: x,
                    QMARK: O,
                    QMARK_NO_DOT: C,
                    STAR: k,
                    START_ANCHOR: j
                } = _,
                P = e => `(${y}(?:(?!${j}${e.dot?S:w}).)*?)`;
            let L = r.dot ? "" : A,
                $ = !0 === r.bash ? P(r) : k,
                I = r.dot ? O : C;
            r.capture && ($ = `(${$})`), "boolean" == typeof r.noext && (r.noextglob = r.noext);
            let N, B = {
                    index: -1,
                    start: 0,
                    consumed: "",
                    output: "",
                    backtrack: !1,
                    brackets: 0,
                    braces: 0,
                    parens: 0,
                    quotes: 0,
                    tokens: m
                },
                D = [],
                G = [],
                M = g;
            const F = () => B.index === h - 1,
                H = B.peek = (t = 1) => e[B.index + t],
                U = B.advance = () => e[++B.index],
                z = e => {
                    B.output += null != e.output ? e.output : e.value, B.consumed += e.value || ""
                },
                W = e => {
                    B[e]++, G.push(e)
                },
                V = e => {
                    B[e]--, G.pop()
                },
                K = e => {
                    if ("globstar" === M.type) {
                        let t = B.braces > 0 && ("comma" === e.type || "brace" === e.type),
                            r = D.length && ("pipe" === e.type || "paren" === e.type);
                        "slash" === e.type || "paren" === e.type || t || r || (B.output = B.output.slice(0, -M.output.length), M.type = "star", M.value = "*", M.output = $, B.output += M.output)
                    }
                    D.length && "paren" !== e.type && !v[e.value] && (D[D.length - 1].inner += e.value), (e.value || e.output) && z(e), M && "text" === M.type && "text" === e.type ? M.value += e.value : (e.prev = M, m.push(e), M = e)
                },
                X = (e, t) => {
                    let n = {
                        ...v[t],
                        conditions: 1,
                        inner: ""
                    };
                    n.prev = M, n.parens = B.parens, n.output = B.output;
                    let i = (r.capture ? "(" : "") + n.open;
                    K({
                        type: e,
                        value: t,
                        output: B.output ? "" : T
                    }), K({
                        type: "paren",
                        extglob: !0,
                        value: U(),
                        output: i
                    }), W("parens"), D.push(n)
                },
                Y = t => {
                    let n = t.close + (r.capture ? ")" : "");
                    if ("negate" === t.type) {
                        let i = $;
                        t.inner && t.inner.length > 1 && t.inner.includes("/") && (i = P(r)), (i !== $ || F() || /^\)+$/.test(e.slice(B.index + 1))) && (n = t.close = ")$))" + i), "bos" === t.prev.type && F() && (B.negatedExtglob = !0)
                    }
                    K({
                        type: "paren",
                        extglob: !0,
                        value: N,
                        output: n
                    }), V("parens")
                };
            if (!1 !== r.fastpaths && !/(^[*!]|[/{[()\]}"])/.test(e)) {
                let t = !1,
                    n = e.replace(u, ((e, r, n, i, o, s) => "\\" === i ? (t = !0, e) : "?" === i ? r ? r + i + (o ? O.repeat(o.length) : "") : 0 === s ? I + (o ? O.repeat(o.length) : "") : O.repeat(n.length) : "." === i ? w.repeat(n.length) : "*" === i ? r ? r + i + (o ? $ : "") : $ : r ? e : "\\" + e));
                return !0 === t && (n = !0 === r.unescape ? n.replace(/\\/g, "") : n.replace(/\\+/g, (e => e.length % 2 == 0 ? "\\\\" : e ? "\\" : ""))), B.output = n, B
            }
            for (; !F();) {
                if (N = U(), "\0" === N) continue;
                if ("\\" === N) {
                    let t = H();
                    if ("/" === t && !0 !== r.bash) continue;
                    if ("." === t || ";" === t) continue;
                    if (!t) {
                        N += "\\", K({
                            type: "text",
                            value: N
                        });
                        continue
                    }
                    let n = /^\\+/.exec(e.slice(B.index + 1)),
                        i = 0;
                    if (n && n[0].length > 2 && (i = n[0].length, B.index += i, i % 2 != 0 && (N += "\\")), !0 === r.unescape ? N = U() || "" : N += U() || "", 0 === B.brackets) {
                        K({
                            type: "text",
                            value: N
                        });
                        continue
                    }
                }
                if (B.brackets > 0 && ("]" !== N || "[" === M.value || "[^" === M.value)) {
                    if (!1 !== r.posix && ":" === N) {
                        let e = M.value.slice(1);
                        if (e.includes("[") && (M.posix = !0, e.includes(":"))) {
                            let e = M.value.lastIndexOf("["),
                                t = M.value.slice(0, e),
                                r = M.value.slice(e + 2),
                                n = s[r];
                            if (n) {
                                M.value = t + n, B.backtrack = !0, U(), g.output || 1 !== m.indexOf(M) || (g.output = T);
                                continue
                            }
                        }
                    }("[" === N && ":" !== H() || "-" === N && "]" === H()) && (N = "\\" + N), "]" !== N || "[" !== M.value && "[^" !== M.value || (N = "\\" + N), !0 === r.posix && "!" === N && "[" === M.value && (N = "^"), M.value += N, z({
                        value: N
                    });
                    continue
                }
                if (1 === B.quotes && '"' !== N) {
                    N = n.escapeRegex(N), M.value += N, z({
                        value: N
                    });
                    continue
                }
                if ('"' === N) {
                    B.quotes = 1 === B.quotes ? 0 : 1, !0 === r.keepQuotes && K({
                        type: "text",
                        value: N
                    });
                    continue
                }
                if ("(" === N) {
                    K({
                        type: "paren",
                        value: N
                    }), W("parens");
                    continue
                }
                if (")" === N) {
                    if (0 === B.parens && !0 === r.strictBrackets) throw new SyntaxError(d("opening", "("));
                    let e = D[D.length - 1];
                    if (e && B.parens === e.parens + 1) {
                        Y(D.pop());
                        continue
                    }
                    K({
                        type: "paren",
                        value: N,
                        output: B.parens ? ")" : "\\)"
                    }), V("parens");
                    continue
                }
                if ("[" === N) {
                    if (!0 !== r.nobracket && e.slice(B.index + 1).includes("]")) W("brackets");
                    else {
                        if (!0 !== r.nobracket && !0 === r.strictBrackets) throw new SyntaxError(d("closing", "]"));
                        N = "\\" + N
                    }
                    K({
                        type: "bracket",
                        value: N
                    });
                    continue
                }
                if ("]" === N) {
                    if (!0 === r.nobracket || M && "bracket" === M.type && 1 === M.value.length) {
                        K({
                            type: "text",
                            value: N,
                            output: "\\" + N
                        });
                        continue
                    }
                    if (0 === B.brackets) {
                        if (!0 === r.strictBrackets) throw new SyntaxError(d("opening", "["));
                        K({
                            type: "text",
                            value: N,
                            output: "\\" + N
                        });
                        continue
                    }
                    V("brackets");
                    let e = M.value.slice(1);
                    if (!0 === M.posix || "^" !== e[0] || e.includes("/") || (N = "/" + N), M.value += N, z({
                            value: N
                        }), !1 === r.literalBrackets || n.hasRegexChars(e)) continue;
                    let t = n.escapeRegex(M.value);
                    if (B.output = B.output.slice(0, -M.value.length), !0 === r.literalBrackets) {
                        B.output += t, M.value = t;
                        continue
                    }
                    M.value = `(${y}${t}|${M.value})`, B.output += M.value;
                    continue
                }
                if ("{" === N && !0 !== r.nobrace) {
                    K({
                        type: "brace",
                        value: N,
                        output: "("
                    }), W("braces");
                    continue
                }
                if ("}" === N) {
                    if (!0 === r.nobrace || 0 === B.braces) {
                        K({
                            type: "text",
                            value: N,
                            output: "\\" + N
                        });
                        continue
                    }
                    let e = ")";
                    if (!0 === B.dots) {
                        let t = m.slice(),
                            n = [];
                        for (let e = t.length - 1; e >= 0 && (m.pop(), "brace" !== t[e].type); e--) "dots" !== t[e].type && n.unshift(t[e].value);
                        e = p(n, r), B.backtrack = !0
                    }
                    K({
                        type: "brace",
                        value: N,
                        output: e
                    }), V("braces");
                    continue
                }
                if ("|" === N) {
                    D.length > 0 && D[D.length - 1].conditions++, K({
                        type: "text",
                        value: N
                    });
                    continue
                }
                if ("," === N) {
                    let e = N;
                    B.braces > 0 && "braces" === G[G.length - 1] && (e = "|"), K({
                        type: "comma",
                        value: N,
                        output: e
                    });
                    continue
                }
                if ("/" === N) {
                    if ("dot" === M.type && 1 === B.index) {
                        B.start = B.index + 1, B.consumed = "", B.output = "", m.pop(), M = g;
                        continue
                    }
                    K({
                        type: "slash",
                        value: N,
                        output: q
                    });
                    continue
                }
                if ("." === N) {
                    if (B.braces > 0 && "dot" === M.type) {
                        "." === M.value && (M.output = w), M.type = "dots", M.output += N, M.value += N, B.dots = !0;
                        continue
                    }
                    K({
                        type: "dot",
                        value: N,
                        output: w
                    });
                    continue
                }
                if ("?" === N) {
                    if (M && "paren" === M.type) {
                        let e = H(),
                            t = N;
                        if ("<" === e && !n.supportsLookbehinds()) throw new Error("Node.js v10 or higher is required for regex lookbehinds");
                        ("(" === M.value && !/[!=<:]/.test(e) || "<" === e && !/[!=]/.test(H(2))) && (t = "\\" + N), K({
                            type: "text",
                            value: N,
                            output: t
                        });
                        continue
                    }
                    if (!0 !== r.noextglob && "(" === H() && "?" !== H(2)) {
                        X("qmark", N);
                        continue
                    }
                    if (!0 !== r.dot && ("slash" === M.type || "bos" === M.type)) {
                        K({
                            type: "qmark",
                            value: N,
                            output: C
                        });
                        continue
                    }
                    K({
                        type: "qmark",
                        value: N,
                        output: O
                    });
                    continue
                }
                if ("!" === N) {
                    if (!0 !== r.noextglob && "(" === H() && ("?" !== H(2) || !/[!=<:]/.test(H(3)))) {
                        X("negate", N);
                        continue
                    }
                    if (!0 !== r.nonegate && 0 === B.index) {
                        l(B);
                        continue
                    }
                }
                if ("+" === N) {
                    if (!0 !== r.noextglob && "(" === H() && "?" !== H(2)) {
                        X("plus", N);
                        continue
                    }
                    if (M && ("bracket" === M.type || "paren" === M.type || "brace" === M.type)) {
                        let e = !0 === M.extglob ? "\\" + N : N;
                        K({
                            type: "plus",
                            value: N,
                            output: e
                        });
                        continue
                    }
                    if (B.parens > 0 && !1 !== r.regex) {
                        K({
                            type: "plus",
                            value: N
                        });
                        continue
                    }
                    K({
                        type: "plus",
                        value: E
                    });
                    continue
                }
                if ("@" === N) {
                    if (!0 !== r.noextglob && "(" === H() && "?" !== H(2)) {
                        K({
                            type: "at",
                            value: N,
                            output: ""
                        });
                        continue
                    }
                    K({
                        type: "text",
                        value: N
                    });
                    continue
                }
                if ("*" !== N) {
                    "$" !== N && "^" !== N || (N = "\\" + N);
                    let t = a.exec(e.slice(B.index + 1));
                    t && (N += t[0], B.index += t[0].length), K({
                        type: "text",
                        value: N
                    });
                    continue
                }
                if (M && ("globstar" === M.type || !0 === M.star)) {
                    M.type = "star", M.star = !0, M.value += N, M.output = $, B.backtrack = !0, B.consumed += N;
                    continue
                }
                if (!0 !== r.noextglob && "(" === H() && "?" !== H(2)) {
                    X("star", N);
                    continue
                }
                if ("star" === M.type) {
                    if (!0 === r.noglobstar) {
                        B.consumed += N;
                        continue
                    }
                    let t = M.prev,
                        n = t.prev,
                        i = "slash" === t.type || "bos" === t.type,
                        o = n && ("star" === n.type || "globstar" === n.type);
                    if (!0 === r.bash && (!i || !F() && "/" !== H())) {
                        K({
                            type: "star",
                            value: N,
                            output: ""
                        });
                        continue
                    }
                    let s = B.braces > 0 && ("comma" === t.type || "brace" === t.type),
                        a = D.length && ("pipe" === t.type || "paren" === t.type);
                    if (!i && "paren" !== t.type && !s && !a) {
                        K({
                            type: "star",
                            value: N,
                            output: ""
                        });
                        continue
                    }
                    for (;
                        "/**" === e.slice(B.index + 1, B.index + 4);) {
                        let t = e[B.index + 4];
                        if (t && "/" !== t) break;
                        B.consumed += "/**", B.index += 3
                    }
                    if ("bos" === t.type && F()) {
                        M.type = "globstar", M.value += N, M.output = P(r), B.output = M.output, B.consumed += N;
                        continue
                    }
                    if ("slash" === t.type && "bos" !== t.prev.type && !o && F()) {
                        B.output = B.output.slice(0, -(t.output + M.output).length), t.output = "(?:" + t.output, M.type = "globstar", M.output = P(r) + "|$)", M.value += N, B.output += t.output + M.output, B.consumed += N;
                        continue
                    }
                    let u = H();
                    if ("slash" === t.type && "bos" !== t.prev.type && "/" === u) {
                        let e = void 0 !== H(2) ? "|$" : "";
                        B.output = B.output.slice(0, -(t.output + M.output).length), t.output = "(?:" + t.output, M.type = "globstar", M.output = `${P(r)}${q}|${q}${e})`, M.value += N, B.output += t.output + M.output, B.consumed += N + U(), K({
                            type: "slash",
                            value: N,
                            output: ""
                        });
                        continue
                    }
                    if ("bos" === t.type && "/" === u) {
                        M.type = "globstar", M.value += N, M.output = `(?:^|${q}|${P(r)}${q})`, B.output = M.output, B.consumed += N + U(), K({
                            type: "slash",
                            value: N,
                            output: ""
                        });
                        continue
                    }
                    B.output = B.output.slice(0, -M.output.length), M.type = "globstar", M.output = P(r), M.value += N, B.output += M.output, B.consumed += N;
                    continue
                }
                let t = {
                    type: "star",
                    value: N,
                    output: $
                };
                !0 !== r.bash ? !M || "bracket" !== M.type && "paren" !== M.type || !0 !== r.regex ? (B.index !== B.start && "slash" !== M.type && "dot" !== M.type || ("dot" === M.type ? (B.output += R, M.output += R) : !0 === r.dot ? (B.output += x, M.output += x) : (B.output += L, M.output += L), "*" !== H() && (B.output += T, M.output += T)), K(t)) : (t.output = N, K(t)) : (t.output = ".*?", "bos" !== M.type && "slash" !== M.type || (t.output = L + t.output), K(t))
            }
            for (; B.brackets > 0;) {
                if (!0 === r.strictBrackets) throw new SyntaxError(d("closing", "]"));
                B.output = n.escapeLast(B.output, "["), V("brackets")
            }
            for (; B.parens > 0;) {
                if (!0 === r.strictBrackets) throw new SyntaxError(d("closing", ")"));
                B.output = n.escapeLast(B.output, "("), V("parens")
            }
            for (; B.braces > 0;) {
                if (!0 === r.strictBrackets) throw new SyntaxError(d("closing", "}"));
                B.output = n.escapeLast(B.output, "{"), V("braces")
            }
            if (!0 === r.strictSlashes || "star" !== M.type && "bracket" !== M.type || K({
                    type: "maybe_slash",
                    value: "",
                    output: `${q}?`
                }), !0 === B.backtrack) {
                B.output = "";
                for (let e of B.tokens) B.output += null != e.output ? e.output : e.value, e.suffix && (B.output += e.suffix)
            }
            return B
        };
    f.fastpaths = (e, t) => {
        let r = {
                ...t
            },
            s = "number" == typeof r.maxLength ? Math.min(o, r.maxLength) : o,
            a = e.length;
        if (a > s) throw new SyntaxError(`Input length: ${a}, exceeds maximum allowed length: ${s}`);
        e = c[e] || e;
        let u = n.isWindows(t);
        const {
            DOT_LITERAL: p,
            SLASH_LITERAL: l,
            ONE_CHAR: d,
            DOTS_SLASH: f,
            NO_DOT: h,
            NO_DOTS: g,
            NO_DOTS_SLASH: m,
            STAR: y,
            START_ANCHOR: b
        } = i.globChars(u);
        let _ = r.capture ? "" : "?:",
            v = !0 === r.bash ? ".*?" : y,
            w = r.dot ? g : h,
            E = r.dot ? m : h;
        r.capture && (v = `(${v})`);
        const q = e => `(${_}(?:(?!${b}${e.dot?f:p}).)*?)`,
            T = e => {
                switch (e) {
                    case "*":
                        return `${w}${d}${v}`;
                    case ".*":
                        return `${p}${d}${v}`;
                    case "*.*":
                        return `${w}${v}${p}${d}${v}`;
                    case "*/*":
                        return `${w}${v}${l}${d}${E}${v}`;
                    case "**":
                        return w + q(r);
                    case "**/*":
                        return `(?:${w}${q(r)}${l})?${E}${d}${v}`;
                    case "**/*.*":
                        return `(?:${w}${q(r)}${l})?${E}${v}${p}${d}${v}`;
                    case "**/.*":
                        return `(?:${w}${q(r)}${l})?${p}${d}${v}`;
                    default: {
                        let r = /^(.*?)\.(\w+)$/.exec(e);
                        if (!r) return;
                        let n = T(r[1], t);
                        if (!n) return;
                        return n + p + r[2]
                    }
                }
            };
        let S = T(e);
        return S && !0 !== r.strictSlashes && (S += `${l}?`), S
    }, e.exports = f
}, function(e, t, r) {
    "use strict";
    e.exports = r(266)
}, function(e, t, r) {
    "use strict";
    const n = r(0),
        i = r(267),
        o = r(268),
        s = r(37),
        a = r(24),
        u = (e, t, r = !1) => {
            if (Array.isArray(e)) {
                const n = e.map((e => u(e, t, r)));
                return e => {
                    for (const t of n) {
                        const r = t(e);
                        if (r) return r
                    }
                    return !1
                }
            }
            const n = (i = e) && "object" == typeof i && !Array.isArray(i) && e.tokens && e.input;
            var i;
            if ("" === e || "string" != typeof e && !n) throw new TypeError("Expected pattern to be a non-empty string");
            const o = t || {},
                a = s.isWindows(t),
                c = n ? u.compileRe(e, t) : u.makeRe(e, t, !1, !0),
                p = c.state;
            delete c.state;
            let l = () => !1;
            if (o.ignore) {
                const e = {
                    ...t,
                    ignore: null,
                    onMatch: null,
                    onResult: null
                };
                l = u(o.ignore, e, r)
            }
            const d = (r, n = !1) => {
                const {
                    isMatch: i,
                    match: s,
                    output: d
                } = u.test(r, c, t, {
                    glob: e,
                    posix: a
                }), f = {
                    glob: e,
                    state: p,
                    regex: c,
                    posix: a,
                    input: r,
                    output: d,
                    match: s,
                    isMatch: i
                };
                return "function" == typeof o.onResult && o.onResult(f), !1 === i ? (f.isMatch = !1, !!n && f) : l(r) ? ("function" == typeof o.onIgnore && o.onIgnore(f), f.isMatch = !1, !!n && f) : ("function" == typeof o.onMatch && o.onMatch(f), !n || f)
            };
            return r && (d.state = p), d
        };
    u.test = (e, t, r, {
        glob: n,
        posix: i
    } = {}) => {
        if ("string" != typeof e) throw new TypeError("Expected input to be a string");
        if ("" === e) return {
            isMatch: !1,
            output: ""
        };
        const o = r || {},
            a = o.format || (i ? s.toPosixSlashes : null);
        let c = e === n,
            p = c && a ? a(e) : e;
        return !1 === c && (p = a ? a(e) : e, c = p === n), !1 !== c && !0 !== o.capture || (c = !0 === o.matchBase || !0 === o.basename ? u.matchBase(e, t, r, i) : t.exec(p)), {
            isMatch: Boolean(c),
            match: c,
            output: p
        }
    }, u.matchBase = (e, t, r, i = s.isWindows(r)) => (t instanceof RegExp ? t : u.makeRe(t, r)).test(n.basename(e)), u.isMatch = (e, t, r) => u(t, r)(e), u.parse = (e, t) => Array.isArray(e) ? e.map((e => u.parse(e, t))) : o(e, {
        ...t,
        fastpaths: !1
    }), u.scan = (e, t) => i(e, t), u.compileRe = (e, t, r = !1, n = !1) => {
        if (!0 === r) return e.output;
        const i = t || {},
            o = i.contains ? "" : "^",
            s = i.contains ? "" : "$";
        let a = `${o}(?:${e.output})${s}`;
        e && !0 === e.negated && (a = `^(?!${a}).*$`);
        const c = u.toRegex(a, t);
        return !0 === n && (c.state = e), c
    }, u.makeRe = (e, t, r = !1, n = !1) => {
        if (!e || "string" != typeof e) throw new TypeError("Expected a non-empty string");
        const i = t || {};
        let s, a = {
                negated: !1,
                fastpaths: !0
            },
            c = "";
        return e.startsWith("./") && (e = e.slice(2), c = a.prefix = "./"), !1 === i.fastpaths || "." !== e[0] && "*" !== e[0] || (s = o.fastpaths(e, t)), void 0 === s ? (a = o(e, t), a.prefix = c + (a.prefix || "")) : a.output = s, u.compileRe(a, t, r, n)
    }, u.toRegex = (e, t) => {
        try {
            const r = t || {};
            return new RegExp(e, r.flags || (r.nocase ? "i" : ""))
        } catch (e) {
            if (t && !0 === t.debug) throw e;
            return /$^/
        }
    }, u.constants = a, e.exports = u
}, function(e, t, r) {
    "use strict";
    const n = r(37),
        {
            CHAR_ASTERISK: i,
            CHAR_AT: o,
            CHAR_BACKWARD_SLASH: s,
            CHAR_COMMA: a,
            CHAR_DOT: u,
            CHAR_EXCLAMATION_MARK: c,
            CHAR_FORWARD_SLASH: p,
            CHAR_LEFT_CURLY_BRACE: l,
            CHAR_LEFT_PARENTHESES: d,
            CHAR_LEFT_SQUARE_BRACKET: f,
            CHAR_PLUS: h,
            CHAR_QUESTION_MARK: g,
            CHAR_RIGHT_CURLY_BRACE: m,
            CHAR_RIGHT_PARENTHESES: y,
            CHAR_RIGHT_SQUARE_BRACKET: b
        } = r(24),
        _ = e => e === p || e === s,
        v = e => {
            !0 !== e.isPrefix && (e.depth = e.isGlobstar ? 1 / 0 : 1)
        };
    e.exports = (e, t) => {
        const r = t || {},
            w = e.length - 1,
            E = !0 === r.parts || !0 === r.scanToEnd,
            q = [],
            T = [],
            S = [];
        let A, R, x = e,
            O = -1,
            C = 0,
            k = 0,
            j = !1,
            P = !1,
            L = !1,
            $ = !1,
            I = !1,
            N = !1,
            B = !1,
            D = !1,
            G = !1,
            M = 0,
            F = {
                value: "",
                depth: 0,
                isGlob: !1
            };
        const H = () => O >= w,
            U = () => (A = R, x.charCodeAt(++O));
        for (; O < w;) {
            let e;
            if (R = U(), R !== s) {
                if (!0 === N || R === l) {
                    for (M++; !0 !== H() && (R = U());)
                        if (R !== s)
                            if (R !== l) {
                                if (!0 !== N && R === u && (R = U()) === u) {
                                    if (j = F.isBrace = !0, L = F.isGlob = !0, G = !0, !0 === E) continue;
                                    break
                                }
                                if (!0 !== N && R === a) {
                                    if (j = F.isBrace = !0, L = F.isGlob = !0, G = !0, !0 === E) continue;
                                    break
                                }
                                if (R === m && (M--, 0 === M)) {
                                    N = !1, j = F.isBrace = !0, G = !0;
                                    break
                                }
                            } else M++;
                    else B = F.backslashes = !0, U();
                    if (!0 === E) continue;
                    break
                }
                if (R !== p) {
                    if (!0 !== r.noext) {
                        if (!0 === (R === h || R === o || R === i || R === g || R === c) && x.charCodeAt(O + 1) === d) {
                            if (L = F.isGlob = !0, $ = F.isExtglob = !0, G = !0, !0 === E) {
                                for (; !0 !== H() && (R = U());)
                                    if (R !== s) {
                                        if (R === y) {
                                            L = F.isGlob = !0, G = !0;
                                            break
                                        }
                                    } else B = F.backslashes = !0, R = U();
                                continue
                            }
                            break
                        }
                    }
                    if (R === i) {
                        if (A === i && (I = F.isGlobstar = !0), L = F.isGlob = !0, G = !0, !0 === E) continue;
                        break
                    }
                    if (R === g) {
                        if (L = F.isGlob = !0, G = !0, !0 === E) continue;
                        break
                    }
                    if (R === f)
                        for (; !0 !== H() && (e = U());)
                            if (e !== s) {
                                if (e === b) {
                                    if (P = F.isBracket = !0, L = F.isGlob = !0, G = !0, !0 === E) continue;
                                    break
                                }
                            } else B = F.backslashes = !0, U();
                    if (!0 === r.nonegate || R !== c || O !== C) {
                        if (!0 !== r.noparen && R === d) {
                            if (L = F.isGlob = !0, !0 === E) {
                                for (; !0 !== H() && (R = U());)
                                    if (R !== d) {
                                        if (R === y) {
                                            G = !0;
                                            break
                                        }
                                    } else B = F.backslashes = !0, R = U();
                                continue
                            }
                            break
                        }
                        if (!0 === L) {
                            if (G = !0, !0 === E) continue;
                            break
                        }
                    } else D = F.negated = !0, C++
                } else {
                    if (q.push(O), T.push(F), F = {
                            value: "",
                            depth: 0,
                            isGlob: !1
                        }, !0 === G) continue;
                    if (A === u && O === C + 1) {
                        C += 2;
                        continue
                    }
                    k = O + 1
                }
            } else B = F.backslashes = !0, R = U(), R === l && (N = !0)
        }!0 === r.noext && ($ = !1, L = !1);
        let z = x,
            W = "",
            V = "";
        C > 0 && (W = x.slice(0, C), x = x.slice(C), k -= C), z && !0 === L && k > 0 ? (z = x.slice(0, k), V = x.slice(k)) : !0 === L ? (z = "", V = x) : z = x, z && "" !== z && "/" !== z && z !== x && _(z.charCodeAt(z.length - 1)) && (z = z.slice(0, -1)), !0 === r.unescape && (V && (V = n.removeBackslashes(V)), z && !0 === B && (z = n.removeBackslashes(z)));
        const K = {
            prefix: W,
            input: e,
            start: C,
            base: z,
            glob: V,
            isBrace: j,
            isBracket: P,
            isGlob: L,
            isExtglob: $,
            isGlobstar: I,
            negated: D
        };
        if (!0 === r.tokens && (K.maxDepth = 0, _(R) || T.push(F), K.tokens = T), !0 === r.parts || !0 === r.tokens) {
            let t;
            for (let n = 0; n < q.length; n++) {
                const i = t ? t + 1 : C,
                    o = q[n],
                    s = e.slice(i, o);
                r.tokens && (0 === n && 0 !== C ? (T[n].isPrefix = !0, T[n].value = W) : T[n].value = s, v(T[n]), K.maxDepth += T[n].depth), 0 === n && "" === s || S.push(s), t = o
            }
            if (t && t + 1 < e.length) {
                const n = e.slice(t + 1);
                S.push(n), r.tokens && (T[T.length - 1].value = n, v(T[T.length - 1]), K.maxDepth += T[T.length - 1].depth)
            }
            K.slashes = q, K.parts = S
        }
        return K
    }
}, function(e, t, r) {
    "use strict";
    const n = r(24),
        i = r(37),
        {
            MAX_LENGTH: o,
            POSIX_REGEX_SOURCE: s,
            REGEX_NON_SPECIAL_CHARS: a,
            REGEX_SPECIAL_CHARS_BACKREF: u,
            REPLACEMENTS: c
        } = n,
        p = (e, t) => {
            if ("function" == typeof t.expandRange) return t.expandRange(...e, t);
            e.sort();
            const r = `[${e.join("-")}]`;
            try {
                new RegExp(r)
            } catch (t) {
                return e.map((e => i.escapeRegex(e))).join("..")
            }
            return r
        },
        l = (e, t) => `Missing ${e}: "${t}" - use "\\\\${t}" to match literal characters`,
        d = (e, t) => {
            if ("string" != typeof e) throw new TypeError("Expected a string");
            e = c[e] || e;
            const r = {
                    ...t
                },
                d = "number" == typeof r.maxLength ? Math.min(o, r.maxLength) : o;
            let f = e.length;
            if (f > d) throw new SyntaxError(`Input length: ${f}, exceeds maximum allowed length: ${d}`);
            const h = {
                    type: "bos",
                    value: "",
                    output: r.prepend || ""
                },
                g = [h],
                m = r.capture ? "" : "?:",
                y = i.isWindows(t),
                b = n.globChars(y),
                _ = n.extglobChars(b),
                {
                    DOT_LITERAL: v,
                    PLUS_LITERAL: w,
                    SLASH_LITERAL: E,
                    ONE_CHAR: q,
                    DOTS_SLASH: T,
                    NO_DOT: S,
                    NO_DOT_SLASH: A,
                    NO_DOTS_SLASH: R,
                    QMARK: x,
                    QMARK_NO_DOT: O,
                    STAR: C,
                    START_ANCHOR: k
                } = b,
                j = e => `(${m}(?:(?!${k}${e.dot?T:v}).)*?)`,
                P = r.dot ? "" : S,
                L = r.dot ? x : O;
            let $ = !0 === r.bash ? j(r) : C;
            r.capture && ($ = `(${$})`), "boolean" == typeof r.noext && (r.noextglob = r.noext);
            const I = {
                input: e,
                index: -1,
                start: 0,
                dot: !0 === r.dot,
                consumed: "",
                output: "",
                prefix: "",
                backtrack: !1,
                negated: !1,
                brackets: 0,
                braces: 0,
                parens: 0,
                quotes: 0,
                globstar: !1,
                tokens: g
            };
            e = i.removePrefix(e, I), f = e.length;
            const N = [],
                B = [],
                D = [];
            let G, M = h;
            const F = () => I.index === f - 1,
                H = I.peek = (t = 1) => e[I.index + t],
                U = I.advance = () => e[++I.index],
                z = () => e.slice(I.index + 1),
                W = (e = "", t = 0) => {
                    I.consumed += e, I.index += t
                },
                V = e => {
                    I.output += null != e.output ? e.output : e.value, W(e.value)
                },
                K = () => {
                    let e = 1;
                    for (;
                        "!" === H() && ("(" !== H(2) || "?" === H(3));) U(), I.start++, e++;
                    return e % 2 != 0 && (I.negated = !0, I.start++, !0)
                },
                X = e => {
                    I[e]++, D.push(e)
                },
                Y = e => {
                    I[e]--, D.pop()
                },
                Q = e => {
                    if ("globstar" === M.type) {
                        const t = I.braces > 0 && ("comma" === e.type || "brace" === e.type),
                            r = !0 === e.extglob || N.length && ("pipe" === e.type || "paren" === e.type);
                        "slash" === e.type || "paren" === e.type || t || r || (I.output = I.output.slice(0, -M.output.length), M.type = "star", M.value = "*", M.output = $, I.output += M.output)
                    }
                    if (N.length && "paren" !== e.type && !_[e.value] && (N[N.length - 1].inner += e.value), (e.value || e.output) && V(e), M && "text" === M.type && "text" === e.type) return M.value += e.value, void(M.output = (M.output || "") + e.value);
                    e.prev = M, g.push(e), M = e
                },
                J = (e, t) => {
                    const n = {
                        ..._[t],
                        conditions: 1,
                        inner: ""
                    };
                    n.prev = M, n.parens = I.parens, n.output = I.output;
                    const i = (r.capture ? "(" : "") + n.open;
                    X("parens"), Q({
                        type: e,
                        value: t,
                        output: I.output ? "" : q
                    }), Q({
                        type: "paren",
                        extglob: !0,
                        value: U(),
                        output: i
                    }), N.push(n)
                },
                Z = e => {
                    let t = e.close + (r.capture ? ")" : "");
                    if ("negate" === e.type) {
                        let n = $;
                        e.inner && e.inner.length > 1 && e.inner.includes("/") && (n = j(r)), (n !== $ || F() || /^\)+$/.test(z())) && (t = e.close = `)$))${n}`), "bos" === e.prev.type && F() && (I.negatedExtglob = !0)
                    }
                    Q({
                        type: "paren",
                        extglob: !0,
                        value: G,
                        output: t
                    }), Y("parens")
                };
            if (!1 !== r.fastpaths && !/(^[*!]|[/()[\]{}"])/.test(e)) {
                let n = !1,
                    o = e.replace(u, ((e, t, r, i, o, s) => "\\" === i ? (n = !0, e) : "?" === i ? t ? t + i + (o ? x.repeat(o.length) : "") : 0 === s ? L + (o ? x.repeat(o.length) : "") : x.repeat(r.length) : "." === i ? v.repeat(r.length) : "*" === i ? t ? t + i + (o ? $ : "") : $ : t ? e : `\\${e}`));
                return !0 === n && (o = !0 === r.unescape ? o.replace(/\\/g, "") : o.replace(/\\+/g, (e => e.length % 2 == 0 ? "\\\\" : e ? "\\" : ""))), o === e && !0 === r.contains ? (I.output = e, I) : (I.output = i.wrapOutput(o, I, t), I)
            }
            for (; !F();) {
                if (G = U(), "\0" === G) continue;
                if ("\\" === G) {
                    const e = H();
                    if ("/" === e && !0 !== r.bash) continue;
                    if ("." === e || ";" === e) continue;
                    if (!e) {
                        G += "\\", Q({
                            type: "text",
                            value: G
                        });
                        continue
                    }
                    const t = /^\\+/.exec(z());
                    let n = 0;
                    if (t && t[0].length > 2 && (n = t[0].length, I.index += n, n % 2 != 0 && (G += "\\")), !0 === r.unescape ? G = U() || "" : G += U() || "", 0 === I.brackets) {
                        Q({
                            type: "text",
                            value: G
                        });
                        continue
                    }
                }
                if (I.brackets > 0 && ("]" !== G || "[" === M.value || "[^" === M.value)) {
                    if (!1 !== r.posix && ":" === G) {
                        const e = M.value.slice(1);
                        if (e.includes("[") && (M.posix = !0, e.includes(":"))) {
                            const e = M.value.lastIndexOf("["),
                                t = M.value.slice(0, e),
                                r = M.value.slice(e + 2),
                                n = s[r];
                            if (n) {
                                M.value = t + n, I.backtrack = !0, U(), h.output || 1 !== g.indexOf(M) || (h.output = q);
                                continue
                            }
                        }
                    }("[" === G && ":" !== H() || "-" === G && "]" === H()) && (G = `\\${G}`), "]" !== G || "[" !== M.value && "[^" !== M.value || (G = `\\${G}`), !0 === r.posix && "!" === G && "[" === M.value && (G = "^"), M.value += G, V({
                        value: G
                    });
                    continue
                }
                if (1 === I.quotes && '"' !== G) {
                    G = i.escapeRegex(G), M.value += G, V({
                        value: G
                    });
                    continue
                }
                if ('"' === G) {
                    I.quotes = 1 === I.quotes ? 0 : 1, !0 === r.keepQuotes && Q({
                        type: "text",
                        value: G
                    });
                    continue
                }
                if ("(" === G) {
                    X("parens"), Q({
                        type: "paren",
                        value: G
                    });
                    continue
                }
                if (")" === G) {
                    if (0 === I.parens && !0 === r.strictBrackets) throw new SyntaxError(l("opening", "("));
                    const e = N[N.length - 1];
                    if (e && I.parens === e.parens + 1) {
                        Z(N.pop());
                        continue
                    }
                    Q({
                        type: "paren",
                        value: G,
                        output: I.parens ? ")" : "\\)"
                    }), Y("parens");
                    continue
                }
                if ("[" === G) {
                    if (!0 !== r.nobracket && z().includes("]")) X("brackets");
                    else {
                        if (!0 !== r.nobracket && !0 === r.strictBrackets) throw new SyntaxError(l("closing", "]"));
                        G = `\\${G}`
                    }
                    Q({
                        type: "bracket",
                        value: G
                    });
                    continue
                }
                if ("]" === G) {
                    if (!0 === r.nobracket || M && "bracket" === M.type && 1 === M.value.length) {
                        Q({
                            type: "text",
                            value: G,
                            output: `\\${G}`
                        });
                        continue
                    }
                    if (0 === I.brackets) {
                        if (!0 === r.strictBrackets) throw new SyntaxError(l("opening", "["));
                        Q({
                            type: "text",
                            value: G,
                            output: `\\${G}`
                        });
                        continue
                    }
                    Y("brackets");
                    const e = M.value.slice(1);
                    if (!0 === M.posix || "^" !== e[0] || e.includes("/") || (G = `/${G}`), M.value += G, V({
                            value: G
                        }), !1 === r.literalBrackets || i.hasRegexChars(e)) continue;
                    const t = i.escapeRegex(M.value);
                    if (I.output = I.output.slice(0, -M.value.length), !0 === r.literalBrackets) {
                        I.output += t, M.value = t;
                        continue
                    }
                    M.value = `(${m}${t}|${M.value})`, I.output += M.value;
                    continue
                }
                if ("{" === G && !0 !== r.nobrace) {
                    X("braces");
                    const e = {
                        type: "brace",
                        value: G,
                        output: "(",
                        outputIndex: I.output.length,
                        tokensIndex: I.tokens.length
                    };
                    B.push(e), Q(e);
                    continue
                }
                if ("}" === G) {
                    const e = B[B.length - 1];
                    if (!0 === r.nobrace || !e) {
                        Q({
                            type: "text",
                            value: G,
                            output: G
                        });
                        continue
                    }
                    let t = ")";
                    if (!0 === e.dots) {
                        const e = g.slice(),
                            n = [];
                        for (let t = e.length - 1; t >= 0 && (g.pop(), "brace" !== e[t].type); t--) "dots" !== e[t].type && n.unshift(e[t].value);
                        t = p(n, r), I.backtrack = !0
                    }
                    if (!0 !== e.comma && !0 !== e.dots) {
                        const r = I.output.slice(0, e.outputIndex),
                            n = I.tokens.slice(e.tokensIndex);
                        e.value = e.output = "\\{", G = t = "\\}", I.output = r;
                        for (const e of n) I.output += e.output || e.value
                    }
                    Q({
                        type: "brace",
                        value: G,
                        output: t
                    }), Y("braces"), B.pop();
                    continue
                }
                if ("|" === G) {
                    N.length > 0 && N[N.length - 1].conditions++, Q({
                        type: "text",
                        value: G
                    });
                    continue
                }
                if ("," === G) {
                    let e = G;
                    const t = B[B.length - 1];
                    t && "braces" === D[D.length - 1] && (t.comma = !0, e = "|"), Q({
                        type: "comma",
                        value: G,
                        output: e
                    });
                    continue
                }
                if ("/" === G) {
                    if ("dot" === M.type && I.index === I.start + 1) {
                        I.start = I.index + 1, I.consumed = "", I.output = "", g.pop(), M = h;
                        continue
                    }
                    Q({
                        type: "slash",
                        value: G,
                        output: E
                    });
                    continue
                }
                if ("." === G) {
                    if (I.braces > 0 && "dot" === M.type) {
                        "." === M.value && (M.output = v);
                        const e = B[B.length - 1];
                        M.type = "dots", M.output += G, M.value += G, e.dots = !0;
                        continue
                    }
                    if (I.braces + I.parens === 0 && "bos" !== M.type && "slash" !== M.type) {
                        Q({
                            type: "text",
                            value: G,
                            output: v
                        });
                        continue
                    }
                    Q({
                        type: "dot",
                        value: G,
                        output: v
                    });
                    continue
                }
                if ("?" === G) {
                    if (!(M && "(" === M.value) && !0 !== r.noextglob && "(" === H() && "?" !== H(2)) {
                        J("qmark", G);
                        continue
                    }
                    if (M && "paren" === M.type) {
                        const e = H();
                        let t = G;
                        if ("<" === e && !i.supportsLookbehinds()) throw new Error("Node.js v10 or higher is required for regex lookbehinds");
                        ("(" === M.value && !/[!=<:]/.test(e) || "<" === e && !/<([!=]|\w+>)/.test(z())) && (t = `\\${G}`), Q({
                            type: "text",
                            value: G,
                            output: t
                        });
                        continue
                    }
                    if (!0 !== r.dot && ("slash" === M.type || "bos" === M.type)) {
                        Q({
                            type: "qmark",
                            value: G,
                            output: O
                        });
                        continue
                    }
                    Q({
                        type: "qmark",
                        value: G,
                        output: x
                    });
                    continue
                }
                if ("!" === G) {
                    if (!0 !== r.noextglob && "(" === H() && ("?" !== H(2) || !/[!=<:]/.test(H(3)))) {
                        J("negate", G);
                        continue
                    }
                    if (!0 !== r.nonegate && 0 === I.index) {
                        K();
                        continue
                    }
                }
                if ("+" === G) {
                    if (!0 !== r.noextglob && "(" === H() && "?" !== H(2)) {
                        J("plus", G);
                        continue
                    }
                    if (M && "(" === M.value || !1 === r.regex) {
                        Q({
                            type: "plus",
                            value: G,
                            output: w
                        });
                        continue
                    }
                    if (M && ("bracket" === M.type || "paren" === M.type || "brace" === M.type) || I.parens > 0) {
                        Q({
                            type: "plus",
                            value: G
                        });
                        continue
                    }
                    Q({
                        type: "plus",
                        value: w
                    });
                    continue
                }
                if ("@" === G) {
                    if (!0 !== r.noextglob && "(" === H() && "?" !== H(2)) {
                        Q({
                            type: "at",
                            extglob: !0,
                            value: G,
                            output: ""
                        });
                        continue
                    }
                    Q({
                        type: "text",
                        value: G
                    });
                    continue
                }
                if ("*" !== G) {
                    "$" !== G && "^" !== G || (G = `\\${G}`);
                    const e = a.exec(z());
                    e && (G += e[0], I.index += e[0].length), Q({
                        type: "text",
                        value: G
                    });
                    continue
                }
                if (M && ("globstar" === M.type || !0 === M.star)) {
                    M.type = "star", M.star = !0, M.value += G, M.output = $, I.backtrack = !0, I.globstar = !0, W(G);
                    continue
                }
                let t = z();
                if (!0 !== r.noextglob && /^\([^?]/.test(t)) {
                    J("star", G);
                    continue
                }
                if ("star" === M.type) {
                    if (!0 === r.noglobstar) {
                        W(G);
                        continue
                    }
                    const n = M.prev,
                        i = n.prev,
                        o = "slash" === n.type || "bos" === n.type,
                        s = i && ("star" === i.type || "globstar" === i.type);
                    if (!0 === r.bash && (!o || t[0] && "/" !== t[0])) {
                        Q({
                            type: "star",
                            value: G,
                            output: ""
                        });
                        continue
                    }
                    const a = I.braces > 0 && ("comma" === n.type || "brace" === n.type),
                        u = N.length && ("pipe" === n.type || "paren" === n.type);
                    if (!o && "paren" !== n.type && !a && !u) {
                        Q({
                            type: "star",
                            value: G,
                            output: ""
                        });
                        continue
                    }
                    for (;
                        "/**" === t.slice(0, 3);) {
                        const r = e[I.index + 4];
                        if (r && "/" !== r) break;
                        t = t.slice(3), W("/**", 3)
                    }
                    if ("bos" === n.type && F()) {
                        M.type = "globstar", M.value += G, M.output = j(r), I.output = M.output, I.globstar = !0, W(G);
                        continue
                    }
                    if ("slash" === n.type && "bos" !== n.prev.type && !s && F()) {
                        I.output = I.output.slice(0, -(n.output + M.output).length), n.output = `(?:${n.output}`, M.type = "globstar", M.output = j(r) + (r.strictSlashes ? ")" : "|$)"), M.value += G, I.globstar = !0, I.output += n.output + M.output, W(G);
                        continue
                    }
                    if ("slash" === n.type && "bos" !== n.prev.type && "/" === t[0]) {
                        const e = void 0 !== t[1] ? "|$" : "";
                        I.output = I.output.slice(0, -(n.output + M.output).length), n.output = `(?:${n.output}`, M.type = "globstar", M.output = `${j(r)}${E}|${E}${e})`, M.value += G, I.output += n.output + M.output, I.globstar = !0, W(G + U()), Q({
                            type: "slash",
                            value: "/",
                            output: ""
                        });
                        continue
                    }
                    if ("bos" === n.type && "/" === t[0]) {
                        M.type = "globstar", M.value += G, M.output = `(?:^|${E}|${j(r)}${E})`, I.output = M.output, I.globstar = !0, W(G + U()), Q({
                            type: "slash",
                            value: "/",
                            output: ""
                        });
                        continue
                    }
                    I.output = I.output.slice(0, -M.output.length), M.type = "globstar", M.output = j(r), M.value += G, I.output += M.output, I.globstar = !0, W(G);
                    continue
                }
                const n = {
                    type: "star",
                    value: G,
                    output: $
                };
                !0 !== r.bash ? !M || "bracket" !== M.type && "paren" !== M.type || !0 !== r.regex ? (I.index !== I.start && "slash" !== M.type && "dot" !== M.type || ("dot" === M.type ? (I.output += A, M.output += A) : !0 === r.dot ? (I.output += R, M.output += R) : (I.output += P, M.output += P), "*" !== H() && (I.output += q, M.output += q)), Q(n)) : (n.output = G, Q(n)) : (n.output = ".*?", "bos" !== M.type && "slash" !== M.type || (n.output = P + n.output), Q(n))
            }
            for (; I.brackets > 0;) {
                if (!0 === r.strictBrackets) throw new SyntaxError(l("closing", "]"));
                I.output = i.escapeLast(I.output, "["), Y("brackets")
            }
            for (; I.parens > 0;) {
                if (!0 === r.strictBrackets) throw new SyntaxError(l("closing", ")"));
                I.output = i.escapeLast(I.output, "("), Y("parens")
            }
            for (; I.braces > 0;) {
                if (!0 === r.strictBrackets) throw new SyntaxError(l("closing", "}"));
                I.output = i.escapeLast(I.output, "{"), Y("braces")
            }
            if (!0 === r.strictSlashes || "star" !== M.type && "bracket" !== M.type || Q({
                    type: "maybe_slash",
                    value: "",
                    output: `${E}?`
                }), !0 === I.backtrack) {
                I.output = "";
                for (const e of I.tokens) I.output += null != e.output ? e.output : e.value, e.suffix && (I.output += e.suffix)
            }
            return I
        };
    d.fastpaths = (e, t) => {
        const r = {
                ...t
            },
            s = "number" == typeof r.maxLength ? Math.min(o, r.maxLength) : o,
            a = e.length;
        if (a > s) throw new SyntaxError(`Input length: ${a}, exceeds maximum allowed length: ${s}`);
        e = c[e] || e;
        const u = i.isWindows(t),
            {
                DOT_LITERAL: p,
                SLASH_LITERAL: l,
                ONE_CHAR: d,
                DOTS_SLASH: f,
                NO_DOT: h,
                NO_DOTS: g,
                NO_DOTS_SLASH: m,
                STAR: y,
                START_ANCHOR: b
            } = n.globChars(u),
            _ = r.dot ? g : h,
            v = r.dot ? m : h,
            w = r.capture ? "" : "?:";
        let E = !0 === r.bash ? ".*?" : y;
        r.capture && (E = `(${E})`);
        const q = e => !0 === e.noglobstar ? E : `(${w}(?:(?!${b}${e.dot?f:p}).)*?)`,
            T = e => {
                switch (e) {
                    case "*":
                        return `${_}${d}${E}`;
                    case ".*":
                        return `${p}${d}${E}`;
                    case "*.*":
                        return `${_}${E}${p}${d}${E}`;
                    case "*/*":
                        return `${_}${E}${l}${d}${v}${E}`;
                    case "**":
                        return _ + q(r);
                    case "**/*":
                        return `(?:${_}${q(r)}${l})?${v}${d}${E}`;
                    case "**/*.*":
                        return `(?:${_}${q(r)}${l})?${v}${E}${p}${d}${E}`;
                    case "**/.*":
                        return `(?:${_}${q(r)}${l})?${p}${d}${E}`;
                    default: {
                        const t = /^(.*?)\.(\w+)$/.exec(e);
                        if (!t) return;
                        const r = T(t[1]);
                        if (!r) return;
                        return r + p + t[2]
                    }
                }
            },
            S = i.removePrefix(e, {
                negated: !1,
                prefix: ""
            });
        let A = T(S);
        return A && !0 !== r.strictSlashes && (A += `${l}?`), A
    }, e.exports = d
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.merge = void 0;
    const n = r(77);

    function i(e) {
        e.forEach((e => e.emit("close")))
    }
    t.merge = function(e) {
        const t = n(e);
        return e.forEach((e => {
            e.once("error", (e => t.emit("error", e)))
        })), t.once("close", (() => i(e))), t.once("end", (() => i(e))), t
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isEmpty = t.isString = void 0, t.isString = function(e) {
        return "string" == typeof e
    }, t.isEmpty = function(e) {
        return "" === e
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(80),
        i = r(40);
    class o extends i.default {
        constructor() {
            super(...arguments), this._reader = new n.default(this._settings)
        }
        read(e) {
            const t = this._getRootDirectory(e),
                r = this._getReaderOptions(e),
                n = [];
            return new Promise(((i, o) => {
                const s = this.api(t, e, r);
                s.once("error", o), s.on("data", (e => n.push(r.transform(e)))), s.once("end", (() => i(n)))
            }))
        }
        api(e, t, r) {
            return t.dynamic ? this._reader.dynamic(e, r) : this._reader.static(t.patterns, r)
        }
    }
    t.default = o
}, function(e, t, r) {
    "use strict";

    function n(e, t) {
        e(t)
    }

    function i(e, t) {
        e(null, t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.read = function(e, t, r) {
        t.fs.lstat(e, ((o, s) => null !== o ? n(r, o) : s.isSymbolicLink() && t.followSymbolicLink ? void t.fs.stat(e, ((e, o) => {
            if (null !== e) return t.throwErrorOnBrokenSymbolicLink ? n(r, e) : i(r, s);
            t.markSymbolicLink && (o.isSymbolicLink = () => !0), i(r, o)
        })) : i(r, s)))
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.read = function(e, t) {
        const r = t.fs.lstatSync(e);
        if (!r.isSymbolicLink() || !t.followSymbolicLink) return r;
        try {
            const r = t.fs.statSync(e);
            return t.markSymbolicLink && (r.isSymbolicLink = () => !0), r
        } catch (e) {
            if (!t.throwErrorOnBrokenSymbolicLink) return r;
            throw e
        }
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(275);
    t.default = class {
        constructor(e = {}) {
            this._options = e, this.followSymbolicLink = this._getValue(this._options.followSymbolicLink, !0), this.fs = n.createFileSystemAdapter(this._options.fs), this.markSymbolicLink = this._getValue(this._options.markSymbolicLink, !1), this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, !0)
        }
        _getValue(e, t) {
            return void 0 === e ? t : e
        }
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(1);
    t.FILE_SYSTEM_ADAPTER = {
        lstat: n.lstat,
        stat: n.stat,
        lstatSync: n.lstatSync,
        statSync: n.statSync
    }, t.createFileSystemAdapter = function(e) {
        return void 0 === e ? t.FILE_SYSTEM_ADAPTER : Object.assign(Object.assign({}, t.FILE_SYSTEM_ADAPTER), e)
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(82);
    t.default = class {
        constructor(e, t) {
            this._root = e, this._settings = t, this._reader = new n.default(this._root, this._settings), this._storage = new Set
        }
        read(e) {
            this._reader.onError((t => {
                ! function(e, t) {
                    e(t)
                }(e, t)
            })), this._reader.onEntry((e => {
                this._storage.add(e)
            })), this._reader.onEnd((() => {
                ! function(e, t) {
                    e(null, t)
                }(e, [...this._storage])
            })), this._reader.read()
        }
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(14),
        i = r(278),
        o = r(83),
        s = r(84);

    function a(e, t, r) {
        t.fs.readdir(e, {
            withFileTypes: !0
        }, ((n, o) => {
            if (null !== n) return c(r, n);
            const a = o.map((r => ({
                dirent: r,
                name: r.name,
                path: `${e}${t.pathSegmentSeparator}${r.name}`
            })));
            if (!t.followSymbolicLinks) return p(r, a);
            const u = a.map((e => function(e, t) {
                return r => {
                    if (!e.dirent.isSymbolicLink()) return r(null, e);
                    t.fs.stat(e.path, ((n, i) => null !== n ? t.throwErrorOnBrokenSymbolicLink ? r(n) : r(null, e) : (e.dirent = s.fs.createDirentFromStats(e.name, i), r(null, e))))
                }
            }(e, t)));
            i(u, ((e, t) => {
                if (null !== e) return c(r, e);
                p(r, t)
            }))
        }))
    }

    function u(e, t, r) {
        t.fs.readdir(e, ((o, a) => {
            if (null !== o) return c(r, o);
            const u = a.map((r => `${e}${t.pathSegmentSeparator}${r}`)),
                l = u.map((e => r => n.stat(e, t.fsStatSettings, r)));
            i(l, ((e, n) => {
                if (null !== e) return c(r, e);
                const i = [];
                a.forEach(((e, r) => {
                    const o = n[r],
                        a = {
                            name: e,
                            path: u[r],
                            dirent: s.fs.createDirentFromStats(e, o)
                        };
                    t.stats && (a.stats = o), i.push(a)
                })), p(r, i)
            }))
        }))
    }

    function c(e, t) {
        e(t)
    }

    function p(e, t) {
        e(null, t)
    }
    t.read = function(e, t, r) {
        return !t.stats && o.IS_SUPPORT_READDIR_WITH_FILE_TYPES ? a(e, t, r) : u(e, t, r)
    }, t.readdirWithFileTypes = a, t.readdir = u
}, function(e, t) {
    e.exports = function(e, t) {
        var r, n, i, o = !0;
        Array.isArray(e) ? (r = [], n = e.length) : (i = Object.keys(e), r = {}, n = i.length);

        function s(e) {
            function n() {
                t && t(e, r), t = null
            }
            o ? process.nextTick(n) : n()
        }

        function a(e, t, i) {
            r[e] = i, (0 == --n || t) && s(t)
        }
        n ? i ? i.forEach((function(t) {
            e[t]((function(e, r) {
                a(t, e, r)
            }))
        })) : e.forEach((function(e, t) {
            e((function(e, r) {
                a(t, e, r)
            }))
        })) : s(null);
        o = !1
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    class n {
        constructor(e, t) {
            this.name = e, this.isBlockDevice = t.isBlockDevice.bind(t), this.isCharacterDevice = t.isCharacterDevice.bind(t), this.isDirectory = t.isDirectory.bind(t), this.isFIFO = t.isFIFO.bind(t), this.isFile = t.isFile.bind(t), this.isSocket = t.isSocket.bind(t), this.isSymbolicLink = t.isSymbolicLink.bind(t)
        }
    }
    t.createDirentFromStats = function(e, t) {
        return new n(e, t)
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(14),
        i = r(83),
        o = r(84);

    function s(e, t) {
        return t.fs.readdirSync(e, {
            withFileTypes: !0
        }).map((r => {
            const n = {
                dirent: r,
                name: r.name,
                path: `${e}${t.pathSegmentSeparator}${r.name}`
            };
            if (n.dirent.isSymbolicLink() && t.followSymbolicLinks) try {
                const e = t.fs.statSync(n.path);
                n.dirent = o.fs.createDirentFromStats(n.name, e)
            } catch (e) {
                if (t.throwErrorOnBrokenSymbolicLink) throw e
            }
            return n
        }))
    }

    function a(e, t) {
        return t.fs.readdirSync(e).map((r => {
            const i = `${e}${t.pathSegmentSeparator}${r}`,
                s = n.statSync(i, t.fsStatSettings),
                a = {
                    name: r,
                    path: i,
                    dirent: o.fs.createDirentFromStats(r, s)
                };
            return t.stats && (a.stats = s), a
        }))
    }
    t.read = function(e, t) {
        return !t.stats && i.IS_SUPPORT_READDIR_WITH_FILE_TYPES ? s(e, t) : a(e, t)
    }, t.readdirWithFileTypes = s, t.readdir = a
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(0),
        i = r(14),
        o = r(282);
    t.default = class {
        constructor(e = {}) {
            this._options = e, this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, !1), this.fs = o.createFileSystemAdapter(this._options.fs), this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, n.sep), this.stats = this._getValue(this._options.stats, !1), this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, !0), this.fsStatSettings = new i.Settings({
                followSymbolicLink: this.followSymbolicLinks,
                fs: this.fs,
                throwErrorOnBrokenSymbolicLink: this.throwErrorOnBrokenSymbolicLink
            })
        }
        _getValue(e, t) {
            return void 0 === e ? t : e
        }
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(1);
    t.FILE_SYSTEM_ADAPTER = {
        lstat: n.lstat,
        stat: n.stat,
        lstatSync: n.lstatSync,
        statSync: n.statSync,
        readdir: n.readdir,
        readdirSync: n.readdirSync
    }, t.createFileSystemAdapter = function(e) {
        return void 0 === e ? t.FILE_SYSTEM_ADAPTER : Object.assign(Object.assign({}, t.FILE_SYSTEM_ADAPTER), e)
    }
}, function(e, t, r) {
    "use strict";
    var n = r(284);

    function i() {}

    function o() {
        this.value = null, this.callback = i, this.next = null, this.release = i, this.context = null;
        var e = this;
        this.worked = function(t, r) {
            var n = e.callback;
            e.value = null, e.callback = i, n.call(e.context, t, r), e.release(e)
        }
    }
    e.exports = function(e, t, r) {
        "function" == typeof e && (r = t, t = e, e = null);
        var s = n(o),
            a = null,
            u = null,
            c = 0,
            p = {
                push: function(r, n) {
                    var o = s.get();
                    o.context = e, o.release = l, o.value = r, o.callback = n || i, c === p.concurrency || p.paused ? u ? (u.next = o, u = o) : (a = o, u = o, p.saturated()) : (c++, t.call(e, o.value, o.worked))
                },
                drain: i,
                saturated: i,
                pause: function() {
                    p.paused = !0
                },
                paused: !1,
                concurrency: r,
                running: function() {
                    return c
                },
                resume: function() {
                    if (!p.paused) return;
                    p.paused = !1;
                    for (var e = 0; e < p.concurrency; e++) c++, l()
                },
                idle: function() {
                    return 0 === c && 0 === p.length()
                },
                length: function() {
                    var e = a,
                        t = 0;
                    for (; e;) e = e.next, t++;
                    return t
                },
                unshift: function(r, n) {
                    var o = s.get();
                    o.context = e, o.release = l, o.value = r, o.callback = n || i, c === p.concurrency || p.paused ? a ? (o.next = a, a = o) : (a = o, u = o, p.saturated()) : (c++, t.call(e, o.value, o.worked))
                },
                empty: i,
                kill: function() {
                    a = null, u = null, p.drain = i
                },
                killAndDrain: function() {
                    a = null, u = null, p.drain(), p.drain = i
                }
            };
        return p;

        function l(r) {
            r && s.release(r);
            var n = a;
            n ? p.paused ? c-- : (u === a && (u = null), a = n.next, n.next = null, t.call(e, n.value, n.worked), null === u && p.empty()) : 0 == --c && p.drain()
        }
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        var t = new e,
            r = t;
        return {
            get: function() {
                var n = t;
                return n.next ? t = n.next : (t = new e, r = t), n.next = null, n
            },
            release: function(e) {
                r.next = e, r = e
            }
        }
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(3),
        i = r(82);
    t.default = class {
        constructor(e, t) {
            this._root = e, this._settings = t, this._reader = new i.default(this._root, this._settings), this._stream = new n.Readable({
                objectMode: !0,
                read: () => {},
                destroy: this._reader.destroy.bind(this._reader)
            })
        }
        read() {
            return this._reader.onError((e => {
                this._stream.emit("error", e)
            })), this._reader.onEntry((e => {
                this._stream.push(e)
            })), this._reader.onEnd((() => {
                this._stream.push(null)
            })), this._reader.read(), this._stream
        }
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(287);
    t.default = class {
        constructor(e, t) {
            this._root = e, this._settings = t, this._reader = new n.default(this._root, this._settings)
        }
        read() {
            return this._reader.read()
        }
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(38),
        i = r(39),
        o = r(85);
    class s extends o.default {
        constructor() {
            super(...arguments), this._scandir = n.scandirSync, this._storage = new Set, this._queue = new Set
        }
        read() {
            return this._pushToQueue(this._root, this._settings.basePath), this._handleQueue(), [...this._storage]
        }
        _pushToQueue(e, t) {
            this._queue.add({
                directory: e,
                base: t
            })
        }
        _handleQueue() {
            for (const e of this._queue.values()) this._handleDirectory(e.directory, e.base)
        }
        _handleDirectory(e, t) {
            try {
                const r = this._scandir(e, this._settings.fsScandirSettings);
                for (const e of r) this._handleEntry(e, t)
            } catch (e) {
                this._handleError(e)
            }
        }
        _handleError(e) {
            if (i.isFatalError(this._settings, e)) throw e
        }
        _handleEntry(e, t) {
            const r = e.path;
            void 0 !== t && (e.path = i.joinPathSegments(t, e.name, this._settings.pathSegmentSeparator)), i.isAppliedFilter(this._settings.entryFilter, e) && this._pushToStorage(e), e.dirent.isDirectory() && i.isAppliedFilter(this._settings.deepFilter, e) && this._pushToQueue(r, e.path)
        }
        _pushToStorage(e) {
            this._storage.add(e)
        }
    }
    t.default = s
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(0),
        i = r(38);
    t.default = class {
        constructor(e = {}) {
            this._options = e, this.basePath = this._getValue(this._options.basePath, void 0), this.concurrency = this._getValue(this._options.concurrency, 1 / 0), this.deepFilter = this._getValue(this._options.deepFilter, null), this.entryFilter = this._getValue(this._options.entryFilter, null), this.errorFilter = this._getValue(this._options.errorFilter, null), this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, n.sep), this.fsScandirSettings = new i.Settings({
                followSymbolicLinks: this._options.followSymbolicLinks,
                fs: this._options.fs,
                pathSegmentSeparator: this._options.pathSegmentSeparator,
                stats: this._options.stats,
                throwErrorOnBrokenSymbolicLink: this._options.throwErrorOnBrokenSymbolicLink
            })
        }
        _getValue(e, t) {
            return void 0 === e ? t : e
        }
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(7),
        i = r(290);
    t.default = class {
        constructor(e, t) {
            this._settings = e, this._micromatchOptions = t
        }
        getFilter(e, t, r) {
            const n = this._getMatcher(t),
                i = this._getNegativePatternsRe(r);
            return t => this._filter(e, t, n, i)
        }
        _getMatcher(e) {
            return new i.default(e, this._settings, this._micromatchOptions)
        }
        _getNegativePatternsRe(e) {
            const t = e.filter(n.pattern.isAffectDepthOfReadingPattern);
            return n.pattern.convertPatternsToRe(t, this._micromatchOptions)
        }
        _filter(e, t, r, i) {
            if (this._isSkippedByDeep(e, t.path)) return !1;
            if (this._isSkippedSymbolicLink(t)) return !1;
            const o = n.path.removeLeadingDotSegment(t.path);
            return !this._isSkippedByPositivePatterns(o, r) && this._isSkippedByNegativePatterns(o, i)
        }
        _isSkippedByDeep(e, t) {
            return this._settings.deep !== 1 / 0 && this._getEntryLevel(e, t) >= this._settings.deep
        }
        _getEntryLevel(e, t) {
            const r = t.split("/").length;
            if ("" === e) return r;
            return r - e.split("/").length
        }
        _isSkippedSymbolicLink(e) {
            return !this._settings.followSymbolicLinks && e.dirent.isSymbolicLink()
        }
        _isSkippedByPositivePatterns(e, t) {
            return !this._settings.baseNameMatch && !t.match(e)
        }
        _isSkippedByNegativePatterns(e, t) {
            return !n.pattern.matchAny(e, t)
        }
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(291);
    class i extends n.default {
        match(e) {
            const t = e.split("/"),
                r = t.length,
                n = this._storage.filter((e => !e.complete || e.segments.length > r));
            for (const e of n) {
                const n = e.sections[0];
                if (!e.complete && r > n.length) return !0;
                if (t.every(((t, r) => {
                        const n = e.segments[r];
                        return !(!n.dynamic || !n.patternRe.test(t)) || !n.dynamic && n.pattern === t
                    }))) return !0
            }
            return !1
        }
    }
    t.default = i
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(7);
    t.default = class {
        constructor(e, t, r) {
            this._patterns = e, this._settings = t, this._micromatchOptions = r, this._storage = [], this._fillStorage()
        }
        _fillStorage() {
            const e = n.pattern.expandPatternsWithBraceExpansion(this._patterns);
            for (const t of e) {
                const e = this._getPatternSegments(t),
                    r = this._splitSegmentsIntoSections(e);
                this._storage.push({
                    complete: r.length <= 1,
                    pattern: t,
                    segments: e,
                    sections: r
                })
            }
        }
        _getPatternSegments(e) {
            return n.pattern.getPatternParts(e, this._micromatchOptions).map((e => n.pattern.isDynamicPattern(e, this._settings) ? {
                dynamic: !0,
                pattern: e,
                patternRe: n.pattern.makeRe(e, this._micromatchOptions)
            } : {
                dynamic: !1,
                pattern: e
            }))
        }
        _splitSegmentsIntoSections(e) {
            return n.array.splitWhen(e, (e => e.dynamic && n.pattern.hasGlobStar(e.pattern)))
        }
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(7);
    t.default = class {
        constructor(e, t) {
            this._settings = e, this._micromatchOptions = t, this.index = new Map
        }
        getFilter(e, t) {
            const r = n.pattern.convertPatternsToRe(e, this._micromatchOptions),
                i = n.pattern.convertPatternsToRe(t, this._micromatchOptions);
            return e => this._filter(e, r, i)
        }
        _filter(e, t, r) {
            if (this._settings.unique && this._isDuplicateEntry(e)) return !1;
            if (this._onlyFileFilter(e) || this._onlyDirectoryFilter(e)) return !1;
            if (this._isSkippedByAbsoluteNegativePatterns(e.path, r)) return !1;
            const n = this._settings.baseNameMatch ? e.name : e.path,
                i = this._isMatchToPatterns(n, t) && !this._isMatchToPatterns(e.path, r);
            return this._settings.unique && i && this._createIndexRecord(e), i
        }
        _isDuplicateEntry(e) {
            return this.index.has(e.path)
        }
        _createIndexRecord(e) {
            this.index.set(e.path, void 0)
        }
        _onlyFileFilter(e) {
            return this._settings.onlyFiles && !e.dirent.isFile()
        }
        _onlyDirectoryFilter(e) {
            return this._settings.onlyDirectories && !e.dirent.isDirectory()
        }
        _isSkippedByAbsoluteNegativePatterns(e, t) {
            if (!this._settings.absolute) return !1;
            const r = n.path.makeAbsolute(this._settings.cwd, e);
            return n.pattern.matchAny(r, t)
        }
        _isMatchToPatterns(e, t) {
            const r = n.path.removeLeadingDotSegment(e);
            return n.pattern.matchAny(r, t)
        }
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(7);
    t.default = class {
        constructor(e) {
            this._settings = e
        }
        getFilter() {
            return e => this._isNonFatalError(e)
        }
        _isNonFatalError(e) {
            return n.errno.isEnoentCodeError(e) || this._settings.suppressErrors
        }
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(7);
    t.default = class {
        constructor(e) {
            this._settings = e
        }
        getTransformer() {
            return e => this._transform(e)
        }
        _transform(e) {
            let t = e.path;
            return this._settings.absolute && (t = n.path.makeAbsolute(this._settings.cwd, t), t = n.path.unixify(t)), this._settings.markDirectories && e.dirent.isDirectory() && (t += "/"), this._settings.objectMode ? Object.assign(Object.assign({}, e), {
                path: t
            }) : t
        }
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(3),
        i = r(80),
        o = r(40);
    class s extends o.default {
        constructor() {
            super(...arguments), this._reader = new i.default(this._settings)
        }
        read(e) {
            const t = this._getRootDirectory(e),
                r = this._getReaderOptions(e),
                i = this.api(t, e, r),
                o = new n.Readable({
                    objectMode: !0,
                    read: () => {}
                });
            return i.once("error", (e => o.emit("error", e))).on("data", (e => o.emit("data", r.transform(e)))).once("end", (() => o.emit("end"))), o.once("close", (() => i.destroy())), o
        }
        api(e, t, r) {
            return t.dynamic ? this._reader.dynamic(e, r) : this._reader.static(t.patterns, r)
        }
    }
    t.default = s
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(297),
        i = r(40);
    class o extends i.default {
        constructor() {
            super(...arguments), this._reader = new n.default(this._settings)
        }
        read(e) {
            const t = this._getRootDirectory(e),
                r = this._getReaderOptions(e);
            return this.api(t, e, r).map(r.transform)
        }
        api(e, t, r) {
            return t.dynamic ? this._reader.dynamic(e, r) : this._reader.static(t.patterns, r)
        }
    }
    t.default = o
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = r(14),
        i = r(81),
        o = r(86);
    class s extends o.default {
        constructor() {
            super(...arguments), this._walkSync = i.walkSync, this._statSync = n.statSync
        }
        dynamic(e, t) {
            return this._walkSync(e, t)
        }
        static(e, t) {
            const r = [];
            for (const n of e) {
                const e = this._getFullEntryPath(n),
                    i = this._getEntry(e, n, t);
                null !== i && t.entryFilter(i) && r.push(i)
            }
            return r
        }
        _getEntry(e, t, r) {
            try {
                const r = this._getStat(e);
                return this._makeEntry(r, t)
            } catch (e) {
                if (r.errorFilter(e)) return null;
                throw e
            }
        }
        _getStat(e) {
            return this._statSync(e, this._fsStatSettings)
        }
    }
    t.default = s
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DEFAULT_FILE_SYSTEM_ADAPTER = void 0;
    const n = r(1),
        i = r(4).cpus().length;
    t.DEFAULT_FILE_SYSTEM_ADAPTER = {
        lstat: n.lstat,
        lstatSync: n.lstatSync,
        stat: n.stat,
        statSync: n.statSync,
        readdir: n.readdir,
        readdirSync: n.readdirSync
    };
    t.default = class {
        constructor(e = {}) {
            this._options = e, this.absolute = this._getValue(this._options.absolute, !1), this.baseNameMatch = this._getValue(this._options.baseNameMatch, !1), this.braceExpansion = this._getValue(this._options.braceExpansion, !0), this.caseSensitiveMatch = this._getValue(this._options.caseSensitiveMatch, !0), this.concurrency = this._getValue(this._options.concurrency, i), this.cwd = this._getValue(this._options.cwd, process.cwd()), this.deep = this._getValue(this._options.deep, 1 / 0), this.dot = this._getValue(this._options.dot, !1), this.extglob = this._getValue(this._options.extglob, !0), this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, !0), this.fs = this._getFileSystemMethods(this._options.fs), this.globstar = this._getValue(this._options.globstar, !0), this.ignore = this._getValue(this._options.ignore, []), this.markDirectories = this._getValue(this._options.markDirectories, !1), this.objectMode = this._getValue(this._options.objectMode, !1), this.onlyDirectories = this._getValue(this._options.onlyDirectories, !1), this.onlyFiles = this._getValue(this._options.onlyFiles, !0), this.stats = this._getValue(this._options.stats, !1), this.suppressErrors = this._getValue(this._options.suppressErrors, !1), this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, !1), this.unique = this._getValue(this._options.unique, !0), this.onlyDirectories && (this.onlyFiles = !1), this.stats && (this.objectMode = !0)
        }
        _getValue(e, t) {
            return void 0 === e ? t : e
        }
        _getFileSystemMethods(e = {}) {
            return Object.assign(Object.assign({}, t.DEFAULT_FILE_SYSTEM_ADAPTER), e)
        }
    }
}, function(e, t, r) {
    "use strict";
    const n = r(0),
        i = r(300),
        o = e => e.length > 1 ? `{${e.join(",")}}` : e[0],
        s = (e, t) => {
            const r = "!" === e[0] ? e.slice(1) : e;
            return n.isAbsolute(r) ? r : n.join(t, r)
        },
        a = (e, t) => {
            if (t.files && !Array.isArray(t.files)) throw new TypeError(`Expected \`files\` to be of type \`Array\` but received type \`${typeof t.files}\``);
            if (t.extensions && !Array.isArray(t.extensions)) throw new TypeError(`Expected \`extensions\` to be of type \`Array\` but received type \`${typeof t.extensions}\``);
            return t.files && t.extensions ? t.files.map((r => {
                return n.posix.join(e, (i = r, s = t.extensions, n.extname(i) ? `**/${i}` : `**/${i}.${o(s)}`));
                var i, s
            })) : t.files ? t.files.map((t => n.posix.join(e, `**/${t}`))) : t.extensions ? [n.posix.join(e, `**/*.${o(t.extensions)}`)] : [n.posix.join(e, "**")]
        };
    e.exports = async (e, t) => {
        if ("string" != typeof(t = {
                cwd: process.cwd(),
                ...t
            }).cwd) throw new TypeError(`Expected \`cwd\` to be of type \`string\` but received type \`${typeof t.cwd}\``);
        const r = await Promise.all([].concat(e).map((async e => await i.isDirectory(s(e, t.cwd)) ? a(e, t) : e)));
        return [].concat.apply([], r)
    }, e.exports.sync = (e, t) => {
        if ("string" != typeof(t = {
                cwd: process.cwd(),
                ...t
            }).cwd) throw new TypeError(`Expected \`cwd\` to be of type \`string\` but received type \`${typeof t.cwd}\``);
        const r = [].concat(e).map((e => i.isDirectorySync(s(e, t.cwd)) ? a(e, t) : e));
        return [].concat.apply([], r)
    }
}, function(e, t, r) {
    "use strict";
    const {
        promisify: n
    } = r(5), i = r(1);
    async function o(e, t, r) {
        if ("string" != typeof r) throw new TypeError("Expected a string, got " + typeof r);
        try {
            return (await n(i[e])(r))[t]()
        } catch (e) {
            if ("ENOENT" === e.code) return !1;
            throw e
        }
    }

    function s(e, t, r) {
        if ("string" != typeof r) throw new TypeError("Expected a string, got " + typeof r);
        try {
            return i[e](r)[t]()
        } catch (e) {
            if ("ENOENT" === e.code) return !1;
            throw e
        }
    }
    t.isFile = o.bind(null, "stat", "isFile"), t.isDirectory = o.bind(null, "stat", "isDirectory"), t.isSymlink = o.bind(null, "lstat", "isSymbolicLink"), t.isFileSync = s.bind(null, "statSync", "isFile"), t.isDirectorySync = s.bind(null, "statSync", "isDirectory"), t.isSymlinkSync = s.bind(null, "lstatSync", "isSymbolicLink")
}, function(e, t, r) {
    "use strict";
    const {
        promisify: n
    } = r(5), i = r(1), o = r(0), s = r(78), a = r(302), u = r(303), c = ["**/node_modules/**", "**/flow-typed/**", "**/coverage/**", "**/.git"], p = n(i.readFile), l = (e, t) => {
        const r = u(o.relative(t.cwd, o.dirname(t.fileName)));
        return e.split(/\r?\n/).filter(Boolean).filter((e => !e.startsWith("#"))).map((e => t => t.startsWith("!") ? "!" + o.posix.join(e, t.slice(1)) : o.posix.join(e, t))(r))
    }, d = e => {
        const t = a();
        for (const r of e) t.add(l(r.content, {
            cwd: r.cwd,
            fileName: r.filePath
        }));
        return t
    }, f = (e, t) => r => e.ignores(u(o.relative(t, ((e, t) => {
        if (e = u(e), o.isAbsolute(t)) {
            if (u(t).startsWith(e)) return t;
            throw new Error(`Path ${t} is not in cwd ${e}`)
        }
        return o.join(e, t)
    })(t, r.path || r)))), h = ({
        ignore: e = [],
        cwd: t = u(process.cwd())
    } = {}) => ({
        ignore: e,
        cwd: t
    });
    e.exports = async e => {
        e = h(e);
        const t = await s("**/.gitignore", {
                ignore: c.concat(e.ignore),
                cwd: e.cwd
            }),
            r = await Promise.all(t.map((t => (async (e, t) => {
                const r = o.join(t, e);
                return {
                    cwd: t,
                    filePath: r,
                    content: await p(r, "utf8")
                }
            })(t, e.cwd)))),
            n = d(r);
        return f(n, e.cwd)
    }, e.exports.sync = e => {
        e = h(e);
        const t = s.sync("**/.gitignore", {
                ignore: c.concat(e.ignore),
                cwd: e.cwd
            }).map((t => ((e, t) => {
                const r = o.join(t, e);
                return {
                    cwd: t,
                    filePath: r,
                    content: i.readFileSync(r, "utf8")
                }
            })(t, e.cwd))),
            r = d(t);
        return f(r, e.cwd)
    }
}, function(e, t) {
    function r(e) {
        return Array.isArray(e) ? e : [e]
    }
    const n = /^\s+$/,
        i = /^\\!/,
        o = /^\\#/,
        s = /\r?\n/g,
        a = /^\.*\/|^\.+$/,
        u = "undefined" != typeof Symbol ? Symbol.for("node-ignore") : "node-ignore",
        c = /([0-z])-([0-z])/g,
        p = [
            [/\\?\s+$/, e => 0 === e.indexOf("\\") ? " " : ""],
            [/\\\s/g, () => " "],
            [/[\\$.|*+(){^]/g, e => `\\${e}`],
            [/(?!\\)\?/g, () => "[^/]"],
            [/^\//, () => "^"],
            [/\//g, () => "\\/"],
            [/^\^*\\\*\\\*\\\//, () => "^(?:.*\\/)?"],
            [/^(?=[^^])/, function() {
                return /\/(?!$)/.test(this) ? "^" : "(?:^|\\/)"
            }],
            [/\\\/\\\*\\\*(?=\\\/|$)/g, (e, t, r) => t + 6 < r.length ? "(?:\\/[^\\/]+)*" : "\\/.+"],
            [/(^|[^\\]+)\\\*(?=.+)/g, (e, t) => `${t}[^\\/]*`],
            [/\\\\\\(?=[$.|*+(){^])/g, () => "\\"],
            [/\\\\/g, () => "\\"],
            [/(\\)?\[([^\]/]*?)(\\*)($|\])/g, (e, t, r, n, i) => "\\" === t ? `\\[${r}${(e=>{const{length:t}=e;return e.slice(0,t-t%2)})(n)}${i}` : "]" === i && n.length % 2 == 0 ? `[${(e=>e.replace(c,((e,t,r)=>t.charCodeAt(0)<=r.charCodeAt(0)?e:"")))(r)}${n}]` : "[]"],
            [/(?:[^*])$/, e => /\/$/.test(e) ? `${e}$` : `${e}(?=$|\\/$)`],
            [/(\^|\\\/)?\\\*$/, (e, t) => `${t?`${t}[^/]+`:"[^/]*"}(?=$|\\/$)`]
        ],
        l = Object.create(null),
        d = e => "string" == typeof e;
    class f {
        constructor(e, t, r, n) {
            this.origin = e, this.pattern = t, this.negative = r, this.regex = n
        }
    }
    const h = (e, t) => {
            const r = e;
            let n = !1;
            0 === e.indexOf("!") && (n = !0, e = e.substr(1));
            const s = ((e, t, r) => {
                const n = l[e];
                if (n) return n;
                const i = p.reduce(((t, r) => t.replace(r[0], r[1].bind(e))), e);
                return l[e] = r ? new RegExp(i, "i") : new RegExp(i)
            })(e = e.replace(i, "!").replace(o, "#"), 0, t);
            return new f(r, e, n, s)
        },
        g = (e, t) => {
            throw new t(e)
        },
        m = (e, t, r) => {
            if (!d(e)) return r(`path must be a string, but got \`${t}\``, TypeError);
            if (!e) return r("path must not be empty", TypeError);
            if (m.isNotRelative(e)) {
                return r(`path should be a ${"`path.relative()`d"} string, but got "${t}"`, RangeError)
            }
            return !0
        },
        y = e => a.test(e);
    m.isNotRelative = y, m.convert = e => e;
    class b {
        constructor({
            ignorecase: e = !0
        } = {}) {
            var t, r, n;
            this._rules = [], this._ignorecase = e, t = this, r = u, n = !0, Object.defineProperty(t, r, {
                value: n
            }), this._initCache()
        }
        _initCache() {
            this._ignoreCache = Object.create(null), this._testCache = Object.create(null)
        }
        _addPattern(e) {
            if (e && e[u]) return this._rules = this._rules.concat(e._rules), void(this._added = !0);
            if ((e => e && d(e) && !n.test(e) && 0 !== e.indexOf("#"))(e)) {
                const t = h(e, this._ignorecase);
                this._added = !0, this._rules.push(t)
            }
        }
        add(e) {
            return this._added = !1, r(d(e) ? (e => e.split(s))(e) : e).forEach(this._addPattern, this), this._added && this._initCache(), this
        }
        addPattern(e) {
            return this.add(e)
        }
        _testOne(e, t) {
            let r = !1,
                n = !1;
            return this._rules.forEach((i => {
                const {
                    negative: o
                } = i;
                if (n === o && r !== n || o && !r && !n && !t) return;
                i.regex.test(e) && (r = !o, n = o)
            })), {
                ignored: r,
                unignored: n
            }
        }
        _test(e, t, r, n) {
            const i = e && m.convert(e);
            return m(i, e, g), this._t(i, t, r, n)
        }
        _t(e, t, r, n) {
            if (e in t) return t[e];
            if (n || (n = e.split("/")), n.pop(), !n.length) return t[e] = this._testOne(e, r);
            const i = this._t(n.join("/") + "/", t, r, n);
            return t[e] = i.ignored ? i : this._testOne(e, r)
        }
        ignores(e) {
            return this._test(e, this._ignoreCache, !1).ignored
        }
        createFilter() {
            return e => !this.ignores(e)
        }
        filter(e) {
            return r(e).filter(this.createFilter())
        }
        test(e) {
            return this._test(e, this._testCache, !0)
        }
    }
    const _ = e => new b(e),
        v = () => !1;
    if (_.isPathValid = e => m(e && m.convert(e), e, v), _.default = _, e.exports = _, "undefined" != typeof process && (process.env && process.env.IGNORE_TEST_WIN32 || "win32" === process.platform)) {
        const e = e => /^\\\\\?\\/.test(e) || /["<>|\u0000-\u001F]+/u.test(e) ? e : e.replace(/\\/g, "/");
        m.convert = e;
        const t = /^[a-z]:\//i;
        m.isNotRelative = e => t.test(e) || y(e)
    }
}, function(e, t, r) {
    "use strict";
    e.exports = e => {
        const t = /^\\\\\?\\/.test(e),
            r = /[^\u0000-\u0080]+/.test(e);
        return t || r ? e : e.replace(/\\/g, "/")
    }
}, function(e, t, r) {
    "use strict";
    const {
        Transform: n
    } = r(3);
    class i extends n {
        constructor() {
            super({
                objectMode: !0
            })
        }
    }
    e.exports = {
        FilterStream: class extends i {
            constructor(e) {
                super(), this._filter = e
            }
            _transform(e, t, r) {
                this._filter(e) && this.push(e), r()
            }
        },
        UniqueStream: class extends i {
            constructor() {
                super(), this._pushed = new Set
            }
            _transform(e, t, r) {
                this._pushed.has(e) || (this.push(e), this._pushed.add(e)), r()
            }
        }
    }
}, function(e, t, r) {
    const n = r(306),
        i = r(1),
        o = 8192;
    e.exports = function(e) {
        return new Promise(((t, r) => {
            const o = n.createHash("md5"),
                s = i.createReadStream(e);
            s.on("error", (e => {
                r(e)
            })), o.once("readable", (() => {
                t(o.read().toString("hex"))
            })), s.pipe(o)
        }))
    }, e.exports.sync = function(e) {
        const t = i.openSync(e, "r"),
            r = n.createHash("md5"),
            s = Buffer.alloc(o);
        try {
            let e;
            do {
                e = i.readSync(t, s, 0, o), r.update(s.slice(0, e))
            } while (e === o)
        } finally {
            i.closeSync(t)
        }
        return r.digest("hex")
    }
}, function(e, t) {
    e.exports = require("crypto")
}]);
