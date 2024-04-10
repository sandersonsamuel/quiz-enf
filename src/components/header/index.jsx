import {TimeBar} from "../timeBar/index.jsx";
import {score, section} from "../../proxyState/index.js";
import {useSnapshot} from "valtio";

export const Header = () =>{

    const { sections, current: currentSectionIndex } = useSnapshot(section);
    const { value: scoreValue } = useSnapshot(score);

    const currentSection = sections[currentSectionIndex];

    return (
        <>
            <div className={'w-full mt-5 text-white'}>

                <div className={'flex flex-col items-center justify-evenly gap-2'}>

                    <p className={'text-4xl font-bold text-center'}>
                        {currentSection.nome}
                    </p>

                    <p className={'font-bold text-xl'}>
                        Pontuação: {scoreValue.toFixed(2)}
                    </p>
                </div>

                <TimeBar/>

            </div>

        </>
    )
}