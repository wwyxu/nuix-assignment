import { baseUrl } from 'src/constants';
import axios, { AxiosResponse } from 'axios';
import { Models } from 'src/models';

const route = "image";

export default {
    get: (imageName: String): Promise<AxiosResponse<Models.Image>> =>
        axios.get<Models.Image>(
            `${baseUrl}/${route}/${imageName}`
        ),
};