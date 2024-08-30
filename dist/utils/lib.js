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
exports.ValidateSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const express_validator_1 = require("express-validator");
const connectionString = process.env.mongo_uri;
function connectToDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(connectionString);
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.default = connectToDB;
exports.ValidateSchema = (0, express_validator_1.checkSchema)({
    title: {
        notEmpty: { errorMessage: 'Title is required' },
        isLength: {
            options: { min: 10 },
            errorMessage: 'Title should be more than ten characters',
        },
    },
    author: {
        notEmpty: { errorMessage: 'Author is required' },
    },
    category: { notEmpty: { errorMessage: 'Category is required' } },
    content: {
        notEmpty: { errorMessage: 'Content is required' },
        isLength: {
            options: { min: 10 },
            errorMessage: 'Content should be more than ten characters',
        },
    },
});
