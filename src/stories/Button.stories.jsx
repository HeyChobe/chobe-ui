"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomColor = exports.Warning = exports.Cancel = exports.Ok = exports.Secondary = exports.Primary = void 0;
const Button_1 = require("../components/Button");
const meta = {
    title: "Button",
    component: Button_1.Button,
};
exports.default = meta;
exports.Primary = {
    render: () => (<Button_1.Button bg="primary" label="Primary" onClick={() => console.log("hola")}/>),
};
exports.Secondary = {
    render: () => (<Button_1.Button bg="secondary" label="Secondary" onClick={() => console.log("hola")}/>),
};
exports.Ok = {
    render: () => (<Button_1.Button bg="ok" label="Success" onClick={() => console.log("hola")}/>),
};
exports.Cancel = {
    render: () => (<Button_1.Button bg="cancel" label="Cancel" onClick={() => console.log("hola")}/>),
};
exports.Warning = {
    render: () => (<Button_1.Button bg="warning" label="Warning" onClick={() => console.log("hola")}/>),
};
exports.CustomColor = {
    render: () => (<Button_1.Button bg="#111111" label="Warning" onClick={() => console.log("hola")}/>),
};
