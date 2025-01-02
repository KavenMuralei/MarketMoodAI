# 🌟 Market Mood AI 🌟

**Market Mood AI** is a cutting-edge web application that serves as both a stock trading simulator and an AI-driven stock sentiment tracker. This platform offers a playground for novice traders while also analyzing the favorability of stocks based on their sentiment in the news cycle. 📈📰

🚀 This project is still in development. Stay tuned for more updates!

## Author

- 👤 [@KavenMuralei](https://github.com/KavenMuralei)

## Tech Stack

**Client:** ⚛️ React.js

**Server:** 🖥️ Node.js, 🚀 Express.js, 🐍 Flask

**Database:** 🗄️ PostgreSQL

**Cloud:** ☁️ AWS

## Full Stack Diagram

```plaintext
┌────────────────────────┐
│     React Frontend     │
│                        │
│ - UI Components        │
│ - State Management     │
│ - API Integration      │
└───────▲────────────────┘
        │
        │ HTTP Requests (Fetch)
        ▼
┌────────────────────────┐
│     Node.js Backend    │
│                        │
│ - Express API Endpoints│
│ - Middleware           │
│ - Database Interaction │
└───────▲────────────────┘
        │
        │ HTTP Requests (Fetch)
        ▼
┌────────────────────────┐
│     Python API         │
│                        │
│ - Sentiment Analysis   │
│ - API Endpoints        │
│ - Data Processing      │
└───────▲────────────────┘
        │
        │ Database Operations
        ▼
┌────────────────────────┐
│       Database         │
│    (PostgreSQL)        │
│ - Data Storage         │
│ - CRUD Operations      │
└───────▲────────────────┘
        │
        │ Scheduled Tasks (AWS Lambda/EC2)
        ▼
┌────────────────────────┐
│     Scheduler          │
│  (AWS Lambda (OR EC2?))│
│ - Automated Tasks      │
│ - Daily Updates        │
└────────────────────────┘
