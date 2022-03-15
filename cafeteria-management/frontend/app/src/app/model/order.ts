import { Item } from "./item";

export class Order {
    id: number;
    aktivna: boolean;
    narucio: string;
    datum: string;
    stavke: Array<Item>;

}

