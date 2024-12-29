import { baseUrl } from 'src/constants';
import axios, { AxiosResponse } from 'axios';
import { API } from 'src/models';

const route = "items";

export default {
    get: (): Promise<AxiosResponse<API.Image>> =>
        axios.get<API.Image>(
            `${baseUrl}/${route}`
        ),
};