/*! Buefy v0.9.10 | MIT License | github.com/buefy/buefy */ ! function(e, t) {
	"object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).Buefy = {})
}(this, function(e) {
	"use strict";

	function t(e) {
		return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}

	function i(e, t, i) {
		return t in e ? Object.defineProperty(e, t, {
			value: i,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = i, e
	}

	function n(e, t) {
		var i = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter(function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			})), i.push.apply(i, n)
		}
		return i
	}

	function a(e) {
		for (var t = 1; t < arguments.length; t++) {
			var a = null != arguments[t] ? arguments[t] : {};
			t % 2 ? n(Object(a), !0).forEach(function(t) {
				i(e, t, a[t])
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : n(Object(a)).forEach(function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
			})
		}
		return e
	}

	function s(e) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) || r(e) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}()
	}

	function o(e) {
		return function(e) {
			if (Array.isArray(e)) {
				for (var t = 0, i = new Array(e.length); t < e.length; t++) i[t] = e[t];
				return i
			}
		}(e) || r(e) || function() {
			throw new TypeError("Invalid attempt to spread non-iterable instance")
		}()
	}

	function r(e) {
		if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
	}
	var l = Math.sign || function(e) {
		return e < 0 ? -1 : e > 0 ? 1 : 0
	};

	function c(e, t) {
		return (e & t) === t
	}

	function u(e, t) {
		return (e % t + t) % t
	}

	function d(e, t, i) {
		return Math.max(t, Math.min(i, e))
	}

	function h(e, t) {
		return t.split(".").reduce(function(e, t) {
			return e ? e[t] : null
		}, e)
	}

	function f(e, t, i) {
		if (!e) return -1;
		if (!i || "function" != typeof i) return e.indexOf(t);
		for (var n = 0; n < e.length; n++)
			if (i(e[n], t)) return n;
		return -1
	}
	var p = function(e) {
			return "object" === t(e) && !Array.isArray(e)
		},
		m = function e(t, n) {
			var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
			if (s || !Object.assign) {
				var o = Object.getOwnPropertyNames(n).map(function(a) {
					return i({}, a, function(e) {
						return p(n[e]) && null !== t && t.hasOwnProperty(e) && p(t[e])
					}(a) ? e(t[a], n[a], s) : n[a])
				}).reduce(function(e, t) {
					return a({}, e, {}, t)
				}, {});
				return a({}, t, {}, o)
			}
			return Object.assign(t, n)
		},
		v = {
			Android: function() {
				return "undefined" != typeof window && window.navigator.userAgent.match(/Android/i)
			},
			BlackBerry: function() {
				return "undefined" != typeof window && window.navigator.userAgent.match(/BlackBerry/i)
			},
			iOS: function() {
				return "undefined" != typeof window && (window.navigator.userAgent.match(/iPhone|iPad|iPod/i) || "MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1)
			},
			Opera: function() {
				return "undefined" != typeof window && window.navigator.userAgent.match(/Opera Mini/i)
			},
			Windows: function() {
				return "undefined" != typeof window && window.navigator.userAgent.match(/IEMobile/i)
			},
			any: function() {
				return v.Android() || v.BlackBerry() || v.iOS() || v.Opera() || v.Windows()
			}
		};

	function g(e) {
		void 0 !== e.remove ? e.remove() : void 0 !== e.parentNode && null !== e.parentNode && e.parentNode.removeChild(e)
	}

	function b(e) {
		var t = document.createElement("div");
		t.style.position = "absolute", t.style.left = "0px", t.style.top = "0px", t.style.width = "100%";
		var i = document.createElement("div");
		return t.appendChild(i), i.appendChild(e), document.body.appendChild(t), t
	}

	function y(e) {
		return e && e._isVue
	}

	function w(e) {
		return e ? e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") : e
	}

	function k(e, t) {
		var i;
		return JSON.parse(JSON.stringify(e)).sort((i = t, function(e, t) {
			return i.map(function(i) {
				var n = 1;
				"-" === i[0] && (n = -1, i = i.substring(1));
				var a = h(e, i),
					s = h(t, i);
				return a > s ? n : a < s ? -n : 0
			}).reduce(function(e, t) {
				return e || t
			}, 0)
		}))
	}

	function S(e) {
		return void 0 === e ? null : isNaN(e) ? e : e + "px"
	}

	function D() {
		for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "long", i = [], n = 0; n < 12; n++) i.push(new Date(2e3, n, 15));
		var a = new Intl.DateTimeFormat(e, {
			month: t,
			timeZone: "UTC"
		});
		return i.map(function(e) {
			return a.format(e)
		})
	}

	function C() {
		for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "narrow", i = [], n = 0; n < 7; n++) {
			var a = new Date(2e3, 0, n + 1);
			i[a.getDay()] = a
		}
		var s = new Intl.DateTimeFormat(e, {
			weekday: t
		});
		return i.map(function(e) {
			return s.format(e)
		})
	}

	function x(e, t) {
		var i = t.match(e);
		return e.toString().match(/<(.+?)>/g).map(function(e) {
			var t = e.match(/<(.+)>/);
			return !t || t.length <= 0 ? null : e.match(/<(.+)>/)[1]
		}).reduce(function(e, t, n, a) {
			return i && i.length > n ? e[t] = i[n + 1] : e[t] = null, e
		}, {})
	}

	function _() {
		return new Promise(function(e) {
			var t = new Image;
			t.onerror = function() {
				return e(!1)
			}, t.onload = function() {
				return e(1 === t.width)
			}, t.src = "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA="
		}).catch(function() {
			return !1
		})
	}

	function $(e) {
		return "shadowRoot" in e.$root.$options
	}
	var P, B = function(e) {
			return void 0 !== e
		},
		T = {
			defaultContainerElement: null,
			defaultIconPack: "mdi",
			defaultIconComponent: null,
			defaultIconPrev: "chevron-left",
			defaultIconNext: "chevron-right",
			defaultLocale: void 0,
			defaultDialogConfirmText: null,
			defaultDialogCancelText: null,
			defaultSnackbarDuration: 3500,
			defaultSnackbarPosition: null,
			defaultToastDuration: 2e3,
			defaultToastPosition: null,
			defaultNotificationDuration: 2e3,
			defaultNotificationPosition: null,
			defaultTooltipType: "is-primary",
			defaultTooltipDelay: null,
			defaultSidebarDelay: null,
			defaultInputAutocomplete: "on",
			defaultDateFormatter: null,
			defaultDateParser: null,
			defaultDateCreator: null,
			defaultTimeCreator: null,
			defaultDayNames: null,
			defaultMonthNames: null,
			defaultFirstDayOfWeek: null,
			defaultUnselectableDaysOfWeek: null,
			defaultTimeFormatter: null,
			defaultTimeParser: null,
			defaultModalCanCancel: ["escape", "x", "outside", "button"],
			defaultModalScroll: null,
			defaultDatepickerMobileNative: !0,
			defaultTimepickerMobileNative: !0,
			defaultNoticeQueue: !0,
			defaultInputHasCounter: !0,
			defaultTaginputHasCounter: !0,
			defaultUseHtml5Validation: !0,
			defaultDropdownMobileModal: !0,
			defaultFieldLabelPosition: null,
			defaultDatepickerYearsRange: [-100, 10],
			defaultDatepickerNearbyMonthDays: !0,
			defaultDatepickerNearbySelectableMonthDays: !1,
			defaultDatepickerShowWeekNumber: !1,
			defaultDatepickerWeekNumberClickable: !1,
			defaultDatepickerMobileModal: !0,
			defaultTrapFocus: !0,
			defaultAutoFocus: !0,
			defaultButtonRounded: !1,
			defaultSwitchRounded: !0,
			defaultCarouselInterval: 3500,
			defaultTabsExpanded: !1,
			defaultTabsAnimated: !0,
			defaultTabsType: null,
			defaultStatusIcon: !0,
			defaultProgrammaticPromise: !1,
			defaultLinkTags: ["a", "button", "input", "router-link", "nuxt-link", "n-link", "RouterLink", "NuxtLink", "NLink"],
			defaultImageWebpFallback: null,
			defaultImageLazy: !0,
			defaultImageResponsive: !0,
			defaultImageRatio: null,
			defaultImageSrcsetFormatter: null,
			customIconPacks: null
		},
		A = function(e) {
			T = e
		},
		F = function(e) {
			P = e
		},
		M = {
			props: {
				size: String,
				expanded: Boolean,
				loading: Boolean,
				rounded: Boolean,
				icon: String,
				iconPack: String,
				autocomplete: String,
				maxlength: [Number, String],
				useHtml5Validation: {
					type: Boolean,
					default: function() {
						return T.defaultUseHtml5Validation
					}
				},
				validationMessage: String,
				locale: {
					type: [String, Array],
					default: function() {
						return T.defaultLocale
					}
				},
				statusIcon: {
					type: Boolean,
					default: function() {
						return T.defaultStatusIcon
					}
				}
			},
			data: function() {
				return {
					isValid: !0,
					isFocused: !1,
					newIconPack: this.iconPack || T.defaultIconPack
				}
			},
			computed: {
				parentField: function() {
					for (var e = this.$parent, t = 0; t < 3; t++) e && !e.$data._isField && (e = e.$parent);
					return e
				},
				statusType: function() {
					var e = (this.parentField || {}).newType;
					if (e) {
						if ("string" == typeof e) return e;
						for (var t in e)
							if (e[t]) return t
					}
				},
				statusMessage: function() {
					if (this.parentField) return this.parentField.newMessage || this.parentField.$slots.message
				},
				iconSize: function() {
					switch (this.size) {
						case "is-small":
							return this.size;
						case "is-medium":
							return;
						case "is-large":
							return "mdi" === this.newIconPack ? "is-medium" : ""
					}
				}
			},
			methods: {
				focus: function() {
					var e = this.getElement();
					void 0 !== e && this.$nextTick(function() {
						e && e.focus()
					})
				},
				onBlur: function(e) {
					this.isFocused = !1, this.$emit("blur", e), this.checkHtml5Validity()
				},
				onFocus: function(e) {
					this.isFocused = !0, this.$emit("focus", e), this.checkHtml5Validity()
				},
				getElement: function() {
					for (var e = this.$refs[this.$data._elementRef]; y(e);) e = e.$refs[e.$data._elementRef];
					return e
				},
				setInvalid: function() {
					var e = this.validationMessage || this.getElement().validationMessage;
					this.setValidity("is-danger", e)
				},
				setValidity: function(e, t) {
					var i = this;
					this.$nextTick(function() {
						i.parentField && (i.parentField.type || (i.parentField.newType = e), i.parentField.message || (i.parentField.newMessage = t))
					})
				},
				checkHtml5Validity: function() {
					if (this.useHtml5Validation) {
						var e = this.getElement();
						if (void 0 !== e) return e.checkValidity() ? (this.setValidity(null, null), this.isValid = !0) : (this.setInvalid(), this.isValid = !1), this.isValid
					}
				}
			}
		},
		I = {
			sizes: {
				default: "mdi-24px",
				"is-small": null,
				"is-medium": "mdi-36px",
				"is-large": "mdi-48px"
			},
			iconPrefix: "mdi-"
		},
		N = function() {
			var e = T && T.defaultIconComponent ? "" : "fa-";
			return {
				sizes: {
					default: null,
					"is-small": null,
					"is-medium": e + "lg",
					"is-large": e + "2x"
				},
				iconPrefix: e,
				internalIcons: {
					information: "info-circle",
					alert: "exclamation-triangle",
					"alert-circle": "exclamation-circle",
					"chevron-right": "angle-right",
					"chevron-left": "angle-left",
					"chevron-down": "angle-down",
					"eye-off": "eye-slash",
					"menu-down": "caret-down",
					"menu-up": "caret-up",
					"close-circle": "times-circle"
				}
			}
		};
	var V = function(e, t, i, n, a, s, o, r, l, c) {
		"boolean" != typeof o && (l = r, r = o, o = !1);
		var u, d = "function" == typeof i ? i.options : i;
		if (e && e.render && (d.render = e.render, d.staticRenderFns = e.staticRenderFns, d._compiled = !0, a && (d.functional = !0)), n && (d._scopeId = n), s ? (u = function(e) {
				(e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), t && t.call(this, l(e)), e && e._registeredComponents && e._registeredComponents.add(s)
			}, d._ssrRegister = u) : t && (u = o ? function() {
				t.call(this, c(this.$root.$options.shadowRoot))
			} : function(e) {
				t.call(this, r(e))
			}), u)
			if (d.functional) {
				var h = d.render;
				d.render = function(e, t) {
					return u.call(t), h(e, t)
				}
			} else {
				var f = d.beforeCreate;
				d.beforeCreate = f ? [].concat(f, u) : [u]
			} return i
	};
	var O = V({
		render: function() {
			var e = this,
				t = e.$createElement,
				i = e._self._c || t;
			return i("span", {
				staticClass: "icon",
				class: [e.newType, e.size]
			}, [e.useIconComponent ? i(e.useIconComponent, {
				tag: "component",
				class: [e.customClass],
				attrs: {
					icon: [e.newPack, e.newIcon],
					size: e.newCustomSize
				}
			}) : i("i", {
				class: [e.newPack, e.newIcon, e.newCustomSize, e.customClass]
			})], 1)
		},
		staticRenderFns: []
	}, void 0, {
		name: "BIcon",
		props: {
			type: [String, Object],
			component: String,
			pack: String,
			icon: String,
			size: String,
			customSize: String,
			customClass: String,
			both: Boolean
		},
		computed: {
			iconConfig: function() {
				var e;
				return (e = {
					mdi: I,
					fa: N(),
					fas: N(),
					far: N(),
					fad: N(),
					fab: N(),
					fal: N()
				}, T && T.customIconPacks && (e = m(e, T.customIconPacks, !0)), e)[this.newPack]
			},
			iconPrefix: function() {
				return this.iconConfig && this.iconConfig.iconPrefix ? this.iconConfig.iconPrefix : ""
			},
			newIcon: function() {
				return "".concat(this.iconPrefix).concat(this.getEquivalentIconOf(this.icon))
			},
			newPack: function() {
				return this.pack || T.defaultIconPack
			},
			newType: function() {
				if (this.type) {
					var e = [];
					if ("string" == typeof this.type) e = this.type.split("-");
					else
						for (var t in this.type)
							if (this.type[t]) {
								e = t.split("-");
								break
							} if (!(e.length <= 1)) {
						var i = s(e).slice(1);
						return "has-text-".concat(i.join("-"))
					}
				}
			},
			newCustomSize: function() {
				return this.customSize || this.customSizeByPack
			},
			customSizeByPack: function() {
				if (this.iconConfig && this.iconConfig.sizes) {
					if (this.size && void 0 !== this.iconConfig.sizes[this.size]) return this.iconConfig.sizes[this.size];
					if (this.iconConfig.sizes.default) return this.iconConfig.sizes.default
				}
				return null
			},
			useIconComponent: function() {
				return this.component || T.defaultIconComponent
			}
		},
		methods: {
			getEquivalentIconOf: function(e) {
				return this.both && this.iconConfig && this.iconConfig.internalIcons && this.iconConfig.internalIcons[e] ? this.iconConfig.internalIcons[e] : e
			}
		}
	}, void 0, !1, void 0, void 0, void 0);
	var R = V({
		render: function() {
			var e = this,
				t = e.$createElement,
				i = e._self._c || t;
			return i("div", {
				staticClass: "control",
				class: e.rootClasses
			}, ["textarea" !== e.type ? i("input", e._b({
				ref: "input",
				staticClass: "input",
				class: [e.inputClasses, e.customClass],
				attrs: {
					type: e.newType,
					autocomplete: e.newAutocomplete,
					maxlength: e.maxlength
				},
				domProps: {
					value: e.computedValue
				},
				on: {
					input: e.onInput,
					change: e.onChange,
					blur: e.onBlur,
					focus: e.onFocus
				}
			}, "input", e.$attrs, !1)) : i("textarea", e._b({
				ref: "textarea",
				staticClass: "textarea",
				class: [e.inputClasses, e.customClass],
				attrs: {
					maxlength: e.maxlength
				},
				domProps: {
					value: e.computedValue
				},
				on: {
					input: e.onInput,
					change: e.onChange,
					blur: e.onBlur,
					focus: e.onFocus
				}
			}, "textarea", e.$attrs, !1)), e.icon ? i("b-icon", {
				staticClass: "is-left",
				class: {
					"is-clickable": e.iconClickable
				},
				attrs: {
					icon: e.icon,
					pack: e.iconPack,
					size: e.iconSize
				},
				nativeOn: {
					click: function(t) {
						return e.iconClick("icon-click", t)
					}
				}
			}) : e._e(), !e.loading && e.hasIconRight ? i("b-icon", {
				staticClass: "is-right",
				class: {
					"is-clickable": e.passwordReveal || e.iconRightClickable
				},
				attrs: {
					icon: e.rightIcon,
					pack: e.iconPack,
					size: e.iconSize,
					type: e.rightIconType,
					both: ""
				},
				nativeOn: {
					click: function(t) {
						return e.rightIconClick(t)
					}
				}
			}) : e._e(), e.maxlength && e.hasCounter && "number" !== e.type ? i("small", {
				staticClass: "help counter",
				class: {
					"is-invisible": !e.isFocused
				}
			}, [e._v(" " + e._s(e.valueLength) + " / " + e._s(e.maxlength) + " ")]) : e._e()], 1)
		},
		staticRenderFns: []
	}, void 0, {
		name: "BInput",
		components: i({}, O.name, O),
		mixins: [M],
		inheritAttrs: !1,
		props: {
			value: [Number, String],
			type: {
				type: String,
				default: "text"
			},
			lazy: {
				type: Boolean,
				default: !1
			},
			passwordReveal: Boolean,
			iconClickable: Boolean,
			hasCounter: {
				type: Boolean,
				default: function() {
					return T.defaultInputHasCounter
				}
			},
			customClass: {
				type: String,
				default: ""
			},
			iconRight: String,
			iconRightClickable: Boolean,
			iconRightType: String
		},
		data: function() {
			return {
				newValue: this.value,
				newType: this.type,
				newAutocomplete: this.autocomplete || T.defaultInputAutocomplete,
				isPasswordVisible: !1,
				_elementRef: "textarea" === this.type ? "textarea" : "input"
			}
		},
		computed: {
			computedValue: {
				get: function() {
					return this.newValue
				},
				set: function(e) {
					this.newValue = e, this.$emit("input", e)
				}
			},
			rootClasses: function() {
				return [this.iconPosition, this.size, {
					"is-expanded": this.expanded,
					"is-loading": this.loading,
					"is-clearfix": !this.hasMessage
				}]
			},
			inputClasses: function() {
				return [this.statusType, this.size, {
					"is-rounded": this.rounded
				}]
			},
			hasIconRight: function() {
				return this.passwordReveal || this.loading || this.statusIcon && this.statusTypeIcon || this.iconRight
			},
			rightIcon: function() {
				return this.passwordReveal ? this.passwordVisibleIcon : this.iconRight ? this.iconRight : this.statusTypeIcon
			},
			rightIconType: function() {
				return this.passwordReveal ? "is-primary" : this.iconRight ? this.iconRightType || null : this.statusType
			},
			iconPosition: function() {
				var e = "";
				return this.icon && (e += "has-icons-left "), this.hasIconRight && (e += "has-icons-right"), e
			},
			statusTypeIcon: function() {
				switch (this.statusType) {
					case "is-success":
						return "check";
					case "is-danger":
						return "alert-circle";
					case "is-info":
						return "information";
					case "is-warning":
						return "alert"
				}
			},
			hasMessage: function() {
				return !!this.statusMessage
			},
			passwordVisibleIcon: function() {
				return this.isPasswordVisible ? "eye-off" : "eye"
			},
			valueLength: function() {
				return "string" == typeof this.computedValue ? this.computedValue.length : "number" == typeof this.computedValue ? this.computedValue.toString().length : 0
			}
		},
		watch: {
			value: function(e) {
				this.newValue = e
			}
		},
		methods: {
			togglePasswordVisibility: function() {
				var e = this;
				this.isPasswordVisible = !this.isPasswordVisible, this.newType = this.isPasswordVisible ? "text" : "password", this.$nextTick(function() {
					e.focus()
				})
			},
			iconClick: function(e, t) {
				var i = this;
				this.$emit(e, t), this.$nextTick(function() {
					i.focus()
				})
			},
			rightIconClick: function(e) {
				this.passwordReveal ? this.togglePasswordVisibility() : this.iconRightClickable && this.iconClick("icon-right-click", e)
			},
			onInput: function(e) {
				if (!this.lazy) {
					var t = e.target.value;
					this.updateValue(t)
				}
			},
			onChange: function(e) {
				if (this.lazy) {
					var t = e.target.value;
					this.updateValue(t)
				}
			},
			updateValue: function(e) {
				this.computedValue = e, !this.isValid && this.checkHtml5Validity()
			}
		}
	}, void 0, !1, void 0, void 0, void 0);
	var E = V({
			render: function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "autocomplete control",
					class: {
						"is-expanded": e.expanded
					}
				}, [i("b-input", e._b({
					ref: "input",
					attrs: {
						type: e.type,
						size: e.size,
						loading: e.loading,
						rounded: e.rounded,
						icon: e.icon,
						"icon-right": e.newIconRight,
						"icon-right-clickable": e.newIconRightClickable,
						"icon-pack": e.iconPack,
						maxlength: e.maxlength,
						autocomplete: e.newAutocomplete,
						"use-html5-validation": !1,
						"aria-autocomplete": e.ariaAutocomplete
					},
					on: {
						input: e.onInput,
						focus: e.focused,
						blur: e.onBlur,
						"icon-right-click": e.rightIconClick,
						"icon-click": function(t) {
							return e.$emit("icon-click", t)
						}
					},
					nativeOn: {
						keydown: [function(t) {
							return e.keydown(t)
						}, function(t) {
							return !t.type.indexOf("key") && e._k(t.keyCode, "up", 38, t.key, ["Up", "ArrowUp"]) ? null : (t.preventDefault(), e.keyArrows("up"))
						}, function(t) {
							return !t.type.indexOf("key") && e._k(t.keyCode, "down", 40, t.key, ["Down", "ArrowDown"]) ? null : (t.preventDefault(), e.keyArrows("down"))
						}]
					},
					model: {
						value: e.newValue,
						callback: function(t) {
							e.newValue = t
						},
						expression: "newValue"
					}
				}, "b-input", e.$attrs, !1)), i("transition", {
					attrs: {
						name: "fade"
					}
				}, [i("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.isActive && (!e.isEmpty || e.hasEmptySlot || e.hasHeaderSlot),
						expression: "isActive && (!isEmpty || hasEmptySlot || hasHeaderSlot)"
					}],
					ref: "dropdown",
					staticClass: "dropdown-menu",
					class: {
						"is-opened-top": e.isOpenedTop && !e.appendToBody
					},
					style: e.style
				}, [i("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.isActive,
						expression: "isActive"
					}],
					staticClass: "dropdown-content",
					style: e.contentStyle
				}, [e.hasHeaderSlot ? i("div", {
					staticClass: "dropdown-item"
				}, [e._t("header")], 2) : e._e(), e._l(e.computedData, function(t, n) {
					return [t.group ? i("div", {
						key: n + "group",
						staticClass: "dropdown-item"
					}, [e.hasGroupSlot ? e._t("group", null, {
						group: t.group,
						index: n
					}) : i("span", {
						staticClass: "has-text-weight-bold"
					}, [e._v(" " + e._s(t.group) + " ")])], 2) : e._e(), e._l(t.items, function(t, a) {
						return i("a", {
							key: n + ":" + a,
							staticClass: "dropdown-item",
							class: {
								"is-hovered": t === e.hovered
							},
							attrs: {
								role: "button",
								tabindex: "0"
							},
							on: {
								click: function(i) {
									return e.setSelected(t, void 0, i)
								}
							}
						}, [e.hasDefaultSlot ? e._t("default", null, {
							option: t,
							index: a
						}) : i("span", [e._v(" " + e._s(e.getValue(t, !0)) + " ")])], 2)
					})]
				}), e.isEmpty && e.hasEmptySlot ? i("div", {
					staticClass: "dropdown-item is-disabled"
				}, [e._t("empty")], 2) : e._e(), e.hasFooterSlot ? i("div", {
					staticClass: "dropdown-item"
				}, [e._t("footer")], 2) : e._e()], 2)])])], 1)
			},
			staticRenderFns: []
		}, void 0, {
			name: "BAutocomplete",
			components: i({}, R.name, R),
			mixins: [M],
			inheritAttrs: !1,
			props: {
				value: [Number, String],
				data: {
					type: Array,
					default: function() {
						return []
					}
				},
				field: {
					type: String,
					default: "value"
				},
				keepFirst: Boolean,
				clearOnSelect: Boolean,
				openOnFocus: Boolean,
				customFormatter: Function,
				checkInfiniteScroll: Boolean,
				keepOpen: Boolean,
				selectOnClickOutside: Boolean,
				clearable: Boolean,
				maxHeight: [String, Number],
				dropdownPosition: {
					type: String,
					default: "auto"
				},
				groupField: String,
				groupOptions: String,
				iconRight: String,
				iconRightClickable: Boolean,
				appendToBody: Boolean,
				type: {
					type: String,
					default: "text"
				},
				confirmKeys: {
					type: Array,
					default: function() {
						return ["Tab", "Enter"]
					}
				}
			},
			data: function() {
				return {
					selected: null,
					hovered: null,
					isActive: !1,
					newValue: this.value,
					newAutocomplete: this.autocomplete || "off",
					ariaAutocomplete: this.keepFirst ? "both" : "list",
					isListInViewportVertically: !0,
					hasFocus: !1,
					style: {},
					_isAutocomplete: !0,
					_elementRef: "input",
					_bodyEl: void 0
				}
			},
			computed: {
				computedData: function() {
					var e = this;
					if (this.groupField) {
						if (this.groupOptions) {
							var t = [];
							return this.data.forEach(function(i) {
								var n = h(i, e.groupField),
									a = h(i, e.groupOptions);
								t.push({
									group: n,
									items: a
								})
							}), t
						}
						var i = {};
						this.data.forEach(function(t) {
							var n = h(t, e.groupField);
							i[n] || (i[n] = []), i[n].push(t)
						});
						var n = [];
						return Object.keys(i).forEach(function(e) {
							n.push({
								group: e,
								items: i[e]
							})
						}), n
					}
					return [{
						items: this.data
					}]
				},
				isEmpty: function() {
					return !this.computedData || !this.computedData.some(function(e) {
						return e.items && e.items.length
					})
				},
				whiteList: function() {
					var e = [];
					if (e.push(this.$refs.input.$el.querySelector("input")), e.push(this.$refs.dropdown), void 0 !== this.$refs.dropdown) {
						var t = this.$refs.dropdown.querySelectorAll("*"),
							i = !0,
							n = !1,
							a = void 0;
						try {
							for (var s, o = t[Symbol.iterator](); !(i = (s = o.next()).done); i = !0) {
								var r = s.value;
								e.push(r)
							}
						} catch (e) {
							n = !0, a = e
						} finally {
							try {
								i || null == o.return || o.return()
							} finally {
								if (n) throw a
							}
						}
					}
					if (this.$parent.$data._isTaginput) {
						e.push(this.$parent.$el);
						var l = this.$parent.$el.querySelectorAll("*"),
							c = !0,
							u = !1,
							d = void 0;
						try {
							for (var h, f = l[Symbol.iterator](); !(c = (h = f.next()).done); c = !0) {
								var p = h.value;
								e.push(p)
							}
						} catch (e) {
							u = !0, d = e
						} finally {
							try {
								c || null == f.return || f.return()
							} finally {
								if (u) throw d
							}
						}
					}
					return e
				},
				hasDefaultSlot: function() {
					return !!this.$scopedSlots.default
				},
				hasGroupSlot: function() {
					return !!this.$scopedSlots.group
				},
				hasEmptySlot: function() {
					return !!this.$slots.empty
				},
				hasHeaderSlot: function() {
					return !!this.$slots.header
				},
				hasFooterSlot: function() {
					return !!this.$slots.footer
				},
				isOpenedTop: function() {
					return "top" === this.dropdownPosition || "auto" === this.dropdownPosition && !this.isListInViewportVertically
				},
				newIconRight: function() {
					return this.clearable && this.newValue ? "close-circle" : this.iconRight
				},
				newIconRightClickable: function() {
					return !!this.clearable || this.iconRightClickable
				},
				contentStyle: function() {
					return {
						maxHeight: S(this.maxHeight)
					}
				}
			},
			watch: {
				isActive: function(e) {
					var t = this;
					"auto" === this.dropdownPosition && (e ? this.calcDropdownInViewportVertical() : setTimeout(function() {
						t.calcDropdownInViewportVertical()
					}, 100))
				},
				newValue: function(e) {
					this.$emit("input", e);
					var t = this.getValue(this.selected);
					t && t !== e && this.setSelected(null, !1), !this.hasFocus || this.openOnFocus && !e || (this.isActive = !!e)
				},
				value: function(e) {
					this.newValue = e
				},
				data: function() {
					var e = this;
					this.keepFirst && this.$nextTick(function() {
						e.isActive ? e.selectFirstOption(e.computedData) : e.setHovered(null)
					})
				}
			},
			methods: {
				setHovered: function(e) {
					void 0 !== e && (this.hovered = e)
				},
				setSelected: function(e) {
					var t = this,
						i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
					if (void 0 !== e) {
						if (this.selected = e, this.$emit("select", this.selected, n), null !== this.selected) {
							if (this.clearOnSelect) this.$refs.input.$refs.input.value = "";
							else this.newValue = this.getValue(this.selected);
							this.setHovered(null)
						}
						i && this.$nextTick(function() {
							t.isActive = !1
						}), this.checkValidity()
					}
				},
				selectFirstOption: function(e) {
					var t = this;
					this.$nextTick(function() {
						var i = e.filter(function(e) {
							return e.items && e.items.length
						});
						if (i.length) {
							var n = i[0].items[0];
							t.setHovered(n)
						} else t.setHovered(null)
					})
				},
				keydown: function(e) {
					var t = e.key;
					if ("Enter" === t && e.preventDefault(), "Escape" !== t && "Tab" !== t || (this.isActive = !1), null !== this.hovered && this.confirmKeys.indexOf(t) >= 0) {
						"," === t && e.preventDefault();
						var i = !this.keepOpen || "Tab" === t;
						this.setSelected(this.hovered, i, e)
					}
				},
				clickedOutside: function(e) {
					var t = $(this) ? e.composedPath()[0] : e.target;
					!this.hasFocus && this.whiteList.indexOf(t) < 0 && (this.keepFirst && this.hovered && this.selectOnClickOutside ? this.setSelected(this.hovered, !0) : this.isActive = !1)
				},
				getValue: function(e) {
					if (null !== e) return void 0 !== this.customFormatter ? this.customFormatter(e) : "object" === t(e) ? h(e, this.field) : e
				},
				checkIfReachedTheEndOfScroll: function(e) {
					e.clientHeight !== e.scrollHeight && e.scrollTop + e.clientHeight >= e.scrollHeight && this.$emit("infinite-scroll")
				},
				calcDropdownInViewportVertical: function() {
					var e = this;
					this.$nextTick(function() {
						if (void 0 !== e.$refs.dropdown) {
							var t = e.$refs.dropdown.getBoundingClientRect();
							e.isListInViewportVertically = t.top >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight), e.appendToBody && e.updateAppendToBody()
						}
					})
				},
				keyArrows: function(e) {
					var t = "down" === e ? 1 : -1;
					if (this.isActive) {
						var i = this.computedData.map(function(e) {
								return e.items
							}).reduce(function(e, t) {
								return [].concat(o(e), o(t))
							}, []),
							n = i.indexOf(this.hovered) + t;
						n = (n = n > i.length - 1 ? i.length - 1 : n) < 0 ? 0 : n, this.setHovered(i[n]);
						var a = this.$refs.dropdown.querySelector(".dropdown-content"),
							s = a.querySelectorAll("a.dropdown-item:not(.is-disabled)")[n];
						if (!s) return;
						var r = a.scrollTop,
							l = a.scrollTop + a.clientHeight - s.clientHeight;
						s.offsetTop < r ? a.scrollTop = s.offsetTop : s.offsetTop >= l && (a.scrollTop = s.offsetTop - a.clientHeight + s.clientHeight)
					} else this.isActive = !0
				},
				focused: function(e) {
					this.getValue(this.selected) === this.newValue && this.$el.querySelector("input").select(), this.openOnFocus && (this.isActive = !0, this.keepFirst && this.selectFirstOption(this.computedData)), this.hasFocus = !0, this.$emit("focus", e)
				},
				onBlur: function(e) {
					this.hasFocus = !1, this.$emit("blur", e)
				},
				onInput: function() {
					var e = this.getValue(this.selected);
					e && e === this.newValue || (this.$emit("typing", this.newValue), this.checkValidity())
				},
				rightIconClick: function(e) {
					this.clearable ? (this.newValue = "", this.setSelected(null, !1), this.openOnFocus && this.$refs.input.$el.focus()) : this.$emit("icon-right-click", e)
				},
				checkValidity: function() {
					var e = this;
					this.useHtml5Validation && this.$nextTick(function() {
						e.checkHtml5Validity()
					})
				},
				updateAppendToBody: function() {
					var e = this.$refs.dropdown,
						t = this.$refs.input.$el;
					if (e && t) {
						var i = this.$data._bodyEl;
						i.classList.forEach(function(e) {
							return i.classList.remove(e)
						}), i.classList.add("autocomplete"), i.classList.add("control"), this.expandend && i.classList.add("is-expandend");
						var n = t.getBoundingClientRect(),
							a = n.top + window.scrollY,
							s = n.left + window.scrollX;
						this.isOpenedTop ? a -= e.clientHeight : a += t.clientHeight, this.style = {
							position: "absolute",
							top: "".concat(a, "px"),
							left: "".concat(s, "px"),
							width: "".concat(t.clientWidth, "px"),
							maxWidth: "".concat(t.clientWidth, "px"),
							zIndex: "99"
						}
					}
				}
			},
			created: function() {
				"undefined" != typeof window && (document.addEventListener("click", this.clickedOutside), "auto" === this.dropdownPosition && window.addEventListener("resize", this.calcDropdownInViewportVertical))
			},
			mounted: function() {
				var e = this;
				if (this.checkInfiniteScroll && this.$refs.dropdown && this.$refs.dropdown.querySelector(".dropdown-content")) {
					var t = this.$refs.dropdown.querySelector(".dropdown-content");
					t.addEventListener("scroll", function() {
						return e.checkIfReachedTheEndOfScroll(t)
					})
				}
				this.appendToBody && (this.$data._bodyEl = b(this.$refs.dropdown), this.updateAppendToBody())
			},
			beforeDestroy: function() {
				("undefined" != typeof window && (document.removeEventListener("click", this.clickedOutside), "auto" === this.dropdownPosition && window.removeEventListener("resize", this.calcDropdownInViewportVertical)), this.checkInfiniteScroll && this.$refs.dropdown && this.$refs.dropdown.querySelector(".dropdown-content")) && this.$refs.dropdown.querySelector(".dropdown-content").removeEventListener("scroll", this.checkIfReachedTheEndOfScroll);
				this.appendToBody && g(this.$data._bodyEl)
			}
		}, void 0, !1, void 0, void 0, void 0),
		L = function(e) {
			"undefined" != typeof window && window.Vue && window.Vue.use(e)
		},
		z = function(e, t) {
			e.component(t.name, t)
		},
		H = function(e, t, i) {
			e.prototype.$buefy || (e.prototype.$buefy = {}), e.prototype.$buefy[t] = i
		},
		W = {
			install: function(e) {
				z(e, E)
			}
		};
	L(W);
	var j = V({
			render: function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i(e.computedTag, e._g(e._b({
					tag: "component",
					staticClass: "button",
					class: [e.size, e.type, {
						"is-rounded": e.rounded,
						"is-loading": e.loading,
						"is-outlined": e.outlined,
						"is-fullwidth": e.expanded,
						"is-inverted": e.inverted,
						"is-focused": e.focused,
						"is-active": e.active,
						"is-hovered": e.hovered,
						"is-selected": e.selected
					}],
					attrs: {
						type: e.nativeType
					}
				}, "component", e.$attrs, !1), e.$listeners), [e.iconLeft ? i("b-icon", {
					attrs: {
						pack: e.iconPack,
						icon: e.iconLeft,
						size: e.iconSize
					}
				}) : e._e(), e.label ? i("span", [e._v(e._s(e.label))]) : e.$slots.default ? i("span", [e._t("default")], 2) : e._e(), e.iconRight ? i("b-icon", {
					attrs: {
						pack: e.iconPack,
						icon: e.iconRight,
						size: e.iconSize
					}
				}) : e._e()], 1)
			},
			staticRenderFns: []
		}, void 0, {
			name: "BButton",
			components: i({}, O.name, O),
			inheritAttrs: !1,
			props: {
				type: [String, Object],
				size: String,
				label: String,
				iconPack: String,
				iconLeft: String,
				iconRight: String,
				rounded: {
					type: Boolean,
					default: function() {
						return T.defaultButtonRounded
					}
				},
				loading: Boolean,
				outlined: Boolean,
				expanded: Boolean,
				inverted: Boolean,
				focused: Boolean,
				active: Boolean,
				hovered: Boolean,
				selected: Boolean,
				nativeType: {
					type: String,
					default: "button",
					validator: function(e) {
						return ["button", "submit", "reset"].indexOf(e) >= 0
					}
				},
				tag: {
					type: String,
					default: "button",
					validator: function(e) {
						return T.defaultLinkTags.indexOf(e) >= 0
					}
				}
			},
			computed: {
				computedTag: function() {
					return void 0 !== this.$attrs.disabled && !1 !== this.$attrs.disabled ? "button" : this.tag
				},
				iconSize: function() {
					return this.size && "is-medium" !== this.size ? "is-large" === this.size ? "is-medium" : this.size : "is-small"
				}
			}
		}, void 0, !1, void 0, void 0, void 0),
		Y = {
			install: function(e) {
				z(e, j)
			}
		};
	L(Y);
	var K = function(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
			n = {
				provide: function() {
					return i({}, "b" + e, this)
				}
			};
		return c(t, 1) && (n.data = function() {
			return {
				childItems: []
			}
		}, n.methods = {
			_registerItem: function(e) {
				this.childItems.push(e)
			},
			_unregisterItem: function(e) {
				this.childItems = this.childItems.filter(function(t) {
					return t !== e
				})
			}
		}, c(t, 3) && (n.watch = {
			childItems: function(e) {
				if (e.length > 0 && this.$scopedSlots.default) {
					var t = e[0].$vnode.tag,
						i = 0;
					! function n(a) {
						var s = !0,
							o = !1,
							r = void 0;
						try {
							for (var l, c = function() {
									var a = l.value;
									if (a.tag === t) {
										var s = e.find(function(e) {
											return e.$vnode === a
										});
										s && (s.index = i++)
									} else if (a.tag) {
										var o = a.componentInstance ? a.componentInstance.$scopedSlots.default ? a.componentInstance.$scopedSlots.default() : a.componentInstance.$children : a.children;
										Array.isArray(o) && o.length > 0 && n(o.map(function(e) {
											return e.$vnode
										}))
									}
								}, u = a[Symbol.iterator](); !(s = (l = u.next()).done); s = !0) c()
						} catch (e) {
							o = !0, r = e
						} finally {
							try {
								s || null == u.return || u.return()
							} finally {
								if (o) throw r
							}
						}
						return !1
					}(this.$scopedSlots.default())
				}
			}
		}, n.computed = {
			sortedItems: function() {
				return this.childItems.slice().sort(function(e, t) {
					return e.index - t.index
				})
			}
		})), n
	};
	var q = V({
			render: function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "carousel",
					class: {
						"is-overlay": e.overlay
					},
					on: {
						mouseenter: e.checkPause,
						mouseleave: e.startTimer
					}
				}, [e.progress ? i("progress", {
					staticClass: "progress",
					class: e.progressType,
					attrs: {
						max: e.childItems.length - 1
					},
					domProps: {
						value: e.activeChild
					}
				}, [e._v(" " + e._s(e.childItems.length - 1) + " ")]) : e._e(), i("div", {
					staticClass: "carousel-items",
					on: {
						mousedown: e.dragStart,
						mouseup: e.dragEnd,
						touchstart: function(t) {
							return t.stopPropagation(), e.dragStart(t)
						},
						touchend: function(t) {
							return t.stopPropagation(), e.dragEnd(t)
						}
					}
				}, [e._t("default"), e.arrow ? i("div", {
					staticClass: "carousel-arrow",
					class: {
						"is-hovered": e.arrowHover
					}
				}, [i("b-icon", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.hasPrev,
						expression: "hasPrev"
					}],
					staticClass: "has-icons-left",
					attrs: {
						pack: e.iconPack,
						icon: e.iconPrev,
						size: e.iconSize,
						both: ""
					},
					nativeOn: {
						click: function(t) {
							return e.prev(t)
						}
					}
				}), i("b-icon", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.hasNext,
						expression: "hasNext"
					}],
					staticClass: "has-icons-right",
					attrs: {
						pack: e.iconPack,
						icon: e.iconNext,
						size: e.iconSize,
						both: ""
					},
					nativeOn: {
						click: function(t) {
							return e.next(t)
						}
					}
				})], 1) : e._e()], 2), e.autoplay && e.pauseHover && e.pauseInfo && e.isPause ? i("div", {
					staticClass: "carousel-pause"
				}, [i("span", {
					staticClass: "tag",
					class: e.pauseInfoType
				}, [e._v(" " + e._s(e.pauseText) + " ")])]) : e._e(), e.withCarouselList && !e.indicator ? [e._t("list", null, {
					active: e.activeChild,
					switch: e.changeActive
				})] : e._e(), e.indicator ? i("div", {
					staticClass: "carousel-indicator",
					class: e.indicatorClasses
				}, e._l(e.sortedItems, function(t, n) {
					return i("a", {
						key: t._uid,
						staticClass: "indicator-item",
						class: {
							"is-active": t.isActive
						},
						on: {
							mouseover: function(t) {
								return e.modeChange("hover", n)
							},
							click: function(t) {
								return e.modeChange("click", n)
							}
						}
					}, [e._t("indicators", [i("span", {
						staticClass: "indicator-style",
						class: e.indicatorStyle
					})], {
						i: n
					})], 2)
				}), 0) : e._e(), e.overlay ? [e._t("overlay")] : e._e()], 2)
			},
			staticRenderFns: []
		}, void 0, {
			name: "BCarousel",
			components: i({}, O.name, O),
			mixins: [K("carousel", 3)],
			props: {
				value: {
					type: Number,
					default: 0
				},
				animated: {
					type: String,
					default: "slide"
				},
				interval: Number,
				hasDrag: {
					type: Boolean,
					default: !0
				},
				autoplay: {
					type: Boolean,
					default: !0
				},
				pauseHover: {
					type: Boolean,
					default: !0
				},
				pauseInfo: {
					type: Boolean,
					default: !0
				},
				pauseInfoType: {
					type: String,
					default: "is-white"
				},
				pauseText: {
					type: String,
					default: "Pause"
				},
				arrow: {
					type: Boolean,
					default: !0
				},
				arrowHover: {
					type: Boolean,
					default: !0
				},
				repeat: {
					type: Boolean,
					default: !0
				},
				iconPack: String,
				iconSize: String,
				iconPrev: {
					type: String,
					default: function() {
						return T.defaultIconPrev
					}
				},
				iconNext: {
					type: String,
					default: function() {
						return T.defaultIconNext
					}
				},
				indicator: {
					type: Boolean,
					default: !0
				},
				indicatorBackground: Boolean,
				indicatorCustom: Boolean,
				indicatorCustomSize: {
					type: String,
					default: "is-small"
				},
				indicatorInside: {
					type: Boolean,
					default: !0
				},
				indicatorMode: {
					type: String,
					default: "click"
				},
				indicatorPosition: {
					type: String,
					default: "is-bottom"
				},
				indicatorStyle: {
					type: String,
					default: "is-dots"
				},
				overlay: Boolean,
				progress: Boolean,
				progressType: {
					type: String,
					default: "is-primary"
				},
				withCarouselList: Boolean
			},
			data: function() {
				return {
					transition: "next",
					activeChild: this.value || 0,
					isPause: !1,
					dragX: !1,
					timer: null
				}
			},
			computed: {
				indicatorClasses: function() {
					return [{
						"has-background": this.indicatorBackground,
						"has-custom": this.indicatorCustom,
						"is-inside": this.indicatorInside
					}, this.indicatorCustom && this.indicatorCustomSize, this.indicatorInside && this.indicatorPosition]
				},
				hasPrev: function() {
					return this.repeat || 0 !== this.activeChild
				},
				hasNext: function() {
					return this.repeat || this.activeChild < this.childItems.length - 1
				}
			},
			watch: {
				value: function(e) {
					this.changeActive(e)
				},
				sortedItems: function(e) {
					this.activeChild >= e.length && this.activeChild > 0 && this.changeActive(this.activeChild - 1)
				},
				autoplay: function(e) {
					e ? this.startTimer() : this.pauseTimer()
				},
				repeat: function(e) {
					e && this.startTimer()
				}
			},
			methods: {
				startTimer: function() {
					var e = this;
					this.autoplay && !this.timer && (this.isPause = !1, this.timer = setInterval(function() {
						!e.repeat && e.activeChild >= e.childItems.length - 1 ? e.pauseTimer() : e.next()
					}, this.interval || T.defaultCarouselInterval))
				},
				pauseTimer: function() {
					this.isPause = !0, this.timer && (clearInterval(this.timer), this.timer = null)
				},
				restartTimer: function() {
					this.pauseTimer(), this.startTimer()
				},
				checkPause: function() {
					this.pauseHover && this.autoplay && this.pauseTimer()
				},
				changeActive: function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					this.activeChild === e || isNaN(e) || (t = t || e - this.activeChild, e = this.repeat ? u(e, this.childItems.length) : d(e, 0, this.childItems.length - 1), this.transition = t > 0 ? "prev" : "next", this.activeChild = e, e !== this.value && this.$emit("input", e), this.restartTimer(), this.$emit("change", e))
				},
				modeChange: function(e, t) {
					if (this.indicatorMode === e) return this.changeActive(t)
				},
				prev: function() {
					this.changeActive(this.activeChild - 1, -1)
				},
				next: function() {
					this.changeActive(this.activeChild + 1, 1)
				},
				dragStart: function(e) {
					this.hasDrag && e.target.draggable && (this.dragX = e.touches ? e.changedTouches[0].pageX : e.pageX, e.touches ? this.pauseTimer() : e.preventDefault())
				},
				dragEnd: function(e) {
					if (!1 !== this.dragX) {
						var t = (e.touches ? e.changedTouches[0].pageX : e.pageX) - this.dragX;
						Math.abs(t) > 30 ? t < 0 ? this.next() : this.prev() : (e.target.click(), this.sortedItems[this.activeChild].$emit("click"), this.$emit("click")), e.touches && this.startTimer(), this.dragX = !1
					}
				}
			},
			mounted: function() {
				this.startTimer()
			},
			beforeDestroy: function() {
				this.pauseTimer()
			}
		}, void 0, !1, void 0, void 0, void 0),
		U = function(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
				i = {
					inject: {
						parent: {
							from: "b" + e,
							default: !1
						}
					},
					created: function() {
						if (this.parent) this.parent._registerItem && this.parent._registerItem(this);
						else if (!c(t, 2)) throw this.$destroy(), new Error("You should wrap " + this.$options.name + " in a " + e)
					},
					beforeDestroy: function() {
						this.parent && this.parent._unregisterItem && this.parent._unregisterItem(this)
					}
				};
			return c(t, 1) && (i.data = function() {
				return {
					index: null
				}
			}), i
		};
	var X = V({
		render: function() {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("transition", {
				attrs: {
					name: this.transition
				}
			}, [t("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: this.isActive,
					expression: "isActive"
				}],
				staticClass: "carousel-item"
			}, [this._t("default")], 2)])
		},
		staticRenderFns: []
	}, void 0, {
		name: "BCarouselItem",
		mixins: [U("carousel", 1)],
		data: function() {
			return {
				transitionName: null
			}
		},
		computed: {
			transition: function() {
				return "fade" === this.parent.animated ? "fade" : this.parent.transition ? "slide-" + this.parent.transition : void 0
			},
			isActive: function() {
				return this.parent.activeChild === this.index
			}
		}
	}, void 0, !1, void 0, void 0, void 0);
	var Q = V({
			render: function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "carousel-list",
					class: {
						"has-shadow": e.scrollIndex > 0
					},
					on: {
						mousedown: function(t) {
							return t.preventDefault(), e.dragStart(t)
						},
						touchstart: e.dragStart
					}
				}, [i("div", {
					staticClass: "carousel-slides",
					class: e.listClass,
					style: "transform:translateX(" + e.translation + "px)"
				}, e._l(e.data, function(t, n) {
					return i("div", {
						key: n,
						staticClass: "carousel-slide",
						class: {
							"is-active": e.asIndicator ? e.activeItem === n : e.scrollIndex === n
						},
						style: e.itemStyle,
						on: {
							mouseup: function(t) {
								return e.checkAsIndicator(n, t)
							},
							touchend: function(t) {
								return e.checkAsIndicator(n, t)
							}
						}
					}, [e._t("item", [i("b-image", e._b({
						attrs: {
							src: t.image
						}
					}, "b-image", t, !1))], {
						index: n,
						active: e.activeItem,
						scroll: e.scrollIndex,
						list: t
					}, t)], 2)
				}), 0), e.arrow ? i("div", {
					staticClass: "carousel-arrow",
					class: {
						"is-hovered": e.settings.arrowHover
					}
				}, [i("b-icon", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.hasPrev,
						expression: "hasPrev"
					}],
					staticClass: "has-icons-left",
					attrs: {
						pack: e.settings.iconPack,
						icon: e.settings.iconPrev,
						size: e.settings.iconSize,
						both: ""
					},
					nativeOn: {
						click: function(t) {
							return t.preventDefault(), e.prev(t)
						}
					}
				}), i("b-icon", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.hasNext,
						expression: "hasNext"
					}],
					staticClass: "has-icons-right",
					attrs: {
						pack: e.settings.iconPack,
						icon: e.settings.iconNext,
						size: e.settings.iconSize,
						both: ""
					},
					nativeOn: {
						click: function(t) {
							return t.preventDefault(), e.next(t)
						}
					}
				})], 1) : e._e()])
			},
			staticRenderFns: []
		}, void 0, {
			name: "BCarouselList",
			components: i({}, O.name, O),
			props: {
				data: {
					type: Array,
					default: function() {
						return []
					}
				},
				value: {
					type: Number,
					default: 0
				},
				scrollValue: {
					type: Number,
					default: 0
				},
				hasDrag: {
					type: Boolean,
					default: !0
				},
				hasGrayscale: Boolean,
				hasOpacity: Boolean,
				repeat: Boolean,
				itemsToShow: {
					type: Number,
					default: 4
				},
				itemsToList: {
					type: Number,
					default: 1
				},
				asIndicator: Boolean,
				arrow: {
					type: Boolean,
					default: !0
				},
				arrowHover: {
					type: Boolean,
					default: !0
				},
				iconPack: String,
				iconSize: String,
				iconPrev: {
					type: String,
					default: function() {
						return T.defaultIconPrev
					}
				},
				iconNext: {
					type: String,
					default: function() {
						return T.defaultIconNext
					}
				},
				breakpoints: {
					type: Object,
					default: function() {
						return {}
					}
				}
			},
			data: function() {
				return {
					activeItem: this.value,
					scrollIndex: this.asIndicator ? this.scrollValue : this.value,
					delta: 0,
					dragX: !1,
					hold: 0,
					windowWidth: 0,
					touch: !1,
					observer: null,
					refresh_: 0
				}
			},
			computed: {
				dragging: function() {
					return !1 !== this.dragX
				},
				listClass: function() {
					return [{
						"has-grayscale": this.settings.hasGrayscale,
						"has-opacity": this.settings.hasOpacity,
						"is-dragging": this.dragging
					}]
				},
				itemStyle: function() {
					return "width: ".concat(this.itemWidth, "px;")
				},
				translation: function() {
					return -d(this.delta + this.scrollIndex * this.itemWidth, 0, (this.data.length - this.settings.itemsToShow) * this.itemWidth)
				},
				total: function() {
					return this.data.length - this.settings.itemsToShow
				},
				hasPrev: function() {
					return this.settings.repeat || this.scrollIndex > 0
				},
				hasNext: function() {
					return this.settings.repeat || this.scrollIndex < this.total
				},
				breakpointKeys: function() {
					return Object.keys(this.breakpoints).sort(function(e, t) {
						return t - e
					})
				},
				settings: function() {
					var e = this,
						t = this.breakpointKeys.filter(function(t) {
							if (e.windowWidth >= t) return !0
						})[0];
					return t ? a({}, this.$props, {}, this.breakpoints[t]) : this.$props
				},
				itemWidth: function() {
					return this.windowWidth ? (this.refresh_, this.$el.getBoundingClientRect().width / this.settings.itemsToShow) : 0
				}
			},
			watch: {
				value: function(e) {
					this.switchTo(this.asIndicator ? e - (this.itemsToShow - 3) / 2 : e), this.activeItem !== e && (this.activeItem = d(e, 0, this.data.length - 1))
				},
				scrollValue: function(e) {
					this.switchTo(e)
				}
			},
			methods: {
				resized: function() {
					this.windowWidth = window.innerWidth
				},
				switchTo: function(e) {
					e === this.scrollIndex || isNaN(e) || (this.settings.repeat && (e = u(e, this.total + 1)), e = d(e, 0, this.total), this.scrollIndex = e, this.asIndicator || this.value === e ? this.scrollIndex !== e && this.$emit("updated:scroll", e) : this.$emit("input", e))
				},
				next: function() {
					this.switchTo(this.scrollIndex + this.settings.itemsToList)
				},
				prev: function() {
					this.switchTo(this.scrollIndex - this.settings.itemsToList)
				},
				checkAsIndicator: function(e, t) {
					if (this.asIndicator) {
						var i = t.changedTouches ? t.changedTouches[0].clientX : t.clientX;
						this.hold - Date.now() > 2e3 || Math.abs(this.dragX - i) > 10 || (this.dragX = !1, this.hold = 0, t.preventDefault(), this.activeItem = e, this.$emit("switch", e))
					}
				},
				dragStart: function(e) {
					this.dragging || !this.settings.hasDrag || 0 !== e.button && "touchstart" !== e.type || (this.hold = Date.now(), this.touch = !!e.touches, this.dragX = this.touch ? e.touches[0].clientX : e.clientX, window.addEventListener(this.touch ? "touchmove" : "mousemove", this.dragMove), window.addEventListener(this.touch ? "touchend" : "mouseup", this.dragEnd))
				},
				dragMove: function(e) {
					if (this.dragging) {
						var t = e.touches ? (e.changedTouches[0] || e.touches[0]).clientX : e.clientX;
						this.delta = this.dragX - t, e.touches || e.preventDefault()
					}
				},
				dragEnd: function() {
					if (this.dragging || this.hold) {
						if (this.hold) {
							var e = l(this.delta),
								t = Math.round(Math.abs(this.delta / this.itemWidth) + .15);
							this.switchTo(this.scrollIndex + e * t)
						}
						this.delta = 0, this.dragX = !1, window.removeEventListener(this.touch ? "touchmove" : "mousemove", this.dragMove), window.removeEventListener(this.touch ? "touchend" : "mouseup", this.dragEnd)
					}
				},
				refresh: function() {
					var e = this;
					this.$nextTick(function() {
						e.refresh_++
					})
				}
			},
			mounted: function() {
				if ("undefined" != typeof window && (window.ResizeObserver && (this.observer = new ResizeObserver(this.refresh), this.observer.observe(this.$el)), window.addEventListener("resize", this.resized), document.addEventListener("animationend", this.refresh), document.addEventListener("transitionend", this.refresh), document.addEventListener("transitionstart", this.refresh), this.resized()), this.$attrs.config) throw new Error("The config prop was removed, you need to use v-bind instead")
			},
			beforeDestroy: function() {
				"undefined" != typeof window && (window.ResizeObserver && this.observer.disconnect(), window.removeEventListener("resize", this.resized), document.removeEventListener("animationend", this.refresh), document.removeEventListener("transitionend", this.refresh), document.removeEventListener("transitionstart", this.refresh), this.dragEnd())
			}
		}, void 0, !1, void 0, void 0, void 0),
		G = {
			install: function(e) {
				z(e, q), z(e, X), z(e, Q)
			}
		};
	L(G);
	var Z = {
		props: {
			value: [String, Number, Boolean, Function, Object, Array],
			nativeValue: [String, Number, Boolean, Function, Object, Array],
			type: String,
			disabled: Boolean,
			required: Boolean,
			name: String,
			size: String
		},
		data: function() {
			return {
				newValue: this.value
			}
		},
		computed: {
			computedValue: {
				get: function() {
					return this.newValue
				},
				set: function(e) {
					this.newValue = e, this.$emit("input", e)
				}
			}
		},
		watch: {
			value: function(e) {
				this.newValue = e
			}
		},
		methods: {
			focus: function() {
				this.$refs.input.focus()
			}
		}
	};
	var J = V({
		render: function() {
			var e = this,
				t = e.$createElement,
				i = e._self._c || t;
			return i("label", {
				ref: "label",
				staticClass: "b-checkbox checkbox",
				class: [e.size, {
					"is-disabled": e.disabled
				}],
				attrs: {
					disabled: e.disabled
				},
				on: {
					click: e.focus,
					keydown: function(t) {
						return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : (t.preventDefault(), e.$refs.label.click())
					}
				}
			}, [i("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.computedValue,
					expression: "computedValue"
				}],
				ref: "input",
				attrs: {
					type: "checkbox",
					autocomplete: e.autocomplete,
					disabled: e.disabled,
					required: e.required,
					name: e.name,
					"true-value": e.trueValue,
					"false-value": e.falseValue,
					"aria-labelledby": e.ariaLabelledby
				},
				domProps: {
					indeterminate: e.indeterminate,
					value: e.nativeValue,
					checked: Array.isArray(e.computedValue) ? e._i(e.computedValue, e.nativeValue) > -1 : e._q(e.computedValue, e.trueValue)
				},
				on: {
					click: function(e) {
						e.stopPropagation()
					},
					change: function(t) {
						var i = e.computedValue,
							n = t.target,
							a = n.checked ? e.trueValue : e.falseValue;
						if (Array.isArray(i)) {
							var s = e.nativeValue,
								o = e._i(i, s);
							n.checked ? o < 0 && (e.computedValue = i.concat([s])) : o > -1 && (e.computedValue = i.slice(0, o).concat(i.slice(o + 1)))
						} else e.computedValue = a
					}
				}
			}), i("span", {
				staticClass: "check",
				class: e.type
			}), i("span", {
				staticClass: "control-label",
				attrs: {
					id: e.ariaLabelledby
				}
			}, [e._t("default")], 2)])
		},
		staticRenderFns: []
	}, void 0, {
		name: "BCheckbox",
		mixins: [Z],
		props: {
			indeterminate: Boolean,
			ariaLabelledby: String,
			trueValue: {
				type: [String, Number, Boolean, Function, Object, Array],
				default: !0
			},
			falseValue: {
				type: [String, Number, Boolean, Function, Object, Array],
				default: !1
			},
			autocomplete: {
				type: String,
				default: "on"
			}
		}
	}, void 0, !1, void 0, void 0, void 0);
	var ee = V({
			render: function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "control",
					class: {
						"is-expanded": e.expanded
					}
				}, [i("label", {
					ref: "label",
					staticClass: "b-checkbox checkbox button",
					class: [e.checked ? e.type : null, e.size, {
						"is-disabled": e.disabled,
						"is-focused": e.isFocused
					}],
					attrs: {
						disabled: e.disabled
					},
					on: {
						click: e.focus,
						keydown: function(t) {
							return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : (t.preventDefault(), e.$refs.label.click())
						}
					}
				}, [e._t("default"), i("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.computedValue,
						expression: "computedValue"
					}],
					ref: "input",
					attrs: {
						type: "checkbox",
						disabled: e.disabled,
						required: e.required,
						name: e.name
					},
					domProps: {
						value: e.nativeValue,
						checked: Array.isArray(e.computedValue) ? e._i(e.computedValue, e.nativeValue) > -1 : e.computedValue
					},
					on: {
						click: function(e) {
							e.stopPropagation()
						},
						focus: function(t) {
							e.isFocused = !0
						},
						blur: function(t) {
							e.isFocused = !1
						},
						change: function(t) {
							var i = e.computedValue,
								n = t.target,
								a = !!n.checked;
							if (Array.isArray(i)) {
								var s = e.nativeValue,
									o = e._i(i, s);
								n.checked ? o < 0 && (e.computedValue = i.concat([s])) : o > -1 && (e.computedValue = i.slice(0, o).concat(i.slice(o + 1)))
							} else e.computedValue = a
						}
					}
				})], 2)])
			},
			staticRenderFns: []
		}, void 0, {
			name: "BCheckboxButton",
			mixins: [Z],
			props: {
				type: {
					type: String,
					default: "is-primary"
				},
				expanded: Boolean
			},
			data: function() {
				return {
					isFocused: !1
				}
			},
			computed: {
				checked: function() {
					return Array.isArray(this.newValue) ? this.newValue.indexOf(this.nativeValue) >= 0 : this.newValue === this.nativeValue
				}
			}
		}, void 0, !1, void 0, void 0, void 0),
		te = {
			install: function(e) {
				z(e, J), z(e, ee)
			}
		};
	L(te);
	var ie = V({}, void 0, {
			name: "BCollapse",
			model: {
				prop: "open",
				event: "update:open"
			},
			props: {
				open: {
					type: Boolean,
					default: !0
				},
				animation: {
					type: String,
					default: "fade"
				},
				ariaId: {
					type: String,
					default: ""
				},
				position: {
					type: String,
					default: "is-top",
					validator: function(e) {
						return ["is-top", "is-bottom"].indexOf(e) > -1
					}
				}
			},
			data: function() {
				return {
					isOpen: this.open
				}
			},
			watch: {
				open: function(e) {
					this.isOpen = e
				}
			},
			methods: {
				toggle: function() {
					this.isOpen = !this.isOpen, this.$emit("update:open", this.isOpen), this.$emit(this.isOpen ? "open" : "close")
				}
			},
			render: function(e) {
				var t = e("div", {
						staticClass: "collapse-trigger",
						on: {
							click: this.toggle
						}
					}, this.$scopedSlots.trigger ? [this.$scopedSlots.trigger({
						open: this.isOpen
					})] : [this.$slots.trigger]),
					i = e("transition", {
						props: {
							name: this.animation
						}
					}, [e("div", {
						staticClass: "collapse-content",
						attrs: {
							id: this.ariaId,
							"aria-expanded": this.isOpen
						},
						directives: [{
							name: "show",
							value: this.isOpen
						}]
					}, this.$slots.default)]);
				return e("div", {
					staticClass: "collapse"
				}, "is-top" === this.position ? [t, i] : [i, t])
			}
		}, void 0, void 0, void 0, void 0, void 0),
		ne = {
			install: function(e) {
				z(e, ie)
			}
		};
	L(ne);
	var ae, se = "AM",
		oe = "PM",
		re = {
			mixins: [M],
			inheritAttrs: !1,
			props: {
				value: Date,
				inline: Boolean,
				minTime: Date,
				maxTime: Date,
				placeholder: String,
				editable: Boolean,
				disabled: Boolean,
				hourFormat: {
					type: String,
					validator: function(e) {
						return "24" === e || "12" === e
					}
				},
				incrementHours: {
					type: Number,
					default: 1
				},
				incrementMinutes: {
					type: Number,
					default: 1
				},
				incrementSeconds: {
					type: Number,
					default: 1
				},
				timeFormatter: {
					type: Function,
					default: function(e, t) {
						return "function" == typeof T.defaultTimeFormatter ? T.defaultTimeFormatter(e) : function(e, t) {
							return t.dtf.format(e)
						}(e, t)
					}
				},
				timeParser: {
					type: Function,
					default: function(e, t) {
						return "function" == typeof T.defaultTimeParser ? T.defaultTimeParser(e) : function(e, t) {
							if (e) {
								var i = null;
								if (t.computedValue && !isNaN(t.computedValue) ? i = new Date(t.computedValue) : (i = t.timeCreator()).setMilliseconds(0), t.dtf.formatToParts && "function" == typeof t.dtf.formatToParts) {
									var n = x(t.dtf.formatToParts(i).map(function(e) {
										return "literal" === e.type ? e.value.replace(/ /g, "\\s?") : "dayPeriod" === e.type ? "((?!=<".concat(e.type, ">)(").concat(t.amString, "|").concat(t.pmString, "|").concat(se, "|").concat(oe, "|").concat(se.toLowerCase(), "|").concat(oe.toLowerCase(), ")?)") : "((?!=<".concat(e.type, ">)\\d+)")
									}).join(""), e);
									if (n.hour = n.hour ? parseInt(n.hour, 10) : null, n.minute = n.minute ? parseInt(n.minute, 10) : null, n.second = n.second ? parseInt(n.second, 10) : null, n.hour && n.hour >= 0 && n.hour < 24 && n.minute && n.minute >= 0 && n.minute < 59) return n.dayPeriod && (n.dayPeriod.toLowerCase() === t.pmString.toLowerCase() || n.dayPeriod.toLowerCase() === oe.toLowerCase()) && n.hour < 12 && (n.hour += 12), i.setHours(n.hour), i.setMinutes(n.minute), i.setSeconds(n.second || 0), i
								}
								var a = !1;
								if ("12" === t.hourFormat) {
									var s = e.split(" ");
									e = s[0], a = s[1] === t.amString || s[1] === se
								}
								var o = e.split(":"),
									r = parseInt(o[0], 10),
									l = parseInt(o[1], 10),
									c = t.enableSeconds ? parseInt(o[2], 10) : 0;
								return isNaN(r) || r < 0 || r > 23 || "12" === t.hourFormat && (r < 1 || r > 12) || isNaN(l) || l < 0 || l > 59 ? null : (i.setSeconds(c), i.setMinutes(l), "12" === t.hourFormat && (a && 12 === r ? r = 0 : a || 12 === r || (r += 12)), i.setHours(r), new Date(i.getTime()))
							}
							return null
						}(e, t)
					}
				},
				mobileNative: {
					type: Boolean,
					default: function() {
						return T.defaultTimepickerMobileNative
					}
				},
				timeCreator: {
					type: Function,
					default: function() {
						return "function" == typeof T.defaultTimeCreator ? T.defaultTimeCreator() : new Date
					}
				},
				position: String,
				unselectableTimes: Array,
				openOnFocus: Boolean,
				enableSeconds: Boolean,
				defaultMinutes: Number,
				defaultSeconds: Number,
				focusable: {
					type: Boolean,
					default: !0
				},
				tzOffset: {
					type: Number,
					default: 0
				},
				appendToBody: Boolean,
				resetOnMeridianChange: {
					type: Boolean,
					default: !1
				}
			},
			data: function() {
				return {
					dateSelected: this.value,
					hoursSelected: null,
					minutesSelected: null,
					secondsSelected: null,
					meridienSelected: null,
					_elementRef: "input",
					AM: se,
					PM: oe,
					HOUR_FORMAT_24: "24",
					HOUR_FORMAT_12: "12"
				}
			},
			computed: {
				computedValue: {
					get: function() {
						return this.dateSelected
					},
					set: function(e) {
						this.dateSelected = e, this.$emit("input", this.dateSelected)
					}
				},
				localeOptions: function() {
					return new Intl.DateTimeFormat(this.locale, {
						hour: "numeric",
						minute: "numeric",
						second: this.enableSeconds ? "numeric" : void 0
					}).resolvedOptions()
				},
				dtf: function() {
					return new Intl.DateTimeFormat(this.locale, {
						hour: this.localeOptions.hour || "numeric",
						minute: this.localeOptions.minute || "numeric",
						second: this.enableSeconds ? this.localeOptions.second || "numeric" : void 0,
						hour12: !this.isHourFormat24
					})
				},
				newHourFormat: function() {
					return this.hourFormat || (this.localeOptions.hour12 ? "12" : "24")
				},
				sampleTime: function() {
					var e = this.timeCreator();
					return e.setHours(10), e.setSeconds(0), e.setMinutes(0), e.setMilliseconds(0), e
				},
				hourLiteral: function() {
					if (this.dtf.formatToParts && "function" == typeof this.dtf.formatToParts) {
						var e = this.sampleTime,
							t = this.dtf.formatToParts(e),
							i = t.find(function(e, i) {
								return i > 0 && "hour" === t[i - 1].type
							});
						if (i) return i.value
					}
					return ":"
				},
				minuteLiteral: function() {
					if (this.dtf.formatToParts && "function" == typeof this.dtf.formatToParts) {
						var e = this.sampleTime,
							t = this.dtf.formatToParts(e),
							i = t.find(function(e, i) {
								return i > 0 && "minute" === t[i - 1].type
							});
						if (i) return i.value
					}
					return ":"
				},
				secondLiteral: function() {
					if (this.dtf.formatToParts && "function" == typeof this.dtf.formatToParts) {
						var e = this.sampleTime,
							t = this.dtf.formatToParts(e),
							i = t.find(function(e, i) {
								return i > 0 && "second" === t[i - 1].type
							});
						if (i) return i.value
					}
				},
				amString: function() {
					if (this.dtf.formatToParts && "function" == typeof this.dtf.formatToParts) {
						var e = this.sampleTime;
						e.setHours(10);
						var t = this.dtf.formatToParts(e).find(function(e) {
							return "dayPeriod" === e.type
						});
						if (t) return t.value
					}
					return se
				},
				pmString: function() {
					if (this.dtf.formatToParts && "function" == typeof this.dtf.formatToParts) {
						var e = this.sampleTime;
						e.setHours(20);
						var t = this.dtf.formatToParts(e).find(function(e) {
							return "dayPeriod" === e.type
						});
						if (t) return t.value
					}
					return oe
				},
				hours: function() {
					if (!this.incrementHours || this.incrementHours < 1) throw new Error("Hour increment cannot be null or less than 1.");
					for (var e = [], t = this.isHourFormat24 ? 24 : 12, i = 0; i < t; i += this.incrementHours) {
						var n = i,
							a = n;
						this.isHourFormat24 || (a = n = i + 1, this.meridienSelected === this.amString ? 12 === n && (n = 0) : this.meridienSelected === this.pmString && 12 !== n && (n += 12)), e.push({
							label: this.formatNumber(a),
							value: n
						})
					}
					return e
				},
				minutes: function() {
					if (!this.incrementMinutes || this.incrementMinutes < 1) throw new Error("Minute increment cannot be null or less than 1.");
					for (var e = [], t = 0; t < 60; t += this.incrementMinutes) e.push({
						label: this.formatNumber(t, !0),
						value: t
					});
					return e
				},
				seconds: function() {
					if (!this.incrementSeconds || this.incrementSeconds < 1) throw new Error("Second increment cannot be null or less than 1.");
					for (var e = [], t = 0; t < 60; t += this.incrementSeconds) e.push({
						label: this.formatNumber(t, !0),
						value: t
					});
					return e
				},
				meridiens: function() {
					return [this.amString, this.pmString]
				},
				isMobile: function() {
					return this.mobileNative && v.any()
				},
				isHourFormat24: function() {
					return "24" === this.newHourFormat
				}
			},
			watch: {
				hourFormat: function() {
					null !== this.hoursSelected && (this.meridienSelected = this.hoursSelected >= 12 ? this.pmString : this.amString)
				},
				locale: function() {
					this.value || (this.meridienSelected = this.amString)
				},
				value: {
					handler: function(e) {
						this.updateInternalState(e), !this.isValid && this.$refs.input.checkHtml5Validity()
					},
					immediate: !0
				}
			},
			methods: {
				onMeridienChange: function(e) {
					null !== this.hoursSelected && this.resetOnMeridianChange ? (this.hoursSelected = null, this.minutesSelected = null, this.secondsSelected = null, this.computedValue = null) : null !== this.hoursSelected && (e === this.pmString ? this.hoursSelected += 12 : e === this.amString && (this.hoursSelected -= 12)), this.updateDateSelected(this.hoursSelected, this.minutesSelected, this.enableSeconds ? this.secondsSelected : 0, e)
				},
				onHoursChange: function(e) {
					this.minutesSelected || void 0 === this.defaultMinutes || (this.minutesSelected = this.defaultMinutes), this.secondsSelected || void 0 === this.defaultSeconds || (this.secondsSelected = this.defaultSeconds), this.updateDateSelected(parseInt(e, 10), this.minutesSelected, this.enableSeconds ? this.secondsSelected : 0, this.meridienSelected)
				},
				onMinutesChange: function(e) {
					!this.secondsSelected && this.defaultSeconds && (this.secondsSelected = this.defaultSeconds), this.updateDateSelected(this.hoursSelected, parseInt(e, 10), this.enableSeconds ? this.secondsSelected : 0, this.meridienSelected)
				},
				onSecondsChange: function(e) {
					this.updateDateSelected(this.hoursSelected, this.minutesSelected, parseInt(e, 10), this.meridienSelected)
				},
				updateDateSelected: function(e, t, i, n) {
					if (null != e && null != t && (!this.isHourFormat24 && null !== n || this.isHourFormat24)) {
						var a = null;
						this.computedValue && !isNaN(this.computedValue) ? a = new Date(this.computedValue) : (a = this.timeCreator()).setMilliseconds(0), a.setHours(e), a.setMinutes(t), a.setSeconds(i), this.computedValue = new Date(a.getTime())
					}
				},
				updateInternalState: function(e) {
					e ? (this.hoursSelected = e.getHours(), this.minutesSelected = e.getMinutes(), this.secondsSelected = e.getSeconds(), this.meridienSelected = e.getHours() >= 12 ? this.pmString : this.amString) : (this.hoursSelected = null, this.minutesSelected = null, this.secondsSelected = null, this.meridienSelected = this.amString), this.dateSelected = e
				},
				isHourDisabled: function(e) {
					var t = this,
						i = !1;
					if (this.minTime) {
						var n = this.minTime.getHours(),
							a = this.minutes.every(function(i) {
								return t.isMinuteDisabledForHour(e, i.value)
							});
						i = e < n || a
					}
					if (this.maxTime && !i) {
						var s = this.maxTime.getHours();
						i = e > s
					}
					this.unselectableTimes && (i || (i = this.unselectableTimes.filter(function(i) {
						return t.enableSeconds && null !== t.secondsSelected ? i.getHours() === e && i.getMinutes() === t.minutesSelected && i.getSeconds() === t.secondsSelected : null !== t.minutesSelected && (i.getHours() === e && i.getMinutes() === t.minutesSelected)
					}).length > 0 || this.minutes.every(function(i) {
						return t.unselectableTimes.filter(function(t) {
							return t.getHours() === e && t.getMinutes() === i.value
						}).length > 0
					})));
					return i
				},
				isMinuteDisabledForHour: function(e, t) {
					var i = !1;
					if (this.minTime) {
						var n = this.minTime.getHours(),
							a = this.minTime.getMinutes();
						i = e === n && t < a
					}
					if (this.maxTime && !i) {
						var s = this.maxTime.getHours(),
							o = this.maxTime.getMinutes();
						i = e === s && t > o
					}
					return i
				},
				isMinuteDisabled: function(e) {
					var t = this,
						i = !1;
					null !== this.hoursSelected && (i = !!this.isHourDisabled(this.hoursSelected) || this.isMinuteDisabledForHour(this.hoursSelected, e), this.unselectableTimes && (i || (i = this.unselectableTimes.filter(function(i) {
						return t.enableSeconds && null !== t.secondsSelected ? i.getHours() === t.hoursSelected && i.getMinutes() === e && i.getSeconds() === t.secondsSelected : i.getHours() === t.hoursSelected && i.getMinutes() === e
					}).length > 0)));
					return i
				},
				isSecondDisabled: function(e) {
					var t = this,
						i = !1;
					if (null !== this.minutesSelected) {
						if (this.isMinuteDisabled(this.minutesSelected)) i = !0;
						else {
							if (this.minTime) {
								var n = this.minTime.getHours(),
									a = this.minTime.getMinutes(),
									s = this.minTime.getSeconds();
								i = this.hoursSelected === n && this.minutesSelected === a && e < s
							}
							if (this.maxTime && !i) {
								var o = this.maxTime.getHours(),
									r = this.maxTime.getMinutes(),
									l = this.maxTime.getSeconds();
								i = this.hoursSelected === o && this.minutesSelected === r && e > l
							}
						}
						if (this.unselectableTimes)
							if (!i) i = this.unselectableTimes.filter(function(i) {
								return i.getHours() === t.hoursSelected && i.getMinutes() === t.minutesSelected && i.getSeconds() === e
							}).length > 0
					}
					return i
				},
				onChange: function(e) {
					var t = this.timeParser(e, this);
					this.updateInternalState(t), t && !isNaN(t) ? this.computedValue = t : (this.computedValue = null, this.$refs.input.newValue = this.computedValue)
				},
				toggle: function(e) {
					this.$refs.dropdown && (this.$refs.dropdown.isActive = "boolean" == typeof e ? e : !this.$refs.dropdown.isActive)
				},
				close: function() {
					this.toggle(!1)
				},
				handleOnFocus: function() {
					this.onFocus(), this.openOnFocus && this.toggle(!0)
				},
				formatHHMMSS: function(e) {
					var t = new Date(e);
					if (e && !isNaN(t)) {
						var i = t.getHours(),
							n = t.getMinutes(),
							a = t.getSeconds();
						return this.formatNumber(i, !0) + ":" + this.formatNumber(n, !0) + ":" + this.formatNumber(a, !0)
					}
					return ""
				},
				onChangeNativePicker: function(e) {
					var t = e.target.value;
					if (t) {
						var i = null;
						this.computedValue && !isNaN(this.computedValue) ? i = new Date(this.computedValue) : (i = new Date).setMilliseconds(0);
						var n = t.split(":");
						i.setHours(parseInt(n[0], 10)), i.setMinutes(parseInt(n[1], 10)), i.setSeconds(n[2] ? parseInt(n[2], 10) : 0), this.computedValue = new Date(i.getTime())
					} else this.computedValue = null
				},
				formatNumber: function(e, t) {
					return this.isHourFormat24 || t ? this.pad(e) : e
				},
				pad: function(e) {
					return (e < 10 ? "0" : "") + e
				},
				formatValue: function(e) {
					return e && !isNaN(e) ? this.timeFormatter(e, this) : null
				},
				keyPress: function(e) {
					var t = e.key;
					this.$refs.dropdown && this.$refs.dropdown.isActive && ("Escape" === t || "Esc" === t) && this.toggle(!1)
				},
				onActiveChange: function(e) {
					e || this.onBlur()
				}
			},
			created: function() {
				"undefined" != typeof window && document.addEventListener("keyup", this.keyPress)
			},
			beforeDestroy: function() {
				"undefined" != typeof window && document.removeEventListener("keyup", this.keyPress)
			}
		},
		le = function(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
			return e ? t ? e.querySelectorAll('*[tabindex="-1"]') : e.querySelectorAll('a[href]:not([tabindex="-1"]),\n                                     area[href],\n                                     input:not([disabled]),\n                                     select:not([disabled]),\n                                     textarea:not([disabled]),\n                                     button:not([disabled]),\n                                     iframe,\n                                     object,\n                                     embed,\n                                     *[tabindex]:not([tabindex="-1"]),\n                                     *[contenteditable]') : null
		},
		ce = {
			bind: function(e, t) {
				var i = t.value;
				if (void 0 === i || i) {
					var n = le(e),
						a = le(e, !0);
					n && n.length > 0 && (ae = function(t) {
						n = le(e), a = le(e, !0);
						var i = n[0],
							s = n[n.length - 1];
						t.target === i && t.shiftKey && "Tab" === t.key ? (t.preventDefault(), s.focus()) : (t.target === s || Array.from(a).indexOf(t.target) >= 0) && !t.shiftKey && "Tab" === t.key && (t.preventDefault(), i.focus())
					}, e.addEventListener("keydown", ae))
				}
			},
			unbind: function(e) {
				e.removeEventListener("keydown", ae)
			}
		},
		ue = ["escape", "outside"];
	var de = V({
		render: function() {
			var e = this,
				t = e.$createElement,
				i = e._self._c || t;
			return i("div", {
				ref: "dropdown",
				staticClass: "dropdown dropdown-menu-animation",
				class: e.rootClasses
			}, [e.inline ? e._e() : i("div", {
				ref: "trigger",
				staticClass: "dropdown-trigger",
				attrs: {
					role: "button",
					tabindex: !e.disabled && 0,
					"aria-haspopup": "true"
				},
				on: {
					click: e.onClick,
					contextmenu: function(t) {
						return t.preventDefault(), e.onContextMenu(t)
					},
					mouseenter: e.onHover,
					"!focus": function(t) {
						return e.onFocus(t)
					}
				}
			}, [e._t("trigger", null, {
				active: e.isActive
			})], 2), i("transition", {
				attrs: {
					name: e.animation
				}
			}, [e.isMobileModal ? i("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.isActive,
					expression: "isActive"
				}],
				staticClass: "background",
				attrs: {
					"aria-hidden": !e.isActive
				}
			}) : e._e()]), i("transition", {
				attrs: {
					name: e.animation
				}
			}, [i("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: !e.disabled && (e.isActive || e.isHoverable) || e.inline,
					expression: "(!disabled && (isActive || isHoverable)) || inline"
				}, {
					name: "trap-focus",
					rawName: "v-trap-focus",
					value: e.trapFocus,
					expression: "trapFocus"
				}],
				ref: "dropdownMenu",
				staticClass: "dropdown-menu",
				style: e.style,
				attrs: {
					"aria-hidden": !e.isActive
				}
			}, [i("div", {
				staticClass: "dropdown-content",
				style: e.contentStyle,
				attrs: {
					role: e.ariaRole
				}
			}, [e._t("default")], 2)])])], 1)
		},
		staticRenderFns: []
	}, void 0, {
		name: "BDropdown",
		directives: {
			trapFocus: ce
		},
		mixins: [K("dropdown")],
		props: {
			value: {
				type: [String, Number, Boolean, Object, Array, Function],
				default: null
			},
			disabled: Boolean,
			inline: Boolean,
			scrollable: Boolean,
			maxHeight: {
				type: [String, Number],
				default: 200
			},
			position: {
				type: String,
				validator: function(e) {
					return ["is-top-right", "is-top-left", "is-bottom-left", "is-bottom-right"].indexOf(e) > -1
				}
			},
			triggers: {
				type: Array,
				default: function() {
					return ["click"]
				}
			},
			mobileModal: {
				type: Boolean,
				default: function() {
					return T.defaultDropdownMobileModal
				}
			},
			ariaRole: {
				type: String,
				validator: function(e) {
					return ["menu", "list", "dialog"].indexOf(e) > -1
				},
				default: null
			},
			animation: {
				type: String,
				default: "fade"
			},
			multiple: Boolean,
			trapFocus: {
				type: Boolean,
				default: function() {
					return T.defaultTrapFocus
				}
			},
			closeOnClick: {
				type: Boolean,
				default: !0
			},
			canClose: {
				type: [Array, Boolean],
				default: !0
			},
			expanded: Boolean,
			appendToBody: Boolean,
			appendToBodyCopyParent: Boolean
		},
		data: function() {
			return {
				selected: this.value,
				style: {},
				isActive: !1,
				isHoverable: !1,
				_bodyEl: void 0
			}
		},
		computed: {
			rootClasses: function() {
				return [this.position, {
					"is-disabled": this.disabled,
					"is-hoverable": this.hoverable,
					"is-inline": this.inline,
					"is-active": this.isActive || this.inline,
					"is-mobile-modal": this.isMobileModal,
					"is-expanded": this.expanded
				}]
			},
			isMobileModal: function() {
				return this.mobileModal && !this.inline
			},
			cancelOptions: function() {
				return "boolean" == typeof this.canClose ? this.canClose ? ue : [] : this.canClose
			},
			contentStyle: function() {
				return {
					maxHeight: this.scrollable ? S(this.maxHeight) : null,
					overflow: this.scrollable ? "auto" : null
				}
			},
			hoverable: function() {
				return this.triggers.indexOf("hover") >= 0
			}
		},
		watch: {
			value: function(e) {
				this.selected = e
			},
			isActive: function(e) {
				var t = this;
				this.$emit("active-change", e), this.appendToBody && this.$nextTick(function() {
					t.updateAppendToBody()
				})
			}
		},
		methods: {
			selectItem: function(e) {
				this.multiple ? (this.selected ? -1 === this.selected.indexOf(e) ? this.selected = [].concat(o(this.selected), [e]) : this.selected = this.selected.filter(function(t) {
					return t !== e
				}) : this.selected = [e], this.$emit("change", this.selected)) : this.selected !== e && (this.selected = e, this.$emit("change", this.selected)), this.$emit("input", this.selected), this.multiple || (this.isActive = !this.closeOnClick, this.hoverable && this.closeOnClick && (this.isHoverable = !1))
			},
			isInWhiteList: function(e) {
				if (e === this.$refs.dropdownMenu) return !0;
				if (e === this.$refs.trigger) return !0;
				if (void 0 !== this.$refs.dropdownMenu) {
					var t = this.$refs.dropdownMenu.querySelectorAll("*"),
						i = !0,
						n = !1,
						a = void 0;
					try {
						for (var s, o = t[Symbol.iterator](); !(i = (s = o.next()).done); i = !0) {
							if (e === s.value) return !0
						}
					} catch (e) {
						n = !0, a = e
					} finally {
						try {
							i || null == o.return || o.return()
						} finally {
							if (n) throw a
						}
					}
				}
				if (void 0 !== this.$refs.trigger) {
					var r = this.$refs.trigger.querySelectorAll("*"),
						l = !0,
						c = !1,
						u = void 0;
					try {
						for (var d, h = r[Symbol.iterator](); !(l = (d = h.next()).done); l = !0) {
							if (e === d.value) return !0
						}
					} catch (e) {
						c = !0, u = e
					} finally {
						try {
							l || null == h.return || h.return()
						} finally {
							if (c) throw u
						}
					}
				}
				return !1
			},
			clickedOutside: function(e) {
				if (!(this.cancelOptions.indexOf("outside") < 0 || this.inline)) {
					var t = $(this) ? e.composedPath()[0] : e.target;
					this.isInWhiteList(t) || (this.isActive = !1)
				}
			},
			keyPress: function(e) {
				var t = e.key;
				if (this.isActive && ("Escape" === t || "Esc" === t)) {
					if (this.cancelOptions.indexOf("escape") < 0) return;
					this.isActive = !1
				}
			},
			onClick: function() {
				this.triggers.indexOf("click") < 0 || this.toggle()
			},
			onContextMenu: function() {
				this.triggers.indexOf("contextmenu") < 0 || this.toggle()
			},
			onHover: function() {
				this.triggers.indexOf("hover") < 0 || (this.isHoverable = !0)
			},
			onFocus: function() {
				this.triggers.indexOf("focus") < 0 || this.toggle()
			},
			toggle: function() {
				var e = this;
				this.disabled || (this.isActive ? this.isActive = !this.isActive : this.$nextTick(function() {
					var t = !e.isActive;
					e.isActive = t, setTimeout(function() {
						return e.isActive = t
					})
				}))
			},
			updateAppendToBody: function() {
				var e = this.$refs.dropdown,
					i = this.$refs.dropdownMenu,
					n = this.$refs.trigger;
				if (i && n) {
					var a = this.$data._bodyEl.children[0];
					if (a.classList.forEach(function(e) {
							return a.classList.remove(e)
						}), a.classList.add("dropdown"), a.classList.add("dropdown-menu-animation"), this.$vnode && this.$vnode.data && this.$vnode.data.staticClass && a.classList.add(this.$vnode.data.staticClass), this.rootClasses.forEach(function(e) {
							if (e && "object" === t(e))
								for (var i in e) e[i] && a.classList.add(i)
						}), this.appendToBodyCopyParent) {
						var s = this.$refs.dropdown.parentNode,
							o = this.$data._bodyEl;
						o.classList.forEach(function(e) {
							return o.classList.remove(e)
						}), s.classList.forEach(function(e) {
							o.classList.add(e)
						})
					}
					var r = n.getBoundingClientRect(),
						l = r.top + window.scrollY,
						c = r.left + window.scrollX;
					!this.position || this.position.indexOf("bottom") >= 0 ? l += n.clientHeight : l -= i.clientHeight, this.position && this.position.indexOf("left") >= 0 && (c -= i.clientWidth - n.clientWidth), this.style = {
						position: "absolute",
						top: "".concat(l, "px"),
						left: "".concat(c, "px"),
						zIndex: "99",
						width: this.expanded ? "".concat(e.offsetWidth, "px") : void 0
					}
				}
			}
		},
		mounted: function() {
			this.appendToBody && (this.$data._bodyEl = b(this.$refs.dropdownMenu), this.updateAppendToBody())
		},
		created: function() {
			"undefined" != typeof window && (document.addEventListener("click", this.clickedOutside), document.addEventListener("keyup", this.keyPress))
		},
		beforeDestroy: function() {
			"undefined" != typeof window && (document.removeEventListener("click", this.clickedOutside), document.removeEventListener("keyup", this.keyPress)), this.appendToBody && g(this.$data._bodyEl)
		}
	}, void 0, !1, void 0, void 0, void 0);
	var he = V({
		render: function() {
			var e = this,
				t = e.$createElement,
				i = e._self._c || t;
			return e.separator ? i("hr", {
				staticClass: "dropdown-divider"
			}) : e.custom || e.hasLink ? i("div", {
				class: e.itemClasses,
				attrs: {
					role: e.ariaRoleItem,
					tabindex: e.isFocusable ? 0 : null
				},
				on: {
					click: e.selectItem
				}
			}, [e._t("default")], 2) : i("a", {
				staticClass: "dropdown-item",
				class: e.anchorClasses,
				attrs: {
					role: e.ariaRoleItem,
					tabindex: e.isFocusable ? 0 : null
				},
				on: {
					click: e.selectItem
				}
			}, [e._t("default")], 2)
		},
		staticRenderFns: []
	}, void 0, {
		name: "BDropdownItem",
		mixins: [U("dropdown")],
		props: {
			value: {
				type: [String, Number, Boolean, Object, Array, Function],
				default: null
			},
			separator: Boolean,
			disabled: Boolean,
			custom: Boolean,
			focusable: {
				type: Boolean,
				default: !0
			},
			paddingless: Boolean,
			hasLink: Boolean,
			ariaRole: {
				type: String,
				default: ""
			}
		},
		computed: {
			anchorClasses: function() {
				return {
					"is-disabled": this.parent.disabled || this.disabled,
					"is-paddingless": this.paddingless,
					"is-active": this.isActive
				}
			},
			itemClasses: function() {
				return {
					"dropdown-item": !this.hasLink,
					"is-disabled": this.disabled,
					"is-paddingless": this.paddingless,
					"is-active": this.isActive,
					"has-link": this.hasLink
				}
			},
			ariaRoleItem: function() {
				return "menuitem" === this.ariaRole || "listitem" === this.ariaRole ? this.ariaRole : null
			},
			isClickable: function() {
				return !(this.parent.disabled || this.separator || this.disabled || this.custom)
			},
			isActive: function() {
				return null !== this.parent.selected && (this.parent.multiple ? this.parent.selected.indexOf(this.value) >= 0 : this.value === this.parent.selected)
			},
			isFocusable: function() {
				return !this.hasLink && this.focusable
			}
		},
		methods: {
			selectItem: function() {
				this.isClickable && (this.parent.selectItem(this.value), this.$emit("click"))
			}
		}
	}, void 0, !1, void 0, void 0, void 0);
	var fe = V({}, void 0, {
		name: "BFieldBody",
		props: {
			message: {
				type: [String, Array]
			},
			type: {
				type: [String, Object]
			}
		},
		render: function(e) {
			var t = this,
				i = !0;
			return e("div", {
				attrs: {
					class: "field-body"
				}
			}, this.$slots.default.map(function(n) {
				return n.tag ? (i && (a = t.message, i = !1), e("b-field", {
					attrs: {
						type: t.type,
						message: a
					}
				}, [n])) : n;
				var a
			}))
		}
	}, void 0, void 0, void 0, void 0, void 0);
	var pe = V({
		render: function() {
			var e = this,
				t = e.$createElement,
				i = e._self._c || t;
			return i("div", {
				staticClass: "field",
				class: e.rootClasses
			}, [e.horizontal ? i("div", {
				staticClass: "field-label",
				class: [e.customClass, e.fieldLabelSize]
			}, [e.hasLabel ? i("label", {
				staticClass: "label",
				class: e.customClass,
				attrs: {
					for: e.labelFor
				}
			}, [e.$slots.label ? e._t("label") : [e._v(e._s(e.label))]], 2) : e._e()]) : [e.hasLabel ? i("label", {
				staticClass: "label",
				class: e.customClass,
				attrs: {
					for: e.labelFor
				}
			}, [e.$slots.label ? e._t("label") : [e._v(e._s(e.label))]], 2) : e._e()], e.horizontal ? i("b-field-body", {
				attrs: {
					message: e.newMessage ? e.formattedMessage : "",
					type: e.newType
				}
			}, [e._t("default")], 2) : e.hasInnerField ? i("div", {
				staticClass: "field-body"
			}, [i("b-field", {
				class: e.innerFieldClasses,
				attrs: {
					addons: !1,
					type: e.newType
				}
			}, [e._t("default")], 2)], 1) : [e._t("default")], e.hasMessage && !e.horizontal ? i("p", {
				staticClass: "help",
				class: e.newType
			}, [e.$slots.message ? e._t("message") : [e._l(e.formattedMessage, function(t, n) {
				return [e._v(" " + e._s(t) + " "), n + 1 < e.formattedMessage.length ? i("br", {
					key: n
				}) : e._e()]
			})]], 2) : e._e()], 2)
		},
		staticRenderFns: []
	}, void 0, {
		name: "BField",
		components: i({}, fe.name, fe),
		provide: function() {
			return {
				BField: this
			}
		},
		inject: {
			parent: {
				from: "BField",
				default: !1
			}
		},
		props: {
			type: [String, Object],
			label: String,
			labelFor: String,
			message: [String, Array, Object],
			grouped: Boolean,
			groupMultiline: Boolean,
			position: String,
			expanded: Boolean,
			horizontal: Boolean,
			addons: {
				type: Boolean,
				default: !0
			},
			customClass: String,
			labelPosition: {
				type: String,
				default: function() {
					return T.defaultFieldLabelPosition
				}
			}
		},
		data: function() {
			return {
				newType: this.type,
				newMessage: this.message,
				fieldLabelSize: null,
				_isField: !0
			}
		},
		computed: {
			rootClasses: function() {
				return [{
					"is-expanded": this.expanded,
					"is-horizontal": this.horizontal,
					"is-floating-in-label": this.hasLabel && !this.horizontal && "inside" === this.labelPosition,
					"is-floating-label": this.hasLabel && !this.horizontal && "on-border" === this.labelPosition
				}, this.numberInputClasses]
			},
			innerFieldClasses: function() {
				return [this.fieldType(), this.newPosition, {
					"is-grouped-multiline": this.groupMultiline
				}]
			},
			hasInnerField: function() {
				return this.grouped || this.groupMultiline || this.hasAddons()
			},
			newPosition: function() {
				if (void 0 !== this.position) {
					var e = this.position.split("-");
					if (!(e.length < 1)) {
						var t = this.grouped ? "is-grouped-" : "has-addons-";
						return this.position ? t + e[1] : void 0
					}
				}
			},
			formattedMessage: function() {
				if (this.parent && this.parent.hasInnerField) return "";
				if ("string" == typeof this.newMessage) return [this.newMessage];
				var e = [];
				if (Array.isArray(this.newMessage)) this.newMessage.forEach(function(t) {
					if ("string" == typeof t) e.push(t);
					else
						for (var i in t) t[i] && e.push(i)
				});
				else
					for (var t in this.newMessage) this.newMessage[t] && e.push(t);
				return e.filter(function(e) {
					if (e) return e
				})
			},
			hasLabel: function() {
				return this.label || this.$slots.label
			},
			hasMessage: function() {
				return (!this.parent || !this.parent.hasInnerField) && this.newMessage || this.$slots.message
			},
			numberInputClasses: function() {
				if (this.$slots.default) {
					var e = this.$slots.default.filter(function(e) {
						return e.tag && e.tag.toLowerCase().indexOf("numberinput") >= 0
					})[0];
					if (e) {
						var t = ["has-numberinput"],
							i = e.componentOptions.propsData.controlsPosition,
							n = e.componentOptions.propsData.size;
						return i && t.push("has-numberinput-".concat(i)), n && t.push("has-numberinput-".concat(n)), t
					}
				}
				return null
			}
		},
		watch: {
			type: function(e) {
				this.newType = e
			},
			message: function(e) {
				this.newMessage = e
			},
			newMessage: function(e) {
				this.parent && this.parent.hasInnerField && (this.parent.type || (this.parent.newType = this.newType), this.parent.newMessage = e)
			}
		},
		methods: {
			fieldType: function() {
				return this.grouped ? "is-grouped" : this.hasAddons() ? "has-addons" : void 0
			},
			hasAddons: function() {
				var e = 0;
				return this.$slots.default && (e = this.$slots.default.reduce(function(e, t) {
					return t.tag ? e + 1 : e
				}, 0)), e > 1 && this.addons && !this.horizontal
			}
		},
		mounted: function() {
			this.horizontal && (this.$el.querySelectorAll(".input, .select, .button, .textarea, .b-slider").length > 0 && (this.fieldLabelSize = "is-normal"))
		}
	}, void 0, !1, void 0, void 0, void 0);
	var me, ve = V({
		render: function() {
			var e = this,
				t = e.$createElement,
				i = e._self._c || t;
			return i("div", {
				staticClass: "b-clockpicker-face",
				on: {
					mousedown: e.onMouseDown,
					mouseup: e.onMouseUp,
					mousemove: e.onDragMove,
					touchstart: e.onMouseDown,
					touchend: e.onMouseUp,
					touchmove: e.onDragMove
				}
			}, [i("div", {
				ref: "clock",
				staticClass: "b-clockpicker-face-outer-ring"
			}, [i("div", {
				staticClass: "b-clockpicker-face-hand",
				style: e.handStyle
			}), e._l(e.faceNumbers, function(t, n) {
				return i("span", {
					key: n,
					staticClass: "b-clockpicker-face-number",
					class: e.getFaceNumberClasses(t),
					style: {
						transform: e.getNumberTranslate(t.value)
					}
				}, [i("span", [e._v(e._s(t.label))])])
			})], 2)])
		},
		staticRenderFns: []
	}, void 0, {
		name: "BClockpickerFace",
		props: {
			pickerSize: Number,
			min: Number,
			max: Number,
			double: Boolean,
			value: Number,
			faceNumbers: Array,
			disabledValues: Function
		},
		data: function() {
			return {
				isDragging: !1,
				inputValue: this.value,
				prevAngle: 720
			}
		},
		computed: {
			count: function() {
				return this.max - this.min + 1
			},
			countPerRing: function() {
				return this.double ? this.count / 2 : this.count
			},
			radius: function() {
				return this.pickerSize / 2
			},
			outerRadius: function() {
				return this.radius - 5 - 20
			},
			innerRadius: function() {
				return Math.max(.6 * this.outerRadius, this.outerRadius - 5 - 40)
			},
			degreesPerUnit: function() {
				return 360 / this.countPerRing
			},
			degrees: function() {
				return this.degreesPerUnit * Math.PI / 180
			},
			handRotateAngle: function() {
				for (var e = this.prevAngle; e < 0;) e += 360;
				var t = this.calcHandAngle(this.displayedValue),
					i = this.shortestDistanceDegrees(e, t);
				return this.prevAngle + i
			},
			handScale: function() {
				return this.calcHandScale(this.displayedValue)
			},
			handStyle: function() {
				return {
					transform: "rotate(".concat(this.handRotateAngle, "deg) scaleY(").concat(this.handScale, ")"),
					transition: ".3s cubic-bezier(.25,.8,.50,1)"
				}
			},
			displayedValue: function() {
				return null == this.inputValue ? this.min : this.inputValue
			}
		},
		watch: {
			value: function(e) {
				e !== this.inputValue && (this.prevAngle = this.handRotateAngle), this.inputValue = e
			}
		},
		methods: {
			isDisabled: function(e) {
				return this.disabledValues && this.disabledValues(e)
			},
			euclidean: function(e, t) {
				var i = t.x - e.x,
					n = t.y - e.y;
				return Math.sqrt(i * i + n * n)
			},
			shortestDistanceDegrees: function(e, t) {
				var i = (t - e) % 360,
					n = 180 - Math.abs(Math.abs(i) - 180);
				return (i + 360) % 360 < 180 ? 1 * n : -1 * n
			},
			coordToAngle: function(e, t) {
				var i = 2 * Math.atan2(t.y - e.y - this.euclidean(e, t), t.x - e.x);
				return Math.abs(180 * i / Math.PI)
			},
			getNumberTranslate: function(e) {
				var t = this.getNumberCoords(e),
					i = t.x,
					n = t.y;
				return "translate(".concat(i, "px, ").concat(n, "px)")
			},
			getNumberCoords: function(e) {
				var t = this.isInnerRing(e) ? this.innerRadius : this.outerRadius;
				return {
					x: Math.round(t * Math.sin((e - this.min) * this.degrees)),
					y: Math.round(-t * Math.cos((e - this.min) * this.degrees))
				}
			},
			getFaceNumberClasses: function(e) {
				return {
					active: e.value === this.displayedValue,
					disabled: this.isDisabled(e.value)
				}
			},
			isInnerRing: function(e) {
				return this.double && e - this.min >= this.countPerRing
			},
			calcHandAngle: function(e) {
				var t = this.degreesPerUnit * (e - this.min);
				return this.isInnerRing(e) && (t -= 360), t
			},
			calcHandScale: function(e) {
				return this.isInnerRing(e) ? this.innerRadius / this.outerRadius : 1
			},
			onMouseDown: function(e) {
				e.preventDefault(), this.isDragging = !0, this.onDragMove(e)
			},
			onMouseUp: function() {
				this.isDragging = !1, this.isDisabled(this.inputValue) || this.$emit("change", this.inputValue)
			},
			onDragMove: function(e) {
				if (e.preventDefault(), this.isDragging || "click" === e.type) {
					var t = this.$refs.clock.getBoundingClientRect(),
						i = t.width,
						n = t.top,
						a = t.left,
						s = "touches" in e ? e.touches[0] : e,
						o = {
							x: i / 2,
							y: -i / 2
						},
						r = {
							x: s.clientX - a,
							y: n - s.clientY
						},
						l = Math.round(this.coordToAngle(o, r) + 360) % 360,
						c = this.double && this.euclidean(o, r) < (this.outerRadius + this.innerRadius) / 2 - 16,
						u = Math.round(l / this.degreesPerUnit) + this.min + (c ? this.countPerRing : 0);
					l >= 360 - this.degreesPerUnit / 2 && (u = c ? this.max : this.min), this.update(u)
				}
			},
			update: function(e) {
				this.inputValue === e || this.isDisabled(e) || (this.prevAngle = this.handRotateAngle, this.inputValue = e, this.$emit("input", e))
			}
		}
	}, void 0, !1, void 0, void 0, void 0);
	var ge = V({
			render: function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "b-clockpicker control",
					class: [e.size, e.type, {
						"is-expanded": e.expanded
					}]
				}, [!e.isMobile || e.inline ? i("b-dropdown", {
					ref: "dropdown",
					attrs: {
						position: e.position,
						disabled: e.disabled,
						inline: e.inline,
						"append-to-body": e.appendToBody,
						"append-to-body-copy-parent": ""
					},
					on: {
						"active-change": e.onActiveChange
					},
					scopedSlots: e._u([e.inline ? null : {
						key: "trigger",
						fn: function() {
							return [e._t("trigger", [i("b-input", e._b({
								ref: "input",
								attrs: {
									slot: "trigger",
									autocomplete: "off",
									value: e.formatValue(e.computedValue),
									placeholder: e.placeholder,
									size: e.size,
									icon: e.icon,
									"icon-pack": e.iconPack,
									loading: e.loading,
									disabled: e.disabled,
									readonly: !e.editable,
									rounded: e.rounded,
									"use-html5-validation": e.useHtml5Validation
								},
								on: {
									focus: e.handleOnFocus,
									blur: function(t) {
										return e.checkHtml5Validity()
									}
								},
								nativeOn: {
									click: function(t) {
										return t.stopPropagation(), e.toggle(!0)
									},
									keyup: function(t) {
										return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.toggle(!0)
									},
									change: function(t) {
										return e.onChange(t.target.value)
									}
								},
								slot: "trigger"
							}, "b-input", e.$attrs, !1))])]
						},
						proxy: !0
					}], null, !0)
				}, [i("div", {
					staticClass: "card",
					attrs: {
						disabled: e.disabled,
						custom: ""
					}
				}, [e.inline ? i("header", {
					staticClass: "card-header"
				}, [i("div", {
					staticClass: "b-clockpicker-header card-header-title"
				}, [i("div", {
					staticClass: "b-clockpicker-time"
				}, [i("span", {
					staticClass: "b-clockpicker-btn",
					class: {
						active: e.isSelectingHour
					},
					on: {
						click: function(t) {
							e.isSelectingHour = !0
						}
					}
				}, [e._v(e._s(e.hoursDisplay))]), i("span", [e._v(e._s(e.hourLiteral))]), i("span", {
					staticClass: "b-clockpicker-btn",
					class: {
						active: !e.isSelectingHour
					},
					on: {
						click: function(t) {
							e.isSelectingHour = !1
						}
					}
				}, [e._v(e._s(e.minutesDisplay))])]), e.isHourFormat24 ? e._e() : i("div", {
					staticClass: "b-clockpicker-period"
				}, [i("div", {
					staticClass: "b-clockpicker-btn",
					class: {
						active: e.meridienSelected === e.amString || e.meridienSelected === e.AM
					},
					on: {
						click: function(t) {
							return e.onMeridienClick(e.amString)
						}
					}
				}, [e._v(e._s(e.amString))]), i("div", {
					staticClass: "b-clockpicker-btn",
					class: {
						active: e.meridienSelected === e.pmString || e.meridienSelected === e.PM
					},
					on: {
						click: function(t) {
							return e.onMeridienClick(e.pmString)
						}
					}
				}, [e._v(e._s(e.pmString))])])])]) : e._e(), i("div", {
					staticClass: "card-content"
				}, [i("div", {
					staticClass: "b-clockpicker-body",
					style: {
						width: e.faceSize + "px",
						height: e.faceSize + "px"
					}
				}, [e.inline ? e._e() : i("div", {
					staticClass: "b-clockpicker-time"
				}, [i("div", {
					staticClass: "b-clockpicker-btn",
					class: {
						active: e.isSelectingHour
					},
					on: {
						click: function(t) {
							e.isSelectingHour = !0
						}
					}
				}, [e._v(e._s(e.hoursLabel))]), i("span", {
					staticClass: "b-clockpicker-btn",
					class: {
						active: !e.isSelectingHour
					},
					on: {
						click: function(t) {
							e.isSelectingHour = !1
						}
					}
				}, [e._v(e._s(e.minutesLabel))])]), e.isHourFormat24 || e.inline ? e._e() : i("div", {
					staticClass: "b-clockpicker-period"
				}, [i("div", {
					staticClass: "b-clockpicker-btn",
					class: {
						active: e.meridienSelected === e.amString || e.meridienSelected === e.AM
					},
					on: {
						click: function(t) {
							return e.onMeridienClick(e.amString)
						}
					}
				}, [e._v(e._s(e.amString))]), i("div", {
					staticClass: "b-clockpicker-btn",
					class: {
						active: e.meridienSelected === e.pmString || e.meridienSelected === e.PM
					},
					on: {
						click: function(t) {
							return e.onMeridienClick(e.pmString)
						}
					}
				}, [e._v(e._s(e.pmString))])]), i("b-clockpicker-face", {
					attrs: {
						"picker-size": e.faceSize,
						min: e.minFaceValue,
						max: e.maxFaceValue,
						"face-numbers": e.isSelectingHour ? e.hours : e.minutes,
						"disabled-values": e.faceDisabledValues,
						double: e.isSelectingHour && e.isHourFormat24,
						value: e.isSelectingHour ? e.hoursSelected : e.minutesSelected
					},
					on: {
						input: e.onClockInput,
						change: e.onClockChange
					}
				})], 1)]), void 0 !== e.$slots.default && e.$slots.default.length ? i("footer", {
					staticClass: "b-clockpicker-footer card-footer"
				}, [e._t("default")], 2) : e._e()])]) : i("b-input", e._b({
					ref: "input",
					attrs: {
						type: "time",
						autocomplete: "off",
						value: e.formatHHMMSS(e.computedValue),
						placeholder: e.placeholder,
						size: e.size,
						icon: e.icon,
						"icon-pack": e.iconPack,
						loading: e.loading,
						max: e.formatHHMMSS(e.maxTime),
						min: e.formatHHMMSS(e.minTime),
						disabled: e.disabled,
						readonly: !1,
						"use-html5-validation": e.useHtml5Validation
					},
					on: {
						focus: e.handleOnFocus,
						blur: function(t) {
							e.onBlur() && e.checkHtml5Validity()
						}
					},
					nativeOn: {
						click: function(t) {
							return t.stopPropagation(), e.toggle(!0)
						},
						keyup: function(t) {
							return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.toggle(!0)
						},
						change: function(t) {
							return e.onChangeNativePicker(t)
						}
					}
				}, "b-input", e.$attrs, !1))], 1)
			},
			staticRenderFns: []
		}, void 0, {
			name: "BClockpicker",
			components: (me = {}, i(me, ve.name, ve), i(me, R.name, R), i(me, pe.name, pe), i(me, O.name, O), i(me, de.name, de), i(me, he.name, he), me),
			mixins: [re],
			props: {
				pickerSize: {
					type: Number,
					default: 290
				},
				incrementMinutes: {
					type: Number,
					default: 5
				},
				autoSwitch: {
					type: Boolean,
					default: !0
				},
				type: {
					type: String,
					default: "is-primary"
				},
				hoursLabel: {
					type: String,
					default: function() {
						return T.defaultClockpickerHoursLabel || "Hours"
					}
				},
				minutesLabel: {
					type: String,
					default: function() {
						return T.defaultClockpickerMinutesLabel || "Min"
					}
				}
			},
			data: function() {
				return {
					isSelectingHour: !0,
					isDragging: !1,
					_isClockpicker: !0
				}
			},
			computed: {
				hoursDisplay: function() {
					if (null == this.hoursSelected) return "--";
					if (this.isHourFormat24) return this.pad(this.hoursSelected);
					var e = this.hoursSelected;
					return this.meridienSelected === this.pmString && (e -= 12), 0 === e && (e = 12), e
				},
				minutesDisplay: function() {
					return null == this.minutesSelected ? "--" : this.pad(this.minutesSelected)
				},
				minFaceValue: function() {
					return this.isSelectingHour && !this.isHourFormat24 && this.meridienSelected === this.pmString ? 12 : 0
				},
				maxFaceValue: function() {
					return this.isSelectingHour ? this.isHourFormat24 || this.meridienSelected !== this.amString ? 23 : 11 : 59
				},
				faceSize: function() {
					return this.pickerSize - 24
				},
				faceDisabledValues: function() {
					return this.isSelectingHour ? this.isHourDisabled : this.isMinuteDisabled
				}
			},
			methods: {
				onClockInput: function(e) {
					this.isSelectingHour ? (this.hoursSelected = e, this.onHoursChange(e)) : (this.minutesSelected = e, this.onMinutesChange(e))
				},
				onClockChange: function(e) {
					this.autoSwitch && this.isSelectingHour && (this.isSelectingHour = !this.isSelectingHour)
				},
				onMeridienClick: function(e) {
					this.meridienSelected !== e && (this.meridienSelected = e, this.onMeridienChange(e))
				}
			}
		}, void 0, !1, void 0, void 0, void 0),
		be = {
			install: function(e) {
				z(e, ge)
			}
		};
	L(be);
	var ye = V({
		render: function() {
			var e = this,
				t = e.$createElement,
				i = e._self._c || t;
			return i("div", {
				staticClass: "control",
				class: {
					"is-expanded": e.expanded, "has-icons-left": e.icon
				}
			}, [i("span", {
				staticClass: "select",
				class: e.spanClasses
			}, [i("select", e._b({
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.computedValue,
					expression: "computedValue"
				}],
				ref: "select",
				attrs: {
					multiple: e.multiple,
					size: e.nativeSize
				},
				on: {
					blur: function(t) {
						e.$emit("blur", t) && e.checkHtml5Validity()
					},
					focus: function(t) {
						return e.$emit("focus", t)
					},
					change: function(t) {
						var i = Array.prototype.filter.call(t.target.options, function(e) {
							return e.selected
						}).map(function(e) {
							return "_value" in e ? e._value : e.value
						});
						e.computedValue = t.target.multiple ? i : i[0]
					}
				}
			}, "select", e.$attrs, !1), [e.placeholder ? [null == e.computedValue ? i("option", {
				attrs: {
					disabled: "",
					hidden: ""
				},
				domProps: {
					value: null
				}
			}, [e._v(" " + e._s(e.placeholder) + " ")]) : e._e()] : e._e(), e._t("default")], 2)]), e.icon ? i("b-icon", {
				staticClass: "is-left",
				attrs: {
					icon: e.icon,
					pack: e.iconPack,
					size: e.iconSize
				}
			}) : e._e()], 1)
		},
		staticRenderFns: []
	}, void 0, {
		name: "BSelect",
		components: i({}, O.name, O),
		mixins: [M],
		inheritAttrs: !1,
		props: {
			value: {
				type: [String, Number, Boolean, Object, Array, Function, Date],
				default: null
			},
			placeholder: String,
			multiple: Boolean,
			nativeSize: [String, Number]
		},
		data: function() {
			return {
				selected: this.value,
				_elementRef: "select"
			}
		},
		computed: {
			computedValue: {
				get: function() {
					return this.selected
				},
				set: function(e) {
					this.selected = e, this.$emit("input", e), !this.isValid && this.checkHtml5Validity()
				}
			},
			spanClasses: function() {
				return [this.size, this.statusType, {
					"is-fullwidth": this.expanded,
					"is-loading": this.loading,
					"is-multiple": this.multiple,
					"is-rounded": this.rounded,
					"is-empty": null === this.selected
				}]
			}
		},
		watch: {
			value: function(e) {
				this.selected = e, !this.isValid && this.checkHtml5Validity()
			}
		}
	}, void 0, !1, void 0, void 0, void 0);
	var we = V({
		render: function() {
			var e = this,
				t = e.$createElement,
				i = e._self._c || t;
			return i("div", {
				staticClass: "datepicker-row"
			}, [e.showWeekNumber ? i("a", {
				staticClass: "datepicker-cell is-week-number",
				class: {
					"is-clickable": e.weekNumberClickable
				},
				on: {
					click: function(t) {
						t.preventDefault(), e.clickWeekNumber(e.getWeekNumber(e.week[6]))
					}
				}
			}, [i("span", [e._v(e._s(e.getWeekNumber(e.week[6])))])]) : e._e(), e._l(e.week, function(t, n) {
				return [e.selectableDate(t) && !e.disabled ? i("a", {
					key: n,
					ref: "day-" + t.getMonth() + "-" + t.getDate(),
					refInFor: !0,
					staticClass: "datepicker-cell",
					class: e.classObject(t),
					attrs: {
						role: "button",
						href: "#",
						disabled: e.disabled,
						tabindex: e.day === t.getDate() && e.month === t.getMonth() ? null : -1
					},
					on: {
						click: function(i) {
							return i.preventDefault(), e.emitChosenDate(t)
						},
						mouseenter: function(i) {
							return e.setRangeHoverEndDate(t)
						},
						keydown: function(i) {
							return e.manageKeydown(i, t)
						}
					}
				}, [i("span", [e._v(e._s(t.getDate()))]), e.eventsDateMatch(t) ? i("div", {
					staticClass: "events"
				}, e._l(e.eventsDateMatch(t), function(e, t) {
					return i("div", {
						key: t,
						staticClass: "event",
						class: e.type
					})
				}), 0) : e._e()]) : i("div", {
					key: n,
					staticClass: "datepicker-cell",
					class: e.classObject(t)
				}, [i("span", [e._v(e._s(t.getDate()))]), e.eventsDateMatch(t) ? i("div", {
					staticClass: "events"
				}, e._l(e.eventsDateMatch(t), function(e, t) {
					return i("div", {
						key: t,
						staticClass: "event",
						class: e.type
					})
				}), 0) : e._e()])]
			})], 2)
		},
		staticRenderFns: []
	}, void 0, {
		name: "BDatepickerTableRow",
		inject: {
			$datepicker: {
				name: "$datepicker",
				default: !1
			}
		},
		props: {
			selectedDate: {
				type: [Date, Array]
			},
			hoveredDateRange: Array,
			day: {
				type: Number
			},
			week: {
				type: Array,
				required: !0
			},
			month: {
				type: Number,
				required: !0
			},
			minDate: Date,
			maxDate: Date,
			disabled: Boolean,
			unselectableDates: [Array, Function],
			unselectableDaysOfWeek: Array,
			selectableDates: [Array, Function],
			events: Array,
			indicators: String,
			dateCreator: Function,
			nearbyMonthDays: Boolean,
			nearbySelectableMonthDays: Boolean,
			showWeekNumber: Boolean,
			weekNumberClickable: Boolean,
			range: Boolean,
			multiple: Boolean,
			rulesForFirstWeek: Number,
			firstDayOfWeek: Number
		},
		watch: {
			day: function(e) {
				var t = this,
					i = "day-".concat(this.month, "-").concat(e);
				this.$nextTick(function() {
					t.$refs[i] && t.$refs[i].length > 0 && t.$refs[i][0] && t.$refs[i][0].focus()
				})
			}
		},
		methods: {
			firstWeekOffset: function(e, t, i) {
				var n = 7 + t - i;
				return -((7 + new Date(e, 0, n).getDay() - t) % 7) + n - 1
			},
			daysInYear: function(e) {
				return this.isLeapYear(e) ? 366 : 365
			},
			isLeapYear: function(e) {
				return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
			},
			getSetDayOfYear: function(e) {
				return Math.round((e - new Date(e.getFullYear(), 0, 1)) / 864e5) + 1
			},
			weeksInYear: function(e, t, i) {
				var n = this.firstWeekOffset(e, t, i),
					a = this.firstWeekOffset(e + 1, t, i);
				return (this.daysInYear(e) - n + a) / 7
			},
			getWeekNumber: function(e) {
				var t, i, n = this.firstDayOfWeek,
					a = this.rulesForFirstWeek,
					s = this.firstWeekOffset(e.getFullYear(), n, a),
					o = Math.floor((this.getSetDayOfYear(e) - s - 1) / 7) + 1;
				return o < 1 ? (i = e.getFullYear() - 1, t = o + this.weeksInYear(i, n, a)) : o > this.weeksInYear(e.getFullYear(), n, a) ? (t = o - this.weeksInYear(e.getFullYear(), n, a), i = e.getFullYear() + 1) : (i = e.getFullYear(), t = o), t
			},
			clickWeekNumber: function(e) {
				this.weekNumberClickable && this.$datepicker.$emit("week-number-click", e)
			},
			selectableDate: function(e) {
				var t = [];
				if (this.minDate && t.push(e >= this.minDate), this.maxDate && t.push(e <= this.maxDate), this.nearbyMonthDays && !this.nearbySelectableMonthDays && t.push(e.getMonth() === this.month), this.selectableDates)
					if ("function" == typeof this.selectableDates) {
						if (this.selectableDates(e)) return !0;
						t.push(!1)
					} else
						for (var i = 0; i < this.selectableDates.length; i++) {
							var n = this.selectableDates[i];
							if (e.getDate() === n.getDate() && e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth()) return !0;
							t.push(!1)
						}
				if (this.unselectableDates)
					if ("function" == typeof this.unselectableDates) t.push(!this.unselectableDates(e));
					else
						for (var a = 0; a < this.unselectableDates.length; a++) {
							var s = this.unselectableDates[a];
							t.push(e.getDate() !== s.getDate() || e.getFullYear() !== s.getFullYear() || e.getMonth() !== s.getMonth())
						}
				if (this.unselectableDaysOfWeek)
					for (var o = 0; o < this.unselectableDaysOfWeek.length; o++) {
						var r = this.unselectableDaysOfWeek[o];
						t.push(e.getDay() !== r)
					}
				return t.indexOf(!1) < 0
			},
			emitChosenDate: function(e) {
				this.disabled || this.selectableDate(e) && this.$emit("select", e)
			},
			eventsDateMatch: function(e) {
				if (!this.events || !this.events.length) return !1;
				for (var t = [], i = 0; i < this.events.length; i++) this.events[i].date.getDay() === e.getDay() && t.push(this.events[i]);
				return !!t.length && t
			},
			classObject: function(e) {
				function t(e, t, i) {
					return !(!e || !t || i) && (Array.isArray(t) ? t.some(function(t) {
						return e.getDate() === t.getDate() && e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()
					}) : e.getDate() === t.getDate() && e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth())
				}

				function n(e, t, i) {
					return !(!Array.isArray(t) || i) && (e > t[0] && e < t[1])
				}
				return i({
					"is-selected": t(e, this.selectedDate) || n(e, this.selectedDate, this.multiple),
					"is-first-selected": t(e, Array.isArray(this.selectedDate) && this.selectedDate[0], this.multiple),
					"is-within-selected": n(e, this.selectedDate, this.multiple),
					"is-last-selected": t(e, Array.isArray(this.selectedDate) && this.selectedDate[1], this.multiple),
					"is-within-hovered-range": this.hoveredDateRange && 2 === this.hoveredDateRange.length && (t(e, this.hoveredDateRange) || n(e, this.hoveredDateRange)),
					"is-first-hovered": t(e, Array.isArray(this.hoveredDateRange) && this.hoveredDateRange[0]),
					"is-within-hovered": n(e, this.hoveredDateRange),
					"is-last-hovered": t(e, Array.isArray(this.hoveredDateRange) && this.hoveredDateRange[1]),
					"is-today": t(e, this.dateCreator()),
					"is-selectable": this.selectableDate(e) && !this.disabled,
					"is-unselectable": !this.selectableDate(e) || this.disabled,
					"is-invisible": !this.nearbyMonthDays && e.getMonth() !== this.month,
					"is-nearby": this.nearbySelectableMonthDays && e.getMonth() !== this.month,
					"has-event": this.eventsDateMatch(e)
				}, this.indicators, this.eventsDateMatch(e))
			},
			setRangeHoverEndDate: function(e) {
				this.range && this.$emit("rangeHoverEndDate", e)
			},
			manageKeydown: function(e, t) {
				var i = !0;
				switch (e.key) {
					case "Tab":
						i = !1;
						break;
					case " ":
					case "Space":
					case "Spacebar":
					case "Enter":
						this.emitChosenDate(t);
						break;
					case "ArrowLeft":
					case "Left":
						this.changeFocus(t, -1);
						break;
					case "ArrowRight":
					case "Right":
						this.changeFocus(t, 1);
						break;
					case "ArrowUp":
					case "Up":
						this.changeFocus(t, -7);
						break;
					case "ArrowDown":
					case "Down":
						this.changeFocus(t, 7)
				}
				i && e.preventDefault()
			},
			changeFocus: function(e, t) {
				var i = new Date(e.getTime());
				for (i.setDate(e.getDate() + t);
					(!this.minDate || i > this.minDate) && (!this.maxDate || i < this.maxDate) && !this.selectableDate(i);) i.setDate(e.getDate() + Math.sign(t));
				this.setRangeHoverEndDate(i), this.$emit("change-focus", i)
			}
		}
	}, void 0, !1, void 0, void 0, void 0);
	var ke = V({
		render: function() {
			var e = this,
				t = e.$createElement,
				i = e._self._c || t;
			return i("section", {
				staticClass: "datepicker-table"
			}, [i("header", {
				staticClass: "datepicker-header"
			}, e._l(e.visibleDayNames, function(t, n) {
				return i("div", {
					key: n,
					staticClass: "datepicker-cell"
				}, [i("span", [e._v(e._s(t))])])
			}), 0), i("div", {
				staticClass: "datepicker-body",
				class: {
					"has-events": e.hasEvents
				}
			}, e._l(e.weeksInThisMonth, function(t, n) {
				return i("b-datepicker-table-row", {
					key: n,
					attrs: {
						"selected-date": e.value,
						day: e.focused.day,
						week: t,
						month: e.focused.month,
						"min-date": e.minDate,
						"max-date": e.maxDate,
						disabled: e.disabled,
						"unselectable-dates": e.unselectableDates,
						"unselectable-days-of-week": e.unselectableDaysOfWeek,
						"selectable-dates": e.selectableDates,
						events: e.eventsInThisWeek(t),
						indicators: e.indicators,
						"date-creator": e.dateCreator,
						"nearby-month-days": e.nearbyMonthDays,
						"nearby-selectable-month-days": e.nearbySelectableMonthDays,
						"show-week-number": e.showWeekNumber,
						"week-number-clickable": e.weekNumberClickable,
						"first-day-of-week": e.firstDayOfWeek,
						"rules-for-first-week": e.rulesForFirstWeek,
						range: e.range,
						"hovered-date-range": e.hoveredDateRange,
						multiple: e.multiple
					},
					on: {
						select: e.updateSelectedDate,
						rangeHoverEndDate: e.setRangeHoverEndDate,
						"change-focus": e.changeFocus
					}
				})
			}), 1)])
		},
		staticRenderFns: []
	}, void 0, {
		name: "BDatepickerTable",
		components: i({}, we.name, we),
		props: {
			value: {
				type: [Date, Array]
			},
			dayNames: Array,
			monthNames: Array,
			firstDayOfWeek: Number,
			events: Array,
			indicators: String,
			minDate: Date,
			maxDate: Date,
			focused: Object,
			disabled: Boolean,
			dateCreator: Function,
			unselectableDates: [Array, Function],
			unselectableDaysOfWeek: Array,
			selectableDates: [Array, Function],
			nearbyMonthDays: Boolean,
			nearbySelectableMonthDays: Boolean,
			showWeekNumber: Boolean,
			weekNumberClickable: Boolean,
			rulesForFirstWeek: Number,
			range: Boolean,
			multiple: Boolean
		},
		data: function() {
			return {
				selectedBeginDate: void 0,
				selectedEndDate: void 0,
				hoveredEndDate: void 0
			}
		},
		computed: {
			multipleSelectedDates: {
				get: function() {
					return this.multiple && this.value ? this.value : []
				},
				set: function(e) {
					this.$emit("input", e)
				}
			},
			visibleDayNames: function() {
				for (var e = [], t = this.firstDayOfWeek; e.length < this.dayNames.length;) {
					var i = this.dayNames[t % this.dayNames.length];
					e.push(i), t++
				}
				return this.showWeekNumber && e.unshift(""), e
			},
			hasEvents: function() {
				return this.events && this.events.length
			},
			eventsInThisMonth: function() {
				if (!this.events) return [];
				for (var e = [], t = 0; t < this.events.length; t++) {
					var i = this.events[t];
					i.hasOwnProperty("date") || (i = {
						date: i
					}), i.hasOwnProperty("type") || (i.type = "is-primary"), i.date.getMonth() === this.focused.month && i.date.getFullYear() === this.focused.year && e.push(i)
				}
				return e
			},
			weeksInThisMonth: function() {
				this.validateFocusedDay();
				for (var e = this.focused.month, t = this.focused.year, i = [], n = 1; i.length < 6;) {
					var a = this.weekBuilder(n, e, t);
					i.push(a), n += 7
				}
				return i
			},
			hoveredDateRange: function() {
				return this.range && isNaN(this.selectedEndDate) ? this.hoveredEndDate < this.selectedBeginDate ? [this.hoveredEndDate, this.selectedBeginDate].filter(B) : [this.selectedBeginDate, this.hoveredEndDate].filter(B) : []
			}
		},
		methods: {
			updateSelectedDate: function(e) {
				this.range || this.multiple ? this.range ? this.handleSelectRangeDate(e) : this.multiple && this.handleSelectMultipleDates(e) : this.$emit("input", e)
			},
			handleSelectRangeDate: function(e) {
				this.selectedBeginDate && this.selectedEndDate ? (this.selectedBeginDate = e, this.selectedEndDate = void 0, this.$emit("range-start", e)) : this.selectedBeginDate && !this.selectedEndDate ? (this.selectedBeginDate > e ? (this.selectedEndDate = this.selectedBeginDate, this.selectedBeginDate = e) : this.selectedEndDate = e, this.$emit("range-end", e), this.$emit("input", [this.selectedBeginDate, this.selectedEndDate])) : (this.selectedBeginDate = e, this.$emit("range-start", e))
			},
			handleSelectMultipleDates: function(e) {
				this.multipleSelectedDates.filter(function(t) {
					return t.getDate() === e.getDate() && t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth()
				}).length ? this.multipleSelectedDates = this.multipleSelectedDates.filter(function(t) {
					return t.getDate() !== e.getDate() || t.getFullYear() !== e.getFullYear() || t.getMonth() !== e.getMonth()
				}) : this.multipleSelectedDates = [].concat(o(this.multipleSelectedDates), [e])
			},
			weekBuilder: function(e, t, i) {
				for (var n = new Date(i, t), a = [], s = new Date(i, t, e).getDay(), o = s >= this.firstDayOfWeek ? s - this.firstDayOfWeek : 7 - this.firstDayOfWeek + s, r = 1, l = 0; l < o; l++) a.unshift(new Date(n.getFullYear(), n.getMonth(), e - r)), r++;
				a.push(new Date(i, t, e));
				for (var c = 1; a.length < 7;) a.push(new Date(i, t, e + c)), c++;
				return a
			},
			validateFocusedDay: function() {
				var e = new Date(this.focused.year, this.focused.month, this.focused.day);
				if (!this.selectableDate(e))
					for (var t = 0, i = new Date(this.focused.year, this.focused.month + 1, 0).getDate(), n = null; !n && ++t < i;) {
						var a = new Date(this.focused.year, this.focused.month, t);
						if (this.selectableDate(a)) {
							n = e;
							var s = {
								day: a.getDate(),
								month: a.getMonth(),
								year: a.getFullYear()
							};
							this.$emit("update:focused", s)
						}
					}
			},
			selectableDate: function(e) {
				var t = [];
				if (this.minDate && t.push(e >= this.minDate), this.maxDate && t.push(e <= this.maxDate), this.nearbyMonthDays && !this.nearbySelectableMonthDays && t.push(e.getMonth() === this.focused.month), this.selectableDates)
					if ("function" == typeof this.selectableDates) {
						if (this.selectableDates(e)) return !0;
						t.push(!1)
					} else
						for (var i = 0; i < this.selectableDates.length; i++) {
							var n = this.selectableDates[i];
							if (e.getDate() === n.getDate() && e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth()) return !0;
							t.push(!1)
						}
				if (this.unselectableDates)
					if ("function" == typeof this.unselectableDates) t.push(!this.unselectableDates(e));
					else
						for (var a = 0; a < this.unselectableDates.length; a++) {
							var s = this.unselectableDates[a];
							t.push(e.getDate() !== s.getDate() || e.getFullYear() !== s.getFullYear() || e.getMonth() !== s.getMonth())
						}
				if (this.unselectableDaysOfWeek)
					for (var o = 0; o < this.unselectableDaysOfWeek.length; o++) {
						var r = this.unselectableDaysOfWeek[o];
						t.push(e.getDay() !== r)
					}
				return t.indexOf(!1) < 0
			},
			eventsInThisWeek: function(e) {
				return this.eventsInThisMonth.filter(function(t) {
					var i = new Date(Date.parse(t.date));
					i.setHours(0, 0, 0, 0);
					var n = i.getTime();
					return e.some(function(e) {
						return e.getTime() === n
					})
				})
			},
			setRangeHoverEndDate: function(e) {
				this.hoveredEndDate = e
			},
			changeFocus: function(e) {
				var t = {
					day: e.getDate(),
					month: e.getMonth(),
					year: e.getFullYear()
				};
				this.$emit("update:focused", t)
			}
		}
	}, void 0, !1, void 0, void 0, void 0);
	var Se, De = V({
		render: function() {
			var e = this,
				t = e.$createElement,
				i = e._self._c || t;
			return i("section", {
				staticClass: "datepicker-table"
			}, [i("div", {
				staticClass: "datepicker-body",
				class: {
					"has-events": e.hasEvents
				}
			}, [i("div", {
				staticClass: "datepicker-months"
			}, [e._l(e.monthDates, function(t, n) {
				return [e.selectableDate(t) && !e.disabled ? i("a", {
					key: n,
					ref: "month-" + t.getMonth(),
					refInFor: !0,
					staticClass: "datepicker-cell",
					class: [e.classObject(t), {
						"has-event": e.eventsDateMatch(t)
					}, e.indicators],
					attrs: {
						role: "button",
						href: "#",
						disabled: e.disabled,
						tabindex: e.focused.month === t.getMonth() ? null : -1
					},
					on: {
						click: function(i) {
							return i.preventDefault(), e.updateSelectedDate(t)
						},
						mouseenter: function(i) {
							return e.setRangeHoverEndDate(t)
						},
						keydown: function(i) {
							return i.preventDefault(), e.manageKeydown(i, t)
						}
					}
				}, [e._v(" " + e._s(e.monthNames[t.getMonth()]) + " "), e.eventsDateMatch(t) ? i("div", {
					staticClass: "events"
				}, e._l(e.eventsDateMatch(t), function(e, t) {
					return i("div", {
						key: t,
						staticClass: "event",
						class: e.type
					})
				}), 0) : e._e()]) : i("div", {
					key: n,
					staticClass: "datepicker-cell",
					class: e.classObject(t)
				}, [e._v(" " + e._s(e.monthNames[t.getMonth()]) + " ")])]
			})], 2)])])
		},
		staticRenderFns: []
	}, void 0, {
		name: "BDatepickerMonth",
		props: {
			value: {
				type: [Date, Array]
			},
			monthNames: Array,
			events: Array,
			indicators: String,
			minDate: Date,
			maxDate: Date,
			focused: Object,
			disabled: Boolean,
			dateCreator: Function,
			unselectableDates: [Array, Function],
			unselectableDaysOfWeek: Array,
			selectableDates: [Array, Function],
			range: Boolean,
			multiple: Boolean
		},
		data: function() {
			return {
				selectedBeginDate: void 0,
				selectedEndDate: void 0,
				hoveredEndDate: void 0,
				multipleSelectedDates: this.multiple && this.value ? this.value : []
			}
		},
		computed: {
			hasEvents: function() {
				return this.events && this.events.length
			},
			eventsInThisYear: function() {
				if (!this.events) return [];
				for (var e = [], t = 0; t < this.events.length; t++) {
					var i = this.events[t];
					i.hasOwnProperty("date") || (i = {
						date: i
					}), i.hasOwnProperty("type") || (i.type = "is-primary"), i.date.getFullYear() === this.focused.year && e.push(i)
				}
				return e
			},
			monthDates: function() {
				for (var e = this.focused.year, t = [], i = 0; i < 12; i++) {
					var n = new Date(e, i, 1);
					n.setHours(0, 0, 0, 0), t.push(n)
				}
				return t
			},
			focusedMonth: function() {
				return this.focused.month
			},
			hoveredDateRange: function() {
				return this.range && isNaN(this.selectedEndDate) ? this.hoveredEndDate < this.selectedBeginDate ? [this.hoveredEndDate, this.selectedBeginDate].filter(B) : [this.selectedBeginDate, this.hoveredEndDate].filter(B) : []
			}
		},
		watch: {
			focusedMonth: function(e) {
				var t = this,
					i = "month-".concat(e);
				this.$refs[i] && this.$refs[i].length > 0 && this.$nextTick(function() {
					t.$refs[i][0] && t.$refs[i][0].focus()
				})
			}
		},
		methods: {
			selectMultipleDates: function(e) {
				this.multipleSelectedDates.filter(function(t) {
					return t.getDate() === e.getDate() && t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth()
				}).length ? this.multipleSelectedDates = this.multipleSelectedDates.filter(function(t) {
					return t.getDate() !== e.getDate() || t.getFullYear() !== e.getFullYear() || t.getMonth() !== e.getMonth()
				}) : this.multipleSelectedDates.push(e), this.$emit("input", this.multipleSelectedDates)
			},
			selectableDate: function(e) {
				var t = [];
				if (this.minDate && t.push(e >= this.minDate), this.maxDate && t.push(e <= this.maxDate), t.push(e.getFullYear() === this.focused.year), this.selectableDates)
					if ("function" == typeof this.selectableDates) {
						if (this.selectableDates(e)) return !0;
						t.push(!1)
					} else
						for (var i = 0; i < this.selectableDates.length; i++) {
							var n = this.selectableDates[i];
							if (e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth()) return !0;
							t.push(!1)
						}
				if (this.unselectableDates)
					if ("function" == typeof this.unselectableDates) t.push(!this.unselectableDates(e));
					else
						for (var a = 0; a < this.unselectableDates.length; a++) {
							var s = this.unselectableDates[a];
							t.push(e.getFullYear() !== s.getFullYear() || e.getMonth() !== s.getMonth())
						}
				if (this.unselectableDaysOfWeek)
					for (var o = 0; o < this.unselectableDaysOfWeek.length; o++) {
						var r = this.unselectableDaysOfWeek[o];
						t.push(e.getDay() !== r)
					}
				return t.indexOf(!1) < 0
			},
			eventsDateMatch: function(e) {
				if (!this.eventsInThisYear.length) return !1;
				for (var t = [], i = 0; i < this.eventsInThisYear.length; i++) this.eventsInThisYear[i].date.getMonth() === e.getMonth() && t.push(this.events[i]);
				return !!t.length && t
			},
			classObject: function(e) {
				function t(e, t, i) {
					return !(!e || !t || i) && (Array.isArray(t) ? t.some(function(t) {
						return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()
					}) : e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth())
				}

				function i(e, t, i) {
					return !(!Array.isArray(t) || i) && (e > t[0] && e < t[1])
				}
				return {
					"is-selected": t(e, this.value, this.multiple) || i(e, this.value, this.multiple) || (n = e, a = this.multipleSelectedDates, s = this.multiple, !(!Array.isArray(a) || !s) && a.some(function(e) {
						return n.getDate() === e.getDate() && n.getFullYear() === e.getFullYear() && n.getMonth() === e.getMonth()
					})),
					"is-first-selected": t(e, Array.isArray(this.value) && this.value[0], this.multiple),
					"is-within-selected": i(e, this.value, this.multiple),
					"is-last-selected": t(e, Array.isArray(this.value) && this.value[1], this.multiple),
					"is-within-hovered-range": this.hoveredDateRange && 2 === this.hoveredDateRange.length && (t(e, this.hoveredDateRange) || i(e, this.hoveredDateRange)),
					"is-first-hovered": t(e, Array.isArray(this.hoveredDateRange) && this.hoveredDateRange[0]),
					"is-within-hovered": i(e, this.hoveredDateRange),
					"is-last-hovered": t(e, Array.isArray(this.hoveredDateRange) && this.hoveredDateRange[1]),
					"is-today": t(e, this.dateCreator()),
					"is-selectable": this.selectableDate(e) && !this.disabled,
					"is-unselectable": !this.selectableDate(e) || this.disabled
				};
				var n, a, s
			},
			manageKeydown: function(e, t) {
				switch (e.key) {
					case " ":
					case "Space":
					case "Spacebar":
					case "Enter":
						this.updateSelectedDate(t);
						break;
					case "ArrowLeft":
					case "Left":
						this.changeFocus(t, -1);
						break;
					case "ArrowRight":
					case "Right":
						this.changeFocus(t, 1);
						break;
					case "ArrowUp":
					case "Up":
						this.changeFocus(t, -3);
						break;
					case "ArrowDown":
					case "Down":
						this.changeFocus(t, 3)
				}
			},
			updateSelectedDate: function(e) {
				this.range || this.multiple ? this.range ? this.handleSelectRangeDate(e) : this.multiple && this.selectMultipleDates(e) : this.emitChosenDate(e)
			},
			emitChosenDate: function(e) {
				this.disabled || (this.multiple ? this.selectMultipleDates(e) : this.selectableDate(e) && this.$emit("input", e))
			},
			handleSelectRangeDate: function(e) {
				this.disabled || (this.selectedBeginDate && this.selectedEndDate ? (this.selectedBeginDate = e, this.selectedEndDate = void 0, this.$emit("range-start", e)) : this.selectedBeginDate && !this.selectedEndDate ? (this.selectedBeginDate > e ? (this.selectedEndDate = this.selectedBeginDate, this.selectedBeginDate = e) : this.selectedEndDate = e, this.$emit("range-end", e), this.$emit("input", [this.selectedBeginDate, this.selectedEndDate])) : (this.selectedBeginDate = e, this.$emit("range-start", e)))
			},
			setRangeHoverEndDate: function(e) {
				this.range && (this.hoveredEndDate = e)
			},
			changeFocus: function(e, t) {
				var i = e;
				i.setMonth(e.getMonth() + t), this.$emit("change-focus", i)
			}
		}
	}, void 0, !1, void 0, void 0, void 0);
	var Ce, xe = V({
			render: function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "datepicker control",
					class: [e.size, {
						"is-expanded": e.expanded
					}]
				}, [!e.isMobile || e.inline ? i("b-dropdown", {
					ref: "dropdown",
					attrs: {
						position: e.position,
						disabled: e.disabled,
						inline: e.inline,
						"mobile-modal": e.mobileModal,
						"trap-focus": e.trapFocus,
						"aria-role": e.ariaRole,
						"aria-modal": !e.inline,
						"append-to-body": e.appendToBody,
						"append-to-body-copy-parent": ""
					},
					on: {
						"active-change": e.onActiveChange
					},
					scopedSlots: e._u([e.inline ? null : {
						key: "trigger",
						fn: function() {
							return [e._t("trigger", [i("b-input", e._b({
								ref: "input",
								attrs: {
									autocomplete: "off",
									value: e.formattedValue,
									placeholder: e.placeholder,
									size: e.size,
									icon: e.icon,
									"icon-right": e.iconRight,
									"icon-right-clickable": e.iconRightClickable,
									"icon-pack": e.iconPack,
									rounded: e.rounded,
									loading: e.loading,
									disabled: e.disabled,
									readonly: !e.editable,
									"use-html5-validation": !1
								},
								on: {
									"icon-right-click": function(t) {
										return e.$emit("icon-right-click")
									},
									focus: e.handleOnFocus
								},
								nativeOn: {
									click: function(t) {
										return e.onInputClick(t)
									},
									keyup: function(t) {
										return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.togglePicker(!0)
									},
									change: function(t) {
										return e.onChange(t.target.value)
									}
								}
							}, "b-input", e.$attrs, !1))])]
						},
						proxy: !0
					}], null, !0)
				}, [i("b-dropdown-item", {
					class: {
						"dropdown-horizonal-timepicker": e.horizontalTimePicker
					},
					attrs: {
						disabled: e.disabled,
						focusable: e.focusable,
						custom: ""
					}
				}, [i("div", [i("header", {
					staticClass: "datepicker-header"
				}, [void 0 !== e.$slots.header && e.$slots.header.length ? [e._t("header")] : i("div", {
					staticClass: "pagination field is-centered",
					class: e.size
				}, [i("a", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: !e.showPrev && !e.disabled,
						expression: "!showPrev && !disabled"
					}],
					staticClass: "pagination-previous",
					attrs: {
						role: "button",
						href: "#",
						disabled: e.disabled,
						"aria-label": e.ariaPreviousLabel
					},
					on: {
						click: function(t) {
							return t.preventDefault(), e.prev(t)
						},
						keydown: [function(t) {
							return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : (t.preventDefault(), e.prev(t))
						}, function(t) {
							return !t.type.indexOf("key") && e._k(t.keyCode, "space", 32, t.key, [" ", "Spacebar"]) ? null : (t.preventDefault(), e.prev(t))
						}]
					}
				}, [i("b-icon", {
					attrs: {
						icon: e.iconPrev,
						pack: e.iconPack,
						both: "",
						type: "is-primary is-clickable"
					}
				})], 1), i("a", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: !e.showNext && !e.disabled,
						expression: "!showNext && !disabled"
					}],
					staticClass: "pagination-next",
					attrs: {
						role: "button",
						href: "#",
						disabled: e.disabled,
						"aria-label": e.ariaNextLabel
					},
					on: {
						click: function(t) {
							return t.preventDefault(), e.next(t)
						},
						keydown: [function(t) {
							return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : (t.preventDefault(), e.next(t))
						}, function(t) {
							return !t.type.indexOf("key") && e._k(t.keyCode, "space", 32, t.key, [" ", "Spacebar"]) ? null : (t.preventDefault(), e.next(t))
						}]
					}
				}, [i("b-icon", {
					attrs: {
						icon: e.iconNext,
						pack: e.iconPack,
						both: "",
						type: "is-primary is-clickable"
					}
				})], 1), i("div", {
					staticClass: "pagination-list"
				}, [i("b-field", [e.isTypeMonth ? e._e() : i("b-select", {
					attrs: {
						disabled: e.disabled,
						size: e.size
					},
					model: {
						value: e.focusedDateData.month,
						callback: function(t) {
							e.$set(e.focusedDateData, "month", t)
						},
						expression: "focusedDateData.month"
					}
				}, e._l(e.listOfMonths, function(t) {
					return i("option", {
						key: t.name,
						attrs: {
							disabled: t.disabled
						},
						domProps: {
							value: t.index
						}
					}, [e._v(" " + e._s(t.name) + " ")])
				}), 0), i("b-select", {
					attrs: {
						disabled: e.disabled,
						size: e.size
					},
					model: {
						value: e.focusedDateData.year,
						callback: function(t) {
							e.$set(e.focusedDateData, "year", t)
						},
						expression: "focusedDateData.year"
					}
				}, e._l(e.listOfYears, function(t) {
					return i("option", {
						key: t,
						domProps: {
							value: t
						}
					}, [e._v(" " + e._s(t) + " ")])
				}), 0)], 1)], 1)])], 2), e.isTypeMonth ? i("div", [i("b-datepicker-month", {
					attrs: {
						"month-names": e.newMonthNames,
						"min-date": e.minDate,
						"max-date": e.maxDate,
						focused: e.focusedDateData,
						disabled: e.disabled,
						"unselectable-dates": e.unselectableDates,
						"unselectable-days-of-week": e.unselectableDaysOfWeek,
						"selectable-dates": e.selectableDates,
						events: e.events,
						indicators: e.indicators,
						"date-creator": e.dateCreator,
						range: e.range,
						multiple: e.multiple
					},
					on: {
						"range-start": function(t) {
							return e.$emit("range-start", t)
						},
						"range-end": function(t) {
							return e.$emit("range-end", t)
						},
						close: function(t) {
							return e.togglePicker(!1)
						},
						"change-focus": e.changeFocus,
						"update:focused": function(t) {
							e.focusedDateData = t
						}
					},
					model: {
						value: e.computedValue,
						callback: function(t) {
							e.computedValue = t
						},
						expression: "computedValue"
					}
				})], 1) : i("div", {
					staticClass: "datepicker-content",
					class: {
						"content-horizonal-timepicker": e.horizontalTimePicker
					}
				}, [i("b-datepicker-table", {
					attrs: {
						"day-names": e.newDayNames,
						"month-names": e.newMonthNames,
						"first-day-of-week": e.firstDayOfWeek,
						"rules-for-first-week": e.rulesForFirstWeek,
						"min-date": e.minDate,
						"max-date": e.maxDate,
						focused: e.focusedDateData,
						disabled: e.disabled,
						"unselectable-dates": e.unselectableDates,
						"unselectable-days-of-week": e.unselectableDaysOfWeek,
						"selectable-dates": e.selectableDates,
						events: e.events,
						indicators: e.indicators,
						"date-creator": e.dateCreator,
						"type-month": e.isTypeMonth,
						"nearby-month-days": e.nearbyMonthDays,
						"nearby-selectable-month-days": e.nearbySelectableMonthDays,
						"show-week-number": e.showWeekNumber,
						"week-number-clickable": e.weekNumberClickable,
						range: e.range,
						multiple: e.multiple
					},
					on: {
						"range-start": function(t) {
							return e.$emit("range-start", t)
						},
						"range-end": function(t) {
							return e.$emit("range-end", t)
						},
						close: function(t) {
							return e.togglePicker(!1)
						},
						"update:focused": function(t) {
							e.focusedDateData = t
						}
					},
					model: {
						value: e.computedValue,
						callback: function(t) {
							e.computedValue = t
						},
						expression: "computedValue"
					}
				})], 1)]), void 0 !== e.$slots.default && e.$slots.default.length ? i("footer", {
					staticClass: "datepicker-footer",
					class: {
						"footer-horizontal-timepicker": e.horizontalTimePicker
					}
				}, [e._t("default")], 2) : e._e()])], 1) : i("b-input", e._b({
					ref: "input",
					attrs: {
						type: e.isTypeMonth ? "month" : "date",
						autocomplete: "off",
						value: e.formatNative(e.computedValue),
						placeholder: e.placeholder,
						size: e.size,
						icon: e.icon,
						"icon-pack": e.iconPack,
						rounded: e.rounded,
						loading: e.loading,
						max: e.formatNative(e.maxDate),
						min: e.formatNative(e.minDate),
						disabled: e.disabled,
						readonly: !1,
						"use-html5-validation": !1
					},
					on: {
						focus: e.onFocus,
						blur: e.onBlur
					},
					nativeOn: {
						change: function(t) {
							return e.onChangeNativePicker(t)
						}
					}
				}, "b-input", e.$attrs, !1))], 1)
			},
			staticRenderFns: []
		}, void 0, {
			name: "BDatepicker",
			components: (Se = {}, i(Se, ke.name, ke), i(Se, De.name, De), i(Se, R.name, R), i(Se, pe.name, pe), i(Se, ye.name, ye), i(Se, O.name, O), i(Se, de.name, de), i(Se, he.name, he), Se),
			mixins: [M],
			inheritAttrs: !1,
			provide: function() {
				return {
					$datepicker: this
				}
			},
			props: {
				value: {
					type: [Date, Array]
				},
				dayNames: {
					type: Array,
					default: function() {
						if (Array.isArray(T.defaultDayNames)) return T.defaultDayNames
					}
				},
				monthNames: {
					type: Array,
					default: function() {
						if (Array.isArray(T.defaultMonthNames)) return T.defaultMonthNames
					}
				},
				firstDayOfWeek: {
					type: Number,
					default: function() {
						return "number" == typeof T.defaultFirstDayOfWeek ? T.defaultFirstDayOfWeek : 0
					}
				},
				inline: Boolean,
				minDate: Date,
				maxDate: Date,
				focusedDate: Date,
				placeholder: String,
				editable: Boolean,
				disabled: Boolean,
				horizontalTimePicker: Boolean,
				unselectableDates: [Array, Function],
				unselectableDaysOfWeek: {
					type: Array,
					default: function() {
						return T.defaultUnselectableDaysOfWeek
					}
				},
				selectableDates: [Array, Function],
				dateFormatter: {
					type: Function,
					default: function(e, t) {
						return "function" == typeof T.defaultDateFormatter ? T.defaultDateFormatter(e) : function(e, t) {
							var i = (Array.isArray(e) ? e : [e]).map(function(e) {
								var i = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 12);
								return t.isTypeMonth ? t.dtfMonth.format(i) : t.dtf.format(i)
							});
							return t.multiple ? i.join(", ") : i.join(" - ")
						}(e, t)
					}
				},
				dateParser: {
					type: Function,
					default: function(e, t) {
						return "function" == typeof T.defaultDateParser ? T.defaultDateParser(e) : function(e, t) {
							if (t.dtf.formatToParts && "function" == typeof t.dtf.formatToParts) {
								var i = x((t.isTypeMonth ? t.dtfMonth : t.dtf).formatToParts(new Date(2e3, 11, 25)).map(function(e) {
									return "literal" === e.type ? e.value : "((?!=<".concat(e.type, ">)\\d+)")
								}).join(""), e);
								if (i.year && 4 === i.year.length && i.month && i.month <= 12) {
									if (t.isTypeMonth) return new Date(i.year, i.month - 1);
									if (i.day && i.day <= 31) return new Date(i.year, i.month - 1, i.day, 12)
								}
							}
							if (!t.isTypeMonth) return new Date(Date.parse(e));
							if (e) {
								var n = e.split("/"),
									a = 4 === n[0].length ? n[0] : n[1],
									s = 2 === n[0].length ? n[0] : n[1];
								if (a && s) return new Date(parseInt(a, 10), parseInt(s - 1, 10), 1, 0, 0, 0, 0)
							}
							return null
						}(e, t)
					}
				},
				dateCreator: {
					type: Function,
					default: function() {
						return "function" == typeof T.defaultDateCreator ? T.defaultDateCreator() : new Date
					}
				},
				mobileNative: {
					type: Boolean,
					default: function() {
						return T.defaultDatepickerMobileNative
					}
				},
				position: String,
				iconRight: String,
				iconRightClickable: Boolean,
				events: Array,
				indicators: {
					type: String,
					default: "dots"
				},
				openOnFocus: Boolean,
				iconPrev: {
					type: String,
					default: function() {
						return T.defaultIconPrev
					}
				},
				iconNext: {
					type: String,
					default: function() {
						return T.defaultIconNext
					}
				},
				yearsRange: {
					type: Array,
					default: function() {
						return T.defaultDatepickerYearsRange
					}
				},
				type: {
					type: String,
					validator: function(e) {
						return ["month"].indexOf(e) >= 0
					}
				},
				nearbyMonthDays: {
					type: Boolean,
					default: function() {
						return T.defaultDatepickerNearbyMonthDays
					}
				},
				nearbySelectableMonthDays: {
					type: Boolean,
					default: function() {
						return T.defaultDatepickerNearbySelectableMonthDays
					}
				},
				showWeekNumber: {
					type: Boolean,
					default: function() {
						return T.defaultDatepickerShowWeekNumber
					}
				},
				weekNumberClickable: {
					type: Boolean,
					default: function() {
						return T.defaultDatepickerWeekNumberClickable
					}
				},
				rulesForFirstWeek: {
					type: Number,
					default: function() {
						return 4
					}
				},
				range: {
					type: Boolean,
					default: !1
				},
				closeOnClick: {
					type: Boolean,
					default: !0
				},
				multiple: {
					type: Boolean,
					default: !1
				},
				mobileModal: {
					type: Boolean,
					default: function() {
						return T.defaultDatepickerMobileModal
					}
				},
				focusable: {
					type: Boolean,
					default: !0
				},
				trapFocus: {
					type: Boolean,
					default: function() {
						return T.defaultTrapFocus
					}
				},
				appendToBody: Boolean,
				ariaNextLabel: String,
				ariaPreviousLabel: String
			},
			data: function() {
				var e = (Array.isArray(this.value) ? this.value[0] : this.value) || this.focusedDate || this.dateCreator();
				return !this.value && this.maxDate && this.maxDate.getFullYear() < e.getFullYear() && e.setFullYear(this.maxDate.getFullYear()), {
					dateSelected: this.value,
					focusedDateData: {
						day: e.getDate(),
						month: e.getMonth(),
						year: e.getFullYear()
					},
					_elementRef: "input",
					_isDatepicker: !0
				}
			},
			computed: {
				computedValue: {
					get: function() {
						return this.dateSelected
					},
					set: function(e) {
						var t = this;
						this.updateInternalState(e), this.multiple || this.togglePicker(!1), this.$emit("input", e), this.useHtml5Validation && this.$nextTick(function() {
							t.checkHtml5Validity()
						})
					}
				},
				formattedValue: function() {
					return this.formatValue(this.computedValue)
				},
				localeOptions: function() {
					return new Intl.DateTimeFormat(this.locale, {
						year: "numeric",
						month: "numeric"
					}).resolvedOptions()
				},
				dtf: function() {
					return new Intl.DateTimeFormat(this.locale, {
						timeZone: "UTC"
					})
				},
				dtfMonth: function() {
					return new Intl.DateTimeFormat(this.locale, {
						year: this.localeOptions.year || "numeric",
						month: this.localeOptions.month || "2-digit",
						timeZone: "UTC"
					})
				},
				newMonthNames: function() {
					return Array.isArray(this.monthNames) ? this.monthNames : D(this.locale)
				},
				newDayNames: function() {
					return Array.isArray(this.dayNames) ? this.dayNames : C(this.locale)
				},
				listOfMonths: function() {
					var e = 0,
						t = 12;
					return this.minDate && this.focusedDateData.year === this.minDate.getFullYear() && (e = this.minDate.getMonth()), this.maxDate && this.focusedDateData.year === this.maxDate.getFullYear() && (t = this.maxDate.getMonth()), this.newMonthNames.map(function(i, n) {
						return {
							name: i,
							index: n,
							disabled: n < e || n > t
						}
					})
				},
				listOfYears: function() {
					var e = this.focusedDateData.year + this.yearsRange[1];
					this.maxDate && this.maxDate.getFullYear() < e && (e = Math.max(this.maxDate.getFullYear(), this.focusedDateData.year));
					var t = this.focusedDateData.year + this.yearsRange[0];
					this.minDate && this.minDate.getFullYear() > t && (t = Math.min(this.minDate.getFullYear(), this.focusedDateData.year));
					for (var i = [], n = t; n <= e; n++) i.push(n);
					return i.reverse()
				},
				showPrev: function() {
					return !!this.minDate && (this.isTypeMonth ? this.focusedDateData.year <= this.minDate.getFullYear() : new Date(this.focusedDateData.year, this.focusedDateData.month) <= new Date(this.minDate.getFullYear(), this.minDate.getMonth()))
				},
				showNext: function() {
					return !!this.maxDate && (this.isTypeMonth ? this.focusedDateData.year >= this.maxDate.getFullYear() : new Date(this.focusedDateData.year, this.focusedDateData.month) >= new Date(this.maxDate.getFullYear(), this.maxDate.getMonth()))
				},
				isMobile: function() {
					return this.mobileNative && v.any()
				},
				isTypeMonth: function() {
					return "month" === this.type
				},
				ariaRole: function() {
					if (!this.inline) return "dialog"
				}
			},
			watch: {
				value: function(e) {
					this.updateInternalState(e), this.multiple || this.togglePicker(!1)
				},
				focusedDate: function(e) {
					e && (this.focusedDateData = {
						day: e.getDate(),
						month: e.getMonth(),
						year: e.getFullYear()
					})
				},
				"focusedDateData.month": function(e) {
					this.$emit("change-month", e)
				},
				"focusedDateData.year": function(e) {
					this.$emit("change-year", e)
				}
			},
			methods: {
				onChange: function(e) {
					var t = this.dateParser(e, this);
					!t || isNaN(t) && (!Array.isArray(t) || 2 !== t.length || isNaN(t[0]) || isNaN(t[1])) ? (this.computedValue = null, this.$refs.input && (this.$refs.input.newValue = this.computedValue)) : this.computedValue = t
				},
				formatValue: function(e) {
					return Array.isArray(e) ? Array.isArray(e) && e.every(function(e) {
						return !isNaN(e)
					}) ? this.dateFormatter(o(e), this) : null : e && !isNaN(e) ? this.dateFormatter(e, this) : null
				},
				prev: function() {
					this.disabled || (this.isTypeMonth ? this.focusedDateData.year -= 1 : this.focusedDateData.month > 0 ? this.focusedDateData.month -= 1 : (this.focusedDateData.month = 11, this.focusedDateData.year -= 1))
				},
				next: function() {
					this.disabled || (this.isTypeMonth ? this.focusedDateData.year += 1 : this.focusedDateData.month < 11 ? this.focusedDateData.month += 1 : (this.focusedDateData.month = 0, this.focusedDateData.year += 1))
				},
				formatNative: function(e) {
					return this.isTypeMonth ? this.formatYYYYMM(e) : this.formatYYYYMMDD(e)
				},
				formatYYYYMMDD: function(e) {
					var t = new Date(e);
					if (e && !isNaN(t)) {
						var i = t.getFullYear(),
							n = t.getMonth() + 1,
							a = t.getDate();
						return i + "-" + (n < 10 ? "0" : "") + n + "-" + (a < 10 ? "0" : "") + a
					}
					return ""
				},
				formatYYYYMM: function(e) {
					var t = new Date(e);
					if (e && !isNaN(t)) {
						var i = t.getFullYear(),
							n = t.getMonth() + 1;
						return i + "-" + (n < 10 ? "0" : "") + n
					}
					return ""
				},
				onChangeNativePicker: function(e) {
					var t = e.target.value,
						i = t ? t.split("-") : [];
					if (3 === i.length) {
						var n = parseInt(i[0], 10),
							a = parseInt(i[1]) - 1,
							s = parseInt(i[2]);
						this.computedValue = new Date(n, a, s)
					} else this.computedValue = null
				},
				updateInternalState: function(e) {
					if (this.dateSelected !== e) {
						var t = Array.isArray(e) ? e.length ? e[e.length - 1] : this.dateCreator() : e || this.dateCreator();
						Array.isArray(e) && this.dateSelected && e.length > this.dateSelected.length && (this.focusedDateData = {
							day: t.getDate(),
							month: t.getMonth(),
							year: t.getFullYear()
						}), this.dateSelected = e
					}
				},
				togglePicker: function(e) {
					if (this.$refs.dropdown) {
						var t = "boolean" == typeof e ? e : !this.$refs.dropdown.isActive;
						t ? this.$refs.dropdown.isActive = t : this.closeOnClick && (this.$refs.dropdown.isActive = t)
					}
				},
				handleOnFocus: function(e) {
					this.onFocus(e), this.openOnFocus && this.togglePicker(!0)
				},
				toggle: function() {
					if (this.mobileNative && this.isMobile) {
						var e = this.$refs.input.$refs.input;
						return e.focus(), void e.click()
					}
					this.$refs.dropdown.toggle()
				},
				onInputClick: function(e) {
					this.$refs.dropdown.isActive && e.stopPropagation()
				},
				keyPress: function(e) {
					var t = e.key;
					this.$refs.dropdown && this.$refs.dropdown.isActive && ("Escape" === t || "Esc" === t) && this.togglePicker(!1)
				},
				onActiveChange: function(e) {
					e || this.onBlur()
				},
				changeFocus: function(e) {
					this.focusedDateData = {
						day: e.getDate(),
						month: e.getMonth(),
						year: e.getFullYear()
					}
				}
			},
			created: function() {
				"undefined" != typeof window && document.addEventListener("keyup", this.keyPress)
			},
			beforeDestroy: function() {
				"undefined" != typeof window && document.removeEventListener("keyup", this.keyPress)
			}
		}, void 0, !1, void 0, void 0, void 0),
		_e = {
			install: function(e) {
				z(e, xe)
			}
		};
	L(_e);
	var $e, Pe = V({
		render: function() {
			var e = this,
				t = e.$createElement,
				i = e._self._c || t;
			return i("div", {
				staticClass: "timepicker control",
				class: [e.size, {
					"is-expanded": e.expanded
				}]
			}, [!e.isMobile || e.inline ? i("b-dropdown", {
				ref: "dropdown",
				attrs: {
					position: e.position,
					disabled: e.disabled,
					inline: e.inline,
					"append-to-body": e.appendToBody,
					"append-to-body-copy-parent": ""
				},
				on: {
					"active-change": e.onActiveChange
				},
				scopedSlots: e._u([e.inline ? null : {
					key: "trigger",
					fn: function() {
						return [e._t("trigger", [i("b-input", e._b({
							ref: "input",
							attrs: {
								autocomplete: "off",
								value: e.formatValue(e.computedValue),
								placeholder: e.placeholder,
								size: e.size,
								icon: e.icon,
								"icon-pack": e.iconPack,
								loading: e.loading,
								disabled: e.disabled,
								readonly: !e.editable,
								rounded: e.rounded,
								"use-html5-validation": e.useHtml5Validation
							},
							on: {
								focus: e.handleOnFocus
							},
							nativeOn: {
								keyup: function(t) {
									return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.toggle(!0)
								},
								change: function(t) {
									return e.onChange(t.target.value)
								}
							}
						}, "b-input", e.$attrs, !1))])]
					},
					proxy: !0
				}], null, !0)
			}, [i("b-dropdown-item", {
				attrs: {
					disabled: e.disabled,
					focusable: e.focusable,
					custom: ""
				}
			}, [i("b-field", {
				attrs: {
					grouped: "",
					position: "is-centered"
				}
			}, [i("b-select", {
				attrs: {
					disabled: e.disabled,
					placeholder: "00"
				},
				nativeOn: {
					change: function(t) {
						return e.onHoursChange(t.target.value)
					}
				},
				model: {
					value: e.hoursSelected,
					callback: function(t) {
						e.hoursSelected = t
					},
					expression: "hoursSelected"
				}
			}, e._l(e.hours, function(t) {
				return i("option", {
					key: t.value,
					attrs: {
						disabled: e.isHourDisabled(t.value)
					},
					domProps: {
						value: t.value
					}
				}, [e._v(" " + e._s(t.label) + " ")])
			}), 0), i("span", {
				staticClass: "control is-colon"
			}, [e._v(e._s(e.hourLiteral))]), i("b-select", {
				attrs: {
					disabled: e.disabled,
					placeholder: "00"
				},
				nativeOn: {
					change: function(t) {
						return e.onMinutesChange(t.target.value)
					}
				},
				model: {
					value: e.minutesSelected,
					callback: function(t) {
						e.minutesSelected = t
					},
					expression: "minutesSelected"
				}
			}, e._l(e.minutes, function(t) {
				return i("option", {
					key: t.value,
					attrs: {
						disabled: e.isMinuteDisabled(t.value)
					},
					domProps: {
						value: t.value
					}
				}, [e._v(" " + e._s(t.label) + " ")])
			}), 0), e.enableSeconds ? [i("span", {
				staticClass: "control is-colon"
			}, [e._v(e._s(e.minuteLiteral))]), i("b-select", {
				attrs: {
					disabled: e.disabled,
					placeholder: "00"
				},
				nativeOn: {
					change: function(t) {
						return e.onSecondsChange(t.target.value)
					}
				},
				model: {
					value: e.secondsSelected,
					callback: function(t) {
						e.secondsSelected = t
					},
					expression: "secondsSelected"
				}
			}, e._l(e.seconds, function(t) {
				return i("option", {
					key: t.value,
					attrs: {
						disabled: e.isSecondDisabled(t.value)
					},
					domProps: {
						value: t.value
					}
				}, [e._v(" " + e._s(t.label) + " ")])
			}), 0), i("span", {
				staticClass: "control is-colon"
			}, [e._v(e._s(e.secondLiteral))])] : e._e(), e.isHourFormat24 ? e._e() : i("b-select", {
				attrs: {
					disabled: e.disabled
				},
				nativeOn: {
					change: function(t) {
						return e.onMeridienChange(t.target.value)
					}
				},
				model: {
					value: e.meridienSelected,
					callback: function(t) {
						e.meridienSelected = t
					},
					expression: "meridienSelected"
				}
			}, e._l(e.meridiens, function(t) {
				return i("option", {
					key: t,
					domProps: {
						value: t
					}
				}, [e._v(" " + e._s(t) + " ")])
			}), 0)], 2), void 0 !== e.$slots.default && e.$slots.default.length ? i("footer", {
				staticClass: "timepicker-footer"
			}, [e._t("default")], 2) : e._e()], 1)], 1) : i("b-input", e._b({
				ref: "input",
				attrs: {
					type: "time",
					step: e.nativeStep,
					autocomplete: "off",
					value: e.formatHHMMSS(e.computedValue),
					placeholder: e.placeholder,
					size: e.size,
					icon: e.icon,
					"icon-pack": e.iconPack,
					rounded: e.rounded,
					loading: e.loading,
					max: e.formatHHMMSS(e.maxTime),
					min: e.formatHHMMSS(e.minTime),
					disabled: e.disabled,
					readonly: !1,
					"use-html5-validation": e.useHtml5Validation
				},
				on: {
					focus: e.handleOnFocus,
					blur: function(t) {
						e.onBlur() && e.checkHtml5Validity()
					}
				},
				nativeOn: {
					change: function(t) {
						return e.onChange(t.target.value)
					}
				}
			}, "b-input", e.$attrs, !1))], 1)
		},
		staticRenderFns: []
	}, void 0, {
		name: "BTimepicker",
		components: (Ce = {}, i(Ce, R.name, R), i(Ce, pe.name, pe), i(Ce, ye.name, ye), i(Ce, O.name, O), i(Ce, de.name, de), i(Ce, he.name, he), Ce),
		mixins: [re],
		inheritAttrs: !1,
		data: function() {
			return {
				_isTimepicker: !0
			}
		},
		computed: {
			nativeStep: function() {
				if (this.enableSeconds) return "1"
			}
		}
	}, void 0, !1, void 0, void 0, void 0);
	var Be = V({
			render: function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return !e.isMobile || e.inline ? i("b-datepicker", e._b({
					ref: "datepicker",
					attrs: {
						rounded: e.rounded,
						"open-on-focus": e.openOnFocus,
						position: e.position,
						loading: e.loading,
						inline: e.inline,
						editable: e.editable,
						expanded: e.expanded,
						"close-on-click": !1,
						"date-formatter": e.defaultDatetimeFormatter,
						"date-parser": e.defaultDatetimeParser,
						"min-date": e.minDate,
						"max-date": e.maxDate,
						icon: e.icon,
						"icon-right": e.iconRight,
						"icon-right-clickable": e.iconRightClickable,
						"icon-pack": e.iconPack,
						size: e.datepickerSize,
						placeholder: e.placeholder,
						"horizontal-time-picker": e.horizontalTimePicker,
						range: !1,
						disabled: e.disabled,
						"mobile-native": e.isMobileNative,
						locale: e.locale,
						focusable: e.focusable,
						"append-to-body": e.appendToBody
					},
					on: {
						focus: e.onFocus,
						blur: e.onBlur,
						"icon-right-click": function(t) {
							return e.$emit("icon-right-click")
						},
						"change-month": function(t) {
							return e.$emit("change-month", t)
						},
						"change-year": function(t) {
							return e.$emit("change-year", t)
						}
					},
					model: {
						value: e.computedValue,
						callback: function(t) {
							e.computedValue = t
						},
						expression: "computedValue"
					}
				}, "b-datepicker", e.datepicker, !1), [i("nav", {
					staticClass: "level is-mobile"
				}, [void 0 !== e.$slots.left ? i("div", {
					staticClass: "level-item has-text-centered"
				}, [e._t("left")], 2) : e._e(), i("div", {
					staticClass: "level-item has-text-centered"
				}, [i("b-timepicker", e._b({
					ref: "timepicker",
					attrs: {
						inline: "",
						editable: e.editable,
						"min-time": e.minTime,
						"max-time": e.maxTime,
						size: e.timepickerSize,
						disabled: e.timepickerDisabled,
						focusable: e.focusable,
						"mobile-native": e.isMobileNative,
						locale: e.locale
					},
					model: {
						value: e.computedValue,
						callback: function(t) {
							e.computedValue = t
						},
						expression: "computedValue"
					}
				}, "b-timepicker", e.timepicker, !1))], 1), void 0 !== e.$slots.right ? i("div", {
					staticClass: "level-item has-text-centered"
				}, [e._t("right")], 2) : e._e()])]) : i("b-input", e._b({
					ref: "input",
					attrs: {
						type: "datetime-local",
						autocomplete: "off",
						value: e.formatNative(e.computedValue),
						placeholder: e.placeholder,
						size: e.size,
						icon: e.icon,
						"icon-pack": e.iconPack,
						rounded: e.rounded,
						loading: e.loading,
						max: e.formatNative(e.maxDate),
						min: e.formatNative(e.minDate),
						disabled: e.disabled,
						readonly: !1,
						"use-html5-validation": e.useHtml5Validation
					},
					on: {
						focus: e.onFocus,
						blur: e.onBlur
					},
					nativeOn: {
						change: function(t) {
							return e.onChangeNativePicker(t)
						}
					}
				}, "b-input", e.$attrs, !1))
			},
			staticRenderFns: []
		}, void 0, {
			name: "BDatetimepicker",
			components: ($e = {}, i($e, xe.name, xe), i($e, Pe.name, Pe), $e),
			mixins: [M],
			inheritAttrs: !1,
			props: {
				value: {
					type: Date
				},
				editable: {
					type: Boolean,
					default: !1
				},
				placeholder: String,
				horizontalTimePicker: Boolean,
				disabled: Boolean,
				icon: String,
				iconRight: String,
				iconRightClickable: Boolean,
				iconPack: String,
				inline: Boolean,
				openOnFocus: Boolean,
				position: String,
				mobileNative: {
					type: Boolean,
					default: !0
				},
				minDatetime: Date,
				maxDatetime: Date,
				datetimeFormatter: {
					type: Function
				},
				datetimeParser: {
					type: Function
				},
				datetimeCreator: {
					type: Function,
					default: function(e) {
						return "function" == typeof T.defaultDatetimeCreator ? T.defaultDatetimeCreator(e) : e
					}
				},
				datepicker: Object,
				timepicker: Object,
				tzOffset: {
					type: Number,
					default: 0
				},
				focusable: {
					type: Boolean,
					default: !0
				},
				appendToBody: Boolean
			},
			data: function() {
				return {
					newValue: this.adjustValue(this.value)
				}
			},
			computed: {
				computedValue: {
					get: function() {
						return this.newValue
					},
					set: function(e) {
						if (e) {
							var t = new Date(e.getTime());
							this.newValue ? e.getDate() === this.newValue.getDate() && e.getMonth() === this.newValue.getMonth() && e.getFullYear() === this.newValue.getFullYear() || 0 !== e.getHours() || 0 !== e.getMinutes() || 0 !== e.getSeconds() || t.setHours(this.newValue.getHours(), this.newValue.getMinutes(), this.newValue.getSeconds(), 0) : t = this.datetimeCreator(e), this.minDatetime && t < this.adjustValue(this.minDatetime) ? t = this.adjustValue(this.minDatetime) : this.maxDatetime && t > this.adjustValue(this.maxDatetime) && (t = this.adjustValue(this.maxDatetime)), this.newValue = new Date(t.getTime())
						} else this.newValue = this.adjustValue(e);
						var i = this.adjustValue(this.newValue, !0);
						this.$emit("input", i)
					}
				},
				localeOptions: function() {
					return new Intl.DateTimeFormat(this.locale, {
						year: "numeric",
						month: "numeric",
						day: "numeric",
						hour: "numeric",
						minute: "numeric",
						second: this.enableSeconds() ? "numeric" : void 0
					}).resolvedOptions()
				},
				dtf: function() {
					return new Intl.DateTimeFormat(this.locale, {
						year: this.localeOptions.year || "numeric",
						month: this.localeOptions.month || "numeric",
						day: this.localeOptions.day || "numeric",
						hour: this.localeOptions.hour || "numeric",
						minute: this.localeOptions.minute || "numeric",
						second: this.enableSeconds() ? this.localeOptions.second || "numeric" : void 0,
						hour12: !this.isHourFormat24()
					})
				},
				isMobileNative: function() {
					return this.mobileNative && 0 === this.tzOffset
				},
				isMobile: function() {
					return this.isMobileNative && v.any()
				},
				minDate: function() {
					if (!this.minDatetime) return this.datepicker ? this.adjustValue(this.datepicker.minDate) : null;
					var e = this.adjustValue(this.minDatetime);
					return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0)
				},
				maxDate: function() {
					if (!this.maxDatetime) return this.datepicker ? this.adjustValue(this.datepicker.maxDate) : null;
					var e = this.adjustValue(this.maxDatetime);
					return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0)
				},
				minTime: function() {
					if (!this.minDatetime || null === this.newValue || void 0 === this.newValue) return this.timepicker ? this.adjustValue(this.timepicker.minTime) : null;
					var e = this.adjustValue(this.minDatetime);
					return e.getFullYear() === this.newValue.getFullYear() && e.getMonth() === this.newValue.getMonth() && e.getDate() === this.newValue.getDate() ? e : void 0
				},
				maxTime: function() {
					if (!this.maxDatetime || null === this.newValue || void 0 === this.newValue) return this.timepicker ? this.adjustValue(this.timepicker.maxTime) : null;
					var e = this.adjustValue(this.maxDatetime);
					return e.getFullYear() === this.newValue.getFullYear() && e.getMonth() === this.newValue.getMonth() && e.getDate() === this.newValue.getDate() ? e : void 0
				},
				datepickerSize: function() {
					return this.datepicker && this.datepicker.size ? this.datepicker.size : this.size
				},
				timepickerSize: function() {
					return this.timepicker && this.timepicker.size ? this.timepicker.size : this.size
				},
				timepickerDisabled: function() {
					return this.timepicker && this.timepicker.disabled ? this.timepicker.disabled : this.disabled
				}
			},
			watch: {
				value: function() {
					this.newValue = this.adjustValue(this.value)
				},
				tzOffset: function() {
					this.newValue = this.adjustValue(this.value)
				}
			},
			methods: {
				enableSeconds: function() {
					return !!this.$refs.timepicker && this.$refs.timepicker.enableSeconds
				},
				isHourFormat24: function() {
					return this.$refs.timepicker ? this.$refs.timepicker.isHourFormat24 : !this.localeOptions.hour12
				},
				adjustValue: function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return e ? t ? new Date(e.getTime() - 6e4 * this.tzOffset) : new Date(e.getTime() + 6e4 * this.tzOffset) : e
				},
				defaultDatetimeParser: function(e) {
					if ("function" == typeof this.datetimeParser) return this.datetimeParser(e);
					if ("function" == typeof T.defaultDatetimeParser) return T.defaultDatetimeParser(e);
					if (this.dtf.formatToParts && "function" == typeof this.dtf.formatToParts) {
						var t = ["AM", "PM", "AM".toLowerCase(), "PM".toLowerCase()];
						this.$refs.timepicker && (t.push(this.$refs.timepicker.amString), t.push(this.$refs.timepicker.pmString));
						var i = this.dtf.formatToParts(new Date),
							n = x(i.map(function(e, n) {
								return "literal" === e.type ? n + 1 < i.length && "hour" === i[n + 1].type ? "[^\\d]+" : e.value.replace(/ /g, "\\s?") : "dayPeriod" === e.type ? "((?!=<".concat(e.type, ">)(").concat(t.join("|"), ")?)") : "((?!=<".concat(e.type, ">)\\d+)")
							}).join(""), e);
						if (n.year && 4 === n.year.length && n.month && n.month <= 12 && n.day && n.day <= 31 && n.hour && n.hour >= 0 && n.hour < 24 && n.minute && n.minute >= 0 && n.minute < 59) return new Date(n.year, n.month - 1, n.day, n.hour, n.minute, n.second || 0)
					}
					return new Date(Date.parse(e))
				},
				defaultDatetimeFormatter: function(e) {
					return "function" == typeof this.datetimeFormatter ? this.datetimeFormatter(e) : "function" == typeof T.defaultDatetimeFormatter ? T.defaultDatetimeFormatter(e) : this.dtf.format(e)
				},
				onChangeNativePicker: function(e) {
					var t = e.target.value,
						i = t ? t.split(/\D/) : [];
					if (i.length >= 5) {
						var n = parseInt(i[0], 10),
							a = parseInt(i[1], 10) - 1,
							s = parseInt(i[2], 10),
							o = parseInt(i[3], 10),
							r = parseInt(i[4], 10);
						this.computedValue = new Date(n, a, s, o, r)
					} else this.computedValue = null
				},
				formatNative: function(e) {
					var t = new Date(e);
					if (e && !isNaN(t)) {
						var i = t.getFullYear(),
							n = t.getMonth() + 1,
							a = t.getDate(),
							s = t.getHours(),
							o = t.getMinutes(),
							r = t.getSeconds();
						return i + "-" + (n < 10 ? "0" : "") + n + "-" + (a < 10 ? "0" : "") + a + "T" + (s < 10 ? "0" : "") + s + ":" + (o < 10 ? "0" : "") + o + ":" + (r < 10 ? "0" : "") + r
					}
					return ""
				},
				toggle: function() {
					this.$refs.datepicker.toggle()
				}
			},
			mounted: function() {
				this.isMobile && !this.inline || this.newValue && this.$refs.datepicker.$forceUpdate()
			}
		}, void 0, !1, void 0, void 0, void 0),
		Te = {
			install: function(e) {
				z(e, Be)
			}
		};
	L(Te);
	var Ae = V({
		render: function() {
			var e = this,
				t = e.$createElement,
				i = e._self._c || t;
			return i("transition", {
				attrs: {
					name: e.animation
				},
				on: {
					"after-enter": e.afterEnter,
					"before-leave": e.beforeLeave,
					"after-leave": e.afterLeave
				}
			}, [e.destroyed ? e._e() : i("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.isActive,
					expression: "isActive"
				}, {
					name: "trap-focus",
					rawName: "v-trap-focus",
					value: e.trapFocus,
					expression: "trapFocus"
				}],
				staticClass: "modal is-active",
				class: [{
					"is-full-screen": e.fullScreen
				}, e.customClass],
				attrs: {
					tabindex: "-1",
					role: e.ariaRole,
					"aria-label": e.ariaLabel,
					"aria-modal": e.ariaModal
				}
			}, [i("div", {
				staticClass: "modal-background",
				on: {
					click: function(t) {
						return e.cancel("outside")
					}
				}
			}), i("div", {
				staticClass: "animation-content",
				class: {
					"modal-content": !e.hasModalCard
				},
				style: e.customStyle
			}, [e.component ? i(e.component, e._g(e._b({
				tag: "component",
				attrs: {
					"can-cancel": e.canCancel
				},
				on: {
					close: e.close
				}
			}, "component", e.props, !1), e.events)) : e.content ? [i("div", {
				domProps: {
					innerHTML: e._s(e.content)
				}
			})] : e._t("default", null, {
				canCancel: e.canCancel,
				close: e.close
			}), e.showX ? i("button", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: !e.animating,
					expression: "!animating"
				}],
				staticClass: "modal-close is-large",
				attrs: {
					type: "button"
				},
				on: {
					click: function(t) {
						return e.cancel("x")
					}
				}
			}) : e._e()], 2)])])
		},
		staticRenderFns: []
	}, void 0, {
		name: "BModal",
		directives: {
			trapFocus: ce
		},
		model: {
			prop: "active",
			event: "update:active"
		},
		props: {
			active: Boolean,
			component: [Object, Function, String],
			content: [String, Array],
			programmatic: Boolean,
			props: Object,
			events: Object,
			width: {
				type: [String, Number],
				default: 960
			},
			hasModalCard: Boolean,
			animation: {
				type: String,
				default: "zoom-out"
			},
			canCancel: {
				type: [Array, Boolean],
				default: function() {
					return T.defaultModalCanCancel
				}
			},
			onCancel: {
				type: Function,
				default: function() {}
			},
			scroll: {
				type: String,
				default: function() {
					return T.defaultModalScroll ? T.defaultModalScroll : "clip"
				},
				validator: function(e) {
					return ["clip", "keep"].indexOf(e) >= 0
				}
			},
			fullScreen: Boolean,
			trapFocus: {
				type: Boolean,
				default: function() {
					return T.defaultTrapFocus
				}
			},
			autoFocus: {
				type: Boolean,
				default: function() {
					return T.defaultAutoFocus
				}
			},
			customClass: String,
			ariaRole: {
				type: String,
				validator: function(e) {
					return ["dialog", "alertdialog"].indexOf(e) >= 0
				}
			},
			ariaModal: Boolean,
			ariaLabel: {
				type: String,
				validator: function(e) {
					return Boolean(e)
				}
			},
			destroyOnHide: {
				type: Boolean,
				default: !0
			}
		},
		data: function() {
			return {
				isActive: this.active || !1,
				savedScrollTop: null,
				newWidth: "number" == typeof this.width ? this.width + "px" : this.width,
				animating: !this.active,
				destroyed: !this.active
			}
		},
		computed: {
			cancelOptions: function() {
				return "boolean" == typeof this.canCancel ? this.canCancel ? T.defaultModalCanCancel : [] : this.canCancel
			},
			showX: function() {
				return this.cancelOptions.indexOf("x") >= 0
			},
			customStyle: function() {
				return this.fullScreen ? null : {
					maxWidth: this.newWidth
				}
			}
		},
		watch: {
			active: function(e) {
				this.isActive = e
			},
			isActive: function(e) {
				var t = this;
				e && (this.destroyed = !1), this.handleScroll(), this.$nextTick(function() {
					e && t.$el && t.$el.focus && t.autoFocus && t.$el.focus()
				})
			}
		},
		methods: {
			handleScroll: function() {
				"undefined" != typeof window && ("clip" !== this.scroll ? (this.savedScrollTop = this.savedScrollTop ? this.savedScrollTop : document.documentElement.scrollTop, this.isActive ? document.body.classList.add("is-noscroll") : document.body.classList.remove("is-noscroll"), this.isActive ? document.body.style.top = "-".concat(this.savedScrollTop, "px") : (document.documentElement.scrollTop = this.savedScrollTop, document.body.style.top = null, this.savedScrollTop = null)) : this.isActive ? document.documentElement.classList.add("is-clipped") : document.documentElement.classList.remove("is-clipped"))
			},
			cancel: function(e) {
				this.cancelOptions.indexOf(e) < 0 || (this.$emit("cancel", arguments), this.onCancel.apply(null, arguments), this.close())
			},
			close: function() {
				var e = this;
				this.$emit("close"), this.$emit("update:active", !1), this.programmatic && (this.isActive = !1, setTimeout(function() {
					e.$destroy(), g(e.$el)
				}, 150))
			},
			keyPress: function(e) {
				var t = e.key;
				!this.isActive || "Escape" !== t && "Esc" !== t || this.cancel("escape")
			},
			afterEnter: function() {
				this.animating = !1, this.$emit("after-enter")
			},
			beforeLeave: function() {
				this.animating = !0
			},
			afterLeave: function() {
				this.destroyOnHide && (this.destroyed = !0), this.$emit("after-leave")
			}
		},
		created: function() {
			"undefined" != typeof window && document.addEventListener("keyup", this.keyPress)
		},
		beforeMount: function() {
			this.programmatic && document.body.appendChild(this.$el)
		},
		mounted: function() {
			this.programmatic ? this.isActive = !0 : this.isActive && this.handleScroll()
		},
		beforeDestroy: function() {
			if ("undefined" != typeof window) {
				document.removeEventListener("keyup", this.keyPress), document.documentElement.classList.remove("is-clipped");
				var e = this.savedScrollTop ? this.savedScrollTop : document.documentElement.scrollTop;
				document.body.classList.remove("is-noscroll"), document.documentElement.scrollTop = e, document.body.style.top = null
			}
		}
	}, void 0, !1, void 0, void 0, void 0);
	var Fe, Me = V({
		render: function() {
			var e = this,
				t = e.$createElement,
				i = e._self._c || t;
			return i("transition", {
				attrs: {
					name: e.animation
				}
			}, [e.isActive ? i("div", {
				directives: [{
					name: "trap-focus",
					rawName: "v-trap-focus",
					value: e.trapFocus,
					expression: "trapFocus"
				}],
				staticClass: "dialog modal is-active",
				class: e.dialogClass,
				attrs: {
					role: e.ariaRole,
					"aria-modal": e.ariaModal
				}
			}, [i("div", {
				staticClass: "modal-background",
				on: {
					click: function(t) {
						return e.cancel("outside")
					}
				}
			}), i("div", {
				staticClass: "modal-card animation-content"
			}, [e.title ? i("header", {
				staticClass: "modal-card-head"
			}, [i("p", {
				staticClass: "modal-card-title"
			}, [e._v(e._s(e.title))])]) : e._e(), i("section", {
				staticClass: "modal-card-body",
				class: {
					"is-titleless": !e.title, "is-flex": e.hasIcon
				}
			}, [i("div", {
				staticClass: "media"
			}, [e.hasIcon && (e.icon || e.iconByType) ? i("div", {
				staticClass: "media-left"
			}, [i("b-icon", {
				attrs: {
					icon: e.icon ? e.icon : e.iconByType,
					pack: e.iconPack,
					type: e.type,
					both: !e.icon,
					size: "is-large"
				}
			})], 1) : e._e(), i("div", {
				staticClass: "media-content"
			}, [i("p", [e.$slots.default ? [e._t("default")] : [i("div", {
				domProps: {
					innerHTML: e._s(e.message)
				}
			})]], 2), e.hasInput ? i("div", {
				staticClass: "field"
			}, [i("div", {
				staticClass: "control"
			}, ["checkbox" === e.inputAttrs.type ? i("input", e._b({
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.prompt,
					expression: "prompt"
				}],
				ref: "input",
				staticClass: "input",
				class: {
					"is-danger": e.validationMessage
				},
				attrs: {
					type: "checkbox"
				},
				domProps: {
					checked: Array.isArray(e.prompt) ? e._i(e.prompt, null) > -1 : e.prompt
				},
				on: {
					compositionstart: function(t) {
						e.isCompositing = !0
					},
					compositionend: function(t) {
						e.isCompositing = !1
					},
					keydown: function(t) {
						return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.confirm(t)
					},
					change: function(t) {
						var i = e.prompt,
							n = t.target,
							a = !!n.checked;
						if (Array.isArray(i)) {
							var s = e._i(i, null);
							n.checked ? s < 0 && (e.prompt = i.concat([null])) : s > -1 && (e.prompt = i.slice(0, s).concat(i.slice(s + 1)))
						} else e.prompt = a
					}
				}
			}, "input", e.inputAttrs, !1)) : "radio" === e.inputAttrs.type ? i("input", e._b({
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.prompt,
					expression: "prompt"
				}],
				ref: "input",
				staticClass: "input",
				class: {
					"is-danger": e.validationMessage
				},
				attrs: {
					type: "radio"
				},
				domProps: {
					checked: e._q(e.prompt, null)
				},
				on: {
					compositionstart: function(t) {
						e.isCompositing = !0
					},
					compositionend: function(t) {
						e.isCompositing = !1
					},
					keydown: function(t) {
						return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.confirm(t)
					},
					change: function(t) {
						e.prompt = null
					}
				}
			}, "input", e.inputAttrs, !1)) : i("input", e._b({
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.prompt,
					expression: "prompt"
				}],
				ref: "input",
				staticClass: "input",
				class: {
					"is-danger": e.validationMessage
				},
				attrs: {
					type: e.inputAttrs.type
				},
				domProps: {
					value: e.prompt
				},
				on: {
					compositionstart: function(t) {
						e.isCompositing = !0
					},
					compositionend: function(t) {
						e.isCompositing = !1
					},
					keydown: function(t) {
						return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.confirm(t)
					},
					input: function(t) {
						t.target.composing || (e.prompt = t.target.value)
					}
				}
			}, "input", e.inputAttrs, !1))]), i("p", {
				staticClass: "help is-danger"
			}, [e._v(e._s(e.validationMessage))])]) : e._e()])])]), i("footer", {
				staticClass: "modal-card-foot"
			}, [e.showCancel ? i("button", {
				ref: "cancelButton",
				staticClass: "button",
				on: {
					click: function(t) {
						return e.cancel("button")
					}
				}
			}, [e._v(e._s(e.cancelText))]) : e._e(), i("button", {
				ref: "confirmButton",
				staticClass: "button",
				class: e.type,
				on: {
					click: e.confirm
				}
			}, [e._v(e._s(e.confirmText))])])])]) : e._e()])
		},
		staticRenderFns: []
	}, void 0, {
		name: "BDialog",
		components: i({}, O.name, O),
		directives: {
			trapFocus: ce
		},
		extends: Ae,
		props: {
			title: String,
			message: [String, Array],
			icon: String,
			iconPack: String,
			hasIcon: Boolean,
			type: {
				type: String,
				default: "is-primary"
			},
			size: String,
			confirmText: {
				type: String,
				default: function() {
					return T.defaultDialogConfirmText ? T.defaultDialogConfirmText : "OK"
				}
			},
			cancelText: {
				type: String,
				default: function() {
					return T.defaultDialogCancelText ? T.defaultDialogCancelText : "Cancel"
				}
			},
			hasInput: Boolean,
			inputAttrs: {
				type: Object,
				default: function() {
					return {}
				}
			},
			onConfirm: {
				type: Function,
				default: function() {}
			},
			closeOnConfirm: {
				type: Boolean,
				default: !0
			},
			container: {
				type: String,
				default: function() {
					return T.defaultContainerElement
				}
			},
			focusOn: {
				type: String,
				default: "confirm"
			},
			trapFocus: {
				type: Boolean,
				default: function() {
					return T.defaultTrapFocus
				}
			},
			ariaRole: {
				type: String,
				validator: function(e) {
					return ["dialog", "alertdialog"].indexOf(e) >= 0
				}
			},
			ariaModal: Boolean
		},
		data: function() {
			return {
				prompt: this.hasInput && this.inputAttrs.value || "",
				isActive: !1,
				validationMessage: "",
				isCompositing: !1
			}
		},
		computed: {
			dialogClass: function() {
				return [this.size, {
					"has-custom-container": null !== this.container
				}]
			},
			iconByType: function() {
				switch (this.type) {
					case "is-info":
						return "information";
					case "is-success":
						return "check-circle";
					case "is-warning":
						return "alert";
					case "is-danger":
						return "alert-circle";
					default:
						return null
				}
			},
			showCancel: function() {
				return this.cancelOptions.indexOf("button") >= 0
			}
		},
		methods: {
			confirm: function() {
				var e = this;
				if (void 0 !== this.$refs.input) {
					if (this.isCompositing) return;
					if (!this.$refs.input.checkValidity()) return this.validationMessage = this.$refs.input.validationMessage, void this.$nextTick(function() {
						return e.$refs.input.select()
					})
				}
				this.$emit("confirm", this.prompt), this.onConfirm(this.prompt, this), this.closeOnConfirm && this.close()
			},
			close: function() {
				var e = this;
				this.isActive = !1, setTimeout(function() {
					e.$destroy(), g(e.$el)
				}, 150)
			}
		},
		beforeMount: function() {
			var e = this;
			"undefined" != typeof window && this.$nextTick(function() {
				(document.querySelector(e.container) || document.body).appendChild(e.$el)
			})
		},
		mounted: function() {
			var e = this;
			this.isActive = !0, void 0 === this.inputAttrs.required && this.$set(this.inputAttrs, "required", !0), this.$nextTick(function() {
				e.hasInput ? e.$refs.input.focus() : "cancel" === e.focusOn && e.showCancel ? e.$refs.cancelButton.focus() : e.$refs.confirmButton.focus()
			})
		}
	}, void 0, !1, void 0, void 0, void 0);

	function Ie(e) {
		var t;
		Array.isArray(e.message) && (t = e.message, delete e.message);
		var i = new(("undefined" != typeof window && window.Vue ? window.Vue : Fe || P).extend(Me))({
			el: document.createElement("div"),
			propsData: e
		});
		return t && (i.$slots.default = t, i.$forceUpdate()), T.defaultProgrammaticPromise ? new Promise(function(e) {
			i.$on("confirm", function(t) {
				return e({
					result: t || !0,
					dialog: i
				})
			}), i.$on("cancel", function() {
				return e({
					result: !1,
					dialog: i
				})
			})
		}) : i
	}
	var Ne = {
			alert: function(e) {
				"string" == typeof e && (e = {
					message: e
				});
				return Ie(m({
					canCancel: !1
				}, e))
			},
			confirm: function(e) {
				return Ie(m({}, e))
			},
			prompt: function(e) {
				return Ie(m({
					hasInput: !0
				}, e))
			}
		},
		Ve = {
			install: function(e) {
				Fe = e, z(e, Me), H(e, "dialog", Ne)
			}
		};
	L(Ve);
	var Oe = {
		install: function(e) {
			z(e, de), z(e, he)
		}
	};
	L(Oe);
	var Re = {
		install: function(e) {
			z(e, pe)
		}
	};
	L(Re);
	var Ee = {
		install: function(e) {
			z(e, O)
		}
	};
	L(Ee);
	var Le = V({
			render: function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("figure", {
					staticClass: "b-image-wrapper",
					class: e.figureClasses,
					style: e.figureStyles
				}, [e.isCaptionFirst ? i("figcaption", [e._t("caption")], 2) : e._e(), i("transition", {
					attrs: {
						name: "fade"
					}
				}, [e.isDisplayed ? i("img", {
					class: e.imgClasses,
					attrs: {
						srcset: e.computedSrcset,
						src: e.computedSrc,
						alt: e.alt,
						width: e.computedWidth,
						sizes: e.computedSizes,
						loading: e.computedNativeLazy
					},
					on: {
						load: e.onLoad,
						error: e.onError
					}
				}) : e._e()]), i("transition", {
					attrs: {
						name: "fade"
					}
				}, [e.isPlaceholderDisplayed ? e._t("placeholder", [i("img", {
					staticClass: "placeholder",
					class: e.imgClasses,
					attrs: {
						src: e.computedPlaceholder,
						alt: e.alt
					}
				})]) : e._e()], 2), e.isCaptionLast ? i("figcaption", [e._t("caption")], 2) : e._e()], 1)
			},
			staticRenderFns: []
		}, void 0, {
			name: "BImage",
			props: {
				src: String,
				alt: String,
				srcFallback: String,
				webpFallback: {
					type: String,
					default: function() {
						return T.defaultImageWebpFallback
					}
				},
				lazy: {
					type: Boolean,
					default: function() {
						return T.defaultImageLazy
					}
				},
				responsive: {
					type: Boolean,
					default: function() {
						return T.defaultImageResponsive
					}
				},
				ratio: {
					type: String,
					default: function() {
						return T.defaultImageRatio
					}
				},
				placeholder: String,
				srcset: String,
				srcsetSizes: Array,
				srcsetFormatter: {
					type: Function,
					default: function(e, t, i) {
						return "function" == typeof T.defaultImageSrcsetFormatter ? T.defaultImageSrcsetFormatter(e, t) : i.formatSrcset(e, t)
					}
				},
				rounded: {
					type: Boolean,
					default: !1
				},
				captionFirst: {
					type: Boolean,
					default: !1
				}
			},
			data: function() {
				return {
					clientWidth: 0,
					webpSupportVerified: !1,
					webpSupported: !1,
					useNativeLazy: !1,
					observer: null,
					inViewPort: !1,
					bulmaKnownRatio: ["square", "1by1", "5by4", "4by3", "3by2", "5by3", "16by9", "b2y1", "3by1", "4by5", "3by4", "2by3", "3by5", "9by16", "1by2", "1by3"],
					loaded: !1,
					failed: !1
				}
			},
			computed: {
				ratioPattern: function() {
					return new RegExp(/([0-9]+)by([0-9]+)/)
				},
				hasRatio: function() {
					return this.ratio && this.ratioPattern.test(this.ratio)
				},
				figureClasses: function() {
					var e = {
						image: this.responsive
					};
					return this.hasRatio && this.bulmaKnownRatio.indexOf(this.ratio) >= 0 && (e["is-".concat(this.ratio)] = !0), e
				},
				figureStyles: function() {
					if (this.hasRatio && this.bulmaKnownRatio.indexOf(this.ratio) < 0) {
						var e = this.ratioPattern.exec(this.ratio);
						return {
							paddingTop: "".concat(e[2] / e[1] * 100, "%")
						}
					}
				},
				imgClasses: function() {
					return {
						"is-rounded": this.rounded,
						"has-ratio": this.hasRatio
					}
				},
				srcExt: function() {
					return this.getExt(this.src)
				},
				isWepb: function() {
					return "webp" === this.srcExt
				},
				computedSrc: function() {
					var e = this.src;
					return this.failed && this.srcFallback && (e = this.srcFallback), !this.webpSupported && this.isWepb && this.webpFallback ? this.webpFallback.startsWith(".") ? e.replace(/\.webp/gi, "".concat(this.webpFallback)) : this.webpFallback : e
				},
				computedWidth: function() {
					if (this.responsive && this.clientWidth > 0) return this.clientWidth
				},
				computedNativeLazy: function() {
					if (this.lazy && this.useNativeLazy) return "lazy"
				},
				isDisplayed: function() {
					return (this.webpSupportVerified || !this.isWepb) && (!this.lazy || this.useNativeLazy || this.inViewPort)
				},
				placeholderExt: function() {
					if (this.placeholder) return this.getExt(this.placeholder)
				},
				isPlaceholderWepb: function() {
					if (this.placeholder) return "webp" === this.placeholderExt
				},
				computedPlaceholder: function() {
					return !this.webpSupported && this.isPlaceholderWepb && this.webpFallback && this.webpFallback.startsWith(".") ? this.placeholder.replace(/\.webp/gi, "".concat(this.webpFallback)) : this.placeholder
				},
				isPlaceholderDisplayed: function() {
					return !this.loaded && (this.$slots.placeholder || this.placeholder && (this.webpSupportVerified || !this.isPlaceholderWepb))
				},
				computedSrcset: function() {
					var e = this;
					return this.srcset ? !this.webpSupported && this.isWepb && this.webpFallback && this.webpFallback.startsWith(".") ? this.srcset.replace(/\.webp/gi, "".concat(this.webpFallback)) : this.srcset : this.srcsetSizes && Array.isArray(this.srcsetSizes) && this.srcsetSizes.length > 0 ? this.srcsetSizes.map(function(t) {
						return "".concat(e.srcsetFormatter(e.computedSrc, t, e), " ").concat(t, "w")
					}).join(",") : void 0
				},
				computedSizes: function() {
					if (this.computedSrcset && this.computedWidth) return "".concat(this.computedWidth, "px")
				},
				isCaptionFirst: function() {
					return this.$slots.caption && this.captionFirst
				},
				isCaptionLast: function() {
					return this.$slots.caption && !this.captionFirst
				}
			},
			methods: {
				getExt: function(e) {
					var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
					return e ? (t ? e.split("?")[0] : e).split(".").pop() : ""
				},
				setWidth: function() {
					this.clientWidth = this.$el.clientWidth
				},
				formatSrcset: function(e, t) {
					var i = this.getExt(e, !1),
						n = e.split(".").slice(0, -1).join(".");
					return "".concat(n, "-").concat(t, ".").concat(i)
				},
				onLoad: function(e) {
					this.loaded = !0, this.emit("load", e)
				},
				onError: function(e) {
					this.emit("error", e), this.failed || (this.failed = !0)
				},
				emit: function(e, t) {
					var i = t.target;
					this.$emit(e, t, i.currentSrc || i.src || this.computedSrc)
				}
			},
			created: function() {
				var e = this;
				if (this.isWepb && _().then(function(t) {
						e.webpSupportVerified = !0, e.webpSupported = t
					}), this.lazy) {
					var t = "undefined" != typeof window && "HTMLImageElement" in window && "loading" in HTMLImageElement.prototype,
						i = "undefined" != typeof window && "IntersectionObserver" in window;
					!t && i ? this.observer = new IntersectionObserver(function(t) {
						var i = t[0],
							n = i.target;
						i.isIntersecting && !e.inViewPort && (e.inViewPort = !0, e.observer.unobserve(n))
					}) : this.useNativeLazy = !0
				}
			},
			mounted: function() {
				this.lazy && this.observer && this.observer.observe(this.$el), this.setWidth(), "undefined" != typeof window && window.addEventListener("resize", this.setWidth)
			},
			beforeDestroy: function() {
				this.observer && this.observer.disconnect(), "undefined" != typeof window && window.removeEventListener("resize", this.setWidth)
			}
		}, void 0, !1, void 0, void 0, void 0),
		ze = {
			install: function(e) {
				z(e, Le)
			}
		};
	L(ze);
	var He = {
		install: function(e) {
			z(e, R)
		}
	};
	L(He);
	var We = "undefined" == typeof window,
		je = We ? Object : window.HTMLElement,
		Ye = We ? Object : window.File;
	var Ke, qe = V({
			render: function() {
				var e = this.$createElement,
					t = this._self._c || e;
				return t("transition", {
					attrs: {
						name: this.animation
					}
				}, [this.isActive ? t("div", {
					staticClass: "loading-overlay is-active",
					class: {
						"is-full-page": this.displayInFullPage
					}
				}, [t("div", {
					staticClass: "loading-background",
					on: {
						click: this.cancel
					}
				}), this._t("default", [t("div", {
					staticClass: "loading-icon"
				})])], 2) : this._e()])
			},
			staticRenderFns: []
		}, void 0, {
			name: "BLoading",
			model: {
				prop: "active",
				event: "update:active"
			},
			props: {
				active: Boolean,
				programmatic: Boolean,
				container: [Object, Function, je],
				isFullPage: {
					type: Boolean,
					default: !0
				},
				animation: {
					type: String,
					default: "fade"
				},
				canCancel: {
					type: Boolean,
					default: !1
				},
				onCancel: {
					type: Function,
					default: function() {}
				}
			},
			data: function() {
				return {
					isActive: this.active || !1,
					displayInFullPage: this.isFullPage
				}
			},
			watch: {
				active: function(e) {
					this.isActive = e
				},
				isFullPage: function(e) {
					this.displayInFullPage = e
				}
			},
			methods: {
				cancel: function() {
					this.canCancel && this.isActive && this.close()
				},
				close: function() {
					var e = this;
					this.onCancel.apply(null, arguments), this.$emit("close"), this.$emit("update:active", !1), this.programmatic && (this.isActive = !1, setTimeout(function() {
						e.$destroy(), g(e.$el)
					}, 150))
				},
				keyPress: function(e) {
					var t = e.key;
					"Escape" !== t && "Esc" !== t || this.cancel()
				}
			},
			created: function() {
				"undefined" != typeof window && document.addEventListener("keyup", this.keyPress)
			},
			beforeMount: function() {
				this.programmatic && (this.container ? (this.displayInFullPage = !1, this.$emit("update:is-full-page", !1), this.container.appendChild(this.$el)) : document.body.appendChild(this.$el))
			},
			mounted: function() {
				this.programmatic && (this.isActive = !0)
			},
			beforeDestroy: function() {
				"undefined" != typeof window && document.removeEventListener("keyup", this.keyPress)
			}
		}, void 0, !1, void 0, void 0, void 0),
		Ue = {
			open: function(e) {
				var t = m({
					programmatic: !0
				}, e);
				return new(("undefined" != typeof window && window.Vue ? window.Vue : Ke || P).extend(qe))({
					el: document.createElement("div"),
					propsData: t
				})
			}
		},
		Xe = {
			install: function(e) {
				Ke = e, z(e, qe), H(e, "loading", Ue)
			}
		};
	L(Xe);
	var Qe = V({
		render: function() {
			var e = this.$createElement;
			return (this._self._c || e)("div", {
				staticClass: "menu"
			}, [this._t("default")], 2)
		},
		staticRenderFns: []
	}, void 0, {
		name: "BMenu",
		props: {
			accordion: {
				type: Boolean,
				default: !0
			},
			activable: {
				type: Boolean,
				default: !0
			}
		},
		data: function() {
			return {
				_isMenu: !0
			}
		}
	}, void 0, !1, void 0, void 0, void 0);
	var Ge = V({}, void 0, {
		name: "BMenuList",
		functional: !0,
		props: {
			label: String,
			icon: String,
			iconPack: String,
			ariaRole: {
				type: String,
				default: ""
			},
			size: {
				type: String,
				default: "is-small"
			}
		},
		render: function(e, t) {
			var i = null,
				n = t.slots();
			(t.props.label || n.label) && (i = e("p", {
				attrs: {
					class: "menu-label"
				}
			}, t.props.label ? t.props.icon ? [e("b-icon", {
				props: {
					icon: t.props.icon,
					pack: t.props.iconPack,
					size: t.props.size
				}
			}), e("span", {}, t.props.label)] : t.props.label : n.label));
			var a = e("ul", {
				attrs: {
					class: "menu-list",
					role: "menu" === t.props.ariaRole ? t.props.ariaRole : null
				}
			}, n.default);
			return i ? [i, a] : a
		}
	}, void 0, void 0, void 0, void 0, void 0);
	var Ze = V({
			render: function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("li", {
					attrs: {
						role: e.ariaRoleMenu
					}
				}, [i(e.tag, e._g(e._b({
					tag: "component",
					class: {
						"is-active": e.newActive, "is-expanded": e.newExpanded, "is-disabled": e.disabled, "icon-text": e.icon
					},
					on: {
						click: function(t) {
							return e.onClick(t)
						}
					}
				}, "component", e.$attrs, !1), e.$listeners), [e.icon ? i("b-icon", {
					attrs: {
						icon: e.icon,
						pack: e.iconPack,
						size: e.size
					}
				}) : e._e(), e.label ? i("span", [e._v(" " + e._s(e.label) + " ")]) : e._t("label", null, {
					expanded: e.newExpanded,
					active: e.newActive
				})], 2), e.$slots.default ? [i("transition", {
					attrs: {
						name: e.animation
					}
				}, [i("ul", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.newExpanded,
						expression: "newExpanded"
					}]
				}, [e._t("default")], 2)])] : e._e()], 2)
			},
			staticRenderFns: []
		}, void 0, {
			name: "BMenuItem",
			components: i({}, O.name, O),
			inheritAttrs: !1,
			model: {
				prop: "active",
				event: "update:active"
			},
			props: {
				label: String,
				active: Boolean,
				expanded: Boolean,
				disabled: Boolean,
				iconPack: String,
				icon: String,
				animation: {
					type: String,
					default: "slide"
				},
				tag: {
					type: String,
					default: "a",
					validator: function(e) {
						return T.defaultLinkTags.indexOf(e) >= 0
					}
				},
				ariaRole: {
					type: String,
					default: ""
				},
				size: {
					type: String,
					default: "is-small"
				}
			},
			data: function() {
				return {
					newActive: this.active,
					newExpanded: this.expanded
				}
			},
			computed: {
				ariaRoleMenu: function() {
					return "menuitem" === this.ariaRole ? this.ariaRole : null
				}
			},
			watch: {
				active: function(e) {
					this.newActive = e
				},
				expanded: function(e) {
					this.newExpanded = e
				}
			},
			methods: {
				onClick: function(e) {
					if (!this.disabled) {
						var t = this.getMenu();
						this.reset(this.$parent, t), this.newExpanded = !this.newExpanded, this.$emit("update:expanded", this.newExpanded), t && t.activable && (this.newActive = !0, this.$emit("update:active", this.newActive))
					}
				},
				reset: function(e, t) {
					var i = this;
					e.$children.filter(function(e) {
						return e.name === i.name
					}).forEach(function(n) {
						n !== i && (i.reset(n, t), (!e.$data._isMenu || e.$data._isMenu && e.accordion) && (n.newExpanded = !1, n.$emit("update:expanded", n.newActive)), t && t.activable && (n.newActive = !1, n.$emit("update:active", n.newActive)))
					})
				},
				getMenu: function() {
					for (var e = this.$parent; e && !e.$data._isMenu;) e = e.$parent;
					return e
				}
			}
		}, void 0, !1, void 0, void 0, void 0),
		Je = {
			install: function(e) {
				z(e, Qe), z(e, Ge), z(e, Ze)
			}
		};
	L(Je);
	var et = {
		components: i({}, O.name, O),
		model: {
			prop: "active",
			event: "update:active"
		},
		props: {
			active: {
				type: Boolean,
				default: !0
			},
			title: String,
			closable: {
				type: Boolean,
				default: !0
			},
			message: String,
			type: String,
			hasIcon: Boolean,
			size: String,
			icon: String,
			iconPack: String,
			iconSize: String,
			autoClose: {
				type: Boolean,
				default: !1
			},
			duration: {
				type: Number,
				default: 2e3
			}
		},
		data: function() {
			return {
				isActive: this.active
			}
		},
		watch: {
			active: function(e) {
				this.isActive = e
			},
			isActive: function(e) {
				e ? this.setAutoClose() : this.timer && clearTimeout(this.timer)
			}
		},
		computed: {
			computedIcon: function() {
				if (this.icon) return this.icon;
				switch (this.type) {
					case "is-info":
						return "information";
					case "is-success":
						return "check-circle";
					case "is-warning":
						return "alert";
					case "is-danger":
						return "alert-circle";
					default:
						return null
				}
			}
		},
		methods: {
			close: function() {
				this.isActive = !1, this.$emit("close"), this.$emit("update:active", !1)
			},
			click: function() {
				this.$emit("click")
			},
			setAutoClose: function() {
				var e = this;
				this.autoClose && (this.timer = setTimeout(function() {
					e.isActive && e.close()
				}, this.duration))
			}
		},
		mounted: function() {
			this.setAutoClose()
		}
	};
	var tt, it = V({
			render: function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("transition", {
					attrs: {
						name: "fade"
					}
				}, [e.isActive ? i("article", {
					staticClass: "message",
					class: [e.type, e.size]
				}, [e.$slots.header || e.title ? i("header", {
					staticClass: "message-header"
				}, [e.$slots.header ? i("div", [e._t("header")], 2) : e.title ? i("p", [e._v(e._s(e.title))]) : e._e(), e.closable ? i("button", {
					staticClass: "delete",
					attrs: {
						type: "button",
						"aria-label": e.ariaCloseLabel
					},
					on: {
						click: e.close
					}
				}) : e._e()]) : e._e(), e.$slots.default ? i("section", {
					staticClass: "message-body"
				}, [i("div", {
					staticClass: "media"
				}, [e.computedIcon && e.hasIcon ? i("div", {
					staticClass: "media-left"
				}, [i("b-icon", {
					class: e.type,
					attrs: {
						icon: e.computedIcon,
						pack: e.iconPack,
						both: "",
						size: e.newIconSize
					}
				})], 1) : e._e(), i("div", {
					staticClass: "media-content"
				}, [e._t("default")], 2)])]) : e._e()]) : e._e()])
			},
			staticRenderFns: []
		}, void 0, {
			name: "BMessage",
			mixins: [et],
			props: {
				ariaCloseLabel: String
			},
			data: function() {
				return {
					newIconSize: this.iconSize || this.size || "is-large"
				}
			}
		}, void 0, !1, void 0, void 0, void 0),
		nt = {
			install: function(e) {
				z(e, it)
			}
		};
	L(nt);
	var at = {
			open: function(e) {
				var t;
				"string" == typeof e && (e = {
					content: e
				});
				var i;
				e.parent && (t = e.parent, delete e.parent), Array.isArray(e.content) && (i = e.content, delete e.content);
				var n = m({
						programmatic: !0
					}, e),
					a = new(("undefined" != typeof window && window.Vue ? window.Vue : tt || P).extend(Ae))({
						parent: t,
						el: document.createElement("div"),
						propsData: n
					});
				return i && (a.$slots.default = i, a.$forceUpdate()), a
			}
		},
		st = {
			install: function(e) {
				tt = e, z(e, Ae), H(e, "modal", at)
			}
		};
	L(st);
	var ot = V({
			render: function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("transition", {
					attrs: {
						name: e.animation
					}
				}, [i("article", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.isActive,
						expression: "isActive"
					}],
					staticClass: "notification",
					class: [e.type, e.position],
					on: {
						click: e.click
					}
				}, [e.closable ? i("button", {
					staticClass: "delete",
					attrs: {
						type: "button",
						"aria-label": e.ariaCloseLabel
					},
					on: {
						click: e.close
					}
				}) : e._e(), e.$slots.default || e.message ? i("div", {
					staticClass: "media"
				}, [e.computedIcon && e.hasIcon ? i("div", {
					staticClass: "media-left"
				}, [i("b-icon", {
					attrs: {
						icon: e.computedIcon,
						pack: e.iconPack,
						both: "",
						size: "is-large",
						"aria-hidden": ""
					}
				})], 1) : e._e(), i("div", {
					staticClass: "media-content"
				}, [e.$slots.default ? [e._t("default")] : [i("p", {
					staticClass: "text",
					domProps: {
						innerHTML: e._s(e.message)
					}
				})]], 2)]) : e._e()])])
			},
			staticRenderFns: []
		}, void 0, {
			name: "BNotification",
			mixins: [et],
			props: {
				position: String,
				ariaCloseLabel: String,
				animation: {
					type: String,
					default: "fade"
				}
			}
		}, void 0, !1, void 0, void 0, void 0),
		rt = {
			props: {
				type: {
					type: String,
					default: "is-dark"
				},
				message: [String, Array],
				duration: Number,
				queue: {
					type: Boolean,
					default: void 0
				},
				indefinite: {
					type: Boolean,
					default: !1
				},
				pauseOnHover: {
					type: Boolean,
					default: !1
				},
				position: {
					type: String,
					default: "is-top",
					validator: function(e) {
						return ["is-top-right", "is-top", "is-top-left", "is-bottom-right", "is-bottom", "is-bottom-left"].indexOf(e) > -1
					}
				},
				container: String
			},
			data: function() {
				return {
					isActive: !1,
					isPaused: !1,
					parentTop: null,
					parentBottom: null,
					newContainer: this.container || T.defaultContainerElement
				}
			},
			computed: {
				correctParent: function() {
					switch (this.position) {
						case "is-top-right":
						case "is-top":
						case "is-top-left":
							return this.parentTop;
						case "is-bottom-right":
						case "is-bottom":
						case "is-bottom-left":
							return this.parentBottom
					}
				},
				transition: function() {
					switch (this.position) {
						case "is-top-right":
						case "is-top":
						case "is-top-left":
							return {
								enter: "fadeInDown", leave: "fadeOut"
							};
						case "is-bottom-right":
						case "is-bottom":
						case "is-bottom-left":
							return {
								enter: "fadeInUp", leave: "fadeOut"
							}
					}
				}
			},
			methods: {
				pause: function() {
					this.pauseOnHover && !this.indefinite && (this.isPaused = !0)
				},
				removePause: function() {
					this.pauseOnHover && !this.indefinite && (this.isPaused = !1, this.close())
				},
				shouldQueue: function() {
					return !!(void 0 !== this.queue ? this.queue : T.defaultNoticeQueue) && (this.parentTop.childElementCount > 0 || this.parentBottom.childElementCount > 0)
				},
				click: function() {
					this.$emit("click")
				},
				close: function() {
					var e = this;
					this.isPaused || (clearTimeout(this.timer), this.isActive = !1, this.$emit("close"), setTimeout(function() {
						e.$destroy(), g(e.$el)
					}, 150))
				},
				timeoutCallback: function() {
					return this.close()
				},
				showNotice: function() {
					var e = this;
					this.shouldQueue() ? setTimeout(function() {
						return e.showNotice()
					}, 250) : (this.correctParent.insertAdjacentElement("afterbegin", this.$el), this.isActive = !0, this.indefinite || (this.timer = setTimeout(function() {
						return e.timeoutCallback()
					}, this.newDuration)))
				},
				setupContainer: function() {
					if (this.parentTop = document.querySelector((this.newContainer ? this.newContainer : "body") + ">.notices.is-top"), this.parentBottom = document.querySelector((this.newContainer ? this.newContainer : "body") + ">.notices.is-bottom"), !this.parentTop || !this.parentBottom) {
						this.parentTop || (this.parentTop = document.createElement("div"), this.parentTop.className = "notices is-top"), this.parentBottom || (this.parentBottom = document.createElement("div"), this.parentBottom.className = "notices is-bottom");
						var e = document.querySelector(this.newContainer) || document.body;
						e.appendChild(this.parentTop), e.appendChild(this.parentBottom), this.newContainer && (this.parentTop.classList.add("has-custom-container"), this.parentBottom.classList.add("has-custom-container"))
					}
				}
			},
			beforeMount: function() {
				this.setupContainer()
			},
			mounted: function() {
				this.showNotice()
			}
		};
	var lt, ct = V({
			render: function() {
				var e = this.$createElement;
				return (this._self._c || e)("b-notification", this._b({
					ref: "notification",
					on: {
						click: this.click,
						close: this.close
					}
				}, "b-notification", this.$options.propsData, !1), [this._t("default")], 2)
			},
			staticRenderFns: []
		}, void 0, {
			name: "BNotificationNotice",
			mixins: [rt],
			data: function() {
				return {
					newDuration: this.duration || T.defaultNotificationDuration
				}
			},
			methods: {
				timeoutCallback: function() {
					return this.$refs.notification.close()
				}
			}
		}, void 0, !1, void 0, void 0, void 0),
		ut = {
			open: function(e) {
				var t;
				"string" == typeof e && (e = {
					message: e
				});
				var i, n = {
					position: T.defaultNotificationPosition || "is-top-right"
				};
				e.parent && (t = e.parent, delete e.parent), Array.isArray(e.message) && (i = e.message, delete e.message), e.active = !1;
				var a = m(n, e),
					s = new(("undefined" != typeof window && window.Vue ? window.Vue : lt || P).extend(ct))({
						parent: t,
						el: document.createElement("div"),
						propsData: a
					});
				return i && (s.$slots.default = i, s.$forceUpdate()), s.$children[0].isActive = !0, s
			}
		},
		dt = {
			install: function(e) {
				lt = e, z(e, ot), H(e, "notification", ut)
			}
		};
	L(dt);
	var ht = V({
			render: function() {
				var e = this.$createElement,
					t = this._self._c || e;
				return t("a", this._g({
					staticClass: "navbar-burger burger",
					class: {
						"is-active": this.isOpened
					},
					attrs: {
						role: "button",
						"aria-label": "menu",
						"aria-expanded": this.isOpened
					}
				}, this.$listeners), [t("span", {
					attrs: {
						"aria-hidden": "true"
					}
				}), t("span", {
					attrs: {
						"aria-hidden": "true"
					}
				}), t("span", {
					attrs: {
						"aria-hidden": "true"
					}
				})])
			},
			staticRenderFns: []
		}, void 0, {
			name: "NavbarBurger",
			props: {
				isOpened: {
					type: Boolean,
					default: !1
				}
			}
		}, void 0, !1, void 0, void 0, void 0),
		ft = "undefined" != typeof window && ("ontouchstart" in window || navigator.msMaxTouchPoints > 0) ? ["touchstart", "click"] : ["click"],
		pt = [];

	function mt(e) {
		var i = "function" == typeof e;
		if (!i && "object" !== t(e)) throw new Error("v-click-outside: Binding value should be a function or an object, ".concat(t(e), " given"));
		return {
			handler: i ? e : e.handler,
			middleware: e.middleware || function(e) {
				return e
			},
			events: e.events || ft
		}
	}

	function vt(e) {
		var t = e.el,
			i = e.event,
			n = e.handler,
			a = e.middleware;
		i.target !== t && !t.contains(i.target) && a(i, t) && n(i, t)
	}

	function gt() {
		var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).eventHandlers,
			t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "add";
		e.forEach(function(e) {
			var i = e.event,
				n = e.handler;
			document["".concat(t, "EventListener")](i, n)
		})
	}
	var bt = {
		bind: function(e, t) {
			var i = mt(t.value),
				n = i.handler,
				a = i.middleware,
				s = i.events,
				o = {
					el: e,
					eventHandlers: s.map(function(t) {
						return {
							event: t,
							handler: function(t) {
								return vt({
									event: t,
									el: e,
									handler: n,
									middleware: a
								})
							}
						}
					})
				};
			gt(o, "add"), pt.push(o)
		},
		update: function(e, t) {
			var i = mt(t.value),
				n = i.handler,
				a = i.middleware,
				s = i.events,
				o = pt.filter(function(t) {
					return t.el === e
				})[0];
			gt(o, "remove"), o.eventHandlers = s.map(function(t) {
				return {
					event: t,
					handler: function(t) {
						return vt({
							event: t,
							el: e,
							handler: n,
							middleware: a
						})
					}
				}
			}), gt(o, "add")
		},
		unbind: function(e) {
			gt(pt.filter(function(t) {
				return t.el === e
			})[0], "remove")
		},
		instances: pt
	};
	var yt = V({}, void 0, {
			name: "BNavbar",
			components: {
				NavbarBurger: ht
			},
			directives: {
				clickOutside: bt
			},
			model: {
				prop: "active",
				event: "update:active"
			},
			props: {
				type: [String, Object],
				transparent: {
					type: Boolean,
					default: !1
				},
				fixedTop: {
					type: Boolean,
					default: !1
				},
				fixedBottom: {
					type: Boolean,
					default: !1
				},
				active: {
					type: Boolean,
					default: !1
				},
				centered: {
					type: Boolean,
					default: !1
				},
				wrapperClass: {
					type: [String, Array, Object]
				},
				closeOnClick: {
					type: Boolean,
					default: !0
				},
				mobileBurger: {
					type: Boolean,
					default: !0
				},
				spaced: Boolean,
				shadow: Boolean
			},
			data: function() {
				return {
					internalIsActive: this.active,
					_isNavBar: !0
				}
			},
			computed: {
				isOpened: function() {
					return this.internalIsActive
				},
				computedClasses: function() {
					var e;
					return [this.type, (e = {}, i(e, "is-fixed-top", this.fixedTop), i(e, "is-fixed-bottom", this.fixedBottom), i(e, "has-navbar-centered", this.centered), i(e, "is-spaced", this.spaced), i(e, "has-shadow", this.shadow), i(e, "is-transparent", this.transparent), e)]
				}
			},
			watch: {
				active: {
					handler: function(e) {
						this.internalIsActive = e
					},
					immediate: !0
				},
				fixedTop: function(e) {
					this.setBodyFixedTopClass(e)
				},
				bottomTop: function(e) {
					this.setBodyFixedBottomClass(e)
				}
			},
			methods: {
				toggleActive: function() {
					this.internalIsActive = !this.internalIsActive, this.emitUpdateParentEvent()
				},
				closeMenu: function() {
					this.closeOnClick && this.internalIsActive && (this.internalIsActive = !1, this.emitUpdateParentEvent())
				},
				emitUpdateParentEvent: function() {
					this.$emit("update:active", this.internalIsActive)
				},
				setBodyClass: function(e) {
					"undefined" != typeof window && document.body.classList.add(e)
				},
				removeBodyClass: function(e) {
					"undefined" != typeof window && document.body.classList.remove(e)
				},
				checkIfFixedPropertiesAreColliding: function() {
					if (this.fixedTop && this.fixedBottom) throw new Error("You should choose if the BNavbar is fixed bottom or fixed top, but not both")
				},
				genNavbar: function(e) {
					var t = [this.genNavbarBrandNode(e), this.genNavbarSlotsNode(e)];
					if (!this.wrapperClass) return this.genNavbarSlots(e, t);
					var i = e("div", {
						class: this.wrapperClass
					}, t);
					return this.genNavbarSlots(e, [i])
				},
				genNavbarSlots: function(e, t) {
					return e("nav", {
						staticClass: "navbar",
						class: this.computedClasses,
						attrs: {
							role: "navigation",
							"aria-label": "main navigation"
						},
						directives: [{
							name: "click-outside",
							value: this.closeMenu
						}]
					}, t)
				},
				genNavbarBrandNode: function(e) {
					return e("div", {
						class: "navbar-brand"
					}, [this.$slots.brand, this.genBurgerNode(e)])
				},
				genBurgerNode: function(e) {
					if (this.mobileBurger) {
						var t = e("navbar-burger", {
							props: {
								isOpened: this.isOpened
							},
							on: {
								click: this.toggleActive
							}
						});
						return !!this.$scopedSlots.burger ? this.$scopedSlots.burger({
							isOpened: this.isOpened,
							toggleActive: this.toggleActive
						}) : t
					}
				},
				genNavbarSlotsNode: function(e) {
					return e("div", {
						staticClass: "navbar-menu",
						class: {
							"is-active": this.isOpened
						}
					}, [this.genMenuPosition(e, "start"), this.genMenuPosition(e, "end")])
				},
				genMenuPosition: function(e, t) {
					return e("div", {
						staticClass: "navbar-".concat(t)
					}, this.$slots[t])
				},
				setBodyFixedTopClass: function(e) {
					this.checkIfFixedPropertiesAreColliding(), e ? (this.setBodyClass("has-navbar-fixed-top"), this.spaced && this.setBodyClass("has-spaced-navbar-fixed-top")) : (this.removeBodyClass("has-navbar-fixed-top"), this.removeBodyClass("has-spaced-navbar-fixed-top"))
				},
				setBodyFixedBottomClass: function(e) {
					this.checkIfFixedPropertiesAreColliding(), e ? (this.setBodyClass("has-navbar-fixed-bottom"), this.spaced && this.setBodyClass("has-spaced-navbar-fixed-bottom")) : (this.removeBodyClass("has-navbar-fixed-bottom"), this.removeBodyClass("has-spaced-navbar-fixed-bottom"))
				}
			},
			beforeMount: function() {
				this.fixedTop && this.setBodyFixedTopClass(!0), this.fixedBottom && this.setBodyFixedBottomClass(!0)
			},
			beforeDestroy: function() {
				if (this.fixedTop) {
					var e = this.spaced ? "has-spaced-navbar-fixed-top" : "has-navbar-fixed-top";
					this.removeBodyClass(e)
				} else if (this.fixedBottom) {
					var t = this.spaced ? "has-spaced-navbar-fixed-bottom" : "has-navbar-fixed-bottom";
					this.removeBodyClass(t)
				}
			},
			render: function(e, t) {
				return this.genNavbar(e)
			}
		}, void 0, void 0, void 0, void 0, void 0),
		wt = ["div", "span", "input"];
	var kt = V({
		render: function() {
			var e = this.$createElement;
			return (this._self._c || e)(this.tag, this._g(this._b({
				tag: "component",
				staticClass: "navbar-item",
				class: {
					"is-active": this.active
				}
			}, "component", this.$attrs, !1), this.$listeners), [this._t("default")], 2)
		},
		staticRenderFns: []
	}, void 0, {
		name: "BNavbarItem",
		inheritAttrs: !1,
		props: {
			tag: {
				type: String,
				default: "a"
			},
			active: Boolean
		},
		methods: {
			keyPress: function(e) {
				var t = e.key;
				"Escape" !== t && "Esc" !== t || this.closeMenuRecursive(this, ["NavBar"])
			},
			handleClickEvent: function(e) {
				if (!wt.some(function(t) {
						return t === e.target.localName
					})) {
					var t = this.closeMenuRecursive(this, ["NavbarDropdown", "NavBar"]);
					t && t.$data._isNavbarDropdown && this.closeMenuRecursive(t, ["NavBar"])
				}
			},
			closeMenuRecursive: function(e, t) {
				return e.$parent ? t.reduce(function(t, i) {
					return e.$parent.$data["_is".concat(i)] ? (e.$parent.closeMenu(), e.$parent) : t
				}, null) || this.closeMenuRecursive(e.$parent, t) : null
			}
		},
		mounted: function() {
			"undefined" != typeof window && (this.$el.addEventListener("click", this.handleClickEvent), document.addEventListener("keyup", this.keyPress))
		},
		beforeDestroy: function() {
			"undefined" != typeof window && (this.$el.removeEventListener("click", this.handleClickEvent), document.removeEventListener("keyup", this.keyPress))
		}
	}, void 0, !1, void 0, void 0, void 0);
	var St, Dt = V({
			render: function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					directives: [{
						name: "click-outside",
						rawName: "v-click-outside",
						value: e.closeMenu,
						expression: "closeMenu"
					}],
					staticClass: "navbar-item has-dropdown",
					class: {
						"is-hoverable": e.isHoverable, "is-active": e.newActive
					},
					on: {
						mouseenter: e.checkHoverable
					}
				}, [i(e.tag, e._g(e._b({
					tag: "component",
					staticClass: "navbar-link",
					class: {
						"is-arrowless": e.arrowless, "is-active": e.newActive && e.collapsible
					},
					attrs: {
						role: "menuitem",
						"aria-haspopup": "true"
					},
					on: {
						click: function(t) {
							t.preventDefault(), e.newActive = !e.newActive
						}
					}
				}, "component", e.$attrs, !1), e.$listeners), [e.label ? [e._v(e._s(e.label))] : e._t("label")], 2), i("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: !e.collapsible || e.collapsible && e.newActive,
						expression: "!collapsible || (collapsible && newActive)"
					}],
					staticClass: "navbar-dropdown",
					class: {
						"is-right": e.right, "is-boxed": e.boxed
					}
				}, [e._t("default")], 2)], 1)
			},
			staticRenderFns: []
		}, void 0, {
			name: "BNavbarDropdown",
			directives: {
				clickOutside: bt
			},
			props: {
				label: String,
				hoverable: Boolean,
				active: Boolean,
				right: Boolean,
				arrowless: Boolean,
				boxed: Boolean,
				closeOnClick: {
					type: Boolean,
					default: !0
				},
				collapsible: Boolean,
				tag: {
					type: String,
					default: "a"
				}
			},
			data: function() {
				return {
					newActive: this.active,
					isHoverable: this.hoverable,
					_isNavbarDropdown: !0
				}
			},
			watch: {
				active: function(e) {
					this.newActive = e
				}
			},
			methods: {
				showMenu: function() {
					this.newActive = !0
				},
				closeMenu: function() {
					this.newActive = !this.closeOnClick, this.hoverable && this.closeOnClick && (this.isHoverable = !1)
				},
				checkHoverable: function() {
					this.hoverable && (this.isHoverable = !0)
				}
			}
		}, void 0, !1, void 0, void 0, void 0),
		Ct = {
			install: function(e) {
				z(e, yt), z(e, kt), z(e, Dt)
			}
		};
	L(Ct);
	var xt = V({
			render: function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "b-numberinput field",
					class: e.fieldClasses
				}, [e._l(e.controlsLeft, function(t) {
					return i("p", {
						key: t,
						class: ["control", t],
						on: {
							mouseup: e.onStopLongPress,
							mouseleave: e.onStopLongPress,
							touchend: e.onStopLongPress,
							touchcancel: e.onStopLongPress
						}
					}, [i("button", {
						staticClass: "button",
						class: e.buttonClasses,
						attrs: {
							type: "button",
							disabled: e.isDisabled(t),
							"aria-label": "plus" === t ? e.ariaPlusLabel : e.ariaMinusLabel
						},
						on: {
							mousedown: function(i) {
								!e.isDisabled(t) && e.onStartLongPress(i, "plus" === t)
							},
							touchstart: function(i) {
								i.preventDefault(), !e.isDisabled(t) && e.onStartLongPress(i, "plus" === t)
							},
							click: function(i) {
								!e.isDisabled(t) && e.onControlClick(i, "plus" === t)
							}
						}
					}, [i("b-icon", {
						attrs: {
							both: "",
							icon: t,
							pack: e.iconPack,
							size: e.iconSize
						}
					})], 1)])
				}), i("b-input", e._b({
					ref: "input",
					attrs: {
						type: "number",
						step: e.minStepNumber,
						max: e.max,
						min: e.min,
						size: e.size,
						disabled: e.disabled,
						readonly: !e.editable,
						loading: e.loading,
						rounded: e.rounded,
						icon: e.icon,
						"icon-pack": e.iconPack,
						autocomplete: e.autocomplete,
						expanded: e.expanded,
						placeholder: e.placeholder,
						"use-html5-validation": e.useHtml5Validation
					},
					on: {
						focus: function(t) {
							return e.$emit("focus", t)
						},
						blur: function(t) {
							return e.$emit("blur", t)
						}
					},
					model: {
						value: e.computedValue,
						callback: function(t) {
							e.computedValue = t
						},
						expression: "computedValue"
					}
				}, "b-input", e.$attrs, !1)), e._l(e.controlsRight, function(t) {
					return i("p", {
						key: t,
						class: ["control", t],
						on: {
							mouseup: e.onStopLongPress,
							mouseleave: e.onStopLongPress,
							touchend: e.onStopLongPress,
							touchcancel: e.onStopLongPress
						}
					}, [i("button", {
						staticClass: "button",
						class: e.buttonClasses,
						attrs: {
							type: "button",
							disabled: e.isDisabled(t),
							"aria-label": "plus" === t ? e.ariaPlusLabel : e.ariaMinusLabel
						},
						on: {
							mousedown: function(i) {
								!e.isDisabled(t) && e.onStartLongPress(i, "plus" === t)
							},
							touchstart: function(i) {
								i.preventDefault(), !e.isDisabled(t) && e.onStartLongPress(i, "plus" === t)
							},
							click: function(i) {
								!e.isDisabled(t) && e.onControlClick(i, "plus" === t)
							}
						}
					}, [i("b-icon", {
						attrs: {
							both: "",
							icon: t,
							pack: e.iconPack,
							size: e.iconSize
						}
					})], 1)])
				})], 2)
			},
			staticRenderFns: []
		}, void 0, {
			name: "BNumberinput",
			components: (St = {}, i(St, O.name, O), i(St, R.name, R), St),
			mixins: [M],
			inheritAttrs: !1,
			props: {
				value: Number,
				min: {
					type: [Number, String]
				},
				max: [Number, String],
				step: [Number, String],
				minStep: [Number, String],
				exponential: [Boolean, Number],
				disabled: Boolean,
				type: {
					type: String,
					default: "is-primary"
				},
				editable: {
					type: Boolean,
					default: !0
				},
				controls: {
					type: Boolean,
					default: !0
				},
				controlsAlignment: {
					type: String,
					default: "center",
					validator: function(e) {
						return ["left", "right", "center"].indexOf(e) >= 0
					}
				},
				controlsRounded: {
					type: Boolean,
					default: !1
				},
				controlsPosition: String,
				placeholder: [Number, String],
				ariaMinusLabel: String,
				ariaPlusLabel: String
			},
			data: function() {
				return {
					newValue: this.value,
					newStep: this.step || 1,
					newMinStep: this.minStep,
					timesPressed: 1,
					_elementRef: "input"
				}
			},
			computed: {
				computedValue: {
					get: function() {
						return this.newValue
					},
					set: function(e) {
						var t = this,
							i = e;
						"" !== e && null != e || (i = void 0 !== this.minNumber ? this.minNumber : null), this.newValue = i, null === i ? this.$emit("input", i) : isNaN(i) || "-0" === i || this.$emit("input", Number(i)), this.$nextTick(function() {
							t.$refs.input.checkHtml5Validity()
						})
					}
				},
				controlsLeft: function() {
					return this.controls && "right" !== this.controlsAlignment ? "left" === this.controlsAlignment ? ["minus", "plus"] : ["minus"] : []
				},
				controlsRight: function() {
					return this.controls && "left" !== this.controlsAlignment ? "right" === this.controlsAlignment ? ["minus", "plus"] : ["plus"] : []
				},
				fieldClasses: function() {
					return [{
						"has-addons": "compact" === this.controlsPosition
					}, {
						"is-grouped": "compact" !== this.controlsPosition
					}, {
						"is-expanded": this.expanded
					}]
				},
				buttonClasses: function() {
					return [this.type, this.size, {
						"is-rounded": this.controlsRounded
					}]
				},
				minNumber: function() {
					return "string" == typeof this.min ? parseFloat(this.min) : this.min
				},
				maxNumber: function() {
					return "string" == typeof this.max ? parseFloat(this.max) : this.max
				},
				stepNumber: function() {
					return "string" == typeof this.newStep ? parseFloat(this.newStep) : this.newStep
				},
				minStepNumber: function() {
					var e = void 0 !== this.newMinStep ? this.newMinStep : this.newStep;
					return "string" == typeof e ? parseFloat(e) : e
				},
				disabledMin: function() {
					return this.computedValue - this.stepNumber < this.minNumber
				},
				disabledMax: function() {
					return this.computedValue + this.stepNumber > this.maxNumber
				},
				stepDecimals: function() {
					var e = this.minStepNumber.toString(),
						t = e.indexOf(".");
					return t >= 0 ? e.substring(t + 1).length : 0
				}
			},
			watch: {
				value: {
					immediate: !0,
					handler: function(e) {
						this.newValue = e
					}
				},
				step: function(e) {
					this.newStep = e
				},
				minStep: function(e) {
					this.newMinStep = e
				}
			},
			methods: {
				isDisabled: function(e) {
					return this.disabled || ("plus" === e ? this.disabledMax : this.disabledMin)
				},
				decrement: function() {
					if (void 0 === this.minNumber || this.computedValue - this.stepNumber >= this.minNumber) {
						if (null === this.computedValue || void 0 === this.computedValue) {
							if (this.maxNumber) return void(this.computedValue = this.maxNumber);
							this.computedValue = 0
						}
						var e = this.computedValue - this.stepNumber;
						this.computedValue = parseFloat(e.toFixed(this.stepDecimals))
					}
				},
				increment: function() {
					if (void 0 === this.maxNumber || this.computedValue + this.stepNumber <= this.maxNumber) {
						if (null === this.computedValue || void 0 === this.computedValue) {
							if (this.minNumber) return void(this.computedValue = this.minNumber);
							this.computedValue = 0
						}
						var e = this.computedValue + this.stepNumber;
						this.computedValue = parseFloat(e.toFixed(this.stepDecimals))
					}
				},
				onControlClick: function(e, t) {
					0 === e.detail && "click" === e.type && (t ? this.increment() : this.decrement())
				},
				longPressTick: function(e) {
					var t = this;
					e ? this.increment() : this.decrement(), this._$intervalRef = setTimeout(function() {
						t.longPressTick(e)
					}, this.exponential ? 250 / (this.exponential * this.timesPressed++) : 250)
				},
				onStartLongPress: function(e, t) {
					0 !== e.button && "touchstart" !== e.type || (clearTimeout(this._$intervalRef), this.longPressTick(t))
				},
				onStopLongPress: function() {
					this._$intervalRef && (this.timesPressed = 1, clearTimeout(this._$intervalRef), this._$intervalRef = null)
				}
			}
		}, void 0, !1, void 0, void 0, void 0),
		_t = {
			install: function(e) {
				z(e, xt)
			}
		};
	L(_t);
	var $t, Pt = V({
		render: function() {
			var e, t = this,
				i = t.$createElement;
			return (t._self._c || i)(t.tag, t._b({
				tag: "component",
				staticClass: "pagination-link",
				class: (e = {
					"is-current": t.page.isCurrent
				}, e[t.page.class] = !0, e),
				attrs: {
					role: "button",
					href: t.href,
					disabled: t.isDisabled,
					"aria-label": t.page["aria-label"],
					"aria-current": t.page.isCurrent
				},
				on: {
					click: function(e) {
						return e.preventDefault(), t.page.click(e)
					}
				}
			}, "component", t.$attrs, !1), [t._t("default", [t._v(t._s(t.page.number))])], 2)
		},
		staticRenderFns: []
	}, void 0, {
		name: "BPaginationButton",
		props: {
			page: {
				type: Object,
				required: !0
			},
			tag: {
				type: String,
				default: "a",
				validator: function(e) {
					return T.defaultLinkTags.indexOf(e) >= 0
				}
			},
			disabled: {
				type: Boolean,
				default: !1
			}
		},
		computed: {
			href: function() {
				if ("a" === this.tag) return "#"
			},
			isDisabled: function() {
				return this.disabled || this.page.disabled
			}
		}
	}, void 0, !1, void 0, void 0, void 0);
	var Bt = V({
			render: function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("nav", {
					staticClass: "pagination",
					class: e.rootClasses
				}, [e.$scopedSlots.previous ? e._t("previous", [i("b-icon", {
					attrs: {
						icon: e.iconPrev,
						pack: e.iconPack,
						both: "",
						"aria-hidden": "true"
					}
				})], {
					page: e.getPage(e.current - 1, {
						disabled: !e.hasPrev,
						class: "pagination-previous",
						"aria-label": e.ariaPreviousLabel
					})
				}) : i("BPaginationButton", {
					staticClass: "pagination-previous",
					attrs: {
						disabled: !e.hasPrev,
						page: e.getPage(e.current - 1),
						"aria-label": e.ariaPreviousLabel
					}
				}, [i("b-icon", {
					attrs: {
						icon: e.iconPrev,
						pack: e.iconPack,
						both: "",
						"aria-hidden": "true"
					}
				})], 1), e.$scopedSlots.next ? e._t("next", [i("b-icon", {
					attrs: {
						icon: e.iconNext,
						pack: e.iconPack,
						both: "",
						"aria-hidden": "true"
					}
				})], {
					page: e.getPage(e.current + 1, {
						disabled: !e.hasNext,
						class: "pagination-next",
						"aria-label": e.ariaNextLabel
					})
				}) : i("BPaginationButton", {
					staticClass: "pagination-next",
					attrs: {
						disabled: !e.hasNext,
						page: e.getPage(e.current + 1),
						"aria-label": e.ariaNextLabel
					}
				}, [i("b-icon", {
					attrs: {
						icon: e.iconNext,
						pack: e.iconPack,
						both: "",
						"aria-hidden": "true"
					}
				})], 1), e.simple ? i("small", {
					staticClass: "info"
				}, [1 == e.perPage ? [e._v(" " + e._s(e.firstItem) + " / " + e._s(e.total) + " ")] : [e._v(" " + e._s(e.firstItem) + "-" + e._s(Math.min(e.current * e.perPage, e.total)) + " / " + e._s(e.total) + " ")]], 2) : i("ul", {
					staticClass: "pagination-list"
				}, [e.hasFirst ? i("li", [e.$scopedSlots.default ? e._t("default", null, {
					page: e.getPage(1)
				}) : i("BPaginationButton", {
					attrs: {
						page: e.getPage(1)
					}
				})], 2) : e._e(), e.hasFirstEllipsis ? i("li", [i("span", {
					staticClass: "pagination-ellipsis"
				}, [e._v("…")])]) : e._e(), e._l(e.pagesInRange, function(t) {
					return i("li", {
						key: t.number
					}, [e.$scopedSlots.default ? e._t("default", null, {
						page: t
					}) : i("BPaginationButton", {
						attrs: {
							page: t
						}
					})], 2)
				}), e.hasLastEllipsis ? i("li", [i("span", {
					staticClass: "pagination-ellipsis"
				}, [e._v("…")])]) : e._e(), e.hasLast ? i("li", [e.$scopedSlots.default ? e._t("default", null, {
					page: e.getPage(e.pageCount)
				}) : i("BPaginationButton", {
					attrs: {
						page: e.getPage(e.pageCount)
					}
				})], 2) : e._e()], 2)], 2)
			},
			staticRenderFns: []
		}, void 0, {
			name: "BPagination",
			components: ($t = {}, i($t, O.name, O), i($t, Pt.name, Pt), $t),
			model: {
				prop: "current",
				event: "update:current"
			},
			props: {
				total: [Number, String],
				perPage: {
					type: [Number, String],
					default: 20
				},
				current: {
					type: [Number, String],
					default: 1
				},
				rangeBefore: {
					type: [Number, String],
					default: 1
				},
				rangeAfter: {
					type: [Number, String],
					default: 1
				},
				size: String,
				simple: Boolean,
				rounded: Boolean,
				order: String,
				iconPack: String,
				iconPrev: {
					type: String,
					default: function() {
						return T.defaultIconPrev
					}
				},
				iconNext: {
					type: String,
					default: function() {
						return T.defaultIconNext
					}
				},
				ariaNextLabel: String,
				ariaPreviousLabel: String,
				ariaPageLabel: String,
				ariaCurrentLabel: String
			},
			computed: {
				rootClasses: function() {
					return [this.order, this.size, {
						"is-simple": this.simple,
						"is-rounded": this.rounded
					}]
				},
				beforeCurrent: function() {
					return parseInt(this.rangeBefore)
				},
				afterCurrent: function() {
					return parseInt(this.rangeAfter)
				},
				pageCount: function() {
					return Math.ceil(this.total / this.perPage)
				},
				firstItem: function() {
					var e = this.current * this.perPage - this.perPage + 1;
					return e >= 0 ? e : 0
				},
				hasPrev: function() {
					return this.current > 1
				},
				hasFirst: function() {
					return this.current >= 2 + this.beforeCurrent
				},
				hasFirstEllipsis: function() {
					return this.current >= this.beforeCurrent + 4
				},
				hasLast: function() {
					return this.current <= this.pageCount - (1 + this.afterCurrent)
				},
				hasLastEllipsis: function() {
					return this.current < this.pageCount - (2 + this.afterCurrent)
				},
				hasNext: function() {
					return this.current < this.pageCount
				},
				pagesInRange: function() {
					if (!this.simple) {
						var e = Math.max(1, this.current - this.beforeCurrent);
						e - 1 == 2 && e--;
						var t = Math.min(this.current + this.afterCurrent, this.pageCount);
						this.pageCount - t == 2 && t++;
						for (var i = [], n = e; n <= t; n++) i.push(this.getPage(n));
						return i
					}
				}
			},
			watch: {
				pageCount: function(e) {
					this.current > e && this.last()
				}
			},
			methods: {
				prev: function(e) {
					this.changePage(this.current - 1, e)
				},
				next: function(e) {
					this.changePage(this.current + 1, e)
				},
				first: function(e) {
					this.changePage(1, e)
				},
				last: function(e) {
					this.changePage(this.pageCount, e)
				},
				changePage: function(e, t) {
					this.current === e || e < 1 || e > this.pageCount || (this.$emit("update:current", e), this.$emit("change", e), t && t.target && this.$nextTick(function() {
						return t.target.focus()
					}))
				},
				getPage: function(e) {
					var t = this,
						i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return {
						number: e,
						isCurrent: this.current === e,
						click: function(i) {
							return t.changePage(e, i)
						},
						disabled: i.disabled || !1,
						class: i.class || "",
						"aria-label": i["aria-label"] || this.getAriaPageLabel(e, this.current === e)
					}
				},
				getAriaPageLabel: function(e, t) {
					return !this.ariaPageLabel || t && this.ariaCurrentLabel ? this.ariaPageLabel && t && this.ariaCurrentLabel ? this.ariaCurrentLabel + ", " + this.ariaPageLabel + " " + e + "." : null : this.ariaPageLabel + " " + e + "."
				}
			}
		}, void 0, !1, void 0, void 0, void 0),
		Tt = {
			install: function(e) {
				z(e, Bt), z(e, Pt)
			}
		};
	L(Tt);
	var At = V({
		render: function() {
			var e = this,
				t = e.$createElement,
				i = e._self._c || t;
			return i("div", {
				staticClass: "progress-wrapper",
				class: e.wrapperClasses
			}, [e.isNative ? i("progress", {
				ref: "progress",
				staticClass: "progress",
				class: e.newType,
				attrs: {
					max: e.max
				},
				domProps: {
					value: e.value
				}
			}, [e._v(e._s(e.newValue))]) : e._t("bar"), e.isNative && e.showValue ? i("p", {
				staticClass: "progress-value"
			}, [e._t("default", [e._v(e._s(e.newValue))])], 2) : e._e()], 2)
		},
		staticRenderFns: []
	}, void 0, {
		name: "BProgress",
		mixins: [K("progress")],
		props: {
			type: {
				type: [String, Object],
				default: "is-darkgrey"
			},
			size: String,
			value: {
				type: Number,
				default: void 0
			},
			max: {
				type: Number,
				default: 100
			},
			showValue: {
				type: Boolean,
				default: !1
			},
			format: {
				type: String,
				default: "raw",
				validator: function(e) {
					return ["raw", "percent"].indexOf(e) >= 0
				}
			},
			precision: {
				type: Number,
				default: 2
			},
			keepTrailingZeroes: {
				type: Boolean,
				default: !1
			},
			locale: {
				type: [String, Array],
				default: function() {
					return T.defaultLocale
				}
			}
		},
		computed: {
			isIndeterminate: function() {
				return void 0 === this.value || null === this.value
			},
			newType: function() {
				return [this.size, this.type, {
					"is-more-than-half": this.value && this.value > this.max / 2
				}]
			},
			newValue: function() {
				return this.calculateValue(this.value)
			},
			isNative: function() {
				return void 0 === this.$slots.bar
			},
			wrapperClasses: function() {
				return i({
					"is-not-native": !this.isNative
				}, this.size, !this.isNative)
			}
		},
		watch: {
			isIndeterminate: function(e) {
				var t = this;
				this.$nextTick(function() {
					t.$refs.progress && (e ? t.$refs.progress.removeAttribute("value") : t.$refs.progress.setAttribute("value", t.value))
				})
			}
		},
		methods: {
			calculateValue: function(e) {
				if (null != e && !isNaN(e)) {
					var t = this.keepTrailingZeroes ? this.precision : 0,
						i = this.precision;
					return "percent" === this.format ? new Intl.NumberFormat(this.locale, {
						style: "percent",
						minimumFractionDigits: t,
						maximumFractionDigits: i
					}).format(e / this.max) : new Intl.NumberFormat(this.locale, {
						minimumFractionDigits: t,
						maximumFractionDigits: i
					}).format(e)
				}
			}
		}
	}, void 0, !1, void 0, void 0, void 0);
	var Ft = V({
			render: function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "progress-bar",
					class: e.newType,
					style: {
						width: e.barWidth
					},
					attrs: {
						role: "progressbar",
						"aria-valuenow": e.value,
						"aria-valuemax": e.parent.max,
						"aria-valuemin": "0"
					}
				}, [e.newShowValue ? i("p", {
					staticClass: "progress-value"
				}, [e._t("default", [e._v(e._s(e.newValue))])], 2) : e._e()])
			},
			staticRenderFns: []
		}, void 0, {
			name: "BProgressBar",
			mixins: [U("progress")],
			props: {
				type: {
					type: [String, Object],
					default: void 0
				},
				value: {
					type: Number,
					default: void 0
				},
				showValue: {
					type: Boolean,
					default: !1
				}
			},
			computed: {
				newType: function() {
					return [this.parent.size, this.type || this.parent.type]
				},
				newShowValue: function() {
					return this.showValue || this.parent.showValue
				},
				newValue: function() {
					return this.parent.calculateValue(this.value)
				},
				barWidth: function() {
					return "".concat(100 * this.value / this.parent.max, "%")
				}
			}
		}, void 0, !1, void 0, void 0, void 0),
		Mt = {
			install: function(e) {
				z(e, At), z(e, Ft)
			}
		};
	L(Mt);
	var It = V({
		render: function() {
			var e = this,
				t = e.$createElement,
				i = e._self._c || t;
			return i("label", {
				ref: "label",
				staticClass: "b-radio radio",
				class: [e.size, {
					"is-disabled": e.disabled
				}],
				attrs: {
					disabled: e.disabled
				},
				on: {
					click: e.focus,
					keydown: function(t) {
						return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : (t.preventDefault(), e.$refs.label.click())
					}
				}
			}, [i("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.computedValue,
					expression: "computedValue"
				}],
				ref: "input",
				attrs: {
					type: "radio",
					disabled: e.disabled,
					required: e.required,
					name: e.name
				},
				domProps: {
					value: e.nativeValue,
					checked: e._q(e.computedValue, e.nativeValue)
				},
				on: {
					click: function(e) {
						e.stopPropagation()
					},
					change: function(t) {
						e.computedValue = e.nativeValue
					}
				}
			}), i("span", {
				staticClass: "check",
				class: e.type
			}), i("span", {
				staticClass: "control-label"
			}, [e._t("default")], 2)])
		},
		staticRenderFns: []
	}, void 0, {
		name: "BRadio",
		mixins: [Z]
	}, void 0, !1, void 0, void 0, void 0);
	var Nt = V({
			render: function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "control",
					class: {
						"is-expanded": e.expanded
					}
				}, [i("label", {
					ref: "label",
					staticClass: "b-radio radio button",
					class: e.labelClass,
					attrs: {
						disabled: e.disabled
					},
					on: {
						click: e.focus,
						keydown: function(t) {
							return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : (t.preventDefault(), e.$refs.label.click())
						}
					}
				}, [e._t("default"), i("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.computedValue,
						expression: "computedValue"
					}],
					ref: "input",
					attrs: {
						type: "radio",
						disabled: e.disabled,
						required: e.required,
						name: e.name
					},
					domProps: {
						value: e.nativeValue,
						checked: e._q(e.computedValue, e.nativeValue)
					},
					on: {
						click: function(e) {
							e.stopPropagation()
						},
						focus: function(t) {
							e.isFocused = !0
						},
						blur: function(t) {
							e.isFocused = !1
						},
						change: function(t) {
							e.computedValue = e.nativeValue
						}
					}
				})], 2)])
			},
			staticRenderFns: []
		}, void 0, {
			name: "BRadioButton",
			mixins: [Z],
			props: {
				type: {
					type: String,
					default: "is-primary"
				},
				expanded: Boolean
			},
			data: function() {
				return {
					isFocused: !1
				}
			},
			computed: {
				isSelected: function() {
					return this.newValue === this.nativeValue
				},
				labelClass: function() {
					return [this.isSelected ? this.type : null, this.size, {
						"is-selected": this.isSelected,
						"is-disabled": this.disabled,
						"is-focused": this.isFocused
					}]
				}
			}
		}, void 0, !1, void 0, void 0, void 0),
		Vt = {
			install: function(e) {
				z(e, It), z(e, Nt)
			}
		};
	L(Vt);
	var Ot = V({
			render: function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "rate",
					class: {
						"is-disabled": e.disabled, "is-spaced": e.spaced, "is-rtl": e.rtl
					}
				}, [e._l(e.max, function(t, n) {
					return i("div", {
						key: n,
						staticClass: "rate-item",
						class: e.rateClass(t),
						on: {
							mousemove: function(i) {
								return e.previewRate(t, i)
							},
							mouseleave: e.resetNewValue,
							click: function(i) {
								return i.preventDefault(), e.confirmValue(t)
							}
						}
					}, [i("b-icon", {
						attrs: {
							pack: e.iconPack,
							icon: e.icon,
							size: e.size
						}
					}), e.checkHalf(t) ? i("b-icon", {
						staticClass: "is-half",
						style: e.halfStyle,
						attrs: {
							pack: e.iconPack,
							icon: e.icon,
							size: e.size
						}
					}) : e._e()], 1)
				}), e.showText || e.showScore || e.customText ? i("div", {
					staticClass: "rate-text",
					class: e.size
				}, [i("span", [e._v(e._s(e.showMe))]), e.customText && !e.showText ? i("span", [e._v(e._s(e.customText))]) : e._e()]) : e._e()], 2)
			},
			staticRenderFns: []
		}, void 0, {
			name: "BRate",
			components: i({}, O.name, O),
			props: {
				value: {
					type: Number,
					default: 0
				},
				max: {
					type: Number,
					default: 5
				},
				icon: {
					type: String,
					default: "star"
				},
				iconPack: String,
				size: String,
				spaced: Boolean,
				rtl: Boolean,
				disabled: Boolean,
				showScore: Boolean,
				showText: Boolean,
				customText: String,
				texts: Array,
				locale: {
					type: [String, Array],
					default: function() {
						return T.defaultLocale
					}
				}
			},
			data: function() {
				return {
					newValue: this.value,
					hoverValue: 0
				}
			},
			computed: {
				halfStyle: function() {
					return "width:".concat(this.valueDecimal, "%")
				},
				showMe: function() {
					var e = "";
					return this.showScore ? e = 0 === (e = this.disabled ? this.value : this.newValue) ? "" : new Intl.NumberFormat(this.locale).format(this.value) : this.showText && (e = this.texts[Math.ceil(this.newValue) - 1]), e
				},
				valueDecimal: function() {
					return 100 * this.value - 100 * Math.floor(this.value)
				}
			},
			watch: {
				value: function(e) {
					this.newValue = e
				}
			},
			methods: {
				resetNewValue: function() {
					this.disabled || (this.hoverValue = 0)
				},
				previewRate: function(e, t) {
					this.disabled || (this.hoverValue = e, t.stopPropagation())
				},
				confirmValue: function(e) {
					this.disabled || (this.newValue = e, this.$emit("change", this.newValue), this.$emit("input", this.newValue))
				},
				checkHalf: function(e) {
					return this.disabled && this.valueDecimal > 0 && e - 1 < this.value && e > this.value
				},
				rateClass: function(e) {
					var t = "";
					return e <= (0 !== this.hoverValue ? this.hoverValue : this.newValue) ? t = "set-on" : this.disabled && Math.ceil(this.value) === e && (t = "set-half"), t
				}
			}
		}, void 0, !1, void 0, void 0, void 0),
		Rt = {
			install: function(e) {
				z(e, Ot)
			}
		};
	L(Rt);
	var Et = {
		install: function(e) {
			z(e, ye)
		}
	};
	L(Et);
	var Lt = V({}, void 0, {
			name: "BSkeleton",
			functional: !0,
			props: {
				active: {
					type: Boolean,
					default: !0
				},
				animated: {
					type: Boolean,
					default: !0
				},
				width: [Number, String],
				height: [Number, String],
				circle: Boolean,
				rounded: {
					type: Boolean,
					default: !0
				},
				count: {
					type: Number,
					default: 1
				},
				position: {
					type: String,
					default: "",
					validator: function(e) {
						return ["", "is-centered", "is-right"].indexOf(e) > -1
					}
				},
				size: String
			},
			render: function(e, t) {
				if (t.props.active) {
					for (var i = [], n = t.props.width, a = t.props.height, s = 0; s < t.props.count; s++) i.push(e("div", {
						staticClass: "b-skeleton-item",
						class: {
							"is-rounded": t.props.rounded
						},
						key: s,
						style: {
							height: void 0 === a ? null : isNaN(a) ? a : a + "px",
							width: void 0 === n ? null : isNaN(n) ? n : n + "px",
							borderRadius: t.props.circle ? "50%" : null
						}
					}));
					return e("div", {
						staticClass: "b-skeleton",
						class: [t.props.size, t.props.position, {
							"is-animated": t.props.animated
						}]
					}, i)
				}
			}
		}, void 0, void 0, void 0, void 0, void 0),
		zt = {
			install: function(e) {
				z(e, Lt)
			}
		};
	L(zt);
	var Ht = V({
			render: function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "b-sidebar"
				}, [e.overlay && e.isOpen ? i("div", {
					staticClass: "sidebar-background"
				}) : e._e(), i("transition", {
					attrs: {
						name: e.transitionName
					},
					on: {
						"before-enter": e.beforeEnter,
						"after-enter": e.afterEnter
					}
				}, [i("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.isOpen,
						expression: "isOpen"
					}],
					ref: "sidebarContent",
					staticClass: "sidebar-content",
					class: e.rootClasses,
					on: {
						mouseenter: e.onHover,
						mouseleave: e.onHoverLeave
					}
				}, [e._t("default")], 2)])], 1)
			},
			staticRenderFns: []
		}, void 0, {
			name: "BSidebar",
			model: {
				prop: "open",
				event: "update:open"
			},
			props: {
				open: Boolean,
				type: [String, Object],
				overlay: Boolean,
				position: {
					type: String,
					default: "fixed",
					validator: function(e) {
						return ["fixed", "absolute", "static"].indexOf(e) >= 0
					}
				},
				fullheight: Boolean,
				fullwidth: Boolean,
				right: Boolean,
				mobile: {
					type: String
				},
				reduce: Boolean,
				expandOnHover: Boolean,
				expandOnHoverFixed: Boolean,
				delay: {
					type: Number,
					default: function() {
						return T.defaultSidebarDelay
					}
				},
				canCancel: {
					type: [Array, Boolean],
					default: function() {
						return ["escape", "outside"]
					}
				},
				onCancel: {
					type: Function,
					default: function() {}
				},
				scroll: {
					type: String,
					default: function() {
						return T.defaultModalScroll ? T.defaultModalScroll : "clip"
					},
					validator: function(e) {
						return ["clip", "keep"].indexOf(e) >= 0
					}
				}
			},
			data: function() {
				return {
					isOpen: this.open,
					isDelayOver: !1,
					transitionName: null,
					animating: !0,
					savedScrollTop: null,
					hasLeaved: !1
				}
			},
			computed: {
				rootClasses: function() {
					return [this.type, {
						"is-fixed": this.isFixed,
						"is-static": this.isStatic,
						"is-absolute": this.isAbsolute,
						"is-fullheight": this.fullheight,
						"is-fullwidth": this.fullwidth,
						"is-right": this.right,
						"is-mini": this.reduce && !this.isDelayOver,
						"is-mini-expand": this.expandOnHover || this.isDelayOver,
						"is-mini-expand-fixed": this.expandOnHover && this.expandOnHoverFixed || this.isDelayOver,
						"is-mini-delayed": null !== this.delay,
						"is-mini-mobile": "reduce" === this.mobile,
						"is-hidden-mobile": "hide" === this.mobile,
						"is-fullwidth-mobile": "fullwidth" === this.mobile
					}]
				},
				cancelOptions: function() {
					return "boolean" == typeof this.canCancel ? this.canCancel ? ["escape", "outside"] : [] : this.canCancel
				},
				isStatic: function() {
					return "static" === this.position
				},
				isFixed: function() {
					return "fixed" === this.position
				},
				isAbsolute: function() {
					return "absolute" === this.position
				}
			},
			watch: {
				open: {
					handler: function(e) {
						this.isOpen = e, this.overlay && this.handleScroll();
						var t = this.right ? !e : e;
						this.transitionName = t ? "slide-next" : "slide-prev"
					},
					immediate: !0
				}
			},
			methods: {
				getWhiteList: function() {
					var e = [];
					if (e.push(this.$refs.sidebarContent), void 0 !== this.$refs.sidebarContent) {
						var t = this.$refs.sidebarContent.querySelectorAll("*"),
							i = !0,
							n = !1,
							a = void 0;
						try {
							for (var s, o = t[Symbol.iterator](); !(i = (s = o.next()).done); i = !0) {
								var r = s.value;
								e.push(r)
							}
						} catch (e) {
							n = !0, a = e
						} finally {
							try {
								i || null == o.return || o.return()
							} finally {
								if (n) throw a
							}
						}
					}
					return e
				},
				keyPress: function(e) {
					var t = e.key;
					this.isFixed && (!this.isOpen || "Escape" !== t && "Esc" !== t || this.cancel("escape"))
				},
				cancel: function(e) {
					this.cancelOptions.indexOf(e) < 0 || this.isStatic || (this.onCancel.apply(null, arguments), this.close())
				},
				close: function() {
					this.isOpen = !1, this.$emit("close"), this.$emit("update:open", !1)
				},
				clickedOutside: function(e) {
					if (this.isFixed && this.isOpen && !this.animating) {
						var t = $(this) ? e.composedPath()[0] : e.target;
						this.getWhiteList().indexOf(t) < 0 && this.cancel("outside")
					}
				},
				beforeEnter: function() {
					this.animating = !0
				},
				afterEnter: function() {
					this.animating = !1
				},
				handleScroll: function() {
					"undefined" != typeof window && ("clip" !== this.scroll ? (this.savedScrollTop = this.savedScrollTop ? this.savedScrollTop : document.documentElement.scrollTop, this.open ? document.body.classList.add("is-noscroll") : document.body.classList.remove("is-noscroll"), this.open ? document.body.style.top = "-".concat(this.savedScrollTop, "px") : (document.documentElement.scrollTop = this.savedScrollTop, document.body.style.top = null, this.savedScrollTop = null)) : this.open ? document.documentElement.classList.add("is-clipped") : document.documentElement.classList.remove("is-clipped"))
				},
				onHover: function() {
					var e = this;
					this.delay ? (this.hasLeaved = !1, this.timer = setTimeout(function() {
						e.hasLeaved || (e.isDelayOver = !0), e.timer = null
					}, this.delay)) : this.isDelayOver = !1
				},
				onHoverLeave: function() {
					this.hasLeaved = !0, this.timer = null, this.isDelayOver = !1
				}
			},
			created: function() {
				"undefined" != typeof window && (document.addEventListener("keyup", this.keyPress), document.addEventListener("click", this.clickedOutside))
			},
			mounted: function() {
				"undefined" != typeof window && this.isFixed && document.body.appendChild(this.$el), this.overlay && this.open && this.handleScroll()
			},
			beforeDestroy: function() {
				if ("undefined" != typeof window && (document.removeEventListener("keyup", this.keyPress), document.removeEventListener("click", this.clickedOutside), this.overlay)) {
					document.documentElement.classList.remove("is-clipped");
					var e = this.savedScrollTop ? this.savedScrollTop : document.documentElement.scrollTop;
					document.body.classList.remove("is-noscroll"), document.documentElement.scrollTop = e, document.body.style.top = null
				}
				this.isFixed && g(this.$el)
			}
		}, void 0, !1, void 0, void 0, void 0),
		Wt = {
			install: function(e) {
				z(e, Ht)
			}
		};
	L(Wt);
	var jt = V({
		render: function() {
			var e = this,
				t = e.$createElement,
				i = e._self._c || t;
			return i("span", {
				ref: "tooltip",
				class: e.rootClasses
			}, [i("transition", {
				attrs: {
					name: e.newAnimation
				}
			}, [i("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.active && (e.isActive || e.always),
					expression: "active && (isActive || always)"
				}],
				ref: "content",
				class: ["tooltip-content", e.contentClass]
			}, [e.label ? [e._v(e._s(e.label))] : e.$slots.content ? [e._t("content")] : e._e()], 2)]), i("div", {
				ref: "trigger",
				staticClass: "tooltip-trigger",
				style: e.triggerStyle,
				on: {
					click: e.onClick,
					contextmenu: e.onContextMenu,
					mouseenter: e.onHover,
					"!focus": function(t) {
						return e.onFocus(t)
					},
					"!blur": function(t) {
						return e.close(t)
					},
					mouseleave: e.close
				}
			}, [e._t("default")], 2)], 1)
		},
		staticRenderFns: []
	}, void 0, {
		name: "BTooltip",
		props: {
			active: {
				type: Boolean,
				default: !0
			},
			type: {
				type: String,
				default: function() {
					return T.defaultTooltipType
				}
			},
			label: String,
			delay: {
				type: Number,
				default: function() {
					return T.defaultTooltipDelay
				}
			},
			position: {
				type: String,
				default: "is-top",
				validator: function(e) {
					return ["is-top", "is-bottom", "is-left", "is-right"].indexOf(e) > -1
				}
			},
			triggers: {
				type: Array,
				default: function() {
					return ["hover"]
				}
			},
			always: Boolean,
			square: Boolean,
			dashed: Boolean,
			multilined: Boolean,
			size: {
				type: String,
				default: "is-medium"
			},
			appendToBody: Boolean,
			animated: {
				type: Boolean,
				default: !0
			},
			animation: {
				type: String,
				default: "fade"
			},
			contentClass: String,
			autoClose: {
				type: [Array, Boolean],
				default: !0
			}
		},
		data: function() {
			return {
				isActive: !1,
				triggerStyle: {},
				timer: null,
				_bodyEl: void 0
			}
		},
		computed: {
			rootClasses: function() {
				return ["b-tooltip", this.type, this.position, this.size, {
					"is-square": this.square,
					"is-always": this.always,
					"is-multiline": this.multilined,
					"is-dashed": this.dashed
				}]
			},
			newAnimation: function() {
				return this.animated ? this.animation : void 0
			}
		},
		watch: {
			isActive: function(e) {
				this.appendToBody && this.updateAppendToBody()
			}
		},
		methods: {
			updateAppendToBody: function() {
				var e = this.$refs.tooltip,
					i = this.$refs.trigger;
				if (e && i) {
					var n = this.$data._bodyEl.children[0];
					n.classList.forEach(function(e) {
						return n.classList.remove(e)
					}), this.$vnode && this.$vnode.data && this.$vnode.data.staticClass && n.classList.add(this.$vnode.data.staticClass), this.rootClasses.forEach(function(e) {
						if ("object" === t(e))
							for (var i in e) e[i] && n.classList.add(i);
						else n.classList.add(e)
					}), n.style.width = "".concat(i.clientWidth, "px"), n.style.height = "".concat(i.clientHeight, "px");
					var a = i.getBoundingClientRect(),
						s = a.top + window.scrollY,
						o = a.left + window.scrollX,
						r = this.$data._bodyEl;
					r.style.position = "absolute", r.style.top = "".concat(s, "px"), r.style.left = "".concat(o, "px"), r.style.zIndex = this.isActive || this.always ? "99" : "-1", this.triggerStyle = {
						zIndex: this.isActive || this.always ? "100" : void 0
					}
				}
			},
			onClick: function() {
				var e = this;
				this.triggers.indexOf("click") < 0 || this.$nextTick(function() {
					setTimeout(function() {
						return e.open()
					})
				})
			},
			onHover: function() {
				this.triggers.indexOf("hover") < 0 || this.open()
			},
			onContextMenu: function(e) {
				this.triggers.indexOf("contextmenu") < 0 || (e.preventDefault(), this.open())
			},
			onFocus: function() {
				this.triggers.indexOf("focus") < 0 || this.open()
			},
			open: function() {
				var e = this;
				this.delay ? this.timer = setTimeout(function() {
					e.isActive = !0, e.timer = null
				}, this.delay) : this.isActive = !0
			},
			close: function() {
				"boolean" == typeof this.autoClose && (this.isActive = !this.autoClose, this.autoClose && this.timer && clearTimeout(this.timer))
			},
			clickedOutside: function(e) {
				if (this.isActive && Array.isArray(this.autoClose)) {
					if (this.autoClose.includes("outside") && !this.isInWhiteList(e.target)) return void(this.isActive = !1);
					this.autoClose.includes("inside") && this.isInWhiteList(e.target) && (this.isActive = !1)
				}
			},
			keyPress: function(e) {
				var t = e.key;
				!this.isActive || "Escape" !== t && "Esc" !== t || Array.isArray(this.autoClose) && this.autoClose.indexOf("escape") >= 0 && (this.isActive = !1)
			},
			isInWhiteList: function(e) {
				if (e === this.$refs.content) return !0;
				if (void 0 !== this.$refs.content) {
					var t = this.$refs.content.querySelectorAll("*"),
						i = !0,
						n = !1,
						a = void 0;
					try {
						for (var s, o = t[Symbol.iterator](); !(i = (s = o.next()).done); i = !0) {
							if (e === s.value) return !0
						}
					} catch (e) {
						n = !0, a = e
					} finally {
						try {
							i || null == o.return || o.return()
						} finally {
							if (n) throw a
						}
					}
				}
				return !1
			}
		},
		mounted: function() {
			this.appendToBody && "undefined" != typeof window && (this.$data._bodyEl = b(this.$refs.content), this.updateAppendToBody())
		},
		created: function() {
			"undefined" != typeof window && (document.addEventListener("click", this.clickedOutside), document.addEventListener("keyup", this.keyPress))
		},
		beforeDestroy: function() {
			"undefined" != typeof window && (document.removeEventListener("click", this.clickedOutside), document.removeEventListener("keyup", this.keyPress)), this.appendToBody && g(this.$data._bodyEl)
		}
	}, void 0, !1, void 0, void 0, void 0);
	var Yt = V({
		render: function() {
			var e = this,
				t = e.$createElement,
				i = e._self._c || t;
			return i("div", {
				staticClass: "b-slider-thumb-wrapper",
				class: {
					"is-dragging": e.dragging, "has-indicator": e.indicator
				},
				style: e.wrapperStyle
			}, [i("b-tooltip", {
				attrs: {
					label: e.formattedValue,
					type: e.type,
					always: e.dragging || e.isFocused || e.tooltipAlways,
					active: !e.disabled && e.tooltip
				}
			}, [i("div", e._b({
				staticClass: "b-slider-thumb",
				attrs: {
					tabindex: !e.disabled && 0
				},
				on: {
					mousedown: e.onButtonDown,
					touchstart: e.onButtonDown,
					focus: e.onFocus,
					blur: e.onBlur,
					keydown: [function(t) {
						return !t.type.indexOf("key") && e._k(t.keyCode, "left", 37, t.key, ["Left", "ArrowLeft"]) ? null : "button" in t && 0 !== t.button ? null : (t.preventDefault(), e.onLeftKeyDown(t))
					}, function(t) {
						return !t.type.indexOf("key") && e._k(t.keyCode, "right", 39, t.key, ["Right", "ArrowRight"]) ? null : "button" in t && 2 !== t.button ? null : (t.preventDefault(), e.onRightKeyDown(t))
					}, function(t) {
						return !t.type.indexOf("key") && e._k(t.keyCode, "down", 40, t.key, ["Down", "ArrowDown"]) ? null : (t.preventDefault(), e.onLeftKeyDown(t))
					}, function(t) {
						return !t.type.indexOf("key") && e._k(t.keyCode, "up", 38, t.key, ["Up", "ArrowUp"]) ? null : (t.preventDefault(), e.onRightKeyDown(t))
					}, function(t) {
						return !t.type.indexOf("key") && e._k(t.keyCode, "home", void 0, t.key, void 0) ? null : (t.preventDefault(), e.onHomeKeyDown(t))
					}, function(t) {
						return !t.type.indexOf("key") && e._k(t.keyCode, "end", void 0, t.key, void 0) ? null : (t.preventDefault(), e.onEndKeyDown(t))
					}]
				}
			}, "div", e.$attrs, !1), [e.indicator ? i("span", [e._v(e._s(e.formattedValue))]) : e._e()])])], 1)
		},
		staticRenderFns: []
	}, void 0, {
		name: "BSliderThumb",
		components: i({}, jt.name, jt),
		inheritAttrs: !1,
		props: {
			value: {
				type: Number,
				default: 0
			},
			type: {
				type: String,
				default: ""
			},
			tooltip: {
				type: Boolean,
				default: !0
			},
			indicator: {
				type: Boolean,
				default: !1
			},
			customFormatter: Function,
			format: {
				type: String,
				default: "raw",
				validator: function(e) {
					return ["raw", "percent"].indexOf(e) >= 0
				}
			},
			locale: {
				type: [String, Array],
				default: function() {
					return T.defaultLocale
				}
			},
			tooltipAlways: {
				type: Boolean,
				default: !1
			}
		},
		data: function() {
			return {
				isFocused: !1,
				dragging: !1,
				startX: 0,
				startPosition: 0,
				newPosition: null,
				oldValue: this.value
			}
		},
		computed: {
			disabled: function() {
				return this.$parent.disabled
			},
			max: function() {
				return this.$parent.max
			},
			min: function() {
				return this.$parent.min
			},
			step: function() {
				return this.$parent.step
			},
			precision: function() {
				return this.$parent.precision
			},
			currentPosition: function() {
				return "".concat((this.value - this.min) / (this.max - this.min) * 100, "%")
			},
			wrapperStyle: function() {
				return {
					left: this.currentPosition
				}
			},
			formattedValue: function() {
				return void 0 !== this.customFormatter ? this.customFormatter(this.value) : "percent" === this.format ? new Intl.NumberFormat(this.locale, {
					style: "percent"
				}).format((this.value - this.min) / (this.max - this.min)) : new Intl.NumberFormat(this.locale).format(this.value)
			}
		},
		methods: {
			onFocus: function() {
				this.isFocused = !0
			},
			onBlur: function() {
				this.isFocused = !1
			},
			onButtonDown: function(e) {
				this.disabled || (e.preventDefault(), this.onDragStart(e), "undefined" != typeof window && (document.addEventListener("mousemove", this.onDragging), document.addEventListener("touchmove", this.onDragging), document.addEventListener("mouseup", this.onDragEnd), document.addEventListener("touchend", this.onDragEnd), document.addEventListener("contextmenu", this.onDragEnd)))
			},
			onLeftKeyDown: function() {
				this.disabled || this.value === this.min || (this.newPosition = parseFloat(this.currentPosition) - this.step / (this.max - this.min) * 100, this.setPosition(this.newPosition), this.$parent.emitValue("change"))
			},
			onRightKeyDown: function() {
				this.disabled || this.value === this.max || (this.newPosition = parseFloat(this.currentPosition) + this.step / (this.max - this.min) * 100, this.setPosition(this.newPosition), this.$parent.emitValue("change"))
			},
			onHomeKeyDown: function() {
				this.disabled || this.value === this.min || (this.newPosition = 0, this.setPosition(this.newPosition), this.$parent.emitValue("change"))
			},
			onEndKeyDown: function() {
				this.disabled || this.value === this.max || (this.newPosition = 100, this.setPosition(this.newPosition), this.$parent.emitValue("change"))
			},
			onDragStart: function(e) {
				this.dragging = !0, this.$emit("dragstart"), "touchstart" === e.type && (e.clientX = e.touches[0].clientX), this.startX = e.clientX, this.startPosition = parseFloat(this.currentPosition), this.newPosition = this.startPosition
			},
			onDragging: function(e) {
				if (this.dragging) {
					"touchmove" === e.type && (e.clientX = e.touches[0].clientX);
					var t = (e.clientX - this.startX) / this.$parent.sliderSize() * 100;
					this.newPosition = this.startPosition + t, this.setPosition(this.newPosition)
				}
			},
			onDragEnd: function() {
				this.dragging = !1, this.$emit("dragend"), this.value !== this.oldValue && this.$parent.emitValue("change"), this.setPosition(this.newPosition), "undefined" != typeof window && (document.removeEventListener("mousemove", this.onDragging), document.removeEventListener("touchmove", this.onDragging), document.removeEventListener("mouseup", this.onDragEnd), document.removeEventListener("touchend", this.onDragEnd), document.removeEventListener("contextmenu", this.onDragEnd))
			},
			setPosition: function(e) {
				if (null !== e && !isNaN(e)) {
					e < 0 ? e = 0 : e > 100 && (e = 100);
					var t = 100 / ((this.max - this.min) / this.step),
						i = Math.round(e / t) * t / 100 * (this.max - this.min) + this.min;
					i = parseFloat(i.toFixed(this.precision)), this.$emit("input", i), this.dragging || i === this.oldValue || (this.oldValue = i)
				}
			}
		}
	}, void 0, !1, void 0, void 0, void 0);
	var Kt, qt = V({
		render: function() {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "b-slider-tick",
				class: {
					"is-tick-hidden": this.hidden
				},
				style: this.getTickStyle(this.position)
			}, [this.$slots.default ? t("span", {
				staticClass: "b-slider-tick-label"
			}, [this._t("default")], 2) : this._e()])
		},
		staticRenderFns: []
	}, void 0, {
		name: "BSliderTick",
		props: {
			value: {
				type: Number,
				default: 0
			}
		},
		computed: {
			position: function() {
				var e = (this.value - this.$parent.min) / (this.$parent.max - this.$parent.min) * 100;
				return e >= 0 && e <= 100 ? e : 0
			},
			hidden: function() {
				return this.value === this.$parent.min || this.value === this.$parent.max
			}
		},
		methods: {
			getTickStyle: function(e) {
				return {
					left: e + "%"
				}
			}
		},
		created: function() {
			if (!this.$parent.$data._isSlider) throw this.$destroy(), new Error("You should wrap bSliderTick on a bSlider")
		}
	}, void 0, !1, void 0, void 0, void 0);
	var Ut = V({
			render: function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "b-slider",
					class: [e.size, e.type, e.rootClasses],
					on: {
						click: e.onSliderClick
					}
				}, [i("div", {
					ref: "slider",
					staticClass: "b-slider-track"
				}, [i("div", {
					staticClass: "b-slider-fill",
					style: e.barStyle
				}), e.ticks ? e._l(e.tickValues, function(e, t) {
					return i("b-slider-tick", {
						key: t,
						attrs: {
							value: e
						}
					})
				}) : e._e(), e._t("default"), i("b-slider-thumb", {
					ref: "button1",
					attrs: {
						"tooltip-always": e.tooltipAlways,
						type: e.newTooltipType,
						tooltip: e.tooltip,
						"custom-formatter": e.customFormatter,
						indicator: e.indicator,
						format: e.format,
						locale: e.locale,
						role: "slider",
						"aria-valuenow": e.value1,
						"aria-valuemin": e.min,
						"aria-valuemax": e.max,
						"aria-orientation": "horizontal",
						"aria-label": Array.isArray(e.ariaLabel) ? e.ariaLabel[0] : e.ariaLabel,
						"aria-disabled": e.disabled
					},
					on: {
						dragstart: e.onDragStart,
						dragend: e.onDragEnd
					},
					model: {
						value: e.value1,
						callback: function(t) {
							e.value1 = t
						},
						expression: "value1"
					}
				}), e.isRange ? i("b-slider-thumb", {
					ref: "button2",
					attrs: {
						"tooltip-always": e.tooltipAlways,
						type: e.newTooltipType,
						tooltip: e.tooltip,
						"custom-formatter": e.customFormatter,
						indicator: e.indicator,
						format: e.format,
						locale: e.locale,
						role: "slider",
						"aria-valuenow": e.value2,
						"aria-valuemin": e.min,
						"aria-valuemax": e.max,
						"aria-orientation": "horizontal",
						"aria-label": Array.isArray(e.ariaLabel) ? e.ariaLabel[1] : "",
						"aria-disabled": e.disabled
					},
					on: {
						dragstart: e.onDragStart,
						dragend: e.onDragEnd
					},
					model: {
						value: e.value2,
						callback: function(t) {
							e.value2 = t
						},
						expression: "value2"
					}
				}) : e._e()], 2)])
			},
			staticRenderFns: []
		}, void 0, {
			name: "BSlider",
			components: (Kt = {}, i(Kt, Yt.name, Yt), i(Kt, qt.name, qt), Kt),
			props: {
				value: {
					type: [Number, Array],
					default: 0
				},
				min: {
					type: Number,
					default: 0
				},
				max: {
					type: Number,
					default: 100
				},
				step: {
					type: Number,
					default: 1
				},
				type: {
					type: String,
					default: "is-primary"
				},
				size: String,
				ticks: {
					type: Boolean,
					default: !1
				},
				tooltip: {
					type: Boolean,
					default: !0
				},
				tooltipType: String,
				rounded: {
					type: Boolean,
					default: !1
				},
				disabled: {
					type: Boolean,
					default: !1
				},
				lazy: {
					type: Boolean,
					default: !1
				},
				customFormatter: Function,
				ariaLabel: [String, Array],
				biggerSliderFocus: {
					type: Boolean,
					default: !1
				},
				indicator: {
					type: Boolean,
					default: !1
				},
				format: {
					type: String,
					default: "raw",
					validator: function(e) {
						return ["raw", "percent"].indexOf(e) >= 0
					}
				},
				locale: {
					type: [String, Array],
					default: function() {
						return T.defaultLocale
					}
				},
				tooltipAlways: {
					type: Boolean,
					default: !1
				}
			},
			data: function() {
				return {
					value1: null,
					value2: null,
					dragging: !1,
					isRange: !1,
					_isSlider: !0
				}
			},
			computed: {
				newTooltipType: function() {
					return this.tooltipType ? this.tooltipType : this.type
				},
				tickValues: function() {
					if (!this.ticks || this.min > this.max || 0 === this.step) return [];
					for (var e = [], t = this.min + this.step; t < this.max; t += this.step) e.push(t);
					return e
				},
				minValue: function() {
					return Math.min(this.value1, this.value2)
				},
				maxValue: function() {
					return Math.max(this.value1, this.value2)
				},
				barSize: function() {
					return this.isRange ? "".concat(100 * (this.maxValue - this.minValue) / (this.max - this.min), "%") : "".concat(100 * (this.value1 - this.min) / (this.max - this.min), "%")
				},
				barStart: function() {
					return this.isRange ? "".concat(100 * (this.minValue - this.min) / (this.max - this.min), "%") : "0%"
				},
				precision: function() {
					var e = [this.min, this.max, this.step].map(function(e) {
						var t = ("" + e).split(".")[1];
						return t ? t.length : 0
					});
					return Math.max.apply(Math, o(e))
				},
				barStyle: function() {
					return {
						width: this.barSize,
						left: this.barStart
					}
				},
				rootClasses: function() {
					return {
						"is-rounded": this.rounded,
						"is-dragging": this.dragging,
						"is-disabled": this.disabled,
						"slider-focus": this.biggerSliderFocus
					}
				}
			},
			watch: {
				value: function(e) {
					this.setValues(e)
				},
				value1: function() {
					this.onInternalValueUpdate()
				},
				value2: function() {
					this.onInternalValueUpdate()
				},
				min: function() {
					this.setValues(this.value)
				},
				max: function() {
					this.setValues(this.value)
				}
			},
			methods: {
				setValues: function(e) {
					if (!(this.min > this.max))
						if (Array.isArray(e)) {
							this.isRange = !0;
							var t = "number" != typeof e[0] || isNaN(e[0]) ? this.min : d(e[0], this.min, this.max),
								i = "number" != typeof e[1] || isNaN(e[1]) ? this.max : d(e[1], this.min, this.max);
							this.value1 = this.isThumbReversed ? i : t, this.value2 = this.isThumbReversed ? t : i
						} else this.isRange = !1, this.value1 = isNaN(e) ? this.min : d(e, this.min, this.max), this.value2 = null
				},
				onInternalValueUpdate: function() {
					this.isRange && (this.isThumbReversed = this.value1 > this.value2), this.lazy && this.dragging || this.emitValue("input"), this.dragging && this.emitValue("dragging")
				},
				sliderSize: function() {
					return this.$refs.slider.getBoundingClientRect().width
				},
				onSliderClick: function(e) {
					if (!this.disabled && !this.isTrackClickDisabled) {
						var t = this.$refs.slider.getBoundingClientRect().left,
							i = (e.clientX - t) / this.sliderSize() * 100,
							n = this.min + i * (this.max - this.min) / 100,
							a = Math.abs(n - this.value1);
						if (this.isRange) {
							var s = Math.abs(n - this.value2);
							if (a <= s) {
								if (a < this.step / 2) return;
								this.$refs.button1.setPosition(i)
							} else {
								if (s < this.step / 2) return;
								this.$refs.button2.setPosition(i)
							}
						} else {
							if (a < this.step / 2) return;
							this.$refs.button1.setPosition(i)
						}
						this.emitValue("change")
					}
				},
				onDragStart: function() {
					this.dragging = !0, this.$emit("dragstart")
				},
				onDragEnd: function() {
					var e = this;
					this.isTrackClickDisabled = !0, setTimeout(function() {
						e.isTrackClickDisabled = !1
					}, 0), this.dragging = !1, this.$emit("dragend"), this.lazy && this.emitValue("input")
				},
				emitValue: function(e) {
					this.$emit(e, this.isRange ? [this.minValue, this.maxValue] : this.value1)
				}
			},
			created: function() {
				this.isThumbReversed = !1, this.isTrackClickDisabled = !1, this.setValues(this.value)
			}
		}, void 0, !1, void 0, void 0, void 0),
		Xt = {
			install: function(e) {
				z(e, Ut), z(e, qt)
			}
		};
	L(Xt);
	var Qt, Gt = V({
			render: function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("transition", {
					attrs: {
						"enter-active-class": e.transition.enter,
						"leave-active-class": e.transition.leave
					}
				}, [i("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.isActive,
						expression: "isActive"
					}],
					staticClass: "snackbar",
					class: [e.type, e.position],
					attrs: {
						role: e.actionText ? "alertdialog" : "alert"
					}
				}, [e.$slots.default ? [e._t("default")] : [i("div", {
					staticClass: "text",
					domProps: {
						innerHTML: e._s(e.message)
					}
				})], e.cancelText ? i("div", {
					staticClass: "action is-light is-cancel",
					on: {
						click: e.close
					}
				}, [i("button", {
					staticClass: "button"
				}, [e._v(e._s(e.cancelText))])]) : e._e(), e.actionText ? i("div", {
					staticClass: "action",
					class: e.type,
					on: {
						click: e.action
					}
				}, [i("button", {
					staticClass: "button"
				}, [e._v(e._s(e.actionText))])]) : e._e()], 2)])
			},
			staticRenderFns: []
		}, void 0, {
			name: "BSnackbar",
			mixins: [rt],
			props: {
				actionText: {
					type: String,
					default: "OK"
				},
				onAction: {
					type: Function,
					default: function() {}
				},
				cancelText: {
					type: null | String,
					default: null
				}
			},
			data: function() {
				return {
					newDuration: this.duration || T.defaultSnackbarDuration
				}
			},
			methods: {
				action: function() {
					this.onAction(), this.close()
				}
			}
		}, void 0, !1, void 0, void 0, void 0),
		Zt = {
			open: function(e) {
				var t;
				"string" == typeof e && (e = {
					message: e
				});
				var i, n = {
					type: "is-success",
					position: T.defaultSnackbarPosition || "is-bottom-right"
				};
				e.parent && (t = e.parent, delete e.parent), Array.isArray(e.message) && (i = e.message, delete e.message);
				var a = m(n, e),
					s = new(("undefined" != typeof window && window.Vue ? window.Vue : Qt || P).extend(Gt))({
						parent: t,
						el: document.createElement("div"),
						propsData: a
					});
				return i && (s.$slots.default = i, s.$forceUpdate()), s
			}
		},
		Jt = {
			install: function(e) {
				Qt = e, H(e, "snackbar", Zt)
			}
		};
	L(Jt);
	var ei = {
			name: "BSlotComponent",
			props: {
				component: {
					type: Object,
					required: !0
				},
				name: {
					type: String,
					default: "default"
				},
				scoped: {
					type: Boolean
				},
				props: {
					type: Object
				},
				tag: {
					type: String,
					default: "div"
				},
				event: {
					type: String,
					default: "hook:updated"
				}
			},
			methods: {
				refresh: function() {
					this.$forceUpdate()
				}
			},
			created: function() {
				y(this.component) && this.component.$on(this.event, this.refresh)
			},
			beforeDestroy: function() {
				y(this.component) && this.component.$off(this.event, this.refresh)
			},
			render: function(e) {
				if (y(this.component)) return e(this.tag, {}, this.scoped ? this.component.$scopedSlots[this.name](this.props) : this.component.$slots[this.name])
			}
		},
		ti = function(e) {
			var t;
			return {
				mixins: [K(e, 3)],
				components: (t = {}, i(t, O.name, O), i(t, ei.name, ei), t),
				props: {
					value: {
						type: [String, Number],
						default: void 0
					},
					size: String,
					animated: {
						type: Boolean,
						default: !0
					},
					animation: String,
					animateInitially: Boolean,
					vertical: {
						type: Boolean,
						default: !1
					},
					position: String,
					destroyOnHide: {
						type: Boolean,
						default: !1
					}
				},
				data: function() {
					return {
						activeId: this.value,
						defaultSlots: [],
						contentHeight: 0,
						isTransitioning: !1
					}
				},
				mounted: function() {
					if ("number" == typeof this.value) {
						var e = d(this.value, 0, this.items.length - 1);
						this.activeId = this.items[e].value
					} else this.activeId = this.value
				},
				computed: {
					activeItem: function() {
						var e = this;
						return void 0 === this.activeId ? this.items[0] : null === this.activeId ? null : this.childItems.find(function(t) {
							return t.value === e.activeId
						})
					},
					items: function() {
						return this.sortedItems
					}
				},
				watch: {
					value: function(e) {
						"number" == typeof e ? (e = d(e, 0, this.items.length - 1), this.activeId = this.items[e].value) : this.activeId = e
					},
					activeId: function(e, t) {
						var i = null != t ? this.childItems.find(function(e) {
							return e.value === t
						}) : null;
						i && this.activeItem && (i.deactivate(this.activeItem.index), this.activeItem.activate(i.index)), (e = this.activeItem ? "number" == typeof this.value ? this.items.indexOf(this.activeItem) : this.activeItem.value : void 0) !== this.value && this.$emit("input", e)
					}
				},
				methods: {
					childClick: function(e) {
						this.activeId = e.value
					},
					getNextItemIdx: function(e) {
						for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i = null, n = e + 1; n < this.items.length; n++) {
							var a = this.items[n];
							if (a.visible && (!t || t && !a.disabled)) {
								i = n;
								break
							}
						}
						return i
					},
					getPrevItemIdx: function(e) {
						for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i = null, n = e - 1; n >= 0; n--) {
							var a = this.items[n];
							if (a.visible && (!t || t && !a.disabled)) {
								i = n;
								break
							}
						}
						return i
					}
				}
			}
		};
	var ii = V({
			render: function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "b-steps",
					class: e.wrapperClasses
				}, [i("nav", {
					staticClass: "steps",
					class: e.mainClasses
				}, [i("ul", {
					staticClass: "step-items"
				}, e._l(e.items, function(t) {
					return i("li", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.visible,
							expression: "childItem.visible"
						}],
						key: t.value,
						staticClass: "step-item",
						class: [t.type || e.type, t.headerClass, {
							"is-active": t.isActive,
							"is-previous": e.activeItem.index > t.index
						}]
					}, [i("a", {
						staticClass: "step-link",
						class: {
							"is-clickable": e.isItemClickable(t)
						},
						on: {
							click: function(i) {
								e.isItemClickable(t) && e.childClick(t)
							}
						}
					}, [i("div", {
						staticClass: "step-marker"
					}, [t.icon ? i("b-icon", {
						attrs: {
							icon: t.icon,
							pack: t.iconPack,
							size: e.size
						}
					}) : t.step ? i("span", [e._v(e._s(t.step))]) : e._e()], 1), i("div", {
						staticClass: "step-details"
					}, [i("span", {
						staticClass: "step-title"
					}, [e._v(e._s(t.label))])])])])
				}), 0)]), i("section", {
					staticClass: "step-content",
					class: {
						"is-transitioning": e.isTransitioning
					}
				}, [e._t("default")], 2), e._t("navigation", [e.hasNavigation ? i("nav", {
					staticClass: "step-navigation"
				}, [i("a", {
					staticClass: "pagination-previous",
					attrs: {
						role: "button",
						disabled: e.navigationProps.previous.disabled,
						"aria-label": e.ariaPreviousLabel
					},
					on: {
						click: function(t) {
							return t.preventDefault(), e.navigationProps.previous.action(t)
						}
					}
				}, [i("b-icon", {
					attrs: {
						icon: e.iconPrev,
						pack: e.iconPack,
						both: "",
						"aria-hidden": "true"
					}
				})], 1), i("a", {
					staticClass: "pagination-next",
					attrs: {
						role: "button",
						disabled: e.navigationProps.next.disabled,
						"aria-label": e.ariaNextLabel
					},
					on: {
						click: function(t) {
							return t.preventDefault(), e.navigationProps.next.action(t)
						}
					}
				}, [i("b-icon", {
					attrs: {
						icon: e.iconNext,
						pack: e.iconPack,
						both: "",
						"aria-hidden": "true"
					}
				})], 1)]) : e._e()], {
					previous: e.navigationProps.previous,
					next: e.navigationProps.next
				})], 2)
			},
			staticRenderFns: []
		}, void 0, {
			name: "BSteps",
			components: i({}, O.name, O),
			mixins: [ti("step")],
			props: {
				type: [String, Object],
				iconPack: String,
				iconPrev: {
					type: String,
					default: function() {
						return T.defaultIconPrev
					}
				},
				iconNext: {
					type: String,
					default: function() {
						return T.defaultIconNext
					}
				},
				hasNavigation: {
					type: Boolean,
					default: !0
				},
				labelPosition: {
					type: String,
					validator: function(e) {
						return ["bottom", "right", "left"].indexOf(e) > -1
					},
					default: "bottom"
				},
				rounded: {
					type: Boolean,
					default: !0
				},
				mobileMode: {
					type: String,
					validator: function(e) {
						return ["minimalist", "compact"].indexOf(e) > -1
					},
					default: "minimalist"
				},
				ariaNextLabel: String,
				ariaPreviousLabel: String
			},
			computed: {
				activeItem: function() {
					var e = this;
					return this.childItems.filter(function(t) {
						return t.value === e.activeId
					})[0] || this.items[0]
				},
				wrapperClasses: function() {
					return [this.size, i({
						"is-vertical": this.vertical
					}, this.position, this.position && this.vertical)]
				},
				mainClasses: function() {
					return [this.type, i({
						"has-label-right": "right" === this.labelPosition,
						"has-label-left": "left" === this.labelPosition,
						"is-animated": this.animated,
						"is-rounded": this.rounded
					}, "mobile-".concat(this.mobileMode), null !== this.mobileMode)]
				},
				hasPrev: function() {
					return null !== this.prevItemIdx
				},
				nextItemIdx: function() {
					var e = this.activeItem ? this.items.indexOf(this.activeItem) : 0;
					return this.getNextItemIdx(e)
				},
				nextItem: function() {
					var e = null;
					return null !== this.nextItemIdx && (e = this.items[this.nextItemIdx]), e
				},
				prevItemIdx: function() {
					if (!this.activeItem) return null;
					var e = this.items.indexOf(this.activeItem);
					return this.getPrevItemIdx(e)
				},
				prevItem: function() {
					if (!this.activeItem) return null;
					var e = null;
					return null !== this.prevItemIdx && (e = this.items[this.prevItemIdx]), e
				},
				hasNext: function() {
					return null !== this.nextItemIdx
				},
				navigationProps: function() {
					return {
						previous: {
							disabled: !this.hasPrev,
							action: this.prev
						},
						next: {
							disabled: !this.hasNext,
							action: this.next
						}
					}
				}
			},
			methods: {
				isItemClickable: function(e) {
					return void 0 === e.clickable ? e.index < this.activeItem.index : e.clickable
				},
				prev: function() {
					this.hasPrev && (this.activeId = this.prevItem.value)
				},
				next: function() {
					this.hasNext && (this.activeId = this.nextItem.value)
				}
			}
		}, void 0, !1, void 0, void 0, void 0),
		ni = function(e) {
			return {
				mixins: [U(e, 1)],
				props: {
					label: String,
					icon: String,
					iconPack: String,
					visible: {
						type: Boolean,
						default: !0
					},
					value: {
						type: String,
						default: function() {
							return this._uid.toString()
						}
					},
					headerClass: {
						type: [String, Array, Object],
						default: null
					}
				},
				data: function() {
					return {
						transitionName: null,
						elementClass: "item",
						elementRole: null
					}
				},
				computed: {
					isActive: function() {
						return this.parent.activeItem === this
					}
				},
				methods: {
					activate: function(e) {
						this.transitionName = this.index < e ? this.parent.vertical ? "slide-down" : "slide-next" : this.parent.vertical ? "slide-up" : "slide-prev"
					},
					deactivate: function(e) {
						this.transitionName = e < this.index ? this.parent.vertical ? "slide-down" : "slide-next" : this.parent.vertical ? "slide-up" : "slide-prev"
					}
				},
				render: function(e) {
					var t = this;
					if (!this.parent.destroyOnHide || this.isActive && this.visible) {
						var i = e("div", {
							directives: [{
								name: "show",
								value: this.isActive && this.visible
							}],
							attrs: {
								class: this.elementClass,
								role: this.elementRole,
								id: "".concat(this.value, "-content"),
								"aria-labelledby": this.elementRole ? "".concat(this.value, "-label") : null,
								tabindex: this.isActive ? 0 : -1
							}
						}, this.$slots.default);
						return this.parent.animated ? e("transition", {
							props: {
								name: this.parent.animation || this.transitionName,
								appear: !0 === this.parent.animateInitially || void 0
							},
							on: {
								"before-enter": function() {
									t.parent.isTransitioning = !0
								},
								"after-enter": function() {
									t.parent.isTransitioning = !1
								}
							}
						}, [i]) : i
					}
				}
			}
		};
	var ai = V({}, void 0, {
			name: "BStepItem",
			mixins: [ni("step")],
			props: {
				step: [String, Number],
				type: [String, Object],
				clickable: {
					type: Boolean,
					default: void 0
				}
			},
			data: function() {
				return {
					elementClass: "step-item"
				}
			}
		}, void 0, void 0, void 0, void 0, void 0),
		si = {
			install: function(e) {
				z(e, ii), z(e, ai)
			}
		};
	L(si);
	var oi, ri = V({
			render: function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("label", {
					ref: "label",
					staticClass: "switch",
					class: e.newClass,
					attrs: {
						disabled: e.disabled
					},
					on: {
						click: e.focus,
						keydown: function(t) {
							return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : (t.preventDefault(), e.$refs.label.click())
						},
						mousedown: function(t) {
							e.isMouseDown = !0
						},
						mouseup: function(t) {
							e.isMouseDown = !1
						},
						mouseout: function(t) {
							e.isMouseDown = !1
						},
						blur: function(t) {
							e.isMouseDown = !1
						}
					}
				}, [i("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.computedValue,
						expression: "computedValue"
					}],
					ref: "input",
					attrs: {
						type: "checkbox",
						disabled: e.disabled,
						name: e.name,
						required: e.required,
						"true-value": e.trueValue,
						"false-value": e.falseValue,
						"aria-labelledby": e.ariaLabelledby
					},
					domProps: {
						value: e.nativeValue,
						checked: Array.isArray(e.computedValue) ? e._i(e.computedValue, e.nativeValue) > -1 : e._q(e.computedValue, e.trueValue)
					},
					on: {
						click: function(e) {
							e.stopPropagation()
						},
						change: function(t) {
							var i = e.computedValue,
								n = t.target,
								a = n.checked ? e.trueValue : e.falseValue;
							if (Array.isArray(i)) {
								var s = e.nativeValue,
									o = e._i(i, s);
								n.checked ? o < 0 && (e.computedValue = i.concat([s])) : o > -1 && (e.computedValue = i.slice(0, o).concat(i.slice(o + 1)))
							} else e.computedValue = a
						}
					}
				}), i("span", {
					staticClass: "check",
					class: e.checkClasses
				}), e.showControlLabel ? i("span", {
					staticClass: "control-label",
					attrs: {
						id: e.ariaLabelledby
					}
				}, [e._t("default")], 2) : e._e()])
			},
			staticRenderFns: []
		}, void 0, {
			name: "BSwitch",
			props: {
				value: [String, Number, Boolean, Function, Object, Array, Date],
				nativeValue: [String, Number, Boolean, Function, Object, Array, Date],
				disabled: Boolean,
				type: String,
				passiveType: String,
				name: String,
				required: Boolean,
				size: String,
				ariaLabelledby: String,
				trueValue: {
					type: [String, Number, Boolean, Function, Object, Array, Date],
					default: !0
				},
				falseValue: {
					type: [String, Number, Boolean, Function, Object, Array, Date],
					default: !1
				},
				rounded: {
					type: Boolean,
					default: function() {
						return T.defaultSwitchRounded
					}
				},
				outlined: {
					type: Boolean,
					default: !1
				},
				leftLabel: {
					type: Boolean,
					default: !1
				}
			},
			data: function() {
				return {
					newValue: this.value,
					isMouseDown: !1
				}
			},
			computed: {
				computedValue: {
					get: function() {
						return this.newValue
					},
					set: function(e) {
						this.newValue = e, this.$emit("input", e)
					}
				},
				newClass: function() {
					return [this.size, {
						"is-disabled": this.disabled,
						"is-rounded": this.rounded,
						"is-outlined": this.outlined,
						"has-left-label": this.leftLabel
					}]
				},
				checkClasses: function() {
					return [{
						"is-elastic": this.isMouseDown && !this.disabled
					}, this.passiveType && "".concat(this.passiveType, "-passive"), this.type]
				},
				showControlLabel: function() {
					return !!this.$slots.default
				}
			},
			watch: {
				value: function(e) {
					this.newValue = e
				}
			},
			methods: {
				focus: function() {
					this.$refs.input.focus()
				}
			}
		}, void 0, !1, void 0, void 0, void 0),
		li = {
			install: function(e) {
				z(e, ri)
			}
		};
	L(li);
	var ci = V({
		render: function() {
			var e = this,
				t = e.$createElement,
				i = e._self._c || t;
			return i("div", {
				staticClass: "field table-mobile-sort"
			}, [i("div", {
				staticClass: "field has-addons"
			}, [e.sortMultiple ? i("b-select", {
				attrs: {
					expanded: ""
				},
				model: {
					value: e.sortMultipleSelect,
					callback: function(t) {
						e.sortMultipleSelect = t
					},
					expression: "sortMultipleSelect"
				}
			}, e._l(e.columns, function(t, n) {
				return t.sortable ? i("option", {
					key: n,
					domProps: {
						value: t
					}
				}, [e._v(" " + e._s(e.getLabel(t)) + " "), e.getSortingObjectOfColumn(t) ? [e.columnIsDesc(t) ? [e._v(" ↓ ")] : [e._v(" ↑ ")]] : e._e()], 2) : e._e()
			}), 0) : i("b-select", {
				attrs: {
					expanded: ""
				},
				model: {
					value: e.mobileSort,
					callback: function(t) {
						e.mobileSort = t
					},
					expression: "mobileSort"
				}
			}, [e.placeholder ? [i("option", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.showPlaceholder,
					expression: "showPlaceholder"
				}],
				attrs: {
					selected: "",
					disabled: "",
					hidden: ""
				},
				domProps: {
					value: {}
				}
			}, [e._v(" " + e._s(e.placeholder) + " ")])] : e._e(), e._l(e.columns, function(t, n) {
				return t.sortable ? i("option", {
					key: n,
					domProps: {
						value: t
					}
				}, [e._v(" " + e._s(t.label) + " ")]) : e._e()
			})], 2), i("div", {
				staticClass: "control"
			}, [e.sortMultiple && e.sortMultipleData.length > 0 ? [i("button", {
				staticClass: "button is-primary",
				on: {
					click: e.sort
				}
			}, [i("b-icon", {
				class: {
					"is-desc": e.columnIsDesc(e.sortMultipleSelect)
				},
				attrs: {
					icon: e.sortIcon,
					pack: e.iconPack,
					size: e.sortIconSize,
					both: ""
				}
			})], 1), i("button", {
				staticClass: "button is-primary",
				on: {
					click: e.removePriority
				}
			}, [i("b-icon", {
				attrs: {
					icon: "delete",
					size: e.sortIconSize,
					both: ""
				}
			})], 1)] : e.sortMultiple ? e._e() : i("button", {
				staticClass: "button is-primary",
				on: {
					click: e.sort
				}
			}, [i("b-icon", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.currentSortColumn === e.mobileSort,
					expression: "currentSortColumn === mobileSort"
				}],
				class: {
					"is-desc": !e.isAsc
				},
				attrs: {
					icon: e.sortIcon,
					pack: e.iconPack,
					size: e.sortIconSize,
					both: ""
				}
			})], 1)], 2)], 1)])
		},
		staticRenderFns: []
	}, void 0, {
		name: "BTableMobileSort",
		components: (oi = {}, i(oi, ye.name, ye), i(oi, O.name, O), oi),
		props: {
			currentSortColumn: Object,
			sortMultipleData: Array,
			isAsc: Boolean,
			columns: Array,
			placeholder: String,
			iconPack: String,
			sortIcon: {
				type: String,
				default: "arrow-up"
			},
			sortIconSize: {
				type: String,
				default: "is-small"
			},
			sortMultiple: {
				type: Boolean,
				default: !1
			}
		},
		data: function() {
			return {
				sortMultipleSelect: "",
				mobileSort: this.currentSortColumn,
				defaultEvent: {
					shiftKey: !0,
					altKey: !0,
					ctrlKey: !0
				},
				ignoreSort: !1
			}
		},
		computed: {
			showPlaceholder: function() {
				var e = this;
				return !this.columns || !this.columns.some(function(t) {
					return t === e.mobileSort
				})
			}
		},
		watch: {
			sortMultipleSelect: function(e) {
				this.ignoreSort ? this.ignoreSort = !1 : this.$emit("sort", e, this.defaultEvent)
			},
			mobileSort: function(e) {
				this.currentSortColumn !== e && this.$emit("sort", e, this.defaultEvent)
			},
			currentSortColumn: function(e) {
				this.mobileSort = e
			}
		},
		methods: {
			removePriority: function() {
				var e = this;
				this.$emit("removePriority", this.sortMultipleSelect), this.ignoreSort = !0;
				var t = this.sortMultipleData.filter(function(t) {
					return t.field !== e.sortMultipleSelect.field
				}).map(function(e) {
					return e.field
				});
				this.sortMultipleSelect = this.columns.filter(function(e) {
					return t.includes(e.field)
				})[0]
			},
			getSortingObjectOfColumn: function(e) {
				return this.sortMultipleData.filter(function(t) {
					return t.field === e.field
				})[0]
			},
			columnIsDesc: function(e) {
				var t = this.getSortingObjectOfColumn(e);
				return !t || !(!t.order || "desc" !== t.order)
			},
			getLabel: function(e) {
				var t = this.getSortingObjectOfColumn(e);
				return t ? e.label + "(" + (this.sortMultipleData.indexOf(t) + 1) + ")" : e.label
			},
			sort: function() {
				this.$emit("sort", this.sortMultiple ? this.sortMultipleSelect : this.mobileSort, this.defaultEvent)
			}
		}
	}, void 0, !1, void 0, void 0, void 0);
	var ui = V({}, void 0, {
		name: "BTableColumn",
		inject: {
			$table: {
				name: "$table",
				default: !1
			}
		},
		props: {
			label: String,
			customKey: [String, Number],
			field: String,
			meta: [String, Number, Boolean, Function, Object, Array],
			width: [Number, String],
			numeric: Boolean,
			centered: Boolean,
			searchable: Boolean,
			sortable: Boolean,
			visible: {
				type: Boolean,
				default: !0
			},
			subheading: [String, Number],
			customSort: Function,
			customSearch: Function,
			sticky: Boolean,
			headerSelectable: Boolean,
			headerClass: String,
			cellClass: String,
			thAttrs: {
				type: Function,
				default: function() {
					return {}
				}
			},
			tdAttrs: {
				type: Function,
				default: function() {
					return {}
				}
			}
		},
		data: function() {
			return {
				newKey: this.customKey || this.label,
				_isTableColumn: !0
			}
		},
		computed: {
			thClasses: function() {
				var e = this.thAttrs(this),
					t = [this.headerClass, {
						"is-sortable": this.sortable,
						"is-sticky": this.sticky,
						"is-unselectable": this.isHeaderUnSelectable
					}];
				return e && e.class && t.push(e.class), t
			},
			thStyle: function() {
				var e = this.thAttrs(this),
					t = [this.style];
				return e && e.style && t.push(e.style), t
			},
			rootClasses: function() {
				return [this.cellClass, {
					"has-text-right": this.numeric && !this.centered,
					"has-text-centered": this.centered,
					"is-sticky": this.sticky
				}]
			},
			style: function() {
				return {
					width: S(this.width)
				}
			},
			hasDefaultSlot: function() {
				return !!this.$scopedSlots.default
			},
			isHeaderUnSelectable: function() {
				return !this.headerSelectable && this.sortable
			}
		},
		methods: {
			getRootClasses: function(e) {
				var t = this.tdAttrs(e, this),
					i = [this.rootClasses];
				return t && t.class && i.push(t.class), i
			},
			getRootStyle: function(e) {
				var t = this.tdAttrs(e, this),
					i = [];
				return t && t.style && i.push(t.style), i
			}
		},
		created: function() {
			if (!this.$table) throw this.$destroy(), new Error("You should wrap bTableColumn on a bTable");
			this.$table.refreshSlots()
		},
		render: function(e) {
			return null
		}
	}, void 0, void 0, void 0, void 0, void 0);
	var di, hi = V({
		render: function() {
			var e = this,
				t = e.$createElement,
				i = e._self._c || t;
			return i("div", {
				staticClass: "top level"
			}, [i("div", {
				staticClass: "level-left"
			}, [e._t("default")], 2), i("div", {
				staticClass: "level-right"
			}, [e.paginated ? i("div", {
				staticClass: "level-item"
			}, [i("b-pagination", {
				attrs: {
					"icon-pack": e.iconPack,
					total: e.total,
					"per-page": e.perPage,
					simple: e.paginationSimple,
					size: e.paginationSize,
					current: e.newCurrentPage,
					rounded: e.rounded,
					"aria-next-label": e.ariaNextLabel,
					"aria-previous-label": e.ariaPreviousLabel,
					"aria-page-label": e.ariaPageLabel,
					"aria-current-label": e.ariaCurrentLabel
				},
				on: {
					change: e.pageChanged
				}
			})], 1) : e._e()])])
		},
		staticRenderFns: []
	}, void 0, {
		name: "BTablePagination",
		components: i({}, Bt.name, Bt),
		props: {
			paginated: Boolean,
			total: [Number, String],
			perPage: [Number, String],
			currentPage: [Number, String],
			paginationSimple: Boolean,
			paginationSize: String,
			rounded: Boolean,
			iconPack: String,
			ariaNextLabel: String,
			ariaPreviousLabel: String,
			ariaPageLabel: String,
			ariaCurrentLabel: String
		},
		data: function() {
			return {
				newCurrentPage: this.currentPage
			}
		},
		watch: {
			currentPage: function(e) {
				this.newCurrentPage = e
			}
		},
		methods: {
			pageChanged: function(e) {
				this.newCurrentPage = e > 0 ? e : 1, this.$emit("update:currentPage", this.newCurrentPage), this.$emit("page-change", this.newCurrentPage)
			}
		}
	}, void 0, !1, void 0, void 0, void 0);
	var fi = V({
			render: function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "b-table"
				}, [e._t("default"), e.mobileCards && e.hasSortablenewColumns ? i("b-table-mobile-sort", {
					attrs: {
						"current-sort-column": e.currentSortColumn,
						"sort-multiple": e.sortMultiple,
						"sort-multiple-data": e.sortMultipleDataComputed,
						"is-asc": e.isAsc,
						columns: e.newColumns,
						placeholder: e.mobileSortPlaceholder,
						"icon-pack": e.iconPack,
						"sort-icon": e.sortIcon,
						"sort-icon-size": e.sortIconSize
					},
					on: {
						sort: function(t, i) {
							return e.sort(t, null, i)
						},
						removePriority: function(t) {
							return e.removeSortingPriority(t)
						}
					}
				}) : e._e(), !e.paginated || "top" !== e.paginationPosition && "both" !== e.paginationPosition ? e._e() : [e._t("pagination", [i("b-table-pagination", e._b({
					attrs: {
						"per-page": e.perPage,
						paginated: e.paginated,
						rounded: e.paginationRounded,
						"icon-pack": e.iconPack,
						total: e.newDataTotal,
						"current-page": e.newCurrentPage,
						"aria-next-label": e.ariaNextLabel,
						"aria-previous-label": e.ariaPreviousLabel,
						"aria-page-label": e.ariaPageLabel,
						"aria-current-label": e.ariaCurrentLabel
					},
					on: {
						"update:currentPage": function(t) {
							e.newCurrentPage = t
						},
						"update:current-page": function(t) {
							e.newCurrentPage = t
						},
						"page-change": function(t) {
							return e.$emit("page-change", t)
						}
					}
				}, "b-table-pagination", e.$attrs, !1), [e._t("top-left")], 2)])], i("div", {
					staticClass: "table-wrapper",
					class: e.tableWrapperClasses,
					style: e.tableStyle
				}, [i("table", {
					staticClass: "table",
					class: e.tableClasses,
					attrs: {
						tabindex: !!e.focusable && 0
					},
					on: {
						keydown: [function(t) {
							return !t.type.indexOf("key") && e._k(t.keyCode, "up", 38, t.key, ["Up", "ArrowUp"]) ? null : t.target !== t.currentTarget ? null : (t.preventDefault(), e.pressedArrow(-1))
						}, function(t) {
							return !t.type.indexOf("key") && e._k(t.keyCode, "down", 40, t.key, ["Down", "ArrowDown"]) ? null : t.target !== t.currentTarget ? null : (t.preventDefault(), e.pressedArrow(1))
						}]
					}
				}, [e.caption ? i("caption", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.showCaption,
						expression: "showCaption"
					}]
				}, [e._v(e._s(e.caption))]) : e._e(), e.newColumns.length && e.showHeader ? i("thead", [i("tr", [e.showDetailRowIcon ? i("th", {
					attrs: {
						width: "40px"
					}
				}) : e._e(), e.checkable && "left" === e.checkboxPosition ? i("th", {
					class: ["checkbox-cell", {
						"is-sticky": e.stickyCheckbox
					}]
				}, [e.headerCheckable ? [i("b-checkbox", {
					attrs: {
						autocomplete: "off",
						value: e.isAllChecked,
						disabled: e.isAllUncheckable
					},
					nativeOn: {
						change: function(t) {
							return e.checkAll(t)
						}
					}
				})] : e._e()], 2) : e._e(), e._l(e.visibleColumns, function(t, n) {
					return i("th", e._b({
						key: t.newKey + ":" + n + "header",
						class: [t.thClasses, {
							"is-current-sort": !e.sortMultiple && e.currentSortColumn === t
						}],
						style: t.thStyle,
						attrs: {
							draggable: e.canDragColumn
						},
						on: {
							click: function(i) {
								return i.stopPropagation(), e.sort(t, null, i)
							},
							dragstart: function(i) {
								return e.handleColumnDragStart(i, t, n)
							},
							dragend: function(i) {
								return e.handleColumnDragEnd(i, t, n)
							},
							drop: function(i) {
								return e.handleColumnDrop(i, t, n)
							},
							dragover: function(i) {
								return e.handleColumnDragOver(i, t, n)
							},
							dragleave: function(i) {
								return e.handleColumnDragLeave(i, t, n)
							}
						}
					}, "th", t.thAttrs(t), !1), [i("div", {
						staticClass: "th-wrap",
						class: {
							"is-numeric": t.numeric, "is-centered": t.centered
						}
					}, [t.$scopedSlots && t.$scopedSlots.header ? [i("b-slot-component", {
						attrs: {
							component: t,
							scoped: "",
							name: "header",
							tag: "span",
							props: {
								column: t,
								index: n
							}
						}
					})] : [i("span", {
						staticClass: "is-relative"
					}, [e._v(" " + e._s(t.label) + " "), e.sortMultiple && e.sortMultipleDataComputed && e.sortMultipleDataComputed.length > 0 && e.sortMultipleDataComputed.filter(function(e) {
						return e.field === t.field
					}).length > 0 ? [i("b-icon", {
						class: {
							"is-desc": "desc" === e.sortMultipleDataComputed.filter(function(e) {
								return e.field === t.field
							})[0].order
						},
						attrs: {
							icon: e.sortIcon,
							pack: e.iconPack,
							both: "",
							size: e.sortIconSize
						}
					}), e._v(" " + e._s(e.findIndexOfSortData(t)) + " "), i("button", {
						staticClass: "delete is-small multi-sort-cancel-icon",
						attrs: {
							type: "button"
						},
						on: {
							click: function(i) {
								return i.stopPropagation(), e.removeSortingPriority(t)
							}
						}
					})] : i("b-icon", {
						staticClass: "sort-icon",
						class: {
							"is-desc": !e.isAsc, "is-invisible": e.currentSortColumn !== t
						},
						attrs: {
							icon: e.sortIcon,
							pack: e.iconPack,
							both: "",
							size: e.sortIconSize
						}
					})], 2)]], 2)])
				}), e.checkable && "right" === e.checkboxPosition ? i("th", {
					class: ["checkbox-cell", {
						"is-sticky": e.stickyCheckbox
					}]
				}, [e.headerCheckable ? [i("b-checkbox", {
					attrs: {
						autocomplete: "off",
						value: e.isAllChecked,
						disabled: e.isAllUncheckable
					},
					nativeOn: {
						change: function(t) {
							return e.checkAll(t)
						}
					}
				})] : e._e()], 2) : e._e()], 2), e.hasCustomSubheadings ? i("tr", {
					staticClass: "is-subheading"
				}, [e.showDetailRowIcon ? i("th", {
					attrs: {
						width: "40px"
					}
				}) : e._e(), e.checkable && "left" === e.checkboxPosition ? i("th") : e._e(), e._l(e.visibleColumns, function(t, n) {
					return i("th", {
						key: t.newKey + ":" + n + "subheading",
						style: t.style
					}, [i("div", {
						staticClass: "th-wrap",
						class: {
							"is-numeric": t.numeric, "is-centered": t.centered
						}
					}, [t.$scopedSlots && t.$scopedSlots.subheading ? [i("b-slot-component", {
						attrs: {
							component: t,
							scoped: "",
							name: "subheading",
							tag: "span",
							props: {
								column: t,
								index: n
							}
						}
					})] : [e._v(e._s(t.subheading))]], 2)])
				}), e.checkable && "right" === e.checkboxPosition ? i("th") : e._e()], 2) : e._e(), e.hasSearchablenewColumns ? i("tr", [e.showDetailRowIcon ? i("th", {
					attrs: {
						width: "40px"
					}
				}) : e._e(), e.checkable && "left" === e.checkboxPosition ? i("th") : e._e(), e._l(e.visibleColumns, function(t, n) {
					return i("th", e._b({
						key: t.newKey + ":" + n + "searchable",
						class: {
							"is-sticky": t.sticky
						},
						style: t.thStyle
					}, "th", t.thAttrs(t), !1), [i("div", {
						staticClass: "th-wrap"
					}, [t.searchable ? [t.$scopedSlots && t.$scopedSlots.searchable ? [i("b-slot-component", {
						attrs: {
							component: t,
							scoped: !0,
							name: "searchable",
							tag: "span",
							props: {
								column: t,
								filters: e.filters
							}
						}
					})] : i("b-input", {
						attrs: {
							type: t.numeric ? "number" : "text"
						},
						nativeOn: e._d({}, [e.filtersEvent, function(t) {
							return e.onFiltersEvent(t)
						}]),
						model: {
							value: e.filters[t.field],
							callback: function(i) {
								e.$set(e.filters, t.field, i)
							},
							expression: "filters[column.field]"
						}
					})] : e._e()], 2)])
				}), e.checkable && "right" === e.checkboxPosition ? i("th") : e._e()], 2) : e._e()]) : e._e(), i("tbody", [e._l(e.visibleData, function(t, n) {
					return [i("tr", {
						key: e.customRowKey ? t[e.customRowKey] : n,
						class: [e.rowClass(t, n), {
							"is-selected": e.isRowSelected(t, e.selected),
							"is-checked": e.isRowChecked(t)
						}],
						attrs: {
							draggable: e.canDragRow
						},
						on: {
							click: function(i) {
								return e.selectRow(t)
							},
							dblclick: function(i) {
								return e.$emit("dblclick", t)
							},
							mouseenter: function(i) {
								return e.emitEventForRow("mouseenter", i, t)
							},
							mouseleave: function(i) {
								return e.emitEventForRow("mouseleave", i, t)
							},
							contextmenu: function(i) {
								return e.$emit("contextmenu", t, i)
							},
							dragstart: function(i) {
								return e.handleDragStart(i, t, n)
							},
							dragend: function(i) {
								return e.handleDragEnd(i, t, n)
							},
							drop: function(i) {
								return e.handleDrop(i, t, n)
							},
							dragover: function(i) {
								return e.handleDragOver(i, t, n)
							},
							dragleave: function(i) {
								return e.handleDragLeave(i, t, n)
							}
						}
					}, [e.showDetailRowIcon ? i("td", {
						staticClass: "chevron-cell"
					}, [e.hasDetailedVisible(t) ? i("a", {
						attrs: {
							role: "button"
						},
						on: {
							click: function(i) {
								return i.stopPropagation(), e.toggleDetails(t)
							}
						}
					}, [i("b-icon", {
						class: {
							"is-expanded": e.isVisibleDetailRow(t)
						},
						attrs: {
							icon: e.detailIcon,
							pack: e.iconPack,
							both: ""
						}
					})], 1) : e._e()]) : e._e(), e.checkable && "left" === e.checkboxPosition ? i("td", {
						class: ["checkbox-cell", {
							"is-sticky": e.stickyCheckbox
						}]
					}, [i("b-checkbox", {
						attrs: {
							autocomplete: "off",
							disabled: !e.isRowCheckable(t),
							value: e.isRowChecked(t)
						},
						nativeOn: {
							click: function(i) {
								return i.preventDefault(), i.stopPropagation(), e.checkRow(t, n, i)
							}
						}
					})], 1) : e._e(), e._l(e.visibleColumns, function(a, s) {
						return [a.$scopedSlots && a.$scopedSlots.default ? [i("b-slot-component", e._b({
							key: a.newKey + ":" + n + ":" + s,
							class: a.getRootClasses(t),
							style: a.getRootStyle(t),
							attrs: {
								component: a,
								scoped: "",
								name: "default",
								tag: "td",
								"data-label": a.label,
								props: {
									row: t,
									column: a,
									index: n,
									colindex: s,
									toggleDetails: e.toggleDetails
								}
							},
							nativeOn: {
								click: function(i) {
									return e.$emit("cellclick", t, a, n, s)
								}
							}
						}, "b-slot-component", a.tdAttrs(t, a), !1))] : e._e()]
					}), e.checkable && "right" === e.checkboxPosition ? i("td", {
						class: ["checkbox-cell", {
							"is-sticky": e.stickyCheckbox
						}]
					}, [i("b-checkbox", {
						attrs: {
							autocomplete: "off",
							disabled: !e.isRowCheckable(t),
							value: e.isRowChecked(t)
						},
						nativeOn: {
							click: function(i) {
								return i.preventDefault(), i.stopPropagation(), e.checkRow(t, n, i)
							}
						}
					})], 1) : e._e()], 2), i("transition", {
						key: (e.customRowKey ? t[e.customRowKey] : n) + "detail",
						attrs: {
							name: e.detailTransition
						}
					}, [e.isActiveDetailRow(t) ? i("tr", {
						staticClass: "detail"
					}, [i("td", {
						attrs: {
							colspan: e.columnCount
						}
					}, [i("div", {
						staticClass: "detail-container"
					}, [e._t("detail", null, {
						row: t,
						index: n
					})], 2)])]) : e._e()]), e.isActiveCustomDetailRow(t) ? e._t("detail", null, {
						row: t,
						index: n
					}) : e._e()]
				}), e.visibleData.length ? e._e() : i("tr", {
					staticClass: "is-empty"
				}, [i("td", {
					attrs: {
						colspan: e.columnCount
					}
				}, [e._t("empty")], 2)])], 2), void 0 !== e.$slots.footer ? i("tfoot", [i("tr", {
					staticClass: "table-footer"
				}, [e.hasCustomFooterSlot() ? e._t("footer") : i("th", {
					attrs: {
						colspan: e.columnCount
					}
				}, [e._t("footer")], 2)], 2)]) : e._e()]), e.loading ? [e._t("loading", [i("b-loading", {
					attrs: {
						"is-full-page": !1,
						active: e.loading
					},
					on: {
						"update:active": function(t) {
							e.loading = t
						}
					}
				})])] : e._e()], 2), e.checkable && e.hasBottomLeftSlot() || e.paginated && ("bottom" === e.paginationPosition || "both" === e.paginationPosition) ? [e._t("pagination", [i("b-table-pagination", e._b({
					attrs: {
						"per-page": e.perPage,
						paginated: e.paginated,
						rounded: e.paginationRounded,
						"icon-pack": e.iconPack,
						total: e.newDataTotal,
						"current-page": e.newCurrentPage,
						"aria-next-label": e.ariaNextLabel,
						"aria-previous-label": e.ariaPreviousLabel,
						"aria-page-label": e.ariaPageLabel,
						"aria-current-label": e.ariaCurrentLabel
					},
					on: {
						"update:currentPage": function(t) {
							e.newCurrentPage = t
						},
						"update:current-page": function(t) {
							e.newCurrentPage = t
						},
						"page-change": function(t) {
							return e.$emit("page-change", t)
						}
					}
				}, "b-table-pagination", e.$attrs, !1), [e._t("bottom-left")], 2)])] : e._e()], 2)
			},
			staticRenderFns: []
		}, void 0, {
			name: "BTable",
			components: (di = {}, i(di, J.name, J), i(di, O.name, O), i(di, R.name, R), i(di, qe.name, qe), i(di, ei.name, ei), i(di, ci.name, ci), i(di, ui.name, ui), i(di, hi.name, hi), di),
			inheritAttrs: !1,
			provide: function() {
				return {
					$table: this
				}
			},
			props: {
				data: {
					type: Array,
					default: function() {
						return []
					}
				},
				columns: {
					type: Array,
					default: function() {
						return []
					}
				},
				bordered: Boolean,
				striped: Boolean,
				narrowed: Boolean,
				hoverable: Boolean,
				loading: Boolean,
				detailed: Boolean,
				checkable: Boolean,
				headerCheckable: {
					type: Boolean,
					default: !0
				},
				checkboxPosition: {
					type: String,
					default: "left",
					validator: function(e) {
						return ["left", "right"].indexOf(e) >= 0
					}
				},
				stickyCheckbox: {
					type: Boolean,
					default: !1
				},
				selected: Object,
				isRowSelectable: {
					type: Function,
					default: function() {
						return !0
					}
				},
				focusable: Boolean,
				customIsChecked: Function,
				isRowCheckable: {
					type: Function,
					default: function() {
						return !0
					}
				},
				checkedRows: {
					type: Array,
					default: function() {
						return []
					}
				},
				mobileCards: {
					type: Boolean,
					default: !0
				},
				defaultSort: [String, Array],
				defaultSortDirection: {
					type: String,
					default: "asc"
				},
				sortIcon: {
					type: String,
					default: "arrow-up"
				},
				sortIconSize: {
					type: String,
					default: "is-small"
				},
				sortMultiple: {
					type: Boolean,
					default: !1
				},
				sortMultipleData: {
					type: Array,
					default: function() {
						return []
					}
				},
				sortMultipleKey: {
					type: String,
					default: null
				},
				paginated: Boolean,
				currentPage: {
					type: Number,
					default: 1
				},
				perPage: {
					type: [Number, String],
					default: 20
				},
				showDetailIcon: {
					type: Boolean,
					default: !0
				},
				detailIcon: {
					type: String,
					default: "chevron-right"
				},
				paginationPosition: {
					type: String,
					default: "bottom",
					validator: function(e) {
						return ["bottom", "top", "both"].indexOf(e) >= 0
					}
				},
				paginationRounded: Boolean,
				backendSorting: Boolean,
				backendFiltering: Boolean,
				rowClass: {
					type: Function,
					default: function() {
						return ""
					}
				},
				openedDetailed: {
					type: Array,
					default: function() {
						return []
					}
				},
				hasDetailedVisible: {
					type: Function,
					default: function() {
						return !0
					}
				},
				detailKey: {
					type: String,
					default: ""
				},
				detailTransition: {
					type: String,
					default: ""
				},
				customDetailRow: {
					type: Boolean,
					default: !1
				},
				backendPagination: Boolean,
				total: {
					type: [Number, String],
					default: 0
				},
				iconPack: String,
				mobileSortPlaceholder: String,
				customRowKey: String,
				draggable: {
					type: Boolean,
					default: !1
				},
				draggableColumn: {
					type: Boolean,
					default: !1
				},
				scrollable: Boolean,
				ariaNextLabel: String,
				ariaPreviousLabel: String,
				ariaPageLabel: String,
				ariaCurrentLabel: String,
				stickyHeader: Boolean,
				height: [Number, String],
				filtersEvent: {
					type: String,
					default: ""
				},
				cardLayout: Boolean,
				showHeader: {
					type: Boolean,
					default: !0
				},
				debounceSearch: Number,
				caption: String,
				showCaption: {
					type: Boolean,
					default: !0
				}
			},
			data: function() {
				return {
					sortMultipleDataLocal: [],
					getValueByPath: h,
					visibleDetailRows: this.openedDetailed,
					newData: this.data,
					newDataTotal: this.backendPagination ? this.total : this.data.length,
					newCheckedRows: o(this.checkedRows),
					lastCheckedRowIndex: null,
					newCurrentPage: this.currentPage,
					currentSortColumn: {},
					isAsc: !0,
					filters: {},
					defaultSlots: [],
					firstTimeSort: !0,
					_isTable: !0,
					isDraggingRow: !1,
					isDraggingColumn: !1
				}
			},
			computed: {
				sortMultipleDataComputed: function() {
					return this.backendSorting ? this.sortMultipleData : this.sortMultipleDataLocal
				},
				tableClasses: function() {
					return {
						"is-bordered": this.bordered,
						"is-striped": this.striped,
						"is-narrow": this.narrowed,
						"is-hoverable": (this.hoverable || this.focusable) && this.visibleData.length
					}
				},
				tableWrapperClasses: function() {
					return {
						"has-mobile-cards": this.mobileCards,
						"has-sticky-header": this.stickyHeader,
						"is-card-list": this.cardLayout,
						"table-container": this.isScrollable
					}
				},
				tableStyle: function() {
					return {
						height: S(this.height)
					}
				},
				visibleData: function() {
					if (!this.paginated) return this.newData;
					var e = this.newCurrentPage,
						t = this.perPage;
					if (this.newData.length <= t) return this.newData;
					var i = (e - 1) * t,
						n = parseInt(i, 10) + parseInt(t, 10);
					return this.newData.slice(i, n)
				},
				visibleColumns: function() {
					return this.newColumns ? this.newColumns.filter(function(e) {
						return e.visible || void 0 === e.visible
					}) : this.newColumns
				},
				isAllChecked: function() {
					var e = this,
						t = this.visibleData.filter(function(t) {
							return e.isRowCheckable(t)
						});
					if (0 === t.length) return !1;
					var i = t.some(function(t) {
						return f(e.newCheckedRows, t, e.customIsChecked) < 0
					});
					return !i
				},
				isAllUncheckable: function() {
					var e = this;
					return 0 === this.visibleData.filter(function(t) {
						return e.isRowCheckable(t)
					}).length
				},
				hasSortablenewColumns: function() {
					return this.newColumns.some(function(e) {
						return e.sortable
					})
				},
				hasSearchablenewColumns: function() {
					return this.newColumns.some(function(e) {
						return e.searchable
					})
				},
				hasCustomSubheadings: function() {
					return !(!this.$scopedSlots || !this.$scopedSlots.subheading) || this.newColumns.some(function(e) {
						return e.subheading || e.$scopedSlots && e.$scopedSlots.subheading
					})
				},
				columnCount: function() {
					var e = this.visibleColumns.length;
					return e += this.checkable ? 1 : 0, e += this.detailed && this.showDetailIcon ? 1 : 0
				},
				showDetailRowIcon: function() {
					return this.detailed && this.showDetailIcon
				},
				isScrollable: function() {
					return !!this.scrollable || !!this.newColumns && this.newColumns.some(function(e) {
						return e.sticky
					})
				},
				newColumns: function() {
					var e = this;
					return this.columns && this.columns.length ? this.columns.map(function(t) {
						var i = new(P.extend(ui))({
							parent: e,
							propsData: t
						});
						return i.$scopedSlots = {
							default: function(e) {
								return [i.$createElement("span", {
									domProps: {
										innerHTML: h(e.row, t.field)
									}
								})]
							}
						}, i
					}) : this.defaultSlots.filter(function(e) {
						return e.componentInstance && e.componentInstance.$data && e.componentInstance.$data._isTableColumn
					}).map(function(e) {
						return e.componentInstance
					})
				},
				canDragRow: function() {
					return this.draggable && !this.isDraggingColumn
				},
				canDragColumn: function() {
					return this.draggableColumn && !this.isDraggingRow
				}
			},
			watch: {
				data: function(e) {
					var t = this;
					this.newData = e, this.backendFiltering || (this.newData = e.filter(function(e) {
						return t.isRowFiltered(e)
					})), this.backendSorting || this.sort(this.currentSortColumn, !0), this.backendPagination || (this.newDataTotal = this.newData.length)
				},
				total: function(e) {
					this.backendPagination && (this.newDataTotal = e)
				},
				currentPage: function(e) {
					this.newCurrentPage = e
				},
				newCurrentPage: function(e) {
					this.$emit("update:currentPage", e)
				},
				checkedRows: function(e) {
					this.newCheckedRows = o(e)
				},
				debounceSearch: {
					handler: function(e) {
						var t, i, n, a;
						this.debouncedHandleFiltersChange = (t = this.handleFiltersChange, i = e, function() {
							var e = this,
								s = arguments,
								o = n && !a;
							clearTimeout(a), a = setTimeout(function() {
								a = null, n || t.apply(e, s)
							}, i), o && t.apply(e, s)
						})
					},
					immediate: !0
				},
				filters: {
					handler: function(e) {
						this.debounceSearch ? this.debouncedHandleFiltersChange(e) : this.handleFiltersChange(e)
					},
					deep: !0
				},
				openedDetailed: function(e) {
					this.visibleDetailRows = e
				}
			},
			methods: {
				onFiltersEvent: function(e) {
					this.$emit("filters-event-".concat(this.filtersEvent), {
						event: e,
						filters: this.filters
					})
				},
				handleFiltersChange: function(e) {
					var t = this;
					this.backendFiltering ? this.$emit("filters-change", e) : (this.newData = this.data.filter(function(e) {
						return t.isRowFiltered(e)
					}), this.backendPagination || (this.newDataTotal = this.newData.length), this.backendSorting || (this.sortMultiple && this.sortMultipleDataLocal && this.sortMultipleDataLocal.length > 0 ? this.doSortMultiColumn() : Object.keys(this.currentSortColumn).length > 0 && this.doSortSingleColumn(this.currentSortColumn)))
				},
				findIndexOfSortData: function(e) {
					var t = this.sortMultipleDataComputed.filter(function(t) {
						return t.field === e.field
					})[0];
					return this.sortMultipleDataComputed.indexOf(t) + 1
				},
				removeSortingPriority: function(e) {
					if (this.backendSorting) this.$emit("sorting-priority-removed", e.field);
					else {
						this.sortMultipleDataLocal = this.sortMultipleDataLocal.filter(function(t) {
							return t.field !== e.field
						});
						var t = this.sortMultipleDataLocal.map(function(e) {
							return (e.order && "desc" === e.order ? "-" : "") + e.field
						});
						this.newData = k(this.newData, t)
					}
				},
				resetMultiSorting: function() {
					this.sortMultipleDataLocal = [], this.currentSortColumn = {}, this.newData = this.data
				},
				sortBy: function(e, t, i, n) {
					return i && "function" == typeof i ? o(e).sort(function(e, t) {
						return i(e, t, n)
					}) : o(e).sort(function(e, i) {
						var a = h(e, t),
							s = h(i, t);
						return "boolean" == typeof a && "boolean" == typeof s ? n ? a - s : s - a : a || 0 === a ? s || 0 === s ? a === s ? 0 : (a = "string" == typeof a ? a.toUpperCase() : a, s = "string" == typeof s ? s.toUpperCase() : s, n ? a > s ? 1 : -1 : a > s ? -1 : 1) : -1 : 1
					})
				},
				sortMultiColumn: function(e) {
					if (this.currentSortColumn = {}, !this.backendSorting) {
						var t = this.sortMultipleDataLocal.filter(function(t) {
							return t.field === e.field
						})[0];
						t ? t.order = "desc" === t.order ? "asc" : "desc" : this.sortMultipleDataLocal.push({
							field: e.field,
							order: e.isAsc
						}), this.doSortMultiColumn()
					}
				},
				doSortMultiColumn: function() {
					var e = this.sortMultipleDataLocal.map(function(e) {
						return (e.order && "desc" === e.order ? "-" : "") + e.field
					});
					this.newData = k(this.newData, e)
				},
				sort: function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
					e && e.sortable && (!this.backendSorting && this.sortMultiple && (this.sortMultipleKey && i[this.sortMultipleKey] || !this.sortMultipleKey) ? t ? this.doSortMultiColumn() : this.sortMultiColumn(e) : (this.sortMultiple && (this.sortMultipleDataLocal = []), t || (this.isAsc = e === this.currentSortColumn ? !this.isAsc : "desc" !== this.defaultSortDirection.toLowerCase()), this.firstTimeSort || this.$emit("sort", e.field, this.isAsc ? "asc" : "desc", i), this.backendSorting || this.doSortSingleColumn(e), this.currentSortColumn = e))
				},
				doSortSingleColumn: function(e) {
					this.newData = this.sortBy(this.newData, e.field, e.customSort, this.isAsc)
				},
				isRowSelected: function(e, t) {
					return !!t && (this.customRowKey ? e[this.customRowKey] === t[this.customRowKey] : e === t)
				},
				isRowChecked: function(e) {
					return f(this.newCheckedRows, e, this.customIsChecked) >= 0
				},
				removeCheckedRow: function(e) {
					var t = f(this.newCheckedRows, e, this.customIsChecked);
					t >= 0 && this.newCheckedRows.splice(t, 1)
				},
				checkAll: function() {
					var e = this,
						t = this.isAllChecked;
					this.visibleData.forEach(function(i) {
						e.isRowCheckable(i) && e.removeCheckedRow(i), t || e.isRowCheckable(i) && e.newCheckedRows.push(i)
					}), this.$emit("check", this.newCheckedRows), this.$emit("check-all", this.newCheckedRows), this.$emit("update:checkedRows", this.newCheckedRows)
				},
				checkRow: function(e, t, i) {
					if (this.isRowCheckable(e)) {
						var n = this.lastCheckedRowIndex;
						this.lastCheckedRowIndex = t, i.shiftKey && null !== n && t !== n ? this.shiftCheckRow(e, t, n) : this.isRowChecked(e) ? this.removeCheckedRow(e) : this.newCheckedRows.push(e), this.$emit("check", this.newCheckedRows, e), this.$emit("update:checkedRows", this.newCheckedRows)
					}
				},
				shiftCheckRow: function(e, t, i) {
					var n = this,
						a = this.visibleData.slice(Math.min(t, i), Math.max(t, i) + 1),
						s = !this.isRowChecked(e);
					a.forEach(function(e) {
						n.removeCheckedRow(e), s && n.isRowCheckable(e) && n.newCheckedRows.push(e)
					})
				},
				selectRow: function(e, t) {
					this.$emit("click", e), this.selected !== e && this.isRowSelectable(e) && (this.$emit("select", e, this.selected), this.$emit("update:selected", e))
				},
				toggleDetails: function(e) {
					this.isVisibleDetailRow(e) ? (this.closeDetailRow(e), this.$emit("details-close", e)) : (this.openDetailRow(e), this.$emit("details-open", e)), this.$emit("update:openedDetailed", this.visibleDetailRows)
				},
				openDetailRow: function(e) {
					var t = this.handleDetailKey(e);
					this.visibleDetailRows.push(t)
				},
				closeDetailRow: function(e) {
					var t = this.handleDetailKey(e),
						i = this.visibleDetailRows.indexOf(t);
					i >= 0 && this.visibleDetailRows.splice(i, 1)
				},
				isVisibleDetailRow: function(e) {
					var t = this.handleDetailKey(e);
					return this.visibleDetailRows.indexOf(t) >= 0
				},
				isActiveDetailRow: function(e) {
					return this.detailed && !this.customDetailRow && this.isVisibleDetailRow(e)
				},
				isActiveCustomDetailRow: function(e) {
					return this.detailed && this.customDetailRow && this.isVisibleDetailRow(e)
				},
				isRowFiltered: function(e) {
					var i = this,
						n = function(t) {
							if (!i.filters[t]) return delete i.filters[t], {
								v: !0
							};
							var n = i.filters[t],
								a = i.newColumns.filter(function(e) {
									return e.field === t
								})[0];
							if (a && a.customSearch && "function" == typeof a.customSearch) {
								if (!a.customSearch(e, n)) return {
									v: !1
								}
							} else {
								var s = i.getValueByPath(e, t);
								if (null == s) return {
									v: !1
								};
								if (Number.isInteger(s)) {
									if (s !== Number(n)) return {
										v: !1
									}
								} else if (!new RegExp(w(n), "i").test(s)) return {
									v: !1
								}
							}
						};
					for (var a in this.filters) {
						var s = n(a);
						if ("object" === t(s)) return s.v
					}
					return !0
				},
				handleDetailKey: function(e) {
					var t = this.detailKey;
					return t.length && e ? e[t] : e
				},
				checkPredefinedDetailedRows: function() {
					if (this.openedDetailed.length > 0 && !this.detailKey.length) throw new Error('If you set a predefined opened-detailed, you must provide a unique key using the prop "detail-key"')
				},
				checkSort: function() {
					if (this.newColumns.length && this.firstTimeSort) this.initSort(), this.firstTimeSort = !1;
					else if (this.newColumns.length && Object.keys(this.currentSortColumn).length > 0)
						for (var e = 0; e < this.newColumns.length; e++)
							if (this.newColumns[e].field === this.currentSortColumn.field) {
								this.currentSortColumn = this.newColumns[e];
								break
							}
				},
				hasCustomFooterSlot: function() {
					if (this.$slots.footer.length > 1) return !0;
					var e = this.$slots.footer[0].tag;
					return "th" === e || "td" === e
				},
				hasBottomLeftSlot: function() {
					return void 0 !== this.$slots["bottom-left"]
				},
				pressedArrow: function(e) {
					if (this.visibleData.length) {
						var t = this.visibleData.indexOf(this.selected) + e;
						t = t < 0 ? 0 : t > this.visibleData.length - 1 ? this.visibleData.length - 1 : t;
						var i = this.visibleData[t];
						if (this.isRowSelectable(i)) this.selectRow(i);
						else {
							var n = null;
							if (e > 0)
								for (var a = t; a < this.visibleData.length && null === n; a++) this.isRowSelectable(this.visibleData[a]) && (n = a);
							else
								for (var s = t; s >= 0 && null === n; s--) this.isRowSelectable(this.visibleData[s]) && (n = s);
							n >= 0 && this.selectRow(this.visibleData[n])
						}
					}
				},
				focus: function() {
					this.focusable && this.$el.querySelector("table").focus()
				},
				initSort: function() {
					var e = this;
					if (this.sortMultiple && this.sortMultipleData) this.sortMultipleData.forEach(function(t) {
						e.sortMultiColumn(t)
					});
					else {
						if (!this.defaultSort) return;
						var t = "",
							i = this.defaultSortDirection;
						Array.isArray(this.defaultSort) ? (t = this.defaultSort[0], this.defaultSort[1] && (i = this.defaultSort[1])) : t = this.defaultSort;
						var n = this.newColumns.filter(function(e) {
							return e.field === t
						})[0];
						n && (this.isAsc = "desc" !== i.toLowerCase(), this.sort(n, !0))
					}
				},
				handleDragStart: function(e, t, i) {
					this.canDragRow && (this.isDraggingRow = !0, this.$emit("dragstart", {
						event: e,
						row: t,
						index: i
					}))
				},
				handleDragEnd: function(e, t, i) {
					this.canDragRow && (this.isDraggingRow = !1, this.$emit("dragend", {
						event: e,
						row: t,
						index: i
					}))
				},
				handleDrop: function(e, t, i) {
					this.canDragRow && this.$emit("drop", {
						event: e,
						row: t,
						index: i
					})
				},
				handleDragOver: function(e, t, i) {
					this.canDragRow && this.$emit("dragover", {
						event: e,
						row: t,
						index: i
					})
				},
				handleDragLeave: function(e, t, i) {
					this.canDragRow && this.$emit("dragleave", {
						event: e,
						row: t,
						index: i
					})
				},
				emitEventForRow: function(e, t, i) {
					return this.$listeners[e] ? this.$emit(e, i, t) : null
				},
				handleColumnDragStart: function(e, t, i) {
					this.canDragColumn && (this.isDraggingColumn = !0, this.$emit("columndragstart", {
						event: e,
						column: t,
						index: i
					}))
				},
				handleColumnDragEnd: function(e, t, i) {
					this.canDragColumn && (this.isDraggingColumn = !1, this.$emit("columndragend", {
						event: e,
						column: t,
						index: i
					}))
				},
				handleColumnDrop: function(e, t, i) {
					this.canDragColumn && this.$emit("columndrop", {
						event: e,
						column: t,
						index: i
					})
				},
				handleColumnDragOver: function(e, t, i) {
					this.canDragColumn && this.$emit("columndragover", {
						event: e,
						column: t,
						index: i
					})
				},
				handleColumnDragLeave: function(e, t, i) {
					this.canDragColumn && this.$emit("columndragleave", {
						event: e,
						column: t,
						index: i
					})
				},
				refreshSlots: function() {
					this.defaultSlots = this.$slots.default || []
				}
			},
			mounted: function() {
				this.refreshSlots(), this.checkPredefinedDetailedRows(), this.checkSort()
			}
		}, void 0, !1, void 0, void 0, void 0),
		pi = {
			install: function(e) {
				void 0 === P && F(e), z(e, fi), z(e, ui)
			}
		};
	L(pi);
	var mi = V({
		render: function() {
			var e = this,
				t = e.$createElement,
				i = e._self._c || t;
			return i("div", {
				staticClass: "b-tabs",
				class: e.mainClasses
			}, [i("nav", {
				staticClass: "tabs",
				class: e.navClasses,
				attrs: {
					role: "tablist",
					"aria-orientation": e.vertical ? "vertical" : "horizontal"
				},
				on: {
					keydown: e.manageTablistKeydown
				}
			}, [i("ul", e._l(e.items, function(t, n) {
				return i("li", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: t.visible,
						expression: "childItem.visible"
					}],
					key: t.value,
					class: [t.headerClass, {
						"is-active": t.isActive,
						"is-disabled": t.disabled
					}],
					attrs: {
						role: "presentation"
					}
				}, [t.$scopedSlots.header ? i("b-slot-component", {
					ref: "tabLink",
					refInFor: !0,
					attrs: {
						component: t,
						name: "header",
						tag: "a",
						role: "tab",
						id: t.value + "-label",
						"aria-controls": t.value + "-content",
						"aria-selected": "" + t.isActive,
						tabindex: t.isActive ? 0 : -1
					},
					on: {
						keydown: function(i) {
							return e.manageTabKeydown(i, t)
						}
					},
					nativeOn: {
						focus: function(t) {
							e.currentFocus = n
						},
						click: function(i) {
							return e.childClick(t)
						}
					}
				}) : i("a", {
					ref: "tabLink",
					refInFor: !0,
					attrs: {
						role: "tab",
						id: t.value + "-tab",
						"aria-controls": t.value + "-content",
						"aria-selected": "" + t.isActive,
						tabindex: t.isActive ? 0 : -1
					},
					on: {
						focus: function(t) {
							e.currentFocus = n
						},
						click: function(i) {
							return e.childClick(t)
						},
						keydown: function(i) {
							return e.manageTabKeydown(i, t)
						}
					}
				}, [t.icon ? i("b-icon", {
					attrs: {
						icon: t.icon,
						pack: t.iconPack,
						size: e.size
					}
				}) : e._e(), i("span", [e._v(e._s(t.label))])], 1)], 1)
			}), 0)]), i("section", {
				staticClass: "tab-content",
				class: {
					"is-transitioning": e.isTransitioning
				}
			}, [e._t("default")], 2)])
		},
		staticRenderFns: []
	}, void 0, {
		name: "BTabs",
		mixins: [ti("tab")],
		props: {
			expanded: {
				type: Boolean,
				default: function() {
					return T.defaultTabsExpanded
				}
			},
			type: {
				type: [String, Object],
				default: function() {
					return T.defaultTabsType
				}
			},
			animated: {
				type: Boolean,
				default: function() {
					return T.defaultTabsAnimated
				}
			},
			multiline: Boolean
		},
		data: function() {
			return {
				currentFocus: this.value
			}
		},
		computed: {
			mainClasses: function() {
				return i({
					"is-fullwidth": this.expanded,
					"is-vertical": this.vertical,
					"is-multiline": this.multiline
				}, this.position, this.position && this.vertical)
			},
			navClasses: function() {
				var e;
				return [this.type, this.size, (e = {}, i(e, this.position, this.position && !this.vertical), i(e, "is-fullwidth", this.expanded), i(e, "is-toggle", "is-toggle-rounded" === this.type), e)]
			}
		},
		methods: {
			giveFocusToTab: function(e) {
				e.$el && e.$el.focus ? e.$el.focus() : e.focus && e.focus()
			},
			manageTablistKeydown: function(e) {
				switch (e.key) {
					case this.vertical ? "ArrowUp":
						"ArrowLeft" :
					case this.vertical ? "Up":
						"Left" : var t = this.getPrevItemIdx(this.currentFocus, !0);
						null === t && (t = this.getPrevItemIdx(this.items.length, !0)), null !== t && this.$refs.tabLink && t < this.$refs.tabLink.length && !this.items[t].disabled && this.giveFocusToTab(this.$refs.tabLink[t]), e.preventDefault();
						break;
					case this.vertical ? "ArrowDown":
						"ArrowRight" :
					case this.vertical ? "Down":
						"Right" : var i = this.getNextItemIdx(this.currentFocus, !0);
						null === i && (i = this.getNextItemIdx(-1, !0)), null !== i && this.$refs.tabLink && i < this.$refs.tabLink.length && !this.items[i].disabled && this.giveFocusToTab(this.$refs.tabLink[i]), e.preventDefault()
				}
			},
			manageTabKeydown: function(e, t) {
				switch (e.key) {
					case " ":
					case "Space":
					case "Spacebar":
					case "Enter":
						this.childClick(t), e.preventDefault()
				}
			}
		}
	}, void 0, !1, void 0, void 0, void 0);
	var vi = V({}, void 0, {
			name: "BTabItem",
			mixins: [ni("tab")],
			props: {
				disabled: Boolean
			},
			data: function() {
				return {
					elementClass: "tab-item",
					elementRole: "tabpanel"
				}
			}
		}, void 0, void 0, void 0, void 0, void 0),
		gi = {
			install: function(e) {
				z(e, mi), z(e, vi)
			}
		};
	L(gi);
	var bi = V({
		render: function() {
			var e = this,
				t = e.$createElement,
				i = e._self._c || t;
			return e.attached && e.closable ? i("div", {
				staticClass: "tags has-addons"
			}, [i("span", {
				staticClass: "tag",
				class: [e.type, e.size, {
					"is-rounded": e.rounded
				}]
			}, [i("span", {
				class: {
					"has-ellipsis": e.ellipsis
				}
			}, [e._t("default")], 2)]), i("a", {
				staticClass: "tag",
				class: [e.size, e.closeType, {
					"is-rounded": e.rounded
				}, e.closeIcon ? "has-delete-icon" : "is-delete"],
				attrs: {
					role: "button",
					"aria-label": e.ariaCloseLabel,
					tabindex: !!e.tabstop && 0,
					disabled: e.disabled
				},
				on: {
					click: e.close,
					keyup: function(t) {
						return !t.type.indexOf("key") && e._k(t.keyCode, "delete", [8, 46], t.key, ["Backspace", "Delete", "Del"]) ? null : (t.preventDefault(), e.close(t))
					}
				}
			}, [e.closeIcon ? i("b-icon", {
				attrs: {
					"custom-class": "",
					icon: e.closeIcon,
					size: e.size,
					type: e.closeIconType,
					pack: e.closeIconPack
				}
			}) : e._e()], 1)]) : i("span", {
				staticClass: "tag",
				class: [e.type, e.size, {
					"is-rounded": e.rounded
				}]
			}, [i("span", {
				class: {
					"has-ellipsis": e.ellipsis
				}
			}, [e._t("default")], 2), e.closable ? i("a", {
				staticClass: "delete is-small",
				class: e.closeType,
				attrs: {
					role: "button",
					"aria-label": e.ariaCloseLabel,
					disabled: e.disabled,
					tabindex: !!e.tabstop && 0
				},
				on: {
					click: e.close,
					keyup: function(t) {
						return !t.type.indexOf("key") && e._k(t.keyCode, "delete", [8, 46], t.key, ["Backspace", "Delete", "Del"]) ? null : (t.preventDefault(), e.close(t))
					}
				}
			}) : e._e()])
		},
		staticRenderFns: []
	}, void 0, {
		name: "BTag",
		props: {
			attached: Boolean,
			closable: Boolean,
			type: String,
			size: String,
			rounded: Boolean,
			disabled: Boolean,
			ellipsis: Boolean,
			tabstop: {
				type: Boolean,
				default: !0
			},
			ariaCloseLabel: String,
			closeType: String,
			closeIcon: String,
			closeIconPack: String,
			closeIconType: String
		},
		methods: {
			close: function(e) {
				this.disabled || this.$emit("close", e)
			}
		}
	}, void 0, !1, void 0, void 0, void 0);
	var yi, wi = V({
			render: function() {
				var e = this.$createElement;
				return (this._self._c || e)("div", {
					staticClass: "tags",
					class: {
						"has-addons": this.attached
					}
				}, [this._t("default")], 2)
			},
			staticRenderFns: []
		}, void 0, {
			name: "BTaglist",
			props: {
				attached: Boolean
			}
		}, void 0, !1, void 0, void 0, void 0),
		ki = {
			install: function(e) {
				z(e, bi), z(e, wi)
			}
		};
	L(ki);
	var Si = V({
			render: function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "taginput control",
					class: e.rootClasses
				}, [i("div", {
					staticClass: "taginput-container",
					class: [e.statusType, e.size, e.containerClasses],
					attrs: {
						disabled: e.disabled
					},
					on: {
						click: function(t) {
							e.hasInput && e.focus(t)
						}
					}
				}, [e._t("selected", e._l(e.tags, function(t, n) {
					return i("b-tag", {
						key: e.getNormalizedTagText(t) + n,
						attrs: {
							type: e.type,
							"close-type": e.closeType,
							size: e.size,
							rounded: e.rounded,
							attached: e.attached,
							tabstop: !1,
							disabled: e.disabled,
							ellipsis: e.ellipsis,
							closable: e.closable,
							"aria-close-label": e.ariaCloseLabel,
							title: e.ellipsis && e.getNormalizedTagText(t)
						},
						on: {
							close: function(t) {
								return e.removeTag(n, t)
							}
						}
					}, [e._t("tag", [e._v(" " + e._s(e.getNormalizedTagText(t)) + " ")], {
						tag: t
					})], 2)
				}), {
					tags: e.tags
				}), e.hasInput ? i("b-autocomplete", e._b({
					ref: "autocomplete",
					attrs: {
						data: e.data,
						field: e.field,
						icon: e.icon,
						"icon-pack": e.iconPack,
						maxlength: e.maxlength,
						"has-counter": !1,
						size: e.size,
						disabled: e.disabled,
						loading: e.loading,
						autocomplete: e.nativeAutocomplete,
						"open-on-focus": e.openOnFocus,
						"keep-open": e.openOnFocus,
						"keep-first": e.keepFirst,
						"group-field": e.groupField,
						"group-options": e.groupOptions,
						"use-html5-validation": e.useHtml5Validation,
						"check-infinite-scroll": e.checkInfiniteScroll,
						"append-to-body": e.appendToBody,
						"confirm-keys": e.confirmKeys
					},
					on: {
						typing: e.onTyping,
						focus: e.onFocus,
						blur: e.customOnBlur,
						select: e.onSelect,
						"infinite-scroll": e.emitInfiniteScroll
					},
					nativeOn: {
						keydown: function(t) {
							return e.keydown(t)
						},
						compositionstart: function(t) {
							e.isComposing = !0
						},
						compositionend: function(t) {
							e.isComposing = !1
						}
					},
					scopedSlots: e._u([e.hasHeaderSlot ? {
						key: "header",
						fn: function() {
							return [e._t("header")]
						},
						proxy: !0
					} : null, e.hasDefaultSlot ? {
						key: "default",
						fn: function(t) {
							return [e._t("default", null, {
								option: t.option,
								index: t.index
							})]
						}
					} : null, e.hasEmptySlot ? {
						key: "empty",
						fn: function() {
							return [e._t("empty")]
						},
						proxy: !0
					} : null, e.hasFooterSlot ? {
						key: "footer",
						fn: function() {
							return [e._t("footer")]
						},
						proxy: !0
					} : null], null, !0),
					model: {
						value: e.newTag,
						callback: function(t) {
							e.newTag = t
						},
						expression: "newTag"
					}
				}, "b-autocomplete", e.$attrs, !1)) : e._e()], 2), e.hasCounter && (e.maxtags || e.maxlength) ? i("small", {
					staticClass: "help counter"
				}, [e.maxlength && e.valueLength > 0 ? [e._v(" " + e._s(e.valueLength) + " / " + e._s(e.maxlength) + " ")] : e.maxtags ? [e._v(" " + e._s(e.tagsLength) + " / " + e._s(e.maxtags) + " ")] : e._e()], 2) : e._e()])
			},
			staticRenderFns: []
		}, void 0, {
			name: "BTaginput",
			components: (yi = {}, i(yi, E.name, E), i(yi, bi.name, bi), yi),
			mixins: [M],
			inheritAttrs: !1,
			props: {
				value: {
					type: Array,
					default: function() {
						return []
					}
				},
				data: {
					type: Array,
					default: function() {
						return []
					}
				},
				type: String,
				closeType: String,
				rounded: {
					type: Boolean,
					default: !1
				},
				attached: {
					type: Boolean,
					default: !1
				},
				maxtags: {
					type: [Number, String],
					required: !1
				},
				hasCounter: {
					type: Boolean,
					default: function() {
						return T.defaultTaginputHasCounter
					}
				},
				field: {
					type: String,
					default: "value"
				},
				autocomplete: Boolean,
				groupField: String,
				groupOptions: String,
				nativeAutocomplete: String,
				openOnFocus: Boolean,
				keepFirst: Boolean,
				disabled: Boolean,
				ellipsis: Boolean,
				closable: {
					type: Boolean,
					default: !0
				},
				ariaCloseLabel: String,
				confirmKeys: {
					type: Array,
					default: function() {
						return [",", "Tab", "Enter"]
					}
				},
				removeOnKeys: {
					type: Array,
					default: function() {
						return ["Backspace"]
					}
				},
				allowNew: Boolean,
				onPasteSeparators: {
					type: Array,
					default: function() {
						return [","]
					}
				},
				beforeAdding: {
					type: Function,
					default: function() {
						return !0
					}
				},
				allowDuplicates: {
					type: Boolean,
					default: !1
				},
				checkInfiniteScroll: {
					type: Boolean,
					default: !1
				},
				createTag: {
					type: Function,
					default: function(e) {
						return e
					}
				},
				appendToBody: Boolean
			},
			data: function() {
				return {
					tags: Array.isArray(this.value) ? this.value.slice(0) : this.value || [],
					newTag: "",
					isComposing: !1,
					_elementRef: "autocomplete",
					_isTaginput: !0
				}
			},
			computed: {
				rootClasses: function() {
					return {
						"is-expanded": this.expanded
					}
				},
				containerClasses: function() {
					return {
						"is-focused": this.isFocused,
						"is-focusable": this.hasInput
					}
				},
				valueLength: function() {
					return this.newTag.trim().length
				},
				hasDefaultSlot: function() {
					return !!this.$scopedSlots.default
				},
				hasEmptySlot: function() {
					return !!this.$slots.empty
				},
				hasHeaderSlot: function() {
					return !!this.$slots.header
				},
				hasFooterSlot: function() {
					return !!this.$slots.footer
				},
				hasInput: function() {
					return null == this.maxtags || 1 === this.maxtags || this.tagsLength < this.maxtags
				},
				tagsLength: function() {
					return this.tags.length
				},
				separatorsAsRegExp: function() {
					var e = this.onPasteSeparators;
					return e.length ? new RegExp(e.map(function(e) {
						return e ? e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : null
					}).join("|"), "g") : null
				}
			},
			watch: {
				value: function(e) {
					this.tags = Array.isArray(e) ? e.slice(0) : e || []
				},
				hasInput: function() {
					this.hasInput || this.onBlur()
				}
			},
			methods: {
				addTag: function(e) {
					var t = this,
						i = e || this.newTag.trim();
					if (i) {
						if (!this.autocomplete) {
							var n = this.separatorsAsRegExp;
							if (n && i.match(n)) return void i.split(n).map(function(e) {
								return e.trim()
							}).filter(function(e) {
								return 0 !== e.length
							}).map(this.addTag)
						}(!!this.allowDuplicates || -1 === this.tags.indexOf(i)) && this.beforeAdding(i) && (1 === this.maxtags && (this.tags = []), this.tags.push(this.createTag(i)), this.$emit("input", this.tags), this.$emit("add", i))
					}
					requestAnimationFrame(function() {
						t.newTag = "", t.$emit("typing", "")
					})
				},
				getNormalizedTagText: function(e) {
					return "object" === t(e) && (e = h(e, this.field)), "".concat(e)
				},
				customOnBlur: function(e) {
					this.autocomplete || this.addTag(), this.onBlur(e)
				},
				onSelect: function(e) {
					e && this.addTag(e)
				},
				removeTag: function(e, t) {
					var i = this.tags.splice(e, 1)[0];
					return this.$emit("input", this.tags), this.$emit("remove", i), t && t.stopPropagation(), this.openOnFocus && this.$refs.autocomplete && this.$refs.autocomplete.focus(), i
				},
				removeLastTag: function() {
					this.tagsLength > 0 && this.removeTag(this.tagsLength - 1)
				},
				keydown: function(e) {
					var t = e.key;
					if (-1 === this.removeOnKeys.indexOf(t) || this.newTag.length || this.removeLastTag(), (!this.autocomplete || this.allowNew) && this.confirmKeys.indexOf(t) >= 0) {
						if ("Tab" !== t && e.preventDefault(), "Enter" === t && this.isComposing) return;
						this.addTag()
					}
				},
				onTyping: function(e) {
					this.$emit("typing", e.trim())
				},
				emitInfiniteScroll: function() {
					this.$emit("infinite-scroll")
				}
			}
		}, void 0, !1, void 0, void 0, void 0),
		Di = {
			install: function(e) {
				z(e, Si)
			}
		};
	L(Di);
	var Ci = {
		install: function(e) {
			z(e, Pe)
		}
	};
	L(Ci);
	var xi, _i = V({
			render: function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("transition", {
					attrs: {
						"enter-active-class": e.transition.enter,
						"leave-active-class": e.transition.leave
					}
				}, [i("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.isActive,
						expression: "isActive"
					}],
					staticClass: "toast",
					class: [e.type, e.position],
					attrs: {
						"aria-hidden": !e.isActive,
						role: "alert"
					},
					on: {
						mouseover: e.pause,
						mouseleave: e.removePause
					}
				}, [e.$slots.default ? [e._t("default")] : [i("div", {
					domProps: {
						innerHTML: e._s(e.message)
					}
				})]], 2)])
			},
			staticRenderFns: []
		}, void 0, {
			name: "BToast",
			mixins: [rt],
			data: function() {
				return {
					newDuration: this.duration || T.defaultToastDuration
				}
			}
		}, void 0, !1, void 0, void 0, void 0),
		$i = {
			open: function(e) {
				var t;
				"string" == typeof e && (e = {
					message: e
				});
				var i, n = {
					position: T.defaultToastPosition || "is-top"
				};
				e.parent && (t = e.parent, delete e.parent), Array.isArray(e.message) && (i = e.message, delete e.message);
				var a = m(n, e),
					s = new(("undefined" != typeof window && window.Vue ? window.Vue : xi || P).extend(_i))({
						parent: t,
						el: document.createElement("div"),
						propsData: a
					});
				return i && (s.$slots.default = i, s.$forceUpdate()), s
			}
		},
		Pi = {
			install: function(e) {
				xi = e, H(e, "toast", $i)
			}
		};
	L(Pi);
	var Bi = {
		install: function(e) {
			z(e, jt)
		}
	};
	L(Bi);
	var Ti = V({
			render: function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("label", {
					staticClass: "upload control",
					class: {
						"is-expanded": e.expanded, "is-rounded": e.rounded
					}
				}, [e.dragDrop ? i("div", {
					staticClass: "upload-draggable",
					class: [e.type, {
						"is-loading": e.loading,
						"is-disabled": e.disabled,
						"is-hovered": e.dragDropFocus,
						"is-expanded": e.expanded
					}],
					on: {
						dragover: function(t) {
							return t.preventDefault(), e.updateDragDropFocus(!0)
						},
						dragleave: function(t) {
							return t.preventDefault(), e.updateDragDropFocus(!1)
						},
						dragenter: function(t) {
							return t.preventDefault(), e.updateDragDropFocus(!0)
						},
						drop: function(t) {
							return t.preventDefault(), e.onFileChange(t)
						}
					}
				}, [e._t("default")], 2) : [e._t("default")], i("input", e._b({
					ref: "input",
					attrs: {
						type: "file",
						multiple: e.multiple,
						accept: e.accept,
						disabled: e.disabled
					},
					on: {
						change: e.onFileChange
					}
				}, "input", e.$attrs, !1))], 2)
			},
			staticRenderFns: []
		}, void 0, {
			name: "BUpload",
			mixins: [M],
			inheritAttrs: !1,
			props: {
				value: {
					type: [Object, Function, Ye, Array]
				},
				multiple: Boolean,
				disabled: Boolean,
				accept: String,
				dragDrop: Boolean,
				type: {
					type: String,
					default: "is-primary"
				},
				native: {
					type: Boolean,
					default: !1
				},
				expanded: {
					type: Boolean,
					default: !1
				},
				rounded: {
					type: Boolean,
					default: !1
				}
			},
			data: function() {
				return {
					newValue: this.value,
					dragDropFocus: !1,
					_elementRef: "input"
				}
			},
			watch: {
				value: function(e) {
					this.newValue = e, (!e || Array.isArray(e) && 0 === e.length) && (this.$refs.input.value = null), !this.isValid && !this.dragDrop && this.checkHtml5Validity()
				}
			},
			methods: {
				onFileChange: function(e) {
					if (!this.disabled && !this.loading) {
						this.dragDrop && this.updateDragDropFocus(!1);
						var t = e.target.files || e.dataTransfer.files;
						if (0 === t.length) {
							if (!this.newValue) return;
							this.native && (this.newValue = null)
						} else if (this.multiple) {
							var i = !1;
							!this.native && this.newValue || (this.newValue = [], i = !0);
							for (var n = 0; n < t.length; n++) {
								var a = t[n];
								this.checkType(a) && (this.newValue.push(a), i = !0)
							}
							if (!i) return
						} else {
							if (this.dragDrop && 1 !== t.length) return;
							var s = t[0];
							if (this.checkType(s)) this.newValue = s;
							else {
								if (!this.newValue) return;
								this.newValue = null
							}
						}
						this.$emit("input", this.newValue), !this.dragDrop && this.checkHtml5Validity()
					}
				},
				updateDragDropFocus: function(e) {
					this.disabled || this.loading || (this.dragDropFocus = e)
				},
				checkType: function(e) {
					if (!this.accept) return !0;
					var t = this.accept.split(",");
					if (0 === t.length) return !0;
					for (var i = !1, n = 0; n < t.length && !i; n++) {
						var a = t[n].trim();
						if (a)
							if ("." === a.substring(0, 1)) {
								var s = e.name.lastIndexOf(".");
								(s >= 0 ? e.name.substring(s) : "").toLowerCase() === a.toLowerCase() && (i = !0)
							} else e.type.match(a) && (i = !0)
					}
					return i || this.$emit("invalid"), i
				}
			}
		}, void 0, !1, void 0, void 0, void 0),
		Ai = {
			install: function(e) {
				z(e, Ti)
			}
		};
	L(Ai);
	var Fi = Object.freeze({
			Autocomplete: W,
			Button: Y,
			Carousel: G,
			Checkbox: te,
			Clockpicker: be,
			Collapse: ne,
			Datepicker: _e,
			Datetimepicker: Te,
			Dialog: Ve,
			Dropdown: Oe,
			Field: Re,
			Icon: Ee,
			Image: ze,
			Input: He,
			Loading: Xe,
			Menu: Je,
			Message: nt,
			Modal: st,
			Navbar: Ct,
			Notification: dt,
			Numberinput: _t,
			Pagination: Tt,
			Progress: Mt,
			Radio: Vt,
			Rate: Rt,
			Select: Et,
			Skeleton: zt,
			Sidebar: Wt,
			Slider: Xt,
			Snackbar: Jt,
			Steps: si,
			Switch: li,
			Table: pi,
			Tabs: gi,
			Tag: ki,
			Taginput: Di,
			Timepicker: Ci,
			Toast: Pi,
			Tooltip: Bi,
			Upload: Ai
		}),
		Mi = {
			getOptions: function() {
				return T
			},
			setOptions: function(e) {
				A(m(T, e, !0))
			}
		},
		Ii = {
			install: function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				for (var i in F(e), A(m(T, t, !0)), Fi) e.use(Fi[i]);
				H(e, "config", Mi)
			}
		};
	L(Ii), e.Autocomplete = W, e.Button = Y, e.Carousel = G, e.Checkbox = te, e.Clockpicker = be, e.Collapse = ne, e.ConfigProgrammatic = Mi, e.Datepicker = _e, e.Datetimepicker = Te, e.Dialog = Ve, e.DialogProgrammatic = Ne, e.Dropdown = Oe, e.Field = Re, e.Icon = Ee, e.Image = ze, e.Input = He, e.Loading = Xe, e.LoadingProgrammatic = Ue, e.Menu = Je, e.Message = nt, e.Modal = st, e.ModalProgrammatic = at, e.Navbar = Ct, e.Notification = dt, e.NotificationProgrammatic = ut, e.Numberinput = _t, e.Pagination = Tt, e.Progress = Mt, e.Radio = Vt, e.Rate = Rt, e.Select = Et, e.Sidebar = Wt, e.Skeleton = zt, e.Slider = Xt, e.Snackbar = Jt, e.SnackbarProgrammatic = Zt, e.Steps = si, e.Switch = li, e.Table = pi, e.Tabs = gi, e.Tag = ki, e.Taginput = Di, e.Timepicker = Ci, e.Toast = Pi, e.ToastProgrammatic = $i, e.Tooltip = Bi, e.Upload = Ai, e.bound = d, e.createAbsoluteElement = b, e.createNewEvent = function(e) {
		var t;
		return "function" == typeof Event ? t = new Event(e) : (t = document.createEvent("Event")).initEvent(e, !0, !0), t
	}, e.default = Ii, e.escapeRegExpChars = w, e.getMonthNames = D, e.getValueByPath = h, e.getWeekdayNames = C, e.hasFlag = c, e.indexOf = f, e.isCustomElement = $, e.isDefined = B, e.isMobile = v, e.isVueComponent = y, e.isWebpSupported = _, e.matchWithGroups = x, e.merge = m, e.mod = u, e.multiColumnSort = k, e.removeElement = g, e.sign = l, e.toCssWidth = S, Object.defineProperty(e, "__esModule", {
		value: !0
	})
});