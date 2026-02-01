import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3000";


export const DeletePostPage = () =>{
    const [post, setPost] = useState(null);
    const {id} = useParams();

    const navegate = useNavigate()

    useEffect(() => {

        const fetchPost = async () => {
        
            try{
                const response = await fetch(`${API_URL}/postdelete/${id}`, {
                    method: 'DELETE',
                });
                const data = await response.json();
                setPost(data);
                console.log("Post eliminado:", data);
            } catch (error){
                console.error("Error al eliminar el post:", error);
            }
        };
        
        fetchPost();

    },[])

    if (!post) {
        return <div>Cargando post...</div>;
    }

    return (
        <div>
            <h1>Post eliminado con éxito</h1>
            <button onClick={() => navegate("/view-posts-page")}>Volver a la lista de posts</button>
        </div>
    );
}
