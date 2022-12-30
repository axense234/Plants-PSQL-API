"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Express,Dotenv,ConnectDB
const express_1 = __importDefault(require("express"));
// Errors
require("express-async-errors");
const dotenv = __importStar(require("dotenv"));
const connect_1 = require("./db/connect");
// Routers and Middleware
const plants_1 = __importDefault(require("./routers/plants"));
const notFound_1 = __importDefault(require("./middleware/notFound"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
dotenv.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
// Express Middleware
app.use(express_1.default.json());
app.use(express_1.default.raw());
app.use("/", [plants_1.default]);
app.use(errorHandler_1.default);
app.use(notFound_1.default);
app.get("/", (req, res) => {
    return res.status(200).json({ msg: "Yo" });
});
const startServer = async () => {
    try {
        await (0, connect_1.connectDB)();
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}...`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
startServer();
//# sourceMappingURL=app.js.map