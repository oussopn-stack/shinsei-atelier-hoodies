# SHINSEI // ATELIER (新生アトリエ)
## Modern Luxury Anime Haute Streetwear E-Commerce Storefront

A high-end, responsive e-commerce web platform designed to sell luxury limited-edition anime streetwear hoodies in the United States.

---

### 🌟 Project Specifications & Features

1. **14 High-End Anime Hoodies (7 Franchises, 2 Designs Each)**:
   - **Demon Slayer (Kimetsu no Yaiba)**:
     - *Kamado Sun Breathing Heavyweight Hoodie* ($195) — 500 GSM loopback French terry, 140k-stitch Hinokami Kagura back dragon embroidery.
     - *Kyojuro Flame Hashira Boxy Hoodie* ($210) — 520 GSM brushed fleece, multi-tone gradient flame sleeve embroidery, embossed tsuba chest crest.
   - **Solo Leveling**:
     - *Sung Jin-Woo Shadow Monarch "ARISE" Hoodie* ($220) — 500 GSM loopback cotton, UV-phosphor violet shadow aura embroidery, "ARISE" hood typography.
     - *Igris Blood Commander Garment-Dyed Hoodie* ($190) — 480 GSM mineral wash, blood-red and metallic silver knight back embroidery.
   - **Death Note**:
     - *Ryuk Shinigami Realm Distressed Hoodie* ($185) — 480 GSM acid-washed cotton, silver foil forbidden apple, feathered shinigami wings back embroidery.
     - *Kira vs L Monochromatic Split Heavy Hoodie* ($205) — 500 GSM cut-and-sew two-tone split construction, Old English 'L' chest embroidery.
   - **One Piece**:
     - *Luffy Gear 5 Sun God Nika Cloud-Wash Hoodie* ($215) — 520 GSM cloud-pearl wash, 3D puff smoke cloud embroidery framing hood, laughing Sun God Nika back graphic.
     - *Zoro King of Hell Enma Raw Hem Hoodie* ($195) — 500 GSM forest moss terry, luminescent green Enma aura flame embroidery, crossed katanas chest crest.
   - **Naruto**:
     - *Itachi Tsukuyomi Akatsuki Heavyweight Hoodie* ($220) — 520 GSM super-heavyweight fleece, raised 3D piping Akatsuki cloud, cascading crow feather sleeve embroidery.
     - *Sage of Six Paths Burnt Ochre Pullover* ($185) — 480 GSM raw charcoal cotton, Toad Sage scroll gold thread back embroidery, Uzumaki clan spiral seal.
   - **Jujutsu Kaisen**:
     - *Gojo Satoru Infinite Void Luminescent Hoodie* ($215) — 500 GSM heavy terry, UV-reactive electric cyan and royal violet Infinite Void eye back embroidery, chrome hardware.
     - *Ryumen Sukuna Malevolent Shrine Vintage Hoodie* ($210) — 500 GSM sun-faded vintage slate, authentic black curse tattoo sleeve prints, metallic Malevolent Shrine temple embroidery.
   - **Boku no Hero Academia (My Hero Academia)**:
     - *Deku One For All Blackwhip Tech Hoodie* ($190) — 490 GSM tactical French terry, Full Cowl cyan electric lightning embroidery, nylon webbing tactical straps.
     - *Dabi Cobalt Blue Flame Distressed Hoodie* ($200) — 500 GSM deconstructed carbon cotton, cobalt blue flame embroidery, surgical staple-stitch embroidery.

2. **Strict US Pricing ($180 - $220)**:
   - All 14 items strictly adhere to the requested luxury price corridor ($185, $190, $195, $200, $205, $210, $215, $220).

3. **U.S. E-Commerce Architecture**:
   - Currency: USD ($).
   - Free 2-Day US Express Shipping progress calculator ($150 threshold).
   - Sizing chart with imperial measurements (inches).
   - Complete US address validation with all 50 states, 5-digit ZIP code validation, and simulated USPS Priority tracking.
   - Stripe, Apple Pay, and Google Pay 1-click checkout flow simulation.

4. **Visual & UI Design**:
   - Modern luxury dark mode (`#060608` background, glassmorphism navigation, ambient glow).
   - Dynamic franchise filter tabs, real-time search, sorting engine (price, popularity, rating).
   - Quick View modal with live stock urgency, size selector (XS to XXL), quantity controls.
   - Slide-over Shopping Bag with promo code validation (`SHINSEI10` or `ANIME10` for 10% off).
   - Customer review carousel with verified US buyer ratings.
   - Lookbook editorial gallery.

---

### 🚀 Deploying to Vercel & GitHub

The project is zero-dependency static HTML5/CSS3/ES6 and fully configured with `vercel.json`.

#### Option A: Deploy via GitHub (Connected to Vercel)
1. In your GitHub account tab, create a new repository: `shinsei-atelier-anime-hoodies`.
2. Push or upload these files (`index.html`, `styles.css`, `app.js`, `vercel.json`, and `images/`).
3. In Vercel, click **"Add New Project"** -> **"Import Git Repository"** -> select `shinsei-atelier-anime-hoodies`.
4. Click **Deploy**. Vercel will instantly publish the site to a global Edge CDN URL (e.g. `shinsei-atelier.vercel.app`).

#### Option B: Deploy via Vercel CLI / Drag & Drop
1. In Vercel dashboard, you can also drag & drop the project folder directly into Vercel's project importer.
