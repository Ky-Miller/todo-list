import React, {useState} from "react";


const ToDoForm = props => {
    const {addFunction} = props
    const [taskData, setTaskData] = useState({
        task : "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(taskData)
        addFunction(taskData.task)
    };


    const handleChange = (e) => {
        const {name, value} = e.target

        setTaskData(currentData=>({...currentData, [name]:value}))
    }


return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>My Todo List</h2>
            <label>Add a Todo</label>
            <input name="task" type="text" onChange={handleChange}/>
            <br/>
            <input type="submit" value="Add a task!" />
        </form>
    </div>
);
}

export default ToDoForm;