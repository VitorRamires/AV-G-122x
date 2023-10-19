export default function scrollAnime(){
  const animeElements = document.querySelectorAll('.anime-element')
  const windowHeight = window.innerHeight * 0.6
  const bodyDocument = document.querySelector('body')

  function scrollAnimeHandle(){
    animeElements.forEach(elements=>{
      const topDistance = elements.getBoundingClientRect().top
      if(topDistance < windowHeight){
        elements.classList.add('active')
      }
    })
  }

  scrollAnimeHandle()

  window.addEventListener('scroll', scrollAnimeHandle)

}

