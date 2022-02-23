"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const countries = (0, express_1.Router)();
countries.get('/', (req, res) => {
    res.send(req.baseUrl + ' was visted');
});
exports.default = countries;
