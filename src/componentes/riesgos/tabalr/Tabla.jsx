import React, { useState, useEffect, useContext } from 'react';
import './tablar.css'

//Toast aviso emergente
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

import * as Datariesgo from '../../../utils/Datariesgo'
import { NombreContext } from '../../../utils/Context';

import Formupdate from '../../formupdate/Formupdate';
import Alltable from '../../alltable/Alltable';

const Tabla = (props) => {


    const cabezeraTable = [
        { "name": "Nombre" },
        { "name": "Consecuencia" },
        { "name": "C. %" },
        { "name": "Probabilidad" },
        { "name": "P. %" },
        { "name": "Riesgo" },
        { "name": "Proceso" },
    ]
    const propiedadesobj = [
        { "propiedad": "nombre" },
        { "propiedad": "impacto_desc" },
        { "propiedad": "impacto_porc" },
        { "propiedad": "probabilidad_desc" },
        { "propiedad": "probabilidad_porc" },
        { "propiedad": "riesgo" },
        { "propiedad": "proceso_asignado" },
    ]



    const FormData = useContext(NombreContext)
    const { borrarData } = FormData

    const { objriesgos, recargartabla } = props
    // Ordena los datos en objriesgos por la fecha en orden descendente



    const sortedData = objriesgos.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    const [unicoriesgo, setUnicoriesgo] = useState([])

    //Formulario de registro modal
    const [modalVisible, setModalVisible] = useState(false);

    const registrar = () => {
        setModalVisible(true);
    };

    const handleOutsideClick = (event) => {
        if (event.target.classList.contains("modalBldm")) {
            setModalVisible(false);
            borrarData()
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    const rgetColor = (riesgo) => {
        switch (riesgo) {
            case 'Bajo':
                return '#60bf52'; // Rojo
            case 'Medio':
                return '#FFC043'; // Naranja
            case 'Alto':
                return '#F27649'; // Naranja
            default:
                return '#F25252';
        }
    };

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));


    //Funcion  para actualizara valores de un riesgo
    const funActualizarRiesgo = async (dato) => {
        console.log(dato)
        try {
            await Datariesgo.updateRiesgox(
                '6531d08612ec096c58717b97',
                dato.idriesgo,
                dato.nombre,
                dato.impacto_desc,
                dato.impacto_num,
                dato.impacto_porc,
                dato.probabilidad_desc,
                dato.probabilidad_num,
                dato.probabilidad_porc,
                dato.calificacion,
                dato.riesgo,
            )

            //Una vez registrado se cierra el modal
            setModalVisible(false);
            toast.success('¡Riego Actualizado de manera exitosa!');
            //Perimite refresar la tabla con los nuevos datos registrados
            recargartabla()
            console.log('actualiozado')
            borrarData()
        } catch (error) {
            console.log(error)
        }
    }

    


    return (
        <div className='tablar'>
            <div className='tablar-cont'>
                <div className='btn-controllers'>
                    <div className='btn-search'>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Buscar…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </div>

                    {/*<div className='btn-filtros'>
                        <ColorButton variant="contained" col="#52b202" hov="#76ff03">R. Bajo</ColorButton>
                        <ColorButton variant="contained" col="#ffea00" hov="#ffee33">R. Medio</ColorButton>
                        <ColorButton variant="contained" col="#ff9100" hov="#ffa733">R Alto</ColorButton>
                        <ColorButton variant="contained" col="#b22a00" hov="#ff3d00">R Total</ColorButton>
                    </div>*/}
                </div>

                <div>

                </div>

            </div>

            <div className='resul-table'>
                <Alltable
                    cabezeraTable={cabezeraTable}
                    valores={sortedData}
                    propiedadesobj={propiedadesobj}
                    funcionalidad={registrar}
                    idvalor={setUnicoriesgo}
                    rgetColor={rgetColor}
                />

                {/*<div style={{ maxHeight: '340px', overflowY: 'auto', borderRadius: '10px' }}>
                    <table className="table-riesgos" >
                        <thead className="table-riesgos-header">
                            <tr>
                                {cabezeraTable.map((desc , index) => (
                                    <th key={index}>{desc.name}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {sortedData.map((item, index) => (
                                <tr key={item._id} onClick={() => { registrar(); setUnicoriesgo(item) }}>
                                    <td>{item.nombre}</td>
                                    <td>{item.impacto_desc}</td>
                                    <td>{item.impacto_porc}</td>
                                    <td>{item.probabilidad_desc}</td>
                                    <td>{item.probabilidad_porc}</td>
                                    <td className="td-unico">
                                        <span className="" style={{ backgroundColor: rgetColor(item.riesgo) }}>{item.riesgo}</span>
                                    </td>
                                    <td>{item.proceso_asignado}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>*/}
            </div>

            <section >
                {modalVisible && (
                    <div className="modalBldm">
                        <Formupdate
                            unicoriesgo={unicoriesgo}
                            borrador={borrarData}
                            closeBmodal={setModalVisible}
                            funActualizarRiesgo={funActualizarRiesgo}
                        />
                    </div>
                )}
            </section>
        </div>
    );
}

export default Tabla;


{/*<TableContainer component={Paper} style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {tableHeaders.map((header) => (
                                    <TableCell key={header.id} className={`fixed-headers header-background`}>

                                        <strong>{header.label}</strong>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sortedData.map((row) => (
                                <TableRow key={row.id}>
                                    {tableHeaders.map((header) => (
                                        <TableCell key={header.id}>
                                            {header.id === 'fecha' ? new Date(row.fecha).toLocaleDateString() : row[header.id]}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                                    </TableContainer>*/}