import React, {FC} from "react"
import Todoitem from "./item/TodoItem"
import { TodosProps, Todo } from "../../types/types"

const List: FC<TodosProps> = ({todos, change, remove}) => {
    return (
        <ul>
            {todos && todos.map((todo: Todo) => (
                <Todoitem
                    key={todo.id} 
                    todo={todo} 
                    change={change}
                    remove={remove}
                />
            ))}
        </ul>
    )
}

export default List