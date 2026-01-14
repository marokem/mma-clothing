/**
 * MMA Clothing E-Commerce Website
 * Main JavaScript file with organized sections for better maintainability
 * Author: Maroke
 * Date: January 2026
 */

// =============================================================================
// CONFIGURATION & CONSTANTS
// =============================================================================

const CONFIG = {
  productsPerPage: 12,
  animationDuration: 300,
  maxOrderNumberLength: 15,
  notificationTimeout: 3000
};

// =============================================================================
// DATA MANAGEMENT
// =============================================================================

/**
 * Product catalog data
 * Contains all available products with categories, pricing, and images
 */
const products = [
  // Dresses Category
  {
    id: 1,
    name: "Elegant Evening Dress",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop&crop=center",
    category: "dresses",
    description: "Stunning evening dress perfect for special occasions"
  },
  {
    id: 2,
    name: "Floral Maxi Dress",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&h=300&fit=crop&crop=center",
    category: "dresses",
    description: "Flowy floral maxi dress for casual elegance"
  },
  {
    id: 3,
    name: "Little Black Dress",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=300&h=300&fit=crop&crop=center",
    category: "dresses",
    description: "Classic little black dress that never goes out of style"
  },
  {
    id: 4,
    name: "Summer Sundress",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=300&fit=crop&crop=center",
    category: "dresses",
    description: "Light and breezy sundress for warm weather"
  },
  {
    id: 5,
    name: "Cocktail Dress",
    price: 95.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop&crop=center",
    category: "dresses",
    description: "Sophisticated cocktail dress for evening events"
  },

  // Tops Category
  {
    id: 6,
    name: "Casual Summer Top",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop&crop=center",
    category: "tops",
    description: "Comfortable cotton top perfect for everyday wear"
  },
  {
    id: 7,
    name: "Blouse with Ruffles",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=300&h=300&fit=crop&crop=center",
    category: "tops",
    description: "Elegant ruffled blouse for a feminine touch"
  },
  {
    id: 8,
    name: "Silk Camisole",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=300&fit=crop&crop=center",
    category: "tops",
    description: "Luxurious silk camisole for layering"
  },
  {
    id: 9,
    name: "Graphic Tee",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop&crop=center",
    category: "tops",
    description: "Trendy graphic t-shirt with modern design"
  },
  {
    id: 10,
    name: "Button-Up Shirt",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=300&h=300&fit=crop&crop=center",
    category: "tops",
    description: "Classic button-up shirt for professional look"
  },

  // Bottoms Category
  {
    id: 11,
    name: "Designer Jeans",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop&crop=center",
    category: "bottoms",
    description: "Premium designer jeans with perfect fit"
  },
  {
    id: 12,
    name: "High-Waisted Pants",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop&crop=center",
    category: "bottoms",
    description: "Stylish high-waisted pants for modern look"
  },
  {
    id: 13,
    name: "Pleated Skirt",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a6aaaa?w=300&h=300&fit=crop&crop=center",
    category: "bottoms",
    description: "Elegant pleated skirt for versatile styling"
  },
  {
    id: 14,
    name: "Cargo Pants",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=300&fit=crop&crop=center",
    category: "bottoms",
    description: "Functional cargo pants with multiple pockets"
  },
  {
    id: 15,
    name: "Tailored Shorts",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=300&h=300&fit=crop&crop=center",
    category: "bottoms",
    description: "Professional tailored shorts for smart casual"
  },

  // Accessories Category
  {
    id: 16,
    name: "Designer Handbag",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop&crop=center",
    category: "accessories",
    description: "Luxury designer handbag with premium materials"
  },
  {
    id: 17,
    name: "Statement Earrings",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop&crop=center",
    category: "accessories",
    description: "Bold statement earrings to elevate any outfit"
  },
  {
    id: 18,
    name: "Silk Scarf",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=300&h=300&fit=crop&crop=center",
    category: "accessories",
    description: "Elegant silk scarf for sophisticated styling"
  },
  {
    id: 19,
    name: "Leather Belt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop&crop=center",
    category: "accessories",
    description: "Genuine leather belt with classic buckle"
  },
  {
    id: 20,
    name: "Sunglasses",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop&crop=center",
    category: "accessories",
    description: "Designer sunglasses with UV protection"
  }
];

// =============================================================================
// STATE MANAGEMENT
// =============================================================================

/**
 * Global state variables for application functionality
 */
