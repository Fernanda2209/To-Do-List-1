import React, { useState } from "react"; //Import the Hook from useState
//Create the FormTodo function with the handleAddItem property 
const FormTodo = props => {
    const { handleAddItem } = props; // Define the property of the function
    const [description, setDescription] = useState(""); // Make use of a useState
    const handleSubmit = e => { // A function is created that will be triggered by an onSubmit event
        e.preventDefault(); // Prevents resetting of newly entered data 
        handleAddItem({
            done: false, //Sets the value to false so that it will later change to true and can be deleted in the TaskList.
            id: (+new Date()).toString(), //Allows you to add and delete the message
            description // Add the string to the list
        });
        setDescription(""); // Leave the add task section clean
    };
    return ( // Return the HTML structure
        // To the form we add the event with the handleSubmit function
        <form onSubmit={handleSubmit}>
            {/* Create a container */}
            <div className="todo-list">
                <div className="file-input">
                    {/* To the imput we set an attribute with the variable "description" and the change event with the function of the variable previously mentioned. */}
                    <input type="text" className="text" value={description} onChange={e => setDescription(e.target.value)}/>
                    {/* Ternary operator that if the description is sent if the description is fulfilled leaves the imput empty */}
                    <button className="button pink" disabled={description ? "" : "disabled"}>
                        Add
                    </button>
                </div>
            </div>
        </form>
    );
};

export default FormTodo;