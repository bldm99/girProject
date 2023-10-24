import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
    const [selectedRisks, setSelectedRisks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [risks] = useState([
        { id: 1, description: 'Riesgo 1' },
        { id: 2, description: 'Riesgo 2' },
        { id: 3, description: 'Riesgo 3' },
        // Agrega más riesgos según tus necesidades
    ]);

    function handleRiskClick(risk) {
        setSelectedRisks([...selectedRisks, risk]);
        setSearchTerm(''); // Limpiar el término de búsqueda al seleccionar un riesgo
    }

    function handleSave() {
        // Envía la data a la ubicación especificada
        console.log(selectedRisks);
        // Aquí puedes enviar la data a tu API u otro destino
        onClose();
    }

    return (
        isOpen && (
            <div className="modal-overlay">
                <div className="modal">
                    <div className="modal-title">
                        <h2>Crear Proceso</h2>
                    </div>
                    <div className="modal-content">
                        <div className="modal-description">
                            <h2>Información</h2>
                            <p>Escribe la información general de este proceso.</p>
                        </div>
                        <form className="modal-form">
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" id="nombre" placeholder="Escribe el nombre" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tipo">Tipo</label>
                                <select name="tipo" id="tipo" defaultValue="">
                                    <option hidden value="">Seleccionar</option>
                                    <option value="0">Misional</option>
                                    <option value="1">Estrategico</option>
                                    <option value="2">De apoyo</option>
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
                                <textarea id="descripcion" rows="4" maxLength="4000" placeholder="Escribe una corta descripción de no más de 4.000 caracteres." disabled={false}></textarea>
                            </div>
                            <div className="form-group file-upload">
                                <label htmlFor="archivo">Adjuntar evidencia</label>
                                <input type="file" id="archivo" />
                            </div>
                        </form>
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
                                            risk.description.toLowerCase().includes(searchTerm.toLowerCase())
                                        )
                                        .map((risk) => (
                                            <li key={risk.id} onClick={() => handleRiskClick(risk)}>
                                                {risk.description}
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectedRisks.map((risk) => (
                                            <tr key={risk.id}>
                                                <td>{risk.description}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="button-container">
                        <button type="button" className="save-button" onClick={handleSave}>
                            Guardar
                        </button>
                        <button type="button" onClick={onClose} className="close-button">
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        )
    );
};

export default Modal;
