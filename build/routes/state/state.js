"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const state = (0, express_1.Router)();
state.get('/', (req, res) => {
    res.send(req.baseUrl + ' was visted');
});
exports.default = state;
