import "./App.css";
import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import BankClientsList from "./components/BankClients/BankClientsList/BankClientsList";
import BanksClientAddNewForm from "./components/BankClients/BanksClientAddNewForm/BanksClientAddNewForm";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<BankClientsList/>}/>
                    <Route path="addnewclient" element={<BanksClientAddNewForm/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;