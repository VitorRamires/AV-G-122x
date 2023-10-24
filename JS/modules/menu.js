export default function menu(){
  const bars = document.querySelectorAll(".bar")
  const menu = document.querySelector(".menu")
  const mobileMenuIcon = document.querySelector('.menu-mobile-icon')
  
  

  function handleMenuMobile(){
    if(!menu.classList.contains('menuOn')){
      menu.classList.add('menuOn')
      bars.forEach(bar=>{
        bar.classList.add('close')
      })
 
    } else if (menu.classList.contains('menuOn')) {
      menu.classList.remove('menuOn')
      bars.forEach(bar=>{
        bar.classList.remove('close')
      })
    }
  }

  window.addEventListener('scroll', ()=>{
    const pageScroll = window.scrollY
    if(pageScroll > 0){
      menu.style.padding = 15 + "px"
    } else {
      menu.style.padding = 30 + "px"
    }
  })
  mobileMenuIcon.addEventListener('click', handleMenuMobile)
}
