import React from 'react'

export default function Pais(props) {
    const cargarTabla=()=>{
        return props.cargado?(
            <tr>
                <td colSpan={1000}>Cargando datos...</td>               </tr>
        ):(
            props.paises.map((p,index)=>(
                <tr key={index}>
                    <td>{p.PAIS_CODIGO}</td>
                    <td>{p.PAIS_NOMBRE}</td>
                    
                    <td>
                    <button 
                    className='btn btn-primary'
                    onClick={()=>props.parametrizarEditar(p)}
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
<th>NOMBRE DE PAIS</th>
        </tr>
        </thead>
        <tbody>
            {cargarTabla()}

        </tbody>
        </table></div>
  )
}
 