import axios from 'axios'


export const getTransactions = (tId) => {
    return {
        type: 'GET_TRANSACTIONS',
        payload: axios.get('http:/192.168.1.41:3000/api/v1/transaction/' + tId)
    }
}

export const addTransaction = (data) => {
    return {
        type: 'ADD_TRANSACTION',
        payload: axios.post('http:/192.168.1.41:3000/api/v1/transaction', data)
    }
}