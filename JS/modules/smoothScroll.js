
export default function smoothScroll(){
  const links = document.querySelectorAll('a')

  function handleScroll(event){
    event.preventDefault()
    const currentLink = event.target.getAttribute('id')
    const actualSection = document.querySelector(`.${currentLink}`)
    window.scrollTo({ 
      top: actualSection.getBoundingClientRect().top - 100,
      behavior:'smooth'
    })
  }

  links.forEach(link=>{
    link.addEventListener('click', handleScroll)
  })
}