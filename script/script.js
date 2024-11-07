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


AOS.init();