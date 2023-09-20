import { combineReducers } from "redux";
import { authRecruiterReducer, authWorkerReducer } from './authReducer'



const rootReducer = combineReducers({
    authWorker: authWorkerReducer,
    authRecruiter: authRecruiterReducer,
})

export default rootReducer;