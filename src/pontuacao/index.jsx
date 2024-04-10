import {score} from "../proxyState/index.js";
import {useSnapshot} from "valtio";

export const Pontuacao = ({className}) =>{

    const snapScore = useSnapshot(score)

    return(
        <>
            <p className={className}>
                Pontuação: {snapScore.value.toFixed(2)}
            </p>
        </>
    )
}