export default function menu(){
  const mobileMenuIcon = document.querySelector(".menu-mobile-icon")
  const menu = document.querySelector(".menu")
  
  

  function handleMenuMobile(){
    if(!menu.classList.contains('menuOn')){
      menu.classList.add('menuOn')
 
    } else if (menu.classList.contains('menuOn')) {
      menu.classList.remove('menuOn')

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
