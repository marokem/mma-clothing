// Product data
const products = [
  // Dresses
  {
    id: 1,
    name: "Elegant Evening Dress",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop&crop=center",
    category: "dresses",
    description: "Stunning evening dress perfect for special occasions",
  },
  {
    id: 2,
    name: "Floral Maxi Dress",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&h=300&fit=crop&crop=center",
    category: "dresses",
    description: "Flowy floral maxi dress for casual elegance",
  },
  {
    id: 3,
    name: "Little Black Dress",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=300&h=300&fit=crop&crop=center",
    category: "dresses",
    description: "Classic little black dress that never goes out of style",
  },
  {
    id: 4,
    name: "Summer Sundress",
    price: 45.99,
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=300&fit=crop&crop=center",
    category: "dresses",
    description: "Light and breezy sundress for warm weather",
  },
  {
    id: 5,
    name: "Cocktail Dress",
    price: 95.99,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop&crop=center",
    category: "dresses",
    description: "Sophisticated cocktail dress for evening events",
  },

  // Tops
  {
    id: 6,
    name: "Casual Summer Top",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop&crop=center",
    category: "tops",
    description: "Comfortable cotton top perfect for everyday wear",
  },
  {
    id: 7,
    name: "Blouse with Ruffles",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=300&h=300&fit=crop&crop=center",
    category: "tops",
    description: "Elegant ruffled blouse for a feminine touch",
  },
  {
    id: 8,
    name: "Silk Camisole",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=300&fit=crop&crop=center",
    category: "tops",
    description: "Luxurious silk camisole for layering",
  },
  {
    id: 9,
    name: "Graphic Tee",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop&crop=center",
    category: "tops",
    description: "Trendy graphic t-shirt with modern design",
  },
  {
    id: 10,
    name: "Button-Up Shirt",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=300&h=300&fit=crop&crop=center",
    category: "tops",
    description: "Classic button-up shirt for professional look",
  },

  // Bottoms
  {
    id: 11,
    name: "Designer Jeans",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop&crop=center",
    category: "bottoms",
    description: "High-quality designer jeans with perfect fit",
  },
  {
    id: 12,
    name: "High-Waisted Skirt",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1583496661160-fb5886a6aaaa?w=300&h=300&fit=crop&crop=center",
    category: "bottoms",
    description: "Flattering high-waisted skirt for any occasion",
  },
  {
    id: 13,
    name: "Tailored Trousers",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop&crop=center",
    category: "bottoms",
    description: "Professional tailored trousers for work",
  },
  {
    id: 14,
    name: "Denim Shorts",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=300&fit=crop&crop=center",
    category: "bottoms",
    description: "Casual denim shorts for summer days",
  },
  {
    id: 15,
    name: "Leather Pants",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop&crop=center",
    category: "bottoms",
    description: "Edgy leather pants for bold fashion statements",
  },

  // Accessories
  {
    id: 16,
    name: "Silk Scarf",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1601762603332-db5e4b90cc5d?w=300&h=300&fit=crop&crop=center",
    category: "accessories",
    description: "Elegant silk scarf to elevate any outfit",
  },
  {
    id: 17,
    name: "Pearl Necklace",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=300&fit=crop&crop=center",
    category: "accessories",
    description: "Classic pearl necklace for timeless elegance",
  },
  {
    id: 18,
    name: "Designer Handbag",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop&crop=center",
    category: "accessories",
    description: "Luxury designer handbag for special occasions",
  },
  {
    id: 19,
    name: "Gold Earrings",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop&crop=center",
    category: "accessories",
    description: "Beautiful gold earrings to complete your look",
  },
  {
    id: 20,
    name: "Leather Belt",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop&crop=center",
    category: "accessories",
    description: "Stylish leather belt for versatile styling",
  },

  // Outerwear
  {
    id: 21,
    name: "Wool Coat",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=300&h=300&fit=crop&crop=center",
    category: "outerwear",
    description: "Warm wool coat for winter elegance",
  },
  {
    id: 22,
    name: "Denim Jacket",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=300&h=300&fit=crop&crop=center",
    category: "outerwear",
    description: "Classic denim jacket for casual style",
  },
  {
    id: 23,
    name: "Trench Coat",
    price: 119.99,
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=300&h=300&fit=crop&crop=center",
    category: "outerwear",
    description: "Timeless trench coat for sophisticated looks",
  },
  {
    id: 24,
    name: "Bomber Jacket",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=300&h=300&fit=crop&crop=center",
    category: "outerwear",
    description: "Stylish bomber jacket for modern fashion",
  },

  // Shoes
  {
    id: 25,
    name: "High Heels",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&h=300&fit=crop&crop=center",
    category: "shoes",
    description: "Elegant high heels for special occasions",
  },
  {
    id: 26,
    name: "Sneakers",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop&crop=center",
    category: "shoes",
    description: "Comfortable sneakers for everyday wear",
  },
  {
    id: 27,
    name: "Ankle Boots",
    price: 109.99,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&h=300&fit=crop&crop=center",
    category: "shoes",
    description: "Stylish ankle boots for versatile styling",
  },
  {
    id: 28,
    name: "Sandals",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop&crop=center",
    category: "shoes",
    description: "Comfortable sandals for warm weather",
  },
];

let cart = [];
let currentFilter = "all";
let searchQuery = "";
let productsPerPage = 12;
let currentPage = 1;

