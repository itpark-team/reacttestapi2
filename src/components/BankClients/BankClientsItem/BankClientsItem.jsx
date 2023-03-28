import React from 'react';
import cl from "./BankClientsItem.module.css";

const BankClientsItem = ({bankClient}) => {
    return (
        <div className={cl.divMargin}>
            <b>Клиент №{bankClient.id} ФИО:{bankClient.fio}</b> <br/>
            <span>Карта: {bankClient.cardNumber} Баланс: {bankClient.money}</span>
        </div>
    );
};

export default BankClientsItem;