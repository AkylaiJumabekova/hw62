import React from 'react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
    return (
        <div className="container mt-4">
            <h1 className="main-title">About Us</h1>
            <div className="content-wrapper">
                <p>ЕЖЕДНЕВНО МОРОЖЕНОЕ ИНМАРКО ВЫБИРАЮТ ОКОЛО 1 МЛН. ПОКУПАТЕЛЕЙ. НЕУДИВИТЕЛЬНО: ВЕДЬ НАШЕ МОРОЖЕНОЕ ИЗВЕСТНО НАТУРАЛЬНЫМ ВКУСОМ И ОТЛИЧНЫМ КАЧЕСТВОМ, О ЧЁМ ГОВОРЯТ 20 НАШИХ НАГРАД И ПРЕМИЙ</p>
            </div>
            <div className="benefits">
                <div className="benefit-item">
                    <h5>Натуральные ингредиенты</h5>
                    <p>Мы используем только натуральные продукты.</p>
                </div>
                <div className="benefit-item">
                    <h5>Великолепный вкус</h5>
                    <p>Наше мороженое покоряет с первого укуса.</p>
                </div>
                <div className="benefit-item">
                    <h5>Богатый выбор</h5>
                    <p>Широкий ассортимент вкусов для любого гурмана.</p>
                </div>
                <div className="benefit-item">
                    <h5>Доступная цена</h5>
                    <p>Лучшее качество по разумной цене.</p>
                </div>
                <div className="benefit-item">
                    <h5>Награды и признание</h5>
                    <p>20 наград за качество и вкус.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
