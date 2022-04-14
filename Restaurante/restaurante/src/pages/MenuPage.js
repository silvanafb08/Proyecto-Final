import React from 'react'

import {Dropdown, Button} from 'react-bootstrap'


export default function MenuPage() {
  return (
    <div>
        <div className='container-fluid mt-3'>
        <Dropdown>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
      Sistema
    </Dropdown.Toggle>

    <Dropdown.Menu variant="dark">
      <Dropdown.Item href="/informacion" >
        Información
      </Dropdown.Item>
      <Dropdown.Item href="/">Cerrar Sesion</Dropdown.Item>
      </Dropdown.Menu>
 </Dropdown>
 <Dropdown>

    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" >
      Ayuda
    </Dropdown.Toggle>

    <Dropdown.Menu variant="dark">
      <Dropdown.Item href="/ayudaAdmi" >
        Sistema
      </Dropdown.Item>
      <Dropdown.Item href="/ayudaSeguridad">Seguridad</Dropdown.Item>
    <Dropdown>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="Secondary">
      Restaurante
    </Dropdown.Toggle>

    <Dropdown.Menu variant="dark">
      <Dropdown.Item href="/ayudaRestaurante" >
      Restaurante
      </Dropdown.Item>
      <Dropdown.Item href="/ayudaLicores">Licores</Dropdown.Item>
      <Dropdown.Item href="/ayudaVino">Vino</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </Dropdown.Menu>
  </Dropdown>
  </div>

      <div class="btn-group mt-3  mx-auto d-flex justify-content-center" role="group" aria-label="Basic mixed styles example" >
         
        <Button type="button" href='/menuSeguridad' style={{backgroundColor:"rgb(251,180,156)"}} >Seguridad</Button>
        <Button type="button" href='/menuRestaurantes' style={{backgroundColor:"rgb(61,71,76)"}} >Restaurantes</Button>
        <Button type="button" href='/menuClientes' style={{backgroundColor:"rgb(93,74,67)"}} >Clientes</Button>
        <Button type="button" href='/menuProveedores' style={{backgroundColor:"rgb(80,42,36)"}} >Proveedores</Button>

</div>

<div class="btn-group mt-10  mx-auto d-flex justify-content-center" role="group" aria-label="Basic mixed styles example">
         
    <button type="button" style= {{backgroundColor:"rgb(99,92,86"}} >Administracion</button>
    <button type="button" style={{backgroundColor:"rgb(71,71,71"}} >Reportes</button>
</div>
    </div>
  )
}
