import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { v4 as uuid } from 'uuid';

/* el export const hace que podamos llamar formulario repuestos el cual contiene los datos de los repuestos, 
para poder usarlo desde otro lado
props= sirven para pasar datos de un componente a otro
componente= pestaña o apartado. */
export const FormularioRepuestos = (props) => {

    const [marca, setMarca] = useState(props.repuesto.marca)
    const [modelo, setModelo] = useState(props.repuesto.modelo)
    const [cantidad, setCantidad] = useState(props.repuesto.cantidad)
    const [tipoRepuesto, setTipoRepuesto] = useState(props.repuesto.tipoRepuesto)
    const [materialRepuesto, setMaterialRepuesto] = useState(props.repuesto.materialRepuesto)
    const [numerochasis, setNumeroChasis] = useState(props.repuesto.numerochasis)

    const handleRegistro = () => {

        props.setRepuestos([...props.repuestos, {

            'id': uuid(),
            'marca': marca,
            'modelo': modelo,
            'cantidad': cantidad,
            'tipoRepuesto':tipoRepuesto,
            'materialRepuesto': materialRepuesto,
            'numeroChasis': numerochasis,

        }])

    }

    const handleUpdate = (campo, valor) => {


        props.setRepuestos({ ...props.repuesto, [campo]: valor })

    }

     return (
    <Form>
        <Form.Group>
            <Form.Label>Marca: </Form.Label>
            <Form.Control type="text" name="marca" placeholder="Ingrese la marca del vehiculo" onChange={(e) => { setMarca(e.target.value); handleUpdate(e.target.name, e.target.value) }} value={marca} />
        </Form.Group>
        <Form.Group>
            <Form.Label>Modelo: </Form.Label>
            <Form.Control type="text" name="modelo" placeholder="Ingrese el modelod el Vehiculo" onChange={(e) => { setModelo(e.target.value); handleUpdate(e.target.name, e.target.value) }} value={modelo} />
        </Form.Group>
        <Form.Group>
            <Form.Label>Cantidad del repuesto: </Form.Label>
            <Form.Control type="number" name="cantidad" placeholder="Ingrese la cantidad de repuestos" onChange={(e) => { setCantidad(e.target.value); handleUpdate(e.target.name, e.target.value) }} value={cantidad} />
        </Form.Group>
        <Form.Group>
            <Form.Label>Tipo de Repuesto: </Form.Label>
            <Form.Control type="text" name="tipoRespuesto" placeholder="ingrese que tipo de repuesto es" onChange={(e) => { setTipoRepuesto(e.target.value); handleUpdate(e.target.name, e.target.value) }} value={tipoRepuesto} />
        </Form.Group>
        <Form.Group>
            <Form.Label>Material del repuesto: </Form.Label>
            <Form.Control type="text" name="materialrepuesto" placeholder="Ingrese el tipo de material del repeusto" onChange={(e) => { setMaterialRepuesto(e.target.value); handleUpdate(e.target.name, e.target.value) }} value={materialRepuesto} />
        </Form.Group>
        <Form.Group>
            <Form.Label>Numero de Chasis  : </Form.Label>
            <Form.Control type="text" name="numeroChasis" placeholder="Ingrese el nuemro de chasis del vehiculo" onChange={(e) => { setNumeroChasis(e.target.value); handleUpdate(e.target.name, e.target.value) }} value={numerochasis} />
        </Form.Group>
        <Row>

            {props.visible &&
                <Button className='col-md-2 offset-md-5 ' onClick={handleRegistro}>Registrar</Button>
            }
        </Row>
    </Form>

     )
}