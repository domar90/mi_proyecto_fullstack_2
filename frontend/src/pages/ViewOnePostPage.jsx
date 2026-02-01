import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:3000";

export const ViewOnePostPage = () => {
    const [post, setPost] = useState(null);
    const { id } = useParams();

    useEffect(() => {

        const fetchPost = async () => {

            try {
                const response = await fetch(`${API_URL}/posts/${id}`);
                const data = await response.json();
                setPost(data);
                console.log("Post cargado:", data);
            } catch (error) {
                console.error("Error al cargar el post:", error);
            }
        };
        fetchPost();
    }, []);

    if (!post) {
        return <div>Cargando post...</div>;
    }
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}