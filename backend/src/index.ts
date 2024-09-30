import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import user from "./routes/user";
import blog from "./routes/blog";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>().basePath("/api/v1/");

app.route("/", user);
app.route("/", blog);

export default app;