let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
let reviews = JSON.parse(localStorage.getItem("productReviews")) || {};
let wishlist = JSON.parse(localStorage.getItem("productWishlist")) || [];
let orders = JSON.parse(localStorage.getItem("userOrders")) || [];
let searchQuery = "";
let currentPage = 1;

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Format currency values for display
 * @param {number} amount - The amount to format
 * @returns {string} Formatted currency string
 */
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}

/**
 * Format date for display
 * @param {Date} date - Date object to format
 * @returns {string} Formatted date string
 */
function formatDate(date) {
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

/**
 * Show notification to user
 * @param {string} message - Message to display
 * @param {string} type - Type of notification (success, error, info)
 */
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notification => notification.remove());

  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-triangle' : 'fa-info-circle'}"></i>
    <span>${message}</span>
  `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => notification.classList.add('show'), 10);

  // Auto remove after timeout
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, CONFIG.notificationTimeout);
}

/**
 * Save data to localStorage
 * @param {string} key - Storage key
 * @param {*} data - Data to store
 */
function saveToStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
}

/**
 * Load data from localStorage
 * @param {string} key - Storage key
 * @param {*} defaultValue - Default value if key doesn't exist
 * @returns {*} Retrieved data or default value
 */
function loadFromStorage(key, defaultValue = null) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return defaultValue;
  }
}

// =============================================================================
// THEME MANAGEMENT
// =============================================================================

/**
 * Toggle between light and dark themes
 */
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', newTheme);
  saveToStorage('theme', newTheme);

  // Update theme toggle icon
  const themeIcon = document.querySelector('.theme-toggle i');
  if (themeIcon) {
    themeIcon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }

  showNotification(`Switched to ${newTheme} mode`);
}

/**
 * Initialize theme on page load
 */
function initializeTheme() {
  const savedTheme = loadFromStorage('theme', 'light');
  document.documentElement.setAttribute('data-theme', savedTheme);

  const themeIcon = document.querySelector('.theme-toggle i');
  if (themeIcon) {
    themeIcon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

// =============================================================================
// PRODUCT DISPLAY & FILTERING
// =============================================================================

/**
 * Get filtered products based on current search and category filters
 * @returns {Array} Filtered products array
 */
function getFilteredProducts() {
  let filtered = products;

  // Apply search filter
  if (searchQuery) {
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Apply category filter
  const activeCategory = document.querySelector('.category-filter.active');
  if (activeCategory && activeCategory.dataset.category !== 'all') {
    filtered = filtered.filter(product => product.category === activeCategory.dataset.category);
  }

  return filtered;
}

/**
 * Render products grid with pagination
 */
function renderProducts() {
  const filteredProducts = getFilteredProducts();
  const startIndex = (currentPage - 1) * CONFIG.productsPerPage;
  const endIndex = startIndex + CONFIG.productsPerPage;
  const productsToShow = filteredProducts.slice(startIndex, endIndex);

  const productsGrid = document.getElementById('products-grid');
  if (!productsGrid) return;

  if (productsToShow.length === 0) {
    productsGrid.innerHTML = `
      <div class="no-products">
        <i class="fas fa-search"></i>
        <h3>No products found</h3>
        <p>Try adjusting your search or filters</p>
      </div>
    `;
  } else {
    productsGrid.innerHTML = productsToShow.map(product => `
      <div class="product-card" data-id="${product.id}">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <div class="product-actions">
            <button class="wishlist-btn ${wishlist.some(item => item.id === product.id) ? 'active' : ''}"
                    onclick="toggleWishlist(${product.id})">
              <i class="fas fa-heart"></i>
            </button>
            <button class="quick-view-btn" onclick="openProductModal(${product.id})">
              <i class="fas fa-eye"></i>
            </button>
          </div>
          <div class="product-badge">New</div>
        </div>
        <div class="product-info">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-description">${product.description}</p>
          <div class="product-rating">
            ${renderStarRating(product.id)}
          </div>
          <div class="product-price">
            <span class="price">${formatCurrency(product.price)}</span>
          </div>
          <button class="btn-primary add-to-cart-btn" onclick="addToCart(${product.id})">
            <i class="fas fa-cart-plus"></i> Add to Cart
          </button>
        </div>
      </div>
    `).join('');
  }

  renderPagination(filteredProducts.length);
}

/**
 * Render pagination controls
 * @param {number} totalProducts - Total number of products
 */
function renderPagination(totalProducts) {
  const totalPages = Math.ceil(totalProducts / CONFIG.productsPerPage);
  const paginationContainer = document.getElementById('pagination');

  if (!paginationContainer || totalPages <= 1) {
    if (paginationContainer) paginationContainer.innerHTML = '';
    return;
  }

  let paginationHTML = '';

  // Previous button
  paginationHTML += `
    <button class="page-btn" onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
      <i class="fas fa-chevron-left"></i>
    </button>
  `;

  // Page numbers
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 2);

  if (startPage > 1) {
    paginationHTML += `<button class="page-btn" onclick="changePage(1)">1</button>`;
    if (startPage > 2) {
      paginationHTML += `<span class="pagination-dots">...</span>`;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    paginationHTML += `
      <button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">
        ${i}
      </button>
    `;
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      paginationHTML += `<span class="pagination-dots">...</span>`;
    }
    paginationHTML += `<button class="page-btn" onclick="changePage(${totalPages})">${totalPages}</button>`;
  }

  // Next button
  paginationHTML += `
    <button class="page-btn" onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
      <i class="fas fa-chevron-right"></i>
    </button>
  `;

  paginationContainer.innerHTML = paginationHTML;
}

/**
 * Change current page
 * @param {number} page - Page number to navigate to
 */
function changePage(page) {
  const filteredProducts = getFilteredProducts();
  const totalPages = Math.ceil(filteredProducts.length / CONFIG.productsPerPage);

  if (page < 1 || page > totalPages) return;

  currentPage = page;
  renderProducts();

  // Scroll to top of products
  document.getElementById('products-grid').scrollIntoView({ behavior: 'smooth' });
}

/**
 * Filter products by category
 * @param {string} category - Category to filter by
 */
function filterByCategory(category) {
  // Update active category button
  document.querySelectorAll('.category-filter').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-category="${category}"]`).classList.add('active');

  currentPage = 1;
  renderProducts();
}

