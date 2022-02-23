"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const countries_1 = __importDefault(require("./countries/countries"));
const state_1 = __importDefault(require("./state/state"));
const region_1 = __importDefault(require("./region/region"));
const routes = (0, express_1.Router)();
routes.use('/', countries_1.default);
routes.use('/', state_1.default);
routes.use('/', region_1.default);
exports.default = routes;
