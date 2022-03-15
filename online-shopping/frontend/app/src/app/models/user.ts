import { Product } from "./product";

export class User {
    kor_ime: string;
    lozinka: string;
    ime: string;
    prezime: string;
    mejl: string;
    tip: string;
    proizvodi: Array<Product>
}