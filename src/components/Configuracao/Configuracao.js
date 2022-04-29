import React from "react";

import "./Configuracao.css";

const Configuracao = () => {
    return(
        <section className="container-configuracao">
             <fieldset>
                <legend>Configuração</legend>

                <div class="details-fields">
                    <label for="codFabricante">Versão Instalada: <b>1.0</b></label>
                    <label for="codFabricante">Data da última atualização: <b>29/04/2022</b></label>
                </div>

                <div class="config-buttons">
                    <button type="manutencao">Manutenção de Cadastro</button>
                    <button type="atualizacao">Verificar Atualizações</button>
                </div>
            </fieldset>

            <fieldset>
                <legend>Dados de Licença</legend>

                <div class="details-fields">
                    <label for="codFabricante">Empresa Contratante: </label>
                    <span className="text-styled" for="codFabricante">FAM</span>
                </div>

                <div class="details-fields">
                    <label for="codFabricante">Licença: </label>
                    <span className="text-styled" for="codFabricante">Standard</span>
                </div>

                <div class="details-fields">
                    <label for="codFabricante">Data de Contratação: </label>
                    <span className="text-styled" for="codFabricante">29/04/2022</span>
                </div>

               
  
            </fieldset>
        </section>
    )
}

export default Configuracao;