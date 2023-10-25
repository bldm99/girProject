import React, { useEffect, useState } from 'react';
import Modal from './modals/Modal';
import ProcesoComponent from './component/ProcesoComponent';
import TablaComponent from './table/TablaComponent';
import { getProcesos, getRiesgos, postMacroproceso } from '../../servicios/getProcesos';

const Proceso = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [idUsuario, setIdUsuario] = useState("6531d08612ec096c58717b97")
    const [procesos, setProcesos] = useState([]);
    const [riesgos, setRiesgos] = useState([])
    const [selectedProcess, setSelectedProcess] = useState(null);

    useEffect(() => {
        if (idUsuario !== "") {
            handleGetProcesos();
            handleGetRiesgos();
        }
    }, [idUsuario]);

    const handleGetProcesos = async () => {
        try {
            const data = await getProcesos(idUsuario);
            setProcesos(data);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleGetRiesgos = async () => {
        try {
            const data = await getRiesgos(idUsuario);
            setRiesgos(data);
            console.log('List Riesgos', data);
        } catch (error) {
            console.error(error);
        }
    };

    const updateProceso = async (_idProceso, data) => {
        try {
            if (_idProceso) {
                // actualizar procesos existentes.
            } else {
                postMacroproceso(data);
                setProcesos([...procesos, data]);
                console.log('datos a enviados ', data);
            }
        } catch (error) {
            console.error(error);
        }
    };

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
            <Modal
                isOpen={modalOpen}
                onClose={closeModal}
                data={riesgos}
                onSubmit={updateProceso}
                _idUser={idUsuario}
                proceso={selectedProcess}
            />
        </>
    );
};

export default Proceso;
