import fetch from 'node-fetch';

const api = "https://proclubs.ea.com/api/fifa/";

const headers = {
    'Content-Type': 'application/json',
    'Origin': 'https://www.ea.com',
    'Referer': 'https://www.ea.com/',
}

const options = {
    method: 'get', 
    headers
}

async function safeParseJSON(response) {
    const body = await response.text();
    try {
        return JSON.parse(body);
    } catch (err) {
        console.error("Error:", err);
        console.error("Response body:", body);
        // throw err;
        return new Error('safeParseJSON');
    }
}

/**
 * Makes the api call
 * @param {string} path - The path of the api call
 * @param {string} query - Query 
 * @param {string} platform - Gaming plarform
 * @return {Object} - Result of api call
 */
const apiCall = async (path, query, platform) => {
    try {
        if(typeof query !== "string" || typeof platform !== "string") {
            throw ("Clubs id or the platform must be a string");
        }
        checkPlatform(platform);
        console.log(`${api}${path}?platform=${platform}&${query}`);
        const res = await fetch(`${api}${path}?platform=${platform}&${query}`, options);
        const data = await res.json();
        console.log(data);
    }
    catch (e) {
        console.log(e.message);
    }
}

/**
 * Cheack if platform exists 
 * @param {string} platform - Gaming platform
 * @return {void}
 */
const checkPlatform = (platform) => {
    switch (platform) {
        case "ps4":
            break;
        case "ps5":
            break;
        case "xbox-series-xs":
            break;
        case "xboxone":
            break;
        case "pc":
            break;
        default:
            throw 'Platform is undefined'
    }
}

export {apiCall}