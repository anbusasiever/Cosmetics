    //Toggle for Mobile Menu
const mobileBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
mobileBtn.addEventListener("click", () => {
mobileMenu.classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedProducts();
  renderCategories();
  setupCategoryButtons();
});

//Why Glowrify label one by one display
document.addEventListener("DOMContentLoaded", () => {
  const labels = document.querySelectorAll(".label-box");

  labels.forEach((label, index) => {
    setTimeout(() => {
      label.classList.add("show");
    }, index * 500); // 0.5s delay between each label
  });
});

//Happy Customers
const reviews = [
  {
    image: "Assets/images/reviewprofile1.jpg",
    rating: 5,
    text: "I have very oily, acne-prone skin and Glowify changed everything. It feels lightweight and absorbs instantly.",
    name: "Ananya R.",
    location: "Bangalore"
  },
  {
    image: "Assets/images/reviewprofile2.jpg",
    rating: 5,
    text: "Glowify products made my skin brighter and smoother. I love how gentle they are!",
    name: "Meera S.",
    location: "Hyderabad"
  }
];

let currentReview = 0;

function renderReview() {
  const r = reviews[currentReview];
  const container = document.getElementById("reviewContainer");

  container.innerHTML = `
    <div class="fade-review animate-fade border-2 border-pink-400 rounded-xl shadow-md p-5 hover:shadow-lg transition hover:animate-pulse">
      <img src="${r.image}" class="w-32 h-28 rounded-full mx-auto mb-4 object-cover" />

      <div class="flex justify-center gap-1 mb-3">
        ${'<i class="fa-solid fa-star text-yellow-400"></i>'.repeat(r.rating)}
      </div>

      <p class="text-gray-700 italic mb-3">"${r.text}"</p>
      <p class="font-semibold">- ${r.name}, ${r.location}</p>
    </div>
  `;
}

document.getElementById("nextReview").onclick = () => {
  currentReview = (currentReview + 1) % reviews.length;
  renderReview();
};

document.getElementById("prevReview").onclick = () => {
  currentReview = (currentReview - 1 + reviews.length) % reviews.length;
  renderReview();
};

renderReview();


