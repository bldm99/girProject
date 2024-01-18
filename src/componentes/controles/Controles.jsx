import React, { useState, useEffect, useContext } from 'react'
import './controles.css'

import * as Datariesgo from '../../utils/Datariesgo'
import { NombreContext } from '../../utils/Context';

//Toast aviso emergente
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Formulariocontrol from './formulariocontrol/Formulariocontrol';
import Alltable from '../alltable/Alltable';

export const Controles = () => {

    const postControles = Datariesgo.postControles
    const pushRiesgocontrol = Datariesgo.pushRiesgocontrol

    const FormData = useContext(NombreContext)
    const { riesgoSeleccionados, borrarDatacontrol } = FormData

    const [modalVisible, setModalVisible] = useState(false);

    const [controles, setControles] = useState([])

    const registrar = () => {
        setModalVisible(true);
    };
    const handleOutsideClick = (event) => {
        if (event.target.classList.contains("modal-controles-Bldm")) {
            setModalVisible(false);
            borrarDatacontrol()
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        const obtenerdata = async () => {
            try {
                await Datariesgo.BuscarControlesx('6531d08612ec096c58717b97', setControles)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerdata()

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);



    //efectuar registro de un nuevo control y tambien poder registrala
    //dentro de varios riesgos
    const registroControl = async (dato) => {
        try {
            await postControles(
                dato.idusuario,
                dato.nombre,
                dato.complejidad,
                dato.tipo,
                dato.descripcion,
            )

            const { idusuario, ...datoSinIdUsuario } = dato;
            //permite traernos todo los datos de las causas pero sin el id del usuario
            //ya que no lo nesecitamos
            const nuevasControles = [
                datoSinIdUsuario
            ];

            for (let i = 0; i < riesgoSeleccionados.length; i++) {
                await pushRiesgocontrol(dato.idusuario, riesgoSeleccionados[i], nuevasControles)
            }

            //Una vez registrado se cierra el modal
            setModalVisible(false);
            toast.success('¡Riego registrado de manera exitosa!');
            //Perimite refresar la tabla con los nuevos datos registrados
            //buscarRiesgos("6531d08612ec096c58717b97", setDatariesgos)
            borrarDatacontrol()
        } catch (error) {
            console.log(error)
        }
    }

    const cabezeraTable = [
        { "name": "Nombre" },
        { "name": "Tipo" },
        { "name": "Descripcion" }
    ]
    const propiedadesobj = [
        { "propiedad": "nombre" },
        { "propiedad": "tipo" },
        { "propiedad": "descripcion" }
    ]
    const [unicontrol, setUnicontrol] = useState([])

    return (
        <div className='controles'>
            <ToastContainer />
            <div className='controles-cabezera'>
                <div>
                    <h2>Controles o Mitigaciones de riesgo</h2>
                </div>
                <div>
                    <button onClick={() => { registrar() }} >Crear Controles</button>
                </div>
            </div>
            <div>
                <p>
                    En el apartado de "Controles de Riesgos", se delinean las estrategias y medidas
                    diseñadas para prevenir, detectar o corregir los riesgos identificados en un
                    proyecto, proceso o sistema. Estos controles abarcan aspectos administrativos,
                    técnicos y de procedimientos, y están diseñados para reducir la probabilidad
                    de ocurrencia de riesgos o mitigar su impacto. Se clasifican en controles
                    preventivos, detectivos y correctivos, ofreciendo un enfoque integral para
                    gestionar eficazmente los riesgos.
                </p>

            </div>
            <div className='controles-filtros'>
                Filtros
            </div>

            <div className='cont-table-controles'>
                <Alltable
                    cabezeraTable={cabezeraTable}
                    valores={controles}
                    propiedadesobj={propiedadesobj}
                    idvalor={setUnicontrol}
                />
            </div>

            <section className="F">
                {modalVisible && (
                    <div className="modal-controles-Bldm">
                        <Formulariocontrol
                            registroControl={registroControl}
                            closeBmodal={setModalVisible}
                            borrador={borrarDatacontrol}

                        />
                    </div>
                )}
            </section>


        </div>
    )
}
