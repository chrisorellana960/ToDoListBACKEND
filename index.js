const express = require('express');
const app = express();

const API_KEY = "mi_apikey_123";
const PORT = 3000;

// Middleware para leer JSON
app.use(express.json());

let tasks = [];
let goals = [];

let taskId = 1;
let goalId = 1;

// Middleware de autenticación
const authMiddleware = (req, res, next) => {
    const apiKey = req.headers['authorization'];

    // Validar existencia y autenticación
    if (!apiKey || apiKey !== API_KEY) {
        return res.status(401).json({
            message: 'No autorizado: API KEY incorrecta'
        });
    }

    next();
};

app.get('/', (req, res) => {
    res.status(200).send('Servidor funcionando');
});

// GET

app.get('/getTasks', authMiddleware, (req, res) => {
    res.status(200).json(tasks);
});

app.get('/getGoals', authMiddleware, (req, res) => {
    res.status(200).json(goals);
});

// POST

app.post('/addTask', authMiddleware, (req, res) => {
    const { title, deadline } = req.body;

    if (!title || !deadline) {
        return res.status(400).json({
            message: 'Datos incompletos'
        });
    }

    const newTask = {
        id: taskId++,
        title,
        deadline
    };

    tasks.push(newTask);

    res.status(200).json({
        message: 'Tarea agregada correctamente',
        task: newTask
    });
});

app.post('/addGoal', authMiddleware, (req, res) => {
    const { title, deadline } = req.body;

    if (!title || !deadline) {
        return res.status(400).json({
            message: 'Datos incompletos'
        });
    }

    const newGoal = {
        id: goalId++,
        title,
        deadline
    };

    goals.push(newGoal);

    res.status(200).json({
        message: 'Meta agregada correctamente',
        goal: newGoal
    });
});

// DELETE

app.delete('/removeTask/:id', authMiddleware, (req, res) => {
    const id = parseInt(req.params.id);

    // Validar ID
    if (isNaN(id)) {
        return res.status(400).json({
            message: 'ID inválido'
        });
    }

    tasks = tasks.filter(task => task.id !== id);

    res.status(200).json({
        message: 'Tarea eliminada correctamente'
    });
});

app.delete('/removeGoal/:id', authMiddleware, (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({
            message: 'ID inválido'
        });
    }

    goals = goals.filter(goal => goal.id !== id);

    res.status(200).json({
        message: 'Meta eliminada correctamente'
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});