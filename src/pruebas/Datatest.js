import axios from "axios";

//Esat url tiene una consfiguracion para que solo http://localhost:5173/ pueda hacer peticiones a la api 
//const URLdesrrolloLocal = "http://localhost:3000/"
const URLdesrrolloLocal = "https://girapi-dev-prxd.4.us-1.fl0.io/"

export const Login = async (u_email, u_password) => {
    try {
        const res = await axios.post(`${URLdesrrolloLocal}logingir`,
            {
                u_email,
                u_password
            },
            {
                withCredentials: true // Habilita el envío de cookies
            }
        );
        const { token } = res.data
        // Guardar el token en localStorage
        //localStorage.setItem("tokenGir", token);

        console.log(token)
    } catch (error) {
        console.log(error)
    }
}

export const Protegido = async () => {

    try {
        //Esto nos devolvera el token real
        //Cuando se hace refresh el token real que pudiera haberse vencido
        //sera refrescadogenerando un nuevo token real
        const resToken = await axios.get(`${URLdesrrolloLocal}refresh`, {
            withCredentials: true,
        });

        const { token } = await resToken.data
        console.log(token)

        const res = await axios.get(`${URLdesrrolloLocal}protected`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            withCredentials: true
        });
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}


export const Logout = async () => {
    try {
        const res = await axios.get(`${URLdesrrolloLocal}logout`,
            {
                withCredentials: true // Habilita el envío de cookies
            }
        );
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}


export const verirefreshtoken = async (xset, navigate) => {
    try {
        const resverificacion = await axios.get(`${URLdesrrolloLocal}verify-token`, {
            withCredentials: true,
        });
        // Verifica si resverificacion.data.success es true
        const success = resverificacion.data.success === true;
        xset(success);
        //console.log(resverificacion.data.success)
    } catch (error) {
        navigate("/login")
        console.error('Error al verificar la autenticación:', error);

    }
};

/*export const Protegido = async () => {
    //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NTMxZDA4NjEyZWMwOTZjNTg3MTdiOTciLCJlbSI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNzAzMDI4MDkzLCJleHAiOjE3MDMwMjg5OTN9.Y4TfwSOWZ2a498OmQ0Akka_E4fVSzm4dzqOZV20LQGg"
    const token = localStorage.getItem("tokenGir")
    try {
        const res = await axios.get(`${URLdesrrolloLocal}protected`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}*/