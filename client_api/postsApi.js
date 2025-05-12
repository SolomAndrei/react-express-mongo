import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

export const createPost = async (postData) => {
    const response = await axios.post(`${API_URL}/posts`, postData);
    return response.data;
};

export const getPosts = async () => {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
};

export const deletePost = async (id) => {
    const response = await axios.delete(`${API_URL}/posts/${id}`);
    return response.data;
};
