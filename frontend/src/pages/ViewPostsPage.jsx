import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const API_URL = "http://localhost:3000";


const BlogPosts = () => {

    const navegate = useNavigate();
    const [posts, setPosts] = useState([]);
  

    useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${API_URL}/posts`);
        const dataJson = await response.json();
        setPosts(dataJson.data);
      } catch (error) {
        console.error("Error cargando posts:", error);
      }
    };

    fetchPosts();
  }, []);


  return (
    <div>
      <h1>Lista de Posts</h1>
      {posts.map((post) => (
        
        <li key={post.id} style={{margin: "5px", listStyle: "none", fontSize:"20px"}}>
            <Link to={`/view-single-post/${post.id}`}>{post.title}</Link>
            <button style={{marginLeft: "15px", padding: "1px", backgroundColor:"lightBlue", color:'navy', fontSize:"15px"}} onClick={() => navegate(`/view-single-post/${post.id}`)}>ver</button>
            <button style={{marginLeft: "5px", padding: "1px", backgroundColor:"darkSeaGreen", color:'navy', fontSize:"15px"}} onClick={() => console.log("Clicked:", post.id)}>Actualizar</button>
            <button style={{marginLeft: "5px", padding: "1px", backgroundColor:"red", color:'navy', fontSize:"15px"}} onClick={() => navegate(`/post-delete/${post.id}`)}>Borrar</button>
            
        </li>
        
      ))}
    </div>
  );
};

export default BlogPosts;