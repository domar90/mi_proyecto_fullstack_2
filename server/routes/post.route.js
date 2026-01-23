import express from 'express';
import {create_post} from '../controllers/createPost.controller.js';
import {view_posts} from '../controllers/viewPosts.controller.js';
import {delete_post} from '../controllers/deletePost.controller.js';
import{update_post} from "../controllers/updatePost.controller.js";
const router = express.Router();

//ruta para escribit un post
router.post("/posts", create_post)

//ruta para obtener los posts
router.get("/posts", view_posts)

//ruta para eliminar un post
router.delete("/posts/:id", delete_post)

//ruta para actualizar un post
router.patch("/posts/:id", update_post)


export default router;