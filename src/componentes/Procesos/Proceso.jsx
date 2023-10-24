import React, { useEffect, useState } from 'react';
import Modal from './modals/Modal';
import ProcesoComponent from './component/ProcesoComponent';
import TablaComponent from './table/TablaComponent';
import { getProcesos, getRiesgos } from '../../servicios/getProcesos';

const Proceso = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [idUsuario, setIdUsuario] = useState("6531d08612ec096c58717b97")
    const [procesos, setProcesos] = useState([]);
    const [riesgos, setRiesgos] = useState([])

    const handleGetProcesos = () => {
        getProcesos(idUsuario)
            .then(data => {
                setProcesos(data);
                console.log(data)
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleGetRiesgos = () => {
        getRiesgos(idUsuario)
            .then(data => {
                setRiesgos(data);
                console.log('List Riesgos', data)
            })
            .catch(error => {
                console.error(error);
            });
    };

    useEffect(() => {
        if (idUsuario !== "") {
            handleGetProcesos();
            handleGetRiesgos();
        }
    }, [idUsuario]);

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <>
            {procesos.length > 0 ? (
                <TablaComponent
                    data={procesos}
                    openModal={openModal} />
            ) : (
                <ProcesoComponent
                    openModal={openModal}
                />
            )}
            <Modal isOpen={modalOpen} onClose={closeModal} data={riesgos} />
        </>

    );
};

export default Proceso;
