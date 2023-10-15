
import React, { useState, useEffect } from 'react';
import './descripcionr.css'

const Descripcionr = () => {

    return (
        <div className='descripcionr'>
            <div>
                <h3>En esta sección, podrás:</h3>
            </div>
            <div className='cont-card-des'>
                <div className='desc-center'>

                    <div className='card-des'>
                        Identificar Riesgos: Aprenderás a reconocer posibles
                        amenazas y desafíos que podrían afectar tus objetivos.

                    </div>
                    <div className='card-des'>
                        Evaluar Riesgos: Utiliza nuestras herramientas de evaluación
                        para medir la probabilidad y el impacto de los riesgos identificados.

                    </div>
                    <div className='card-des'>
                        Mitigar Riesgos: Descubre estrategias y mejores prácticas para reducir
                        o eliminar los riesgos de manera efectiva.

                    </div>
                    <div className='card-des'>
                        Gestionar Riesgos: Crea y administra tus propios riesgos, lo que te permite
                        un control completo sobre los desafíos que enfrentas.

                    </div>
                    <div className='card-des'>
                        Planificar y Monitorear: Crea planes de acción y establece medidas de
                        control para garantizar un seguimiento constante de tus esfuerzos de gestión de riesgos.

                    </div>

                    <div className='card-des'>
                        Aprender de la Experiencia: Accede a casos de estudio y lecciones aprendidas para
                        mejorar tu enfoque en la gestión de riesgos.

                    </div>
                    

                </div>
            </div>
        </div>
    );
}
export default Descripcionr
