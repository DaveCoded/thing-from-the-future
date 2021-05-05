import { useTimer } from 'use-timer'
import PlayPauseButton from './PlayPauseButton'

const Timer = () => {
    const { time, start, pause, reset, status } = useTimer({
        initialTime: 10,
        endTime: 0,
        timerType: 'DECREMENTAL'
    })
    const minutes = Math.floor(time / 60)
    let seconds: string = String(time - minutes * 60)
    seconds = +seconds < 10 ? '0' + seconds : seconds

    return (
        <>
            <div>
                <PlayPauseButton start={start} pause={pause} isRunning={status === 'RUNNING'} />
                <button onClick={reset}>Reset</button>
            </div>
            <p>Elapsed time: {`${minutes}:${seconds}`}</p>
        </>
    )
}

export default Timer
