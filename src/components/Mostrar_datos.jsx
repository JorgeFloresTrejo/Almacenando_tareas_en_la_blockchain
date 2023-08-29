import React from "react";

function Mostrar_datos({tareas, actualizarTarea}){

      const cambiarEstadoTarea = (index) => {
        const nuevasTareas = [...tareas];
        nuevasTareas[index].completa = !nuevasTareas[index].completa; 
        actualizarTarea(nuevasTareas);
    };
    
    return(
        <>

                <div>
                    <h2>Tareas Agregadas:</h2>
                <ul>
                    {tareas.map((tarea, index) => (
                    <li key={index}>
                        <b>Usuario:</b> {tarea.usuario},
                        <b>Titulo:</b> {tarea.titulo}, 
                        <b>Descripción:</b> {tarea.descripcion}
                        <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={tarea.completa} onChange={() => cambiarEstadoTarea(index)}/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Checked switch checkbox input</label>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Mostrar_datos