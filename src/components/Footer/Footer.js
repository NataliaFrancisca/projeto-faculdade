import React from "react";

import "./Footer.css";

const Footer = () => {
    return(
        <footer className="container-footer">
            <section>
                <img src="images/logo.png" height="30px"/>
                <span>Catálogo de Peças</span>
		    </section>

            <span className="credito">
                Projeto Integrado do curso <br />Análise e Desenvolvimento 
                de Sistemas - Faculdade das Américas (FAM)
            </span>
        </footer>
    )
}

export default Footer;