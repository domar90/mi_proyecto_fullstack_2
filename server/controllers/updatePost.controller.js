import post_list from "../models/post.model.js";

export const update_post = (req, res) =>{
    const {id} = req.params;
    const { title, content } = req.body;

    const post_index = post_list.findIndex(post => post.id === id);

     if(post_index === -1){
        return res.status(404).json({message: "Post not found"});
    }

    // const updated_post = {
    //     //id: id,
    //     old_post: post_list[post_index].post,
    //     title : title || post_list[post_index].title || post_list[post_index].post.title,
    //     content: content || post_list[post_index].content || post_list[post_index].post.content,
    //     date_updated: new Date()
    // };

    const updated_post = {
        
        
        title : title || post_list[post_index].title || post_list[post_index].post.title,
        content: content || post_list[post_index].content || post_list[post_index].post.content,
        
    };
    
    console.log(`ID: ${id}, Old data: Title: ${post_list[post_index].title || post_list[post_index].post.title}, Content: ${post_list[post_index].content || post_list[post_index].post.content}`, post_list[post_index].post);
    
    post_list[post_index].post = updated_post;
    
    res.status(200).json({message: "Post updated successfully", title: updated_post.title, content: updated_post.content});
    
    //console.log(`NEW DATA Title: ${post_list[post_index].title || post_list[post_index].post.title}, Content: ${post_list[post_index].content || post_list[post_index].post.content}`, post_list[post_index].post);

    console.log("Post actualizado:", post_list[post_index].post);
}