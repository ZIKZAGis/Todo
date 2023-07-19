import CreateTodoField from "./item/CreateTodo";
import EmptyList from "./EmptyList";
import List from "./List";
import { useSelector } from "react-redux";


const Home = () => {
    const todos = useSelector(state => state.todo.todos)

    return (
        <div className="text-white w-4/5 mx-auto max-w-screen-xl">
            <h1 className="text-2xl font-bold text-center mb-10">Todo list</h1>
            <CreateTodoField/>
            <List todos={todos}/>
            {!todos.length && 
                <EmptyList/>
            }
        </div>
    )
}

export default Home
