import React,{useState, useEffect} from 'react'

import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { FormCheck } from 'react-bootstrap'
import Consecutivo from '../Listas/Consecutivo';
export default function ConsecutivoAgregar() {

    const url='http://127.0.0.1:3001/consecutivo';
const initConsecutivo={
    CONS_TIPO:'',
    CONS_DESCRIPCION:'',
    CONS_VALOR:'',
    CONS_PREFIJO:'',
    
}
const [consecutivo, setConsecutivo]= useState(initConsecutivo);
const[consecutivos,setConsecutivos] = useState([]);
const [cargado,setCargado] = useState(false);

const traerDatos=async()=>{
  let datos = await fetch(url).then(resp=>resp.json());
  console.log('traerDatos::',datos);
  setConsecutivos(datos);
  setCargado(!datos.length>0);
}
useEffect(()=>{
  traerDatos();
},[]);

const cambiarValor=(e)=>{
  const {name,value}=e.target;
  setConsecutivo({...consecutivo,
  [name]:value});

 

}
const enviarDatos =async(e)=>{
    e.preventDefault();
    if(consecutivo['_id']===null|| consecutivo['_id']===undefined){
        await fetch(url,{
            headers:{
                Accept:'application/json',
            'Content-type':'application/json'
            },
            method:'Post',       
            body:JSON.stringify(consecutivo)
        }).then(resp=>traerDatos())
        .catch(error=>console.log(error))
    }else{
        await fetch(url+'/'+consecutivo['_id'],{
            headers:{
                Accept:'application/json',
            'Content-type':'application/json'
            },
            method:'Put',       
            body:JSON.stringify(consecutivo)
            
        }).then(resp=>traerDatos())
        
        .catch(error=>console.log(error))
    }
    setConsecutivo(initConsecutivo);

    }
    const parametrizarEditar =(dato)=>{
        setConsecutivo(dato);
    }
  return (
    <div>
    <div className="card">
    <Form>
    <div className="card-header">
        <h3>Consecutivos</h3>
    </div>
    <div className="card-body">
        
        <FormGroup>
            <Label for="CONS_TIPO">Tipo de Consecutivo</Label>
            <Input 
            type="text" 
            name="CONS_TIPO" 
            id="CONS_TIPO" 
            onChange={cambiarValor}
            value={consecutivo && consecutivo.CONS_TIPO}
            placeholder="Digite el TIPO de consecutivo" />
        </FormGroup>
        <FormGroup>
            <Label for="CONS_DESCRIPCION">Descripcion</Label>
            <Input 
            type="text" 
            name="CONS_DESCRIPCION" 
            id="CONS_DESCRIPCION" 
            onChange={cambiarValor}
            value={consecutivo && consecutivo.CONS_DESCRIPCION}
            placeholder="Digite la des " />
        </FormGroup>
        <FormGroup>
            <Label for="CONS_VALOR"> Valor Consecutivo </Label>
            <Input 
            type="text" 
            name="CONS_VALOR" 
            id="CONS_VALOR" 
            onChange={cambiarValor}
            value={consecutivo && consecutivo.CONS_VALOR}
            placeholder="Digite el valor"/>
        </FormGroup>
        <FormCheck 
    type="switch"
    id="PrefijoCheck"
    label="El consecutivo posee Prefijo"
  />
        <FormGroup>
            <Label for="CONS_PREFIJO">Prefijo</Label>
            <Input 
            type="text" 
            name="CONS_PREFIJO" 
            id="CONS_PREFIJO" 
            onChange={cambiarValor}
            value={consecutivo && consecutivo.CONS_PREFIJO}
            placeholder="Digite el prefijo " />
        </FormGroup>
        
        <Button className='btn btn-success' onClick={enviarDatos}>Agregar</Button>
        
        <Button className='btn btn-secondary' >Limpiar</Button>
        <Button variant="primary" href="/menuSeguridad/consecutivo">Regresar</Button>
       
    </div></Form>
    <div className="card-header">
    <h3>Lista de Consecutivos</h3>
</div>

        <Consecutivo
        consecutivos={consecutivos}
        cargado={cargado}
        parametrizarEditar={parametrizarEditar}

        />
</div>
</div>
  )
}
