import {alternativas, question, section} from "../../proxyState/index.js";
import {useSnapshot} from "valtio";
import {Alternativas} from "../alternativas/index.jsx";
import '../../App.css'

export const  QuizContent = () =>{

    const snapSection = useSnapshot(section)
    const snapQuestion = useSnapshot(question)
    const snapAlternativas = useSnapshot(alternativas)

    return (
        <>
            <div className={'bg-slate-800 w-full rounded-xl p-5 flex flex-col items-center gap-2 mb-5'}>

                <p className={'text-white font-medium'}>
                    Questão {snapQuestion.currentTotal + 1}/{snapAlternativas.total}
                </p>

                <p className={'text-center text-white font-bold text-xl pointer-events-none unselectable'}>
                    {snapSection.sections[snapSection.current].questoes[snapQuestion.current].pergunta}
                </p>

                <Alternativas/>

            </div>
        </>
    )
}