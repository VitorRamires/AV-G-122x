export default function menu(){
  const bars = document.querySelectorAll(".bar")
  const menu = document.querySelector(".menu")
  const mobileMenuIcon = document.querySelector('.menu-mobile-icon')
  
  
  function handleMenuMobile(){
    const menuActive = menu.classList.toggle('menuOn')
    if(menuActive){
      bars.forEach(bar=>{
        bar.classList.add('close')
      })
    } else if (!menuActive){
      bars.forEach(bar=>{
        bar.classList.remove('close')
      })
    }
  }
  mobileMenuIcon.addEventListener('click', handleMenuMobile)
}
