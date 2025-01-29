import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getDatabase, ref, set, get }  from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";
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

// let  postForm=document.getElementById("pBtn");
// postForm.addEventListener("click",async(e)=>{
//   e.preventDefault()
//    await set(ref(database,"artyhub"),{
//    art:art,
//    dresses:dresses,
//    gifts:gifts
//    }).then(()=>{
//     alert("job posted successfully")
//    })
 
// })
// async function fetchData() {
//   try {
//     const snapshot = await get(ref(database, "artyhub"));
//     if (snapshot.exists()) {
//       return snapshot.val(); 
//     } else {
//       console.error("No data available.");
//       return {}; 
//     }
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return {}; 
//   }
// }

// function displayData(items, containerId) {
//   const container = document.getElementById(containerId);
//   container.innerHTML = ""; 
//   items.forEach(item => {
//     const card = `
//       <div class="animate__animated animate__fadeInRight" style="width: 25%; height: 650px; border: 1px solid #ddd; padding: 5px; margin: 5px; border-radius: 5px; box-sizing: border-box; display: inline-block; vertical-align: top; background-color:"red;">
//         <div>
//           <h3>${item.title}</h3>
//           <img src="${item.image}" alt="${item.title}" style="width: 350px; height: 400px; display: block; margin: 0 auto;">
//           <p>${item.description}</p>
//           <p>Price: $${item.price}</p>
//             <button>Add To Cart</button>
//             <button>Buy Now</button>
//         </div>
//       </div>
//     `;
//     container.innerHTML += card;
//   });
// }
// fetchData().then(data => {
//   displayData(data.art, "artContainer");
//   displayData(data.dresses, "dressContainer");
//   displayData(data.gifts, "giftContainer");
// });




// // Event listener for search input



// document.getElementById("search").addEventListener("input", async (e) => {
//   const searchTerm = e.target.value.toLowerCase().trim(); // Get the search term in lowercase

//   // Fetch data (if needed, from Firebase or local data)
//   const data = {
//     art: art,
//     dresses: dresses,
//     gifts: gifts
//   };

//   // Clear all containers before displaying new results
//   clearAllContainers();

//   // Check if the search term matches a category and display relevant data
//   if (searchTerm === "art") {
//     displayData(data.art, "artContainer");
//   } else if (searchTerm === "dresses") {
//     displayData(data.dresses, "dressContainer");
//   } else if (searchTerm === "gifts") {
//     displayData(data.gifts, "giftContainer");
//   } else {
//     // If no match found, clear everything or show a message
//     document.getElementById("artContainer").innerHTML = "<p>No items found for this category.</p>";
//     document.getElementById("dressContainer").innerHTML = "<p>No items found for this category.</p>";
//     document.getElementById("giftContainer").innerHTML = "<p>No items found for this category.</p>";
//   }
// });

// // Function to display data in a given container
// function displayData(items, containerId) {
//   const container = document.getElementById(containerId);
//   container.innerHTML = ""; // Clear existing content
//   items.forEach(item => {
//     const card = `
//       <div class="card">
//         <h3>${item.title}</h3>
//         <img src="${item.image}" alt="${item.title}" style="width: 100px; height: 100px;">
//         <p>${item.description}</p>
//         <p>Price: $${item.price}</p>
//       </div>
//     `;
//     container.innerHTML += card;
//   });
// }

// // Function to clear all containers
// function clearAllContainers() {
//   document.getElementById("artContainer").innerHTML = "";
//   document.getElementById("dressContainer").innerHTML = "";
//   document.getElementById("giftContainer").innerHTML = "";
// }

// Firebase data arrays (for testing purposes)

// Firebase setup (initializing data)
let postForm = document.getElementById("pBtn");
postForm.addEventListener("click", async (e) => {
  e.preventDefault();
  await set(ref(database, "artyhub"), {
    art: art,
    dresses: dresses,
    gifts: gifts
  }).then(() => {
    alert("Job posted successfully");
  });
});

