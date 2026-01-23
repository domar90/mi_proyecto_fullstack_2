import {saludos, saludo} from './../models/hola.model.js';


export const mensaje_saludo = (req, res) =>{
    const data = saludos();
    res.json(data);
}

export const agregar_saludo = (req, res) =>{
    const nuevo_saludo = req.body;
    
    saludo.push(nuevo_saludo);

    console.log('Nuevo saludo recibido:', nuevo_saludo);

    res.status(201).json({ mensaje: 'Saludo agregado', saludo: nuevo_saludo });
}

