// TOP CATEGORIES DATA
const categories = [
  { title: "Lipsticks", desc: "Vibrant & Bold Color", image: "Assets/images/c1.png" },
  { title: "Skincare", desc: "Hydrating essentials", image: "Assets/images/c2.png" },
  { title: "Eye Makeup", desc: "Shadows & Liners", image: "Assets/images/c3.png" },
  { title: "Hair Care", desc: "Shampoos & Oils", image: "Assets/images/c4.png" },
  { title: "Eye Makeup", desc: "Shadows & Liners", image: "Assets/images/c3.png" },
  { title: "Hair Care", desc: "Shampoos & Oils", image: "Assets/images/c4.png" },
  { title: "Fragrance", desc: "Luxurious Scents", image: "Assets/images/c5.png" },
  { title: "Nails", desc: "Ploish & Manicure", image: "Assets/images/c6.png" }
];

let currentPage = 0;
const itemsPerPage = 4;

// RENDER CATEGORY CARDS
function renderCategories() {
  const container = document.getElementById("categoryContainer");
  container.innerHTML = "";

  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;

  categories.slice(start, end).forEach(cat => {
    container.innerHTML += `
      <div class="border rounded-xl shadow-md p-2 text-center hover:shadow-lg transition">
        <div class="flip-container w-32 h-32 mx-auto">
          <img src="${cat.image}" class="flip-image w-full h-full object-contain" />
        </div>
        
        <h3 class="text-xl font-semibold mt-4">${cat.title}</h3>
        <p class="text-gray-600 text-sm mt-1">${cat.desc}</p>

        <button class="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-gray-800">
          Shop Now
        </button>
      </div>
    `;
  });
  updateArrows();
}

// NEXT & PREV BUTTONS
function setupCategoryButtons() {
  document.getElementById("nextBtn").onclick = () => {
    if ((currentPage + 1) * itemsPerPage < categories.length) {
      currentPage++;
      renderCategories();
    }
  };

  document.getElementById("prevBtn").onclick = () => {
    if (currentPage > 0) {
      currentPage--;
      renderCategories();
    }
  };
}

//Update Arrows
function updateArrows() {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (currentPage === 0) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "flex";
  }
  else if ((currentPage + 1) * itemsPerPage >= categories.length) {
    nextBtn.style.display = "none";
    prevBtn.style.display = "flex";
  }
  else {
    prevBtn.style.display = "flex";
    nextBtn.style.display = "flex";
  }
}

