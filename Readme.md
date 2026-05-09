# ToDoListBACKEND

## Descripción

Este proyecto consiste en la creación de un backend utilizando Node.js y Express para la gestión de tareas (tasks) y metas personales (goals).

La aplicación permite:

* Agregar tareas y metas
* Obtener listas de tareas y metas
* Eliminar tareas y metas

Los datos se almacenan en memoria (arreglos), por lo que se reinician al detener el servidor. Además, el sistema cuenta con un middleware de seguridad mediante API KEY para proteger los endpoints.

---

## Tecnologías utilizadas

* Node.js (versión LTS)
* Express.js
* Visual Studio Code
* Thunder Client (para pruebas)

---

## Instalación y ejecución

1. Clonar el repositorio:

```
git clone -b semana4 https://github.com/chrisorellana960/ToDoListBACKEND.git
cd ToDoListBACKEND
```

2. Instalar dependencias:

```
npm install
```

3. Ejecutar el servidor:

```
node index.js
```

4. El servidor correrá en:

```
http://localhost:3000
```

---

## Dependencias necesarias

Asegúrate de tener instalado:

* Node.js (versión LTS)
* npm (incluido con Node)

---

## API KEY

Para acceder a los endpoints es necesario incluir el siguiente header:

Key:

```
Authorization
```

Value:

```
mi_apikey_123
```

---

## Endpoints

### 🔹 Obtener tareas

* Método: GET
* URL:

```
http://localhost:3000/getTasks
```

---

### 🔹 Obtener metas

* Método: GET
* URL:

```
http://localhost:3000/getGoals
```

---

### 🔹 Agregar tarea

* Método: POST
* URL:

```
http://localhost:3000/addTask
```

* Body (JSON):

```
{
  "title": "Hacer tarea de Node",
  "deadline": "2026-05-01"
}
```

---

### 🔹 Agregar meta

* Método: POST
* URL:

```
http://localhost:3000/addGoal
```

* Body (JSON):

```
{
  "title": "Aprender Node.js",
  "deadline": "2026-06-01"
}
```

---

### 🔹 Eliminar tarea

* Método: DELETE
* URL:
* Nota. siempre recuerda colocar el numero de la id despues de removeTask/ 

```
http://localhost:3000/removeTask/1
```

---

### 🔹 Eliminar meta

* Método: DELETE
* URL:
* Nota. siempre recuerda colocar el numero de la id despues de removeGoal/ 

```
http://localhost:3000/removeGoal/1
```

---

## Pruebas

Se recomienda usar Thunder Client o Postman.

Recordar incluir siempre el header Authorization con la API KEY para acceder correctamente a los endpoints.

---

## Notas finales

* Los datos no son persistentes
* El proyecto cumple con los requisitos de uso de Node.js + Express
* Se implementó middleware de autenticación con API KEY

## Implementaciones de semana 4

El backend implementa los siguientes códigos de respuesta:

- 200 → Solicitud realizada correctamente
- 400 → Datos enviados incorrectamente
- 401 → API KEY inválida o no proporcionada 
