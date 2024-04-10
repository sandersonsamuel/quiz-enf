import {TimeBar} from "../timeBar/index.jsx";
import {section} from "../../proxyState/index.js";
import {useSnapshot} from "valtio";
import {useRecoilState} from "recoil";
import {scoreState} from "../../proxyState/index.js";

export const Header = () =>{

    const snapSection = useSnapshot(section)

    const [score, setScore] = useRecoilState(scoreState)

    return (
        <>
            <div className={'w-full mt-5 text-white'}>

                <div className={'flex flex-col items-center justify-evenly gap-2'}>

                    <p className={'text-4xl font-bold text-center'}>
                        {snapSection.sections[snapSection.current].nome}
                    </p>

                    <p className={'font-bold text-xl'}>
                        Pontuação: {score.toFixed(2)}
                    </p>

                </div>

                <TimeBar/>

            </div>

        </>
    )
}