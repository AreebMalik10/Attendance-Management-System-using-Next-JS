import { API_ROUTE_TEACHERS_GET } from "./constant";
import { get, post, put, del } from "./utils";

export const getTeachersApi = () => {
    return get(API_ROUTE_TEACHERS_GET, {}, {});
}