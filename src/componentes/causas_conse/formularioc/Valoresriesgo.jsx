import React, { useState, useContext } from 'react';

import { NombreContext } from '../../../utils/Context';

const Valoresriesgo = (props) => {

    const FormRiesgo = useContext(NombreContext)

    const { riesgo } = props;
    const { riesgoSeleccionados, setRiesgoSeleccionados } = FormRiesgo

    const [filtroTexto, setFiltroTexto] = useState('');

    const filtrarPorTexto = (event) => {
        const texto = event.target.value;
        setFiltroTexto(texto);
    };
    const riesgosFiltrados = riesgo.filter((x) => {
        if (filtroTexto && !x.nombre.toLowerCase().includes(filtroTexto.toLowerCase())) {
            return false;
        }
        return true;
    });


    const handleCheckboxChange = (elementoId) => {
        if (riesgoSeleccionados.includes(elementoId)) {
            // Si el elemento ya está en la lista de seleccionados, quítalo
            setRiesgoSeleccionados(riesgoSeleccionados.filter(id => id !== elementoId));
        } else {
            // Si el elemento no está en la lista de seleccionados, agrégalo
            setRiesgoSeleccionados([...riesgoSeleccionados, elementoId]);
        }
    };

    //console.log(riesgoSeleccionados)

    return (
        <div className='formacroproceso'>

            <div>
                <input type="search" placeholder="Busca tu Archivo" className='Buscadorx' onChange={filtrarPorTexto}  />
            </div>
            <ul className='li-macroprocesos'>
                {riesgosFiltrados.map((ri) => (
                    <li key={ri._id}>
                        <input
                            type="checkbox"
                            checked={riesgoSeleccionados.includes(ri._id)}
                            onChange={() => handleCheckboxChange(ri._id)}
                        />
                        <label>{ri.nombre}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Valoresriesgo;





