import { useState } from "react"
import { VscAdd } from "react-icons/vsc"
import { addTodo } from "../../../../features/todoSlice"
import { v4 } from "uuid"
import { useDispatch } from "react-redux"

const CreateTodoField = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')

    const addTodoHandler = () => {
        const todo = {
            id: v4(),
            text: title,
            completed: false
        }

        dispatch(addTodo(todo))
        setTitle('')
    }
    
    return (
        <div className="flex justify-between items-center mb-10 rounded-xl border-gray-800 border-2 w-full px-5 py-3 mt-8">
            <input 
                className="bg-transparent w-full border-none outline-none" 
                type="text" 
                onChange={evt => setTitle(evt.target.value)} 
                value={title}
                onKeyDown={(e) => e.key === 'Enter' && title.length ? addTodoHandler() : ''}  
                placeholder="Add todo"  
            />
            {!!title.length &&
                <button className="pl-4" onClick={addTodoHandler}>
                    <VscAdd size={22} className='text-gray-300 hover:text-green-600 transition-colors ease-in-out duration-300'/>
                </button>
            }
        </div>
    )
}

export default CreateTodoField
