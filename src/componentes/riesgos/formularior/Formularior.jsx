import React, { useState, useEffect } from 'react';
import './formularior.css'

const Formularior = () => {

    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, []);



    return(
        <div className='formularior'>
            crea tu riesgo aqui
            El origen de los agujeros negros supermasivos sigue siendo un campo de investigación abierto. Los astrofísicos están de acuerdo en que una vez que un agujero negro está en su lugar en el centro de una galaxia, puede crecer por la acreción de materia y mediante la fusión con otros agujeros negros. Hay, sin embargo, varias hipótesis para los mecanismos de formación y masas iniciales de los progenitores, o "semillas", de agujeros negros supermasivos.

La hipótesis más obvia es que las semillas son agujeros negros de decenas o quizás cientos de masas solares que quedan por las explosiones de estrellas masivas y aumentan por acreción de materia.
Otro modelo consiste en una gran nube de gas en el período anterior a las primeras estrellas formadas al colapsar en una "cuasi-estrella" y luego en un agujero negro en principio de solo alrededor de 20 millones de soles, y después, rápidamente, por acreción, convertirse con relativa rapidez en un agujero negro de masa intermedia, y posiblemente un SMBH (Agujero Negro SuperMasivo; siglas en inglés) si la tasa de acreción no decae en masas mayores.3​ La "cuasi-estrella" inicial se vuelve inestable por perturbaciones radiales debido a la producción de pares electrón-positrón en su núcleo, y puede colapsar directamente en un agujero negro sin una explosión de supernova, que expulse la mayor parte de su masa dejando un agujero negro como remanente.
Sin embargo, otro modelo4​ implica un cúmulo estelar denso sometido a colapso en un núcleo con disminución de la cantidad de calor del resto expulsado por dispersión a velocidades relativistas.
Por último, los agujeros negros primordiales pueden haber sido producidos directamente por la presión externa en los primeros momentos después del Big Bang. La formación de los agujeros negros por la muerte de las primeras estrellas se ha estudiado y corroborado por las observaciones ampliamente. Los otros modelos para la formación del agujero negro mencionadas anteriormente son teóricos.

        </div>
    );
}
export default Formularior;