import post_list from "../models/post.model.js";

export const view_one_post = (req, res) => {
    const {id} = req.params;
    const post = post_list.find(post => post.id === id);
    if(!post){
        return res.status(404).json({message: "Post not found"});
    }
    res.status(200).json({id: post.id, title: post.title, content: post.content});
    console.log("Post enviado:", post);
}