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

    const repetidos2 = almacenriesgos.filter((item) => item.calificacion === "2");
    const repetidos4 = almacenriesgos.filter((item) => item.calificacion === "4");
    const repetidos8 = almacenriesgos.filter((item) => item.calificacion === "8");
    const repetidos16 = almacenriesgos.filter((item) => item.calificacion === "16");
    const repetidos32 = almacenriesgos.filter((item) => item.calificacion === "32");

    const cuadrante1 = almacenriesgos.filter((item) => item.calificacion === "5");
    const cuadrante2 = almacenriesgos.filter((item) => item.calificacion === "10");
    const cuadrante3 = almacenriesgos.filter((item) => item.calificacion === "20");
    const cuadrante4 = almacenriesgos.filter((item) => item.calificacion === "40");
    const cuadrante5 = almacenriesgos.filter((item) => item.calificacion === "80");



    const cuadrante6 = repetidos4.filter((item) => item.impacto_num === "1" && item.probabilidad_num === "4");
    const cuadrante7 = repetidos8.filter((item) => item.impacto_num === "2" && item.probabilidad_num === "4")
    const cuadrante8 = repetidos16.filter((item) => item.impacto_num === "4" && item.probabilidad_num === "4")
    const cuadrante9 = repetidos32.filter((item) => item.impacto_num === "8" && item.probabilidad_num === "4")
    const cuadrante10 = almacenriesgos.filter((item) => item.calificacion === "64");

    const cuadrante11 = almacenriesgos.filter((item) => item.calificacion === "3");
    const cuadrante12 = almacenriesgos.filter((item) => item.calificacion === "6");
    const cuadrante13 = almacenriesgos.filter((item) => item.calificacion === "12");
    const cuadrante14 = almacenriesgos.filter((item) => item.calificacion === "24");
    const cuadrante15 = almacenriesgos.filter((item) => item.calificacion === "48");

    const cuadrante16 = repetidos2.filter((item) => item.impacto_num === "1" && item.probabilidad_num === "2");
    const cuadrante17 = repetidos4.filter((item) => item.impacto_num === "2" && item.probabilidad_num === "2");
    const cuadrante18 = repetidos8.filter((item) => item.impacto_num === "4" && item.probabilidad_num === "2");
    const cuadrante19 = repetidos16.filter((item) => item.impacto_num === "8" && item.probabilidad_num === "2");
    const cuadrante20 = repetidos32.filter((item) => item.impacto_num === "16" && item.probabilidad_num === "2");

    const cuadrante21 = almacenriesgos.filter((item) => item.calificacion === "1");
    const cuadrante22 = repetidos2.filter((item) => item.impacto_num === "2" && item.probabilidad_num === "1");
    const cuadrante23 = repetidos4.filter((item) => item.impacto_num === "4" && item.probabilidad_num === "1");
    const cuadrante24 = repetidos8.filter((item) => item.impacto_num === "8" && item.probabilidad_num === "1");
    const cuadrante25 = repetidos16.filter((item) => item.impacto_num === "16" && item.probabilidad_num === "1");

    //

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
                                <Calor ycolor={amarillo} cantidad={cuadrante2.length} />
                                <Calor ycolor={naranja} cantidad={cuadrante3.length} />
                                <Calor ycolor={rojo} cantidad={cuadrante4.length} />
                                <Calor ycolor={rojo} yborde={Bs_derecha} cantidad={cuadrante5.length} />

                                <Calor ycolor={verde} cantidad={cuadrante6.length} />
                                <Calor ycolor={amarillo} cantidad={cuadrante7.length} />
                                <Calor ycolor={naranja} cantidad={cuadrante8.length} />
                                <Calor ycolor={rojo} cantidad={cuadrante9.length} />
                                <Calor ycolor={rojo} cantidad={cuadrante10.length} />

                                <Calor ycolor={verde} cantidad={cuadrante11.length} />
                                <Calor ycolor={amarillo} cantidad={cuadrante12.length} />
                                <Calor ycolor={amarillo} cantidad={cuadrante13.length} />
                                <Calor ycolor={naranja} cantidad={cuadrante14.length} />
                                <Calor ycolor={rojo} cantidad={cuadrante15.length} />

                                <Calor ycolor={verde} cantidad={cuadrante16.length} />
                                <Calor ycolor={verde} cantidad={cuadrante17.length} />
                                <Calor ycolor={amarillo} cantidad={cuadrante18.length} />
                                <Calor ycolor={naranja} cantidad={cuadrante19.length} />
                                <Calor ycolor={rojo} cantidad={cuadrante20.length} />

                                <Calor ycolor={verde} yborde={Bi_izquierda} cantidad={cuadrante21.length} />
                                <Calor ycolor={verde} cantidad={cuadrante22.length} />
                                <Calor ycolor={verde} cantidad={cuadrante23.length} />
                                <Calor ycolor={amarillo} cantidad={cuadrante24.length} />
                                <Calor ycolor={naranja} yborde={Bi_derecha} cantidad={cuadrante25.length} />
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