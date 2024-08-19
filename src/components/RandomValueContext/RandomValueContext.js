import React, { createContext, useState, useEffect, useContext } from 'react';

// RandomValueContext 생성
const RandomValueContext = createContext();

export const RandomValueProvider = ({ children }) => {
    const [randomValue, setRandomValue] = useState(0);

    const generateRandomValue = () => {
        const currentTimestamp = Math.floor(Date.now() / 10000); // 현재 시간을 10초 단위로 나눔
        const newValue = (currentTimestamp % 50000) + 1; // 1에서 50000 사이의 값 생성
        setRandomValue(newValue);
    };

    useEffect(() => {
        generateRandomValue(); // 초기 값 설정
        const interval = setInterval(generateRandomValue, 10000); // 10초마다 값 갱신

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 클리어
    }, []);

    return (
        <RandomValueContext.Provider value={randomValue}>
            {children}
        </RandomValueContext.Provider>
    );
};

export const useRandomValue = () => useContext(RandomValueContext);