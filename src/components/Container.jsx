import React, { useState } from "react"; // Import the Hook from useState

//Import two components within the container that complement each other and give it functionality
import TaskList from "./TaskList";
import FormTodo from "./FormTodo";

//Create an arrow function called container
const Container = () => {
    //Use the hook of useState and its default value as an empty array
    const [list, setList] = useState([]);
    // Make a constant variable into an arrow function
    const handleAddItem = addItem => {
        //Take the useState function with an array parameter with two elements:
        // ...list = we make use of the spread to expand the array if needed
        // addItem = parameter that adds the items to the list
        setList([...list, addItem]);
    };
    return (
        <div>
            {/* We call the FormTodo component with an attribute and value called "handleAddItem" (Variable containing our function to add data to the list). */}
            <FormTodo handleAddItem={handleAddItem} />
            {/* The TaskList component is called with the attributes and variables of "list={list}" and "setList={setList}". Variable and function of the useState line 10*/}
            <TaskList list={list} setList={setList} />
        </div>
    );
};
//We export the component
export default Container;
