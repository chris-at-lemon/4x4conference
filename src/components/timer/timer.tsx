import React, { useEffect, useState } from "react";

import styles from '../../styles/components/timer/timer.module.scss'


function CountdownTimer(targetDate: string) {

    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();

        let timeLeft: any = {
                tage: Math.floor(difference / (1000 * 60 * 60 * 24)),
                stunden: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minuten: Math.floor((difference / 1000 / 60) % 60),
                sekunden: Math.floor((difference / 1000) % 60)
            };

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents: any = [];
    let timerValues: any = [];

    Object.keys(timeLeft).forEach(interval => {
        timerValues.push(timeLeft[interval])
        timerComponents.push(
        <div key={interval} className={`${styles['interval']}`}>
            <div className={`${styles['interval__value']}`}>{timeLeft[interval]}</div>
            <div className={`${styles['interval__key']}`}>{interval}</div>
        </div>
        );
    });

    if (timerValues.every(isNaN)) {
        return (
            <><div className="timeUp">Time is up</div></>
        );
    } else {
        return (
            <>{timerComponents}</>
        );
    }

};

export const CountdownSection = ({targetDate}: any) => (
    CountdownTimer(targetDate)
);