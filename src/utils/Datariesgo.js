
import axios from "axios";
const URLdesrrollo = "http://localhost:3000/"

export const postRiesgos = async (_id, nombre, impacto_desc, impacto_num, impacto_porc,
    probabilidad_desc, probabilidad_num,probabilidad_porc, calificacion, riesgo, proceso_asignado) => {
    try {
        await axios.post(`${URLdesrrollo}registroriesgo`, {
            _id ,
            nombre,
            impacto_desc:"Minimo",
            impacto_num:"1",
            impacto_porc:"20%",
            probabilidad_desc:"Mul Alta",
            probabilidad_num:"5",
            probabilidad_porc:"100%",
            calificacion:"5",
            riesgo:"Alto",
            proceso_asignado:"Contabilidad"
        });

    } catch (error) {
        console.log(error)
    }
}
