export const baseUrl = 'http://localhost:8080';

export enum ItemDetailsTabValue {
    Properties = 'Properties',
    Image = 'Image',
}

export const ItemDetailsTab = [{ label: ItemDetailsTabValue.Properties, value: ItemDetailsTabValue.Properties }, { label: ItemDetailsTabValue.Image, value: ItemDetailsTabValue.Image }];

enum ItemTableHeaderValue {
    GUID = 'GUID',
    Name = 'Name',
    Path = 'Path'
}

export const itemsTableHeader = [ItemTableHeaderValue.GUID, ItemTableHeaderValue.Name, ItemTableHeaderValue.Path];
