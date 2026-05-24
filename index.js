require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Models
const Task = require('./models/Task');
const Goal = require('./models/Goal');

const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT || 3000;

// Middleware para leer JSON
app.use(express.json());
app.use(cors());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Conectado a MongoDB Atlas');
    })
    .catch((error) => {
        console.log('Error de conexión:', error);
    });

// Middleware de autenticación
const authMiddleware = (req, res, next) => {
    const apiKey = req.headers['authorization'];

    if (!apiKey || apiKey !== API_KEY) {
        return res.status(401).json({
            message: 'No autorizado: API KEY incorrecta'
        });
    }

    next();
};

// Ruta principal
app.get('/', (req, res) => {
    res.status(200).send('Servidor funcionando');
});

// GET

app.get('/getTasks', authMiddleware, async (req, res) => {
    try {
        const tasks = await Task.find();

        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener tareas'
        });
    }
});

app.get('/getGoals', authMiddleware, async (req, res) => {
    try {
        const goals = await Goal.find();

        res.status(200).json(goals);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener metas'
        });
    }
});

// POST

app.post('/addTask', authMiddleware, async (req, res) => {
    const { title, description, deadline } = req.body;

    if (!title || !description || !deadline) {
        return res.status(400).json({
            message: 'Datos incompletos'
        });
    }

    try {
        const newTask = new Task({
            title,
            description,
            deadline
        });

        await newTask.save();

        res.status(200).json({
            message: 'Tarea agregada correctamente',
            task: newTask
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al agregar tarea'
        });
    }
});

app.post('/addGoal', authMiddleware, async (req, res) => {
    const { title, description, deadline } = req.body;

    if (!title || !description || !deadline) {
        return res.status(400).json({
            message: 'Datos incompletos'
        });
    }

    try {
        const newGoal = new Goal({
            title,
            description,
            deadline
        });

        await newGoal.save();

        res.status(200).json({
            message: 'Meta agregada correctamente',
            goal: newGoal
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al agregar meta'
        });
    }
});

// DELETE

app.delete('/removeTask/:id', authMiddleware, async (req, res) => {
    const id = req.params.id;

    try {
        await Task.findByIdAndDelete(id);

        res.status(200).json({
            message: 'Tarea eliminada correctamente'
        });
    } catch (error) {
        res.status(400).json({
            message: 'ID inválido'
        });
    }
});

app.delete('/removeGoal/:id', authMiddleware, async (req, res) => {
    const id = req.params.id;

    try {
        await Goal.findByIdAndDelete(id);

        res.status(200).json({
            message: 'Meta eliminada correctamente'
        });
    } catch (error) {
        res.status(400).json({
            message: 'ID inválido'
        });
    }
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});