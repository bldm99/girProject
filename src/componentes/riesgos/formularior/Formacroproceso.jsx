import React, { useState, useContext } from 'react';
import './formacroproceso.css';
import { NombreContext } from '../../../utils/Context';

const Formacroproceso = (props) => {

    const FormMacro = useContext(NombreContext)

    const { macroproceso } = props;
    const { macroSeleccionados, setMacroSeleccionados } = FormMacro

    const [filtroTexto, setFiltroTexto] = useState('');

    const filtrarPorTexto = (event) => {
        const texto = event.target.value;
        setFiltroTexto(texto);
    };
    const macrosFiltrados = macroproceso.filter((x) => {
        if (filtroTexto && !x.m_nombre.toLowerCase().includes(filtroTexto.toLowerCase())) {
            return false;
        }
        return true;
    });


    const handleCheckboxChange = (elementoId) => {
        if (macroSeleccionados.includes(elementoId)) {
            // Si el elemento ya está en la lista de seleccionados, quítalo
            setMacroSeleccionados(macroSeleccionados.filter(id => id !== elementoId));
        } else {
            // Si el elemento no está en la lista de seleccionados, agrégalo
            setMacroSeleccionados([...macroSeleccionados, elementoId]);
        }
    };

    console.log(macroSeleccionados)

    return (
        <div className='formacroproceso'>

            <div>
                <input type="search" placeholder="Busca tu Archivo" className='Buscadorx' onChange={filtrarPorTexto}  />
            </div>
            <ul className='li-macroprocesos'>
                {macrosFiltrados.map((macro) => (
                    <li key={macro._id}>
                        <input
                            type="checkbox"
                            checked={macroSeleccionados.includes(macro._id)}
                            onChange={() => handleCheckboxChange(macro._id)}
                        />
                        <label>{macro.m_nombre}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Formacroproceso;





