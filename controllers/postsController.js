import { connect } from '../database.js';
import { Score } from '../schemas/score.js';

export async function postsGet(req, res) {
    connect();
    const data = await Score.find();
    res.json(data);
}

export async function postsPost(req, res) {
    const score = req.body;
    if (score.score > 1000 || score < 0) {
        res.status(401);
        res.json({
            message: "Cheating attempt detected"
        });
    }
    connect();
    await Score.create(score);

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