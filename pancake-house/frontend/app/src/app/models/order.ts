import { Additionals } from "./additionals";

export class Order {
    idN: number;
    proizvod: string;
    kupac: string;
    dodaci: Array<Additionals>
    datum: string;
    status: string;
    ime: string;
    prezime: string;
}