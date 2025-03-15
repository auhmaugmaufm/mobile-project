import axios from 'axios';

const API_URL = 'http://10.34.95.233:5000';

export const signUp = async (name, password, phoneNumber) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, {
            name,
            password,
            phoneNumber
        })
        return response.data
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error registering user')
    }
}

export const logIn = async (phoneNumber,password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            phoneNumber,
            password
        })
        return response.data.token
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error logging In') 
    }
}