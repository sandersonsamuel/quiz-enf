import {TimeBar} from "../timeBar/index.jsx";
import {score, section} from "../../proxyState/index.js";
import {useSnapshot} from "valtio";

export const Header = () =>{

    const snapSection = useSnapshot(section)
    const snapScore = useSnapshot(score)

    const sectionCurrent = snapSection.sections[snapSection.current]

    return (
        <>
            <div className={'w-full mt-5 text-white'}>

                <div className={'text-4xl font-bold text-center flex flex-col items-center justify-evenly gap-2'}>

                    <p>Pontuação: {snapScore.value}</p>

                </div>

                <TimeBar/>

            </div>

        </>
    )
}