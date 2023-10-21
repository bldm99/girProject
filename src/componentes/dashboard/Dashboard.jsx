import { useState, useEffect } from "react";
import './dashboard.css'
import Calor from "../calor/Calor";

const verde = "#60bf52"
const amarillo = "#FFC043"
const naranja = "#F27649"
const rojo = "#F25252"

const Bs_izquierda = '20px 5px 5px 5px'
const Bs_derecha = '5px 20px 5px 5px'
const Bi_izquierda = '5px 5px 5px 20px'
const Bi_derecha = '5px 5px 20px 5px'

const Dashboard = (props) => {

    const {almacenriesgos} = props

    const cuadrante1 = almacenriesgos.filter((item) => item.calificacion === "1");
    const cuadrante15 = almacenriesgos.filter((item) => item.calificacion === "48");

    

    return (
        <div className="dashboard">
            <div className="cont-dashboard">
                <div className="title-dash">
                    <h2>Vista general control de riesgos</h2>
                </div>

                <div className="contenido-dash">
                    <div className="dash-mapa">
                        mapacalor
                        <div className="xy">
                            <div className='cuadro-calor'>
                                <Calor ycolor={amarillo} yborde={Bs_izquierda} cantidad={cuadrante1.length} />
                                <Calor ycolor={amarillo} />
                                <Calor ycolor={naranja} />
                                <Calor ycolor={rojo} />
                                <Calor ycolor={rojo} yborde={Bs_derecha} />
                                <Calor ycolor={verde} />
                                <Calor ycolor={amarillo} />
                                <Calor ycolor={naranja} />
                                <Calor ycolor={rojo} />
                                <Calor ycolor={rojo} />
                                <Calor ycolor={verde} />
                                <Calor ycolor={amarillo} />
                                <Calor ycolor={amarillo} />
                                <Calor ycolor={naranja} />
                                <Calor ycolor={rojo} cantidad={cuadrante15.length} />
                                <Calor ycolor={verde} />
                                <Calor ycolor={verde} />
                                <Calor ycolor={amarillo} />
                                <Calor ycolor={naranja} />
                                <Calor ycolor={rojo} />
                                <Calor ycolor={verde} yborde={Bi_izquierda} />
                                <Calor ycolor={verde} />
                                <Calor ycolor={verde} />
                                <Calor ycolor={amarillo} />
                                <Calor ycolor={naranja} yborde={Bi_derecha} />
                            </div>
                        </div>

                    </div>
                    <div className="dash-detalles">
                        detalless
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Dashboard;