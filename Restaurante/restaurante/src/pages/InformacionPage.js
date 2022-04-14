import React from 'react'
import {Button} from 'react-bootstrap'

export default function InformacionPage() {
  return (
    <div>
        <h1>Info de autores</h1>
        <p>Luis Blandon</p>
        <p>Camila Casasola</p>
        <p>Silvana Fuentes</p>

        <Button class="btn btn-outline-danger"  href="/menu" >Salir</Button>
        </div>
  )
}
