import React from "react";

import { useNavigate } from 'react-router-dom'

const Inicio = () => {

    const navigate = useNavigate();

    const years = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000];

    return(
        <section className="container">
            <fieldset>
                <legend>Pesquisa por Peça</legend>

                <form action="/" id="search-peca">
                    <div className="container-fields">
                        <label htmlFor="codFabricante">Código do Fabricante:</label>
                        <input type="text" autoComplete="on" id="codFabricante" name="codFabricante"/>
                    </div>

                    <div className="container-buttons">
                        <button className="search" type="reset">Limpar<i id="search" className="fas fa-times"></i></button>
                        <button className="search" type="submit" onClick={() => navigate("/resultado")}>Pesquisar<i id="search" className="fa fa-search"></i></button>
                    </div>
                </form>
            </fieldset>

            <fieldset>
                <legend>Pesquisa por Veículo</legend>

                <form action="/" id="search-peca">
                    <div className="container-fields">
                        <label htmlFor="montadora">Montadora:</label>
                        <input list="list-montadora" id="montadora" name="montadora" autoFocus placeholder="Fiat" />
                        <datalist id="list-montadora" name="montadora">
                            <option value="Fiat" />
                            <option value="Volkswagen" />
                            <option value="Chevrolet" />
                            <option value="Ford" />
                        </datalist>
                    </div>

                    <div className="container-fields">
                        <label htmlFor="modelo">Modelo:</label>
                        <input list="list-modelo" id="modelo" name="modelo" placeholder="Uno" />
                        <datalist id="list-modelo" name="modelo">
                            <option value="Gol" />
                            <option value="Fiesta" />
                            <option value="Corsa" />
                            <option value="Uno" />
                        </datalist>
				    </div>

                    <div className="container-fields">
                        <label htmlFor="motor">Motor:</label>
                        <input type="text" maxLength="5" placeholder="1.0" id="motor" name="motor"/>
				    </div>
                   
                    <div className="container-fields">
                        <label htmlFor="ano">Ano:</label>
                        <input list="list-ano" id="ano" name="ano" placeholder="2000" />
                        <datalist id="list-ano" name="ano">
                            {years.map((year,index) => (
                                <option key={index} value={year}>{year}</option>
                            ))}
                        </datalist>
				    </div>

                    <div className="container-buttons">
                        <button className="search" type="reset">Limpar<i id="search" className="fas fa-times"></i></button>
                        <button className="search" type="submit" onClick={() => navigate("/resultado", {state: "HG30853"})}>Pesquisar<i id="search" className="fa fa-search"></i></button>
                    </div>
                </form>
            </fieldset>
        </section>
    )
}

export default Inicio;