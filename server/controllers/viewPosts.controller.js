import post_list from "../models/post.model.js";

export const view_posts = (req, res) =>{

    const data = post_list.map(post => ({
        id: post.id,
        title: post.title,
        content: post.content

}));
    
    res.status(200).json({data});
    console.log("Posts enviados:", post_list);
}