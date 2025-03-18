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
        return response.data
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error logging In') 
    }
}

export const editPhoneNumber = async (id, phoneNumber, password) => {
    try {
        const response = await axios.put(`${API_URL}/Users/${id}`, {
            phoneNumber,
            password
        })
        return response
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error Edit') 
    }
}

export const loadData = async () => {
    try {
        const response = await axios.get(`${API_URL}/boardingpass`)
        return response.data
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Loading Error') 
    }
}

export const loadHistory = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/bookinghistory/${id}`)
        return response.data
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Loading Error')
    }
}

