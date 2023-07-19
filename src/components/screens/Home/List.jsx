import TodoItem from "./item/TodoItem"

const List = ({todos}) => {
    return (
        <ul>
            {todos && todos.map((todo) => (
                <TodoItem
                    key={todo.id} 
                    todo={todo} 
                />
            ))}
        </ul>
    )
}

export default List