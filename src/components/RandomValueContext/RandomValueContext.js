import React, { createContext, useState, useEffect, useContext } from 'react';

// 랜덤 값을 저장할 컨텍스트 생성
const RandomValueContext = createContext();

export const RandomValueProvider = ({ children }) => {
    const [randomValue, setRandomValue] = useState(() => {
        const savedValue = sessionStorage.getItem('randomValue');
        return savedValue ? parseInt(savedValue, 10) : Math.floor(Math.random() * 50000) + 1;
    });

    useEffect(() => {
        sessionStorage.setItem('randomValue', randomValue);

        const interval = setInterval(() => {
            const newValue = Math.floor(Math.random() * 50000) + 1;
            setRandomValue(newValue);
            sessionStorage.setItem('randomValue', newValue);
        }, 10000); // 10초마다 랜덤 값 변경

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 클리어
    }, [randomValue]);

    return (
        <RandomValueContext.Provider value={randomValue}>
            {children}
        </RandomValueContext.Provider>
    );
};

// 랜덤 값을 쉽게 가져올 수 있는 커스텀 훅
export const useRandomValue = () => useContext(RandomValueContext);