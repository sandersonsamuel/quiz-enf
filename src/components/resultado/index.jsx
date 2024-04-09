import trofeu from '../../assets/giphy.gif'
import {alternativas} from "../../proxyState/index.js";

export const Resultado = () => {
    return(
        <>
            <div
                className={'absolute bg-roxo-100 top-1/2 text-white left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 min-h-3/5 max-w-[500px] max-h-[500px] rounded-xl p-7'}>

                <p className={'text-3xl text-center font-bold'}>Quiz concluido!</p>

                <div className={'w-full flex justify-center items-center'}>
                    <img src={trofeu} alt="troféu animado" className={'w-3/5'}/>
                </div>

                <div className={'flex flex-col items-center justify-evenly gap-3 font-bold'}>

                    <p className={'text-center text-2xl'}>
                        Perguntas certas: {alternativas.corretas}/{alternativas.total}
                    </p>

                    <p className={'text-center text-2xl'}>
                        Pontuação: {alternativas.corretas}
                    </p>

                    <p className={'text-center text-2xl'}>
                        Melhor pontuação: {alternativas.corretas}
                    </p>

                </div>


            </div>
        </>
    )
}