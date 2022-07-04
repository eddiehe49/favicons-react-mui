import axios from "axios";

const jsonplaceholderApiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/eddiehe49/favicons',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
const kratesApiClient = axios.create({
    baseURL: 'https://krat.es/' + process.env.REACT_APP_Krates_ID,
    withCredentials: false,
    headers: {
        'x-api-key': process.env.REACT_APP_Krates_Krates_x_api_key,
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

const getJsonplaceholderFaviconsJson = () => {
    return jsonplaceholderApiClient.get('/favicons')
}
const patchJsonplaceholderFaviconsJson = (id, avatars) => {
    return jsonplaceholderApiClient.patch('/favicons/' + id, avatars)
}
const getKratesFaviconsJson = () => {
    return kratesApiClient.get('/record/' + process.env.REACT_APP_Krates_record)
}
const putKratesFaviconsJson = (favicons) => {
    return kratesApiClient.put('/' + process.env.REACT_APP_Krates_record, favicons)
};

const Service = { getJsonplaceholderFaviconsJson, patchJsonplaceholderFaviconsJson, getKratesFaviconsJson, putKratesFaviconsJson }

export default Service;
