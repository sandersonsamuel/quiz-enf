import {TimeBar} from "../timeBar/index.jsx";
import {pontuacao, section} from "../../proxyState/index.js";
import {useSnapshot} from "valtio";

export const Header = () =>{

    const snapSection = useSnapshot(section)
    const snapPontuacao = useSnapshot(pontuacao)

    const sectionCurrent = snapSection.sections[snapSection.current]

    return (
        <>
            <div className={'w-full mt-5 text-white'}>

                <div className={'flex flex-col items-center justify-evenly gap-2'}>

                    <p className={'text-4xl font-bold text-center'}>
                        {sectionCurrent.nome}
                    </p>

                    <p className={'font-bold text-xl'}>
                        Pontuação: {snapPontuacao.value}
                    </p>
                </div>

                <TimeBar/>

            </div>

        </>
    )
}