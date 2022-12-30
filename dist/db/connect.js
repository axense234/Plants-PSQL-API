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
exports.connectDB = exports.client = void 0;
const pg_1 = __importDefault(require("pg"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const { Client } = pg_1.default;
const clientOptions = {
    connectionString: process.env.PGURI,
};
const client = new Client(clientOptions);
exports.client = client;
const connectDB = async () => {
    await client.connect();
    // CREATES THE TABLE IS IF'S NOT ALREADY CREATED,OTHERWISE SKIPS THIS QUERY
    await client.query("CREATE TABLE IF NOT EXISTS plant(plant_uid UUID NOT NULL PRIMARY KEY,familiar_name VARCHAR(100) NOT NULL,scientific_name VARCHAR(100) NOT NULL,plant_family VARCHAR(100) NOT NULL,price MONEY NOT NULL,stock INT NOT NULL,discovery_date DATE NOT NULL,primary_color VARCHAR(50) NOT NULL,UNIQUE(scientific_name))");
};
exports.connectDB = connectDB;
//# sourceMappingURL=connect.js.map