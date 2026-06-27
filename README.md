# Cortex Hive — Digital Innovation Partners

Cortex Hive is a state-of-the-art, fully responsive website for an AI-powered digital agency that designs and builds custom SaaS products, web applications, custom AI tools, and performance advertising creatives.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Prisma** (SQLite local storage, with production Postgres capability).

---

## Technical Stack & Features

- **Framework:** Next.js 14 (App Router) with React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS with premium dark-mode-first custom components
- **Animations:** Framer Motion scroll-linked animations and page transitions
- **Database:** Prisma ORM connected to a local SQLite instance (Prisma 7 driver-adapter-ready)
- **AI Integration:** Floating chat widget communicating with the **DeepSeek API** (`deepseek-chat` model)
  - Qualifies leads conversationally (asks for name, email, project type, budget, timeline, brief)
  - Automatically parses qualified lead data on the backend and logs it to the database
- **Lead Capture Form:** Interactive multi-step form wizard with client-side validation
- **Notifications:** Multi-channel notification pipeline (supports Slack Webhooks and Resend email alerts)
- **SEO & Accessibility:** Configured Metadata, OpenGraph cards, dynamic XML sitemaps, robots rules, and WCAG AA contrast/structural semantics

---

## File Structure

```
cortex-hive/
├── prisma/
│   ├── migrations/            # SQL migration history
│   ├── generated/             # Auto-generated Prisma client for ESM
│   ├── dev.db                 # Local SQLite Database (git-ignored)
│   └── schema.prisma          # Database models (Lead, Newsletter)
├── public/
│   └── logo.png               # Brand Logo asset
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── chat/          # DeepSeek chat endpoint (lead qualify & save)
│   │   │   ├── leads/         # Contact form endpoint
│   │   │   └── newsletter/    # Newsletter signup endpoint
│   │   ├── layout.tsx         # Main layout with header, footer, SEO, and chat bubble
│   │   ├── page.tsx           # Single-page index rendering all sections
│   │   ├── globals.css        # Premium HSL variables and utility classes
│   │   ├── robots.ts          # Dynamic robots.txt
│   │   └── sitemap.ts         # Dynamic sitemap.xml
│   ├── components/            # Section components (Hero, Services, Portfolio, etc.)
│   └── lib/
│       ├── prisma.ts          # Prisma adapter initialization
│       └── utils.ts           # CSS merging helper
├── .env.example               # Config template
├── prisma.config.ts           # Prisma 7 database config
└── tailwind.config.ts         # Custom design system configuration
```

---

## Getting Started

### 1. Prerequisites
- **Node.js** v20.19.0 or higher
- **npm** v10 or higher

### 2. Installation & Setup

1. **Clone or Open the workspace:**
   Ensure you are in the project root directory.

2. **Install all dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy the example file to `.env`:
   ```bash
   cp .env.example .env
   ```
   Open the `.env` file and input your credentials:
   - `DATABASE_URL` (Set to `"file:./dev.db"` by default for local SQLite storage)
   - `DEEPSEEK_API_KEY` (Your DeepSeek API Key. If left empty, the chatbot runs in **Fallback Simulation Mode** so it's fully testable without keys!)
   - `SLACK_WEBHOOK_URL` (Optional Slack Webhook URL to receive live notifications)
   - `RESEND_API_KEY` (Optional Resend email key to notify your admin team)
   - `LEAD_NOTIFICATION_EMAIL` (Target email for Resend notifications)

4. **Run Database Migrations:**
   Generate the SQLite file and migrate database tables:
   ```bash
   npx prisma migrate dev --name init
   ```
   *Note: Under Prisma 7, this will also trigger client file generation automatically.*

5. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Production Deployment (Vercel)

### 1. Database Considerations
Because SQLite is a file-based database, local edits on Vercel are ephemeral (erased when serverless containers cycle). For production, we recommend deploying to a hosted PostgreSQL database (such as **Supabase** or **Neon**).

To switch to PostgreSQL:
1. Update your production `.env` with a PostgreSQL connection string:
   ```env
   DATABASE_URL="postgres://user:password@host:5432/database"
   ```
2. In `prisma/schema.prisma`, update the database provider to postgres:
   ```prisma
   datasource db {
     provider = "postgresql"
   }
   ```
3. Regenerate the Prisma schema migrations:
   ```bash
   npx prisma migrate dev --name init_postgres
   ```

### 2. Vercel Deployment
Deploying to Vercel is seamless:
1. Push your code to a GitHub repository.
2. Link the repository to your Vercel Dashboard.
3. Configure your Environment Variables (`DEEPSEEK_API_KEY`, `DATABASE_URL`, etc.) under settings.
4. Set the Build Command as `npm run build`. Vercel will build the Next.js bundle and compile Prisma schemas automatically.
