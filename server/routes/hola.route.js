import express from 'express';
import {mensaje_saludo, agregar_saludo} from '../controllers/hola.controller.js';

const router = express.Router();

router.get('/hola', mensaje_saludo);
router.post('/hola', agregar_saludo)

export default router;