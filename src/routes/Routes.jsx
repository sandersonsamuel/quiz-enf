import { Route, Routes } from 'react-router-dom';
import Index from '../screens/indexPage/Index';
import QuizPage from '../screens/quizPage'
import PrivateRoute from './PrivateRoute';

const Rota = () => {

  return (
    <Routes>
      <Route path={'/'} element={<Index/>}/>
      <Route path={'/quiz'} element={
      <PrivateRoute>
        <QuizPage/>
      </PrivateRoute>}/>
    </Routes>
  )
}

export default Rota
