//import { environment } from "src/environments/environment";

const BASE_URL ='http://localhost:5000';

export const ITEMS_URL = BASE_URL + '/api/item';

export const ITEMS_BY_SEARCH_URL = ITEMS_URL + '/search/';

export const ITEMS_BY_ID_URL = ITEMS_URL + '/';


export const USER_LOGIN_URL = BASE_URL + '/api/user/login';

export const USER_REGISTER_URL = BASE_URL + '/api/user/register';

export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_NEW_FOR_CURRENT_USER_URL = ORDERS_URL + '/newOrderForCurrentUser';
export const ORDER_PAY_URL = ORDERS_URL + '/pay';
export const ORDER_TRACK_URL = ORDERS_URL + '/track/';
