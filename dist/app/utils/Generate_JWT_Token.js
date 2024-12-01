"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateRefreshToken = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../config")); // Adjust the path to your config file
// Generate Access Token
const generateAccessToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, config_1.default.JWT_ACCESS_TOKEN, {
        expiresIn: config_1.default.ACCESS_TOKEN_EXPIRED,
    });
};
exports.generateAccessToken = generateAccessToken;
// Generate Refresh Token
const generateRefreshToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, config_1.default.JWT_REFRESH_TOKEN, {
        expiresIn: config_1.default.REFRESH_TOKEN_EXPIRED,
    });
};
exports.generateRefreshToken = generateRefreshToken;
// Verify Token
const verifyToken = (token, secret) => {
    return jsonwebtoken_1.default.verify(token, secret);
};
exports.verifyToken = verifyToken;