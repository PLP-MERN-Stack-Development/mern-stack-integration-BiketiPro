# 📰 MERN Blog

The **MERN Blog** is a full-stack blogging platform built using the **MERN stack** — MongoDB, Express.js, React.js, and Node.js.  
It allows users to **register, log in, create, edit, view, and delete blog posts** with secure authentication and protected routes.  

---

## 🚀 Features

### 🔐 Authentication
- User registration and login system (JWT-based authentication)
- Protected routes for logged-in users
- Secure password hashing using bcrypt

### 📝 Blog Management
- Create, read, update, and delete (CRUD) blog posts
- View posts in a clean and responsive UI
- Edit and delete only your own posts

### 🧭 Frontend
- Built with **React + Vite**
- Context API for global state management
- Interactive, mobile-responsive user interface

### ⚙️ Backend
- Node.js and Express.js for REST API
- MongoDB and Mongoose for data storage
- Validation and error handling for API requests

---

## 🧩 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React.js (Vite), TailwindCSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose) |
| **Authentication** | JSON Web Tokens (JWT), bcrypt |
| **State Management** | React Context API |
| **Icons** | Lucide React |

---

## 🗂️ Folder Structure

mern-blog/
│
├── client/ # React frontend
│ ├── src/
│ │ ├── components/ # UI components
│ │ ├── context/ # Context API
│ │ ├── pages/ # App pages (Home, Login, Register)
│ │ ├── App.jsx # Main app component
│ │ └── main.jsx # React root
│ └── package.json
│
├── server/ # Node + Express backend
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API route files
│ ├── controllers/ # Logic for routes
│ ├── middleware/ # Auth middleware
│ ├── server.js # App entry point
│ └── package.json
│
└── README.md

yaml
Copy code

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/BiketiPro/mern-blog.git
cd mern-blog
2️⃣ Setup the backend
bash
Copy code
cd server
npm install
Create a .env file inside the server folder:

ini
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
Run the server:

bash
Copy code
npm run dev
3️⃣ Setup the frontend
bash
Copy code
cd ../client
npm install
npm run dev
4️⃣ Access the app
Open your browser and go to:

arduino
Copy code
http://localhost:5173
🧑‍💻 API Endpoints
Method	Endpoint	Description
POST	/api/users/register	Register a new user
POST	/api/users/login	Login user and return JWT
GET	/api/posts	Fetch all blog posts
POST	/api/posts	Create new blog post
PUT	/api/posts/:id	Update a blog post
DELETE	/api/posts/:id	Delete a blog post

📱 Responsive Design
The app is fully responsive and optimized for:

💻 Desktop browsers

📱 Mobile devices

🧭 Tablets

👨‍💻 Author
Teddy Biketi
📧 tedbiketi@gmail.com
🌐 GitHub Profile

🪪 License
This project is licensed under the MIT License – you’re free to use, modify, and distribute it.

