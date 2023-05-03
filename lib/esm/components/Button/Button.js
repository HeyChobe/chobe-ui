var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./Button.module.css";
var options = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    OK: "ok",
    CANCEL: "cancel",
    WARNING: "warning",
};
export default function Button(_a) {
    var label = _a.label, onClick = _a.onClick, _b = _a.bg, bg = _b === void 0 ? "primary" : _b;
    if (!Object.values(options).includes(bg))
        return (_jsx("button", __assign({ className: styles.button, style: { backgroundColor: bg }, onClick: onClick }, { children: label })));
    return (_jsx("button", __assign({ "data-bg": bg, className: styles.button, onClick: onClick }, { children: label })));
}
