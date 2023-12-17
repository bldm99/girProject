import React, { useEffect, useState } from 'react';
import './modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faTrash } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ isOpen, onClose, data, onSubmit, _idUser, proceso }) => {
    const [risks, setRisks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const [_id, setId] = useState(_idUser)
    const [m_nombre, setM_nombre] = useState('')
    const [m_tipo, setM_tipo] = useState('')
    const [m_descripcion, setM_descripcion] = useState('')
    const [selectedRisks, setSelectedRisks] = useState([]);

    useEffect(() => {
        if (data) {
            setRisks(data);
            console.log('Se selecciono los siguientes riesgos', selectedRisks)
        }
    }, [data, selectedRisks]);

    const handleRiskClick = (risk) => {
        setSelectedRisks([...selectedRisks, risk]);
        setSearchTerm('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            _id: _id,
            m_nombre: m_nombre,
            m_tipo: m_tipo,
            m_descripcion: m_descripcion,
            m_riesgos: selectedRisks
        };

        console.log('Riesgos Selcionados', selectedRisks);
        setM_nombre('');
        setM_tipo('');
        setM_descripcion('');
        setSelectedRisks([]);
        onSubmit(proceso ? proceso._id : null, data);
        onClose();
    };

    const handleDelete = (index) => {
        const updateSelectedRisks = [...selectedRisks];
        updateSelectedRisks.splice(index, 1);
        setSelectedRisks(updateSelectedRisks);
    };




    return (
        isOpen && (
            <div className="modal-overlay">
                <div className="modal">
                    <div className="modal-title">
                        <h2>Crear Proceso</h2>
                    </div>
                    <form className="modal-form" onSubmit={handleSubmit}>
                        <div className="modal-content">
                            <div className="modal-description">
                                <h2>Información</h2>
                                <p>Escribe la información general de este proceso.</p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    placeholder="Escribe el nombre"
                                    value={m_nombre}
                                    onChange={(e) => setM_nombre(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tipo">Tipo</label>
                                <select
                                    name="tipo"
                                    id="tipo"
                                    defaultValue=""
                                    value={m_tipo}
                                    onChange={(e) => setM_tipo(e.target.value)}
                                >
                                    <option hidden value="">Seleccionar</option>
                                    <option value="Misional">Misional</option>
                                    <option value="Estrategico">Estrategico</option>
                                    <option value="De apoyo">De apoyo</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="categoria">Categoría</label>
                                <select name="categoria" id="categoria" defaultValue="">
                                    <option hidden value="">Seleccionar</option>
                                    <option value="0">Macroproceso</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="descripcion">Descripción</label>
                                <textarea
                                    id="descripcion"
                                    rows="4"
                                    maxLength="4000"
                                    placeholder="Escribe una corta descripción de no más de 4.000 caracteres."
                                    disabled={false}
                                    value={m_descripcion}
                                    onChange={(e) => setM_descripcion(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="form-group file-upload">
                                <label htmlFor="archivo">Adjuntar evidencia</label>
                                <input type="file" id="archivo" />
                            </div>
                            <div className="risk-section">
                                <h2>Asociar Riesgos</h2>
                                <input
                                    type="text"
                                    placeholder="Buscar Riesgo"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                {searchTerm && (
                                    <ul className="search-results">
                                        {risks
                                            .filter((risk) =>
                                                risk.nombre.toLowerCase().includes(searchTerm.toLowerCase())
                                            )
                                            .map((risk) => (
                                                <li key={risk._id} onClick={() => handleRiskClick(risk)}>
                                                    {risk.nombre}
                                                </li>
                                            ))}
                                    </ul>
                                )}
                            </div>
                            <div className="selected-risks">
                                <div className="selected-risks-table-container">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Descripción del Riesgo</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {selectedRisks.map((risk, index) => (
                                                <tr key={index}>
                                                    <td>{risk.nombre}</td>
                                                    <td className="delete-icon">
                                                        <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(index)} />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="button-container">
                            <button type="submit" className="save-button">
                                Guardar
                            </button>
                            <button type="button" onClick={onClose} className="close-button">
                                Cerrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    );
};

export default Modal;
