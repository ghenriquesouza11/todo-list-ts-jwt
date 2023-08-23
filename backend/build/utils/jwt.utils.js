"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const secret = process.env.JWT_SECRET || 'secretkey';
const sign = (payload) => {
    const token = jsonwebtoken_1.default.sign(payload, secret);
    return token;
};
module.exports = {
    sign,
};
