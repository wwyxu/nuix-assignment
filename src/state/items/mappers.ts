import { ItemDetailsTabValue } from "src/constants";
import { Models } from "src/models";

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
