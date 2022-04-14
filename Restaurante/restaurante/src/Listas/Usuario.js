import React from 'react'

export default function Usuario(props) {
    const cargarTabla=()=>{
        return props.cargado?(
            <tr>
                <td colSpan={1000}>Cargando datos...</td>               </tr>
        ):(
            props.usuarios.map((u,index)=>(
                <tr key={index}>
                    <td>{u.USU_CODIGO}</td>
                    <td>{u.USU_NOMBRE}</td>
                    <td>{u.USU_APELLIDO1}</td>
                    <td>{u.USU_APELLIDO2}</td>
                    <td>{u.USU_TELEF1}</td>
                    <td>{u.USU_TELEF2}</td>
                    <td>{u.USU_SISTEMA}</td>
                    <td>{u.USU_SEGURIDAD}</td>
                    <td>{u.USU_RESTAURNATE}</td>
                    <td>{u.USU_CUENTAS}</td>


                    
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
<th>NOMBRE DE USUARIO</th>
<th>PRIMER APELLIDO</th>
<th>SEGUNDO APELLIDO</th>
<th>PRIMER TELEFONO</th>
<th>SEGUNDO TELEFONO</th>
<th>SISTEMA</th>
<th>SEGURIDAD</th>
<th>RESTAURANTE</th>
<th>CUENTAS</th>
<th></th>


        </tr>
        </thead>
        <tbody>
            {cargarTabla()}

        </tbody>
        </table></div>
  )
}
 