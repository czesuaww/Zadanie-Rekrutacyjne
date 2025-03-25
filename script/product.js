const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
const productName = urlParams.get("name");
const productPrice = urlParams.get("price");
const productImg = urlParams.get("img");

document.getElementById("product-name").textContent = productName;
document.getElementById("product-id").textContent = "ID: " + productId;
document.getElementById("product-price").textContent = "Cena: " + productPrice;
document.getElementById("product-img").src = productImg;
document.getElementById("product-img").alt = productName;