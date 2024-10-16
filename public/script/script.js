// Description:  Home, Cart.
// Document Object Model (DOM) - products items.
const ProductItems = [
  {
    id: 1,
    img: "https://www.coronausa.com/cdn/shop/files/corona-extra-menu_300x.png?v=1614355250",
    name: "Corona Extra",
    price: "7,3$",
    addCart: "Add to cart",
  },
  {
    id: 2,
    img: "https://www.coronausa.com/cdn/shop/files/corona-light-menu_300x.png?v=1614355250",
    name: "Corona Light",
    price: "4,9$",
    addCart: "Add to cart",
  },
  {
    id: 3,
    img: "https://www.coronausa.com/cdn/shop/files/6f7300b6-3343-44cb-af63-91916f892349_300x.png?v=1676604268",
    name: "Corona Non-Alcoholic",
    price: "5,3$",
    addCart: "Add to cart",
  },
  {
    id: 4,
    img: "https://www.coronausa.com/cdn/shop/files/corona-familiar-menu_300x.png?v=1614355250",
    name: "Corona Familiar",
    price: "6,3$",
    addCart: "Add to cart",
  },
];

// DOM - HomeProduct
const HomeProduct = document.querySelector(".product-box");

ProductItems.forEach((product) => {
  const productElement = document.createElement("div");
  productElement.classList.add("product-item");

  const addToCartButton = document.createElement("button");
  addToCartButton.innerText = product.addCart;

  addToCartButton.addEventListener("click", () => {
    alert("Add to cart successfully!");
  });

  productElement.id = `product-${product.id}`;
  productElement.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <p>${product.name}</p>
    <span>${product.price}</span>
    <br/>
  `;

  // add product to HomeProduct
  productElement.appendChild(addToCartButton);
  HomeProduct.appendChild(productElement);
});
