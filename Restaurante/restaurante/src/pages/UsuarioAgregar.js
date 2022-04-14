import React,{useState, useEffect} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { FormCheck } from 'react-bootstrap'
import Usuario from '../Listas/Usuario';
export default function UsuarioAgregar() {
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
  const enviarDatos =async(e)=>{
    e.preventDefault();
    if(usuario['_id']===null|| usuario['_id']===undefined){
        await fetch(url,{
            headers:{
                Accept:'application/json',
            'Content-type':'application/json'
            },
            method:'Post',       
            body:JSON.stringify(usuario)
        }).then(resp=>traerDatos())
        .catch(error=>console.log(error))
    }else{
        await fetch(url+'/'+usuario['_id'],{
            headers:{
                Accept:'application/json',
            'Content-type':'application/json'
            },
            method:'Put',       
            body:JSON.stringify(usuario)
            
        }).then(resp=>traerDatos())
        
        .catch(error=>console.log(error))
    }
    setUsuario(initUsuario);

    }
    const parametrizarEditar =(dato)=>{
        setUsuario(dato);
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
            <Label for="USU_APELLIDO">Apellido 1</Label>
            <Input 
            type="text" 
            name="USU_APELLIDO" 
            id="USU_APELLIDO" 
            onChange={cambiarValor}
            value={usuario && usuario.USU_APELLIDO1} 
            placeholder="Digite el apellido " />
        </FormGroup>
       
        <FormGroup>
            <Label for="USU_APELLIDO2">Apellido 2</Label>
            <Input 
            type="text" 
            name="USU_APELLIDO2" 
            id="USU_APELLIDO2" 
            onChange={cambiarValor}
            value={usuario && usuario.USU_APELLIDO2} 
            placeholder="Digite el segundo apellido " />
        </FormGroup>
        <FormGroup>
            <Label for="USU_TELEF1">Telefono 1</Label>
            <Input 
            type="number" 
            name="USU_TELEF2" 
            id="USU_TELEF2" 
            onChange={cambiarValor}
            value={usuario && usuario.USU_TELEF1} 
            placeholder="Digite el numero telefono " />
        </FormGroup>
        <FormGroup>
            <Label for="USU_TELEF2">Telefono 2</Label>
            <Input 
            type="number" 
            name="USU_TELEF2" 
            id="USU_TELEF2" 
            onChange={cambiarValor}
            value={usuario && usuario.USU_TELEF2} 
            placeholder="Digite el segundo numero de telefono " />
        </FormGroup>
        <FormGroup>
            <Label for="USU_LOGIN">Email</Label>
            <Input 
            type="email" 
            name="USU_LOGIN" 
            id="USU_LOGIN" 
            onChange={cambiarValor}
            value={usuario && usuario.USU_LOGIN} 
            placeholder="Digite el correo"/>
        </FormGroup>
        <FormGroup>
            <Label for="USU_CONTRA">Contraseña</Label>
            <Input 
            type="password" 
            name="USU_CONTRA" 
            id="USU_CONTRA" 
            onChange={cambiarValor}
            value={usuario && usuario.USU_CONTRA} 
            placeholder="Digite  la contraseña " />
        </FormGroup>
        <FormGroup>
            <Label for="USU_CONTRA2"> Confirmar Contraseña</Label>
            <Input 
            type="password" 
            name="USU_CONTRA2" 
            id="USU_CONTRA2" 
            placeholder="Vuelve a digitar la contraseña " />
        
        </FormGroup>
        <FormGroup>
        <Label for="privi"> Privilegios</Label>
           
        <FormCheck 
    type="switch"
    id="AdministradorCheck"
    label="Administrador de Sistema"
    onChange={cambiarValor}
            value={usuario && usuario.USU_SISTEMA} 
  />
  <FormCheck 
    type="switch"
    id="SeguridadCheck"
    label="Administrador de Seguridad"
    onChange={cambiarValor}
            value={usuario && usuario.USU_SEGURIDAD} 
  />
  <FormCheck 
    type="switch"
    id="RestauranteCheck"
    label="Administrador de Restaurante"
    onChange={cambiarValor}
            value={usuario && usuario.USU_RESTAURNATE} 
  /><FormCheck 
  type="switch"
  id="AdministradorCuentas"
  onChange={cambiarValor}
            value={usuario && usuario.USU_CUENTAS} 
  label="Administrador de Cuentas"
/>

        </FormGroup>
        <Button className='btn btn-success' onClick={enviarDatos}>Agregar</Button>
        
        <Button className='btn btn-secondary' >Limpiar</Button>
        <Button variant="primary" href="/menuSeguridad/usuario">Regresar</Button>
       
    </div></Form>
    <div className="card-header">
        <h3>Lista de Usuarios</h3>
    </div>

            <Usuario
            usuarios={usuarios}
            cargado={cargado}
            parametrizarEditar={parametrizarEditar}

            />
    </div>
    </div>

  )
}
