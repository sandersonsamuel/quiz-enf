import Button from "../button/index.jsx";
import {useSnapshot} from "valtio";
import {alternativas, question, score, section, showResult, timer} from "../../proxyState/index.js";
import {resetAndNext} from "../../proxyState/index.js";
import {useEffect, useState} from "react";
import correctSound from '../../assets/soundEffects/Correct.wav'
import WrongSound from '../../assets/soundEffects/Wrong.wav'


export const Alternativas = () =>{

    const snapSection = useSnapshot(section)
    const snapQuestion = useSnapshot(question)
    const snapTimer = useSnapshot(timer)
    const snapShowResult = useSnapshot(showResult)

    const [show, setShow] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(false);

    const altCorreta = snapSection.sections[snapSection.current].questoes[snapQuestion.current].correta

    const showCorrect = (key) =>{

        setBtnDisabled(true)

        if (key === altCorreta){
            score.value += 20 - snapTimer.value/3
            alternativas.corretas += 1
            new Audio(correctSound).play()
        }

        if (key !== altCorreta){
            new Audio(WrongSound).play()
        }

        timer.stop = true
        setShow(true)

        setTimeout(()=>{
            timer.stop = false
            setShow(false)
            resetAndNext()
            setBtnDisabled(false)
        }, 0)
    }

    useEffect(() => {
        if(snapTimer.value > snapTimer.maxValue){
            showCorrect();
            timer.value = 0;
        }
    }, [timer.value]);

    useEffect(() => {
        if (showResult.value === true){
            setBtnDisabled(true)
        }
    }, [snapShowResult.value]);


    return (
        <>
            <div className={'flex flex-col w-full mt-3 gap-3'}>
                {snapSection.sections[snapSection.current].questoes[snapQuestion.current].respostas.map((alternativa, key) => (
                    <Button disabled={btnDisabled} color={show && key == altCorreta ? 'verde' : show && key != altCorreta ? 'vermelho' : 'roxo'} onClick={()=> showCorrect(key)} key={key} className={'text-sm'}>
                        {alternativa}
                    </Button>
                ))}
            </div>
        </>
    )
}