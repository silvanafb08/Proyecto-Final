import React,{useState, useEffect} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Rol from '../Listas/Rol'
export default function RolAgregar() {
    const url='http://127.0.0.1:3001/rol';
const initRol={
    ROL_CODIGO:'',
    ROL_NOMBRE:'',
    ROL_DESCRIPCION:'',
    
}
const [rol, setRol]= useState(initRol);
const[roles,setRoles] = useState([]);
const [cargado,setCargado] = useState(false);

const traerDatos=async()=>{
  let datos = await fetch(url).then(resp=>resp.json());
  console.log('traerDatos::',datos);
  setRoles(datos);
  setCargado(!datos.length>0);
}
useEffect(()=>{
  traerDatos();
},[]);

const cambiarValor=(e)=>{
  const {name,value}=e.target;
  setRol({...rol,
  [name]:value});

 

} 
const enviarDatos =async(e)=>{
    e.preventDefault();
    if(rol['_id']===null|| rol['_id']===undefined){
        await fetch(url,{
            headers:{
                Accept:'application/json',
            'Content-type':'application/json'
            },
            method:'Post',       
            body:JSON.stringify(rol)
        }).then(resp=>traerDatos())
        .catch(error=>console.log(error))
    }else{
        await fetch(url+'/'+rol['_id'],{
            headers:{
                Accept:'application/json',
            'Content-type':'application/json'
            },
            method:'Put',       
            body:JSON.stringify(rol)
            
        }).then(resp=>traerDatos())
        
        .catch(error=>console.log(error))
    }
    setRol(initRol);

    }
    const parametrizarEditar =(dato)=>{
        setRol(dato);
    }
return (
    <div>
       <div className="card">
    <Form>
    <div className="card-header">
        <h3>Roles o Eventos</h3>
    </div>
    <div className="card-body">
        
        <FormGroup>
            <Label for="ROL_CODIGO">Codigo de rol</Label>
            <Input 
            type="text" 
            name="ROL_CODIGO" 
            id="ROL_CODIGO" 
            onChange={cambiarValor}
            value={rol && rol.ROL_CODIGO}
            placeholder="Digite el codigo del rol" />
        </FormGroup>
        <FormGroup>
            <Label for="ROL_NOMBRE"> Nombre </Label>
            <Input 
            type="text" 
            name="ROL_NOMBRE" 
            id="ROL_NOMBRE" 
            onChange={cambiarValor}
            value={rol && rol.ROL_NOMBRE}
            placeholder="Digite el nombre"/>
        </FormGroup>
        <FormGroup>
            <Label for="ROL_DESCRIPCION">Descripcion</Label>
            <Input 
            type="text" 
            name="ROL_DESCRIPCION" 
            id="ROL_DESCRIPCION" 
            onChange={cambiarValor}
            value={rol && rol.ROL_DESCRIPCION}
            placeholder="Digite el nombre " />
        </FormGroup>
        
        
        
        <Button className='btn btn-success' onClick={enviarDatos}>Agregar</Button>
        
        <Button className='btn btn-secondary' >Limpiar</Button>
        <Button variant="primary" href="/menuSeguridad/rol">Regresar</Button>
       
    </div></Form>
    <div className="card-header">
        <h3>Lista de Roles</h3>
    </div>

            <Rol
            roles={roles}
            cargado={cargado}
            parametrizarEditar={parametrizarEditar}

            />
    </div>
    </div>
  )
}
