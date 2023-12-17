import React, { useState, useContext } from 'react';

import { NombreContext } from '../../../utils/Context';

// ... importaciones ...

const Valorescontrol = (props) => {
    const FormRiesgo = useContext(NombreContext);
    const { control } = props;
    const { controlSeleccionados, setControlSeleccionados } = FormRiesgo;
    
    const [filtroTexto, setFiltroTexto] = useState('');

    const filtrarPorTexto = (event) => {
        const texto = event.target.value;
        setFiltroTexto(texto);
    };

    const controlsFiltrados = control.filter((x) => {
        if (filtroTexto && !x.nombre.toLowerCase().includes(filtroTexto.toLowerCase())) {
            return false;
        }
        return true;
    });

    const handleCheckboxChange = (elemento) => {
        if (Array.isArray(controlSeleccionados) && controlSeleccionados.some((seleccionado) => seleccionado._id === elemento._id)) {
            // Si el elemento ya está en la lista de seleccionados, quítalo
            setControlSeleccionados(controlSeleccionados.filter((seleccionado) => seleccionado._id !== elemento._id));
        } else {
            // Si el elemento no está en la lista de seleccionados o controlSeleccionados no es un array, agrégalo
            setControlSeleccionados([...controlSeleccionados, elemento]);
        }
    };

    console.log(controlSeleccionados);

    return (
        <div className='formacroproceso'>
            <div>
                <input type="search" placeholder="Busca tu Archivo" className='Buscadorx' onChange={filtrarPorTexto} />
            </div>
            <ul className='li-macroprocesos'>
                {controlsFiltrados.map((ca) => (
                    <li key={ca._id}>
                        <input
                            type="checkbox"
                            checked={Array.isArray(controlSeleccionados) && controlSeleccionados.some((seleccionado) => seleccionado._id === ca._id)}
                            onChange={() => handleCheckboxChange(ca)}
                        />
                        <label>{ca.nombre}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Valorescontrol;







