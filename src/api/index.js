import axios from "axios";

const URL = (type) =>
  `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;

export const getPlacesData = async (type, sw, ne) => {
  try {
    const options = {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "sXOQOjryDBmshr4znELcTXkkpXe5p1Yj00xjsnITuVhDGGeuF6",
      },
    };
    const {
      data: { data },
    } = await axios.get(URL(type), options);

    return data;
  } catch (error) {
    console.log(error);
  }
};
