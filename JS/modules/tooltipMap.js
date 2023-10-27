export default function tooltipMapHandler(){
  const mapa = document.querySelector('.mapa')
  const textoCriado = document.createElement('p')

  function handleTooltipHover(){
    textoCriado.classList.add('textoMapa')
    textoCriado.innerText = 'Cursor'
    mapa.appendChild(textoCriado)
  }

  function handleTooltipLeave(){
    textoCriado.remove()
  }

  function handleTooltipMove(event){
    textoCriado.style.top = event.offsetY + 10 + 'px'
    textoCriado.style.left = event.offsetX + 10 + 'px'
  }

  mapa.addEventListener('mousemove', handleTooltipMove)
  mapa.addEventListener('mouseover', handleTooltipHover)
  mapa.addEventListener('mouseleave', handleTooltipLeave)
}