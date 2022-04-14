import React,{useState, useEffect} from 'react'

import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Pais from '../Listas/Pais';

export default function PaisAgregar() {
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
    const enviarDatos =async(e)=>{
        e.preventDefault();
        if(pais['_id']===null|| pais['_id']===undefined){
            await fetch(url,{
                headers:{
                    Accept:'application/json',
                'Content-type':'application/json'
                },
                method:'Post',       
                body:JSON.stringify(pais)
            }).then(resp=>traerDatos())
            .catch(error=>console.log(error))
        }else{
            await fetch(url+'/'+pais['_id'],{
                headers:{
                    Accept:'application/json',
                'Content-type':'application/json'
                },
                method:'Put',       
                body:JSON.stringify(pais)
                
            }).then(resp=>traerDatos())
            
            .catch(error=>console.log(error))
        }
        setPais(initPais);
    
        }
        const parametrizarEditar =(dato)=>{
            setPais(dato);
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
            <Label for="PAIS_CODIGO">Codigo del Pais</Label>
            <Input 
            type="text" 
            name="PAIS_CODIGO" 
            id="PAIS_CODIGO" 
            
            onChange={cambiarValor}
            value={pais && pais.PAIS_CODIGO}
            placeholder="Digite el codigo del pais" />
        </FormGroup>
        <FormGroup>
            <Label for="PAIS_NOMBRE">Nombre de Pais</Label>
            <Input 
            type="text" 
            name="PAIS_NOMBRE" 
            id="PAIS_NOMBRE" 
            onChange={cambiarValor}
            value={pais && pais.PAIS_NOMBRE}
            placeholder="Digite el nombre " />
        </FormGroup>
        <FormGroup>
            <Label for="valor"> Bandera del Pais </Label>
            <p></p>
            <Button 
            name="img" 
            variant=""
            id="img" 
            >Inserte la imagen</Button>
        
        </FormGroup>
        <Button className='btn btn-success' onClick={enviarDatos}>Agregar</Button>
        
        <Button className='btn btn-secondary' >Limpiar</Button>
        <Button variant="primary" href="/menuSeguridad/pais">Regresar</Button>
       
    </div></Form>

<Pais
paises={paises}
cargado={cargado}
parametrizarEditar={parametrizarEditar}

/>
</div>
</div>
  )
}
