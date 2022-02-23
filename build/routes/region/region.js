"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const region = (0, express_1.Router)();
region.get('/', (req, res) => {
    res.send(req.baseUrl + ' was visted');
});
exports.default = region;
