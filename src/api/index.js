import axios from "axios";

export const getPlacesData = async (bl, tr, place_type) => {
  try {
    const options = {
      params: {
        bl_latitude: bl.lat,
        bl_longitude: bl.lng,
        tr_longitude: tr.lng,
        tr_latitude: tr.lat,
        limit: '30',
      },
      headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': '46ffed2257msh47d4b862b182534p112d14jsn74844e541f9d'
      }
    };
    const responseAPI = await axios.get(`https://travel-advisor.p.rapidapi.com/${place_type}/list-in-boundary`, options);

    return responseAPI.data
  }catch(error){
    console.log(error)
  }
}

export const getGeoCodeData = async (params) => {
  try {
    const responseAPI = await axios.get(`https://geocode.maps.co/search?${params}`)
    return responseAPI
  }catch(error) {
    console.log(error)
  }
}