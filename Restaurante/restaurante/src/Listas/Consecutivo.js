import React from 'react'

export default function Consecutivo(props) {
    const cargarTabla=()=>{
        return props.cargado?(
            <tr>
                <td colSpan={1000}>Cargando datos...</td>               </tr>
        ):(
            props.consecutivos.map((c,index)=>(
                <tr key={index}>
                    <td>{c.CONS_TIPO}</td>
                    <td>{c.CONS_DESCRIPCION}</td>
                    <td>{c.CONS_VALOR}</td>
                    <td>{c.PREFIJO}</td>
                    
                    <td>
                    <button 
                    className='btn btn-primary'
                    onClick={()=>props.parametrizarEditar(c)}
                    >Editar</button>
                     </td>
                     </tr>
            ))
        )
    }
  return (
    <div><table className="table">
        <thead className="table-dark"><tr>
<th>TIPO</th>
<th>DESCRIPCION</th>
<th>VALOR</th>
<th>PREFIJO</th>
        </tr>
        </thead>
        <tbody>
            {cargarTabla()}

        </tbody>
        </table></div>
  )
}
 