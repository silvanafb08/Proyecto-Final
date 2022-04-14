import React,{useState, useEffect} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Rol from '../Listas/Rol'

export default function RolPage(PROPS) {
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

  return (
    <div>
        <div className="card">
            <Form>
                <div className="card-header">
                    <h3>Roles o Eventos</h3>
                </div>
                <div className="card-body">
                    
                    <FormGroup>-
                        <Label for="ROL_CODIGO">Codigo del Rol</Label>
                        <Input 
                        type="text" 
                        name="ROL_CODIGO" 
                        id="ROL_CODIGO" 
                        onChange={cambiarValor}
                        value={rol && rol.ROL_CODIGO}
                        placeholder="Digite el codigo del pais" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="ROL_NOMBRE">Nombre del Rol</Label>
                        <Input 
                        type="text" 
                        name="ROL_NOMBRE" 
                        id="ROL_NOMBRE" 
                        onChange={cambiarValor}
                        value={rol && rol.ROL_NOMBRE}
                        placeholder="Digite el nombre " />
                    </FormGroup>
                    
                   
                   
                </div>
                <div className="card-footer">
                    <Button className='btn btn-success' >Aceptar</Button>
                    <Button className='btn btn-danger' href="/menuSeguridad">Cancelar</Button>
                    <Button className='btn btn-secondary' >Limpiar</Button>
                    <Button className='btn btn-success' href="/menuSeguridad/rol">Refrescar</Button>
                    <Button className='btn btn-success'href="/menuSeguridad/rol/agregar" >Agregar</Button>
                    <Button className='btn btn-danger'>Eliminar</Button>
                </div>

                
            </Form>
            <div className="card-header">
                    <h3>Lista de Roles</h3>
                </div>

                <Rol
            roles={roles}
            cargado={cargado}
            />
        </div>
    </div>
  )
}
