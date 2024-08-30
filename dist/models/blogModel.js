"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const blogSchema_1 = __importDefault(require("../schemas/blogSchema"));
const Blog = (0, mongoose_1.model)("blog", blogSchema_1.default);
exports.default = Blog;
