import { baseUrl } from 'src/constants';
import axios, { AxiosResponse } from 'axios';
import { Api } from 'src/models';

const route = "image";

export default {
    get: (imageName: String): Promise<AxiosResponse<Api.Image>> =>
        axios.get<Api.Image>(
            `${baseUrl}/${route}/${imageName}`, {
            responseType: "arraybuffer"
        }
        ),
};
