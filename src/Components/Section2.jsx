import React from 'react'
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import { FormularioRepuestos } from './FormularioRepuestos';


export const Section2 = () => {

    const [repuestos, setRepuestos] = useState([])
    const [repuesto, setRepuesto] = useState();
    const [show, setShow] = useState(false);
    const [acction, setAcction] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /*genero el modificar*/
    /*rp es la variable donde se guardaran los autos menos el que tiene la id que deseamos modificar o eliminar*/

    const handleUpdate = () => {
        /*estoy ccomparando que auto.id sea distinto a los demas para modificar el que quiero solo comparando id*/
        let rp = repuestos.filter(rp => rp.id !== repuesto.id)
        /*meto en la variable au los autos ecpto el auto que meodifique para luego ser agregado nuevamente*/
        setRepuestos([...rp,repuesto])
        console.log(repuestos)
    }

    const handleDelete = () => {
        let rp = repuestos.filter(re => rp.id !== repuesto.id)
        setRepuestos([...rp])

    }

    const modificar = (id, marca, modelo, cantidad, tipoRepuesto, materialRepuesto, numeroChasis) => {
        setAcction(false)
        setRepuesto({
            'id':id,
            'marca': marca,
            'modelo': modelo,
            'cantidad': cantidad,
            'tipoRepuesto':tipoRepuesto,
            'materialRepuesto': materialRepuesto,
            'numeroChasis': numeroChasis,
        })
        handleShow()

    }
    const eliminar = () => {
        setAcction(true)
        handleShow()
    }


    return (
        <div className='row m-1' >
            <FormularioRepuestos setRepuestos={setRepuestos} repuestos={repuestos} visible={true} repuesto="" />

            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>cantidad</th>
                        <th>tipo de repuesto</th>
                        <th>material de repuesto</th>
                        <th>numero de chasis</th>
                    </tr>
                </thead>
                <tbody>
                    {repuestos.map(({ id, marca, modelo, cantidad, tipoRepuesto, materialRepuesto, numeroChasis }) =>
                    (
                        <tr>
                            <td>{id}</td>
                            <td>{marca}</td>
                            <td>{modelo}</td>
                            <td>{cantidad}</td>
                            <td>{tipoRepuesto}</td>
                            <td>{materialRepuesto}</td>
                            <td>{numeroChasis}</td>
                            <td><Button variant="warning" onClick={()=>{modificar(id, marca, modelo, cantidad, tipoRepuesto, materialRepuesto, numeroChasis)}}>Modificar</Button>
                                <Button variant="danger" onClick={eliminar}>Eliminar</Button>
                            </td>

                        </tr>
                    )
                    )}
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Taller "FAST AND FURIOUS" Repuestos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormularioRepuestos visible={false} repuesto={repuesto} setRepuesto={setRepuesto} />
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