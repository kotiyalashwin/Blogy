import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signupSchema } from "@ashwindevs/blog-common";
import { signinSchema } from "@ashwindevs/blog-common";

const user = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>().basePath("user");

user.post("/signup", async (c) => {
  const body = await c.req.json(); //recieve body from frontend
  //BODY will be and {} contaiing all data like {email: ... , password: ....}
  //We can also destructure it here only using {email , password} = await c.req.json()
  const { success } = signupSchema.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      err: "inavlid input types",
    });
  }

  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    //New User Generate
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });

    //JWT token generate
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({ jwt });
  } catch (e) {
    return c.status(401);
  }
});

user.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  //Recieve data from BODY
  const body = await c.req.json();

  const { success } = signinSchema.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      err: "inavlid input types",
    });
  }

  //Find user in DB
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password,
    },
    select: {
      email: true,
    },
  });

  if (!user) {
    return c.json({
      msg: "user not found",
    });
  }

  return c.json({ user });
});

export default user;
