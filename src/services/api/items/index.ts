import { baseUrl } from 'src/constants';
import axios, { AxiosResponse } from 'axios';
import { Api } from 'src/models';

const route = "items";

export default {
    get: (): Promise<AxiosResponse<Api.Image>> =>
        axios.get<Api.Image>(
            `${baseUrl}/${route}`
        ),
};
