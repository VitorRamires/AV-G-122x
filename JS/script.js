/* tabs */

const tabs = document.querySelectorAll(".tab")
const textos = document.querySelectorAll('.texto')

function handleActiveTabs(index){
  tabs.forEach(tab=>{
    tab.classList.remove('active-tab')
    tab.classList.add('desactive-tab')
  })
  textos.forEach(texto=>{
    texto.classList.remove('active-texto')
  })
  tabs[index].classList.add('active-tab')
  textos[index].classList.add('active-texto')
}

tabs.forEach((tab, index)=>{
  tab.addEventListener("click", ()=>{
    handleActiveTabs(index)
  })
})

/* scroll */
  const links = document.querySelectorAll('a')

  function handleScroll(event){
    event.preventDefault()
    const currentLink = event.target.getAttribute('id')
    const actualSection = document.querySelector(`.${currentLink}`)
    window.scrollTo({
      behavior: 'smooth',
      top: actualSection.getBoundingClientRect().top
    })
  }

  links.forEach(link=>{
    link.addEventListener('click', handleScroll)
  })


  /* mapa */

  const mapa = document.querySelector('.mapa')
  const textoCriado = document.createElement('p')

  function handleTooltipHover(){
    textoCriado.classList.add('textoMapa')
    textoCriado.innerText = 'Mouse aqui'
    mapa.appendChild(textoCriado)
  }

  function handleTooltipLeave(){
    textoCriado.remove()
  }

  function handleTooltipMove(event){
    textoCriado.style.top = event.offsetY + 20 + 'px'
    textoCriado.style.left = event.offsetX + 20 + 'px'
    textoCriado.style.opacity = 1
    console.log(event)
  }

  mapa.addEventListener('mousemove', handleTooltipMove)
  mapa.addEventListener('mouseover', handleTooltipHover)
  mapa.addEventListener('mouseleave', handleTooltipLeave)