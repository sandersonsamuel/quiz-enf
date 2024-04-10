import { Header } from "../../components/header/index.jsx";
import { QuizContent } from '../../components/quizContent/index.jsx'
import {Resultado} from "../../components/resultado/index.jsx";
import {useSnapshot} from "valtio";
import {question} from "../../proxyState/index.js";

const QuizPage = () => {

    const snapQuestion = useSnapshot(question)

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
