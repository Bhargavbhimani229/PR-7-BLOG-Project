# PR-7-BLOG-Project

Blog Project
Description
This is a blog project built using Node.js, Express, MongoDB, and EJS. The application allows users to register, log in, create, update, and delete blog posts with image uploads. Authentication is managed using cookies.

Features
User authentication (Register & Login)
Session management using cookies
Blog CRUD operations
Image upload functionality using Multer
Protected routes for authenticated users
Dynamic content rendering with EJS
Technologies Used
Node.js
Express.js
MongoDB & Mongoose
EJS (Embedded JavaScript)
Multer (for file uploads)
Cookie-Parser (for handling cookies)
Installation
Clone the repository:
git clone https://github.com/your-repo/blog-project.git
Navigate to the project directory:
cd blog-project
Install dependencies:
npm install
Start the development server:
npm run dev
Open the application in your browser:
http://localhost:3000
Default Login Credentials
Username: admin
Password: 123
Folder Structure
blog-project/
│── configs/
│   ├── database.js
│── controller/
│   ├── credController.js
│   ├── userController.js
│── middleware/
│   ├── imageUpload.js
│   ├── redirectMiddleware.js
│   ├── userAuth.js
│── models/
│   ├── credentialsModel.js
│   ├── userModel.js
│── public/
│── router/
│   ├── credRouter.js
│   ├── indexRouter.js
│   ├── userRouter.js
│── uploads/
│── views/
│   ├── partials/
│   ├── editform.ejs
│   ├── form.ejs
│   ├── index.ejs
│   ├── login.ejs
│   ├── register.ejs
│   ├── single.ejs
│── .gitignore
│── index.js
│── package.json
│── package-lock.json
API Routes
Authentication
POST /registerUser - Register a new user
POST /checkLogin - User login
Blog Operations
GET /clientHomepage - View all blogs
GET /formPage - View blog creation form (protected route)
POST /formPage - Create a new blog post
GET /delete/:id - Delete a blog post
GET /edit/:id - View edit form
POST /update/:id - Update blog post
GET /view/:id - View single blog post
