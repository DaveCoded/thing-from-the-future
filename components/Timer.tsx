import styled from 'styled-components'
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
        <Wrapper>
            <ResetButton onClick={reset}>Reset</ResetButton>
            <TimerWrapper>
                <Countdown>{`${minutes}:${seconds}`}</Countdown>
                <PlayPauseButton start={start} pause={pause} isRunning={status === 'RUNNING'} />
            </TimerWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const ResetButton = styled.button`
    margin-bottom: 0.5rem;
    padding: 0.4rem 0.8rem;
    border: 2px solid black;
    border-radius: 4px;
`

const TimerWrapper = styled.div`
    display: flex;
    align-items: center;
`

const Countdown = styled.span`
    margin-right: 1rem;
`

export default Timer
