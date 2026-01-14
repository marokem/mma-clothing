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

// Review Management
let reviews = JSON.parse(localStorage.getItem("productReviews")) || {};

// Wishlist Management
let wishlist = JSON.parse(localStorage.getItem("productWishlist")) || [];

function toggleWishlist(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const index = wishlist.findIndex((item) => item.id === productId);

  if (index > -1) {
    // Remove from wishlist
    wishlist.splice(index, 1);
    showNotification(`${product.name} removed from wishlist`);
  } else {
    // Add to wishlist
    wishlist.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      description: product.description,
      addedDate: new Date().toISOString(),
    });
    showNotification(`${product.name} added to wishlist ❤️`);
  }

  // Save to localStorage
  localStorage.setItem("productWishlist", JSON.stringify(wishlist));

  // Update UI
  updateWishlistButtons();
  updateWishlistCount();
}

function isInWishlist(productId) {
  return wishlist.some((item) => item.id === productId);
}

function updateWishlistButtons() {
  document.querySelectorAll(".wishlist-btn").forEach((btn) => {
    const productId = parseInt(btn.dataset.product);
    const isWishlisted = isInWishlist(productId);

    btn.classList.toggle("active", isWishlisted);
    btn.querySelector("i").className = isWishlisted
      ? "fas fa-heart"
      : "far fa-heart";
  });
}

function updateWishlistCount() {
  const wishlistCount = wishlist.length;
  const wishlistCountElement = document.querySelector(".wishlist-count");
  if (wishlistCountElement) {
    wishlistCountElement.textContent = wishlistCount;
    wishlistCountElement.style.display = wishlistCount > 0 ? "inline" : "none";
  }
}

function openWishlistModal() {
  const modal = document.createElement("div");
  modal.className = "wishlist-modal";
  modal.innerHTML = `
    <div class="wishlist-modal-content">
      <div class="wishlist-header">
        <h3>My Wishlist ❤️</h3>
        <span class="close-wishlist">&times;</span>
      </div>
      <div class="wishlist-body">
        ${
          wishlist.length === 0
            ? `<div class="empty-wishlist">
              <i class="far fa-heart"></i>
              <h4>Your wishlist is empty</h4>
              <p>Add items you love to your wishlist!</p>
              <button class="btn-primary" onclick="this.closest('.wishlist-modal').remove()">Continue Shopping</button>
            </div>`
            : `<div class="wishlist-grid">
              ${wishlist
                .map(
                  (item) => `
                <div class="wishlist-item">
                  <div class="wishlist-item-image">
                    <img src="${item.image}" alt="${item.name}">
                  </div>
                  <div class="wishlist-item-info">
                    <h4>${item.name}</h4>
                    <p class="wishlist-item-price">$${item.price.toFixed(2)}</p>
                    <p class="wishlist-item-description">${item.description}</p>
                    <div class="wishlist-item-rating">
                      <div class="stars">
                        ${renderStarRating(getProductRating(item.id))}
                      </div>
                      <span class="review-count">(${getProductReviewCount(
                        item.id
                      )})</span>
                    </div>
                  </div>
                  <div class="wishlist-item-actions">
                    <button class="btn-primary add-to-cart-wishlist" onclick="addToCart(${
                      item.id
                    }); this.closest('.wishlist-modal').remove()">
                      <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <button class="btn-secondary remove-wishlist" onclick="toggleWishlist(${
                      item.id
                    })">
                      <i class="fas fa-trash"></i> Remove
                    </button>
                  </div>
                </div>
              `
                )
                .join("")}
            </div>`
        }
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Close modal functionality
  modal
    .querySelector(".close-wishlist")
    .addEventListener("click", () => modal.remove());
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
  });
}

function getProductRating(productId) {
  const productReviews = reviews[productId] || [];
  if (productReviews.length === 0) return 0;
  const totalRating = productReviews.reduce(
    (sum, review) => sum + review.rating,
    0
  );
  return totalRating / productReviews.length;
}

function getProductReviewCount(productId) {
  return (reviews[productId] || []).length;
}

function renderStarRating(rating, interactive = false, productId = null) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  let starsHTML = "";

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    starsHTML += interactive
      ? `<i class="fas fa-star" data-rating="${
          i + 1
        }" data-product="${productId}"></i>`
      : '<i class="fas fa-star"></i>';
  }

  // Half star
  if (hasHalfStar) {
    starsHTML += interactive
      ? `<i class="fas fa-star-half-alt" data-rating="${
          fullStars + 1
        }" data-product="${productId}"></i>`
      : '<i class="fas fa-star-half-alt"></i>';
  }

  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += interactive
      ? `<i class="far fa-star" data-rating="${
          fullStars + hasHalfStar + i + 1
        }" data-product="${productId}"></i>`
      : '<i class="far fa-star"></i>';
  }

  return starsHTML;
}

