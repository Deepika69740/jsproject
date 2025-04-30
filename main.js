import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getDatabase, ref, set, get, push, update, remove } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCVPdMv4iTpI19dax30goQhEksjnuXzhHw",
  authDomain: "navb-5c270.firebaseapp.com",
  projectId: "navb-5c270",
  storageBucket: "navb-5c270.firebasestorage.app",
  messagingSenderId: "467288180177",
  appId: "1:467288180177:web:c0385252c8beb466088cf0"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

let art = [];
let dresses = [];
let gifts = [];

async function fetchData() {
    try {
      const snapshot = await get(ref(database, "artyhub"));
      if (snapshot.exists()) {
        let data = snapshot.val();
        art = data.art || [];
        dresses = data.dresses || [];
        gifts = data.gifts || [];
        return snapshot.val();
      } else {
        console.error("No data available.");
        return {};
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return {};
    }
}

await fetchData();

document.getElementById("dress").addEventListener("click", () => main(dresses));
document.getElementById("gift1").addEventListener("click", () => main(gifts));
document.getElementById("art").addEventListener("click", () => main(art));
document.getElementById("gift2").addEventListener("click", () => main(gifts));

function main(type = null) {
    const mainBody = document.getElementById('mainbody');
    mainBody.innerHTML = "";

    let cardContainer = document.createElement("div");
    cardContainer.className = "cardContainer";
    cardContainer.style.display = "flex";
    cardContainer.style.flexWrap = "wrap";
    cardContainer.style.gap = "20px";
    cardContainer.style.marginTop = "60px";
    cardContainer.style.justifyContent = "center";

    if (!type || !Array.isArray(type)) {
        console.error("Invalid type array");
        return;
    }

    type.forEach(item => {
        let card = document.createElement("div");
        card.innerHTML = `
        <div class="card" style="width: 300px; height: 500px; border: none; border-radius: 12px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); padding: 15px; background-color: #fff; transition: transform 0.3s ease; overflow: hidden; display: flex; flex-direction: column; align-items: center;">
            <h3 style="font-size: 1.2rem; font-weight: bold; color: #333;">${item.title}</h3>
            <img src="${item.image}" alt="${item.title}" style="width: 250px; height: 250px; object-fit: cover; border-radius: 8px; margin-bottom: 15px;">
            <p style="font-size: 1rem; color: #555; text-align: center;">${item.description || ""}</p>
            <p style="font-size: 1.1rem; font-weight: bold; color: #27ae60; text-align: center;">Price: ${Number(item.price).toFixed(2)}</p>
            <div style="display: flex; justify-content: space-between; width: 100%; padding: 10px;">
                <button class="addToCartBtn" style="background-color: #3498db; color: #fff; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Add To Cart</button>
                <button class="buyNowBtn" style="background-color: #e74c3c; color: #fff; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Buy Now</button>
            </div>
        </div>
        `;

        card.querySelector(".buyNowBtn").addEventListener("click", () => {
            const proceedToOrder = new bootstrap.Modal(document.getElementById("addressModal"));
            proceedToOrder.show();
        });

        card.querySelector(".addToCartBtn").addEventListener("click", async () => {
            try {
                const user = auth.currentUser;
                if (!user) {
                    alert("Please log in to add items to the cart.");
                    return;
                }

                const cartRef = ref(database, `users/${user.uid}/cart`);
                const snapshot = await get(cartRef);
                let cartItems = snapshot.exists() ? snapshot.val() : {};
                
                // Check if item already exists in cart
                let existingItemKey = null;
                for (const [key, cartItem] of Object.entries(cartItems || {})) {
                    if (cartItem.title === item.title && cartItem.category === item.category) {
                        existingItemKey = key;
                        break;
                    }
                }

                if (existingItemKey) {
                    // Update quantity and price
                    const existingItem = cartItems[existingItemKey];
                    const newQuantity = (existingItem.quantity || 1) + 1;
                    await update(ref(database, `users/${user.uid}/cart/${existingItemKey}`), {
                        quantity: newQuantity,
                        price: Number(item.price) * newQuantity
                    });
                } else {
                    // Add new item with quantity 1
                    await push(cartRef, {
                        ...item,
                        price: Number(item.price),
                        quantity: 1
                    });
                }

                Swal.fire({
                    title: "Item Added!",
                    text: "Your item has been added to the cart.",
                    icon: "success",
                    confirmButtonText: "OK",
                    allowOutsideClick: false
                });
            } catch (error) {
                console.error("Error adding to cart:", error);
                alert("Failed to add item to cart.");
            }
        });

        cardContainer.appendChild(card);
    });

    mainBody.appendChild(cardContainer);
}

document.getElementById("art1").addEventListener("click", (e) => {
    e.preventDefault();
    displayCategoryItems(art, 'Art Collection');
});

document.getElementById("gifts1").addEventListener("click", (e) => {
    e.preventDefault();
    displayCategoryItems(gifts, 'Gift Collection');
});

document.getElementById("clothing").addEventListener("click", (e) => {
    e.preventDefault();
    displayCategoryItems(dresses, 'Dress Collection');
});

function displayCategoryItems(items, categoryTitle) {
    const mainBody = document.getElementById('mainbody');
    mainBody.innerHTML = "";
    
    const container = document.createElement('div');
    container.className = 'container mt-5 animate__animated animate__fadeIn';
    container.style.paddingTop = '60px';
    
    const titleElement = document.createElement('h2');
    titleElement.className = 'text-center mb-4';
    titleElement.textContent = categoryTitle;
    container.appendChild(titleElement);
    
    const row = document.createElement('div');
    row.className = 'row g-5';
    
    items.forEach(item => {
        const col = document.createElement('div');
        col.className = 'col-12 col-md-6 col-lg-4';
        
        const card = document.createElement('div');
        card.className = 'card h-100 shadow-sm';
        item.price = Number(item.price);
        card.innerHTML = `
            <div class="">
                <img src="${item.image}" 
                     class="card-img-top" 
                     alt="${item.title}" 
                     style="height: 450px; object-fit: cover;">
            </div>
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text flex-grow-1">${item.description || ""}</p>
                <p>${item.price.toFixed(2)}</p>
                <div class="d-flex justify-content-between mt-3">
                    <button class="btn btn-outline-primary" id="addToCart">
                        <i class="fas fa-cart-plus"></i> Add To Cart
                    </button>
                    <button class="btn btn-success" id="buynow">
                        <i class="fas fa-shopping-bag"></i> Buy Now
                    </button>
                </div>
            </div>
        `;
        
        card.querySelector("#buynow").addEventListener("click", () => {
            const proceedToOrder = new bootstrap.Modal(document.getElementById("addressModal"));
            proceedToOrder.show();
        });
        
        card.addEventListener('mouseenter', () => {
            card.classList.add('shadow');
            card.style.transform = 'translateY(-5px)';
            card.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('shadow');
            card.style.transform = 'translateY(0)';
        });
        
        card.querySelector("#addToCart").addEventListener("click", async () => {
            try {
                const user = auth.currentUser;
                if (!user) {
                    alert("Please log in to add items to the cart.");
                    return;
                }
        
                const cartRef = ref(database, `users/${user.uid}/cart`);
                const snapshot = await get(cartRef);
                let cartItems = snapshot.exists() ? snapshot.val() : {};
                
                let existingItemKey = null;
                for (const [key, cartItem] of Object.entries(cartItems || {})) {
                    if (cartItem.title === item.title && cartItem.category === item.category) {
                        existingItemKey = key;
                        break;
                    }
                }

                if (existingItemKey) {
                    const existingItem = cartItems[existingItemKey];
                    const newQuantity = (existingItem.quantity || 1) + 1;
                    await update(ref(database, `users/${user.uid}/cart/${existingItemKey}`), {
                        quantity: newQuantity,
                        price: Number(item.price) * newQuantity
                    });
                } else {
                    await push(cartRef, {
                        ...item,
                        price: Number(item.price),
                        quantity: 1
                    });
                }
                
                Swal.fire({             
                    title: "Item Added!",             
                    text: "Your item has been added to the cart.",             
                    icon: "success",             
                    confirmButtonText: "OK",             
                    allowOutsideClick: false          
                });     
            } catch (error) {
                console.error("Error adding to cart:", error);
                alert("Failed to add item to cart.");
            }
        });
        
        col.appendChild(card);
        row.appendChild(col);
    });
    
    container.appendChild(row);
    mainBody.appendChild(container);
}

let post = document.getElementById("post"); 
post.addEventListener("click", async (e) => {
    e.preventDefault();
    
    let title = document.getElementById("title1").value;
    let url = document.getElementById("imageSrc1").value;
    let category = document.getElementById("category").value;
    let price = document.getElementById("price1").value;
    let obj = {
        title: title,
        category: category,
        price: price,
        image: url,
    };
    
    if (["art", "gifts", "dresses"].includes(category)) {
        const db = getDatabase();
        let categoryRef = ref(db, `artyhub/${category}`);
        
        try {
            let snapshot = await get(categoryRef);
            let existingData = snapshot.val() || [];
            
            existingData.push(obj);
            
            await set(categoryRef, existingData);
            
            Swal.fire({
                title: "Successfully Posted!",
                text: `Item added successfully to ${category}.`,
                icon: "success",
                confirmButtonText: "OK"
            }).then((result) => {
                if (result.isConfirmed) {
                    const modalElement = document.getElementsByClassName("postModal")[0];
                    if (modalElement) {
                        try {
                            const bsModal = bootstrap.Modal.getInstance(modalElement);
                            if (bsModal) {
                                bsModal.hide();
                            } else {
                                modalElement.classList.remove('show');
                                modalElement.style.display = 'none';
                                const backdrop = document.querySelector('.modal-backdrop');
                                if (backdrop) {
                                    backdrop.parentNode.removeChild(backdrop);
                                }
                                document.body.classList.remove('modal-open');
                            }
                        } catch (error) {
                            console.error("Error closing modal:", error);
                        }
                    }
                }
            });
            
        } catch (error) {
            console.error("Error adding item:", error);
            alert("Failed to add item.");
        }
    } else {
        alert("Invalid category selected.");
    }
    
    await fetchData();
});

async function clearCart() {
    try {
        const user = auth.currentUser;
        if (!user) {
            alert("Please log in to proceed with order.");
            return false;
        }

        const cartRef = ref(database, `users/${user.uid}/cart`);
        await set(cartRef, null);
        return true;
    } catch (error) {
        console.error("Error clearing cart:", error);
        alert("Failed to clear cart.");
        return false;
    }
}

function showOrderConfirmation() {
    Swal.fire({
        title: "Order Placed!",
        text: "Your order has been successfully placed.",
        icon: "success",
        confirmButtonText: "OK"
    }).then((result) => {
        if (result.isConfirmed) {
            const mainBody = document.getElementById('mainbody');
            mainBody.innerHTML = `
                <div class='container mt-5 text-center animate__animated animate__fadeIn'>
                    <div class="card shadow-sm p-5">
                        <h3>Thank you for your order!</h3>
                        <p class="mt-3">Your items will be delivered soon.</p>
                        <button id="continueShopping" class="btn btn-primary mt-4">Continue Shopping</button>
                    </div>
                </div>
            `;
            
            document.getElementById("continueShopping").addEventListener("click", () => {
                location.href = "main.html";
            });
            
            setFooterPosition();
        }
    });
}

function setFooterPosition() {
    const footer = document.querySelector('footer');
    if (footer) {
        const bodyHeight = document.body.offsetHeight;
        const windowHeight = window.innerHeight;
        
        if (bodyHeight < windowHeight) {
            footer.style.position = 'fixed';
            footer.style.bottom = '0';
            footer.style.width = '100%';
        } else {
            footer.style.position = 'relative';
        }
    }
}

window.addEventListener('resize', setFooterPosition);
window.addEventListener('load', setFooterPosition);

let cart = document.getElementById("cart");
cart.addEventListener("click", async () => {
    mainbody.innerHTML = "";

    async function calculateCartTotal() {
        try {
            const user = auth.currentUser;
            if (!user) return 0;
    
            const cartRef = ref(database, `users/${user.uid}/cart`);
            const snapshot = await get(cartRef);
    
            if (snapshot.exists()) {
                const items = Object.values(snapshot.val());
                return items.reduce((total, item) => total + Number(item.price), 0);
            }
            return 0;
        } catch (error) {
            console.error("Error calculating cart total:", error);
            return 0;
        }
    }
    
    async function fetchCartItems() {
        try {
            const user = auth.currentUser;
            if (!user) {
                alert("Please log in to view your cart.");
                return [];
            }

            const cartRef = ref(database, `users/${user.uid}/cart`);
            const snapshot = await get(cartRef);

            if (snapshot.exists()) {
                const items = snapshot.val();
                return Object.entries(items).map(([key, value]) => ({
                    key,
                    ...value
                }));
            } else {
                console.log("No items in the cart.");
                return [];
            }
        } catch (error) {
            console.error("Error fetching cart items:", error);
            return [];
        }
    }

    async function displayCartItems() {
        const cartItems = await fetchCartItems();
        const mainBody = document.getElementById('mainbody');
        
        if (cartItems.length === 0) {
            mainBody.innerHTML = `
                <div class='container mt-5 text-center'>
                    <h3>Your cart is empty</h3>
                    <button id="startShopping" class="btn btn-primary mt-4">Start Shopping</button>
                </div>`;
                
            document.getElementById("startShopping").addEventListener("click", () => {
                location.href = "main.html";
            });
            
            setFooterPosition();
            return;
        }
    
        mainBody.innerHTML = "";
    
        const container = document.createElement('div');
        container.className = 'container mt-5 animate__animated animate__fadeIn';
        container.style.paddingTop = '60px';
    
        const titleElement = document.createElement('h2');
        titleElement.className = 'text-center mb-4';
        titleElement.textContent = 'Your Cart';
        container.appendChild(titleElement);
    
        const row = document.createElement('div');
        row.className = 'row g-5';
        
        cartItems.forEach((item) => {
            const col = document.createElement('div');
            col.className = 'col-12 col-md-6 col-lg-4';
    
            let cartItem = document.createElement('div');
            cartItem.className = 'card h-100 shadow-sm';
            const quantity = item.quantity || 1;
            const basePrice = Number(item.price) / quantity; // Calculate base price per unit
            cartItem.innerHTML = `
                <div class="">
                    <img src="${item.image}" 
                         class="card-img-top" 
                         alt="${item.title}" 
                         style="height: 450px; object-fit: cover;">
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text flex-grow-1">${item.description || ""}</p>
                    <p class="text-primary fw-bold">Price: ${Number(item.price).toFixed(2)}</p>
                    <div class="d-flex align-items-center mb-3">
                        <button class="btn btn-outline-secondary btn-sm decrement-btn" data-key="${item.key}">-</button>
                        <span class="mx-2">Quantity: ${quantity}</span>
                        <button class="btn btn-outline-secondary btn-sm increment-btn" data-key="${item.key}">+</button>
                    </div>
                    <div class="d-flex justify-content-between mt-3">
                        <button class="btn btn-success" id="buynow">
                            <i class="fas fa-shopping-bag"></i> Buy Now
                        </button>
                        <button class="btn btn-danger remove-item" data-key="${item.key}">
                            <i class="fas fa-trash"></i> Remove
                        </button>
                    </div>
                </div>
            `;
    
            col.appendChild(cartItem);
            row.appendChild(col);
            
            cartItem.querySelector("#buynow").addEventListener("click", () => {
                const proceedToOrder = new bootstrap.Modal(document.getElementById("addressModal"));
                proceedToOrder.show();
            });
            
            cartItem.querySelector(".remove-item").addEventListener("click", async () => {
                const key = cartItem.querySelector(".remove-item").getAttribute("data-key");
                await removeFromCart(key);
            });

            cartItem.querySelector(".increment-btn").addEventListener("click", async () => {
                const key = cartItem.querySelector(".increment-btn").getAttribute("data-key");
                await updateCartQuantity(key, quantity + 1, basePrice);
            });

            cartItem.querySelector(".decrement-btn").addEventListener("click", async () => {
                const key = cartItem.querySelector(".decrement-btn").getAttribute("data-key");
                if (quantity > 1) {
                    await updateCartQuantity(key, quantity - 1, basePrice);
                } else {
                    await removeFromCart(key);
                }
            });
        });
    
        container.appendChild(row);

        const totalPrice = cartItems.reduce((total, item) => total + Number(item.price), 0);

        const totalSection = document.createElement('div');
        totalSection.className = 'container mt-4 mb-5';
        totalSection.innerHTML = `
           <div class="card shadow w-25" id="carttotal"> 
            <div class="card-body p-2"> 
                <div class="row align-items-center" class="col-12 col-md-6 col-lg-4">
                    <div class="col">
                        <h6 class="mb-0" style="font-size:0.9rem">Cart Total</h6> 
                    </div>
                    <div class="col text-end">
                        <h5 class="mb-0" id="cartTotal" style="font-size:0.9rem">${totalPrice.toFixed(2)}</h5>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" id="proceedBtn" style="font-size: 0.7rem;">
                            Proceed To Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;

        totalSection.querySelector("#proceedBtn").addEventListener("click", () => {
            const proceedToOrder = new bootstrap.Modal(document.getElementById("addressModal"));
            proceedToOrder.show();
        });

        mainBody.appendChild(container);
        mainBody.appendChild(totalSection);
        
        setFooterPosition();
    }

    async function updateCartQuantity(key, newQuantity, basePrice) {
        try {
            const user = auth.currentUser;
            if (!user) {
                alert("Please log in to update cart.");
                return;
            }
    
            await update(ref(database, `users/${user.uid}/cart/${key}`), {
                quantity: newQuantity,
                price: basePrice * newQuantity
            });
    
            Swal.fire({
                title: "Quantity Updated!",
                text: "Your cart has been updated.",
                icon: "success",
                confirmButtonText: "OK",
                allowOutsideClick: false
            });
    
            displayCartItems();
        } catch (error) {
            console.error("Error updating quantity:", error);
            alert("Failed to update cart quantity.");
        }
    }

    async function removeFromCart(itemKey) {
        try {
            const user = auth.currentUser;
            if (!user) {
                alert("Please log in to remove items.");
                return;
            }
    
            const itemRef = ref(database, `users/${user.uid}/cart/${itemKey}`);
            await remove(itemRef);
    
            Swal.fire({
                title: "Item Removed!",
                text: "Your item has been removed from the cart.",
                icon: "success",
                confirmButtonText: "OK",
                allowOutsideClick: false
            });
    
            displayCartItems();
        } catch (error) {
            console.error("Error removing item:", error);
            alert("Failed to remove item from cart.");
        }
    }
    
    window.removeFromCart = removeFromCart;
    window.displayCartItems = displayCartItems;
    
    await displayCartItems();
});

const logout = document.getElementById("logout");

if (logout) {
  logout.addEventListener("click", async (e) => {
    e.preventDefault();

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });

    const result = await swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, log out!",
      cancelButtonText: "No, stay here!",
      reverseButtons: true
    });

    if (result.isConfirmed) {
      await swalWithBootstrapButtons.fire({
        title: "Logged out!",
        text: "You have been successfully logged out.",
        icon: "success"
      });

      location.href = "index.html";
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "You are still logged in!",
        icon: "error"
      });
    }
  });
} else {
  console.error("Logout button not found!");
}

document.querySelector("#addressModal .btn-primary").addEventListener("click", async (e) => {
    e.preventDefault();
    
    const success = await clearCart();
    
    if (success) {
        const modal = bootstrap.Modal.getInstance(document.getElementById("addressModal"));
        modal.hide();
        
        showOrderConfirmation();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const uploadModalElement = document.getElementById("exampleModal");
    const uploadModal = uploadModalElement ? new bootstrap.Modal(uploadModalElement) : null;

    const uploadButton = document.getElementById("uploadButton");
    if (uploadButton && uploadModal) {
        uploadButton.addEventListener("click", () => {
            uploadModal.show();
        });
    }

    const postButton = document.getElementById("post");
    if (postButton) {
        postButton.addEventListener("click", async (e) => {
            e.preventDefault();

            const title = document.getElementById("title1")?.value.trim();
            const url = document.getElementById("imageSrc1")?.value.trim();
            const description = document.getElementById("description1")?.value.trim();
            const price = document.getElementById("price1")?.value.trim();
            const category = document.getElementById("category")?.value;

            if (!title || !url || !price || !category) {
                await Swal.fire({
                    title: "Missing Information",
                    text: "Please fill in all required fields",
                    icon: "warning",
                    confirmButtonText: "OK"
                });
                return;
            }

            if (!["art", "gifts", "dresses"].includes(category)) {
                await Swal.fire({
                    title: "Invalid Category",
                    text: "Please select a valid category",
                    icon: "error",
                    confirmButtonText: "OK"
                });
                return;
            }

            const product = {
                title: title,
                category: category,
                price: price,
                image: url,
                description: description || ""
            };

            try {
                Swal.fire({
                    title: "Uploading...",
                    html: "Please wait while we process your product",
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                });

                const db = getDatabase();
                const categoryRef = ref(db, `artyhub/${category}`);
                
                const snapshot = await get(categoryRef);
                const existingData = snapshot.exists() ? snapshot.val() : [];
                
                existingData.push(product);
                
                await set(categoryRef, existingData);

                Swal.fire({
                    title: "Success!",
                    text: "Your product has been uploaded successfully",
                    icon: "success",
                    confirmButtonText: "OK"
                }).then((res) => {
                    if (res.isConfirmed) {
                        uploadModal.hide();
                    }
                });

                const uploadForm = document.getElementById("uploadForm");
                if (uploadForm) {
                    uploadForm.reset();
                }
                
                const previewContainer = document.getElementById("imagePreview");
                if (previewContainer) {
                    previewContainer.innerHTML = '';
                }

                if (typeof fetchData === 'function') {
                    await fetchData();
                }

            } catch (error) {
                console.error("Upload error:", error);
                await Swal.fire({
                    title: "Error",
                    text: "Failed to upload product. Please try again.",
                    icon: "error",
                    confirmButtonText: "OK"
                });
            }
        });
    }

    const imageUrlInput = document.getElementById("imageSrc1");
    if (imageUrlInput) {
        imageUrlInput.addEventListener("blur", function() {
            const url = this.value.trim();
            const previewContainer = document.getElementById("imagePreview");
            
            if (previewContainer) {
                if (url) {
                    previewContainer.innerHTML = `
                        <div class="mt-2 mb-3">
                            <label class="form-label">Image Preview</label>
                            <img src="${url}" class="img-thumbnail" style="max-height: 150px;" alt="Preview">
                        </div>
                    `;
                } else {
                    previewContainer.innerHTML = '';
                }
            }
        });
    }

    if (uploadModalElement) {
        uploadModalElement.addEventListener('hidden.bs.modal', function() {
            const uploadForm = document.getElementById("uploadForm");
            if (uploadForm) {
                uploadForm.reset();
            }
            const previewContainer = document.getElementById("imagePreview");
            if (previewContainer) {
                previewContainer.innerHTML = '';
            }
        });
    }
});

function addImagePreviewArea() {
    const imageInput = document.getElementById("imageSrc1");
    if (imageInput) {
      const previewDiv = document.createElement("div");
      previewDiv.id = "imagePreview";
      imageInput.parentNode.insertAdjacentElement('afterend', previewDiv);
    }
}

document.addEventListener('DOMContentLoaded', addImagePreviewArea);

document.addEventListener('click', function(e) {
    if (e.target.closest('#ArtistryHub')) {
        e.preventDefault();
        window.location.href = "main.html";
    }
});