/**
 * Search products
 * @param {string} query - Search query
 */
function searchProducts(query) {
  searchQuery = query.trim();
  currentPage = 1;
  renderProducts();
}

// =============================================================================
// SHOPPING CART MANAGEMENT
// =============================================================================

/**
 * Add product to cart
 * @param {number} productId - ID of product to add
 */
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  saveToStorage('shoppingCart', cart);
  updateCartCount();
  showNotification(`${product.name} added to cart`);
}

/**
 * Update cart item count display
 */
function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  if (cartCount) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
  }
}

/**
 * Toggle cart modal visibility
 */
function toggleCart() {
  const cartModal = document.getElementById('cart-modal');
  if (cartModal) {
    cartModal.classList.toggle('active');
    if (cartModal.classList.contains('active')) {
      renderCartItems();
    }
  }
}

/**
 * Render cart items in modal
 */
function renderCartItems() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  if (!cartItems || !cartTotal) return;

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <i class="fas fa-shopping-cart"></i>
        <h3>Your cart is empty</h3>
        <p>Add some products to get started!</p>
      </div>
    `;
    cartTotal.textContent = formatCurrency(0);
    return;
  }

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-image">
      <div class="cart-item-details">
        <h4 class="cart-item-name">${item.name}</h4>
        <div class="cart-item-price">${formatCurrency(item.price)}</div>
        <div class="cart-item-quantity">
          <button onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
          <span>${item.quantity}</span>
          <button onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  `).join('');

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  cartTotal.textContent = formatCurrency(total);
}

/**
 * Update cart item quantity
 * @param {number} productId - Product ID
 * @param {number} newQuantity - New quantity value
 */
function updateCartQuantity(productId, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(productId);
    return;
  }

  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity = newQuantity;
    saveToStorage('shoppingCart', cart);
    renderCartItems();
    updateCartCount();
  }
}

/**
 * Remove item from cart
 * @param {number} productId - Product ID to remove
 */
function removeFromCart(productId) {
  const itemIndex = cart.findIndex(item => item.id === productId);
  if (itemIndex > -1) {
    const item = cart[itemIndex];
    cart.splice(itemIndex, 1);
    saveToStorage('shoppingCart', cart);
    renderCartItems();
    updateCartCount();
    showNotification(`${item.name} removed from cart`);
  }
}

/**
 * Clear entire cart
 */
function clearCart() {
  cart = [];
  saveToStorage('shoppingCart', cart);
  renderCartItems();
  updateCartCount();
  showNotification('Cart cleared');
}

// =============================================================================
// CHECKOUT SYSTEM
// =============================================================================

/**
 * Open checkout modal
 */
