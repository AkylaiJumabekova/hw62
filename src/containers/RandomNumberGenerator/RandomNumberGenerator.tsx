import React, { useState } from 'react';
import RandomNumbers from './RandomNumbers';
import './RandomNumberGenerator.css';

const RandomNumberGenerator: React.FC = () => {
    const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

    const generateNumber = (): number[] => {
        const numbers: number[] = [];
        while (numbers.length < 5) {
            const newNumber = Math.floor(Math.random() * 32) + 5;
            if (!numbers.includes(newNumber)) {
                numbers.push(newNumber);
            }
        }
        return numbers.sort((a, b) => a - b);
    };

    const handleNewNumbers = () => {
        setNumbers(generateNumber());
    };

    return (
        <div className="App">
            <h1 className="title">Random Number Generator</h1>
            <div className="numbers-container">
                {numbers.map((number, index) => (
                    <RandomNumbers key={index} number={number} />
                ))}
            </div>
            <button className="new-numbers-button" onClick={handleNewNumbers}>
                New numbers
            </button>
        </div>
    );
};

export default RandomNumberGenerator;
