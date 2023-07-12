import { Hono } from "hono";

type Context = {
  Bindings: {
    TODOS: KVNamespace;
  };
};

const app = new Hono<Context>();

app.get("/", (c) => {
  console.log("Someone is accessing this endpoint");

  return c.text("Hello Hono!");
});

app.get("/todos", async (c) => {
  const items = await c.env.TODOS.list();

  return c.json(items);
});

export default app;
