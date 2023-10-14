import React from 'react';
import './inicio.css';

const Inicio = () => {
    return (
        <div className="container">
            <center>
                <h2>Título Principal</h2>
            </center>
            <div className="sub-content">
                <h2>Subtítulo 1</h2>
                <p>Este es el contenido del subtítulo 1.</p>
            </div>
            <div className="sub-content">
                <h2>Subtítulo 2</h2>
                <p>Este es el contenido del subtítulo 2.</p>
            </div>
        </div>
    );
}

export default Inicio;
