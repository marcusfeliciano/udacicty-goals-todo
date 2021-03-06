import API from 'goals-todos-api'

export const RECEIVE_DATA = 'RECEIVE_DATA'

let receiveData = (todos, goals) => ({
    type: RECEIVE_DATA,
    todos,
    goals
})

export let handleInitialData = () => (dispatch) => (
    Promise.all([
        API.fetchTodos(),
        API.fetchGoals()
    ]).then(([todos, goals]) => {
        dispatch(receiveData(todos, goals))
    })
)