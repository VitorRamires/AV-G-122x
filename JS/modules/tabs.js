
export default function navTab(){
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
}