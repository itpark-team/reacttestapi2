import React from 'react';
import {Link, Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <div>
                <Link to="/">Список клиентов</Link> |
                <Link to="/addnewclient">Добавить нового клиента</Link>
            </div>
            <div>
                <Outlet/>
            </div>
            <div>
                footer
            </div>
        </div>
    );
};

export default Layout;