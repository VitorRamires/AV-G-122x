export default function mobile(){

  const mobileMenuIcon = document.querySelector(".menu-mobile-icon")
  const menu = document.querySelector(".menu")

  function handleMenuMobile(){
    if(!menu.classList.contains("menuOn")){
      menu.classList.add("menuOn")
    } else {
      menu.classList.remove("menuOn")
    }
  }

  mobileMenuIcon.addEventListener('click', handleMenuMobile)
  

}