function openReviewModal(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const modal = document.createElement("div");
  modal.className = "review-modal";
  modal.innerHTML = `
    <div class="review-modal-content">
      <div class="review-header">
        <h3>Write a Review</h3>
        <span class="close-review">&times;</span>
      </div>
      <div class="review-body">
        <div class="review-product">
          <img src="${product.image}" alt="${
    product.name
  }" class="review-product-image">
          <div class="review-product-info">
            <h4>${product.name}</h4>
            <p>${product.description}</p>
          </div>
        </div>
        <form class="review-form" data-product="${productId}">
          <div class="rating-input">
            <label>Your Rating:</label>
            <div class="star-rating-input">
              ${renderStarRating(0, true, productId)}
            </div>
          </div>
          <div class="form-group">
            <label for="review-name">Name:</label>
            <input type="text" id="review-name" required>
          </div>
          <div class="form-group">
            <label for="review-email">Email:</label>
            <input type="email" id="review-email" required>
          </div>
          <div class="form-group">
            <label for="review-text">Review:</label>
            <textarea id="review-text" rows="4" placeholder="Share your thoughts about this product..." required></textarea>
          </div>
          <button type="submit" class="btn-primary">Submit Review</button>
        </form>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Close modal functionality
  modal
    .querySelector(".close-review")
    .addEventListener("click", () => modal.remove());
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
  });

  // Star rating interaction
  const stars = modal.querySelectorAll(".star-rating-input i");
  let selectedRating = 0;

  stars.forEach((star) => {
    star.addEventListener("click", function () {
      selectedRating = parseInt(this.dataset.rating);
      updateStarDisplay(stars, selectedRating);
    });
  });

  // Form submission
  modal.querySelector(".review-form").addEventListener("submit", function (e) {
    e.preventDefault();

    if (selectedRating === 0) {
      showNotification("Please select a rating");
      return;
    }

    const reviewData = {
      id: Date.now(),
      productId: productId,
      name: this.querySelector("#review-name").value,
      email: this.querySelector("#review-email").value,
      rating: selectedRating,
      text: this.querySelector("#review-text").value,
      date: new Date().toISOString(),
    };

    // Save review
    if (!reviews[productId]) {
      reviews[productId] = [];
    }
    reviews[productId].push(reviewData);
    localStorage.setItem("productReviews", JSON.stringify(reviews));

    modal.remove();
    showNotification("Review submitted successfully!");
    displayProducts(); // Refresh to show updated ratings
  });
}

function updateStarDisplay(stars, rating) {
  stars.forEach((star, index) => {
    if (index < rating) {
      star.className = "fas fa-star";
    } else {
      star.className = "far fa-star";
    }
  });
}

// Order Tracking Management
let orders = JSON.parse(localStorage.getItem("userOrders")) || [];

function openOrderTracking() {
  const modal = document.createElement("div");
  modal.className = "order-tracking-modal";
  modal.innerHTML = `
    <div class="order-tracking-content">
      <div class="order-tracking-header">
        <h3>Track Your Order</h3>
        <span class="close-tracking">&times;</span>
      </div>
      <div class="order-tracking-body">
        <div class="tracking-form">
          <p>Enter your order number to track your package:</p>
          <div class="form-group">
            <input type="text" id="order-number-input" placeholder="e.g., MMA123456789" maxlength="15">
            <button class="btn-primary" onclick="trackOrder()">Track Order</button>
          </div>
        </div>
        <div class="tracking-result" id="tracking-result" style="display: none;">
          <!-- Order tracking result will be displayed here -->
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Focus on input
  setTimeout(() => {
    modal.querySelector("#order-number-input").focus();
  }, 100);

  // Close modal functionality
  modal
    .querySelector(".close-tracking")
    .addEventListener("click", () => modal.remove());
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
  });

  // Enter key support
  modal
    .querySelector("#order-number-input")
    .addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        trackOrder();
      }
    });
}

