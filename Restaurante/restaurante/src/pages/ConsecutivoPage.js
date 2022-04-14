import React,{useState, useEffect} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Consecutivo from '../Listas/Consecutivo';

export default function ConsecutivoPage() {
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
  return (
    <div>
        <div className="card">
            <Form>
                <div className="card-header">
                    <h3>Consecutivos</h3>
                </div>
                <div className="card-body">
                    
                    
                    <FormGroup>
                        <Label for="CONS_TIPO">Tipo del Consecutivo</Label>
                        <Input 
                        type="text" 
                        name="CONS_TIPO" 
                        id="CONS_TIPO" 
                        placeholder="Digite el Tipo " />
                    </FormGroup>
                    <FormGroup>
                        <Label for="CONS_DESCRIPCION">Descripcion del Consecutivo</Label>
                        <Input 
                        type="text" 
                        name="CONS_DESCRIPCION" 
                        id="CONS_DESCRIPCION" 
                        placeholder="Digite algun dato de la descripcion " />
                    </FormGroup>
                    
                   
                   
                </div>
                <div className="card-footer">
                    <Button className='btn btn-success' >Aceptar</Button>
                    <Button className='btn btn-danger' href="/menuSeguridad">Cancelar</Button>
                    <Button className='btn btn-secondary' >Limpiar</Button>
                    <Button className='btn btn-success' href="/menuSeguridad/consecutivo">Refrescar</Button>
                    <Button className='btn btn-success'href="/menuSeguridad/consecutivo/agregar" >Agregar</Button>
                    <Button className='btn btn-danger'>Eliinar</Button>
                </div>

                
            </Form>
            <div className="card-header">
                    <h3>Lista de Consecutivos</h3>
                </div>

                <Consecutivo
            consecutivos={consecutivos}
            cargado={cargado}
            />
        </div>
    </div>
  )
}
