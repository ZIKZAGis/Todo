import React, { useState, FC} from "react"
import { VscAdd } from "react-icons/vsc"
import { EvtKey, AddTodoFunction } from "../../../types/types"

const CreateTodoField: FC<AddTodoFunction> = ({addTodo}) => {
    const [title, setTitle] = useState<string>('')

    const ICON_SIZE = 22
    const LengthСheck = !!title.length

    const onKeyDown = (evt: EvtKey) => {
        if(evt.key === 'Enter' && title.length) {
            addTodo(title, setTitle)
        }
    }

    return (
        <div className="flex justify-between items-center mb-10 rounded-xl border-gray-800 border-2 w-full px-5 py-3 mt-8">
            <input 
                className="bg-transparent w-full border-none outline-none" 
                type="text" 
                onChange={evt => setTitle(evt.target.value)} 
                value={title}
                onKeyDown={onKeyDown}  
                placeholder="Введите задачу"  
            />
            {LengthСheck &&
                <button className="pl-4" onClick={() => addTodo(title, setTitle)}>
                    <VscAdd size={ICON_SIZE} className='text-gray-300 hover:text-green-600 transition-colors ease-in-out duration-300'/>
                </button>
            }
        </div>
    )
}

export default CreateTodoField
