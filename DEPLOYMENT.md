# ColorWorks Creative — Site Rebuild

A complete rebuild of colorworkscreative.com, migrating from Webflow to
**Next.js 16 + Netlify** (saves ~$300/year on Webflow hosting).

## What's included

- **Homepage** with all original sections preserved:
  Hero · Philosophy · Services · Work · Testimonials · About · Blog · Contact
- **12 portfolio projects** with rich galleries and full-screen modal detail view
- **All 438 images** from the original site, curated down to 141 high-quality assets
- **Brand system preserved**: navy `#243056`, coral `#da7348`, gold `#e8bd5e`,
  sage `#99b891`, soft pink `#f6dbd9`
- **Refined typography**: Mulish (geometric, Novecento-style replacement) for
  display headings, Open Sans for body text

## Sophistication upgrades

- Sticky translucent header with underline-on-hover nav
- Larger whitespace, refined typographic hierarchy, micro-interactions
- Card hover lifts, fade-in-on-scroll reveals
- Floating brand "blobs" in section backgrounds for depth
- Smooth in-page anchor scrolling with offset for the sticky header
- Mobile drawer nav

## SEO / GEO / AIO features

- **LocalBusiness JSON-LD** structured data (ProfessionalService schema)
- **BreadcrumbList** structured data
- **OpenGraph** + **Twitter Card** meta with branded `/og-image.png`
- **`sitemap.xml`** auto-generated, including project anchor URLs
- **`robots.txt`** auto-generated with sitemap reference
- **Semantic HTML**: `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`, `<figure>`
- **Single H1** per page, proper H2/H3 hierarchy
- **`<Image>` with `priority`** for above-the-fold, lazy-loaded galleries
- **Descriptive `alt` text** on every image
- **`metadataBase`** + canonical URL
- **`themeColor`** per light/dark
- **`viewport`** meta for mobile

## Asset inventory

| Folder | Purpose | Files |
|--------|---------|-------|
| `public/images/projects/<slug>/` | Per-project gallery images | 165 |
| `public/images/about/` | Founder headshot + decorative SVGs | 23 |
| `public/images/blog/` | Blog post hero images | 11 |
| `public/images/services/` | Service-related imagery | 14 |
| `public/images/icons/` | Social icons (SVG) | 10 |
| `public/images/misc/` | Decorative blobs, favicons, webclip | 33 |
| `public/og-image.png` | Social share card | 1 |
| `src/app/favicon.ico` | Multi-resolution favicon | 1 |

## Local development

```bash
bun install
bun run dev          # http://localhost:3000
bun run lint         # ESLint check
bun run build        # Production build (for Netlify)
```

## Deploy to Netlify

### Which Netlify plan do you need?

**The free Starter plan is enough.** Here's what you get on free vs. paid:

| Feature | Free Starter | Pro ($19/mo) |
|--------|-------------|--------------|
| Bandwidth | 100 GB/month | 1 TB/month |
| Build minutes | 300 min/month | 3,000 min/month |
| **Sites** | **Unlimited** | Unlimited |
| **Forms (submissions)** | **100/month** | 1,000/month |
| Form email notifications | ✅ Included | ✅ Included |
| Custom domain + SSL | ✅ Included | ✅ Included |
| Next.js runtime (SSR/ISR) | ✅ Included | ✅ Included |
| Image optimization | ✅ Included | ✅ Included |
| Team members | 1 | Unlimited |

**Recommendation:** Start on the **free Starter plan**. You only need to
upgrade to Pro ($19/mo) if:
- You get more than 100 form submissions per month, OR
- Your site gets more than 100 GB of bandwidth per month (very unlikely for a
  portfolio site with ~150 images)

At $0/month, you're saving the full $300/year you were paying Webflow.

### Step-by-step: GitHub → Netlify setup

#### Part 1: Push the code to GitHub (10 minutes)

You have two options — **Option A (command line)** is faster if you're
comfortable with Terminal. **Option B (web browser)** requires no command line
at all. Pick whichever you prefer.

---

**Option A: Using the command line (recommended)**

