# 🛒 বাজার দর | BazarDor

### প্রয়োজনীয় পণ্যের দাম এক নজরে

**BazarDor** is a responsive Bengali market-price web application that helps users explore daily essential product prices, compare price changes, browse categories, and view market-wise price summaries.

---

## ✨ Key Features

- 📱 **Fully Responsive Design** — Optimized for mobile, tablet, and desktop devices.
- 📈 **Live Price Ticker** — Displays product names, prices, units, and daily price changes in a continuously scrolling strip.
- 🔺 **Rising & Falling Prices** — Highlights the top products with increased and decreased prices.
- 🛍️ **Product Catalogue** — Displays product cards with Bengali names, illustrations, units, prices, and percentage changes.
- 🔎 **Product Details** — Provides price summaries, including minimum, maximum, average, and market-wise prices.
- 🗂️ **Category Browsing** — Browse products by category with sorting options.
- ↕️ **Price Sorting** — Sort products by default order, lowest price, or highest price using numeric values.
- 🔐 **Authentication** — Email/password registration and login, Google sign-in, and GitHub sign-in with Better Auth.
- 👤 **Profile Management** — Update user information through a dedicated profile update flow.
- 🔔 **Toast Notifications** — Displays relevant success, error, and authentication feedback.
- 💀 **Skeleton Loading** — Shows loading placeholders while product data is being fetched.
- 🚫 **Friendly 404 Pages** — Provides a helpful message and a link back to the home page for unknown routes.
- 🔒 **Protected Product Details** — Requires authentication to access product detail pages.
- 🚀 **Deployment Ready** — Supports deployment to platforms such as Vercel.

## 🧰 Technology Stack

| Technology | Purpose |
|---|---|
| Next.js App Router | Application framework and routing |
| React | User interface components |
| TypeScript | Type-safe development |
| Tailwind CSS | Responsive styling |
| daisyUI | UI components and theme utilities |
| Better Auth | Authentication and social login |
| MongoDB | Authentication data storage |
| React Hot Toast | User notifications |
| BazarDor API | Product, category, and price data |
| Git & GitHub | Version control and source code hosting |
| Vercel | Application deployment |

## 🔌 API Reference

### Primary API

`https://openapi.programming-hero.com/api/bazardor`

### Alternative APIs

- `https://api.api-store.workers.dev/api/bazardor`
- `https://api.abcz.workers.dev/api/bazardor`

### Available Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/products` | Retrieve all products |
| GET | `/products?category=chal` | Filter products by category |
| GET | `/products/1` | Retrieve a single product |
| GET | `/categories` | Retrieve all categories |
| GET | `/categories/chal` | Retrieve a single category |

## 📂 Main Application Routes

| Route | Description |
|---|---|
| `/` | Home page and product catalogue |
| `/category/[slug]` | Category-specific product listing |
| `/product/[slug]` | Protected product details |
| `/signin` | User login |
| `/signup` | User registration |
| `/profile` | User profile |
| Profile update route | Update user information |
| `404` | Friendly not-found page |

*The profile routes above describe the intended application structure; adjust them if your implementation uses different paths.*

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- Git
- MongoDB connection string
- Google OAuth credentials
- GitHub OAuth credentials

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd bazardor
```

(https://github.com/sohag-wiexora/bazardor.git)

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root and configure the variables required by your application.





### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Run quality checks

```bash
npm run lint
npm run build
```

On Windows PowerShell, if the npm script execution policy causes issues, use:

```powershell
npm.cmd run lint
npm.cmd run build
```

## 🔐 Authentication Configuration

BazarDor uses Better Auth for email/password authentication and Google/GitHub social login.

Before deploying:

1. Configure the correct `BETTER_AUTH_URL` for the environment.
2. Register the appropriate callback URLs with Google and GitHub.
3. Ensure the deployed domain is trusted by Better Auth.
4. Configure all required environment variables on the hosting platform.
5. Test registration, login, social authentication, logout, and protected routes.

Typical callback URL patterns:

**Google**

`https://YOUR_DOMAIN/api/auth/callback/google`

**GitHub**

`https://YOUR_DOMAIN/api/auth/callback/github`

Replace `YOUR_DOMAIN` with your actual domain and verify the callback paths against your Better Auth configuration.

Email verification and password reset are intentionally excluded from this assignment's required authentication flow.

## 🌐 Deployment

This project can be deployed on Vercel or another platform compatible with its Next.js configuration.

1. Push the latest code to GitHub.
2. Import the repository into the hosting platform.
3. Add the required environment variables.
4. Configure production OAuth callback URLs.
5. Deploy the application.
6. Test the home page, authentication, category pages, protected product details, and direct route refreshes.

## 📱 Responsive Design

The interface is designed to provide a consistent experience across:

- **Mobile:** Compact navigation, stacked hero section, and a responsive product grid.
- **Tablet:** Flexible layouts and multi-column product cards.
- **Desktop:** Full navigation and a wider product catalogue.

## 🧪 Final Testing Checklist

- [ ] Product data loads successfully from the API.
- [ ] Price ticker scrolls continuously.
- [ ] Rising and falling price sections display correctly.
- [ ] Product cards navigate to the correct detail pages.
- [ ] Product details are protected by authentication.
- [ ] Category filtering and price sorting work correctly.
- [ ] Bengali numerals display correctly and prices sort numerically.
- [ ] Email/password registration and login work.
- [ ] Google and GitHub sign-in work.
- [ ] Logout displays the correct feedback.
- [ ] Profile information can be updated.
- [ ] Loading skeletons and error states work correctly.
- [ ] Invalid routes show a friendly 404 page.
- [ ] Dynamic routes work when refreshed after deployment.
- [ ] The UI works on mobile, tablet, and desktop.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] At least eight meaningful Git commits are present.
- [ ] No secrets are committed to the repository.

## 📬 Submission Links

- **Live Link:** `https://bazardor-o9va.vercel.app`
- **GitHub Repository:** `https://github.com/sohag-wiexora/bazardor.git`

## ⚠️ Disclaimer

BazarDor is an educational assignment project. Displayed prices are indicative and may vary depending on market conditions, location, time, and API availability. Please verify prices with the relevant market or seller.

---

<div align="center">

**বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।**

Built for **B14-A7 — Bazar Dor**.

</div>
