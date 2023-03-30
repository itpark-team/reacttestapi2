import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import cl from "./BanksClientAddNewForm.module.css";
import BankClientsApiWorker from "../Api/Api";

const BanksClientAddNewForm = () => {

    let {
        register,
        formState: {errors, isValid},
        handleSubmit,
        reset
    } = useForm({
        mode: "onChange"
    });
    let bankClientsApiWorker = new BankClientsApiWorker();

    const addNewBankClient = (inputBankClient) => {
        bankClientsApiWorker.addNewBankClient(inputBankClient)
            .then(response => {
                alert("клиент успешно добавлен");
            })
            .catch(error => {
                console.log("addNewBankClient ERRRROR");
            });
    }

    const onSubmit = (data) => {
        let inputBankClient = {
            fio: data.fio,
            cardNumber: data.cardNumber,
            money: data.money
        };

        addNewBankClient(inputBankClient);

        reset();
    }

    return (
        <div>
            <h2>Форма добавления нового клиента</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={cl.divMargin}>
                    <b>ФИО:</b>
                    <input type="text" {
                        ...register("fio", {
                            required: "Имя не может быть пустым",
                            minLength: {
                                value: 3,
                                message: "Минимум 3 символа"
                            },
                            maxLength: {
                                value: 32,
                                message: "Максимум 32 символа"
                            }
                        })
                    }
                    />
                    <div>{errors?.fio?.message}</div>
                </div>

                <div className={cl.divMargin}>
                    <b>Номер карты:</b>
                    <input type="number" {
                        ...register("cardNumber", {
                            required: "Номер карты не может быть пустым",
                            minLength: {
                                value: 16,
                                message: "Необходимо 16 цифр"
                            },
                            maxLength: {
                                value: 16,
                                message: "Необходимо 16 цифр"
                            }
                        })
                    }
                    />
                    <div>{errors?.cardNumber?.message}</div>
                </div>

                <div className={cl.divMargin}>
                    <b>Баланс:</b>
                    <input type="number"{
                        ...register("money", {
                            required: "Поле балан не может быть пустым",
                            min: {
                                value: 1,
                                message: "Минимум 1"
                            },
                            max: {
                                value: 100000,
                                message: "Максимум 100000"
                            }
                        })
                    }
                    />
                    <div>{errors?.cardNumber?.money}</div>
                </div>

                <div className={cl.divMargin}>
                    <input type="submit" value={"Добавить нового клиента"} disabled={!isValid}/>
                </div>
            </form>
        </div>
    );
};

export default BanksClientAddNewForm;