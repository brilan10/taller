import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { v4 as uuid } from 'uuid';

/* el export const hace que podamos llamar formulario autos el cual contiene los datos de los vehiculos, 
para poder usarlo desde otro lado
props= sirven para pasar datos de un componente a otro
componente= pestaña o apartado. */
export const FormularioAutos = (props) => {

    const [marca, setMarca] = useState(props.auto.marca)
    const [modelo, setModelo] = useState(props.auto.modelo)
    const [pasajeros, setPasajeros] = useState(props.auto.pasajeros)
    const [litrosMotor, setLitrosMotor] = useState(props.auto.litrosMotor)
    const [modeloMotor, setModeloMotor] = useState(props.auto.modeloMotor)
    const [numeroPuertas, setNumeroPuertas] = useState(props.auto.numeroPuertas)

    const handleRegistro = () => {

        props.setAutos([...props.autos, {

            'id': uuid(),
            'marca': marca,
            'modelo': modelo,
            'pasajeros': pasajeros,
            'litrosMotor': litrosMotor,
            'modeloMotor': modeloMotor,
            'numeroPuertas': numeroPuertas,

        }])

    }

    const handleUpdate = (campo, valor) => {


        props.setAuto({ ...props.auto, [campo]: valor })

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
            <Form.Label>Cantidad de Pasajeros: </Form.Label>
            <Form.Control type="number" name="pasajeros" placeholder="Ingrese la cantidad maxima que soporta de pasajeros" onChange={(e) => { setPasajeros(e.target.value); handleUpdate(e.target.name, e.target.value) }} value={pasajeros} />
        </Form.Group>
        <Form.Group>
            <Form.Label>litros del motor: </Form.Label>
            <Form.Control type="text" name="litrosMotor" placeholder="Ingrese los litros del motor" onChange={(e) => { setLitrosMotor(e.target.value); handleUpdate(e.target.name, e.target.value) }} value={litrosMotor} />
        </Form.Group>
        <Form.Group>
            <Form.Label>Modelo delo motor: </Form.Label>
            <Form.Control type="text" name="modeloMotor" placeholder="Ingrese el modelo del motor" onChange={(e) => { setModeloMotor(e.target.value); handleUpdate(e.target.name, e.target.value) }} value={modeloMotor} />
        </Form.Group>
        <Form.Group>
            <Form.Label>Numero de puertas: </Form.Label>
            <Form.Control type="text" name="numeroPuertas" placeholder="Ingrese el nuemro de puertas del vehiculo" onChange={(e) => { setNumeroPuertas(e.target.value); handleUpdate(e.target.name, e.target.value) }} value={numeroPuertas} />
        </Form.Group>
        <Row>

            {props.visible &&
                <Button className='col-md-2 offset-md-5 ' onClick={handleRegistro}>Registrar</Button>
            }
        </Row>
    </Form>

     )
}