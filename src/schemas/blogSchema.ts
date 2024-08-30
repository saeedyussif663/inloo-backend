import { Schema } from "mongoose";

interface Blog {
  title: string;
  author: string;
  category: "Tech" | "Food" | "Finance" | "Travel" | "Politics" | "Inspiration";
  content: string;
}

const BlogSchema = new Schema<Blog>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export default BlogSchema;
