import React, { useState } from "react"; //Importamos el Hook de useState
//Creamos la función de FormTodo con la propiedad de handleAddItem 
const FormTodo = props => {
    const { handleAddItem } = props; //Definimos la propiedad de la función
    const [description, setDescription] = useState(""); //Hacemos uso e un useState
    const handleSubmit = e => { //Se crea una función que se activará mediante un evento de onSubmit
        e.preventDefault(); //Evita que resetee los datos recién ingresados 
        handleAddItem({
            done: false, //Define el valor falso para que después este cambie a true y se pueda eliminar en el TaskList
            id: (+new Date()).toString(), //Permite añadir y eliminar el menaje
            description //Añade el string a la lista
        });
        setDescription(""); // Deja la sección de añadir tareas en limpio
    };
    return ( //Regresa la estructura de HTML
        // Al form le añadimos el evento con la función de handleSubmit
        <form onSubmit={handleSubmit}>
            {/* Creamos unj contenedor */}
            <div className="todo-list">
                <div className="file-input">
                    {/* Al imput le estaablecemos un atributo con la variable "description" y el evento de cambio con la función de la variable previamente mencionada */}
                    <input type="text" className="text" value={description} onChange={e => setDescription(e.target.value)}/>
                    {/* Operador ternario que si se envía la descripción se cumple deja el imput vacío */}
                    <button className="button pink" disabled={description ? "" : "disabled"}>
                        Add
                    </button>
                </div>
            </div>
        </form>
    );
};

export default FormTodo;