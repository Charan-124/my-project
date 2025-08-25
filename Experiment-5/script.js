const categorySelect = document.getElementById("category");
const products = document.querySelectorAll("#product-list li");

categorySelect.addEventListener("change", function () {
  const selected = this.value;

  products.forEach(product => {
    const category = product.getAttribute("data-category");

    if (selected === "all" || selected === category) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
