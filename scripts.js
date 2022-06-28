const nav_link1 = document.getElementById('nav-link1')
const nav_link2 = document.getElementById('nav-link2')
const nav_link3 = document.getElementById('nav-link3')
const nav_link4 = document.getElementById('nav-link4')
const nav = document.getElementById('nav')


/* nav.children[0].addEventListener('mouseenter', ()=>{
    nav.children[0].classList.replace('wheat','green')
})

nav.children[0].addEventListener('mouseleave', ()=>{
    nav.children[0].classList.replace('green','wheat')
}) */

nav_link1.addEventListener('mouseenter', ()=>{
    nav_link1.classList.replace('wheat','green')
})

nav_link1.addEventListener('mouseleave', ()=>{
    nav_link1.classList.replace('green','wheat')
    
})

nav_link2.addEventListener('mouseenter', ()=>{
    nav_link2.classList.replace('wheat','green')
})

nav_link2.addEventListener('mouseleave', ()=>{
    nav_link2.classList.replace('green','wheat')
    
})

nav_link3.addEventListener('mouseenter', ()=>{
    nav_link3.classList.replace('wheat','green')
})

nav_link3.addEventListener('mouseleave', ()=>{
    nav_link3.classList.replace('green','wheat')
    
})

nav_link4.addEventListener('mouseenter',()=>{
    nav_link4.classList.replace('wheat', 'green')
})

nav_link4.addEventListener('mouseleave',()=>{
    nav_link4.classList.replace('green', 'wheat')
})

const user_category = document.getElementById('user_category')

user_category.addEventListener('mouseenter',()=>{
    user_category.textContent = 'Sicario Profesional'
    user_category.classList.replace('white','red')
})

user_category.addEventListener('mouseleave',()=>{
    user_category.textContent = 'Desarrollador Web'
    user_category.classList.replace('red','white')
})

const peor = document.getElementById('peor')

peor.addEventListener('mouseenter',()=>{
    peor.textContent= 'peor'
    peor.classList.replace('white', 'red')
})

peor.addEventListener('mouseleave',()=>{
    peor.textContent= 'mejor'
    peor.classList.replace('red', 'white')
})

const contacto1 = document.getElementById('contacto1')
const contacto2 = document.getElementById('contacto2')
const contacto3 = document.getElementById('contacto3')
const contacto4 = document.getElementById('contacto4')

contacto1.addEventListener('mouseenter', () =>{
    contacto1.classList.replace('wheat','green')
})

contacto1.addEventListener('mouseleave', () =>{
    contacto1.classList.replace('green','wheat')
})

contacto2.addEventListener('mouseenter', () =>{
    contacto2.classList.replace('wheat','green')
})

contacto2.addEventListener('mouseleave', () =>{
    contacto2.classList.replace('green','wheat')
})

contacto3.addEventListener('mouseenter', () =>{
    contacto3.classList.replace('wheat','green')
})

contacto3.addEventListener('mouseleave', () =>{
    contacto3.classList.replace('green','wheat')
})

contacto4.addEventListener('mouseenter', () =>{
    contacto4.classList.replace('wheat','green')
})

contacto4.addEventListener('mouseleave', () =>{
    contacto4.classList.replace('green','wheat')
})

const user_img = document.getElementById('user_img')

user_img.addEventListener('mouseenter',() =>{
    user_img.src = 'https://ae01.alicdn.com/kf/Hac78ab7d6dcf4abe9846595c247efbffa/Guts-Rage-Berserk-camisetas-de-Manga-corta-para-hombre-camisas-cl-sicas-de-espadach-n-sacrificio.jpg'
    user_category.textContent = 'Sicario Profesional'
    user_category.classList.replace('white','red')
})

user_img.addEventListener('mouseleave',() =>{
    user_img.src = 'assets/img/guts_175.jpg'
    user_category.textContent = 'Desarrollador Web'
    user_category.classList.replace('red','white')
})
