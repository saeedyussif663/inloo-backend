"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlog = exports.editBlog = exports.createBlog = exports.fetchSingleBlog = exports.fetchAllBlogs = void 0;
const blogModel_1 = __importDefault(require("../models/blogModel"));
const mongodb_1 = require("mongodb");
const express_validator_1 = require("express-validator");
function fetchAllBlogs(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const blogs = yield blogModel_1.default.find({});
            return res.status(200).json(blogs);
        }
        catch (error) {
            return res.json({ message: 'An error occurred' });
        }
    });
}
exports.fetchAllBlogs = fetchAllBlogs;
// fetch a single blog
function fetchSingleBlog(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = new mongodb_1.ObjectId(req.params.id);
            const item = yield blogModel_1.default.findOne({ _id: id });
            if (!item) {
                return res.status(404).json({ message: 'Blog does not exist' });
            }
            const blog = yield blogModel_1.default.findById(id);
            return res.status(200).json(blog);
        }
        catch (error) {
            return res.status(404).json({ message: 'An error occured fetching blog' });
        }
    });
}
exports.fetchSingleBlog = fetchSingleBlog;
// create blog
function createBlog(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = (0, express_validator_1.validationResult)(req);
        const errors = results.array();
        if (errors.length > 0) {
            return res.status(400).json({ message: errors[0].msg });
        }
        try {
            const blog = yield blogModel_1.default.create(req.body);
            return res
                .status(201)
                .json({ blog: blog, message: 'Created blog successfully' });
        }
        catch (error) {
            return res.status(400).json({ message: 'An error occured creating blog' });
        }
    });
}
exports.createBlog = createBlog;
// edit blog
function editBlog(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = new mongodb_1.ObjectId(req.params.id);
            const item = yield blogModel_1.default.findOne({ _id: id });
            if (!item) {
                return res.status(404).json({ message: 'Blog does not exist' });
            }
            const blog = yield blogModel_1.default.findByIdAndUpdate(id, req.body);
            return res.status(201).json({ message: 'updated blog successfully' });
        }
        catch (error) {
            console.log(error);
            return res
                .status(404)
                .json({ message: 'An error occurred updating your blog' });
        }
    });
}
exports.editBlog = editBlog;
// delete blog
function deleteBlog(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req);
        try {
            const id = new mongodb_1.ObjectId(req.params.id);
            const item = yield blogModel_1.default.findOne({ _id: id });
            if (!item) {
                return res.status(404).json({ message: 'Blog does not exist' });
            }
            const response = yield blogModel_1.default.findByIdAndDelete(id);
            console.log(response);
            return res.status(200).json({ message: 'Deleted blog successfully' });
        }
        catch (error) {
            return res
                .status(404)
                .json({ message: 'An error occurred deleting your blog' });
        }
    });
}
exports.deleteBlog = deleteBlog;
