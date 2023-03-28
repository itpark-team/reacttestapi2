import React, {useState} from 'react';

const BanksClientAddNewForm = ({addNewBankClient}) => {

    let [inputBankClient, setInputBankClient] = useState({
        fio: "",
        cardNumber: "",
        money: 0
    });

    return (
        <div>
            <p>
                <b>ФИО:</b>
                <input type="text"
                       value={inputBankClient.fio}
                       onChange={(event) => setInputBankClient({...inputBankClient, fio: event.target.value})}/>
            </p>

            <p>
                <b>Номер карты:</b>
                <input type="text"
                       value={inputBankClient.cardNumber}
                       onChange={(event) => setInputBankClient({...inputBankClient, cardNumber: event.target.value})}/>
            </p>

            <p>
                <b>Баланс:</b>
                <input type="number"
                       value={inputBankClient.money}
                       onChange={(event) => setInputBankClient({
                           ...inputBankClient,
                           money: parseInt(event.target.value)
                       })}/>
            </p>

            <button onClick={() => addNewBankClient(inputBankClient)}>Добавить нового клиента
            </button>
        </div>
    );
};

export default BanksClientAddNewForm;