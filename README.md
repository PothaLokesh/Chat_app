🔗Project Live Link:https://chat-app-front-zeta.vercel.app/login
# 🤖 AI-Powered Real-Time Chat Application

A modern, full-stack chat application built with the MERN stack, featuring real-time messaging, image sharing, and smart **AI-powered event detection** using Google Gemini.

## ✨ Features

- **💬 Real-time Messaging**: Instant chat updates powered by Socket.io.
- **🧠 AI Event Detection**: Automatically detect dates and events from chat messages using Google Gemini AI.
- **📷 Image Sharing**: Seamless image uploads and sharing via Cloudinary.
- **🔐 Secure Authentication**: Robust user authentication with JWT and bcrypt.
- **🟢 Online Status**: Real-time user online/offline status indicators.
- **📱 Responsive Design**: Fully responsive UI built with TailwindCSS and Vite.
- **🔔 Notifications**: Interactive toast notifications for user actions.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React](https://react.dev/) (Vite)
- **Styling**: [TailwindCSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Real-time**: Socket.io-client
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast

### Backend
- **Runtime**: [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) (Mongoose)
- **Real-time**: Socket.io
- **AI Integration**: [Google Generative AI (Gemini)](https://ai.google.dev/)
- **File Storage**: Cloudinary
- **Auth**: JWT & Bcryptjs

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB installed locally or a MongoDB Atlas URI
- Cloudinary Account
- Google Gemini API Key

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd Chat_app
```

### 2. Backward Setup (Server)
Navigate to the server directory and install dependencies:
```bash
cd server
npm install
```

Create a `.env` file in the `server` directory with the following variables:
```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
GEMINI_API_KEY=your_gemini_api_key
NODE_ENV=development
```

Start the backend server:
```bash
npm run server
```

### 3. Frontend Setup (Client)
Open a new terminal, navigate to the client directory, and install dependencies:
```bash
cd client
npm install
```

Start the frontend development server:
```bash
npm run dev
```

The app should now be running at `http://localhost:5173` (or the port shown in your terminal).

## 📂 Project Structure

```
Chat_app/
├── client/           # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── lib/
│   │   └── ...
│   └── package.json
└── server/           # Node.js Backend
    ├── controllers/
    ├── models/
    ├── routes/
    ├── middleware/
    └── package.json
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the [ISC](https://opensource.org/licenses/ISC) License.
