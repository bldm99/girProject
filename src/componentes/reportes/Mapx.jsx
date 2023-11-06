
import React from "react";
import { useState, useEffect , useContext } from "react";

import './mapx.css'
import Calor from "../calor/Calor";

import { MapaContext } from "../../utils/Context";

const Mapx = (props) => {

    const MapaData = useContext(MapaContext)

    const { datoscuadrante , setDatoscuadrante } = MapaData


    const { almacenriesgos } = props
    //console.log(almacenriesgos)

    const verde = "#60bf52"
    const amarillo = "#FFC043"
    const naranja = "#F27649"
    const rojo = "#F25252"

    const Bs_izquierda = '20px 5px 5px 5px'
    const Bs_derecha = '5px 20px 5px 5px'
    const Bi_izquierda = '5px 5px 5px 20px'
    const Bi_derecha = '5px 5px 20px 5px'


    const cli = (obj) => {   
        setDatoscuadrante(obj)
        
    }
    console.log(datoscuadrante)

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

    return (
        <div className="mapx">
            <Calor ycolor={amarillo} yborde={Bs_izquierda} cantidad={cuadrante1.length} cli={cli} val={cuadrante1} />
            <Calor ycolor={amarillo} cantidad={cuadrante2.length} cli={cli} val={cuadrante2} />
            <Calor ycolor={naranja} cantidad={cuadrante3.length} cli={cli} val={cuadrante3} />
            <Calor ycolor={rojo} cantidad={cuadrante4.length} cli={cli} val={cuadrante4} />
            <Calor ycolor={rojo} yborde={Bs_derecha} cantidad={cuadrante5.length} cli={cli} val={cuadrante5} />

            <Calor ycolor={verde} cantidad={cuadrante6.length} cli={cli} val={cuadrante6} />
            <Calor ycolor={amarillo} cantidad={cuadrante7.length} cli={cli} val={cuadrante7} />
            <Calor ycolor={naranja} cantidad={cuadrante8.length} cli={cli} val={cuadrante8} />
            <Calor ycolor={rojo} cantidad={cuadrante9.length} cli={cli} val={cuadrante9} />
            <Calor ycolor={rojo} cantidad={cuadrante10.length} cli={cli} val={cuadrante10} />

            <Calor ycolor={verde} cantidad={cuadrante11.length} cli={cli} val={cuadrante11} />
            <Calor ycolor={amarillo} cantidad={cuadrante12.length} cli={cli} val={cuadrante12} />
            <Calor ycolor={amarillo} cantidad={cuadrante13.length} cli={cli} val={cuadrante13} />
            <Calor ycolor={naranja} cantidad={cuadrante14.length} cli={cli} val={cuadrante14} />
            <Calor ycolor={rojo} cantidad={cuadrante15.length} cli={cli} val={cuadrante15} />

            <Calor ycolor={verde} cantidad={cuadrante16.length} cli={cli} val={cuadrante16} />
            <Calor ycolor={verde} cantidad={cuadrante17.length} cli={cli} val={cuadrante17} />
            <Calor ycolor={amarillo} cantidad={cuadrante18.length} cli={cli} val={cuadrante18} />
            <Calor ycolor={naranja} cantidad={cuadrante19.length} cli={cli} val={cuadrante19} />
            <Calor ycolor={rojo} cantidad={cuadrante20.length} cli={cli} val={cuadrante20} />

            <Calor ycolor={verde} yborde={Bi_izquierda} cantidad={cuadrante21.length} cli={cli} val={cuadrante21} />
            <Calor ycolor={verde} cantidad={cuadrante22.length} cli={cli} val={cuadrante22} />
            <Calor ycolor={verde} cantidad={cuadrante23.length} cli={cli} val={cuadrante23} />
            <Calor ycolor={amarillo} cantidad={cuadrante24.length} cli={cli} val={cuadrante24} />
            <Calor ycolor={naranja} yborde={Bi_derecha} cantidad={cuadrante25.length} cli={cli} val={cuadrante25} />
        </div>
    );
}

export default Mapx;