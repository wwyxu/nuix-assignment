import { State as App } from './app';
import { State as Items } from './items';

export interface AppState {
    app: App;
    items: Items;
}
