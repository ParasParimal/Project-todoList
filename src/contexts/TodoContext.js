import { useContext, createContext } from "react";

export const TodoContext = createContext({
   todos:[
    {
        id:1,
        todoTask:"Todo Message",
        completed: false
    }

   ],
   addTodo: (todoTask) => {},
   updateTodo: (id, todoTask) => {},
   deleteTodo: (id) => {},
   toggleComplete: (id) => {}

})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}