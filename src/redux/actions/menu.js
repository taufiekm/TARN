import axios from 'axios'


export const getCategories = () => ({
    type: "GET_MENU",
    payload: axios.get('http://localhost:3000/api/v1/menu')
})