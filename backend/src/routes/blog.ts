import { Hono } from "hono";
import { verify } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { newBlogSchema } from "@ashwindevs/blog-common";
import { updateBlogSchema } from "@ashwindevs/blog-common";

type Variables = {
  userId: string;
};

type Bindings = {
  DATABASE_URL: string;
  JWT_SECRET: string;
};

const blog = new Hono<{ Bindings: Bindings; Variables: Variables }>().basePath(
  "blog"
);

//MIDDLEWARE
blog.use("/*", async (c, next) => {
  try {
    //Getting Headers from
    const header = c.req.header("authorization") || "";
    // //Bearer Token
    // const token = header.split("")[1];

    const user = await verify(header, c.env.JWT_SECRET);

    if (user) {
      c.set("userId", user.id as string);
      await next();
    } else {
      c.status(403);
      return c.json({
        msg: "Not logged in",
      });
    }
  } catch (e) {
    return c.json({
      err: "invalid token",
    });
  }
});

//ROUTES

blog.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.post.findMany({
      select: {
        title: true,
        content: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return c.json({
      blog,
    });
  } catch (e) {
    return c.json({
      err: "error getting all blogs",
    });
  }
});
blog.get("/:id", async (c) => {
  const { id } = c.req.param();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.post.findMany({
      where: {
        authorId: +id,
      },
    });

    return c.json({
      blog,
    });
  } catch (e) {
    c.status(404);
    return c.json({
      msg: "blog not found",
    });
  }
});

blog.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = newBlogSchema.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      err: "inavlid input types",
    });
  }

  const userId = c.get("userId");

  const blog = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: parseInt(userId),
    },
  });

  return c.json({
    id: blog.id,
  });
});

blog.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = updateBlogSchema.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      err: "inavlid input types",
    });
  }

  const blog = await prisma.post.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });

  return c.json({
    blog: blog.id,
  });
});

export default blog;
