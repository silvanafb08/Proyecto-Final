import React from 'react'
import { Button } from 'react-bootstrap';
const mystyle =
    {  
       maxWidth: "700px",
       minHeight:"700px",
       border: "1px solid #333" ,
      
       
     };  

     
        
export default function AyudaVinosPage() {
    
    
    return (
        
    <div>
        <div class="d-flex justify-content-center mt-3">
      <div> Ayuda para el modulo de Vinos: </div>


      <div class="container square-box d-flex justify-content-center align-items-center mt-3 " style={mystyle}> </div>
</div>
<form class="">
            <Button class="btn btn-outline-dark" type="reset">Delante</Button>
            <Button class="btn btn-outline-info" type="reset">Ver</Button>
            <Button class="btn btn-outline-success" type="reset">Imprimir</Button>
            <Button class="btn btn-outline-danger"  href="/menu" >Salir</Button>

          </form>
    </div>
  )
}
