import { Api } from "src/models";
import { convertItemsArrayToItemsTableArray, convertItemsArrayToItemsPropertiesArray } from "../items";

describe('convertItemsArrayToItemsTableArray', () => {
    const validInput: Api.ItemsArray = [
        {
            guid: '1', name: 'item1', path: ['folder', 'subfolder'], properties: undefined
        },
        { guid: '2', name: 'item2', path: ['root'], properties: undefined }
    ];

    it('converts valid items array to table array', () => {
        const result = convertItemsArrayToItemsTableArray(validInput);
        expect(result).toEqual([
            { guid: '1', name: 'item1', path: 'folder/subfolder' },
            { guid: '2', name: 'item2', path: 'root' }
        ]);
    });

    it('returns empty array for non-array input', () => {
        const result = convertItemsArrayToItemsTableArray({} as Api.ItemsArray);
        expect(result).toEqual([]);
    });

    it('returns empty array for invalid item structure', () => {
        const invalidInput = [{ guid: '1' }] as Api.ItemsArray;
        const result = convertItemsArrayToItemsTableArray(invalidInput);
        expect(result).toEqual([]);
    });
});

describe('convertItemsArrayToItemsPropertiesArray', () => {
    const validInput: Api.ItemsArray = [
        {
            properties: { key: 'value1' },
            guid: "",
            name: "",
            path: []
        },
        {
            properties: { key: 'value2' },
            guid: "",
            name: "",
            path: []
        }
    ];

    it('extracts properties from valid items array', () => {
        const result = convertItemsArrayToItemsPropertiesArray(validInput);
        expect(result).toEqual([
            { key: 'value1' },
            { key: 'value2' }
        ]);
    });

    it('returns empty array for non-array input', () => {
        const result = convertItemsArrayToItemsPropertiesArray({} as Api.ItemsArray);
        expect(result).toEqual([]);
    });

    it('returns empty array when items lack properties', () => {
        const invalidInput = [{}] as Api.ItemsArray;
        const result = convertItemsArrayToItemsPropertiesArray(invalidInput);
        expect(result).toEqual([]);
    });
});
