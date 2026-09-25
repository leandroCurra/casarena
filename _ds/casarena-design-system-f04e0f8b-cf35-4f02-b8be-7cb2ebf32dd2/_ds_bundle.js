/* @ds-bundle: {"format":4,"namespace":"CasarenaDesignSystem_f04e0f","components":[{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Dialog","sourcePath":"components/surfaces/Dialog.jsx"},{"name":"Tabs","sourcePath":"components/surfaces/Tabs.jsx"},{"name":"Tooltip","sourcePath":"components/surfaces/Tooltip.jsx"}],"sourceHashes":{"components/brand/Icon.jsx":"fb6dc5cbee48","components/brand/Logo.jsx":"f922946ba3c4","components/core/Badge.jsx":"9bdab25efc20","components/core/Button.jsx":"55707d185dee","components/core/Divider.jsx":"6e9557f7f3f7","components/core/IconButton.jsx":"24ec6cf49754","components/core/Tag.jsx":"f80768381175","components/forms/Checkbox.jsx":"6ac946a97234","components/forms/Input.jsx":"9f961b8a14ac","components/forms/Radio.jsx":"d96109463f62","components/forms/Select.jsx":"f0b8f9579260","components/forms/Switch.jsx":"e4097463391a","components/surfaces/Card.jsx":"934a4e231f89","components/surfaces/Dialog.jsx":"6332956e7cde","components/surfaces/Tabs.jsx":"0d74ceadd2c0","components/surfaces/Tooltip.jsx":"eb5ddcdd13ba","ui_kits/website/BookingPanel.jsx":"9f05f34fa8d2","ui_kits/website/Footer.jsx":"2cca015f5f0c","ui_kits/website/Header.jsx":"2584d1c01834","ui_kits/website/Hero.jsx":"6c007fbde43a","ui_kits/website/Sections.jsx":"c22e9c9afbe3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CasarenaDesignSystem_f04e0f = window.CasarenaDesignSystem_f04e0f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const iconNames = {
  seahorse: 102,
  "turtle-top": 103,
  tortoise: 104,
  lobster: 105,
  shrimp: 106,
  dolphin: 107,
  fish: 108,
  anchor: 109,
  sailboat: 110,
  "tall-ship": 111,
  "life-ring-rope": 112,
  nautilus: 113,
  "starfish-slim": 114,
  "conch-spiky": 115,
  oyster: 116,
  whelk: 117,
  "conch-ridged": 118,
  "spiral-shell": 119,
  scallop: 120,
  "hermit-crab": 121,
  seaweed: 122,
  "coral-branch": 123,
  "coral-round": 124,
  "starfish-fine": 125,
  murex: 126,
  "whelk-tall": 127,
  "conch-slim": 128,
  clam: 129,
  "scallop-large": 130,
  "coral-cluster": 131,
  "coral-sprig": 132,
  "conch-small": 133,
  "murex-open": 134,
  "spiral-snail": 135,
  "kelp-leaf": 136,
  "coral-fan": 137,
  "clam-ridged": 138,
  "kelp-blade": 139,
  "scallop-round": 140,
  "spider-conch": 141,
  starfish: 142,
  "murex-spiky": 143,
  crab: 144,
  "coral-brain": 145,
  "cone-shell": 146,
  cowrie: 147,
  "scallop-fan": 148,
  "coral-antler": 149,
  "whelk-plain": 150,
  "urchin-bulb": 151,
  "gull-flying": 153,
  "gull-gliding": 155,
  "gull-solid": 156,
  "gull-soaring": 157,
  "gull-wide": 158,
  "gull-small": 159,
  "gull-hover": 160,
  "gull-diving": 161,
  "gull-banking": 162,
  "coral-tree": 163,
  pipe: 164,
  "sea-turtle": 165,
  seal: 166,
  globe: 167,
  "crab-large": 168,
  "ships-wheel": 169,
  scroll: 170,
  spyglass: 171,
  "pocket-compass": 172,
  "seahorse-detailed": 173,
  "shell-conch": 174,
  ammonite: 175,
  "gull-perched": 176,
  "sun-face": 177,
  lighthouse: 178,
  "rope-knot": 179,
  "shell-striped": 180,
  "scallop-shell": 181,
  tuna: 182,
  "compass-rose": 183,
  "captain-hat": 184,
  "life-ring": 185,
  "anchor-rope": 186
};
function base() {
  return typeof window !== "undefined" && window.CASARENA_ICON_BASE || "assets/icons/";
}
function Icon({
  name,
  size = 40,
  color = "currentColor",
  title,
  style,
  ...rest
}) {
  const n = iconNames[name] || name;
  const url = base() + "recurso-" + n + ".svg";
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": title || name,
    style: {
      display: "inline-block",
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMaskImage: `url("${url}")`,
      maskImage: `url("${url}")`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      flex: "none",
      ...style
    }
  }, rest));
}
Icon.names = iconNames;
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function base() {
  return typeof window !== "undefined" && window.CASARENA_ASSET_BASE || "assets/";
}
function Logo({
  width = 240,
  tone = "ink",
  style,
  ...rest
}) {
  const color = tone === "light" ? "var(--casarena-warm-white)" : tone === "accent" ? "var(--casarena-deep-turquoise)" : "var(--casarena-deep-green)";
  const url = base() + "logo.svg";
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": "Casarena",
    style: {
      display: "inline-block",
      width,
      height: width * (29.88 / 292.06),
      backgroundColor: color,
      WebkitMaskImage: `url("${url}")`,
      maskImage: `url("${url}")`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  tone = "teal",
  children,
  style,
  ...rest
}) {
  const t = {
    teal: {
      background: "var(--casarena-dark-teal)",
      color: "var(--casarena-warm-white)"
    },
    sand: {
      background: "var(--casarena-sand)",
      color: "var(--casarena-deep-green)"
    },
    stone: {
      background: "var(--casarena-warm-stone)",
      color: "var(--casarena-deep-green)"
    },
    mist: {
      background: "var(--casarena-sea-mist)",
      color: "var(--casarena-warm-white)"
    },
    outline: {
      background: "transparent",
      color: "var(--casarena-dark-teal)",
      boxShadow: "inset 0 0 0 1px var(--casarena-dark-teal)"
    }
  }[tone] || {};
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "5px 10px",
      fontFamily: "var(--font-core)",
      fontSize: "var(--size-eyebrow)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      borderRadius: "var(--radius-none)",
      ...t,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: "9px 20px",
    fontSize: 11,
    letterSpacing: ".16em"
  },
  md: {
    padding: "14px 32px",
    fontSize: 12,
    letterSpacing: ".14em"
  },
  lg: {
    padding: "18px 44px",
    fontSize: 13,
    letterSpacing: ".14em"
  }
};
function Button({
  variant = "primary",
  size = "md",
  disabled,
  fullWidth,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const palette = {
    primary: {
      background: hover ? "var(--casarena-deep-turquoise)" : "var(--casarena-dark-teal)",
      color: "var(--casarena-warm-white)",
      border: "1px solid transparent"
    },
    secondary: {
      background: hover ? "var(--casarena-sand)" : "transparent",
      color: "var(--casarena-dark-teal)",
      border: "1px solid var(--casarena-dark-teal)"
    },
    ghost: {
      background: "transparent",
      color: hover ? "var(--casarena-deep-turquoise)" : "var(--casarena-dark-teal)",
      border: "1px solid transparent"
    },
    inverse: {
      background: hover ? "var(--casarena-warm-white)" : "transparent",
      color: hover ? "var(--casarena-deep-green)" : "var(--casarena-warm-white)",
      border: "1px solid var(--casarena-warm-white)"
    }
  }[variant] || {};
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-semibold)",
      textTransform: "uppercase",
      borderRadius: "var(--radius-none)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.38 : 1,
      transform: press && !disabled ? "translateY(1px)" : "none",
      transition: "var(--motion-hover), transform var(--dur-instant) var(--ease-shore)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      width: fullWidth ? "100%" : undefined,
      ...s,
      ...palette,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function Divider({
  ornament,
  tone = "ink",
  style
}) {
  const line = tone === "light" ? "var(--border-on-dark)" : "var(--border-hairline)";
  const ink = tone === "light" ? "var(--icon-on-dark)" : "var(--icon-muted)";
  if (!ornament) return /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      borderTop: "1px solid " + line,
      margin: 0,
      ...style
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: line
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ornament,
    size: 28,
    color: ink
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: line
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  name,
  size = 44,
  tone = "ink",
  label,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const light = tone === "light";
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label || name,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: hover ? light ? "rgba(247,245,239,.12)" : "var(--casarena-sand)" : "transparent",
      border: "1px solid " + (light ? "var(--border-on-dark)" : "var(--border-hairline)"),
      borderRadius: "var(--radius-none)",
      cursor: "pointer",
      transition: "var(--motion-hover)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: Math.round(size * 0.52),
    color: light ? "var(--icon-on-dark)" : "var(--icon-ink)"
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  selected,
  onRemove,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "7px 14px",
      fontFamily: "var(--font-core)",
      fontSize: "var(--size-body-sm)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: ".02em",
      color: selected ? "var(--casarena-warm-white)" : "var(--casarena-dark-teal)",
      background: selected ? "var(--casarena-dark-teal)" : hover ? "var(--casarena-sand)" : "transparent",
      border: "1px solid " + (selected ? "var(--casarena-dark-teal)" : "var(--border-hairline)"),
      borderRadius: "var(--radius-pill)",
      cursor: "pointer",
      transition: "var(--motion-hover)",
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      opacity: .6,
      fontSize: 14,
      lineHeight: 1,
      cursor: "pointer"
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      fontFamily: "var(--font-core)",
      fontSize: "var(--size-body-sm)",
      color: "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .38 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: "none",
      border: "1px solid " + (checked ? "var(--casarena-dark-teal)" : "var(--border-hairline)"),
      background: checked ? "var(--casarena-dark-teal)" : "transparent",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "var(--motion-hover)"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 4,
      borderLeft: "1.5px solid var(--casarena-warm-white)",
      borderBottom: "1.5px solid var(--casarena-warm-white)",
      transform: "rotate(-45deg) translate(1px,-1px)"
    }
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  tone = "ink",
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const light = tone === "light";
  const line = error ? "var(--casarena-deep-turquoise)" : focus ? "var(--casarena-dark-teal)" : light ? "var(--border-on-dark)" : "var(--border-hairline)";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      fontFamily: "var(--font-core)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-eyebrow)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: light ? "var(--text-on-dark-muted)" : "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: "var(--font-core)",
      fontSize: "var(--size-body)",
      fontWeight: "var(--weight-regular)",
      color: light ? "var(--text-on-dark)" : "var(--text-strong)",
      background: "transparent",
      border: 0,
      borderBottom: "1px solid " + line,
      borderRadius: 0,
      padding: "10px 0 12px",
      outline: "none",
      transition: "border-color var(--dur-quick) var(--ease-shore)",
      width: "100%"
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-caption)",
      color: error ? "var(--casarena-deep-turquoise)" : light ? "var(--text-on-dark-muted)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  name,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      fontFamily: "var(--font-core)",
      fontSize: "var(--size-body-sm)",
      color: "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .38 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    checked: !!checked,
    disabled: disabled,
    onChange: () => onChange && onChange(true),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      border: "1px solid " + (checked ? "var(--casarena-dark-teal)" : "var(--border-hairline)"),
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "var(--motion-hover)"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "var(--radius-pill)",
      background: "var(--casarena-dark-teal)"
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  tone = "ink",
  style,
  ...rest
}) {
  const light = tone === "light";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      fontFamily: "var(--font-core)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-eyebrow)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: light ? "var(--text-on-dark-muted)" : "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    style: {
      appearance: "none",
      fontFamily: "var(--font-core)",
      fontSize: "var(--size-body)",
      color: light ? "var(--text-on-dark)" : "var(--text-strong)",
      background: "transparent",
      border: 0,
      borderBottom: "1px solid " + (light ? "var(--border-on-dark)" : "var(--border-hairline)"),
      borderRadius: 0,
      padding: "10px 24px 12px 0",
      outline: "none",
      width: "100%",
      cursor: "pointer"
    }
  }, rest), options.map(o => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  onChange,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 14,
      fontFamily: "var(--font-core)",
      fontSize: "var(--size-body-sm)",
      color: "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .38 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 42,
      height: 22,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--casarena-dark-teal)" : "var(--casarena-warm-stone)",
      position: "relative",
      transition: "background-color var(--dur-base) var(--ease-shore)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: checked ? 23 : 3,
      width: 16,
      height: 16,
      borderRadius: "var(--radius-pill)",
      background: "var(--casarena-warm-white)",
      transition: "left var(--dur-base) var(--ease-shore)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  image,
  eyebrow,
  title,
  children,
  footer,
  tone = "light",
  elevated,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dark = tone === "deep";
  const sand = tone === "sand";
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: dark ? "var(--casarena-deep-green)" : sand ? "var(--casarena-sand)" : "var(--casarena-white)",
      border: "1px solid " + (dark ? "var(--border-on-dark)" : "var(--border-hairline)"),
      borderRadius: "var(--radius-none)",
      boxShadow: elevated ? hover ? "var(--shadow-float)" : "var(--shadow-lift)" : "var(--shadow-none)",
      transition: "box-shadow var(--dur-base) var(--ease-shore)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, rest), image && /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      display: "block",
      width: "100%",
      height: 200,
      objectFit: "cover",
      transform: hover ? "scale(1.04)" : "scale(1)",
      transition: "transform var(--dur-slow) var(--ease-shore)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 24px 26px",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      flex: 1
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-core)",
      fontSize: "var(--size-eyebrow)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: dark ? "var(--casarena-sea-mist)" : "var(--text-muted)"
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-core)",
      fontSize: "var(--size-h4)",
      fontWeight: "var(--weight-light)",
      letterSpacing: "var(--tracking-heading)",
      color: dark ? "var(--casarena-warm-white)" : "var(--text-strong)"
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-core)",
      fontSize: "var(--size-body-sm)",
      lineHeight: "var(--leading-normal)",
      color: dark ? "var(--casarena-warm-stone)" : "var(--text-body)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: 18
    }
  }, footer)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  eyebrow,
  children,
  footer,
  onClose,
  width = 520
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-scrim)",
      backdropFilter: "blur(var(--blur-veil))",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      width,
      maxWidth: "100%",
      background: "var(--casarena-warm-white)",
      boxShadow: "var(--shadow-float)",
      borderRadius: "var(--radius-none)",
      padding: "40px 40px 36px",
      position: "relative"
    }
  }, onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Cerrar",
    onClick: onClose,
    style: {
      position: "absolute",
      top: 16,
      right: 18,
      background: "none",
      border: 0,
      fontSize: 22,
      lineHeight: 1,
      color: "var(--text-muted)",
      cursor: "pointer"
    }
  }, "\xD7"), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-core)",
      fontSize: "var(--size-eyebrow)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 12
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 16px",
      fontFamily: "var(--font-core)",
      fontSize: "var(--size-h3)",
      fontWeight: "var(--weight-light)",
      letterSpacing: "var(--tracking-heading)",
      color: "var(--text-strong)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-core)",
      fontSize: "var(--size-body-sm)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-body)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: "flex",
      gap: 12,
      justifyContent: "flex-end"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  tone = "ink",
  style
}) {
  const light = tone === "light";
  const active = value != null ? value : items[0] && items[0].value;
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: 36,
      borderBottom: "1px solid " + (light ? "var(--border-on-dark)" : "var(--border-hairline)"),
      ...style
    }
  }, items.map(it => {
    const on = it.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(it.value),
      style: {
        background: "none",
        border: 0,
        cursor: "pointer",
        padding: "0 0 14px",
        fontFamily: "var(--font-core)",
        fontSize: "var(--size-caption)",
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: on ? light ? "var(--casarena-warm-white)" : "var(--casarena-dark-teal)" : light ? "var(--casarena-sea-mist)" : "var(--text-muted)",
        boxShadow: on ? "inset 0 -2px 0 " + (light ? "var(--casarena-warm-white)" : "var(--casarena-dark-teal)") : "none",
        transition: "var(--motion-hover)"
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  placement = "top",
  children,
  style
}) {
  const [on, setOn] = React.useState(false);
  const pos = placement === "bottom" ? {
    top: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  } : {
    bottom: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  };
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setOn(true),
    onMouseLeave: () => setOn(false),
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      whiteSpace: "nowrap",
      pointerEvents: "none",
      padding: "6px 10px",
      background: "var(--casarena-deep-green)",
      color: "var(--casarena-warm-white)",
      fontFamily: "var(--font-core)",
      fontSize: "var(--size-caption)",
      letterSpacing: ".04em",
      opacity: on ? 1 : 0,
      transition: "opacity var(--dur-quick) var(--ease-shore)",
      zIndex: 30
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BookingPanel.jsx
try { (() => {
const {
  Input,
  Select,
  Checkbox,
  Switch,
  Radio,
  Button,
  Dialog,
  Divider
} = window.CasarenaDesignSystem_f04e0f;
function BookingPanel({
  open,
  onClose
}) {
  const [step, setStep] = React.useState(0);
  const [plan, setPlan] = React.useState("sa");
  const [sea, setSea] = React.useState(true);
  const [ok, setOk] = React.useState(false);
  React.useEffect(() => {
    if (open) setStep(0);
  }, [open]);
  if (!open) return null;
  if (step === 1) return /*#__PURE__*/React.createElement(Dialog, {
    eyebrow: "Reserva",
    title: "Recibimos tu consulta",
    onClose: onClose,
    footer: /*#__PURE__*/React.createElement(Button, {
      onClick: onClose
    }, "Cerrar")
  }, "Te escribimos dentro de las 24 horas con disponibilidad y forma de pago.");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-scrim)",
      backdropFilter: "blur(var(--blur-veil))",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 560,
      maxWidth: "100%",
      background: "var(--casarena-warm-white)",
      boxShadow: "var(--shadow-float)",
      padding: "44px 44px 38px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Cerrar",
    onClick: onClose,
    style: {
      position: "absolute",
      top: 16,
      right: 18,
      background: "none",
      border: 0,
      fontSize: 22,
      color: "var(--text-muted)",
      cursor: "pointer"
    }
  }, "\xD7"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--size-eyebrow)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Reservas"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "12px 0 26px",
      fontSize: "var(--size-h3)",
      fontWeight: "var(--weight-light)",
      letterSpacing: "var(--tracking-heading)",
      color: "var(--text-strong)"
    }
  }, "Consult\xE1 disponibilidad"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre",
    placeholder: "Tu nombre"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Correo",
    placeholder: "nombre@dominio.com"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Hu\xE9spedes",
    options: ["2 personas", "4 personas", "6 personas", "Casa entera"]
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Estad\xEDa",
    options: ["Fin de semana", "Una semana", "Quincena"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "26px 0"
    }
  }, /*#__PURE__*/React.createElement(Divider, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "plan",
    label: "Solo alojamiento",
    checked: plan === "sa",
    onChange: () => setPlan("sa")
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "plan",
    label: "Media pensi\xF3n",
    checked: plan === "mp",
    onChange: () => setPlan("mp")
  })), /*#__PURE__*/React.createElement(Switch, {
    label: "Habitaci\xF3n con vista al mar",
    checked: sea,
    onChange: setSea
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Quiero recibir novedades de temporada",
    checked: ok,
    onChange: setOk
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      justifyContent: "flex-end",
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onClose
  }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
    onClick: () => setStep(1)
  }, "Enviar consulta"))));
}
Object.assign(window, {
  BookingPanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BookingPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
const {
  Logo,
  Icon,
  Input,
  Button,
  Divider
} = window.CasarenaDesignSystem_f04e0f;
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--casarena-deep-green)",
      color: "var(--casarena-sand)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-8) var(--gutter-page) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    width: 210,
    tone: "light"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "22px 0 0",
      maxWidth: "34ch",
      fontSize: "var(--size-body-sm)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--casarena-warm-stone)"
    }
  }, "Ruta costera km 41, Costa Este. Abierto de octubre a marzo.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--size-eyebrow)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--casarena-sea-mist)",
      marginBottom: 16
    }
  }, "La casa"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      fontSize: "var(--size-body-sm)"
    }
  }, ["Habitaciones", "La galería", "La mesa", "Cómo llegar"].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: "var(--casarena-sand)",
      borderBottomColor: "rgba(247,245,239,.24)"
    }
  }, l)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--size-eyebrow)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--casarena-sea-mist)",
      marginBottom: 16
    }
  }, "Bolet\xEDn de marea"), /*#__PURE__*/React.createElement(Input, {
    tone: "light",
    placeholder: "nombre@dominio.com"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "sm"
  }, "Suscribirme")))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "var(--space-7) 0 var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Divider, {
    ornament: "anchor-rope",
    tone: "light"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "var(--size-caption)",
      color: "var(--casarena-sea-mist)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Casarena"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18
    }
  }, ["compass-rose", "lighthouse", "ships-wheel"].map(n => /*#__PURE__*/React.createElement(Icon, {
    key: n,
    name: n,
    size: 24,
    color: "var(--casarena-sea-mist)"
  }))))));
}
Object.assign(window, {
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
const {
  Logo,
  Button
} = window.CasarenaDesignSystem_f04e0f;
function SiteHeader({
  onBook,
  active,
  onNav
}) {
  const items = [["casa", "La casa"], ["costa", "La costa"], ["mesa", "La mesa"], ["reservas", "Reservas"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "rgba(247,245,239,.92)",
      backdropFilter: "blur(var(--blur-veil))",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--gutter-page)",
      height: 84,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("casa");
    },
    style: {
      borderBottom: 0,
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    width: 196
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 36
    }
  }, items.map(([k, l]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(k);
    },
    style: {
      fontSize: "var(--size-caption)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: active === k ? "var(--casarena-dark-teal)" : "var(--text-muted)",
      borderBottom: active === k ? "1px solid var(--casarena-dark-teal)" : "1px solid transparent",
      paddingBottom: 4
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onBook
  }, "Reservar")));
}
Object.assign(window, {
  SiteHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const {
  Icon,
  Button
} = window.CasarenaDesignSystem_f04e0f;
function Hero({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      height: 620,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/shoreline-aerial.png",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-full)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--gutter-page)",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-eyebrow)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--casarena-sand)"
    }
  }, "Costa este \xB7 Temporada 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "18px 0 0",
      fontSize: "var(--size-display-2)",
      fontWeight: "var(--weight-extralight)",
      letterSpacing: "var(--tracking-display)",
      textTransform: "uppercase",
      lineHeight: "var(--leading-tight)",
      color: "var(--casarena-warm-white)"
    }
  }, "La casa", /*#__PURE__*/React.createElement("br", null), "en la arena"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "26px 0 0",
      maxWidth: "46ch",
      fontSize: "var(--size-lead)",
      fontWeight: 300,
      lineHeight: "var(--leading-relaxed)",
      color: "var(--casarena-sand)"
    }
  }, "Seis habitaciones sobre la duna, una galer\xEDa larga y una escalera de madera que baja directo al agua."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      marginTop: 34,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    onClick: onBook
  }, "Consultar fechas"), /*#__PURE__*/React.createElement(Icon, {
    name: "gull-soaring",
    size: 44,
    color: "var(--casarena-warm-white)"
  }))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
