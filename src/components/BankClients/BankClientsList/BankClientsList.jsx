import React, {useEffect, useState} from 'react';
import BankClientsApiWorker from "../Api/Api";
import BankClientsItem from "../BankClientsItem/BankClientsItem";
import BanksClientAddNewForm from "../BanksClientAddNewForm/BanksClientAddNewForm";

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

    const addNewBankClient = (inputBankClient) => {
        bankClientsApiWorker.addNewBankClient(inputBankClient)
            .then(response => {
                getAllBankClients();
            })
            .catch(error => {
                console.log("addNewBankClient ERRRROR");
            });
    }

    useEffect(() => {
        getAllBankClients();
    }, []);

    return (
        <div>
            <BanksClientAddNewForm addNewBankClient={addNewBankClient}/>

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