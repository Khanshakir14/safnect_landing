# SAFNECT - MERN Stack

A real-time hospital management platform built with MongoDB, Express, React, and Node.js. Ready for **FREE deployment on Vercel**.

## 🚀 Quick Start

### Local Development

#### 1. Set up MongoDB Atlas (FREE)
1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Create a free account and a new cluster (M0 Free Tier)
3. Click "Connect" > "Connect your application"
4. Copy the connection string

#### 2. Configure Environment

```bash
# In the api folder
cd api
cp .env.example .env
# Edit .env and add your MongoDB connection string
```

#### 3. Install & Run

```bash
# Install all dependencies
npm run install:all

# Run both frontend and backend
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000/api

---

## 🌐 Deploy to Vercel (FREE)

### Step 1: Set up MongoDB Atlas

1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Create a free account
3. Create a new cluster (select **M0 Free Tier** - 512MB storage)
4. Set up database user (remember the password!)
5. Add `0.0.0.0/0` to IP Access List (allows Vercel connections)
6. Click "Connect" > "Connect your application"
7. Copy the connection string

### Step 2: Push to GitHub

```bash
cd SAFNECT-MERN
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/safnect.git
git push -u origin main
```

### Step 3: Deploy on Vercel

1. Go to [Vercel](https://vercel.com/) and sign in with GitHub
2. Click **"New Project"**
3. Import your `safnect` repository
4. Add Environment Variable:
   - Name: `MONGODB_URI`
   - Value: Your MongoDB Atlas connection string
5. Click **Deploy**!

### Step 4: Verify Deployment

- Visit `https://your-app.vercel.app` - Your website!
- Test the contact form - data saves to MongoDB
- Check API: `https://your-app.vercel.app/api/health`

---

## 📁 Project Structure

```
SAFNECT-MERN/
├── api/                    # Express API (Vercel Serverless)
│   ├── index.js           # API routes + MongoDB connection
│   ├── package.json
│   └── .env.example       # Environment template
│
├── client/                 # React + Vite Frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   │   └── ContactForm.jsx
│   │   ├── pages/         # Page components
│   │   │   └── Home.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── vercel.json            # Vercel deployment config
├── package.json           # Root package (dev scripts)
└── README.md
```

---

## ⚙️ Tech Stack

| Layer     | Technology                    | Free Tier |
|-----------|-------------------------------|-----------|
| Frontend  | React 18 + Vite               | ✅        |
| Styling   | Tailwind CSS                  | ✅        |
| Backend   | Express.js (Serverless)       | ✅        |
| Database  | MongoDB Atlas                 | ✅ 512MB  |
| Hosting   | Vercel                        | ✅        |

---

## 🔧 API Endpoints

| Method | Endpoint        | Description              |
|--------|-----------------|--------------------------|
| GET    | /api/health     | Health check             |
| POST   | /api/contact    | Submit contact form      |
| GET    | /api/contacts   | Get all contacts (admin) |

### Example: Submit Contact Form

```bash
curl -X POST https://your-app.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","message":"Hello!"}'
```

---

## ✅ Features

- Modern React 18 with Vite (fast builds)
- Tailwind CSS for responsive styling
- MongoDB for persistent storage
- Contact form saves to database
- Vercel-ready serverless API
- Mobile-responsive design
- Smooth scroll navigation

---

## 📝 Environment Variables

### For Vercel Deployment

Add these in Vercel Dashboard > Settings > Environment Variables:

| Variable      | Description                          |
|---------------|--------------------------------------|
| `MONGODB_URI` | MongoDB Atlas connection string      |

### Connection String Format

```
mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/safnect?retryWrites=true&w=majority
```

---

## 🆘 Troubleshooting

### Contact form not saving?
1. Check MongoDB Atlas connection string in Vercel environment variables
2. Verify IP Access List includes `0.0.0.0/0`
3. Check API health: `/api/health`

### Build failing?
1. Run `npm run build` locally to check for errors
2. Ensure all dependencies are in package.json

---

## 📄 License

© 2024 SAFNECT TECHNOLOGIES PRIVATE LIMITED. All rights reserved.
