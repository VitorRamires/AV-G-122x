export default function mobile(){

  const mobileMenuIcon = document.querySelector(".menu-mobile-icon")
  const menu = document.querySelector(".menu")
  const barsMenu = document.querySelectorAll('.bar')

  function handleMenuMobile(){
    if(!menu.classList.contains('menuOn')){
      menu.classList.add('menuOn')
 
    } else if (menu.classList.contains('menuOn')) {
      menu.classList.remove('menuOn')

    }
  }

  mobileMenuIcon.addEventListener('click', handleMenuMobile)
}
