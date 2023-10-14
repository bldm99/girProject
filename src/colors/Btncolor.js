

import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';



export const x = () =>{
    console.log("hola")
}

//Botones de colores perzonalizables
export const ColorButton = styled(Button)(({  col, hov }) => ({
    color: "black",
    //color: theme.palette.getContrastText(purple[500]),
    backgroundColor: col,
    '&:hover': {
        backgroundColor: hov,
    },
}));
