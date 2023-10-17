
export default function accordionList(){
  const questions = document.querySelectorAll('.FAQ-body')
  const respostas = document.querySelectorAll('.FAQ-body .resposta')
  const faqDecoration = document.querySelectorAll(".FAQ-decoration")

  function handleAccordionList(index){
    
    respostas.forEach(resposta=>{
      resposta.classList.remove('active-accordion')
    })
    faqDecoration.forEach(decoration=>{
    decoration.classList.remove('anime-height')
    })

    respostas[index].classList.add('active-accordion')
    faqDecoration[index].classList.add('anime-height')
  }

  questions.forEach((question, index)=>{
    question.addEventListener('click', ()=>{
      handleAccordionList(index)
    })
  })
}