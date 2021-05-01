import React, { forwardRef, useEffect, useImperativeHandle } from 'react';
import { useTimer } from 'react-timer-hook';
import { Container, Button } from 'semantic-ui-react';
let controls = {
    flag: true,
    pause: true,
    resume: true,
};
const Timer = ({ expiryTimestamp, startTime, timePause, timeResume, playerSide, expired }) => {
    const { seconds, minutes, hours, days, isRunning, start, pause, resume, restart } = useTimer({
        expiryTimestamp,
        onExpire: () => {
            expired();
        },
    });

    useEffect(() => {
        if (startTime && controls.flag) {
            start();
        }
        if (timePause && controls.pause) {
            pause();
        }
        if (timeResume && controls.resume) {
            resume();
        }
    }, [startTime, timePause, timeResume]);

    return (
        <div>
            <Container
                textAlign="center"
                style={{ backgroundColor: `${playerSide}`, color: 'Blue' }}
            >
                <br />
                {minutes} : {seconds} s
                <br />
                <br />
            </Container>
        </div>
    );
};

export default Timer;
