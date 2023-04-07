export interface LayoutProps {
    children: React.ReactNode
    className: string
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