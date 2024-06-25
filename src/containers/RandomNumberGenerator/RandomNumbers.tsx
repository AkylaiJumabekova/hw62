import React from 'react';
import './RandomNumbers.css';

interface IRandomNumbers {
    number: number;
}

const RandomNumbers: React.FC<IRandomNumbers> = ({ number }) => {
    return (
        <div className="number">
            {number}
        </div>
    );
};

export default RandomNumbers;
