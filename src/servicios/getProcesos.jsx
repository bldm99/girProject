import axios from 'axios';

const URLdesarrollo = "https://girapi.bladimirchipana.repl.co/";

export const getProcesos = async (idUsuario) => {
    try {
        const response = await axios.get(`${URLdesarrollo}registromacro?_id=${idUsuario}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getRiesgos = async (idUsuario) => {
    try {
        const response = await axios.get(`${URLdesarrollo}registroriesgo?_id=${idUsuario}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};




