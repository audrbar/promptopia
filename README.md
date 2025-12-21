# Promptopia

![Next.js](https://img.shields.io/badge/Next.js-14.0.0-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![MongoDB](https://img.shields.io/badge/MongoDB-6.2.0-green?style=flat-square&logo=mongodb)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?style=flat-square&logo=tailwindcss)

Promptopia is an open-source AI prompting tool that enables users to discover, create, and share creative prompts for use with AI chatbots like ChatGPT. Built with modern web technologies, it provides a seamless platform for the AI prompt community.

## ✨ Features

- 🔐 **Google OAuth Authentication** - Secure sign-in using NextAuth.js
- 📝 **Create & Share Prompts** - Users can create and publish their AI prompts
- 🔍 **Search & Discovery** - Search prompts by tag, username, or content
- 👤 **User Profiles** - View user-specific prompts and activity
- ✏️ **Edit & Delete** - Manage your own prompts
- 📱 **Responsive Design** - Optimized for all device sizes
- ⚡ **Real-time Search** - Debounced search with instant filtering

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 14 (App Router)
- **UI Library:** React 18
- **Styling:** Tailwind CSS 3
- **Authentication:** NextAuth.js 4

### Backend
- **Database:** MongoDB 6.2.0
- **ODM:** Mongoose 7.6.3
- **API:** Next.js API Routes

### Development Tools
- **Package Manager:** npm
- **Linting:** ESLint (Next.js config)

## 📁 Project Structure

```
promptopia/
├── app/                          # Next.js App Router
│   ├── layout.jsx               # Root layout component
│   ├── page.jsx                 # Home page
│   ├── api/                     # API routes
│   │   ├── auth/
│   │   │   └── [...nextauth]/   # NextAuth configuration
│   │   ├── prompt/              # Prompt CRUD operations
│   │   └── users/               # User-related endpoints
│   ├── create-prompt/           # Create prompt page
│   ├── profile/                 # User profile pages
│   └── update-prompt/           # Edit prompt page
├── components/                   # Reusable React components
│   ├── Feed.jsx                 # Main feed with search
│   ├── Form.jsx                 # Prompt form component
│   ├── Nav.jsx                  # Navigation bar
│   ├── Profile.jsx              # Profile display component
│   ├── PromptCard.jsx          # Individual prompt card
│   └── Provider.jsx             # Session provider wrapper
├── models/                       # MongoDB models
│   ├── prompt.js               # Prompt schema
│   └── user.js                 # User schema
├── public/                       # Static assets
│   └── assets/
│       ├── icons/
│       └── images/
├── styles/                       # Global styles
│   └── globals.css
├── utils/                        # Utility functions
│   └── database.js              # MongoDB connection
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
└── package.json                 # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB database (local or MongoDB Atlas)
- Google OAuth credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd promptopia
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```env
   # MongoDB
   MONGODB_URI=your_mongodb_connection_string

   # NextAuth
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_URL_INTERNAL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret

   # Google OAuth
   GOOGLE_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔑 Environment Variables Setup

### MongoDB Setup
1. Create a free MongoDB Atlas account at [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string and replace `<password>` with your database password
4. Add your connection string to `MONGODB_URI`

### Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://yourdomain.com/api/auth/callback/google` (production)
6. Copy Client ID and Client Secret to your `.env.local`

### NextAuth Secret
Generate a secure random string:
```bash
openssl rand -base64 32
```

## 📦 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

## 🗄️ Database Models

### User Schema
```javascript
{
  email: String (unique, required),
  username: String (required, 8-20 alphanumeric),
  image: String
}
```

### Prompt Schema
```javascript
{
  creator: ObjectId (ref: User),
  prompt: String (required),
  tag: String (required)
}
```

## 🔌 API Routes

### Authentication
- `GET/POST /api/auth/[...nextauth]` - NextAuth authentication endpoints

### Prompts
- `GET /api/prompt` - Fetch all prompts
- `POST /api/prompt/new` - Create new prompt
- `GET /api/prompt/[id]` - Get specific prompt
- `PATCH /api/prompt/[id]` - Update prompt
- `DELETE /api/prompt/[id]` - Delete prompt

### Users
- `GET /api/users/[id]/posts` - Get user's prompts

## 🎨 Key Features Breakdown

### Search Functionality
The feed component implements:
- Real-time search with 500ms debounce
- Search by username, tag, or prompt content
- Case-insensitive filtering using regex
- Tag-based filtering on click

### Authentication Flow
- Google OAuth 2.0 integration
- Session management with NextAuth.js
- Automatic user creation on first sign-in
- Persistent session across page reloads

### CRUD Operations
- **Create:** Authenticated users can create prompts
- **Read:** All users can view prompts
- **Update:** Users can edit their own prompts
- **Delete:** Users can delete their own prompts

## 🚢 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms
The app can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Digital Ocean

## 👨‍💻 Author

**audrbar**

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
