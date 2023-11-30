
import React from "react";
import { useState, useEffect, useContext } from "react";

import './reportes.css'
import Mapx from "./Mapx";

import { MapaContext } from "../../utils/Context";
import * as Datariesgo from "../../utils/Datariesgo"

import { MdGetApp } from "react-icons/md";
const Reportes = (props) => {

    const MapaData = useContext(MapaContext)

    const BuscarMacroriesgo = Datariesgo.BuscarMacroriesgo
    const [macroriesgoz , setMacroriesgoz] = useState([])

    const { datoscuadrante, setDatoscuadrante } = MapaData

    const { almacenriesgos, almacenmacroriesgos, almacenmacros } = props

    const [xydatomapa, setXydatomapa] = useState([almacenriesgos])


    useEffect(() => {
        const dato = async () => {
            setXydatomapa(almacenriesgos)
            await BuscarMacroriesgo("6531d08612ec096c58717b97" ,"653988ea0ed021c017bf0247",setMacroriesgoz)
            
        }
        dato()

    }, []);

    const [newmacros, setNewmacros] = useState([])

    console.log(macroriesgoz)





    const getColor = (riesgo) => {
        switch (riesgo) {
            case 'Bajo':
                return 'greenyellow'; // Rojo
            case 'Medio':
                return '#ffda51'; // Naranja
            case 'Alto':
                return 'orange'; // Naranja
            default:
                return 'red'; // Color predeterminado o transparente si no se encuentra una coincidencia
        }
    };


    //console.log(almacenmacroriesgos)//riegos unicos de macroprocesos
    //console.log(newmacros)
    return (
        <div className="reportes">
            <div className="cuerpo-reportes">
                <div className="reporte-titulo">
                    <div><h2>Reporte de Riesgos Existentes</h2></div>
                </div>
                <div className="reporte-filtro-fecha">
                    <div className="f1">
                        <input type="date" id="fecha" name="fecha"></input>

                    </div>
                    <div className="f2">
                        <button>Hoy</button>
                        <button>1 Mes</button>
                        <button>6 Meses</button>
                        <button>1 Año</button>
                    </div>
                    <div className="f3">
                        <label>R. Inherente</label>
                        <input type="checkbox" id="checkbox1" name="opcion1" />
                        <label>R. Residual</label>
                        <input type="checkbox" id="checkbox2" name="opcion2" />
                    </div>
                </div>
                <div className="reporte-filtro-color">
                    <div className="c1"></div>
                    <div className="c2"></div>
                    <div className="c3"></div>
                    <div className="c4"></div>
                </div>
                <div className="reporte-calor">
                    <div className="rmapx">
                        <Mapx
                            xydatomapa={xydatomapa}
                        />
                    </div>
                    <div className="map-general">
                        <div className="map-detalles">
                            <div className="map-save">
                                Descargar <MdGetApp />
                            </div>
                            <div className="map-ty">
                                <p onClick={() => {
                                    setXydatomapa(almacenriesgos)
                                    setNewmacros([])
                                    setDatoscuadrante([])
                                }} >Riesgos</p>
                                <p onClick={() => {
                                    setXydatomapa(almacenmacroriesgos)
                                    setNewmacros(almacenmacros)
                                    setDatoscuadrante([])
                                }} >Procesos</p>
                            </div>
                            <div className="table-map-procesos" style={{ maxHeight: '100px', overflowY: 'auto' }}>
                                <ul>
                                    {newmacros.map((item, index) => (
                                        <li onClick={()=>{BuscarMacroriesgo("6531d08612ec096c58717b97" ,item._id,setXydatomapa)}} key={item._id}> 
                                            {item.m_nombre}
                                           
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div style={{ maxHeight: '210px', overflowY: 'auto' }}>
                                <table className="table-map" >
                                    <thead className="table-map-headers">
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Calificacion</th>
                                            <th>Riesgo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {datoscuadrante.map((item, index) => (
                                            <tr key={item._id}>
                                                <td>{item.nombre}</td>
                                                {/*<td>{item.impacto_desc}</td>
                                        <td>{item.probabilidad_desc}</td>*/}
                                                <td>{item.calificacion}</td>
                                                <td className="td-unico">
                                                    <span className="" style={{ backgroundColor: getColor(item.riesgo), color: 'white' }}>{item.riesgo}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </div>


                        </div>

                    </div>




                </div>
            </div>
        </div>
    );
}

export default Reportes;