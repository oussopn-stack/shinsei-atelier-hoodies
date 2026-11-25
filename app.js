/**
 * SHINSEI ATELIER - Modern Luxury Anime Haute Streetwear
 * Complete E-Commerce Storefront Engine
 */

// 14 High-End Anime Hoodies Catalog ($180 - $220)
const PRODUCTS = [
  {
    id: "ds-1",
    name: "Kamado Sun Breathing Heavyweight Hoodie",
    anime: "demon-slayer",
    animeName: "Demon Slayer",
    price: 195,
    comparePrice: 240,
    rating: 4.9,
    reviewsCount: 142,
    badge: "LIMITED DROP",
    badgeType: "gold",
    colorway: "Washed Vintage Black / Hinokami Crimson",
    gsm: "500 GSM",
    fabric: "100% Combed Japanese Loopback French Terry",
    image: "images/hoodie-ds-1.jpg",
    gallery: ["images/hoodie-ds-1.jpg"],
    stock: 8,
    tagline: "140,000-stitch fiery dragon embroidery honoring the Sun Breathing lineage.",
    description: "Engineered from custom-milled 500 GSM heavyweight Japanese loopback French terry. Features an intricately embroidered Hinokami Kagura flame dragon across the back with raised gold and crimson metallic threading, subtle emerald checkered ribbing at the cuffs, and matte black stainless steel aglets.",
    features: [
      "500 GSM ultra-heavyweight combed French terry",
      "Over 140,000 high-density embroidery stitches",
      "Custom gunmetal branded drawstring hardware",
      "Pre-shrunk, boxy drop-shoulder streetwear drape",
      "Discreet Japanese kanji (日の呼吸) on left chest"
    ]
  },
  {
    id: "ds-2",
    name: "Kyojuro Flame Hashira Boxy Hoodie",
    anime: "demon-slayer",
    animeName: "Demon Slayer",
    price: 210,
    comparePrice: 260,
    rating: 5.0,
    reviewsCount: 218,
    badge: "BESTSELLER",
    badgeType: "fire",
    colorway: "Deep Obsidian / Solar Flare Amber",
    gsm: "520 GSM",
    fabric: "520 GSM Brushed Heavyweight Cotton Fleece",
    image: "images/hoodie-ds-2.jpg",
    gallery: ["images/hoodie-ds-2.jpg"],
    stock: 5,
    tagline: "Set your heart ablaze. Gradient flame embroidery cascading down the sleeves.",
    description: "A monumental homage to the Flame Hashira. Heavyweight boxy drop-shoulder cut featuring gradient flame embroidery flowing dynamically from sleeve to hood. Detailed with a raised puff-print Nichirin sword tsuba crest on the chest and Rengoku's final mantra embroidered on the inside neck tape.",
    features: [
      "520 GSM double-brushed heavyweight fleece",
      "Multi-tone gradient flame embroidery along both sleeves",
      "Embossed flame guard tsuba emblem on chest",
      "Reinforced double-layered thermal hood",
      "Internal neck tape with 'Set Your Heart Ablaze' calligraphy"
    ]
  },
  {
    id: "sl-1",
    name: "Sung Jin-Woo Shadow Monarch 'ARISE' Hoodie",
    anime: "solo-leveling",
    animeName: "Solo Leveling",
    price: 220,
    comparePrice: 275,
    rating: 5.0,
    reviewsCount: 348,
    badge: "HIGH DEMAND",
    badgeType: "purple",
    colorway: "Void Midnight Black / Ethereal Ultraviolet",
    gsm: "500 GSM",
    fabric: "500 GSM Loopback French Terry with UV Phosphor",
    image: "images/hoodie-sl-1.jpg",
    gallery: ["images/hoodie-sl-1.jpg"],
    stock: 4,
    tagline: "The awakening of the Shadow Monarch. Luminous ultraviolet aura stitchwork.",
    description: "Command the shadow army. Crafted in deep midnight black heavy cotton with UV-luminescent violet shadow tendril embroidery that glows under blacklight. Minimalist 'ARISE' (일어나라) typography is embroidered along the hood rim with twin shadow daggers woven into the kangaroo pouch.",
    features: [
      "UV-reactive phosphor violet shadow embroidery",
      "Minimalist 'ARISE' typography along hood trim",
      "Custom dagger zip pullers and heavy metal eyelets",
      "Structured boxy silhouette with dropped shoulders",
      "Concealed interior stash pocket with hidden zipper"
    ]
  },
  {
    id: "sl-2",
    name: "Igris Blood Commander Garment-Dyed Hoodie",
    anime: "solo-leveling",
    animeName: "Solo Leveling",
    price: 190,
    comparePrice: 235,
    rating: 4.8,
    reviewsCount: 112,
    badge: "NEW DROP",
    badgeType: "crimson",
    colorway: "Matte Charcoal Smoke / Knightly Crimson",
    gsm: "480 GSM",
    fabric: "480 GSM Mineral-Washed Heavyweight Cotton",
    image: "images/hoodie-sl-2.jpg",
    gallery: ["images/hoodie-sl-2.jpg"],
    stock: 9,
    tagline: "Loyal to the Monarch. Blood-red armored knight silhouette embroidery.",
    description: "Dedicated to the Red Knight Igris. Mineral-washed matte charcoal cotton with metallic silver and blood-crimson armored silhouette embroidery on the back. Features subtle distressed seam detailing and a dual-layer structured hood that maintains its shape.",
    features: [
      "480 GSM mineral garment-dyed French terry",
      "Blood-red & metallic silver armored knight back embroidery",
      "Hand-distressed seam accents and bar-tack reinforcement",
      "Heavy 2x2 ribbed cuffs and hem",
      "Antiqued nickel drawstring aglets"
    ]
  },
  {
    id: "dn-1",
    name: "Ryuk Shinigami Realm Distressed Hoodie",
    anime: "death-note",
    animeName: "Death Note",
    price: 185,
    comparePrice: 230,
    rating: 4.9,
    reviewsCount: 186,
    badge: "CULT PIECE",
    badgeType: "silver",
    colorway: "Acid Mineral Ash / Gothic Sterling Silver",
    gsm: "480 GSM",
    fabric: "480 GSM Vintage Washed French Terry",
    image: "images/hoodie-dn-1.jpg",
    gallery: ["images/hoodie-dn-1.jpg"],
    stock: 11,
    tagline: "Apples in the Shinigami realm. Distressed feather wings and micro-rule typography.",
    description: "Acid-washed heavy French terry featuring a metallic silver foil forbidden apple on the chest and hyper-detailed distressed feather embroidery spanning the back shoulders. Death Note rule #1 is micro-printed on the inner sleeve cuff.",
    features: [
      "Custom acid wash finish - each piece unique",
      "Metallic silver foil forbidden apple chest graphic",
      "Shinigami feathered wings back embroidery (110k stitches)",
      "How to Use micro-typography along right sleeve cuff",
      "Chunky heavyweight flat drawstrings"
    ]
  },
  {
    id: "dn-2",
    name: "Kira vs L Monochromatic Split Heavy Hoodie",
    anime: "death-note",
    animeName: "Death Note",
    price: 205,
    comparePrice: 255,
    rating: 4.9,
    reviewsCount: 154,
    badge: "EDITORIAL PICK",
    badgeType: "mono",
    colorway: "Split Chalk White & Deep Noir",
    gsm: "500 GSM",
    fabric: "500 GSM Dual-Tone Cotton Fleece",
    image: "images/hoodie-dn-2.jpg",
    gallery: ["images/hoodie-dn-2.jpg"],
    stock: 6,
    tagline: "The clash of two definitions of justice. Two-tone monochromatic luxury cut.",
    description: "A masterclass in contrast. Two distinct 500 GSM fleece panels pieced together down the spine: pure chalk white on the left, pitch black on the right. Features an Old English 'L' monogram on the left chest and a fractured justice scale on the back.",
    features: [
      "Precision cut-and-sew two-tone split construction",
      "High-density Old English 'L' chest embroidery",
      "Fractured scythe and justice balance scale back graphic",
      "Two-way heavy YKK matte black industrial zipper",
      "Custom Japanese kanji (正義 - Justice) on rear neck"
    ]
  },
  {
    id: "op-1",
    name: "Luffy Gear 5 Sun God Nika Cloud-Wash Hoodie",
    anime: "one-piece",
    animeName: "One Piece",
    price: 215,
    comparePrice: 270,
    rating: 5.0,
    reviewsCount: 426,
    badge: "TOP RATED",
    badgeType: "gold",
    colorway: "Cloud Pearl / Celestial Lilac & Gold",
    gsm: "520 GSM",
    fabric: "520 GSM Cloud-Washed Heavyweight Cotton",
    image: "images/hoodie-op-1.jpg",
    gallery: ["images/hoodie-op-1.jpg"],
    stock: 3,
    tagline: "The Warrior of Liberation. Cloud smoke embroidery framing the celestial silhouette.",
    description: "The pinnacle of freedom. Cloud-washed off-white heavy cotton with ethereal floating smoke cloud embroidery framing the shoulders, the iconic laughing Sun God Nika silhouette on the back, and gold-tipped cotton drawstrings.",
    features: [
      "520 GSM cloud-pearl garment wash",
      "3D puff-stitched ethereal cloud smoke around hood and shoulders",
      "Sun God Nika laughing silhouette back embroidery",
      "Minimalist Straw Hat Jolly Roger on left chest",
      "18K gold-plated custom drawstring aglets"
    ]
  },
  {
    id: "op-2",
    name: "Zoro King of Hell Enma Raw Hem Hoodie",
    anime: "one-piece",
    animeName: "One Piece",
    price: 195,
    comparePrice: 245,
    rating: 4.9,
    reviewsCount: 295,
    badge: "BESTSELLER",
    badgeType: "emerald",
    colorway: "Moss Forest / Toxic Hellfire Neon Green",
    gsm: "500 GSM",
    fabric: "500 GSM Heavy Japanese French Terry",
    image: "images/hoodie-op-2.jpg",
    gallery: ["images/hoodie-op-2.jpg"],
    stock: 7,
    tagline: "I became the King of Hell. Demonic green Enma aura flame embroidery.",
    description: "Forged for the King of Hell. Deep dark moss green heavyweight hoodie with demonic green Enma aura embroidery, triple sword tsuba crest on the chest, and distressed raw-cut hem with reinforced bar-tack stitching.",
    features: [
      "500 GSM Japanese loopback French terry in forest moss",
      "Luminescent neon-green Enma aura embroidery down both arms",
      "Triple crossed katanas embroidered crest on chest",
      "Japanese kanji (閻魔王 - King of Hell) on upper back",
      "Raw-edge hem with structural stay-stitching"
    ]
  },
  {
    id: "n-1",
    name: "Itachi Tsukuyomi Akatsuki Heavyweight Hoodie",
    anime: "naruto",
    animeName: "Naruto",
    price: 220,
    comparePrice: 275,
    rating: 5.0,
    reviewsCount: 520,
    badge: "ICONIC GRAIL",
    badgeType: "crimson",
    colorway: "Pitch Black / Blood Crimson & Pure White",
    gsm: "520 GSM",
    fabric: "520 GSM Super-Heavyweight Cotton Fleece",
    image: "images/hoodie-n-1.jpg",
    gallery: ["images/hoodie-n-1.jpg"],
    stock: 2,
    tagline: "The crow in the crimson moon. Raised piping Akatsuki cloud and Sharingan hood.",
    description: "The crown jewel of anime haute streetwear. Deep black heavyweight fleece with ultra-dense high-relief Akatsuki cloud embroidery with crisp white piping, cascading crow feathers swirling down the left sleeve, and a tonal Mangekyo Sharingan motif on the hood.",
    features: [
      "520 GSM heavy brushed fleece for maximum warmth & structure",
      "Raised 3D puff-embroidered Akatsuki cloud on chest",
      "Multi-layered crow feathers swirling down left arm",
      "Tonal black Mangekyo Sharingan embroidery on hood peak",
      "Limited edition numbered woven atelier label (1 of 250)"
    ]
  },
  {
    id: "n-2",
    name: "Sage of Six Paths Burnt Ochre Pullover",
    anime: "naruto",
    animeName: "Naruto",
    price: 185,
    comparePrice: 230,
    rating: 4.8,
    reviewsCount: 178,
    badge: "DROP 02",
    badgeType: "orange",
    colorway: "Raw Charcoal / Burnt Ochre Orange & Gold",
    gsm: "480 GSM",
    fabric: "480 GSM Loopback Heavyweight Cotton",
    image: "images/hoodie-n-2.jpg",
    gallery: ["images/hoodie-n-2.jpg"],
    stock: 12,
    tagline: "Mount Myoboku mastery. Giant Toad Sage scroll embroidery in gold thread.",
    description: "Inspired by Mount Myoboku Sage Mode and Six Paths chakra. Charcoal washed fleece with burnt ochre scroll embroidery, gold metallic thread accents, and spiral Uzumaki clan seal embroidered directly over the heart.",
    features: [
      "480 GSM raw washed charcoal cotton",
      "Toad Sage scroll embroidered in gold and burnt orange metallic thread",
      "Minimalist Uzumaki clan spiral crest on left chest",
      "Brushed antique-gold metal drawstring eyelets & tips",
      "Side rib gussets for unrestricted comfort"
    ]
  },
  {
    id: "jjk-1",
    name: "Gojo Satoru Infinite Void Luminescent Hoodie",
    anime: "jujutsu-kaisen",
    animeName: "Jujutsu Kaisen",
    price: 215,
    comparePrice: 270,
    rating: 5.0,
    reviewsCount: 498,
    badge: "VIRAL GRAIL",
    badgeType: "cyan",
    colorway: "Midnight Noir / Electric Cyan & Royal Violet",
    gsm: "500 GSM",
    fabric: "500 GSM French Terry with UV-Reactive Thread",
    image: "images/hoodie-jjk-1.jpg",
    gallery: ["images/hoodie-jjk-1.jpg"],
    stock: 5,
    tagline: "Domain Expansion: Muryokusho. Cosmic boundless void eye pattern.",
    description: "Domain Expansion: Infinite Void. Crafted in pitch black luxury cotton featuring UV-reactive electric cyan and deep violet thread embroidery depicting Gojo's boundless cosmos. Features the iconic crossed-finger hand sign on the chest and custom chrome hardware.",
    features: [
      "UV-reactive electric cyan & royal violet silk thread embroidery",
      "Domain Expansion hand-sign emblem embroidered on chest",
      "Full back cosmic Infinite Void eye array",
      "High-shine polished silver drawstring aglets",
      "Oversized double-layered hood with blind-stitched seams"
    ]
  },
  {
    id: "jjk-2",
    name: "Sukuna Malevolent Shrine Vintage Hoodie",
    anime: "jujutsu-kaisen",
    animeName: "Jujutsu Kaisen",
    price: 210,
    comparePrice: 260,
    rating: 4.9,
    reviewsCount: 314,
    badge: "HOT SELLER",
    badgeType: "crimson",
    colorway: "Washed Crimson Slate / Curse Ink Black",
    gsm: "500 GSM",
    fabric: "500 GSM Vintage Sun-Faded Heavy Terry",
    image: "images/hoodie-jjk-2.jpg",
    gallery: ["images/hoodie-jjk-2.jpg"],
    stock: 6,
    tagline: "The King of Curses. Intricate Malevolent Shrine architectural embroidery.",
    description: "Dedicated to the King of Curses. Vintage garment-dyed dark slate with Sukuna's black curse markings screen-printed in water-based ink on sleeves, crowned with an intricate Malevolent Shrine back embroidery with silver metallic thread.",
    features: [
      "500 GSM sun-faded vintage washed cotton",
      "Authentic curse marking sleeve prints in tactile ink",
      "Hyper-detailed Malevolent Shrine temple back embroidery",
      "Raw-cut distressing along seams and hemline",
      "Heavyweight matte black metal drawstring tips"
    ]
  },
  {
    id: "mha-1",
    name: "Deku One For All Blackwhip Tech Hoodie",
    anime: "boku-no-hero",
    animeName: "My Hero Academia",
    price: 190,
    comparePrice: 240,
    rating: 4.8,
    reviewsCount: 165,
    badge: "NEW DROP",
    badgeType: "teal",
    colorway: "Slate Stealth Green / Full Cowl Cyan Lightning",
    gsm: "490 GSM",
    fabric: "490 GSM Tactical Technical French Terry",
    image: "images/hoodie-mha-1.jpg",
    gallery: ["images/hoodie-mha-1.jpg"],
    stock: 10,
    tagline: "Heroics re-engineered. Crackling cyan lightning and Blackwhip cord embroidery.",
    description: "Heroics meet modern techwear. Faded forest slate heavy fleece featuring cyan lightning embroidery cascading across the shoulders, Blackwhip tendrils woven onto the back, and custom nylon utility webbing.",
    features: [
      "490 GSM technical heavy French terry",
      "Full Cowl cyan electric lightning embroidery across shoulders",
      "Blackwhip shadow cords embroidered across back panel",
      "Tactical nylon webbing loop detail with matte black D-ring",
      "Reinforced elbow patches for streetwear longevity"
    ]
  },
  {
    id: "mha-2",
    name: "Dabi Cobalt Blue Flame Distressed Hoodie",
    anime: "boku-no-hero",
    animeName: "My Hero Academia",
    price: 200,
    comparePrice: 250,
    rating: 4.9,
    reviewsCount: 234,
    badge: "STREETWEAR GRAIL",
    badgeType: "blue",
    colorway: "Distressed Charcoal / Cobalt Hellfire Blue",
    gsm: "500 GSM",
    fabric: "500 GSM Deconstructed Heavyweight Cotton",
    image: "images/hoodie-mha-2.jpg",
    gallery: ["images/hoodie-mha-2.jpg"],
    stock: 7,
    tagline: "Dance with me in hell. Cobalt blue flame embroidery and surgical staple stitching.",
    description: "Deconstructed high-fashion aesthetic. Heavyweight carbon black cotton with intense cobalt blue flame embroidery licking upwards from the hem, accented with metallic surgical staple embroidery over distressed seams.",
    features: [
      "500 GSM heavily distressed and deconstructed carbon cotton",
      "Cobalt electric blue flame embroidery along hem and cuffs",
      "Metallic silver surgical staple-stitch embroidery on pockets",
      "Heavyweight raw double hood without drawstrings",
      "Dropped boxy cut engineered for oversized layering"
    ]
  }
];

