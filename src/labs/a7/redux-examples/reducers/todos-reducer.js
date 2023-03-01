import { createSlice } from '@reduxjs/toolkit'

const initialTodos = [
    {
        _id: "123",
        do: "Accelerate the world's transition to sustainable energy",
        done: false
    },
    {
        _id: "234",
        do: "Reduce space transportation costs to become a spacefaring civilization",
        done: false
    },
];

const todosSlice = createSlice({
    name: 'todos',
    initialState: initialTodos,

    /**     2.7 Handling application level events
     * Now that we have edited a todo object, we can send it to the reducer to store it
     * in the global state. Lets add an addTodo handler that can receive the new todo
     * instance and push it to the array of current todos.
     */
    reducers: {
        addTodo(state, action) {
            state.push({
                _id: (new Date()).getTime(),
                do: action.payload.do,
                done: false
            });
        },
        deleteTodo(state, action) {
            const index = action.payload
            state.splice(index, 1)
        },
        todoDoneToggle(state, action) {
            const todo = state.find((todo) =>
                todo._id === action.payload._id)
            todo.done = !todo.done
        }
    }

});

// export actions so we can call them from UI
export const { addTodo, deleteTodo, todoDoneToggle } = todosSlice.actions
export default todosSlice.reducer
