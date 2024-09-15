const openNav = () => {
    document.getElementById("nav").style.right = "0"
}


const closeNav = () => {
    document.getElementById("nav").style.right = "-200px"
}

gsap.from('.hero', 1.2, {opacity: 0, x: 500, delay: 0.7})
gsap.from('header', 1.2, {opacity: 0, y: -200, delay: 0.8})
gsap.from('.featured__products', 1.2, {opacity: 0, x: -500, delay: 0.9})
gsap.from('footer', 1.2, {opacity: 0, y: 100, delay: 1.8})

