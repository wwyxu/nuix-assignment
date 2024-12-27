import API from '../index';

describe('Items API', () => {
    it('should get items without errors', async () => {
        expect.hasAssertions();

        const response = await API.items.get();

        expect(response.status).toBe(200);
        expect(response.data).toBeDefined();
        expect(Array.isArray(response.data)).toBe(true);

        // Test first item structure
        const firstItem = response.data[0];
        expect(firstItem).toHaveProperty('guid');
        expect(firstItem).toHaveProperty('name');
        expect(firstItem).toHaveProperty('path');
        expect(firstItem).toHaveProperty('properties');
    });
});

export { };
