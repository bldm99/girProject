import React, { useState } from 'react';
import Modal from './modals/Modal';
import ProcesoComponent from './component/ProcesoComponent';
import TablaComponent from './table/TablaComponent';

const Proceso = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const data = [{
        _id_user: 1,
        m_nombre: "Proceso de Ventas",
        m_tipo: "Comercial",
        m_descripcion: "Gestión de ventas y atención al cliente.",
        m_riesgos: "Baja demanda en temporadas bajas."
    },
    {
        _id_user: 2,
        m_nombre: "Proceso de Producción",
        m_tipo: "Operativo",
        m_descripcion: "Fabricación de productos.",
        m_riesgos: "Problemas de suministro de materiales."
    },
    {
        _id_user: 3,
        m_nombre: "Proceso de Logística",
        m_tipo: "Logística",
        m_descripcion: "Gestión de inventario y distribución.",
        m_riesgos: "Retrasos en la entrega de proveedores."
    },
    {
        _id_user: 4,
        m_nombre: "Proceso de Recursos Humanos",
        m_tipo: "Administrativo",
        m_descripcion: "Gestión de personal y recursos humanos.",
        m_riesgos: "Alta rotación de empleados."
    },
    {
        _id_user: 5,
        m_nombre: "Proceso de Marketing",
        m_tipo: "Comercial",
        m_descripcion: "Promoción y publicidad de la empresa.",
        m_riesgos: "Campañas de marketing no efectivas."
    },
    {
        _id_user: 6,
        m_nombre: "Proceso de Finanzas",
        m_tipo: "Finanzas",
        m_descripcion: "Gestión de ingresos y gastos.",
        m_riesgos: "Fluctuaciones en los tipos de cambio."
    },
    {
        _id_user: 7,
        m_nombre: "Proceso de Calidad",
        m_tipo: "Calidad",
        m_descripcion: "Control de calidad de productos y servicios.",
        m_riesgos: "Incumplimiento de estándares de calidad."
    },
    {
        _id_user: 8,
        m_nombre: "Proceso de Desarrollo de Producto",
        m_tipo: "Innovación",
        m_descripcion: "Diseño y desarrollo de nuevos productos.",
        m_riesgos: "Demoras en el desarrollo de prototipos."
    },
    {
        _id_user: 9,
        m_nombre: "Proceso de TI",
        m_tipo: "Tecnología",
        m_descripcion: "Gestión de tecnologías de la información.",
        m_riesgos: "Fallas en la infraestructura de TI."
    },
    {
        _id_user: 10,
        m_nombre: "Proceso de Cumplimiento Legal",
        m_tipo: "Legal",
        m_descripcion: "Cumplimiento de regulaciones y leyes.",
        m_riesgos: "Multas por incumplimiento de normativas."
    }, {
        _id_user: 1,
        m_nombre: "Proceso de Ventas",
        m_tipo: "Comercial",
        m_descripcion: "Gestión de ventas y atención al cliente.",
        m_riesgos: "Baja demanda en temporadas bajas."
    },
    {
        _id_user: 2,
        m_nombre: "Proceso de Producción",
        m_tipo: "Operativo",
        m_descripcion: "Fabricación de productos.",
        m_riesgos: "Problemas de suministro de materiales."
    },
    {
        _id_user: 3,
        m_nombre: "Proceso de Logística",
        m_tipo: "Logística",
        m_descripcion: "Gestión de inventario y distribución.",
        m_riesgos: "Retrasos en la entrega de proveedores."
    },
    {
        _id_user: 4,
        m_nombre: "Proceso de Recursos Humanos",
        m_tipo: "Administrativo",
        m_descripcion: "Gestión de personal y recursos humanos.",
        m_riesgos: "Alta rotación de empleados."
    },
    {
        _id_user: 5,
        m_nombre: "Proceso de Marketing",
        m_tipo: "Comercial",
        m_descripcion: "Promoción y publicidad de la empresa.",
        m_riesgos: "Campañas de marketing no efectivas."
    },
    {
        _id_user: 6,
        m_nombre: "Proceso de Finanzas",
        m_tipo: "Finanzas",
        m_descripcion: "Gestión de ingresos y gastos.",
        m_riesgos: "Fluctuaciones en los tipos de cambio."
    },
    {
        _id_user: 7,
        m_nombre: "Proceso de Calidad",
        m_tipo: "Calidad",
        m_descripcion: "Control de calidad de productos y servicios.",
        m_riesgos: "Incumplimiento de estándares de calidad."
    },
    {
        _id_user: 8,
        m_nombre: "Proceso de Desarrollo de Producto",
        m_tipo: "Innovación",
        m_descripcion: "Diseño y desarrollo de nuevos productos.",
        m_riesgos: "Demoras en el desarrollo de prototipos."
    },
    {
        _id_user: 9,
        m_nombre: "Proceso de TI",
        m_tipo: "Tecnología",
        m_descripcion: "Gestión de tecnologías de la información.",
        m_riesgos: "Fallas en la infraestructura de TI."
    },
    {
        _id_user: 10,
        m_nombre: "Proceso de Cumplimiento Legal",
        m_tipo: "Legal",
        m_descripcion: "Cumplimiento de regulaciones y leyes.",
        m_riesgos: "Multas por incumplimiento de normativas."
    }
    ];

    return (
        <>
            {data.length > 0 ? (
                <>
                    <TablaComponent
                        data={data}
                        openModal={openModal} />
                </>
            ) : (
                <ProcesoComponent
                    openModal={openModal}
                />
            )}
            <Modal isOpen={modalOpen} onClose={closeModal} />
        </>

    );
};

export default Proceso;
