// A typescript file to fetch data from the wikipedia API: https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/YYYY/MM/DD
// @param {string} year - The year to fetch data for.
// @param {string} month - The month to fetch data for.
// @param {string} day - The date to fetch data for.
// @param {string} country - The country to fetch data for.
// @returns {Promise<any>} - A promise that resolves to the data.

import axios from "axios";

function fetchWikiData(year: string, month: string, day: string, country: string) {
    return axios.get(`https://wikimedia.org/api/rest_v1/metrics/pageviews/top-per-country/${country}/all-access/${year}/${month}/${day}`)
}

export default fetchWikiData;