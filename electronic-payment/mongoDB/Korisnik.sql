export interface Korisnik {
    id: number,
    ime_prezime: string,
    grad: string,
    adresa: string,
    stan: string,
    pin: string,
    novac: number
};

export const korisnici = [
    {
        "id": 1,
        "ime_prezime": "Petar Petrovic",
        "grad": "Beograd",
        "adresa": "Nehurova 15",
        "stan": 1,
        "pin": "1234",
        "novac": 21868.63
    },


    {
        "id": 2,
        "ime_prezime": "Tijana Tijanic",
        "grad": "Nis",
        "adresa": "Beogradska 72",
        "stan": 3,
        "pin": "4321",
        "novac": 12000
    },

    {
        "id": 4,
        "ime_prezime": "Bil Gejts",
        "grad": "Beograd",
        "adresa": "BW St. Regis 1",
        "stan": 9000,
        "pin": "2455",
        "novac": 500000000000000
    },

    {
        "id": 5,
        "ime_prezime": "Niko Nikic",
        "grad": "Novi Sad",
        "adresa": "Nema ulice",
        "stan": 0,
        "pin": "0000",
        "novac": 150
    }
];