import { proxy } from "valtio";
import Json from '../questoes/data.json'

export const dataQuiz = proxy({
  data: Json
})

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

export let score = proxy({
  value: 0
})

export let alternativas = proxy({
  corretas: 0,
  total: 33
})

export const resetVariables = () =>{
  question.current = 0
  question.currentTotal = 0
  section.current = 0
  timer.value = 0
  alternativas.corretas = 0
  score.value = 0
  userName.value = ''
}

export const finishQuiz = () =>{

  resetVariables()
}

export const resetAndNext = () =>{
  if (question.currentTotal < alternativas.total - 1){
    if (question.current === section.sections[section.current].questoes.length - 1) {
      question.current = 0
      section.current += 1
      question.currentTotal += 1
    }else {
      question.current += 1
      question.currentTotal += 1
      timer.value = 0
    }
  }
}