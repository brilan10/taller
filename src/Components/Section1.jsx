import React from 'react'
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import { FormularioAutos } from "./FormularioAutos"


export const Section1 = () => {

    const [autos, setAutos] = useState([])
    const [auto, setAuto] = useState();
    const [show, setShow] = useState(false);
    const [acction, setAcction] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /*genero el modificar*/

    const handleUpdate = () => {
        /*estoy ccomparando que auto.id sea distinto a los demas para modificar el que quiero solo comparando id*/
        let au = autos.filter(au => au.id !== auto.id)
        /*meto en la variable au los autos ecpto el auto que meodifique para luego ser agregado nuevamente*/
        setAutos([...au,auto])
        console.log(autos)
    }

    const handleDelete = () => {
        let au = autos.filter(au => au.id !== auto.id)
        setAutos([...au])

    }

    const modificar = (id, marca, modelo, pasajeros, litrosMotor, modeloMotor, numeroPuertas) => {
        setAcction(false)
        setAuto({
            'id':id,
            'marca': marca,
            'modelo': modelo,
            'pasajeros': pasajeros,
            'litrosMotor': litrosMotor,
            'modeloMotor': modeloMotor,
            'numeroPuertas': numeroPuertas,
        })
        handleShow()

    }
    const eliminar = () => {
        setAcction(true)
        handleShow()
    }


    return (
        <div className='row m-1' >
            <FormularioAutos setAutos={setAutos} autos={autos} visible={true} auto="" />

            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Pasajeros</th>
                        <th>Litros del Motor</th>
                        <th>Modelo del Motor</th>
                        <th>numero de Puertas</th>
                    </tr>
                </thead>
                <tbody>
                    {autos.map(({ id, marca, modelo, pasajeros, litrosMotor, modeloMotor, numeroPuertas }) =>
                    (
                        <tr>
                            <td>{id}</td>
                            <td>{marca}</td>
                            <td>{modelo}</td>
                            <td>{pasajeros}</td>
                            <td>{litrosMotor}</td>
                            <td>{modeloMotor}</td>
                            <td>{numeroPuertas}</td>
                            <td><Button variant="warning" onClick={()=>{modificar(id, marca, modelo, pasajeros, litrosMotor, modeloMotor, numeroPuertas)}}>Modificar</Button>
                                <Button variant="danger" onClick={eliminar}>Eliminar</Button>
                            </td>

                        </tr>
                    )
                    )}
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Taller "FAST AND FURIOUS"</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormularioAutos visible={false} auto={auto} setAuto={setAuto} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {
                        !acction ?
                            <Button variant="warning" onClick={handleUpdate}>
                                Modificar
                            </Button> :
                            <Button variant="danger" onClick={handleDelete}>
                                Eliminar
                            </Button>

                    }

                </Modal.Footer>
            </Modal>

        </div>
    )
}