import React, { useState, useEffect, useContext } from 'react';
import './causas.css'
import Formularior from '../riesgos/formularior/Formularior';

const Causas = () => {

    const [modalVisible, setModalVisible] = useState(false);

    const registrar = () => {
        setModalVisible(true);
    };
    const handleOutsideClick = (event) => {
        if (event.target.classList.contains("modal-causas-Bldm")) {
            setModalVisible(false);
            //borrarData()
        }
    };
    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);

        
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);



    return ( 
        <div className='causas'>
            <div className='causas-cabezera'>
                <div>
                    <h2>Causas y Consecuencias</h2>
                </div>
                <div>
                    <button onClick={() => {registrar()}} >Crear causa y consecuencia</button>
                </div>
            </div>
            <div className='causas-filtros'>
                Filtros
            </div>

            <section className="F">
                {modalVisible && (
                    <div className="modal-causas-Bldm">
                        <Formularior
                            
                        />
                    </div>
                )}
            </section>


        </div>
     );
}
 
export default Causas;