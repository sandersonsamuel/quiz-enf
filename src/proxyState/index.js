import { proxy } from "valtio";
import Json from '../questoes/data.json'

export const userName = proxy({
  value: ''
})

export const section = proxy({
  current: 0,
  sections: Json.secoes
})

export const question = proxy({
  current: 0,
  currentTotal: 0
})

export let timer = proxy({
  value: 0,
  stop: false,
  maxValue: 20
})

export const score = proxy({
  value: 0
})

export const alternativas = proxy({
  corretas: 0,
  total: 33
})

export const showResult = proxy({
  value: false,
})

export const resetVariables = () =>{
  question.current = 0
  question.currentTotal = 0
  section.current = 0
  timer.value = 0
  alternativas.corretas = 0
  score.value = 0
  userName.value = ''
  showResult.value = false
}

export const saveScore = () =>{
  if (Number(localStorage.getItem('maxScore')) < score.value){
    localStorage.setItem('maxScore', score.value.toFixed(2))
  }
}

export const finishQuiz = () =>{
  saveScore()
  showResult.value = true
  timer.stop = true
}

export const resetAndNext = () => {
  if (question.currentTotal < alternativas.total - 1) {
    const currentSection = section.sections[section.current];
    const isLastQuestionInSection = question.current === currentSection.questoes.length - 1;

    if (isLastQuestionInSection) {
      // Avança para a próxima seção se for a última pergunta da seção
      section.current += 1;
      question.current = 0;
    } else {
      // Avança para a próxima pergunta na mesma seção
      question.current += 1;
    }

    question.currentTotal += 1;
    timer.value = 0;
  } else {
    finishQuiz();
  }
};
