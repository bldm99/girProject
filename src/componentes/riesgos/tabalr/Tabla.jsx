import React, { useState, useEffect } from 'react';
import './tablar.css'
import * as Valores from '../tabalr/jsonData'

//importando fuciones para para dar colr aun boton
import * as Botones from '../../../colors/Btncolor'


import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

//import SearchIcon from '@mui/icons-material/Search';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import * as Datariesgo from '../../../utils/Datariesgo'

const Tabla = (props) => {

    const { objriesgos } = props

    // Ordena los datos en objriesgos por la fecha en orden descendente
    const sortedData = objriesgos.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    const jsonData = Valores.jsonData
    const tableHeaders = [
        { id: 'nombre', label: 'Nombre' },
        { id: 'impacto_desc', label: 'Consecuencia' },
        { id: 'impacto_porc', label: 'C. %' },
        { id: 'probabilidad_desc', label: 'Probabilidad' },
        { id: 'probabilidad_porc', label: 'P. %' },
        { id: 'riesgo', label: 'Riesgo' },
        { id: 'proceso_asignado', label: 'Proceso' }
    ];

    useEffect(() => {

    }, []);



    const ColorButton = Botones.ColorButton


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

                    <div className='btn-filtros'>
                        <ColorButton variant="contained" col="#52b202" hov="#76ff03">R. Bajo</ColorButton>
                        <ColorButton variant="contained" col="#ffea00" hov="#ffee33">R. Medio</ColorButton>
                        <ColorButton variant="contained" col="#ff9100" hov="#ffa733">R Alto</ColorButton>
                        <ColorButton variant="contained" col="#b22a00" hov="#ff3d00">R Total</ColorButton>
                    </div>
                </div>

                <div>

                </div>

            </div>

            <div className='resul-table'>
                <TableContainer component={Paper} style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {tableHeaders.map((header) => (
                                    <TableCell key={header.id} className={`fixed-headers header-background`}>
                                        <th>{header.label}</th>
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
                </TableContainer>
            </div>
        </div>
    );
}

export default Tabla;