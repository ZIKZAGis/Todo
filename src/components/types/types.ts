export interface LayoutProps {
    children: React.ReactNode
}

export interface Todo {
    userId?: number,
    id: number,
    title: string,
    completed: boolean
}

export interface TodosProps {
    todos: Todo[],
    change: (id: number) => void
    remove: (id: number) => void
}

export interface TodoProps {
    todo: Todo,
    change: (id: number) => void
    remove: (id: number) => void
}

export interface CheckProps {
    isCompleted: boolean
}

export type EvtKey = {
    key: string
}

export type AddTodoFunction = {
    addTodo: (title: string, setTitle: (str: string) => void) => void
}