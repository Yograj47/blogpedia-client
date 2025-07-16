# 📝 Blog System (v0.1)

A basic Blog Management System built with **Node.js** and **Express**, designed to create, read, and manage blog posts. This project is under active development and will evolve into a full-featured blogging platform.

---

## ✅ Current Features

- Create new blog posts
- Fetch all blog posts
- Fetch a single blog by ID
- Organized project structure (MVC pattern)
- Follows `.env` best practices for configuration
- Uses **MongoDB** for data storage
- Backend separated from frontend (frontend development in progress)

---

## 📁 Project Structure

```
blog-system/
├── backend/
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   ├── controllers/     # Business logic
│   ├── app.js           # Server setup
│   ├── package.json
│   └── .env             # Environment config (excluded from repo)
├── frontend/            # To be developed
├── .gitignore
├── README.md
```

---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd blog-system
```

### 2. Backend Setup

```bash
cd backend
npm install
```

### 3. Environment Variables

Create a `.env` file in the `backend/` directory:

```
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

### 4. Run the Server

```
node app.js
```

Server will run at: [http://localhost:3000](http://localhost:3000)

---

## 🛠 Upcoming Features (v1.0)

- Full-featured frontend (React or Vanilla)
- Edit blog functionality
- Delete blog functionality
- Category filtering & search
- Pagination support
- Responsive UI design
- Error & success message handling
- User authentication (Register/Login)
- Admin-only protected routes
- Optional dark mode toggle

---

## 💡 Future Enhancements

- Blog comment system
- Rich text editor (Markdown or WYSIWYG)
- Image uploads for blogs
- Analytics for blog engagement
- Improved UI/UX for all screen sizes

---

## 📢 Notes

- Ensure MongoDB is running locally or remotely.
- Do **not** commit your `.env` file.
- This project is under active development — contributions will be welcomed once the core is stable.

---

## 📬 Contact

For issues or suggestions, please open an [Issue](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/issues) or pull request.
