import {TimeBar} from "../timeBar/index.jsx";
import {score, section} from "../../proxyState/index.js";
import {useSnapshot} from "valtio";

export const Header = () =>{

    const snapSection = useSnapshot(section)
    const snapScore = useSnapshot(score)

    return (
        <>
            <div className={'w-full mt-3 text-white'}>

                <div className={'flex items-center justify-evenly'}>

                    <p className={'text-2xl font-bold text-center my-4'}>
                        {section.sections[snapSection.current].nome}
                    </p>

                    <p className={'font-bold'}>
                        Score: {snapScore.value}
                    </p>
                </div>

                <div className={''}>
                    <TimeBar/>
                </div>

            </div>

        </>
    )
}