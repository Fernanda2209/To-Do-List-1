import React from "react";
import Checkbox from "./Checkbox"; //Import the Checkbox component
// Create the TaskList ending with ls list properties and its function setList
const TaskList = props => {
    const { list, setList } = props; // Properties
    const onChangeStatus = e => { // Event function
        const { name, checked } = e.target; // Assign one to the checkbox and another as its status of true or false
        const updateList = list.map(item => ({ // function that traverses the list creating an array and adding items as long as its state is done is defined
            ...item,
            done: item.id === name ? checked : item.done
        }));
        setList(updateList); // Leave updateList as parameter inside the setList to updateList
    };
    // Create a function with an event to remove items from the list
    const onClickRemoveItem = e => {
        // Filter the array created from the .map and if the array value becomes checked...
        const updateList = list.filter(item => !item.done);
        setList(updateList); // Make use of the function by removing these elements from the array
    };
    // Create the chk function, it goes through the list creating an array and adding items for each new element it creates a Checkbox component with 3 attributes
    const chk = list.map(item => (
        <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
    ));
    return ( // Return HTML structure
        <div className="todo-list">
            {/* If there is no item in the list path, a "No tasks" message will appear. */}
            {list.length ? chk : "No tasks"}
            {/* Otherwise */}
            {list.length ? (
                <p>
                    {/* Add a button with the event to remove the items that are selected with the onClickRemoveItem function. */}
                    <button className="button blue" onClick={onClickRemoveItem}>
                        Delete all done
                    </button>
                </p>
            ) : null}
        </div>
    );
};
//Export TaskList.
export default TaskList;