
import React from 'react';
import { useState , useEffect } from 'react';
import './calor.css'


const Calor = (props) => {

    const {ycolor , yborde} = props

    const mystyle = {
        background: ycolor,
        borderRadius: yborde,
    }

    const mystyleborde = {
        borderRadius: yborde,
    }


    return ( 
        <div className='calor' style={mystyle}>
            <div className='circle-c'>

            </div>

        </div>
     );
}
 
export default Calor;