// Function to fetch data from Firebase
async function fetchData() {
  try {
    const snapshot = await get(ref(database, "artyhub"));
    if (snapshot.exists()) {
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

// Function to display data in a given container
function displayData(items, containerId) {
  
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // Clear existing content
  items.forEach(item => {

    const card = `
      <div class="card" class="animate__animated animate__bounce"style="width: 25%; height: 650px; border: 1px solid #ddd; padding: 5px; margin: 5px; border-radius: 5px; box-sizing: border-box; display: inline-block; vertical-align: top;">
        <div>
          <h3>${item.title}</h3>
          <img src="${item.image}" alt="${item.title}" style="width: 350px; height: 400px; display: block; margin: 0 auto;">
          <p>${item.description}</p>
          <p>Price: $${item.price}</p>
          <button>Add To Cart</button>
          <button>Buy Now</button>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}

// Function to clear all containers
// function clearAllContainers() {
//   document.getElementById("artContainer").innerHTML = "";
//   document.getElementById("dressContainer").innerHTML = "";
//   document.getElementById("giftContainer").innerHTML = "";
// }

// Event listener for search input

document.getElementById("search").addEventListener("input", async (e) => {
  const searchTerm = e.target.value.toLowerCase().trim(); // Get the search term

  // Fetch data
  const data = await fetchData();

  // Clear all containers before displaying new results
  // clearAllContainers();

  // Filter and display based on search term (category)
  if (searchTerm === "art") {
    displayData(data.art, "artContainer");
  } else if (searchTerm === "dresses") {
    displayData(data.dresses, "dressContainer");
  } else if (searchTerm === "gifts") {
    displayData(data.gifts, "giftContainer");
  } else {
    // Show message if no matching category found
    document.getElementById("artContainer").innerHTML = "";
    document.getElementById("dressContainer").innerHTML = "";
    document.getElementById("giftContainer").innerHTML = "";
    // Swal.fire({
    //   icon: "error",
    //   title: "Not found",
      
    // });
  }
});

// On page load, fetch data and display it by default (all categories)
fetchData().then(data => {
  displayData(data.art, "artContainer");
  displayData(data.dresses, "dressContainer");
  displayData(data.gifts, "giftContainer");
});
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
// import { getDatabase, ref, set, get }  from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyCVPdMv4iTpI19dax30goQhEksjnuXzhHw",
//   authDomain: "navb-5c270.firebaseapp.com",
//   projectId: "navb-5c270",
//   storageBucket: "navb-5c270.firebasestorage.app",
//   messagingSenderId: "467288180177",
//   appId: "1:467288180177:web:c0385252c8beb466088cf0"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const database = getDatabase(app);
// document.addEventListener('DOMContentLoaded', () => {
//     const images = document.querySelectorAll('.image-item');
//         images.forEach(image => {
//         image.addEventListener('click', () => {
//             const mainBody = document.getElementById('mainbody');
//             if (mainBody) {
//                 // location.href="./button.html"
//                 mainBody.innerHTML = ''; 
//                 mainBody.innerHTML=`
//                 <div id="main">
//                 <button id="pBtn">submit</button>
//                 <input placeholder="search here" id="search">
//                 <div id="artContainer" class="animate__animated animate__pulse"></div>
//                 <div id="dressContainer"></div>
//                 <div id="giftContainer"></div>
//                 </div>
//                 `
//             }
            
//             const  art= [
//                 {
//                   "id": 1,
//                   "title": "Abstract Painting",
//                   "description": "A beautiful abstract painting with vibrant colors.",
//                   "price": 120.00,
//                   "image": "https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg",
//                   "category": "art"
//                 },
//                 {
//                   "id": 2,
//                   "title": "Landscape Canvas",
//                   "description": "A serene landscape canvas perfect for home decor.",
//                   "price": 200.00,
//                   "image": "https://media.istockphoto.com/photos/mind-painting-background-picture-id469036036?k=6&m=469036036&s=612x612&w=0&h=8fjVzPQyyyyksbu0XLpanABsJ8uUHlN6vvasA2GU50w=",
//                   "category": "art"
//                 },
//                 {
//                   "id": 3,
//                   "title": "Modern Art Piece",
//                   "description": "An eye-catching modern art piece for contemporary spaces.",
//                   "price": 180.00,
//                   "image": "https://photofocus.com/wp-content/uploads/2022/08/kenlee-AI-generated-art-drawing-man-forest-Midjourney-HEADER-PHOTOFOCUS.jpg",
//                   "category": "art"
//                 },
//                 {
//                   "id": 4,
//                   "title": "Portrait Sketch",
//                   "description": "A detailed portrait sketch with intricate strokes.",
//                   "price": 150.00,
//                   "image": "https://wallpapers.com/images/file/abstract-art-pictures-a7sxgksf06iigkzt.jpg",
//                   "category": "art"
//                 },
//                 {
//                   "id": 5,
//                   "title": "Acrylic Artwork",
//                   "description": "A vibrant acrylic artwork showcasing bold patterns.",
//                   "price": 220.00,
//                   "image": "https://tse4.mm.bing.net/th?id=OIP.dZRdpGucdIepN3NjzSNkEwHaEo&pid=Api&P=0&h=180",
//                   "category": "art"
//                 },
//                 {
//                   "id": 6,
//                   "title": "Floral Watercolor",
//                   "description": "A delicate floral watercolor painting.",
//                   "price": 95.00,
//                   "image": "https://static.vecteezy.com/system/resources/previews/021/924/397/large_2x/beautiful-kathak-dance-painting-fine-art-generative-ai-photo.jpg",
//                   "category": "art"
//                 },
//                 {
//                   "id": 7,
//                   "title": "Abstract Wall Art",
//                   "description": "A stunning piece of abstract wall art for living spaces.",
//                   "price": 175.00,
//                   "image": "https://i1.wp.com/joyacousin.com/wp-content/uploads/2017/10/20171020_145612-01.jpg",
//                   "category": "art"
//                 },
//                 {
//                   "id": 8,
//                   "title": "Cubism Painting",
//                   "description": "A unique cubism painting inspired by Picasso.",
//                   "price": 300.00,
//                   "image": "https://wallpaperset.com/w/full/5/c/2/51687.jpg",
//                   "category": "art"
//                 },
//                 {
//                   "id": 9,
//                   "title": "Minimalist Art",
//                   "description": "A minimalist art piece with clean lines and subtle colors.",
//                   "price": 140.00,
//                   "image": "https://wallpaperset.com/w/full/5/c/2/51687.jpg",
//                   "category": "art"
//                 },
//                 {
//                   "id": 10,
//                   "title": "Nature-Inspired Artwork",
//                   "description": "An artwork inspired by the beauty of nature.",
//                   "price": 210.00,
//                   "image": "http://thewowstyle.com/wp-content/uploads/2015/01/art-gallery-josephine-wall-paintings-565-2.jpg",
//                   "category": "art"
//                 }
//               ]
//              const dresses=[
//                 {
//                   "id": 1,
//                   "title": "Summer Dress",
//                   "description": "A light and breezy summer dress in pastel shades.",
//                   "price": 50.00,
//                   "image": "https://4.bp.blogspot.com/-c22VALZlh9Y/UVqht3tQdTI/AAAAAAAAAEU/JdXb11t4tE4/s1600/9564-Sapphire.jpg",
//                   "category": "dresses"
//                 },
//                 {
//                   "id": 2,
//                   "title": "Evening Gown",
//                   "description": "An elegant evening gown for formal occasions.",
//                   "price": 150.00,
//                   "image": "https://cdn.shopify.com/s/files/1/0624/2382/6609/products/heavenly-dress-PG-F2038-a_1200x1999.jpg?v=1664919935",
//                   "category": "dresses"
//                 },
//                 {
//                   "id": 3,
//                   "title": "Casual Maxi Dress",
//                   "description": "A comfortable maxi dress for casual outings.",
//                   "price": 80.00,
//                   "image": "https://images.surferseo.art/e95004aa-62ea-49d4-98eb-81ee6356286a.jpeg",
//                   "category": "dresses"
//                 },
//                 {
//                   "id": 4,
//                   "title": "Cocktail Dress",
//                   "description": "A chic cocktail dress for evening parties.",
//                   "price": 130.00,
//                   "image": "https://i.pinimg.com/originals/00/68/df/0068df40c07620f3bdff921369583acf.jpg",
//                   "category": "dresses"
//                 },
//                 {
//                   "id": 5,
//                   "title": "Floral Midi Dress",
//                   "description": "A floral midi dress perfect for springtime.",
//                   "price": 90.00,
//                   "image": "https://i.pinimg.com/736x/0d/6a/e4/0d6ae4629876b973da21422640951df5.jpg",
//                   "category": "dresses"
//                 },
//                 {
//                   "id": 6,
//                   "title": "Bohemian Dress",
//                   "description": "A flowing bohemian dress with earthy tones.",
//                   "price": 110.00,
//                   "image": "https://cdn.shopify.com/s/files/1/0276/8666/6376/files/Silver_Lehenga_10_30d78b06-1751-445a-a573-7de208c01481_2048x2048.jpg?v=1595932069",
//                   "category": "dresses"
//                 },
//                 {
//                   "id": 7,
//                   "title": "Formal Office Dress",
//                   "description": "A formal dress suitable for office wear.",
//                   "price": 100.00,
//                   "image": "https://images.surferseo.art/e95004aa-62ea-49d4-98eb-81ee6356286a.jpeg",
//                   "category": "dresses"
//                 },
//                 {
//                   "id": 8,
//                   "title": "Party Dress",
//                   "description": "A stylish party dress with sequins.",
//                   "price": 170.00,
//                   "image": "https://i.pinimg.com/originals/db/a3/ba/dba3badc8ff56e8c5781bf2d5634496f.jpg",
//                   "category": "dresses"
//                 },
//                 {
//                   "id": 9,
//                   "title": "Winter Sweater Dress",
//                   "description": "A cozy sweater dress for the colder months.",
//                   "price": 120.00,
//                   "image": "https://i.pinimg.com/originals/0f/38/e5/0f38e54e1f31694f87bea08c88fb4849.jpg",
//                   "category": "dresses"
//                 },
//                 {
//                   "id": 10,
//                   "title": "Vintage Dress",
//                   "description": "A retro-style vintage dress with polka dots.",
//                   "price": 140.00,
//                   "image": "https://i.pinimg.com/736x/b6/5a/b8/b65ab89bfc23d24aabf1c8a154d3e779.jpg",
//                   "category": "dresses"
//                 }
//               ]
//               const gifts =[
//                 {
//                   "id": 1,
//                   "title": "Bag",
//                   "description": "A delightful Black bag with hanging.",
//                   "price": 75.00,
//                   "image": "https://endurapack.com/wp-content/uploads/CCT911Bblackptd.jpg",
//                   "category": "gifts"
//                 },
//                 {
//                   "id": 2,
//                   "title": "Bag",
//                   "description": "A grey desined bag.",
//                   "price": 25.00,
//                   "image": "https://m.media-amazon.com/images/I/71GS5ZrIKRS.AC_UL1500.jpg",
//                   "category": "gifts"
//                 },
//               {
//                 "id": 3,
//                 "title": "Bag",
//                 "description": "A soft bag for all ages.",
//                 "price": 30.00,
//                 "image": "https://tse4.mm.bing.net/th?id=OIP.yl0ZNuK_3lYgcmqsysS8OAHaFj&pid=Api&P=0&h=180",
//                 "category": "gifts"
//               },
//               {
//                 "id": 4,
//                 "title": "Bag",
//                 "description": "A bag with blue color design",
//                 "price": 40.00,
//                 "image": "https://i.pinimg.com/originals/52/3c/00/523c007185cdd2813691ca0ee5557e5f.jpg",
//                 "category": "gifts"
//               },
//               {
//                "id": 5,
//                 "title":"bracelite",
//                 "description": "A beautifully designed bracelite to cherish memories.",
//                 "price": 35.00,
//                 "image": "https://tse3.mm.bing.net/th?id=OIP.doCu2593kGeSf9kMKkN1sQHaE8&pid=Api&P=0&h=180",
//                 "category": "gifts"
//               },
//               {
//                 "id": 6,
//                 "title": "bracelite",
//                 "description": "A custom bracelite with engraving options.",
//                 "price": 15.00,
//                 "image": "https://tse4.mm.bing.net/th?id=OIP.9QJSXCB52T94Q-gGJL4cPwHaFP&pid=Api&P=0&h=180",
//                 "category": "gifts"
//               },
//               {
//                 "id": 7,
//                 "title": "bracelite",
//                 "description": "A gold bracelite for special occasions.",
//                 "price": 50.00,
//                 "image": "https://tse2.mm.bing.net/th?id=OIP.Q0y-nxDl9vNvIi9D8NOztAAAAA&pid=Api&P=0&h=180",
//                 "category": "gifts"
//               },
//               {
//                 "id": 8,
//                 "title": "cellphone cover",
//                 "description": "A set of elegant cellphone cover.",
//                 "price": 20.00,
//                 "image": "https://tse2.mm.bing.net/th?id=OIP.ZdExKmA9cCRMRyQyfqgJKwHaHa&pid=Api&P=0&h=180",
//                 "category": "gifts"
//               },
//               {
//                 "id": 9,
//                 "title": "Cellphone cover",
//                 "description": "A pink phone cover with heart symbol",
//                 "price": 60.00,
//                 "image": "https://img.ltwebstatic.com/images3_pi/2023/02/14/1676371123ea47dceaa6477d2d14f29e28c4616919_thumbnail_600x.jpg",
//                 "category": "gifts"
//               },
//               {
//                 "id": 10,
//                 "title": "Cellphone cover",
//                 "description": "A white phone cover with design.",
//                 "price": 45.00,
//                 "image": "https://i.etsystatic.com/25495567/r/il/4d7a4b/3226702338/il_1588xN.3226702338_ilxk.jpg",
//                 "category": "gifts"
//               }
            
//             ]
            
//             // Firebase setup (initializing data)
//             let postForm = document.getElementById("pBtn");
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
            
//             // Function to fetch data from Firebase
//             async function fetchData() {
//               try {
//                 const snapshot = await get(ref(database, "artyhub"));
//                 if (snapshot.exists()) {
//                   return snapshot.val();
//                 } else {
//                   console.error("No data available.");
//                   return {};
//                 }
//               } catch (error) {
//                 console.error("Error fetching data:", error);
//                 return {};
//               }
//             }
            
//             // Function to display data in a given container
//             function displayData(items, containerId) {
//               const container = document.getElementById(containerId);
//               container.innerHTML = ""; // Clear existing content
//               items.forEach(item => {
//                 const card = `
//                   <div class="card" class="animate__animated animate__bounce"style="width: 25%; height: 650px; border: 1px solid #ddd; padding: 5px; margin: 5px; border-radius: 5px; box-sizing: border-box; display: inline-block; vertical-align: top;">
//                     <div>
//                       <h3>${item.title}</h3>
//                       <img src="${item.image}" alt="${item.title}" style="width: 350px; height: 400px; display: block; margin: 0 auto;">
//                       <p>${item.description}</p>
//                       <p>Price: $${item.price}</p>
//                       <button>Add To Cart</button>
//                       <button>Buy Now</button>
//                     </div>
//                   </div>
//                 `;
//                 container.innerHTML += card;
//               });
//             }
            
//             // Event listener for search input
//             document.getElementById("search").addEventListener("input", async (e) => {
//               const searchTerm = e.target.value.toLowerCase().trim(); // Get the search term
            
//               // Fetch data
//               const data = await fetchData();
            
//               // Clear all containers before displaying new results
//               // clearAllContainers();
            
//               // Filter and display based on search term (category)
//               if (searchTerm === "art") {
//                 displayData(data.art, "artContainer");
//               } else if (searchTerm === "dresses") {
//                 displayData(data.dresses, "dressContainer");
//               } else if (searchTerm === "gifts") {
//                 displayData(data.gifts, "giftContainer");
//               } else {
//                 // Show message if no matching category found
//                 document.getElementById("artContainer").innerHTML = "";
//                 document.getElementById("dressContainer").innerHTML = "";
//                 document.getElementById("giftContainer").innerHTML = "";
//               }
//             });
            
//             // On page load, fetch data and display it by default (all categories)
//             fetchData().then(data => {
//               displayData(data.art, "artContainer");
//               displayData(data.dresses, "dressContainer");
//               displayData(data.gifts, "giftContainer");
//             });
//         });
//     });
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const explore = document.querySelectorAll('#explore');
//         explore.forEach(e => {
//         e.addEventListener('click', () => {
//             const mainBody = document.getElementById('mainbody');
//             if (mainBody) {
//                 mainBody.innerHTML = ''; 
                
//             }
//         });
//     });
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const images = document.querySelectorAll('.image-item');
//         images.forEach(image => {
//         image.addEventListener('click', () => {
//             const mainBody = document.getElementById('mainbody');
//             if (mainBody) {
//                 // location.href="./button.html"
//                 mainBody.innerHTML = ''; 
//                 mainBody.innerHTML=`
//                 <div id="main">
//                 <button id="pBtn">submit</button>
//                 <input placeholder="search here" id="search">
//                 <div id="artContainer" class="animate__animated animate__pulse"></div>
//                 <div id="dressContainer"></div>
//                 <div id="giftContainer"></div>
//                 </div>
//                 `
//             }
            
//             // Firebase setup (initializing data)
//             let postForm = document.getElementById("pBtn");
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
            
//             // Function to fetch data from Firebase
//             async function fetchData() {
//               try {
//                 const snapshot = await get(ref(database, "artyhub"));
//                 if (snapshot.exists()) {
//                   return snapshot.val();
//                 } else {
//                   console.error("No data available.");
//                   return {};
//                 }
//               } catch (error) {
//                 console.error("Error fetching data:", error);
//                 return {};
//               }
//             }
            
//             // Function to display data in a given container
//             function displayData(items, containerId) {
//               const container = document.getElementById(containerId);
//               container.innerHTML = ""; // Clear existing content
//               items.forEach(item => {
//                 const card = `
//                   <div class="card" class="animate__animated animate__bounce"style="width: 25%; height: 650px; border: 1px solid #ddd; padding: 5px; margin: 5px; border-radius: 5px; box-sizing: border-box; display: inline-block; vertical-align: top;">
//                     <div>
//                       <h3>${item.title}</h3>
//                       <img src="${item.image}" alt="${item.title}" style="width: 350px; height: 400px; display: block; margin: 0 auto;">
//                       <p>${item.description}</p>
//                       <p>Price: $${item.price}</p>
//                       <button>Add To Cart</button>
//                       <button>Buy Now</button>
//                     </div>
//                   </div>
//                 `;
//                 container.innerHTML += card;
//               });
//             }
            
//             // Event listener for search input
//             document.getElementById("search").addEventListener("input", async (e) => {
//               const searchTerm = e.target.value.toLowerCase().trim(); // Get the search term
            
//               // Fetch data
//               const data = await fetchData();
            
//               // Clear all containers before displaying new results
//               // clearAllContainers();
            
//               // Filter and display based on search term (category)
//               if (searchTerm === "art") {
//                 displayData(data.art, "artContainer");
//               } else if (searchTerm === "dresses") {
//                 displayData(data.dresses, "dressContainer");
//               } else if (searchTerm === "gifts") {
//                 displayData(data.gifts, "giftContainer");
//               } else {
//                 // Show message if no matching category found
//                 document.getElementById("artContainer").innerHTML = "";
//                 document.getElementById("dressContainer").innerHTML = "";
//                 document.getElementById("giftContainer").innerHTML = "";
//               }
//             });
            
//             // On page load, fetch data and display it by default (all categories)
//             fetchData().then(data => {
//               displayData(data.art, "artContainer");
//               displayData(data.dresses, "dressContainer");
//               displayData(data.gifts, "giftContainer");
//             });
//         });
//     });
// });