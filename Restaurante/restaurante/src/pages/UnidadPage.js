import React,{useState, useEffect} from 'react'
import Unidad from '../Listas/Unidad'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'


export default function UnidadPage() {
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


  return (
    <div>
        <div className="card">
            <Form>
                <div className="card-header">
                    <h3>Unidad de Medida</h3>
                </div>
                <div className="card-body">
                    
                    <FormGroup>
                        <Label for="UNI_CODIGO">Codigo del unidad</Label>
                        <Input 
                        type="text" 
                        name="UNI_CODIGO" 
                        id="UNI_CODIGO" 
                        onChange={cambiarValor}
                        value={unidad && unidad.UNI_CODIGO}
                        placeholder="Digite el codigo del unidad" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="UNI_DETALLE">Detalle Unidad de Medida</Label>
                        <Input 
                        type="text" 
                        name="UNI_DETALLE" 
                        id="UNI_DETALLE" 
                        placeholder="Digite el detalle " 
                        onChange={cambiarValor}
                        value={unidad && unidad.UNI_DETALLE}/>
                    </FormGroup>
                    
                   
                   
                </div>
                <div className="card-footer">
                    <Button className='btn btn-success' >Aceptar</Button>
                    <Button className='btn btn-danger' href="/menuSeguridad">Cancelar</Button>
                    <Button className='btn btn-secondary' >Limpiar</Button>
                    <Button className='btn btn-dark' href="/menuSeguridad/unidad">Refrescar</Button>
                    <Button className='btn btn-success'href="/menuSeguridad/unidad/agregar" >Agregar</Button>
                    <Button className='btn btn-danger'>Eliminar</Button>
                </div>

                
            </Form>
            <div className="card-header">
                    <h3>Lista de Unidades</h3>
                </div>

                <Unidad
                unidades={unidades}
                cargado={cargado}
                />
        </div>
    </div>
  )
}

