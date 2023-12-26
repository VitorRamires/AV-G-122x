export default function carouselHandle(){

  const next = document.querySelector('.next')
  const previous = document.querySelector('.previous')
  const slides = document.querySelectorAll('.slide')
  let counterSlider = 0

  slides.forEach((slide, index) => {
    slide.style.left = index * 100 + "%"
  })
  
  function carousel(){
    if(counterSlider === slides.length){
      counterSlider = 0
    } else if (counterSlider < 0){
      counterSlider = slides.length - 1 
    }
    slides.forEach(slide => {
      slide.style.transform = `translateX(-${counterSlider * 100}%)`
    })
  }
  function proximo(){
    counterSlider++
    carousel()
  }
  function anterior(){
    counterSlider--
    carousel()
  }

  next.addEventListener('click', ()=>{
    proximo()
  })
  previous.addEventListener('click', ()=>{
    anterior()
  })
}