function openCheckout() {
  if (cart.length === 0) {
    showNotification('Your cart is empty', 'error');
    return;
  }

  const checkoutModal = document.createElement('div');
  checkoutModal.className = 'checkout-modal';
  checkoutModal.innerHTML = `
    <div class="checkout-content">
      <div class="checkout-header">
        <h3>Checkout</h3>
        <span class="close-checkout">&times;</span>
      </div>
      <div class="checkout-body">
        <div class="checkout-summary">
          <h4>Order Summary</h4>
          <div id="checkout-items"></div>
          <div class="checkout-total">
            <span>Total: <strong id="checkout-total-amount"></strong></span>
          </div>
        </div>
        <form class="checkout-form" id="checkout-form">
          <h4>Shipping Information</h4>
          <div class="form-row">
            <div class="form-group">
              <label for="first-name">First Name *</label>
              <input type="text" id="first-name" required>
            </div>
            <div class="form-group">
              <label for="last-name">Last Name *</label>
              <input type="text" id="last-name" required>
            </div>
          </div>
          <div class="form-group">
            <label for="email">Email Address *</label>
            <input type="email" id="email" required>
          </div>
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone">
          </div>
          <div class="form-group">
            <label for="address">Street Address *</label>
            <input type="text" id="address" required>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="city">City *</label>
              <input type="text" id="city" required>
            </div>
            <div class="form-group">
              <label for="zip">ZIP Code *</label>
              <input type="text" id="zip" required>
            </div>
          </div>
          <div class="form-group">
            <label for="country">Country *</label>
            <select id="country" required>
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
            </select>
          </div>

          <h4>Payment Information</h4>
          <div class="form-group">
            <label for="card-number">Card Number *</label>
            <input type="text" id="card-number" placeholder="1234 5678 9012 3456" required>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="expiry">Expiry Date *</label>
              <input type="text" id="expiry" placeholder="MM/YY" required>
            </div>
            <div class="form-group">
              <label for="cvv">CVV *</label>
              <input type="text" id="cvv" placeholder="123" required>
            </div>
          </div>

          <div class="checkout-actions">
            <button type="button" class="btn-secondary" onclick="closeCheckout()">Cancel</button>
            <button type="submit" class="btn-primary">Place Order</button>
          </div>
        </form>
      </div>
    </div>
  `;

  document.body.appendChild(checkoutModal);

  // Render checkout items
  renderCheckoutItems();

  // Close modal functionality
  checkoutModal.querySelector('.close-checkout').addEventListener('click', closeCheckout);
  checkoutModal.addEventListener('click', (e) => {
    if (e.target === checkoutModal) closeCheckout();
  });

  // Form submission
  checkoutModal.querySelector('#checkout-form').addEventListener('submit', handleCheckoutSubmit);
}

/**
 * Render checkout items summary
 */
function renderCheckoutItems() {
  const checkoutItems = document.getElementById('checkout-items');
  const checkoutTotal = document.getElementById('checkout-total-amount');

  if (!checkoutItems || !checkoutTotal) return;

  checkoutItems.innerHTML = cart.map(item => `
    <div class="checkout-item">
      <img src="${item.image}" alt="${item.name}">
      <div class="checkout-item-details">
        <h5>${item.name}</h5>
        <span>${formatCurrency(item.price)} × ${item.quantity}</span>
      </div>
      <div class="checkout-item-total">${formatCurrency(item.price * item.quantity)}</div>
    </div>
  `).join('');

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  checkoutTotal.textContent = formatCurrency(total);
}

/**
 * Handle checkout form submission
 * @param {Event} e - Form submit event
 */
