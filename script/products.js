const domElements = {
    productList: document.getElementById("product-list"),
    showMoreBtn: document.querySelector('.wrapper__showMore')
};

const globalVariables = {
    productToShow: 10,
    currentIndex: 0
}

const products = [
    { id: 1111, name: "Gitara Elektryczna One", alt: "Gitara Elektryczna One", price: "1200 PLN", img: "https://images.unsplash.com/photo-1568193755668-aae18714a9f1?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", imgHover: "https://images.unsplash.com/photo-1574624136404-74cc2f967ba5" },
    { id: 1112, name: "Gitara Basowa", alt: "basowa gitara", price: "2500 PLN", img: "https://plus.unsplash.com/premium_photo-1664194584456-c25febbccb2a", imgHover: "https://images.unsplash.com/photo-1574624136404-74cc2f967ba5" },
    { id: 1113, name: "Gitara Elektryczna Two", alt: "Gitara Elektryczna Two", price: "900 PLN", img: "https://images.unsplash.com/photo-1508186736123-44a5fcb36f9f", imgHover: "https://images.unsplash.com/photo-1574624136404-74cc2f967ba5" },
    { id: 1114, name: "Gitara Elektryczna Three", alt: "Gitara Elektryczna Three", price: "1801 PLN", img: "https://plus.unsplash.com/premium_photo-1681335985809-22600ebed275", imgHover: "https://images.unsplash.com/photo-1574624136404-74cc2f967ba5" },
    { id: 1115, name: "Gitara Elektryczna Four", alt: "Gitara Elektryczna Four", price: "1802 PLN", img: "https://images.unsplash.com/photo-1619361369057-a86afad4be8a?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", imgHover: "https://images.unsplash.com/photo-1574624136404-74cc2f967ba5?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 1116, name: "Gitara Elektryczna Five", alt: "Gitara Elektryczna Five", price: "1803 PLN", img: "https://images.unsplash.com/photo-1550985616-10810253b84d?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", imgHover: "https://images.unsplash.com/photo-1574624136404-74cc2f967ba5?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 1117, name: "Gitara Elektryczna Six", alt: "Gitara Elektryczna Six", price: "1804 PLN", img: "https://images.unsplash.com/photo-1601956349578-c31521587860", imgHover: "https://images.unsplash.com/photo-1574624136404-74cc2f967ba5" },
    { id: 1118, name: "Gitara Elektryczna Seven", alt: "Gitara Elektryczna Seven", price: "1805 PLN", img: "https://images.unsplash.com/photo-1616533719060-a7fc492e9299", imgHover: "https://images.unsplash.com/photo-1574624136404-74cc2f967ba5" },
    { id: 1119, name: "Gitara Elektryczna Eight", alt: "Gitara Elektryczna Eight", price: "1806 PLN", img: "https://images.unsplash.com/photo-1582379119910-f752fdfc8c5f", imgHover: "https://images.unsplash.com/photo-1574624136404-74cc2f967ba5" },
    { id: 1120, name: "Gitara Elektryczna Nine", alt: "Gitara Elektryczna Nine", price: "1807 PLN", img: "https://images.unsplash.com/photo-1583679670276-90aa14338851", imgHover: "https://images.unsplash.com/photo-1574624136404-74cc2f967ba5" },
    { id: 1121, name: "Gitara Elektryczna Ten", alt: "Gitara Elektryczna Ten", price: "1808 PLN", img: "https://plus.unsplash.com/premium_photo-1681335986095-5a9585e77246", imgHover: "https://images.unsplash.com/photo-1574624136404-74cc2f967ba5" },
    { id: 1122, name: "Gitara Elektryczna Eleven", alt: "Gitara Elektryczna Eleven", price: "1809 PLN", img: "https://images.unsplash.com/photo-1583067525935-d926610ff2f1", imgHover: "https://images.unsplash.com/photo-1574624136404-74cc2f967ba5" },
    { id: 1123, name: "Gitara Elektryczna Thirteen", alt: "Gitara Elektryczna Thirteen", price: "1811 PLN", img: "https://images.unsplash.com/photo-1618530089935-3030738b8c7b", imgHover: "https://images.unsplash.com/photo-1574624136404-74cc2f967ba5" },
    { id: 1124, name: "Gitara Elektryczna Fourteen", alt: "Gitara Elektryczna Fourteen", price: "1812 PLN", img: "https://images.unsplash.com/photo-1520166012956-add9ba0835cb", imgHover: "https://images.unsplash.com/photo-1574624136404-74cc2f967ba5" },
    { id: 1125, name: "Gitara Elektryczna Fifteen", alt: "Gitara Elektryczna Fifteen", price: "1813 PLN", img: "https://images.unsplash.com/photo-1459230995443-0f098868784d", imgHover: "https://images.unsplash.com/photo-1574624136404-74cc2f967ba5" },
    { id: 1126, name: "Gitara Elektryczna Sixteen", alt: "Gitara Elektryczna Sixteen", price: "1814 PLN", img: "https://images.unsplash.com/photo-1540281811908-3614b2e5c56b", imgHover: "https://images.unsplash.com/photo-1574624136404-74cc2f967ba5" },
    { id: 1127, name: "Gitara Elektryczna Seventeen", alt: "Gitara Elektryczna Seventenn", price: "1815 PLN", img: "https://images.unsplash.com/photo-1613032970340-7846189c1cbe", imgHover: "https://images.unsplash.com/photo-1574624136404-74cc2f967ba5" },
    { id: 1128, name: "Gitara Elektryczna Eighteen", alt: "Gitara Elektryczna Eighteen", price: "1816 PLN", img: "https://images.unsplash.com/photo-1616066959736-5983a58b2071", imgHover: "https://images.unsplash.com/photo-1574624136404-74cc2f967ba5" },
    { id: 1129, name: "Gitara Elektryczna Nineteen", alt: "Gitara Elektryczna Nineteen", price: "1817 PLN", img: "https://images.unsplash.com/flagged/photo-1552331619-7f97d9a4c9c6", imgHover: "https://images.unsplash.com/photo-1574624136404-74cc2f967ba5" },
    { id: 1130, name: "Gitara Elektryczna Twenty", alt: "Gitara Elektryczna Twenty", price: "1818 PLN", img: "https://images.unsplash.com/photo-1606041212382-db0c175d8712", imgHover: "https://images.unsplash.com/photo-1574624136404-74cc2f967ba5" },
    { id: 1131, name: "Gitara Elektryczna Twenty-one", alt: "Gitara Elektryczna Twenty-one", price: "1819 PLN", img: "https://images.unsplash.com/photo-1618530627969-d1de1bf1b3ca", imgHover: "https://images.unsplash.com/photo-1574624136404-74cc2f967ba5" }
];


const productRenderer = {
    renderProducts() {
        const { productList, showMoreBtn } = domElements;

        if (!productList) return;

        const fragment = document.createDocumentFragment();
        const productsToRender = products.slice(globalVariables.currentIndex, globalVariables.currentIndex + globalVariables.productToShow);
        console.log(productsToRender, 'to render');
        productsToRender.forEach((product) => {
            const productElement = document.createElement("div");
            productElement.classList.add("product", "fade-in");
            productElement.innerHTML = `
                <a href="product.html?id=${product.id}&name=${encodeURIComponent(product.name)}&alt=${encodeURIComponent(product.alt)}&price=${encodeURIComponent(product.price)}&img=${encodeURIComponent(product.img)}&imgHover=${encodeURIComponent(product.imgHover)}">
                    <img class="wrapper__products-img" src="${product.img}" alt="${product.name}" loading="lazy">
                </a>
                <h3 class="wrapper__products-title">${product.name}</h3>
                <p class="wrapper__products-price">Cena: ${product.price}</p>
                <p class="wrapper__products-id">ID: ${product.id}</p>
            `;
            fragment.appendChild(productElement);
        });

        productList.appendChild(fragment);
        globalVariables.currentIndex += globalVariables.productToShow;

        if (globalVariables.currentIndex >= products.length) {
            showMoreBtn.style.display = "none";
        } else {
            showMoreBtn.style.display = "block";
        }
    },
};

const productObservers = {
    initializeObservers() {
        const products = document.querySelectorAll(".product");

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

        products.forEach((product) => observer.observe(product));
    }
};

const userInteractionHandlers = {
    initializeUserInteractionEvents() {
        const { showMoreBtn } = domElements;

        showMoreBtn.addEventListener('click', () => {
            productRenderer.renderProducts();
            productObservers.initializeObservers();
        })
    }
};

const main = () => {
    productRenderer.renderProducts();
    productObservers.initializeObservers();
    userInteractionHandlers.initializeUserInteractionEvents();
};

document.addEventListener("DOMContentLoaded", main);