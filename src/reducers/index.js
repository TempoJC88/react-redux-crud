import { combineReducers } from 'redux'
import pets from './petsReducer'
const rootReducer = combineReducers({
    pets
})

export default rootReducer;
