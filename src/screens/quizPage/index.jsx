import { Header } from "../../components/header/index.jsx";
import { QuizContent } from '../../components/quizContent/index.jsx'
import {Resultado} from "../../components/resultado/index.jsx";
import {useEffect, useState} from "react";
import {useSnapshot} from "valtio";
import {question, saveScore, showResult, timer} from "../../proxyState/index.js";

const QuizPage = () => {

    const snapQuestion = useSnapshot(question)

    console.log(localStorage.getItem('maxScore'))


  return (
      <div className={'sm:flex sm:flex-col sm:items-center'}>
          <div className={'flex flex-col gap-5 max-w-[800px]'}>
              <Header/>
              <QuizContent/>
              <Resultado/>
          </div>
      </div>
  )
}

export default QuizPage
