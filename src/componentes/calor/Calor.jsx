
import React from 'react';
import { useState , useEffect } from 'react';
import './calor.css'


const Calor = (props) => {

    const {ycolor , yborde , cantidad , cli , val} = props

    //permite pintar un backgroun si es que se tiene datos
    let resulBackground = "sincolor"
    let resulColor = ycolor
    let resulVisible = "hidden"
    //console.log(cantidad)

    if(cantidad > 0){
        resulBackground = "black"
        resulColor = "whitesmoke"
        /*resulVisible = "visible"*/
    }

    const mystyle = {
        background: ycolor,
        borderRadius: yborde,
    }

    const mystylecircle= {
        background: resulBackground,
        color: resulColor,
        /*visibility: resulVisible,*/
    }

    const ab = () =>{
        cli(val)
    }


    return ( 
        <div className='calor' style={mystyle} onClick={ab}>
            <div className='circle-c' style={mystylecircle}>
                {cantidad}
            </div>

        </div>
     );
}
 
export default Calor;