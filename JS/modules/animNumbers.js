
export default function animNumbers(){
  const numeros = Array.from(document.querySelectorAll("spam"))
 
  function animationRandomNumbers(){  
    numeros.forEach(num=>{
      const numbers = Number.parseFloat(num.innerText)
      const numbersInterval = setInterval(handleNumber, 10)
      let timer = 0
      let incremento = Math.floor(numbers / 90)
      
      function handleNumber(){
        timer += incremento
        num.innerHTML = timer
        if(timer >= numbers){
          num.innerHTML = numbers
          clearInterval(numbersInterval)
        }
      }
    })
  }
  
  function observerHandle(mutation){
    if(mutation[0].target.classList.contains("active")){
      observerAction.disconnect()
      animationRandomNumbers()
    }
  }

  const destaqueSection = document.querySelector(".destaque")
  const observerAction = new MutationObserver(observerHandle)

  observerAction.observe(destaqueSection, {attributes:true})



}

