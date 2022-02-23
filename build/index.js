"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const logger_1 = __importDefault(require("./routes/middleware/logger"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use('/country', logger_1.default, index_1.default);
app.use('/state', logger_1.default, index_1.default);
app.use('/region', index_1.default);
app.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`);
});
