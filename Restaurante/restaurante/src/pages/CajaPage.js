import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { FormCheck } from 'react-bootstrap'
export default function CajaPage() {
  return (
    <div>
        <div className="card">
            <Form>
                <div className="card-header">
                    <h3>Cajas</h3>
                </div>
                <div className="card-body">
                    
                    <FormGroup>
                        <Label for="codigo">Codigo de Registro</Label>
                        <Input 
                        type="text" 
                        name="codigo" 
                        id="codigo" 
                        placeholder="Digite el codigo" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="fecha">Fecha de Registro</Label>
                        <Input 
                        type="date" 
                        name="fecha" 
                        id="fecha" 
                        placeholder="Digite la fecha " />
                    </FormGroup>
                    <FormGroup>
                        <Label for="nombre">Nombre del Restaurante</Label>
                        <Input 
                        type="text" 
                        name="nombre" 
                        id="nombre" 
                        placeholder="Digite el nombre del restaurante"/>
                    </FormGroup>
                    <FormGroup>
                        <FormCheck 
                    type="switch"
                    id="AperturaCheck"
                    label="Apertura de Caja"
                />
                <FormCheck 
                    type="switch"
                    id="CierreCheck"
                    label="Cierre de caja"
                />
                </FormGroup>
                   
                   
                </div>
                <div className="card-footer">
                    <Button className='btn btn-success' >Aceptar</Button>
                    <Button className='btn btn-danger'>Cancelar</Button>
                    <Button className='btn btn-secondary' >Limpiar</Button>
                    <Button className='btn btn-success'>Refrescar</Button>
                    <Button className='btn btn-success'href="/menuSeguridad/caja/agregar" >Agregar</Button>
                    <Button className='btn btn-danger'>Eliinar</Button>
                </div>

                
            </Form>
            <div className="card-header">
                    <h3>Lista de Cajas</h3>
                </div>
        </div>
    </div>
  )
}
