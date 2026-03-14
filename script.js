const myWhatsApp = "919344069478";
const myInstagram = "NR CELL WORLD"; // Update this with your handle

const allProducts = [
    { id: 1, name: "A1 mobile", cat: "mobile", price: "₹1,399", img: "A1.jpg" },
    { id: 2, name: "SMJ 20W Fast Charger", cat: "Charger", price: "₹349", img: "smj 20w.jpg" },
    { id: 3, name: "BOAT headphones", cat: "Audio", price: "₹219", img: "boat headphone.jpg" },
    { id: 4, name: "BK Bluetooth speaker", cat: "Audio", price: "₹549", img: "bk big sp.jpg" },
    { id: 5, name: "BOAT airpods", cat: "Audio", price: "₹549", img: "boat airpots.jpg" },
    { id: 6, name: "C to USB pot", cat: "", price: "₹350", img: "c to usb.jpg" },
    { id:  7, name: "case for mobiles", cat: "Case", price: "₹199", img: "case.jpg" },
    { id: 8, name: "Iphone 25w Charger", cat: "Charger", price: "₹649", img: "iphone charger.jpg" },
    { id: 9, name: "Powerbank 10000mAh", cat: "Charger", price: "₹899", img: "power bank.jpg" },
    { id: 10, name: "Lava A1 josh without camera", cat: "mobile", price: "₹1,349", img: "lava a1 josh.jpg" },
    { id: 11, name: "Powerbank 10000mAh", cat: "Charger", price: "₹1,200", img: "power bank.jpg" },
    { id: 12, name: "Boat neckband", cat: "Audio", price: "₹799", img: "boat neck band.jpg" },
    { id: 13, name: "Powerbank 20000mAh", cat: "Charger", price: "₹1,199", img: "power bank 2.jpg" },
    { id: 14, name: "power bank 3 in 1 cable", cat: "Cable", price: "₹150", img: "power bank 3 in 1 cable.jpg" },
    // CONTINUE ADDING ITEMS UNTIL 50 BELOW:
    { id: 11, name: "wireless mic", cat: "Audio", price: "₹499", img: "wireless mic.jpg" },
    // ... Copy the line above and change the Name/ID to reach 50!
];

const grid = document.getElementById('product-grid');

function loadProducts(items) {
    grid.innerHTML = "";
    items.forEach(product => {
        grid.innerHTML += `
            <div class="card">
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
                <a href="https://wa.me/${myWhatsApp}?text=Hi, I want to buy ${product.name}" target="_blank" class="btn wa-btn">Order WhatsApp</a>
                <a href="https://instagram.com/${myInstagram}" target="_blank" class="btn ig-btn">Order Instagram</a>
            </div>
        `;
    });
}

// SEARCH FUNCTION
function searchItems() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = allProducts.filter(p => p.name.toLowerCase().includes(query));
    loadProducts(filtered);
}

// CATEGORY FILTER
function filterCat(category) {
    if (category === 'all') {
        loadProducts(allProducts);
    } else {
        const filtered = allProducts.filter(p => p.cat === category);
        loadProducts(filtered);
    }
}

// Initial Load
loadProducts(allProducts);