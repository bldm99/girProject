import axios from "axios";

//Esat url tiene una consfiguracion para que solo http://localhost:5173/ pueda hacer peticiones a la api 
const URLdesrrolloLocal = "http://localhost:3000/"

const URLdesrrollo = "https://girapi-dev-prxd.4.us-1.fl0.io/"

export const Loginr = async (u_email, u_password , navigate) => {
    try {
        const res = await axios.post(`${URLdesrrollo}logingir`,
            {
                u_email,
                u_password
            },
            {
                withCredentials: true // Habilita el envío de cookies
            }
        );
        //const { token } = res.data
        navigate("/");
        //console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}