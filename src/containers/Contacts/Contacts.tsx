import React from 'react';
import './Contacts.css';

const Contacts: React.FC = () => {
    return (
        <div className="container mt-4">
            <h1 className='main-title'>Contacts</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="card contact-card">
                        <div className="card-body">
                            <h5 className="contact-title">Для потребителей</h5>
                            <p className="contact-text">Бесплатная горячая линия</p>
                            <p className="contact-text">+7-800-200-08-98</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card contact-card">
                        <div className="card-body">
                            <h5 className="contact-title">По вопросам сотрудничества</h5>
                            <p className="contact-text">Бесплатная горячая линия</p>
                            <p className="contact-text">+7-800-200-02-08</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card contact-card">
                        <div className="card-body">
                            <h5 className="contact-title">Написать нам</h5>
                            <p className="contact-text">communications.russia@unilever-rus.ru</p>
                            <p className="contact-text">Вся информация была взята с сайта "https://www.inmarko.ru/"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
