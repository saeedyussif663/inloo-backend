import { model } from "mongoose";
import BlogSchema from "../schemas/blogSchema";

const Blog = model("blog", BlogSchema);

export default Blog;
