# ToDoListBACKEND

## Descripción

Este proyecto consiste en la creación de un backend utilizando Node.js y Express para la gestión de tareas (tasks) y metas personales (goals).

La aplicación permite:

* Agregar tareas y metas
* Obtener listas de tareas y metas
* Eliminar tareas y metas
* Persistencia de información mediante MongoDB Atlas
* Comunicación completa con un frontend desarrollado en React + Redux Toolkit

Los datos ahora se almacenan en una base de datos MongoDB Atlas, permitiendo persistencia de información incluso después de reiniciar el servidor. Además, el sistema cuenta con un middleware de seguridad mediante API KEY para proteger los endpoints.

---

## Tecnologías utilizadas

* Node.js (versión LTS)
* Express.js
* Visual Studio Code
* Thunder Client (para pruebas)
* MongoDB Atlas
* Mongoose
* Dotenv
* Cors
* React (Frontend integrado)
* Redux Toolkit
* Axios

---

## Instalación y ejecución

1. Clonar el repositorio:

```
git clone https://github.com/chrisorellana960/ToDoListBACKEND.git
```

2. Entrar a la carpeta del proyecto:

```
cd ToDoListBACKEND
```

3. Instalar dependencias:

```
npm install
```

4. Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
PORT=5000
API_KEY=mi_apikey_123
MONGO_URI=TU_MONGO_URI
```

5. Ejecutar el servidor:

```
npm start
```

6. El servidor correrá en:

```
http://localhost:5000
```

---

## Dependencias necesarias

Asegúrate de tener instalado:

* Node.js (versión LTS)
* npm (incluido con Node)
* mongoose
* dotenv
* express
* cors
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
http://localhost:5000/getTasks
```

---

### 🔹 Obtener metas

* Método: GET
* URL:

```
http://localhost:5000/getGoals
```

---

### 🔹 Agregar tarea

* Método: POST
* URL:

```
http://localhost:5000/addTask
```

* Body (JSON):

```
{
  "title": "Ejemplo",
  "description": "Ejemplo",
  "deadline": "2026-05-24"
}
```

---

### 🔹 Agregar meta

* Método: POST
* URL:

```
http://localhost:5000/addGoal
```

* Body (JSON):

```
{
  "title": "Ejemplo",
  "description": "Ejemplo",
  "deadline": "2026-06-01"
}
```

---

### 🔹 Eliminar tarea

* Método: DELETE
* URL:
* Nota: Se debe colocar el ID generado por MongoDB después de removeTask/

```
http://localhost:5000/removeTask/ID_DE_MongoDB
```

---

### 🔹 Eliminar meta

* Método: DELETE
* URL:
* Nota: Se debe colocar el ID generado por MongoDB después de removeGoal/

```
http://localhost:5000/removeGoal/ID_DE_MongoDB
```

---

## Pruebas

Se recomienda usar Thunder Client o Postman.

Recordar incluir siempre el header Authorization con la API KEY para acceder correctamente a los endpoints.

---

## Notas finales

* Los datos ahora son persistentes gracias a MongoDB Atlas
* El proyecto cumple con los requisitos de uso de Node.js + Express
* Se implementó middleware de autenticación con API KEY
* Se integró el backend con un frontend desarrollado en React y Redux Toolkit
* La aplicación permite gestión completa de Tasks y Goals

## Implementaciones de semana 4

El backend implementa los siguientes códigos de respuesta:

- 200 → Solicitud realizada correctamente
- 400 → Datos enviados incorrectamente
- 401 → API KEY inválida o no proporcionada 

## Implementaciones de semana 5

* Integración de MongoDB Atlas como base de datos
* Uso de Mongoose para modelado de datos
* Persistencia de información
* Uso de variables de entorno mediante dotenv
* Conexión segura a la base de datos mediante MONGO_URI

## Implementaciones de semana 6

* Integración completa entre frontend y backend
* Comunicación mediante Axios
* Implementación de Redux Toolkit para manejo de estado global
* Uso de CORS para permitir comunicación entre frontend y backend
* Persistencia de tareas y metas desde la interfaz gráfica
* Creación de formularios dinámicos para Tasks y Goals
* Visualización y eliminación de datos en tiempo real
* Uso de React Bootstrap para diseño responsive
* Ejecución del backend mediante npm start