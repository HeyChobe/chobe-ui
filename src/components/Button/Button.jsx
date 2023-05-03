"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const Button_module_css_1 = __importDefault(require("./Button.module.css"));
const options = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    OK: "ok",
    CANCEL: "cancel",
    WARNING: "warning",
};
const Button = ({ label, onClick, bg = "primary" }) => {
    if (!Object.values(options).includes(bg))
        return (<button className={Button_module_css_1.default.button} style={{ backgroundColor: bg }} onClick={onClick}>
        {label}
      </button>);
    return (<button data-bg={bg} className={Button_module_css_1.default.button} onClick={onClick}>
      {label}
    </button>);
};
exports.Button = Button;
