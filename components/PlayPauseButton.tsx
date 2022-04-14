import styled from 'styled-components'

interface Props {
    start: () => void
    pause: () => void
    isRunning: boolean
}

const Timer = ({ start, pause, isRunning }: Props) => {
    const handleClick = () => {
        isRunning ? pause() : start()
    }

    return (
        <Button onClick={handleClick}>
            {isRunning ? (
                <svg
                    width="12px"
                    height="14px"
                    viewBox="0 0 12 14"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Rounded" transform="translate(-650.000000, -955.000000)">
                            <g id="AV" transform="translate(100.000000, 852.000000)">
                                <g
                                    id="-Round-/-AV-/-pause"
                                    transform="translate(544.000000, 98.000000)"
                                >
                                    <g>
                                        <rect
                                            id="Rectangle-Copy-67"
                                            x="0"
                                            y="0"
                                            width="24"
                                            height="24"
                                        ></rect>
                                        <path
                                            d="M8,19 C9.1,19 10,18.1 10,17 L10,7 C10,5.9 9.1,5 8,5 C6.9,5 6,5.9 6,7 L6,17 C6,18.1 6.9,19 8,19 Z M14,7 L14,17 C14,18.1 14.9,19 16,19 C17.1,19 18,18.1 18,17 L18,7 C18,5.9 17.1,5 16,5 C14.9,5 14,5.9 14,7 Z"
                                            id="🔹Icon-Color"
                                            fill="#1D1D1D"
                                        ></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            ) : (
                <svg
                    width="11px"
                    height="14px"
                    viewBox="0 0 11 14"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Rounded" transform="translate(-753.000000, -955.000000)">
                            <g id="AV" transform="translate(100.000000, 852.000000)">
                                <g
                                    id="-Round-/-AV-/-play_arrow"
                                    transform="translate(646.000000, 98.000000)"
                                >
                                    <g>
                                        <rect
                                            id="Rectangle-Copy-50"
                                            x="0"
                                            y="0"
                                            width="24"
                                            height="24"
                                        ></rect>
                                        <path
                                            d="M7,6.82 L7,17.18 C7,17.97 7.87,18.45 8.54,18.02 L16.68,12.84 C17.3,12.45 17.3,11.55 16.68,11.15 L8.54,5.98 C7.87,5.55 7,6.03 7,6.82 Z"
                                            id="🔹Icon-Color"
                                            fill="#1D1D1D"
                                        ></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            )}
        </Button>
    )
}

const Button = styled.button`
    line-height: 0;
    border: 2px solid #1d1d1d;
    padding: 0.2rem 0.24rem 0.2rem 0.3rem;
    border-radius: 4px;
`

export default Timer
