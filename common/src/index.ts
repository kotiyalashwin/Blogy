import z from "zod";

// 1) SingUp
export const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});
//SignIn
export const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
// 2)New Blog
export const newBlogSchema = z.object({
  title: z.string(),
  content: z.string(),
});
//3)Update Blog
export const updateBlogSchema = z.object({
  title: z.string(),
  content: z.string(),
  id: z.number(),
});

export type SingUpInput = z.infer<typeof signupSchema>;
export type SingInInput = z.infer<typeof signinSchema>;
export type NewBlog = z.infer<typeof newBlogSchema>;
export type UpdateBlog = z.infer<typeof updateBlogSchema>;
