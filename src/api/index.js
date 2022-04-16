import axios from "axios";

export const getPlacesData = async () => {
  try {
    const options = {
      params: {
        bl_latitude: '11.847676',
        bl_longitude: '108.473209',
        tr_longitude: '109.149359',
        tr_latitude: '12.838442',
        limit: '30',
      },
      headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': '46ffed2257msh47d4b862b182534p112d14jsn74844e541f9d'
      }
    };
    const responseAPI = await axios.get('https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary', options);

    return responseAPI.data
  }catch(error){
    console.log(error)
  }
}