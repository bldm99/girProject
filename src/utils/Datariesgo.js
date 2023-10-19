const URLdesrrollo = "http://localhost:3000/"

export const postRiesgos = async (_id, nombre, impacto_desc, impacto_num, impacto_porc,
    probabilidad_desc, probabilidad_num,probabilidad_porc, calificacion, riesgo, proceso_asignado) => {
    try {
        await axios.post(`${URLdesrrollo}registroriesgo`, {
            _id,
            nombre,
            impacto_desc,
            impacto_num,
            impacto_porc,
            probabilidad_desc,
            probabilidad_num,
            probabilidad_porc,
            calificacion,
            riesgo,
            proceso_asignado
        });

    } catch (error) {
        console.log(error)
    }
}
