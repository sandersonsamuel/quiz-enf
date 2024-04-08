import { proxy } from "valtio";
import Json from '../questoes/data.json'

export const dataQuiz = proxy({
  data: Json
})

export const userName = proxy({
  name: ''
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

export const resetAndNext = () =>{
  if (question.currentTotal < 28){
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