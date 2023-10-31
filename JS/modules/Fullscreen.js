export default function fullScreenMode(){

  const fotos = document.querySelectorAll('.foto img')
  const fullScreenDisplay = document.querySelector('.fullscreen-foto')
  const fullScreenActive = document.querySelector('.fullscreen-mode')
  const closeBtn = document.querySelector('.closeBtn img')


  function clickOutside(event){
    const clickTargetElement = event.target
    
    if(clickTargetElement === fullScreenActive || clickTargetElement === closeBtn){
      fullScreenActive.classList.remove("fullOn")
    }
  }

  function handleFullscreen(index){
    let relativePathImg = fotos[index].getAttribute('src')
    console.log(relativePathImg)
    fullScreenActive.classList.add('fullOn') 
    fullScreenDisplay.style.backgroundImage = "url("+ relativePathImg +")"

    fullScreenActive.addEventListener('click', clickOutside)
  }


  if(window.matchMedia('(min-width:650px)').matches){
    fotos.forEach((foto, index)=>{
      foto.addEventListener('click', ()=>{
        handleFullscreen(index)
      })
    })
  }


}