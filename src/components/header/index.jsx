import {TimeBar} from "../timeBar/index.jsx";
import {score, section} from "../../proxyState/index.js";
import {useSnapshot} from "valtio";

export const Header = () =>{

    const snapSection = useSnapshot(section)
    const snapScore = useSnapshot(score)

    return (
        <>
            <div className={'w-full mt-5 text-white'}>

                <div className={'flex flex-col items-center justify-evenly gap-2'}>

                    <p className={'text-4xl font-bold text-center'}>
                        {section.sections[snapSection.current].nome}
                    </p>

                    <p className={'font-bold text-xl'}>
                        Pontuação: {snapScore.value.toFixed(2)}
                    </p>
                </div>

                <div className={''}>
                    <TimeBar/>
                </div>

            </div>

        </>
    )
}