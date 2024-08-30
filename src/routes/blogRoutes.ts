import { Router } from 'express';
import {
  createBlog,
  fetchAllBlogs,
  fetchSingleBlog,
  editBlog,
  deleteBlog,
} from '../controllers/blogController';
import { ValidateSchema } from '../utils/lib';

const router = Router();

router.get('/', fetchAllBlogs);

router.post('/create', ValidateSchema, createBlog);

router.put('/edit/:id', ValidateSchema, editBlog);

router.delete('/delete/:id', deleteBlog);

router.get('/:id', fetchSingleBlog);

export default router;
