import Button from "../button/index.jsx";
import {useSnapshot} from "valtio";
import {question, score, section, timer} from "../../proxyState/index.js";
import {resetAndNext} from "../../proxyState/index.js";
import classNames from "classnames";
import {useEffect, useState} from "react";

export const Alternativas = () =>{

    const snapSection = useSnapshot(section)
    const snapQuestion = useSnapshot(question)
    const snapScore = useSnapshot(score)
    const snapTimer = useSnapshot(timer)

    const [show, setShow] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(false);

    const altCorreta = snapSection.sections[snapSection.current].questoes[snapQuestion.current].correta

    const showResult = (key) =>{

        setBtnDisabled(true)

        if (key == altCorreta){
            score.value += 40 - snapTimer.value
        }

        timer.stop = true
        setShow(true)

        setTimeout(()=>{
            timer.stop = false
            setShow(false)
            resetAndNext()
            setBtnDisabled(false)
        }, 3000)
    }

    useEffect(() => {
        if(snapTimer.value > snapTimer.maxValue){
            showResult();
            timer.value = 0;
        }
    }, [timer.value]);

    return (
        <>
            <div className={'flex flex-col w-full mt-3 gap-3'}>
                {snapSection.sections[snapSection.current].questoes[snapQuestion.current].respostas.map((alternativa, key) => (
                    <Button disabled={btnDisabled} onClick={()=> showResult(key)} key={key} className={classNames('text-sm', show && key == altCorreta ? 'bg-green-600 border-green-900' : show && key != altCorreta ? 'bg-red-500 border-red-900' : '')}>
                        {alternativa}
                    </Button>
                ))}
            </div>
        </>
    )
}