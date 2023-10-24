
export default function accordionList(){
  const questions = document.querySelectorAll('.FAQ-body')
  const respostas = document.querySelectorAll('.resposta p')
  const faqDecoration = document.querySelectorAll(".FAQ-decoration")

  function handleAccordionList(index){
      respostas[index].classList.toggle('active-accordion')
      faqDecoration[index].classList.toggle('anime-height')
  }

  questions.forEach((question, index) => {
    question.addEventListener('click', ()=>{
      handleAccordionList(index)
    })
  })
}