function handleCheckoutSubmit(e) {
  e.preventDefault();

  // Get form data
  const formData = {
    firstName: document.getElementById('first-name').value,
    lastName: document.getElementById('last-name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    address: document.getElementById('address').value,
    city: document.getElementById('city').value,
    zip: document.getElementById('zip').value,
    country: document.getElementById('country').value,
    cardNumber: document.getElementById('card-number').value,
    expiry: document.getElementById('expiry').value,
    cvv: document.getElementById('cvv').value
  };

  // Basic validation
  if (!formData.firstName || !formData.lastName || !formData.email || !formData.address || !formData.city || !formData.zip || !formData.country) {
    showNotification('Please fill in all required fields', 'error');
    return;
  }

  // Process order
  processOrder(formData);
}

/**
 * Process the order and show confirmation
 * @param {Object} formData - Customer and payment information
 */
function processOrder(formData) {
  // Generate order number
  const orderNumber = 'MMA' + Date.now().toString().slice(-9);

  // Create order object
  const order = {
    orderNumber,
    date: new Date(),
    items: [...cart],
    customer: {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      address: {
        street: formData.address,
        city: formData.city,
        zip: formData.zip,
        country: formData.country
      }
    },
    total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
    status: 'confirmed'
  };

  // Save order
  orders.push(order);
  saveToStorage('userOrders', orders);

  // Clear cart
  cart = [];
  saveToStorage('shoppingCart', cart);
  updateCartCount();

  // Close checkout modal
  closeCheckout();

  // Show order confirmation
  showOrderConfirmation(order);
}

/**
 * Close checkout modal
 */
function closeCheckout() {
  const checkoutModal = document.querySelector('.checkout-modal');
  if (checkoutModal) {
    checkoutModal.remove();
  }
}

/**
 * Show order confirmation modal
 * @param {Object} order - Order details
 */
function showOrderConfirmation(order) {
  const confirmationModal = document.createElement('div');
  confirmationModal.className = 'order-confirmation-modal';
  confirmationModal.innerHTML = `
    <div class="order-confirmation-content">
      <div class="confirmation-header">
        <i class="fas fa-check-circle"></i>
        <h3>Order Confirmed!</h3>
        <p>Thank you for your purchase</p>
      </div>
      <div class="confirmation-details">
        <div class="confirmation-item">
          <span class="label">Order Number:</span>
          <span class="value">${order.orderNumber}</span>
        </div>
        <div class="confirmation-item">
          <span class="label">Total Amount:</span>
          <span class="value">${formatCurrency(order.total)}</span>
        </div>
        <div class="confirmation-item">
          <span class="label">Estimated Delivery:</span>
          <span class="value">${formatDate(new Date(Date.now() + 5 * 24 * 60 * 60 * 1000))}</span>
        </div>
      </div>
      <div class="confirmation-actions">
        <button class="btn-secondary" onclick="closeOrderConfirmation()">Continue Shopping</button>
        <button class="btn-primary" onclick="openOrderTracking()">Track Order</button>
      </div>
    </div>
  `;

  document.body.appendChild(confirmationModal);

  // Auto close after 10 seconds
  setTimeout(() => {
    closeOrderConfirmation();
  }, 10000);
}

/**
 * Close order confirmation modal
 */
function closeOrderConfirmation() {
  const confirmationModal = document.querySelector('.order-confirmation-modal');
  if (confirmationModal) {
    confirmationModal.remove();
  }
}

// =============================================================================
// REVIEW SYSTEM
// =============================================================================

/**
 * Render star rating for a product
 * @param {number} productId - Product ID
 * @returns {string} HTML string for star rating
 */
function renderStarRating(productId) {
  const productReviews = reviews[productId] || [];
  const averageRating = productReviews.length > 0
    ? productReviews.reduce((sum, review) => sum + review.rating, 0) / productReviews.length
    : 0;

  const fullStars = Math.floor(averageRating);
  const hasHalfStar = averageRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  let starsHTML = '';

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fas fa-star"></i>';
  }

  // Half star
  if (hasHalfStar) {
    starsHTML += '<i class="fas fa-star-half-alt"></i>';
  }

  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i class="far fa-star"></i>';
  }

  return `
    <div class="stars" onclick="openReviewModal(${productId})">
      ${starsHTML}
      <span class="rating-count">(${productReviews.length})</span>
    </div>
  `;
}

/**
 * Open review modal for a product
 * @param {number} productId - Product ID
 */
function openReviewModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.createElement('div');
  modal.className = 'review-modal';
  modal.innerHTML = `
    <div class="review-modal-content">
      <div class="review-modal-header">
        <h3>Reviews for ${product.name}</h3>
        <span class="close-review">&times;</span>
      </div>
      <div class="review-modal-body">
        <div class="review-form">
          <h4>Write a Review</h4>
          <div class="rating-input">
            <span>Your Rating:</span>
            <div class="stars-input">
              ${[1, 2, 3, 4, 5].map(num => `
                <i class="far fa-star" data-rating="${num}" onclick="setRating(${num})"></i>
              `).join('')}
            </div>
          </div>
          <textarea id="review-text" placeholder="Share your thoughts about this product..." rows="4"></textarea>
          <button class="btn-primary" onclick="submitReview(${productId})">Submit Review</button>
        </div>
        <div class="reviews-list" id="reviews-list">
          <!-- Reviews will be loaded here -->
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Load existing reviews
  loadReviews(productId);

  // Close modal functionality
  modal.querySelector('.close-review').addEventListener('click', () => modal.remove());
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
}

/**
 * Set rating in review form
 * @param {number} rating - Rating value (1-5)
 */
function setRating(rating) {
  const stars = document.querySelectorAll('.stars-input i');
  stars.forEach((star, index) => {
    if (index < rating) {
      star.className = 'fas fa-star';
    } else {
      star.className = 'far fa-star';
    }
  });

  // Store rating for submission
  document.querySelector('.stars-input').dataset.selectedRating = rating;
}

/**
 * Submit a new review
 * @param {number} productId - Product ID
 */
function submitReview(productId) {
  const rating = document.querySelector('.stars-input').dataset.selectedRating;
  const reviewText = document.getElementById('review-text').value.trim();

  if (!rating) {
    showNotification('Please select a rating', 'error');
    return;
  }

  if (!reviewText) {
    showNotification('Please write a review', 'error');
    return;
  }

  // Initialize reviews array for product if it doesn't exist
  if (!reviews[productId]) {
    reviews[productId] = [];
  }

  // Add new review
  reviews[productId].push({
    id: Date.now(),
    rating: parseInt(rating),
    text: reviewText,
    date: new Date().toISOString(),
    author: 'Anonymous' // In a real app, this would be the logged-in user
  });

  // Save to localStorage
  saveToStorage('productReviews', reviews);

  // Clear form
  document.getElementById('review-text').value = '';
  setRating(0);

  // Reload reviews
  loadReviews(productId);

  // Update product display
  renderProducts();

  showNotification('Review submitted successfully');
}

/**
 * Load and display reviews for a product
 * @param {number} productId - Product ID
 */
function loadReviews(productId) {
  const reviewsList = document.getElementById('reviews-list');
  if (!reviewsList) return;

  const productReviews = reviews[productId] || [];

  if (productReviews.length === 0) {
    reviewsList.innerHTML = '<p class="no-reviews">No reviews yet. Be the first to review this product!</p>';
    return;
  }

  reviewsList.innerHTML = productReviews.map(review => `
    <div class="review-item">
      <div class="review-header">
        <div class="review-rating">
          ${[1, 2, 3, 4, 5].map(num => `
            <i class="${num <= review.rating ? 'fas' : 'far'} fa-star"></i>
          `).join('')}
        </div>
        <div class="review-date">${formatDate(new Date(review.date))}</div>
      </div>
      <div class="review-author">${review.author}</div>
      <div class="review-text">${review.text}</div>
    </div>
  `).join('');
}

// =============================================================================
// WISHLIST MANAGEMENT
// =============================================================================

/**
 * Toggle product in wishlist
 * @param {number} productId - Product ID
 */
function toggleWishlist(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const index = wishlist.findIndex(item => item.id === productId);

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
      addedDate: new Date().toISOString()
    });
    showNotification(`${product.name} added to wishlist`);
  }

  saveToStorage('productWishlist', wishlist);
  renderProducts(); // Update wishlist buttons
}

/**
 * Open wishlist modal
 */
function openWishlistModal() {
  const modal = document.createElement('div');
  modal.className = 'wishlist-modal';
  modal.innerHTML = `
    <div class="wishlist-modal-content">
      <div class="wishlist-modal-header">
        <h3>My Wishlist</h3>
        <span class="close-wishlist">&times;</span>
      </div>
      <div class="wishlist-modal-body">
        <div class="wishlist-stats">
          <span>${wishlist.length} items in wishlist</span>
        </div>
        <div class="wishlist-items" id="wishlist-items">
          <!-- Wishlist items will be loaded here -->
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Load wishlist items
  renderWishlistItems();

  // Close modal functionality
  modal.querySelector('.close-wishlist').addEventListener('click', () => modal.remove());
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
}

/**
 * Render wishlist items
 */
function renderWishlistItems() {
  const wishlistItems = document.getElementById('wishlist-items');

  if (!wishlistItems) return;

  if (wishlist.length === 0) {
    wishlistItems.innerHTML = `
      <div class="empty-wishlist">
        <i class="fas fa-heart"></i>
        <h3>Your wishlist is empty</h3>
        <p>Add items you love to your wishlist!</p>
      </div>
    `;
    return;
  }

  wishlistItems.innerHTML = wishlist.map(item => `
    <div class="wishlist-item">
      <img src="${item.image}" alt="${item.name}" class="wishlist-item-image">
      <div class="wishlist-item-details">
        <h4 class="wishlist-item-name">${item.name}</h4>
        <p class="wishlist-item-description">${item.description}</p>
        <div class="wishlist-item-price">${formatCurrency(item.price)}</div>
        <div class="wishlist-item-rating">
          ${renderStarRating(item.id)}
        </div>
      </div>
      <div class="wishlist-item-actions">
        <button class="btn-primary" onclick="addToCart(${item.id}); toggleWishlist(${item.id})">
          <i class="fas fa-cart-plus"></i> Add to Cart
        </button>
        <button class="btn-secondary remove-wishlist" onclick="toggleWishlist(${item.id})">
          <i class="fas fa-trash"></i> Remove
        </button>
      </div>
    </div>
  `).join('');
}

