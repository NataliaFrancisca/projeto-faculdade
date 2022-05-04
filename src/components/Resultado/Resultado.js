import React from "react";

import "./Resultado.css";

const Resultado = () => {

    const parts = [{
        cod: 'HG30853',
        desc: 'Amortecedor Dianteiro',
        similares: ['GP30192', 'SP034'],
        cod_montadora: ['93047299', '4988544'],
        cars: [{
            montadora: 'GM',
            modelo: 'Celta',
            motor: 'Todos',
            ano_inicio: 2000,
            ano_final: 2014
        },{
            montadora: 'GM',
            modelo: 'Corsa',
            motor: 'Todos',
            ano_inicio: 1994,
            ano_final: 2002
        }],
        img: "images/peca.jpg"
    },{
        cod: 'HG30841',
        desc: 'Parafuso',
        similares: ['LP774748', 'GH48741', 'GP55412'],
        cod_montadora: ['954458'],
        cars: [{
            montadora: 'FORD',
            modelo: 'Fiesta',
            motor: 'Todos',
            ano_inicio: 2008,
            ano_final: 2012
        }],
        img: "images/peca.jpg"
    },{
        cod: 'HG30890',
        desc: 'Freios',
        similares: ['487485','7748589'],
        cod_montadora: ['930471111','7474758'],    
        cars: [{
            montadora: 'GM',
            modelo: 'Meriva',
            motor: '1.8',
            ano_inicio: 2004,
            ano_final: 2012
        },{
            montadora: 'FIAT',
            modelo: 'Palio',
            motor: '1.0',
            ano_inicio: 1998,
            ano_final: 2005
        }],
        img: "images/peca.jpg"
    }]


    const pecaSearch = 'HG30841';
    
    const resultSearch = parts.find(part => part.cod == pecaSearch);
    const {cod, desc, cars, cod_montadora, similares, img} = resultSearch;


    return(
        <section className="container">
            <fieldset className="result-search">
                <legend> Resultado da Pesquisa</legend>
                <table id="results">
                    <tr>
                        <th>Código</th>
                        <th>Descrição</th>
                    </tr>
                    <tr>
                        <td id="codPart">{cod}</td>
                        <td id="descPart">{desc}</td>
                    </tr>
                </table>
		    </fieldset>

            <fieldset className="result-search">
                <legend> Detalhes</legend>
                <h3>Veículos</h3>

                <table id="veiculos">
                    <tr>
                        <th>Montadora</th>
                        <th>Modelo</th>
                        <th>Motor</th>
                        <th>Ano inicial</th>
                        <th>Ano final</th>
                    </tr>
                    <tbody id="tbCars">
                        {cars.map(data => (
                            <RenderCardDetails data={data}/>
                        ))}
                    </tbody>
                </table>

                <section className="container-detalhes">

                    <table id="detalhes">
                        <tr>
                            <th>Similares:</th>
                        </tr>
                        <tbody id="tbSimilars">
                            {similares.map(similar => (
                                <tr>
                                    <td>{similar}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <table id="detalhes">
                        <tr>
                            <th>Cód. Montadora:</th>
                        </tr>
                        <tbody id="tbMont">
                            {cod_montadora.map(cod => (
                                <tr>
                                    <td>{cod}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <img src={img} className="pecaImg" id="imgPeca" />

                    {/* <div id="modalPecas" class="modal">
                        <span class="close">&times;</span>
                        <img class="modal-content" id="img01" />
                    </div> */}
                </section>
		    </fieldset>



        </section>
    )
}

export default Resultado;


// CRIAR UM NOVO ARQUIVO COM ESSE COMPONENTE
const RenderCardDetails = ({data}) => {

    const { ano_inicio, ano_final, modelo, montadora, motor } = data;
    
    return(
        <tr>
            <td>{montadora}</td>
            <td>{modelo}</td>
            <td>{motor}</td>
            <td>{ano_inicio}</td>
            <td>{ano_final}</td>
        </tr>   
    )
}

