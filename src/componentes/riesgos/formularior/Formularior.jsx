import React, { useState, useEffect } from 'react';
import './formularior.css'

import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';

import Imputx from '../../imputx/Imputx';
//importando fuciones para para dar colr aun boton
import * as Botones from '../../../colors/Btncolor'
import * as Datariesgo from '../../../utils/Datariesgo'

import Foriesgo from './Foriesgo';
import Formacroproceso from './Formacroproceso';
import Valorescausa from './Valorescausa';
import Valorescontrol from './Valorescontrol';




const Formularior = (props) => {





    const { objrSetriesgos, registroRiesgo, closeBmodal, borrador } = props

    const [nombre, setNombre] = useState("hola")
    const [impacto_desc, setImpacto_desc] = useState("")
    const [probabilidad_desc, setProbabilidad_desc] = useState("")



    const [componente, setComponente] = useState(
        <Foriesgo
            registroRiesgo={registroRiesgo}

        />
    );

    const postRiesgos = Datariesgo.postRiesgos
    const buscarRiesgos = Datariesgo.buscarRiesgos

    const BuscarMacroprocesosx  = Datariesgo.BuscarMacroprocesosx
    const [macroproceso , setMacroproceso] = useState([])

    //Data causas
    const BuscarCausasx  = Datariesgo.BuscarCausasx
    const [causa , setCausa] = useState([])

    //Data controles
    const BuscarControlesx  = Datariesgo.BuscarControlesx
    const [control , setControl] = useState([])

    useEffect(() => {
        const obtenerdata = async () => {
            try {
                await BuscarMacroprocesosx("6531d08612ec096c58717b97", setMacroproceso)
                await BuscarCausasx("6531d08612ec096c58717b97", setCausa)
                await BuscarControlesx("6531d08612ec096c58717b97", setControl)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerdata()
    }, []);
    


    return (

        <div className='formularior'>

            <div className='box-for-cont'>
                <div className='for-title'>
                    Generar nuevo riesgo
                </div>
                <div className='box-for'>
                    <div className='riesgo-descripcion'>
                        <h2>Opciones</h2>
                        <div className='rli'>
                            <ul>
                                <li onClick={() => setComponente(<Foriesgo registroRiesgo={registroRiesgo} />)} >
                                    Riesgos
                                </li>
                                <li onClick={() => setComponente(<Formacroproceso macroproceso={macroproceso} />)}>Asignar a Macroproceso</li>
                                <li>Asignar a Proceso</li>
                                <li onClick={() => setComponente(<Valorescausa causa={causa} />)} >Asignar Causa</li>
                                <li onClick={() => setComponente(<Valorescontrol control={control} />)} >Asignar Control</li>
                            </ul>
                        </div>

                    </div>

                    <div className='for-componentes'>
                        {
                            componente
                        }
                    </div>



                </div>


                <div className='for-save'>
                    <div className='for-botones'>
                        <button onClick={() => { closeBmodal(false); borrador() }} >Cancelar</button>
                    </div>
                </div>

            </div>

        </div>

    );
}
export default Formularior;

{/*<div className='riesgo-datos'>
                        <div className='text-titulo'>
                            <Imputx
                                xlabel={"Nombre del riesgo:"}
                                xoutline={"#e65100"}
                                valor={nombre}
                                xplaceholder={"Riesgo de ..."}
                                required
                                actualizarvalor={setNombre}
                                tipo={'input'}
                            />

                        </div>

                        <div className='text-titulo'>
                            <label htmlFor="">Posible Consecuencia de Riesgo</label>
                            <div className='opcion-riesgo'>
                                <ColorButton onClick={() => { setImpacto_desc("Minima") }} variant="contained" col="#e65100" hov="#76ff03">Minina</ColorButton>
                                <ColorButton onClick={() => { setImpacto_desc("Menor") }} variant="contained" col="#e65100" hov="#ffee33">Menor</ColorButton>
                                <ColorButton onClick={() => { setImpacto_desc("Moderada") }} variant="contained" col="#e65100" hov="#ffa733">Moderada</ColorButton>
                                <ColorButton onClick={() => { setImpacto_desc("Mayor") }} variant="contained" col="#e65100" hov="#ff3d00">Mayor</ColorButton>
                                <ColorButton onClick={() => { setImpacto_desc("Maxima") }} variant="contained" col="#e65100" hov="#ff3d00">Maxima</ColorButton>
                            </div>
                        </div>

                        <div className='text-titulo'>

                            <label htmlFor="">Posible impacto de Riesgo</label>
                            <FormControl>

                                <RadioGroup
                                    row
                                    aria-labelledby="demo-form-control-label-placement"
                                    name="position"
                                    defaultValue="top"
                                >

                                    <FormControlLabel
                                        value="Muy Baja"
                                        control={<Radio />}
                                        label="Muy Baja"
                                        labelPlacement="start"
                                        onClick={() => { setProbabilidad_desc("Muy Baja") }}
                                    />
                                    <FormControlLabel
                                        value="Baja"
                                        control={<Radio />}
                                        label="Baja"
                                        labelPlacement="start"
                                        onClick={() => { setProbabilidad_desc("Baja") }}
                                    />
                                    <FormControlLabel
                                        value="Media"
                                        control={<Radio />}
                                        label="Media"
                                        labelPlacement="start"
                                        onClick={() => { setProbabilidad_desc("Media") }}
                                    />
                                    <FormControlLabel
                                        value="Alta"
                                        control={<Radio />}
                                        label="Alta"
                                        labelPlacement="start"
                                        onClick={() => { setProbabilidad_desc("Alta") }}
                                    />
                                    <FormControlLabel
                                        value="Muy Alta"
                                        control={<Radio />}
                                        label="Muy Alta"
                                        labelPlacement="start"
                                        onClick={() => { setProbabilidad_desc("Muy Alta") }}
                                    />



                                </RadioGroup>
                            </FormControl>
                            <Imputx
                                xlabel={"Descripcion o notas riesgo:"}
                                xoutline={"#e65100"}
                                valor={nombreriesgo}
                                xplaceholder={"Riesgo de ..."}
                                obligatorio={true}
                                actualizarvalor={setNombreriesgo}
                                tipo={'textarea'}
                            />
                        </div>
                    </div>*/}