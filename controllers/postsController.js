import { getData, writeData } from '../data.js';

export function postsGet(req, res) {
    const data = getData();
    res.json(data.posts);
}

export function postsPost(req, res) {
    const post = req.body;
    post.id = Math.round(Math.random() * 9999999999999);

    const data = getData();
    data.posts.push(post);
    writeData(data);

    res.status(201);
    res.json(post);
}

// Fat Controller, Skinny Model
export function postsDelete(req, res) {
    const id = parseInt(req.params.id);

    const data = getData();
    data.posts = data.posts.filter(post => post.id !== id);
    writeData(data);

    res.json({ "deleted": id });
}