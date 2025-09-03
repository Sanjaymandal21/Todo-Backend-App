# To-Do App Backend

This is a simple backend for a To-Do application built with Node.js, Express, and MongoDB.

## Features
- Add new tasks
- List all tasks
- Edit tasks
- Delete tasks

## How to Run
1. **Install dependencies:**
   ```
   npm install
   ```
2. **Set up MongoDB:**
   - Make sure MongoDB is running on your computer (default: `mongodb://127.0.0.1:27017/todo_app`).
   - You can change the database URL in a `.env` file if needed.
3. **Start the server:**
   ```
   cd server
   npm run dev
   ```
   The server will run on [http://localhost:4000](http://localhost:4000).

## API Endpoints

| Action        | Method | URL                                 |
|---------------|--------|-------------------------------------|
| Add Task      | POST   | `/api/todos/add`                    |
| List Tasks    | GET    | `/api/todos/list`                   |
| Edit Task     | PUT    | `/api/todos/edit/:id`               |
| Delete Task   | DELETE | `/api/todos/delete/:id`             |

## Example Requests

### Add a Task
```
POST /api/todos/add
Content-Type: application/json

{
  "title": "Buy groceries"
}
```

### List All Tasks
```
GET /api/todos/list
```

### Edit a Task
```
PUT /api/todos/edit/REPLACE_WITH_ID
Content-Type: application/json

{
  "title": "Buy groceries and cook dinner",
  "completed": true
}
```

### Delete a Task
DELETE /api/todos/delete/REPLACE_WITH_ID
```
DELETE /api/todos/delete/REPLACE_WITH_ID