// App State Management
const STATE = {
  activeAnime: "all",
  activeSort: "featured",
  searchQuery: "",
  cart: [],
  wishlist: new Set(),
  discountCode: "",
  discountPercent: 0,
  activeProductModal: null,
  isCartOpen: false,
  isCheckoutOpen: false,
  isSizeGuideOpen: false,
  isQuickViewOpen: false
};

// LocalStorage Persistence
const STORAGE_KEYS = {
  CART: "shinsei_atelier_cart_v1",
  WISHLIST: "shinsei_atelier_wishlist_v1"
};

function initStore() {
  loadStoredData();
  renderProducts();
  setupEventListeners();
  updateCartUI();
  updateWishlistUI();
  renderLookbook();
  renderReviews();
}

function loadStoredData() {
  try {
    const savedCart = localStorage.getItem(STORAGE_KEYS.CART);
    if (savedCart) STATE.cart = JSON.parse(savedCart);

    const savedWishlist = localStorage.getItem(STORAGE_KEYS.WISHLIST);
    if (savedWishlist) STATE.wishlist = new Set(JSON.parse(savedWishlist));
  } catch (e) {
    console.error("Storage load error:", e);
  }
}

function saveCart() {
  try {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(STATE.cart));
  } catch (e) {}
}

function saveWishlist() {
  try {
    localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(Array.from(STATE.wishlist)));
  } catch (e) {}
}