1. **Create a GitHub account** (if you don't have one) at
   [github.com](https://github.com). The free account is fine.

2. **Download your project files** from this workspace:
   - Click the download button or use the file browser to download the entire
     project as a ZIP file to your computer.
   - **Unzip it** into a folder — for example, on your Desktop:
     `~/Desktop/colorworks-creative/`

3. **Check that Git is installed** — open **Terminal** (Mac) or **Command
   Prompt / PowerShell** (Windows) and type:
   ```bash
   git --version
   ```
   - If you see a version number (like `git version 2.39.0`), you're good.
   - If you get "command not found", download and install Git from
     [git-scm.com/downloads](https://git-scm.com/downloads), then reopen
     Terminal and try again.

4. **Navigate to your project folder** in Terminal:
   ```bash
   cd ~/Desktop/colorworks-creative
   ```
   (Adjust the path to match where you unzipped the folder. On Windows it
   might be `cd %USERPROFILE%\Desktop\colorworks-creative`.)

5. **Tell Git who you are** (only needed once per computer):
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "karli@colorworkscreative.com"
   ```

6. **Create a new repository on GitHub.com:**
   - Go to [github.com/new](https://github.com/new) (log in first)
   - **Repository name:** `colorworks-creative`
   - **Description:** (optional) `ColorWorks Creative website`
   - Set visibility: **Private** (your code, not public)
   - **Don't** check "Add a README" or ".gitignore" (we already have those)
   - Click **Create repository**
   - On the next page, copy the URL that looks like:
     `https://github.com/YOUR-USERNAME/colorworks-creative.git`

7. **Back in Terminal, run these commands one at a time** (press Enter after
   each, and wait for it to finish before running the next):
   ```bash
   git init
   git add .
   git commit -m "ColorWorks Creative — Next.js + Netlify rebuild"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/colorworks-creative.git
   git push -u origin main
   ```
   (Replace `YOUR-USERNAME` with your actual GitHub username from step 6.)

   - The first time you push, GitHub may pop up a login window asking you to
     authenticate. Log in with your GitHub username and password (or Personal
     Access Token if you have 2FA enabled).
   - The `git add .` step may take 30+ seconds because there are a lot of
     image files. That's normal — just wait.
   - When it's done, you'll see something like:
     `main → main (new branch)` — success!

8. **Verify it worked:** Go to
   `https://github.com/YOUR-USERNAME/colorworks-creative` — you should see
   all your project files listed there.

---

**Option B: Using GitHub's web interface (no command line)**

1. **Create a GitHub account** (if you don't have one) at
   [github.com](https://github.com). The free account is fine.

2. **Create a new empty repository:**
   - Go to [github.com/new](https://github.com/new)
   - **Repository name:** `colorworks-creative`
   - Set visibility: **Private**
   - **Don't** check "Add a README" or ".gitignore"
   - Click **Create repository**
   - You'll see a page that says "…or push an existing repository" with a
     link that says **"uploading an existing file"** — click that link.

3. **Download your project files** from this workspace as a ZIP, then unzip
   them into a folder on your computer.

4. **Decide which files to upload** — you need to upload the project source
   code, but **skip these folders** (they're not needed and would make the
   upload fail because they're too large):
   - ❌ `node_modules/` (dependencies — Netlify will install these during build)
   - ❌ `.next/` (build cache)
   - ❌ `download/` (raw scraped site backup — 250 MB)

   **You DO need to upload:**
   - ✅ `src/` folder (all your components and code)
   - ✅ `public/` folder (all your images, icons, favicon, etc.)
   - ✅ `prisma/` folder
   - ✅ `package.json` and `bun.lock` (tells Netlify what to install)
   - ✅ `next.config.ts` (Next.js configuration)
   - ✅ `tailwind.config.ts`, `postcss.config.mjs`, `tsconfig.json`,
     `eslint.config.mjs`, `components.json`
   - ✅ `netlify.toml` (Netlify build settings)
   - ✅ `.gitignore` (tells Git which files to skip)
   - ✅ `Caddyfile`
   - ✅ `DEPLOYMENT.md`, `README.md` (documentation)

5. **Upload the files:**
   - On the GitHub upload page, **drag and drop** all the files and folders
     listed above from your computer into the browser window.
   - GitHub may take a minute to process all the files (especially the
     `public/images/` folder with ~150 images).
   - When all files show a green checkmark, scroll to the bottom.

6. **Commit the files:**
   - At the bottom of the page, you'll see a **"Commit changes"** section.
   - The commit message is already filled in (something like "Add files via
     upload") — leave it as is.
   - Click the green **"Commit changes"** button.

7. **Verify it worked:** You should now see all your files listed on the
   repository page at `https://github.com/YOUR-USERNAME/colorworks-creative`.

#### Part 2: Connect Netlify to GitHub (5 minutes)

1. **Create a Netlify account** at [app.netlify.com](https://app.netlify.com)
   (you can sign up with GitHub — one click).

2. **Add a new site:**
   - Click **Add new site** → **Import an existing project**
   - Choose **GitHub** as your Git provider
   - Authorize Netlify to access your GitHub (you can grant access to just
     this one repo)

3. **Select your repository:** `colorworks-creative`

4. **Configure build settings** — Netlify auto-detects Next.js, but verify:
   - **Base directory:** (leave blank)
   - **Build command:** `bun run build` (or `npm run build` if you
     don't have Bun installed on Netlify — it works either way)
   - **Publish directory:** `.next`
   - **Functions directory:** `netlify/functions` (if it exists)

   The `netlify.toml` file in the repo already configures all of this
   automatically, so you usually don't need to touch these.

5. **Click Deploy.** Netlify will:
   - Clone your repo
   - Run `bun install` (or `npm install`)
   - Run `bun run build`
   - Deploy the production build

   This takes 2–4 minutes the first time. You'll see live build logs.

6. **Get your preview URL:** Once deployed, Netlify gives you a URL like
   `https://colorworks-creative-abc123.netlify.app`. Click it to verify
   your site is live.

#### Part 3: Connect your custom domain (10 minutes)

1. In Netlify: **Site settings → Domain management → Add a custom domain**

2. Enter: `colorworkscreative.com`

3. Netlify will give you DNS instructions. You have two options:

   **Option A — Use Netlify DNS (recommended):**
   - Go to your domain registrar (GoDaddy, Namecheap, Google Domains, etc.)
   - Change the **nameservers** to Netlify's:
     ```
     dns1.p01.nsone.net
     dns2.p01.nsone.net
     dns3.p01.nsone.net
     dns4.p01.nsone.net
     ```
   - Wait 15 min – 24 hours for DNS propagation
   - Netlify auto-provisions an SSL certificate (free, automatic)

   **Option B — Keep your current DNS, add records:**
   - Add an **A record** pointing to Netlify's load balancer IP
     (Netlify shows you the exact IP in the dashboard)
   - Add a **CNAME record** for `www` pointing to your Netlify subdomain
   - SSL is still auto-provisioned

4. **Cancel Webflow** once the domain is live on Netlify:
   - Verify your site loads at `colorworkscreative.com`
   - Log into Webflow → cancel your hosting plan
   - (Keep Webflow open in a tab until you've confirmed Netlify is working)

#### Part 4: Set up form email forwarding (2 minutes)

1. Go to **Netlify dashboard → your site → Forms**
2. You should see `project-inquiry` under "Active forms"
   (if not, wait a minute or trigger a redeploy)
3. Click **project-inquiry → Notifications → Add notification → Email**
4. Enter: `karli@colorworkscreative.com`
5. Save

#### Part 5: Test everything

1. Visit `colorworkscreative.com` — confirm the site loads
2. Scroll to the contact form, fill it out, submit
3. Check your email — you should receive the submission
4. Check **Forms → project-inquiry → Submissions** in Netlify dashboard

### Going forward: updates are automatic

Every time you push code to GitHub (or edit a file directly on GitHub.com),
Netlify automatically rebuilds and deploys your site in 2–4 minutes. You'll
see the build status in the Netlify dashboard.

To update content (e.g., add a new project), edit `src/lib/site-data.ts`
directly on GitHub.com and commit — Netlify will rebuild automatically.

## Contact Form Setup (Netlify Forms)

The "Start a project" form is wired to **Netlify Forms** — no backend code
needed. Here's how to activate email forwarding:

1. **Deploy the site** (steps above). Netlify's build bot automatically
   detects the form via the static HTML file at
   `public/project-inquiry-form.html` and registers it.

2. **Verify form detection:**
   - Go to **Netlify dashboard → your site → Forms**.
   - You should see a form named `project-inquiry` listed under
     "Active forms". If it's not there, trigger a deploy — the bot
     needs to see the static HTML file during build.

3. **Set up email notifications:**
   - Go to **Forms → project-inquiry → Notifications**.
   - Click **Add notification → Email**.
   - Enter your company email (`karli@colorworkscreative.com` or whichever
     inbox you want submissions forwarded to).
   - Save. Every form submission will now arrive in your inbox with the
     sender's name, email, company, and message.

4. **Test it:** Fill out the form on your live site and submit. You should
   receive an email within a minute. Submissions also appear in the
   Netlify dashboard under **Forms → project-inquiry → Submissions**.

5. **Spam protection:** A honeypot field (`bot-field`) is already built in.
   Netlify also offers reCAPTCHA if you need stronger protection (free tier:
   100 submissions/month, then $19/month for 1,000).

**How it works technically:**
- The React form posts to `/?submitted=true` with `data-netlify="true"`.
- Netlify intercepts the POST at the edge, stores the submission, sends
  the email notification, and redirects the user back to `/?submitted=true`.
- The page reads the `submitted` query param and shows a green success
  banner ("Thanks — your message is on its way!") above the form.

## Update content

All copy and project data lives in **`src/lib/site-data.ts`**:

- `SITE` — company info, contact, social, awards
- `SERVICES` — six services with blurbs + deliverables
- `PROJECTS` — twelve portfolio projects with images, descriptions, tags
- `TESTIMONIALS` — client quotes
- `BLOG_POSTS` — blog post metadata
- `CLIENTS` — client marquee

To add a new project, add an entry to the `PROJECTS` array. The sitemap
and project grid update automatically.

## Migrate the domain from Webflow

1. In your domain registrar, change the **nameservers** from Webflow's
   to Netlify's (provided in Netlify's domain management UI),
   OR keep existing nameservers and add a CNAME record pointing
   `www` → `<your-site>.netlify.app` and an ALIAS/ANAME for the apex.
2. Verify DNS propagation (15 min – 24 hr).
3. In Webflow: cancel your hosting plan.
4. Set up **301 redirects** in Netlify for any retired URL paths
   (e.g. `/our-work/baby-greens` → `/#work-baby-greens`) by adding
   `[[redirects]]` blocks to `netlify.toml`.

## File structure

```
src/
  app/
    layout.tsx           # Root layout — fonts, metadata, JSON-LD
    page.tsx             # Homepage (single-page SPA)
    globals.css          # Brand design tokens + utilities
    sitemap.ts           # Auto-generated sitemap
    robots.ts            # Auto-generated robots.txt
    favicon.ico          # Branded favicon
  components/
    site/
      site-header.tsx    # Sticky header w/ mobile drawer
      site-footer.tsx    # Brand-colored footer w/ contact + social
      hero.tsx           # Hero w/ image collage
      philosophy.tsx     # 4-card philosophy grid
      services.tsx       # 6 service cards + 4-step process
      work.tsx           # Project grid with industry filters
      project-modal.tsx  # Full-screen project detail modal + lightbox
      testimonials.tsx   # Testimonial cards + awards row
      about.tsx          # Founder portrait + bio + client marquee
      blog.tsx           # Featured post + sidebar + newsletter
      contact.tsx        # Contact form + contact method cards
    ui/                  # shadcn/ui components
  lib/
    site-data.ts         # All site content (single source of truth)
    use-scroll-reveal.ts # IntersectionObserver-based reveal hook
    utils.ts             # cn() helper
public/
  images/                # Curated brand assets (see inventory above)
  og-image.png            # Social share card
  icon.png                # Apple-touch icon style PNG
netlify.toml              # Netlify build + headers config
```
