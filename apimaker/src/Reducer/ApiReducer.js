export const initialState = {
   loading: false,
   api: []
}

export const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOADING":
            return {...state, loading: true};
        case "GET_API": 
            return {...state, api: action.payload }   
        default:
            return state;
    }
}