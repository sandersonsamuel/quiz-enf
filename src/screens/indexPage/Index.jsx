import Input from '../../components/input'
import Button from '../../components/button'
import Modal from '../../components/modal'

import { useNavigate } from 'react-router-dom'
import { useSnapshot } from 'valtio'
import {resetVariables, userName} from '../../proxyState/index'
import {useState} from "react";

const Index = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const snap = useSnapshot(userName)

  resetVariables()


  const navigate = useNavigate()

  const toggleModal = () =>{
    setIsOpen(!isOpen)
  }

  const iniciarQuiz = () =>{
    if (name.length >= 3){
      userName.value = name
    }
    navigate('/quiz')
  }

  const contentModal =
  <>
    <b>Bem-vindo ao Quiz sobre Anamnese e Métodos Propedêuticos!&nbsp;</b>
    Prepare-se para testar seus conhecimentos sobre a avaliação física e histórico do paciente. Cada pergunta tem um limite de 15 segundos. Os tópicos incluem Inspeção, Palpação, Percussão, Ausculta e Anamnese. No final, sua pontuação revelará seu desempenho. Boa sorte!
  </>

  return (
      <div className={'flex flex-col h-full w-full justify-center items-center'}>
        <div className='text-white w-full h-full flex flex-col justify-center sm:max-w-[800px]'>

          <div className='flex flex-col gap-5'>

            <p className='text-4xl font-semibold tracking-tight max-w-full'>Aventura Propedêutica</p>
            <p className='text-2xl font-light text-justify'>Olá, acadêmico(a) de enfermagem!
              Seja bem-vindo(a) ao nosso quiz de métodos propedêuticos e anamnese!
              Prepare-se, pois a aventura está prestes a começar! Vamos lá?!</p>

            <Input label='Nome: ' type='text' placeholder={'Digite seu nome'} onChange={(e) => {
              setName(e.target.value)
            }} value={name}/>

            <Button onClick={iniciarQuiz} disabled={name.length < 3}
                    className='disabled:opacity-50 disabled:cursor-not-allowed text-xl' color={'roxo'}>
              INICIAR QUIZ
            </Button>

            <a className='underline text-xl cursor-pointer' onClick={toggleModal}>Como funciona</a>

            <Modal isOpen={isOpen} onClose={toggleModal} title={'Como funciona'} btnLabel={'ENTENDI'}
                   content={contentModal}/>

          </div>

        </div>
      </div>
  )
}

export default Index
