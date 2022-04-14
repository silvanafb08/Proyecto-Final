import React,{useState, useEffect} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Usuario from '../Listas/Usuario';

export default function UsuarioPage() {
    const url='http://127.0.0.1:3001/usuario';
const initUsuario={
    USU_CODIGO:'',
    USU_NOMBRE:'',
    USU_APELLIDO1:'',
    USU_APELLIDO2:'',
    USU_TELEF1:'',
    USU_TELEF2:'',
    USU_CONTRA:'',
    USU_SISTEMA:'',
    USU_SEGURIDAD:'',
    USU_RESTAURNATE:'',
    USU_CUENTAS:'',
    USU_LOGIN:''


}
const [usuario, setUsuario]= useState(initUsuario);
const[usuarios,setUsuarios] = useState([]);
const [cargado,setCargado] = useState(false);

const traerDatos=async()=>{
    let datos = await fetch(url).then(resp=>resp.json());
    console.log('traerDatos::',datos);
    setUsuarios(datos);
    setCargado(!datos.length>0);
  }
  useEffect(()=>{
    traerDatos();
  },[]);
  
  const cambiarValor=(e)=>{
    const {name,value}=e.target;
    setUsuario({...usuario,
    [name]:value});
  
   
  
  }
  
    return (
    <div>
        <div className="card">
            <Form>
                <div className="card-header">
                    <h3>Usuarios</h3>
                </div>
                <div className="card-body">
                    
                    <FormGroup>
                        <Label for="USU_CODIGO">Codigo de Usurario</Label>
                        <Input 
                        type="text" 
                        name="USU_CODIGO" 
                        id="USU_CODIGO" 
                        onChange={cambiarValor}
                        value={usuario && usuario.USU_CODIGO}
                        placeholder="Digite el codigo del usaurio" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="USU_NOMBRE">Nombre</Label>
                        <Input 
                        type="text" 
                        name="USU_NOMBRE" 
                        id="USU_NOMBRE" 
                        onChange={cambiarValor}
                        value={usuario && usuario.USU_NOMBRE}
                        placeholder="Digite el nombre " />
                    </FormGroup>
                    <FormGroup>
                        <Label for="USU_APELLIDO1">Apellido</Label>
                        <Input 
                        type="text" 
                        name="USU_APELLIDO1" 
                        id="USU_APELLIDO1" 
                        onChange={cambiarValor}
                        value={usuario && usuario.USU_APELLIDO1}
                        placeholder="Digite el apellido"/>
                    </FormGroup>
                    
                   
                   
                </div>
                <div className="card-footer">
                    <Button className='btn btn-success' >Aceptar</Button>
                    <Button className='btn btn-danger' href="/menuSeguridad">Cancelar</Button>
                    <Button className='btn btn-secondary' >Limpiar</Button>
                    <Button className='btn btn-success' href="/menuSeguridad/usuario">Refrescar</Button>
                    <Button className='btn btn-success'href="/menuSeguridad/usuario/agregar" >Agregar</Button>
                    <Button className='btn btn-danger'>Eliminar</Button>
                </div>

                
            </Form>
            <div className="card-header">
                    <h3>Lista de Usuarios</h3>
                </div>
                <Usuario
                usuarios={usuarios}
                cargado={cargado}
                />
        </div>
    </div>
  )
}
