// filter products by name
function filterProducts(value) {
  const products = document.querySelectorAll(".product-item");
  products.forEach((product) => {
    const productName = product.querySelector("p").textContent;
    if (
      value !== "default" &&
      productName.toLowerCase() !== value.toLowerCase()
    ) {
      product.style.display = "none";
    } else {
      product.style.display = "block";
    }
  });
}

const selectElement = document.querySelector(".orderby");

selectElement.addEventListener("change", function () {
  const selectedValue = this.value;

  filterProducts(selectedValue);
});
