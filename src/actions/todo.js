import API from 'goals-todos-api';

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO ='REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

let addTodo = (todo) => ({
    type: ADD_TODO,
    todo
})

let removeTodo = (id) => ({
    type: REMOVE_TODO,
    id
})

let toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})

export let handleAddTodo = (name, callback) => (dispatch) => (
    API.saveTodo(name)
        .then(todo => {
            dispatch(todo)
            callback()
        })
        .catch(() => {
            alert('There was a error. Try again')
        })
)

export let handleDeleteTodo = (todo) => (dispatch) => {
    dispatch(removeTodo(todo.id))
    return API.deleteTodo(todo.id)
        .catch(() => {
            dispatch(addTodo(todo))
            alert('An error occurred. Try again.')
        })
}

export let handleToggle = (id) => (dispatch) => {
    dispatch(toggleTodo(id))
    return API.saveTodoToggle(id)
        .catch(() =>{
            dispatch(toggleTodo(id))
            alert('An error occurred. Try again')
        })
}
