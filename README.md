# NM Jewellers — E-Commerce Website

Full-stack jewellery storefront + admin dashboard, backed by Firebase.

```
nm-jewellers/
├── index.html            ← page markup only
├── css/
│   └── style.css         ← all styling
├── js/
│   ├── firebase-config.js ← 🔑 YOUR FIREBASE KEYS GO HERE (only file to edit for setup)
│   └── app.js             ← storefront + admin logic
├── firestore.rules        ← database security rules
├── firebase.json          ← Firebase Hosting config
├── .firebaserc            ← your Firebase project ID
├── package.json
└── README.md
```

Previously this whole site was one giant `index.html` file with the styling,
logic, and Firebase keys all mixed together — which made it hard to tell
what was actually going on, and easy to accidentally leave the Firebase
connection unconfigured (which is what was happening: the site was never
actually connected to a database, so nothing you edited was being saved
anywhere). This structure splits it apart the way real projects are
organized, and makes the one thing you need to configure obvious.

---

## ⚠️ Before anything will save: connect a real Firebase project

Right now `js/firebase-config.js` has placeholder values. Until you replace
them with real ones, the site *looks* like it works but nothing persists —
that's the exact bug you were hitting.

### 1. Create the Firebase project
1. Go to **https://console.firebase.google.com**
2. **Add Project** → name it `nm-jewellers` → (Analytics optional) → **Create**

### 2. Enable Firestore Database
1. **Build → Firestore Database → Create Database**
2. **Start in production mode**
3. Region: **asia-south1 (Mumbai)** → **Enable**

### 3. Enable Authentication (so only you can edit inventory)
1. **Build → Authentication → Get Started**
2. Enable **Email/Password**
3. **Add User** → your admin email + a strong password
   (e.g. `admin@nmjewellers.in`)

### 4. Get your config keys
1. **Project Settings** (gear icon) → scroll to **Your apps**
2. Click the **Web** icon `</>` → register the app (nickname anything)
3. Copy the `firebaseConfig` object shown
4. Open **`js/firebase-config.js`** in this repo and paste your real values
   over the `YOUR_...` placeholders

### 5. Publish security rules
1. Firebase Console → **Firestore Database → Rules** tab
2. Copy the contents of `firestore.rules` (in this repo) into the box
3. **Publish**

   *(Or, once you have the Firebase CLI installed, just run `npm run deploy:rules`.)*

### 6. Seed sample products (first time only)
1. Open the site → click **ACCOUNT** → log in with the admin email/password
   from step 3
2. In the Admin Dashboard, click **"Seed Database with Sample Products"**
3. This adds 12 sample products + default settings + rates to Firestore

From this point on, every add/edit/delete you make in the Admin Dashboard
is written to Firestore and will show up on **any device**, any time you
reload — because it's now actually talking to a real database.

---

## 🚀 Hosting the site

You have two good options — pick one.

### Option A: GitHub Pages (what you were using before)
1. Push this repo to GitHub (see **Git setup** below)
2. Repo **Settings → Pages → Source: main branch, root** → **Save**
3. Site goes live at `https://<your-username>.github.io/nm-jewellers`

### Option B: Firebase Hosting (recommended — same platform as your database)
```bash
npm install -g firebase-tools
firebase login
firebase deploy
```
Your site goes live at `https://YOUR_PROJECT_ID.web.app`. This also makes
`npm run deploy:rules` work for pushing Firestore rule changes straight
from your repo instead of copy-pasting into the console every time.

---

## 🖥️ Running locally before you deploy

```bash
npm run start
```
This serves the site at `http://localhost:3000` so you can check changes
before pushing. (Requires Node.js installed.)

---

## 🔧 Admin Panel

- Click **ACCOUNT** in the navbar → log in with your Firebase email/password
- **Dashboard** — live stats from Firestore
- **Orders** — view & update customer order status
- **Products** — add / edit / delete (writes straight to Firestore)
- **Inventory** — update stock counts (persists permanently)
- **Metal Rates** — update gold/silver rates → auto-recalculates all prices
- **Settings** — store name, phone, address, WhatsApp number

---

## ✅ What's powered by Firebase

| Feature                    | Firebase Service       |
|-----------------------------|------------------------|
| Products (add/edit/delete)  | Firestore              |
| Orders (place + manage)     | Firestore              |
| Stock updates                | Firestore              |
| Metal rates (live)          | Firestore               |
| Store settings                | Firestore              |
| Admin login                  | Firebase Auth          |
| Real-time updates            | Firestore `onSnapshot` |

---

## 🔑 Git setup (first time pushing this repo)

```bash
cd nm-jewellers
git init
git add .
git commit -m "Initial commit: structured NM Jewellers site"
git branch -M main
git remote add origin https://github.com/<your-username>/nm-jewellers.git
git push -u origin main
```

If you want to reuse your existing repo instead of a new one, replace the
`git remote add` URL with that repo's URL.

---

## 📞 Support

- Phone: +91 98765 43210
- Email: info@nmjewellers.in
