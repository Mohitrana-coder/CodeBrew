//reducer.js
import { TASK_DATA, } from "./actionTypes";
const initialState = {
    task_data: [],
}
export default reducer = (state = initialState, action) => {
    const { data } = action
    switch (action.type) {
        case TASK_DATA:
            return {
                ...state,
                task_data: action.data
            }
    }
    return state

}