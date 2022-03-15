import { Comments } from "./comment";

export class Product {
    naziv: string;
    kolicina: number;
    komentari: Array<Comments>;
    buyProduct: boolean;
}