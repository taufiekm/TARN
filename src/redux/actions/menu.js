import axios from 'axios'


export const getMenusByCategory = (categoryId) => ({
    type: "GET_MENU_CATEGORIES",
    payload: axios.get(`http://192.168.1.41:3000/api/v1/category/menuList${categoryId}` )
})