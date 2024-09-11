export const API_BASE_URL = "http://localhost:3001/";

export const API_POST_USER = API_BASE_URL + "auth/register"

export const API_POST_LOG_USER = API_BASE_URL + "auth/login"

export const API_GET_PARTIES = API_BASE_URL + "parties";
export const API_POST_PARTY = API_BASE_URL + "parties";
export const API_PUT_PARTY = API_BASE_URL + "parties";
export const API_DELETE_PARTY = API_BASE_URL + "parties";

//export const API_PUT_PARTY = (id) => API_BASE_URL + "parties/" + id;


export const API_GET_PARTY = (id) => API_BASE_URL + "parties/" + id;
export const API_GET_USER_ID = API_BASE_URL + "auth/user"