const initialState = {
    isLoading: true,
    dataProduk: [],
    data: [],
    error: null
}

export default function menu(state = initialState, action) {
    switch (action.type) {
        case 'GET_MENU_CATEGORIES_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'GET_MENU_CATEGORIES_FULFILLED':
            const data = action.payload.data[0].menuList.map(item => ({
                ...item, selected: false
            }))
            return {
                ...state,
                dataProduk: data,
                isLoading: false
            }
        case 'GET_MENU_CATEGORIES_REJECTED':
            return {
                ...state,
                isLoading: false,
                error: action.payload.message
            }

        default:
            return state
    }
}