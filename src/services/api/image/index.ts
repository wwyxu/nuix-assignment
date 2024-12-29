import { baseUrl } from 'src/constants';
import axios, { AxiosResponse } from 'axios';
import { API } from 'src/models';

const route = "image";

export default {
    get: (imageName: String): Promise<AxiosResponse<API.Image>> =>
        axios.get<API.Image>(
            `${baseUrl}/${route}/${imageName}`
        ),
};