# 📊 TaxMate NG

**A Simple Tax Companion for Nigerians**

---

## 📌 Overview

**TaxMate NG** is a digital platform designed to help Nigerians **understand, calculate, and manage their taxes easily**, especially in light of the **2026 Nigerian Tax Reforms**.

The platform simplifies complex tax laws into **clear explanations**, **smart calculations**, and **helpful reminders**, making tax compliance less stressful for individuals and small businesses.

---

## 🎯 Problem Statement

Many Nigerians struggle with:

- Understanding tax laws
- Knowing whether they are required to pay tax
- Calculating how much tax they owe
- Keeping up with new government tax policies

The 2026 tax reform introduces new rules that increase confusion, especially for:

- Small business owners
- Freelancers
- Salary earners
- First-time taxpayers

**TaxMate NG solves this by making tax information simple, accessible, and actionable.**

---

## 💡 Solution

TaxMate NG provides:

- Easy-to-understand explanations of Nigerian tax laws
- A tax calculator based on current regulations
- Tax reminders and compliance guidance
- Educational content for individuals and businesses

All delivered through a clean, mobile-friendly interface.

---

## 👥 Target Users

- Salary earners
- Freelancers and contractors
- Small business owners
- Young professionals
- Anyone trying to understand Nigerian taxes

---

## ✨ Core Features

### ✅ Smart Tax Calculator

- Calculates estimated tax based on income and user category
- Supports updated 2026 tax rules
- Shows clear breakdowns of calculations

---

### ✅ Tax Education Hub

- Simple explanations of tax terms
- Easy-to-read summaries of government policies
- Beginner-friendly content

---

### ✅ Tax Eligibility Checker

- Helps users know if they are required to pay tax
- Identifies exemptions and thresholds

---

### ✅ Dashboard

- Displays tax status
- Previous calculations
- Important reminders

---

### ✅ Notification System

- Tax deadline reminders
- Policy update alerts

---

## 🚀 Future Features

- Multi-language support (Yoruba, Hausa, Igbo)
- Downloadable tax reports (PDF)
- AI-powered tax assistant
- WhatsApp notifications
- Small business bookkeeping tools

---

## 🧠 Technology Stack

### Frontend

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**

### Backend

- **Supabase**
- **PostgreSQL**
- **Supabase Auth**

### Infrastructure

- **Vercel** (Hosting & Deployment)
- **GitHub** (Version Control)

---

## 🏗️ System Architecture (High Level)

```
Frontend (Next.js)
      ↓
API Layer (Server Actions / API Routes)
      ↓
Supabase Backend
- Auth
- Database
- Security (RLS)
```

---

## 🗄️ Database Structure (Simplified)

### `users`

| Field      | Type      |
| ---------- | --------- |
| id         | UUID      |
| email      | string    |
| created_at | timestamp |

---

### `profiles`

| Field           | Type   |
| --------------- | ------ |
| user_id         | UUID   |
| employment_type | string |
| income_range    | string |
| state           | string |

---

### `tax_calculations`

| Field         | Type      |
| ------------- | --------- |
| id            | UUID      |
| user_id       | UUID      |
| estimated_tax | number    |
| tax_year      | string    |
| created_at    | timestamp |

---

## 🔐 Security

- Row-Level Security (RLS)
- Secure authentication via Supabase
- Environment variable protection
- No sensitive financial data stored

---

## ⚙️ Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/taxmate-ng.git
cd taxmate-ng
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment variables

```bash
cp .env.example .env.local
```

Fill in:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

### 4. Run the project

```bash
npm run dev
```

App will run at:

```
http://localhost:3000
```

---

## 🧪 Testing (Optional)

You can add:

- Unit tests with Jest
- E2E testing with Playwright

---

## 📈 Success Metrics

- Number of active users
- Tax calculations completed
- Returning users
- User feedback

---

## 🧭 Roadmap

- [ ] MVP launch
- [ ] User feedback collection
- [ ] Multi-language support
- [ ] AI assistant integration
- [ ] Mobile app version

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a feature branch
3. Submit a pull request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🙌 Acknowledgements

Built to support Nigerians in understanding and navigating the evolving tax system under the 2026 tax reforms.

---

## 📬 Contact

For questions or collaboration:

**Email:** [yourname@email.com](mailto:yourname@email.com)
**Twitter/X:** @yourhandle

---

## ⭐ Final Note

TaxMate NG is built to **educate, simplify, and empower** — because understanding tax shouldn’t be complicated.

---

If you want, I can also:
✅ Add **badges (build, license, version)**
✅ Create a **CONTRIBUTING.md**
✅ Generate **API documentation**
✅ Simplify this for non-tech users

Just tell me 👍
