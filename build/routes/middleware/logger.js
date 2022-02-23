"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const logger = Router();
const logger = (req, res, next) => {
    console.log(req.baseUrl + ' was visted');
    next();
};
exports.default = logger;
