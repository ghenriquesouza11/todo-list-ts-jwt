"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controllers_1 = __importDefault(require("../../controllers/user.controllers"));
const userRoutes = express_1.default.Router();
userRoutes.post('/register', user_controllers_1.default.createUser);
exports.default = userRoutes;
