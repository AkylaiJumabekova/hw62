import React, { useState } from 'react';
import IceCreamCard from '../../components/IceCreamCard/IceCreamCard';
import { IceCream } from '../../types';

const initialIceCreams: IceCream[] = [
    { id: '1', flavor: 'Strawberry', image: 'https://prostokvashino.ru/upload/resize_cache/iblock/381/319_319_0/381020d6c61218e4e5efb1bf570e626b.jpeg', price: 50 },
    { id: '2', flavor: 'Chocolate', image: 'https://cdn.lifehacker.ru/wp-content/uploads/2020/06/Depositphotos_279044362_xl-2015-1_1591038425.jpg', price: 50 },
    { id: '3', flavor: 'Raspberry', image: 'https://cdn.the-village.ru/the-village.ru/post_image-image/6EABPKfykqlreHc4YwIGFw-wide.jpg', price: 50 },
    { id: '4', flavor: 'Mint', image: 'https://i0.wp.com/sweetcold.ru/wp-content/uploads/2017/12/morozhenoe-vanilnoe-recept.jpg', price: 50 },
];

const Home: React.FC = () => {
    const [cart, setCart] = useState<{ iceCream: IceCream, quantity: number }[]>([]);

    const addToCart = (iceCream: IceCream) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.iceCream.id === iceCream.id);
            if (existingItem) {
                return prevCart.map(item => 
                    item.iceCream.id === iceCream.id 
                    ? { ...item, quantity: item.quantity + 1 } 
                    : item
                );
            } else {
                return [...prevCart, { iceCream, quantity: 1 }];
            }
        });
    };

    return (
        <div className="container mt-4">
            <h1>Welcome to the Ice Cream Shop</h1>
            <div className="row">
                {initialIceCreams.map((iceCream) => (
                    <div className="col-md-3 mb-4" key={iceCream.id}>
                        <IceCreamCard iceCream={iceCream} addToCart={addToCart} />
                    </div>
                ))}
            </div>
            <h2>Your purchases</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>{item.iceCream.flavor} - {item.quantity} - {item.iceCream.price * item.quantity} KGS</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
