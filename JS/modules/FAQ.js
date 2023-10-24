
export default function accordionList(){
  const questions = document.querySelectorAll('.FAQ-body')
  const respostas = document.querySelectorAll('.resposta p')
  const faqDecoration = document.querySelectorAll(".FAQ-decoration")

  function handleAccordionList(index){
      if(!respostas[index].classList.contains('active-accordion')){
        respostas[index].classList.add('active-accordion')
        faqDecoration[index].classList.add('anime-height')
      } else {
        respostas[index].classList.remove('active-accordion')
        faqDecoration[index].classList.remove('anime-height')
      }
      
  }

  questions.forEach((question, index) => {
    question.addEventListener('click', ()=>{
      handleAccordionList(index)
    })
  })
}