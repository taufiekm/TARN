const initialState = {
    isLoading: true,
    data: '',
    message: ''
}

export default function categories(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TRANSACTION_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'ADD_TRANSACTION_FULFILLED':
            return {
                ...state,
                data: action.payload.data,
                message: action.payload.data.message,
                isLoading: false
            }

        case 'ADD_TRANSACTION_REJECTED':
            return {
                ...state,
                message: action.payload.data.message,
                isLoading: false
            }


        case 'GET_TRANSACTION_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'GET_TRANSACTION_FULFILLED':
            return {
                ...state,
                data: action.payload.data,
                message: action.payload.data.message,
                isLoading: false
            }

        case 'GET_TRANSACTION_REJECTED':
            return {
                ...state,
                message: action.payload.data.message,
                isLoading: false
            }

        default:
            return state
    }
}