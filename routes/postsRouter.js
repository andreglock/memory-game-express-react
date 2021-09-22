import express from 'express';
import { postsGet, postsPost, postsDelete } from '../controllers/postsController.js';

const postsRouter = express.Router();

postsRouter.get("/", postsGet);
postsRouter.post("/", postsPost);
postsRouter.delete("/:id", postsDelete);

export default postsRouter;