export declare namespace API {
    interface ItemBaseProperties {
        [key: string]: string | number;
    }

    interface ItemPropertiesFirstType extends ItemBaseProperties {
        propString: string;
        propNumber: number;
        date: string;
    }

    interface ItemPropertiesSecondType extends ItemBaseProperties {
        [key: string]: string;
    }

    interface Item {
        guid: string;
        name: string;
        path: string[];
        properties: ItemPropertiesFirstType | ItemPropertiesSecondType;
    }

    type ItemArray = Item[];
    type Image = any;
}
