import ProgressBar from "@ramonak/react-progress-bar";
import { useSnapshot } from "valtio";
import { question, section, timer, resetAndNext } from "../../proxyState/index.js";
import { useEffect } from "react";
import { MdWatchLater } from "react-icons/md";

export const TimeBar = () => {
    const maxTime = 20;

    const snapQuestion = useSnapshot(question);
    const snapSection = useSnapshot(section);
    const snapTimer = useSnapshot(timer);

    useEffect(() => {
        if (!timer.stop){
            const intervalId = setInterval(() => {
                timer.value += 1;
            }, 1000);

            return () => clearInterval(intervalId);
        }
    }, [timer.stop]);

    return (
        <div className={'flex w-full items-center justify-center gap-1'}>
            <ProgressBar className={'w-full'} completed={snapTimer.value} maxCompleted={snapTimer.maxValue} customLabel={' '} />
            <MdWatchLater className={'text-3xl'}/>
        </div>
    );
};
