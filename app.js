import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const asyncFunc = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello World!"), 1000);
  });
};

app.get("/", async (req, res) => {
  const result = await asyncFunc();
  return res.send(result);
});

export default app;