// =============================================================================
// ORDER TRACKING SYSTEM
// =============================================================================

/**
 * Open order tracking modal
 */
function openOrderTracking() {
  const modal = document.createElement('div');
  modal.className = 'order-tracking-modal';
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
    modal.querySelector('#order-number-input').focus();
  }, 100);

  // Close modal functionality
  modal.querySelector('.close-tracking').addEventListener('click', () => modal.remove());
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });

  // Enter key support
  modal.querySelector('#order-number-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      trackOrder();
    }
  });
}

/**
 * Track order by order number
 */
function trackOrder() {
  const orderNumber = document.getElementById('order-number-input').value.trim().toUpperCase();
  const resultDiv = document.getElementById('tracking-result');

  if (!orderNumber) {
    showTrackingResult('Please enter an order number', 'error');
    return;
  }

  // Mock order tracking - in real app, this would be an API call
  const mockOrder = generateMockOrder(orderNumber);

  if (mockOrder) {
    displayOrderTracking(mockOrder);
  } else {
    showTrackingResult('Order not found. Please check your order number and try again.', 'error');
  }
}

/**
 * Generate mock order data for tracking
 * @param {string} orderNumber - Order number to generate data for
 * @returns {Object|null} Mock order data or null if not found
 */
function generateMockOrder(orderNumber) {
  // Generate mock order data based on order number
  const orderStatuses = [
    { status: 'Order Placed', description: 'Your order has been received and is being processed.', date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), completed: true },
    { status: 'Payment Confirmed', description: 'Payment has been successfully processed.', date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), completed: true },
    { status: 'Order Packed', description: 'Your items have been carefully packed for shipping.', date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), completed: true },
    { status: 'Shipped', description: 'Your order is on its way!', date: new Date(Date.now() - 12 * 60 * 60 * 1000), completed: true },
    { status: 'Out for Delivery', description: 'Your package is out for delivery and will arrive today.', date: new Date(Date.now() - 2 * 60 * 60 * 1000), completed: false },
    { status: 'Delivered', description: 'Package successfully delivered!', date: new Date(), completed: false }
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
      { name: 'Elegant Evening Dress', quantity: 1, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=50&h=50&fit=crop&crop=center' },
      { name: 'Designer Handbag', quantity: 1, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=50&h=50&fit=crop&crop=center' }
    ],
    shippingAddress: {
      name: 'John Doe',
      address: '123 Fashion Street',
      city: 'New York, NY 10001'
    }
  };
}

/**
 * Display order tracking results
 * @param {Object} order - Order tracking data
 */