function trackOrder() {
  const orderNumber = document
    .getElementById("order-number-input")
    .value.trim()
    .toUpperCase();
  const resultDiv = document.getElementById("tracking-result");

  if (!orderNumber) {
    showTrackingResult("Please enter an order number", "error");
    return;
  }

  // Mock order tracking - in real app, this would be an API call
  const mockOrder = generateMockOrder(orderNumber);

  if (mockOrder) {
    displayOrderTracking(mockOrder);
  } else {
    showTrackingResult(
      "Order not found. Please check your order number and try again.",
      "error"
    );
  }
}

function generateMockOrder(orderNumber) {
  // Generate mock order data based on order number
  const orderStatuses = [
    {
      status: "Order Placed",
      description: "Your order has been received and is being processed.",
      date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      completed: true,
    },
    {
      status: "Payment Confirmed",
      description: "Payment has been successfully processed.",
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      completed: true,
    },
    {
      status: "Order Packed",
      description: "Your items have been carefully packed for shipping.",
      date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      completed: true,
    },
    {
      status: "Shipped",
      description: "Your order is on its way!",
      date: new Date(Date.now() - 12 * 60 * 60 * 1000),
      completed: true,
    },
    {
      status: "Out for Delivery",
      description: "Your package is out for delivery and will arrive today.",
      date: new Date(Date.now() - 2 * 60 * 60 * 1000),
      completed: false,
    },
    {
      status: "Delivered",
      description: "Package successfully delivered!",
      date: new Date(),
      completed: false,
    },
  ];

  // Determine how far along the order is (random for demo)
  const progressIndex = Math.floor(Math.random() * orderStatuses.length);
  const currentStatuses = orderStatuses.slice(0, progressIndex + 1);

  return {
    orderNumber: orderNumber,
    orderDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    estimatedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    status: currentStatuses[currentStatuses.length - 1].status,
    statuses: currentStatuses,
    items: [
      {
        name: "Elegant Evening Dress",
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=50&h=50&fit=crop&crop=center",
      },
      {
        name: "Designer Handbag",
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=50&h=50&fit=crop&crop=center",
      },
    ],
    shippingAddress: {
      name: "John Doe",
      address: "123 Fashion Street",
      city: "New York, NY 10001",
    },
  };
}

function displayOrderTracking(order) {
  const resultDiv = document.getElementById("tracking-result");

  const statusHTML = order.statuses
    .map(
      (status, index) => `
    <div class="tracking-step ${
      status.completed
        ? "completed"
        : index === order.statuses.length - 1
        ? "current"
        : ""
    }">
      <div class="step-icon">
        <i class="fas ${getStatusIcon(status.status)}"></i>
      </div>
      <div class="step-content">
        <h4>${status.status}</h4>
        <p>${status.description}</p>
        <span class="step-date">${formatDate(status.date)}</span>
      </div>
    </div>
  `
    )
    .join("");

  resultDiv.innerHTML = `
    <div class="order-details">
      <div class="order-header">
        <h4>Order ${order.orderNumber}</h4>
        <span class="order-status status-${order.status
          .toLowerCase()
          .replace(" ", "-")}">${order.status}</span>
      </div>

      <div class="order-info">
        <div class="info-item">
          <span class="info-label">Order Date:</span>
          <span class="info-value">${formatDate(order.orderDate)}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Estimated Delivery:</span>
          <span class="info-value">${formatDate(order.estimatedDelivery)}</span>
        </div>
      </div>

      <div class="tracking-timeline">
        ${statusHTML}
      </div>

      <div class="order-items">
        <h5>Items in this order:</h5>
        <div class="tracking-items">
          ${order.items
            .map(
              (item) => `
            <div class="tracking-item">
              <img src="${item.image}" alt="${item.name}">
              <span>${item.name} (x${item.quantity})</span>
            </div>
          `
            )
            .join("")}
        </div>
      </div>

      <div class="delivery-info">
        <h5>Delivery Address:</h5>
        <p>${order.shippingAddress.name}<br>
        ${order.shippingAddress.address}<br>
        ${order.shippingAddress.city}</p>
      </div>
    </div>
  `;

  resultDiv.style.display = "block";
}

