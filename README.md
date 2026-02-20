# 🛒 ShopZone — React Router SPA (Level 1)

ShopZone is a Single Page Application (SPA) e-commerce frontend built using React and React Router.
It demonstrates dynamic routing, clean component architecture, and API integration — all without full page reloads.

---

## 🚀 Live Features

✅ React Router based SPA navigation
✅ Dynamic product routing (`/product/:id`)
✅ Product listing from DummyJSON API
✅ Persistent Navbar across pages
✅ Clean and scalable folder structure
✅ Fast client-side navigation (no page refresh)

---

## 🧠 Tech Stack

* React (Create React App)
* React Router DOM
* JavaScript (ES6+)
* DummyJSON Products API
* CSS (basic styling)

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   └── ProductCard.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── ProductDetails.jsx
│   └── Contact.jsx
│
├── services/
│   └── productService.js
│
├── App.js
└── index.js
```

---

## 🔗 Routes Implemented

| Route          | Description             |
| -------------- | ----------------------- |
| `/`            | Home page               |
| `/shop`        | Product listing         |
| `/product/:id` | Dynamic product details |
| `/contact`     | Contact form            |

---

## ⚙️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/shopzone-spa.git
cd shopzone-spa
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm start
```

App will run at:

```
http://localhost:3000
```

---

## 🧪 Key Learning Outcomes

* Implemented client-side routing using React Router
* Built dynamic routes using `useParams()`
* Consumed external REST API
* Created reusable components
* Maintained SPA behavior without reloads

---

## 🚀 Upcoming Enhancements

🔜 Global Cart using Context API (Level 2)
🔜 Persistent cart with localStorage (Level 3)
🔜 Authentication & Protected Routes
🔜 UI polish with modern styling
🔜 Deployment to Vercel/Netlify

---

## 👨‍💻 Author

**Abhay Chayal**
B.Tech Student | Aspiring Data Scientist & FrontEnd Developer

---

⭐ If you found this project useful, feel free to star the repository!
