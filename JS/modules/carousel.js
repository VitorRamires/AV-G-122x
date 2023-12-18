export default function carouselHandle(){

  const next = document.querySelector('.next')
  const previous = document.querySelector('.previous')
  const slides = document.querySelectorAll('.slide')

  slides.forEach((slide, index) => {
    slide.style.left = index * 100 + "%"
  })



  next.addEventListener('click', ()=>{
    counterSlider++
    carousel()
  })

  previous.addEventListener('click', ()=>{
    counterSlider--
    carousel()
  })

  
let counterSlider = 0
  function carousel (){
    if(counterSlider === slides.length){
      counterSlider = 0
    } else if (counterSlider < 0){
      counterSlider = slides.length - 1 
    }

    slides.forEach(slide => {
      slide.style.transform = `translateX(-${counterSlider * 100}%)`
    })
  }
  
  
}