function showTrackingResult(message, type) {
  const resultDiv = document.getElementById("tracking-result");
  resultDiv.innerHTML = `
    <div class="tracking-message ${type}">
      <i class="fas ${
        type === "error" ? "fa-exclamation-triangle" : "fa-check-circle"
      }"></i>
      <p>${message}</p>
    </div>
  `;
  resultDiv.style.display = "block";
}

function getStatusIcon(status) {
  const icons = {
    "Order Placed": "fa-shopping-cart",
    "Payment Confirmed": "fa-credit-card",
    "Order Packed": "fa-box",
    Shipped: "fa-truck",
    "Out for Delivery": "fa-shipping-fast",
    Delivered: "fa-check-circle",
  };
  return icons[status] || "fa-circle";
}

function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// Theme Management
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Update theme toggle icon
  const themeIcon = document.querySelector(".theme-toggle i");
  if (newTheme === "dark") {
    themeIcon.className = "fas fa-sun";
  } else {
    themeIcon.className = "fas fa-moon";
  }

  showNotification(`Switched to ${newTheme} mode`);
}

// Initialize theme on page load
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  const themeIcon = document.querySelector(".theme-toggle i");
  if (savedTheme === "dark") {
    themeIcon.className = "fas fa-sun";
  } else {
    themeIcon.className = "fas fa-moon";
  }
}

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
  initializeTheme();
  updateWishlistButtons();
  updateWishlistCount();
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
        <div class="product-header">
          <h3>${product.name}</h3>
          <button class="wishlist-btn ${
            isInWishlist(product.id) ? "active" : ""
          }" data-product="${product.id}" onclick="toggleWishlist(${
      product.id
    })">
            <i class="${
              isInWishlist(product.id) ? "fas fa-heart" : "far fa-heart"
            }"></i>
          </button>
        </div>
        <div class="product-rating">
          <div class="stars">
            ${renderStarRating(getProductRating(product.id))}
          </div>
          <span class="review-count">(${getProductReviewCount(
            product.id
          )})</span>
        </div>
        <p class="product-description">${product.description}</p>
        <div class="product-actions">
          <button class="review-btn" onclick="openReviewModal(${product.id})">
            <i class="fas fa-star"></i> Review
          </button>
          <button class="add-to-cart" onclick="addToCart(${product.id})">
            <i class="fas fa-shopping-cart"></i> Add to Cart
          </button>
        </div>
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
      description: product.description,
    });
  }

  updateCartCount();
  showNotification(`${product.name} added to cart!`);

  // Refresh cart display if modal is open
  const modal = document.getElementById("cart-modal");
  if (modal && modal.style.display === "block") {
    displayCartItems();
  }
}

// Update cart count
function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
}

// Toggle cart modal
function toggleCart() {
  const modal = document.getElementById("cart-modal");
  if (modal.style.display === "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
    displayCartItems();
  }
}

