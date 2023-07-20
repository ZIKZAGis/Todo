import { useDispatch } from "react-redux";
import Check from "./Check";
import { BsTrash } from "react-icons/bs";
import { toggleCompletedTodo, removeTodo} from "../../../../features/todoSlice";

const TodoItem = ({todo}) => {
    const dispatch = useDispatch()
   
    return (
        <li className="flex items-center
            justify-between mb-3 rounded-2xl
            bg-gray-800 p-2 w-full hover:bg-gray-700 transition ease-in-out duration-300"
        >
            <button className="flex items-center p-3 w-full" onClick={() => dispatch(toggleCompletedTodo(todo.id))}>
                <Check isCompleted={todo.completed}/>
                <span className={`mr-auto break-all text-left ${todo.completed ? 'line-through' : ''} outline-none`}>
                    {todo.text}
                </span>                       
            </button>
            <button className="p-2" onClick={() => dispatch(removeTodo(todo.id))}>
                <BsTrash size={22} className='text-gray-500 hover:text-red-700 transition-colors ease-in-out duration-300'/>
            </button>
        </li>
    )
}

export default TodoItem
