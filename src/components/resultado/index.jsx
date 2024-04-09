import trofeu from '../../assets/giphy.gif'
import {alternativas, score, showResult, userName} from "../../proxyState/index.js";
import Button from "../button/index.jsx";
import {Link} from "react-router-dom";
import classNames from "classnames";
import {useSnapshot} from "valtio";
import {useEffect} from "react";
import congrats from '../../assets/soundEffects/Congrats.wav'

export const Resultado = () => {

    const maxScore = localStorage.getItem('maxScore')
    const snapName = useSnapshot(userName)
    const snapShow = useSnapshot(showResult)

    useEffect(() => {
        if (snapShow.value){
            new Audio(congrats).play()
        }
    }, [snapShow]);

    return(
        <>
            <div
                className={classNames('absolute bg-roxo-100 top-1/2 text-white left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 min-h-3/5 max-w-[500px] max-h-[500px] rounded-xl p-7 border-4 border-roxo-200', !snapShow.value && 'hidden')}>

                <p className={'text-3xl text-center font-bold'}>Parabéns {snapName.value[0].toUpperCase() + snapName.value.slice(1)}, quiz concluido!</p>

                <div className={'w-full flex justify-center items-center'}>
                    <img src={trofeu} alt="troféu animado" className={'w-4/6 sm:w-[150px] pointer-events-none'}/>
                </div>

                <div className={'flex flex-col items-center justify-evenly font-bold sm:text-xl'}>

                    <p className={'text-centerl'}>
                        Perguntas certas: {alternativas.corretas}/{alternativas.total}
                    </p>

                    <p className={'text-center'}>
                        Pontuação: {score.value.toFixed(2)}
                    </p>

                    <p className={'text-center'}>
                        Melhor pontuação: {maxScore ? maxScore : score.value.toFixed(2)}
                    </p>

                </div>

                <Link to={'/'}>
                    <Button color={'rosa'} className={'hover:bg-pink-700 mt-5'}>
                        CONTINUAR
                    </Button>
                </Link>


            </div>
        </>
    )
}