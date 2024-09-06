import axios from 'axios';

const VITE_BASE_URL = 'https://youtube-v31.p.rapidapi.com';


const options = {
   
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${VITE_BASE_URL}/${url}`, options);

    return data; 
}