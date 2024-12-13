import AxiosDefault from '../../../services/AxiosDefault'; // Assuming AxiosDefault is your axios instance

// signin API
export const PostSignin = async (data) => {
    const response = await AxiosDefault({
        url: "/api/v1/admin/login",
        method: "POST",
        data: data,
        contentType: "application/json",
    });
    return response.data; // Returning the response data
};


export const GetJsonData = async (data) => {
    const response = await AxiosDefault({
        url: "/posts",
        method: "get",
        contentType: "application/json",
    });
    console.log(response, 'response')
    return response.data; // Returning the response data

};