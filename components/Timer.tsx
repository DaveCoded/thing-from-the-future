import { useTimer } from 'use-timer'
import PlayPauseButton from './PlayPauseButton'

const Timer = () => {
    const { time, start, pause, reset, status } = useTimer({
        initialTime: 180,
        endTime: 0,
        timerType: 'DECREMENTAL'
    })
    const minutes = Math.floor(time / 60)
    let seconds: string = String(time - minutes * 60)
    seconds = +seconds < 10 ? '0' + seconds : seconds

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <button
                onClick={reset}
                style={{
                    marginBottom: '.5rem',
                    padding: '0.4rem 0.8rem',
                    border: '2px solid black',
                    borderRadius: '4px'
                }}
            >
                Reset
            </button>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '1rem' }}>{`${minutes}:${seconds}`}</span>
                <PlayPauseButton start={start} pause={pause} isRunning={status === 'RUNNING'} />
            </div>
        </div>
    )
}

export default Timer
