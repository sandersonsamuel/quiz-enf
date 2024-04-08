import { Header } from "../../components/header/index.jsx";
import { QuizContent } from '../../components/quizContent/index.jsx'

const QuizPage = () => {

  return (
      <div className={'sm:flex sm:flex-col sm:items-center'}>
          <div className={'flex flex-col h-screen gap-5 max-w-[800px]'}>
              <Header/>
              <QuizContent/>
          </div>
      </div>
  )
}

export default QuizPage
