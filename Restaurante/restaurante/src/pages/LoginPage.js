/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import Cookies from "universal-cookie/es6"
import axios from 'axios'
import {Container} from 'react-bootstrap'

export default function LoginPage() {

  const URL ="http://127.0.0.1:3001/usuario";
  const cookies = new Cookies();
  const initLogin = {
    nombre:'',
    password:'',
  }
  const[login, setLogin] = useState(initLogin);

  const controlarCambio =(e)=>{
    const{name,value} = e.target;
    setLogin({
      ...login,
      [name]:value
    })
  }
  const iniciarSesion=async()=>{
    await axios.get(URL,{params:{nombre:login.USU_NOMBRE,password:login.USU_CONTRA}})
    .then(resp=>{
      return resp.data
    })
    .then(res=>{
      if(res.length>0){
        const respuesta = res[0];
        cookies.set('USU_CODIGO',respuesta.USU_CODIGO,{path:'/'});
        cookies.set('USU_NOMBRE',respuesta.USU_NOMBRE,{path:'/'});
        cookies.set('USU_APELLIDO1',respuesta.USU_APELLIDO1,{path:'/'});
        cookies.set('USU_APELLIDO2',respuesta.USU_APELLIDO2,{path:'/'});
        cookies.set('USU_TELEF1',respuesta.USU_TELF1,{path:'/'});
        cookies.set('USU_TELEF2',respuesta.USU_TELF2,{path:'/'});
        cookies.set('USU_PRIVI',respuesta.USU_PRIVI,{path:'/'});
        
        window.location.href='/menu';
      }else{
        alert('usuario invalido')
        
      }
    }) .catch(error=>console.log('Error::',error))
  }
  return (
   
    
    <Container>
<div class="col-auto text-center">
  
    <form class="form-signin">
<img class= "mt-4 mb-4" src="https://img.icons8.com/ios/344/user--v1.png" height="72" alt="User icon"/>
<h1 class = "h3 mb-4 font-weight-normal"> Ingresar </h1>
<label for= "Name" class ="sr-only" name="USU_NOMBRE" > </label>
<input type ="user" name="USU_NOMBRE" id='USU_NOMBRE'
class="form-control" placeholder = "Name" required autofocus 
onChange={controlarCambio}/> 
<label for= "password" name="USU_NOMBRE" 
class ="sr-only"></label>
<input type="password" name="USU_CONTRA" id='USU_CONTRA'
placeholder="Password" class="form-control" 
onChange={controlarCambio}/>
<div class = "mt-3">
 <button class = "btn btn-success btn-primary btn-block " onClick={iniciarSesion}> Aceptar </button>
 
</div>
</form>
</div>
</Container>
     
  )
}
