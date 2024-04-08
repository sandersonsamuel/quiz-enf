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
                    <Button onClick={()=> showResult(key)} key={key} disabled={btnDisabled} className={classNames('font-normal hover:opacity-80 text-sm text-white transition-colors', key == altCorreta && show ? 'bg-green-700 border-green-900' : key != altCorreta && show ? 'bg-red-500 border-red-800': '')}>
                        {alternativa}
                    </Button>
                ))}
            </div>
        </>
    )
}