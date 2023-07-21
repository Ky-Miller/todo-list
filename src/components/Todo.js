import React, {useState} from 'react'

const Todo = props => {

    const [completed, setCompleted] = useState(false)
    const {task, id, deleteFunction} = props

    const handleChange = () => {
        setCompleted(!completed)
    }

    return (
        <div>
                    {
            completed?
            <li><span style={{textDecoration:'line-through'}}>{props.task}</span></li>
            :
            <li>{props.task}</li>
            }
            <input type='checkbox' checked = {completed} onChange={handleChange}/>
            <button onClick={()=>deleteFunction(id)} >Delete</button>
        </div>
    )
}

export default Todo