import API from '../index';
import { AxiosError } from 'axios';

describe('Image API', () => {
    it('should get image without errors', async () => {
        expect.hasAssertions();

        const response = await API.image.get("guid1");

        expect(response.status).toBe(200);
    });

    it('should handle nonexistent file with 404 error', async () => {
        expect.hasAssertions();
    
        try {
            await API.image.get("RANDOM_NONEXISTENT_FILE");
            fail('Expected request to fail with 404');
        } catch (error) {
            if (error) {
                const axiosError = error as AxiosError;
                expect(axiosError.response!.status).toBe(404);
            } else {
                throw error;
            }
        }
    });
});
