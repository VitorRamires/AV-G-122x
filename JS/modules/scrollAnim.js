export default function scrollAnime(){
  const animeElements = document.querySelectorAll('.scrollAnime')
  const windowHeight = window.innerHeight * 0.6

  function scrollAnimeHandle(){
    animeElements.forEach(elements=>{
      const topDistance = elements.getBoundingClientRect().top
      if(topDistance < windowHeight){
        elements.classList.add('scrollOn')
      }
    })
  }

  window.addEventListener('scroll', scrollAnimeHandle)
}