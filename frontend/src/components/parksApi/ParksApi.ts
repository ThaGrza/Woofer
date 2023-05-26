import axios from 'axios';

interface Parks{
}

const ParksApi = async (location: string) => {
    try{
        const response = await axios.get(`/getParks/:${location}`);            
        return response;
    }catch(err){
        console.log(err)
    }
};

export default ParksApi;
