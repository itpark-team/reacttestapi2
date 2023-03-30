import React, {useEffect, useState} from 'react';
import BankClientsApiWorker from "../Api/Api";
import BankClientsItem from "../BankClientsItem/BankClientsItem";

const BankClientsList = () => {

    let [bankClients, setBankClients] = useState([]);
    let bankClientsApiWorker = new BankClientsApiWorker();

    const getAllBankClients = () => {
        bankClientsApiWorker.getAllBankClients()
            .then(response => {
                setBankClients(response.data);
            })
            .catch(error => {
                console.log("getAllBankClients ERRRROR");
            });
    }

    useEffect(() => {
        getAllBankClients();
    }, []);

    return (
        <div>
            <h2>Список всех клиентов банка</h2>
            {
                bankClients.length === 0
                    ? <div>Данных нет</div>
                    : bankClients.map(bankClient => {
                        return <BankClientsItem bankClient={bankClient} key={bankClient.id}/>
                    })
            }
        </div>
    );
};

export default BankClientsList;