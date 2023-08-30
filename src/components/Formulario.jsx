import React, { useState } from "react";
import './Formulario.css'
import Mostrar_datos from "./Mostrar_datos";

function Formulario(){

    const [iniciarFormulario, setIniciarFormulario] = useState({  
        usuario: "",
        titulo: "",
        descripcion: "",
        completa: false
    })
    const [datos , setDatos] = useState(iniciarFormulario); //Datos del formulario
    const [tareas, setTareas] = useState([]); //Estado donde se almacenan las tareas

    // Función que se ejecuta cuándo se envía el formulario
    const enviar = (event) => {
        event.preventDefault();

        //Objeto que relaciona lo que el usuario escribió en los input y lo almacena
        const nuevaTarea = {
            usuario: datos.usuario,
            titulo: datos.titulo,
            descripcion: datos.descripcion,
            completa: datos.completa
        }
        // Se le agrega el nuevo objeto a lo que ya tiene el useState de tarea
        setTareas([...tareas, nuevaTarea]);

        //Limpiar el formulario
        setDatos(iniciarFormulario);


    }
           //Función para actualizar la tarea
       const cambiarTarea = (tarea) => {
        console.log(tarea);
        setTareas(tarea);
     }
 
    //Se toma el valor de lo que el usuario escriba en cada input y se manda a un useState
    const manejarFormulario = ({target: {name, value}})=>{

        setDatos({...datos, [name]: value})

    }

    return(
        <>
        <div id="contenedor" className="container">
            <form onSubmit={enviar}>
                <div className="form-group row"> 
                    <label htmlFor="usuario" className="col-sm-3 col-form-label">Usuario</label>
                    <div className="col-sm-9">
                         <input type="text" className="form-control" id="usuario" name="usuario" placeholder="Usuario" value={datos.usuario} onChange={manejarFormulario}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="titulo" className="col-sm-3 col-form-label">Titulo</label>
                    <div className="col-sm-9">
                       <input type="text" className="form-control" id="titulo" name="titulo" placeholder="titulo" value={datos.titulo} onChange={manejarFormulario}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="descripcion" className="col-sm-3 col-form-label">Descripción</label>
                    <div className="col-sm-9">
                       <input type="text" className="form-control"  id="descripcion" name="descripcion" placeholder="descripción" value={datos.descripcion} onChange={manejarFormulario}/>
                    </div>
                </div>

                <button  className="btn btn-primary" type="submit">Enviar</button>
                
            </form>

        </div>

        <Mostrar_datos tareas={tareas} actualizar={cambiarTarea}/>

          
        </>
    )
}

export default Formulario