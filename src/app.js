import cors from "cors";
import express from "express";

const app = express();
app.use(cors());

const asyncFunc = () => {
	return new Promise((resolve) => {
		setTimeout(() => resolve("Hello World!!!"), 500);
	});
};

app.get("/", async (req, res) => {
	const result = await asyncFunc();
	return res.send(result);
});

export default app;