function displayOrderTracking(order) {
  const resultDiv = document.getElementById('tracking-result');

  const statusHTML = order.statuses.map((status, index) => `
    <div class="tracking-step ${status.completed ? 'completed' : index === order.statuses.length - 1 ? 'current' : ''}">
      <div class="step-icon">
        <i class="fas ${getStatusIcon(status.status)}"></i>
      </div>
      <div class="step-content">
        <h4>${status.status}</h4>
        <p>${status.description}</p>
        <span class="step-date">${formatDate(status.date)}</span>
      </div>
    </div>
  `).join('');

  resultDiv.innerHTML = `
    <div class="order-details">
      <div class="order-header">
        <h4>Order ${order.orderNumber}</h4>
        <span class="order-status status-${order.status.toLowerCase().replace(' ', '-')}">${order.status}</span>
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
          ${order.items.map(item => `
            <div class="tracking-item">
              <img src="${item.image}" alt="${item.name}">
              <span>${item.name} (x${item.quantity})</span>
            </div>
          `).join('')}
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

  resultDiv.style.display = 'block';
}

/**
 * Show tracking result message
 * @param {string} message - Message to display
 * @param {string} type - Message type (success, error)
 */
function showTrackingResult(message, type) {
  const resultDiv = document.getElementById('tracking-result');
  resultDiv.innerHTML = `
    <div class="tracking-message ${type}">
      <i class="fas ${type === 'error' ? 'fa-exclamation-triangle' : 'fa-check-circle'}"></i>
      <p>${message}</p>
    </div>
  `;
  resultDiv.style.display = 'block';
}

/**
 * Get icon class for order status
 * @param {string} status - Order status
 * @returns {string} FontAwesome icon class
 */
function getStatusIcon(status) {
  const icons = {
    'Order Placed': 'fa-shopping-cart',
    'Payment Confirmed': 'fa-credit-card',
    'Order Packed': 'fa-box',
    'Shipped': 'fa-truck',
    'Out for Delivery': 'fa-shipping-fast',
    'Delivered': 'fa-check-circle'
  };
  return icons[status] || 'fa-circle';
}

// =============================================================================
// PRODUCT MODAL (QUICK VIEW)
// =============================================================================

/**
 * Open product modal for quick view
 * @param {number} productId - Product ID
 */
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.createElement('div');
  modal.className = 'product-modal';
  modal.innerHTML = `
    <div class="product-modal-content">
      <div class="product-modal-header">
        <span class="close-product-modal">&times;</span>
      </div>
      <div class="product-modal-body">
        <div class="product-modal-image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-modal-details">
          <h2>${product.name}</h2>
          <p class="product-modal-description">${product.description}</p>
          <div class="product-modal-rating">
            ${renderStarRating(product.id)}
          </div>
          <div class="product-modal-price">
            <span class="price">${formatCurrency(product.price)}</span>
          </div>
          <div class="product-modal-actions">
            <button class="btn-primary" onclick="addToCart(${product.id}); this.closest('.product-modal').remove()">
              <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
            <button class="btn-secondary wishlist-btn ${wishlist.some(item => item.id === product.id) ? 'active' : ''}"
                    onclick="toggleWishlist(${product.id}); this.classList.toggle('active')">
              <i class="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Close modal functionality
  modal.querySelector('.close-product-modal').addEventListener('click', () => modal.remove());
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
}

// =============================================================================
// INITIALIZATION & EVENT LISTENERS
// =============================================================================

/**
 * Initialize the application when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
  // Initialize theme
  initializeTheme();

  // Initialize cart count
  updateCartCount();

  // Render initial products
  renderProducts();

  // Set up event listeners
  setupEventListeners();
});

/**
 * Set up all event listeners
 */
function setupEventListeners() {
  // Search functionality
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => searchProducts(e.target.value));
  }

  // Category filters
  document.querySelectorAll('.category-filter').forEach(button => {
    button.addEventListener('click', () => filterByCategory(button.dataset.category));
  });

  // Cart modal close on outside click
  document.addEventListener('click', (e) => {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal && cartModal.classList.contains('active') && !cartModal.contains(e.target) && !e.target.closest('.cart-toggle')) {
      cartModal.classList.remove('active');
    }
  });

  // Checkout button
  const checkoutBtn = document.querySelector('.checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', openCheckout);
  }

  // Clear cart button
  const clearCartBtn = document.querySelector('.clear-cart-btn');
  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', clearCart);
  }

  // Theme toggle
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Wishlist button
  const wishlistBtn = document.querySelector('.wishlist-btn');
  if (wishlistBtn) {
    wishlistBtn.addEventListener('click', openWishlistModal);
  }

  // Track order link
  const trackOrderLink = document.querySelector('.track-order-link');
  if (trackOrderLink) {
    trackOrderLink.addEventListener('click', openOrderTracking);
  }
}

// =============================================================================
// EXPORTED FUNCTIONS (for global access)
// =============================================================================

// Make functions globally available for HTML onclick handlers
window.addToCart = addToCart;
window.toggleCart = toggleCart;
window.updateCartQuantity = updateCartQuantity;
window.removeFromCart = removeFromCart;
window.clearCart = clearCart;
window.openCheckout = openCheckout;
window.closeCheckout = closeCheckout;
window.handleCheckoutSubmit = handleCheckoutSubmit;
window.closeOrderConfirmation = closeOrderConfirmation;
window.openOrderTracking = openOrderTracking;
window.trackOrder = trackOrder;
window.toggleWishlist = toggleWishlist;
window.openWishlistModal = openWishlistModal;
window.openReviewModal = openReviewModal;
window.setRating = setRating;
window.submitReview = submitReview;
window.openProductModal = openProductModal;
window.toggleTheme = toggleTheme;
window.filterByCategory = filterByCategory;
window.changePage = changePage;