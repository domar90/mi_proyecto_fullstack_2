import { useState } from 'react';

export default function PostForm() {
  // 1. Definimos el estado para el título y el contenido
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // 2. Función que se ejecuta al hacer clic en el botón
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página se recargue

    const newPost = { title, content };

    try {
      // 3. Enviamos la información a tu servidor (ajusta el puerto si es necesario)
      const response = await fetch('http://localhost:3000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost), // Convertimos el objeto a texto JSON
      });

      if (response.ok) {
        alert("¡Post creado con éxito!");
        setTitle('');   // Limpiamos los campos
        setContent('');
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <h2>Crear Nuevo Post</h2>
      
      <input 
        type="text" 
        placeholder="Título del post"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Actualiza el estado al escribir
        required
      />

      <textarea 
        placeholder="Contenido del post"
        rows={10}
        value={content}
        onChange={(e) => setContent(e.target.value)} // Actualiza el estado al escribir
        required
      />

      <button type="submit">Enviar al Servidor</button>
    </form>
  );
}