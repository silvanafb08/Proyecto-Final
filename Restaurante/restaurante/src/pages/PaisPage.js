import React,{useState, useEffect} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Pais from '../Listas/Pais';

export default function PaisPage() {

    const url='http://127.0.0.1:3001/pais';
const initPais={
    PAIS_CODIGO:'',
    PAIS_NOMBRE:'',
    ROL_DESCRIPCION:'',
    
}
const [pais, setPais]= useState(initPais);
const[paises,setPaises] = useState([]);
const [cargado,setCargado] = useState(false);

const traerDatos=async()=>{
  let datos = await fetch(url).then(resp=>resp.json());
  console.log('traerDatos::',datos);
  setPaises(datos);
  setCargado(!datos.length>0);
}
useEffect(()=>{
  traerDatos();
},[]);

const cambiarValor=(e)=>{
  const {name,value}=e.target;
  setPais({...pais,
  [name]:value});

 

}
  return (
    <div>
        <div className="card">
            <Form>
                <div className="card-header">
                    <h3>Paises</h3>
                </div>
                <div className="card-body">
                    
                    <FormGroup>
                        <Label for="PAIS_CODIGO">Codigo del pais</Label>
                        <Input 
                        type="text" 
                        name="PAIS_CODIGO" 
                        id="PAIS_CODIGO" 
                        onChange={cambiarValor}
                        value={pais && pais.PAIS_CODIGO}
                        placeholder="Digite el codigo del pais" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="PAIS_NOMBRE">Nombre del pais</Label>
                        <Input 
                        type="text" 
                        name="PAIS_NOMBRE" 
                        id="PAIS_NOMBRE" 
                        onChange={cambiarValor}
                        value={pais && pais.PAIS_NOMBRE}
                        placeholder="Digite el nombre " />
                    </FormGroup>
                    
                   
                   
                </div>
                <div className="card-footer">
                    <Button className='btn btn-success' >Aceptar</Button>
                    <Button className='btn btn-danger ' href="/menuSeguridad">Cancelar</Button>
                    <Button className='btn btn-secondary' >Limpiar</Button>
                    <Button className='btn btn-success'>Refrescar</Button>
                    <Button className='btn btn-success'href="/menuSeguridad/pais/agregar" >Agregar</Button>
                    <Button className='btn btn-danger'>Eliinar</Button>
                </div>

                
            </Form>
            <div className="card-header">
                    <h3>Lista de Paises</h3>
                </div>
                <Pais
            paises={paises}
            cargado={cargado}
            />
        </div>
    </div>
  )
}
