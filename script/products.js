const products = [
    { id: 1111, name: "Gitara Elektryczna", alt: "elektryczna gitara", price: "1200 PLN", img: "https://images.unsplash.com/photo-1568193755668-aae18714a9f1" },
    { id: 1112, name: "Gitara Basowa", alt: "basowa gitara", price: "2500 PLN", img: "https://plus.unsplash.com/premium_photo-1664194584456-c25febbccb2a" },
    { id: 1113, name: "Gitara Elektryczna", alt: "elektryczna gitara", price: "900 PLN", img: "https://images.unsplash.com/photo-1508186736123-44a5fcb36f9f" },
    { id: 1114, name: "Gitara Elektryczna", alt: "elektryczna gitara", price: "1800 PLN", img: "https://plus.unsplash.com/premium_photo-1681335985809-22600ebed275" },
    { id: 1115, name: "Gitara Elektryczna", alt: "elektryczna gitara", price: "1800 PLN", img: "https://images.unsplash.com/photo-1619361369057-a86afad4be8a" },
    { id: 1116, name: "Gitara Elektryczna", alt: "elektryczna gitara", price: "1800 PLN", img: "https://images.unsplash.com/photo-1550985616-10810253b84d" },
    { id: 1117, name: "Gitara Elektryczna", alt: "elektryczna gitara", price: "1800 PLN", img: "https://images.unsplash.com/photo-1601956349578-c31521587860" },
    { id: 1118, name: "Gitara Elektryczna", alt: "elektryczna gitara", price: "1800 PLN", img: "https://images.unsplash.com/photo-1616533719060-a7fc492e9299" },
    { id: 1119, name: "Gitara Elektryczna", alt: "elektryczna gitara", price: "1800 PLN", img: "https://images.unsplash.com/photo-1582379119910-f752fdfc8c5f" },
    { id: 1120, name: "Gitara Elektryczna", alt: "elektryczna gitara", price: "1800 PLN", img: "https://images.unsplash.com/photo-1583679670276-90aa14338851" },
    { id: 1121, name: "Gitara Elektryczna", alt: "elektryczna gitara", price: "1800 PLN", img: "https://plus.unsplash.com/premium_photo-1681335986095-5a9585e77246" },
    { id: 1123, name: "Gitara Elektryczna", alt: "elektryczna gitara", price: "1800 PLN", img: "https://images.unsplash.com/photo-1583067525935-d926610ff2f1" },
    { id: 1124, name: "Gitara Elektryczna", alt: "elektryczna gitara", price: "1800 PLN", img: "https://images.unsplash.com/photo-1618530089935-3030738b8c7b" },
    { id: 1125, name: "Gitara Elektryczna", alt: "elektryczna gitara", price: "1800 PLN", img: "https://images.unsplash.com/photo-1520166012956-add9ba0835cb" },
    { id: 1126, name: "Gitara Elektryczna", alt: "elektryczna gitara", price: "1800 PLN", img: "https://images.unsplash.com/photo-1459230995443-0f098868784d" },
    { id: 1127, name: "Gitara Elektryczna", alt: "elektryczna gitara", price: "1800 PLN", img: "https://images.unsplash.com/photo-1540281811908-3614b2e5c56b" },
    { id: 1128, name: "Gitara Elektryczna", alt: "elektryczna gitara", price: "1800 PLN", img: "https://images.unsplash.com/photo-1613032970340-7846189c1cbe" },
    { id: 1129, name: "Gitara Elektryczna", alt: "elektryczna gitara", price: "1800 PLN", img: "https://images.unsplash.com/photo-1616066959736-5983a58b2071" },
    { id: 1130, name: "Gitara Elektryczna", alt: "elektryczna gitara", price: "1800 PLN", img: "https://images.unsplash.com/flagged/photo-1552331619-7f97d9a4c9c6" },
    { id: 1131, name: "Gitara Elektryczna", alt: "elektryczna gitara", price: "1800 PLN", img: "https://images.unsplash.com/photo-1606041212382-db0c175d8712" },
    { id: 1132, name: "Gitara Elektryczna", alt: "elektryczna gitara", price: "1800 PLN", img: "https://images.unsplash.com/photo-1618530627969-d1de1bf1b3ca" }
];

const productList = document.getElementById("product-list");

products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    productElement.innerHTML = `
        <a href="product.html?id=${product.id}&name=${encodeURIComponent(product.name)}&alt=${encodeURIComponent(product.alt)}&price=${encodeURIComponent(product.price)}&img=${encodeURIComponent(product.img)}">
            <img class="wrapper__products-img" src="${product.img}" alt="${product.name}" loading="lazy">
        </a>
        <h3 class="wrapper__products-title">${product.name}</h3>
        <p class="wrapper__products-price">Cena: ${product.price}</p>
        <p class="wrapper__products-id">ID: ${product.id}</p>
    `;

    productList.appendChild(productElement);
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.2 }
);

document.querySelectorAll(".product").forEach((product) => observer.observe(product));