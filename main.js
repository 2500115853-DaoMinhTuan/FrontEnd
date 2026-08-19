/* =====================================
           PRODUCT DATA
        ===================================== */

        const products = [

            {
                id: 1,
                name: "Tủ lạnh LG Inverter 474 lít",
                category: "dien-lanh",
                price: 19600000,
                oldPrice: 26490000,
                image: "https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1943/331071/tu-lanh-lg-inverter-474-lit-multi-door-lfb47blg-1-638647718825891950-700x467.jpg",
                rating: 4.8,
                tag: "-26%"
            },

            {
                id: 2,
                name: "Tủ lạnh Samsung Inverter 236 lít",
                category: "dien-lanh",
                price: 6430000,
                oldPrice: 8430000,
                image: "https://cdn.tgdd.vn/Products/Images/1943/220325/samsung-rt22m4032by-sv-1-700x467.jpg",
                rating: 4.7,
                tag: "-19%"
            },

            {
                id: 3,
                name: "Máy giặt Samsung Inverter 9.5 kg WW95TA046AX/SV",
                category: "dien-lanh",
                price: 8090000,
                oldPrice: 10190000,
                image: "https://cdn.tgdd.vn/Products/Images/1944/236125/samsung-ww95ta046ax-sv-2-2-700x467.jpg",
                rating: 4.9,
                tag: "-20%"
            },

            {
                id: 4,
                name: "Máy giặt LG AI DD Inverter 15 kg F2515SNTG",
                category: "dien-lanh",
                price: 14990000,
                oldPrice: 23490000,
                image: "https://cdn.tgdd.vn/2026/08/timerseo/329115.jpg",
                rating: 4.9,
                tag: "-36%"
            },

            {
                id: 5,
                name: "Máy lạnh Comfee Inverter 1 HP CFS-10VDM",
                category: "dien-lanh",
                price: 11200000,
                oldPrice: 13999000,
                image: "https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/2002/363374/comfee-inverter-1-hp-cfs-10vdm-1-639078868082613354-700x467.jpg",
                rating: 4.6,
                tag: "SALE"
            },

            {
                id: 6,
                name: "Máy lọc nước RO nóng nguội lạnh Mutosi MP-S1011 10 lõi",
                category: "dien-lanh",
                price: 13490000,
                oldPrice: 15990000,
                image: "https://cdn.tgdd.vn/Products/Images/3385/306308/may-loc-nuoc-ro-nong-nguoi-lanh-mutosi-mp-s1011-10-loi1-700x467.jpg",
                rating: 4.8,
                tag: "0% TRẢ GÓP"
            },

            {
                id: 7,
                name: "Google Tivi Sony 4K 55 inch K-55S25VM2",
                category: "tivi",
                price: 15990000,
                oldPrice: 20590000,
                image: "https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/339081/google-tivi-sony-4k-55-inch-k-55s25vm2-1-638844792894979207-700x467.jpg",
                rating: 4.9,
                tag: "-22%"
            },

            {
                id: 8,
                name: "Google Tivi True RGB Sony AI 4K 75 inch K-75XR90M2",
                category: "tivi",
                price: 129990000,
                oldPrice: 149990000,
                image: "https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/368054/google-tivi-true-rgb-sony-ai-4k-75-inch-k-75xr90m2-4-639166838035952278-700x467.jpg",
                rating: 4.8,
                tag: "Mẫu mới"
            },

            {
                id: 9,
                name: "Nồi cơm nắp gài Sunhouse 1.8 lít SHD8600DMX",
                category: "dien-gia-dung",
                price: 590000,
                oldPrice: 780000,
                image: "https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1922/354799/noi-com-dien-nap-gai-sunhouse-18-lit-shd8600dmx-1-638947642261478787-700x467.jpg",
                rating: 4.9,
                tag: "-24%"
            },

            {
                id: 10,
                name: "Nồi chiên không dầu LocknLock",
                category: "dien-gia-dung",
                price: 2190000,
                oldPrice: 2890000,
                icon: "🍳",
                rating: 4.7,
                tag: "GIẢM 20%"
            },

            {
                id: 11,
                name: "Loa Bluetooth JBL",
                category: "am-thanh",
                price: 2990000,
                oldPrice: 3690000,
                icon: "🔊",
                rating: 4.8,
                tag: "FREESHIP"
            },

            {
                id: 12,
                name: "Máy hút bụi Xiaomi",
                category: "may-hut-bui",
                price: 2450000,
                oldPrice: 3090000,
                icon: "🧹",
                rating: 4.7,
                tag: "BESTSELLER"
            }

        ];


        /* =====================================
           VARIABLES
        ===================================== */

        let currentCategory = "all";

        let searchKeyword = "";

        let cart = [];


        /* =====================================
           ELEMENTS
           ===================================== */

        const productGrid =
            document.getElementById("productGrid");

        const searchInput =
            document.getElementById("searchInput");

        const sortSelect =
            document.getElementById("sortSelect");

        const productTotal =
            document.getElementById("productTotal");

        const emptyMessage =
            document.getElementById("emptyMessage");

        const cartCount =
            document.getElementById("cartCount");

        const cartItems =
            document.getElementById("cartItems");

        const cartTotal =
            document.getElementById("cartTotal");


        /* =====================================
           FORMAT PRICE
        ===================================== */

        function formatPrice(price) {

            return price.toLocaleString("vi-VN") + "đ";

        }


        /* =====================================
           RENDER PRODUCTS
        ===================================== */

        function renderProducts() {

            let result = products.filter(product => {

                const categoryMatch =
                    currentCategory === "all" ||
                    product.category === currentCategory;

                const searchMatch =
                    product.name
                        .toLowerCase()
                        .includes(searchKeyword);

                return categoryMatch && searchMatch;

            });


            /* SORT PRICE */

            if (sortSelect.value === "low") {

                result.sort((a, b) =>
                    a.price - b.price
                );

            }

            if (sortSelect.value === "high") {

                result.sort((a, b) =>
                    b.price - a.price
                );

            }


            productGrid.innerHTML = "";

            productTotal.innerText =
                result.length + " sản phẩm";


            /* EMPTY */

            if (result.length === 0) {

                emptyMessage.style.display =
                    "block";

                return;

            }

            emptyMessage.style.display =
                "none";


            /* CREATE PRODUCT */

            result.forEach(product => {

                const card =
                    document.createElement("article");

                card.className = "product";


                card.innerHTML = `
    <div class="product-image">
        <span class="sale-label">
            ${product.tag}
        </span>
        <img src="${product.image}" alt="${product.name}" style="max-width: 100%; height: auto;" />
    </div>
    <div class="product-content">

                        <div class="product-category">
                            Điện Máy Xanh
                        </div>

                        <h3>
                            ${product.name}
                            </h3>

                        <div class="rating">
                            ⭐ ${product.rating}
                        </div>

                        <div class="price">
                            ${formatPrice(product.price)}
                        </div>

                        <span class="old-price">
                            ${formatPrice(product.oldPrice)}
                        </span>

                        <br>

                        <span class="installment">
                            Trả góp 0%
                        </span>

                        <button
                            class="add-cart"
                            onclick="addToCart(${product.id})"
                        >
                            🛒 Thêm vào giỏ
                        </button>

                    </div>

                `;


                productGrid.appendChild(card);

            });

        }


        /* =====================================
           FILTER BUTTON
        ===================================== */

        document
            .querySelectorAll(".filter-button")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    function () {

                        document
                            .querySelectorAll(
                                ".filter-button"
                            )
                            .forEach(btn => {

                                btn.classList.remove(
                                    "active"
                                );

                            });


                        this.classList.add("active");


                        currentCategory =
                            this.dataset.category;


                        renderProducts();

                    }
                );

            });


        /* =====================================
           SELECT CATEGORY
        ===================================== */

        function selectCategory(category) {

            currentCategory = category;


            document
                .querySelectorAll(".filter-button")
                .forEach(button => {

                    button.classList.remove("active");

                    if (
                        button.dataset.category ===
                        category
                    ) {

                        button.classList.add("active");

                    }

                });


            renderProducts();

            scrollToProducts();

        }


        /* =====================================
           SEARCH
        ===================================== */

        searchInput.addEventListener(
            "input",
            function () {

                searchKeyword =
                    this.value
                        .trim()
                        .toLowerCase();

                renderProducts();

            }
        );
        function searchProducts() {

            searchKeyword =
                searchInput.value
                    .trim()
                    .toLowerCase();

            renderProducts();

            scrollToProducts();

        }


        /* =====================================
           SORT
        ===================================== */

        sortSelect.addEventListener(
            "change",
            renderProducts
        );


        /* =====================================
           ADD TO CART
        ===================================== */

        function addToCart(id) {

            const product =
                products.find(
                    item => item.id === id
                );


            const existing =
                cart.find(
                    item => item.id === id
                );


            if (existing) {

                existing.quantity++;

            } else {

                cart.push({
                    ...product,
                    quantity: 1
                });

            }


            updateCart();

            showToast(
                product.name +
                " đã được thêm vào giỏ hàng!"
            );

        }


        /* =====================================
           UPDATE CART
        ===================================== */

        function updateCart() {

            let totalQuantity = 0;

            let totalPrice = 0;


            cart.forEach(item => {

                totalQuantity +=
                    item.quantity;

                totalPrice +=
                    item.price *
                    item.quantity;

            });


            cartCount.innerText =
                totalQuantity;


            cartTotal.innerText =
                formatPrice(totalPrice);


            renderCart();

        }


        /* =====================================
           RENDER CART
        ===================================== */

        function renderCart() {

            if (cart.length === 0) {

                cartItems.innerHTML = `
                    <p>
                        Giỏ hàng đang trống.
                    </p>
                `;

                return;

            }


            cartItems.innerHTML = "";


            cart.forEach(item => {

                const div =
                    document.createElement("div");

                div.className = "cart-item";


                div.innerHTML = `

                    <div class="cart-item-image">
                        ${item.image ? `<img src="${item.image}" style="width:100%;height:100%;object-fit:cover;border-radius:6px;">` : (item.icon || '📦')}
                    </div>

                    <div class="cart-item-info">

                        <h4>
                            ${item.name}
                        </h4>

                        <div>
                            Số lượng:
                            ${item.quantity}
                        </div>

                        <div class="cart-item-price">
                            ${formatPrice(
                                item.price *
                    item.quantity
                )}
                        </div>

                    </div>

                `;


                cartItems.appendChild(div);

            });

        }
        function openCart() {
            document
                .getElementById("cartOverlay")
                .classList.add("show");
        }
        function closeCart() {

            document
                .getElementById("cartOverlay")
                .classList.remove("show");

        }
        function showToast(message) {
            const toast =
                document.getElementById("toast");
            toast.innerText =
                message;
            toast.classList.add("show");
            setTimeout(() => {
                toast.classList.remove(
                    "show"
                );
            }, 2200);
        }
        function scrollToProducts() {

            document
                .getElementById("products")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
        renderProducts();
        updateCart();

        function Dangnhap(){
            
        }