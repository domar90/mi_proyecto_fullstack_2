import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PostForm from './pages/PostForm.jsx'
import BlogPosts from './pages/ViewPostsPage.jsx'
import { ViewOnePostPage } from './pages/ViewOnePostPage.jsx'
import { DeletePostPage } from './pages/DeletePostPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from "./components/Layout.jsx";

const router = createBrowserRouter([
  { path: "/", 
    element: <Layout />,
  errorElement: <div>Página no encontrada</div>,
    children: [
      { index: true, element: <PostForm /> },
  {
    path:"/create-posts-page",
    element: <PostForm/>,
    errorElement: <div>Página no encontrada</div>,
  },
  {
    path:"/view-posts-page",
    element: <BlogPosts/>,
    errorElement: <div>Página no encontrada</div>,
  },
  {
    path:"/view-single-post/:id",
    element: <ViewOnePostPage/>,
    errorElement: <div>Página no encontrada</div>,
  },
  {
    path:"/post-delete/:id",
    element: <DeletePostPage/>,
    errorElement: <div>Página no encontrada</div>,
  }
  ,
]}]);


createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
  
)
