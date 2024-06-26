import { useEffect, useState } from 'react';
import './App.css';

const calculateHoursLeft = () => {
    const targetDate = new Date('2024-07-02T10:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    const hours = Math.floor(distance / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
        hours,
        minutes,
        seconds,
    };
};

function App() {
    const [timeLeft, setTimeLeft] = useState(calculateHoursLeft);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateHoursLeft);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (timeLeft <= 0) {
        return <h1>Я дома 🙂</h1>;
    }

    return (
        <>
            <h1>
                {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}
            </h1>
        </>
    );
}

export default App;
