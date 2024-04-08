import {question, section} from "../../proxyState/index.js";
import {useSnapshot} from "valtio";
import {Alternativas} from "../alternativas/index.jsx";

export const  QuizContent = () =>{

    const snapSection = useSnapshot(section)
    const snapQuestion = useSnapshot(question)

    console.log(snapSection.sections)

    return (
        <>
            <div className={'bg-slate-800 w-full rounded-xl p-5 flex flex-col items-center gap-2'}>

                <p className={'text-white font-medium'}>
                    Questão {snapQuestion.current + 1}/28
                </p>

                <p className={'text-center text-white font-bold text-xl'}>
                    {snapSection.sections[snapSection.current].questoes[snapQuestion.current].pergunta}
                </p>

                <Alternativas/>

            </div>
        </>
    )
}