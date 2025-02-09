import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getDatabase, ref, set, get ,push , update,remove}  from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

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

let art = []
let dresses = []
let gifts = []
async function fetchData() {
    try {
      const snapshot = await get(ref(database, "artyhub"));
      if (snapshot.exists()) {
        let data = snapshot.val()
        art = data.art;
        dresses = data.dresses;
        gifts = data.gifts;
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

  await fetchData()
// const  art= [
//     {
//       "id": 1,
//       "title": "Abstract Painting",
//       "description": "A beautiful abstract painting with vibrant colors.",
//       "price": 120.00,
//       "image": "https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg",
//       "category": "art"
//     },
//     {
//       "id": 2,
//       "title": "Landscape Canvas",
//       "description": "A serene landscape canvas perfect for home decor.",
//       "price": 200.00,
//       "image": "https://media.istockphoto.com/photos/mind-painting-background-picture-id469036036?k=6&m=469036036&s=612x612&w=0&h=8fjVzPQyyyyksbu0XLpanABsJ8uUHlN6vvasA2GU50w=",
//       "category": "art"
//     },
//     {
//       "id": 3,
//       "title": "Modern Art Piece",
//       "description": "An eye-catching modern art piece for contemporary spaces.",
//       "price": 180.00,
//       "image": "https://photofocus.com/wp-content/uploads/2022/08/kenlee-AI-generated-art-drawing-man-forest-Midjourney-HEADER-PHOTOFOCUS.jpg",
//       "category": "art"
//     },
//     {
//       "id": 4,
//       "title": "Portrait Sketch",
//       "description": "A detailed portrait sketch with intricate strokes.",
//       "price": 150.00,
//       "image": "https://wallpapers.com/images/file/abstract-art-pictures-a7sxgksf06iigkzt.jpg",
//       "category": "art"
//     },
//     {
//       "id": 5,
//       "title": "Acrylic Artwork",
//       "description": "A vibrant acrylic artwork showcasing bold patterns.",
//       "price": 220.00,
//       "image": "https://tse4.mm.bing.net/th?id=OIP.dZRdpGucdIepN3NjzSNkEwHaEo&pid=Api&P=0&h=180",
//       "category": "art"
//     },
//     {
//       "id": 6,
//       "title": "Floral Watercolor",
//       "description": "A delicate floral watercolor painting.",
//       "price": 95.00,
//       "image": "https://static.vecteezy.com/system/resources/previews/021/924/397/large_2x/beautiful-kathak-dance-painting-fine-art-generative-ai-photo.jpg",
//       "category": "art"
//     },
//     {
//       "id": 7,
//       "title": "Abstract Wall Art",
//       "description": "A stunning piece of abstract wall art for living spaces.",
//       "price": 175.00,
//       "image": "https://i1.wp.com/joyacousin.com/wp-content/uploads/2017/10/20171020_145612-01.jpg",
//       "category": "art"
//     },
//     {
//       "id": 8,
//       "title": "Cubism Painting",
//       "description": "A unique cubism painting inspired by Picasso.",
//       "price": 300.00,
//       "image": "https://wallpaperset.com/w/full/5/c/2/51687.jpg",
//       "category": "art"
//     },
//     {
//       "id": 9,
//       "title": "Minimalist Art",
//       "description": "A minimalist art piece with clean lines and subtle colors.",
//       "price": 140.00,
//       "image": "https://wallpaperset.com/w/full/5/c/2/51687.jpg",
//       "category": "art"
//     },
//     {
//       "id": 10,
//       "title": "Nature-Inspired Artwork",
//       "description": "An artwork inspired by the beauty of nature.",
//       "price": 210.00,
//       "image": "http://thewowstyle.com/wp-content/uploads/2015/01/art-gallery-josephine-wall-paintings-565-2.jpg",
//       "category": "art"
//     }
//   ]
//  const dresses=[
//     {
//       "id": 1,
//       "title": "Summer Dress",
//       "description": "A light and breezy summer dress in pastel shades.",
//       "price": 50.00,
//       "image": "https://4.bp.blogspot.com/-c22VALZlh9Y/UVqht3tQdTI/AAAAAAAAAEU/JdXb11t4tE4/s1600/9564-Sapphire.jpg",
//       "category": "dresses"
//     },
//     {
//       "id": 2,
//       "title": "Evening Gown",
//       "description": "An elegant evening gown for formal occasions.",
//       "price": 150.00,
//       "image": "https://cdn.shopify.com/s/files/1/0624/2382/6609/products/heavenly-dress-PG-F2038-a_1200x1999.jpg?v=1664919935",
//       "category": "dresses"
//     },
//     {
//       "id": 3,
//       "title": "Casual Maxi Dress",
//       "description": "A comfortable maxi dress for casual outings.",
//       "price": 80.00,
//       "image": "https://images.surferseo.art/e95004aa-62ea-49d4-98eb-81ee6356286a.jpeg",
//       "category": "dresses"
//     },
//     {
//       "id": 4,
//       "title": "Cocktail Dress",
//       "description": "A chic cocktail dress for evening parties.",
//       "price": 130.00,
//       "image": "https://i.pinimg.com/originals/00/68/df/0068df40c07620f3bdff921369583acf.jpg",
//       "category": "dresses"
//     },
//     {
//       "id": 5,
//       "title": "Floral Midi Dress",
//       "description": "A floral midi dress perfect for springtime.",
//       "price": 90.00,
//       "image": "https://i.pinimg.com/736x/0d/6a/e4/0d6ae4629876b973da21422640951df5.jpg",
//       "category": "dresses"
//     },
//     {
//       "id": 6,
//       "title": "Bohemian Dress",
//       "description": "A flowing bohemian dress with earthy tones.",
//       "price": 110.00,
//       "image": "https://cdn.shopify.com/s/files/1/0276/8666/6376/files/Silver_Lehenga_10_30d78b06-1751-445a-a573-7de208c01481_2048x2048.jpg?v=1595932069",
//       "category": "dresses"
//     },
//     {
//       "id": 7,
//       "title": "Formal Office Dress",
//       "description": "A formal dress suitable for office wear.",
//       "price": 100.00,
//       "image": "https://images.surferseo.art/e95004aa-62ea-49d4-98eb-81ee6356286a.jpeg",
//       "category": "dresses"
//     },
//     {
//       "id": 8,
//       "title": "Party Dress",
//       "description": "A stylish party dress with sequins.",
//       "price": 170.00,
//       "image": "https://i.pinimg.com/originals/db/a3/ba/dba3badc8ff56e8c5781bf2d5634496f.jpg",
//       "category": "dresses"
//     },
//     {
//       "id": 9,
//       "title": "Winter Sweater Dress",
//       "description": "A cozy sweater dress for the colder months.",
//       "price": 120.00,
//       "image": "https://i.pinimg.com/originals/0f/38/e5/0f38e54e1f31694f87bea08c88fb4849.jpg",
//       "category": "dresses"
//     },
//     {
//       "id": 10,
//       "title": "Vintage Dress",
//       "description": "A retro-style vintage dress with polka dots.",
//       "price": 140.00,
//       "image": "https://i.pinimg.com/736x/b6/5a/b8/b65ab89bfc23d24aabf1c8a154d3e779.jpg",
//       "category": "dresses"
//     }
//   ]
//   const gifts =[
//     {
//       "id": 1,
//       "title": "Bag",
//       "description": "A delightful Black bag with hanging.",
//       "price": 75.00,
//       "image": "https://endurapack.com/wp-content/uploads/CCT911Bblackptd.jpg",
//       "category": "gifts"
//     },
//     {
//       "id": 2,
//       "title": "Bag",
//       "description": "A grey desined bag.",
//       "price": 25.00,
//       "image": "https://m.media-amazon.com/images/I/71GS5ZrIKRS.AC_UL1500.jpg",
//       "category": "gifts"
//     },
//   {
//     "id": 3,
//     "title": "Bag",
//     "description": "A soft bag for all ages.",
//     "price": 30.00,
//     "image": "https://tse4.mm.bing.net/th?id=OIP.yl0ZNuK_3lYgcmqsysS8OAHaFj&pid=Api&P=0&h=180",
//     "category": "gifts"
//   },
//   {
//     "id": 4,
//     "title": "Bag",
//     "description": "A bag with blue color design",
//     "price": 40.00,
//     "image": "https://i.pinimg.com/originals/52/3c/00/523c007185cdd2813691ca0ee5557e5f.jpg",
//     "category": "gifts"
//   },
//   {
//    "id": 5,
//     "title":"bracelite",
//     "description": "A beautifully designed bracelite to cherish memories.",
//     "price": 35.00,
//     "image": "https://tse3.mm.bing.net/th?id=OIP.doCu2593kGeSf9kMKkN1sQHaE8&pid=Api&P=0&h=180",
//     "category": "gifts"
//   },
//   {
//     "id": 6,
//     "title": "bracelite",
//     "description": "A custom bracelite with engraving options.",
//     "price": 15.00,
//     "image": "https://tse4.mm.bing.net/th?id=OIP.9QJSXCB52T94Q-gGJL4cPwHaFP&pid=Api&P=0&h=180",
//     "category": "gifts"
//   },
//   {
//     "id": 7,
//     "title": "bracelite",
//     "description": "A gold bracelite for special occasions.",
//     "price": 50.00,
//     "image": "https://tse2.mm.bing.net/th?id=OIP.Q0y-nxDl9vNvIi9D8NOztAAAAA&pid=Api&P=0&h=180",
//     "category": "gifts"
//   },
//   {
//     "id": 8,
//     "title": "cellphone cover",
//     "description": "A set of elegant cellphone cover.",
//     "price": 20.00,
//     "image": "https://tse2.mm.bing.net/th?id=OIP.ZdExKmA9cCRMRyQyfqgJKwHaHa&pid=Api&P=0&h=180",
//     "category": "gifts"
//   },
//   {
//     "id": 9,
//     "title": "Cellphone cover",
//     "description": "A pink phone cover with heart symbol",
//     "price": 60.00,
//     "image": "https://img.ltwebstatic.com/images3_pi/2023/02/14/1676371123ea47dceaa6477d2d14f29e28c4616919_thumbnail_600x.jpg",
//     "category": "gifts"
//   },
//   {
//     "id": 10,
//     "title": "Cellphone cover",
//     "description": "A white phone cover with design.",
//     "price": 45.00,
//     "image": "https://i.etsystatic.com/25495567/r/il/4d7a4b/3226702338/il_1588xN.3226702338_ilxk.jpg",
//     "category": "gifts"
//   }

// ]

// let postForm = document.getElementById("pBtn");
//             postForm.addEventListener("click", async (e) => {
//               e.preventDefault();
//               await set(ref(database, "artyhub"), {
//                 art: art,
//                 dresses: dresses,
//                 gifts: gifts
//               }).then(() => {
//                 alert("Job posted successfully");
//               });
//             });

document.getElementById("dress").addEventListener("click",()=>main(dresses))
document.getElementById("gift1").addEventListener("click",()=>main(gifts))
document.getElementById("art").addEventListener("click",()=>main(art))
document.getElementById("gift2").addEventListener("click",()=>main(gifts))
// let gift = document.querySelectorAll(".gift")
// console.log(gift);
// gift.addEventListener("click",()=>main(gifts))

function main(type=null){
    const mainBody = document.getElementById('mainbody');
    mainBody.innerHTML=""
    type.forEach(item => {
        let card = document.createElement("div")
        card.innerHTML = `
        <div class="card" class="animate__animated animate__bounce"style="width: 25%; height: 650px; border: 1px solid #ddd; padding: 5px; margin: 5px; border-radius: 5px; box-sizing: border-box; display: inline-block; vertical-align: top;">
          <div>
            <h3>${item.title}</h3>
            <img src="${item.image}" alt="${item.title}" style="width: 350px; height: 400px; display: block; margin: 0 auto;">
            <p>${item.description}</p>
            <p>Price: $${item.price}</p>
            <button id="addToCart">Add To Cart</button>
            <button>Buy Now</button>
            
          </div>
        </div>
      `
    
      mainBody.appendChild(card)
      // Add to Cart Functionality


card.querySelector("#addToCart").addEventListener("click", async () => {
    try {
        const user = auth.currentUser;
        if (!user) {
            alert("Please log in to add items to the cart.");
            return;
        }

        const cartRef = ref(database, `users/${user.uid}/cart`);
        await push(cartRef, {
            ...item,
            price: Number(item.price) // Ensure price is a number
        });
        
        // alert("Item added to cart successfully!");
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
})


}

searchInput.addEventListener("focus", async (e) => {
    mainbody.innerHTML = ""; 
    e.preventDefault();
    displayItems([...art, ...dresses, ...gifts]);
});

searchInput.addEventListener("input", async (e) => {
    mainbody.innerHTML = ""; 
    e.preventDefault();

    let searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm === "") {
        displayItems([...art, ...dresses, ...gifts]);
    } else {
        // Filter items based on the search term (e.g., by category or title)
        let filteredItems = [
            ...art,
            ...dresses,
            ...gifts
        ].filter(item => 
            
            item.category.toLowerCase().includes(searchTerm)
        );

        displayItems(filteredItems); // Display filtered items
    }
});

function displayItems(items) {
    const mainBody = document.getElementById('mainbody');
    mainBody.innerHTML = "";

    // Create container with animation
    const container = document.createElement('div');
    container.className = 'container mt-5 animate__animated animate__fadeIn';
    container.style.paddingTop = '60px';

    // Add category title
    const titleElement = document.createElement('h2');
    titleElement.className = 'text-center mb-4';
    titleElement.textContent = `${items[0].category} Collection`;
    container.appendChild(titleElement);

    // Create row for cards
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
                <p class="card-text flex-grow-1">${item.description}</p>
                <p>$${item.price.toFixed(2)}</p>
                <div class="d-flex justify-content-between mt-3">
                    <button class="btn btn-outline-primary add-to-cart">
                        <i class="fas fa-cart-plus"></i> Add To Cart
                    </button>
                    <button class="btn btn-success">
                        <i class="fas fa-shopping-bag"></i> Buy Now
                    </button>
                </div>
            </div>
        `;

        // Add hover effect
        card.addEventListener('mouseenter', () => {
            card.classList.add('shadow');
            card.style.transform = 'translateY(-5px)';
            card.style.transition = 'all 0.3s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.classList.remove('shadow');
            card.style.transform = 'translateY(0)';
        });

        // Add to Cart Button Event Listener
        const addToCartButton = card.querySelector('.add-to-cart');
        addToCartButton.addEventListener('click', async () => {
            try {
                const user = auth.currentUser;
                if (!user) {
                    alert("Please log in to add items to the cart.");
                    return;
                }

                // Reference to the user's cart in Firebase
                const cartRef = ref(database, `users/${user.uid}/cart`);

                // Push the item to the cart
                await push(cartRef, item);
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

// Generic function to display category items
function displayCategoryItems(items, categoryTitle) {
    const mainBody = document.getElementById('mainbody');
    // Clear existing content
    mainBody.innerHTML = "";
    
    // Create container with animation
    const container = document.createElement('div');
    container.className = 'container mt-5 animate__animated animate__fadeIn';
    container.style.paddingTop = '60px';
    
    // Add category title
    const titleElement = document.createElement('h2');
    titleElement.className = 'text-center mb-4';
    titleElement.textContent = categoryTitle;
    container.appendChild(titleElement);
    
    // Create row for cards
    const row = document.createElement('div');
    row.className = 'row g-5';
    
    // Loop through items and create cards
    items.forEach(item => {
        const col = document.createElement('div');
        col.className = 'col-12 col-md-6 col-lg-4';
        
        const card = document.createElement('div');
        card.className = 'card h-100 shadow-sm';
        item.price = Number(item.price)
        card.innerHTML = `
            <div class="">
                <img src="${item.image}" 
                     class="card-img-top" 
                     alt="${item.title}" 
                     style="height: 450px; object-fit: cover;">
            </div>
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text flex-grow-1">${item.description??"hello World"}</p>
                <p>$${item.price.toFixed(2)}</p>
                <div class="d-flex justify-content-between mt-3">
                    <button class="btn btn-outline-primary" id="addToCart">
                        <i class="fas fa-cart-plus"></i> Add To Cart
                    </button>
                    <button class="btn btn-success">
                        <i class="fas fa-shopping-bag"></i> Buy Now
                    </button>
                </div>
            </div>
        `;
        
        // Add hover effect
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
                await push(cartRef, item);
                // alert("Item added to cart successfully!");
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

    // Check if category is valid
    if (["art", "gifts", "dresses"].includes(category)) {
        const db = getDatabase();
        let categoryRef = ref(db, `artyhub/${category}`); // Reference category

        try {
            // Get existing data
            let snapshot = await get(categoryRef);
            let existingData = snapshot.val() || []; // Default to empty array if null

            // Ensure it's an array before pushing new data
            // if (!Array.isArray(existingData)) {
            //     existingData = Object.values(existingData); // Convert object back to an array
            // }

            // Append the new object
            existingData.push(obj);

            // Save the updated array back to Firebase
            await set(categoryRef, existingData);

            alert(`Item added successfully to ${category}`);
        } catch (error) {
            console.error("Error adding item:", error);
            alert("Failed to add item.");
        }
    } else {
        alert("Invalid category selected.");
    }

   await fetchData()
});

let cart = document.getElementById("cart");
cart.addEventListener("click", async () => {
    mainbody.innerHTML = ""; // Clear the mainbody before displaying cart items
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
    // Fetch and Display Cart Items
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
                return Object.values(snapshot.val());
            } else {
                console.log("No items in the cart.");
                return [];
            }
        } catch (error) {
            console.error("Error fetching cart items:", error);
            return [];
        }
    }

    // async function displayCartItems() {
    //     const cartItems = await fetchCartItems();
    //     const mainBody = document.getElementById('mainbody');

    //     if (cartItems.length === 0) {
    //         mainBody.innerHTML = "<p>Your cart is empty.</p>";
    //         return;
    //     }

    //     mainBody.innerHTML = ""; // Clear the mainbody before displaying cart items

    //     // Create container for cart items
    //     const container = document.createElement('div');
    //     container.className = 'container mt-5 animate__animated animate__fadeIn';
    //     container.style.paddingTop = '60px';

    //     // Add cart title
    //     const titleElement = document.createElement('h2');
    //     titleElement.className = 'text-center mb-4';
    //     titleElement.textContent = 'Your Cart';
    //     container.appendChild(titleElement);

    //     // Create row for cart items
    //     const row = document.createElement('div');
    //     row.className = 'row g-5';

    //     cartItems.forEach((item, index) => {
    //         const col = document.createElement('div');
    //         col.className = 'col-12 col-md-6 col-lg-4';

    //         const cartItem = document.createElement('div');
    //         cartItem.className = 'card h-100 shadow-sm';
    //         cartItem.innerHTML = `
    //             <div class="">
    //             <p>${item.id}</p>
    //                 <img src="${item.image}" 
    //                      class="card-img-top" 
    //                      alt="${item.title}" 
    //                      style="height: 450px; object-fit: cover;">
    //             </div>
    //             <div class="card-body d-flex flex-column">
    //                 <h5 class="card-title">${item.title}</h5>
    //                 <p class="card-text flex-grow-1">${item.description}</p>
    //                 <p>$${item.price}</p>
    //                 <div class="d-flex justify-content-between mt-3">
    //                     <button class="btn btn-success">
    //                     <i class="fas fa-shopping-bag"></i> Buy Now
    //                 </button>
    //                     <button class="btn btn-danger" onclick="removeFromCart('${index}')" id="removeBtn">
    //                         <i class="fas fa-trash"></i> Remove
    //                     </button>
    //                 </div>
    //             </div>
    //         `;

    //         // let removeItem=cartItem.querySelector("#removeBtn");
    //         // removeItem.addEventListener("click",(e)=>{
    //         //     e.stopImmediatePropagation()
    //         //   return  removeFromCart(item.id)
    //         // })
       

    //         col.appendChild(cartItem);
    //         row.appendChild(col);
    //     });

    //     container.appendChild(row);
    //     mainBody.appendChild(container);
    // }


    // async function displayCartItems() {
    //     const cartItems = await fetchCartItems();
    //     const mainBody = document.getElementById('mainbody');
    
    //     if (cartItems.length === 0) {
    //         mainBody.innerHTML = "<p>Your cart is empty.</p>";
    //         return;
    //     }
    
    //     mainBody.innerHTML = ""; // Clear the mainbody before displaying cart items
    
    //     // Create container for cart items
    //     const container = document.createElement('div');
    //     container.className = 'container mt-5 animate__animated animate__fadeIn';
    //     container.style.paddingTop = '60px';
    
    //     // Add cart title
    //     const titleElement = document.createElement('h2');
    //     titleElement.className = 'text-center mb-4';
    //     titleElement.textContent = 'Your Cart';
    //     container.appendChild(titleElement);
    
    //     // Create row for cart items
    //     const row = document.createElement('div');
    //     row.className = 'row g-5';
    
    //     // Calculate total price
    //     const totalPrice = cartItems.reduce((total, item) => total + Number(item.price), 0);
    
    //     // Add total price display at the top
    //     const totalDisplay = document.createElement('div');
    //     totalDisplay.className = 'alert alert-primary text-center mb-4';
    //     totalDisplay.innerHTML = `
    //         <h4 class="mb-0">Total: $${totalPrice.toFixed(2)}</h4>
    //     `;
    //     container.appendChild(totalDisplay);
    
    //     cartItems.forEach((item, index) => {
    //         const col = document.createElement('div');
    //         col.className = 'col-12 col-md-6 col-lg-4';
    
    //         const cartItem = document.createElement('div');
    //         cartItem.className = 'card h-100 shadow-sm';
    //         cartItem.innerHTML = `
    //             <div class="">
    //                 <img src="${item.image}" 
    //                      class="card-img-top" 
    //                      alt="${item.title}" 
    //                      style="height: 450px; object-fit: cover;">
    //             </div>
    //             <div class="card-body d-flex flex-column">
    //                 <h5 class="card-title">${item.title}</h5>
    //                 <p class="card-text flex-grow-1">${item.description}</p>
    //                 <p class="text-primary fw-bold">$${Number(item.price).toFixed(2)}</p>
    //                 <div class="d-flex justify-content-between mt-3">
    //                     <button class="btn btn-success">
    //                         <i class="fas fa-shopping-bag"></i> Buy Now
    //                     </button>
    //                     <button class="btn btn-danger" onclick="removeFromCart('${index}')" id="removeBtn">
    //                         <i class="fas fa-trash"></i> Remove
    //                     </button>
    //                 </div>
    //             </div>
    //         `;
    
    //         col.appendChild(cartItem);
    //         row.appendChild(col);
    //     });
    
    //     container.appendChild(row);
    //     mainBody.appendChild(container);
    // }
    async function displayCartItems() {
        const cartItems = await fetchCartItems();
        const mainBody = document.getElementById('mainbody');
    
        if (cartItems.length === 0) {
            mainBody.innerHTML = "<p class='text-center mt-5'>Your cart is empty.</p>";
            return;
        }
    
        mainBody.innerHTML = ""; // Clear the mainbody
    
        // Create container for cart items
        const container = document.createElement('div');
        container.className = 'container mt-5 animate__animated animate__fadeIn';
        container.style.paddingTop = '60px';
    
        // Add cart title
        const titleElement = document.createElement('h2');
        titleElement.className = 'text-center mb-4';
        titleElement.textContent = 'Your Cart';
        container.appendChild(titleElement);
    
        // Create row for cart items
        const row = document.createElement('div');
        row.className = 'row g-5';
    
        // Store the keys along with items for proper removal
        const itemsWithKeys = Object.entries(cartItems).map(([key, value]) => ({
            key,
            ...value
        }));
    
        itemsWithKeys.forEach((item) => {
            const col = document.createElement('div');
            col.className = 'col-12 col-md-6 col-lg-4';
    
            const cartItem = document.createElement('div');
            cartItem.className = 'card h-100 shadow-sm';
            cartItem.innerHTML = `
                <div class="">
                    <img src="${item.image}" 
                         class="card-img-top" 
                         alt="${item.title}" 
                         style="height: 450px; object-fit: cover;">
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text flex-grow-1">${item.description}</p>
                    <p class="text-primary fw-bold">$${Number(item.price).toFixed(2)}</p>
                    <div class="d-flex justify-content-between mt-3">
                        <button class="btn btn-success">
                            <i class="fas fa-shopping-bag"></i> Buy Now
                        </button>
                        <button class="btn btn-danger remove-item" data-key="${item.key}" data-price="${item.price}">
                            <i class="fas fa-trash"></i> Remove
                        </button>
                    </div>
                </div>
            `;
    
            col.appendChild(cartItem);
            row.appendChild(col);
        });
    
        container.appendChild(row);
    
        // Calculate total price
        const totalPrice = itemsWithKeys.reduce((total, item) => total + Number(item.price), 0);
    
        // Create total price section at bottom
        const totalSection = document.createElement('div');
        totalSection.className = 'container mt-4 mb-5';
        totalSection.innerHTML = `
            <div class="card shadow">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col">
                            <h3 class="mb-0">Cart Total</h3>
                        </div>
                        <div class="col text-end">
                            <h3 class="mb-0" id="cartTotal">$${totalPrice.toFixed(2)}</h3>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col">
                            <button class="btn btn-primary btn-lg w-100">
                                Proceed to Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    
        mainBody.appendChild(container);
        mainBody.appendChild(totalSection);
    
        // Add event listeners for remove buttons
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', async function() {
                const itemKey = this.getAttribute('data-key');
                const itemPrice = Number(this.getAttribute('data-price'));
                await removeFromCart(itemKey, itemPrice);
            });
        });
    }
    
    async function removeFromCart(itemKey, itemPrice) {
        try {
            const user = auth.currentUser;
            if (!user) {
                alert("Please log in to manage your cart.");
                return;
            }
    
            const itemRef = ref(database, `users/${user.uid}/cart/${itemKey}`);
            await remove(itemRef);
    
            // Update the total immediately
            const currentTotal = document.getElementById('cartTotal');
            if (currentTotal) {
                const totalPrice = Number(currentTotal.textContent.replace('$', ''));
                const newTotal = totalPrice - itemPrice;
                currentTotal.textContent = `$${newTotal.toFixed(2)}`;
            }
    
            // Refresh the entire cart display if the total is 0
            if (currentTotal && currentTotal.textContent === '$0.00') {
                await displayCartItems();
            } else {
                // Remove just the card element
                const cardElement = document.querySelector(`[data-key="${itemKey}"]`).closest('.col');
                cardElement.remove();
            }
    
            alert("Item removed from cart.");
        } catch (error) {
            console.error("Error removing item from cart:", error);
            alert("Failed to remove item from cart.");
        }
    }

    // async function removeFromCart(itemKey) {
    //     try {
    //         const user = auth.currentUser;
    //         if (!user) {
    //             alert("Please log in to manage your cart.");
    //             return;
    //         }
    
    //         console.log("Removing item with key:", itemKey);
    
    //         const itemRef = ref(database, `users/${user.uid}/cart/${itemKey}`);
    //         await remove(itemRef);
    
    //         alert("Item removed from cart.");
    //         await displayCartItems();
    //     } catch (error) {
    //         console.error("Error removing item from cart:", error);
    //         alert("Failed to remove item from cart.");
    //     }
    // }
    
    window.removeFromCart = removeFromCart;
    window.displayCartItems = displayCartItems;
    await displayCartItems(); // Call the function to display cart items
});

// Function to remove an item from the cart
// Function to remove an item from the cart
// async function removeFromCart(itemKey) {
//     try {
//         const user = auth.currentUser;
//         if (!user) {
//             alert("Please log in to manage your cart.");
//             return;
//         }

//         console.log("Removing item with key:", itemKey); // Debugging log

//         const itemRef = ref(database, `users/${user.uid}/cart/${itemKey}`);
//         await remove(itemRef); // Remove item from Firebase

//         alert("Item removed from cart.");
//         await displayCartItems(); // Refresh cart display
//     } catch (error) {
//         console.error("Error removing item from cart:", error);
//         alert("Failed to remove item from cart.");
//     }
// }


// Expose function to the global scope


const logout = document.getElementById("logout");

if (logout) {
  logout.addEventListener("click", async (e) => {
    e.preventDefault(); // Prevents default action

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

      // Redirect after logout confirmation
      location.href = "navbar.html";
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
