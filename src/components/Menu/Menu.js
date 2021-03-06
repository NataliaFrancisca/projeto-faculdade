import React from 'react';

import { NavLink } from 'react-router-dom'

import './Menu.css';

const Menu = () => {

    return(
        <div className="menu">
            <div className='menu-logo'>
                <img src="images/logo.png" alt="Icone"/>
                <NavLink to="/" exact>
                    <h1>Catálogo de Peças</h1>
                </NavLink>
            </div>

            <nav>
                <ul className='menu-nav'>
                    <li>
                        <NavLink to="/" exact>Inicio</NavLink>
                    </li>

                    <li> 
                        <NavLink to="/configuracao" exact>Configuração</NavLink>
                    </li>

                    <li> 
                        <NavLink to="/contato" exact>Contato</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;