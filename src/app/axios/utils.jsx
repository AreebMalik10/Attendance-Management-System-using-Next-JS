import axios from "axios";

export async function request(method, url, data = {}, params = {}, headers = {}){
    try {
        const response = await axios({
            method, 
            url, 
            data,
            params,
            headers
        });
        return response?.data;
    } catch(error) {
        throw error;
    }
}

export async function get (url, params = {}, headers = {}) {
    return await request('get', url, {}, params, headers);
}

//post 
export async function post(url, data = {}, params = {}, headers = {}){
    return await request('post', url, data, params, headers);
}

//put
export async function put(url, data = {}, params = {}, headers = {}) {
    return await request('put', url, data, params, headers);
}

//delete
export async function del(url, params = {}, headers = {}) {
    return await request('delete', url, {}, params, headers);
}