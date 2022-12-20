import React from "react";
import Checkbox from "./Checkbox"; //Iportamos el componente de Checkbox
//Creamos la finción de TaskList con ls propiedades de list y  su función setList
const TaskList = props => {
    const { list, setList } = props; // Propiedades
    const onChangeStatus = e => { //Función de evento
        const { name, checked } = e.target; //asigna una al checkbox y otra como su estado de true o false
        const updateList = list.map(item => ({ //función que recore la lista creando un array y añadiendo items mientras que su estado sea done sea definido
            ...item,
            done: item.id === name ? checked : item.done
        }));
        setList(updateList); //Dejamos como parámetro dentro del setList a updateList
    };
    //Se crea una función con un evento para remover items de la lista
    const onClickRemoveItem = e => {
        //Filtramos el array creado del .map y si el valor del array pasa a ser checked...
        const updateList = list.filter(item => !item.done);
        setList(updateList); //Hacemos uso de la función eliminando esos elementos del array
    };
    //Se crea la función de chk, recore la lista creando un array y añadiendo items por cada elemento nuevo crea un componente Checkbox con 3 atributos
    const chk = list.map(item => (
        <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
    ));
    return ( //Regresamos la estructura HTML
        <div className="todo-list">
            {/* Si en el recorrido de la lista no hay ningún elemento aparecerá un mensaje que dice "No tasks" */}
            {list.length ? chk : "No tasks"}
            {/* De lo contrario */}
            {list.length ? (
                <p>
                    {/* Añadirá un botón con el evento de eliminar los elmentos que estén selecionados con la función de onClickRemoveItem */}
                    <button className="button blue" onClick={onClickRemoveItem}>
                        Delete all done
                    </button>
                </p>
            ) : null}
        </div>
    );
};
//Exportamos el TaskList 
export default TaskList;