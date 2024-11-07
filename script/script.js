const bottomNone = document.querySelector(".bottom-none")
const lereMore = document.querySelector(".lereMore")

lereMore.addEventListener("click", ()=>{
    bottomNone.style.display = 'block'
    lereMore.style.display = 'none'
})

// modals

const nounModBtn = document.querySelector(".noun_mod-btn")
const noneNodduls = document.querySelector(".none_modduls")

nounModBtn.addEventListener("click", ()=>{
    noneNodduls.style.display = 'block'
    nounModBtn.style.display = 'none'
})

// Menyudagi oziq-ovqatlar va tanlangan holatini saqlash uchun useState
// const [menuItems, setMenuItems] = useState([
//     { name: 'Burger', selected: false },
//     { name: 'Pizza', selected: false },
//     { name: 'Fried Chicken', selected: false },
//     { name: 'Fries', selected: false },
//     { name: 'Soda', selected: false },
//   ]);

//   const Fy = () => {
//     const num = true;
//     return (
//       <h1>Hello {num ? "World" : "Wolf"}</h1>
//     );
//   }

//   const Click = () => {
//     console.log("Button clicked!");
//   };

AOS.init();