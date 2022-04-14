import React, {useState, useEffect} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Unidad from '../Listas/Unidad'
import UsuarioPage from './UsuarioPage';

export default function UnidadAgregar() {
    const url='http://127.0.0.1:3001/unidad_medida';
    const initUnidad={
        UNI_CODIGO:'',
        UNI_MED:'',
        UNI_DETALLE:'',
        UNI_ESCALA:'',
        UNI_SIMBOLO:'',
        UNI_SIMBOLOGIA:''
    }
    
    const [unidad, setUnidad]= useState(initUnidad);
    const[unidades,setUnidades] = useState([]);
    const [cargado,setCargado] = useState(false);
    
    const traerDatos=async()=>{
      let datos = await fetch(url).then(resp=>resp.json());
      console.log('traerDatos::',datos);
      setUnidades(datos);
      setCargado(!datos.length>0);
    }
    useEffect(()=>{
      traerDatos();
    },[]);
    const cambiarValor=(e)=>{
      const {name,value}=e.target;
      setUnidad({...unidad,
      [name]:value});
    
    }
    
    
    const enviarDatos =async(e)=>{
    e.preventDefault();
    if(unidad['_id']===null|| unidad['_id']===undefined){
        await fetch(url,{
            headers:{
                Accept:'application/json',
            'Content-type':'application/json'
            },
            method:'Post',       
            body:JSON.stringify(unidad)
        }).then(resp=>traerDatos())
        .catch(error=>console.log(error))
    }else{
        await fetch(url+'/'+unidad['_id'],{
            headers:{
                Accept:'application/json',
            'Content-type':'application/json'
            },
            method:'Put',       
            body:JSON.stringify(unidad)
            
        }).then(resp=>traerDatos())
        
        .catch(error=>console.log(error))
    }
    setUnidad(initUnidad);

    }
    const parametrizarEditar =(dato)=>{
        setUnidad(dato);
    }
    
 return(   
     <div>
       <div className="card">
    <Form>
    <div className="card-header">
        <h3>Unidad de Medidas</h3>
    </div>
    <div className="card-body">
        
        <FormGroup>
            <Label for="UNI_CODIGO">Codigo de Unidad</Label>
            <Input 
            type="text" 
            name="UNI_CODIGO" 
            id="UNI_CODIGO" 
            onChange={cambiarValor}
            value={unidad && unidad.UNI_CODIGO}
            placeholder="Digite el codigo del Unidad" />
                    
            
        </FormGroup>
        <FormGroup>
            <Label for="unidad"> Unidad </Label>
            <Input 
            type="text" 
            name="unidad" 
            id="unidad" 
            placeholder="Digite la unidad"
            onChange={cambiarValor}
            value={unidad && unidad.UNI_MED}/>
        </FormGroup>
        <FormGroup>
            <Label for="escala">Escala</Label>
            <Input 
            type="text" 
            name="escala" 
            id="descripcion" 
            placeholder="Digite la escala " 
            onChange={cambiarValor}
            value={unidad && unidad.UNI_CODIGO}/>
        </FormGroup>
        <FormGroup>
            <Label for="UNI_DETALLE">Detalle</Label>
            <Input 
            type="text" 
            name="UNI_DETALLE" 
            id="UNI_DETALLE" 
            placeholder="Digite el detalle " 
            onChange={cambiarValor}
            value={unidad && unidad.UNI_DETALLE}/>
        </FormGroup>
        <FormGroup>
            <Label for="UNI_SIMBOLO">Simbolo</Label>
            <Input 
            type="text" 
            name="UNI_SIMBOLO" 
            id="UNI_SIMBOLO" 
            placeholder="Digite el simbolo "
            onChange={cambiarValor}
            value={unidad && unidad.UNI_SIMBOLO} />
        </FormGroup>
        <FormGroup>
            <Label for="UNI_SIMBOLOGIA">Simbologia</Label>
            <Input 
            type="text" 
            name="UNI_SIMBOLOGIA" 
            id="UNI_SIMBOLOGIA" 
            placeholder="Digite al simbologia "
            onChange={cambiarValor}
            value={unidad && unidad.UNI_SIMBOLOGIA} />
        </FormGroup>
        
        
        
        <Button className='btn btn-success' onClick={enviarDatos}>Agregar</Button>
        
        <Button className='btn btn-secondary' >Limpiar</Button>
        <Button variant="primary" href="/menuSeguridad/unidad">Regresar</Button>
        </div> 
        </Form>
        
    <div className="card-header">
        <h3>Lista de Unidades</h3>
    </div>

            <Unidad
            unidades={unidades}
            cargado={cargado}
            parametrizarEditar={parametrizarEditar}

            />
    </div>
    </div>  
        
    
    

    
  )
}
