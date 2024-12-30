import { ItemDetailsTabValue } from "src/constants";
import { Api, Models } from "src/models";

export const convertItemsArrayToItemsTableArray = (items: Api.ItemsArray): Models.ItemsTableArray => {
    try {
        if (!Array.isArray(items)) {
            throw new Error('Input must be an array');
        }

        return items.map(item => {
            if (!item.guid || !item.name || !Array.isArray(item.path)) {
                throw new Error('Invalid item structure');
            }

            return {
                guid: item.guid,
                name: item.name,
                path: item.path.join('/'),
            };
        });
    } catch (error) {
        console.error('Error converting items array:', error);
        return [];
    }
}

export const convertItemsArrayToItemsPropertiesArray = (items: Api.ItemsArray): Models.ItemsPropertiesArray => {
    try {
        if (!Array.isArray(items)) {
            throw new Error('Input must be an array');
        }

        return items.map(item => {
            if (!item.properties) {
                throw new Error('Item missing properties');
            }

            return item.properties;
        });
    } catch (error) {
        console.error('Error converting items to properties:', error);
        return [];
    }
}

export const updateSelectedItemTabs = (
    currentTabs: Models.SelectedItemTabs,
    itemGuid: string,
): Models.SelectedItemTabs => {
    if (!currentTabs[itemGuid]) {
        return {
            ...currentTabs,
            [itemGuid]: ItemDetailsTabValue.Properties
        };
    }

    return currentTabs;
}
