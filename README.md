# Breathe and Move

---

Deployed site: [Breathe and Move 🧘‍♀️](https://breathing-project-o2xg.vercel.app/)

## **Project Overview**
Yoga and wellness has always been a passion of mine. I practice yoga and breathing techniques almost everyday and I wanted to build a project that merges my passion for technology with my passion for wellness.

---

### Problem Statement:
Prolonged stress and high-pressure environments often lead to burnout and reduced productivity.

### Solution:
A wellness app combining breathing exercises, yoga, gratitude, and inspiration to enhance focus and mental well-being.

---

## Tech Stack
- JavaScript
- React
- Node.js
- Express
- Vitest

---

## Features
- An inspirational random quote generator that integrates data from a third-party API
- A form component that the user can enter what they are grateful for each day
- A custom-designed REST API that manages data flow between frontend and database
- A PostgreSQL database of breathing techniques accessible through REST API endpoints
- Frontend deployed using Vercel and backend deployed using Render

---

## Setup & Installation

1️⃣ Clone this repo:

```bash

git clone git@github.com:graceoreilly/breathing_project.git
cd breathing_project

```

2️⃣ Install dependencies:

```bash

npm install

```

3️⃣ Start the development server on the backend:

```bash

cd back_end
npm run start

```
4️⃣ Start the development server on the frontend:

```bash

cd front_end
npm run dev

```
5️⃣ Open in the browser:

```bash

http://localhost:3000

```

---

## What I learned

- How to build a REST API with CRUD operations using Node.js and Express
- Using React Router to perform seemless navigation
- Implementing testing using Vitest
- Using an async await function and useEffect to fetch data from an API
- Built a dynamic frontend using React and Javascript
- How to manage state effciently using useState in React

---

### **API Endpoints**
| Method | Endpoint                 | Description                                              | Status Code |
|--------|--------------------------|----------------------------------------------------------|-------------|
| GET    | `/techniques`            | Retrieves a list of all breathing techniques.            | 200         |
| GET    | `/techniques/:id`        | Retrieves details of a specific technique by ID.         | 200         |
| POST   | `/techniques`            | Adds a new breathing technique to the dataset.           | 201         |
| PUT    | `/techniques/:id`        | Updates an existing technique by ID.                     | 200         |
| DELETE | `/techniques/:id`        | Deletes a specific technique by ID.                      | 200         |

---

### **Response Specification**
JSON responses from this API should adhere to the JSend specification as laid out in this documentation: https://github.com/omniti-labs/jsend

---

## Future Improvements

- Integrating a POSTgreSQL database in deployed site
- Increased testing using Vitest and playwright
- Designing and implementing a yoga techniques API and postgreSQL database

---

## 👤 About Me
Created by Grace O'Reilly. For questions, suggestions, or feedback, please contact graceoreilly111@gmail.com or open an issue in the repository.
