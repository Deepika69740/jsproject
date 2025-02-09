// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
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
// const database = getDatabase(app);


// async function fetchData() {
//     try {
//       const snapshot = await get(ref(database, "artyhub"));
//       if (snapshot.exists()) {
//         return snapshot.val();
//       } else {
//         console.error("No data available.");
//         return {};
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       return {};
//     }
//   }

// let data = await fetchData()
// console.log(data);

