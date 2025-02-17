import axios from "axios";

const ParksApi = async (location: string) => {
  try {
    const response = await axios.get(`/getParks/:${location}`);
    const parks = response.data.results;
    return parks;
  } catch (err) {
    console.log(err);
  }
};

export default ParksApi;

// ? Possible might need
// let reference = parks.photos.photo_referencescod
// let reference =
//   "AZose0mdWC8mK8lCuiHqjR1iNGgL3axsmz_uzOj7XDAtGgeFV4bGvNWiKoGmwjrcxQtNza5CApQhYTcVa-WGPafSD-1VKb7hpALDkDzWlWNxEbtv1imQO8EZsY8WbvbUVZ2EQRTJ7DxMYhXGHEDJy52-zPPdpXekGVEJJvv4Mm4eOX5S0a1V";
// const images = await axios.get(`/getParkImages/:${reference}`);
// console.log(images);