// Display cart items
function displayCartItems() {
  const cartItemsContainer = document.querySelector(".cart-items");
  const cartTotalElement = document.getElementById("cart-total");

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart">
        <i class="fas fa-shopping-cart"></i>
        <p>Your cart is empty</p>
        <button class="btn-primary" onclick="toggleCart()">Continue Shopping</button>
      </div>
    `;
    cartTotalElement.textContent = "0.00";
    return;
  }

  cartItemsContainer.innerHTML = cart
    .map(
      (item, index) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-image">
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <p>${item.description}</p>
        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
        <div class="cart-item-quantity">
          <button class="quantity-btn" onclick="updateQuantity(${index}, ${
        item.quantity - 1
      })">-</button>
          <span>${item.quantity}</span>
          <button class="quantity-btn" onclick="updateQuantity(${index}, ${
        item.quantity + 1
      })">+</button>
          <button class="quantity-btn cart-item-remove" onclick="removeFromCart(${index})">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  updateCartTotal();
}

// Update item quantity
function updateQuantity(index, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(index);
    return;
  }

  cart[index].quantity = newQuantity;
  updateCartCount();
  displayCartItems();
}

// Remove item from cart
function removeFromCart(index) {
  const removedItem = cart[index];
  cart.splice(index, 1);
  updateCartCount();
  displayCartItems();
  showNotification(`${removedItem.name} removed from cart`);
}

// Update cart total
function updateCartTotal() {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.getElementById("cart-total").textContent = total.toFixed(2);
}

// Handle checkout
// Close cart when clicking outside
document.addEventListener("click", function (event) {
  const modal = document.getElementById("cart-modal");
  const cartIcon = document.querySelector(".cart-icon");
  const closeBtn = document.querySelector(".close-cart");

  if (event.target === modal) {
    modal.style.display = "none";
  }

  if (closeBtn && event.target === closeBtn) {
    modal.style.display = "none";
  }
});

// Add event listener for checkout button
document.addEventListener("DOMContentLoaded", function () {
  const checkoutBtn = document.querySelector(".checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", handleCheckout);
  }
});

// Checkout functionality
let currentStep = 1;
let checkoutData = {};

function handleCheckout() {
  if (cart.length === 0) {
    showNotification("Your cart is empty!");
    return;
  }

  // Close cart modal and open checkout modal
  document.getElementById("cart-modal").style.display = "none";
  document.getElementById("checkout-modal").style.display = "block";

  // Reset checkout
  currentStep = 1;
  checkoutData = {};
  updateCheckoutProgress();
  showCheckoutStep(1);
}

function updateCheckoutProgress() {
  // Update progress steps
  for (let i = 1; i <= 3; i++) {
    const step = document.getElementById(`step-${i}`);
    if (i <= currentStep) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  }
}

function showCheckoutStep(step) {
  // Hide all steps
  document.querySelectorAll(".checkout-step").forEach((stepEl) => {
    stepEl.classList.remove("active");
  });

  // Show current step
  document
    .getElementById(`${["shipping", "payment", "review"][step - 1]}-step`)
    .classList.add("active");
}

function nextCheckoutStep() {
  if (currentStep < 3) {
    if (validateCurrentStep()) {
      currentStep++;
      updateCheckoutProgress();
      showCheckoutStep(currentStep);

      if (currentStep === 3) {
        populateOrderReview();
      }
    }
  }
}

function prevCheckoutStep() {
  if (currentStep > 1) {
    currentStep--;
    updateCheckoutProgress();
    showCheckoutStep(currentStep);
  }
}

function validateCurrentStep() {
  const currentStepEl = document.querySelector(".checkout-step.active");

  if (currentStep === 1) {
    // Validate shipping form
    const requiredFields = currentStepEl.querySelectorAll("input[required]");
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        field.style.borderColor = "#e74c3c";
        isValid = false;
      } else {
        field.style.borderColor = "#e0e0e0";
      }
    });

    if (!isValid) {
      showNotification("Please fill in all required fields");
    }

    return isValid;
  }

  if (currentStep === 2) {
    // Validate payment form
    const paymentMethod = document.querySelector(".payment-method.active")
      .dataset.method;

    if (paymentMethod === "card") {
      const cardFields = document.querySelectorAll(
        "#card-form input[required]"
      );
      let isValid = true;

      cardFields.forEach((field) => {
        if (!field.value.trim()) {
          field.style.borderColor = "#e74c3c";
          isValid = false;
        } else {
          field.style.borderColor = "#e0e0e0";
        }
      });

      if (!isValid) {
        showNotification("Please fill in all payment fields");
      }

      return isValid;
    }
  }

  return true;
}

function populateOrderReview() {
  // Populate order items
  const reviewItems = document.getElementById("review-items");
  reviewItems.innerHTML = cart
    .map(
      (item) => `
    <div class="review-item">
      <div class="review-item-info">
        <img src="${item.image}" alt="${item.name}" class="review-item-image">
        <div class="review-item-details">
          <h6>${item.name}</h6>
          <p>Quantity: ${item.quantity}</p>
        </div>
      </div>
      <div class="review-item-price">$${(item.price * item.quantity).toFixed(
        2
      )}</div>
    </div>
  `
    )
    .join("");

  // Calculate totals
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  document.getElementById("review-subtotal").textContent = subtotal.toFixed(2);
  document.getElementById("review-shipping").textContent = shipping.toFixed(2);
  document.getElementById("review-tax").textContent = tax.toFixed(2);
  document.getElementById("review-total").textContent = total.toFixed(2);

  // Populate shipping address
  const formData = new FormData(document.getElementById("checkout-form"));
  const address = `
    ${formData.get("firstName")} ${formData.get("lastName")}<br>
    ${formData.get("address")}<br>
    ${formData.get("city")}, ${formData.get("zip")}<br>
    ${
      document.getElementById("country").options[
        document.getElementById("country").selectedIndex
      ].text
    }
  `;
  document.getElementById("review-address").innerHTML = address;
}

function submitOrder(event) {
  event.preventDefault();

  // Simulate order processing
  showNotification("Processing your order...");

  // Here you would typically send the order to a backend
  setTimeout(() => {
    // Generate order number
    const orderNumber = "MMA" + Date.now();

    // Clear cart
    cart = [];
    updateCartCount();

    // Close checkout modal
    document.getElementById("checkout-modal").style.display = "none";

    // Show success message
    showOrderConfirmation(orderNumber);

    // Reset form
    document.getElementById("checkout-form").reset();
    currentStep = 1;
  }, 2000);
}

function showOrderConfirmation(orderNumber) {
  const confirmationModal = document.createElement("div");
  confirmationModal.className = "order-confirmation-modal";
  confirmationModal.innerHTML = `
    <div class="order-confirmation-content">
      <div class="confirmation-header">
        <i class="fas fa-check-circle"></i>
        <h3>Order Confirmed!</h3>
      </div>
      <div class="confirmation-body">
        <p>Thank you for your order! Your order number is:</p>
        <div class="order-number">${orderNumber}</div>
        <p>You will receive a confirmation email shortly with your order details.</p>
        <button class="btn-primary" onclick="this.parentElement.parentElement.parentElement.remove()">Continue Shopping</button>
      </div>
    </div>
  `;

  document.body.appendChild(confirmationModal);

  // Auto remove after 10 seconds
  setTimeout(() => {
    if (confirmationModal.parentNode) {
      confirmationModal.remove();
    }
  }, 10000);
}

// Event listeners for checkout
document.addEventListener("DOMContentLoaded", function () {
  // Next step buttons
  document.querySelectorAll(".next-step-btn").forEach((btn) => {
    btn.addEventListener("click", nextCheckoutStep);
  });

  // Previous step buttons
  document.querySelectorAll(".prev-step-btn").forEach((btn) => {
    btn.addEventListener("click", prevCheckoutStep);
  });

  // Payment method selection
  document.querySelectorAll(".payment-method").forEach((method) => {
    method.addEventListener("click", function () {
      document
        .querySelectorAll(".payment-method")
        .forEach((m) => m.classList.remove("active"));
      this.classList.add("active");

      const methodType = this.dataset.method;
      document
        .querySelectorAll(".payment-form")
        .forEach((form) => form.classList.add("hidden"));
      document.getElementById(`${methodType}-form`).classList.remove("hidden");
    });
  });

  // Close checkout modal
  document
    .querySelector(".close-checkout")
    .addEventListener("click", function () {
      document.getElementById("checkout-modal").style.display = "none";
    });

  // Checkout form submission
  document
    .getElementById("checkout-form")
    .addEventListener("submit", submitOrder);

  // Close checkout on outside click
  document.addEventListener("click", function (event) {
    const modal = document.getElementById("checkout-modal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

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
