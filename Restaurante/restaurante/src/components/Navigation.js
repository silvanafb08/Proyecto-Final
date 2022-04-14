import React from 'react'
import {Button} from 'react-bootstrap'

export default function Navigation() {
  return (
    <div>
      <nav class="navbar navbar-light" style={{backgroundColor: "rgb(63,82,115)"}}>
    <a class="navbar-brand " style={{color:"white"}} >Restaurante Luna</a>
    <form class="form-inline">
    <Button variant="danger" href='/' type="submit">Salir</Button>
</form>
  </nav></div>
  )
}
