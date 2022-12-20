import React, { useState } from "react"; //Importamos el Hook de useState

//Importamos dos componentes dento de container
import TaskList from "./TaskList";
import FormTodo from "./FormTodo";

//Se crea una función flecha llamada container
const Container = () => {
    //Utiliza ek hook de useState y su valor default cono un array vacío
    const [list, setList] = useState([]);
    //Hacemos de una variable constante una función en flecha
    const handleAddItem = addItem => {
        //Toma la función del useStatecon un parámetro de array con dos elementos:
        // ...list = hacemos uso del spread para para expadir el array de ser necesario
        // addItem = parámetro que añade los elementos a la lista
        setList([...list, addItem]);
    };
    return (
        <div>
            {/* Hacemos el llamado del componte FormTodo con un atributo y valor llamado "handleAddItem" (Variable que contiene nuestra función para añadir datos a la lista) */}
            <FormTodo handleAddItem={handleAddItem} />
            {/* Se llama al componente de TaskList con los atributos y variables de "list={list}" y "setList={setList}". Variable y función del useState línea 10*/}
            <TaskList list={list} setList={setList} />
        </div>
    );
};
//Exportamos el componente
export default Container;