const {
  Icon,
  Card,
  Divider,
  Tag,
  Badge,
  Button
} = window.CasarenaDesignSystem_f04e0f;
function Intro() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-9) var(--gutter-page)"
    }
  }, /*#__PURE__*/React.createElement(Divider, {
    ornament: "compass-rose"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.2fr",
      gap: "var(--space-9)",
      paddingTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "var(--size-h1)",
      fontWeight: "var(--weight-light)",
      letterSpacing: "var(--tracking-heading)",
      lineHeight: "var(--leading-snug)",
      color: "var(--text-strong)"
    }
  }, "El agua cambia de color tres veces por d\xEDa."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--measure-prose)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 20px",
      fontSize: "var(--size-body)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-body)"
    }
  }, "Casarena abre en octubre y cierra cuando baja el viento. No hay recepci\xF3n ni horarios: hay una llave, una cocina compartida y un cuaderno donde se anotan las mareas."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--size-body)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-body)"
    }
  }, "La casa se reserva entera o por habitaci\xF3n. En temporada alta pedimos una semana m\xEDnima."))));
}
function Rooms() {
  const rooms = [{
    img: "../../assets/imagery/palm-shadow-sand.png",
    eyebrow: "Duna",
    title: "Habitación norte",
    body: "Cama grande, escritorio de madera y una ventana que da al médano.",
    price: "desde $180 / noche"
  }, {
    img: "../../assets/imagery/sand-foam.png",
    eyebrow: "Orilla",
    title: "Habitación de la galería",
    body: "Se abre a la galería larga. Es la que primero recibe el sol.",
    price: "desde $210 / noche"
  }, {
    img: "../../assets/imagery/deep-water-aerial.png",
    eyebrow: "Casa entera",
    title: "Casarena completa",
    body: "Seis habitaciones, cocina, galería y la escalera al agua.",
    price: "desde $980 / noche"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--casarena-sand)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-9) var(--gutter-page)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-eyebrow)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--casarena-ocean-green)"
    }
  }, "La casa"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "14px 0 var(--space-7)",
      fontSize: "var(--size-h2)",
      fontWeight: "var(--weight-light)",
      letterSpacing: "var(--tracking-heading)",
      color: "var(--text-strong)"
    }
  }, "D\xF3nde dormir"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-5)"
    }
  }, rooms.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.title,
    image: r.img,
    eyebrow: r.eyebrow,
    title: r.title,
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--size-caption)",
        letterSpacing: ".08em",
        textTransform: "uppercase",
        color: "var(--text-muted)",
        fontWeight: 600
      }
    }, r.price), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost"
    }, "Ver"))
  }, r.body)))));
}
function Coast({
  filter,
  setFilter
}) {
  const marks = [["ammonite", "Fósiles en la barranca"], ["gull-soaring", "Colonia de gaviotas"], ["lighthouse", "Faro de punta seca"], ["sea-turtle", "Desove, enero"], ["crab-large", "Cangrejal norte"], ["coral-tree", "Restinga baja"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-9) var(--gutter-page)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-eyebrow)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-accent)"
    }
  }, "La costa"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "14px 0 var(--space-5)",
      fontSize: "var(--size-h2)",
      fontWeight: "var(--weight-light)",
      letterSpacing: "var(--tracking-heading)",
      color: "var(--text-strong)"
    }
  }, "Qu\xE9 hay alrededor"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      marginBottom: "var(--space-7)"
    }
  }, ["Todo", "A pie", "En bici", "Con marea baja"].map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    selected: filter === f,
    onClick: () => setFilter(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-6) var(--space-7)"
    }
  }, marks.map(([icon, label]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: "flex",
      gap: 18,
      alignItems: "center",
      borderTop: "1px solid var(--border-hairline)",
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 46,
    color: "var(--casarena-ocean-green)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--size-body)",
      fontWeight: 500,
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--size-caption)",
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, filter === "Todo" ? "Todo el año" : filter))))));
}
function Table() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/palm-shadow-teal.png",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-9) var(--gutter-page)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-9)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-eyebrow)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--casarena-sand)"
    }
  }, "La mesa"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "14px 0 20px",
      fontSize: "var(--size-h2)",
      fontWeight: "var(--weight-light)",
      letterSpacing: "var(--tracking-heading)",
      color: "var(--casarena-warm-white)"
    }
  }, "Cocina de orilla"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 28px",
      maxWidth: "48ch",
      fontSize: "var(--size-body)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--casarena-sand)"
    }
  }, "Pescado del d\xEDa, verduras de la quinta y pan hecho a la ma\xF1ana. Se come a las nueve, en la galer\xEDa, todos en la misma mesa."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "sand"
  }, "Martes a domingo"), /*#__PURE__*/React.createElement(Badge, {
    tone: "mist"
  }, "Reserva previa"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 26,
      justifyContent: "center"
    }
  }, ["fish", "lobster", "scallop-fan", "shrimp"].map(n => /*#__PURE__*/React.createElement(Icon, {
    key: n,
    name: n,
    size: 92,
    color: "var(--casarena-warm-white)"
  })))));
}
Object.assign(window, {
  Intro,
  Rooms,
  Coast,
  Table
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
