import React, { useState, useEffect, useContext } from 'react';
import './causas.css'

import * as Datariesgo from '../../utils/Datariesgo'
import { NombreContext } from '../../utils/Context';
import Formularioc from './formularioc/Formularioc';
import Alltable from '../alltable/Alltable';

//Toast aviso emergente
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Causas = () => {

    const postCausas = Datariesgo.postCausas
    const pushRiesgocausa = Datariesgo.pushRiesgocausa


    const FormData = useContext(NombreContext)
    const { riesgoSeleccionados, borrarDatacausa } = FormData

    const [modalVisible, setModalVisible] = useState(false);
    const [causas, setCausas] = useState([])

    const registrar = () => {
        setModalVisible(true);
    };
    const handleOutsideClick = (event) => {
        if (event.target.classList.contains("modal-causas-Bldm")) {
            setModalVisible(false);
            borrarDatacausa()
        }
    };
    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        const obtenerdata = async () => {
            try {
                await Datariesgo.BuscarCausasx('6531d08612ec096c58717b97', setCausas)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerdata()

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);



    //efectuar registro de una nueva causa y tambien poder registrala
    //dentro de varios riesgos
    const registroCausa = async (dato) => {
        try {
            await postCausas(
                dato.idusuario,
                dato.nombre,
                dato.categoria,
                dato.descripcion,
            )

            const { idusuario, ...datoSinIdUsuario } = dato;
            //permite traernos todo los datos de las causas pero sin el id del usuario
            //ya que no lo nesecitamos
            const nuevasCausas = [
                datoSinIdUsuario
            ];

            for (let i = 0; i < riesgoSeleccionados.length; i++) {
                await pushRiesgocausa(dato.idusuario, riesgoSeleccionados[i], nuevasCausas)
            }

            //Una vez registrado se cierra el modal
            setModalVisible(false);
            toast.success('¡Riego registrado de manera exitosa!');
            //Perimite refresar la tabla con los nuevos datos registrados
            //buscarRiesgos("6531d08612ec096c58717b97", setDatariesgos)
            borrarDatacausa()
        } catch (error) {
            console.log(error)
        }
    }


    const cabezeraTable = [
        { "name": "Nombre" },
        { "name": "Categoria" },
        { "name": "Descripcion" }
    ]
    const propiedadesobj = [
        { "propiedad": "nombre" },
        { "propiedad": "categoria" },
        { "propiedad": "descripcion" }
    ]
    const [unicausa, setUnicausa] = useState([])


    return (
        <div className='causas'>
            <ToastContainer />
            <div className='causas-cabezera'>
                <div>
                    <h2>Causas y Consecuencias</h2>
                </div>
                <div>
                    <button onClick={() => { registrar() }} >Crear causa y consecuencia</button>
                </div>
            </div>

            <div>
                <p>
                    En el apartado de "Causas y Consecuencias de Riesgos", se abordan tanto los factores
                    que originan o contribuyen a la aparición de riesgos como las posibles ramificaciones
                    derivadas de su materialización. En la sección de causas, se identifican y describen
                    las fuentes internas y externas, eventos o condiciones que podrían dar lugar a
                    riesgos en un proyecto, proceso o sistema.
                </p>
                <p>
                    Por otro lado, en el área de consecuencias, se detallan los efectos potenciales en términos
                    de impactos financieros, operativos, legales, reputacionales, entre otros. Clasificar
                    estas consecuencias en gravedad y alcance permite una priorización informada de la
                    gestión de riesgos y prepara para la adopción de medidas de respuesta ante diversos
                    escenarios adversos.
                </p>
            </div>

            <div className='causas-filtros'>
                Filtros
            </div>

            <div className='cont-table-causas'>
                <Alltable
                    cabezeraTable={cabezeraTable}
                    valores={causas}
                    propiedadesobj={propiedadesobj}

                    idvalor={setUnicausa}

                />
            </div>

            <section className="F">
                {modalVisible && (
                    <div className="modal-causas-Bldm">
                        <Formularioc
                            registroCausa={registroCausa}
                            closeBmodal={setModalVisible}
                            borrador={borrarDatacausa}

                        />
                    </div>
                )}
            </section>


        </div>
    );
}

export default Causas;