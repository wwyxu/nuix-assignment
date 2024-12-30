import { ItemDetailsTabValue } from "src/constants";

export declare namespace Models {
    interface SelectedItemTabs {
        [key: string]: ItemDetailsTabValue;
    }

    interface ItemsTable {
        guid: string;
        name: string;
        path: string;
    }

    type ItemsTableArray = ItemsTable[];

    type ItemProperties = Record<string, string | number>;
    type ItemsPropertiesArray = ItemProperties[];

    type ItemTabValue = ItemDetailsTabValue.Properties | ItemDetailsTabValue.Image;
}
