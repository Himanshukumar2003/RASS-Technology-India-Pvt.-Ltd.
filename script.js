window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".custom-navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 100);
});

// Buy Now click → same product ke h2 se title uthao
document.querySelector(".btn-buy-now").addEventListener("click", function () {
  const productContent = this.closest(".product-content");
  const productName = productContent
    .querySelector("h2")
    .innerText.replace(/\s+/g, " ")
    .trim();

  document.getElementById("productName").value = productName;
});

// Form submit
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    productName: document.getElementById("productName").value,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    city: document.getElementById("city").value,
    quantity: document.getElementById("number").value,
    message: document.getElementById("message").value,
  };

  console.log("Order submitted:", formData);

  alert("Thank you for your order! We will contact you shortly.");

  const modal = bootstrap.Modal.getInstance(
    document.getElementById("orderModal")
  );
  modal.hide();

  this.reset();
});
