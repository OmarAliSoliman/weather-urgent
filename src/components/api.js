import axios from 'axios';
// api.openweathermap.org/data/2.5/weather?q=London,uk
const Api_Key= "42ebc09f50dbc6c2cdf68e75e607e38a"

export async function getdate(city) {
  const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},&APPID=${Api_Key}`);
  return response;
}
