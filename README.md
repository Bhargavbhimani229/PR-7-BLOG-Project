# Blog Project

# Deploy Link : https://pr-7-blog-project-r2lx.onrender.com

## Description
This is a blog project built using Node.js, Express, MongoDB, and EJS. The application allows users to register, log in, create, update, and delete blog posts with image uploads. Authentication is managed using cookies.

## Features
- User authentication (Register & Login)
- Session management using cookies
- Blog CRUD operations
- Image upload functionality using Multer
- Protected routes for authenticated users
- Dynamic content rendering with EJS

## Technologies Used
- Node.js
- Express.js
- MongoDB & Mongoose
- EJS (Embedded JavaScript)
- Multer (for file uploads)
- Cookie-Parser (for handling cookies)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Bhargavbhimani229/PR-7-BLOG-Project.git
   ```
2. Navigate to the project directory:
   ```sh
   cd blog-project
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Open the application in your browser:
   ```sh
   http://localhost:8076
   ```

## Default Login Credentials
- **Username:** admin
- **Password:** 1234

## Folder Structure
```
blog-project/
│── configs/
│   ├── database.js
│── controller/
│   ├── blogController.js
│── middleware/
│   ├── blogImage.js
│   ├── blogRedirect.js
│   ├── userAuth.js
│── models/
│   ├── blogModel.js
│   ├── pwShema.js
│── public/
│── router/
│   ├── blogRouter.js
│   ├── indexRouter.js
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
```

## API Routes

### Authentication
- **POST** `/registerUser` - Register a new user
- **POST** `/checkLogin` - User login

### Blog Operations
- **GET** `/index` - View all blogs
- **GET** `/formPage` - View blog creation form (protected route)
- **POST** `/formPage` - Create a new blog post
- **GET** `/delete/:id` - Delete a blog post
- **GET** `/edit/:id` - View edit form
- **POST** `/update/:id` - Update blog post
- **GET** `/view/:id` - View single blog post



