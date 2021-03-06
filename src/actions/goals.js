import API from 'goals-todos-api'


export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'

let addGoal = (goal) => ({
    type: ADD_GOAL,
    goal
})

let removeGoal = (id) => ({
    type: REMOVE_GOAL,
    id
})

export let handleAddGoal = (name, callback) => (dispatch) => (
    API.saveGoal(name)
        .then((goal) => {
            dispatch(addGoal(goal))
            callback()
        })
        .catch(() => alert('There was a error. Try again.'))
)

export let handleDeleteGoal = (goal) => (dispatch) => {
    dispatch(removeGoal(goal))
    return API.deleteGoal(goal.id)
        .catch(() => {
            dispatch(addGoal(goal))
            alert('An error occurred. Try again')
        })
}