// DOM Elements
const productGrid = document.getElementById("product-grid");
const cartCount = document.querySelector(".cart-count");
const contactForm = document.querySelector(".contact-form");
const filterButtons = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("product-search");
const loadMoreBtn = document.getElementById("load-more-btn");

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded, initializing...");
  console.log("Products array length:", products.length);
  displayProducts();
  setupSmoothScrolling();
  setupContactForm();
  setupHeaderScrollEffect();
  setupProductFilters();
  setupSearch();
  setupLoadMore();
  console.log("Initialization complete");
});

// Display products with filtering and pagination
function displayProducts(resetPage = true) {
  console.log("displayProducts called with resetPage:", resetPage);
  if (resetPage) {
    currentPage = 1;
  }

  // Filter products based on category and search
  let filteredProducts = products.filter((product) => {
    const matchesCategory =
      currentFilter === "all" || product.category === currentFilter;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  console.log(
    "Filtered products:",
    filteredProducts.length,
    "out of",
    products.length
  );

  // Calculate pagination
  const totalProducts = filteredProducts.length;
  const startIndex = 0;
  const endIndex = currentPage * productsPerPage;
  const productsToShow = filteredProducts.slice(startIndex, endIndex);

  // Clear and populate grid
  productGrid.innerHTML = "";

  if (productsToShow.length === 0) {
    productGrid.innerHTML = `
      <div class="no-products">
        <i class="fas fa-search"></i>
        <h3>No products found</h3>
        <p>Try adjusting your search or filter criteria</p>
      </div>
    `;
    loadMoreBtn.style.display = "none";
    return;
  }

  productsToShow.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="placeholder-image" data-text="${
          product.name
        }" style="display: none;"></div>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <button class="add-to-cart" onclick="addToCart(${product.id})">
          <i class="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
    `;
    productGrid.appendChild(productCard);
  });

  // Show/hide load more button
  loadMoreBtn.style.display =
    endIndex < totalProducts ? "inline-block" : "none";
}

// Add to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  }

  updateCartCount();
  showNotification(`${product.name} added to cart!`);
}

// Update cart count
function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
}

// Show notification
function showNotification(message) {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.textContent = message;
  document.body.appendChild(notification);

  // Style the notification
  Object.assign(notification.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    background: "#e91e63",
    color: "white",
    padding: "15px 20px",
    borderRadius: "5px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
    zIndex: "1000",
    opacity: "0",
    transform: "translateX(100%)",
    transition: "all 0.3s ease",
  });

  // Animate in
  setTimeout(() => {
    notification.style.opacity = "1";
    notification.style.transform = "translateX(0)";
  }, 100);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.opacity = "0";
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Smooth scrolling for navigation
function setupSmoothScrolling() {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      const headerHeight = document.querySelector("header").offsetHeight;
      const targetPosition = targetSection.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });
}

// Contact form handling
function setupContactForm() {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Simulate form submission
    showNotification("Thank you for your message! We'll get back to you soon.");
    this.reset();
  });
}

// Add some animation on scroll
function setupHeaderScrollEffect() {
  const header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  const scrollPosition = window.pageYOffset + window.innerHeight;

  sections.forEach((section) => {
    if (scrollPosition > section.offsetTop + 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
});

// Initialize section animations
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    if (section.id !== "home") {
      section.style.opacity = "0";
      section.style.transform = "translateY(20px)";
      section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    }
  });
});

// Setup product filters
function setupProductFilters() {
  console.log("Setting up product filters...");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Filter button clicked:", button.dataset.filter);
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      // Update current filter
      currentFilter = button.dataset.filter;
      searchQuery = ""; // Reset search when filtering
      searchInput.value = ""; // Clear search input

      // Display filtered products
      displayProducts();
    });
  });
  console.log("Product filters setup complete");
}

// Setup search functionality
function setupSearch() {
  console.log("Setting up search...");
  let searchTimeout;

  searchInput.addEventListener("input", (e) => {
    console.log("Search input event:", e.target.value);
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      searchQuery = e.target.value.trim();
      console.log("Search query set to:", searchQuery);
      displayProducts();
    }, 300); // Debounce search
  });
  console.log("Search setup complete");
}

// Setup load more functionality
function setupLoadMore() {
  loadMoreBtn.addEventListener("click", () => {
    currentPage++;
    displayProducts(false); // Don't reset page
  });
}

// Enhanced add to cart with better feedback
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  }

  updateCartCount();

  // Enhanced notification with product image
  showNotification(`${product.name} added to cart!`, product.image);
}

// Enhanced notification with image
function showNotification(message, imageUrl = null) {
  const notification = document.createElement("div");
  notification.className = "notification enhanced";

  notification.innerHTML = `
    <div class="notification-content">
      ${
        imageUrl
          ? `<img src="${imageUrl}" alt="Product" class="notification-image">`
          : ""
      }
      <span>${message}</span>
    </div>
  `;

  document.body.appendChild(notification);

  // Enhanced styling
  Object.assign(notification.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
    padding: "15px 20px",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    zIndex: "10000",
    transform: "translateX(100%)",
    transition: "transform 0.3s ease",
    maxWidth: "300px",
    cursor: "pointer",
  });

  // Slide in animation
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Auto remove after 4 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 4000);

  // Click to dismiss
  notification.addEventListener("click", () => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  });
}
