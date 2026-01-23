import post_list from "../models/post.model.js";

export const create_post = (req, res) => {
    const new_post = {};
    new_post.id = crypto.randomUUID();
    new_post.post = req.body;
    new_post.date_created = new Date();
    post_list.push(new_post);
    const create_post_response = post_list.map(({post}) => [
        post.title, post.content
    ]);

    res.status(201).json({title: new_post.post.title, content: new_post.post.content.slice(0, 15)+'...'});
    console.log('Nuevo post creado:', new_post);

};