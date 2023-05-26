import axios from 'axios';


const ParksApi = async (location: string) => {
    try{
        const response = await axios.get(`/getParks/:${location}`);            
        const parks = response.data.results;
        return parks;
    }catch(err){
        console.log(err)
    }
};

export default ParksApi;
