import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            "id": 1,
            "text": "Walk the dog",
            "completed": false
          },
          {
            "id": 2,
            "text": "Refactor old code",
            "completed": false
          },
          {
            "id": 3,
            "text": "learn typeScript",
            "completed": false
          },
          {
            "id": 4,
            "text": "Try redux-toolkit",
            "completed": true
          },
          {
            "id": 5,
            "text": "Go on vacation",
            "completed": false
          },
    ]
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        toggleCompletedTodo: (state, action) => {
            const toggleTodo = state.todos.find((todo) => todo.id === action.payload)
            toggleTodo.completed = !toggleTodo.completed
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const {addTodo, toggleCompletedTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer