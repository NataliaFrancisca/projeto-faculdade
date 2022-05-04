import React from "react";

const Contato = () => {
    return(
        <section className="container">
            <fieldset>
                <legend>Fale Conosco</legend>

                <form action="/" id="search-peca">
                    <div className="container-fields">
                        <label htmlFor="input_motivo_contato">Motivo do contato:</label>
                        <input type="text" autoComplete="on" id="input_motivo_contato" name="input_motivo_contato"/>
                    </div>

                    <div className="container-fields">
                        <label htmlFor="input_nome_empresa">Nome da Empresa:</label>
                        <input type="text" autoComplete="on" id="input_nome_empresa" name="input_nome_empresa"/>
                    </div>

                    <div className="container-fields">
                        <label htmlFor="input_nome_responsavel">Nome do Responsável:</label>
                        <input type="text" autoComplete="on" id="input_nome_responsavel" name="input_nome_responsavel"/>
                    </div>

                    <div className="container-fields">
                        <label htmlFor="input_telefone">Telefone:</label>
                        <input type="text" autoComplete="on" id="input_telefone" name="input_telefone"/>
                    </div>

                    <div className="container-fields">
                        <label htmlFor="text_area_descricao">Descrição:</label>
                        <textarea id="text_area_descricao" name="text_area_descricao" />
              
                    </div>

                    <div className="container-buttons">
                        <button className="search" type="reset">Limpar<i id="search" className="fas fa-times"></i></button>
                        <button className="search" type="submit">Enviar<i id="search" className="fa fa-send"></i></button>
                    </div>
                </form>
            </fieldset>
        </section>
    )
}

export default Contato;