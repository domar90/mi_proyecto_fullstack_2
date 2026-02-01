import { useState } from 'react';

const API_URL = "http://localhost:3000";

export default function PostForm() {
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const newPost = { title, content };

    try {
      
      const response = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost), 
      });

      if (response.ok) {
        alert("¡Post creado con éxito!");
        setTitle('');   
        setContent('');
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
    }
  };

  return (

    <>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h2>Crear Nuevo Post</h2>
        
        <input 
          type="text" 
          placeholder="Título del post"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea 
          placeholder="Contenido del post"
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)} 
          required
        />

        <button type="submit">Enviar Post</button>
      </form>
    </>
  );
}