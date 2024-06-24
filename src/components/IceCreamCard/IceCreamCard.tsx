import React from 'react';
import { IceCream } from '../../types';

interface Props {
    iceCream: IceCream;
    addToCart: (iceCream: IceCream) => void;
}

const IceCreamCard: React.FC<Props> = ({ iceCream, addToCart }) => {
    return (
        <div className="card">
            <img src={iceCream.image} className="card-img-top" alt={iceCream.flavor} />
            <div className="card-body">
                <h5 className="card-title">{iceCream.flavor}</h5>
                <p className="card-text">{iceCream.price} KGS</p>
                <button className="btn btn-primary" onClick={() => addToCart(iceCream)}>
                    Add to purchases
                </button>
            </div>
        </div>
    );
};

export default IceCreamCard;
