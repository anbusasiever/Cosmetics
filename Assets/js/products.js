// FEATURED PRODUCTS DATA
const featuredProducts = [
  {
    labelColor: "bg-pink-500",
    image: "Assets/images/1.png",
    name: "Glow Matte Lipstick – Rose Bliss",
    desc: "Ultra-smooth matte finish with 12-hour long wear.",
    rating: 4.8,
    reviews: 214,
    price: 799
  },
  {
    labelColor: "bg-green-500",
    image: "Assets/images/2.png",
    name: "Radiant Glow Serum",
    desc: "Brightens skin and boosts natural glow.",
    rating: 4.7,
    reviews: 168,
    price: 1299
  },
  {
    labelColor: "bg-purple-500",
    image: "Assets/images/3.png",
    name: "Velvet Touch Foundation",
    desc: "Lightweight coverage with flawless finish.",
    rating: 4.6,
    reviews: 214,
    price: 1099
  },
  {
    labelColor: "bg-purple-500",
    image: "Assets/images/4.png",
    name: "Blush & Bloom Cheek Tint",
    desc: "Natural rosy tint for fresh everyday look.",
    rating: 4.9,
    reviews: 97,
    price: 699
  },
  {
    labelColor: "bg-purple-500",
    image: "Assets/images/5.png",
    name: "Luxe Shine Lip Gloss - Crystal Pink",
    desc: "Non-sticky gloss with high-shine finish and nourishing formula.",
    rating: 4.7,
    reviews: 186,
    price: 749
  },
  {
    labelColor: "bg-purple-500",
    image: "Assets/images/6.png",
    name: "Hydrating Glow Face Mist",
    desc: "Refreshes, hydrates, and sets makeup for all-day glow.",
    rating: 4.8,
    reviews: 132,
    price: 599
  }
];

// RENDER FEATURED PRODUCTS
function renderFeaturedProducts() {
  const container = document.getElementById("featuredContainer");
  container.innerHTML = "";

  featuredProducts.forEach(p => {
    container.innerHTML += `
      <div class="border rounded-xl shadow-md p-5 hover:shadow-lg transition hover:animate-pulse">
        
        <img src="${p.image}" class="w-full h-32 object-contain" />

        <h3 class="text-xl font-semibold">${p.name}</h3>

        <p class="text-gray-600 text-sm">${p.desc}</p>

        <div class="flex items-center gap-2">
          <span class="text-yellow-400 text-sm">⭐ ${p.rating}</span>
          <span class="text-gray-500 text-sm">(${p.reviews} Reviews)</span>
        </div>

        <p class="text-sm">Price:₹${p.price}</p>

        <div class="flex items-center gap-2">
        <button class="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-gray-800">
        Add to cart
        </button>
        <button class="py-2 heart-btn w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-pink-500 shrink-0">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </button>
        </div>
      </div>
    `;
  });
}
