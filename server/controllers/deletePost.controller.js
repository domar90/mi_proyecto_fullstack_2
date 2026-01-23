import post_list from "../models/post.model.js";

export const delete_post = (req, res) => {
    const{id} = req.params;
    const post_index = post_list.findIndex(post => post.id === id);
    if(post_index === -1){
        return res.status(404).json({message: "Post not found"});
    }
    post_list.splice(post_index, 1);
    res.status(200).json({message: "Post deleted successfully"});

    console.log("Post eliminado:", {"message": `Post with id ${id} deleted.`, "date": new Date()});
}