const express = require('express');
const app = express();
const API_KEY = "mi_apikey_123"; // Clave de API para autenticación
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

    if (!apiKey) {
        return res.status(401).json({
            message: 'No autorizado: falta API KEY'
        });
    }

    if (apiKey !== API_KEY) {
        return res.status(403).json({
            message: 'No autorizado: API KEY incorrecta'
        });
    }

    next();
};

// Endpoints    

app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

// GET

app.get('/getTasks', authMiddleware, (req, res) => {
    res.json(tasks);
});

app.get('/getGoals', authMiddleware, (req, res) => {
    res.json(goals);
});

// POST

app.post('/addTask', authMiddleware, (req, res) => {
    const { title, deadline } = req.body;

    const newTask = {
        id: taskId++,
        title,
        deadline
    };

    tasks.push(newTask);

    res.json({
        message: 'Tarea agregada correctamente',
        task: newTask
    });
});

app.post('/addGoal', authMiddleware, (req, res) => {
    const { title, deadline } = req.body;

    const newGoal = {
        id: goalId++,
        title,
        deadline
    };

    goals.push(newGoal);

    res.json({
        message: 'Meta agregada correctamente',
        goal: newGoal
    });
});

// DELETE

app.delete('/removeTask/:id', authMiddleware, (req, res) => {
    const id = parseInt(req.params.id);

    tasks = tasks.filter(task => task.id !== id);

    res.json({
        message: 'Tarea eliminada correctamente'
    });
});

app.delete('/removeGoal/:id', authMiddleware, (req, res) => {
    const id = parseInt(req.params.id);

    goals = goals.filter(goal => goal.id !== id);

    res.json({
        message: 'Meta eliminada correctamente'
    });
});



app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});