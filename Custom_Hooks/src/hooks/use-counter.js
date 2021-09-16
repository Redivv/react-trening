import { useEffect, useState } from 'react';

const useCounter = (numberToAdd = 1) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + numberToAdd);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return counter;
}

export default useCounter;