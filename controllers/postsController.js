import { connect, disconnect } from '../database.js';
import { Score } from '../schemas/score.js';

export async function postsGet(req, res) {
    connect();
    const data = await Score.find();
    res.json(data);
    disconnect();
}

export async function postsPost(req, res) {
    connect();
    const score = req.body;
    await Score.create(score);
    disconnect();

    res.status(201);
    res.json(score);
}

// Fat Controller, Skinny Model --deactivated--
/* export function postsDelete(req, res) {
    const id = parseInt(req.params.id);

    const data = getData();
    data.posts = data.posts.filter(post => post.id !== id);
    writeData(data);

    res.json({ "deleted": id });
} */