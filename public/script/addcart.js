// product add to cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartUI();

function removeFromCart(productId) {
  const productIndex = cart.findIndex((product) => product.id === productId);
  if (productIndex !== -1) {
    cart.splice(productIndex, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
  }
}

ProductItems.forEach((product) => {
  const productElement = document.getElementById(`product-${product.id}`);
  const addToCartButton = productElement.querySelector("button");
  // click button
  addToCartButton.addEventListener("click", () => {
    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartUI();
  });
});

// update cart UI
function updateCartUI() {
  const cartBox = document.querySelector(".cart-box");
  cartBox.innerHTML = "";

  cart.forEach((product) => {
    const cartItem = document.createElement("div");
    cartItem.className = "product-item";
    cartItem.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button onclick="removeFromCart(${product.id})">Remove</button>
    `;

    cartBox.appendChild(cartItem);
  });
}
