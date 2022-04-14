import React from 'react'

export default function Rol(props) {
    const cargarTabla=()=>{
        return props.cargado?(
            <tr>
                <td colSpan={1000}>Cargando datos...</td>               </tr>
        ):(
            props.roles.map((r,index)=>(
                <tr key={index}>
                    <td>{r.ROL_CODIGO}</td>
                    <td>{r.ROL_NOMBRE}</td>
                    <td>{r.ROL_DESCRIPCION}</td>
                    
                    <td>
                    <button 
                    className='btn btn-primary'
                    onClick={()=>props.parametrizarEditar(r)}
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
<th>NOMBRE DE ROL</th>
<th>DESCRIPCION</th>
        </tr>
        </thead>
        <tbody>
            {cargarTabla()}

        </tbody>
        </table></div>
  )
}
 