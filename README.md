### **📌 PERN Stack Template**  

This is a **PERN (PostgreSQL, Express, React, Node.js) Template** with pre-configured dependencies for both **frontend and backend**. It includes **Tailwind CSS, Chakra UI, Axios, Nodemailer, and Bcrypt**, making it a perfect boilerplate for quickly setting up new projects.

---

## **📂 Folder Structure**
```
Root
│── 📁 Frontend   (React + Vite)
│── 📁 Backend    (Express + Node.js)
     │── 📄 .env       (Environment variables)
│── 📄 README.md  (This file)
```

---

## **🚀 Technologies Used**
### **🖥️ Frontend (React + Vite)**
- **React Router DOM** – For navigation  
- **Tailwind CSS** – Utility-first CSS framework  
- **Chakra UI** – Component-based UI library  
- **Framer Motion** – Animations  
- **Axios** – HTTP requests  
- **React Icons** – Icon library  

### **🖥️ Backend (Express + Node.js)**
- **Express.js** – Backend framework  
- **PostgreSQL (Prisma ORM)** – Relational database  
- **JWT (jsonwebtoken)** – Authentication  
- **Nodemailer** – Email sending  
- **Bcrypt** – Password hashing  
- **Cookie Parser** – For handling cookies  
- **CORS** – Cross-origin resource sharing  
- **Dotenv** – Environment variable management  
- **Nodemon** – Auto-restart server  

---

## **📦 Installation & Setup**
### **🔹 1. Clone the Repository**
```bash
git clone <repo_url>
cd <project_folder>
```

### **🔹 2. Install Dependencies**
#### **For Backend**
```bash
cd backend
npm install
```
#### **For Frontend**
```bash
cd frontend
npm install
```

### **🔹 3. Set Up Environment Variables**
Create a `.env` file in the **root directory** with the following variables:
```
DATABASE_URL=postgresql://<your_db_user>:<your_db_password>@<your_db_host>:5432/<your_db_name>?schema=public
JWT_SECRET=your_jwt_secret
PORT=5000
EMAIL=your_email@gmail.com
EMAIL_PASSWORD=your_email_password
```

---

## **🔧 Setting Up PostgreSQL (Neon DB)**
1. **Create a Neon DB Account** at [Neon Database](https://neon.tech/)  
2. **Create a new PostgreSQL database** and copy the connection string  
3. **Replace the `DATABASE_URL`** in `.env` with your **Neon DB connection string**  

---

## **🔧 Setting Up Prisma**
### **🔹 1. Initialize Prisma**
```bash
cd backend
npx prisma init
```
This creates a `prisma/schema.prisma` file.

### **🔹 2. Define Your Database Schema**  
Edit `prisma/schema.prisma` and add models:
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id       String  @id @default(uuid())
  email    String  @unique
  password String
  name     String
  createdAt DateTime @default(now())
}
```

### **🔹 3. Push the Schema to the Database**
```bash
npx prisma db push
```
This will create the necessary tables in your database.

### **🔹 4. Generate Prisma Client**
```bash
npx prisma generate
```
Now, Prisma is ready to use in your project.

---

## **🚀 Running the Project**
### **🔹 Start Backend**
```bash
cd backend
npm run dev
```
### **🔹 Start Frontend**
```bash
cd frontend
npm run dev
```
The frontend will start on **http://localhost:5173**  
The backend will start on **http://localhost:5000**  

---

## **🛠 Features**
✅ **Pre-configured UI** with **Tailwind CSS & Chakra UI**  
✅ **Ready-to-use authentication** with **JWT & Bcrypt**  
✅ **Email integration** using **Nodemailer**  
✅ **Prisma ORM for PostgreSQL**  
✅ **Axios setup** for easy API requests  
✅ **Clean folder structure** for scalability  

---

## **📌 Notes**
- Ensure **Neon DB (PostgreSQL)** is set up and the **connection string** is correct in `.env`.
- **For email functionality**, use an **App Password** instead of your real password if using **Gmail**.

---

## **📜 License**
This project is **open-source**. Feel free to use it to build projects. 🚀
