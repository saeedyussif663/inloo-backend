import mongoose from 'mongoose';
import { checkSchema } from 'express-validator';

const connectionString = process.env.mongo_uri as string;

export default async function connectToDB() {
  try {
    await mongoose.connect(connectionString);
  } catch (error) {
    console.log(error);
  }
}

export const ValidateSchema = checkSchema({
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
