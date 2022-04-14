import React from 'react'

export default function Unidad(props) {
    const cargarTabla=()=>{
        return props.cargado?(
            <tr>
                <td colSpan={1000}>Cargando datos...</td>               </tr>
        ):(
            props.unidades.map((u,index)=>(
                <tr key={index}>
                    <td>{u.UNI_CODIGO}</td>
                    <td>{u.UNI_MED}</td>
                    <td>{u.UNI_ESCALA}</td>
                    <td>{u.UNI_DETALLE}</td>
                    <td>{u.UNI_SIMBOLOGIA}</td>
                    
                    <td>
                    <button 
                    className='btn btn-primary'
                    onClick={()=>props.parametrizarEditar(u)}
                    >Editar</button>
                     </td>
                     </tr>
            ))
        )
    }
  return (
    <div><table className="table">
        <thead className="table-dark"><tr>
<th>CODIGO</th>
<th>UNIDAD MEDIDA</th>
<th>ESCALA</th>
<th>DETALLE</th>
<th>SIMBOLOGIA</th>
<th>Acciones</th>
        </tr>
        </thead>
        <tbody>
            {cargarTabla()}

        </tbody>
        </table></div>
  )
}
 