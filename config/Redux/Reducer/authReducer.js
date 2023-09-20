const initialState = {
    data: {
        email: "",
        password: "",
        name: "",
    },
    isLoading: false
};

export const authWorkerReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case "USER_LOGIN_PENDING":
            return {
                ...state,
                isLoading: true
            }
        case "USER_REGISTER_SUCCESS":
            return {
                ...state,
                data: payload,
            }
        case "LOGIN_SUCCESS":
            return {
                ...state,
                data: payload
            }
        default:
            return state;
    }
}

export const authRecruiterReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case "RECRUITER_LOGIN_PENDING":
            return{
                ...state,
                isLoading: true
            }
        case "RECRUITER_SUCCESS_REGISTER":
            return{
                ...state,
                data: payload
            }
        case "RECRUITER_LOGIN_SUCCESS":
            return{
                ...state,
                data: payload
            }
        default:
            return state;
    }
}