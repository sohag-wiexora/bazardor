# 🛒 Bazar Dor

**Bazar Dor** is a responsive grocery price tracking web application built for monitoring daily market prices of essential grocery products in Bangladesh.

Users can browse products, filter products by category, view price changes, check detailed market information, and securely access the application through email/password or social authentication.

## 🔗 Project Links

- **Live Website:** Add your Vercel deployment URL here
- **GitHub Repository:** https://github.com/sohag-wiexora/bazardor

## ✨ Features

- 📊 View current grocery market prices
- 📈 Identify products with rising and falling prices
- 🛍️ Browse all grocery products
- 🗂️ Browse products by category
- 🔎 View detailed product information
- 💰 View minimum, maximum, average, and market prices
- 📱 Fully responsive design for desktop, tablet, and mobile
- 🔐 Secure authentication with email and password
- 🔵 Google OAuth authentication
- ⚫ GitHub OAuth authentication
- 👤 User session and sign-out support
- 🇧🇩 Bengali interface and Bengali market information
- ⏳ Loading and skeleton states
- ❌ Error and empty states
- 🔄 Refresh-safe Next.js routing
- 📅 Bengali date display
- 📰 Scrolling market price ticker

## 🛠️ Technologies Used

### Frontend

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- DaisyUI

### Backend & Authentication

- Better Auth
- MongoDB
- MongoDB Adapter
- Google OAuth
- GitHub OAuth

### API

The application uses the Bazar Dor API to retrieve product and category information.



## 🔐 Authentication

Bazar Dor uses Better Auth for authentication.

Supported authentication methods:

- Email and password
- Google
- GitHub

Users can:

- Create an account
- Sign in
- Sign in with Google
- Sign in with GitHub
- Sign out
- Maintain an authenticated session

Authentication is connected with MongoDB through the Better Auth MongoDB adapter.


BETTER_AUTH_URL=https://your-vercel-domain.vercel.app
```

Never commit your `.env` or `.env.local` file to GitHub.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sohag-wiexora/bazardor.git
```

### 2. Go to the project directory

```bash
cd bazardor
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create `.env.local` and add the required environment variables.

### 5. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 🧪 Available Scripts

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## 📱 Responsive Design

The application is designed to work across:

- Mobile devices
- Tablets
- Laptops
- Desktop screens

The navigation includes a mobile hamburger menu, while product and category sections adapt to smaller screen sizes.

## 🧭 Main Routes

| Route | Description |
|---|---|
| `/` | Home page with market overview and products |
| `/category/[slug]` | Category-specific products |
| `/product/[slug]` | Detailed product information |
| `/signin` | User sign-in |
| `/signup` | User registration |
| `/api/auth/[...all]` | Better Auth API |
| `/_not-found` | Custom not-found page |

## 📊 Product Information

Each product can display information such as:

- Product name
- Bengali product name
- Category
- Unit
- Current price
- Previous price
- Price change
- Market information
- Minimum price
- Maximum price
- Average price

The home page also highlights products based on price movement.

## 🎨 UI & UX

The interface focuses on:

- Clean grocery-market visual design
- Bengali-first user experience
- Responsive navigation
- Clear price presentation
- Accessible buttons and forms
- Loading states
- Empty states
- Error handling
- Mobile-friendly authentication pages

## 🔒 Security

Security-related implementation includes:

- Better Auth session management
- Password-based authentication
- OAuth authentication
- MongoDB-backed authentication data
- Environment-based secret management
- Protected authenticated functionality

Sensitive credentials are stored in environment variables and are not included in the repository.

## 📈 Future Improvements

Possible future improvements include:

- User profile management
- Favorite products
- Price history charts
- Market price notifications
- Advanced product search
- Price comparison between markets
- Admin dashboard
- Product management system
- More detailed market analytics

## 👨‍💻 Developer

**Md Sohag Chowdhuri**

- GitHub: https://github.com/sohag-wiexora
- Project: Bazar Dor

## 📄 Assignment

This project was developed as part of the **B14-A7-Bazar Dor** assignment.

The application focuses on building a production-style grocery price tracking platform using modern Next.js development practices, API integration, responsive UI, authentication, and MongoDB.

## 📜 License

This project is created for educational and portfolio purposes.