import React from 'react';
import './inicio.css';

import Calor from '../calor/Calor';
import * as Test from '../../Test'
import * as Datariesgo from '../../utils/Datariesgo'

const Inicio = () => {

    const postRiesgos = Datariesgo.postRiesgos

    const verde ="#60bf52"
    const amarillo ="#FFC043"
    const naranja ="#F27649"
    const rojo ="#F25252"

    const Bs_izquierda ='20px 5px 5px 5px'
    const Bs_derecha ='5px 20px 5px 5px'
    const Bi_izquierda ='5px 5px 5px 20px'
    const Bi_derecha ='5px 5px 20px 5px'
    

    return (
        <div className="container">
            
            <div className='cont-calor'>
                <Calor ycolor={amarillo} yborde={Bs_izquierda}/>
                <Calor ycolor={amarillo}/>
                <Calor ycolor={naranja}/>
                <Calor ycolor={rojo}/>
                <Calor ycolor={rojo} yborde={Bs_derecha}/>
                <Calor ycolor={verde}/>
                <Calor ycolor={amarillo}/>
                <Calor ycolor={naranja}/>
                <Calor ycolor={rojo}/>
                <Calor ycolor={rojo}/>
                <Calor ycolor={verde}/>
                <Calor ycolor={amarillo}/>
                <Calor ycolor={amarillo}/>
                <Calor ycolor={naranja}/>
                <Calor ycolor={rojo}/>
                <Calor ycolor={verde}/>
                <Calor ycolor={verde}/>
                <Calor ycolor={amarillo}/>
                <Calor ycolor={naranja}/>
                <Calor ycolor={rojo}/>
                <Calor ycolor={verde} yborde={Bi_izquierda}/>
                <Calor ycolor={verde}/>
                <Calor ycolor={verde}/>
                <Calor ycolor={amarillo}/>
                <Calor ycolor={naranja} yborde={Bi_derecha}/>
                
                
               
                

            </div>
        </div>
    );
}

export default Inicio;