// Product Filtering & Sorting
function getFilteredProducts() {
  let list = [...PRODUCTS];

  // Filter by Anime
  if (STATE.activeAnime !== "all") {
    list = list.filter(p => p.anime === STATE.activeAnime);
  }

  // Search Query
  if (STATE.searchQuery.trim()) {
    const q = STATE.searchQuery.toLowerCase().trim();
    list = list.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.animeName.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q)
    );
  }

  // Sorting
  switch (STATE.activeSort) {
    case "price-low":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      list.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      list.sort((a, b) => b.rating - a.rating || b.reviewsCount - a.reviewsCount);
      break;
    case "new":
      list.sort((a, b) => (b.badge === "NEW DROP" ? 1 : 0) - (a.badge === "NEW DROP" ? 1 : 0));
      break;
    case "featured":
    default:
      // Keep natural high-fashion featured sequence
      break;
  }

  return list;
}

// Render Products Grid
function renderProducts() {
  const grid = document.getElementById("productGrid");
  const countEl = document.getElementById("productCount");
  if (!grid) return;

  const products = getFilteredProducts();
  if (countEl) countEl.textContent = `${products.length} PIECES`;

  if (products.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-20 text-center">
        <div class="w-16 h-16 mx-auto mb-4 text-zinc-600">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold tracking-wider text-white mb-2">NO ATELIER PIECES FOUND</h3>
        <p class="text-zinc-400 text-sm max-w-md mx-auto">No results matching "${STATE.searchQuery}". Try selecting another anime franchise or clearing filters.</p>
        <button onclick="resetFilters()" class="mt-6 px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-mono tracking-widest uppercase transition-colors">
          RESET FILTERS
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = products.map((product, idx) => {
    const isWished = STATE.wishlist.has(product.id);
    return `
      <article class="product-card group relative bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-500/80 transition-all duration-500 rounded-sm overflow-hidden flex flex-col" data-anime="${product.anime}">
        <!-- Image & Badges -->
        <div class="relative aspect-square overflow-hidden bg-zinc-900 cursor-pointer" onclick="openQuickView('${product.id}')">
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            loading="lazy" 
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          
          <!-- Top Badges -->
          <div class="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            <span class="badge-pill badge-${product.badgeType} text-[10px] font-mono tracking-widest px-2.5 py-1 uppercase font-bold shadow-lg">
              ${product.badge}
            </span>
            <span class="bg-black/80 backdrop-blur-md text-zinc-300 border border-zinc-700/60 text-[10px] font-mono tracking-wider px-2 py-0.5">
              ${product.gsm}
            </span>
          </div>

          <!-- Wishlist Button -->
          <button 
            onclick="event.stopPropagation(); toggleWishlist('${product.id}')" 
            class="wishlist-btn absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-zinc-700/50 flex items-center justify-center text-zinc-300 hover:text-white transition-all z-10 ${isWished ? 'active text-rose-500' : ''}"
            aria-label="Add to wishlist"
          >
            <svg class="w-4 h-4 ${isWished ? 'fill-rose-500 stroke-rose-500' : 'fill-none stroke-currentColor'}" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
            </svg>
          </button>

          <!-- Quick View Hover Overlay -->
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
            <span class="px-4 py-2 bg-white text-black font-mono text-xs font-bold tracking-widest uppercase shadow-2xl translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              EXPLORE DETAILS
            </span>
          </div>

          <!-- Stock Pill -->
          <div class="absolute bottom-2 left-2 z-10">
            <span class="inline-flex items-center gap-1.5 px-2 py-0.5 bg-black/75 backdrop-blur-sm text-[10px] font-mono text-zinc-400 border border-zinc-800">
              <span class="w-1.5 h-1.5 rounded-full ${product.stock <= 4 ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}"></span>
              ${product.stock <= 4 ? `ONLY ${product.stock} LEFT` : 'IN STOCK (US)'}
            </span>
          </div>
        </div>

        <!-- Product Meta -->
        <div class="p-5 flex flex-col flex-grow bg-gradient-to-b from-zinc-950 to-zinc-900/90">
          <div class="flex items-center justify-between text-xs font-mono text-zinc-400 mb-1.5">
            <span class="text-emerald-400/90 tracking-widest uppercase font-semibold">${product.animeName}</span>
            <div class="flex items-center gap-1 text-amber-400">
              <span>★</span>
              <span class="text-zinc-200 font-bold">${product.rating.toFixed(1)}</span>
              <span class="text-zinc-500 text-[10px]">(${product.reviewsCount})</span>
            </div>
          </div>

          <h3 
            onclick="openQuickView('${product.id}')"
            class="text-base font-bold text-white tracking-wide group-hover:text-emerald-400 transition-colors line-clamp-1 cursor-pointer mb-1.5"
            title="${product.name}"
          >
            ${product.name}
          </h3>

          <p class="text-xs text-zinc-400 line-clamp-2 mb-4 leading-relaxed font-sans">
            ${product.tagline}
          </p>

          <!-- Pricing & Size Bar -->
          <div class="mt-auto pt-3 border-t border-zinc-800/80">
            <div class="flex items-baseline justify-between mb-3">
              <div class="flex items-baseline gap-2">
                <span class="text-xl font-bold font-mono text-white tracking-tight">$${product.price}</span>
                <span class="text-xs font-mono text-zinc-500 line-through">$${product.comparePrice}</span>
              </div>
              <span class="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">US 2-DAY SHIP</span>
            </div>

            <!-- Size Select & Quick Add -->
            <div class="flex items-center gap-2">
              <div class="grid grid-cols-4 gap-1 flex-grow">
                ${['S', 'M', 'L', 'XL'].map(size => `
                  <button 
                    onclick="quickAddToCart('${product.id}', '${size}')" 
                    class="py-1.5 text-center text-[10px] font-mono border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all uppercase rounded-xs"
                    title="Add size ${size}"
                  >
                    ${size}
                  </button>
                `).join('')}
              </div>

              <button 
                onclick="openQuickView('${product.id}')" 
                class="px-2.5 py-1.5 bg-zinc-800 hover:bg-emerald-600 text-white border border-zinc-700 hover:border-emerald-500 text-xs transition-colors rounded-xs flex items-center justify-center"
                title="View specs & XXL"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Quick Add with chosen size
function quickAddToCart(productId, size = 'L') {
  addToCart(productId, size, 1);
  showToast(`Added ${size} to your Atelier Bag`, 'success');
  openCartDrawer();
}

// Add to Cart Logic
function addToCart(productId, size = 'L', quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingItemIndex = STATE.cart.findIndex(
    item => item.id === productId && item.size === size
  );

  if (existingItemIndex > -1) {
    STATE.cart[existingItemIndex].quantity += quantity;
  } else {
    STATE.cart.push({
      id: product.id,
      name: product.name,
      animeName: product.animeName,
      price: product.price,
      image: product.image,
      gsm: product.gsm,
      colorway: product.colorway,
      size: size,
      quantity: quantity
    });
  }

  saveCart();
  updateCartUI();
}

function updateCartQuantity(index, delta) {
  if (!STATE.cart[index]) return;
  STATE.cart[index].quantity += delta;
  if (STATE.cart[index].quantity <= 0) {
    STATE.cart.splice(index, 1);
  }
  saveCart();
  updateCartUI();
}

function removeCartItem(index) {
  if (!STATE.cart[index]) return;
  STATE.cart.splice(index, 1);
  saveCart();
  updateCartUI();
}

// Update Cart Drawer & Badge UI
function updateCartUI() {
  const countEls = document.querySelectorAll(".cart-count");
  const totalCount = STATE.cart.reduce((sum, item) => sum + item.quantity, 0);

  countEls.forEach(el => {
    el.textContent = totalCount;
    el.classList.toggle("hidden", totalCount === 0);
  });

  const cartItemsContainer = document.getElementById("cartItems");
  const subtotalEl = document.getElementById("cartSubtotal");
  const discountEl = document.getElementById("cartDiscount");
  const discountRow = document.getElementById("discountRow");
  const totalEl = document.getElementById("cartTotal");
  const shippingBar = document.getElementById("shippingProgress");
  const shippingText = document.getElementById("shippingText");

  const subtotal = STATE.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = subtotal * (STATE.discountPercent / 100);
  const total = Math.max(0, subtotal - discountAmount);

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
  
  if (discountRow && discountEl) {
    if (STATE.discountPercent > 0) {
      discountRow.classList.remove("hidden");
      discountEl.textContent = `-$${discountAmount.toFixed(2)} (${STATE.discountPercent}%)`;
    } else {
      discountRow.classList.add("hidden");
    }
  }

  // Free US Express Shipping calculation ($150 threshold)
  const FREE_SHIPPING_THRESHOLD = 150;
  if (shippingBar && shippingText) {
    if (subtotal === 0) {
      shippingBar.style.width = "0%";
      shippingText.innerHTML = `Add <strong>$150.00</strong> more to unlock <strong>FREE 2-Day US Express Shipping</strong>`;
    } else if (subtotal >= FREE_SHIPPING_THRESHOLD) {
      shippingBar.style.width = "100%";
      shippingText.innerHTML = `🎉 <strong>UNLOCKED:</strong> You get <strong>FREE 2-Day US Domestic Express Shipping</strong>!`;
    } else {
      const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
      const pct = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
      shippingBar.style.width = `${pct}%`;
      shippingText.innerHTML = `Add <strong>$${remaining.toFixed(2)}</strong> more to unlock <strong>FREE 2-Day US Express Shipping</strong>`;
    }
  }

  if (!cartItemsContainer) return;

  if (STATE.cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="py-16 text-center">
        <div class="w-16 h-16 mx-auto mb-4 text-zinc-600">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
          </svg>
        </div>
        <p class="text-white font-mono text-sm tracking-wider uppercase mb-2">YOUR ATELIER BAG IS EMPTY</p>
        <p class="text-zinc-400 text-xs max-w-xs mx-auto mb-6">Explore the 14 limited-edition anime hoodies engineered in 500 GSM heavyweight French terry.</p>
        <button onclick="closeCartDrawer()" class="px-6 py-2.5 bg-white text-black text-xs font-mono font-bold tracking-widest uppercase hover:bg-zinc-200 transition-colors">
          DISCOVER THE PIECES
        </button>
      </div>
    `;
    return;
  }

  cartItemsContainer.innerHTML = STATE.cart.map((item, idx) => `
    <div class="cart-item flex gap-4 py-4 border-b border-zinc-800/80">
      <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover bg-zinc-900 border border-zinc-800 rounded-xs flex-shrink-0" />
      <div class="flex flex-col flex-grow">
        <div class="flex items-start justify-between gap-2">
          <div>
            <span class="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">${item.animeName}</span>
            <h4 class="text-xs font-bold text-white line-clamp-1">${item.name}</h4>
          </div>
          <button onclick="removeCartItem(${idx})" class="text-zinc-500 hover:text-rose-400 transition-colors" title="Remove item">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div class="flex items-center gap-2 mt-1 text-[11px] font-mono text-zinc-400">
          <span class="px-1.5 py-0.5 bg-zinc-800 border border-zinc-700 text-white font-bold">SIZE: ${item.size}</span>
          <span>${item.gsm}</span>
        </div>

        <div class="flex items-center justify-between mt-auto pt-2">
          <div class="flex items-center border border-zinc-700 rounded-xs bg-zinc-900">
            <button onclick="updateCartQuantity(${idx}, -1)" class="w-6 h-6 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">-</button>
            <span class="w-7 text-center font-mono text-xs font-bold text-white">${item.quantity}</span>
            <button onclick="updateCartQuantity(${idx}, 1)" class="w-6 h-6 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">+</button>
          </div>
          <span class="font-mono text-sm font-bold text-white">$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Wishlist Functionality
function toggleWishlist(productId) {
  if (STATE.wishlist.has(productId)) {
    STATE.wishlist.delete(productId);
    showToast("Removed from Wishlist", "info");
  } else {
    STATE.wishlist.add(productId);
    showToast("Added to Wishlist", "success");
  }
  saveWishlist();
  updateWishlistUI();
  renderProducts();
}

function updateWishlistUI() {
  const wishCountEls = document.querySelectorAll(".wishlist-count");
  wishCountEls.forEach(el => {
    el.textContent = STATE.wishlist.size;
    el.classList.toggle("hidden", STATE.wishlist.size === 0);
  });
}

// Promo Code System
function applyPromoCode() {
  const input = document.getElementById("promoCodeInput");
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === "SHINSEI10" || code === "ANIME10" || code === "ATELIER10") {
    STATE.discountCode = code;
    STATE.discountPercent = 10;
    showToast("10% Atelier Discount Applied!", "success");
    updateCartUI();
  } else if (code === "VIP15") {
    STATE.discountCode = code;
    STATE.discountPercent = 15;
    showToast("15% VIP Streetwear Discount Applied!", "success");
    updateCartUI();
  } else {
    showToast("Invalid promo code. Try 'SHINSEI10'", "error");
  }
}

// Quick View Modal
let selectedQuickSize = 'L';
let selectedQuickQty = 1;

function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  STATE.activeProductModal = product;
  selectedQuickSize = 'L';
  selectedQuickQty = 1;

  const modal = document.getElementById("quickViewModal");
  const content = document.getElementById("quickViewContent");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
      <!-- Media Gallery -->
      <div class="space-y-4">
        <div class="aspect-square bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden relative group">
          <img id="quickMainImg" src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div class="absolute top-3 left-3 flex flex-col gap-1.5">
            <span class="badge-pill badge-${product.badgeType} text-[10px] font-mono tracking-widest px-2.5 py-1 uppercase font-bold">
              ${product.badge}
            </span>
            <span class="bg-black/80 text-zinc-300 border border-zinc-700 text-[10px] font-mono px-2 py-0.5">
              ${product.gsm}
            </span>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-2">
          <div class="p-2 bg-zinc-900/60 border border-zinc-800 text-center">
            <span class="block text-[10px] font-mono text-zinc-500 uppercase">WEAVE</span>
            <span class="text-xs font-bold text-zinc-200">French Terry</span>
          </div>
          <div class="p-2 bg-zinc-900/60 border border-zinc-800 text-center">
            <span class="block text-[10px] font-mono text-zinc-500 uppercase">HARDWARE</span>
            <span class="text-xs font-bold text-zinc-200">Custom Steel</span>
          </div>
          <div class="p-2 bg-zinc-900/60 border border-zinc-800 text-center">
            <span class="block text-[10px] font-mono text-zinc-500 uppercase">FIT</span>
            <span class="text-xs font-bold text-zinc-200">Boxy Drop</span>
          </div>
        </div>
      </div>

      <!-- Product Details & Actions -->
      <div class="flex flex-col">
        <div class="flex items-center justify-between text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1">
          <span>${product.animeName}</span>
          <span class="text-zinc-500">ID: ${product.id.toUpperCase()}</span>
        </div>

        <h2 class="text-2xl font-bold text-white tracking-tight mb-2">${product.name}</h2>
        
        <div class="flex items-center gap-3 mb-4">
          <div class="flex items-baseline gap-2">
            <span class="text-2xl font-bold font-mono text-white">$${product.price}</span>
            <span class="text-sm font-mono text-zinc-500 line-through">$${product.comparePrice}</span>
          </div>
          <span class="px-2 py-0.5 bg-emerald-950/80 text-emerald-400 border border-emerald-800 text-[10px] font-mono font-bold uppercase">
            SAVE $${product.comparePrice - product.price}
          </span>
          <div class="ml-auto flex items-center gap-1 text-amber-400 text-sm">
            <span>★</span>
            <span class="text-white font-bold">${product.rating.toFixed(1)}</span>
            <span class="text-zinc-500 text-xs">(${product.reviewsCount} reviews)</span>
          </div>
        </div>

        <p class="text-sm text-zinc-300 leading-relaxed mb-6 font-sans">
          ${product.description}
        </p>

        <!-- Bullet Highlights -->
        <div class="space-y-1.5 mb-6 text-xs text-zinc-400 font-mono">
          ${product.features.map(f => `
            <div class="flex items-center gap-2">
              <span class="text-emerald-400 font-bold">✓</span>
              <span>${f}</span>
            </div>
          `).join('')}
        </div>

        <!-- Size Selection -->
        <div class="mb-6">
          <div class="flex items-center justify-between text-xs font-mono mb-2">
            <span class="text-white uppercase font-bold tracking-wider">SELECT SIZE (US FIT)</span>
            <button onclick="openSizeGuide()" class="text-emerald-400 hover:text-emerald-300 underline underline-offset-4 transition-colors">
              SIZE GUIDE (INCHES)
            </button>
          </div>

          <div class="grid grid-cols-6 gap-2" id="quickSizeButtons">
            ${['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => `
              <button 
                onclick="setQuickSize('${size}')" 
                class="quick-size-btn py-2 text-center text-xs font-mono border ${size === 'L' ? 'border-emerald-500 bg-emerald-950/40 text-white font-bold' : 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-600'} transition-all rounded-xs"
                data-size="${size}"
              >
                ${size}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Quantity & Add to Cart -->
        <div class="mt-auto space-y-3">
          <div class="flex items-center gap-3">
            <div class="flex items-center border border-zinc-700 bg-zinc-900 rounded-xs">
              <button onclick="adjustQuickQty(-1)" class="w-10 h-11 text-zinc-300 hover:text-white hover:bg-zinc-800 font-bold text-base transition-colors">-</button>
              <span id="quickQtyDisplay" class="w-10 text-center font-mono font-bold text-white">1</span>
              <button onclick="adjustQuickQty(1)" class="w-10 h-11 text-zinc-300 hover:text-white hover:bg-zinc-800 font-bold text-base transition-colors">+</button>
            </div>

            <button 
              onclick="submitQuickAdd()" 
              class="flex-grow py-3 px-6 bg-white hover:bg-zinc-200 text-black text-xs font-mono font-bold tracking-widest uppercase transition-all shadow-xl flex items-center justify-center gap-2 rounded-xs"
            >
              <span>ADD TO BAG</span>
              <span class="text-zinc-600">•</span>
              <span id="quickAddPrice">$${product.price}</span>
            </button>
          </div>

          <!-- US Fulfillment Guarantee -->
          <div class="p-3 bg-zinc-900/60 border border-zinc-800/80 rounded-xs flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span class="flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
              Fast 2-4 Day US Delivery via USPS Priority
            </span>
            <span class="text-zinc-300 font-bold">30-DAY RETURNS</span>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function setQuickSize(size) {
  selectedQuickSize = size;
  const buttons = document.querySelectorAll(".quick-size-btn");
  buttons.forEach(btn => {
    const isTarget = btn.getAttribute("data-size") === size;
    btn.className = `quick-size-btn py-2 text-center text-xs font-mono border ${isTarget ? 'border-emerald-500 bg-emerald-950/40 text-white font-bold' : 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-600'} transition-all rounded-xs`;
  });
}

function adjustQuickQty(delta) {
  selectedQuickQty = Math.max(1, selectedQuickQty + delta);
  const qtyEl = document.getElementById("quickQtyDisplay");
  const priceEl = document.getElementById("quickAddPrice");
  if (qtyEl) qtyEl.textContent = selectedQuickQty;
  if (priceEl && STATE.activeProductModal) {
    priceEl.textContent = `$${(STATE.activeProductModal.price * selectedQuickQty).toFixed(2)}`;
  }
}

function submitQuickAdd() {
  if (!STATE.activeProductModal) return;
  addToCart(STATE.activeProductModal.id, selectedQuickSize, selectedQuickQty);
  closeQuickView();
  openCartDrawer();
  showToast(`Added ${STATE.activeProductModal.name} (${selectedQuickSize}) to bag`, 'success');
}

function closeQuickView() {
  const modal = document.getElementById("quickViewModal");
  if (modal) modal.classList.add("hidden");
  document.body.style.overflow = "";
}

// Drawer Controls
function openCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  if (!drawer || !backdrop) return;

  STATE.isCartOpen = true;
  drawer.classList.remove("translate-x-full");
  backdrop.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  if (!drawer || !backdrop) return;

  STATE.isCartOpen = false;
  drawer.classList.add("translate-x-full");
  backdrop.classList.add("hidden");
  document.body.style.overflow = "";
}

// Size Guide Modal
function openSizeGuide() {
  const modal = document.getElementById("sizeGuideModal");
  if (modal) {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function closeSizeGuide() {
  const modal = document.getElementById("sizeGuideModal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

// Checkout Experience
function openCheckoutModal() {
  if (STATE.cart.length === 0) {
    showToast("Your bag is empty", "error");
    return;
  }
  closeCartDrawer();

  const modal = document.getElementById("checkoutModal");
  const summaryEl = document.getElementById("checkoutSummaryList");
  const subtotalEl = document.getElementById("checkoutSubtotal");
  const totalEl = document.getElementById("checkoutTotal");

  const subtotal = STATE.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = subtotal * (STATE.discountPercent / 100);
  const total = Math.max(0, subtotal - discountAmount);

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;

  if (summaryEl) {
    summaryEl.innerHTML = STATE.cart.map(item => `
      <div class="flex items-center justify-between text-xs py-2 border-b border-zinc-800">
        <div class="flex items-center gap-3">
          <img src="${item.image}" alt="" class="w-10 h-10 object-cover bg-zinc-900 border border-zinc-800" />
          <div>
            <div class="text-white font-bold line-clamp-1">${item.name}</div>
            <div class="text-zinc-500 font-mono">Size ${item.size} • Qty ${item.quantity}</div>
          </div>
        </div>
        <span class="font-mono text-white font-bold">$${(item.price * item.quantity).toFixed(2)}</span>
      </div>
    `).join('');
  }

  if (modal) {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkoutModal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  const form = document.getElementById("checkoutForm");
  if (!form || !form.checkValidity()) {
    if (form) form.reportValidity();
    return;
  }

  const name = document.getElementById("chkName")?.value || "Customer";
  const email = document.getElementById("chkEmail")?.value || "";
  const address = document.getElementById("chkAddress")?.value || "";
  const city = document.getElementById("chkCity")?.value || "";
  const state = document.getElementById("chkState")?.value || "CA";
  const zip = document.getElementById("chkZip")?.value || "90001";

  // Simulate payment processing
  const submitBtn = document.getElementById("checkoutSubmitBtn");
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="inline-block w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
      <span>PROCESSING VIA SECURE STRIPE GATEWAY...</span>
    `;
  }

  setTimeout(() => {
    const orderNumber = `SA-${Math.floor(100000 + Math.random() * 900000)}`;
    const trackingNumber = `9400 1118 9922 ${Math.floor(1000 + Math.random() * 9000)} ${Math.floor(1000 + Math.random() * 9000)} 01`;

    // Clear cart
    const purchasedItems = [...STATE.cart];
    STATE.cart = [];
    saveCart();
    updateCartUI();

    // Show Confirmation Screen
    const checkoutContainer = document.getElementById("checkoutModalContainer");
    if (checkoutContainer) {
      checkoutContainer.innerHTML = `
        <div class="p-8 text-center">
          <div class="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-400">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
            </svg>
          </div>

          <span class="text-xs font-mono text-emerald-400 tracking-widest uppercase font-bold">ORDER CONFIRMED & DISPATCHED</span>
          <h2 class="text-2xl font-bold text-white tracking-tight mt-1 mb-2">THANK YOU FOR YOUR PATRONAGE</h2>
          <p class="text-zinc-400 text-xs max-w-md mx-auto mb-6">
            A confirmation email has been dispatched to <strong class="text-zinc-200">${email}</strong>. Your limited atelier pieces are being prepared at our Los Angeles fulfillment center.
          </p>

          <div class="max-w-md mx-auto bg-zinc-900 border border-zinc-800 p-4 text-left font-mono text-xs space-y-2 mb-6">
            <div class="flex justify-between border-b border-zinc-800 pb-2">
              <span class="text-zinc-500">ORDER NUMBER:</span>
              <span class="text-white font-bold">${orderNumber}</span>
            </div>
            <div class="flex justify-between border-b border-zinc-800 pb-2">
              <span class="text-zinc-500">USPS PRIORITY TRACKING:</span>
              <span class="text-emerald-400 font-bold">${trackingNumber}</span>
            </div>
            <div class="flex justify-between border-b border-zinc-800 pb-2">
              <span class="text-zinc-500">ESTIMATED US ARRIVAL:</span>
              <span class="text-white font-bold">2-3 Business Days</span>
            </div>
            <div class="flex justify-between pt-1">
              <span class="text-zinc-500">DESTINATION:</span>
              <span class="text-zinc-300 text-right">${address}, ${city}, ${state} ${zip}</span>
            </div>
          </div>

          <button onclick="closeCheckoutModal(); window.location.reload();" class="px-8 py-3 bg-white text-black font-mono text-xs font-bold tracking-widest uppercase hover:bg-zinc-200 transition-colors">
            RETURN TO ATELIER
          </button>
        </div>
      `;
    }
  }, 1200);
}

// Lookbook Section Data
function renderLookbook() {
  const container = document.getElementById("lookbookGrid");
  if (!container) return;

  const editorialShots = [
    { title: "THE VANGUARD", subtitle: "Itachi Tsukuyomi 520 GSM on Ghost Display", img: "images/hoodie-n-1.jpg" },
    { title: "ETHEREAL VOID", subtitle: "Gojo Infinite Void Luminescent Stitches", img: "images/hoodie-jjk-1.jpg" },
    { title: "SHADOW MONARCH", subtitle: "Sung Jin-Woo ARISE Boxy Silhouette", img: "images/hoodie-sl-1.jpg" },
    { title: "KING OF HELL", subtitle: "Zoro Enma Demonic Green Threading", img: "images/hoodie-op-2.jpg" }
  ];

  container.innerHTML = editorialShots.map(shot => `
    <div class="group relative overflow-hidden bg-zinc-900 aspect-[4/5] border border-zinc-800">
      <img src="${shot.img}" alt="${shot.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
        <span class="text-[10px] font-mono text-emerald-400 tracking-widest uppercase font-semibold mb-1">${shot.subtitle}</span>
        <h3 class="text-lg font-bold text-white tracking-wider">${shot.title}</h3>
      </div>
    </div>
  `).join('');
}

// Customer Reviews Data
function renderReviews() {
  const container = document.getElementById("reviewsGrid");
  if (!container) return;

  const reviews = [
    {
      author: "Marcus Vance",
      location: "Brooklyn, New York",
      verified: true,
      rating: 5,
      date: "November 2026",
      product: "Itachi Tsukuyomi Akatsuki Heavyweight Hoodie",
      text: "The weight on this hoodie is staggering. I own pieces from Balenciaga and Represent, and the 520 GSM French Terry here honestly drapes better. The raised piping on the Akatsuki cloud is insanely sharp. Arrived in Queens in 2 days."
    },
    {
      author: "Kaito Tanaka",
      location: "Los Angeles, California",
      verified: true,
      rating: 5,
      date: "November 2026",
      product: "Gojo Satoru Infinite Void Luminescent Hoodie",
      text: "Under purple ambient light the Infinite Void back embroidery literally lights up. Hardware is heavy stainless steel, not cheap plastic aglets. Well worth the $215 price tag."
    },
    {
      author: "Elena Rostova",
      location: "Austin, Texas",
      verified: true,
      rating: 5,
      date: "November 2026",
      product: "Kamado Sun Breathing Heavyweight Hoodie",
      text: "140,000 stitches is not an exaggeration. The dragon feels like a piece of art museum tapestry woven into a streetwear hoodie. Pre-shrunk boxy cut fits perfectly oversized."
    }
  ];

  container.innerHTML = reviews.map(r => `
    <div class="p-6 bg-zinc-950 border border-zinc-800/80 rounded-sm flex flex-col">
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-1 text-amber-400">
          ${'★'.repeat(r.rating)}
        </div>
        <span class="text-[10px] font-mono text-zinc-500 uppercase">${r.date}</span>
      </div>

      <p class="text-xs text-zinc-300 leading-relaxed italic mb-4 font-sans flex-grow">
        "${r.text}"
      </p>

      <div class="pt-3 border-t border-zinc-800/80">
        <div class="flex items-center justify-between">
          <div class="text-xs font-bold text-white">${r.author}</div>
          <span class="text-[10px] font-mono text-emerald-400 font-semibold">VERIFIED US BUYER</span>
        </div>
        <div class="text-[11px] font-mono text-zinc-500">${r.location}</div>
        <div class="text-[10px] font-mono text-zinc-400 mt-1 truncate">Item: ${r.product}</div>
      </div>
    </div>
  `).join('');
}

// Filter Event Handlers
function setupEventListeners() {
  // Anime Filter Tabs
  const filterBtns = document.querySelectorAll(".anime-filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active", "border-emerald-500", "text-white", "bg-zinc-800"));
      filterBtns.forEach(b => b.classList.add("border-zinc-800", "text-zinc-400"));

      btn.classList.add("active", "border-emerald-500", "text-white", "bg-zinc-800");
      btn.classList.remove("border-zinc-800", "text-zinc-400");

      STATE.activeAnime = btn.getAttribute("data-anime") || "all";
      renderProducts();
    });
  });

  // Sort Dropdown
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      STATE.activeSort = e.target.value;
      renderProducts();
    });
  }

  // Search Input
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      STATE.searchQuery = e.target.value;
      renderProducts();
    });
  }

  // Close modals on Escape key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeQuickView();
      closeCartDrawer();
      closeSizeGuide();
      closeCheckoutModal();
    }
  });
}

function resetFilters() {
  STATE.activeAnime = "all";
  STATE.searchQuery = "";
  STATE.activeSort = "featured";

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";

  const filterBtns = document.querySelectorAll(".anime-filter-btn");
  filterBtns.forEach(b => {
    if (b.getAttribute("data-anime") === "all") {
      b.classList.add("active", "border-emerald-500", "text-white", "bg-zinc-800");
      b.classList.remove("border-zinc-800", "text-zinc-400");
    } else {
      b.classList.remove("active", "border-emerald-500", "text-white", "bg-zinc-800");
      b.classList.add("border-zinc-800", "text-zinc-400");
    }
  });

  renderProducts();
}

// Toast Notifications
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  const bg = type === "success" ? "bg-emerald-950 border-emerald-500 text-emerald-200" :
             type === "error" ? "bg-rose-950 border-rose-500 text-rose-200" :
             "bg-zinc-900 border-zinc-700 text-white";

  toast.className = `p-3.5 border ${bg} text-xs font-mono tracking-wider shadow-2xl flex items-center justify-between gap-3 animate-fade-in transition-all duration-300 rounded-xs min-w-[280px]`;
  toast.innerHTML = `
    <span>${message}</span>
    <button onclick="this.parentElement.remove()" class="text-zinc-400 hover:text-white font-bold">✕</button>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", initStore);
