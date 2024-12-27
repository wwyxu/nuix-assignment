import { baseUrl } from 'src/constants';
import axios, { AxiosResponse } from 'axios';
import { Models } from 'src/models';

const route = "items";

export default {
    get: (): Promise<AxiosResponse<Models.Image>> =>
        axios.get<Models.Image>(
            `${baseUrl}/${route}`
        ),
};