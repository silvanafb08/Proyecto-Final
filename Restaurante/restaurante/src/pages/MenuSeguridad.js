import React from 'react'
import {Container, Button} from 'react-bootstrap'

export default function MenuSeguridad() {
  return (
    <Container>
<div class="col-auto text-center">
  
<img class= "mt-4 mb-4" src="https://img.icons8.com/office/344/security-configuration.png" height="72" alt="User icon"/>
<h1 class = "h3 mb-4 "> Seguridad </h1>
<div className="d-grid gap-2 mt-3">
<Button variant="primary" size="lg" href="/menuSeguridad/usuario">
    Usuarios
  </Button>
  </div>

  <div className="d-grid gap-2 mt-3">
  <Button variant="secondary" size="lg" href="/menuSeguridad/consecutivo">
    Consecutivos
</Button>
</div>
<div className="d-grid gap-2 mt-3">
<Button variant="primary" size="lg" href="/menuSeguridad/pais">
    Paises
  </Button>
  </div>
  <div className="d-grid gap-2 mt-3">
  <Button variant="secondary" href="/menuSeguridad/caja" size="lg">
    Cajas
</Button>
</div>
<div className="d-grid gap-2 mt-3">
<Button variant="primary" size="lg" href="/menuSeguridad/rol">
    Roles o Eventos
  </Button>
  </div>
  <div className="d-grid gap-2 mt-3">
  <Button variant="secondary" size="lg" href="/menuSeguridad/unidad">
    Unidades de Medida
</Button>
</div>

</div>
</Container>
  )
}
