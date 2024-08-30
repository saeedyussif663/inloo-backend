"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blogController_1 = require("../controllers/blogController");
const lib_1 = require("../utils/lib");
const router = (0, express_1.Router)();
router.get('/', blogController_1.fetchAllBlogs);
router.post('/create', lib_1.ValidateSchema, blogController_1.createBlog);
router.put('/edit/:id', lib_1.ValidateSchema, blogController_1.editBlog);
router.delete('/delete/:id', blogController_1.deleteBlog);
router.get('/:id', blogController_1.fetchSingleBlog);
exports.default = router;
