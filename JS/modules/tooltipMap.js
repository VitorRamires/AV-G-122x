export default function tooltipMapHandler(){
  const mapa = document.querySelector('.mapa')
  const textoCriado = document.createElement('p')

  function handleTooltipHover(){
    textoCriado.classList.add('textoMapa')
    textoCriado.innerText = 'Número 207, ao lado do hospital'
    mapa.appendChild(textoCriado)
  }

  function handleTooltipLeave(){
    textoCriado.remove()
  }

  function handleTooltipMove(event){
    textoCriado.style.top = event.offsetY + 20 + 'px'
    textoCriado.style.left = event.offsetX + 20 + 'px'
  }

  mapa.addEventListener('mousemove', handleTooltipMove)
  mapa.addEventListener('mouseover', handleTooltipHover)
  mapa.addEventListener('mouseleave', handleTooltipLeave)
}