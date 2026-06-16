# Task Management Application

## Overview

A full-stack Task Management Application built using Next.js, TypeScript, Tailwind CSS, Express.js, MongoDB, and Axios.

## Features

* Add Task
* Edit Task
* Delete Task
* Mark Task as Complete
* View All Tasks
* Filter by Priority
* Filter by Status
* Responsive UI
* MongoDB Database Integration
* Backend Validation

## Validation Rules

A task cannot be marked as completed if:

* Due Date is missing
* Description contains fewer than 20 characters

## Tech Stack

### Frontend

* Next.js
* TypeScript
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Installation

### Backend

```bash
cd server
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

## Environment Variables

Backend:

```env
MONGO_URI=mongodb://localhost:27017/TaskManagement
```

## API Endpoints

POST /api/tasks

GET /api/tasks

PUT /api/tasks/:id

DELETE /api/tasks/:id

PATCH /api/tasks/:id/mark-complete

## Deployment

Frontend: Vercel

Backend: Render

## Author

Krishna Thakkar
